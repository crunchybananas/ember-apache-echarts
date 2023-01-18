import merge from 'lodash/merge';
import transform from 'lodash/transform';
import { registerDestructor } from '@ember/destroyable';
import Modifier from 'ember-modifier';
import * as echarts from 'echarts';
import getUniqueDatasetValues from '../utils/data/get-unique-dataset-values';
import computeInnerBox from '../utils/layout/compute-inner-box';
import computeMaxTextMetrics from '../utils/layout/compute-max-text-metrics';
import computeTextHeight from '../utils/layout/compute-text-height';
import computeTextMetrics from '../utils/layout/compute-text-metrics';
import layoutCells from '../utils/layout/layout-cells';
import resolveStyle from '../utils/style/resolve-style';
import mergeAtPaths from '../utils/merge-at-paths';

// These should be composite properties so they can be overridden either by
// composite properties or individual constituent properties
const baseStyle = {
  border: '0px solid #000',
  font: 'bold 16px Montserrat,sans-serif',
  color: '#000',
  margin: 0,
  padding: 0,
};

// The index for the overlay layer
const Z_OVERLAY = 100;

export default class AbstractChartModifier extends Modifier {
  chart;
  resizeObserver;

  get defaultStyles() {
    return {
      chart: {},
      chartTitle: {
        font: 'bold 20px Montserrat,sans-serif',
        textAlign: 'center',
        margin: 24,
      },
      legend: {
        font: 'normal 16px Montserrat,sans-serif',
        textAlign: 'left',
        margin: 24,
      },
      xAxisZoom: {
        margin: 8,
        border: 'solid 1px #ddd',
        backgroundColor: '#e7efff',
      },
      yAxisZoom: {
        margin: 8,
        border: 'solid 1px #ddd',
        backgroundColor: '#e7efff',
      },
      cell: {
        padding: 8,
        margin: 8,
      },
      cellTitle: {
        font: 'bold 16px Montserrat,sans-serif',
        textAlign: 'left',
        margin: 8,
      },
      cellTextOverlay: {
        font: 'normal 16px Montserrat,sans-serif',
        textAlign: 'center',
        verticalAlign: 'middle',
        zIndex: Z_OVERLAY,
      },
    };
  }

  constructor(...args) {
    super(...args);

    registerDestructor(this, () => this.cleanup());

    if (this.constructor == AbstractChartModifier) {
      throw new Error(
        "AbstractChartModifier is abstract and can't be instantiated."
      );
    }
  }

  modify(element, [args], defaultArgs) {
    const chartArgs = { ...defaultArgs, ...args };

    if (!this.chart) {
      this.chart = this.createChart(element, chartArgs);
    }

    this.configureChart(chartArgs, this.chart, element);
  }

  configureChart(/* args, chart, element */) {
    throw new Error(
      '`configureChart` needs to be overridden. No implementation exists.'
    );
  }

  createChart(element, chartArgs) {
    const chart = echarts.init(element, null, { renderer: 'canvas' });

    // Add a `handle` method that ensures only one event listener can be
    // attached at the same time. This prevents mistakes when coding new charts
    // of forgetting to `off` an event during a reconfigure and then having
    // multiple handlers attached to the chart.
    chart.handle = (eventName, ...args) => {
      chart.off(eventName);
      chart.on(eventName, ...args);
    };

    // Resize the chart whenever the containing element resizes
    let firstResize = true;

    this.resizeObserver = new ResizeObserver(() => {
      if (!firstResize) {
        chart.resize();
        this.configureChart(chartArgs, chart, element);
      }

      firstResize = false;
    });

    this.resizeObserver.observe(element);

    return chart;
  }

  /**
   * Builds a basic layout for this chart, returning the `context` and `config`
   * that can be used to extend the layout further.
   *
   * ECharts does not provide a layout engine, forcing chart configs to arrange
   * components at exact components. This layout method uses the concept of a
   * mutual `layout` info object that allows different components to dynamically
   * calculate their size and position based on how other components are laid
   * out.
   */
  buildLayout(args, chart) {
    const config = {};
    const context = this.createContext(args, chart);

    // These must be called in the order from outsidemost layout to innermost
    context.layout = this.addChartBox(context, config);
    context.layout = this.addTitle(context, config);
    context.layout = this.addLegend(context, config);
    context.layout = this.addDataZoom(context, config);
    context.layout = this.addCellBoxes(context, config);
    context.layout = this.addCellTitles(context, config);
    context.layout = this.addCellPlots(context, config);
    context.layout = this.addCellTextOverlays(context, config);

    return {
      context,
      config,
    };
  }

  cleanup() {
    this.resizeObserver.disconnect();
    this.chart.dispose();
  }

  // ---------------------------------------------------------------------------
  // LAYOUT METHODS
  // ---------------------------------------------------------------------------
  /**
   * Creates the context used when laying out elements on this chart.
   */
  createContext(args, chart) {
    const layout = {
      chartWidth: chart.getWidth(),
      chartHeight: chart.getHeight(),
      width: chart.getWidth(),
      height: chart.getHeight(),
      x: 0,
      y: 0,
    };
    const styles = transform(
      Object.keys(this.defaultStyles),
      (styles, type) =>
        (styles[type] = {
          ...baseStyle,
          ...this.defaultStyles[type],
          ...args[`${type}Style`],
        }),
      {}
    );

    return {
      layout,
      args,
      chart,
      styles,
      data: this.createContextData(args, chart),
    };
  }

  /**
   * Generates the `data` section of the context used to construct this chart.
   */
  createContextData(args /*, chart */) {
    const series = args.series ?? [{ data: args.data }];

    return {
      series,
    };
  }

  /**
   * Add the border and background of the chart.
   */
  addChartBox(context, config) {
    const style = resolveStyle(context.styles.chart, context.layout);

    mergeAtPaths(
      config,
      this.generateBoxConfig({
        ...style,
        ...context.layout,
      })
    );

    return {
      ...context.layout,
      ...computeInnerBox(context.layout, style),
    };
  }

  /**
   * Adds the title to `config` if defined in `args` and returns the new
   * context.
   */
  addTitle(context, config) {
    const { title } = context.args;

    if (!title) {
      return context.layout;
    }

    const style = resolveStyle(context.styles.chartTitle, context.layout);

    mergeAtPaths(config, [
      this.generateTitleConfig(title, context.layout, style),
    ]);

    const textHeight = computeTextHeight(style);

    return {
      ...context.layout,
      height: context.layout.height - textHeight,
      y: context.layout.y + textHeight,
    };
  }

  /**
   * Adds the legend to `config` if defined in `args` and returns the new
   * context.
   */
  addLegend(context, config) {
    const { legend } = context.args;

    if (!legend || legend === 'none') {
      return context.layout;
    }

    const style = resolveStyle(context.styles.legend, context.layout);

    mergeAtPaths(config, [
      this.generateLegendConfig(
        context.data.series,
        context.args,
        context.layout,
        style
      ),
    ]);

    const legendMetrics = this.computeLegendMetrics(context, config, style);
    const newLayout = { ...context.layout };

    if (legend.startsWith('top') || legend.startsWith('bottom')) {
      newLayout.height -= legendMetrics.height;

      if (legend.startsWith('top')) {
        newLayout.y += legendMetrics.height;
      }
    } else {
      newLayout.width -= legendMetrics.width;

      if (legend.startsWith('left')) {
        newLayout.x += legendMetrics.width;
      }
    }

    return newLayout;
  }

  /**
   * Adds the data zoom slider to `config` if defined in `args` and returns the
   * new context.
   */
  addDataZoom(context, config) {
    const { args, layout, styles } = context;
    const { xAxisZoom, yAxisZoom } = args;

    if (
      (!xAxisZoom || xAxisZoom === 'none') &&
      (!yAxisZoom || yAxisZoom === 'none')
    ) {
      return context.layout;
    }

    const xAxisZoomStyle = resolveStyle(styles.xAxisZoom, layout);
    const yAxisZoomStyle = resolveStyle(styles.yAxisZoom, layout);

    mergeAtPaths(config, [
      this.generateXAxisDataZoomConfig(args, layout, xAxisZoomStyle),
      this.generateYAxisDataZoomConfig(args, layout, yAxisZoomStyle),
    ]);

    const newLayout = { ...layout };
    const { xAxisZoomBrush, yAxisZoomBrush } = args;

    if (xAxisZoom) {
      const sliderHeight = config.dataZoom[0].height ?? 30;
      const brushSelectHeight = xAxisZoomBrush ? 7 : 0;
      const xAxisZoomHeight =
        sliderHeight +
        brushSelectHeight +
        xAxisZoomStyle.marginTop +
        xAxisZoomStyle.marginBottom;

      newLayout.height = layout.height - xAxisZoomHeight;
      newLayout.y = layout.y + (xAxisZoom === 'top' ? xAxisZoomHeight : 0);
    }

    if (yAxisZoom) {
      const yAxisConfig = xAxisZoom ? config.dataZoom[1] : config.dataZoom[0];
      const sliderWidth = yAxisConfig.height ?? 30;
      const brushSelectWidth = yAxisZoomBrush ? 7 : 0;
      const yAxisZoomWidth =
        sliderWidth +
        brushSelectWidth +
        yAxisZoomStyle.marginLeft +
        yAxisZoomStyle.marginRight;

      newLayout.width = layout.width - yAxisZoomWidth;
      newLayout.x = layout.x + (yAxisZoom === 'left' ? yAxisZoomWidth : 0);
    }

    return newLayout;
  }

  /**
   * Add the border and background of the cells.
   */
  addCellBoxes(context, config) {
    mergeAtPaths(
      config,
      layoutCells(context, context.data.series, (info, cell) =>
        this.generateBoxConfig(cell)
      )
    );

    return context.layout;
  }

  /**
   * Add the titles to individual cells.
   */
  addCellTitles(context, config) {
    const series = context.data.series;

    if (series.length === 1 && !series[0].label && !series[0].name) {
      return context.layout;
    }

    const style = resolveStyle(context.styles.cellTitle, context.layout);

    mergeAtPaths(
      config,
      layoutCells(context, context.data.series, (info, cell) =>
        this.generateTitleConfig(
          info.label ?? info.name,
          {
            ...context.layout,
            width: cell.width,
            height: cell.height,
            x: cell.innerX,
            y: cell.innerY,
          },
          style
        )
      )
    );

    const textHeight =
      computeTextHeight(style) + style.marginTop + style.marginBottom;

    return {
      ...context.layout,
      height: context.layout.height - textHeight,
      y: context.layout.y + textHeight,
    };
  }

  /**
   * Add the plots to individual cells.
   */
  addCellPlots(context, config) {
    // Ensure when using the `grid` config, the correct index is specified. This
    // differs from `context.index` when a cell has no data (and so, no grid)
    let gridIndex = 0;

    mergeAtPaths(
      config,
      layoutCells(context, context.data.series, (info, cell) => {
        const config = this.generatePlotConfig(info, cell, context, gridIndex);

        if (config) {
          gridIndex++;
        }

        return config;
      })
    );

    return context.layout;
  }

  /**
   * Add any cell overlays on top of the chart.
   */
  addCellTextOverlays(context, config) {
    if (!this.generateTextOverlayConfig) {
      return context.layout;
    }

    const style = resolveStyle(context.styles.cellTextOverlay, context.layout);

    mergeAtPaths(
      config,
      layoutCells(context, context.data.series, (info, cell) =>
        this.generateTextOverlayConfig(info, context.args, cell, style)
      )
    );

    return context.layout;
  }

  /**
   * Returns the labels for the legend.
   */
  getLegendLabels(series, args) {
    return getUniqueDatasetValues(series, args.categoryProperty ?? 'name');
  }

  /**
   * Returns the orientation of the legend as either `horizontal` or `vertical`.
   */
  getLegendOrientation(args) {
    const { legend, legendOrientation } = args;

    return !['horizontal', 'vertical'].includes(legendOrientation)
      ? legend.startsWith('top') || legend.startsWith('bottom')
        ? 'horizontal'
        : 'vertical'
      : legendOrientation;
  }

  /**
   * Generates the configuration for the background and border of a box element.
   */
  generateBoxConfig(box) {
    return {
      'graphic.elements': [
        {
          type: 'rect',
          top: box.y + box.marginTop,
          left: box.x + box.marginLeft,
          shape: {
            // The stroke is drawn on the outside of the width and height for the
            // bottom and right sides, so we need to make the box smaller to make it
            // appear as if it's drawing on the inside
            width:
              box.width -
              box.marginLeft -
              box.marginRight -
              box.borderLeftWidth -
              box.borderRightWidth,
            height:
              box.height -
              box.marginTop -
              box.marginBottom -
              box.borderTopWidth -
              box.borderBottomWidth,
          },
          style: {
            // `fill` can be missing, but cannot be not be `undefined` or the box
            // will render a few pixels to the right and down [twl 2.Jun.22]
            fill: box.backgroundColor ?? '#fff0',
            // Safari only parses contituent values, so use "top" as a proxy for all
            stroke: box.borderTopColor,
            lineWidth: box.borderTopWidth ?? 0,
          },
          silent: true,
        },
      ],
    };
  }

  /**
   * Generates the configuration for a title element.
   */
  generateTitleConfig(text, layout, style) {
    const config = {
      text,
      top: layout.y + style.marginTop,
      backgroundColor: style.backgroundColor,
      // Safari only parses contituent values, so use "top" as a proxy for all
      borderWidth: style.borderTopWidth,
      borderColor: style.borderTopColor,
      borderRadius: style.borderRadius,
      padding: [
        style.paddingTop,
        style.paddingRight,
        style.paddingBottom,
        style.paddingLeft,
      ],
      textStyle: {
        color: style.color,
        fontStyle: style.fontStyle,
        fontWeight: style.fontWeight,
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
      },
    };

    switch (style.textAlign) {
      case 'center':
        merge(config, {
          left: layout.x + layout.width / 2,
          textAlign: 'center',
        });
        break;

      case 'right':
        merge(config, {
          right:
            layout.chartWidth - (layout.x + layout.width) + style.marginRight,
        });
        break;

      default:
        merge(config, {
          left: layout.x + style.marginLeft,
        });
        break;
    }

    return {
      title: [config],
    };
  }

  /**
   * Generates the configuration for a legend element.
   */
  generateLegendConfig(series, args, layout, style) {
    const { legend = 'topCenter' } = args;
    const isVertical = this.getLegendOrientation(args) === 'vertical';
    const config = {
      legend: {
        type: 'scroll',
        data: this.getLegendLabels(series, args).map((label) => ({
          name: label,
          icon: 'circle',
          itemStyle: {
            color: args?.colorMap?.[label],
          },
        })),
        itemGap: isVertical ? 15 : 40,
        align: style.textAlign ?? 'left',
        width: layout.width,
        orient: isVertical ? 'vertical' : 'horizontal',
        backgroundColor: style.backgroundColor,
        // Safari only parses contituent values, so use "top" as a proxy for all
        borderWidth: style.borderTopWidth,
        borderColor: style.borderTopColor,
        borderRadius: style.borderRadius,
        padding: [
          style.paddingTop,
          style.paddingRight,
          style.paddingBottom,
          style.paddingLeft,
        ],
        textStyle: {
          color: style.color,
          fontStyle: style.fontStyle,
          fontWeight: style.fontWeight,
          fontFamily: style.fontFamily,
          fontSize: style.fontSize,
        },
      },
    };

    let xLayout, yLayout;

    if (legend.startsWith('top') || legend.endsWith('Top')) {
      yLayout = {
        top: layout.y + style.marginTop + style.borderTopWidth / 2,
      };
    } else if (legend.startsWith('bottom') || legend.endsWith('Bottom')) {
      // NOTE: Not sure why I need the +1, but if it's missing and the legend
      //       has a border, it overlaps the chart border. [twl 2.Nov.22]
      yLayout = {
        bottom:
          layout.chartHeight -
          layout.height -
          layout.y +
          1 +
          style.marginBottom +
          style.borderBottomWidth / 2,
      };
    } else {
      // NOTE: Technically this positions the legend in the vertical center of
      //       the full chart, rather than the remaining `height` in `layout`.
      //       However, since positioning it correctly requires calculating the
      //       rendered height of the legend, which is non-trivial, and we're
      //       not currently using this option, I'm using this approximation
      //       instead. [twl 2.Nov.22]
      yLayout = {
        top: 'middle',
      };
    }

    if (legend.startsWith('left') || legend.endsWith('Left')) {
      xLayout = {
        left: layout.x + style.marginLeft + style.borderLeftWidth / 2,
      };
    } else if (legend.startsWith('right') || legend.endsWith('Right')) {
      // NOTE: Not sure why I need the +1, but if it's missing and the legend
      //       has a border, it overlaps the chart border. [twl 2.Nov.22]
      xLayout = {
        right:
          layout.chartWidth -
          layout.width -
          layout.x +
          1 +
          style.marginRight +
          style.borderRightWidth / 2,
      };
    } else {
      xLayout = {
        left: 'center',
      };
    }

    merge(config.legend, {
      ...xLayout,
      ...yLayout,
    });

    return config;
  }

  /**
   * Generates the configuration for the control that allows a user to zoom in
   * and out of the data.
   */
  generateXAxisDataZoomConfig(args, layout, style) {
    const { xAxisZoom, xAxisZoomBrush } = args;

    if (!xAxisZoom) {
      return undefined;
    }

    const config = this.generateDataZoomConfigElement(style, xAxisZoomBrush);
    const brushSelectHeight = xAxisZoomBrush ? 7 : 0;

    if (xAxisZoom === 'top') {
      config.top = layout.y + style.marginTop + style.borderTopWidth / 2;
    } else {
      config.bottom =
        layout.chartHeight -
        layout.height -
        layout.y +
        brushSelectHeight +
        style.marginBottom +
        style.borderBottomWidth / 2;
    }

    return {
      dataZoom: [
        {
          ...config,
          xAxisIndex: [0, 1],
        },
        // TODO: Add support for mouse zooming by adding this in. When we do
        //       this, the index in `addDataZoom` for the Y axis will need to
        //       be changed. Also, we should have a way to disable it or turn it
        //       on explicitly, since it can be jerky on some charts (which is
        //       why I'm not implementing it now). [twl 16.Nov.22]
        // {
        //   type: 'inside',
        //   start: 0,
        //   end: 100,
        //   xAxisIndex: [0, 1],
        // },
      ],
    };
  }

  /**
   * Generates the configuration for the control that allows a user to zoom in
   * and out of the data.
   */
  generateYAxisDataZoomConfig(args, layout, style) {
    const { yAxisZoom, yAxisZoomBrush } = args;

    if (!yAxisZoom) {
      return undefined;
    }

    const config = this.generateDataZoomConfigElement(style, yAxisZoomBrush);
    const brushSelectWidth = yAxisZoomBrush ? 7 : 0;

    if (yAxisZoom === 'left') {
      config.left = layout.x + style.marginLeft + style.borderLeftWidth / 2;
    } else {
      config.right =
        layout.chartWidth -
        layout.width -
        layout.x +
        brushSelectWidth +
        style.marginRight +
        style.borderRightWidth / 2;
    }

    return {
      dataZoom: [
        {
          ...config,
          yAxisIndex: [0, 1],
        },
        // TODO: See the note in `generateXAxisDataZoomConfig` [twl 16.Nov.22]
        // {
        //   type: 'inside',
        //   start: 0,
        //   end: 100,
        //   yAxisIndex: [0, 1],
        // },
      ],
    };
  }

  /**
   * Generates the base configuration for a single element in the `dataZoom`
   * configuration.
   */
  generateDataZoomConfigElement(style, brushSelect) {
    return {
      type: 'slider',
      brushSelect,
      borderColor: style.borderTopColor,
      show: true,
      start: 0,
      end: 100,
    };
  }

  /**
   * Generates the configuration for a text element.
   */
  generateTextConfig(text, layout, style) {
    const metrics = computeTextMetrics(text, style);
    const config = {
      type: 'text',
      style: {
        font: `${style.fontStyle} ${style.fontWeight} ${style.fontSize}px ${style.fontFamily}`,
        fill: style.color,
        text,
      },
      silent: true,
      z: style.zIndex,
      // TODO: Support these properties by allowing multiple graphics objects to
      //       be returned from this method and then returning both a `text` and
      //       a `rect` element. [twl 7.Jun.22]
      //
      // backgroundColor: style.backgroundColor,
      // // Safari only parses contituent values, so use "top" as a proxy for all
      // borderWidth: style.borderTopWidth,
      // borderColor: style.borderTopColor,
      // borderRadius: style.borderRadius,
      // padding: [
      //   style.paddingTop,
      //   style.paddingRight,
      //   style.paddingBottom,
      //   style.paddingLeft,
      // ],
    };

    switch (style.textAlign) {
      case 'center':
        merge(config, {
          left: layout.x + layout.width / 2 - metrics.width / 2,
        });
        break;

      case 'right':
        merge(config, {
          right:
            layout.chartWidth - (layout.x + layout.width) + style.marginRight,
        });
        break;

      default:
        merge(config, {
          left: layout.x + style.marginLeft,
        });
        break;
    }

    switch (style.verticalAlign) {
      case 'middle':
        merge(config, {
          top: layout.y + layout.height / 2 - metrics.height / 2,
        });
        break;

      case 'bottom':
        merge(config, {
          bottom: layout.y + layout.height - style.marginBottom,
        });
        break;

      default:
        merge(config, {
          top: layout.y + style.marginTop,
        });
        break;
    }

    return {
      'graphic.elements': [config],
    };
  }

  /**
   * Computes the width and height of the legend, after the legend has been
   * added into the `config` using the compiled legend `style`.
   */
  computeLegendMetrics(context, config, style) {
    const { layout, data, args } = context;
    const labels = this.getLegendLabels(data.series, args);
    const orientation = this.getLegendOrientation(args);
    // hardcoded values are the defaults for `itemWidth` and `itemGap`
    const markerWidth = config.legend.itemWidth ?? 25;
    const itemGap = config.legend.itemGap ?? 10;
    // Divide by 2 on border, since it appears to be drawn at the end of the
    // legend rather than inside or outside the legend
    const metrics = {
      width:
        style.paddingLeft +
        style.paddingRight +
        style.borderLeftWidth / 2 +
        style.borderRightWidth / 2 +
        style.marginLeft +
        style.marginRight,
      height:
        style.paddingTop +
        style.paddingBottom +
        style.borderTopWidth / 2 +
        style.borderBottomWidth / 2 +
        style.marginTop +
        style.marginBottom,
    };

    if (orientation === 'horizontal') {
      const labelMetrics = labels.reduce(
        (result, label) => {
          const textMetrics = computeTextMetrics(label, style);

          result.width += markerWidth + textMetrics.width;
          result.height = Math.max(result.height, textMetrics.height);

          return result;
        },
        { width: 0, height: 0 }
      );

      metrics.width = Math.min(
        layout.width,
        metrics.width + labelMetrics.width + itemGap * (labels.length - 1)
      );
      metrics.height = metrics.height + labelMetrics.height;
    } else {
      const labelMetrics = computeMaxTextMetrics(labels, style, layout.width);

      metrics.width = metrics.width + markerWidth + labelMetrics.width;
      metrics.height =
        metrics.height +
        labelMetrics.height * labels.length +
        itemGap * (labels.length - 1);
    }

    return metrics;
  }
}

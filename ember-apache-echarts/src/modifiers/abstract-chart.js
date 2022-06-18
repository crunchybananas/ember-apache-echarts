import * as echarts from 'echarts';
import computeInnerBox from '../utils/layout/compute-inner-box';
import computeTextHeight from '../utils/layout/compute-text-height';
import computeTextMetrics from '../utils/layout/compute-text-metrics';
import layoutCells from '../utils/layout/layout-cells';
import merge from 'lodash/merge';
import mergeAt from '../utils/merge-at';
import resolveStyle from '../utils/style/resolve-style';
import transform from 'lodash/transform';
import { registerDestructor } from '@ember/destroyable';

// These should be composite properties so they can be overridden either by
// composite properties or individual constituent properties
const baseStyle = {
  border: '0px solid #000',
  font: 'bold 16px Montserrat',
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
        font: 'bold 20px Montserrat',
        textAlign: 'center',
        margin: 24,
      },
      cell: {
        padding: 8,
        margin: 8,
      },
      cellTitle: {
        font: 'bold 16px Montserrat',
        textAlign: 'left',
        margin: 12,
      },
      cellTextOverlay: {
        font: 'normal 16px Montserrat',
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
        (styles[type] = resolveStyle(
          {
            ...baseStyle,
            ...this.defaultStyles[type],
            ...args[`${type}Style`],
          },
          layout
        )),
      {}
    );
    const series = args.series ?? [{ data: args.data }];

    return {
      layout,
      args,
      chart,
      styles,
      series,
    };
  }

  /**
   * Add the border and background of the chart.
   */
  addChartBox(context, config) {
    mergeAt(config, 'graphic.elements', [
      this.generateBoxConfig({
        ...context.styles.chart,
        ...context.layout,
      }),
    ]);

    return {
      ...context.layout,
      ...computeInnerBox(context.layout, context.styles.chart),
    };
  }

  /**
   * Adds the title to `config` if defined in `args` and returns the new
   * context.
   */
  addTitle(context, config) {
    const { title } = context.args;
    const style = context.styles.chartTitle;

    if (!title) {
      return context.layout;
    }

    mergeAt(config, 'title', [
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
   * Add the border and background of the cells.
   */
  addCellBoxes(context, config) {
    mergeAt(
      config,
      'graphic.elements',
      layoutCells(context, context.series, (info, cell) =>
        this.generateBoxConfig(cell)
      )
    );

    return context.layout;
  }

  /**
   * Add the titles to individual cells.
   */
  addCellTitles(context, config) {
    const series = context.series;

    if (series.length === 1 && !series[0].label && !series[0].name) {
      return context.layout;
    }

    const style = resolveStyle(context.styles.cellTitle, context.layout);

    mergeAt(
      config,
      'title',
      layoutCells(context, context.series, (info, cell) =>
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

    const textHeight = computeTextHeight(style);

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
    const style = resolveStyle(context.styles.cellTitle, context.layout);

    mergeAt(
      config,
      'series',
      layoutCells(context, context.series, (info, cell) =>
        this.generatePlotConfig(info, context.args, cell, style)
      )
    );

    return context.layout;
  }

  /**
   * Add any cell overlays on top of the chart.
   */
  addCellTextOverlays(context, config) {
    if (!this.generateTextOverlayConfig) {
      return;
    }

    const style = resolveStyle(context.styles.cellTextOverlay, context.layout);

    mergeAt(
      config,
      'graphic.elements',
      layoutCells(context, context.series, (info, cell) =>
        this.generateTextOverlayConfig(info, context.args, cell, style)
      )
    );

    return context.layout;
  }

  /**
   * Generates the configuration for the background and border of a box element.
   */
  generateBoxConfig(box) {
    return {
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
        fill: box.backgroundColor ?? '#fff',
        // Safari only parses contituent values, so use "top" as a proxy for all
        stroke: box.borderTopColor,
        lineWidth: box.borderTopWidth ?? 0,
      },
      silent: true,
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

    return config;
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

    return config;
  }
}

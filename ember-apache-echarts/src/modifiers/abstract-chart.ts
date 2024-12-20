// @ts-expect-error: follow up on this
import { merge } from 'lodash-es';
// @ts-expect-error: follow up on this
import { transform } from 'lodash-es';
import { registerDestructor } from '@ember/destroyable';
import Modifier from 'ember-modifier';
import { init, type EChartsCoreOption, type EChartsType, use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { TitleComponent, type TitleComponentOption } from 'echarts/components';
import { LegendComponent, type LegendComponentOption } from 'echarts/components';
import { GridComponent, type GridComponentOption } from 'echarts/components';
import { TooltipComponent, type TooltipComponentOption } from 'echarts/components';
import { DataZoomComponent, type DataZoomComponentOption } from 'echarts/components';
import { GraphicComponent } from 'echarts/components';
import { LineChart, type LineSeriesOption } from 'echarts/charts';
import { BarChart, type BarSeriesOption } from 'echarts/charts';
import { PieChart, type PieSeriesOption } from 'echarts/charts';
import { TreeChart, type TreeSeriesOption } from 'echarts/charts';
import { GraphChart, type GraphSeriesOption } from 'echarts/charts';
import onElementResize from '../utils/on-element-resize.ts';
import getUniqueDatasetValues from '../utils/data/get-unique-dataset-values.ts';
import computeInnerBox from '../utils/layout/compute-inner-box.ts';
import computeMaxTextMetrics from '../utils/layout/compute-max-text-metrics.ts';
import computeTextHeight from '../utils/layout/compute-text-height.ts';
import computeTextMetrics from '../utils/layout/compute-text-metrics.ts';
import layoutCells from '../utils/layout/layout-cells.ts';
import resolveStyle from '../utils/style/resolve-style.ts';
import mergeAtPaths from '../utils/merge-at-paths.ts';

type ChartArgs = {
  title?: string;
  legend?: string;
  xAxisZoom?: string;
  yAxisZoom?: string;
  xAxisZoomBrush?: boolean;
  yAxisZoomBrush?: boolean;
  series?: { data: unknown[]; label?: string; name?: string }[];
  data?: unknown[];
  colorMap?: Record<string, string>;
  categoryProperty?: string;
  [key: string]: unknown;
};

type Context = {
  layout: Layout;
  args: ChartArgs;
  chart: EChartsType;
  styles: Record<string, Style>;
  data: {
    series: { data: unknown[]; label?: string; name?: string }[];
  };
};

type Layout = {
  chartWidth: number;
  chartHeight: number;
  width: number;
  height: number;
  x: number;
  y: number;
  cell?: {
    yOffset: number;
  };
};

type Style = {
  [key: string]: string | number;
};

type BoxConfig = {
  x: number;
  y: number;
  width: number;
  height: number;
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
  borderTopWidth: number;
  borderBottomWidth: number;
  borderLeftWidth: number;
  borderRightWidth: number;
  backgroundColor?: string;
  borderTopColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  borderRightColor?: string;
};

type TitleConfig = {
  text: string;
  top: number;
  left?: number;
  right?: number;
  textAlign?: string;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  padding?: [number, number, number, number];
  textStyle: {
    color: string;
    fontStyle: string;
    fontWeight: string;
    fontFamily: string;
    fontSize: number;
  };
};

type LegendConfig = {
  type: string;
  data: { name: string; icon: string; itemStyle: { color?: string } }[];
  itemGap: number;
  align: string;
  width: number;
  orient: string;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  padding?: [number, number, number, number];
  textStyle: {
    color: string;
    fontStyle: string;
    fontWeight: string;
    fontFamily: string;
    fontSize: number;
  };
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

type DataZoomConfig = {
  type: string;
  brushSelect: boolean;
  borderColor?: string;
  show: boolean;
  start: number;
  end: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  xAxisIndex?: number[];
  yAxisIndex?: number[];
};

type TextConfig = {
  type: string;
  style: {
    font: string;
    fill: string;
    text: string;
  };
  silent: boolean;
  z: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

type GraphicElement = {
  type: string;
  top: number;
  left: number;
  shape: {
    width: number;
    height: number;
  };
  style: {
    fill: string;
    stroke: string;
    lineWidth: number;
  };
  silent: boolean;
};

type GraphicConfig = {
  'graphic.elements': GraphicElement[];
};

// type EChartsConfig = {
//   title?: TitleConfig[];
//   legend?: LegendConfig;
//   dataZoom?: DataZoomConfig[];
//   'graphic.elements'?: GraphicElement[];
// };

type EChartsOptionWithGraphic = EChartsCoreOption & {
  graphic?: GraphicConfig;
};

type EChartsOptionWithTitle = EChartsCoreOption & {
  title?: TitleComponentOption[];
};

type EChartsOptionWithLegend = EChartsCoreOption & {
  legend?: LegendComponentOption;
};

type EChartsOptionWithDataZoom = EChartsCoreOption & {
  dataZoom?: DataZoomComponentOption[];
};

type EChartsOptionWithTooltip = EChartsCoreOption & {
  tooltip?: TooltipComponentOption;
};

type EChartsOptionWithGrid = EChartsCoreOption & {
  grid?: GridComponentOption[];
};

type EChartsOptionWithSeries = EChartsCoreOption & {
  series?: (
    | LineSeriesOption
    | BarSeriesOption
    | PieSeriesOption
    | TreeSeriesOption
    | GraphSeriesOption
  )[];
};

type EChartsOptionWithAll = EChartsOptionWithGraphic &
  EChartsOptionWithTitle &
  EChartsOptionWithLegend &
  EChartsOptionWithDataZoom &
  EChartsOptionWithTooltip &
  EChartsOptionWithGrid &
  EChartsOptionWithSeries;

use([
  CanvasRenderer,
  TitleComponent,
  LegendComponent,
  GridComponent,
  TooltipComponent,
  DataZoomComponent,
  GraphicComponent,
  LineChart,
  BarChart,
  PieChart,
  TreeChart,
  GraphChart,
]);

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
  chart: EChartsType | undefined;
  resizeObserver: ResizeObserver | undefined;

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

  constructor(...args: unknown[]) {
    // @ts-expect-error: follow up on this
    super(...args);

    registerDestructor(this, () => this.cleanup());

    if (this.constructor === AbstractChartModifier) {
      throw new Error("AbstractChartModifier is abstract and can't be instantiated.");
    }
  }
  // @ts-expect-error: follow up on this
  modify(element: HTMLElement, [args]: [ChartArgs], defaultArgs: ChartArgs, count = 0) {
    if (!element.clientHeight || !element.clientWidth) {
      // Escape hatch if the styling of this element doesn't allow it to have
      // a size within its parent layout
      if (count > 10) {
        element.style.height = element.clientHeight ? `${element.clientHeight}px` : '400px';
        element.style.width = element.clientWidth ? `${element.clientWidth}px` : '600px';
      }

      onElementResize(element, () => this.modify(element, [args], defaultArgs, count + 1), true);

      return;
    }

    const chartArgs = { ...defaultArgs, ...args };

    if (!this.chart) {
      this.chart = this.createChart(element, chartArgs);
    }

    this.configureChart(chartArgs, this.chart, element);
  }

  configureChart(_args: ChartArgs, _chart: EChartsType, _element: HTMLElement) {
    throw new Error('`configureChart` needs to be overridden. No implementation exists.');
  }

  createChart(element: HTMLElement, chartArgs: ChartArgs): EChartsType {
    const chart = init(element, undefined, { renderer: 'canvas' });

    // Initialize the chart model using default options so charts that need to
    // access the locale via the model while being built can do so
    chart.setOption({});

    // Add a `handle` method that ensures only one event listener can be
    // attached at the same time. This prevents mistakes when coding new charts
    // of forgetting to `off` an event during a reconfigure and then having
    // multiple handlers attached to the chart.
    // @ts-expect-error: follow up on this
    chart.handle = (eventName: string, ...args: unknown[]) => {
      chart.off(eventName);
      // @ts-expect-error: follow up on this
      chart.on(eventName, ...args);
    };

    // Resize the chart whenever the containing element resizes
    let firstResize = true;

    this.resizeObserver = onElementResize(element, () => {
      if (!firstResize) {
        chart.resize();
        this.configureChart(chartArgs, chart, element);
      }

      firstResize = false;
    });

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
  buildLayout(args: ChartArgs, chart: EChartsType) {
    const config: EChartsOptionWithAll = {};
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
    this.resizeObserver?.disconnect();
    this.chart?.dispose();
  }

  // ---------------------------------------------------------------------------
  // LAYOUT METHODS
  // ---------------------------------------------------------------------------
  /**
   * Creates the context used when laying out elements on this chart.
   */
  createContext(args: ChartArgs, chart: EChartsType): Context {
    const layout: Layout = {
      chartWidth: chart.getWidth(),
      chartHeight: chart.getHeight(),
      width: chart.getWidth(),
      height: chart.getHeight(),
      x: 0,
      y: 0,
    };
    const styles = transform(
      Object.keys(this.defaultStyles),
      (styles: Record<string, Style>, type: string) =>
        (styles[type] = {
          ...baseStyle,
          // @ts-expect-error: follow up on this
          ...this.defaultStyles[type],
          // @ts-expect-error: follow up on this
          ...args[`${type}Style`],
        }),
      {}
    );

    return {
      layout,
      args,
      chart,
      styles,
      // @ts-expect-error: follow up on this
      data: this.createContextData(args, chart),
    };
  }

  /**
   * Generates the `data` section of the context used to construct this chart.
   */
  createContextData(args: ChartArgs /*, chart: EChartsType */) {
    const series = args.series ?? [{ data: args.data }];

    return {
      series,
    };
  }

  /**
   * Add the border and background of the chart.
   */
  addChartBox(context: Context, config: EChartsOptionWithAll) {
    // @ts-expect-error: follow up on this
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
  addTitle(context: Context, config: EChartsOptionWithAll) {
    const { title } = context.args;

    if (!title) {
      return context.layout;
    }
    // @ts-expect-error: follow up on this
    const style = resolveStyle(context.styles.chartTitle, context.layout);

    mergeAtPaths(config, [this.generateTitleConfig(title, context.layout, style)]);

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
  addLegend(context: Context, config: EChartsOptionWithAll) {
    const { legend } = context.args;

    if (!legend || legend === 'none') {
      return context.layout;
    }
    // @ts-expect-error: follow up on this
    const style = resolveStyle(context.styles.legend, context.layout);

    mergeAtPaths(config, [
      this.generateLegendConfig(context.data.series, context.args, context.layout, style),
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
  addDataZoom(context: Context, config: EChartsOptionWithAll) {
    const { args, layout, styles } = context;
    const { xAxisZoom, yAxisZoom } = args;

    if ((!xAxisZoom || xAxisZoom === 'none') && (!yAxisZoom || yAxisZoom === 'none')) {
      return context.layout;
    }
    // @ts-expect-error: follow up on this
    const xAxisZoomStyle = resolveStyle(styles.xAxisZoom, layout);
    // @ts-expect-error: follow up on this
    const yAxisZoomStyle = resolveStyle(styles.yAxisZoom, layout);

    mergeAtPaths(config, [
      // @ts-expect-error: follow up on this
      this.generateXAxisDataZoomConfig(args, layout, xAxisZoomStyle),
      // @ts-expect-error: follow up on this
      this.generateYAxisDataZoomConfig(args, layout, yAxisZoomStyle),
    ]);

    const newLayout = { ...layout };
    const { xAxisZoomBrush, yAxisZoomBrush } = args;

    if (xAxisZoom) {
      // @ts-expect-error: follow up on this
      const sliderHeight = config.dataZoom?.[0]?.height ?? 30;
      const brushSelectHeight = xAxisZoomBrush ? 7 : 0;
      const xAxisZoomHeight =
        sliderHeight + brushSelectHeight + xAxisZoomStyle.marginTop + xAxisZoomStyle.marginBottom;

      newLayout.height = layout.height - xAxisZoomHeight;
      newLayout.y = layout.y + (xAxisZoom === 'top' ? xAxisZoomHeight : 0);
    }

    if (yAxisZoom) {
      const yAxisConfig = xAxisZoom ? config.dataZoom?.[1] : config.dataZoom?.[0];
      // @ts-expect-error: follow up on this
      const sliderWidth = yAxisConfig?.height ?? 30;
      const brushSelectWidth = yAxisZoomBrush ? 7 : 0;
      const yAxisZoomWidth =
        sliderWidth + brushSelectWidth + yAxisZoomStyle.marginLeft + yAxisZoomStyle.marginRight;

      newLayout.width = layout.width - yAxisZoomWidth;
      newLayout.x = layout.x + (yAxisZoom === 'left' ? yAxisZoomWidth : 0);
    }

    return newLayout;
  }

  /**
   * Add the border and background of the cells.
   */
  addCellBoxes(context: Context, config: EChartsOptionWithAll) {
    mergeAtPaths(
      config,
      // @ts-expect-error: follow up on this
      layoutCells(context, context.data.series, (info, cell) => this.generateBoxConfig(cell))
    );

    return context.layout;
  }

  /**
   * Add the titles to individual cells.
   */
  addCellTitles(context: Context, config: EChartsOptionWithAll) {
    const series = context.data.series;
    // @ts-expect-error: follow up on this
    if (series.length === 1 && !series[0].label && !series[0].name) {
      return context.layout;
    }
    // @ts-expect-error: follow up on this
    const style = resolveStyle(context.styles.cellTitle, context.layout);

    mergeAtPaths(
      config,
      // @ts-expect-error: follow up on this
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

    const textHeight = computeTextHeight(style) + style.marginTop + style.marginBottom;

    return {
      ...context.layout,
      cell: {
        ...context.layout.cell,
        yOffset: textHeight,
      },
    };
  }

  /**
   * Add the plots to individual cells.
   */
  addCellPlots(context: Context, config: EChartsOptionWithAll) {
    // Ensure when using the `grid` config, the correct index is specified. This
    // differs from `context.index` when a cell has no data (and so, no grid)
    let gridIndex = 0;

    mergeAtPaths(
      config,
      // @ts-expect-error: follow up on this
      layoutCells(context, context.data.series, (info, cell) => {
        // @ts-expect-error: follow up on this
        const plotConfig = this.generatePlotConfig(info, cell, context, gridIndex);

        if (plotConfig) {
          gridIndex++;
        }

        return plotConfig;
      })
    );

    return context.layout;
  }

  /**
   * Add any cell overlays on top of the chart.
   */
  addCellTextOverlays(context: Context, config: EChartsOptionWithAll) {
    // @ts-expect-error: follow up on this
    if (!this.generateTextOverlayConfig) {
      return context.layout;
    }
    // @ts-expect-error: follow up on this
    const style = resolveStyle(context.styles.cellTextOverlay, context.layout);

    mergeAtPaths(
      config,
      // @ts-expect-error: follow up on this
      layoutCells(context, context.data.series, (info, cell) =>
        // @ts-expect-error: follow up on this
        this.generateTextOverlayConfig(info, context.args, cell, style)
      )
    );

    return context.layout;
  }

  /**
   * Returns the labels for the legend.
   */
  getLegendLabels(series: { data: unknown[] }[], args: ChartArgs) {
    // @ts-expect-error: follow up on this
    return getUniqueDatasetValues(series, args.categoryProperty ?? 'name');
  }

  /**
   * Returns the orientation of the legend as either `horizontal` or `vertical`.
   */
  getLegendOrientation(args: ChartArgs) {
    const { legend, legendOrientation } = args;
    // @ts-expect-error: follow up on this
    return !['horizontal', 'vertical'].includes(legendOrientation ?? '')
      ? legend?.startsWith('top') || legend?.startsWith('bottom')
        ? 'horizontal'
        : 'vertical'
      : legendOrientation;
  }

  /**
   * Generates the configuration for the background and border of a box element.
   */
  generateBoxConfig(box: BoxConfig): GraphicConfig {
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
            stroke: box.borderTopColor ?? '',
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
  generateTitleConfig(text: string, layout: Layout, style: Style): EChartsOptionWithTitle {
    const config: TitleConfig = {
      text,
      // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.
      top: layout.y + style.marginTop,
      // @ts-expect-error: Type 'string | number | undefined' is not assignable to type 'string | undefined'. Type 'number' is not assignable to type 'string'
      backgroundColor: style.backgroundColor,
      // Safari only parses contituent values, so use "top" as a proxy for all
      // @ts-expect-error: Property 'borderTopWidth' comes from an index signature, so it must be accessed with ['borderTopWidth'].
      borderWidth: style.borderTopWidth,
      // @ts-expect-error: Property 'borderTopColor' comes from an index signature, so it must be accessed with ['borderTopColor']
      borderColor: style.borderTopColor,
      // @ts-expect-error: Property 'borderRadius' comes from an index signature, so it must be accessed with ['borderRadius'].
      borderRadius: style.borderRadius,
      // @ts-expect-error: Type 'string | number | undefined' is not assignable to type 'number'. Type 'undefined' is not assignable to type 'number'.
      padding: [style.paddingTop, style.paddingRight, style.paddingBottom, style.paddingLeft],
      textStyle: {
        // @ts-expect-error: Property 'color' comes from an index signature, so it must be accessed with ['color']
        color: style.color as string,
        // @ts-expect-error: Property 'fontStyle' comes from an index signature, so it must be accessed with ['fontStyle']
        fontStyle: style.fontStyle as string,
        // @ts-expect-error: Property 'fontWeight' comes from an index signature, so it must be accessed with ['fontWeight']
        fontWeight: style.fontWeight as string,
        // @ts-expect-error: Property 'fontFamily' comes from an index signature, so it must be accessed with ['fontFamily']
        fontFamily: style.fontFamily as string,
        // @ts-expect-error: Property 'fontSize' comes from an index signature, so it must be accessed with ['fontSize']
        fontSize: style.fontSize as number,
      },
    };
    // @ts-expect-error: Property 'textAlign' comes from an index signature, so it must be accessed with ['textAlign'].
    switch (style.textAlign) {
      case 'center':
        merge(config, {
          left: layout.x + layout.width / 2,
          textAlign: 'center',
        });
        break;

      case 'right':
        merge(config, {
          // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.glint(2365)
          right: layout.chartWidth - (layout.x + layout.width) + style.marginRight,
        });
        break;

      default:
        merge(config, {
          // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.glint(2365)
          left: layout.x + style.marginLeft,
        });
        break;
    }

    return {
      // @ts-expect-error: follow up on this
      title: [config],
    };
  }

  /**
   * Generates the configuration for a legend element.
   */
  generateLegendConfig(
    series: { data: unknown[] }[],
    args: ChartArgs,
    layout: Layout,
    style: Style
  ): EChartsOptionWithLegend {
    const { legend = 'topCenter' } = args;
    const isVertical = this.getLegendOrientation(args) === 'vertical';
    const config: LegendConfig = {
      type: 'scroll',
      data: this.getLegendLabels(series, args).map((label) => ({
        name: label,
        icon: 'circle',
        itemStyle: {
          color: args?.colorMap?.[label],
        },
      })),
      itemGap: isVertical ? 15 : 40,
      // @ts-expect-error: Property 'textAlign' comes from an index signature, so it must be accessed with ['textAlign'].glint(4111)
      align: style.textAlign as string,
      width: layout.width,
      orient: isVertical ? 'vertical' : 'horizontal',
      // @ts-expect-error: Property 'backgroundColor' comes from an index signature, so it must be accessed with ['backgroundColor'].glint(4111)
      backgroundColor: style.backgroundColor as string,
      // Safari only parses contituent values, so use "top" as a proxy for all
      // @ts-expect-error: Property 'borderTopWidth' comes from an index signature, so it must be accessed with ['borderTopWidth'].glint(4111)
      borderWidth: style.borderTopWidth as number,
      // @ts-expect-error: Property 'borderTopColor' comes from an index signature, so it must be accessed with ['borderTopColor'].glint(4111)
      borderColor: style.borderTopColor as string,
      // @ts-expect-error: Property 'borderRadius' comes from an index signature, so it must be accessed with ['borderRadius'].glint(4111)
      borderRadius: style.borderRadius as number,
      // @ts-expect-error: return to this
      padding: [style.paddingTop, style.paddingRight, style.paddingBottom, style.paddingLeft],
      textStyle: {
        // @ts-expect-error: Property 'color' comes from an index signature, so it must be accessed with ['color']
        color: style.color as string,
        // @ts-expect-error: Property 'fontStyle' comes from an index signature, so it must be accessed with ['fontStyle']
        fontStyle: style.fontStyle as string,
        // @ts-expect-error: Property 'fontWeight' comes from an index signature, so it must be accessed with ['fontWeight']
        fontWeight: style.fontWeight as string,
        // @ts-expect-error: Property 'fontFamily' comes from an index signature, so it must be accessed with ['fontFamily']
        fontFamily: style.fontFamily as string,
        // @ts-expect-error: Property 'fontSize' comes from an index signature, so it must be accessed with ['fontSize']
        fontSize: style.fontSize as number,
      },
    };

    let xLayout, yLayout;

    if (legend.startsWith('top') || legend.endsWith('Top')) {
      yLayout = {
        // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.
        top: layout.y + (style.marginTop as number) + (style.borderTopWidth as number) / 2,
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
          // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.
          (style.marginBottom as number) +
          // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.
          (style.borderBottomWidth as number) / 2,
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
        // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.
        left: layout.x + (style.marginLeft as number) + (style.borderLeftWidth as number) / 2,
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
          // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.
          (style.marginRight as number) +
          // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.
          (style.borderRightWidth as number) / 2,
      };
    } else {
      xLayout = {
        left: 'center',
      };
    }

    merge(config, {
      ...xLayout,
      ...yLayout,
    });

    return {
      // @ts-expect-error: follow up on this
      legend: config,
    };
  }

  /**
   * Generates the configuration for the control that allows a user to zoom in
   * and out of the data.
   */
  generateXAxisDataZoomConfig(
    args: ChartArgs,
    layout: Layout,
    style: Style
  ): EChartsOptionWithDataZoom | undefined {
    const { xAxisZoom, xAxisZoomBrush } = args;

    if (!xAxisZoom) {
      return undefined;
    }
    // @ts-expect-error: follow up on this
    const config = this.generateDataZoomConfigElement(style, xAxisZoomBrush);
    const brushSelectHeight = xAxisZoomBrush ? 7 : 0;

    if (xAxisZoom === 'top') {
      // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.
      config.top = layout.y + (style.marginTop as number) + (style.borderTopWidth as number) / 2;
    } else {
      config.bottom =
        layout.chartHeight -
        layout.height -
        layout.y +
        brushSelectHeight +
        // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.
        (style.marginBottom as number) +
        // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.
        (style.borderBottomWidth as number) / 2;
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
  generateYAxisDataZoomConfig(
    args: ChartArgs,
    layout: Layout,
    style: Style
  ): EChartsOptionWithDataZoom | undefined {
    const { yAxisZoom, yAxisZoomBrush } = args;

    if (!yAxisZoom) {
      return undefined;
    }
    // @ts-expect-error: follow up on this
    const config = this.generateDataZoomConfigElement(style, yAxisZoomBrush);
    const brushSelectWidth = yAxisZoomBrush ? 7 : 0;

    if (yAxisZoom === 'left') {
      // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.
      config.left = layout.x + (style.marginLeft as number) + (style.borderLeftWidth as number) / 2;
    } else {
      config.right =
        layout.chartWidth -
        layout.width -
        layout.x +
        brushSelectWidth +
        // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.
        (style.marginRight as number) +
        // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.
        (style.borderRightWidth as number) / 2;
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
  generateDataZoomConfigElement(style: Style, brushSelect: boolean): DataZoomConfig {
    return {
      type: 'slider',
      brushSelect,
      // @ts-expect-error: follow up on this
      borderColor: style.borderTopColor as string,
      show: true,
      start: 0,
      end: 100,
    };
  }

  /**
   * Generates the configuration for a text element.
   */
  generateTextConfig(text: string, layout: Layout, style: Style): EChartsOptionWithGraphic {
    // @ts-expect-error: follow up on this
    const metrics = computeTextMetrics(text, style);
    const config: TextConfig = {
      type: 'text',
      style: {
        // @ts-expect-error: follow up on this
        font: `${style.fontStyle} ${style.fontWeight} ${style.fontSize}px ${style.fontFamily}`,
        // @ts-expect-error: follow up on this
        fill: style.color as string,
        text,
      },
      silent: true,
      // @ts-expect-error: follow up on this
      z: style.zIndex as number,
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
    // @ts-expect-error: follow up on this
    switch (style.textAlign) {
      case 'center':
        merge(config, {
          left: layout.x + layout.width / 2 - metrics.width / 2,
        });
        break;

      case 'right':
        merge(config, {
          // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.
          right: layout.chartWidth - (layout.x + layout.width) + style.marginRight,
        });
        break;

      default:
        merge(config, {
          // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.
          left: layout.x + style.marginLeft,
        });
        break;
    }
    // @ts-expect-error: follow up on this
    switch (style.verticalAlign) {
      case 'middle':
        merge(config, {
          top: layout.y + layout.height / 2 - metrics.height / 2,
        });
        break;

      case 'bottom':
        merge(config, {
          // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.
          bottom: layout.y + layout.height - style.marginBottom,
        });
        break;

      default:
        merge(config, {
          // @ts-expect-error: Operator '+' cannot be applied to types 'number' and 'string | number'.
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
  computeLegendMetrics(context: Context, config: EChartsOptionWithAll, style: Style) {
    const { layout, data, args } = context;
    const labels = this.getLegendLabels(data.series, args);
    const orientation = this.getLegendOrientation(args);
    // hardcoded values are the defaults for `itemWidth` and `itemGap`
    const markerWidth = config.legend?.itemWidth ?? 25;
    const itemGap = config.legend?.itemGap ?? 10;
    // Divide by 2 on border, since it appears to be drawn at the end of the
    // legend rather than inside or outside the legend
    const metrics = {
      width:
        // @ts-expect-error: Property 'paddingLeft' comes from an index signature, so it must be accessed with ['paddingLeft'].glint(4111)
        (style.paddingLeft as number) +
        // @ts-expect-error: Property 'paddingRight' comes from an index signature, so it must be accessed with ['paddingRight'].glint(4111)
        (style.paddingRight as number) +
        // @ts-expect-error: Property 'borderLeftWidth' comes from an index signature, so it must be accessed with ['borderLeftWidth'].glint(4111)
        (style.borderLeftWidth as number) / 2 +
        // @ts-expect-error: Property 'borderRightWidth' comes from an index signature, so it must be accessed with ['borderRightWidth'].glint(4111)
        (style.borderRightWidth as number) / 2 +
        // @ts-expect-error: Property 'marginLeft' comes from an index signature, so it must be accessed with ['marginLeft'].glint(4111)
        (style.marginLeft as number) +
        // @ts-expect-error: Property 'marginRight' comes from an index signature, so it must be accessed with ['marginRight'].glint(4111)
        (style.marginRight as number),
      height:
        // @ts-expect-error: Property 'paddingTop' comes from an index signature, so it must be accessed with ['paddingTop']
        (style.paddingTop as number) +
        // @ts-expect-error: Property 'paddingBottom' comes from an index signature, so it must be accessed with ['paddingBottom']
        (style.paddingBottom as number) +
        // @ts-expect-error: Property 'borderTopWidth' comes from an index signature, so it must be accessed with ['borderTopWidth']
        (style.borderTopWidth as number) / 2 +
        // @ts-expect-error: Property 'borderBottomWidth' comes from an index signature, so it must be accessed with ['borderBottomWidth']
        (style.borderBottomWidth as number) / 2 +
        // @ts-expect-error: Property 'marginTop' comes from an index signature, so it must be accessed with ['marginTop']
        (style.marginTop as number) +
        // @ts-expect-error: Property 'marginBottom' comes from an index signature, so it must be accessed with ['marginBottom']
        (style.marginBottom as number),
    };

    if (orientation === 'horizontal') {
      const labelMetrics = labels.reduce(
        (result, label) => {
          // @ts-expect-error: follow up on this
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
        metrics.height + labelMetrics.height * labels.length + itemGap * (labels.length - 1);
    }

    return metrics;
  }
}

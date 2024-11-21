import Modifier from 'ember-modifier';
import { type EChartsCoreOption, type EChartsType } from 'echarts/core';
import { type TitleComponentOption } from 'echarts/components';
import { type LegendComponentOption } from 'echarts/components';
import { type GridComponentOption } from 'echarts/components';
import { type TooltipComponentOption } from 'echarts/components';
import { type DataZoomComponentOption } from 'echarts/components';
import { type LineSeriesOption } from 'echarts/charts';
import { type BarSeriesOption } from 'echarts/charts';
import { type PieSeriesOption } from 'echarts/charts';
import { type TreeSeriesOption } from 'echarts/charts';
import { type GraphSeriesOption } from 'echarts/charts';
type ChartArgs = {
    title?: string;
    legend?: string;
    xAxisZoom?: string;
    yAxisZoom?: string;
    xAxisZoomBrush?: boolean;
    yAxisZoomBrush?: boolean;
    series?: {
        data: unknown[];
        label?: string;
        name?: string;
    }[];
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
        series: {
            data: unknown[];
            label?: string;
            name?: string;
        }[];
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
    series?: (LineSeriesOption | BarSeriesOption | PieSeriesOption | TreeSeriesOption | GraphSeriesOption)[];
};
type EChartsOptionWithAll = EChartsOptionWithGraphic & EChartsOptionWithTitle & EChartsOptionWithLegend & EChartsOptionWithDataZoom & EChartsOptionWithTooltip & EChartsOptionWithGrid & EChartsOptionWithSeries;
export default class AbstractChartModifier extends Modifier {
    chart: EChartsType | undefined;
    resizeObserver: ResizeObserver | undefined;
    get defaultStyles(): {
        chart: {};
        chartTitle: {
            font: string;
            textAlign: string;
            margin: number;
        };
        legend: {
            font: string;
            textAlign: string;
            margin: number;
        };
        xAxisZoom: {
            margin: number;
            border: string;
            backgroundColor: string;
        };
        yAxisZoom: {
            margin: number;
            border: string;
            backgroundColor: string;
        };
        cell: {
            padding: number;
            margin: number;
        };
        cellTitle: {
            font: string;
            textAlign: string;
            margin: number;
        };
        cellTextOverlay: {
            font: string;
            textAlign: string;
            verticalAlign: string;
            zIndex: number;
        };
    };
    constructor(...args: unknown[]);
    modify(element: HTMLElement, [args]: [ChartArgs], defaultArgs: ChartArgs, count?: number): void;
    configureChart(_args: ChartArgs, _chart: EChartsType, _element: HTMLElement): void;
    createChart(element: HTMLElement, chartArgs: ChartArgs): EChartsType;
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
    buildLayout(args: ChartArgs, chart: EChartsType): {
        context: Context;
        config: EChartsOptionWithAll;
    };
    cleanup(): void;
    /**
     * Creates the context used when laying out elements on this chart.
     */
    createContext(args: ChartArgs, chart: EChartsType): Context;
    /**
     * Generates the `data` section of the context used to construct this chart.
     */
    createContextData(args: ChartArgs): {
        series: {
            data: unknown[];
            label?: string;
            name?: string;
        }[] | {
            data: unknown[] | undefined;
        }[];
    };
    /**
     * Add the border and background of the chart.
     */
    addChartBox(context: Context, config: EChartsOptionWithAll): any;
    /**
     * Adds the title to `config` if defined in `args` and returns the new
     * context.
     */
    addTitle(context: Context, config: EChartsOptionWithAll): {
        height: number;
        y: any;
        chartWidth: number;
        chartHeight: number;
        width: number;
        x: number;
        cell?: {
            yOffset: number;
        };
    };
    /**
     * Adds the legend to `config` if defined in `args` and returns the new
     * context.
     */
    addLegend(context: Context, config: EChartsOptionWithAll): Layout;
    /**
     * Adds the data zoom slider to `config` if defined in `args` and returns the
     * new context.
     */
    addDataZoom(context: Context, config: EChartsOptionWithAll): Layout;
    /**
     * Add the border and background of the cells.
     */
    addCellBoxes(context: Context, config: EChartsOptionWithAll): Layout;
    /**
     * Add the titles to individual cells.
     */
    addCellTitles(context: Context, config: EChartsOptionWithAll): Layout | {
        cell: {
            yOffset: any;
        };
        chartWidth: number;
        chartHeight: number;
        width: number;
        height: number;
        x: number;
        y: number;
    };
    /**
     * Add the plots to individual cells.
     */
    addCellPlots(context: Context, config: EChartsOptionWithAll): Layout;
    /**
     * Add any cell overlays on top of the chart.
     */
    addCellTextOverlays(context: Context, config: EChartsOptionWithAll): Layout;
    /**
     * Returns the labels for the legend.
     */
    getLegendLabels(series: {
        data: unknown[];
    }[], args: ChartArgs): any[];
    /**
     * Returns the orientation of the legend as either `horizontal` or `vertical`.
     */
    getLegendOrientation(args: ChartArgs): unknown;
    /**
     * Generates the configuration for the background and border of a box element.
     */
    generateBoxConfig(box: BoxConfig): GraphicConfig;
    /**
     * Generates the configuration for a title element.
     */
    generateTitleConfig(text: string, layout: Layout, style: Style): EChartsOptionWithTitle;
    /**
     * Generates the configuration for a legend element.
     */
    generateLegendConfig(series: {
        data: unknown[];
    }[], args: ChartArgs, layout: Layout, style: Style): EChartsOptionWithLegend;
    /**
     * Generates the configuration for the control that allows a user to zoom in
     * and out of the data.
     */
    generateXAxisDataZoomConfig(args: ChartArgs, layout: Layout, style: Style): EChartsOptionWithDataZoom | undefined;
    /**
     * Generates the configuration for the control that allows a user to zoom in
     * and out of the data.
     */
    generateYAxisDataZoomConfig(args: ChartArgs, layout: Layout, style: Style): EChartsOptionWithDataZoom | undefined;
    /**
     * Generates the base configuration for a single element in the `dataZoom`
     * configuration.
     */
    generateDataZoomConfigElement(style: Style, brushSelect: boolean): DataZoomConfig;
    /**
     * Generates the configuration for a text element.
     */
    generateTextConfig(text: string, layout: Layout, style: Style): EChartsOptionWithGraphic;
    /**
     * Computes the width and height of the legend, after the legend has been
     * added into the `config` using the compiled legend `style`.
     */
    computeLegendMetrics(context: Context, config: EChartsOptionWithAll, style: Style): {
        width: number;
        height: number;
    };
}
export {};
//# sourceMappingURL=abstract-chart.d.ts.map
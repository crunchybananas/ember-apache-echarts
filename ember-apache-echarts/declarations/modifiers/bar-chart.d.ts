import AbstractChartModifier from './abstract-chart';
/**
 * Renders one or more bar charts.
 *
 * # Arguments
 *
 * ## Data
 *
 * `data`
 * : An array of data objects, where each data object has a category property
 *   (e.g., `name`) and a value property (e.g., `value`).
 *
 * `series`
 * : An array of data series, where each series has a label defined using the
 *   `label` or `name` property, data contained in the `data` property (see
 *   `data` argument above for the format) and an optional `series` property
 *   which contains an array of drillable child series. When the `series`
 *   argument is present, the `data` argument is ignored.
 *
 * `rotateData`
 * : Rotates the data series so the "columns" become the "rows" and the "rows"
 *   become the "columns". For hierarchical series, the names/labels of each
 *   data item within each series will each become their own series, while the
 *   original series labels are used to label the values.
 *
 * `categoryProperty`
 * : The name of the property within the data to use as the category for each
 *   data point.
 *
 * `valueProperty`
 * : The name of the property within the data to use as the value for each data
 *   point.
 *
 *
 * ## Chart Layout
 *
 * `chartStyle`
 * : CSS properties for the entire chart including background color, border,
 *   margins and padding.
 *
 * `chartTitleStyle`
 * : CSS properties for the title for the entire chart including color, font,
 *   background color, border and alignment.
 *
 * `maxColumns`
 * : The maximum number of columns to render when rendering more than one series
 *
 *
 *  ## Plots
 *
 * `variant`
 * : Which style chart to render: `bar`, `line`, `area`, `groupedBar`,
 *   `groupedLine`, `stackedBar` or `stackedArea`
 *
 * `orientation`
 * : Which orientation to render the value axes: `vertical` (default) or
 *   `horizontal`
 *
 * `colorMap`
 * : A hash that maps series names to the colors to use for the data items in
 *   those series
 *
 * `cellStyle`
 * : CSS properties defining the style for individual plots when rendering more
 *   than one series
 *
 * `cellTitleStyle`
 * : CSS properties defining the style for the titles for individual plots when
 *   rendering more than one series
 *
 * `plotStyle`
 * : CSS properties defining the style of the plot (area defined by the axes)
 *
 * `seriesConfig`
 * : A hash of EChart render properties for the `variant`. Use for properties
 *   not yet supported by this chart natively. Properties used by this chart
 *   internally are not supported.
 *
 *
 * ## Axes
 *
 * `categoryAxisScale`, `valueAxisScale`
 * : Whether to use a shared axis for all plots that accounts for the data
 *   across all series, or use a separate axis for each plot that only uses
 *   that plot's data. Valid values are: `shared`, `separate` (default)
 *
 * `categoryAxisType`
 * : The type of axis the category axis represents: `category` (default) or
 *   `time`. If set to `time`, the categories must either be `Date` objects or
 *   Unix timestamps.
 *
 * `categoryAxisSort`
 * : How to sort the labels on the category axis: `firstSeries` (default),
 *   `asc`, `desc` or a custom sort function. By default, the sort order of the
 *   labels for the data in the first series is used.
 *
 * `categoryAxisMaxLabelCount`
 * : The maximum number of categories to show on the category axis. The number
 *   of actual labels rendered may be lower than this; this merely sets the
 *   maximum number so labels are not too thin.
 *
 * `valueAxisMax`
 * : The maximum value of the value axis. Valid values are: a specific number,
 *   `dataMax` or `dataMaxRoundedUp` (default). `dataMaxRoundedUp` is only
 *   supported when `valueAxisScale` is `separate` and rounds the data maximum
 *   up so the axis ticks are evenly distributed on the value axis.
 *
 * `categoryAxisFormatter`, `valueAxisFormatter`
 * : Functions used to format the values for the category or value axis,
 *   respectively. Passed the value to be formatted, the type of element the
 *   value is being formatted for (`axis`, `itemTooltip`, `axisTooltip`) and for
 *   axis elements, the index of the axis.
 *
 * `missingCategoryFormat`, `missingValueFormat`
 * : The text to use when the category or value is missing, i.e., an empty
 *   string, undefined or null. If not defined, then the category or value is
 *   passed into either `categoryAxisFormatter` or `valueAxisFormatter`,
 *   respectively, to be formatted
 *
 * `xAxisStyle`
 * : CSS properties defining the style for horizontal X axis, regardless of the
 *   value of `orientation`
 *
 * `yAxisStyle`
 * : CSS properties defining the style for vertical Y axis, regardless of the
 *   value of `orientation`
 *
 * `xAxisPointer`, `yAxisPointer`
 * : The style to use for an axis pointer: `line`, `shadow`, `none` (default)
 *
 * `xAxisPointerLabel`
 * : Whether and where to display the label for the X axis pointer:
 *   `bottom` (default), `top`, `none`
 *
 * `yAxisPointerLabel`
 * : Whether and where to display the label for the Y axis pointer:
 *   `left` (default), `right`, `none`
 *
 * `xAxisPointerStyle`, `yAxisPointerStyle`
 * : CSS properties defining the style of an axis pointer including border &
 *   opacity if using `line` as the pointer or background color & opacity if
 *   using `shadow` as the pointer.
 *
 * `xAxisPointerLabelStyle`, `yAxisPointerLabelStyle`
 * : CSS properties defining the style of an axis pointer label.
 *
 * `xAxisTooltip`
 * : Whether the tooltip for the X axis should be shown near the pointer when
 *   it's active. Defaults to `true`
 *
 * `yAxisTooltip`
 * : Whether the tooltip for the Y axis should be shown near the pointer when
 *   it's active. Defaults to `false`
 *
 *
 * ## Legend
 *
 * `legend`
 * : Whether and where to display a legend: `none`, `top`, `bottom`, `left`,
 *   `right`, `topLeft`, `topRight`, `bottomLeft`, `bottomRight`, `leftTop`,
 *   `leftBottom`, `rightTop`, `rightBottom`
 *
 * `legendOrientation`
 * : Which orientation to render the legend: `horizontal`, `vertical` or `auto`
 *   (default), where `auto` renders the legend horizontally when positioned
 *   on the top or bottom of the chart, and vertically when positioned on the
 *   left or right of the chart
 *
 * `legendStyle`
 * : CSS properties for the chart legend including color, font, background
 *   color, border and alignment.
 *
 *
 * ## Data Zoom
 *
 * `xAxisZoom`
 * : Whether and where to display a data zoom control for the X axis: `top`,
 *   `bottom`, `none` (default)
 *
 * `xAxisZoomBrush`
 * : Whether to enable brush select for the X axis data zoom control. Defaults
 *   to `false`
 *
 * `xAxisStyle`
 * : CSS properties defining the style for the the X axis data zoom control
 *
 * `yAxisZoom`
 * : Whether and where to display a data zoom control for the Y axis: `top`,
 *   `bottom`, `none` (default)
 *
 * `yAxisZoomBrush`
 * : Whether to enable brush select for the Y axis data zoom control. Defaults
 *   to `false`
 *
 * `yAxisStyle`
 * : CSS properties defining the style for the the Y axis data zoom control
 *
 *
 * ## Data Drilling
 *
 * `drillUpButtonStyle`
 * : CSS properties defining the style of the drill up button
 *
 * `drillUpButtonText`
 * : The text of the drill up button. Defaults to `<`.
 *
 *
 * ## Tooltips
 *
 * `tooltipFormatter`
 * : The function used to generate the tool tip
 *
 *
 * ## Events
 *
 * `onSelect`
 * : Called when an element on a chart is selected
 */
export default class BarChartModifier extends AbstractChartModifier {
    drillPath: never[];
    get defaultStyles(): {
        plot: {};
        xAxis: {
            font: string;
            textAlign: string;
            marginTop: number;
        };
        yAxis: {
            font: string;
            textAlign: string;
            marginRight: number;
        };
        xAxisPointer: {
            border: string;
            backgroundColor: string;
            opacity: string;
        };
        yAxisPointer: {
            border: string;
            backgroundColor: string;
            opacity: string;
        };
        xAxisPointerLabel: {
            color: string;
            font: string;
            backgroundColor: string;
            border: string;
            borderRadius: number;
            padding: number;
            margin: number;
        };
        yAxisPointerLabel: {
            color: string;
            font: string;
            backgroundColor: string;
            border: string;
            borderRadius: number;
            padding: number;
            marginRight: number;
        };
        drillUpButton: {
            margin: number;
            color: string;
            font: string;
            marginRight: number;
        };
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
    isGroupedVariant(variant: any): boolean;
    isStackedVariant(variant: any): boolean;
    isBarVariant(variant: any): boolean;
    isAreaVariant(variant: any): boolean;
    /**
     * Returns the categories used within the data series in render order.
     */
    getCategories(args: any, series: any): any[];
    /**
     * Formats the `name` and `value` within `params` when a category or value
     * formatter are defined, respectively.
     */
    formatTooltipParams(args: any, params: any, elementType: any): any;
    configureChart(args: any, chart: any): void;
    /**
     * Generates the `data` section of the context used to construct this chart.
     */
    createContextData(args: any, chart: any): {
        series: any;
        dataset: any;
        title: any;
        minValue?: number | undefined;
        maxValue?: number | undefined;
        categories?: any[] | undefined;
    };
    /**
     * Adds the title to `config` as defined in the data or by `args` and returns
     * the new context layout.
     */
    addTitle(context: any, config: any): any;
    /**
     * Adds the drill up button to `config` and returns the new context layout.
     */
    addDrillUpButton(context: any, config: any): any;
    /**
     * Generates the configuration for the drill up button.
     */
    generateDrillUpButtonConfig(text: any, layout: any, style: any): {
        'graphic.elements': {
            type: string;
            left: any;
            top: any;
            children: ({
                type: string;
                shape: {
                    width: any;
                    height: any;
                    r: any[];
                };
                style: {
                    stroke: any;
                    fill: any;
                    text?: undefined;
                    font?: undefined;
                };
                x?: undefined;
                y?: undefined;
                textConfig?: undefined;
            } | {
                type: string;
                x: any;
                y: any;
                style: {
                    fill: any;
                    text: any;
                    font: string;
                    stroke?: undefined;
                };
                textConfig: {
                    distance: number;
                    inside: boolean;
                    position: number[];
                };
                shape?: undefined;
            })[];
            onclick: () => any;
        }[];
    };
    /**
     * Returns the labels for the legend.
     */
    getLegendLabels(series: any, args: any): any;
    /**
     * Calculate the categories and range used for the category axis.
     */
    computeCategoryInfo(series: any, context: any): {
        categories: any;
        first: any;
        last: any;
        count: any;
    };
    /**
     * Calculate the values and stats used for the value axis.
     */
    computeValueInfo(series: any, context: any, categories: any): {
        values: any;
        minimum: any;
        maximum: any;
    };
    /**
     * Calculate the ticks used for the category axis.
     *
     * Each tick may have the following properties:
     *
     * `text`
     * : The formatted text for this tick.
     *
     * `type`
     * : The type of tick (e.g. `primary`) or `undefined` if no type is specified.
     *
     * `position`
     * : A value from 0 to 1 indicating the position of the tick along the axis.
     */
    computeCategoryAxisTicks(context: any, categoryInfo: any, axisConfig: any): any[];
    /**
     * Calculate the labels used for the value axis.
     */
    computeValueAxisTicks(context: any, valueInfo: any, axisConfig: any): {
        label: any;
        position: number;
    }[];
    /**
     * Generates the plot config for a single plot on this chart.
     */
    generatePlotConfig(series: any, layout: any, context: any, gridIndex: any): any;
    /**
     * Generates the configuration for an axis label.
     */
    generateAxisLabelConfig(layout: any, style: any): {
        color: any;
        fontStyle: any;
        fontWeight: any;
        fontFamily: any;
        fontSize: any;
        align: any;
        verticalAlign: any;
        backgroundColor: any;
        borderWidth: any;
        borderColor: any;
        borderType: any;
        borderRadius: any;
        padding: any[];
    };
    /**
     * Adds the configuration for the axis pointer for the `axis` to `config` and
     * returns an updated `layout`.
     */
    addAxisPointer(context: any, layout: any, config: any, axisInfo: any, axis: any): any;
    /**
     * Generates text to overlay on each cell of the chart, if any.
     */
    generateTextOverlayConfig(series: any, args: any, layout: any, style: any): {
        'graphic.elements': {
            type: string;
            style: {
                font: string;
                fill: any;
                text: any;
            };
            silent: boolean;
            z: any;
        }[];
    } | undefined;
    /**
     * Computes style and metrics about the Y axis for charts that use an Y axis.
     */
    computeYAxisInfo(style: any, ticks: any, isHorizontal: any): {
        width: any;
        labelMetrics: any;
        heightOverflow: number;
    };
    /**
     * Computes style and metrics about the X axis for charts that use an X axis.
     */
    computeXAxisInfo(args: any, layout: any, style: any, ticks: any, yAxisInfo: any, isHorizontal: any): {
        width: number;
        height: any;
        labelMetrics: any;
        maxLabelWidth: number;
        widthOverflow: number;
    };
}
//# sourceMappingURL=bar-chart.d.ts.map
import Modifier from 'ember-modifier';
import * as echarts from 'echarts';
export default class AbstractChartModifier extends Modifier {
    chart: any;
    resizeObserver: any;
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
    constructor(...args: any[]);
    modify(element: any, [args]: [any], defaultArgs: any, count?: number): void;
    configureChart(args: any, chart: any, element: any): void;
    createChart(element: any, chartArgs: any): echarts.ECharts;
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
    buildLayout(args: any, chart: any): {
        context: {
            layout: {
                chartWidth: any;
                chartHeight: any;
                width: any;
                height: any;
                x: number;
                y: number;
            };
            args: any;
            chart: any;
            styles: any;
            data: {
                series: any;
            };
        };
        config: {};
    };
    cleanup(): void;
    /**
     * Creates the context used when laying out elements on this chart.
     */
    createContext(args: any, chart: any): {
        layout: {
            chartWidth: any;
            chartHeight: any;
            width: any;
            height: any;
            x: number;
            y: number;
        };
        args: any;
        chart: any;
        styles: any;
        data: {
            series: any;
        };
    };
    /**
     * Generates the `data` section of the context used to construct this chart.
     */
    createContextData(args: any): {
        series: any;
    };
    /**
     * Add the border and background of the chart.
     */
    addChartBox(context: any, config: any): any;
    /**
     * Adds the title to `config` if defined in `args` and returns the new
     * context.
     */
    addTitle(context: any, config: any): any;
    /**
     * Adds the legend to `config` if defined in `args` and returns the new
     * context.
     */
    addLegend(context: any, config: any): any;
    /**
     * Adds the data zoom slider to `config` if defined in `args` and returns the
     * new context.
     */
    addDataZoom(context: any, config: any): any;
    /**
     * Add the border and background of the cells.
     */
    addCellBoxes(context: any, config: any): any;
    /**
     * Add the titles to individual cells.
     */
    addCellTitles(context: any, config: any): any;
    /**
     * Add the plots to individual cells.
     */
    addCellPlots(context: any, config: any): any;
    /**
     * Add any cell overlays on top of the chart.
     */
    addCellTextOverlays(context: any, config: any): any;
    /**
     * Returns the labels for the legend.
     */
    getLegendLabels(series: any, args: any): any[];
    /**
     * Returns the orientation of the legend as either `horizontal` or `vertical`.
     */
    getLegendOrientation(args: any): any;
    /**
     * Generates the configuration for the background and border of a box element.
     */
    generateBoxConfig(box: any): {
        'graphic.elements': {
            type: string;
            top: any;
            left: any;
            shape: {
                width: number;
                height: number;
            };
            style: {
                fill: any;
                stroke: any;
                lineWidth: any;
            };
            silent: boolean;
        }[];
    };
    /**
     * Generates the configuration for a title element.
     */
    generateTitleConfig(text: any, layout: any, style: any): {
        title: {
            text: any;
            top: any;
            backgroundColor: any;
            borderWidth: any;
            borderColor: any;
            borderRadius: any;
            padding: any[];
            textStyle: {
                color: any;
                fontStyle: any;
                fontWeight: any;
                fontFamily: any;
                fontSize: any;
            };
        }[];
    };
    /**
     * Generates the configuration for a legend element.
     */
    generateLegendConfig(series: any, args: any, layout: any, style: any): {
        legend: {
            type: string;
            data: {
                name: any;
                icon: string;
                itemStyle: {
                    color: any;
                };
            }[];
            itemGap: number;
            align: any;
            width: any;
            orient: string;
            backgroundColor: any;
            borderWidth: any;
            borderColor: any;
            borderRadius: any;
            padding: any[];
            textStyle: {
                color: any;
                fontStyle: any;
                fontWeight: any;
                fontFamily: any;
                fontSize: any;
            };
        };
    };
    /**
     * Generates the configuration for the control that allows a user to zoom in
     * and out of the data.
     */
    generateXAxisDataZoomConfig(args: any, layout: any, style: any): {
        dataZoom: {
            xAxisIndex: number[];
            type: string;
            brushSelect: any;
            borderColor: any;
            show: boolean;
            start: number;
            end: number;
        }[];
    } | undefined;
    /**
     * Generates the configuration for the control that allows a user to zoom in
     * and out of the data.
     */
    generateYAxisDataZoomConfig(args: any, layout: any, style: any): {
        dataZoom: {
            yAxisIndex: number[];
            type: string;
            brushSelect: any;
            borderColor: any;
            show: boolean;
            start: number;
            end: number;
        }[];
    } | undefined;
    /**
     * Generates the base configuration for a single element in the `dataZoom`
     * configuration.
     */
    generateDataZoomConfigElement(style: any, brushSelect: any): {
        type: string;
        brushSelect: any;
        borderColor: any;
        show: boolean;
        start: number;
        end: number;
    };
    /**
     * Generates the configuration for a text element.
     */
    generateTextConfig(text: any, layout: any, style: any): {
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
    };
    /**
     * Computes the width and height of the legend, after the legend has been
     * added into the `config` using the compiled legend `style`.
     */
    computeLegendMetrics(context: any, config: any, style: any): {
        width: any;
        height: any;
    };
}
//# sourceMappingURL=abstract-chart.d.ts.map
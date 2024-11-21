import AbstractChartModifier from './abstract-chart.ts';
import type { ECharts } from 'echarts';
type SeriesConfig = {
    type: string;
    layout: string;
    animation: boolean;
    roam: boolean;
    symbol: string;
    symbolKeepAspect: boolean;
    symbolSize: [number, number];
    edgeSymbol: [string, string];
    edgeShape: string;
    label: {
        show: boolean;
        position: string;
        color: string;
    };
    force: {
        repulsion: number;
        gravity: number;
        edgeLength: [number, number];
    };
    data?: unknown[];
    links?: unknown[];
};
type ChartArgs = {
    tooltipFormatter?: (params: unknown) => string;
    onSelect?: (name: string | null) => void;
    data: unknown[];
    links: unknown[];
    seriesConfig?: Partial<SeriesConfig>;
    series: unknown[];
    title?: string;
};
type TitleContext = {
    layout: {
        width: number;
        height: number;
        x: number;
        y: number;
    };
    args: {
        title?: string;
        drillUpButtonText?: string;
    };
    data: {
        title?: string;
    };
    styles: {
        chartTitle: unknown;
        drillUpButton: unknown;
    };
};
type TitleConfig = {
    title?: {
        text: string;
        left: number;
        top: number;
    }[];
};
export default class GraphChartModifier extends AbstractChartModifier {
    drillPath: never[];
    /**
     * Configures the chart with the provided arguments.
     */
    configureChart(args: ChartArgs, chart: ECharts): void;
    /**
     * Generates the `data` section of the context used to construct this chart.
     */
    createContextData(args: ChartArgs): {
        series: any;
        title: any;
    };
    /**
     * Adds the title to `config` as defined in the data or by `args` and returns
     * the new context layout.
     */
    addTitle(context: TitleContext, config: TitleConfig): {
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
     * Adds the drill up button to `config` and returns the new context layout.
     */
    addDrillUpButton(context: TitleContext, config: TitleConfig): {
        width: number;
        height: number;
        x: any;
        y: any;
    };
    /**
     * Generates the configuration for the drill up button.
     */
    generateDrillUpButtonConfig(text: string, layout: any, style: any): {
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
                    text: string;
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
     * Generates the plot configuration for the graph chart.
     */
    generatePlotConfig(info: any, _cell: any, _context: any, _gridIndex: any): {
        series: {
            type: string;
            layout: string;
            data: any;
            links: any;
            roam: boolean;
            label: {
                show: boolean;
            };
            force: {
                repulsion: number;
            };
        }[];
    };
    /**
     * Default styles for the graph chart.
     */
    get defaultStyles(): {
        plot: {};
        node: {
            font: string;
            textAlign: string;
            marginTop: number;
        };
        link: {
            color: string;
            font: string;
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
}
export {};
//# sourceMappingURL=graph-chart.d.ts.map
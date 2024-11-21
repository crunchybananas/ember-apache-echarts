import AbstractChartModifier from './abstract-chart.ts';
import type { ECharts } from 'echarts';
declare const defaultSeriesConfig: {
    type: string;
    layout: string;
    symbol: string;
    symbolSize: number;
    roam: boolean;
    orient: string;
    zoom: number;
    emphasis: {
        focus: string;
    };
    expandAndCollapse: boolean;
    animationDuration: number;
    animationDurationUpdate: number;
};
type ChartArgs = {
    tooltipFormatter?: (params: unknown) => string;
    onSelect?: (name: string | null) => void;
    data: unknown[];
    links: unknown[];
    seriesConfig?: Partial<typeof defaultSeriesConfig>;
    series?: unknown[];
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
    generateDrillUpButtonConfig(_text: any, _layout: any, _style: any): void;
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
//# sourceMappingURL=tree-chart.d.ts.map
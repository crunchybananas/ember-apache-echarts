import AbstractChartModifier from './abstract-chart';
type Link = {
    source: string;
    target: string;
};
type Node = {
    name: string;
    value: number;
    label: {
        show: boolean;
        position: string;
        backgroundColor: string;
        borderColor: string;
        borderWidth: number;
        padding: number[];
        fontSize: number;
        color: string;
        formatter: (params: any) => string;
    };
    symbolSize: number[];
    symbol: string;
};
export default class GraphChartModifier extends AbstractChartModifier {
    drillPath: never[];
    /**
     * Configures the chart with the provided arguments.
     */
    configureChart(args: any, chart: any): void;
    /**
     * Generates the `data` section of the context used to construct this chart.
     */
    createContextData(args: any, chart: any): {
        series: any;
        title: any;
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
     * Generates the plot configuration for the graph chart.
     */
    generatePlotConfig(info: any, cell: any, context: any, gridIndex: any): {
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
    transformGraphData(inputData: any): {
        nodes: Node[];
        links: Link[];
    };
}
export {};
//# sourceMappingURL=graph-chart.d.ts.map
import Component from '@glimmer/component';
type TooltipAxis = {
    id: string;
    index: number;
    label: string;
    value: number;
};
type TooltipItem = {
    label: string;
    value: number;
    marker: string;
    dataIndex: number;
    data: unknown;
    series: {
        label: string;
        [key: string]: unknown;
    };
};
type TooltipFormatterParams = TooltipItem | TooltipItem[];
interface S {
    Args: {
        width?: string;
        height?: string;
        series?: unknown[];
        data?: unknown;
        variant?: string;
        title?: string;
        rotateData?: boolean;
        categoryProperty?: string;
        valueProperty?: string;
        chartStyle?: unknown;
        chartTitleStyle?: unknown;
        maxColumns?: number;
        orientation?: string;
        colorMap?: unknown;
        cellStyle?: unknown;
        cellTitleStyle?: unknown;
        cellTextOverlayStyle?: unknown;
        plotStyle?: unknown;
        categoryAxisScale?: unknown;
        valueAxisScale?: unknown;
        categoryAxisFormatter?: unknown;
        valueAxisFormatter?: unknown;
        categoryAxisSort?: string;
        categoryAxisMaxLabelCount?: number;
        valueAxisMax?: number;
        xAxisFormatter?: unknown;
        yAxisFormatter?: unknown;
        xAxisStyle?: unknown;
        yAxisStyle?: unknown;
        xAxisPointer?: string;
        yAxisPointer?: string;
        xAxisPointerLabel?: string;
        yAxisPointerLabel?: string;
        xAxisPointerStyle?: unknown;
        yAxisPointerStyle?: unknown;
        xAxisPointerLabelStyle?: unknown;
        yAxisPointerLabelStyle?: unknown;
        xAxisTooltip?: unknown;
        yAxisTooltip?: unknown;
        xAxisZoom?: string;
        yAxisZoom?: string;
        xAxisZoomBrush?: boolean;
        yAxisZoomBrush?: boolean;
        xAxisZoomStyle?: unknown;
        yAxisZoomStyle?: unknown;
        legend?: string;
        legendOrientation?: string;
        legendStyle?: unknown;
        drillUpButtonStyle?: unknown;
        drillUpButtonText?: string;
        onSelect?: (item: unknown) => void;
    };
    Element: HTMLDivElement;
    Blocks: {
        itemTooltip: [TooltipAxis];
        axisTooltip: [TooltipItem];
    };
}
export default class GraphChartComponent extends Component<S> {
    axisTooltipElement: unknown;
    itemTooltipElement: unknown;
    tooltipItem?: TooltipItem;
    tooltipItems: TooltipItem[];
    tooltipAxis?: [TooltipAxis];
    setup(element: HTMLElement): void;
    tooltipFormatter(_params: TooltipFormatterParams[], _dataset: unknown): void;
}
export {};
//# sourceMappingURL=graph.d.ts.map
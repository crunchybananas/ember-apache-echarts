import Component from '@glimmer/component';
type ToolTipAxis = {
    id: string;
    index: number;
    type: string;
    value: number;
    valueLabel: string;
    dimension: string;
};
interface S {
    Args: {
        width?: string | number;
        height?: string | number;
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
        orientation?: 'horizontal' | 'vertical';
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
        axisTooltip: [ToolTipAxis, unknown[]];
        itemTooltip: [unknown];
    };
}
export default class BarChartComponent extends Component<S> {
    axisTooltipElement: any;
    itemTooltipElement: any;
    tooltipItem: any;
    tooltipItems: any;
    tooltipAxis: any;
    get useDefaultGroupedOrStackedTooltip(): boolean | "" | undefined;
    setup(element: HTMLElement): void;
    tooltipFormatter(params: any, dataset: any): any;
}
export {};
//# sourceMappingURL=bar.d.ts.map
import AbstractChartModifier from './abstract-chart.ts';
import type { ECharts } from 'echarts';
import { type PieSeriesOption } from 'echarts/charts';
type ChartArgs = {
    series?: PieSeriesOption[];
    data?: unknown[];
    tooltipFormatter?: (params: unknown) => string;
    onSelect?: (name: string | null) => void;
    variant?: 'pie' | 'donut';
    noDataText?: string;
};
/**
 * Renders one or more pie charts.
 *
 * # Arguments
 *
 * `chartStyle`
 * : CSS properties for the entire chart including background color, border,
 *   margins and padding.
 *
 * `chartTitleStyle`
 * : CSS properties for the title for the entire chart including color, font,
 *   background color, border and alignment.
 *
 * `cellStyle`
 * : CSS properties defining the style for individual plots when rendering more
 *   than one series
 *
 * `cellTitleStyle`
 * : CSS properties defining the style for the titles for individual plots when
 *   rendering more than one series
 *
 * `maxColumns`
 * : The maximum number of columns to render when rendering more than one series
 *
 * `onSelect`
 * : Called when an element on a chart is selected
 *
 * `tooltipFormatter`
 * : The function used to generate the tool tip
 *
 * `variant`
 * : Whether to render a `pie` or a `donut`
 */
export default class PieChartModifier extends AbstractChartModifier {
    configureChart(args: ChartArgs, chart: ECharts): void;
    /**
     * Generates the plot config for a single plot on this chart.
     */
    generatePlotConfig(series: any, layout: any, context: any): {
        series: {
            center: number[];
            selectedMode: string;
            data: any;
            radius?: number[] | undefined;
            type: string;
        }[];
    } | undefined;
    /**
     * Generates text to overlay on each cell of the chart, if any.
     */
    generateTextOverlayConfig(series: any, args: any, layout: any, style: any): (import("echarts/core").EChartsCoreOption & {
        graphic?: {
            'graphic.elements': {
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
            }[];
        };
    }) | undefined;
}
export {};
//# sourceMappingURL=pie-chart.d.ts.map
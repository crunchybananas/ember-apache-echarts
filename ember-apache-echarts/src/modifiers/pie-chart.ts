import AbstractChartModifier from './abstract-chart.ts';

// TODO: Import only the required components to keep the bundle size small. See
//       https://echarts.apache.org/handbook/en/basics/import/ [twl 6.Apr.22]

type ChartArgs = {
  series?: any[];
  data?: any[];
  tooltipFormatter?: (params: any) => string;
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
  configureChart(args: ChartArgs, chart) {
    const allSeries = args.series ?? [{ data: args.data }];
    const { tooltipFormatter, onSelect } = args;
    const { config } = this.buildLayout(args, chart);

    chart.setOption({
      ...config,
      tooltip: {
        formatter: tooltipFormatter,
      },
    });

    chart.handle('selectchanged', (event) => {
      const { fromAction, fromActionPayload, isFromClick } = event;

      if (!isFromClick) {
        return;
      }

      const seriesIndex = fromActionPayload.seriesIndex;
      const dataIndex = fromActionPayload.dataIndexInside;
      const series = allSeries[seriesIndex];
      const name = series.data[dataIndex] ? series.data[dataIndex].name : null;

      if (name) {
        chart.dispatchAction({
          type: fromAction,
          name,
        });
      }

      onSelect && onSelect(fromAction === 'select' ? name : null);
    });
  }

  /**
   * Generates the plot config for a single plot on this chart.
   */
  generatePlotConfig(series, layout, context) {
    const { variant, noDataText } = context.args;

    return (!series.data || series.data.length == 0) && noDataText
      ? undefined
      : {
          series: [
            {
              type: 'pie',
              ...(variant === 'donut' && {
                radius: [
                  (layout.innerHeight * 0.3) / 2,
                  (layout.innerHeight * 0.7) / 2,
                ],
              }),
              center: [
                layout.innerX + layout.innerWidth / 2 - 0.5,
                layout.innerY + layout.innerHeight / 2 - 0.5,
              ],
              // if this is changed, update the select handler below
              selectedMode: 'single',
              data: series.data,
            },
          ],
        };
  }

  /**
   * Generates text to overlay on each cell of the chart, if any.
   */
  generateTextOverlayConfig(series, args, layout, style) {
    const { noDataText } = args;

    return (!series.data || series.data.length == 0) && noDataText
      ? this.generateTextConfig(
          noDataText,
          {
            width: layout.innerWidth,
            height: layout.innerHeight,
            x: layout.innerX,
            y: layout.innerY,
          },
          style
        )
      : undefined;
  }
}

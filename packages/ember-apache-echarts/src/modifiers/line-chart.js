import AbstractChartModifier from './abstract-chart';

// TODO: Import only the required components to keep the bundle size small. See
//       https://echarts.apache.org/handbook/en/basics/import/ [twl 6.Apr.22]

/**
 * Renders one or more line charts.
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
 * `smooth`
 * : Whether to render a `smooth` or a `line`
 * 
 * `type`
 * : https://echarts.apache.org/en/option.html#xAxis.type
 */
export default class LineChartModifier extends AbstractChartModifier {
  configureChart(args, chart) {
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
    const { smooth = true, noDataText, xType = 'category', yType = 'value' } = context.args;

    return (!series.data || series.data.length == 0) && noDataText
      ? undefined
      : {
          xAxis: {
            xType,
            data: series.data.map((e) => e.x),
          },
          yAxis: {
            type: yType,
          },
          series: [
            {
              type: 'line',
              smooth,
              // if this is changed, update the select handler below
              selectedMode: 'single',
              data: series.data.map((e) => e.y),
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

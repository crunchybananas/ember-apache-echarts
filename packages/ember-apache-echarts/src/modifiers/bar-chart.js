import createLookup from '../utils/create-lookup';
import computeStatistic from '../utils/data/compute-statistic';
import getUniqueDatasetValues from '../utils/data/get-unique-dataset-values';
import computeMaxTextMetrics from '../utils/layout/compute-max-text-metrics';
import computeTextMetrics from '../utils/layout/compute-text-metrics';
import resolveStyle from '../utils/style/resolve-style';
import AbstractChartModifier from './abstract-chart';

// TODO: Import only the required components to keep the bundle size small. See
//       https://echarts.apache.org/handbook/en/basics/import/ [twl 6.Apr.22]

/**
 * Renders one or more bar charts.
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
 * `xAxisScale`, `yAxisScale`
 * : Whether to use a shared axis for all plots that accounts for the data
 *   across all series, or use a separate axis for each plot that only uses
 *   that plot's data. Valid values are: `shared`, `separate`
 *
 * `onSelect`
 * : Called when an element on a chart is selected
 *
 * `tooltipFormatter`
 * : The function used to generate the tool tip
 */
export default class BarChartModifier extends AbstractChartModifier {
  get defaultStyles() {
    const styles = super.defaultStyles;

    return {
      ...styles,
      xAxis: {
        font: 'normal 12px Montserrat',
        textAlign: 'center',
        marginTop: 8,
      },
      yAxis: {
        font: 'normal 12px Montserrat',
        textAlign: 'right',
        // Add extra margin to the left too, since the width calculation of the
        // Y axis can sometimes be off a few pixels
        margin: 8,
      },
    };
  }

  configureChart(args, chart) {
    const allSeries = args.series ?? [{ data: args.data }];
    const { xAxisScale, tooltipFormatter, onSelect } = args;
    const { config, context } = this.buildLayout(args, chart);

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
      // NOTE: `dataIndex` isn't actually the data index. It's the index of the
      //       category on the X axis. Thus we need to look up the value based
      //       on how the axis is being rendered. [twl 20.Jul.22]
      const name = xAxisScale === 'shared'
        ? context.data.categories[dataIndex]
        : series.data[dataIndex] ? series.data[dataIndex].name : null;

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
   * Generates the `data` section of the context used to construct this chart.
   */
  createContextData(args, chart) {
    const context = super.createContextData(args, chart);
    const { xAxisScale, yAxisScale } = args;

    return {
      ...context,
      ...xAxisScale === 'shared' && {
        categories: getUniqueDatasetValues(context.series, 'name'),
      },
      ...yAxisScale === 'shared' && {
        maxValue: computeStatistic(context.series, 'max'),
      },
    };
  }

  /**
   * Generates the plot config for a single plot on this chart.
   */
  generatePlotConfig(series, layout, context, gridIndex) {
    const { args, styles, data } = context;
    const { noDataText, xAxisScale, yAxisScale } = args;

    if ((!series.data || series.data.length == 0) && noDataText) {
      return undefined;
    }

    // Analyze the data
    const lookup = createLookup(series.data, 'name', 'value');
    const categories = xAxisScale === 'shared' ? data.categories :
      getUniqueDatasetValues([series], 'name');
    const values = categories.map(category => lookup[category]);
    const maxValue = yAxisScale === 'shared' ? data.maxValue :
      computeStatistic([series], 'max');

    // Configure the Y axis
    // Not the real labels, but good enough for now for computing the metrics
    const yAxisStyle = resolveStyle(styles.yAxis, context.layout);
    const yAxisLabels = values.map(value => value != null ? `${value}` : '');
    const yAxisMetrics = computeMaxTextMetrics(yAxisLabels, yAxisStyle);
    const yAxisWidth = yAxisMetrics.width + yAxisStyle.marginLeft +
      yAxisStyle.marginRight;

    // Only applies when the very top label is rendered; for now, assuming it's
    // always there, since I don't know how to determine this on the fly
    const yAxisTopLabelMetrics = computeTextMetrics(`$maxValue}`, yAxisStyle);
    const yAxisOverflow = yAxisTopLabelMetrics.height / 2;

    // Configure the plot
    const gridWidth = layout.innerWidth - yAxisWidth - layout.borderLeftWidth -
      layout.borderRightWidth;

    // Configure the X axis
    const xAxisStyle = resolveStyle(styles.xAxis, context.layout);
    const xAxisLineWidth = 1;
    const xAxisLabelWidth = gridWidth / categories.length;
    const xAxisMetrics = computeMaxTextMetrics(categories, xAxisStyle,
      xAxisLabelWidth);
    const xAxisHeight = xAxisMetrics.height + xAxisStyle.marginTop +
      xAxisStyle.marginBottom + xAxisLineWidth;

    return {
      grid: [{
        // Not sure why the 1px adjustment is needed to `x`, but it is
        x: layout.innerX + yAxisWidth - 1,
        y: layout.innerY + yAxisOverflow,
        width: gridWidth,
        height: layout.innerHeight - xAxisHeight - yAxisOverflow,
      }],
      yAxis: [{
        gridIndex,
        type: 'value',
        max: yAxisScale === 'shared' ? data.maxValue : 'dataMax',
        axisLabel: {
          // margin between the axis label and the axis line
          margin: yAxisStyle.marginRight,
          ...this.generateAxisLabelConfig(layout, yAxisStyle),
        },
      }],
      xAxis: [{
        gridIndex,
        type: 'category',
        data: categories,
        axisLabel: {
          // Ensure every category is shown on the axis
          interval: 0,
          overflow: 'break',
          width: xAxisLabelWidth,
          // margin between the axis label and the axis line
          margin: xAxisStyle.marginTop,
          ...this.generateAxisLabelConfig(layout, xAxisStyle),
        },
      }],
      series: [{
        type: 'bar',
        colorBy: 'data',
        xAxisIndex: gridIndex,
        yAxisIndex: gridIndex,
        // if this is changed, update the select handler in `configureChart`
        selectedMode: 'single',
        data: values,
      }]
    };
  }

  /**
   * Generates the configuration for an axis label.
   */
  generateAxisLabelConfig(layout, style) {
    return {
      color: style.color,
      fontStyle: style.fontStyle,
      fontWeight: style.fontWeight,
      fontFamily: style.fontFamily,
      fontSize: style.fontSize,
      align: style.textAlign,
      verticalAlign: style.verticalAlign,
      backgroundColor: style.backgroundColor,
      // Safari only parses contituent values, so use "top" as a proxy for all
      borderWidth: style.borderTopWidth,
      borderColor: style.borderTopColor,
      borderType: style.borderTopType,
      borderRadius: style.borderRadius,
      padding: [
        style.paddingTop,
        style.paddingRight,
        style.paddingBottom,
        style.paddingLeft,
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

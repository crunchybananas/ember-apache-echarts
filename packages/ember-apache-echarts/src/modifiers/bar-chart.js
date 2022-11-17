import computeStatistic from '../utils/data/compute-statistic';
import getSeriesData from '../utils/data/get-series-data';
import getSeriesTotals from '../utils/data/get-series-totals';
import getUniqueDatasetValues from '../utils/data/get-unique-dataset-values';
import rotateDataSeries from '../utils/data/rotate-data-series';
import computeMaxTextMetrics from '../utils/layout/compute-max-text-metrics';
import computeTextMetrics from '../utils/layout/compute-text-metrics';
import resolveStyle from '../utils/style/resolve-style';
import AbstractChartModifier from './abstract-chart';

// TODO: Import only the required components to keep the bundle size small. See
//       https://echarts.apache.org/handbook/en/basics/import/ [twl 6.Apr.22]

const setItemColor = (colorMap, item, color) =>
  !colorMap?.[color]
    ? item
    : {
        ...item,
        itemStyle: {
          color: colorMap[color],
        },
      };

/**
 * Renders one or more bar charts.
 *
 * # Arguments
 *
 * ## Chart Layout
 *
 * `chartStyle`
 * : CSS properties for the entire chart including background color, border,
 *   margins and padding.
 *
 * `chartTitleStyle`
 * : CSS properties for the title for the entire chart including color, font,
 *   background color, border and alignment.
 *
 * `maxColumns`
 * : The maximum number of columns to render when rendering more than one series
 *
 *
 *  ## Plots
 *
 * `variant`
 * : Which style chart to render: `bar`, `line`, `area`, `groupedBar`,
 *   `stackedBar` or `stackedArea`
 *
 * `orientation`
 * : Which orientation to render the value axes: `vertical` (default) or
 *   `horizontal`
 *
 * `colorMap`
 * : A hash that maps series names to the colors to use for the data items in
 *   those series
 *
 * `cellStyle`
 * : CSS properties defining the style for individual plots when rendering more
 *   than one series
 *
 * `cellTitleStyle`
 * : CSS properties defining the style for the titles for individual plots when
 *   rendering more than one series
 *
 *
 * ## Axes
 *
 * `categoryAxisScale`, `valueAxisScale`
 * : Whether to use a shared axis for all plots that accounts for the data
 *   across all series, or use a separate axis for each plot that only uses
 *   that plot's data. Valid values are: `shared`, `separate`
 *
 * `xAxisStyle`
 * : CSS properties defining the style for horizontal X axis, regardless of the
 *   value of `orientation`
 *
 * `yAxisStyle`
 * : CSS properties defining the style for vertical Y axis, regardless of the
 *   value of `orientation`
 *
 *
 * ## Legend
 *
 * `legend`
 * : Whether and where to display a legend: `none`, `top`, `bottom`, `left`,
 *   `right`, `topLeft`, `topRight`, `bottomLeft`, `bottomRight`, `leftTop`,
 *   `leftBottom`, `rightTop`, `rightBottom`
 *
 * `legendOrientation`
 * : Which orientation to render the legend: `horizontal`, `vertical` or `auto`
 *   (default), where `auto` renders the legend horizontally when positioned
 *   on the top or bottom of the chart, and vertically when positioned on the
 *   left or right of the chart
 *
 * `legendStyle`
 * : CSS properties for the chart legend including color, font, background
 *   color, border and alignment.
 *
 *
 * ## Data Zoom
 *
 * `xAxisZoom`
 * : Whether and where to display a data zoom control for the X axis: `top`,
 *   `bottom`, `none` (default)
 *
 * `xAxisZoomBrush`
 * : Whether to enable brush select for the X axis data zoom control. Defaults
 *   to `false`
 *
 * `xAxisStyle`
 * : CSS properties defining the style for the the X axis data zoom control
 *
 * `yAxisZoom`
 * : Whether and where to display a data zoom control for the Y axis: `top`,
 *   `bottom`, `none` (default)
 *
 * `yAxisZoomBrush`
 * : Whether to enable brush select for the Y axis data zoom control. Defaults
 *   to `false`
 *
 * `yAxisStyle`
 * : CSS properties defining the style for the the Y axis data zoom control
 *
 *
 * ## Tooltips
 *
 * `tooltipFormatter`
 * : The function used to generate the tool tip
 *
 *
 * ## Events
 *
 * `onSelect`
 * : Called when an element on a chart is selected
 */
export default class BarChartModifier extends AbstractChartModifier {
  get defaultStyles() {
    const styles = super.defaultStyles;

    return {
      ...styles,
      xAxis: {
        font: 'normal 12px Montserrat,sans-serif',
        textAlign: 'center',
        marginTop: 8,
      },
      yAxis: {
        font: 'normal 12px Montserrat,sans-serif',
        textAlign: 'right',
        // Add extra margin to the left too, since the width calculation of the
        // Y axis can sometimes be off a few pixels
        margin: 8,
      },
    };
  }

  isGroupedVariant(variant) {
    return ['groupedBar'].includes(variant);
  }

  isStackedVariant(variant) {
    return ['stackedArea', 'stackedBar'].includes(variant);
  }

  isBarVariant(variant) {
    return ['bar', 'groupedBar', 'stackedBar'].includes(variant ?? 'bar');
  }

  isAreaVariant(variant) {
    return ['area', 'stackedArea'].includes(variant);
  }

  configureChart(args, chart) {
    const allSeries = args.series ?? [{ data: args.data }];
    const { categoryAxisScale, tooltipFormatter, onSelect } = args;
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
      const name =
        categoryAxisScale === 'shared'
          ? context.data.categories[dataIndex]
          : series.data[dataIndex]
          ? series.data[dataIndex].name
          : null;

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
    const { categoryAxisScale, valueAxisScale } = args;

    return {
      ...context,
      ...(categoryAxisScale === 'shared' && {
        categories: getUniqueDatasetValues(context.series, 'name'),
      }),
      ...(valueAxisScale === 'shared' && {
        maxValue: computeStatistic(context.series, 'max'),
      }),
      // If grouped or stacked, render multple series on a single chart rather
      // than one chart per series
      series: this.isStackedVariant(args.variant)
        ? [{ data: rotateDataSeries(context.series, 'name', 'value') }]
        : this.isGroupedVariant(args.variant)
        ? [{ data: context.series }]
        : context.series,
    };
  }

  /**
   * Returns the labels for the legend.
   */
  getLegendLabels(series, args) {
    if (
      !this.isStackedVariant(args.variant) &&
      !this.isGroupedVariant(args.variant)
    ) {
      return super.getLegendLabels(series, args);
    }

    // Grouped and stacked datasets may have a dummy root node
    return series[0].data.map((info) => info.label ?? info.name);
  }

  /**
   * Generates the plot config for a single plot on this chart.
   */
  generatePlotConfig(series, layout, context, gridIndex) {
    const { args, styles, data } = context;
    const { noDataText, categoryAxisScale, valueAxisScale } = args;

    if ((!series.data || series.data.length == 0) && noDataText) {
      return undefined;
    }

    const isHorizontal = args.orientation === 'horizontal';
    const isBarVariant = this.isBarVariant(args.variant);
    const isAreaVariant = this.isAreaVariant(args.variant);
    const isStackedVariant = this.isStackedVariant(args.variant);
    const isGroupedOrStacked =
      this.isGroupedVariant(args.variant) || isStackedVariant;
    const seriesData = isGroupedOrStacked ? series.data : [series];

    // Analyze the data
    const categories =
      categoryAxisScale === 'shared'
        ? data.categories
        : getUniqueDatasetValues(seriesData, 'name');
    const maxValue =
      valueAxisScale === 'shared'
        ? data.maxValue
        : computeStatistic(seriesData, 'max');
    const values = isGroupedOrStacked
      ? getSeriesTotals(series.data, categories, 'name', 'value')
      : getSeriesData(series.data, categories, 'name', 'value');
    // Not the real labels, but good enough for now for computing the metrics
    const valueTexts = values.map((value) => (value != null ? `${value}` : ''));

    const yAxisStyle = resolveStyle(styles.yAxis, context.layout);
    const yAxisInfo = this.computeYAxisInfo(
      yAxisStyle,
      isHorizontal ? categories : valueTexts,
      maxValue
    );

    const xAxisStyle = resolveStyle(styles.xAxis, context.layout);
    const xAxisInfo = this.computeXAxisInfo(
      layout,
      xAxisStyle,
      isHorizontal ? valueTexts : categories,
      yAxisInfo,
      isHorizontal
    );
    // Setup base configurations
    const seriesBaseConfig = {
      xAxisIndex: gridIndex,
      yAxisIndex: gridIndex,
      type: isBarVariant ? 'bar' : 'line',
      ...(isAreaVariant && {
        areaStyle: {},
      }),
      ...(!isBarVariant && {
        symbol: 'circle',
        symbolSize: isAreaVariant ? 6 : 8,
      }),
      ...(!isBarVariant && {
        emphasis: {
          itemStyle: {
            shadowBlur: 3,
            shadowColor: '#000000',
            shadowOffsetX: 1,
            shadowOffsetY: 1,
          },
        },
      }),
      // if this is changed, update the select handler in `configureChart`
      selectedMode: 'single',
    };
    const valueAxisConfig = [
      {
        gridIndex,
        type: 'value',
        max: valueAxisScale === 'shared' ? data.maxValue : 'dataMax',
        axisLabel: {
          // margin between the axis label and the axis line
          margin: yAxisStyle.marginRight,
          ...this.generateAxisLabelConfig(
            layout,
            isHorizontal ? xAxisStyle : yAxisStyle
          ),
        },
      },
    ];
    const categoryAxisConfig = [
      {
        gridIndex,
        type: 'category',
        data: categories,
        axisLabel: {
          // Ensure every category is shown on the axis
          interval: 0,
          ...(!isHorizontal && {
            overflow: 'break',
          }),
          width: xAxisInfo.maxLabelWidth,
          // margin between the axis label and the axis line
          margin: xAxisStyle.marginTop,
          ...this.generateAxisLabelConfig(
            layout,
            isHorizontal ? yAxisStyle : xAxisStyle
          ),
        },
      },
    ];

    return {
      grid: [
        {
          // Not sure why the 1px adjustment is needed to `x`, but it is
          x: layout.innerX + yAxisInfo.width - 1,
          y: layout.innerY + yAxisInfo.heightOverflow,
          width: xAxisInfo.width,
          height:
            layout.innerHeight - xAxisInfo.height - yAxisInfo.heightOverflow,
        },
      ],
      yAxis: isHorizontal ? categoryAxisConfig : valueAxisConfig,
      xAxis: isHorizontal ? valueAxisConfig : categoryAxisConfig,
      series: !isGroupedOrStacked
        ? [
            {
              ...seriesBaseConfig,
              data: values,
              ...(isBarVariant && {
                colorBy: 'data',
              }),
            },
          ]
        : series.data.map((info) => ({
            ...seriesBaseConfig,
            name: info.label,
            data: info.data.map((item) => ({
              ...item,
              ...setItemColor(args.colorMap, item, info.label),
            })),
            ...(isStackedVariant && {
              stack: 'total',
            }),
          })),
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

  /**
   * Computes style and metrics about the Y axis for charts that use an Y axis.
   */
  computeYAxisInfo(style, labels, maxValue) {
    const labelMetrics = computeMaxTextMetrics(labels, style);
    const width = labelMetrics.width + style.marginLeft + style.marginRight;

    // Only applies when the very top label is rendered; for now, assuming it's
    // always there, since I don't know how to determine this on the fly
    const topLabelMetrics = computeTextMetrics(`${maxValue}`, style);
    const heightOverflow = topLabelMetrics.height / 2;

    return {
      width,
      // NOTE: no height returned because we need to know the X axis height to
      //       determine that and `computeXAxisInfo` needs the result from this
      //       function to calculate its result. We don't use the Y axis height
      //       currently in the code, so this is fine. [twl 16.Nov.22]
      labelMetrics,
      heightOverflow,
    };
  }

  /**
   * Computes style and metrics about the X axis for charts that use an X axis.
   */
  computeXAxisInfo(layout, style, labels, yAxisInfo, isHorizontal) {
    const width =
      layout.innerWidth -
      yAxisInfo.width -
      layout.borderLeftWidth -
      layout.borderRightWidth;
    const lineWidth = isHorizontal ? 0 : 1;
    // 10 is arbitrary number here, since we don't know how many divisions the
    // chart will create if the X axis is a value axis
    const maxLabelWidth = width / (isHorizontal ? 10 : labels.length);
    const labelMetrics = computeMaxTextMetrics(labels, style, maxLabelWidth);
    const height =
      labelMetrics.height + style.marginTop + style.marginBottom + lineWidth;

    return {
      width,
      height,
      labelMetrics,
      maxLabelWidth,
    };
  }
}

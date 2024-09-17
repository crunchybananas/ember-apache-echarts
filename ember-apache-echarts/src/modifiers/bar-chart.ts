import { tracked } from '@glimmer/tracking';
// @ts-expect-error
import { compact, countBy, flatten } from 'lodash-es';
import * as echarts from 'echarts';
import mergeAtPaths from '../utils/merge-at-paths.ts';
import parseAxisLabel from '../utils/chart/parse-axis-label.ts';
import computeStatistic from '../utils/data/compute-statistic.ts';
import getSeriesData from '../utils/data/get-series-data.ts';
import getSeriesTotals from '../utils/data/get-series-totals.ts';
import getUniqueDatasetValues from '../utils/data/get-unique-dataset-values.ts';
import rotateDataSeries from '../utils/data/rotate-data-series.ts';
import computeMaxTextMetrics from '../utils/layout/compute-max-text-metrics.ts';
import computeTextMetrics from '../utils/layout/compute-text-metrics.ts';
import resolveStyle from '../utils/style/resolve-style.ts';
import AbstractChartModifier from './abstract-chart.ts';
import type { ECharts, SelectChangedPayload } from 'echarts';

type Variant =
  | 'bar'
  | 'line'
  | 'area'
  | 'groupedBar'
  | 'groupedLine'
  | 'stackedBar'
  | 'stackedArea';

type AxisConfig = {
  type: string;
  axisLabel?: {
    showMinLabel?: boolean;
    showMaxLabel?: boolean;
  };
};

const DEFAULT_CATEGORY_PROPERTY = 'name';
const DEFAULT_VALUE_PROPERTY = 'value';

// TODO: Import only the required components to keep the bundle size small. See
//       https://echarts.apache.org/handbook/en/basics/import/ [twl 6.Apr.22]
// @ts-expect-error
const setItemColor = (colorMap, item, color) =>
  !colorMap?.[color]
    ? item
    : {
        ...item,
        itemStyle: {
          color: colorMap[color],
        },
      };

const isShowingAxisLabel = (axisConfig: AxisConfig, labelType: 'Min' | 'Max') =>
  axisConfig.axisLabel?.[`show${labelType}Label`] === false ||
  (axisConfig.type === 'time' && axisConfig.axisLabel?.[`show${labelType}Label`] !== true);
// @ts-expect-error
const computeData = (data, categories, args) => {
  const { categoryProperty = DEFAULT_CATEGORY_PROPERTY } = args;
  const { categoryAxisType, orientation } = args;
  // @ts-expect-error - not sure what the 4th arg should be
  const series = getSeriesData(data, categories, categoryProperty);

  return categoryAxisType !== 'time'
    ? series
    : // @ts-expect-error
      series.map((item) => ({
        ...item,
        value: orientation === 'horizontal' ? [item.value, item.name] : [item.name, item.value],
      }));
};

type ChartArgs = {
  tooltipFormatter?: (params: unknown) => string;
  onSelect?: (name: string | null) => void;
  data: unknown[];
  series?: unknown[];
  rotateData?: boolean;
  categoryProperty?: string;
  valueProperty?: string;
  variant?: Variant;
  categoryAxisScale?: 'shared' | 'separate';
  valueAxisScale?: 'shared' | 'separate';
  categoryAxisType?: 'category' | 'time';
  categoryAxisSort?: 'firstSeries' | 'asc' | 'desc' | ((a: string, b: string) => number);
  missingCategoryFormat?: string;
  missingValueFormat?: string;
  drillUpButtonText?: string;
  title?: string;
};

/**
 * Renders one or more bar charts.
 *
 * # Arguments
 *
 * ## Data
 *
 * `data`
 * : An array of data objects, where each data object has a category property
 *   (e.g., `name`) and a value property (e.g., `value`).
 *
 * `series`
 * : An array of data series, where each series has a label defined using the
 *   `label` or `name` property, data contained in the `data` property (see
 *   `data` argument above for the format) and an optional `series` property
 *   which contains an array of drillable child series. When the `series`
 *   argument is present, the `data` argument is ignored.
 *
 * `rotateData`
 * : Rotates the data series so the "columns" become the "rows" and the "rows"
 *   become the "columns". For hierarchical series, the names/labels of each
 *   data item within each series will each become their own series, while the
 *   original series labels are used to label the values.
 *
 * `categoryProperty`
 * : The name of the property within the data to use as the category for each
 *   data point.
 *
 * `valueProperty`
 * : The name of the property within the data to use as the value for each data
 *   point.
 *
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
 *   `groupedLine`, `stackedBar` or `stackedArea`
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
 * `plotStyle`
 * : CSS properties defining the style of the plot (area defined by the axes)
 *
 * `seriesConfig`
 * : A hash of EChart render properties for the `variant`. Use for properties
 *   not yet supported by this chart natively. Properties used by this chart
 *   internally are not supported.
 *
 *
 * ## Axes
 *
 * `categoryAxisScale`, `valueAxisScale`
 * : Whether to use a shared axis for all plots that accounts for the data
 *   across all series, or use a separate axis for each plot that only uses
 *   that plot's data. Valid values are: `shared`, `separate` (default)
 *
 * `categoryAxisType`
 * : The type of axis the category axis represents: `category` (default) or
 *   `time`. If set to `time`, the categories must either be `Date` objects or
 *   Unix timestamps.
 *
 * `categoryAxisSort`
 * : How to sort the labels on the category axis: `firstSeries` (default),
 *   `asc`, `desc` or a custom sort function. By default, the sort order of the
 *   labels for the data in the first series is used.
 *
 * `categoryAxisMaxLabelCount`
 * : The maximum number of categories to show on the category axis. The number
 *   of actual labels rendered may be lower than this; this merely sets the
 *   maximum number so labels are not too thin.
 *
 * `valueAxisMax`
 * : The maximum value of the value axis. Valid values are: a specific number,
 *   `dataMax` or `dataMaxRoundedUp` (default). `dataMaxRoundedUp` is only
 *   supported when `valueAxisScale` is `separate` and rounds the data maximum
 *   up so the axis ticks are evenly distributed on the value axis.
 *
 * `categoryAxisFormatter`, `valueAxisFormatter`
 * : Functions used to format the values for the category or value axis,
 *   respectively. Passed the value to be formatted, the type of element the
 *   value is being formatted for (`axis`, `itemTooltip`, `axisTooltip`) and for
 *   axis elements, the index of the axis.
 *
 * `missingCategoryFormat`, `missingValueFormat`
 * : The text to use when the category or value is missing, i.e., an empty
 *   string, undefined or null. If not defined, then the category or value is
 *   passed into either `categoryAxisFormatter` or `valueAxisFormatter`,
 *   respectively, to be formatted
 *
 * `xAxisStyle`
 * : CSS properties defining the style for horizontal X axis, regardless of the
 *   value of `orientation`
 *
 * `yAxisStyle`
 * : CSS properties defining the style for vertical Y axis, regardless of the
 *   value of `orientation`
 *
 * `xAxisPointer`, `yAxisPointer`
 * : The style to use for an axis pointer: `line`, `shadow`, `none` (default)
 *
 * `xAxisPointerLabel`
 * : Whether and where to display the label for the X axis pointer:
 *   `bottom` (default), `top`, `none`
 *
 * `yAxisPointerLabel`
 * : Whether and where to display the label for the Y axis pointer:
 *   `left` (default), `right`, `none`
 *
 * `xAxisPointerStyle`, `yAxisPointerStyle`
 * : CSS properties defining the style of an axis pointer including border &
 *   opacity if using `line` as the pointer or background color & opacity if
 *   using `shadow` as the pointer.
 *
 * `xAxisPointerLabelStyle`, `yAxisPointerLabelStyle`
 * : CSS properties defining the style of an axis pointer label.
 *
 * `xAxisTooltip`
 * : Whether the tooltip for the X axis should be shown near the pointer when
 *   it's active. Defaults to `true`
 *
 * `yAxisTooltip`
 * : Whether the tooltip for the Y axis should be shown near the pointer when
 *   it's active. Defaults to `false`
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
 * ## Data Drilling
 *
 * `drillUpButtonStyle`
 * : CSS properties defining the style of the drill up button
 *
 * `drillUpButtonText`
 * : The text of the drill up button. Defaults to `<`.
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
  @tracked drillPath = [];

  get defaultStyles() {
    const styles = super.defaultStyles;

    return {
      ...styles,
      plot: {},
      xAxis: {
        font: 'normal 12px Montserrat,sans-serif',
        textAlign: 'center',
        marginTop: 8,
      },
      yAxis: {
        font: 'normal 12px Montserrat,sans-serif',
        textAlign: 'right',
        marginRight: 8,
      },
      xAxisPointer: {
        border: 'dashed 1px #555',
        backgroundColor: '#ccc',
        opacity: '0.5',
      },
      yAxisPointer: {
        border: 'dashed 1px #555',
        backgroundColor: '#ccc',
        opacity: '0.5',
      },
      xAxisPointerLabel: {
        color: '#000',
        font: 'normal 12px Montserrat,sans-serif',
        backgroundColor: '#eee',
        border: 'solid 1px #999',
        borderRadius: 0,
        padding: 4,
        margin: 4,
      },
      yAxisPointerLabel: {
        color: '#000',
        font: 'normal 12px Montserrat,sans-serif',
        backgroundColor: '#eee',
        border: 'solid 1px #999',
        borderRadius: 0,
        padding: 4,
        marginRight: 4,
      },
      drillUpButton: {
        margin: 0,
        color: '#000',
        font: 'normal 22px Montserrat,sans-serif',
        marginRight: 10,
      },
    };
  }

  isGroupedVariant(variant: Variant) {
    return ['groupedBar', 'groupedLine'].includes(variant);
  }

  isStackedVariant(variant: Variant) {
    return ['stackedArea', 'stackedBar'].includes(variant);
  }

  isBarVariant(variant: Variant) {
    return ['bar', 'groupedBar', 'stackedBar'].includes(variant ?? 'bar');
  }

  isAreaVariant(variant: Variant) {
    return ['area', 'stackedArea'].includes(variant);
  }

  /**
   * Returns the categories used within the data series in render order.
   */
  // @ts-expect-error
  getCategories(args, series) {
    const { categoryAxisSort = 'firstSeries', categoryAxisType } = args;
    const { categoryProperty = DEFAULT_CATEGORY_PROPERTY } = args;
    const categories = getUniqueDatasetValues(series, categoryProperty);

    if (categoryAxisSort !== 'firstSeries') {
      if (categoryAxisSort === 'asc') {
        categories.sort();
      } else if (categoryAxisSort === 'desc') {
        categories.sort().reverse();
      } else if (typeof categoryAxisSort === 'function') {
        categories.sort(categoryAxisSort);
      } else {
        console.warn(`Invalid 'categoryAxisSort' value: ${categoryAxisSort}`);
      }
    } else if (categoryAxisType === 'time') {
      categories.sort((date1, date2) => (date1?.valueOf() ?? 0) - (date2?.valueOf() ?? 0));
    }

    return categories;
  }

  /**
   * Formats the `name` and `value` within `params` when a category or value
   * formatter are defined, respectively.
   */
  // @ts-expect-error
  formatTooltipParams(args, params, elementType) {
    const { valueAxisFormatter = echarts.format.addCommas } = args;
    const { categoryAxisType, categoryAxisFormatter, orientation } = args;
    const { missingCategoryFormat, missingValueFormat } = args;

    // The `time` axis requires tuples for the `value`; reverse this before
    // passing into the tooltip, however. Note that this also modifies
    // `params.data.value` since it's the same array instance
    if (categoryAxisType === 'time') {
      params.value = params.value[orientation === 'horizontal' ? 0 : 1];
    }

    // prettier not formatting nested ternaries properly, so turn it off
    // prettier-ignore
    return {
      ...params,
      value:
        !params.value && missingValueFormat != null
          ? missingValueFormat
          : valueAxisFormatter
            ? valueAxisFormatter(params.value, elementType)
            : params.value,
      category:
        !params.name && missingCategoryFormat != null
          ? missingCategoryFormat
          : categoryAxisFormatter
            ? categoryAxisFormatter(params.name, elementType)
            : params.name,
    };
  }

  configureChart(args: ChartArgs, chart: ECharts) {
    const allSeries = args.series ?? [{ data: args.data }];
    const { categoryAxisScale, tooltipFormatter, onSelect } = args;
    const { config, context } = this.buildLayout(args, chart);

    chart.setOption(
      {
        ...config,
        tooltip: {
          trigger: 'item',
          ...(tooltipFormatter && {
            formatter: (params: unknown[]) =>
              tooltipFormatter(
                params.length != null
                  ? params.map((param) => this.formatTooltipParams(args, param, 'axisTooltip'))
                  : this.formatTooltipParams(args, params, 'itemTooltip'),
                // @ts-expect-error
                context.data.dataset
              ),
          }),
        },
      },
      {
        notMerge: true,
      }
    );

    chart.on('selectchanged', (event) => {
      const { fromAction, fromActionPayload, isFromClick } = event as SelectChangedPayload;

      if (!isFromClick) {
        return;
      }

      const seriesIndex = fromActionPayload['seriesIndex'];
      const dataIndex = fromActionPayload['dataIndexInside'];
      const series = allSeries[seriesIndex];
      // NOTE: `dataIndex` isn't actually the data index. It's the index of the
      //       category on the X axis. Thus we need to look up the value based
      //       on how the axis is being rendered. [twl 20.Jul.22]
      const name =
        categoryAxisScale === 'shared'
          ? // @ts-expect-error: until the abstract is typed this needs to wait
            context.data.categories[dataIndex]
          : // @ts-expect-error: TypeScript doesn't know about the structure of `series.data`
            series.data[dataIndex]
            ? // @ts-expect-error: TypeScript doesn't know about the structure of `series.data`
              series.data[dataIndex][args.categoryProperty ?? DEFAULT_CATEGORY_PROPERTY]
            : null;

      if (name) {
        chart.dispatchAction({
          type: fromAction,
          name,
        });
      }

      onSelect && onSelect(fromAction === 'select' ? name : null);
    });

    // Change the default behavior of how selections work on the legend
    // @ts-expect-error
    chart.on('legendselectchanged', ({ name, selected }) => {
      const selections = Object.values(selected);
      const counts = countBy(selections);

      // If the only one selected is the one that just changed, or if nothing is
      // selected, then invert the selection
      if ((counts.false === 1 && selected[name] === false) || counts.false === selections.length) {
        chart.dispatchAction({
          type: 'legendInverseSelect',
        });
      }
    });

    // Handle the drill in action
    chart.on('dblclick', ({ seriesIndex }) => {
      // @ts-expect-error
      if (context.data.dataset[seriesIndex].series) {
        // @ts-expect-error
        this.drillPath.pushObject(seriesIndex);
      }
    });
  }

  /**
   * Generates the `data` section of the context used to construct this chart.
   */
  // @ts-expect-error
  createContextData(args) {
    const context = super.createContextData(args);
    const { rotateData, categoryAxisScale, valueAxisScale } = args;
    const { categoryProperty = DEFAULT_CATEGORY_PROPERTY } = args;
    const { valueProperty = DEFAULT_VALUE_PROPERTY } = args;
    const seriesData = rotateData
      ? rotateDataSeries(context.series, categoryProperty, valueProperty)
      : context.series;
    const { series, title } = this.drillPath.reduce(
      ({ series }, pathIndex) => ({
        series: series[pathIndex].series,
        title: series[pathIndex].label,
      }),
      { series: seriesData, title: args.title }
    );

    return {
      ...context,
      ...(categoryAxisScale === 'shared' && {
        categories: this.getCategories(args, context.series),
      }),
      ...(valueAxisScale === 'shared' && {
        minValue: computeStatistic(context.series, 'min'),
        maxValue: computeStatistic(context.series, 'max'),
      }),
      // If grouped or stacked, render multple series on a single chart rather
      // than one chart per series
      series:
        this.isStackedVariant(args.variant) || this.isGroupedVariant(args.variant)
          ? [{ data: series }]
          : series,
      dataset: series,
      title,
    };
  }

  /**
   * Adds the title to `config` as defined in the data or by `args` and returns
   * the new context layout.
   */
  // @ts-expect-error
  addTitle(context, config) {
    const buttonLayout = this.addDrillUpButton(context, config);
    const buttonWidth = context.layout.width - buttonLayout.width;
    const buttonHeight = context.layout.height - buttonLayout.height;

    const titleLayout = super.addTitle(
      {
        ...context,
        args: {
          ...context.args,
          title: context.data.title ?? context.args.title,
        },
      },
      config
    );

    if (config.title?.[0]) {
      const titleHeight = context.layout.height - titleLayout.height;

      if (buttonHeight > titleHeight) {
        const heightDifference = buttonHeight - titleHeight;

        titleLayout.height -= heightDifference;
        titleLayout.y += heightDifference;

        // Center the title within the height of the button
        config.title[0].top = config.title[0].top / 2 + heightDifference / 2;
      }

      config.title[0].left += buttonWidth;
    }

    return titleLayout;
  }

  /**
   * Adds the drill up button to `config` and returns the new context layout.
   */
  // @ts-expect-error
  addDrillUpButton(context, config) {
    if (!this.drillPath.length) {
      return context.layout;
    }

    const { layout, args, styles } = context;
    const { drillUpButtonText = '<' } = args;
    const style = resolveStyle(styles.drillUpButton, layout);
    const titleStyle = resolveStyle(styles.chartTitle, layout);
    const xMargins = style.marginLeft + style.marginRight;
    const yMargins = style.marginTop + style.marginBottom;

    // Ensure the button aligns with where the title is positioned
    style.marginTop += titleStyle.marginTop;
    style.marginLeft += titleStyle.marginLeft;

    const buttonConfig = this.generateDrillUpButtonConfig(drillUpButtonText, layout, style);

    mergeAtPaths(config, [buttonConfig]);
    // @ts-expect-error
    const buttonBox = buttonConfig['graphic.elements'][0].children[0].shape;

    return {
      ...layout,
      width: layout.width - (buttonBox?.width ?? 0) - xMargins,
      height: layout.height - (buttonBox?.height ?? 0) - yMargins,
      x: layout.x + (buttonBox?.width ?? 0) + xMargins,
      y: layout.y + (buttonBox?.height ?? 0) + yMargins,
    };
  }

  /**
   * Generates the configuration for the drill up button.
   */
  // @ts-expect-error
  generateDrillUpButtonConfig(text: string, layout, style) {
    const textMetrics = computeTextMetrics(text, style);

    return {
      'graphic.elements': [
        {
          type: 'group',
          left: style.marginLeft,
          top: style.marginTop,
          children: [
            // NOTE: This element is referenced by path in `addDrillUpButton`
            {
              type: 'rect',
              shape: {
                width: textMetrics.width + style.paddingLeft + style.paddingRight,
                height: textMetrics.fontHeight + style.paddingTop + style.paddingBottom,
                r: [
                  style.borderTopLeftRadius ?? 0,
                  style.borderTopRightRadius ?? 0,
                  style.borderBottomRightRadius ?? 0,
                  style.borderBottomLeftRadius ?? 0,
                ],
              },
              style: {
                stroke: style.borderColor ?? '#fff',
                fill: style.backgroundColor ?? '#fff',
              },
            },
            {
              type: 'text',
              x: style.paddingLeft,
              y: style.paddingTop,
              style: {
                fill: style.color,
                text,
                font: `${style.fontStyle} ${style.fontWeight} ${style.fontSize}px ${style.fontFamily}`,
              },
              textConfig: {
                distance: 0,
                inside: true,
                position: [10, 0],
              },
            },
          ],
          // @ts-expect-error
          onclick: () => this.drillPath.popObject(),
        },
      ],
    };
  }

  /**
   * Returns the labels for the legend.
   */
  // @ts-expect-error
  getLegendLabels(series, args) {
    if (!this.isStackedVariant(args.variant) && !this.isGroupedVariant(args.variant)) {
      return super.getLegendLabels(series, args);
    }

    // Grouped and stacked datasets may have a dummy root node
    // @ts-expect-error
    return series[0].data.map((info) => info.label ?? info.name);
  }

  /**
   * Calculate the categories and range used for the category axis.
   */
  // @ts-expect-error
  computeCategoryInfo(series, context) {
    const { args, data } = context;
    const { variant, categoryAxisScale } = args;
    const seriesData =
      this.isGroupedVariant(variant) || this.isStackedVariant(variant) ? series.data : [series];
    const categories =
      categoryAxisScale === 'shared' ? data.categories : this.getCategories(args, seriesData);

    return {
      categories,
      first: categories[0],
      last: categories[categories.length - 1],
      count: categories.length,
    };
  }

  /**
   * Calculate the values and stats used for the value axis.
   */
  // @ts-expect-error
  computeValueInfo(series, context, categories) {
    const { args, data } = context;
    const { variant, valueAxisScale } = args;
    const { categoryProperty = DEFAULT_CATEGORY_PROPERTY } = args;
    const { valueProperty = DEFAULT_VALUE_PROPERTY } = args;
    const isSharedScale = valueAxisScale === 'shared';

    let values;

    if (this.isStackedVariant(variant)) {
      values = getSeriesTotals(series.data, categories, categoryProperty, valueProperty);
    } else if (this.isGroupedVariant(variant)) {
      values = compact(
        flatten(
          // @ts-expect-error
          series.data.map((group) =>
            getSeriesData(group.data, categories, categoryProperty, valueProperty)
          )
        )
      );
    } else {
      values = getSeriesData(series.data, categories, categoryProperty, valueProperty);
    }

    return {
      values,
      minimum: isSharedScale ? data.minValue : Math.min(...values),
      maximum: isSharedScale ? data.maxValue : Math.max(...values),
    };
  }

  /**
   * Calculate the ticks used for the category axis.
   *
   * Each tick may have the following properties:
   *
   * `text`
   * : The formatted text for this tick.
   *
   * `type`
   * : The type of tick (e.g. `primary`) or `undefined` if no type is specified.
   *
   * `position`
   * : A value from 0 to 1 indicating the position of the tick along the axis.
   */
  // @ts-expect-error
  computeCategoryAxisTicks(context, categoryInfo, axisConfig) {
    const { categoryAxisFormatter } = context.args;
    const isTimeAxis = axisConfig.type === 'time';
    const model = new echarts.Model({
      // defaults from `coord/axisDefault.ts` relevant to the scale
      ...(isTimeAxis && {
        splitNumber: 6,
      }),
      ...axisConfig,
    });

    model.ecModel = this.chart.getModel();

    if (!isTimeAxis) {
      // @ts-expect-error
      model.getCategories = () => categoryInfo.categories;
    }

    const scale = echarts.helper.createScale(
      [categoryInfo.first.valueOf(), categoryInfo.last.valueOf()],
      model
    );
    // @ts-expect-error
    const ticks = scale.getTicks(false).map((tick, index) => ({
      // prettier not formatting nested ternaries properly, so turn it off
      // prettier-ignore
      ...parseAxisLabel(isTimeAxis
          // @ts-expect-error
          ? scale.getFormattedLabel(tick, index, categoryAxisFormatter)
          : categoryAxisFormatter
            ? categoryAxisFormatter(scale.getLabel(tick))
            : scale.getLabel(tick)
        ),
      position: scale.normalize(tick.value),
    }));

    if (isShowingAxisLabel(axisConfig, 'Min')) {
      ticks.shift();
    }

    if (isShowingAxisLabel(axisConfig, 'Max')) {
      ticks.pop();
    }

    return ticks;
  }

  /**
   * Calculate the labels used for the value axis.
   */
  // @ts-expect-error
  computeValueAxisTicks(context, valueInfo, axisConfig) {
    const { args } = context;
    const formatter = args.valueAxisFormatter ?? echarts.format.addCommas;
    // prettier not formatting nested ternaries properly, so turn it off
    // prettier-ignore
    const minValue =
      axisConfig.min == null
        ? Math.min(0, valueInfo.minimum)
        : axisConfig.min === 'dataMin'
          ? valueInfo.minimum
          : axisConfig.min;
    // prettier not formatting nested ternaries properly, so turn it off
    // prettier-ignore
    const maxValue =
      axisConfig.max == null
        ? valueInfo.maximum
        : axisConfig.max === 'dataMax'
          ? valueInfo.maximum
          : axisConfig.max;
    const scale = echarts.helper.createScale([minValue, maxValue], axisConfig);
    // @ts-expect-error
    return scale.getTicks(false).map((tick) => ({
      label: tick.value != null ? formatter(tick.value) : '',
      position: scale.normalize(tick.value),
    }));
  }

  /**
   * Generates the plot config for a single plot on this chart.
   */
  // @ts-expect-error
  generatePlotConfig(series, layout, context, gridIndex) {
    const { args, styles, data } = context;
    const { noDataText, seriesConfig } = args;

    if ((!series.data || series.data.length == 0) && noDataText) {
      return undefined;
    }

    const { variant, orientation, colorMap } = args;
    const { categoryAxisType = 'category' } = args;
    const { categoryAxisMaxLabelCount } = args;
    const { categoryAxisFormatter, valueAxisFormatter } = args;
    const { valueAxisScale, valueAxisMax } = args;
    const isHorizontal = orientation === 'horizontal';
    const isBarVariant = this.isBarVariant(variant);
    const isAreaVariant = this.isAreaVariant(variant);
    const isStackedVariant = this.isStackedVariant(variant);
    const isGroupedOrStacked = this.isGroupedVariant(variant) || isStackedVariant;

    // Analyze the data
    const categoryInfo = this.computeCategoryInfo(series, context);
    const valueInfo = this.computeValueInfo(series, context, categoryInfo.categories);

    // Resolve axis styles
    const yAxisStyle = resolveStyle(styles.yAxis, context.layout);
    const xAxisStyle = resolveStyle(styles.xAxis, context.layout);
    const valueAxisStyle = isHorizontal ? xAxisStyle : yAxisStyle;
    const categoryAxisStyle = isHorizontal ? yAxisStyle : xAxisStyle;

    // Configure value axis
    const valueAxisConfig = {
      gridIndex,
      type: 'value',
      max:
        // prettier not formatting nested ternaries properly, so turn it off
        // prettier-ignore
        !isGroupedOrStacked && valueAxisScale === 'shared'
          ? valueAxisMax && valueAxisMax !== 'dataMax'
            ? valueAxisMax
            : data.maxValue
          : valueAxisMax !== 'dataMaxRoundedUp'
            ? valueAxisMax
            : undefined,
      axisLabel: {
        ...(valueAxisFormatter && {
          // @ts-expect-error
          formatter: (value, axisIndex) => valueAxisFormatter(value, 'axis', axisIndex),
        }),
        // margin between the axis label and the axis line
        margin: isHorizontal ? valueAxisStyle.marginTop : valueAxisStyle.marginRight,
        ...this.generateAxisLabelConfig(layout, valueAxisStyle),
      },
    };
    const valueTicks = this.computeValueAxisTicks(context, valueInfo, valueAxisConfig);

    // Configure category axis
    const categoryAxisConfig = {
      gridIndex,
      type: categoryAxisType,
      // Render labels top-to-bottom when using horizontal orientation
      inverse: isHorizontal,
      ...(categoryAxisType !== 'time' && {
        data: categoryInfo.categories,
      }),
      axisLabel: {
        ...(categoryAxisFormatter && {
          // @ts-expect-error
          formatter: (value, axisIndex) => categoryAxisFormatter(value, 'axis', axisIndex),
        }),
        // Determine how many categories are shown on the axis
        interval:
          categoryAxisMaxLabelCount && categoryInfo.count > categoryAxisMaxLabelCount
            ? Math.ceil(categoryInfo.count / categoryAxisMaxLabelCount) - 1
            : 0,
        ...(!isHorizontal && {
          overflow: 'break',
        }),
        // margin between the axis label and the axis line
        margin: isHorizontal ? categoryAxisStyle.marginRight : categoryAxisStyle.marginTop,
      },
    };
    const categoryTicks = this.computeCategoryAxisTicks(context, categoryInfo, categoryAxisConfig);

    // Configure the Y axis
    const yAxisConfig = {};
    const yAxisInfo = this.computeYAxisInfo(
      yAxisStyle,
      isHorizontal ? categoryTicks : valueTicks,
      isHorizontal
    );

    layout = this.addAxisPointer(context, layout, yAxisConfig, yAxisInfo, 'y');

    // Configure the X axis
    const xAxisConfig = {};
    const xAxisInfo = this.computeXAxisInfo(
      args,
      layout,
      xAxisStyle,
      isHorizontal ? valueTicks : categoryTicks,
      yAxisInfo,
      isHorizontal
    );

    layout = this.addAxisPointer(context, layout, xAxisConfig, xAxisInfo, 'x');

    // Update the axis label for the category axis
    categoryAxisConfig.axisLabel = {
      ...categoryAxisConfig.axisLabel,
      width: xAxisInfo.maxLabelWidth,
      ...this.generateAxisLabelConfig(layout, isHorizontal ? yAxisStyle : xAxisStyle),
    };

    // Setup base configurations
    const seriesBaseConfig = {
      ...seriesConfig,
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
      // Allow the double-clicking on the area to be the same as if on the line
      triggerLineEvent: true,
      z: 20,
    };

    // Configure final grid style
    const plotStyle = resolveStyle(styles.plot, context.layout);
    const gridInfo = {
      // Not sure why the 1px adjustment is needed to `x`, but it is
      x: layout.innerX + yAxisInfo.width - 1,
      y: layout.innerY + yAxisInfo.heightOverflow,
      width: xAxisInfo.width - xAxisInfo.widthOverflow,
      height: layout.innerHeight - xAxisInfo.height - yAxisInfo.heightOverflow,
    };

    return {
      grid: [gridInfo],
      yAxis: [
        {
          ...yAxisConfig,
          ...(isHorizontal ? categoryAxisConfig : valueAxisConfig),
          ...(plotStyle.borderLeftWidth && {
            axisLine: {
              show: true,
              lineStyle: {
                color: plotStyle.borderLeftColor,
                width: plotStyle.borderLeftWidth,
                style: plotStyle.borderLeftStyle,
              },
            },
          }),
        },
      ],
      xAxis: [
        {
          ...xAxisConfig,
          ...(isHorizontal ? valueAxisConfig : categoryAxisConfig),
          ...(plotStyle.borderBottomWidth && {
            axisLine: {
              show: true,
              lineStyle: {
                color: plotStyle.borderBottomColor,
                width: plotStyle.borderBottomWidth,
                style: plotStyle.borderBottomStyle,
              },
            },
          }),
        },
      ],
      series: !isGroupedOrStacked
        ? [
            {
              ...seriesBaseConfig,
              data: computeData(series.data, categoryInfo.categories, args),
              ...(isBarVariant && {
                colorBy: 'data',
              }),
            },
          ]
        : // @ts-expect-error
          series.data.map((info) => ({
            ...seriesBaseConfig,
            name: info.label,
            // @ts-expect-error
            data: computeData(info.data, categoryInfo.categories, args).map((item) => ({
              ...item,
              ...setItemColor(colorMap, item, info.label),
            })),
            ...(isStackedVariant && {
              stack: 'total',
            }),
          })),
      ...((plotStyle.borderTopWidth || plotStyle.borderRightWidth) && {
        'graphic.elements': [
          // The right border for the grid, since ECharts doesn't provide a
          // setting for it
          ...(plotStyle.borderRightWidth && [
            {
              type: 'line',
              // NOTE: The adjustment here was eye-balled. Not sure why it's 2.
              left: gridInfo.x + gridInfo.width - 2,
              top: gridInfo.y - 3,
              shape: {
                y2: gridInfo.height + 1,
              },
              style: {
                stroke: plotStyle.borderRightColor,
                lineWidth: plotStyle.borderRightWidth,
              },
              silent: true,
              // render above the axis lines of the chart
              z: 10,
            },
          ]),
          // The top border for the grid, since ECharts doesn't provide a
          // setting for it
          ...(plotStyle.borderTopWidth && [
            {
              type: 'line',
              // NOTE: The adjustment here was eye-balled. Not sure why it's 2.5
              left: gridInfo.x - 2.5,
              top: gridInfo.y - 2.5,
              shape: {
                x2: gridInfo.width,
              },
              style: {
                stroke: plotStyle.borderTopColor,
                lineWidth: plotStyle.borderTopWidth,
              },
              silent: true,
              // render above the axis lines of the chart
              z: 10,
            },
          ]),
        ],
      }),
    };
  }

  /**
   * Generates the configuration for an axis label.
   */
  // @ts-expect-error
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
      padding: [style.paddingTop, style.paddingRight, style.paddingBottom, style.paddingLeft],
    };
  }

  /**
   * Adds the configuration for the axis pointer for the `axis` to `config` and
   * returns an updated `layout`.
   */
  // @ts-expect-error
  addAxisPointer(context, layout, config, axisInfo, axis) {
    const { args, styles } = context;
    const name = `${axis}AxisPointer`;
    const type = args[name];

    if (!type || type === 'none') {
      return layout;
    }

    const pointerStyle = resolveStyle(styles[name], context.layout);
    const labelStyle = resolveStyle(styles[`${name}Label`], context.layout);
    const labelPosition = args[`${name}Label`] ?? 'bottom';
    const triggerTooltip = args[`${axis}AxisTooltip`] ?? axis === 'x';
    const formatter = args[`${axis}AxisFormatter`];

    config.axisPointer = {
      show: true,
      type,
      triggerTooltip,
      // Render axis line underneath emphasis items
      z: 0,
    };

    if (type === 'line') {
      config.axisPointer.lineStyle = {
        color: pointerStyle.color,
        // Use of || is intentional here; use the first non-zero width
        width:
          axis === 'x'
            ? pointerStyle.borderLeftWidth || pointerStyle.borderRightWidth
            : pointerStyle.borderTopWidth || pointerStyle.borderBottomWidth,
        type:
          axis === 'x'
            ? pointerStyle.borderLeftStyle || pointerStyle.borderRightStyle
            : pointerStyle.borderTopStyle || pointerStyle.borderBottomStyle,
        opacity: pointerStyle.opacity,
      };
    } else if (type === 'shadow') {
      config.axisPointer.shadowStyle = {
        color: pointerStyle.backgroundColor,
        opacity: pointerStyle.opacity,
      };
    }

    config.axisPointer.label =
      labelPosition === 'none'
        ? {
            show: false,
          }
        : {
            ...(formatter && {
              // @ts-expect-error
              formatter: (params) => formatter(params.value),
            }),
            color: labelStyle.color,
            fontStyle: labelStyle.fontStyle,
            fontWeight: labelStyle.fontWeight,
            fontFamily: labelStyle.fontFamily,
            fontSize: labelStyle.fontSize,
            backgroundColor: labelStyle.backgroundColor,
            // Safari only parses contituent values, so use "top" as a proxy for all
            borderWidth: labelStyle.borderTopWidth,
            borderColor: labelStyle.borderTopColor,
            borderType: labelStyle.borderTopType,
            borderRadius: labelStyle.borderRadius,
            padding: [
              labelStyle.paddingTop,
              labelStyle.paddingRight,
              labelStyle.paddingBottom,
              labelStyle.paddingLeft,
            ],
          };

    const newLayout = { ...layout };
    const labelSize =
      axis === 'x'
        ? axisInfo.height +
          labelStyle.paddingTop +
          labelStyle.paddingBottom +
          labelStyle.borderTopWidth +
          labelStyle.borderBottomWidth
        : axisInfo.width +
          labelStyle.paddingLeft +
          labelStyle.paddingRight +
          labelStyle.borderLeftWidth +
          labelStyle.borderRightWidth;
    const labelMargins =
      axis === 'x'
        ? labelStyle.marginTop + labelStyle.marginBottom
        : labelStyle.marginLeft + labelStyle.marginRight;

    switch (labelPosition) {
      case 'top':
        newLayout.innerHeight -= labelSize + labelMargins;
        newLayout.innerY += axisInfo.height + labelMargins;
        config.axisPointer.label.margin = labelSize + labelStyle.marginTop - layout.innerHeight;
        break;

      case 'right':
        newLayout.innerWidth -= labelSize + labelMargins;
        config.axisPointer.label.margin = labelSize - labelStyle.marginLeft - layout.innerWidth;
        break;

      case 'bottom':
        newLayout.innerHeight -= labelStyle.marginTop;
        config.axisPointer.label.margin = labelStyle.marginTop;
        break;

      case 'left':
        config.axisPointer.label.margin = labelStyle.marginRight;
        break;
    }

    return newLayout;
  }

  /**
   * Generates text to overlay on each cell of the chart, if any.
   */
  // @ts-expect-error
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
  // @ts-expect-error
  computeYAxisInfo(style, ticks, isHorizontal) {
    // HACK TODO: When ticks are too close to each other, the following tick
    //            will be hidden. This can cause the Y axis to calculate the
    //            width wrong if the tick that is hidden has a wider width than
    //            the rest of the ticks.
    //
    //            To see this, set the `@valueAxisMax` to a number slightly
    //            higher than the default maximum value. For example, if the
    //            normal top tick is 15000, set it to `15400.111111`. The extra
    //            1's will increase the width of the axis, but then this tick
    //            will be hidden, so it will create a bunch of extra space.
    //
    //            In reality, we should use a label collision detection formula
    //            here, but that requires a lot more work and this is a fairly
    //            rare edge case in our charts, so I'm just using the magic
    //            number of 3%. When ticks are closer than 3% of the axis
    //            length, then the second tick is hidden. [twl 17.Mar.23]
    const renderedTicks = [...ticks].reduce((ticks, tick) => {
      if (!ticks.length || tick.position - ticks[ticks.length - 1].position > 0.03) {
        ticks.push(tick);
      }

      return ticks;
    }, []);
    // @ts-expect-error
    const labelMetrics = computeMaxTextMetrics(
      // @ts-expect-error
      renderedTicks.map((tick) => tick.label),
      style
    );
    const width = labelMetrics.width + style.marginLeft + style.marginRight;

    // Handle when label extends past the top of the axis.
    //
    // NOTE: To be fully accurate, we should use the `position` like we do in
    //       `computeXAxisInfo`. However, since we compute the Y axis info first
    //       we don't have an accurate axis height and for these charts we're
    //       always rendering a label at the top of the axis anyway, so the
    //       top tick position should always be 1. [twl 17.Mar.23]
    const topTick = renderedTicks[renderedTicks.length - 1];
    const topTickHeight = computeTextMetrics(topTick.label, style).height;
    const heightOverflow = isHorizontal ? 0 : Math.max(0, topTickHeight / 2);

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
  // @ts-expect-error
  computeXAxisInfo(args, layout, style, ticks, yAxisInfo, isHorizontal) {
    const { categoryAxisMaxLabelCount, categoryAxisType } = args;
    const maxLabelCount = Math.min(categoryAxisMaxLabelCount ?? ticks.length, ticks.length);
    const width =
      layout.innerWidth - yAxisInfo.width - layout.borderLeftWidth - layout.borderRightWidth;
    const lineWidth = isHorizontal ? 0 : 1;
    const maxLabelWidth = width / (isHorizontal ? ticks.length : maxLabelCount);

    // TODO: If we want to be precise, we should be passing in a custom style
    //       for each tick, since if a tick has a `type` of `primary`, it gets
    //       rendered via the primary axis tick style as defined by
    //       `axisLabel.rich.primary` in the Echarts config. However, the
    //       default is only to make the font bold, which only causes a pixel or
    //       two different in the final value. Skipping this for now, since it
    //       requires a bunch of refactoring to make this work. [twl 17.Mar.23]
    const labelMetrics = computeMaxTextMetrics(
      // @ts-expect-error
      ticks.map((tick) => tick.label),
      style,
      maxLabelWidth
    );
    const height = labelMetrics.height + style.marginTop + style.marginBottom + lineWidth;

    // Handle when label extends past end of axis
    const lastTick = ticks[ticks.length - 1];
    const lastLabelWidth = computeTextMetrics(lastTick.label, style).width;
    const widthOverflow =
      !isHorizontal && categoryAxisType !== 'time'
        ? 0
        : Math.max(0, lastLabelWidth / 2 - (width - lastTick.position * width));

    return {
      width,
      height,
      labelMetrics,
      maxLabelWidth,
      widthOverflow,
    };
  }
}

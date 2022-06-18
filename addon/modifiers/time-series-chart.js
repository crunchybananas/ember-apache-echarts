import countBy from 'lodash/countBy';
import { tracked } from '@glimmer/tracking';
import createLookup from '../utils/create-lookup';
import AbstractChartModifier from './abstract-chart';

// TODO: Import only the required components to keep the bundle size small. See
//       https://echarts.apache.org/handbook/en/basics/import/ [twl 6.Apr.22]

/**
 * Extracts an array of unique values of `property` from `dataset`, where
 * `dataset` is an array of time series. Each time series should be an object
 * that contains an `data` property containing an array of data values.
 *
 * @param {TimeSeries[]} data     An array of time series
 * @param {string}       property The property containing the category
 *
 * @return {any[]} An array of unique property value for `property`
 */
function getCategories(dataset, property) {
  const result = new Set();

  for (const series of dataset) {
    for (const item of series.data) {
      result.add(item[property]);
    }
  }

  return Array.from(result.values()).sort();
}

function getSeriesData(data, categories, categoryProperty, valueProperty) {
  const lookup = createLookup(data, categoryProperty, valueProperty);

  return categories.map((category) => lookup[category]);
}

/**
 * Renders a time series chart.
 *
 * The `variant` argument determines the type of chart to render: `line`,
 * `area`, `stackedLine` or `stackedArea`. Defaults to `line`.
 *
 * The data passed should be an array of data series, with each series having:
 *
 * `label`
 * : A label used to identify the series on the chart.
 *
 * `data`
 * : An array of time series data objects, with each data object having an `at`
 *   property to represent the time and a `value` property to represent the
 *   value.
 *
 * `series`
 * : An array of child series that can be drilled into.
 */
export default class TimeSeriesChartModifier extends AbstractChartModifier {
  @tracked drillPath = [];

  configureChart(args, chart) {
    const { xAxisFormatter, yAxisFormatter, tooltipFormatter } = args;
    const { data = [], variant } = args;
    const { series, title } = this.drillPath.reduce(
      ({ series }, pathIndex) => ({
        series: series[pathIndex].series,
        title: series[pathIndex].label,
      }),
      { series: data, title: args.title }
    );
    const categories = getCategories(series, 'at');
    const gridPadding = {
      top: 100,
      bottom: 80,
      left: 80,
      right: 20,
    };
    const gridSize = {
      height: chart.getHeight() - gridPadding.top - gridPadding.bottom,
      width: chart.getWidth() - gridPadding.left - gridPadding.right,
    };

    chart.setOption(
      {
        grid: gridPadding,
        title: {
          text: title,
          left: gridPadding.left + (this.drillPath.length ? 20 : 0),
          top: 0,
        },
        xAxis: {
          type: 'category',
          data: categories,
          axisLabel: {
            ...(xAxisFormatter && { formatter: xAxisFormatter }),
            color: '#000',
          },
          axisLine: {
            lineStyle: {
              color: '#dbdbdb',
            },
          },
          axisPointer: {
            show: true,
            type: 'line',
            z: 0,
            label: {
              ...(xAxisFormatter && {
                formatter: (params) => xAxisFormatter(params.value),
              }),
              margin: -gridSize.height - 30,
              color: '#000',
              backgroundColor: '#fff',
              borderColor: '#dbdbdb',
              borderWidth: 1,
            },
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#000',
            ...(yAxisFormatter && { formatter: yAxisFormatter }),
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#dbdbdb',
            },
          },
        },
        legend: {
          type: 'scroll',
          data: series.map((info) => ({
            name: info.label,
            icon: 'circle',
          })),
          itemGap: 40,
          align: 'left',
          top: gridPadding.top - 60,
          left: gridPadding.left,
          width: gridSize.width,
        },
        series: series.map((info) => ({
          name: info.label,
          data: getSeriesData(info.data, categories, 'at', 'value'),
          type: 'line',
          ...(['stackedLine', 'stackedArea'].includes(variant) && {
            stack: 'Total',
          }),
          ...(['area', 'stackedArea'].includes(variant) && {
            areaStyle: {},
          }),
          symbol: 'circle',
          symbolSize: ['area', 'stackedArea'].includes(variant) ? 6 : 8,
          emphasis: {
            itemStyle: {
              shadowBlur: 3,
              shadowColor: '#000000',
              shadowOffsetX: 1,
              shadowOffsetY: 1,
            },
          },
          triggerLineEvent: true,
        })),
        tooltip: {
          trigger: 'item',
          ...(tooltipFormatter && {
            formatter: (params) => tooltipFormatter(params, series),
          }),
        },
        dataZoom: [
          {
            show: true,
            start: 0,
            end: 100,
            xAxisIndex: [0, 1],
          },
          // TODO: Figure out if this is needed; all the examples have it, but
          //       when I remove it nothing breaks. [twl 22.Apr.22]
          //
          // {
          //   type: 'inside',
          //   realtime: true,
          //   start: 30,
          //   end: 70,
          //   xAxisIndex: [0, 1]
          // }
        ],
        graphic: {
          elements: [
            // The background of the grid
            {
              type: 'rect',
              top: gridPadding.top,
              left: gridPadding.left,
              shape: {
                width: gridSize.width,
                height: gridSize.height,
              },
              style: {
                fill: '#fff',
              },
              silent: true,
            },

            // The right border for the grid, since ECharts doesn't provide a
            // setting for it
            {
              type: 'line',
              // NOTE: The adjustment here was eye-balled. Not sure why it's 3.
              right: gridPadding.right - 3,
              bottom: gridPadding.bottom - 3,
              shape: {
                y2: gridSize.height,
              },
              style: {
                stroke: '#dbdbdb',
              },
              silent: true,
            },

            // The drill up button
            ...[
              this.drillPath.length && {
                type: 'text',
                left: gridPadding.left,
                top: 3,
                style: {
                  fill: '#036E9B',
                  text: 'chevron_left',
                  font: '22px Material Icons',
                },
                onclick: () => this.drillPath.popObject(),
              },
            ],
          ],
        },
      },
      {
        notMerge: true,
      }
    );

    // Change the default behavior of how selections work on the legend
    chart.handle('legendselectchanged', ({ name, selected }) => {
      const selections = Object.values(selected);
      const counts = countBy(selections);

      // If the only one selected is the one that just changed, or if nothing is
      // selected, then invert the selection
      if (
        (counts.false === 1 && selected[name] === false) ||
        counts.false === selections.length
      ) {
        chart.dispatchAction({
          type: 'legendInverseSelect',
        });
      }
    });

    // Handle the drill in action
    chart.handle('dblclick', ({ seriesIndex }) => {
      if (series[seriesIndex].series) {
        this.drillPath.pushObject(seriesIndex);
      }
    });
  }
}

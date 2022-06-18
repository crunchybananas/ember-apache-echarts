import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

/**
 * Converts an EChart tooltip param into a standardized & simplied object this component can yield
 * to custom tooltip components.
 *
 * The object returned from this function includes the following properties:
 *
 * `label`
 * : The label on the X axis for the item.
 *
 * `value`
 * : The value on the Y axis for the item.
 *
 * `marker`
 * : Raw HTML that renders the marker used to identify the item on the chart.
 *
 * `dataIndex`
 * : The index of the item in the data for the series this item belongs to.
 *
 * `data`
 * : The data object from the chart data for this item.
 *
 * `series`
 * : The series object for the series this item belongs to, plus the `index` of the series on the
 *   chart.
 */
const toTooltipItem = (param, dataset) => ({
  label: param.name,
  value: param.data,
  marker: param.marker,
  dataIndex: param.dataIndex,
  data: dataset[param.seriesIndex].data[param.dataIndex],
  series: {
    ...dataset[param.seriesIndex],
    index: param.seriesIndex,
  },
});

/**
 * Converts an axis EChart tooltip param into an object describing the axis the tooltip is for.
 */
const toTooltipAxis = ([firstParam]) => ({
  id: firstParam.axisId,
  index: firstParam.axisIndex,
  type: firstParam.axisType,
  value: firstParam.axisValue,
  valueLabel: firstParam.axisValueLabel,
  dimension: firstParam.axisDim,
});

export default class TimeSeriesChartComponent extends Component {
  axisTooltipElement;
  itemTooltipElement;

  @tracked tooltipItem;
  @tracked tooltipItems;
  @tracked tooltipAxis;

  @action
  setup(element) {
    alert(1);

    this.axisTooltipElement = element.querySelector('[data-role=axisTooltip]');
    this.itemTooltipElement = element.querySelector('[data-role=itemTooltip]');
  }

  @action
  tooltipFormatter(params, data) {
    if (params.length) {
      this.tooltipAxis = toTooltipAxis(params);
      this.tooltipItems = params.map((param) => toTooltipItem(param, data));

      return this.axisTooltipElement;
    } else {
      this.tooltipItem = toTooltipItem(params, data);

      return this.itemTooltipElement;
    }
  }
}

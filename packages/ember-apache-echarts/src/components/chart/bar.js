import pick from 'lodash/pick';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

/**
 * Converts an EChart tooltip param into a standardized & simplied object this
 * component can yield to custom tooltip components.
 *
 * The object returned from this function includes the following properties:
 *
 * `label`
 * : The label on the category axis for the item.
 *
 * `value`
 * : The value on the value axis for the item.
 *
 * `marker`
 * : Raw HTML that renders the marker used to identify the item on the chart.
 *
 * `style`
 * : An object representing the graphical properties of the element being
 *   hovered over. Currently only supports `color`.
 *
 * `dataIndex`
 * : The index of the item in the data for the series this item belongs to.
 *
 * `data`
 * : The data object from the chart data for this item.
 *
 * `seriesIndex`
 * : The index in the dataset of the series this item belongs to.
 *
 * `series`
 * : The series object for the series this item belongs to.
 */
const toTooltipItem = (param, dataset) => ({
  ...pick(param, 'value', 'marker', 'dataIndex', 'data', 'seriesIndex'),
  label: param.name,
  style: pick(param, 'color'),
  series: {
    label: param.seriesName,
    ...dataset[param.seriesIndex],
  },
});

/**
 * Converts an axis EChart tooltip param into an object describing the axis the
 * tooltip is for.
 */
const toTooltipAxis = ([firstParam]) => ({
  id: firstParam.axisId,
  index: firstParam.axisIndex,
  type: firstParam.axisType,
  value: firstParam.axisValue,
  valueLabel: firstParam.axisValueLabel,
  dimension: firstParam.axisDim,
});

export default class BarChartComponent extends Component {
  axisTooltipElement;
  itemTooltipElement;

  @tracked tooltipItem;
  @tracked tooltipItems;
  @tracked tooltipAxis;

  @action
  setup(element) {
    this.axisTooltipElement = element.querySelector('[data-role=axisTooltip]');
    this.itemTooltipElement = element.querySelector('[data-role=itemTooltip]');
  }

  @action
  tooltipFormatter(params, dataset) {
    if (params.length) {
      this.tooltipAxis = toTooltipAxis(params);
      this.tooltipItems = params.map((param) => toTooltipItem(param, dataset));

      return this.axisTooltipElement;
    } else {
      this.tooltipItem = toTooltipItem(params, dataset);

      return this.itemTooltipElement;
    }
  }
}

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
 * : The label used for the bar.
 *
 * `value`
 * : The value used for the bar.
 *
 * `marker`
 * : Raw HTML that renders the marker used to identify the item on the chart.
 *
 * `dataIndex`
 * : The index of the item in the data for the series this item belongs to.
 *
 * `bar`
 * : An object representing the graphical properties of the bar: `color` and
 *   `percent` of circle.
 */
const toTooltipItem = (param) => ({
  ...pick(param, 'value', 'marker', 'dataIndex'),
  label: param.name,
  bar: pick(param, 'color'),
  meta: param.data?.meta,
  series: {
    label: param.seriesName,
    index: param.seriesIndex,
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

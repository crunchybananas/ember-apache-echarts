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

export default class BarChartComponent extends Component {
  itemTooltipElement;

  @tracked tooltipItem;

  @action
  setup(element) {
    this.itemTooltipElement = element.querySelector('[data-role=itemTooltip]');
  }

  @action
  tooltipFormatter(params) {
    this.tooltipItem = toTooltipItem(params);

    return this.itemTooltipElement;
  }
}

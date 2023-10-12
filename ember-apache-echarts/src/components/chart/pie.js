import { pick } from 'lodash-es';
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
 * : The label used for the pie slice.
 *
 * `value`
 * : The value used for the pie slice.
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
 * `slice`
 * : An object representing the graphical properties of the slice: `color` and
 *   `percent` of circle.
 */
const toTooltipItem = (param) => ({
  ...pick(param, 'value', 'marker', 'data', 'dataIndex'),
  label: param.name,
  slice: pick(param, 'color', 'percent'),

  // TODO: Think about how/if we need to support multiple series for pie charts.
  //       [twl 30.Apr.22]
  //
  // series: {
  //   ...dataset[param.seriesIndex],
  //   index: param.seriesIndex,
  // },
});

export default class PieChartComponent extends Component {
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

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import * as echarts from 'echarts';

export default class GraphChartComponent extends Component {
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

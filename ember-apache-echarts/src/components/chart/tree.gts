// @ts-nocheck: return to this once build works
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { or } from 'ember-truth-helpers';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import cssSize from '../../helpers/css-size.ts';
import setupChart from '../../modifiers/setup-chart.ts';
import style from 'ember-style-modifier';
import treeChart from '../../modifiers/tree-chart.ts';

export default class TreeChartComponent extends Component {
  axisTooltipElement;
  itemTooltipElement;

  @tracked tooltipItem;
  @tracked tooltipItems;
  @tracked tooltipAxis;

  @action
  setup(element: HTMLElement) {
    this.axisTooltipElement = element.querySelector('[data-role=axisTooltip]');
    this.itemTooltipElement = element.querySelector('[data-role=itemTooltip]');
  }

  @action
  tooltipFormatter(_params, _dataset) {}

  <template>
    <div {{setupChart this.setup}} {{style width="100%" height="100%"}}>
      <div
        ...attributes
        {{style width=(cssSize @width "100%") height=(cssSize @height 400)}}
        {{treeChart
          this.args
          tooltipFormatter=(if
            (or (has-block "itemTooltip") this.useDefaultTooltip) this.tooltipFormatter
          )
        }}
      ></div>

      {{#if (has-block "itemTooltip")}}
        <div data-role="itemTooltip" style={{htmlSafe (if this.tooltipItem "" "display: none")}}>
          {{yield this.tooltipItem to="itemTooltip"}}
        </div>
      {{else if this.useDefaultTooltip}}
        <div data-role="itemTooltip" style={{htmlSafe (if this.tooltipItem "" "display: none")}}>
          {{! template-lint-disable no-triple-curlies }}
          {{{this.tooltipItem.marker}}}
          {{this.tooltipItem.series.label}}:
          {{this.tooltipItem.value}}
        </div>
      {{/if}}

      {{#if (has-block "axisTooltip")}}
        <div data-role="axisTooltip" style={{htmlSafe (if this.tooltipItems "" "display: none")}}>
          {{yield this.tooltipItems this.tooltipAxis to="axisTooltip"}}
        </div>
      {{/if}}
    </div>
  </template>
}

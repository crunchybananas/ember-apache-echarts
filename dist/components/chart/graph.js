import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import cssSize from '../../helpers/css-size.js';
import GraphChartModifier from '../../modifiers/graph-chart.js';
import setupChart from '../../modifiers/setup-chart.js';
import style from 'ember-style-modifier';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import { g, i, n } from 'decorator-transforms/runtime';

class GraphChartComponent extends Component {
  axisTooltipElement;
  itemTooltipElement;
  static {
    g(this.prototype, "tooltipItem", [tracked]);
  }
  #tooltipItem = (i(this, "tooltipItem"), void 0);
  static {
    g(this.prototype, "tooltipItems", [tracked], function () {
      return [];
    });
  }
  #tooltipItems = (i(this, "tooltipItems"), void 0);
  static {
    g(this.prototype, "tooltipAxis", [tracked]);
  }
  #tooltipAxis = (i(this, "tooltipAxis"), void 0);
  setup(element) {
    this.axisTooltipElement = element.querySelector('[data-role=axisTooltip]');
    this.itemTooltipElement = element.querySelector('[data-role=itemTooltip]');
  }
  static {
    n(this.prototype, "setup", [action]);
  }
  tooltipFormatter(_params, _dataset) {
    // if (params.length) {
    //   this.tooltipAxis = toTooltipAxis(params);
    //   this.tooltipItems = params.map((param) => toTooltipItem(param, dataset));
    //   return this.axisTooltipElement;
    // } else {
    //   this.tooltipItem = toTooltipItem(params, dataset);
    //   return this.itemTooltipElement;
    // }
  }
  static {
    n(this.prototype, "tooltipFormatter", [action]);
  }
  static {
    setComponentTemplate(precompileTemplate("\n    <div {{setupChart this.setup}} {{style width=\"100%\" height=\"100%\"}}>\n      <div ...attributes {{style width=(cssSize @width \"100%\") height=(cssSize @height \"400\")}} {{!-- @glint-expect-error--}} {{graphChart this.args}}></div>\n\n      <div data-role=\"itemTooltip\" style={{htmlSafe (if this.tooltipItem \"\" \"display: none\")}}>\n        {{!-- template-lint-disable no-triple-curlies --}}\n        {{{this.tooltipItem.marker}}}\n        {{this.tooltipItem.series.label}}:\n        {{this.tooltipItem.value}}\n      </div>\n\n      {{#if (has-block \"axisTooltip\")}}\n        <div data-role=\"axisTooltip\" style={{htmlSafe (if this.tooltipItems \"\" \"display: none\")}}>\n          {{!-- @glint-expect-error: Need to really dig into types on this file--}}\n          {{yield this.tooltipItems this.tooltipAxis to=\"axisTooltip\"}}\n        </div>\n      {{/if}}\n    </div>\n  ", {
      strictMode: true,
      scope: () => ({
        setupChart,
        style,
        cssSize,
        graphChart: GraphChartModifier,
        htmlSafe
      })
    }), this);
  }
}

export { GraphChartComponent as default };
//# sourceMappingURL=graph.js.map

import { pick } from 'lodash-es';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import setupChart from '../../modifiers/setup-chart.js';
import cssSize from '../../helpers/css-size.js';
import PieChartModifier from '../../modifiers/pie-chart.js';
import style from 'ember-style-modifier';
import { htmlSafe } from '@ember/template';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import { g, i, n } from 'decorator-transforms/runtime';

// @ts-nocheck

const toTooltipItem = param => ({
  ...pick(param, 'value', 'marker', 'data', 'dataIndex'),
  label: param.name,
  slice: pick(param, 'color', 'percent')
});
class PieChartComponent extends Component {
  itemTooltipElement;
  static {
    g(this.prototype, "tooltipItem", [tracked]);
  }
  #tooltipItem = (i(this, "tooltipItem"), void 0);
  setup(element) {
    this.itemTooltipElement = element.querySelector('[data-role=itemTooltip]');
  }
  static {
    n(this.prototype, "setup", [action]);
  }
  tooltipFormatter(params) {
    this.tooltipItem = toTooltipItem(params);
    return this.itemTooltipElement;
  }
  static {
    n(this.prototype, "tooltipFormatter", [action]);
  }
  static {
    setComponentTemplate(precompileTemplate("\n    <div {{setupChart this.setup}}>\n      <div ...attributes {{style width=(cssSize @width \"100%\") height=(cssSize @height 400)}} {{pieChart this.args tooltipFormatter=(if (has-block \"itemTooltip\") this.tooltipFormatter)}}></div>\n\n      {{#if (has-block \"itemTooltip\")}}\n        <div data-role=\"itemTooltip\" style={{htmlSafe (if this.tooltipItem \"\" \"display: none\")}}>\n          {{yield this.tooltipItem to=\"itemTooltip\"}}\n        </div>\n      {{/if}}\n    </div>\n  ", {
      strictMode: true,
      scope: () => ({
        setupChart,
        style,
        cssSize,
        pieChart: PieChartModifier,
        htmlSafe
      })
    }), this);
  }
}

export { PieChartComponent as default };
//# sourceMappingURL=pie.js.map

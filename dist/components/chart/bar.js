import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { or } from 'ember-truth-helpers';
import { pick } from 'lodash-es';
import { tracked } from '@glimmer/tracking';
import BarChartModifier from '../../modifiers/bar-chart.js';
import Component from '@glimmer/component';
import cssSize from '../../helpers/css-size.js';
import setupChart from '../../modifiers/setup-chart.js';
import style from 'ember-style-modifier';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import { g, i, n } from 'decorator-transforms/runtime';

const toTooltipItem = (param, dataset) => ({
  ...pick(param, 'value', 'marker', 'dataIndex', 'data', 'seriesIndex'),
  label: param.name,
  style: pick(param, 'color'),
  series: {
    label: param.seriesName,
    ...dataset[param.seriesIndex]
  }
});
/**
 * Converts an axis EChart tooltip param into an object describing the axis the
 * tooltip is for.
 */ // @ts-expect-error
const toTooltipAxis = ([firstParam]) => ({
  id: firstParam.axisId,
  index: firstParam.axisIndex,
  type: firstParam.axisType,
  value: firstParam.axisValue,
  valueLabel: firstParam.axisValueLabel,
  dimension: firstParam.axisDim
});
class BarChartComponent extends Component {
  // @ts-expect-error
  axisTooltipElement;
  // @ts-expect-error
  itemTooltipElement;
  // @ts-expect-error
  static {
    g(this.prototype, "tooltipItem", [tracked]);
  }
  #tooltipItem = (i(this, "tooltipItem"), void 0);
  static {
    g(this.prototype, "tooltipItems", [tracked]);
  }
  #tooltipItems = (i(this, "tooltipItems"), void 0); // @ts-expect-error
  static {
    g(this.prototype, "tooltipAxis", [tracked]);
  }
  #tooltipAxis = (i(this, "tooltipAxis"), void 0); // @ts-expect-error
  // HACK: The way we're currently transforming the data for the grouped or
  //       stacked layout is causing Apache eCharts to swap the item label with
  //       the series label. This ensures that by default the tooltip is
  //       rendered correctly. [twl 30.Nov.22]
  get useDefaultGroupedOrStackedTooltip() {
    const {
      variant
    } = this.args;
    return variant && (variant.startsWith('group') || variant.startsWith('stacked'));
  }
  setup(element) {
    this.axisTooltipElement = element.querySelector('[data-role=axisTooltip]');
    this.itemTooltipElement = element.querySelector('[data-role=itemTooltip]');
  }
  static {
    n(this.prototype, "setup", [action]);
  }
  // @ts-expect-error
  tooltipFormatter(params, dataset) {
    if (params.length) {
      this.tooltipAxis = toTooltipAxis(params);
      // @ts-expect-error
      this.tooltipItems = params.map(param => toTooltipItem(param, dataset));
      return this.axisTooltipElement;
    } else {
      this.tooltipItem = toTooltipItem(params, dataset);
      return this.itemTooltipElement;
    }
  }
  static {
    n(this.prototype, "tooltipFormatter", [action]);
  }
  static {
    setComponentTemplate(precompileTemplate("\n    <div {{setupChart this.setup}} {{style width=\"100%\" height=\"100%\"}}>\n      <div ...attributes {{style width=(cssSize @width \"100%\") height=(cssSize @height \"400\")}} {{!-- @glint-expect-error--}} {{barChart this.args tooltipFormatter=(if (or (has-block \"itemTooltip\") this.useDefaultGroupedOrStackedTooltip) this.tooltipFormatter)}}></div>\n\n      {{#if (has-block \"itemTooltip\")}}\n        <div data-role=\"itemTooltip\" style={{htmlSafe (if this.tooltipItem \"\" \"display: none\")}}>\n          {{yield this.tooltipItem to=\"itemTooltip\"}}\n        </div>\n      {{else if this.useDefaultGroupedOrStackedTooltip}}\n        <div data-role=\"itemTooltip\" style={{htmlSafe (if this.tooltipItem \"\" \"display: none\")}}>\n          {{!-- template-lint-disable no-triple-curlies --}}\n          {{{this.tooltipItem.marker}}}\n          {{this.tooltipItem.series.label}}:\n          {{this.tooltipItem.value}}\n        </div>\n      {{/if}}\n\n      {{#if (has-block \"axisTooltip\")}}\n        <div data-role=\"axisTooltip\" style={{htmlSafe (if this.tooltipItems \"\" \"display: none\")}}>\n          {{yield this.tooltipItems this.tooltipAxis to=\"axisTooltip\"}}\n        </div>\n      {{/if}}\n    </div>\n  ", {
      strictMode: true,
      scope: () => ({
        setupChart,
        style,
        cssSize,
        barChart: BarChartModifier,
        or,
        htmlSafe
      })
    }), this);
  }
}

export { BarChartComponent as default };
//# sourceMappingURL=bar.js.map

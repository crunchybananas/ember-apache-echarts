// @ts-nocheck
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { or } from 'ember-truth-helpers';
import { pick } from 'lodash-es';
import { tracked } from '@glimmer/tracking';
import barChart from '../../modifiers/bar-chart.ts';
import Component from '@glimmer/component';
import cssSize from '../../helpers/css-size.ts';
import setupChart from '../../modifiers/setup-chart.ts';
import style from 'ember-style-modifier';

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
 * : The value on the value axis for the item, formatted using the
 *   `valueAxisFormatter` provided to the bar chart, if any.
 *
 * `category`
 * : The category on the category axis for the item, formatted using the
 *   `categoryAxisFormatter` provided to the bar chart, if any.
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

type ToolTipAxis = {
  id: string;
  index: number;
  type: string;
  value: number;
  valueLabel: string;
  dimension: string;
};

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

interface S {
  Args: {
    width?: string;
    height?: string;
    series?: unknown[];
    data?: unknown;
    variant?: string;
    title?: string;
    rotateData?: boolean;
    categoryProperty?: string;
    valueProperty?: string;
    chartStyle?: unknown;
    chartTitleStyle?: unknown;
    maxColumns?: number;
    orientation?: string;
    colorMap?: unknown;
    cellStyle?: unknown;
    cellTitleStyle?: unknown;
    cellTextOverlayStyle?: unknown;
    plotStyle?: unknown;
    categoryAxisScale?: unknown;
    valueAxisScale?: unknown;
    categoryAxisFormatter?: unknown;
    valueAxisFormatter?: unknown;
    categoryAxisSort?: string;
    categoryAxisMaxLabelCount?: number;
    valueAxisMax?: number;
    xAxisFormatter?: unknown;
    yAxisFormatter?: unknown;
    xAxisStyle?: unknown;
    yAxisStyle?: unknown;
    xAxisPointer?: string;
    yAxisPointer?: string;
    xAxisPointerLabel?: string;
    yAxisPointerLabel?: string;
    xAxisPointerStyle?: unknown;
    yAxisPointerStyle?: unknown;
    xAxisPointerLabelStyle?: unknown;
    yAxisPointerLabelStyle?: unknown;
    xAxisTooltip?: unknown;
    yAxisTooltip?: unknown;
    xAxisZoom?: string;
    yAxisZoom?: string;
    xAxisZoomBrush?: boolean;
    yAxisZoomBrush?: boolean;
    xAxisZoomStyle?: unknown;
    yAxisZoomStyle?: unknown;
    legend?: string;
    legendOrientation?: string;
    legendStyle?: unknown;
    drillUpButtonStyle?: unknown;
    drillUpButtonText?: string;
    onSelect?: (item: unknown) => void;
  };
  Element: HTMLDivElement;
  Blocks: {
    axisTooltip: [ToolTipAxis, unknown[]];
    itemTooltip: [unknown];
  };
}

export default class BarChartComponent extends Component<S> {
  axisTooltipElement;
  itemTooltipElement;

  @tracked tooltipItem;
  @tracked tooltipItems;
  @tracked tooltipAxis;

  // HACK: The way we're currently transforming the data for the grouped or
  //       stacked layout is causing Apache eCharts to swap the item label with
  //       the series label. This ensures that by default the tooltip is
  //       rendered correctly. [twl 30.Nov.22]
  get useDefaultGroupedOrStackedTooltip() {
    const { variant } = this.args;

    return variant && (variant.startsWith('group') || variant.startsWith('stacked'));
  }

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

  <template>
    <div {{setupChart this.setup}} {{style width="100%" height="100%"}}>
      <div
        ...attributes
        {{style width=(cssSize @width "100%") height=(cssSize @height "400")}}
        {{barChart
          this.args
          tooltipFormatter=(if
            (or (has-block "itemTooltip") this.useDefaultGroupedOrStackedTooltip)
            this.tooltipFormatter
          )
        }}
      ></div>

      {{#if (has-block "itemTooltip")}}
        <div data-role="itemTooltip" style={{htmlSafe (if this.tooltipItem "" "display: none")}}>
          {{yield this.tooltipItem to="itemTooltip"}}
        </div>
      {{else if this.useDefaultGroupedOrStackedTooltip}}
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

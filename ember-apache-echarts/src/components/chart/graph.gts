import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import cssSize from '../../helpers/css-size.ts';
import graphChart from '../../modifiers/graph-chart.ts';
import setupChart from '../../modifiers/setup-chart.ts';
import style from 'ember-style-modifier';

type TooltipAxis = {
  id: string;
  index: number;
  label: string;
  value: number;
};

type TooltipItem = {
  label: string;
  value: number;
  marker: string;
  dataIndex: number;
  data: unknown;
  series: {
    label: string;
    [key: string]: unknown;
  };
};

type TooltipFormatterParams = TooltipItem | TooltipItem[];

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
    itemTooltip: [TooltipAxis];
    axisTooltip: [TooltipItem];
  };
}

export default class GraphChartComponent extends Component<S> {
  axisTooltipElement: unknown;
  itemTooltipElement: unknown;

  @tracked tooltipItem?: TooltipItem;
  @tracked tooltipItems: TooltipItem[] = [];
  @tracked tooltipAxis?: [TooltipAxis];

  @action
  setup(element: HTMLElement) {
    this.axisTooltipElement = element.querySelector('[data-role=axisTooltip]');
    this.itemTooltipElement = element.querySelector('[data-role=itemTooltip]');
  }

  @action
  tooltipFormatter(_params: TooltipFormatterParams[], _dataset: unknown) {
    // if (params.length) {
    //   this.tooltipAxis = toTooltipAxis(params);
    //   this.tooltipItems = params.map((param) => toTooltipItem(param, dataset));
    //   return this.axisTooltipElement;
    // } else {
    //   this.tooltipItem = toTooltipItem(params, dataset);
    //   return this.itemTooltipElement;
    // }
  }

  <template>
    <div {{setupChart this.setup}} {{style width="100%" height="100%"}}>
      <div
        ...attributes
        {{style width=(cssSize @width "100%") height=(cssSize @height "400")}}
        {{! @glint-expect-error}}
        {{graphChart this.args}}
      ></div>

      <div data-role="itemTooltip" style={{htmlSafe (if this.tooltipItem "" "display: none")}}>
        {{! template-lint-disable no-triple-curlies }}
        {{{this.tooltipItem.marker}}}
        {{this.tooltipItem.series.label}}:
        {{this.tooltipItem.value}}
      </div>

      {{#if (has-block "axisTooltip")}}
        <div data-role="axisTooltip" style={{htmlSafe (if this.tooltipItems "" "display: none")}}>
          {{! @glint-expect-error: Need to really dig into types on this file}}
          {{yield this.tooltipItems this.tooltipAxis to="axisTooltip"}}
        </div>
      {{/if}}
    </div>
  </template>
}

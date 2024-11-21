import BarChartComponent from './bar.js';
import coalesce from '../../helpers/coalesce.js';
import { hash } from '@ember/helper';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

// @ts-nocheck - return to this when bar chart is typed

const TimeSeriesChartComponent = setComponentTemplate(precompileTemplate("\n  <ChartBar @width={{@width}} @height={{@height}} @series={{coalesce @series @data}} @variant={{coalesce @variant \"groupedLine\"}} @title={{@title}} @rotateData={{@rotateData}} @missingValueFormat=\"--\" @missingCategoryFormat=\"???\" @categoryProperty={{coalesce @categoryProperty \"at\"}} @valueProperty={{@valueProperty}} @chartStyle={{@chartStyle}} @chartTitleStyle={{coalesce @chartTitleStyle (hash marginLeft=80 marginBottom=8 marginTop=4 textAlign=\"left\" font=\"bold 18px Montserrat,sans-serif\")}} @maxColumns={{@maxColumns}} @orientation={{@orientation}} @colorMap={{@colorMap}} @cellStyle={{coalesce @cellStyle (hash marginBottom=0)}} @cellTitleStyle={{@cellTitleStyle}} @cellTextOverlayStyle={{@cellTextOverlayStyle}} @plotStyle={{coalesce @plotStyle (hash border=\"solid 1px #dbdbdb\")}} @categoryAxisScale={{@categoryAxisScale}} @valueAxisScale={{@valueAxisScale}} @categoryAxisFormatter={{coalesce @categoryAxisFormatter @xAxisFormatter}} @valueAxisFormatter={{coalesce @valueAxisFormatter @yAxisFormatter}} @categoryAxisSort={{coalesce @categoryAxisSort \"asc\"}} @categoryAxisMaxLabelCount={{coalesce @categoryAxisMaxLabelCount 20}} @valueAxisMax={{@valueAxisMax}} @xAxisFormatter={{@xAxisFormatter}} @yAxisFormatter={{@yAxisFormatter}} @xAxisStyle={{@xAxisStyle}} @yAxisStyle={{@yAxisStyle}} @xAxisPointer={{coalesce @xAxisPointer \"line\"}} @yAxisPointer={{@yAxisPointer}} @xAxisPointerLabel={{coalesce @xAxisPointerLabel \"top\"}} @yAxisPointerLabel={{@yAxisPointerLabel}} @xAxisPointerStyle={{@xAxisPointerStyle}} @yAxisPointerStyle={{@yAxisPointerStyle}} @xAxisPointerLabelStyle={{coalesce @xAxisPointerLabelStyle (hash background=\"#fff\" border=\"solid 1px #dbdbdb\" marginBottom=8)}} @yAxisPointerLabelStyle={{@yAxisPointerLabelStyle}} @xAxisTooltip={{@xAxisTooltip}} @yAxisTooltip={{@yAxisTooltip}} @xAxisZoom={{coalesce @xAxisZoom \"bottom\"}} @yAxisZoom={{@yAxisZoom}} @xAxisZoomBrush={{coalesce @xAxisZoomBrush true}} @yAxisZoomBrush={{@yAxisZoomBrush}} @xAxisZoomStyle={{coalesce @xAxisZoomStyle (hash marginTop=0)}} @yAxisZoomStyle={{@yAxisZoomStyle}} @legend={{coalesce @legend \"topLeft\"}} @legendOrientation={{@legendOrientation}} @legendStyle={{coalesce @legendStyle (hash margin=20 marginLeft=80 marginBottom=0 font=\"normal 12px Montserrat,sans-serif\")}} @drillUpButtonStyle={{coalesce @drillUpButtonStyle (hash color=\"#036E9B\" marginTop=-3 fontFamily=\"Material Icons\")}} @drillUpButtonText={{coalesce @drillUpButtonText \"chevron_left\"}} @onSelect={{@onSelect}}>\n    <:itemTooltip as |item|>\n      {{yield item to=\"itemTooltip\"}}\n    </:itemTooltip>\n\n    <:axisTooltip as |items|>\n      {{yield items to=\"axisTooltip\"}}\n    </:axisTooltip>\n  </ChartBar>\n", {
  strictMode: true,
  scope: () => ({
    ChartBar: BarChartComponent,
    coalesce,
    hash
  })
}), templateOnly());

export { TimeSeriesChartComponent as default };
//# sourceMappingURL=time-series.js.map

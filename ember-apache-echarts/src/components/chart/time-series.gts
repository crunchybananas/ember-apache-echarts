// @ts-nocheck - return to this when bar chart is typed
import type { TemplateOnlyComponent as TOC } from '@ember/component/template-only';
import ChartBar from './bar.gts';
import coalesce from '../../helpers/coalesce.ts';
import { hash } from '@ember/helper';

export interface S {
  Args: {
    width?: number;
    height?: number;
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
}

const TimeSeriesChartComponent: TOC<S> = <template>
  <ChartBar
    @width={{@width}}
    @height={{@height}}
    @series={{coalesce @series @data}}
    @variant={{coalesce @variant "groupedLine"}}
    @title={{@title}}
    @rotateData={{@rotateData}}
    @missingValueFormat="--"
    @missingCategoryFormat="???"
    @categoryProperty={{coalesce @categoryProperty "at"}}
    @valueProperty={{@valueProperty}}
    @chartStyle={{@chartStyle}}
    @chartTitleStyle={{coalesce
      @chartTitleStyle
      (hash
        marginLeft=80
        marginBottom=8
        marginTop=4
        textAlign="left"
        font="bold 18px Montserrat,sans-serif"
      )
    }}
    @maxColumns={{@maxColumns}}
    @orientation={{@orientation}}
    @colorMap={{@colorMap}}
    @cellStyle={{coalesce @cellStyle (hash marginBottom=0)}}
    @cellTitleStyle={{@cellTitleStyle}}
    @cellTextOverlayStyle={{@cellTextOverlayStyle}}
    @plotStyle={{coalesce @plotStyle (hash border="solid 1px #dbdbdb")}}
    @categoryAxisScale={{@categoryAxisScale}}
    @valueAxisScale={{@valueAxisScale}}
    @categoryAxisFormatter={{coalesce @categoryAxisFormatter @xAxisFormatter}}
    @valueAxisFormatter={{coalesce @valueAxisFormatter @yAxisFormatter}}
    @categoryAxisSort={{coalesce @categoryAxisSort "asc"}}
    @categoryAxisMaxLabelCount={{coalesce @categoryAxisMaxLabelCount 20}}
    @valueAxisMax={{@valueAxisMax}}
    @xAxisFormatter={{@xAxisFormatter}}
    @yAxisFormatter={{@yAxisFormatter}}
    @xAxisStyle={{@xAxisStyle}}
    @yAxisStyle={{@yAxisStyle}}
    @xAxisPointer={{coalesce @xAxisPointer "line"}}
    @yAxisPointer={{@yAxisPointer}}
    @xAxisPointerLabel={{coalesce @xAxisPointerLabel "top"}}
    @yAxisPointerLabel={{@yAxisPointerLabel}}
    @xAxisPointerStyle={{@xAxisPointerStyle}}
    @yAxisPointerStyle={{@yAxisPointerStyle}}
    @xAxisPointerLabelStyle={{coalesce
      @xAxisPointerLabelStyle
      (hash background="#fff" border="solid 1px #dbdbdb" marginBottom=8)
    }}
    @yAxisPointerLabelStyle={{@yAxisPointerLabelStyle}}
    @xAxisTooltip={{@xAxisTooltip}}
    @yAxisTooltip={{@yAxisTooltip}}
    @xAxisZoom={{coalesce @xAxisZoom "bottom"}}
    @yAxisZoom={{@yAxisZoom}}
    @xAxisZoomBrush={{coalesce @xAxisZoomBrush true}}
    @yAxisZoomBrush={{@yAxisZoomBrush}}
    @xAxisZoomStyle={{coalesce @xAxisZoomStyle (hash marginTop=0)}}
    @yAxisZoomStyle={{@yAxisZoomStyle}}
    @legend={{coalesce @legend "topLeft"}}
    @legendOrientation={{@legendOrientation}}
    @legendStyle={{coalesce
      @legendStyle
      (hash margin=20 marginLeft=80 marginBottom=0 font="normal 12px Montserrat,sans-serif")
    }}
    @drillUpButtonStyle={{coalesce
      @drillUpButtonStyle
      (hash color="#036E9B" marginTop=-3 fontFamily="Material Icons")
    }}
    @drillUpButtonText={{coalesce @drillUpButtonText "chevron_left"}}
    @onSelect={{@onSelect}}
  >
    <:itemTooltip as |item|>
      {{yield item to="itemTooltip"}}
    </:itemTooltip>

    <:axisTooltip as |items|>
      {{yield items to="axisTooltip"}}
    </:axisTooltip>
  </ChartBar>
</template>;

export default TimeSeriesChartComponent;

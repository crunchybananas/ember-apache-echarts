var __ember_auto_import__;(()=>{var t,e={7079:(t,e,r)=>{"use strict"
function i(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t
var r=t[Symbol.toPrimitive]
if(void 0!==r){var i=r.call(t,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e,r,i){r&&Object.defineProperty(t,e,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}function a(t,e,r,i,o){var a={}
return Object.keys(i).forEach((function(t){a[t]=i[t]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce((function(r,i){return i(t,e,r)||r}),a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(t,e,a),a=null),a}r.r(e),r.d(e,{_:()=>a,a:()=>i,b:()=>o})},4308:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>f})
var i,o,a,n,l=r(7079),s=r(5433),d=r(7219),c=r(7990),h=r.n(c),u=r(5521),g=r(3574),m=(0,r(9266).createTemplateFactory)({id:"HL5w5ZY2",block:'[[[11,0],[4,[38,0],[[30,0,["setup"]]],null],[4,[38,1],null,[["width","height"],["100%","100%"]]],[12],[1,"\\n  "],[11,0],[17,1],[4,[38,1],null,[["width","height"],[[28,[37,2],[[30,2],"100%"],null],[28,[37,2],[[30,3],400],null]]]],[4,[38,3],[[30,0,["args"]]],[["tooltipFormatter"],[[52,[28,[37,5],[[48,[30,4]],[30,0,["useDefaultGroupedOrStackedTooltip"]]],null],[30,0,["tooltipFormatter"]]]]]],[12],[13],[1,"\\n\\n"],[41,[48,[30,4]],[[[1,"    "],[10,0],[14,"data-role","itemTooltip"],[15,5,[28,[37,7],[[52,[30,0,["tooltipItem"]],"","display: none"]],null]],[12],[1,"\\n      "],[18,4,[[30,0,["tooltipItem"]]]],[1,"\\n    "],[13],[1,"\\n"]],[]],[[[41,[30,0,["useDefaultGroupedOrStackedTooltip"]],[[[1,"    "],[10,0],[14,"data-role","itemTooltip"],[15,5,[28,[37,7],[[52,[30,0,["tooltipItem"]],"","display: none"]],null]],[12],[1,"\\n"],[1,"      "],[2,[30,0,["tooltipItem","marker"]]],[1,"\\n      "],[1,[30,0,["tooltipItem","series","label"]]],[1,":\\n      "],[1,[30,0,["tooltipItem","value"]]],[1,"\\n    "],[13],[1,"\\n  "]],[]],null]],[]]],[1,"\\n"],[41,[48,[30,5]],[[[1,"    "],[10,0],[14,"data-role","axisTooltip"],[15,5,[28,[37,7],[[52,[30,0,["tooltipItems"]],"","display: none"]],null]],[12],[1,"\\n      "],[18,5,[[30,0,["tooltipItems"]],[30,0,["tooltipAxis"]]]],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[13]],["&attrs","@width","@height","&itemTooltip","&axisTooltip"],false,["did-insert","style","css-size","bar-chart","if","or","has-block","html-safe","yield"]]',moduleName:"/home/runner/work/ember-apache-echarts/ember-apache-echarts/ember-apache-echarts/dist/components/chart/bar.js",isStrictMode:!1})
const p=(t,e)=>({...(0,s.Z)(t,"value","marker","dataIndex","data","seriesIndex"),label:t.name,style:(0,s.Z)(t,"color"),series:{label:t.seriesName,...e[t.seriesIndex]}})
let f=(i=class extends(h()){constructor(...t){super(...t),(0,l.a)(this,"axisTooltipElement",void 0),(0,l.a)(this,"itemTooltipElement",void 0),(0,l.b)(this,"tooltipItem",o,this),(0,l.b)(this,"tooltipItems",a,this),(0,l.b)(this,"tooltipAxis",n,this)}get useDefaultGroupedOrStackedTooltip(){const{variant:t}=this.args
return t&&(t.startsWith("group")||t.startsWith("stacked"))}setup(t){this.axisTooltipElement=t.querySelector("[data-role=axisTooltip]"),this.itemTooltipElement=t.querySelector("[data-role=itemTooltip]")}tooltipFormatter(t,e){return t.length?(this.tooltipAxis=(([t])=>({id:t.axisId,index:t.axisIndex,type:t.axisType,value:t.axisValue,valueLabel:t.axisValueLabel,dimension:t.axisDim}))(t),this.tooltipItems=t.map((t=>p(t,e))),this.axisTooltipElement):(this.tooltipItem=p(t,e),this.itemTooltipElement)}},o=(0,l._)(i.prototype,"tooltipItem",[u.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=(0,l._)(i.prototype,"tooltipItems",[u.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n=(0,l._)(i.prototype,"tooltipAxis",[u.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,l._)(i.prototype,"setup",[d.action],Object.getOwnPropertyDescriptor(i.prototype,"setup"),i.prototype),(0,l._)(i.prototype,"tooltipFormatter",[d.action],Object.getOwnPropertyDescriptor(i.prototype,"tooltipFormatter"),i.prototype),i);(0,g.setComponentTemplate)(m,f)},431:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>g})
var i,o,a=r(7079),n=r(5433),l=r(7219),s=r(7990),d=r.n(s),c=r(5521),h=r(3574),u=(0,r(9266).createTemplateFactory)({id:"1wEx+Pf9",block:'[[[11,0],[4,[38,0],[[30,0,["setup"]]],null],[12],[1,"\\n  "],[11,0],[17,1],[4,[38,1],null,[["width","height"],[[28,[37,2],[[30,2],"100%"],null],[28,[37,2],[[30,3],400],null]]]],[4,[38,3],[[30,0,["args"]]],[["tooltipFormatter"],[[52,[48,[30,4]],[30,0,["tooltipFormatter"]]]]]],[12],[13],[1,"\\n\\n"],[41,[48,[30,4]],[[[1,"    "],[10,0],[14,"data-role","itemTooltip"],[15,5,[28,[37,6],[[52,[30,0,["tooltipItem"]],"","display: none"]],null]],[12],[1,"\\n      "],[18,4,[[30,0,["tooltipItem"]]]],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[13]],["&attrs","@width","@height","&itemTooltip"],false,["did-insert","style","css-size","pie-chart","if","has-block","html-safe","yield"]]',moduleName:"/home/runner/work/ember-apache-echarts/ember-apache-echarts/ember-apache-echarts/dist/components/chart/pie.js",isStrictMode:!1})
let g=(i=class extends(d()){constructor(...t){super(...t),(0,a.a)(this,"itemTooltipElement",void 0),(0,a.b)(this,"tooltipItem",o,this)}setup(t){this.itemTooltipElement=t.querySelector("[data-role=itemTooltip]")}tooltipFormatter(t){var e
return this.tooltipItem=(e=t,{...(0,n.Z)(e,"value","marker","data","dataIndex"),label:e.name,slice:(0,n.Z)(e,"color","percent")}),this.itemTooltipElement}},o=(0,a._)(i.prototype,"tooltipItem",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,a._)(i.prototype,"setup",[l.action],Object.getOwnPropertyDescriptor(i.prototype,"setup"),i.prototype),(0,a._)(i.prototype,"tooltipFormatter",[l.action],Object.getOwnPropertyDescriptor(i.prototype,"tooltipFormatter"),i.prototype),i);(0,h.setComponentTemplate)(u,g)},6395:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>l})
const i=require("@ember/component/template-only")
var o=r.n(i),a=r(3574),n=(0,r(9266).createTemplateFactory)({id:"N2euY/Ij",block:'[[[8,[39,0],null,[["@width","@height","@series","@variant","@title","@rotateData","@missingValueFormat","@missingCategoryFormat","@categoryProperty","@valueProperty","@chartStyle","@chartTitleStyle","@maxColumns","@orientation","@colorMap","@cellStyle","@cellTitleStyle","@cellTextOverlayStyle","@plotStyle","@categoryAxisScale","@valueAxisScale","@categoryAxisFormatter","@valueAxisFormatter","@categoryAxisSort","@categoryAxisMaxLabelCount","@valueAxisMax","@xAxisFormatter","@yAxisFormatter","@xAxisStyle","@yAxisStyle","@xAxisPointer","@yAxisPointer","@xAxisPointerLabel","@yAxisPointerLabel","@xAxisPointerStyle","@yAxisPointerStyle","@xAxisPointerLabelStyle","@yAxisPointerLabelStyle","@xAxisTooltip","@yAxisTooltip","@xAxisZoom","@yAxisZoom","@xAxisZoomBrush","@yAxisZoomBrush","@xAxisZoomStyle","@yAxisZoomStyle","@legend","@legendOrientation","@legendStyle","@drillUpButtonStyle","@drillUpButtonText","@onSelect"],[[30,1],[30,2],[28,[37,1],[[30,3],[30,4]],null],[28,[37,1],[[30,5],"groupedLine"],null],[30,6],[30,7],"--","???",[28,[37,1],[[30,8],"at"],null],[30,9],[30,10],[28,[37,1],[[30,11],[28,[37,2],null,[["marginLeft","marginBottom","marginTop","textAlign","font"],[80,8,4,"left","bold 18px Montserrat,sans-serif"]]]],null],[30,12],[30,13],[30,14],[28,[37,1],[[30,15],[28,[37,2],null,[["marginBottom"],[0]]]],null],[30,16],[30,17],[28,[37,1],[[30,18],[28,[37,2],null,[["border"],["solid 1px #dbdbdb"]]]],null],[30,19],[30,20],[28,[37,1],[[30,21],[30,22]],null],[28,[37,1],[[30,23],[30,24]],null],[28,[37,1],[[30,25],"asc"],null],[28,[37,1],[[30,26],20],null],[30,27],[30,22],[30,24],[30,28],[30,29],[28,[37,1],[[30,30],"line"],null],[30,31],[28,[37,1],[[30,32],"top"],null],[30,33],[30,34],[30,35],[28,[37,1],[[30,36],[28,[37,2],null,[["background","border","marginBottom"],["#fff","solid 1px #dbdbdb",8]]]],null],[30,37],[30,38],[30,39],[28,[37,1],[[30,40],"bottom"],null],[30,41],[28,[37,1],[[30,42],true],null],[30,43],[28,[37,1],[[30,44],[28,[37,2],null,[["marginTop"],[0]]]],null],[30,45],[28,[37,1],[[30,46],"topLeft"],null],[30,47],[28,[37,1],[[30,48],[28,[37,2],null,[["margin","marginLeft","marginBottom","font"],[20,80,0,"normal 12px Montserrat,sans-serif"]]]],null],[28,[37,1],[[30,49],[28,[37,2],null,[["color","marginTop","fontFamily"],["#036E9B",-3,"Material Icons"]]]],null],[28,[37,1],[[30,50],"chevron_left"],null],[30,51]]],[["itemTooltip","axisTooltip"],[[[[1,"\\n    "],[18,54,[[30,52]]],[1,"\\n  "]],[52]],[[[1,"\\n    "],[18,55,[[30,53]]],[1,"\\n  "]],[53]]]]],[1,"\\n"]],["@width","@height","@series","@data","@variant","@title","@rotateData","@categoryProperty","@valueProperty","@chartStyle","@chartTitleStyle","@maxColumns","@orientation","@colorMap","@cellStyle","@cellTitleStyle","@cellTextOverlayStyle","@plotStyle","@categoryAxisScale","@valueAxisScale","@categoryAxisFormatter","@xAxisFormatter","@valueAxisFormatter","@yAxisFormatter","@categoryAxisSort","@categoryAxisMaxLabelCount","@valueAxisMax","@xAxisStyle","@yAxisStyle","@xAxisPointer","@yAxisPointer","@xAxisPointerLabel","@yAxisPointerLabel","@xAxisPointerStyle","@yAxisPointerStyle","@xAxisPointerLabelStyle","@yAxisPointerLabelStyle","@xAxisTooltip","@yAxisTooltip","@xAxisZoom","@yAxisZoom","@xAxisZoomBrush","@yAxisZoomBrush","@xAxisZoomStyle","@yAxisZoomStyle","@legend","@legendOrientation","@legendStyle","@drillUpButtonStyle","@drillUpButtonText","@onSelect","item","items","&itemTooltip","&axisTooltip"],false,["chart/bar","coalesce","hash","yield"]]',moduleName:"/home/runner/work/ember-apache-echarts/ember-apache-echarts/ember-apache-echarts/dist/components/chart/time-series.js",isStrictMode:!1}),l=(0,a.setComponentTemplate)(n,o()())},4776:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>i})
var i=(0,r(8797).helper)((function(t){return t.find((t=>null!=t))}))},5679:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>a})
var i=r(8797)
const o=/^\d+$/
var a=(0,i.helper)((function(t){const e=null!=t[0]&&""!==t[0]?t[0]:t[1]
return"number"==typeof(r=e)||"string"==typeof r&&null!=r.match(o)||""===e?"0"!==e.toString()?`${e}px`:"0":e??"0"
var r}))},6196:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>v})
var i=r(7079),o=r(4822),a=r(6014)
const n=require("@ember/destroyable"),l=require("ember-modifier")
var s=r.n(l),d=r(276),c=r(747),h=r(5436),u=r(3598),g=r(8514),m=r(208),p=r(1605),f=r(9385),y=r(3022),b=r(964)
const x={border:"0px solid #000",font:"bold 16px Montserrat,sans-serif",color:"#000",margin:0,padding:0}
class v extends(s()){get defaultStyles(){return{chart:{},chartTitle:{font:"bold 20px Montserrat,sans-serif",textAlign:"center",margin:24},legend:{font:"normal 16px Montserrat,sans-serif",textAlign:"left",margin:24},xAxisZoom:{margin:8,border:"solid 1px #ddd",backgroundColor:"#e7efff"},yAxisZoom:{margin:8,border:"solid 1px #ddd",backgroundColor:"#e7efff"},cell:{padding:8,margin:8},cellTitle:{font:"bold 16px Montserrat,sans-serif",textAlign:"left",margin:8},cellTextOverlay:{font:"normal 16px Montserrat,sans-serif",textAlign:"center",verticalAlign:"middle",zIndex:100}}}constructor(...t){if(super(...t),(0,i.a)(this,"chart",void 0),(0,i.a)(this,"resizeObserver",void 0),(0,n.registerDestructor)(this,(()=>this.cleanup())),this.constructor==v)throw new Error("AbstractChartModifier is abstract and can't be instantiated.")}modify(t,[e],r,i=0){if(!t.clientHeight||!t.clientWidth)return i>10&&(t.style.height=t.clientHeight||"400px",t.style.width=t.clientWidth||"600px"),void(0,c.default)(t,(()=>this.modify(t,[e],r,i+1)),!0)
const o={...r,...e}
this.chart||(this.chart=this.createChart(t,o)),this.configureChart(o,this.chart,t)}configureChart(){throw new Error("`configureChart` needs to be overridden. No implementation exists.")}createChart(t,e){const r=d.S1(t,null,{renderer:"canvas"})
r.setOption({}),r.handle=(t,...e)=>{r.off(t),r.on(t,...e)}
let i=!0
return this.resizeObserver=(0,c.default)(t,(()=>{i||(r.resize(),this.configureChart(e,r,t)),i=!1})),r}buildLayout(t,e){const r={},i=this.createContext(t,e)
return i.layout=this.addChartBox(i,r),i.layout=this.addTitle(i,r),i.layout=this.addLegend(i,r),i.layout=this.addDataZoom(i,r),i.layout=this.addCellBoxes(i,r),i.layout=this.addCellTitles(i,r),i.layout=this.addCellPlots(i,r),i.layout=this.addCellTextOverlays(i,r),{context:i,config:r}}cleanup(){this.resizeObserver.disconnect(),this.chart.dispose()}createContext(t,e){const r={chartWidth:e.getWidth(),chartHeight:e.getHeight(),width:e.getWidth(),height:e.getHeight(),x:0,y:0},i=(0,o.Z)(Object.keys(this.defaultStyles),((e,r)=>e[r]={...x,...this.defaultStyles[r],...t[`${r}Style`]}),{})
return{layout:r,args:t,chart:e,styles:i,data:this.createContextData(t,e)}}createContextData(t){return{series:t.series??[{data:t.data}]}}addChartBox(t,e){const r=(0,y.default)(t.styles.chart,t.layout)
return(0,b.default)(e,this.generateBoxConfig({...r,...t.layout})),{...t.layout,...(0,u.default)(t.layout,r)}}addTitle(t,e){const{title:r}=t.args
if(!r)return t.layout
const i=(0,y.default)(t.styles.chartTitle,t.layout);(0,b.default)(e,[this.generateTitleConfig(r,t.layout,i)])
const o=(0,m.default)(i)
return{...t.layout,height:t.layout.height-o,y:t.layout.y+o}}addLegend(t,e){const{legend:r}=t.args
if(!r||"none"===r)return t.layout
const i=(0,y.default)(t.styles.legend,t.layout);(0,b.default)(e,[this.generateLegendConfig(t.data.series,t.args,t.layout,i)])
const o=this.computeLegendMetrics(t,e,i),a={...t.layout}
return r.startsWith("top")||r.startsWith("bottom")?(a.height-=o.height,r.startsWith("top")&&(a.y+=o.height)):(a.width-=o.width,r.startsWith("left")&&(a.x+=o.width)),a}addDataZoom(t,e){const{args:r,layout:i,styles:o}=t,{xAxisZoom:a,yAxisZoom:n}=r
if(!(a&&"none"!==a||n&&"none"!==n))return t.layout
const l=(0,y.default)(o.xAxisZoom,i),s=(0,y.default)(o.yAxisZoom,i);(0,b.default)(e,[this.generateXAxisDataZoomConfig(r,i,l),this.generateYAxisDataZoomConfig(r,i,s)])
const d={...i},{xAxisZoomBrush:c,yAxisZoomBrush:h}=r
if(a){const t=(e.dataZoom[0].height??30)+(c?7:0)+l.marginTop+l.marginBottom
d.height=i.height-t,d.y=i.y+("top"===a?t:0)}if(n){const t=((a?e.dataZoom[1]:e.dataZoom[0]).height??30)+(h?7:0)+s.marginLeft+s.marginRight
d.width=i.width-t,d.x=i.x+("left"===n?t:0)}return d}addCellBoxes(t,e){return(0,b.default)(e,(0,f.default)(t,t.data.series,((t,e)=>this.generateBoxConfig(e)))),t.layout}addCellTitles(t,e){const r=t.data.series
if(1===r.length&&!r[0].label&&!r[0].name)return t.layout
const i=(0,y.default)(t.styles.cellTitle,t.layout);(0,b.default)(e,(0,f.default)(t,t.data.series,((e,r)=>this.generateTitleConfig(e.label??e.name,{...t.layout,width:r.width,height:r.height,x:r.innerX,y:r.innerY},i))))
const o=(0,m.default)(i)+i.marginTop+i.marginBottom
return{...t.layout,cell:{...t.layout.cell,yOffset:o}}}addCellPlots(t,e){let r=0
return(0,b.default)(e,(0,f.default)(t,t.data.series,((e,i)=>{const o=this.generatePlotConfig(e,i,t,r)
return o&&r++,o}))),t.layout}addCellTextOverlays(t,e){if(!this.generateTextOverlayConfig)return t.layout
const r=(0,y.default)(t.styles.cellTextOverlay,t.layout)
return(0,b.default)(e,(0,f.default)(t,t.data.series,((e,i)=>this.generateTextOverlayConfig(e,t.args,i,r)))),t.layout}getLegendLabels(t,e){return(0,h.default)(t,e.categoryProperty??"name")}getLegendOrientation(t){const{legend:e,legendOrientation:r}=t
return["horizontal","vertical"].includes(r)?r:e.startsWith("top")||e.startsWith("bottom")?"horizontal":"vertical"}generateBoxConfig(t){return{"graphic.elements":[{type:"rect",top:t.y+t.marginTop,left:t.x+t.marginLeft,shape:{width:t.width-t.marginLeft-t.marginRight-t.borderLeftWidth-t.borderRightWidth,height:t.height-t.marginTop-t.marginBottom-t.borderTopWidth-t.borderBottomWidth},style:{fill:t.backgroundColor??"#fff0",stroke:t.borderTopColor,lineWidth:t.borderTopWidth??0},silent:!0}]}}generateTitleConfig(t,e,r){const i={text:t,top:e.y+r.marginTop,backgroundColor:r.backgroundColor,borderWidth:r.borderTopWidth,borderColor:r.borderTopColor,borderRadius:r.borderRadius,padding:[r.paddingTop,r.paddingRight,r.paddingBottom,r.paddingLeft],textStyle:{color:r.color,fontStyle:r.fontStyle,fontWeight:r.fontWeight,fontFamily:r.fontFamily,fontSize:r.fontSize}}
switch(r.textAlign){case"center":(0,a.Z)(i,{left:e.x+e.width/2,textAlign:"center"})
break
case"right":(0,a.Z)(i,{right:e.chartWidth-(e.x+e.width)+r.marginRight})
break
default:(0,a.Z)(i,{left:e.x+r.marginLeft})}return{title:[i]}}generateLegendConfig(t,e,r,i){const{legend:o="topCenter"}=e,n="vertical"===this.getLegendOrientation(e),l={legend:{type:"scroll",data:this.getLegendLabels(t,e).map((t=>({name:t,icon:"circle",itemStyle:{color:e?.colorMap?.[t]}}))),itemGap:n?15:40,align:i.textAlign??"left",width:r.width,orient:n?"vertical":"horizontal",backgroundColor:i.backgroundColor,borderWidth:i.borderTopWidth,borderColor:i.borderTopColor,borderRadius:i.borderRadius,padding:[i.paddingTop,i.paddingRight,i.paddingBottom,i.paddingLeft],textStyle:{color:i.color,fontStyle:i.fontStyle,fontWeight:i.fontWeight,fontFamily:i.fontFamily,fontSize:i.fontSize}}}
let s,d
return d=o.startsWith("top")||o.endsWith("Top")?{top:r.y+i.marginTop+i.borderTopWidth/2}:o.startsWith("bottom")||o.endsWith("Bottom")?{bottom:r.chartHeight-r.height-r.y+1+i.marginBottom+i.borderBottomWidth/2}:{top:"middle"},s=o.startsWith("left")||o.endsWith("Left")?{left:r.x+i.marginLeft+i.borderLeftWidth/2}:o.startsWith("right")||o.endsWith("Right")?{right:r.chartWidth-r.width-r.x+1+i.marginRight+i.borderRightWidth/2}:{left:"center"},(0,a.Z)(l.legend,{...s,...d}),l}generateXAxisDataZoomConfig(t,e,r){const{xAxisZoom:i,xAxisZoomBrush:o}=t
if(!i)return
const a=this.generateDataZoomConfigElement(r,o),n=o?7:0
return"top"===i?a.top=e.y+r.marginTop+r.borderTopWidth/2:a.bottom=e.chartHeight-e.height-e.y+n+r.marginBottom+r.borderBottomWidth/2,{dataZoom:[{...a,xAxisIndex:[0,1]}]}}generateYAxisDataZoomConfig(t,e,r){const{yAxisZoom:i,yAxisZoomBrush:o}=t
if(!i)return
const a=this.generateDataZoomConfigElement(r,o),n=o?7:0
return"left"===i?a.left=e.x+r.marginLeft+r.borderLeftWidth/2:a.right=e.chartWidth-e.width-e.x+n+r.marginRight+r.borderRightWidth/2,{dataZoom:[{...a,yAxisIndex:[0,1]}]}}generateDataZoomConfigElement(t,e){return{type:"slider",brushSelect:e,borderColor:t.borderTopColor,show:!0,start:0,end:100}}generateTextConfig(t,e,r){const i=(0,p.default)(t,r),o={type:"text",style:{font:`${r.fontStyle} ${r.fontWeight} ${r.fontSize}px ${r.fontFamily}`,fill:r.color,text:t},silent:!0,z:r.zIndex}
switch(r.textAlign){case"center":(0,a.Z)(o,{left:e.x+e.width/2-i.width/2})
break
case"right":(0,a.Z)(o,{right:e.chartWidth-(e.x+e.width)+r.marginRight})
break
default:(0,a.Z)(o,{left:e.x+r.marginLeft})}switch(r.verticalAlign){case"middle":(0,a.Z)(o,{top:e.y+e.height/2-i.height/2})
break
case"bottom":(0,a.Z)(o,{bottom:e.y+e.height-r.marginBottom})
break
default:(0,a.Z)(o,{top:e.y+r.marginTop})}return{"graphic.elements":[o]}}computeLegendMetrics(t,e,r){const{layout:i,data:o,args:a}=t,n=this.getLegendLabels(o.series,a),l=this.getLegendOrientation(a),s=e.legend.itemWidth??25,d=e.legend.itemGap??10,c={width:r.paddingLeft+r.paddingRight+r.borderLeftWidth/2+r.borderRightWidth/2+r.marginLeft+r.marginRight,height:r.paddingTop+r.paddingBottom+r.borderTopWidth/2+r.borderBottomWidth/2+r.marginTop+r.marginBottom}
if("horizontal"===l){const t=n.reduce(((t,e)=>{const i=(0,p.default)(e,r)
return t.width+=s+i.width,t.height=Math.max(t.height,i.height),t}),{width:0,height:0})
c.width=Math.min(i.width,c.width+t.width+d*(n.length-1)),c.height=c.height+t.height}else{const t=(0,g.default)(n,r,i.width)
c.width=c.width+s+t.width,c.height=c.height+t.height*n.length+d*(n.length-1)}return c}}},2925:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>L})
var i,o,a=r(7079),n=r(5521),l=r(1101),s=r(1922),d=r(2020),c=r(276),h=r(964),u=r(5330),g=r(1770),m=r(9702),p=r(656),f=r(5436),y=r(6326),b=r(8514),x=r(1605),v=r(3022),T=r(6196)
const A="name",w="value",S=(t,e,r)=>t?.[r]?{...e,itemStyle:{color:t[r]}}:e,W=(t,e)=>!1===t.axisLabel?.[`show${e}Label`]||"time"===t.type&&!0!==t.axisLabel?.[`show${e}Label`],C=(t,e,r)=>{const{categoryProperty:i=A}=r,{categoryAxisType:o,orientation:a}=r,n=(0,m.default)(t,e,i)
return"time"!==o?n:n.map((t=>({...t,value:"horizontal"===a?[t.value,t.name]:[t.name,t.value]})))}
let L=(i=class extends T.default{constructor(...t){super(...t),(0,a.b)(this,"drillPath",o,this)}get defaultStyles(){return{...super.defaultStyles,plot:{},xAxis:{font:"normal 12px Montserrat,sans-serif",textAlign:"center",marginTop:8},yAxis:{font:"normal 12px Montserrat,sans-serif",textAlign:"right",marginRight:8},xAxisPointer:{border:"dashed 1px #555",backgroundColor:"#ccc",opacity:"0.5"},yAxisPointer:{border:"dashed 1px #555",backgroundColor:"#ccc",opacity:"0.5"},xAxisPointerLabel:{color:"#000",font:"normal 12px Montserrat,sans-serif",backgroundColor:"#eee",border:"solid 1px #999",borderRadius:0,padding:4,margin:4},yAxisPointerLabel:{color:"#000",font:"normal 12px Montserrat,sans-serif",backgroundColor:"#eee",border:"solid 1px #999",borderRadius:0,padding:4,marginRight:4},drillUpButton:{margin:0,color:"#000",font:"normal 22px Montserrat,sans-serif",marginRight:10}}}isGroupedVariant(t){return["groupedBar","groupedLine"].includes(t)}isStackedVariant(t){return["stackedArea","stackedBar"].includes(t)}isBarVariant(t){return["bar","groupedBar","stackedBar"].includes(t??"bar")}isAreaVariant(t){return["area","stackedArea"].includes(t)}getCategories(t,e){const{categoryAxisSort:r="firstSeries",categoryAxisType:i}=t,{categoryProperty:o=A}=t,a=(0,f.default)(e,o)
return"firstSeries"!==r?"asc"===r?a.sort():"desc"===r?a.sort().reverse():"function"==typeof r?a.sort(r):console.warn(`Invalid 'categoryAxisSort' value: ${r}`):"time"===i&&a.sort(((t,e)=>(t?.valueOf()??0)-(e?.valueOf()??0))),a}formatTooltipParams(t,e,r){const{valueAxisFormatter:i=c.WU.OD}=t,{categoryAxisType:o,categoryAxisFormatter:a,orientation:n}=t,{missingCategoryFormat:l,missingValueFormat:s}=t
return"time"===o&&(e.value=e.value["horizontal"===n?0:1]),{...e,value:e.value||null==s?i?i(e.value,r):e.value:s,category:e.name||null==l?a?a(e.name,r):e.name:l}}configureChart(t,e){const r=t.series??[{data:t.data}],{categoryAxisScale:i,tooltipFormatter:o,onSelect:a}=t,{config:n,context:s}=this.buildLayout(t,e)
e.setOption({...n,tooltip:{trigger:"item",...o&&{formatter:e=>o(null!=e.length?e.map((e=>this.formatTooltipParams(t,e,"axisTooltip"))):this.formatTooltipParams(t,e,"itemTooltip"),s.data.dataset)}}},{notMerge:!0}),e.handle("selectchanged",(o=>{const{fromAction:n,fromActionPayload:l,isFromClick:d}=o
if(!d)return
const c=l.seriesIndex,h=l.dataIndexInside,u=r[c],g="shared"===i?s.data.categories[h]:u.data[h]?u.data[h][t.categoryProperty??A]:null
g&&e.dispatchAction({type:n,name:g}),a&&a("select"===n?g:null)})),e.handle("legendselectchanged",(({name:t,selected:r})=>{const i=Object.values(r),o=(0,l.Z)(i);(1===o.false&&!1===r[t]||o.false===i.length)&&e.dispatchAction({type:"legendInverseSelect"})})),e.handle("dblclick",(({seriesIndex:t})=>{s.data.dataset[t].series&&this.drillPath.pushObject(t)}))}createContextData(t,e){const r=super.createContextData(t,e),{rotateData:i,categoryAxisScale:o,valueAxisScale:a}=t,{categoryProperty:n=A}=t,{valueProperty:l=w}=t,s=i?(0,y.default)(r.series,n,l):r.series,{series:d,title:c}=this.drillPath.reduce((({series:t},e)=>({series:t[e].series,title:t[e].label})),{series:s,title:t.title})
return{...r,..."shared"===o&&{categories:this.getCategories(t,r.series)},..."shared"===a&&{minValue:(0,g.default)(r.series,"min"),maxValue:(0,g.default)(r.series,"max")},series:this.isStackedVariant(t.variant)||this.isGroupedVariant(t.variant)?[{data:d}]:d,dataset:d,title:c}}addTitle(t,e){const r=this.addDrillUpButton(t,e),i=t.layout.width-r.width,o=t.layout.height-r.height,a=super.addTitle({...t,args:{...t.args,title:t.data.title??t.args.title}},e)
if(e.title?.[0]){const r=t.layout.height-a.height
if(o>r){const t=o-r
a.height-=t,a.y+=t,e.title[0].top=e.title[0].top/2+t/2}e.title[0].left+=i}return a}addDrillUpButton(t,e){if(!this.drillPath.length)return t.layout
const{layout:r,args:i,styles:o}=t,{drillUpButtonText:a="<"}=i,n=(0,v.default)(o.drillUpButton,r),l=(0,v.default)(o.chartTitle,r),s=n.marginLeft+n.marginRight,d=n.marginTop+n.marginBottom
n.marginTop+=l.marginTop,n.marginLeft+=l.marginLeft
const c=this.generateDrillUpButtonConfig(a,r,n);(0,h.default)(e,[c])
const u=c["graphic.elements"][0].children[0].shape
return{...r,width:r.width-u.width-s,height:r.height-u.height-d,x:r.x+u.width+s,y:r.y+u.height+d}}generateDrillUpButtonConfig(t,e,r){const i=(0,x.default)(t,r)
return{"graphic.elements":[{type:"group",left:r.marginLeft,top:r.marginTop,children:[{type:"rect",shape:{width:i.width+r.paddingLeft+r.paddingRight,height:i.fontHeight+r.paddingTop+r.paddingBottom,r:[r.borderTopLeftRadius??0,r.borderTopRightRadius??0,r.borderBottomRightRadius??0,r.borderBottomLeftRadius??0]},style:{stroke:r.borderColor??"#fff",fill:r.backgroundColor??"#fff"}},{type:"text",x:r.paddingLeft,y:r.paddingTop,style:{fill:r.color,text:t,font:`${r.fontStyle} ${r.fontWeight} ${r.fontSize}px ${r.fontFamily}`},textConfig:{distance:0,inside:!0,position:[10,0]}}],onclick:()=>this.drillPath.popObject()}]}}getLegendLabels(t,e){return this.isStackedVariant(e.variant)||this.isGroupedVariant(e.variant)?t[0].data.map((t=>t.label??t.name)):super.getLegendLabels(t,e)}computeCategoryInfo(t,e){const{args:r,data:i}=e,{variant:o,categoryAxisScale:a}=r,n=this.isGroupedVariant(o)||this.isStackedVariant(o)?t.data:[t],l="shared"===a?i.categories:this.getCategories(r,n)
return{categories:l,first:l[0],last:l[l.length-1],count:l.length}}computeValueInfo(t,e,r){const{args:i,data:o}=e,{variant:a,valueAxisScale:n}=i,{categoryProperty:l=A}=i,{valueProperty:c=w}=i,h="shared"===n
let u
return u=this.isStackedVariant(a)?(0,p.default)(t.data,r,l,c):this.isGroupedVariant(a)?(0,s.Z)((0,d.Z)(t.data.map((t=>(0,m.default)(t.data,r,l,c))))):(0,m.default)(t.data,r,l,c),{values:u,minimum:h?o.minValue:Math.min(...u),maximum:h?o.maxValue:Math.max(...u)}}computeCategoryAxisTicks(t,e,r){const{categoryAxisFormatter:i}=t.args,o="time"===r.type,a=new c.Hn({...o&&{splitNumber:6},...r})
a.ecModel=this.chart.getModel(),o||(a.getCategories=()=>e.categories)
const n=c._y.createScale([e.first.valueOf(),e.last.valueOf()],a)
let l=n.getTicks(!1).map(((t,e)=>({...(0,u.default)(o?n.getFormattedLabel(t,e,i):i?i(n.getLabel(t)):n.getLabel(t)),position:n.normalize(t.value)})))
return W(r,"Min")&&l.shift(),W(r,"Max")&&l.pop(),l}computeValueAxisTicks(t,e,r){const{args:i}=t,o=i.valueAxisFormatter??c.WU.OD,a=null==r.min?Math.min(0,e.minimum):"dataMin"===r.min?e.minimum:r.min,n=null==r.max||"dataMax"===r.max?e.maximum:r.max,l=c._y.createScale([a,n],r)
return l.getTicks(!1).map((t=>({label:null!=t.value?o(t.value):"",position:l.normalize(t.value)})))}generatePlotConfig(t,e,r,i){const{args:o,styles:a,data:n}=r,{noDataText:l,seriesConfig:s}=o
if((!t.data||0==t.data.length)&&l)return
const{variant:d,orientation:c,colorMap:h}=o,{categoryAxisType:u="category"}=o,{categoryAxisMaxLabelCount:g}=o,{categoryAxisFormatter:m,valueAxisFormatter:p}=o,{valueAxisScale:f,valueAxisMax:y}=o,b="horizontal"===c,x=this.isBarVariant(d),T=this.isAreaVariant(d),A=this.isStackedVariant(d),w=this.isGroupedVariant(d)||A,W=this.computeCategoryInfo(t,r),L=this.computeValueInfo(t,r,W.categories),B=(0,v.default)(a.yAxis,r.layout),k=(0,v.default)(a.xAxis,r.layout),O=b?k:B,P=b?B:k,Z={gridIndex:i,type:"value",max:w||"shared"!==f?"dataMaxRoundedUp"!==y?y:void 0:y&&"dataMax"!==y?y:n.maxValue,axisLabel:{...p&&{formatter:(t,e)=>p(t,"axis",e)},margin:b?O.marginTop:O.marginRight,...this.generateAxisLabelConfig(e,O)}},R=this.computeValueAxisTicks(r,L,Z),M={gridIndex:i,type:u,inverse:b,..."time"!==u&&{data:W.categories},axisLabel:{...m&&{formatter:(t,e)=>m(t,"axis",e)},interval:g&&W.count>g?Math.ceil(W.count/g)-1:0,...!b&&{overflow:"break"},margin:b?P.marginRight:P.marginTop}},I=this.computeCategoryAxisTicks(r,W,M),_={},z=this.computeYAxisInfo(B,b?I:R,b)
e=this.addAxisPointer(r,e,_,z,"y")
const F={},j=this.computeXAxisInfo(o,e,k,b?R:I,z,b)
e=this.addAxisPointer(r,e,F,j,"x"),M.axisLabel={...M.axisLabel,width:j.maxLabelWidth,...this.generateAxisLabelConfig(e,b?B:k)}
const D={...s,xAxisIndex:i,yAxisIndex:i,type:x?"bar":"line",...T&&{areaStyle:{}},...!x&&{symbol:"circle",symbolSize:T?6:8},...!x&&{emphasis:{itemStyle:{shadowBlur:3,shadowColor:"#000000",shadowOffsetX:1,shadowOffsetY:1}}},selectedMode:"single",triggerLineEvent:!0,z:20},V=(0,v.default)(a.plot,r.layout),$={x:e.innerX+z.width-1,y:e.innerY+z.heightOverflow,width:j.width-j.widthOverflow,height:e.innerHeight-j.height-z.heightOverflow}
return{grid:[$],yAxis:[{..._,...b?M:Z,...V.borderLeftWidth&&{axisLine:{show:!0,lineStyle:{color:V.borderLeftColor,width:V.borderLeftWidth,style:V.borderLeftStyle}}}}],xAxis:[{...F,...b?Z:M,...V.borderBottomWidth&&{axisLine:{show:!0,lineStyle:{color:V.borderBottomColor,width:V.borderBottomWidth,style:V.borderBottomStyle}}}}],series:w?t.data.map((t=>({...D,name:t.label,data:C(t.data,W.categories,o).map((e=>({...e,...S(h,e,t.label)}))),...A&&{stack:"total"}}))):[{...D,data:C(t.data,W.categories,o),...x&&{colorBy:"data"}}],...(V.borderTopWidth||V.borderRightWidth)&&{"graphic.elements":[...V.borderRightWidth&&[{type:"line",left:$.x+$.width-2,top:$.y-3,shape:{y2:$.height+1},style:{stroke:V.borderRightColor,lineWidth:V.borderRightWidth},silent:!0,z:10}],...V.borderTopWidth&&[{type:"line",left:$.x-2.5,top:$.y-2.5,shape:{x2:$.width},style:{stroke:V.borderTopColor,lineWidth:V.borderTopWidth},silent:!0,z:10}]]}}}generateAxisLabelConfig(t,e){return{color:e.color,fontStyle:e.fontStyle,fontWeight:e.fontWeight,fontFamily:e.fontFamily,fontSize:e.fontSize,align:e.textAlign,verticalAlign:e.verticalAlign,backgroundColor:e.backgroundColor,borderWidth:e.borderTopWidth,borderColor:e.borderTopColor,borderType:e.borderTopType,borderRadius:e.borderRadius,padding:[e.paddingTop,e.paddingRight,e.paddingBottom,e.paddingLeft]}}addAxisPointer(t,e,r,i,o){const{args:a,styles:n}=t,l=`${o}AxisPointer`,s=a[l]
if(!s||"none"===s)return e
const d=(0,v.default)(n[l],t.layout),c=(0,v.default)(n[`${l}Label`],t.layout),h=a[`${l}Label`]??"bottom",u=a[`${o}AxisTooltip`]??"x"===o,g=a[`${o}AxisFormatter`]
r.axisPointer={show:!0,type:s,triggerTooltip:u,z:0},"line"===s?r.axisPointer.lineStyle={color:d.color,width:"x"===o?d.borderLeftWidth||d.borderRightWidth:d.borderTopWidth||d.borderBottomWidth,type:"x"===o?d.borderLeftStyle||d.borderRightStyle:d.borderTopStyle||d.borderBottomStyle,opacity:d.opacity}:"shadow"===s&&(r.axisPointer.shadowStyle={color:d.backgroundColor,opacity:d.opacity}),r.axisPointer.label="none"===h?{show:!1}:{...g&&{formatter:t=>g(t.value)},color:c.color,fontStyle:c.fontStyle,fontWeight:c.fontWeight,fontFamily:c.fontFamily,fontSize:c.fontSize,backgroundColor:c.backgroundColor,borderWidth:c.borderTopWidth,borderColor:c.borderTopColor,borderType:c.borderTopType,borderRadius:c.borderRadius,padding:[c.paddingTop,c.paddingRight,c.paddingBottom,c.paddingLeft]}
const m={...e},p="x"===o?i.height+c.paddingTop+c.paddingBottom+c.borderTopWidth+c.borderBottomWidth:i.width+c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth,f="x"===o?c.marginTop+c.marginBottom:c.marginLeft+c.marginRight
switch(h){case"top":m.innerHeight-=p+f,m.innerY+=i.height+f,r.axisPointer.label.margin=p+c.marginTop-e.innerHeight
break
case"right":m.innerWidth-=p+f,r.axisPointer.label.margin=p-c.marginLeft-e.innerWidth
break
case"bottom":m.innerHeight-=c.marginTop,r.axisPointer.label.margin=c.marginTop
break
case"left":r.axisPointer.label.margin=c.marginRight}return m}generateTextOverlayConfig(t,e,r,i){const{noDataText:o}=e
return t.data&&0!=t.data.length||!o?void 0:this.generateTextConfig(o,{width:r.innerWidth,height:r.innerHeight,x:r.innerX,y:r.innerY},i)}computeYAxisInfo(t,e,r){const i=[...e].reduce(((t,e)=>((!t.length||e.position-t[t.length-1].position>.03)&&t.push(e),t)),[]),o=(0,b.default)(i.map((t=>t.label)),t),a=o.width+t.marginLeft+t.marginRight,n=i[i.length-1],l=(0,x.default)(n.label,t).height
return{width:a,labelMetrics:o,heightOverflow:r?0:Math.max(0,l/2)}}computeXAxisInfo(t,e,r,i,o,a){const{categoryAxisMaxLabelCount:n,categoryAxisType:l}=t,s=Math.min(n??i.length,i.length),d=e.innerWidth-o.width-e.borderLeftWidth-e.borderRightWidth,c=a?0:1,h=d/(a?i.length:s),u=(0,b.default)(i.map((t=>t.label)),r,h),g=u.height+r.marginTop+r.marginBottom+c,m=i[i.length-1],p=(0,x.default)(m.label,r).width
return{width:d,height:g,labelMetrics:u,maxLabelWidth:h,widthOverflow:a||"time"===l?Math.max(0,p/2-(d-m.position*d)):0}}},o=(0,a._)(i.prototype,"drillPath",[n.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),i)},1082:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>o})
var i=r(6196)
class o extends i.default{configureChart(t,e){const r=t.series??[{data:t.data}],{tooltipFormatter:i,onSelect:o}=t,{config:a}=this.buildLayout(t,e)
e.setOption({...a,tooltip:{formatter:i}}),e.handle("selectchanged",(t=>{const{fromAction:i,fromActionPayload:a,isFromClick:n}=t
if(!n)return
const l=a.seriesIndex,s=a.dataIndexInside,d=r[l],c=d.data[s]?d.data[s].name:null
c&&e.dispatchAction({type:i,name:c}),o&&o("select"===i?c:null)}))}generatePlotConfig(t,e,r){const{variant:i,noDataText:o}=r.args
return t.data&&0!=t.data.length||!o?{series:[{type:"pie",..."donut"===i&&{radius:[.3*e.innerHeight/2,.7*e.innerHeight/2]},center:[e.innerX+e.innerWidth/2-.5,e.innerY+e.innerHeight/2-.5],selectedMode:"single",data:t.data}]}:void 0}generateTextOverlayConfig(t,e,r,i){const{noDataText:o}=e
return t.data&&0!=t.data.length||!o?void 0:this.generateTextConfig(o,{width:r.innerWidth,height:r.innerHeight,x:r.innerX,y:r.innerY},i)}}},5330:(t,e,r)=>{"use strict"
function i(t){if(t.startsWith("{")&&t.endsWith("}")&&t.includes("|")){const[e,r]=t.substring(1,t.length-2).split("|")
return{type:e,label:r}}return{label:t}}r.r(e),r.d(e,{default:()=>i})},1175:(t,e,r)=>{"use strict"
function i(t,e="id",r=void 0,i=!1){return t?t.reduce(((t,o)=>{const a=o[e],n=r?o[r]:o
return i?(t[a]=t[a]??[],t[a].push(n)):t[a]=n,t}),{}):{}}r.r(e),r.d(e,{default:()=>i})},1770:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>a})
var i=r(1922),o=r(5436)
function a(t,e,r="value"){return Math[e](...(0,i.Z)((0,o.default)(t,r)))}},9702:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>a})
var i=r(1922),o=r(1175)
function a(t,e,r,a){const n=(0,o.default)(t,r,a)
return(0,i.Z)(e.map((t=>n[t])))}},656:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>a})
var i=r(2020),o=r(4822)
function a(t,e,r,a){const n=(0,i.Z)(t.map((t=>t.data)))
return Object.values((0,o.Z)(n,((t,e)=>{t[e?.[r]]=(t[e?.[r]]??0)+(e?.[a]??0)}),{}))}},5436:(t,e,r)=>{"use strict"
function i(t,e){const r=new Map
for(const i of t)for(const t of i.data){const i=t[e]
r.set("function"==typeof i?.valueOf?i.valueOf():i,i)}return Array.from(r.values())}r.r(e),r.d(e,{default:()=>i})},6326:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>a})
var i=r(4802),o=r(5436)
const a=(t,e,r)=>(0,o.default)(t,e).map((o=>({label:o,data:t.map((t=>{const a=t.data.find((t=>t[e]===o))
return a?{[e]:t.label,[r]:a[r],...(0,i.Z)(t,"data","label")}:void 0}))})))},3598:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>i})
const i=(t,e)=>({...t,width:t.width-e.marginLeft-e.marginRight-e.borderLeftWidth-e.borderRightWidth-e.paddingLeft-e.paddingRight,height:t.height-e.marginTop-e.marginBottom-e.borderTopWidth-e.borderBottomWidth-e.paddingTop-e.paddingBottom,x:t.x+e.marginLeft+e.borderLeftWidth+e.paddingLeft,y:t.y+e.marginTop+e.borderTopWidth+e.paddingTop})},8514:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>o})
var i=r(1605)
const o=(t,e,r)=>t.reduce(((t,o)=>{const a=(0,i.default)(o,e)
if(r&&a.width>r){const t=Math.ceil(a.width/r)
a.height=a.height*t+2*(t-1)}return t.width=Math.max(t.width,a.width),t.height=Math.max(t.height,a.height),t}),{width:0,height:0})},208:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>o})
var i=r(1605)
const o=t=>(0,i.default)("ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz",t).height+t.marginTop+t.marginBottom+t.borderTopWidth+t.borderBottomWidth+t.paddingTop+t.paddingBottom},1605:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>o})
const i="ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz"
function o(t,e){const r=document.createElement("canvas")
r.setAttribute("height",1e3),r.setAttribute("width",400)
const o=r.getContext("2d")
o.font=`${e.fontWeight??"normal"} ${e.fontSize}px ${e.fontFamily}`
const a=o.measureText(t)
let n
if(null!=a.fontBoundingBoxAscent)n=a.fontBoundingBoxAscent+a.fontBoundingBoxDescent
else{const{actualBoundingBoxAscent:t,actualBoundingBoxDescent:e}=o.measureText(i)
n=1.1*(t+e)}return{height:a.actualBoundingBoxAscent+a.actualBoundingBoxDescent,width:a.width,fontHeight:n}}},9385:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>a})
var i=r(3134),o=r(3022)
function a(t,e,r){const a=function(t,e){const r=function(t,e){const{maxColumns:r}=t.args,i=e.length,o=r?Math.min(i,r):i,a=Math.ceil(i/o)
return{width:t.layout.width,height:t.layout.height,rows:a,columns:o}}(t,e),a=function(t,e){const r=t.layout.cell?.xOffset??0,a=t.layout.cell?.yOffset??0
let n={width:e.width/e.columns-r,height:e.height/e.rows-a}
const l={xOffset:r,yOffset:a,...n,...(0,o.default)(t.styles.cell,n)}
return n={width:n.width-l.marginLeft-l.marginRight-l.borderLeftWidth-l.borderRightWidth,height:n.height-l.marginTop-l.marginBottom-l.borderTopWidth-l.borderBottomWidth},Object.assign(l,(0,i.Z)((0,o.default)(t.styles.cell,n),((t,e)=>e.startsWith("padding")))),l.innerWidth=n.width-l.paddingLeft-l.paddingRight,l.innerHeight=n.height-l.paddingTop-l.paddingBottom,l}(t,r)
return{chart:r,cell:a}}(t,e)
return e.map(((i,o)=>{const n=o%a.chart.columns,l=Math.floor(o/a.chart.columns),s=a.cell.yOffset??0,d=t.layout.x+a.cell.width*n,c=t.layout.y+(a.cell.height+s)*l
return r(i,{...a.cell,row:l,column:n,index:o,x:d,y:c,innerX:d+a.cell.marginLeft+a.cell.borderLeftWidth+a.cell.paddingLeft,innerY:c+a.cell.marginTop+a.cell.borderTopWidth+a.cell.paddingTop+s},a.chart,e)}))}},964:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>o})
var i=r(366)
function o(t,e){e&&(Array.isArray(e)?e.forEach((e=>o(t,e))):Object.keys(e).forEach((r=>(0,i.default)(t,r,e[r]))))}},366:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>a})
var i=r(2584),o=r(6759)
function a(t,e,r){if(!r)return
const a=(0,i.Z)(t,e)
if(a)if(Array.isArray(r)&&Array.isArray(a))(0,o.Z)(t,e,[...a,...r])
else{if("object"!=typeof r||"object"!=typeof a)throw new Error(`The value at ${e} cannot be merged. It must be an object or array.`);(0,o.Z)(t,e,Object.assign({},a,r))}else(0,o.Z)(t,e,r)}},747:(t,e,r)=>{"use strict"
function i(t,e,r=!1){const i=new ResizeObserver((()=>{e(t),r&&i.disconnect()}))
return i.observe(t),i}r.r(e),r.d(e,{default:()=>i})},5267:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>a})
var i=r(8250)
const o=["margin","padding","borderWidth","borderTopWidth","borderBottomWidth","borderLeftWidth","borderRightWidth","borderRadius","borderTopRadius","borderBottomRadius","borderLeftRadius","borderRightRadius"],a=t=>Object.keys(t).reduce(((e,r)=>e+`${(0,i.Z)(r)}: ${((t,e)=>"number"==typeof e&&o.find((e=>t.startsWith(e)))?`${e}px`:e)(r,t[r])}; `),"")},8921:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>a})
var i=r(4822),o=r(1312)
function a(t){const e=document.createElement("div")
e.setAttribute("style",t)
const r=Object.keys(e.style).filter((t=>parseInt(t)==t)).map((t=>e.style[t])).filter((t=>e.style[t]))
return(0,i.Z)(r,((t,r)=>t[(0,o.Z)(r)]=e.style[r]),{})}},3022:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>s})
var i=r(6478),o=r(5267),a=r(8921)
const n=/^-?\d+\.?\d*\px$/,l=/^-?\d+\.?\d*%+$/
function s(t,e){const r=(0,a.default)((0,o.default)(t))
return(0,i.Z)(r,((t,r)=>n.test(t)?parseFloat(t.slice(0,-2)):l.test(t)?function(t,e,r){return t=t.slice(0,-1)/100,e.endsWith("Top")||e.endsWith("Bottom")?t*(r?.height??1):t*(r?.width??1)}(t,r,e):t))}},1292:t=>{"use strict"
t.exports=require("@ember/application")},3574:t=>{"use strict"
t.exports=require("@ember/component")},8797:t=>{"use strict"
t.exports=require("@ember/component/helper")},3353:t=>{"use strict"
t.exports=require("@ember/debug")},7219:t=>{"use strict"
t.exports=require("@ember/object")},9806:t=>{"use strict"
t.exports=require("@ember/object/internals")},8773:t=>{"use strict"
t.exports=require("@ember/runloop")},8574:t=>{"use strict"
t.exports=require("@ember/service")},9266:t=>{"use strict"
t.exports=require("@ember/template-factory")},1866:t=>{"use strict"
t.exports=require("@ember/utils")},7990:t=>{"use strict"
t.exports=require("@glimmer/component")},5521:t=>{"use strict"
t.exports=require("@glimmer/tracking")},8902:(t,e,r)=>{var i,o
t.exports=(i=_eai_d,o=_eai_r,window.emberAutoImportDynamic=function(t){return 1===arguments.length?o("_eai_dyn_"+t):o("_eai_dynt_"+t)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(t){return o("_eai_sync_"+t)(Array.prototype.slice.call(arguments,1))},i("ember-apache-echarts/_rollupPluginBabelHelpers-7ae2993d",[],(function(){return r(7079)})),i("ember-apache-echarts/components/chart/bar",["@ember/object","@glimmer/component","@glimmer/tracking","@ember/component","@ember/template-factory"],(function(){return r(4308)})),i("ember-apache-echarts/components/chart/pie",["@ember/object","@glimmer/component","@glimmer/tracking","@ember/component","@ember/template-factory"],(function(){return r(431)})),i("ember-apache-echarts/components/chart/time-series",["@ember/component","@ember/template-factory"],(function(){return r(6395)})),i("ember-apache-echarts/helpers/coalesce",["@ember/component/helper"],(function(){return r(4776)})),i("ember-apache-echarts/helpers/css-size",["@ember/component/helper"],(function(){return r(5679)})),i("ember-apache-echarts/modifiers/abstract-chart",[],(function(){return r(6196)})),i("ember-apache-echarts/modifiers/bar-chart",["@glimmer/tracking"],(function(){return r(2925)})),i("ember-apache-echarts/modifiers/pie-chart",[],(function(){return r(1082)})),i("ember-apache-echarts/utils/chart/parse-axis-label",[],(function(){return r(5330)})),i("ember-apache-echarts/utils/create-lookup",[],(function(){return r(1175)})),i("ember-apache-echarts/utils/data/compute-statistic",[],(function(){return r(1770)})),i("ember-apache-echarts/utils/data/get-series-data",[],(function(){return r(9702)})),i("ember-apache-echarts/utils/data/get-series-totals",[],(function(){return r(656)})),i("ember-apache-echarts/utils/data/get-unique-dataset-values",[],(function(){return r(5436)})),i("ember-apache-echarts/utils/data/rotate-data-series",[],(function(){return r(6326)})),i("ember-apache-echarts/utils/layout/compute-inner-box",[],(function(){return r(3598)})),i("ember-apache-echarts/utils/layout/compute-max-text-metrics",[],(function(){return r(8514)})),i("ember-apache-echarts/utils/layout/compute-text-height",[],(function(){return r(208)})),i("ember-apache-echarts/utils/layout/compute-text-metrics",[],(function(){return r(1605)})),i("ember-apache-echarts/utils/layout/layout-cells",[],(function(){return r(9385)})),i("ember-apache-echarts/utils/merge-at",[],(function(){return r(366)})),i("ember-apache-echarts/utils/merge-at-paths",[],(function(){return r(964)})),i("ember-apache-echarts/utils/on-element-resize",[],(function(){return r(747)})),i("ember-apache-echarts/utils/style/format-css-style-value",[],(function(){return r(5267)})),i("ember-apache-echarts/utils/style/parse-css-style-value",[],(function(){return r(8921)})),i("ember-apache-echarts/utils/style/resolve-style",[],(function(){return r(3022)})),i("ember-page-title/helpers/page-title.js",["@ember/service","@ember/component/helper","@ember/object/internals"],(function(){return r(8367)})),void i("ember-page-title/services/page-title.js",["@ember/application","@ember/runloop","@ember/service","@ember/utils","@ember/debug"],(function(){return r(3020)})))},6861:function(t,e){window._eai_r=require,window._eai_d=define}},r={}
function i(t){var o=r[t]
if(void 0!==o)return o.exports
var a=r[t]={exports:{}}
return e[t].call(a.exports,a,a.exports,i),a.exports}i.m=e,t=[],i.O=(e,r,o,a)=>{if(!r){var n=1/0
for(c=0;c<t.length;c++){for(var[r,o,a]=t[c],l=!0,s=0;s<r.length;s++)(!1&a||n>=a)&&Object.keys(i.O).every((t=>i.O[t](r[s])))?r.splice(s--,1):(l=!1,a<n&&(n=a))
if(l){t.splice(c--,1)
var d=o()
void 0!==d&&(e=d)}}return e}a=a||0
for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1]
t[c]=[r,o,a]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t
return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={143:0}
i.O.j=e=>0===t[e]
var e=(e,r)=>{var o,a,[n,l,s]=r,d=0
if(n.some((e=>0!==t[e]))){for(o in l)i.o(l,o)&&(i.m[o]=l[o])
if(s)var c=s(i)}for(e&&e(r);d<n.length;d++)a=n[d],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0
return i.O(c)},r=globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]
r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),i.O(void 0,[403],(()=>i(6861)))
var o=i.O(void 0,[403],(()=>i(8902)))
o=i.O(o),__ember_auto_import__=o})()

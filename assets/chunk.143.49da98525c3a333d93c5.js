var __ember_auto_import__;(()=>{var t,e={3839:(t,e,r)=>{"use strict"
function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e,r,i){r&&Object.defineProperty(t,e,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}function o(t,e,r,i,a){var o={}
return Object.keys(i).forEach((function(t){o[t]=i[t]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,i){return i(t,e,r)||r}),o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(t,e,o),o=null),o}r.r(e),r.d(e,{_:()=>o,a:()=>i,b:()=>a})},9196:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>m})
var i,a,o=r(9266),n=r(3839),l=r(3574),s=r(2356),d=r.n(s),h=r(7219),c=r(7990),u=r.n(c),p=r(5521),g=(0,o.createTemplateFactory)({id:"CFskdz/W",block:'[[[11,0],[4,[38,0],[[30,0,["setup"]]],null],[12],[1,"\\n  "],[11,0],[17,1],[4,[38,1],null,[["width","height"],[[28,[37,2],[[30,2],"100%"],null],[28,[37,2],[[30,3],400],null]]]],[4,[38,3],[[30,0,["args"]]],[["tooltipFormatter"],[[52,[48,[30,4]],[30,0,["tooltipFormatter"]]]]]],[12],[13],[1,"\\n\\n"],[41,[48,[30,4]],[[[1,"    "],[10,0],[14,"data-role","itemTooltip"],[15,5,[28,[37,6],[[52,[30,0,["tooltipItem"]],"","display: none"]],null]],[12],[1,"\\n      "],[18,4,[[30,0,["tooltipItem"]]]],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[13]],["&attrs","@width","@height","&itemTooltip"],false,["did-insert","style","css-size","bar-chart","if","has-block","html-safe","yield"]]',moduleName:"(unknown template module)",isStrictMode:!1})
let m=(i=class extends(u()){constructor(){super(...arguments),(0,n.a)(this,"itemTooltipElement",void 0),(0,n.b)(this,"tooltipItem",a,this)}setup(t){this.itemTooltipElement=t.querySelector("[data-role=itemTooltip]")}tooltipFormatter(t){var e
return this.tooltipItem=(e=t,{...d()(e,"value","marker","dataIndex"),label:e.name,bar:d()(e,"color"),meta:e.data?.meta,series:{label:e.seriesName,index:e.seriesIndex}}),this.itemTooltipElement}},a=(0,n._)(i.prototype,"tooltipItem",[p.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,n._)(i.prototype,"setup",[h.action],Object.getOwnPropertyDescriptor(i.prototype,"setup"),i.prototype),(0,n._)(i.prototype,"tooltipFormatter",[h.action],Object.getOwnPropertyDescriptor(i.prototype,"tooltipFormatter"),i.prototype),i);(0,l.setComponentTemplate)(g,m)},720:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>m})
var i,a,o=r(9266),n=r(3839),l=r(3574),s=r(2356),d=r.n(s),h=r(7219),c=r(7990),u=r.n(c),p=r(5521),g=(0,o.createTemplateFactory)({id:"U7JKVPI9",block:'[[[11,0],[4,[38,0],[[30,0,["setup"]]],null],[12],[1,"\\n  "],[11,0],[17,1],[4,[38,1],null,[["width","height"],[[28,[37,2],[[30,2],"100%"],null],[28,[37,2],[[30,3],400],null]]]],[4,[38,3],[[30,0,["args"]]],[["tooltipFormatter"],[[52,[48,[30,4]],[30,0,["tooltipFormatter"]]]]]],[12],[13],[1,"\\n\\n"],[41,[48,[30,4]],[[[1,"    "],[10,0],[14,"data-role","itemTooltip"],[15,5,[28,[37,6],[[52,[30,0,["tooltipItem"]],"","display: none"]],null]],[12],[1,"\\n      "],[18,4,[[30,0,["tooltipItem"]]]],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[13]],["&attrs","@width","@height","&itemTooltip"],false,["did-insert","style","css-size","pie-chart","if","has-block","html-safe","yield"]]',moduleName:"(unknown template module)",isStrictMode:!1})
let m=(i=class extends(u()){constructor(){super(...arguments),(0,n.a)(this,"itemTooltipElement",void 0),(0,n.b)(this,"tooltipItem",a,this)}setup(t){this.itemTooltipElement=t.querySelector("[data-role=itemTooltip]")}tooltipFormatter(t){var e
return this.tooltipItem=(e=t,{...d()(e,"value","marker","data","dataIndex"),label:e.name,slice:d()(e,"color","percent")}),this.itemTooltipElement}},a=(0,n._)(i.prototype,"tooltipItem",[p.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,n._)(i.prototype,"setup",[h.action],Object.getOwnPropertyDescriptor(i.prototype,"setup"),i.prototype),(0,n._)(i.prototype,"tooltipFormatter",[h.action],Object.getOwnPropertyDescriptor(i.prototype,"tooltipFormatter"),i.prototype),i);(0,l.setComponentTemplate)(g,m)},4641:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>f})
var i,a,o,n,l=r(9266),s=r(3839),d=r(3574),h=r(7990),c=r.n(h),u=r(7219),p=r(5521),g=(0,l.createTemplateFactory)({id:"ezVSLXz9",block:'[[[11,0],[4,[38,0],[[30,0,["setup"]]],null],[12],[1,"\\n  "],[11,0],[17,1],[4,[38,1],null,[["width","height"],[[28,[37,2],[[30,2],"100%"],null],[28,[37,2],[[30,3],400],null]]]],[4,[38,3],[[30,0,["args"]]],[["tooltipFormatter"],[[30,0,["tooltipFormatter"]]]]],[12],[13],[1,"\\n\\n"],[41,[48,[30,4]],[[[1,"    "],[10,0],[14,"data-role","itemTooltip"],[15,5,[28,[37,6],[[52,[30,0,["tooltipItem"]],"","display: none"]],null]],[12],[1,"\\n      "],[18,4,[[30,0,["tooltipItem"]]]],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[48,[30,5]],[[[1,"    "],[10,0],[14,"data-role","axisTooltip"],[15,5,[28,[37,6],[[52,[30,0,["tooltipItems"]],"","display: none"]],null]],[12],[1,"\\n      "],[18,5,[[30,0,["tooltipItems"]],[30,0,["tooltipAxis"]]]],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[13]],["&attrs","@width","@height","&itemTooltip","&axisTooltip"],false,["did-insert","style","css-size","time-series-chart","if","has-block","html-safe","yield"]]',moduleName:"(unknown template module)",isStrictMode:!1})
const m=(t,e)=>({label:t.name,value:t.data,marker:t.marker,dataIndex:t.dataIndex,data:e[t.seriesIndex].data[t.dataIndex],series:{...e[t.seriesIndex],index:t.seriesIndex}})
let f=(i=class extends(c()){constructor(){super(...arguments),(0,s.a)(this,"axisTooltipElement",void 0),(0,s.a)(this,"itemTooltipElement",void 0),(0,s.b)(this,"tooltipItem",a,this),(0,s.b)(this,"tooltipItems",o,this),(0,s.b)(this,"tooltipAxis",n,this)}setup(t){this.axisTooltipElement=t.querySelector("[data-role=axisTooltip]"),this.itemTooltipElement=t.querySelector("[data-role=itemTooltip]")}tooltipFormatter(t,e){return t.length?(this.tooltipAxis=(t=>{let[e]=t
return{id:e.axisId,index:e.axisIndex,type:e.axisType,value:e.axisValue,valueLabel:e.axisValueLabel,dimension:e.axisDim}})(t),this.tooltipItems=t.map((t=>m(t,e))),this.axisTooltipElement):(this.tooltipItem=m(t,e),this.itemTooltipElement)}},a=(0,s._)(i.prototype,"tooltipItem",[p.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o=(0,s._)(i.prototype,"tooltipItems",[p.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n=(0,s._)(i.prototype,"tooltipAxis",[p.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,s._)(i.prototype,"setup",[u.action],Object.getOwnPropertyDescriptor(i.prototype,"setup"),i.prototype),(0,s._)(i.prototype,"tooltipFormatter",[u.action],Object.getOwnPropertyDescriptor(i.prototype,"tooltipFormatter"),i.prototype),i);(0,d.setComponentTemplate)(g,f)},9419:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>o})
const i=require("@ember/component/helper"),a=/^\d+$/
var o=(0,i.helper)((function(t){const e=null!=t[0]&&""!==t[0]?t[0]:t[1]
return"number"==typeof(r=e)||"string"==typeof r&&null!=r.match(a)||""===e?"0"!==e.toString()?`${e}px`:"0":e??"0"
var r}))},8194:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>w})
var i=r(3839),a=r(5797),o=r.n(a),n=r(3536),l=r.n(n),s=r(9341),d=r(5831),h=r.n(d),c=r(7048),u=r(7663),p=r(3293),g=r(2964),m=r(8605),f=r(6024),b=r(2227),y=r(9945),x=r(5943)
r(1997),r(1301),r(7414),r(2218),r(1443),r(511),r(8493),r(6550),r(7485)
const v={border:"0px solid #000",font:"bold 16px Montserrat,sans-serif",color:"#000",margin:0,padding:0}
class w extends(h()){get defaultStyles(){return{chart:{},chartTitle:{font:"bold 20px Montserrat,sans-serif",textAlign:"center",margin:24},chartLegend:{font:"normal 16px Montserrat,sans-serif",textAlign:"left",margin:24},cell:{padding:8,margin:8},cellTitle:{font:"bold 16px Montserrat,sans-serif",textAlign:"left",margin:8},cellTextOverlay:{font:"normal 16px Montserrat,sans-serif",textAlign:"center",verticalAlign:"middle",zIndex:100}}}constructor(){if(super(...arguments),(0,i.a)(this,"chart",void 0),(0,i.a)(this,"resizeObserver",void 0),(0,s.registerDestructor)(this,(()=>this.cleanup())),this.constructor==w)throw new Error("AbstractChartModifier is abstract and can't be instantiated.")}modify(t,e,r){let[i]=e
const a={...r,...i}
this.chart||(this.chart=this.createChart(t,a)),this.configureChart(a,this.chart,t)}configureChart(){throw new Error("`configureChart` needs to be overridden. No implementation exists.")}createChart(t,e){const r=c.S1(t,null,{renderer:"canvas"})
r.handle=function(t){r.off(t)
for(var e=arguments.length,i=new Array(e>1?e-1:0),a=1;a<e;a++)i[a-1]=arguments[a]
r.on(t,...i)}
let i=!0
return this.resizeObserver=new ResizeObserver((()=>{i||(r.resize(),this.configureChart(e,r,t)),i=!1})),this.resizeObserver.observe(t),r}buildLayout(t,e){const r={},i=this.createContext(t,e)
return i.layout=this.addChartBox(i,r),i.layout=this.addTitle(i,r),i.layout=this.addLegend(i,r),i.layout=this.addCellBoxes(i,r),i.layout=this.addCellTitles(i,r),i.layout=this.addCellPlots(i,r),i.layout=this.addCellTextOverlays(i,r),{context:i,config:r}}cleanup(){this.resizeObserver.disconnect(),this.chart.dispose()}createContext(t,e){const r={chartWidth:e.getWidth(),chartHeight:e.getHeight(),width:e.getWidth(),height:e.getHeight(),x:0,y:0},i=l()(Object.keys(this.defaultStyles),((e,r)=>e[r]={...v,...this.defaultStyles[r],...t[`${r}Style`]}),{})
return{layout:r,args:t,chart:e,styles:i,data:this.createContextData(t,e)}}createContextData(t){return{series:t.series??[{data:t.data}]}}addChartBox(t,e){const r=(0,y.default)(t.styles.chart,t.layout)
return(0,x.default)(e,this.generateBoxConfig({...r,...t.layout})),{...t.layout,...(0,p.default)(t.layout,r)}}addTitle(t,e){const{title:r}=t.args
if(!r)return t.layout
const i=(0,y.default)(t.styles.chartTitle,t.layout);(0,x.default)(e,[this.generateTitleConfig(r,t.layout,i)])
const a=(0,m.default)(i)
return{...t.layout,height:t.layout.height-a,y:t.layout.y+a}}addLegend(t,e){const{legend:r}=t.args
if(!r||"none"===r)return t.layout
const i=(0,y.default)(t.styles.chartLegend,t.layout);(0,x.default)(e,[this.generateLegendConfig(t.data.series,t.args,t.layout,i)])
const a=this.computeLegendMetrics(t,e,i),o={...t.layout}
return r.startsWith("top")||r.startsWith("bottom")?(o.height-=a.height,r.startsWith("top")&&(o.y+=a.height)):(o.width-=a.width,r.startsWith("left")&&(o.x+=a.width)),o}addCellBoxes(t,e){return(0,x.default)(e,(0,b.default)(t,t.data.series,((t,e)=>this.generateBoxConfig(e)))),t.layout}addCellTitles(t,e){const r=t.data.series
if(1===r.length&&!r[0].label&&!r[0].name)return t.layout
const i=(0,y.default)(t.styles.cellTitle,t.layout);(0,x.default)(e,(0,b.default)(t,t.data.series,((e,r)=>this.generateTitleConfig(e.label??e.name,{...t.layout,width:r.width,height:r.height,x:r.innerX,y:r.innerY},i))))
const a=(0,m.default)(i)+i.marginTop+i.marginBottom
return{...t.layout,height:t.layout.height-a,y:t.layout.y+a}}addCellPlots(t,e){let r=0
return(0,x.default)(e,(0,b.default)(t,t.data.series,((e,i)=>{const a=this.generatePlotConfig(e,i,t,r)
return a&&r++,a}))),t.layout}addCellTextOverlays(t,e){if(!this.generateTextOverlayConfig)return
const r=(0,y.default)(t.styles.cellTextOverlay,t.layout)
return(0,x.default)(e,(0,b.default)(t,t.data.series,((e,i)=>this.generateTextOverlayConfig(e,t.args,i,r)))),t.layout}getLegendLabels(t){return(0,u.default)(t,"name")}getLegendOrientation(t){const{legend:e,legendOrientation:r}=t
return["horizontal","vertical"].includes(r)?r:e.startsWith("top")||e.startsWith("bottom")?"horizontal":"vertical"}generateBoxConfig(t){return{"graphic.elements":[{type:"rect",top:t.y+t.marginTop,left:t.x+t.marginLeft,shape:{width:t.width-t.marginLeft-t.marginRight-t.borderLeftWidth-t.borderRightWidth,height:t.height-t.marginTop-t.marginBottom-t.borderTopWidth-t.borderBottomWidth},style:{fill:t.backgroundColor??"#fff",stroke:t.borderTopColor,lineWidth:t.borderTopWidth??0},silent:!0}]}}generateTitleConfig(t,e,r){const i={text:t,top:e.y+r.marginTop,backgroundColor:r.backgroundColor,borderWidth:r.borderTopWidth,borderColor:r.borderTopColor,borderRadius:r.borderRadius,padding:[r.paddingTop,r.paddingRight,r.paddingBottom,r.paddingLeft],textStyle:{color:r.color,fontStyle:r.fontStyle,fontWeight:r.fontWeight,fontFamily:r.fontFamily,fontSize:r.fontSize}}
switch(r.textAlign){case"center":o()(i,{left:e.x+e.width/2,textAlign:"center"})
break
case"right":o()(i,{right:e.chartWidth-(e.x+e.width)+r.marginRight})
break
default:o()(i,{left:e.x+r.marginLeft})}return{title:[i]}}generateLegendConfig(t,e,r,i){const{legend:a="topCenter"}=e,n="vertical"===this.getLegendOrientation(e),l={legend:{type:"scroll",data:this.getLegendLabels(t,e).map((t=>({name:t,icon:"circle",itemStyle:{color:e?.colorMap?.[t]}}))),itemGap:n?15:40,align:i.textAlign??"left",width:r.width,orient:n?"vertical":"horizontal",backgroundColor:i.backgroundColor,borderWidth:i.borderTopWidth,borderColor:i.borderTopColor,borderRadius:i.borderRadius,padding:[i.paddingTop,i.paddingRight,i.paddingBottom,i.paddingLeft],textStyle:{color:i.color,fontStyle:i.fontStyle,fontWeight:i.fontWeight,fontFamily:i.fontFamily,fontSize:i.fontSize}}}
let s,d
return d=a.startsWith("top")||a.endsWith("Top")?{top:r.y+i.marginTop+i.borderTopWidth/2}:a.startsWith("bottom")||a.endsWith("Bottom")?{bottom:r.chartHeight-r.height-r.y+1+i.marginBottom+i.borderBottomWidth/2}:{top:"middle"},s=a.startsWith("left")||a.endsWith("Left")?{left:r.x+i.marginLeft+i.borderLeftWidth/2}:a.startsWith("right")||a.endsWith("Right")?{right:r.chartWidth-r.width-r.x+1+i.marginRight+i.borderRightWidth/2}:{left:"center"},o()(l.legend,{...s,...d}),l}generateTextConfig(t,e,r){const i=(0,f.default)(t,r),a={type:"text",style:{font:`${r.fontStyle} ${r.fontWeight} ${r.fontSize}px ${r.fontFamily}`,fill:r.color,text:t},silent:!0,z:r.zIndex}
switch(r.textAlign){case"center":o()(a,{left:e.x+e.width/2-i.width/2})
break
case"right":o()(a,{right:e.chartWidth-(e.x+e.width)+r.marginRight})
break
default:o()(a,{left:e.x+r.marginLeft})}switch(r.verticalAlign){case"middle":o()(a,{top:e.y+e.height/2-i.height/2})
break
case"bottom":o()(a,{bottom:e.y+e.height-r.marginBottom})
break
default:o()(a,{top:e.y+r.marginTop})}return{"graphic.elements":[a]}}computeLegendMetrics(t,e,r){const{layout:i,data:a,args:o}=t,n=this.getLegendLabels(a.series,o),l=this.getLegendOrientation(o),s=e.legend.itemWidth??25,d=e.legend.itemGap??10,h={width:r.paddingLeft+r.paddingRight+r.borderLeftWidth/2+r.borderRightWidth/2+r.marginLeft+r.marginRight,height:r.paddingTop+r.paddingBottom+r.borderTopWidth/2+r.borderBottomWidth/2+r.marginTop+r.marginBottom}
if("horizontal"===l){const t=n.reduce(((t,e)=>{const i=(0,f.default)(e,r)
return t.width+=s+i.width,t.height=Math.max(t.height,i.height),t}),{width:0,height:0})
h.width=Math.min(i.width,h.width+t.width+d*(n.length-1)),h.height=h.height+t.height}else{const t=(0,g.default)(n,r,i.width)
h.width=h.width+s+t.width,h.height=h.height+t.height*n.length+d*(n.length-1)}return h}}},6577:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>p})
var i=r(6301),a=r(3665),o=r(3342),n=r(7663),l=r(875),s=r(2964),d=r(6024),h=r(9945),c=r(8194)
r(848),r(1247),r(3536),r(8782),r(1301),r(7414),r(2218),r(1443),r(511),r(5797),r(9341),r(5831),r(7048),r(2227),r(1997),r(5943),r(8493),r(6550),r(7485)
const u=(t,e,r)=>t?.[r]?{...e,itemStyle:{color:t[r]}}:e
class p extends c.default{get defaultStyles(){return{...super.defaultStyles,xAxis:{font:"normal 12px Montserrat,sans-serif",textAlign:"center",marginTop:8},yAxis:{font:"normal 12px Montserrat,sans-serif",textAlign:"right",margin:8}}}isGroupedVariant(t){return["groupedBar"].includes(t)}isStackedVariant(t){return["stackedArea","stackedBar"].includes(t)}isBarVariant(t){return["bar","groupedBar","stackedBar"].includes(t??"bar")}isAreaVariant(t){return["area","stackedArea"].includes(t)}configureChart(t,e){const r=t.series??[{data:t.data}],{categoryAxisScale:i,tooltipFormatter:a,onSelect:o}=t,{config:n,context:l}=this.buildLayout(t,e)
e.setOption({...n,tooltip:{formatter:a}}),e.handle("selectchanged",(t=>{const{fromAction:a,fromActionPayload:n,isFromClick:s}=t
if(!s)return
const d=n.seriesIndex,h=n.dataIndexInside,c=r[d],u="shared"===i?l.data.categories[h]:c.data[h]?c.data[h].name:null
u&&e.dispatchAction({type:a,name:u}),o&&o("select"===a?u:null)}))}createContextData(t,e){const r=super.createContextData(t,e),{categoryAxisScale:a,valueAxisScale:o}=t
return{...r,..."shared"===a&&{categories:(0,n.default)(r.series,"name")},..."shared"===o&&{maxValue:(0,i.default)(r.series,"max")},series:this.isStackedVariant(t.variant)?[{data:(0,l.default)(r.series,"name","value")}]:this.isGroupedVariant(t.variant)?[{data:r.series}]:r.series}}getLegendLabels(t,e){return this.isStackedVariant(e.variant)||this.isGroupedVariant(e.variant)?t[0].data.map((t=>t.label??t.name)):super.getLegendLabels(t,e)}generatePlotConfig(t,e,r,l){const{args:c,styles:p,data:g}=r,{noDataText:m,categoryAxisScale:f,valueAxisScale:b}=c
if((!t.data||0==t.data.length)&&m)return
const y="horizontal"===c.orientation,x=this.isBarVariant(c.variant),v=this.isAreaVariant(c.variant),w=this.isStackedVariant(c.variant),T=this.isGroupedVariant(c.variant)||w,W=T?t.data:[t],C="shared"===f?g.categories:(0,n.default)(W,"name"),A="shared"===b?g.maxValue:(0,i.default)(W,"max"),k=T?(0,o.default)(t.data,C,"name","value"):(0,a.default)(t.data,C,"name","value"),L=k.map((t=>null!=t?`${t}`:"")),O=(0,h.default)(p.yAxis,r.layout),S=y?C:L,_=(0,s.default)(S,O).width+O.marginLeft+O.marginRight,I=(0,d.default)(`${A}`,O).height/2,B=e.innerWidth-_-e.borderLeftWidth-e.borderRightWidth,z=(0,h.default)(p.xAxis,r.layout),R=y?0:1,F=B/(y?10:C.length),M=(0,s.default)(y?L:C,z,F).height+z.marginTop+z.marginBottom+R,j={xAxisIndex:l,yAxisIndex:l,type:x?"bar":"line",...v&&{areaStyle:{}},...!x&&{symbol:"circle",symbolSize:v?6:8},...!x&&{emphasis:{itemStyle:{shadowBlur:3,shadowColor:"#000000",shadowOffsetX:1,shadowOffsetY:1}}},selectedMode:"single"},P=[{gridIndex:l,type:"value",max:"shared"===b?g.maxValue:"dataMax",axisLabel:{margin:O.marginRight,...this.generateAxisLabelConfig(e,y?z:O)}}],E=[{gridIndex:l,type:"category",data:C,axisLabel:{interval:0,...!y&&{overflow:"break"},width:F,margin:z.marginTop,...this.generateAxisLabelConfig(e,y?O:z)}}]
return{grid:[{x:e.innerX+_-1,y:e.innerY+I,width:B,height:e.innerHeight-M-I}],yAxis:y?E:P,xAxis:y?P:E,series:T?t.data.map((t=>({...j,name:t.label,data:t.data.map((e=>({...e,...u(c.colorMap,e,t.label)}))),...w&&{stack:"total"}}))):[{...j,data:k,...x&&{colorBy:"data"}}]}}generateAxisLabelConfig(t,e){return{color:e.color,fontStyle:e.fontStyle,fontWeight:e.fontWeight,fontFamily:e.fontFamily,fontSize:e.fontSize,align:e.textAlign,verticalAlign:e.verticalAlign,backgroundColor:e.backgroundColor,borderWidth:e.borderTopWidth,borderColor:e.borderTopColor,borderType:e.borderTopType,borderRadius:e.borderRadius,padding:[e.paddingTop,e.paddingRight,e.paddingBottom,e.paddingLeft]}}generateTextOverlayConfig(t,e,r,i){const{noDataText:a}=e
return t.data&&0!=t.data.length||!a?void 0:this.generateTextConfig(a,{width:r.innerWidth,height:r.innerHeight,x:r.innerX,y:r.innerY},i)}}},9213:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>a})
var i=r(8194)
r(5797),r(3536),r(9341),r(5831),r(7048),r(2227),r(1997),r(9945),r(1301),r(7414),r(2218),r(1443),r(511),r(5943),r(8493),r(6550),r(7485)
class a extends i.default{configureChart(t,e){const r=t.series??[{data:t.data}],{tooltipFormatter:i,onSelect:a}=t,{config:o}=this.buildLayout(t,e)
e.setOption({...o,tooltip:{formatter:i}}),e.handle("selectchanged",(t=>{const{fromAction:i,fromActionPayload:o,isFromClick:n}=t
if(!n)return
const l=o.seriesIndex,s=o.dataIndexInside,d=r[l],h=d.data[s]?d.data[s].name:null
h&&e.dispatchAction({type:i,name:h}),a&&a("select"===i?h:null)}))}generatePlotConfig(t,e,r){const{variant:i,noDataText:a}=r.args
return t.data&&0!=t.data.length||!a?{series:[{type:"pie",..."donut"===i&&{radius:[.3*e.innerHeight/2,.7*e.innerHeight/2]},center:[e.innerX+e.innerWidth/2-.5,e.innerY+e.innerHeight/2-.5],selectedMode:"single",data:t.data}]}:void 0}generateTextOverlayConfig(t,e,r,i){const{noDataText:a}=e
return t.data&&0!=t.data.length||!a?void 0:this.generateTextConfig(a,{width:r.innerWidth,height:r.innerHeight,x:r.innerX,y:r.innerY},i)}}},9278:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>c})
var i,a,o=r(3839),n=r(8194),l=r(2067),s=r.n(l),d=r(3665),h=r(5521)
r(5797),r(3536),r(9341),r(5831),r(7048),r(2227),r(1997),r(9945),r(1301),r(7414),r(2218),r(1443),r(511),r(5943),r(8493),r(6550),r(7485)
let c=(i=class extends n.default{constructor(){super(...arguments),(0,o.b)(this,"drillPath",a,this)}configureChart(t,e){const{xAxisFormatter:r,yAxisFormatter:i,tooltipFormatter:a}=t,{data:o=[],variant:n}=t,{series:l,title:h}=this.drillPath.reduce(((t,e)=>{let{series:r}=t
return{series:r[e].series,title:r[e].label}}),{series:o,title:t.title}),c=function(t,e){const r=new Set
for(const i of t)for(const t of i.data)r.add(t.at)
return Array.from(r.values()).sort()}(l),u={top:100,bottom:80,left:80,right:20},p={height:e.getHeight()-u.top-u.bottom,width:e.getWidth()-u.left-u.right},g=["bar","stackedBar"].includes(n),m=["area","stackedArea"].includes(n),f=["stackedLine","stackedArea","stackedBar"].includes(n)
e.setOption({grid:u,title:{text:h,left:u.left+(this.drillPath.length?20:0),top:0},xAxis:{type:"category",data:c,axisLabel:{...r&&{formatter:r},color:"#000"},axisLine:{lineStyle:{color:"#dbdbdb"}},axisPointer:{show:!0,type:"line",z:0,label:{...r&&{formatter:t=>r(t.value)},margin:-p.height-30,color:"#000",backgroundColor:"#fff",borderColor:"#dbdbdb",borderWidth:1}}},yAxis:{type:"value",axisLabel:{color:"#000",...i&&{formatter:i}},axisLine:{show:!0,lineStyle:{color:"#dbdbdb"}}},legend:{type:"scroll",data:l.map((t=>({name:t.label,icon:"circle"}))),itemGap:40,align:"left",top:u.top-60,left:u.left,width:p.width},series:l.map((t=>({name:t.label,data:(0,d.default)(t.data,c,"at","value"),type:g?"bar":"line",...f&&{stack:"Total"},...m&&{areaStyle:{}},...!g&&{symbol:"circle",symbolSize:m?6:8},...!g&&{emphasis:{itemStyle:{shadowBlur:3,shadowColor:"#000000",shadowOffsetX:1,shadowOffsetY:1}}},triggerLineEvent:!0}))),tooltip:{trigger:"item",...a&&{formatter:t=>a(t,l)}},dataZoom:[{show:!0,start:0,end:100,xAxisIndex:[0,1]}],graphic:{elements:[{type:"rect",top:u.top,left:u.left,shape:{width:p.width,height:p.height},style:{fill:"#fff"},silent:!0},{type:"line",right:u.right-3,bottom:u.bottom-3,shape:{y2:p.height},style:{stroke:"#dbdbdb"},silent:!0},this.drillPath.length&&{type:"text",left:u.left,top:3,style:{fill:"#036E9B",text:"chevron_left",font:"22px Material Icons"},onclick:()=>this.drillPath.popObject()}]}},{notMerge:!0}),e.handle("legendselectchanged",(t=>{let{name:r,selected:i}=t
const a=Object.values(i),o=s()(a);(1===o.false&&!1===i[r]||o.false===a.length)&&e.dispatchAction({type:"legendInverseSelect"})})),e.handle("dblclick",(t=>{let{seriesIndex:e}=t
l[e].series&&this.drillPath.pushObject(e)}))}},a=(0,o._)(i.prototype,"drillPath",[h.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),i)},7139:(t,e,r)=>{"use strict"
function i(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
return t?t.reduce(((t,a)=>{const o=a[e],n=r?a[r]:a
return i?(t[o]=t[o]??[],t[o].push(n)):t[o]=n,t}),{}):{}}r.r(e),r.d(e,{default:()=>i})},6301:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>n})
var i=r(848),a=r.n(i),o=r(7663)
function n(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value"
return Math[e](...a()((0,o.default)(t,r)))}},3665:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>a})
var i=r(7139)
function a(t,e,r,a){const o=(0,i.default)(t,r,a)
return e.map((t=>o[t]))}},3342:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>l})
var i=r(1247),a=r.n(i),o=r(3536),n=r.n(o)
function l(t,e,r,i){const o=a()(t.map((t=>t.data)))
return Object.values(n()(o,((t,e)=>{t[e[r]]=(t[e[r]]??0)+e[i]}),{}))}},7663:(t,e,r)=>{"use strict"
function i(t,e){const r=new Set
for(const i of t)for(const t of i.data)r.add(t[e])
return Array.from(r.values())}r.r(e),r.d(e,{default:()=>i})},875:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>n})
var i=r(8782),a=r.n(i),o=r(7663)
const n=(t,e,r)=>(0,o.default)(t,e).map((i=>({label:i,data:t.map((t=>{const o=t.data.find((t=>t[e]===i))
return o?{[e]:t.label,[r]:o[r],...a()(t,"data","label")}:void 0}))})))},3293:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>i})
const i=(t,e)=>({...t,width:t.width-e.marginLeft-e.marginRight-e.borderLeftWidth-e.borderRightWidth-e.paddingLeft-e.paddingRight,height:t.height-e.marginTop-e.marginBottom-e.borderTopWidth-e.borderBottomWidth-e.paddingTop-e.paddingBottom,x:t.x+e.marginLeft+e.borderLeftWidth+e.paddingLeft,y:t.y+e.marginTop+e.borderTopWidth+e.paddingTop})},2964:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>a})
var i=r(6024)
const a=(t,e,r)=>t.reduce(((t,a)=>{const o=(0,i.default)(a,e)
if(r&&o.width>r){const t=Math.ceil(o.width/r)
o.height=o.height*t+2*(t-1)}return t.width=Math.max(t.width,o.width),t.height=Math.max(t.height,o.height),t}),{width:0,height:0})},8605:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>a})
var i=r(6024)
const a=t=>(0,i.default)("ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz",t).height+t.marginTop+t.marginBottom+t.borderTopWidth+t.borderBottomWidth+t.paddingTop+t.paddingBottom},6024:(t,e,r)=>{"use strict"
function i(t,e){const r=document.createElement("canvas")
r.setAttribute("height",1e3),r.setAttribute("width",400)
const i=r.getContext("2d")
i.font=`${e.fontWeight??"normal"} ${e.fontSize}px ${e.fontFamily}`
const a=i.measureText(t)
return{height:a.actualBoundingBoxAscent+a.actualBoundingBoxDescent,width:a.width}}r.r(e),r.d(e,{default:()=>i})},2227:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>n})
var i=r(1997),a=r.n(i),o=r(9945)
function n(t,e,r){const i=function(t,e){const r=function(t,e){const{maxColumns:r}=t.args,i=e.length,a=r?Math.min(i,r):i,o=Math.ceil(i/a)
return{width:t.layout.width,height:t.layout.height,rows:o,columns:a}}(t,e),i=function(t,e){let r={width:e.width/e.columns,height:e.height/e.rows}
const i={...r,...(0,o.default)(t.styles.cell,r)}
return r={width:r.width-i.marginLeft-i.marginRight-i.borderLeftWidth-i.borderRightWidth,height:r.height-i.marginTop-i.marginBottom-i.borderTopWidth-i.borderBottomWidth},Object.assign(i,a()((0,o.default)(t.styles.cell,r),((t,e)=>e.startsWith("padding")))),i.innerWidth=r.width-i.paddingLeft-i.paddingRight,i.innerHeight=r.height-i.paddingTop-i.paddingBottom,i}(t,r)
return{chart:r,cell:i}}(t,e)
return e.map(((a,o)=>{const n=o%i.chart.columns,l=Math.floor(o/i.chart.columns),s=t.layout.x+i.cell.width*n,d=t.layout.y+i.cell.height*l
return r(a,{...i.cell,row:l,column:n,index:o,x:s,y:d,innerX:s+i.cell.marginLeft+i.cell.borderLeftWidth+i.cell.paddingLeft,innerY:d+i.cell.marginTop+i.cell.borderTopWidth+i.cell.paddingTop},i.chart,e)}))}r(1301),r(7414),r(2218),r(1443),r(511),r(3536)},5943:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>a})
var i=r(8493)
function a(t,e){e&&(Array.isArray(e)?e.forEach((e=>a(t,e))):Object.keys(e).forEach((r=>(0,i.default)(t,r,e[r]))))}r(6550),r(7485)},8493:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>l})
var i=r(6550),a=r.n(i),o=r(7485),n=r.n(o)
function l(t,e,r){if(!r)return
const i=a()(t,e)
if(i)if(Array.isArray(r)&&Array.isArray(i))n()(t,e,[...i,...r])
else{if("object"!=typeof r||"object"!=typeof i)throw new Error(`The value at ${e} cannot be merged. It must be an object or array.`)
n()(t,e,Object.assign({},i,r))}else n()(t,e,r)}},7414:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>n})
var i=r(2218),a=r.n(i)
const o=["margin","padding","borderWidth","borderTopWidth","borderBottomWidth","borderLeftWidth","borderRightWidth","borderRadius","borderTopRadius","borderBottomRadius","borderLeftRadius","borderRightRadius"],n=t=>Object.keys(t).reduce(((e,r)=>e+`${a()(r)}: ${((t,e)=>"number"==typeof e&&o.find((e=>t.startsWith(e)))?`${e}px`:e)(r,t[r])}; `),"")},1443:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>l})
var i=r(511),a=r.n(i),o=r(3536),n=r.n(o)
function l(t){const e=document.createElement("div")
e.setAttribute("style",t)
const r=Object.keys(e.style).filter((t=>parseInt(t)==t)).map((t=>e.style[t])).filter((t=>e.style[t]))
return n()(r,((t,r)=>t[a()(r)]=e.style[r]),{})}},9945:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>d})
var i=r(1301),a=r.n(i),o=r(7414),n=r(1443)
r(2218),r(511),r(3536)
const l=/^\d+\.?\d*\px$/,s=/^\d+\.?\d*%?$/
function d(t,e){const r=(0,n.default)((0,o.default)(t))
return a()(r,((t,r)=>l.test(t)?parseFloat(t.slice(0,-2)):s.test(t)?function(t,e,r){return t=t.slice(0,-1)/100,e.endsWith("Top")||e.endsWith("Bottom")?t*(r?.height??1):t*(r?.width??1)}(t,r,e):t))}},8053:(t,e,r)=>{var i,a
t.exports=(i=_eai_d,a=_eai_r,window.emberAutoImportDynamic=function(t){return 1===arguments.length?a("_eai_dyn_"+t):a("_eai_dynt_"+t)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(t){return a("_eai_sync_"+t)(Array.prototype.slice.call(arguments,1))},i("ember-apache-echarts/_rollupPluginBabelHelpers-2eca8644",[],(function(){return r(3839)})),i("ember-apache-echarts/components/chart/bar",[],(function(){return r(9196)})),i("ember-apache-echarts/components/chart/pie",[],(function(){return r(720)})),i("ember-apache-echarts/components/chart/time-series",[],(function(){return r(4641)})),i("ember-apache-echarts/helpers/css-size",[],(function(){return r(9419)})),i("ember-apache-echarts/modifiers/abstract-chart",[],(function(){return r(8194)})),i("ember-apache-echarts/modifiers/bar-chart",[],(function(){return r(6577)})),i("ember-apache-echarts/modifiers/pie-chart",[],(function(){return r(9213)})),i("ember-apache-echarts/modifiers/time-series-chart",[],(function(){return r(9278)})),i("ember-apache-echarts/utils/create-lookup",[],(function(){return r(7139)})),i("ember-apache-echarts/utils/data/compute-statistic",[],(function(){return r(6301)})),i("ember-apache-echarts/utils/data/get-series-data",[],(function(){return r(3665)})),i("ember-apache-echarts/utils/data/get-series-totals",[],(function(){return r(3342)})),i("ember-apache-echarts/utils/data/get-unique-dataset-values",[],(function(){return r(7663)})),i("ember-apache-echarts/utils/data/rotate-data-series",[],(function(){return r(875)})),i("ember-apache-echarts/utils/layout/compute-inner-box",[],(function(){return r(3293)})),i("ember-apache-echarts/utils/layout/compute-max-text-metrics",[],(function(){return r(2964)})),i("ember-apache-echarts/utils/layout/compute-text-height",[],(function(){return r(8605)})),i("ember-apache-echarts/utils/layout/compute-text-metrics",[],(function(){return r(6024)})),i("ember-apache-echarts/utils/layout/layout-cells",[],(function(){return r(2227)})),i("ember-apache-echarts/utils/merge-at",[],(function(){return r(8493)})),i("ember-apache-echarts/utils/merge-at-paths",[],(function(){return r(5943)})),i("ember-apache-echarts/utils/style/format-css-style-value",[],(function(){return r(7414)})),i("ember-apache-echarts/utils/style/parse-css-style-value",[],(function(){return r(1443)})),void i("ember-apache-echarts/utils/style/resolve-style",[],(function(){return r(9945)})))},5596:function(t,e){window._eai_r=require,window._eai_d=define},3574:t=>{"use strict"
t.exports=require("@ember/component")},9341:t=>{"use strict"
t.exports=require("@ember/destroyable")},7219:t=>{"use strict"
t.exports=require("@ember/object")},9266:t=>{"use strict"
t.exports=require("@ember/template-factory")},7990:t=>{"use strict"
t.exports=require("@glimmer/component")},5521:t=>{"use strict"
t.exports=require("@glimmer/tracking")},5831:t=>{"use strict"
t.exports=require("ember-modifier")}},r={}
function i(t){var a=r[t]
if(void 0!==a)return a.exports
var o=r[t]={id:t,loaded:!1,exports:{}}
return e[t].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}i.m=e,t=[],i.O=(e,r,a,o)=>{if(!r){var n=1/0
for(h=0;h<t.length;h++){for(var[r,a,o]=t[h],l=!0,s=0;s<r.length;s++)(!1&o||n>=o)&&Object.keys(i.O).every((t=>i.O[t](r[s])))?r.splice(s--,1):(l=!1,o<n&&(n=o))
if(l){t.splice(h--,1)
var d=a()
void 0!==d&&(e=d)}}return e}o=o||0
for(var h=t.length;h>0&&t[h-1][2]>o;h--)t[h]=t[h-1]
t[h]=[r,a,o]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t
return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{var t={143:0}
i.O.j=e=>0===t[e]
var e=(e,r)=>{var a,o,[n,l,s]=r,d=0
if(n.some((e=>0!==t[e]))){for(a in l)i.o(l,a)&&(i.m[a]=l[a])
if(s)var h=s(i)}for(e&&e(r);d<n.length;d++)o=n[d],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0
return i.O(h)},r=globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]
r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),i.O(void 0,[281],(()=>i(5596)))
var a=i.O(void 0,[281],(()=>i(8053)))
a=i.O(a),__ember_auto_import__=a})()
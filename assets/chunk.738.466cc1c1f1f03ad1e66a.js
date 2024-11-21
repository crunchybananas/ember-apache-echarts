/*! For license information please see chunk.738.466cc1c1f1f03ad1e66a.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[738],{6861:(t,e,n)=>{n.d(e,{A:()=>l,W:()=>h})
var i=n(2294),r=n(2377),o=n(1130)
function a(t,e,n){return(e=function(t){var e=function(t){if("object"!=typeof t||!t)return t
var e=t[Symbol.toPrimitive]
if(void 0!==e){var n=e.call(t,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class s{constructor(t){a(this,"capabilities",(0,r.capabilities)("3.22")),this.owner=t}createModifier(t,e){return{instance:new t(this.owner,e),element:null}}installModifier(t,e,n){const i=function(t,e){const n=t
return n.element=e,n}(t,e)
i.instance.modify(e,n.positional,n.named)}updateModifier(t,e){t.instance.modify(t.element,e.positional,e.named)}destroyModifier({instance:t}){(0,o.destroy)(t)}}class l{constructor(t,e){(0,i.setOwner)(this,t)}modify(t,e,n){}}(0,r.setModifierManager)((t=>new s(t)),l)
const u=new class{constructor(){a(this,"capabilities",(0,r.capabilities)("3.22"))}createModifier(t){return{element:null,instance:t}}installModifier(t,e,n){const i=function(t,e){const n=t
return n.element=e,n}(t,e),{positional:r,named:o}=n,a=t.instance(e,r,o)
"function"==typeof a&&(i.teardown=a)}updateModifier(t,e){"function"==typeof t.teardown&&t.teardown()
const n=t.instance(t.element,e.positional,e.named)
"function"==typeof n&&(t.teardown=n)}destroyModifier(t){"function"==typeof t.teardown&&t.teardown()}getDebugName(t){return t.instance.toString()}getDebugInstance(t){return t}}
function h(t,e){return t.toString=()=>e?.name||t.name,(0,r.setModifierManager)((()=>u),t)}},5997:(t,e,n)=>{function i(t,e,n){return(e="symbol"==typeof(i=function(t){if("object"!=typeof t||!t)return t
var e=t[Symbol.toPrimitive]
if(void 0!==e){var n=e.call(t,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e))?i:String(i))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t
var i}function r(t,e,n,i){n&&Object.defineProperty(t,e,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(i):void 0})}function o(t,e,n,i,r){var o={}
return Object.keys(i).forEach((function(t){o[t]=i[t]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce((function(n,i){return i(t,e,n)||n}),o),r&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(r):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(t,e,o),o=null),o}n.d(e,{_:()=>o,a:()=>r,b:()=>i})},6446:(t,e,n)=>{n.r(e),n.d(e,{default:()=>c})
var i,r,o,a=n(5997),s=n(2735),l=n(336),u=n.n(l),h=n(4666)
let c=(i=(0,s.inject)("page-title"),r=class extends(u()){constructor(t){super(t),(0,a.a)(this,"tokens",o,this),(0,a.b)(this,"tokenId",(0,h.guidFor)(this)),this.tokens.push({id:this.tokenId})}compute(t,e){const n={...e,id:this.tokenId,title:t.join("")}
return this.tokens.push(n),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},o=(0,a._)(r.prototype,"tokens",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r)},6567:(t,e,n)=>{n.r(e),n.d(e,{default:()=>v})
var i,r,o,a,s,l=n(5997),u=n(1223),h=n(2735),c=n.n(h),d=n(9553),p=n(1603)
const f="undefined"!=typeof FastBoot,g="routeDidChange",y=["separator","prepend","replace"]
let v=(i=(0,h.inject)("router"),r=(0,h.inject)("-document"),o=class extends(c()){constructor(t){if(super(t),(0,l.a)(this,"router",a,this),(0,l.a)(this,"document",s,this),(0,l.b)(this,"tokens",[]),(0,l.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,l.b)(this,"scheduleTitleUpdate",(()=>{(0,u.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement(),function(t){return"resolveRegistration"in t}(t)){const n=t.resolveRegistration("config:environment")
"object"==typeof(e=n)&&null!==e&&"pageTitle"in e&&y.forEach((t=>{if(!(0,d.isEmpty)(n.pageTitle[t])){const e=n.pageTitle[t]
this._defaultConfig[t]=e}}))}var e
this.router.on(g,this.scheduleTitleUpdate)}applyTokenDefaults(t){const e=this._defaultConfig.separator,n=this._defaultConfig.prepend,i=this._defaultConfig.replace
t.previous??=null,t.next??=null,null==t.separator&&(t.separator=e),null==t.prepend&&null!=n&&(t.prepend=n),null==t.replace&&null!=i&&(t.replace=i)}inheritFromPrevious(t){const e=t.previous
e&&(null==t.separator&&(t.separator=e.separator),null==t.prepend&&(t.prepend=e.prepend))}push(t){const e=this._findTokenById(t.id)
if(e){const n=this.tokens.indexOf(e),i=[...this.tokens],r=e.previous
return t.previous=r,t.next=e.next,this.inheritFromPrevious(t),this.applyTokenDefaults(t),i.splice(n,1,t),void(this.tokens=i)}const n=this.tokens.slice(-1)[0]
n&&(t.previous=n??null,n.next=t,this.inheritFromPrevious(t)),this.applyTokenDefaults(t),this.tokens=[...this.tokens,t]}remove(t){const e=this._findTokenById(t)
if(!e)return
const{next:n,previous:i}=e
n&&(n.previous=i),i&&(i.next=n),e.previous=e.next=null
const r=[...this.tokens]
r.splice(r.indexOf(e),1),this.tokens=r}get visibleTokens(){const t=this.tokens
let e=t?t.length:0
const n=[]
for(;e--;){const i=t[e]
if(i){if(i.replace){n.unshift(i)
break}n.unshift(i)}}return n}get sortedTokens(){const t=this.visibleTokens
if(!t)return[]
let e=!0,n=[]
const i=[n],r=[]
return t.forEach((t=>{if(t.front)r.unshift(t)
else if(t.prepend){e&&(e=!1,n=[],i.push(n))
const r=n[0]
r&&((t={...t}).separator=r.separator),n.unshift(t)}else e||(e=!0,n=[],i.push(n)),n.push(t)})),r.concat(i.reduce(((t,e)=>t.concat(e)),[]))}toString(){const t=this.sortedTokens,e=[]
for(let n=0,i=t.length;n<i;n++){const r=t[n]
r&&r.title&&(e.push(r.title),n+1<i&&e.push(r.separator))}return e.join("")}willDestroy(){super.willDestroy(),this.router.off(g,this.scheduleTitleUpdate)}_updateTitle(){const t=this.toString()
f?this.updateFastbootTitle(t):this.document.title=t,this.titleDidUpdate(t)}_validateExistingTitleElement(){f||(0,p.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(t){return this.tokens.find((e=>e.id===t))}updateFastbootTitle(t){if(!f)return
const e=this.document.head,n=e.childNodes
for(let o=0;o<n.length;o++){const t=n[o]
t&&"title"===t.nodeName.toLowerCase()&&e.removeChild(t)}const i=this.document.createElement("title"),r=this.document.createTextNode(t)
i.appendChild(r),e.appendChild(i)}titleDidUpdate(t){}},a=(0,l._)(o.prototype,"router",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=(0,l._)(o.prototype,"document",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o)},4170:(t,e,n)=>{n.d(e,{A:()=>i.default})
var i=n(1463)},1463:(t,e,n)=>{n.r(e),n.d(e,{default:()=>x})
var i=n(6861)
class r{constructor(t,e,n){this.limit=t,this.func=e,this.store=n,this.size=0,this.misses=0,this.hits=0,this.store=n||new Map}get(t){let e=this.store.get(t)
return this.store.has(t)?(this.hits++,this.store.get(t)):(this.misses++,e=this.set(t,this.func(t)),e)}set(t,e){return this.limit>this.size&&(this.size++,this.store.set(t,e)),e}purge(){this.store.clear(),this.size=0,this.hits=0,this.misses=0}}const o=/[ _]/g,a=new r(1e3,(t=>{return(e=t,y.get(e)).replace(o,"-")
var e})),s=/(\-|\_|\.|\s)+(.)?/g,l=/(^|\/)([A-Z])/g,u=(new r(1e3,(t=>t.replace(s,((t,e,n)=>n?n.toUpperCase():"")).replace(l,(t=>t.toLowerCase())))),/^(\-|_)+(.)?/),h=/(.)(\-|\_|\.|\s)+(.)?/g,c=/(^|\/|\.)([a-z])/g,d=(new r(1e3,(t=>{const e=(t,e,n)=>n?`_${n.toUpperCase()}`:"",n=(t,e,n,i)=>e+(i?i.toUpperCase():""),i=t.split("/")
for(let r=0;r<i.length;r++)i[r]=i[r].replace(u,e).replace(h,n)
return i.join("/").replace(c,(t=>t.toUpperCase()))})),/([a-z\d])([A-Z]+)/g),p=/\-|\s+/g,f=(new r(1e3,(t=>t.replace(d,"$1_$2").replace(p,"_").toLowerCase())),/(^|\/)([a-z\u00C0-\u024F])/g),g=(new r(1e3,(t=>t.replace(f,(t=>t.toUpperCase())))),/([a-z\d])([A-Z])/g),y=new r(1e3,(t=>t.replace(g,"$1_$2").toLowerCase()))
var v=n(1603),m=n(9553)
function _(t){return"object"==typeof t&&Boolean(t)}class x extends i.A{constructor(...t){var e,n,i
super(...t),e=this,n="existingStyles",i=new Set,(n=function(t){var e=function(t){if("object"!=typeof t||!t)return t
var e=t[Symbol.toPrimitive]
if(void 0!==e){var n=e.call(t,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==typeof e?e:e+""}(n))in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}setStyles(t,e){const{existingStyles:n}=this,i=new Set(n)
n.clear(),e.forEach((([e,r])=>{(0,v.assert)(`Your given value for property '${e}' is ${r} (${(0,m.typeOf)(r)}). Accepted types are string and undefined. Please change accordingly.`,void 0===r||"string"===(0,m.typeOf)(r))
let o=""
r&&r.includes("!important")&&(o="important",r=r.replace("!important","")),t.style.setProperty(e,r,o),i.delete(e),n.add(e)})),i.forEach((e=>t.style.removeProperty(e)))}modify(t,e,n){this.setStyles(t,function(t,e){return[...t.filter(_),e].map((t=>Object.entries(t).map((([t,e])=>{return[(n=t,a.get(n)),e]
var n})))).flat()}(e,n))}}},4532:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a})
var i=n(336),r=n.n(i),o=n(4594)
class a extends(r()){compute(t){for(let e=0,n=t.length;e<n;e++)if(!1===(0,o.A)(t[e]))return t[e]
return t[t.length-1]}}},2895:(t,e,n)=>{function i(t,e){return t===e}n.r(e),n.d(e,{default:()=>i})},6310:(t,e,n)=>{function i(t,e,n){return n?.forceNumber&&("number"!=typeof t&&(t=Number(t)),"number"!=typeof e&&(e=Number(e))),t>e}n.r(e),n.d(e,{default:()=>i})},9135:(t,e,n)=>{function i(t,e,n){return n?.forceNumber&&("number"!=typeof t&&(t=Number(t)),"number"!=typeof e&&(e=Number(e))),t>=e}n.r(e),n.d(e,{default:()=>i})},8217:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r})
var i=n(1389)
function r(...t){return t.every(i.isArray)}},9161:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i.isEmpty})
var i=n(9553)},7244:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i.isEqual})
var i=n(9553)},1881:(t,e,n)=>{function i(t,e,n){return n?.forceNumber&&("number"!=typeof t&&(t=Number(t)),"number"!=typeof e&&(e=Number(e))),t<e}n.r(e),n.d(e,{default:()=>i})},2154:(t,e,n)=>{function i(t,e,n){return n?.forceNumber&&("number"!=typeof t&&(t=Number(t)),"number"!=typeof e&&(e=Number(e))),t<=e}n.r(e),n.d(e,{default:()=>i})},3027:(t,e,n)=>{function i(t,e){return t!==e}n.r(e),n.d(e,{default:()=>i})},4840:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r})
var i=n(4594)
function r(...t){return t.every((t=>!(0,i.A)(t)))}},3624:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a})
var i=n(4594),r=n(336),o=n.n(r)
class a extends(o()){compute(t){for(let e=0,n=t.length;e<n;e++)if(!0===(0,i.A)(t[e]))return t[e]
return t[t.length-1]}}},5940:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r})
var i=n(4594)
function r(t,e){return(0,i.A)(t)!==(0,i.A)(e)}},3327:(t,e,n)=>{n.d(e,{or:()=>i.default}),n(4532),n(8217),n(9553),n(4840)
var i=n(3624)
n(5940)},4594:(t,e,n)=>{n.d(e,{A:()=>r})
var i=n(1389)
function r(t){return"object"==typeof t&&t&&"isTruthy"in t&&"boolean"==typeof t.isTruthy?t.isTruthy:(0,i.isArray)(t)?0!==t.length:!!t}},4784:(t,e,n)=>{n.d(e,{C6:()=>r})
var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},i(t,e)}
function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null")
function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}Object.create,Object.create},9832:(t,e,n)=>{n.d(e,{g:()=>r,i:()=>a,n:()=>o})
const i=new WeakMap
function r(t,e,n,r){let o={configurable:!0,enumerable:!0,writable:!0,initializer:null}
r&&(o.initializer=r)
for(let i of n)o=i(t,e,o)||o
void 0===o.initializer?Object.defineProperty(t,e,o):function(t,e,n){let r=i.get(t)
r||(r=new Map,i.set(t,r)),r.set(e,n)}(t,e,o)}function o(t,e,n){let i={...Object.getOwnPropertyDescriptor(t,e)}
for(let r of n)i=r(t,e,i)||i
void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(t):void 0,i.initializer=void 0),Object.defineProperty(t,e,i)}function a(t,e){let n=function(t,e){var n
let r=t.prototype
for(;r;){let t=null==(n=i.get(r))?void 0:n.get(e)
if(t)return t
r=r.prototype}}(t.constructor,e)
n&&Object.defineProperty(t,e,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(t):void 0})}Symbol.toStringTag},6521:(t,e,n)=>{function i(t,e){return t.pointToProjected?t.pointToProjected(e):t.pointToData(e)}function r(t,e,n,r){var o=t.getZoom(),a=t.getCenter(),s=e.zoom,l=t.projectedToPoint?t.projectedToPoint(a):t.dataToPoint(a)
if(null!=e.dx&&null!=e.dy&&(l[0]-=e.dx,l[1]-=e.dy,t.setCenter(i(t,l),r)),null!=s){if(n){var u=n.min||0,h=n.max||1/0
s=Math.max(Math.min(o*s,h),u)/o}t.scaleX*=s,t.scaleY*=s
var c=(e.originX-t.x)*(s-1),d=(e.originY-t.y)*(s-1)
t.x-=c,t.y-=d,t.updateTransform(),t.setCenter(i(t,l),r),t.setZoom(s*o)}return{center:t.getCenter(),zoom:t.getZoom()}}n.d(e,{f:()=>r})},8283:(t,e,n)=>{n.d(e,{Jw:()=>o,LR:()=>u,LW:()=>l,Nz:()=>h,ap:()=>p,oi:()=>s,t5:()=>d})
var i=n(8301),r=(0,n(5225).$r)()
function o(t,e,n,r,o){var a
if(e&&e.ecModel){var s=e.ecModel.getUpdatePayload()
a=s&&s.animation}var l="update"===t
if(e&&e.isAnimationEnabled()){var u=void 0,h=void 0,c=void 0
return r?(u=(0,i.bZ)(r.duration,200),h=(0,i.bZ)(r.easing,"cubicOut"),c=0):(u=e.getShallow(l?"animationDurationUpdate":"animationDuration"),h=e.getShallow(l?"animationEasingUpdate":"animationEasing"),c=e.getShallow(l?"animationDelayUpdate":"animationDelay")),a&&(null!=a.duration&&(u=a.duration),null!=a.easing&&(h=a.easing),null!=a.delay&&(c=a.delay)),(0,i.Tn)(c)&&(c=c(n,o)),(0,i.Tn)(u)&&(u=u(n)),{duration:u||0,delay:c,easing:h}}return null}function a(t,e,n,r,a,s,l){var u,h=!1;(0,i.Tn)(a)?(l=s,s=a,a=null):(0,i.Gv)(a)&&(s=a.cb,l=a.during,h=a.isFrom,u=a.removeOpt,a=a.dataIndex)
var c="leave"===t
c||e.stopAnimation("leave")
var d=o(t,r,a,c?u||{}:null,r&&r.getAnimationDelayParams?r.getAnimationDelayParams(e,a):null)
if(d&&d.duration>0){var p={duration:d.duration,delay:d.delay||0,easing:d.easing,done:s,force:!!s||!!l,setToFinal:!c,scope:t,during:l}
h?e.animateFrom(n,p):e.animateTo(n,p)}else e.stopAnimation(),!h&&e.attr(n),l&&l(1),s&&s()}function s(t,e,n,i,r,o){a("update",t,e,n,i,r,o)}function l(t,e,n,i,r,o){a("enter",t,e,n,i,r,o)}function u(t){if(!t.__zr)return!0
for(var e=0;e<t.animators.length;e++)if("leave"===t.animators[e].scope)return!0
return!1}function h(t,e,n,i,r,o){u(t)||a("leave",t,e,n,i,r,o)}function c(t,e,n,i){t.removeTextContent(),t.removeTextGuideLine(),h(t,{style:{opacity:0}},e,n,i)}function d(t,e,n){function i(){t.parent&&t.parent.remove(t)}t.isGroup?t.traverse((function(t){t.isGroup||c(t,e,n,i)})):c(t,e,n,i)}function p(t){r(t).oldStyle=t.style}},8705:(t,e,n)=>{n.d(e,{a:()=>Q})
var i=n(8301),r=n(8907),o=n(5784),a=n(4784),s=n(3397),l=n(309),u=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n}return(0,a.C6)(e,t),e.prototype.getInitialData=function(t,e){return(0,l.A)(null,this,{useEncodeDefaulter:!0})},e.prototype.getMarkerPosition=function(t,e,n){var r=this.coordinateSystem
if(r&&r.clampData){var o=r.clampData(t),a=r.dataToPoint(o)
if(n)(0,i.__)(r.getAxes(),(function(t,n){if("category"===t.type&&null!=e){var i=t.getTicksCoords(),r=t.getTickModel().get("alignWithLabel"),s=o[n],l="x1"===e[n]||"y1"===e[n]
if(l&&!r&&(s+=1),i.length<2)return
if(2===i.length)return void(a[n]=t.toGlobalCoord(t.getExtent()[l?1:0]))
for(var u=void 0,h=void 0,c=1,d=0;d<i.length;d++){var p=i[d].coord,f=d===i.length-1?i[d-1].tickValue+c:i[d].tickValue
if(f===s){h=p
break}if(f<s)u=p
else if(null!=u&&f>s){h=(p+u)/2
break}1===d&&(c=f-i[0].tickValue)}null==h&&(u?u&&(h=i[i.length-1].coord):h=i[0].coord),a[n]=t.toGlobalCoord(h)}}))
else{var s=this.getData(),l=s.getLayout("offset"),u=s.getLayout("size"),h=r.getBaseAxis().isHorizontal()?0:1
a[h]+=l+u/2}return a}return[NaN,NaN]},e.type="series.__base_bar__",e.defaultOption={z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod"},e}(s.A)
s.A.registerClass(u)
const h=u
var c=n(5019)
const d=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n}return(0,a.C6)(e,t),e.prototype.getInitialData=function(){return(0,l.A)(null,this,{useEncodeDefaulter:!0,createInvertedIndices:!!this.get("realtimeSort",!0)||null})},e.prototype.getProgressive=function(){return!!this.get("large")&&this.get("progressive")},e.prototype.getProgressiveThreshold=function(){var t=this.get("progressiveThreshold"),e=this.get("largeThreshold")
return e>t&&(t=e),t},e.prototype.brushSelector=function(t,e,n){return n.rect(e.getItemLayout(t))},e.type="series.bar",e.dependencies=["grid","polar"],e.defaultOption=(0,c.G_)(h.defaultOption,{clip:!0,roundCap:!1,showBackground:!1,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)",borderColor:null,borderWidth:0,borderType:"solid",borderRadius:0,shadowBlur:0,shadowColor:null,shadowOffsetX:0,shadowOffsetY:0,opacity:1},select:{itemStyle:{borderColor:"#212121"}},realtimeSort:!1}),e}(h)
var p=n(4427),f=n(7941),g=n(3023),y=n(8283),v=n(4130),m=n(1770),_=n(1323),x=n(200),b=n(923),w=n(7322),A=n(6702),S=function(){this.cx=0,this.cy=0,this.r0=0,this.r=0,this.startAngle=0,this.endAngle=2*Math.PI,this.clockwise=!0}
const M=function(t){function e(e){var n=t.call(this,e)||this
return n.type="sausage",n}return(0,a.C6)(e,t),e.prototype.getDefaultShape=function(){return new S},e.prototype.buildPath=function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r0||0,0),o=Math.max(e.r,0),a=.5*(o-r),s=r+a,l=e.startAngle,u=e.endAngle,h=e.clockwise,c=2*Math.PI,d=h?u-l<c:l-u<c
d||(l=u-(h?c:-c))
var p=Math.cos(l),f=Math.sin(l),g=Math.cos(u),y=Math.sin(u)
d?(t.moveTo(p*r+n,f*r+i),t.arc(p*s+n,f*s+i,a,-Math.PI+l,l,!h)):t.moveTo(p*o+n,f*o+i),t.arc(n,i,o,l,u,!h),t.arc(g*s+n,y*s+i,a,u-2*Math.PI,u-Math.PI,!h),0!==r&&t.arc(n,i,r,u,l,h)},e}(p.Ay)
var T=n(1993),I=n(6534),C=n(4723),D=n(7627)
function k(t,e,n){return e*Math.sin(t)*(n?-1:1)}function L(t,e,n){return e*Math.cos(t)*(n?1:-1)}var P=n(799),O=Math.max,N=Math.min,R=function(t){function e(){var n=t.call(this)||this
return n.type=e.type,n._isFirstFrame=!0,n}return(0,a.C6)(e,t),e.prototype.render=function(t,e,n,i){this._model=t,this._removeOnRenderedListener(n),this._updateDrawMode(t)
var r=t.get("coordinateSystem");("cartesian2d"===r||"polar"===r)&&(this._progressiveEls=null,this._isLargeDraw?this._renderLarge(t,e,n):this._renderNormal(t,e,n,i))},e.prototype.incrementalPrepareRender=function(t){this._clear(),this._updateDrawMode(t),this._updateLargeClip(t)},e.prototype.incrementalRender=function(t,e){this._progressiveEls=[],this._incrementalRenderLarge(t,e)},e.prototype.eachRendered=function(t){(0,g.traverseElements)(this._progressiveEls||this.group,t)},e.prototype._updateDrawMode=function(t){var e=t.pipelineContext.large
null!=this._isLargeDraw&&e===this._isLargeDraw||(this._isLargeDraw=e,this._clear())},e.prototype._renderNormal=function(t,e,n,i){var r,o=this.group,a=t.getData(),s=this._data,l=t.coordinateSystem,u=l.getBaseAxis()
"cartesian2d"===l.type?r=u.isHorizontal():"polar"===l.type&&(r="angle"===u.dim)
var h=t.isAnimationEnabled()?t:null,c=function(t,e){var n=t.get("realtimeSort",!0),i=e.getBaseAxis()
if(n&&"category"===i.type&&"cartesian2d"===e.type)return{baseAxis:i,otherAxis:e.getOtherAxis(i)}}(t,l)
c&&this._enableRealtimeSort(c,a,n)
var d=t.get("clip",!0)||c,p=function(t,e){var n=t.getArea&&t.getArea()
if((0,I.g)(t,"cartesian2d")){var i=t.getBaseAxis()
if("category"!==i.type||!i.onBand){var r=e.getLayout("bandWidth")
i.isHorizontal()?(n.x-=r,n.width+=2*r):(n.y-=r,n.height+=2*r)}}return n}(l,a)
o.removeClipPath()
var g=t.get("roundCap",!0),_=t.get("showBackground",!0),x=t.getModel("backgroundStyle"),w=x.get("borderRadius")||0,A=[],S=this._backgroundEls,M=i&&i.isInitSort,T=i&&"changeAxisOrder"===i.type
function C(t){var e=G[l.type](a,t),n=function(t,e,n){return new("polar"===t.type?m.A:v.A)({shape:q(e,n,t),silent:!0,z2:0})}(l,r,e)
return n.useStyle(x.getItemStyle()),"cartesian2d"===l.type?n.setShape("r",w):n.setShape("cornerRadius",w),A[t]=n,n}a.diff(s).add((function(e){var n=a.getItemModel(e),i=G[l.type](a,e,n)
if(_&&C(e),a.hasValue(e)&&H[l.type](i)){var s=!1
d&&(s=E[l.type](p,i))
var f=z[l.type](t,a,e,i,r,h,u.model,!1,g)
c&&(f.forceLabelAnimation=!0),X(f,a,e,n,i,t,r,"polar"===l.type),M?f.attr({shape:i}):c?B(c,h,f,i,e,r,!1,!1):(0,y.LW)(f,{shape:i},t,e),a.setItemGraphicEl(e,f),o.add(f),f.ignore=s}})).update((function(e,n){var i=a.getItemModel(e),f=G[l.type](a,e,i)
if(_){var v=void 0
0===S.length?v=C(n):((v=S[n]).useStyle(x.getItemStyle()),"cartesian2d"===l.type?v.setShape("r",w):v.setShape("cornerRadius",w),A[e]=v)
var m=G[l.type](a,e),I=q(r,m,l);(0,y.oi)(v,{shape:I},h,e)}var D=s.getItemGraphicEl(n)
if(a.hasValue(e)&&H[l.type](f)){var k=!1
if(d&&(k=E[l.type](p,f))&&o.remove(D),D?(0,y.ap)(D):D=z[l.type](t,a,e,f,r,h,u.model,!!D,g),c&&(D.forceLabelAnimation=!0),T){var L=D.getTextContent()
if(L){var P=(0,b.Lu)(L)
null!=P.prevValue&&(P.prevValue=P.value)}}else X(D,a,e,i,f,t,r,"polar"===l.type)
M?D.attr({shape:f}):c?B(c,h,D,f,e,r,!0,T):(0,y.oi)(D,{shape:f},t,e,null),a.setItemGraphicEl(e,D),D.ignore=k,o.add(D)}else o.remove(D)})).remove((function(e){var n=s.getItemGraphicEl(e)
n&&(0,y.t5)(n,t,e)})).execute()
var D=this._backgroundGroup||(this._backgroundGroup=new f.A)
D.removeAll()
for(var k=0;k<A.length;++k)D.add(A[k])
o.add(D),this._backgroundEls=A,this._data=a},e.prototype._renderLarge=function(t,e,n){this._clear(),Z(t,this.group),this._updateLargeClip(t)},e.prototype._incrementalRenderLarge=function(t,e){this._removeBackground(),Z(e,this.group,this._progressiveEls,!0)},e.prototype._updateLargeClip=function(t){var e=t.get("clip",!0)&&(0,A.Ip)(t.coordinateSystem,!1,t),n=this.group
e?n.setClipPath(e):n.removeClipPath()},e.prototype._enableRealtimeSort=function(t,e,n){var i=this
if(e.count()){var r=t.baseAxis
if(this._isFirstFrame)this._dispatchInitSort(e,t,n),this._isFirstFrame=!1
else{var o=function(t){var n=e.getItemGraphicEl(t),i=n&&n.shape
return i&&Math.abs(r.isHorizontal()?i.height:i.width)||0}
this._onRendered=function(){i._updateSortWithinSameData(e,o,r,n)},n.getZr().on("rendered",this._onRendered)}}},e.prototype._dataSort=function(t,e,n){var r=[]
return t.each(t.mapDimension(e.dim),(function(t,e){var i=n(e)
i=null==i?NaN:i,r.push({dataIndex:e,mappedValue:i,ordinalNumber:t})})),r.sort((function(t,e){return e.mappedValue-t.mappedValue})),{ordinalNumbers:(0,i.Tj)(r,(function(t){return t.ordinalNumber}))}},e.prototype._isOrderChangedWithinSameData=function(t,e,n){for(var i=n.scale,r=t.mapDimension(n.dim),o=Number.MAX_VALUE,a=0,s=i.getOrdinalMeta().categories.length;a<s;++a){var l=t.rawIndexOf(r,i.getRawOrdinalNumber(a)),u=l<0?Number.MIN_VALUE:e(t.indexOfRawIndex(l))
if(u>o)return!0
o=u}return!1},e.prototype._isOrderDifferentInView=function(t,e){for(var n=e.scale,i=n.getExtent(),r=Math.max(0,i[0]),o=Math.min(i[1],n.getOrdinalMeta().categories.length-1);r<=o;++r)if(t.ordinalNumbers[r]!==n.getRawOrdinalNumber(r))return!0},e.prototype._updateSortWithinSameData=function(t,e,n,i){if(this._isOrderChangedWithinSameData(t,e,n)){var r=this._dataSort(t,n,e)
this._isOrderDifferentInView(r,n)&&(this._removeOnRenderedListener(i),i.dispatchAction({type:"changeAxisOrder",componentType:n.dim+"Axis",axisId:n.index,sortInfo:r}))}},e.prototype._dispatchInitSort=function(t,e,n){var i=e.baseAxis,r=this._dataSort(t,i,(function(n){return t.get(t.mapDimension(e.otherAxis.dim),n)}))
n.dispatchAction({type:"changeAxisOrder",componentType:i.dim+"Axis",isInitSort:!0,axisId:i.index,sortInfo:r})},e.prototype.remove=function(t,e){this._clear(this._model),this._removeOnRenderedListener(e)},e.prototype.dispose=function(t,e){this._removeOnRenderedListener(e)},e.prototype._removeOnRenderedListener=function(t){this._onRendered&&(t.getZr().off("rendered",this._onRendered),this._onRendered=null)},e.prototype._clear=function(t){var e=this.group,n=this._data
t&&t.isAnimationEnabled()&&n&&!this._isLargeDraw?(this._removeBackground(),this._backgroundEls=[],n.eachItemGraphicEl((function(e){(0,y.t5)(e,t,(0,_.z)(e).dataIndex)}))):e.removeAll(),this._data=null,this._isFirstFrame=!0},e.prototype._removeBackground=function(){this.group.remove(this._backgroundGroup),this._backgroundGroup=null},e.type="bar",e}(T.A),E={cartesian2d:function(t,e){var n=e.width<0?-1:1,i=e.height<0?-1:1
n<0&&(e.x+=e.width,e.width=-e.width),i<0&&(e.y+=e.height,e.height=-e.height)
var r=t.x+t.width,o=t.y+t.height,a=O(e.x,t.x),s=N(e.x+e.width,r),l=O(e.y,t.y),u=N(e.y+e.height,o),h=s<a,c=u<l
return e.x=h&&a>r?s:a,e.y=c&&l>o?u:l,e.width=h?0:s-a,e.height=c?0:u-l,n<0&&(e.x+=e.width,e.width=-e.width),i<0&&(e.y+=e.height,e.height=-e.height),h||c},polar:function(t,e){var n=e.r0<=e.r?1:-1
if(n<0){var i=e.r
e.r=e.r0,e.r0=i}var r=N(e.r,t.r),o=O(e.r0,t.r0)
e.r=r,e.r0=o
var a=r-o<0
return n<0&&(i=e.r,e.r=e.r0,e.r0=i),a}},z={cartesian2d:function(t,e,n,r,o,a,s,l,u){var h=new v.A({shape:(0,i.X$)({},r),z2:1})
return h.__dataIndex=n,h.name="item",a&&(h.shape[o?"height":"width"]=0),h},polar:function(t,e,n,i,r,o,a,s,l){var u=!r&&l?M:m.A,h=new u({shape:i,z2:1})
h.name="item"
var c,d,p=j(r)
if(h.calculateTextPosition=(c=p,d=({isRoundCap:u===M}||{}).isRoundCap,function(t,e,n){var i=e.position
if(!i||i instanceof Array)return(0,D.X4)(t,e,n)
var r=c(i),o=null!=e.distance?e.distance:5,a=this.shape,s=a.cx,l=a.cy,u=a.r,h=a.r0,p=(u+h)/2,f=a.startAngle,g=a.endAngle,y=(f+g)/2,v=d?Math.abs(u-h)/2:0,m=Math.cos,_=Math.sin,x=s+u*m(f),b=l+u*_(f),w="left",A="top"
switch(r){case"startArc":x=s+(h-o)*m(y),b=l+(h-o)*_(y),w="center",A="top"
break
case"insideStartArc":x=s+(h+o)*m(y),b=l+(h+o)*_(y),w="center",A="bottom"
break
case"startAngle":x=s+p*m(f)+k(f,o+v,!1),b=l+p*_(f)+L(f,o+v,!1),w="right",A="middle"
break
case"insideStartAngle":x=s+p*m(f)+k(f,-o+v,!1),b=l+p*_(f)+L(f,-o+v,!1),w="left",A="middle"
break
case"middle":x=s+p*m(y),b=l+p*_(y),w="center",A="middle"
break
case"endArc":x=s+(u+o)*m(y),b=l+(u+o)*_(y),w="center",A="bottom"
break
case"insideEndArc":x=s+(u-o)*m(y),b=l+(u-o)*_(y),w="center",A="top"
break
case"endAngle":x=s+p*m(g)+k(g,o+v,!0),b=l+p*_(g)+L(g,o+v,!0),w="left",A="middle"
break
case"insideEndAngle":x=s+p*m(g)+k(g,-o+v,!0),b=l+p*_(g)+L(g,-o+v,!0),w="right",A="middle"
break
default:return(0,D.X4)(t,e,n)}return(t=t||{}).x=x,t.y=b,t.align=w,t.verticalAlign=A,t}),o){var f=r?"r":"endAngle",g={}
h.shape[f]=r?i.r0:i.startAngle,g[f]=i[f],(s?y.oi:y.LW)(h,{shape:g},o)}return h}}
function B(t,e,n,i,r,o,a,s){var l,u
o?(u={x:i.x,width:i.width},l={y:i.y,height:i.height}):(u={y:i.y,height:i.height},l={x:i.x,width:i.width}),s||(a?y.oi:y.LW)(n,{shape:l},e,r,null)
var h=e?t.baseAxis.model:null;(a?y.oi:y.LW)(n,{shape:u},h,r)}function V(t,e){for(var n=0;n<e.length;n++)if(!isFinite(t[e[n]]))return!0
return!1}var F=["x","y","width","height"],W=["cx","cy","r","startAngle","endAngle"],H={cartesian2d:function(t){return!V(t,F)},polar:function(t){return!V(t,W)}},G={cartesian2d:function(t,e,n){var i=t.getItemLayout(e),r=n?function(t,e){var n=t.get(["itemStyle","borderColor"])
if(!n||"none"===n)return 0
var i=t.get(["itemStyle","borderWidth"])||0,r=isNaN(e.width)?Number.MAX_VALUE:Math.abs(e.width),o=isNaN(e.height)?Number.MAX_VALUE:Math.abs(e.height)
return Math.min(i,r,o)}(n,i):0,o=i.width>0?1:-1,a=i.height>0?1:-1
return{x:i.x+o*r/2,y:i.y+a*r/2,width:i.width-o*r,height:i.height-a*r}},polar:function(t,e,n){var i=t.getItemLayout(e)
return{cx:i.cx,cy:i.cy,r0:i.r0,r:i.r,startAngle:i.startAngle,endAngle:i.endAngle,clockwise:i.clockwise}}}
function j(t){return function(t){var e=t?"Arc":"Angle"
return function(t){switch(t){case"start":case"insideStart":case"end":case"insideEnd":return t+e
default:return t}}}(t)}function X(t,e,n,r,o,a,s,l){var u=e.getItemVisual(n,"style")
if(l){if(!a.get("roundCap")){var h=t.shape,c=(0,P.i)(r.getModel("itemStyle"),h,!0);(0,i.X$)(h,c),t.setShape(h)}}else{var d=r.get(["itemStyle","borderRadius"])||0
t.setShape("r",d)}t.useStyle(u)
var p=r.getShallow("cursor")
p&&t.attr("cursor",p)
var f=l?s?o.r>=o.r0?"endArc":"startArc":o.endAngle>=o.startAngle?"endAngle":"startAngle":s?o.height>=0?"bottom":"top":o.width>=0?"right":"left",g=(0,b.lx)(r);(0,b.qM)(t,g,{labelFetcher:a,labelDataIndex:n,defaultText:(0,C.i)(a.getData(),n),inheritColor:u.fill,defaultOpacity:u.opacity,defaultOutsidePosition:f})
var y=t.getTextContent()
if(l&&y){var v=r.get(["label","position"])
t.textConfig.inside="middle"===v||null,function(t,e,n,r){if((0,i.Et)(r))t.setTextConfig({rotation:r})
else if((0,i.cy)(e))t.setTextConfig({rotation:0})
else{var o,a=t.shape,s=a.clockwise?a.startAngle:a.endAngle,l=a.clockwise?a.endAngle:a.startAngle,u=(s+l)/2,h=n(e)
switch(h){case"startArc":case"insideStartArc":case"middle":case"insideEndArc":case"endArc":o=u
break
case"startAngle":case"insideStartAngle":o=s
break
case"endAngle":case"insideEndAngle":o=l
break
default:return void t.setTextConfig({rotation:0})}var c=1.5*Math.PI-o
"middle"===h&&c>Math.PI/2&&c<1.5*Math.PI&&(c-=Math.PI),t.setTextConfig({rotation:c})}}(t,"outside"===v?f:v,j(s),r.get(["label","rotate"]))}(0,b.Oh)(y,g,a.getRawValue(n),(function(t){return(0,C.T)(e,t)}))
var m=r.getModel(["emphasis"]);(0,x.Lm)(t,m.get("focus"),m.get("blurScope"),m.get("disabled")),(0,x.Mx)(t,r),function(t){return null!=t.startAngle&&null!=t.endAngle&&t.startAngle===t.endAngle}(o)&&(t.style.fill="none",t.style.stroke="none",(0,i.__)(t.states,(function(t){t.style&&(t.style.fill=t.style.stroke="none")})))}var Y=function(){},U=function(t){function e(e){var n=t.call(this,e)||this
return n.type="largeBar",n}return(0,a.C6)(e,t),e.prototype.getDefaultShape=function(){return new Y},e.prototype.buildPath=function(t,e){for(var n=e.points,i=this.baseDimIdx,r=1-this.baseDimIdx,o=[],a=[],s=this.barWidth,l=0;l<n.length;l+=3)a[i]=s,a[r]=n[l+2],o[i]=n[l+i],o[r]=n[l+r],t.rect(o[0],o[1],a[0],a[1])},e}(p.Ay)
function Z(t,e,n,i){var r=t.getData(),o=r.getLayout("valueAxisHorizontal")?1:0,a=r.getLayout("largeDataIndices"),s=r.getLayout("size"),l=t.getModel("backgroundStyle"),u=r.getLayout("largeBackgroundPoints")
if(u){var h=new U({shape:{points:u},incremental:!!i,silent:!0,z2:0})
h.baseDimIdx=o,h.largeDataIndices=a,h.barWidth=s,h.useStyle(l.getItemStyle()),e.add(h),n&&n.push(h)}var c=new U({shape:{points:r.getLayout("largePoints")},incremental:!!i,ignoreCoarsePointer:!0,z2:1})
c.baseDimIdx=o,c.largeDataIndices=a,c.barWidth=s,e.add(c),c.useStyle(r.getVisual("style")),(0,_.z)(c).seriesIndex=t.seriesIndex,t.get("silent")||(c.on("mousedown",$),c.on("mousemove",$)),n&&n.push(c)}var $=(0,w.nF)((function(t){var e=function(t,e,n){for(var i=t.baseDimIdx,r=1-i,o=t.shape.points,a=t.largeDataIndices,s=[],l=[],u=t.barWidth,h=0,c=o.length/3;h<c;h++){var d=3*h
if(l[i]=u,l[r]=o[d+2],s[i]=o[d+i],s[r]=o[d+r],l[r]<0&&(s[r]+=l[r],l[r]=-l[r]),e>=s[0]&&e<=s[0]+l[0]&&n>=s[1]&&n<=s[1]+l[1])return a[h]}return-1}(this,t.offsetX,t.offsetY);(0,_.z)(this).dataIndex=e>=0?e:null}),30,!1)
function q(t,e,n){if((0,I.g)(n,"cartesian2d")){var i=e,r=n.getArea()
return{x:t?i.x:r.x,y:t?r.y:i.y,width:t?i.width:r.width,height:t?r.height:i.height}}var o=e
return{cx:(r=n.getArea()).cx,cy:r.cy,r0:t?r.r0:o.r0,r:t?r.r:o.r,startAngle:t?o.startAngle:0,endAngle:t?o.endAngle:2*Math.PI}}const K=R
function Q(t){t.registerChartView(K),t.registerSeriesModel(d),t.registerLayout(t.PRIORITY.VISUAL.LAYOUT,i.cF(r.Zp,"bar")),t.registerLayout(t.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT,(0,r.KF)("bar")),t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC,(0,o.A)("bar")),t.registerAction({type:"changeAxisOrder",event:"changeAxisOrder",update:"update"},(function(t,e){var n=t.componentType||"series"
e.eachComponent({mainType:n,query:t},(function(e){t.sortInfo&&e.axis.setCategorySortInfo(t.sortInfo)}))}))}},9417:(t,e,n)=>{n.d(e,{a:()=>Zt})
var i=n(8301)
function r(t){var e=t.findComponents({mainType:"legend"})
e&&e.length&&t.eachSeriesByType("graph",(function(t){var n=t.getCategoriesData(),r=t.getGraph().data,o=n.mapArray(n.getName)
r.filterSelf((function(t){var n=r.getItemModel(t).getShallow("category")
if(null!=n){(0,i.Et)(n)&&(n=o[n])
for(var a=0;a<e.length;a++)if(!e[a].isSelected(n))return!1}return!0}))}))}function o(t){var e={}
t.eachSeriesByType("graph",(function(t){var n=t.getCategoriesData(),r=t.getData(),o={}
n.each((function(i){var r=n.getName(i)
o["ec-"+r]=i
var a=n.getItemModel(i),s=a.getModel("itemStyle").getItemStyle()
s.fill||(s.fill=t.getColorFromPalette(r,e)),n.setItemVisual(i,"style",s)
for(var l=["symbol","symbolSize","symbolKeepAspect"],u=0;u<l.length;u++){var h=a.getShallow(l[u],!0)
null!=h&&n.setItemVisual(i,l[u],h)}})),n.count()&&r.each((function(t){var e=r.getItemModel(t).getShallow("category")
if(null!=e){(0,i.Kg)(e)&&(e=o["ec-"+e])
var a=n.getItemVisual(e,"style"),s=r.ensureUniqueItemVisual(t,"style");(0,i.X$)(s,a)
for(var l=["symbol","symbolSize","symbolKeepAspect"],u=0;u<l.length;u++)r.setItemVisual(t,l[u],n.getItemVisual(e,l[u]))}}))}))}function a(t){return t instanceof Array||(t=[t,t]),t}function s(t){t.eachSeriesByType("graph",(function(t){var e=t.getGraph(),n=t.getEdgeData(),r=a(t.get("edgeSymbol")),o=a(t.get("edgeSymbolSize"))
n.setVisual("fromSymbol",r&&r[0]),n.setVisual("toSymbol",r&&r[1]),n.setVisual("fromSymbolSize",o&&o[0]),n.setVisual("toSymbolSize",o&&o[1]),n.setVisual("style",t.getModel("lineStyle").getLineStyle()),n.each((function(t){var r=n.getItemModel(t),o=e.getEdgeByIndex(t),s=a(r.getShallow("symbol",!0)),l=a(r.getShallow("symbolSize",!0)),u=r.getModel("lineStyle").getLineStyle(),h=n.ensureUniqueItemVisual(t,"style")
switch((0,i.X$)(h,u),h.stroke){case"source":var c=o.node1.getVisual("style")
h.stroke=c&&c.fill
break
case"target":c=o.node2.getVisual("style"),h.stroke=c&&c.fill}s[0]&&o.setVisual("fromSymbol",s[0]),s[1]&&o.setVisual("toSymbol",s[1]),l[0]&&o.setVisual("fromSymbolSize",l[0]),l[1]&&o.setVisual("toSymbolSize",l[1])}))}))}var l=n(1150),u="--\x3e",h=function(t){return t.get("autoCurveness")||null},c=function(t,e){var n=h(t),r=20,o=[]
if(i.Et(n))r=n
else if(i.cy(n))return void(t.__curvenessList=n)
e>r&&(r=e)
var a=r%2?r+2:r+3
o=[]
for(var s=0;s<a;s++)o.push((s%2?s+1:s)/10*(s%2?-1:1))
t.__curvenessList=o},d=function(t,e,n){var i=[t.id,t.dataIndex].join("."),r=[e.id,e.dataIndex].join(".")
return[n.uid,i,r].join(u)},p=function(t){var e=t.split(u)
return[e[0],e[2],e[1]].join(u)},f=function(t,e){var n=d(t.node1,t.node2,e)
return e.__edgeMap[n]},g=function(t,e){return y(d(t.node1,t.node2,e),e)+y(d(t.node2,t.node1,e),e)},y=function(t,e){var n=e.__edgeMap
return n[t]?n[t].length:0}
function v(t,e,n,r){var o=h(e),a=i.cy(o)
if(!o)return null
var s=f(t,e)
if(!s)return null
for(var l=-1,u=0;u<s.length;u++)if(s[u]===n){l=u
break}var v=g(t,e)
c(e,v),t.lineStyle=t.lineStyle||{}
var m=d(t.node1,t.node2,e),_=e.__curvenessList,x=a||v%2?0:1
if(s.isForward)return _[x+l]
var b=p(m),w=y(b,e),A=_[l+w+x]
return r?a?o&&0===o[0]?(w+x)%2?A:-A:((w%2?0:1)+x)%2?A:-A:(w+x)%2?A:-A:_[l+w+x]}function m(t){var e=t.coordinateSystem
if(!e||"view"===e.type){var n=t.getGraph()
n.eachNode((function(t){var e=t.getModel()
t.setLayout([+e.get("x"),+e.get("y")])})),_(n,t)}}function _(t,e){t.eachEdge((function(t,n){var r=i.WV(t.getModel().get(["lineStyle","curveness"]),-v(t,e,n,!0),0),o=l.o8(t.node1.getLayout()),a=l.o8(t.node2.getLayout()),s=[o,a];+r&&s.push([(o[0]+a[0])/2-(o[1]-a[1])*r,(o[1]+a[1])/2-(a[0]-o[0])*r]),t.setLayout(s)}))}function x(t,e){t.eachSeriesByType("graph",(function(t){var e=t.get("layout"),n=t.coordinateSystem
if(n&&"view"!==n.type){var r=t.getData(),o=[];(0,i.__)(n.dimensions,(function(t){o=o.concat(r.mapDimensionsAll(t))}))
for(var a=0;a<r.count();a++){for(var s=[],l=!1,u=0;u<o.length;u++){var h=r.get(o[u],a)
isNaN(h)||(l=!0),s.push(h)}l?r.setItemLayout(a,n.dataToPoint(s)):r.setItemLayout(a,[NaN,NaN])}_(r.graph,t)}else e&&"none"!==e||m(t)}))}function b(t){var e=t.coordinateSystem
if("view"!==e.type)return 1
var n=t.option.nodeScaleRatio,i=e.scaleX
return((e.getZoom()-1)*n+1)/i}function w(t){var e=t.getVisual("symbolSize")
return e instanceof Array&&(e=(e[0]+e[1])/2),+e}var A=Math.PI,S=[]
function M(t,e,n,r){var o=t.coordinateSystem
if(!o||"view"===o.type){var a=o.getBoundingRect(),s=t.getData(),u=s.graph,h=a.width/2+a.x,c=a.height/2+a.y,d=Math.min(a.width,a.height)/2,p=s.count()
if(s.setLayout({cx:h,cy:c}),p){if(n){var f=o.pointToData(r),g=f[0],y=f[1],m=[g-h,y-c]
l.S8(m,m),l.hs(m,m,d),n.setLayout([h+m[0],c+m[1]],!0),I(n,t.get(["circular","rotateLabel"]),h,c)}T[e](t,u,s,d,h,c,p),u.eachEdge((function(e,n){var r,o=i.WV(e.getModel().get(["lineStyle","curveness"]),v(e,t,n),0),a=l.o8(e.node1.getLayout()),s=l.o8(e.node2.getLayout()),u=(a[0]+s[0])/2,d=(a[1]+s[1])/2;+o&&(r=[h*(o*=3)+u*(1-o),c*o+d*(1-o)]),e.setLayout([a,s,r])}))}}}var T={value:function(t,e,n,i,r,o,a){var s=0,l=n.getSum("value"),u=2*Math.PI/(l||a)
e.eachNode((function(t){var e=t.getValue("value"),n=u*(l?e:1)/2
s+=n,t.setLayout([i*Math.cos(s)+r,i*Math.sin(s)+o]),s+=n}))},symbolSize:function(t,e,n,i,r,o,a){var s=0
S.length=a
var l=b(t)
e.eachNode((function(t){var e=w(t)
isNaN(e)&&(e=2),e<0&&(e=0),e*=l
var n=Math.asin(e/2/i)
isNaN(n)&&(n=A/2),S[t.dataIndex]=n,s+=2*n}))
var u=(2*A-s)/a/2,h=0
e.eachNode((function(t){var e=u+S[t.dataIndex]
h+=e,(!t.getLayout()||!t.getLayout().fixed)&&t.setLayout([i*Math.cos(h)+r,i*Math.sin(h)+o]),h+=e}))}}
function I(t,e,n,r){var o=t.getGraphicEl()
if(o){var a=t.getModel().get(["label","rotate"])||0,s=o.getSymbolPath()
if(e){var l=t.getLayout(),u=Math.atan2(l[1]-r,l[0]-n)
u<0&&(u=2*Math.PI+u)
var h=l[0]<n
h&&(u-=Math.PI)
var c=h?"left":"right"
s.setTextConfig({rotation:-u,position:c,origin:"center"})
var d=s.ensureState("emphasis")
i.X$(d.textConfig||(d.textConfig={}),{position:c})}else s.setTextConfig({rotation:a*=Math.PI/180})}}function C(t){t.eachSeriesByType("graph",(function(t){"circular"===t.get("layout")&&M(t,"symbolSize")}))}var D=l.Ln,k=n(3947)
function L(t){t.eachSeriesByType("graph",(function(t){var e=t.coordinateSystem
if(!e||"view"===e.type)if("force"===t.get("layout")){var n=t.preservedPoints||{},r=t.getGraph(),o=r.data,a=r.edgeData,s=t.getModel("force"),u=s.get("initLayout")
t.preservedPoints?o.each((function(t){var e=o.getId(t)
o.setItemLayout(t,n[e]||[NaN,NaN])})):u&&"none"!==u?"circular"===u&&M(t,"value"):m(t)
var h=o.getDataExtent("value"),c=a.getDataExtent("value"),d=s.get("repulsion"),p=s.get("edgeLength"),f=i.cy(d)?d:[d,d],g=i.cy(p)?p:[p,p]
g=[g[1],g[0]]
var y=o.mapArray("value",(function(t,e){var n=o.getItemLayout(e),i=(0,k.Cb)(t,h,f)
return isNaN(i)&&(i=(f[0]+f[1])/2),{w:i,rep:i,fixed:o.getItemModel(e).get("fixed"),p:!n||isNaN(n[0])||isNaN(n[1])?null:n}})),_=a.mapArray("value",(function(e,n){var o=r.getEdgeByIndex(n),a=(0,k.Cb)(e,c,g)
isNaN(a)&&(a=(g[0]+g[1])/2)
var s=o.getModel(),l=i.WV(o.getModel().get(["lineStyle","curveness"]),-v(o,t,n,!0),0)
return{n1:y[o.node1.dataIndex],n2:y[o.node2.dataIndex],d:a,curveness:l,ignoreForceLayout:s.get("ignoreForceLayout")}})),x=e.getBoundingRect(),b=function(t,e,n){for(var i=t,r=e,o=n.rect,a=o.width,s=o.height,u=[o.x+a/2,o.y+s/2],h=null==n.gravity?.1:n.gravity,c=0;c<i.length;c++){var d=i[c]
d.p||(d.p=l.vt(a*(Math.random()-.5)+u[0],s*(Math.random()-.5)+u[1])),d.pp=l.o8(d.p),d.edges=null}var p,f,g=null==n.friction?.6:n.friction,y=g
return{warmUp:function(){y=.8*g},setFixed:function(t){i[t].fixed=!0},setUnfixed:function(t){i[t].fixed=!1},beforeStep:function(t){p=t},afterStep:function(t){f=t},step:function(t){p&&p(i,r)
for(var e=[],n=i.length,o=0;o<r.length;o++){var a=r[o]
if(!a.ignoreForceLayout){var s=a.n1,c=a.n2
l.jb(e,c.p,s.p)
var d=l.Il(e)-a.d,g=c.w/(s.w+c.w)
isNaN(g)&&(g=0),l.S8(e,e),!s.fixed&&D(s.p,s.p,e,g*d*y),!c.fixed&&D(c.p,c.p,e,-(1-g)*d*y)}}for(o=0;o<n;o++)(x=i[o]).fixed||(l.jb(e,u,x.p),D(x.p,x.p,e,h*y))
for(o=0;o<n;o++){s=i[o]
for(var v=o+1;v<n;v++){c=i[v],l.jb(e,c.p,s.p),0===(d=l.Il(e))&&(l.hZ(e,Math.random()-.5,Math.random()-.5),d=1)
var m=(s.rep+c.rep)/d/d
!s.fixed&&D(s.pp,s.pp,e,m),!c.fixed&&D(c.pp,c.pp,e,-m)}}var _=[]
for(o=0;o<n;o++){var x;(x=i[o]).fixed||(l.jb(_,x.p,x.pp),D(x.p,x.p,_,y),l.C(x.pp,x.p))}var b=(y*=.992)<.01
f&&f(i,r,b),t&&t(b)}}}(y,_,{rect:x,gravity:s.get("gravity"),friction:s.get("friction")})
b.beforeStep((function(t,e){for(var n=0,i=t.length;n<i;n++)t[n].fixed&&l.C(t[n].p,r.getNodeByIndex(n).getLayout())})),b.afterStep((function(t,e,i){for(var a=0,s=t.length;a<s;a++)t[a].fixed||r.getNodeByIndex(a).setLayout(t[a].p),n[o.getId(a)]=t[a].p
for(a=0,s=e.length;a<s;a++){var u=e[a],h=r.getEdgeByIndex(a),c=u.n1.p,d=u.n2.p,p=h.getLayout();(p=p?p.slice():[])[0]=p[0]||[],p[1]=p[1]||[],l.C(p[0],c),l.C(p[1],d),+u.curveness&&(p[2]=[(c[0]+d[0])/2-(c[1]-d[1])*u.curveness,(c[1]+d[1])/2-(d[0]-c[0])*u.curveness]),h.setLayout(p)}})),t.forceLayout=b,t.preservedPoints=n,b.step()}else t.forceLayout=null}))}var P=n(2648),O=n(3960),N=n(5950)
function R(t,e){var n=[]
return t.eachSeriesByType("graph",(function(t){var r=t.get("coordinateSystem")
if(!r||"view"===r){var o=t.getData(),a=o.mapArray((function(t){var e=o.getItemModel(t)
return[+e.get("x"),+e.get("y")]})),s=[],l=[]
N.Cr(a,s,l),l[0]-s[0]==0&&(l[0]+=1,s[0]-=1),l[1]-s[1]==0&&(l[1]+=1,s[1]-=1)
var u=(l[0]-s[0])/(l[1]-s[1]),h=function(t,e,n){var r=(0,i.X$)(t.getBoxLayoutParams(),{aspect:n})
return(0,O.dV)(r,{width:e.getWidth(),height:e.getHeight()})}(t,e,u)
isNaN(u)&&(s=[h.x,h.y],l=[h.x+h.width,h.y+h.height])
var c=l[0]-s[0],d=l[1]-s[1],p=h.width,f=h.height,g=t.coordinateSystem=new P.A
g.zoomLimit=t.get("scaleLimit"),g.setBoundingRect(s[0],s[1],c,d),g.setViewRect(h.x,h.y,p,f),g.setCenter(t.get("center"),e),g.setZoom(t.get("zoom")),n.push(g)}})),n}var E,z=n(4784),B=n(9167),V=n(7941),F=n(3023),W=n(5478),H=n(1032),G=n(2198),j=n(4427),X=H.A.prototype,Y=G.A.prototype,U=function(){this.x1=0,this.y1=0,this.x2=0,this.y2=0,this.percent=1}
function Z(t){return isNaN(+t.cpx1)||isNaN(+t.cpy1)}E=U,(0,z.C6)((function(){return null!==E&&E.apply(this,arguments)||this}),E)
const $=function(t){function e(e){var n=t.call(this,e)||this
return n.type="ec-line",n}return(0,z.C6)(e,t),e.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},e.prototype.getDefaultShape=function(){return new U},e.prototype.buildPath=function(t,e){Z(e)?X.buildPath.call(this,t,e):Y.buildPath.call(this,t,e)},e.prototype.pointAt=function(t){return Z(this.shape)?X.pointAt.call(this,t):Y.pointAt.call(this,t)},e.prototype.tangentAt=function(t){var e=this.shape,n=Z(e)?[e.x2-e.x1,e.y2-e.y1]:Y.tangentAt.call(this,t)
return l.S8(n,n)},e}(j.Ay)
var q=n(8283),K=n(200),Q=n(923),J=["fromSymbol","toSymbol"]
function tt(t){return"_"+t+"Type"}function et(t,e,n){var i=e.getItemVisual(n,t)
if(!i||"none"===i)return i
var r=e.getItemVisual(n,t+"Size"),o=e.getItemVisual(n,t+"Rotate"),a=e.getItemVisual(n,t+"Offset"),s=e.getItemVisual(n,t+"KeepAspect"),l=W.xU(r)
return i+l+W.hV(a||0,l)+(o||"")+(s||"")}function nt(t,e,n){var i=e.getItemVisual(n,t)
if(i&&"none"!==i){var r=e.getItemVisual(n,t+"Size"),o=e.getItemVisual(n,t+"Rotate"),a=e.getItemVisual(n,t+"Offset"),s=e.getItemVisual(n,t+"KeepAspect"),l=W.xU(r),u=W.hV(a||0,l),h=W.v5(i,-l[0]/2+u[0],-l[1]/2+u[1],l[0],l[1],null,s)
return h.__specifiedRotation=null==o||isNaN(o)?void 0:+o*Math.PI/180||0,h.name=t,h}}function it(t,e){t.x1=e[0][0],t.y1=e[0][1],t.x2=e[1][0],t.y2=e[1][1],t.percent=1
var n=e[2]
n?(t.cpx1=n[0],t.cpy1=n[1]):(t.cpx1=NaN,t.cpy1=NaN)}var rt=function(t){function e(e,n,i){var r=t.call(this)||this
return r._createLine(e,n,i),r}return(0,z.C6)(e,t),e.prototype._createLine=function(t,e,n){var r=t.hostModel,o=function(t){var e=new $({name:"line",subPixelOptimize:!0})
return it(e.shape,t),e}(t.getItemLayout(e))
o.shape.percent=0,q.LW(o,{shape:{percent:1}},r,e),this.add(o),(0,i.__)(J,(function(n){var i=nt(n,t,e)
this.add(i),this[tt(n)]=et(n,t,e)}),this),this._updateCommonStl(t,e,n)},e.prototype.updateData=function(t,e,n){var r=t.hostModel,o=this.childOfName("line"),a=t.getItemLayout(e),s={shape:{}}
it(s.shape,a),q.oi(o,s,r,e),(0,i.__)(J,(function(n){var i=et(n,t,e),r=tt(n)
if(this[r]!==i){this.remove(this.childOfName(n))
var o=nt(n,t,e)
this.add(o)}this[r]=i}),this),this._updateCommonStl(t,e,n)},e.prototype.getLinePath=function(){return this.childAt(0)},e.prototype._updateCommonStl=function(t,e,n){var r=t.hostModel,o=this.childOfName("line"),a=n&&n.emphasisLineStyle,s=n&&n.blurLineStyle,l=n&&n.selectLineStyle,u=n&&n.labelStatesModels,h=n&&n.emphasisDisabled,c=n&&n.focus,d=n&&n.blurScope
if(!n||t.hasItemOption){var p=t.getItemModel(e),f=p.getModel("emphasis")
a=f.getModel("lineStyle").getLineStyle(),s=p.getModel(["blur","lineStyle"]).getLineStyle(),l=p.getModel(["select","lineStyle"]).getLineStyle(),h=f.get("disabled"),c=f.get("focus"),d=f.get("blurScope"),u=(0,Q.lx)(p)}var g=t.getItemVisual(e,"style"),y=g.stroke
o.useStyle(g),o.style.fill=null,o.style.strokeNoScale=!0,o.ensureState("emphasis").style=a,o.ensureState("blur").style=s,o.ensureState("select").style=l,(0,i.__)(J,(function(t){var e=this.childOfName(t)
if(e){e.setColor(y),e.style.opacity=g.opacity
for(var n=0;n<K.BV.length;n++){var i=K.BV[n],r=o.getState(i)
if(r){var a=r.style||{},s=e.ensureState(i),l=s.style||(s.style={})
null!=a.stroke&&(l[e.__isEmptyBrush?"stroke":"fill"]=a.stroke),null!=a.opacity&&(l.opacity=a.opacity)}}e.markRedraw()}}),this)
var v=r.getRawValue(e);(0,Q.qM)(this,u,{labelDataIndex:e,labelFetcher:{getFormattedLabel:function(e,n){return r.getFormattedLabel(e,n,t.dataType)}},inheritColor:y||"#000",defaultOpacity:g.opacity,defaultText:(null==v?t.getName(e):isFinite(v)?(0,k.LI)(v):v)+""})
var m=this.getTextContent()
if(m){var _=u.normal
m.__align=m.style.align,m.__verticalAlign=m.style.verticalAlign,m.__position=_.get("position")||"middle"
var x=_.get("distance");(0,i.cy)(x)||(x=[x,x]),m.__labelDistance=x}this.setTextConfig({position:null,local:!0,inside:!1}),(0,K.Lm)(this,c,d,h)},e.prototype.highlight=function(){(0,K.HY)(this)},e.prototype.downplay=function(){(0,K.SD)(this)},e.prototype.updateLayout=function(t,e){this.setLinePoints(t.getItemLayout(e))},e.prototype.setLinePoints=function(t){var e=this.childOfName("line")
it(e.shape,t),e.dirty()},e.prototype.beforeUpdate=function(){var t=this,e=t.childOfName("fromSymbol"),n=t.childOfName("toSymbol"),i=t.getTextContent()
if(e||n||i&&!i.ignore){for(var r=1,o=this.parent;o;)o.scaleX&&(r/=o.scaleX),o=o.parent
var a=t.childOfName("line")
if(this.__dirty||a.__dirty){var s=a.shape.percent,u=a.pointAt(0),h=a.pointAt(s),c=l.jb([],h,u)
if(l.S8(c,c),e&&(e.setPosition(u),S(e,0),e.scaleX=e.scaleY=r*s,e.markRedraw()),n&&(n.setPosition(h),S(n,1),n.scaleX=n.scaleY=r*s,n.markRedraw()),i&&!i.ignore){i.x=i.y=0,i.originX=i.originY=0
var d=void 0,p=void 0,f=i.__labelDistance,g=f[0]*r,y=f[1]*r,v=s/2,m=a.tangentAt(v),_=[m[1],-m[0]],x=a.pointAt(v)
_[1]>0&&(_[0]=-_[0],_[1]=-_[1])
var b=m[0]<0?-1:1
if("start"!==i.__position&&"end"!==i.__position){var w=-Math.atan2(m[1],m[0])
h[0]<u[0]&&(w=Math.PI+w),i.rotation=w}var A=void 0
switch(i.__position){case"insideStartTop":case"insideMiddleTop":case"insideEndTop":case"middle":A=-y,p="bottom"
break
case"insideStartBottom":case"insideMiddleBottom":case"insideEndBottom":A=y,p="top"
break
default:A=0,p="middle"}switch(i.__position){case"end":i.x=c[0]*g+h[0],i.y=c[1]*y+h[1],d=c[0]>.8?"left":c[0]<-.8?"right":"center",p=c[1]>.8?"top":c[1]<-.8?"bottom":"middle"
break
case"start":i.x=-c[0]*g+u[0],i.y=-c[1]*y+u[1],d=c[0]>.8?"right":c[0]<-.8?"left":"center",p=c[1]>.8?"bottom":c[1]<-.8?"top":"middle"
break
case"insideStartTop":case"insideStart":case"insideStartBottom":i.x=g*b+u[0],i.y=u[1]+A,d=m[0]<0?"right":"left",i.originX=-g*b,i.originY=-A
break
case"insideMiddleTop":case"insideMiddle":case"insideMiddleBottom":case"middle":i.x=x[0],i.y=x[1]+A,d="center",i.originY=-A
break
case"insideEndTop":case"insideEnd":case"insideEndBottom":i.x=-g*b+h[0],i.y=h[1]+A,d=m[0]>=0?"right":"left",i.originX=g*b,i.originY=-A}i.scaleX=i.scaleY=r,i.setStyle({verticalAlign:i.__verticalAlign||p,align:i.__align||d})}}}function S(t,e){var n=t.__specifiedRotation
if(null==n){var i=a.tangentAt(e)
t.attr("rotation",(1===e?-1:1)*Math.PI/2-Math.atan2(i[1],i[0]))}else t.attr("rotation",n)}},e}(V.A)
const ot=rt
function at(t){var e=t.hostModel,n=e.getModel("emphasis")
return{lineStyle:e.getModel("lineStyle").getLineStyle(),emphasisLineStyle:n.getModel(["lineStyle"]).getLineStyle(),blurLineStyle:e.getModel(["blur","lineStyle"]).getLineStyle(),selectLineStyle:e.getModel(["select","lineStyle"]).getLineStyle(),emphasisDisabled:n.get("disabled"),blurScope:n.get("blurScope"),focus:n.get("focus"),labelStatesModels:(0,Q.lx)(e)}}function st(t){return isNaN(t[0])||isNaN(t[1])}function lt(t){return t&&!st(t[0])&&!st(t[1])}const ut=function(){function t(t){this.group=new V.A,this._LineCtor=t||ot}return t.prototype.updateData=function(t){var e=this
this._progressiveEls=null
var n=this,i=n.group,r=n._lineData
n._lineData=t,r||i.removeAll()
var o=at(t)
t.diff(r).add((function(n){e._doAdd(t,n,o)})).update((function(n,i){e._doUpdate(r,t,i,n,o)})).remove((function(t){i.remove(r.getItemGraphicEl(t))})).execute()},t.prototype.updateLayout=function(){var t=this._lineData
t&&t.eachItemGraphicEl((function(e,n){e.updateLayout(t,n)}),this)},t.prototype.incrementalPrepareUpdate=function(t){this._seriesScope=at(t),this._lineData=null,this.group.removeAll()},t.prototype.incrementalUpdate=function(t,e){function n(t){t.isGroup||function(t){return t.animators&&t.animators.length>0}(t)||(t.incremental=!0,t.ensureState("emphasis").hoverLayer=!0)}this._progressiveEls=[]
for(var i=t.start;i<t.end;i++)if(lt(e.getItemLayout(i))){var r=new this._LineCtor(e,i,this._seriesScope)
r.traverse(n),this.group.add(r),e.setItemGraphicEl(i,r),this._progressiveEls.push(r)}},t.prototype.remove=function(){this.group.removeAll()},t.prototype.eachRendered=function(t){F.traverseElements(this._progressiveEls||this.group,t)},t.prototype._doAdd=function(t,e,n){if(lt(t.getItemLayout(e))){var i=new this._LineCtor(t,e,n)
t.setItemGraphicEl(e,i),this.group.add(i)}},t.prototype._doUpdate=function(t,e,n,i,r){var o=t.getItemGraphicEl(n)
lt(e.getItemLayout(i))?(o?o.updateData(e,i,r):o=new this._LineCtor(e,i,r),e.setItemGraphicEl(i,o),this.group.add(o)):this.group.remove(o)},t}()
var ht=n(2566),ct=n(3663),dt=n(2160),pt=n(3906),ft=[],gt=[],yt=[],vt=pt.k3,mt=l.oi,_t=Math.abs
function xt(t,e,n){for(var i,r=t[0],o=t[1],a=t[2],s=1/0,l=n*n,u=.1,h=.1;h<=.9;h+=.1)ft[0]=vt(r[0],o[0],a[0],h),ft[1]=vt(r[1],o[1],a[1],h),(p=_t(mt(ft,e)-l))<s&&(s=p,i=h)
for(var c=0;c<32;c++){var d=i+u
gt[0]=vt(r[0],o[0],a[0],i),gt[1]=vt(r[1],o[1],a[1],i),yt[0]=vt(r[0],o[0],a[0],d),yt[1]=vt(r[1],o[1],a[1],d)
var p=mt(gt,e)-l
if(_t(p)<.01)break
var f=mt(yt,e)-l
u/=2,p<0?f>=0?i+=u:i-=u:f>=0?i-=u:i+=u}return i}function bt(t,e){var n=[],i=pt.kx,r=[[],[],[]],o=[[],[]],a=[]
e/=2,t.eachEdge((function(t,s){var u=t.getLayout(),h=t.getVisual("fromSymbol"),c=t.getVisual("toSymbol")
u.__original||(u.__original=[l.o8(u[0]),l.o8(u[1])],u[2]&&u.__original.push(l.o8(u[2])))
var d=u.__original
if(null!=u[2]){if(l.C(r[0],d[0]),l.C(r[1],d[2]),l.C(r[2],d[1]),h&&"none"!==h){var p=w(t.node1),f=xt(r,d[0],p*e)
i(r[0][0],r[1][0],r[2][0],f,n),r[0][0]=n[3],r[1][0]=n[4],i(r[0][1],r[1][1],r[2][1],f,n),r[0][1]=n[3],r[1][1]=n[4]}c&&"none"!==c&&(p=w(t.node2),f=xt(r,d[1],p*e),i(r[0][0],r[1][0],r[2][0],f,n),r[1][0]=n[1],r[2][0]=n[2],i(r[0][1],r[1][1],r[2][1],f,n),r[1][1]=n[1],r[2][1]=n[2]),l.C(u[0],r[0]),l.C(u[1],r[2]),l.C(u[2],r[1])}else l.C(o[0],d[0]),l.C(o[1],d[1]),l.jb(a,o[1],o[0]),l.S8(a,a),h&&"none"!==h&&(p=w(t.node1),l.Ln(o[0],o[0],a,p*e)),c&&"none"!==c&&(p=w(t.node2),l.Ln(o[1],o[1],a,-p*e)),l.C(u[0],o[0]),l.C(u[1],o[1])}))}var wt=n(1993),At=n(1323)
function St(t){return"view"===t.type}var Mt=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n}return(0,z.C6)(e,t),e.prototype.init=function(t,e){var n=new B.A,i=new ut,r=this.group
this._controller=new ht.A(e.getZr()),this._controllerHost={target:r},r.add(n.group),r.add(i.group),this._symbolDraw=n,this._lineDraw=i,this._firstRender=!0},e.prototype.render=function(t,e,n){var i=this,r=t.coordinateSystem
this._model=t
var o=this._symbolDraw,a=this._lineDraw,s=this.group
if(St(r)){var l={x:r.x,y:r.y,scaleX:r.scaleX,scaleY:r.scaleY}
this._firstRender?s.attr(l):q.oi(s,l,t)}bt(t.getGraph(),b(t))
var u=t.getData()
o.updateData(u)
var h=t.getEdgeData()
a.updateData(h),this._updateNodeAndLinkScale(),this._updateController(t,e,n),clearTimeout(this._layoutTimeout)
var c=t.forceLayout,d=t.get(["force","layoutAnimation"])
c&&this._startForceLayoutIteration(c,d)
var p=t.get("layout")
u.graph.eachNode((function(e){var n=e.dataIndex,r=e.getGraphicEl(),o=e.getModel()
if(r){r.off("drag").off("dragend")
var a=o.get("draggable")
a&&r.on("drag",(function(o){switch(p){case"force":c.warmUp(),!i._layouting&&i._startForceLayoutIteration(c,d),c.setFixed(n),u.setItemLayout(n,[r.x,r.y])
break
case"circular":u.setItemLayout(n,[r.x,r.y]),e.setLayout({fixed:!0},!0),M(t,"symbolSize",e,[o.offsetX,o.offsetY]),i.updateLayout(t)
break
default:u.setItemLayout(n,[r.x,r.y]),_(t.getGraph(),t),i.updateLayout(t)}})).on("dragend",(function(){c&&c.setUnfixed(n)})),r.setDraggable(a,!!o.get("cursor")),"adjacency"===o.get(["emphasis","focus"])&&((0,At.z)(r).focus=e.getAdjacentDataIndices())}})),u.graph.eachEdge((function(t){var e=t.getGraphicEl(),n=t.getModel().get(["emphasis","focus"])
e&&"adjacency"===n&&((0,At.z)(e).focus={edge:[t.dataIndex],node:[t.node1.dataIndex,t.node2.dataIndex]})}))
var f="circular"===t.get("layout")&&t.get(["circular","rotateLabel"]),g=u.getLayout("cx"),y=u.getLayout("cy")
u.graph.eachNode((function(t){I(t,f,g,y)})),this._firstRender=!1},e.prototype.dispose=function(){this.remove(),this._controller&&this._controller.dispose(),this._controllerHost=null},e.prototype._startForceLayoutIteration=function(t,e){var n=this
!function i(){t.step((function(t){n.updateLayout(n._model),(n._layouting=!t)&&(e?n._layoutTimeout=setTimeout(i,16):i())}))}()},e.prototype._updateController=function(t,e,n){var i=this,r=this._controller,o=this._controllerHost,a=this.group
r.setPointerChecker((function(e,i,r){var o=a.getBoundingRect()
return o.applyTransform(a.transform),o.contain(i,r)&&!(0,dt.I)(e,n,t)})),St(t.coordinateSystem)?(r.enable(t.get("roam")),o.zoomLimit=t.get("scaleLimit"),o.zoom=t.coordinateSystem.getZoom(),r.off("pan").off("zoom").on("pan",(function(e){ct.t(o,e.dx,e.dy),n.dispatchAction({seriesId:t.id,type:"graphRoam",dx:e.dx,dy:e.dy})})).on("zoom",(function(e){ct.x(o,e.scale,e.originX,e.originY),n.dispatchAction({seriesId:t.id,type:"graphRoam",zoom:e.scale,originX:e.originX,originY:e.originY}),i._updateNodeAndLinkScale(),bt(t.getGraph(),b(t)),i._lineDraw.updateLayout(),n.updateLabelLayout()}))):r.disable()},e.prototype._updateNodeAndLinkScale=function(){var t=this._model,e=t.getData(),n=b(t)
e.eachItemGraphicEl((function(t,e){t&&t.setSymbolScale(n)}))},e.prototype.updateLayout=function(t){bt(t.getGraph(),b(t)),this._symbolDraw.updateLayout(),this._lineDraw.updateLayout()},e.prototype.remove=function(){clearTimeout(this._layoutTimeout),this._layouting=!1,this._layoutTimeout=null,this._symbolDraw&&this._symbolDraw.remove(),this._lineDraw&&this._lineDraw.remove()},e.type="graph",e}(wt.A)
const Tt=Mt
var It=n(8344),Ct=n(5225),Dt=n(7413)
function kt(t){return"_EC_"+t}var Lt=function(){function t(t){this.type="graph",this.nodes=[],this.edges=[],this._nodesMap={},this._edgesMap={},this._directed=t||!1}return t.prototype.isDirected=function(){return this._directed},t.prototype.addNode=function(t,e){t=null==t?""+e:""+t
var n=this._nodesMap
if(!n[kt(t)]){var i=new Pt(t,e)
return i.hostGraph=this,this.nodes.push(i),n[kt(t)]=i,i}},t.prototype.getNodeByIndex=function(t){var e=this.data.getRawIndex(t)
return this.nodes[e]},t.prototype.getNodeById=function(t){return this._nodesMap[kt(t)]},t.prototype.addEdge=function(t,e,n){var r=this._nodesMap,o=this._edgesMap
if(i.Et(t)&&(t=this.nodes[t]),i.Et(e)&&(e=this.nodes[e]),t instanceof Pt||(t=r[kt(t)]),e instanceof Pt||(e=r[kt(e)]),t&&e){var a=t.id+"-"+e.id,s=new Ot(t,e,n)
return s.hostGraph=this,this._directed&&(t.outEdges.push(s),e.inEdges.push(s)),t.edges.push(s),t!==e&&e.edges.push(s),this.edges.push(s),o[a]=s,s}},t.prototype.getEdgeByIndex=function(t){var e=this.edgeData.getRawIndex(t)
return this.edges[e]},t.prototype.getEdge=function(t,e){t instanceof Pt&&(t=t.id),e instanceof Pt&&(e=e.id)
var n=this._edgesMap
return this._directed?n[t+"-"+e]:n[t+"-"+e]||n[e+"-"+t]},t.prototype.eachNode=function(t,e){for(var n=this.nodes,i=n.length,r=0;r<i;r++)n[r].dataIndex>=0&&t.call(e,n[r],r)},t.prototype.eachEdge=function(t,e){for(var n=this.edges,i=n.length,r=0;r<i;r++)n[r].dataIndex>=0&&n[r].node1.dataIndex>=0&&n[r].node2.dataIndex>=0&&t.call(e,n[r],r)},t.prototype.breadthFirstTraverse=function(t,e,n,i){if(e instanceof Pt||(e=this._nodesMap[kt(e)]),e){for(var r="out"===n?"outEdges":"in"===n?"inEdges":"edges",o=0;o<this.nodes.length;o++)this.nodes[o].__visited=!1
if(!t.call(i,e,null))for(var a=[e];a.length;){var s=a.shift(),l=s[r]
for(o=0;o<l.length;o++){var u=l[o],h=u.node1===s?u.node2:u.node1
if(!h.__visited){if(t.call(i,h,s))return
a.push(h),h.__visited=!0}}}}},t.prototype.update=function(){for(var t=this.data,e=this.edgeData,n=this.nodes,i=this.edges,r=0,o=n.length;r<o;r++)n[r].dataIndex=-1
for(r=0,o=t.count();r<o;r++)n[t.getRawIndex(r)].dataIndex=r
for(e.filterSelf((function(t){var n=i[e.getRawIndex(t)]
return n.node1.dataIndex>=0&&n.node2.dataIndex>=0})),r=0,o=i.length;r<o;r++)i[r].dataIndex=-1
for(r=0,o=e.count();r<o;r++)i[e.getRawIndex(r)].dataIndex=r},t.prototype.clone=function(){for(var e=new t(this._directed),n=this.nodes,i=this.edges,r=0;r<n.length;r++)e.addNode(n[r].id,n[r].dataIndex)
for(r=0;r<i.length;r++){var o=i[r]
e.addEdge(o.node1.id,o.node2.id,o.dataIndex)}return e},t}(),Pt=function(){function t(t,e){this.inEdges=[],this.outEdges=[],this.edges=[],this.dataIndex=-1,this.id=null==t?"":t,this.dataIndex=null==e?-1:e}return t.prototype.degree=function(){return this.edges.length},t.prototype.inDegree=function(){return this.inEdges.length},t.prototype.outDegree=function(){return this.outEdges.length},t.prototype.getModel=function(t){if(!(this.dataIndex<0))return this.hostGraph.data.getItemModel(this.dataIndex).getModel(t)},t.prototype.getAdjacentDataIndices=function(){for(var t={edge:[],node:[]},e=0;e<this.edges.length;e++){var n=this.edges[e]
n.dataIndex<0||(t.edge.push(n.dataIndex),t.node.push(n.node1.dataIndex,n.node2.dataIndex))}return t},t.prototype.getTrajectoryDataIndices=function(){for(var t=i.nt(),e=i.nt(),n=0;n<this.edges.length;n++){var r=this.edges[n]
if(!(r.dataIndex<0)){t.set(r.dataIndex,!0)
for(var o=[r.node1],a=[r.node2],s=0;s<o.length;){var l=o[s]
s++,e.set(l.dataIndex,!0)
for(var u=0;u<l.inEdges.length;u++)t.set(l.inEdges[u].dataIndex,!0),o.push(l.inEdges[u].node1)}for(s=0;s<a.length;){var h=a[s]
for(s++,e.set(h.dataIndex,!0),u=0;u<h.outEdges.length;u++)t.set(h.outEdges[u].dataIndex,!0),a.push(h.outEdges[u].node2)}}}return{edge:t.keys(),node:e.keys()}},t}(),Ot=function(){function t(t,e,n){this.dataIndex=-1,this.node1=t,this.node2=e,this.dataIndex=null==n?-1:n}return t.prototype.getModel=function(t){if(!(this.dataIndex<0))return this.hostGraph.edgeData.getItemModel(this.dataIndex).getModel(t)},t.prototype.getAdjacentDataIndices=function(){return{edge:[this.dataIndex],node:[this.node1.dataIndex,this.node2.dataIndex]}},t.prototype.getTrajectoryDataIndices=function(){var t=i.nt(),e=i.nt()
t.set(this.dataIndex,!0)
for(var n=[this.node1],r=[this.node2],o=0;o<n.length;){var a=n[o]
o++,e.set(a.dataIndex,!0)
for(var s=0;s<a.inEdges.length;s++)t.set(a.inEdges[s].dataIndex,!0),n.push(a.inEdges[s].node1)}for(o=0;o<r.length;){var l=r[o]
for(o++,e.set(l.dataIndex,!0),s=0;s<l.outEdges.length;s++)t.set(l.outEdges[s].dataIndex,!0),r.push(l.outEdges[s].node2)}return{edge:t.keys(),node:e.keys()}},t}()
function Nt(t,e){return{getValue:function(n){var i=this[t][e]
return i.getStore().get(i.getDimensionIndex(n||"value"),this.dataIndex)},setVisual:function(n,i){this.dataIndex>=0&&this[t][e].setItemVisual(this.dataIndex,n,i)},getVisual:function(n){return this[t][e].getItemVisual(this.dataIndex,n)},setLayout:function(n,i){this.dataIndex>=0&&this[t][e].setItemLayout(this.dataIndex,n,i)},getLayout:function(){return this[t][e].getItemLayout(this.dataIndex)},getGraphicEl:function(){return this[t][e].getItemGraphicEl(this.dataIndex)},getRawIndex:function(){return this[t][e].getRawIndex(this.dataIndex)}}}i.co(Pt,Nt("hostGraph","data")),i.co(Ot,Nt("hostGraph","edgeData"))
const Rt=Lt
var Et=n(6108),zt=n(8536),Bt=n(4),Vt=n(309),Ft=n(7538),Wt=n(3397),Ht=n(7908),Gt=n(7446),jt=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n.hasSymbolVisual=!0,n}return(0,z.C6)(e,t),e.prototype.init=function(e){t.prototype.init.apply(this,arguments)
var n=this
function i(){return n._categoriesData}this.legendVisualProvider=new Ft.A(i,i),this.fillDataTextStyle(e.edges||e.links),this._updateCategoriesData()},e.prototype.mergeOption=function(e){t.prototype.mergeOption.apply(this,arguments),this.fillDataTextStyle(e.edges||e.links),this._updateCategoriesData()},e.prototype.mergeDefaultAndTheme=function(e){t.prototype.mergeDefaultAndTheme.apply(this,arguments),(0,Ct.M5)(e,"edgeLabel",["show"])},e.prototype.getInitialData=function(t,e){var n,r=t.edges||t.links||[],o=t.data||t.nodes||[],a=this
if(o&&r){h(n=this)&&(n.__curvenessList=[],n.__edgeMap={},c(n))
var s=function(t,e,n,r,o){for(var a=new Rt(!0),s=0;s<t.length;s++)a.addNode(i.Je(t[s].id,t[s].name,s),s)
var l=[],u=[],h=0
for(s=0;s<e.length;s++){var c=e[s],d=c.source,p=c.target
a.addEdge(d,p,h)&&(u.push(c),l.push(i.Je((0,Ct.vS)(c.id,null),d+" > "+p)),h++)}var f,g=n.get("coordinateSystem")
if("cartesian2d"===g||"polar"===g)f=(0,Vt.A)(t,n)
else{var y=Bt.A.get(g),v=y&&y.dimensions||[]
i.qh(v,"value")<0&&v.concat(["value"])
var m=(0,zt.A)(t,{coordDimensions:v,encodeDefine:n.getEncode()}).dimensions;(f=new It.A(m,n)).initData(t)}var _=new It.A(["value"],n)
return _.initData(u,l),o&&o(f,_),(0,Et.A)({mainData:f,struct:a,structAttr:"graph",datas:{node:f,edge:_},datasAttr:{node:"data",edge:"edgeData"}}),a.update(),a}(o,r,this,0,(function(t,e){t.wrapMethod("getItemModel",(function(t){var e=a._categoriesModels[t.getShallow("category")]
return e&&(e.parentModel=t.parentModel,t.parentModel=e),t}))
var n=Dt.A.prototype.getModel
function i(t,e){var i=n.call(this,t,e)
return i.resolveParentPath=r,i}function r(t){if(t&&("label"===t[0]||"label"===t[1])){var e=t.slice()
return"label"===t[0]?e[0]="edgeLabel":"label"===t[1]&&(e[1]="edgeLabel"),e}return t}e.wrapMethod("getItemModel",(function(t){return t.resolveParentPath=r,t.getModel=i,t}))}))
return i.__(s.edges,(function(t){!function(t,e,n,i){if(h(n)){var r=d(t,e,n),o=n.__edgeMap,a=o[p(r)]
o[r]&&!a?o[r].isForward=!0:a&&o[r]&&(a.isForward=!0,o[r].isForward=!1),o[r]=o[r]||[],o[r].push(i)}}(t.node1,t.node2,this,t.dataIndex)}),this),s.data}},e.prototype.getGraph=function(){return this.getData().graph},e.prototype.getEdgeData=function(){return this.getGraph().edgeData},e.prototype.getCategoriesData=function(){return this._categoriesData},e.prototype.formatTooltip=function(t,e,n){if("edge"===n){var i=this.getData(),r=this.getDataParams(t,n),o=i.graph.getEdgeByIndex(t),a=i.getName(o.node1.dataIndex),s=i.getName(o.node2.dataIndex),l=[]
return null!=a&&l.push(a),null!=s&&l.push(s),(0,Ht.Qx)("nameValue",{name:l.join(" > "),value:r.value,noValue:null==r.value})}return(0,Gt.J)({series:this,dataIndex:t,multipleSeries:e})},e.prototype._updateCategoriesData=function(){var t=i.Tj(this.option.categories||[],(function(t){return null!=t.value?t:i.X$({value:0},t)})),e=new It.A(["value"],this)
e.initData(t),this._categoriesData=e,this._categoriesModels=e.mapArray((function(t){return e.getItemModel(t)}))},e.prototype.setZoom=function(t){this.option.zoom=t},e.prototype.setCenter=function(t){this.option.center=t},e.prototype.isAnimationEnabled=function(){return t.prototype.isAnimationEnabled.call(this)&&!("force"===this.get("layout")&&this.get(["force","layoutAnimation"]))},e.type="series.graph",e.dependencies=["grid","polar","geo","singleAxis","calendar"],e.defaultOption={z:2,coordinateSystem:"view",legendHoverLink:!0,layout:null,circular:{rotateLabel:!1},force:{initLayout:null,repulsion:[0,50],gravity:.1,friction:.6,edgeLength:30,layoutAnimation:!0},left:"center",top:"center",symbol:"circle",symbolSize:10,edgeSymbol:["none","none"],edgeSymbolSize:10,edgeLabel:{position:"middle",distance:5},draggable:!1,roam:!1,center:null,zoom:1,nodeScaleRatio:.6,label:{show:!1,formatter:"{b}"},itemStyle:{},lineStyle:{color:"#aaa",width:1,opacity:.5},emphasis:{scale:!0,label:{show:!0}},select:{itemStyle:{borderColor:"#212121"}}},e}(Wt.A)
const Xt=jt
var Yt=n(6521),Ut={type:"graphRoam",event:"graphRoam",update:"none"}
function Zt(t){t.registerChartView(Tt),t.registerSeriesModel(Xt),t.registerProcessor(r),t.registerVisual(o),t.registerVisual(s),t.registerLayout(x),t.registerLayout(t.PRIORITY.VISUAL.POST_CHART_LAYOUT,C),t.registerLayout(L),t.registerCoordinateSystem("graphView",{dimensions:P.A.dimensions,create:R}),t.registerAction({type:"focusNodeAdjacency",event:"focusNodeAdjacency",update:"series:focusNodeAdjacency"},i.lQ),t.registerAction({type:"unfocusNodeAdjacency",event:"unfocusNodeAdjacency",update:"series:unfocusNodeAdjacency"},i.lQ),t.registerAction(Ut,(function(t,e,n){e.eachComponent({mainType:"series",query:t},(function(e){var i=e.coordinateSystem,r=(0,Yt.f)(i,t,void 0,n)
e.setCenter&&e.setCenter(r.center),e.setZoom&&e.setZoom(r.zoom)}))}))}},8401:(t,e,n)=>{n.d(e,{A:()=>f})
var i=n(4784),r=n(5478),o=n(8283),a=n(7941),s=n(1323),l=n(200),u=n(4723),h=n(8301),c=n(923),d=n(2655)
function p(t,e){this.parent.drift(t,e)}const f=function(t){function e(e,n,i,r){var o=t.call(this)||this
return o.updateData(e,n,i,r),o}return(0,i.C6)(e,t),e.prototype._createSymbol=function(t,e,n,i,o){this.removeAll()
var a=(0,r.v5)(t,-1,-1,2,2,null,o)
a.attr({z2:100,culling:!0,scaleX:i[0]/2,scaleY:i[1]/2}),a.drift=p,this._symbolType=t,this.add(a)},e.prototype.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(null,t)},e.prototype.getSymbolType=function(){return this._symbolType},e.prototype.getSymbolPath=function(){return this.childAt(0)},e.prototype.highlight=function(){(0,l.HY)(this.childAt(0))},e.prototype.downplay=function(){(0,l.SD)(this.childAt(0))},e.prototype.setZ=function(t,e){var n=this.childAt(0)
n.zlevel=t,n.z=e},e.prototype.setDraggable=function(t,e){var n=this.childAt(0)
n.draggable=t,n.cursor=!e&&t?"move":n.cursor},e.prototype.updateData=function(t,n,i,r){this.silent=!1
var a=t.getItemVisual(n,"symbol")||"circle",s=t.hostModel,l=e.getSymbolSize(t,n),u=a!==this._symbolType,h=r&&r.disableAnimation
if(u){var c=t.getItemVisual(n,"symbolKeepAspect")
this._createSymbol(a,t,n,l,c)}else{(p=this.childAt(0)).silent=!1
var d={scaleX:l[0]/2,scaleY:l[1]/2}
h?p.attr(d):o.oi(p,d,s,n),(0,o.ap)(p)}if(this._updateCommon(t,n,l,i,r),u){var p=this.childAt(0)
h||(d={scaleX:this._sizeX,scaleY:this._sizeY,style:{opacity:p.style.opacity}},p.scaleX=p.scaleY=0,p.style.opacity=0,o.LW(p,d,s,n))}h&&this.childAt(0).stopAnimation("leave")},e.prototype._updateCommon=function(t,e,n,i,o){var a,s,p,f,g,y,v,m,_,x=this.childAt(0),b=t.hostModel
if(i&&(a=i.emphasisItemStyle,s=i.blurItemStyle,p=i.selectItemStyle,f=i.focus,g=i.blurScope,v=i.labelStatesModels,m=i.hoverScale,_=i.cursorStyle,y=i.emphasisDisabled),!i||t.hasItemOption){var w=i&&i.itemModel?i.itemModel:t.getItemModel(e),A=w.getModel("emphasis")
a=A.getModel("itemStyle").getItemStyle(),p=w.getModel(["select","itemStyle"]).getItemStyle(),s=w.getModel(["blur","itemStyle"]).getItemStyle(),f=A.get("focus"),g=A.get("blurScope"),y=A.get("disabled"),v=(0,c.lx)(w),m=A.getShallow("scale"),_=w.getShallow("cursor")}var S=t.getItemVisual(e,"symbolRotate")
x.attr("rotation",(S||0)*Math.PI/180||0)
var M=(0,r.hV)(t.getItemVisual(e,"symbolOffset"),n)
M&&(x.x=M[0],x.y=M[1]),_&&x.attr("cursor",_)
var T=t.getItemVisual(e,"style"),I=T.fill
if(x instanceof d.Ay){var C=x.style
x.useStyle((0,h.X$)({image:C.image,x:C.x,y:C.y,width:C.width,height:C.height},T))}else x.__isEmptyBrush?x.useStyle((0,h.X$)({},T)):x.useStyle(T),x.style.decal=null,x.setColor(I,o&&o.symbolInnerColor),x.style.strokeNoScale=!0
var D=t.getItemVisual(e,"liftZ"),k=this._z2
null!=D?null==k&&(this._z2=x.z2,x.z2+=D):null!=k&&(x.z2=k,this._z2=null)
var L=o&&o.useNameLabel;(0,c.qM)(x,v,{labelFetcher:b,labelDataIndex:e,defaultText:function(e){return L?t.getName(e):(0,u.i)(t,e)},inheritColor:I,defaultOpacity:T.opacity}),this._sizeX=n[0]/2,this._sizeY=n[1]/2
var P=x.ensureState("emphasis")
P.style=a,x.ensureState("select").style=p,x.ensureState("blur").style=s
var O=null==m||!0===m?Math.max(1.1,3/this._sizeY):isFinite(m)&&m>0?+m:1
P.scaleX=this._sizeX*O,P.scaleY=this._sizeY*O,this.setSymbolScale(1),(0,l.Lm)(this,f,g,y)},e.prototype.setSymbolScale=function(t){this.scaleX=this.scaleY=t},e.prototype.fadeOut=function(t,e,n){var i=this.childAt(0),r=(0,s.z)(this).dataIndex,a=n&&n.animation
if(this.silent=i.silent=!0,n&&n.fadeLabel){var l=i.getTextContent()
l&&o.Nz(l,{style:{opacity:0}},e,{dataIndex:r,removeOpt:a,cb:function(){i.removeTextContent()}})}else i.removeTextContent()
o.Nz(i,{style:{opacity:0},scaleX:0,scaleY:0},e,{dataIndex:r,cb:t,removeOpt:a})},e.getSymbolSize=function(t,e){return(0,r.xU)(t.getItemVisual(e,"symbolSize"))},e}(a.A)},9167:(t,e,n)=>{n.d(e,{A:()=>d})
var i=n(7941),r=n(8283),o=n(3023),a=n(8401),s=n(8301),l=n(923)
function u(t,e,n,i){return e&&!isNaN(e[0])&&!isNaN(e[1])&&!(i.isIgnore&&i.isIgnore(n))&&!(i.clipShape&&!i.clipShape.contain(e[0],e[1]))&&"none"!==t.getItemVisual(n,"symbol")}function h(t){return null==t||(0,s.Gv)(t)||(t={isIgnore:t}),t||{}}function c(t){var e=t.hostModel,n=e.getModel("emphasis")
return{emphasisItemStyle:n.getModel("itemStyle").getItemStyle(),blurItemStyle:e.getModel(["blur","itemStyle"]).getItemStyle(),selectItemStyle:e.getModel(["select","itemStyle"]).getItemStyle(),focus:n.get("focus"),blurScope:n.get("blurScope"),emphasisDisabled:n.get("disabled"),hoverScale:n.get("scale"),labelStatesModels:(0,l.lx)(e),cursorStyle:e.get("cursor")}}const d=function(){function t(t){this.group=new i.A,this._SymbolCtor=t||a.A}return t.prototype.updateData=function(t,e){this._progressiveEls=null,e=h(e)
var n=this.group,i=t.hostModel,o=this._data,a=this._SymbolCtor,s=e.disableAnimation,l=c(t),d={disableAnimation:s},p=e.getSymbolPoint||function(e){return t.getItemLayout(e)}
o||n.removeAll(),t.diff(o).add((function(i){var r=p(i)
if(u(t,r,i,e)){var o=new a(t,i,l,d)
o.setPosition(r),t.setItemGraphicEl(i,o),n.add(o)}})).update((function(h,c){var f=o.getItemGraphicEl(c),g=p(h)
if(u(t,g,h,e)){var y=t.getItemVisual(h,"symbol")||"circle",v=f&&f.getSymbolType&&f.getSymbolType()
if(!f||v&&v!==y)n.remove(f),(f=new a(t,h,l,d)).setPosition(g)
else{f.updateData(t,h,l,d)
var m={x:g[0],y:g[1]}
s?f.attr(m):r.oi(f,m,i)}n.add(f),t.setItemGraphicEl(h,f)}else n.remove(f)})).remove((function(t){var e=o.getItemGraphicEl(t)
e&&e.fadeOut((function(){n.remove(e)}),i)})).execute(),this._getSymbolPoint=p,this._data=t},t.prototype.updateLayout=function(){var t=this,e=this._data
e&&e.eachItemGraphicEl((function(e,n){var i=t._getSymbolPoint(n)
e.setPosition(i),e.markRedraw()}))},t.prototype.incrementalPrepareUpdate=function(t){this._seriesScope=c(t),this._data=null,this.group.removeAll()},t.prototype.incrementalUpdate=function(t,e,n){function i(t){t.isGroup||(t.incremental=!0,t.ensureState("emphasis").hoverLayer=!0)}this._progressiveEls=[],n=h(n)
for(var r=t.start;r<t.end;r++){var o=e.getItemLayout(r)
if(u(e,o,r,n)){var a=new this._SymbolCtor(e,r,this._seriesScope)
a.traverse(i),a.setPosition(o),this.group.add(a),e.setItemGraphicEl(r,a),this._progressiveEls.push(a)}}},t.prototype.eachRendered=function(t){o.traverseElements(this._progressiveEls||this.group,t)},t.prototype.remove=function(t){var e=this.group,n=this._data
n&&t?n.eachItemGraphicEl((function(t){t.fadeOut((function(){e.remove(t)}),n.hostModel)})):e.removeAll()},t}()},6702:(t,e,n)=>{n.d(e,{Ip:()=>h,Mi:()=>u,SM:()=>l})
var i=n(4130),r=n(8283),o=n(1770),a=n(3947),s=n(8301)
function l(t,e,n,o,a){var l=t.getArea(),u=l.x,h=l.y,c=l.width,d=l.height,p=n.get(["lineStyle","width"])||2
u-=p/2,h-=p/2,c+=p,d+=p,c=Math.ceil(c),u!==Math.floor(u)&&(u=Math.floor(u),c++)
var f=new i.A({shape:{x:u,y:h,width:c,height:d}})
if(e){var g=t.getBaseAxis(),y=g.isHorizontal(),v=g.inverse
y?(v&&(f.shape.x+=c),f.shape.width=0):(v||(f.shape.y+=d),f.shape.height=0)
var m=(0,s.Tn)(a)?function(t){a(t,f)}:null
r.LW(f,{shape:{width:c,height:d,x:u,y:h}},n,null,o,m)}return f}function u(t,e,n){var i=t.getArea(),s=(0,a.LI)(i.r0,1),l=(0,a.LI)(i.r,1),u=new o.A({shape:{cx:(0,a.LI)(t.cx,1),cy:(0,a.LI)(t.cy,1),r0:s,r:l,startAngle:i.startAngle,endAngle:i.endAngle,clockwise:i.clockwise}})
return e&&("angle"===t.getBaseAxis().dim?u.shape.endAngle=i.startAngle:u.shape.r=s,r.LW(u,{shape:{endAngle:i.endAngle,r:l}},n)),u}function h(t,e,n,i,r){return t?"polar"===t.type?u(t,e,n):"cartesian2d"===t.type?l(t,e,n,i,r):null:null}},2165:(t,e,n)=>{n.d(e,{A:()=>r})
var i=n(5225)
function r(){var t=(0,i.$r)()
return function(e){var n=t(e),i=e.pipelineContext,r=!!n.large,o=!!n.progressiveRender,a=n.large=!(!i||!i.large),s=n.progressiveRender=!(!i||!i.progressiveRender)
return!(r===a&&o===s)&&"reset"}}},309:(t,e,n)=>{n.d(e,{A:()=>y})
var i=n(8301),r=n(8344),o=n(8536),a=n(5157),s=n(5225),l=n(4),u=function(t){this.coordSysDims=[],this.axisMap=(0,i.nt)(),this.categoryAxisMap=(0,i.nt)(),this.coordSysName=t},h={cartesian2d:function(t,e,n,i){var r=t.getReferringComponents("xAxis",s.US).models[0],o=t.getReferringComponents("yAxis",s.US).models[0]
e.coordSysDims=["x","y"],n.set("x",r),n.set("y",o),c(r)&&(i.set("x",r),e.firstCategoryDimIndex=0),c(o)&&(i.set("y",o),null==e.firstCategoryDimIndex&&(e.firstCategoryDimIndex=1))},singleAxis:function(t,e,n,i){var r=t.getReferringComponents("singleAxis",s.US).models[0]
e.coordSysDims=["single"],n.set("single",r),c(r)&&(i.set("single",r),e.firstCategoryDimIndex=0)},polar:function(t,e,n,i){var r=t.getReferringComponents("polar",s.US).models[0],o=r.findAxisModel("radiusAxis"),a=r.findAxisModel("angleAxis")
e.coordSysDims=["radius","angle"],n.set("radius",o),n.set("angle",a),c(o)&&(i.set("radius",o),e.firstCategoryDimIndex=0),c(a)&&(i.set("angle",a),null==e.firstCategoryDimIndex&&(e.firstCategoryDimIndex=1))},geo:function(t,e,n,i){e.coordSysDims=["lng","lat"]},parallel:function(t,e,n,r){var o=t.ecModel,a=o.getComponent("parallel",t.get("parallelIndex")),s=e.coordSysDims=a.dimensions.slice();(0,i.__)(a.parallelAxisIndex,(function(t,i){var a=o.getComponent("parallelAxis",t),l=s[i]
n.set(l,a),c(a)&&(r.set(l,a),null==e.firstCategoryDimIndex&&(e.firstCategoryDimIndex=i))}))}}
function c(t){return"category"===t.get("type")}var d=n(9879),p=n(4061),f=n(6604),g=n(6233)
const y=function(t,e,n){n=n||{}
var c,y=e.getSourceManager(),v=!1
t?(v=!0,c=(0,d.AF)(t)):v=(c=y.getSource()).sourceFormat===g.mK
var m=function(t){var e=t.get("coordinateSystem"),n=new u(e),i=h[e]
if(i)return i(t,n,n.axisMap,n.categoryAxisMap),n}(e),_=function(t,e){var n,r=t.get("coordinateSystem"),o=l.A.get(r)
return e&&e.coordSysDims&&(n=i.Tj(e.coordSysDims,(function(t){var n={name:t},i=e.axisMap.get(t)
if(i){var r=i.get("type")
n.type=(0,a.B)(r)}return n}))),n||(n=o&&(o.getDimensionsInfo?o.getDimensionsInfo():o.dimensions.slice())||["x","y"]),n}(e,m),x=n.useEncodeDefaulter,b=i.Tn(x)?x:x?i.cF(f.OC,_,e):null,w={coordDimensions:_,generateCoord:n.generateCoord,encodeDefine:e.getEncode(),encodeDefaulter:b,canOmitUnusedDimensions:!v},A=(0,o.A)(c,w),S=function(t,e,n){var r,o
return n&&i.__(t,(function(t,i){var a=t.coordDim,s=n.categoryAxisMap.get(a)
s&&(null==r&&(r=i),t.ordinalMeta=s.getOrdinalMeta(),e&&(t.createInvertedIndices=!0)),null!=t.otherDims.itemName&&(o=!0)})),o||null==r||(t[r].otherDims.itemName=0),r}(A.dimensions,n.createInvertedIndices,m),M=v?null:y.getSharedDataStore(A),T=(0,p.iJ)(e,{schema:A,store:M}),I=new r.A(A,e)
I.setCalculationInfo(T)
var C=null!=S&&function(t){if(t.sourceFormat===g.mK){var e=function(t){for(var e=0;e<t.length&&null==t[e];)e++
return t[e]}(t.data||[])
return!i.cy((0,s.vj)(e))}}(c)?function(t,e,n,i){return i===S?n:this.defaultDimValueGetter(t,e,n,i)}:null
return I.hasItemOption=!1,I.initData(v?c:M,null,C),I}},4723:(t,e,n)=>{n.d(e,{T:()=>a,i:()=>o})
var i=n(4152),r=n(8301)
function o(t,e){var n=t.mapDimensionsAll("defaultedLabel"),r=n.length
if(1===r){var o=(0,i.QE)(t,e,n[0])
return null!=o?o+"":null}if(r){for(var a=[],s=0;s<n.length;s++)a.push((0,i.QE)(t,e,n[s]))
return a.join(" ")}}function a(t,e){var n=t.mapDimensionsAll("defaultedLabel")
if(!(0,r.cy)(e))return e+""
for(var i=[],o=0;o<n.length;o++){var a=t.getDimensionIndex(n[o])
a>=0&&i.push(e[a])}return i.join(" ")}},799:(t,e,n)=>{n.d(e,{i:()=>o})
var i=n(8301),r=n(7627)
function o(t,e,n){var o=t.get("borderRadius")
if(null==o)return n?{cornerRadius:0}:null;(0,i.cy)(o)||(o=[o,o,o,o])
var a=Math.abs(e.r||0-e.r0||0)
return{cornerRadius:(0,i.Tj)(o,(function(t){return(0,r.lo)(t,a)}))}}},8938:(t,e,n)=>{n.d(e,{a:()=>K})
var i=n(4784),r=n(309),o=n(3397),a=n(5478),s=n(7941)
const l=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n.hasSymbolVisual=!0,n}return(0,i.C6)(e,t),e.prototype.getInitialData=function(t){return(0,r.A)(null,this,{useEncodeDefaulter:!0})},e.prototype.getLegendIcon=function(t){var e=new s.A,n=(0,a.v5)("line",0,t.itemHeight/2,t.itemWidth,0,t.lineStyle.stroke,!1)
e.add(n),n.setStyle(t.lineStyle)
var i=this.getData().getVisual("symbol"),r=this.getData().getVisual("symbolRotate"),o="none"===i?"circle":i,l=.8*t.itemHeight,u=(0,a.v5)(o,(t.itemWidth-l)/2,(t.itemHeight-l)/2,l,l,t.itemStyle.fill)
e.add(u),u.setStyle(t.itemStyle)
var h="inherit"===t.iconRotate?r:t.iconRotate||0
return u.rotation=h*Math.PI/180,u.setOrigin([t.itemWidth/2,t.itemHeight/2]),o.indexOf("empty")>-1&&(u.style.stroke=u.style.fill,u.style.fill="#fff",u.style.lineWidth=2),e},e.type="series.line",e.dependencies=["grid","polar"],e.defaultOption={z:3,coordinateSystem:"cartesian2d",legendHoverLink:!0,clip:!0,label:{position:"top"},endLabel:{show:!1,valueAnimation:!0,distance:8},lineStyle:{width:2,type:"solid"},emphasis:{scale:!0},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0,universalTransition:{divideShape:"clone"},triggerLineEvent:!1},e}(o.A)
var u=n(8301),h=n(9167),c=n(8401),d=n(4061)
function p(t,e,n){var i=t.getBaseAxis(),r=t.getOtherAxis(i),o=function(t,e){var n=0,i=t.scale.getExtent()
return"start"===e?n=i[0]:"end"===e?n=i[1]:(0,u.Et)(e)&&!isNaN(e)?n=e:i[0]>0?n=i[0]:i[1]<0&&(n=i[1]),n}(r,n),a=i.dim,s=r.dim,l=e.mapDimension(s),h=e.mapDimension(a),c="x"===s||"radius"===s?1:0,p=(0,u.Tj)(t.dimensions,(function(t){return e.mapDimension(t)})),f=!1,g=e.getCalculationInfo("stackResultDimension")
return(0,d.sJ)(e,p[0])&&(f=!0,p[0]=g),(0,d.sJ)(e,p[1])&&(f=!0,p[1]=g),{dataDimsForPoint:p,valueStart:o,valueAxisDim:s,baseAxisDim:a,stacked:!!f,valueDim:l,baseDim:h,baseDataOffset:c,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}}function f(t,e,n,i){var r=NaN
t.stacked&&(r=n.get(n.getCalculationInfo("stackedOverDimension"),i)),isNaN(r)&&(r=t.valueStart)
var o=t.baseDataOffset,a=[]
return a[o]=n.get(t.baseDim,i),a[1-o]=r,e.dataToPoint(a)}var g=n(6228),y=n(3125),v=n(8283),m=n(5652),_=n(5225),x=n(4427),b=n(928),w=n(3906),A=Math.min,S=Math.max
function M(t,e){return isNaN(t)||isNaN(e)}function T(t,e,n,i,r,o,a,s,l){for(var u,h,c,d,p,f,g=n,y=0;y<i;y++){var v=e[2*g],m=e[2*g+1]
if(g>=r||g<0)break
if(M(v,m)){if(l){g+=o
continue}break}if(g===n)t[o>0?"moveTo":"lineTo"](v,m),c=v,d=m
else{var _=v-u,x=m-h
if(_*_+x*x<.5){g+=o
continue}if(a>0){for(var b=g+o,w=e[2*b],T=e[2*b+1];w===v&&T===m&&y<i;)y++,g+=o,w=e[2*(b+=o)],T=e[2*b+1],_=(v=e[2*g])-u,x=(m=e[2*g+1])-h
var I=y+1
if(l)for(;M(w,T)&&I<i;)I++,w=e[2*(b+=o)],T=e[2*b+1]
var C=.5,D=0,k=0,L=void 0,P=void 0
if(I>=i||M(w,T))p=v,f=m
else{D=w-u,k=T-h
var O=v-u,N=w-v,R=m-h,E=T-m,z=void 0,B=void 0
if("x"===s){var V=D>0?1:-1
p=v-V*(z=Math.abs(O))*a,f=m,L=v+V*(B=Math.abs(N))*a,P=m}else if("y"===s){var F=k>0?1:-1
p=v,f=m-F*(z=Math.abs(R))*a,L=v,P=m+F*(B=Math.abs(E))*a}else z=Math.sqrt(O*O+R*R),p=v-D*a*(1-(C=(B=Math.sqrt(N*N+E*E))/(B+z))),f=m-k*a*(1-C),P=m+k*a*C,L=A(L=v+D*a*C,S(w,v)),P=A(P,S(T,m)),L=S(L,A(w,v)),f=m-(k=(P=S(P,A(T,m)))-m)*z/B,p=A(p=v-(D=L-v)*z/B,S(u,v)),f=A(f,S(h,m)),L=v+(D=v-(p=S(p,A(u,v))))*B/z,P=m+(k=m-(f=S(f,A(h,m))))*B/z}t.bezierCurveTo(c,d,p,f,v,m),c=L,d=P}else t.lineTo(v,m)}u=v,h=m,g+=o}return y}var I=function(){this.smooth=0,this.smoothConstraint=!0},C=function(t){function e(e){var n=t.call(this,e)||this
return n.type="ec-polyline",n}return(0,i.C6)(e,t),e.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},e.prototype.getDefaultShape=function(){return new I},e.prototype.buildPath=function(t,e){var n=e.points,i=0,r=n.length/2
if(e.connectNulls){for(;r>0&&M(n[2*r-2],n[2*r-1]);r--);for(;i<r&&M(n[2*i],n[2*i+1]);i++);}for(;i<r;)i+=T(t,n,i,r,r,1,e.smooth,e.smoothMonotone,e.connectNulls)+1},e.prototype.getPointOn=function(t,e){this.path||(this.createPathProxy(),this.buildPath(this.path,this.shape))
for(var n,i,r=this.path.data,o=b.A.CMD,a="x"===e,s=[],l=0;l<r.length;){var u=void 0,h=void 0,c=void 0,d=void 0,p=void 0,f=void 0,g=void 0
switch(r[l++]){case o.M:n=r[l++],i=r[l++]
break
case o.L:if(u=r[l++],h=r[l++],(g=a?(t-n)/(u-n):(t-i)/(h-i))<=1&&g>=0){var y=a?(h-i)*g+i:(u-n)*g+n
return a?[t,y]:[y,t]}n=u,i=h
break
case o.C:u=r[l++],h=r[l++],c=r[l++],d=r[l++],p=r[l++],f=r[l++]
var v=a?(0,w._E)(n,u,c,p,t,s):(0,w._E)(i,h,d,f,t,s)
if(v>0)for(var m=0;m<v;m++){var _=s[m]
if(_<=1&&_>=0)return y=a?(0,w.Yb)(i,h,d,f,_):(0,w.Yb)(n,u,c,p,_),a?[t,y]:[y,t]}n=p,i=f}}},e}(x.Ay),D=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i.C6)(e,t),e}(I),k=function(t){function e(e){var n=t.call(this,e)||this
return n.type="ec-polygon",n}return(0,i.C6)(e,t),e.prototype.getDefaultShape=function(){return new D},e.prototype.buildPath=function(t,e){var n=e.points,i=e.stackedOnPoints,r=0,o=n.length/2,a=e.smoothMonotone
if(e.connectNulls){for(;o>0&&M(n[2*o-2],n[2*o-1]);o--);for(;r<o&&M(n[2*r],n[2*r+1]);r++);}for(;r<o;){var s=T(t,n,r,o,o,1,e.smooth,a,e.connectNulls)
T(t,i,r+s-1,s,o,-1,e.stackedOnSmooth,a,e.connectNulls),r+=s+1,t.closePath()}},e}(x.Ay),L=n(1993),P=n(6702),O=n(6534),N=n(200),R=n(923),E=n(4723),z=n(1323),B=n(3473),V=n(7435)
function F(t,e){if(t.length===e.length){for(var n=0;n<t.length;n++)if(t[n]!==e[n])return
return!0}}function W(t){for(var e=1/0,n=1/0,i=-1/0,r=-1/0,o=0;o<t.length;){var a=t[o++],s=t[o++]
isNaN(a)||(e=Math.min(a,e),i=Math.max(a,i)),isNaN(s)||(n=Math.min(s,n),r=Math.max(s,r))}return[[e,n],[i,r]]}function H(t,e){var n=W(t),i=n[0],r=n[1],o=W(e),a=o[0],s=o[1]
return Math.max(Math.abs(i[0]-a[0]),Math.abs(i[1]-a[1]),Math.abs(r[0]-s[0]),Math.abs(r[1]-s[1]))}function G(t){return u.Et(t)?t:t?.5:0}function j(t,e,n,i){var r=e.getBaseAxis(),o="x"===r.dim||"radius"===r.dim?0:1,a=[],s=0,l=[],u=[],h=[],c=[]
if(i){for(s=0;s<t.length;s+=2)isNaN(t[s])||isNaN(t[s+1])||c.push(t[s],t[s+1])
t=c}for(s=0;s<t.length-2;s+=2)switch(h[0]=t[s+2],h[1]=t[s+3],u[0]=t[s],u[1]=t[s+1],a.push(u[0],u[1]),n){case"end":l[o]=h[o],l[1-o]=u[1-o],a.push(l[0],l[1])
break
case"middle":var d=(u[o]+h[o])/2,p=[]
l[o]=p[o]=d,l[1-o]=u[1-o],p[1-o]=h[1-o],a.push(l[0],l[1]),a.push(p[0],p[1])
break
default:l[o]=u[o],l[1-o]=h[1-o],a.push(l[0],l[1])}return a.push(t[s++],t[s++]),a}function X(t,e){return[t[2*e],t[2*e+1]]}function Y(t){if(t.get(["endLabel","show"]))return!0
for(var e=0;e<N.BV.length;e++)if(t.get([N.BV[e],"endLabel","show"]))return!0
return!1}function U(t,e,n,i){if((0,O.g)(e,"cartesian2d")){var r=i.getModel("endLabel"),o=r.get("valueAnimation"),a=i.getData(),s={lastFrameIndex:0},l=Y(i)?function(n,i){t._endLabelOnDuring(n,i,a,s,o,r,e)}:null,u=e.getBaseAxis().isHorizontal(),h=(0,P.SM)(e,n,i,(function(){var e=t._endLabel
e&&n&&null!=s.originalX&&e.attr({x:s.originalX,y:s.originalY})}),l)
if(!i.get("clip",!0)){var c=h.shape,d=Math.max(c.width,c.height)
u?(c.y-=d,c.height+=2*d):(c.x-=d,c.width+=2*d)}return l&&l(1,h),h}return(0,P.Mi)(e,n,i)}const Z=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i.C6)(e,t),e.prototype.init=function(){var t=new s.A,e=new h.A
this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},e.prototype.render=function(t,e,n){var i=this,r=t.coordinateSystem,o=this.group,a=t.getData(),s=t.getModel("lineStyle"),l=t.getModel("areaStyle"),h=a.getLayout("points")||[],d="polar"===r.type,m=this._coordSys,_=this._symbolDraw,x=this._polyline,b=this._polygon,w=this._lineGroup,A=!e.ssr&&t.get("animation"),S=!l.isEmpty(),M=l.get("origin"),T=p(r,a,M),I=S&&function(t,e,n){if(!n.valueDim)return[]
for(var i=e.count(),r=(0,g.J)(2*i),o=0;o<i;o++){var a=f(n,t,e,o)
r[2*o]=a[0],r[2*o+1]=a[1]}return r}(r,a,T),C=t.get("showSymbol"),D=t.get("connectNulls"),k=C&&!d&&function(t,e,n){var i=t.get("showAllSymbol"),r="auto"===i
if(!i||r){var o=n.getAxesByScale("ordinal")[0]
if(o&&(!r||!function(t,e){var n=t.getExtent(),i=Math.abs(n[1]-n[0])/t.scale.count()
isNaN(i)&&(i=0)
for(var r=e.count(),o=Math.max(1,Math.round(r/5)),a=0;a<r;a+=o)if(1.5*c.A.getSymbolSize(e,a)[t.isHorizontal()?1:0]>i)return!1
return!0}(o,e))){var a=e.mapDimension(o.dim),s={}
return u.__(o.getViewLabels(),(function(t){var e=o.scale.getRawOrdinalNumber(t.tickValue)
s[e]=1})),function(t){return!s.hasOwnProperty(e.get(a,t))}}}}(t,a,r),L=this._data
L&&L.eachItemGraphicEl((function(t,e){t.__temp&&(o.remove(t),L.setItemGraphicEl(e,null))})),C||_.remove(),o.add(w)
var P,O=!d&&t.get("step")
r&&r.getArea&&t.get("clip",!0)&&(null!=(P=r.getArea()).width?(P.x-=.1,P.y-=.1,P.width+=.2,P.height+=.2):P.r0&&(P.r0-=.5,P.r+=.5)),this._clipShapeForSymbol=P
var R=function(t,e,n){var i=t.getVisual("visualMeta")
if(i&&i.length&&t.count()&&"cartesian2d"===e.type){for(var r,o,a=i.length-1;a>=0;a--){var s=t.getDimensionInfo(i[a].dimension)
if("x"===(r=s&&s.coordDim)||"y"===r){o=i[a]
break}}if(o){var l=e.getAxis(r),h=u.Tj(o.stops,(function(t){return{coord:l.toGlobalCoord(l.dataToCoord(t.value)),color:t.color}})),c=h.length,d=o.outerColors.slice()
c&&h[0].coord>h[c-1].coord&&(h.reverse(),d.reverse())
var p=function(t,e){var n,i,r=[],o=t.length
function a(t,e,n){var i=t.coord,r=(n-i)/(e.coord-i)
return{coord:n,color:(0,V.Cc)(r,[t.color,e.color])}}for(var s=0;s<o;s++){var l=t[s],u=l.coord
if(u<0)n=l
else{if(u>e){i?r.push(a(i,l,e)):n&&r.push(a(n,l,0),a(n,l,e))
break}n&&(r.push(a(n,l,0)),n=null),r.push(l),i=l}}return r}(h,"x"===r?n.getWidth():n.getHeight()),f=p.length
if(!f&&c)return h[0].coord<0?d[1]?d[1]:h[c-1].color:d[0]?d[0]:h[0].color
var g=p[0].coord-10,v=p[f-1].coord+10,m=v-g
if(m<.001)return"transparent"
u.__(p,(function(t){t.offset=(t.coord-g)/m})),p.push({offset:f?p[f-1].offset:.5,color:d[1]||"transparent"}),p.unshift({offset:f?p[0].offset:.5,color:d[0]||"transparent"})
var _=new y.A(0,0,0,0,p,!0)
return _[r]=g,_[r+"2"]=v,_}}}(a,r,n)||a.getVisual("style")[a.getVisual("drawType")]
if(x&&m.type===r.type&&O===this._step){S&&!b?b=this._newPolygon(h,I):b&&!S&&(w.remove(b),b=this._polygon=null),d||this._initOrUpdateEndLabel(t,r,(0,B.he)(R))
var E=w.getClipPath()
if(E){var W=U(this,r,!1,t)
v.LW(E,{shape:W.shape},t)}else w.setClipPath(U(this,r,!0,t))
C&&_.updateData(a,{isIgnore:k,clipShape:P,disableAnimation:!0,getSymbolPoint:function(t){return[h[2*t],h[2*t+1]]}}),F(this._stackedOnPoints,I)&&F(this._points,h)||(A?this._doUpdateAnimation(a,I,r,n,O,M,D):(O&&(h=j(h,r,O,D),I&&(I=j(I,r,O,D))),x.setShape({points:h}),b&&b.setShape({points:h,stackedOnPoints:I})))}else C&&_.updateData(a,{isIgnore:k,clipShape:P,disableAnimation:!0,getSymbolPoint:function(t){return[h[2*t],h[2*t+1]]}}),A&&this._initSymbolLabelAnimation(a,r,P),O&&(h=j(h,r,O,D),I&&(I=j(I,r,O,D))),x=this._newPolyline(h),S?b=this._newPolygon(h,I):b&&(w.remove(b),b=this._polygon=null),d||this._initOrUpdateEndLabel(t,r,(0,B.he)(R)),w.setClipPath(U(this,r,!0,t))
var H=t.getModel("emphasis"),X=H.get("focus"),Y=H.get("blurScope"),Z=H.get("disabled")
x.useStyle(u.NT(s.getLineStyle(),{fill:"none",stroke:R,lineJoin:"bevel"})),(0,N.Mx)(x,t,"lineStyle"),x.style.lineWidth>0&&"bolder"===t.get(["emphasis","lineStyle","width"])&&(x.getState("emphasis").style.lineWidth=+x.style.lineWidth+1),(0,z.z)(x).seriesIndex=t.seriesIndex,(0,N.Lm)(x,X,Y,Z)
var $=G(t.get("smooth")),q=t.get("smoothMonotone")
if(x.setShape({smooth:$,smoothMonotone:q,connectNulls:D}),b){var K=a.getCalculationInfo("stackedOnSeries"),Q=0
b.useStyle(u.NT(l.getAreaStyle(),{fill:R,opacity:.7,lineJoin:"bevel",decal:a.getVisual("style").decal})),K&&(Q=G(K.get("smooth"))),b.setShape({smooth:$,stackedOnSmooth:Q,smoothMonotone:q,connectNulls:D}),(0,N.Mx)(b,t,"areaStyle"),(0,z.z)(b).seriesIndex=t.seriesIndex,(0,N.Lm)(b,X,Y,Z)}var J=function(t){i._changePolyState(t)}
a.eachItemGraphicEl((function(t){t&&(t.onHoverStateChange=J)})),this._polyline.onHoverStateChange=J,this._data=a,this._coordSys=r,this._stackedOnPoints=I,this._points=h,this._step=O,this._valueOrigin=M,t.get("triggerLineEvent")&&(this.packEventData(t,x),b&&this.packEventData(t,b))},e.prototype.packEventData=function(t,e){(0,z.z)(e).eventData={componentType:"series",componentSubType:"line",componentIndex:t.componentIndex,seriesIndex:t.seriesIndex,seriesName:t.name,seriesType:"line"}},e.prototype.highlight=function(t,e,n,i){var r=t.getData(),o=_.le(r,i)
if(this._changePolyState("emphasis"),!(o instanceof Array)&&null!=o&&o>=0){var a=r.getLayout("points"),s=r.getItemGraphicEl(o)
if(!s){var l=a[2*o],u=a[2*o+1]
if(isNaN(l)||isNaN(u))return
if(this._clipShapeForSymbol&&!this._clipShapeForSymbol.contain(l,u))return
var h=t.get("zlevel")||0,d=t.get("z")||0;(s=new c.A(r,o)).x=l,s.y=u,s.setZ(h,d)
var p=s.getSymbolPath().getTextContent()
p&&(p.zlevel=h,p.z=d,p.z2=this._polyline.z2+1),s.__temp=!0,r.setItemGraphicEl(o,s),s.stopSymbolAnimation(!0),this.group.add(s)}s.highlight()}else L.A.prototype.highlight.call(this,t,e,n,i)},e.prototype.downplay=function(t,e,n,i){var r=t.getData(),o=_.le(r,i)
if(this._changePolyState("normal"),null!=o&&o>=0){var a=r.getItemGraphicEl(o)
a&&(a.__temp?(r.setItemGraphicEl(o,null),this.group.remove(a)):a.downplay())}else L.A.prototype.downplay.call(this,t,e,n,i)},e.prototype._changePolyState=function(t){var e=this._polygon;(0,N.Pk)(this._polyline,t),e&&(0,N.Pk)(e,t)},e.prototype._newPolyline=function(t){var e=this._polyline
return e&&this._lineGroup.remove(e),e=new C({shape:{points:t},segmentIgnoreThreshold:2,z2:10}),this._lineGroup.add(e),this._polyline=e,e},e.prototype._newPolygon=function(t,e){var n=this._polygon
return n&&this._lineGroup.remove(n),n=new k({shape:{points:t,stackedOnPoints:e},segmentIgnoreThreshold:2}),this._lineGroup.add(n),this._polygon=n,n},e.prototype._initSymbolLabelAnimation=function(t,e,n){var i,r,o=e.getBaseAxis(),a=o.inverse
"cartesian2d"===e.type?(i=o.isHorizontal(),r=!1):"polar"===e.type&&(i="angle"===o.dim,r=!0)
var s=t.hostModel,l=s.get("animationDuration")
u.Tn(l)&&(l=l(null))
var h=s.get("animationDelay")||0,c=u.Tn(h)?h(null):h
t.eachItemGraphicEl((function(t,o){var s=t
if(s){var d=[t.x,t.y],p=void 0,f=void 0,g=void 0
if(n)if(r){var y=n,v=e.pointToCoord(d)
i?(p=y.startAngle,f=y.endAngle,g=-v[1]/180*Math.PI):(p=y.r0,f=y.r,g=v[0])}else{var m=n
i?(p=m.x,f=m.x+m.width,g=t.x):(p=m.y+m.height,f=m.y,g=t.y)}var _=f===p?0:(g-p)/(f-p)
a&&(_=1-_)
var x=u.Tn(h)?h(o):l*_+c,b=s.getSymbolPath(),w=b.getTextContent()
s.attr({scaleX:0,scaleY:0}),s.animateTo({scaleX:1,scaleY:1},{duration:200,setToFinal:!0,delay:x}),w&&w.animateFrom({style:{opacity:0}},{duration:300,delay:x}),b.disableLabelAnimation=!0}}))},e.prototype._initOrUpdateEndLabel=function(t,e,n){var i=t.getModel("endLabel")
if(Y(t)){var r=t.getData(),o=this._polyline,a=r.getLayout("points")
if(!a)return o.removeTextContent(),void(this._endLabel=null)
var s=this._endLabel
s||((s=this._endLabel=new m.Ay({z2:200})).ignoreClip=!0,o.setTextContent(this._endLabel),o.disableLabelAnimation=!0)
var l=function(t){for(var e,n,i=t.length/2;i>0&&(e=t[2*i-2],n=t[2*i-1],isNaN(e)||isNaN(n));i--);return i-1}(a)
l>=0&&((0,R.qM)(o,(0,R.lx)(t,"endLabel"),{inheritColor:n,labelFetcher:t,labelDataIndex:l,defaultText:function(t,e,n){return null!=n?(0,E.T)(r,n):(0,E.i)(r,t)},enableTextSetter:!0},function(t,e){var n=e.getBaseAxis(),i=n.isHorizontal(),r=n.inverse,o=i?r?"right":"left":"center",a=i?"middle":r?"top":"bottom"
return{normal:{align:t.get("align")||o,verticalAlign:t.get("verticalAlign")||a}}}(i,e)),o.textConfig.position=null)}else this._endLabel&&(this._polyline.removeTextContent(),this._endLabel=null)},e.prototype._endLabelOnDuring=function(t,e,n,i,r,o,a){var s=this._endLabel,l=this._polyline
if(s){t<1&&null==i.originalX&&(i.originalX=s.x,i.originalY=s.y)
var u=n.getLayout("points"),h=n.hostModel,c=h.get("connectNulls"),d=o.get("precision"),p=o.get("distance")||0,f=a.getBaseAxis(),g=f.isHorizontal(),y=f.inverse,v=e.shape,m=y?g?v.x:v.y+v.height:g?v.x+v.width:v.y,x=(g?p:0)*(y?-1:1),b=(g?0:-p)*(y?-1:1),w=g?"x":"y",A=function(t,e,n){for(var i,r,o=t.length/2,a="x"===n?0:1,s=0,l=-1,u=0;u<o;u++)if(r=t[2*u+a],!isNaN(r)&&!isNaN(t[2*u+1-a]))if(0!==u){if(i<=e&&r>=e||i>=e&&r<=e){l=u
break}s=u,i=r}else i=r
return{range:[s,l],t:(e-i)/(r-i)}}(u,m,w),S=A.range,M=S[1]-S[0],T=void 0
if(M>=1){if(M>1&&!c){var I=X(u,S[0])
s.attr({x:I[0]+x,y:I[1]+b}),r&&(T=h.getRawValue(S[0]))}else{(I=l.getPointOn(m,w))&&s.attr({x:I[0]+x,y:I[1]+b})
var C=h.getRawValue(S[0]),D=h.getRawValue(S[1])
r&&(T=_.Il(n,d,C,D,A.t))}i.lastFrameIndex=S[0]}else{var k=1===t||i.lastFrameIndex>0?S[0]:0
I=X(u,k),r&&(T=h.getRawValue(k)),s.attr({x:I[0]+x,y:I[1]+b})}if(r){var L=(0,R.Lu)(s)
"function"==typeof L.setLabelText&&L.setLabelText(T)}}},e.prototype._doUpdateAnimation=function(t,e,n,i,r,o,a){var s=this._polyline,l=this._polygon,u=t.hostModel,h=function(t,e,n,i,r,o,a){for(var s=function(t,e){var n=[]
return e.diff(t).add((function(t){n.push({cmd:"+",idx:t})})).update((function(t,e){n.push({cmd:"=",idx:e,idx1:t})})).remove((function(t){n.push({cmd:"-",idx:t})})).execute(),n}(t,e),l=[],u=[],h=[],c=[],d=[],y=[],v=[],m=p(r,e,a),_=t.getLayout("points")||[],x=e.getLayout("points")||[],b=0;b<s.length;b++){var w=s[b],A=!0,S=void 0,M=void 0
switch(w.cmd){case"=":S=2*w.idx,M=2*w.idx1
var T=_[S],I=_[S+1],C=x[M],D=x[M+1];(isNaN(T)||isNaN(I))&&(T=C,I=D),l.push(T,I),u.push(C,D),h.push(n[S],n[S+1]),c.push(i[M],i[M+1]),v.push(e.getRawIndex(w.idx1))
break
case"+":var k=w.idx,L=m.dataDimsForPoint,P=r.dataToPoint([e.get(L[0],k),e.get(L[1],k)])
M=2*k,l.push(P[0],P[1]),u.push(x[M],x[M+1])
var O=f(m,r,e,k)
h.push(O[0],O[1]),c.push(i[M],i[M+1]),v.push(e.getRawIndex(k))
break
case"-":A=!1}A&&(d.push(w),y.push(y.length))}y.sort((function(t,e){return v[t]-v[e]}))
var N=l.length,R=(0,g.J)(N),E=(0,g.J)(N),z=(0,g.J)(N),B=(0,g.J)(N),V=[]
for(b=0;b<y.length;b++){var F=y[b],W=2*b,H=2*F
R[W]=l[H],R[W+1]=l[H+1],E[W]=u[H],E[W+1]=u[H+1],z[W]=h[H],z[W+1]=h[H+1],B[W]=c[H],B[W+1]=c[H+1],V[b]=d[F]}return{current:R,next:E,stackedOnCurrent:z,stackedOnNext:B,status:V}}(this._data,t,this._stackedOnPoints,e,this._coordSys,0,this._valueOrigin),c=h.current,d=h.stackedOnCurrent,y=h.next,m=h.stackedOnNext
if(r&&(c=j(h.current,n,r,a),d=j(h.stackedOnCurrent,n,r,a),y=j(h.next,n,r,a),m=j(h.stackedOnNext,n,r,a)),H(c,y)>3e3||l&&H(d,m)>3e3)return s.stopAnimation(),s.setShape({points:y}),void(l&&(l.stopAnimation(),l.setShape({points:y,stackedOnPoints:m})))
s.shape.__points=h.current,s.shape.points=c
var _={shape:{points:y}}
h.current!==c&&(_.shape.__points=h.next),s.stopAnimation(),v.oi(s,_,u),l&&(l.setShape({points:c,stackedOnPoints:d}),l.stopAnimation(),v.oi(l,{shape:{stackedOnPoints:m}},u),s.shape.points!==l.shape.points&&(l.shape.points=s.shape.points))
for(var x=[],b=h.status,w=0;w<b.length;w++)if("="===b[w].cmd){var A=t.getItemGraphicEl(b[w].idx1)
A&&x.push({el:A,ptIdx:w})}s.animators&&s.animators.length&&s.animators[0].during((function(){l&&l.dirtyShape()
for(var t=s.shape.__points,e=0;e<x.length;e++){var n=x[e].el,i=2*x[e].ptIdx
n.x=t[i],n.y=t[i+1],n.markRedraw()}}))},e.prototype.remove=function(t){var e=this.group,n=this._data
this._lineGroup.removeAll(),this._symbolDraw.remove(!0),n&&n.eachItemGraphicEl((function(t,i){t.__temp&&(e.remove(t),n.setItemGraphicEl(i,null))})),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._endLabel=this._data=null},e.type="line",e}(L.A)
var $=n(2165),q=n(5784)
function K(t){t.registerChartView(Z),t.registerSeriesModel(l),t.registerLayout({seriesType:"line",plan:(0,$.A)(),reset:function(t){var e=t.getData(),n=t.coordinateSystem
if(t.pipelineContext,n){var i=(0,u.Tj)(n.dimensions,(function(t){return e.mapDimension(t)})).slice(0,2),r=i.length,o=e.getCalculationInfo("stackResultDimension");(0,d.sJ)(e,i[0])&&(i[0]=o),(0,d.sJ)(e,i[1])&&(i[1]=o)
var a=e.getStore(),s=e.getDimensionIndex(i[0]),l=e.getDimensionIndex(i[1])
return r&&{progress:function(t,e){for(var i=t.end-t.start,o=(0,g.J)(i*r),u=[],h=[],c=t.start,d=0;c<t.end;c++){var p=void 0
if(1===r){var f=a.get(s,c)
p=n.dataToPoint(f,null,h)}else u[0]=a.get(s,c),u[1]=a.get(l,c),p=n.dataToPoint(u,null,h)
o[d++]=p[0],o[d++]=p[1]}e.setLayout("points",o)}}}}}),t.registerVisual({seriesType:"line",reset:function(t){var e=t.getData(),n=t.getModel("lineStyle").getLineStyle()
n&&!n.stroke&&(n.stroke=e.getVisual("style").fill),e.setVisual("legendLineStyle",n)}}),t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC,(0,q.A)("line"))}},7896:(t,e,n)=>{n.d(e,{a:()=>Q})
var i=n(5493),r=n(3947),o=n(3960),a=n(8301),s=n(928),l=n(5225),u=2*Math.PI,h=Math.PI/180
function c(t,e){return o.dV(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()})}function d(t,e){var n=c(t,e),i=t.get("center"),o=t.get("radius")
a.cy(o)||(o=[0,o])
var s,l,u=(0,r.lo)(n.width,e.getWidth()),h=(0,r.lo)(n.height,e.getHeight()),d=Math.min(u,h),p=(0,r.lo)(o[0],d/2),f=(0,r.lo)(o[1],d/2),g=t.coordinateSystem
if(g){var y=g.dataToPoint(i)
s=y[0]||0,l=y[1]||0}else a.cy(i)||(i=[i,i]),s=(0,r.lo)(i[0],u)+n.x,l=(0,r.lo)(i[1],h)+n.y
return{cx:s,cy:l,r0:p,r:f}}function p(t,e,n){e.eachSeriesByType(t,(function(t){var e=t.getData(),i=e.mapDimension("value"),o=c(t,n),a=d(t,n),l=a.cx,p=a.cy,g=a.r,y=a.r0,v=-t.get("startAngle")*h,m=t.get("endAngle"),_=t.get("padAngle")*h
m="auto"===m?v-u:-m*h
var x=t.get("minAngle")*h+_,b=0
e.each(i,(function(t){!isNaN(t)&&b++}))
var w=e.getSum(i),A=Math.PI/(w||b)*2,S=t.get("clockwise"),M=t.get("roseType"),T=t.get("stillShowZeroSum"),I=e.getDataExtent(i)
I[0]=0
var C=S?1:-1,D=[v,m],k=C*_/2;(0,s.q)(D,!S),v=D[0],m=D[1]
var L=f(t)
L.startAngle=v,L.endAngle=m,L.clockwise=S
var P=Math.abs(m-v),O=P,N=0,R=v
if(e.setLayout({viewRect:o,r:g}),e.each(i,(function(t,n){var i
if(isNaN(t))e.setItemLayout(n,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:S,cx:l,cy:p,r0:y,r:M?NaN:g})
else{(i="area"!==M?0===w&&T?A:t*A:P/b)<x?(i=x,O-=x):N+=t
var o=R+C*i,a=0,s=0
_>i?s=a=R+C*i/2:(a=R+k,s=o-k),e.setItemLayout(n,{angle:i,startAngle:a,endAngle:s,clockwise:S,cx:l,cy:p,r0:y,r:M?(0,r.Cb)(t,I,[y,g]):g}),R=o}})),O<u&&b)if(O<=.001){var E=P/b
e.each(i,(function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n)
i.angle=E
var r=0,o=0
E<_?o=r=v+C*(n+.5)*E:(r=v+C*n*E+k,o=v+C*(n+1)*E-k),i.startAngle=r,i.endAngle=o}}))}else A=O/N,R=v,e.each(i,(function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n),r=i.angle===x?x:t*A,o=0,a=0
r<_?a=o=R+C*r/2:(o=R+k,a=R+C*r-k),i.startAngle=o,i.endAngle=a,R+=C*r}}))}))}var f=(0,l.$r)(),g=n(4784),y=n(5652),v=n(8283),m=n(6826),_=n(1770),x=n(200),b=n(1993),w=n(1655),A=n(1150)
function S(t,e,n,i,r,o,a,s){var l=r-t,u=o-e,h=n-t,c=i-e,d=Math.sqrt(h*h+c*c),p=(l*(h/=d)+u*(c/=d))/d
s&&(p=Math.min(Math.max(p,0),1)),p*=d
var f=a[0]=t+p*h,g=a[1]=e+p*c
return Math.sqrt((f-r)*(f-r)+(g-o)*(g-o))}Math.PI,s.A.CMD
var M=new w.A,T=new w.A,I=new w.A,C=new w.A,D=new w.A,k=[],L=new w.A
function P(t,e){if(e<=180&&e>0){e=e/180*Math.PI,M.fromArray(t[0]),T.fromArray(t[1]),I.fromArray(t[2]),w.A.sub(C,M,T),w.A.sub(D,I,T)
var n=C.len(),i=D.len()
if(!(n<.001||i<.001)){C.scale(1/n),D.scale(1/i)
var r=C.dot(D)
if(Math.cos(e)<r){var o=S(T.x,T.y,I.x,I.y,M.x,M.y,k,!1)
L.fromArray(k),L.scaleAndAdd(D,o/Math.tan(Math.PI-e))
var a=I.x!==T.x?(L.x-T.x)/(I.x-T.x):(L.y-T.y)/(I.y-T.y)
if(isNaN(a))return
a<0?w.A.copy(L,T):a>1&&w.A.copy(L,I),L.toArray(t[1])}}}}function O(t,e,n){if(n<=180&&n>0){n=n/180*Math.PI,M.fromArray(t[0]),T.fromArray(t[1]),I.fromArray(t[2]),w.A.sub(C,T,M),w.A.sub(D,I,T)
var i=C.len(),r=D.len()
if(!(i<.001||r<.001)&&(C.scale(1/i),D.scale(1/r),C.dot(e)<Math.cos(n))){var o=S(T.x,T.y,I.x,I.y,M.x,M.y,k,!1)
L.fromArray(k)
var a=Math.PI/2,s=a+Math.acos(D.dot(e))-n
if(s>=a)w.A.copy(L,I)
else{L.scaleAndAdd(D,o/Math.tan(Math.PI/2-s))
var l=I.x!==T.x?(L.x-T.x)/(I.x-T.x):(L.y-T.y)/(I.y-T.y)
if(isNaN(l))return
l<0?w.A.copy(L,T):l>1&&w.A.copy(L,I)}L.toArray(t[1])}}}function N(t,e,n,i){var r="normal"===n,o=r?t:t.ensureState(n)
o.ignore=e
var a=i.get("smooth")
a&&!0===a&&(a=.3),o.shape=o.shape||{},a>0&&(o.shape.smooth=a)
var s=i.getModel("lineStyle").getLineStyle()
r?t.useStyle(s):o.style=s}function R(t,e){var n=e.smooth,i=e.points
if(i)if(t.moveTo(i[0][0],i[0][1]),n>0&&i.length>=3){var r=A.xg(i[0],i[1]),o=A.xg(i[1],i[2])
if(!r||!o)return t.lineTo(i[1][0],i[1][1]),void t.lineTo(i[2][0],i[2][1])
var a=Math.min(r,o)*n,s=A.Cc([],i[1],i[0],a/r),l=A.Cc([],i[1],i[2],a/o),u=A.Cc([],s,l,.5)
t.bezierCurveTo(s[0],s[1],s[0],s[1],u[0],u[1]),t.bezierCurveTo(l[0],l[1],l[0],l[1],i[2][0],i[2][1])}else for(var h=1;h<i.length;h++)t.lineTo(i[h][0],i[h][1])}var E=n(7786),z=Math.PI/180
function B(t,e,n,i,r,o,a,s,l,u){if(!(t.length<2)){for(var h=t.length,c=0;c<h;c++)if("outer"===t[c].position&&"labelLine"===t[c].labelAlignTo){var d=t[c].label.x-u
t[c].linePoints[1][0]+=d,t[c].label.x=u}(0,E.Xe)(t,l,l+a)&&function(t){for(var o={list:[],maxY:0},a={list:[],maxY:0},s=0;s<t.length;s++)if("none"===t[s].labelAlignTo){var l=t[s],u=l.label.y>n?a:o,h=Math.abs(l.label.y-n)
if(h>=u.maxY){var c=l.label.x-e-l.len2*r,d=i+l.len,f=Math.abs(c)<d?Math.sqrt(h*h/(1-c*c/d/d)):d
u.rB=f,u.maxY=h}u.list.push(l)}p(o),p(a)}(t)}function p(t){for(var o=t.rB,a=o*o,s=0;s<t.list.length;s++){var l=t.list[s],u=Math.abs(l.label.y-n),h=i+l.len,c=h*h,d=Math.sqrt((1-Math.abs(u*u/a))*c),p=e+(d+l.len2)*r,f=p-l.label.x
V(l,l.targetTextWidth-f*r,!0),l.label.x=p}}}function V(t,e,n){if(void 0===n&&(n=!1),null==t.labelStyleWidth){var i=t.label,r=i.style,o=t.rect,a=r.backgroundColor,s=r.padding,l=s?s[1]+s[3]:0,u=r.overflow,h=o.width+(a?0:l)
if(e<h||n){var c=o.height
if(u&&u.match("break")){i.setStyle("backgroundColor",null),i.setStyle("width",e-l)
var d=i.getBoundingRect()
i.setStyle("width",Math.ceil(d.width)),i.setStyle("backgroundColor",a)}else{var p=e-l,f=e<h?p:n?p>t.unconstrainedWidth?null:p:null
i.setStyle("width",f)}var g=i.getBoundingRect()
o.width=g.width
var y=(i.style.margin||0)+2.1
o.height=g.height+y,o.y-=(o.height-c)/2}}}function F(t){return"center"===t.position}var W=n(923),H=n(799),G=function(t){function e(e,n,i){var r=t.call(this)||this
r.z2=2
var o=new y.Ay
return r.setTextContent(o),r.updateData(e,n,i,!0),r}return(0,g.C6)(e,t),e.prototype.updateData=function(t,e,n,i){var r=this,o=t.hostModel,s=t.getItemModel(e),l=s.getModel("emphasis"),u=t.getItemLayout(e),h=(0,a.X$)((0,H.i)(s.getModel("itemStyle"),u,!0),u)
if(isNaN(h.startAngle))r.setShape(h)
else{if(i){r.setShape(h)
var c=o.getShallow("animationType")
o.ecModel.ssr?(v.LW(r,{scaleX:0,scaleY:0},o,{dataIndex:e,isFrom:!0}),r.originX=h.cx,r.originY=h.cy):"scale"===c?(r.shape.r=u.r0,v.LW(r,{shape:{r:u.r}},o,e)):null!=n?(r.setShape({startAngle:n,endAngle:n}),v.LW(r,{shape:{startAngle:u.startAngle,endAngle:u.endAngle}},o,e)):(r.shape.endAngle=u.startAngle,v.oi(r,{shape:{endAngle:u.endAngle}},o,e))}else(0,v.ap)(r),v.oi(r,{shape:h},o,e)
r.useStyle(t.getItemVisual(e,"style")),(0,x.Mx)(r,s)
var d=(u.startAngle+u.endAngle)/2,p=o.get("selectedOffset"),f=Math.cos(d)*p,g=Math.sin(d)*p,y=s.getShallow("cursor")
y&&r.attr("cursor",y),this._updateLabel(o,t,e),r.ensureState("emphasis").shape=(0,a.X$)({r:u.r+(l.get("scale")&&l.get("scaleSize")||0)},(0,H.i)(l.getModel("itemStyle"),u)),(0,a.X$)(r.ensureState("select"),{x:f,y:g,shape:(0,H.i)(s.getModel(["select","itemStyle"]),u)}),(0,a.X$)(r.ensureState("blur"),{shape:(0,H.i)(s.getModel(["blur","itemStyle"]),u)})
var m=r.getTextGuideLine(),_=r.getTextContent()
m&&(0,a.X$)(m.ensureState("select"),{x:f,y:g}),(0,a.X$)(_.ensureState("select"),{x:f,y:g}),(0,x.Lm)(this,l.get("focus"),l.get("blurScope"),l.get("disabled"))}},e.prototype._updateLabel=function(t,e,n){var i=this,r=e.getItemModel(n),o=r.getModel("labelLine"),s=e.getItemVisual(n,"style"),l=s&&s.fill,u=s&&s.opacity;(0,W.qM)(i,(0,W.lx)(r),{labelFetcher:e.hostModel,labelDataIndex:n,inheritColor:l,defaultOpacity:u,defaultText:t.getFormattedLabel(n,"normal")||e.getName(n)})
var h=i.getTextContent()
i.setTextConfig({position:null,rotation:null}),h.attr({z2:10})
var c=t.get(["label","position"])
if("outside"!==c&&"outer"!==c)i.removeTextGuideLine()
else{var d=this.getTextGuideLine()
d||(d=new m.A,this.setTextGuideLine(d)),function(t,e,n){var i=t.getTextGuideLine(),r=t.getTextContent()
if(r){for(var o=e.normal,s=o.get("show"),l=r.ignore,u=0;u<x.wV.length;u++){var h=x.wV[u],c=e[h],d="normal"===h
if(c){var p=c.get("show")
if((d?l:(0,a.bZ)(r.states[h]&&r.states[h].ignore,l))||!(0,a.bZ)(p,s)){var f=d?i:i&&i.states[h]
f&&(f.ignore=!0),i&&N(i,!0,h,c)
continue}i||(i=new m.A,t.setTextGuideLine(i),d||!l&&s||N(i,!0,"normal",e.normal),t.stateProxy&&(i.stateProxy=t.stateProxy)),N(i,!1,h,c)}}if(i){(0,a.NT)(i.style,n),i.style.fill=null
var g=o.get("showAbove");(t.textGuideLineConfig=t.textGuideLineConfig||{}).showAbove=g||!1,i.buildPath=R}}else i&&t.removeTextGuideLine()}(this,function(t,e){e=e||"labelLine"
for(var n={normal:t.getModel(e)},i=0;i<x.BV.length;i++){var r=x.BV[i]
n[r]=t.getModel([r,e])}return n}(r),{stroke:l,opacity:(0,a.WV)(o.get(["lineStyle","opacity"]),u,1)})}},e}(_.A)
const j=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this
return e.ignoreLabelLineUpdate=!0,e}return(0,g.C6)(e,t),e.prototype.render=function(t,e,n,i){var o,s=t.getData(),l=this._data,u=this.group
if(!l&&s.count()>0){for(var h=s.getItemLayout(0),c=1;isNaN(h&&h.startAngle)&&c<s.count();++c)h=s.getItemLayout(c)
h&&(o=h.startAngle)}if(this._emptyCircleSector&&u.remove(this._emptyCircleSector),0===s.count()&&t.get("showEmptyCircle")){var p=f(t),g=new _.A({shape:(0,a.X$)(d(t,n),p)})
g.useStyle(t.getModel("emptyCircleStyle").getItemStyle()),this._emptyCircleSector=g,u.add(g)}s.diff(l).add((function(t){var e=new G(s,t,o)
s.setItemGraphicEl(t,e),u.add(e)})).update((function(t,e){var n=l.getItemGraphicEl(e)
n.updateData(s,t,o),n.off("click"),u.add(n),s.setItemGraphicEl(t,n)})).remove((function(e){var n=l.getItemGraphicEl(e)
v.t5(n,t,e)})).execute(),function(t){var e,n,i=t.getData(),o=[],s=!1,l=(t.get("minShowLabelAngle")||0)*z,u=i.getLayout("viewRect"),h=i.getLayout("r"),c=u.width,d=u.x,p=u.y,f=u.height
function g(t){t.ignore=!0}i.each((function(t){var u=i.getItemGraphicEl(t),p=u.shape,f=u.getTextContent(),y=u.getTextGuideLine(),v=i.getItemModel(t),m=v.getModel("label"),_=m.get("position")||v.get(["emphasis","label","position"]),x=m.get("distanceToLabelLine"),b=m.get("alignTo"),A=(0,r.lo)(m.get("edgeDistance"),c),S=m.get("bleedMargin"),M=v.getModel("labelLine"),T=M.get("length")
T=(0,r.lo)(T,c)
var I=M.get("length2")
if(I=(0,r.lo)(I,c),Math.abs(p.endAngle-p.startAngle)<l)return(0,a.__)(f.states,g),f.ignore=!0,void(y&&((0,a.__)(y.states,g),y.ignore=!0))
if(function(t){if(!t.ignore)return!0
for(var e in t.states)if(!1===t.states[e].ignore)return!0
return!1}(f)){var C,D,k,L,P=(p.startAngle+p.endAngle)/2,O=Math.cos(P),N=Math.sin(P)
e=p.cx,n=p.cy
var R="inside"===_||"inner"===_
if("center"===_)C=p.cx,D=p.cy,L="center"
else{var E=(R?(p.r+p.r0)/2*O:p.r*O)+e,z=(R?(p.r+p.r0)/2*N:p.r*N)+n
if(C=E+3*O,D=z+3*N,!R){var B=E+O*(T+h-p.r),V=z+N*(T+h-p.r),F=B+(O<0?-1:1)*I
C="edge"===b?O<0?d+A:d+c-A:F+(O<0?-x:x),D=V,k=[[E,z],[B,V],[F,V]]}L=R?"center":"edge"===b?O>0?"right":"left":O>0?"left":"right"}var W=Math.PI,H=0,G=m.get("rotate")
if((0,a.Et)(G))H=G*(W/180)
else if("center"===_)H=0
else if("radial"===G||!0===G)H=O<0?-P+W:-P
else if("tangential"===G&&"outside"!==_&&"outer"!==_){var j=Math.atan2(O,N)
j<0&&(j=2*W+j),N>0&&(j=W+j),H=j-W}if(s=!!H,f.x=C,f.y=D,f.rotation=H,f.setStyle({verticalAlign:"middle"}),R){f.setStyle({align:L})
var X=f.states.select
X&&(X.x+=f.x,X.y+=f.y)}else{var Y=f.getBoundingRect().clone()
Y.applyTransform(f.getComputedTransform())
var U=(f.style.margin||0)+2.1
Y.y-=U/2,Y.height+=U,o.push({label:f,labelLine:y,position:_,len:T,len2:I,minTurnAngle:M.get("minTurnAngle"),maxSurfaceAngle:M.get("maxSurfaceAngle"),surfaceNormal:new w.A(O,N),linePoints:k,textAlign:L,labelDistance:x,labelAlignTo:b,edgeDistance:A,bleedMargin:S,rect:Y,unconstrainedWidth:Y.width,labelStyleWidth:f.style.width})}u.setTextConfig({inside:R})}})),!s&&t.get("avoidLabelOverlap")&&function(t,e,n,i,r,o,a,s){for(var l=[],u=[],h=Number.MAX_VALUE,c=-Number.MAX_VALUE,d=0;d<t.length;d++){var p=t[d].label
F(t[d])||(p.x<e?(h=Math.min(h,p.x),l.push(t[d])):(c=Math.max(c,p.x),u.push(t[d])))}for(d=0;d<t.length;d++)if(!F(y=t[d])&&y.linePoints){if(null!=y.labelStyleWidth)continue
p=y.label
var f,g=y.linePoints
f="edge"===y.labelAlignTo?p.x<e?g[2][0]-y.labelDistance-a-y.edgeDistance:a+r-y.edgeDistance-g[2][0]-y.labelDistance:"labelLine"===y.labelAlignTo?p.x<e?h-a-y.bleedMargin:a+r-c-y.bleedMargin:p.x<e?p.x-a-y.bleedMargin:a+r-p.x-y.bleedMargin,y.targetTextWidth=f,V(y,f)}for(B(u,e,n,i,1,0,o,0,s,c),B(l,e,n,i,-1,0,o,0,s,h),d=0;d<t.length;d++){var y
if(!F(y=t[d])&&y.linePoints){p=y.label,g=y.linePoints
var v="edge"===y.labelAlignTo,m=p.style.padding,_=m?m[1]+m[3]:0,x=p.style.backgroundColor?0:_,b=y.rect.width+x,w=g[1][0]-g[2][0]
v?p.x<e?g[2][0]=a+y.edgeDistance+b+y.labelDistance:g[2][0]=a+r-y.edgeDistance-b-y.labelDistance:(p.x<e?g[2][0]=p.x+y.labelDistance:g[2][0]=p.x-y.labelDistance,g[1][0]=g[2][0]+w),g[1][1]=g[2][1]=p.y}}}(o,e,n,h,c,f,d,p)
for(var y=0;y<o.length;y++){var v=o[y],m=v.label,_=v.labelLine,x=isNaN(m.x)||isNaN(m.y)
if(m){m.setStyle({align:v.textAlign}),x&&((0,a.__)(m.states,g),m.ignore=!0)
var b=m.states.select
b&&(b.x+=m.x,b.y+=m.y)}if(_){var A=v.linePoints
x||!A?((0,a.__)(_.states,g),_.ignore=!0):(P(A,v.minTurnAngle),O(A,v.surfaceNormal,v.maxSurfaceAngle),_.setShape({points:A}),m.__hostTarget.textGuideLineConfig={anchor:new w.A(A[0][0],A[0][1])})}}}(t),"expansion"!==t.get("animationTypeUpdate")&&(this._data=s)},e.prototype.dispose=function(){},e.prototype.containPoint=function(t,e){var n=e.getData().getItemLayout(0)
if(n){var i=t[0]-n.cx,r=t[1]-n.cy,o=Math.sqrt(i*i+r*r)
return o<=n.r&&o>=n.r0}},e.type="pie",e}(b.A)
var X=n(8536),Y=n(8344),U=n(6604),Z=n(7538),$=n(3397),q=l.$r()
const K=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,g.C6)(e,t),e.prototype.init=function(e){t.prototype.init.apply(this,arguments),this.legendVisualProvider=new Z.A(a.oI(this.getData,this),a.oI(this.getRawData,this)),this._defaultLabelLine(e)},e.prototype.mergeOption=function(){t.prototype.mergeOption.apply(this,arguments)},e.prototype.getInitialData=function(){return function(t,e){e=(0,a.cy)(e)&&{coordDimensions:e}||(0,a.X$)({encodeDefine:t.getEncode()},e)
var n=t.getSource(),i=(0,X.A)(n,e).dimensions,r=new Y.A(i,t)
return r.initData(n,void 0),r}(this,{coordDimensions:["value"],encodeDefaulter:a.cF(U.ln,this)})},e.prototype.getDataParams=function(e){var n=this.getData(),i=q(n),o=i.seats
if(!o){var a=[]
n.each(n.mapDimension("value"),(function(t){a.push(t)})),o=i.seats=(0,r.kM)(a,n.hostModel.get("percentPrecision"))}var s=t.prototype.getDataParams.call(this,e)
return s.percent=o[e]||0,s.$vars.push("percent"),s},e.prototype._defaultLabelLine=function(t){l.M5(t,"labelLine",["show"])
var e=t.labelLine,n=t.emphasis.labelLine
e.show=e.show&&t.label.show,n.show=n.show&&t.emphasis.label.show},e.type="series.pie",e.defaultOption={z:2,legendHoverLink:!0,colorBy:"data",center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,endAngle:"auto",padAngle:0,minAngle:0,minShowLabelAngle:0,selectedOffset:10,percentPrecision:2,stillShowZeroSum:!0,left:0,top:0,right:0,bottom:0,width:null,height:null,label:{rotate:0,show:!0,overflow:"truncate",position:"outer",alignTo:"none",edgeDistance:"25%",bleedMargin:10,distanceToLabelLine:5},labelLine:{show:!0,length:15,length2:15,smooth:!1,minTurnAngle:90,maxSurfaceAngle:90,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1,borderJoin:"round"},showEmptyCircle:!0,emptyCircleStyle:{color:"lightgray",opacity:1},labelLayout:{hideOverlap:!0},emphasis:{scale:!0,scaleSize:5},avoidLabelOverlap:!0,animationType:"expansion",animationDuration:1e3,animationTypeUpdate:"transition",animationEasingUpdate:"cubicInOut",animationDurationUpdate:500,animationEasing:"cubicInOut"},e}($.A)
function Q(t){t.registerChartView(j),t.registerSeriesModel(K),(0,i.I)("pie",t.registerAction),t.registerLayout((0,a.cF)(p,"pie")),t.registerProcessor({seriesType:"pie",reset:function(t,e){var n=e.findComponents({mainType:"legend"})
if(n&&n.length){var i=t.getData()
i.filterSelf((function(t){for(var e=i.getName(t),r=0;r<n.length;r++)if(!n[r].isSelected(e))return!1
return!0}))}}}),t.registerProcessor({seriesType:"pie",reset:function(t,e){var n=t.getData()
n.filterSelf((function(t){var e=n.mapDimension("value"),i=n.get(e,t)
return!((0,a.Et)(i)&&!isNaN(i)&&i<0)}))}})}},6569:(t,e,n)=>{n.d(e,{a:()=>et})
var i=n(4784),r=n(8301),o=n(7941),a=n(8283),s=n(2198),l=n(1323),u=n(8401),h=n(3960)
function c(t,e){var n=t.isExpand?t.children:[],i=t.parentNode.children,r=t.hierNode.i?i[t.hierNode.i-1]:null
if(n.length){!function(t){for(var e=t.children,n=e.length,i=0,r=0;--n>=0;){var o=e[n]
o.hierNode.prelim+=i,o.hierNode.modifier+=i,r+=o.hierNode.change,i+=o.hierNode.shift+r}}(t)
var o=(n[0].hierNode.prelim+n[n.length-1].hierNode.prelim)/2
r?(t.hierNode.prelim=r.hierNode.prelim+e(t,r),t.hierNode.modifier=t.hierNode.prelim-o):t.hierNode.prelim=o}else r&&(t.hierNode.prelim=r.hierNode.prelim+e(t,r))
t.parentNode.hierNode.defaultAncestor=function(t,e,n,i){if(e){for(var r=t,o=t,a=o.parentNode.children[0],s=e,l=r.hierNode.modifier,u=o.hierNode.modifier,h=a.hierNode.modifier,c=s.hierNode.modifier;s=y(s),o=v(o),s&&o;){r=y(r),a=v(a),r.hierNode.ancestor=t
var d=s.hierNode.prelim+c-o.hierNode.prelim-u+i(s,o)
d>0&&(_(m(s,t,n),t,d),u+=d,l+=d),c+=s.hierNode.modifier,u+=o.hierNode.modifier,l+=r.hierNode.modifier,h+=a.hierNode.modifier}s&&!y(r)&&(r.hierNode.thread=s,r.hierNode.modifier+=c-l),o&&!v(a)&&(a.hierNode.thread=o,a.hierNode.modifier+=u-h,n=t)}return n}(t,r,t.parentNode.hierNode.defaultAncestor||i[0],e)}function d(t){var e=t.hierNode.prelim+t.parentNode.hierNode.modifier
t.setLayout({x:e},!0),t.hierNode.modifier+=t.parentNode.hierNode.modifier}function p(t){return arguments.length?t:x}function f(t,e){return t-=Math.PI/2,{x:e*Math.cos(t),y:e*Math.sin(t)}}function g(t,e){return h.dV(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()})}function y(t){var e=t.children
return e.length&&t.isExpand?e[e.length-1]:t.hierNode.thread}function v(t){var e=t.children
return e.length&&t.isExpand?e[0]:t.hierNode.thread}function m(t,e,n){return t.hierNode.ancestor.parentNode===e.parentNode?t.hierNode.ancestor:n}function _(t,e,n){var i=n/(e.hierNode.i-t.hierNode.i)
e.hierNode.change-=i,e.hierNode.shift+=n,e.hierNode.modifier+=n,e.hierNode.prelim+=n,t.hierNode.change+=i}function x(t,e){return t.parentNode===e.parentNode?1:2}var b=n(5950),w=n(2648),A=n(3663),S=n(2566),M=n(2160),T=n(3947),I=n(1993),C=n(4427),D=n(200),k=function(){this.parentPoint=[],this.childPoints=[]},L=function(t){function e(e){return t.call(this,e)||this}return(0,i.C6)(e,t),e.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},e.prototype.getDefaultShape=function(){return new k},e.prototype.buildPath=function(t,e){var n=e.childPoints,i=n.length,r=e.parentPoint,o=n[0],a=n[i-1]
if(1===i)return t.moveTo(r[0],r[1]),void t.lineTo(o[0],o[1])
var s=e.orient,l="TB"===s||"BT"===s?0:1,u=1-l,h=(0,T.lo)(e.forkPosition,1),c=[]
c[l]=r[l],c[u]=r[u]+(a[u]-r[u])*h,t.moveTo(r[0],r[1]),t.lineTo(c[0],c[1]),t.moveTo(o[0],o[1]),c[l]=o[l],t.lineTo(c[0],c[1]),c[l]=a[l],t.lineTo(c[0],c[1]),t.lineTo(a[0],a[1])
for(var d=1;d<i-1;d++){var p=n[d]
t.moveTo(p[0],p[1]),c[l]=p[l],t.lineTo(c[0],c[1])}},e}(C.Ay),P=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n._mainGroup=new o.A,n}return(0,i.C6)(e,t),e.prototype.init=function(t,e){this._controller=new S.A(e.getZr()),this._controllerHost={target:this.group},this.group.add(this._mainGroup)},e.prototype.render=function(t,e,n){var i=t.getData(),r=t.layoutInfo,o=this._mainGroup
"radial"===t.get("layout")?(o.x=r.x+r.width/2,o.y=r.y+r.height/2):(o.x=r.x,o.y=r.y),this._updateViewCoordSys(t,n),this._updateController(t,e,n)
var a=this._data
i.diff(a).add((function(e){O(i,e)&&N(i,e,null,o,t)})).update((function(e,n){var r=a.getItemGraphicEl(n)
O(i,e)?N(i,e,r,o,t):r&&z(a,n,r,o,t)})).remove((function(e){var n=a.getItemGraphicEl(e)
n&&z(a,e,n,o,t)})).execute(),this._nodeScaleRatio=t.get("nodeScaleRatio"),this._updateNodeAndLinkScale(t),!0===t.get("expandAndCollapse")&&i.eachItemGraphicEl((function(e,i){e.off("click").on("click",(function(){n.dispatchAction({type:"treeExpandAndCollapse",seriesId:t.id,dataIndex:i})}))})),this._data=i},e.prototype._updateViewCoordSys=function(t,e){var n=t.getData(),i=[]
n.each((function(t){var e=n.getItemLayout(t)
!e||isNaN(e.x)||isNaN(e.y)||i.push([+e.x,+e.y])}))
var r=[],o=[]
b.Cr(i,r,o)
var a=this._min,s=this._max
o[0]-r[0]==0&&(r[0]=a?a[0]:r[0]-1,o[0]=s?s[0]:o[0]+1),o[1]-r[1]==0&&(r[1]=a?a[1]:r[1]-1,o[1]=s?s[1]:o[1]+1)
var l=t.coordinateSystem=new w.A
l.zoomLimit=t.get("scaleLimit"),l.setBoundingRect(r[0],r[1],o[0]-r[0],o[1]-r[1]),l.setCenter(t.get("center"),e),l.setZoom(t.get("zoom")),this.group.attr({x:l.x,y:l.y,scaleX:l.scaleX,scaleY:l.scaleY}),this._min=r,this._max=o},e.prototype._updateController=function(t,e,n){var i=this,r=this._controller,o=this._controllerHost,a=this.group
r.setPointerChecker((function(e,i,r){var o=a.getBoundingRect()
return o.applyTransform(a.transform),o.contain(i,r)&&!(0,M.I)(e,n,t)})),r.enable(t.get("roam")),o.zoomLimit=t.get("scaleLimit"),o.zoom=t.coordinateSystem.getZoom(),r.off("pan").off("zoom").on("pan",(function(e){A.t(o,e.dx,e.dy),n.dispatchAction({seriesId:t.id,type:"treeRoam",dx:e.dx,dy:e.dy})})).on("zoom",(function(e){A.x(o,e.scale,e.originX,e.originY),n.dispatchAction({seriesId:t.id,type:"treeRoam",zoom:e.scale,originX:e.originX,originY:e.originY}),i._updateNodeAndLinkScale(t),n.updateLabelLayout()}))},e.prototype._updateNodeAndLinkScale=function(t){var e=t.getData(),n=this._getNodeGlobalScale(t)
e.eachItemGraphicEl((function(t,e){t.setSymbolScale(n)}))},e.prototype._getNodeGlobalScale=function(t){var e=t.coordinateSystem
if("view"!==e.type)return 1
var n=this._nodeScaleRatio,i=e.scaleX||1
return((e.getZoom()-1)*n+1)/i},e.prototype.dispose=function(){this._controller&&this._controller.dispose(),this._controllerHost=null},e.prototype.remove=function(){this._mainGroup.removeAll(),this._data=null},e.type="tree",e}(I.A)
function O(t,e){var n=t.getItemLayout(e)
return n&&!isNaN(n.x)&&!isNaN(n.y)}function N(t,e,n,i,o){var h=!n,c=t.tree.getNodeByDataIndex(e),d=c.getModel(),p=c.getVisual("style").fill,f=!1===c.isExpand&&0!==c.children.length?p:"#fff",g=t.tree.root,y=c.parentNode===g?c:c.parentNode||c,v=t.getItemGraphicEl(y.dataIndex),m=y.getLayout(),_=v?{x:v.__oldX,y:v.__oldY,rawX:v.__radialOldRawX,rawY:v.__radialOldRawY}:m,x=c.getLayout()
h?((n=new u.A(t,e,null,{symbolInnerColor:f,useNameLabel:!0})).x=_.x,n.y=_.y):n.updateData(t,e,null,{symbolInnerColor:f,useNameLabel:!0}),n.__radialOldRawX=n.__radialRawX,n.__radialOldRawY=n.__radialRawY,n.__radialRawX=x.rawX,n.__radialRawY=x.rawY,i.add(n),t.setItemGraphicEl(e,n),n.__oldX=n.x,n.__oldY=n.y,a.oi(n,{x:x.x,y:x.y},o)
var b=n.getSymbolPath()
if("radial"===o.get("layout")){var w=g.children[0],A=w.getLayout(),S=w.children.length,M=void 0,T=void 0
if(x.x===A.x&&!0===c.isExpand&&w.children.length){var I={x:(w.children[0].getLayout().x+w.children[S-1].getLayout().x)/2,y:(w.children[0].getLayout().y+w.children[S-1].getLayout().y)/2};(M=Math.atan2(I.y-A.y,I.x-A.x))<0&&(M=2*Math.PI+M),(T=I.x<A.x)&&(M-=Math.PI)}else(M=Math.atan2(x.y-A.y,x.x-A.x))<0&&(M=2*Math.PI+M),0===c.children.length||0!==c.children.length&&!1===c.isExpand?(T=x.x<A.x)&&(M-=Math.PI):(T=x.x>A.x)||(M-=Math.PI)
var C=T?"left":"right",k=d.getModel("label"),P=k.get("rotate"),O=P*(Math.PI/180),N=b.getTextContent()
N&&(b.setTextConfig({position:k.get("position")||C,rotation:null==P?-M:O,origin:"center"}),N.setStyle("verticalAlign","middle"))}var R=d.get(["emphasis","focus"]),E="relative"===R?r.yB(c.getAncestorsIndices(),c.getDescendantIndices()):"ancestor"===R?c.getAncestorsIndices():"descendant"===R?c.getDescendantIndices():null
E&&((0,l.z)(n).focus=E),function(t,e,n,i,o,l,u,h){var c=e.getModel(),d=t.get("edgeShape"),p=t.get("layout"),f=t.getOrient(),g=t.get(["lineStyle","curveness"]),y=t.get("edgeForkPosition"),v=c.getModel("lineStyle").getLineStyle(),m=i.__edge
if("curve"===d)e.parentNode&&e.parentNode!==n&&(m||(m=i.__edge=new s.A({shape:B(p,f,g,o,o)})),a.oi(m,{shape:B(p,f,g,l,u)},t))
else if("polyline"===d&&"orthogonal"===p&&e!==n&&e.children&&0!==e.children.length&&!0===e.isExpand){for(var _=e.children,x=[],b=0;b<_.length;b++){var w=_[b].getLayout()
x.push([w.x,w.y])}m||(m=i.__edge=new L({shape:{parentPoint:[u.x,u.y],childPoints:[[u.x,u.y]],orient:f,forkPosition:y}})),a.oi(m,{shape:{parentPoint:[u.x,u.y],childPoints:x}},t)}m&&("polyline"!==d||e.isExpand)&&(m.useStyle(r.NT({strokeNoScale:!0,fill:null},v)),(0,D.Mx)(m,c,"lineStyle"),(0,D.DW)(m),h.add(m))}(o,c,g,n,_,m,x,i),n.__edge&&(n.onHoverStateChange=function(e){if("blur"!==e){var i=c.parentNode&&t.getItemGraphicEl(c.parentNode.dataIndex)
i&&i.hoverState===D.zX||(0,D.Pk)(n.__edge,e)}})}function R(t,e,n,i,r){var o=E(e.tree.root,t),s=o.source,l=o.sourceLayout,u=e.getItemGraphicEl(t.dataIndex)
if(u){var h=e.getItemGraphicEl(s.dataIndex).__edge,c=u.__edge||(!1===s.isExpand||1===s.children.length?h:void 0),d=i.get("edgeShape"),p=i.get("layout"),f=i.get("orient"),g=i.get(["lineStyle","curveness"])
c&&("curve"===d?a.Nz(c,{shape:B(p,f,g,l,l),style:{opacity:0}},i,{cb:function(){n.remove(c)},removeOpt:r}):"polyline"===d&&"orthogonal"===i.get("layout")&&a.Nz(c,{shape:{parentPoint:[l.x,l.y],childPoints:[[l.x,l.y]]},style:{opacity:0}},i,{cb:function(){n.remove(c)},removeOpt:r}))}}function E(t,e){for(var n,i=e.parentNode===t?e:e.parentNode||e;null==(n=i.getLayout());)i=i.parentNode===t?i:i.parentNode||i
return{source:i,sourceLayout:n}}function z(t,e,n,i,r){var o=t.tree.getNodeByDataIndex(e),s=E(t.tree.root,o).sourceLayout,l={duration:r.get("animationDurationUpdate"),easing:r.get("animationEasingUpdate")}
a.Nz(n,{x:s.x+1,y:s.y+1},r,{cb:function(){i.remove(n),t.setItemGraphicEl(e,null)},removeOpt:l}),n.fadeOut(null,t.hostModel,{fadeLabel:!0,animation:l}),o.children.forEach((function(e){R(e,t,i,r,l)})),R(o,t,i,r,l)}function B(t,e,n,i,r){var o,a,s,l,u,h,c,d
if("radial"===t){u=i.rawX,c=i.rawY,h=r.rawX,d=r.rawY
var p=f(u,c),g=f(u,c+(d-c)*n),y=f(h,d+(c-d)*n),v=f(h,d)
return{x1:p.x||0,y1:p.y||0,x2:v.x||0,y2:v.y||0,cpx1:g.x||0,cpy1:g.y||0,cpx2:y.x||0,cpy2:y.y||0}}return u=i.x,c=i.y,h=r.x,d=r.y,"LR"!==e&&"RL"!==e||(o=u+(h-u)*n,a=c,s=h+(u-h)*n,l=d),"TB"!==e&&"BT"!==e||(o=u,a=c+(d-c)*n,s=h,l=d+(c-d)*n),{x1:u,y1:c,x2:h,y2:d,cpx1:o,cpy1:a,cpx2:s,cpy2:l}}const V=P
var F=n(3397),W=n(6108),H=n(8344),G=n(8536),j=n(5225),X=function(){function t(t,e){this.depth=0,this.height=0,this.dataIndex=-1,this.children=[],this.viewChildren=[],this.isExpand=!1,this.name=t||"",this.hostTree=e}return t.prototype.isRemoved=function(){return this.dataIndex<0},t.prototype.eachNode=function(t,e,n){r.Tn(t)&&(n=e,e=t,t=null),t=t||{},r.Kg(t)&&(t={order:t})
var i,o=t.order||"preorder",a=this[t.attr||"children"]
"preorder"===o&&(i=e.call(n,this))
for(var s=0;!i&&s<a.length;s++)a[s].eachNode(t,e,n)
"postorder"===o&&e.call(n,this)},t.prototype.updateDepthAndHeight=function(t){var e=0
this.depth=t
for(var n=0;n<this.children.length;n++){var i=this.children[n]
i.updateDepthAndHeight(t+1),i.height>e&&(e=i.height)}this.height=e+1},t.prototype.getNodeById=function(t){if(this.getId()===t)return this
for(var e=0,n=this.children,i=n.length;e<i;e++){var r=n[e].getNodeById(t)
if(r)return r}},t.prototype.contains=function(t){if(t===this)return!0
for(var e=0,n=this.children,i=n.length;e<i;e++){var r=n[e].contains(t)
if(r)return r}},t.prototype.getAncestors=function(t){for(var e=[],n=t?this:this.parentNode;n;)e.push(n),n=n.parentNode
return e.reverse(),e},t.prototype.getAncestorsIndices=function(){for(var t=[],e=this;e;)t.push(e.dataIndex),e=e.parentNode
return t.reverse(),t},t.prototype.getDescendantIndices=function(){var t=[]
return this.eachNode((function(e){t.push(e.dataIndex)})),t},t.prototype.getValue=function(t){var e=this.hostTree.data
return e.getStore().get(e.getDimensionIndex(t||"value"),this.dataIndex)},t.prototype.setLayout=function(t,e){this.dataIndex>=0&&this.hostTree.data.setItemLayout(this.dataIndex,t,e)},t.prototype.getLayout=function(){return this.hostTree.data.getItemLayout(this.dataIndex)},t.prototype.getModel=function(t){if(!(this.dataIndex<0))return this.hostTree.data.getItemModel(this.dataIndex).getModel(t)},t.prototype.getLevelModel=function(){return(this.hostTree.levelModels||[])[this.depth]},t.prototype.setVisual=function(t,e){this.dataIndex>=0&&this.hostTree.data.setItemVisual(this.dataIndex,t,e)},t.prototype.getVisual=function(t){return this.hostTree.data.getItemVisual(this.dataIndex,t)},t.prototype.getRawIndex=function(){return this.hostTree.data.getRawIndex(this.dataIndex)},t.prototype.getId=function(){return this.hostTree.data.getId(this.dataIndex)},t.prototype.getChildIndex=function(){if(this.parentNode){for(var t=this.parentNode.children,e=0;e<t.length;++e)if(t[e]===this)return e
return-1}return-1},t.prototype.isAncestorOf=function(t){for(var e=t.parentNode;e;){if(e===this)return!0
e=e.parentNode}return!1},t.prototype.isDescendantOf=function(t){return t!==this&&t.isAncestorOf(this)},t}()
const Y=function(){function t(t){this.type="tree",this._nodes=[],this.hostModel=t}return t.prototype.eachNode=function(t,e,n){this.root.eachNode(t,e,n)},t.prototype.getNodeByDataIndex=function(t){var e=this.data.getRawIndex(t)
return this._nodes[e]},t.prototype.getNodeById=function(t){return this.root.getNodeById(t)},t.prototype.update=function(){for(var t=this.data,e=this._nodes,n=0,i=e.length;n<i;n++)e[n].dataIndex=-1
for(n=0,i=t.count();n<i;n++)e[t.getRawIndex(n)].dataIndex=n},t.prototype.clearLayouts=function(){this.data.clearItemLayouts()},t.createTree=function(e,n,i){var o=new t(n),a=[],s=1
!function t(e,n){var i=e.value
s=Math.max(s,r.cy(i)?i.length:1),a.push(e)
var l=new X((0,j.vS)(e.name,""),o)
n?function(t,e){var n=e.children
t.parentNode!==e&&(n.push(t),t.parentNode=e)}(l,n):o.root=l,o._nodes.push(l)
var u=e.children
if(u)for(var h=0;h<u.length;h++)t(u[h],l)}(e),o.root.updateDepthAndHeight(0)
var l=(0,G.A)(a,{coordDimensions:["value"],dimensionsCount:s}).dimensions,u=new H.A(l,n)
return u.initData(a),i&&i(u),(0,W.A)({mainData:u,struct:o,structAttr:"tree"}),o.update(),o},t}()
var U=n(7413),Z=n(7908),$=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this
return e.hasSymbolVisual=!0,e.ignoreStyleOnData=!0,e}return(0,i.C6)(e,t),e.prototype.getInitialData=function(t){var e={name:t.name,children:t.data},n=t.leaves||{},i=new U.A(n,this,this.ecModel),r=Y.createTree(e,this,(function(t){t.wrapMethod("getItemModel",(function(t,e){var n=r.getNodeByDataIndex(e)
return n&&n.children.length&&n.isExpand||(t.parentModel=i),t}))})),o=0
r.eachNode("preorder",(function(t){t.depth>o&&(o=t.depth)}))
var a=t.expandAndCollapse&&t.initialTreeDepth>=0?t.initialTreeDepth:o
return r.root.eachNode("preorder",(function(t){var e=t.hostTree.data.getRawDataItem(t.dataIndex)
t.isExpand=e&&null!=e.collapsed?!e.collapsed:t.depth<=a})),r.data},e.prototype.getOrient=function(){var t=this.get("orient")
return"horizontal"===t?t="LR":"vertical"===t&&(t="TB"),t},e.prototype.setZoom=function(t){this.option.zoom=t},e.prototype.setCenter=function(t){this.option.center=t},e.prototype.formatTooltip=function(t,e,n){for(var i=this.getData().tree,r=i.root.children[0],o=i.getNodeByDataIndex(t),a=o.getValue(),s=o.name;o&&o!==r;)s=o.parentNode.name+"."+s,o=o.parentNode
return(0,Z.Qx)("nameValue",{name:s,value:a,noValue:isNaN(a)||null==a})},e.prototype.getDataParams=function(e){var n=t.prototype.getDataParams.apply(this,arguments),i=this.getData().tree.getNodeByDataIndex(e)
return n.treeAncestors=function(t,e){for(var n=[];t;){var i=t.dataIndex
n.push({name:t.name,dataIndex:i,value:e.getRawValue(i)}),t=t.parentNode}return n.reverse(),n}(i,this),n.collapsed=!i.isExpand,n},e.type="series.tree",e.layoutMode="box",e.defaultOption={z:2,coordinateSystem:"view",left:"12%",top:"12%",right:"12%",bottom:"12%",layout:"orthogonal",edgeShape:"curve",edgeForkPosition:"50%",roam:!1,nodeScaleRatio:.4,center:null,zoom:1,orient:"LR",symbol:"emptyCircle",symbolSize:7,expandAndCollapse:!0,initialTreeDepth:2,lineStyle:{color:"#ccc",width:1.5,curveness:.5},itemStyle:{color:"lightsteelblue",borderWidth:1.5},label:{show:!0},animationEasing:"linear",animationDuration:700,animationDurationUpdate:500},e}(F.A)
const q=$
function K(t,e){for(var n,i=[t];n=i.pop();)if(e(n),n.isExpand){var r=n.children
if(r.length)for(var o=r.length-1;o>=0;o--)i.push(r[o])}}function Q(t,e){t.eachSeriesByType("tree",(function(t){!function(t,e){var n=g(t,e)
t.layoutInfo=n
var i=t.get("layout"),r=0,o=0,a=null
"radial"===i?(r=2*Math.PI,o=Math.min(n.height,n.width)/2,a=p((function(t,e){return(t.parentNode===e.parentNode?1:2)/t.depth}))):(r=n.width,o=n.height,a=p())
var s=t.getData().tree.root,l=s.children[0]
if(l){!function(t){var e=t
e.hierNode={defaultAncestor:null,ancestor:e,prelim:0,modifier:0,change:0,shift:0,i:0,thread:null}
for(var n,i,r=[e];n=r.pop();)if(i=n.children,n.isExpand&&i.length)for(var o=i.length-1;o>=0;o--){var a=i[o]
a.hierNode={defaultAncestor:null,ancestor:a,prelim:0,modifier:0,change:0,shift:0,i:o,thread:null},r.push(a)}}(s),function(t,e,n){for(var i,r=[t],o=[];i=r.pop();)if(o.push(i),i.isExpand){var a=i.children
if(a.length)for(var s=0;s<a.length;s++)r.push(a[s])}for(;i=o.pop();)e(i,n)}(l,c,a),s.hierNode.modifier=-l.hierNode.prelim,K(l,d)
var u=l,h=l,y=l
K(l,(function(t){var e=t.getLayout().x
e<u.getLayout().x&&(u=t),e>h.getLayout().x&&(h=t),t.depth>y.depth&&(y=t)}))
var v=u===h?1:a(u,h)/2,m=v-u.getLayout().x,_=0,x=0,b=0,w=0
if("radial"===i)_=r/(h.getLayout().x+v+m),x=o/(y.depth-1||1),K(l,(function(t){b=(t.getLayout().x+m)*_,w=(t.depth-1)*x
var e=f(b,w)
t.setLayout({x:e.x,y:e.y,rawX:b,rawY:w},!0)}))
else{var A=t.getOrient()
"RL"===A||"LR"===A?(x=o/(h.getLayout().x+v+m),_=r/(y.depth-1||1),K(l,(function(t){w=(t.getLayout().x+m)*x,b="LR"===A?(t.depth-1)*_:r-(t.depth-1)*_,t.setLayout({x:b,y:w},!0)}))):"TB"!==A&&"BT"!==A||(_=r/(h.getLayout().x+v+m),x=o/(y.depth-1||1),K(l,(function(t){b=(t.getLayout().x+m)*_,w="TB"===A?(t.depth-1)*x:o-(t.depth-1)*x,t.setLayout({x:b,y:w},!0)})))}}}(t,e)}))}function J(t){t.eachSeriesByType("tree",(function(t){var e=t.getData()
e.tree.eachNode((function(t){var n=t.getModel().getModel("itemStyle").getItemStyle(),i=e.ensureUniqueItemVisual(t.dataIndex,"style");(0,r.X$)(i,n)}))}))}var tt=n(6521)
function et(t){t.registerChartView(V),t.registerSeriesModel(q),t.registerLayout(Q),t.registerVisual(J),function(t){t.registerAction({type:"treeExpandAndCollapse",event:"treeExpandAndCollapse",update:"update"},(function(t,e){e.eachComponent({mainType:"series",subType:"tree",query:t},(function(e){var n=t.dataIndex,i=e.getData().tree.getNodeByDataIndex(n)
i.isExpand=!i.isExpand}))})),t.registerAction({type:"treeRoam",event:"treeRoam",update:"none"},(function(t,e,n){e.eachComponent({mainType:"series",subType:"tree",query:t},(function(e){var i=e.coordinateSystem,r=(0,tt.f)(i,t,void 0,n)
e.setCenter&&e.setCenter(r.center),e.setZoom&&e.setZoom(r.zoom)}))}))}(t)}},6113:(t,e,n)=>{n.d(e,{A:()=>S})
var i=n(8301),r=n(7941),o=n(1032),a=n(3023),s=n(5652),l=n(1323),u=n(923),h=n(7413),c=n(3947),d=n(5478),p=n(7432),f=n(1150),g=n(4753),y=n(7786),v=Math.PI,m=function(){function t(t,e){this.group=new r.A,this.opt=e,this.axisModel=t,(0,i.NT)(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0,handleAutoShown:function(){return!0}})
var n=new r.A({x:e.position[0],y:e.position[1],rotation:e.rotation})
n.updateTransform(),this._transformGroup=n}return t.prototype.hasBuilder=function(t){return!!_[t]},t.prototype.add=function(t){_[t](this.opt,this.axisModel,this.group,this._transformGroup)},t.prototype.getGroup=function(){return this.group},t.innerTextLayout=function(t,e,n){var i,r,o=(0,c._7)(e-t)
return(0,c.dh)(o)?(r=n>0?"top":"bottom",i="center"):(0,c.dh)(o-v)?(r=n>0?"bottom":"top",i="center"):(r="middle",i=o>0&&o<v?n>0?"right":"left":n>0?"left":"right"),{rotation:o,textAlign:i,textVerticalAlign:r}},t.makeAxisEventDataBase=function(t){var e={componentType:t.mainType,componentIndex:t.componentIndex}
return e[t.mainType+"Index"]=t.componentIndex,e},t.isLabelSilent=function(t){var e=t.get("tooltip")
return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)},t}(),_={axisLine:function(t,e,n,r){var s=e.get(["axisLine","show"])
if("auto"===s&&t.handleAutoShown&&(s=t.handleAutoShown("axisLine")),s){var l=e.axis.getExtent(),u=r.transform,h=[l[0],0],c=[l[1],0],p=h[0]>c[0]
u&&((0,f.NW)(h,h,u),(0,f.NW)(c,c,u))
var g=(0,i.X$)({lineCap:"round"},e.getModel(["axisLine","lineStyle"]).getLineStyle()),y=new o.A({shape:{x1:h[0],y1:h[1],x2:c[0],y2:c[1]},style:g,strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1})
a.subPixelOptimizeLine(y.shape,y.style.lineWidth),y.anid="line",n.add(y)
var v=e.get(["axisLine","symbol"])
if(null!=v){var m=e.get(["axisLine","symbolSize"]);(0,i.Kg)(v)&&(v=[v,v]),((0,i.Kg)(m)||(0,i.Et)(m))&&(m=[m,m])
var _=(0,d.hV)(e.get(["axisLine","symbolOffset"])||0,m),x=m[0],b=m[1];(0,i.__)([{rotate:t.rotation+Math.PI/2,offset:_[0],r:0},{rotate:t.rotation-Math.PI/2,offset:_[1],r:Math.sqrt((h[0]-c[0])*(h[0]-c[0])+(h[1]-c[1])*(h[1]-c[1]))}],(function(e,i){if("none"!==v[i]&&null!=v[i]){var r=(0,d.v5)(v[i],-x/2,-b/2,x,b,g.stroke,!0),o=e.r+e.offset,a=p?c:h
r.attr({rotation:e.rotate,x:a[0]+o*Math.cos(t.rotation),y:a[1]-o*Math.sin(t.rotation),silent:!0,z2:11}),n.add(r)}}))}}},axisTickLabel:function(t,e,n,r){var o=function(t,e,n,r){var o=n.axis,a=n.getModel("axisTick"),s=a.get("show")
if("auto"===s&&r.handleAutoShown&&(s=r.handleAutoShown("axisTick")),s&&!o.scale.isBlank()){for(var l=a.getModel("lineStyle"),u=r.tickDirection*a.get("length"),h=A(o.getTicksCoords(),e.transform,u,(0,i.NT)(l.getLineStyle(),{stroke:n.get(["axisLine","lineStyle","color"])}),"ticks"),c=0;c<h.length;c++)t.add(h[c])
return h}}(n,r,e,t),a=function(t,e,n,r){var o=n.axis
if((0,i.Je)(r.axisLabelShow,n.get(["axisLabel","show"]))&&!o.scale.isBlank()){var a=n.getModel("axisLabel"),c=a.get("margin"),d=o.getViewLabels(),p=((0,i.Je)(r.labelRotate,a.get("rotate"))||0)*v/180,f=m.innerTextLayout(r.rotation,p,r.labelDirection),g=n.getCategories&&n.getCategories(!0),y=[],_=m.isLabelSilent(n),x=n.get("triggerEvent")
return(0,i.__)(d,(function(p,v){var b="ordinal"===o.scale.type?o.scale.getRawOrdinalNumber(p.tickValue):p.tickValue,w=p.formattedLabel,A=p.rawLabel,S=a
if(g&&g[b]){var M=g[b];(0,i.Gv)(M)&&M.textStyle&&(S=new h.A(M.textStyle,a,n.ecModel))}var T=S.getTextColor()||n.get(["axisLine","lineStyle","color"]),I=o.dataToCoord(b),C=S.getShallow("align",!0)||f.textAlign,D=(0,i.bZ)(S.getShallow("alignMinLabel",!0),C),k=(0,i.bZ)(S.getShallow("alignMaxLabel",!0),C),L=S.getShallow("verticalAlign",!0)||S.getShallow("baseline",!0)||f.textVerticalAlign,P=(0,i.bZ)(S.getShallow("verticalAlignMinLabel",!0),L),O=(0,i.bZ)(S.getShallow("verticalAlignMaxLabel",!0),L),N=new s.Ay({x:I,y:r.labelOffset+r.labelDirection*c,rotation:f.rotation,silent:_,z2:10+(p.level||0),style:(0,u.VB)(S,{text:w,align:0===v?D:v===d.length-1?k:C,verticalAlign:0===v?P:v===d.length-1?O:L,fill:(0,i.Tn)(T)?T("category"===o.type?A:"value"===o.type?b+"":b,v):T})})
if(N.anid="label_"+b,x){var R=m.makeAxisEventDataBase(n)
R.targetType="axisLabel",R.value=A,R.tickIndex=v,"category"===o.type&&(R.dataIndex=b),(0,l.z)(N).eventData=R}e.add(N),N.updateTransform(),y.push(N),t.add(N),N.decomposeTransform()})),y}}(n,r,e,t)
if(function(t,e,n){if(!(0,g.PJ)(t.axis)){var i=t.get(["axisLabel","showMinLabel"]),r=t.get(["axisLabel","showMaxLabel"])
n=n||[]
var o=(e=e||[])[0],a=e[1],s=e[e.length-1],l=e[e.length-2],u=n[0],h=n[1],c=n[n.length-1],d=n[n.length-2]
!1===i?(x(o),x(u)):b(o,a)&&(i?(x(a),x(h)):(x(o),x(u))),!1===r?(x(s),x(c)):b(l,s)&&(r?(x(l),x(d)):(x(s),x(c)))}}(e,a,o),function(t,e,n,r){var o=n.axis,a=n.getModel("minorTick")
if(a.get("show")&&!o.scale.isBlank()){var s=o.getMinorTicksCoords()
if(s.length)for(var l=a.getModel("lineStyle"),u=r*a.get("length"),h=(0,i.NT)(l.getLineStyle(),(0,i.NT)(n.getModel("axisTick").getLineStyle(),{stroke:n.get(["axisLine","lineStyle","color"])})),c=0;c<s.length;c++)for(var d=A(s[c],e.transform,u,h,"minorticks_"+c),p=0;p<d.length;p++)t.add(d[p])}}(n,r,e,t.tickDirection),e.get(["axisLabel","hideOverlap"])){var c=(0,y.os)((0,i.Tj)(a,(function(t){return{label:t,priority:t.z2,defaultAttr:{ignore:t.ignore}}})));(0,y.If)(c)}},axisName:function(t,e,n,r){var o=(0,i.Je)(t.axisName,e.get("name"))
if(o){var h,d,p=e.get("nameLocation"),f=t.nameDirection,g=e.getModel("nameTextStyle"),y=e.get("nameGap")||0,_=e.axis.getExtent(),x=_[0]>_[1]?-1:1,b=["start"===p?_[0]-x*y:"end"===p?_[1]+x*y:(_[0]+_[1])/2,w(p)?t.labelOffset+f*y:0],A=e.get("nameRotate")
null!=A&&(A=A*v/180),w(p)?h=m.innerTextLayout(t.rotation,null!=A?A:t.rotation,f):(h=function(t,e,n,i){var r,o,a=(0,c._7)(n-t),s=i[0]>i[1],l="start"===e&&!s||"start"!==e&&s
return(0,c.dh)(a-v/2)?(o=l?"bottom":"top",r="center"):(0,c.dh)(a-1.5*v)?(o=l?"top":"bottom",r="center"):(o="middle",r=a<1.5*v&&a>v/2?l?"left":"right":l?"right":"left"),{rotation:a,textAlign:r,textVerticalAlign:o}}(t.rotation,p,A||0,_),null!=(d=t.axisNameAvailableWidth)&&(d=Math.abs(d/Math.sin(h.rotation)),!isFinite(d)&&(d=null)))
var S=g.getFont(),M=e.get("nameTruncate",!0)||{},T=M.ellipsis,I=(0,i.Je)(t.nameTruncateMaxWidth,M.maxWidth,d),C=new s.Ay({x:b[0],y:b[1],rotation:h.rotation,silent:m.isLabelSilent(e),style:(0,u.VB)(g,{text:o,font:S,overflow:"truncate",width:I,ellipsis:T,fill:g.getTextColor()||e.get(["axisLine","lineStyle","color"]),align:g.get("align")||h.textAlign,verticalAlign:g.get("verticalAlign")||h.textVerticalAlign}),z2:1})
if(a.setTooltipConfig({el:C,componentModel:e,itemName:o}),C.__fullText=o,C.anid="name",e.get("triggerEvent")){var D=m.makeAxisEventDataBase(e)
D.targetType="axisName",D.name=o,(0,l.z)(C).eventData=D}r.add(C),C.updateTransform(),n.add(C),C.decomposeTransform()}}}
function x(t){t&&(t.ignore=!0)}function b(t,e){var n=t&&t.getBoundingRect().clone(),i=e&&e.getBoundingRect().clone()
if(n&&i){var r=p.D_([])
return p.e$(r,r,-t.rotation),n.applyTransform(p.lK([],r,t.getLocalTransform())),i.applyTransform(p.lK([],r,e.getLocalTransform())),n.intersect(i)}}function w(t){return"middle"===t||"center"===t}function A(t,e,n,i,r){for(var s=[],l=[],u=[],h=0;h<t.length;h++){var c=t[h].coord
l[0]=c,l[1]=0,u[0]=c,u[1]=n,e&&((0,f.NW)(l,l,e),(0,f.NW)(u,u,e))
var d=new o.A({shape:{x1:l[0],y1:l[1],x2:u[0],y2:u[1]},style:i,z2:2,autoBatch:!0,silent:!0})
a.subPixelOptimizeLine(d.shape,d.style.lineWidth),d.anid=r+"_"+t[h].tickValue,s.push(d)}return s}const S=m},5613:(t,e,n)=>{n.d(e,{A:()=>s})
var i=n(4784),r=n(2631),o=n(4642),a={}
const s=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n}return(0,i.C6)(e,t),e.prototype.render=function(e,n,i,o){this.axisPointerClass&&r.h_(e),t.prototype.render.apply(this,arguments),this._doUpdateAxisPointerClass(e,i,!0)},e.prototype.updateAxisPointer=function(t,e,n,i){this._doUpdateAxisPointerClass(t,n,!1)},e.prototype.remove=function(t,e){var n=this._axisPointer
n&&n.remove(e)},e.prototype.dispose=function(e,n){this._disposeAxisPointer(n),t.prototype.dispose.apply(this,arguments)},e.prototype._doUpdateAxisPointerClass=function(t,n,i){var o=e.getAxisPointerClass(this.axisPointerClass)
if(o){var a=r.mg(t)
a?(this._axisPointer||(this._axisPointer=new o)).render(t,a,n,i):this._disposeAxisPointer(n)}},e.prototype._disposeAxisPointer=function(t){this._axisPointer&&this._axisPointer.dispose(t),this._axisPointer=null},e.registerAxisPointerClass=function(t,e){a[t]=e},e.getAxisPointerClass=function(t){return t&&a[t]},e.type="axis",e}(o.A)},4496:(t,e,n)=>{n.d(e,{A:()=>o})
var i=n(8301),r=n(5225)
function o(t,e){var n,o=[],a=t.seriesIndex
if(null==a||!(n=e.getSeriesByIndex(a)))return{point:[]}
var s=n.getData(),l=r.le(s,t)
if(null==l||l<0||i.cy(l))return{point:[]}
var u=s.getItemGraphicEl(l),h=n.coordinateSystem
if(n.getTooltipPosition)o=n.getTooltipPosition(l)||[]
else if(h&&h.dataToPoint)if(t.isStacked){var c=h.getBaseAxis(),d=h.getOtherAxis(c).dim,p=c.dim,f="x"===d||"radius"===d?1:0,g=s.mapDimension(p),y=[]
y[f]=s.get(g,l),y[1-f]=s.get(s.getCalculationInfo("stackResultDimension"),l),o=h.dataToPoint(y)||[]}else o=h.dataToPoint(s.getValues(i.Tj(h.dimensions,(function(t){return s.mapDimension(t)})),l))||[]
else if(u){var v=u.getBoundingRect().clone()
v.applyTransform(u.transform),o=[v.x+v.width/2,v.y+v.height/2]}return{point:o,el:u}}},6631:(t,e,n)=>{n.d(e,{h:()=>h,k:()=>s})
var i=n(8301),r=n(9714),o=(0,n(5225).$r)(),a=i.__
function s(t,e,n){if(!r.A.node){var s=e.getZr()
o(s).records||(o(s).records={}),function(t,e){function n(n,i){t.on(n,(function(n){var r=function(t){var e={showTip:[],hideTip:[]},n=function(i){var r=e[i.type]
r?r.push(i):(i.dispatchAction=n,t.dispatchAction(i))}
return{dispatchAction:n,pendings:e}}(e)
a(o(t).records,(function(t){t&&i(t,n,r.dispatchAction)})),function(t,e){var n,i=t.showTip.length,r=t.hideTip.length
i?n=t.showTip[i-1]:r&&(n=t.hideTip[r-1]),n&&(n.dispatchAction=null,e.dispatchAction(n))}(r.pendings,e)}))}o(t).initialized||(o(t).initialized=!0,n("click",i.cF(u,"click")),n("mousemove",i.cF(u,"mousemove")),n("globalout",l))}(s,e),(o(s).records[t]||(o(s).records[t]={})).handler=n}}function l(t,e,n){t.handler("leave",null,n)}function u(t,e,n,i){e.handler(t,n,i)}function h(t,e){if(!r.A.node){var n=e.getZr();(o(n).records||{})[t]&&(o(n).records[t]=null)}}},6848:(t,e,n)=>{n.d(e,{a:()=>H})
var i=n(5613),r=n(4784),o=n(8301),a=n(7941),s=n(3023),l=n(5652),u=n(8283),h=n(2631),c=n(6885),d=n(7322),p=n(5225),f=(0,p.$r)(),g=o.o8,y=o.oI,v=function(){function t(){this._dragging=!1,this.animationThreshold=15}return t.prototype.render=function(t,e,n,i){var r=e.get("value"),s=e.get("status")
if(this._axisModel=t,this._axisPointerModel=e,this._api=n,i||this._lastValue!==r||this._lastStatus!==s){this._lastValue=r,this._lastStatus=s
var l=this._group,u=this._handle
if(!s||"hide"===s)return l&&l.hide(),void(u&&u.hide())
l&&l.show(),u&&u.show()
var h={}
this.makeElOption(h,r,t,e,n)
var c=h.graphicKey
c!==this._lastGraphicKey&&this.clear(n),this._lastGraphicKey=c
var d=this._moveAnimation=this.determineAnimation(t,e)
if(l){var p=o.cF(m,e,d)
this.updatePointerEl(l,h,p),this.updateLabelEl(l,h,p,e)}else l=this._group=new a.A,this.createPointerEl(l,h,t,e),this.createLabelEl(l,h,t,e),n.getZr().add(l)
w(l,e,!0),this._renderHandle(r)}},t.prototype.remove=function(t){this.clear(t)},t.prototype.dispose=function(t){this.clear(t)},t.prototype.determineAnimation=function(t,e){var n=e.get("animation"),i=t.axis,r="category"===i.type,o=e.get("snap")
if(!o&&!r)return!1
if("auto"===n||null==n){var a=this.animationThreshold
if(r&&i.getBandWidth()>a)return!0
if(o){var s=h.Yc(t).seriesDataCount,l=i.getExtent()
return Math.abs(l[0]-l[1])/s>a}return!1}return!0===n},t.prototype.makeElOption=function(t,e,n,i,r){},t.prototype.createPointerEl=function(t,e,n,i){var r=e.pointer
if(r){var o=f(t).pointerEl=new s[r.type](g(e.pointer))
t.add(o)}},t.prototype.createLabelEl=function(t,e,n,i){if(e.label){var r=f(t).labelEl=new l.Ay(g(e.label))
t.add(r),x(r,i)}},t.prototype.updatePointerEl=function(t,e,n){var i=f(t).pointerEl
i&&e.pointer&&(i.setStyle(e.pointer.style),n(i,{shape:e.pointer.shape}))},t.prototype.updateLabelEl=function(t,e,n,i){var r=f(t).labelEl
r&&(r.setStyle(e.label.style),n(r,{x:e.label.x,y:e.label.y}),x(r,i))},t.prototype._renderHandle=function(t){if(!this._dragging&&this.updateHandleTransform){var e,n=this._axisPointerModel,i=this._api.getZr(),r=this._handle,a=n.getModel("handle"),l=n.get("status")
if(!a.get("show")||!l||"hide"===l)return r&&i.remove(r),void(this._handle=null)
this._handle||(e=!0,r=this._handle=s.createIcon(a.get("icon"),{cursor:"move",draggable:!0,onmousemove:function(t){c.ds(t.event)},onmousedown:y(this._onHandleDragMove,this,0,0),drift:y(this._onHandleDragMove,this),ondragend:y(this._onHandleDragEnd,this)}),i.add(r)),w(r,n,!1),r.setStyle(a.getItemStyle(null,["color","borderColor","borderWidth","opacity","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"]))
var u=a.get("size")
o.cy(u)||(u=[u,u]),r.scaleX=u[0]/2,r.scaleY=u[1]/2,d.N(this,"_doDispatchAxisPointer",a.get("throttle")||0,"fixRate"),this._moveHandleToValue(t,e)}},t.prototype._moveHandleToValue=function(t,e){m(this._axisPointerModel,!e&&this._moveAnimation,this._handle,b(this.getHandleTransform(t,this._axisModel,this._axisPointerModel)))},t.prototype._onHandleDragMove=function(t,e){var n=this._handle
if(n){this._dragging=!0
var i=this.updateHandleTransform(b(n),[t,e],this._axisModel,this._axisPointerModel)
this._payloadInfo=i,n.stopAnimation(),n.attr(b(i)),f(n).lastProp=null,this._doDispatchAxisPointer()}},t.prototype._doDispatchAxisPointer=function(){if(this._handle){var t=this._payloadInfo,e=this._axisModel
this._api.dispatchAction({type:"updateAxisPointer",x:t.cursorPoint[0],y:t.cursorPoint[1],tooltipOption:t.tooltipOption,axesInfo:[{axisDim:e.axis.dim,axisIndex:e.componentIndex}]})}},t.prototype._onHandleDragEnd=function(){if(this._dragging=!1,this._handle){var t=this._axisPointerModel.get("value")
this._moveHandleToValue(t),this._api.dispatchAction({type:"hideTip"})}},t.prototype.clear=function(t){this._lastValue=null,this._lastStatus=null
var e=t.getZr(),n=this._group,i=this._handle
e&&n&&(this._lastGraphicKey=null,n&&e.remove(n),i&&e.remove(i),this._group=null,this._handle=null,this._payloadInfo=null),d.IU(this,"_doDispatchAxisPointer")},t.prototype.doClear=function(){},t.prototype.buildLabel=function(t,e,n){return{x:t[n=n||0],y:t[1-n],width:e[n],height:e[1-n]}},t}()
function m(t,e,n,i){_(f(n).lastProp,i)||(f(n).lastProp=i,e?u.oi(n,i,t):(n.stopAnimation(),n.attr(i)))}function _(t,e){if(o.Gv(t)&&o.Gv(e)){var n=!0
return o.__(e,(function(e,i){n=n&&_(t[i],e)})),!!n}return t===e}function x(t,e){t[e.get(["label","show"])?"show":"hide"]()}function b(t){return{x:t.x||0,y:t.y||0,rotation:t.rotation||0}}function w(t,e,n){var i=e.get("z"),r=e.get("zlevel")
t&&t.traverse((function(t){"group"!==t.type&&(null!=i&&(t.z=i),null!=r&&(t.zlevel=r),t.silent=n)}))}const A=v
var S=n(6229),M=n(9271),T=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,r.C6)(e,t),e.prototype.makeElOption=function(t,e,n,i,r){var o=n.axis,a=o.grid,s=i.get("type"),l=I(a,o).getOtherAxis(o).getGlobalExtent(),u=o.toGlobalCoord(o.dataToCoord(e,!0))
if(s&&"none"!==s){var h=S.bY(i),c=C[s](o,u,l)
c.style=h,t.graphicKey=c.type,t.pointer=c}var d=M.Zp(a.model,n)
S.DA(e,t,d,n,i,r)},e.prototype.getHandleTransform=function(t,e,n){var i=M.Zp(e.axis.grid.model,e,{labelInside:!1})
i.labelMargin=n.get(["handle","margin"])
var r=S.Tc(e.axis,t,i)
return{x:r[0],y:r[1],rotation:i.rotation+(i.labelDirection<0?Math.PI:0)}},e.prototype.updateHandleTransform=function(t,e,n,i){var r=n.axis,o=r.grid,a=r.getGlobalExtent(!0),s=I(o,r).getOtherAxis(r).getGlobalExtent(),l="x"===r.dim?0:1,u=[t.x,t.y]
u[l]+=e[l],u[l]=Math.min(a[1],u[l]),u[l]=Math.max(a[0],u[l])
var h=(s[1]+s[0])/2,c=[h,h]
return c[l]=u[l],{x:u[0],y:u[1],rotation:t.rotation,cursorPoint:c,tooltipOption:[{verticalAlign:"middle"},{align:"center"}][l]}},e}(A)
function I(t,e){var n={}
return n[e.dim+"AxisIndex"]=e.index,t.getCartesian(n)}var C={line:function(t,e,n){return{type:"Line",subPixelOptimize:!0,shape:S.MU([e,n[0]],[e,n[1]],D(t))}},shadow:function(t,e,n){var i=Math.max(1,t.getBandWidth()),r=n[1]-n[0]
return{type:"Rect",shape:S.cU([e-i/2,n[0]],[i,r],D(t))}}}
function D(t){return"x"===t.dim?0:1}const k=T,L=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n}return(0,r.C6)(e,t),e.type="axisPointer",e.defaultOption={show:"auto",z:50,type:"line",snap:!1,triggerTooltip:!0,triggerEmphasis:!0,value:null,status:null,link:[],animation:null,animationDurationUpdate:200,lineStyle:{color:"#B9BEC9",width:1,type:"dashed"},shadowStyle:{color:"rgba(210,219,238,0.2)"},label:{show:!0,formatter:null,precision:"auto",margin:3,color:"#fff",padding:[5,7,5,7],backgroundColor:"auto",borderColor:null,borderWidth:0,borderRadius:3},handle:{show:!1,icon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",size:45,margin:50,color:"#333",shadowBlur:3,shadowColor:"#aaa",shadowOffsetX:0,shadowOffsetY:2,throttle:40}},e}(n(7518).A)
var P=n(6631)
const O=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n}return(0,r.C6)(e,t),e.prototype.render=function(t,e,n){var i=e.getComponent("tooltip"),r=t.get("triggerOn")||i&&i.get("triggerOn")||"mousemove|click"
P.k("axisPointer",n,(function(t,e,n){"none"!==r&&("leave"===t||r.indexOf(t)>=0)&&n({type:"updateAxisPointer",currTrigger:t,x:e&&e.offsetX,y:e&&e.offsetY})}))},e.prototype.remove=function(t,e){P.h("axisPointer",e)},e.prototype.dispose=function(t,e){P.h("axisPointer",e)},e.type="axisPointer",e}(n(4642).A)
var N=n(4496),R=(0,p.$r)()
function E(t,e,n){var i=t.currTrigger,r=[t.x,t.y],a=t,s=t.dispatchAction||(0,o.oI)(n.dispatchAction,n),l=e.getComponent("axisPointer").coordSysAxesInfo
if(l){W(r)&&(r=(0,N.A)({seriesIndex:a.seriesIndex,dataIndex:a.dataIndex},e).point)
var u=W(r),h=a.axesInfo,c=l.axesInfo,d="leave"===i||W(r),p={},f={},g={list:[],map:{}},y={showPointer:(0,o.cF)(B,f),showTooltip:(0,o.cF)(V,g)};(0,o.__)(l.coordSysMap,(function(t,e){var n=u||t.containPoint(r);(0,o.__)(l.coordSysAxesInfo[e],(function(t,e){var i=t.axis,o=function(t,e){for(var n=0;n<(t||[]).length;n++){var i=t[n]
if(e.axis.dim===i.axisDim&&e.axis.model.componentIndex===i.axisIndex)return i}}(h,t)
if(!d&&n&&(!h||o)){var a=o&&o.value
null!=a||u||(a=i.pointToData(r)),null!=a&&z(t,a,y,!1,p)}}))}))
var v={}
return(0,o.__)(c,(function(t,e){var n=t.linkGroup
n&&!f[e]&&(0,o.__)(n.axesInfo,(function(e,i){var r=f[i]
if(e!==t&&r){var o=r.value
n.mapper&&(o=t.axis.scale.parse(n.mapper(o,F(e),F(t)))),v[t.key]=o}}))})),(0,o.__)(v,(function(t,e){z(c[e],t,y,!0,p)})),function(t,e,n){var i=n.axesInfo=[];(0,o.__)(e,(function(e,n){var r=e.axisPointerModel.option,o=t[n]
o?(!e.useHandle&&(r.status="show"),r.value=o.value,r.seriesDataIndices=(o.payloadBatch||[]).slice()):!e.useHandle&&(r.status="hide"),"show"===r.status&&i.push({axisDim:e.axis.dim,axisIndex:e.axis.model.componentIndex,value:r.value})}))}(f,c,p),function(t,e,n,i){if(!W(e)&&t.list.length){var r=((t.list[0].dataByAxis[0]||{}).seriesDataIndices||[])[0]||{}
i({type:"showTip",escapeConnect:!0,x:e[0],y:e[1],tooltipOption:n.tooltipOption,position:n.position,dataIndexInside:r.dataIndexInside,dataIndex:r.dataIndex,seriesIndex:r.seriesIndex,dataByCoordSys:t.list})}else i({type:"hideTip"})}(g,r,t,s),function(t,e,n){var i=n.getZr(),r="axisPointerLastHighlights",a=R(i)[r]||{},s=R(i)[r]={};(0,o.__)(t,(function(t,e){var n=t.axisPointerModel.option
"show"===n.status&&t.triggerEmphasis&&(0,o.__)(n.seriesDataIndices,(function(t){var e=t.seriesIndex+" | "+t.dataIndex
s[e]=t}))}))
var l=[],u=[];(0,o.__)(a,(function(t,e){!s[e]&&u.push(t)})),(0,o.__)(s,(function(t,e){!a[e]&&l.push(t)})),u.length&&n.dispatchAction({type:"downplay",escapeConnect:!0,notBlur:!0,batch:u}),l.length&&n.dispatchAction({type:"highlight",escapeConnect:!0,notBlur:!0,batch:l})}(c,0,n),p}}function z(t,e,n,i,r){var a=t.axis
if(!a.scale.isBlank()&&a.containData(e))if(t.involveSeries){var s=function(t,e){var n=e.axis,i=n.dim,r=t,a=[],s=Number.MAX_VALUE,l=-1
return(0,o.__)(e.seriesModels,(function(e,u){var h,c,d=e.getData().mapDimensionsAll(i)
if(e.getAxisTooltipData){var p=e.getAxisTooltipData(d,t,n)
c=p.dataIndices,h=p.nestestValue}else{if(!(c=e.getData().indicesOfNearest(d[0],t,"category"===n.type?.5:null)).length)return
h=e.getData().get(d[0],c[0])}if(null!=h&&isFinite(h)){var f=t-h,g=Math.abs(f)
g<=s&&((g<s||f>=0&&l<0)&&(s=g,l=f,r=h,a.length=0),(0,o.__)(c,(function(t){a.push({seriesIndex:e.seriesIndex,dataIndexInside:t,dataIndex:e.getData().getRawIndex(t)})})))}})),{payloadBatch:a,snapToValue:r}}(e,t),l=s.payloadBatch,u=s.snapToValue
l[0]&&null==r.seriesIndex&&(0,o.X$)(r,l[0]),!i&&t.snap&&a.containData(u)&&null!=u&&(e=u),n.showPointer(t,e,l),n.showTooltip(t,s,u)}else n.showPointer(t,e)}function B(t,e,n,i){t[e.key]={value:n,payloadBatch:i}}function V(t,e,n,i){var r=n.payloadBatch,o=e.axis,a=o.model,s=e.axisPointerModel
if(e.triggerTooltip&&r.length){var l=e.coordSys.model,u=h.og(l),c=t.map[u]
c||(c=t.map[u]={coordSysId:l.id,coordSysIndex:l.componentIndex,coordSysType:l.type,coordSysMainType:l.mainType,dataByAxis:[]},t.list.push(c)),c.dataByAxis.push({axisDim:o.dim,axisIndex:a.componentIndex,axisType:a.type,axisId:a.id,value:i,valueLabelOpt:{precision:s.get(["label","precision"]),formatter:s.get(["label","formatter"])},seriesDataIndices:r.slice()})}}function F(t){var e=t.axis.model,n={},i=n.axisDim=t.axis.dim
return n.axisIndex=n[i+"AxisIndex"]=e.componentIndex,n.axisName=n[i+"AxisName"]=e.name,n.axisId=n[i+"AxisId"]=e.id,n}function W(t){return!t||null==t[0]||isNaN(t[0])||null==t[1]||isNaN(t[1])}function H(t){i.A.registerAxisPointerClass("CartesianAxisPointer",k),t.registerComponentModel(L),t.registerComponentView(O),t.registerPreprocessor((function(t){if(t){(!t.axisPointer||0===t.axisPointer.length)&&(t.axisPointer={})
var e=t.axisPointer.link
e&&!(0,o.cy)(e)&&(t.axisPointer.link=[e])}})),t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC,(function(t,e){t.getComponent("axisPointer").coordSysAxesInfo=(0,h.Fo)(t,e)})),t.registerAction({type:"updateAxisPointer",event:"updateAxisPointer",update:":updateAxisPointer"},E)}},2631:(t,e,n)=>{n.d(e,{Fo:()=>o,Yc:()=>l,h_:()=>s,mg:()=>u,og:()=>c})
var i=n(7413),r=n(8301)
function o(t,e){var n={axesInfo:{},seriesInvolved:!1,coordSysAxesInfo:{},coordSysMap:{}}
return function(t,e,n){var o=e.getComponent("tooltip"),s=e.getComponent("axisPointer"),l=s.get("link",!0)||[],u=[];(0,r.__)(n.getCoordinateSystems(),(function(n){if(n.axisPointerEnabled){var d=c(n.model),p=t.coordSysAxesInfo[d]={}
t.coordSysMap[d]=n
var f=n.model.getModel("tooltip",o)
if((0,r.__)(n.getAxes(),(0,r.cF)(m,!1,null)),n.getTooltipAxes&&o&&f.get("show")){var g="axis"===f.get("trigger"),y="cross"===f.get(["axisPointer","type"]),v=n.getTooltipAxes(f.get(["axisPointer","axis"]));(g||y)&&(0,r.__)(v.baseAxes,(0,r.cF)(m,!y||"cross",g)),y&&(0,r.__)(v.otherAxes,(0,r.cF)(m,"cross",!1))}}function m(o,d,g){var y=g.model.getModel("axisPointer",s),v=y.get("show")
if(v&&("auto"!==v||o||h(y))){null==d&&(d=y.get("triggerTooltip")),y=o?function(t,e,n,o,a,s){var l=e.getModel("axisPointer"),u={};(0,r.__)(["type","snap","lineStyle","shadowStyle","label","animation","animationDurationUpdate","animationEasingUpdate","z"],(function(t){u[t]=(0,r.o8)(l.get(t))})),u.snap="category"!==t.type&&!!s,"cross"===l.get("type")&&(u.type="line")
var h=u.label||(u.label={})
if(null==h.show&&(h.show=!1),"cross"===a){var c=l.get(["label","show"])
if(h.show=null==c||c,!s){var d=u.lineStyle=l.get("crossStyle")
d&&(0,r.NT)(h,d.textStyle)}}return t.model.getModel("axisPointer",new i.A(u,n,o))}(g,f,s,e,o,d):y
var m=y.get("snap"),_=y.get("triggerEmphasis"),x=c(g.model),b=d||m||"category"===g.type,w=t.axesInfo[x]={key:x,axis:g,coordSys:n,axisPointerModel:y,triggerTooltip:d,triggerEmphasis:_,involveSeries:b,snap:m,useHandle:h(y),seriesModels:[],linkGroup:null}
p[x]=w,t.seriesInvolved=t.seriesInvolved||b
var A=function(t,e){for(var n=e.model,i=e.dim,r=0;r<t.length;r++){var o=t[r]||{}
if(a(o[i+"AxisId"],n.id)||a(o[i+"AxisIndex"],n.componentIndex)||a(o[i+"AxisName"],n.name))return r}}(l,g)
if(null!=A){var S=u[A]||(u[A]={axesInfo:{}})
S.axesInfo[x]=w,S.mapper=l[A].mapper,w.linkGroup=S}}}}))}(n,t,e),n.seriesInvolved&&function(t,e){e.eachSeries((function(e){var n=e.coordinateSystem,i=e.get(["tooltip","trigger"],!0),o=e.get(["tooltip","show"],!0)
n&&"none"!==i&&!1!==i&&"item"!==i&&!1!==o&&!1!==e.get(["axisPointer","show"],!0)&&(0,r.__)(t.coordSysAxesInfo[c(n.model)],(function(t){var i=t.axis
n.getAxis(i.dim)===i&&(t.seriesModels.push(e),null==t.seriesDataCount&&(t.seriesDataCount=0),t.seriesDataCount+=e.getData().count())}))}))}(n,t),n}function a(t,e){return"all"===t||(0,r.cy)(t)&&(0,r.qh)(t,e)>=0||t===e}function s(t){var e=l(t)
if(e){var n=e.axisPointerModel,i=e.axis.scale,r=n.option,o=n.get("status"),a=n.get("value")
null!=a&&(a=i.parse(a))
var s=h(n)
null==o&&(r.status=s?"show":"hide")
var u=i.getExtent().slice()
u[0]>u[1]&&u.reverse(),(null==a||a>u[1])&&(a=u[1]),a<u[0]&&(a=u[0]),r.value=a,s&&(r.status=e.axis.scale.isBlank()?"hide":"show")}}function l(t){var e=(t.ecModel.getComponent("axisPointer")||{}).coordSysAxesInfo
return e&&e.axesInfo[c(t)]}function u(t){var e=l(t)
return e&&e.axisPointerModel}function h(t){return!!t.get(["handle","show"])}function c(t){return t.type+"||"+t.id}},6229:(t,e,n)=>{n.d(e,{DA:()=>f,MU:()=>g,Tc:()=>p,_F:()=>d,bY:()=>c,cU:()=>y})
var i=n(8301),r=n(3023),o=n(7627),a=n(3473),s=n(7432),l=n(4753),u=n(6113),h=n(923)
function c(t){var e,n=t.get("type"),i=t.getModel(n+"Style")
return"line"===n?(e=i.getLineStyle()).fill=null:"shadow"===n&&((e=i.getAreaStyle()).stroke=null),e}function d(t,e,n,r,o){t=e.scale.parse(t)
var a=e.scale.getLabel({value:t},{precision:o.precision}),s=o.formatter
if(s){var u={value:l.Dt(e,{value:t}),axisDimension:e.dim,axisIndex:e.index,seriesData:[]}
i.__(r,(function(t){var e=n.getSeriesByIndex(t.seriesIndex),i=t.dataIndexInside,r=e&&e.getDataParams(i)
r&&u.seriesData.push(r)})),i.Kg(s)?a=s.replace("{value}",a):i.Tn(s)&&(a=s(u))}return a}function p(t,e,n){var i=s.vt()
return s.e$(i,i,n.rotation),s.Tl(i,i,n.position),r.applyTransform([t.dataToCoord(e),(n.labelOffset||0)+(n.labelDirection||1)*(n.labelMargin||0)],i)}function f(t,e,n,i,r,s){var l=u.A.innerTextLayout(n.rotation,0,n.labelDirection)
n.labelMargin=r.get(["label","margin"]),function(t,e,n,i,r){var s=d(n.get("value"),e.axis,e.ecModel,n.get("seriesDataIndices"),{precision:n.get(["label","precision"]),formatter:n.get(["label","formatter"])}),l=n.getModel("label"),u=a.QX(l.get("padding")||0),c=l.getFont(),p=o.NO(s,c),f=r.position,g=p.width+u[1]+u[3],y=p.height+u[0]+u[2],v=r.align
"right"===v&&(f[0]-=g),"center"===v&&(f[0]-=g/2)
var m=r.verticalAlign
"bottom"===m&&(f[1]-=y),"middle"===m&&(f[1]-=y/2),function(t,e,n,i){var r=i.getWidth(),o=i.getHeight()
t[0]=Math.min(t[0]+e,r)-e,t[1]=Math.min(t[1]+n,o)-n,t[0]=Math.max(t[0],0),t[1]=Math.max(t[1],0)}(f,g,y,i)
var _=l.get("backgroundColor")
_&&"auto"!==_||(_=e.get(["axisLine","lineStyle","color"])),t.label={x:f[0],y:f[1],style:(0,h.VB)(l,{text:s,font:c,fill:l.getTextColor(),padding:u,backgroundColor:_}),z2:10}}(e,i,r,s,{position:p(i.axis,t,n),align:l.textAlign,verticalAlign:l.textVerticalAlign})}function g(t,e,n){return{x1:t[n=n||0],y1:t[1-n],x2:e[n],y2:e[1-n]}}function y(t,e,n){return{x:t[n=n||0],y:t[1-n],width:e[n],height:e[1-n]}}},1375:(t,e,n)=>{n.d(e,{a:()=>ht})
var i=n(2862),r=n(4784),o=n(8301),a=n(7518),s=["x","y","radius","angle","single"],l=["cartesian2d","polar","singleAxis"]
function u(t){return t+"Axis"}function h(t){var e=t.ecModel,n={infoList:[],infoMap:(0,o.nt)()}
return t.eachTargetAxis((function(t,i){var r=e.getComponent(u(t),i)
if(r){var o=r.getCoordSysModel()
if(o){var a=o.uid,s=n.infoMap.get(a)
s||(s={model:o,axisModels:[]},n.infoList.push(s),n.infoMap.set(a,s)),s.axisModels.push(r)}}})),n}var c=n(5225),d=function(){function t(){this.indexList=[],this.indexMap=[]}return t.prototype.add=function(t){this.indexMap[t]||(this.indexList.push(t),this.indexMap[t]=!0)},t}()
function p(t){var e={}
return(0,o.__)(["start","end","startValue","endValue","throttle"],(function(n){t.hasOwnProperty(n)&&(e[n]=t[n])})),e}const f=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n._autoThrottle=!0,n._noTarget=!0,n._rangePropMode=["percent","percent"],n}return(0,r.C6)(e,t),e.prototype.init=function(t,e,n){var i=p(t)
this.settledOption=i,this.mergeDefaultAndTheme(t,n),this._doInit(i)},e.prototype.mergeOption=function(t){var e=p(t);(0,o.h1)(this.option,t,!0),(0,o.h1)(this.settledOption,e,!0),this._doInit(e)},e.prototype._doInit=function(t){var e=this.option
this._setDefaultThrottle(t),this._updateRangeUse(t)
var n=this.settledOption;(0,o.__)([["start","startValue"],["end","endValue"]],(function(t,i){"value"===this._rangePropMode[i]&&(e[t[0]]=n[t[0]]=null)}),this),this._resetTarget()},e.prototype._resetTarget=function(){var t=this.get("orient",!0),e=this._targetAxisInfoMap=(0,o.nt)()
this._fillSpecifiedTargetAxis(e)?this._orient=t||this._makeAutoOrientByTargetAxis():(this._orient=t||"horizontal",this._fillAutoTargetAxisByOrient(e,this._orient)),this._noTarget=!0,e.each((function(t){t.indexList.length&&(this._noTarget=!1)}),this)},e.prototype._fillSpecifiedTargetAxis=function(t){var e=!1
return(0,o.__)(s,(function(n){var i=this.getReferringComponents(u(n),c.UW)
if(i.specified){e=!0
var r=new d;(0,o.__)(i.models,(function(t){r.add(t.componentIndex)})),t.set(n,r)}}),this),e},e.prototype._fillAutoTargetAxisByOrient=function(t,e){var n=this.ecModel,i=!0
if(i){var r="vertical"===e?"y":"x"
a(n.findComponents({mainType:r+"Axis"}),r)}function a(e,n){var r=e[0]
if(r){var a=new d
if(a.add(r.componentIndex),t.set(n,a),i=!1,"x"===n||"y"===n){var s=r.getReferringComponents("grid",c.US).models[0]
s&&(0,o.__)(e,(function(t){r.componentIndex!==t.componentIndex&&s===t.getReferringComponents("grid",c.US).models[0]&&a.add(t.componentIndex)}))}}}i&&a(n.findComponents({mainType:"singleAxis",filter:function(t){return t.get("orient",!0)===e}}),"single"),i&&(0,o.__)(s,(function(e){if(i){var r=n.findComponents({mainType:u(e),filter:function(t){return"category"===t.get("type",!0)}})
if(r[0]){var o=new d
o.add(r[0].componentIndex),t.set(e,o),i=!1}}}),this)},e.prototype._makeAutoOrientByTargetAxis=function(){var t
return this.eachTargetAxis((function(e){!t&&(t=e)}),this),"y"===t?"vertical":"horizontal"},e.prototype._setDefaultThrottle=function(t){if(t.hasOwnProperty("throttle")&&(this._autoThrottle=!1),this._autoThrottle){var e=this.ecModel.option
this.option.throttle=e.animation&&e.animationDurationUpdate>0?100:20}},e.prototype._updateRangeUse=function(t){var e=this._rangePropMode,n=this.get("rangeMode");(0,o.__)([["start","startValue"],["end","endValue"]],(function(i,r){var o=null!=t[i[0]],a=null!=t[i[1]]
o&&!a?e[r]="percent":!o&&a?e[r]="value":n?e[r]=n[r]:o&&(e[r]="percent")}))},e.prototype.noTarget=function(){return this._noTarget},e.prototype.getFirstTargetAxisModel=function(){var t
return this.eachTargetAxis((function(e,n){null==t&&(t=this.ecModel.getComponent(u(e),n))}),this),t},e.prototype.eachTargetAxis=function(t,e){this._targetAxisInfoMap.each((function(n,i){(0,o.__)(n.indexList,(function(n){t.call(e,i,n)}))}))},e.prototype.getAxisProxy=function(t,e){var n=this.getAxisModel(t,e)
if(n)return n.__dzAxisProxy},e.prototype.getAxisModel=function(t,e){var n=this._targetAxisInfoMap.get(t)
if(n&&n.indexMap[e])return this.ecModel.getComponent(u(t),e)},e.prototype.setRawRange=function(t){var e=this.option,n=this.settledOption;(0,o.__)([["start","startValue"],["end","endValue"]],(function(i){null==t[i[0]]&&null==t[i[1]]||(e[i[0]]=n[i[0]]=t[i[0]],e[i[1]]=n[i[1]]=t[i[1]])}),this),this._updateRangeUse(t)},e.prototype.setCalculatedRange=function(t){var e=this.option;(0,o.__)(["start","startValue","end","endValue"],(function(n){e[n]=t[n]}))},e.prototype.getPercentRange=function(){var t=this.findRepresentativeAxisProxy()
if(t)return t.getDataPercentWindow()},e.prototype.getValueRange=function(t,e){if(null!=t||null!=e)return this.getAxisProxy(t,e).getDataValueWindow()
var n=this.findRepresentativeAxisProxy()
return n?n.getDataValueWindow():void 0},e.prototype.findRepresentativeAxisProxy=function(t){if(t)return t.__dzAxisProxy
for(var e,n=this._targetAxisInfoMap.keys(),i=0;i<n.length;i++)for(var r=n[i],o=this._targetAxisInfoMap.get(r),a=0;a<o.indexList.length;a++){var s=this.getAxisProxy(r,o.indexList[a])
if(s.hostedBy(this))return s
e||(e=s)}return e},e.prototype.getRangePropMode=function(){return this._rangePropMode.slice()},e.prototype.getOrient=function(){return this._orient},e.type="dataZoom",e.dependencies=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","series","toolbox"],e.defaultOption={z:4,filterMode:"filter",start:0,end:100},e}(a.A)
var g=n(5019)
const y=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n}return(0,r.C6)(e,t),e.type="dataZoom.inside",e.defaultOption=(0,g.G_)(f.defaultOption,{disabled:!1,zoomLock:!1,zoomOnMouseWheel:!0,moveOnMouseMove:!0,moveOnMouseWheel:!1,preventDefaultMouseMove:!0}),e}(f),v=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n}return(0,r.C6)(e,t),e.prototype.render=function(t,e,n,i){this.dataZoomModel=t,this.ecModel=e,this.api=n},e.type="dataZoom",e}(n(4642).A)
function m(t,e,n,i,r,o){t=t||0
var a=n[1]-n[0]
if(null!=r&&(r=x(r,[0,a])),null!=o&&(o=Math.max(o,null!=r?r:0)),"all"===i){var s=Math.abs(e[1]-e[0])
s=x(s,[0,a]),r=o=x(s,[r,o]),i=0}e[0]=x(e[0],n),e[1]=x(e[1],n)
var l=_(e,i)
e[i]+=t
var u,h=r||0,c=n.slice()
return l.sign<0?c[0]+=h:c[1]-=h,e[i]=x(e[i],c),u=_(e,i),null!=r&&(u.sign!==l.sign||u.span<r)&&(e[1-i]=e[i]+l.sign*r),u=_(e,i),null!=o&&u.span>o&&(e[1-i]=e[i]+u.sign*o),e}function _(t,e){var n=t[e]-t[1-e]
return{span:Math.abs(n),sign:n>0?-1:n<0?1:e?-1:1}}function x(t,e){return Math.min(null!=e[1]?e[1]:1/0,Math.max(null!=e[0]?e[0]:-1/0,t))}var b=n(2566),w=n(7322),A=(0,c.$r)()
function S(t,e){if(e){t.removeKey(e.model.uid)
var n=e.controller
n&&n.dispose()}}function M(t,e){t.isDisposed()||t.dispatchAction({type:"dataZoom",animation:{easing:"cubicOut",duration:100},batch:e})}function T(t,e,n,i){return t.coordinateSystem.containPoint([n,i])}var I=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this
return e.type="dataZoom.inside",e}return(0,r.C6)(e,t),e.prototype.render=function(e,n,i){t.prototype.render.apply(this,arguments),e.noTarget()?this._clear():(this.range=e.getPercentRange(),function(t,e,n){A(t).coordSysRecordMap.each((function(t){var i=t.dataZoomInfoMap.get(e.uid)
i&&(i.getRange=n)}))}(i,e,{pan:(0,o.oI)(C.pan,this),zoom:(0,o.oI)(C.zoom,this),scrollMove:(0,o.oI)(C.scrollMove,this)}))},e.prototype.dispose=function(){this._clear(),t.prototype.dispose.apply(this,arguments)},e.prototype._clear=function(){!function(t,e){for(var n=A(t).coordSysRecordMap,i=n.keys(),r=0;r<i.length;r++){var o=i[r],a=n.get(o),s=a.dataZoomInfoMap
if(s){var l=e.uid
s.get(l)&&(s.removeKey(l),s.keys().length||S(n,a))}}}(this.api,this.dataZoomModel),this.range=null},e.type="dataZoom.inside",e}(v),C={zoom:function(t,e,n,i){var r=this.range,o=r.slice(),a=t.axisModels[0]
if(a){var s=k[e](null,[i.originX,i.originY],a,n,t),l=(s.signal>0?s.pixelStart+s.pixelLength-s.pixel:s.pixel-s.pixelStart)/s.pixelLength*(o[1]-o[0])+o[0],u=Math.max(1/i.scale,0)
o[0]=(o[0]-l)*u+l,o[1]=(o[1]-l)*u+l
var h=this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan()
return m(0,o,[0,100],0,h.minSpan,h.maxSpan),this.range=o,r[0]!==o[0]||r[1]!==o[1]?o:void 0}},pan:D((function(t,e,n,i,r,o){var a=k[i]([o.oldX,o.oldY],[o.newX,o.newY],e,r,n)
return a.signal*(t[1]-t[0])*a.pixel/a.pixelLength})),scrollMove:D((function(t,e,n,i,r,o){return k[i]([0,0],[o.scrollDelta,o.scrollDelta],e,r,n).signal*(t[1]-t[0])*o.scrollDelta}))}
function D(t){return function(e,n,i,r){var o=this.range,a=o.slice(),s=e.axisModels[0]
if(s)return m(t(a,s,e,n,i,r),a,[0,100],"all"),this.range=a,o[0]!==a[0]||o[1]!==a[1]?a:void 0}}var k={grid:function(t,e,n,i,r){var o=n.axis,a={},s=r.model.coordinateSystem.getRect()
return t=t||[0,0],"x"===o.dim?(a.pixel=e[0]-t[0],a.pixelLength=s.width,a.pixelStart=s.x,a.signal=o.inverse?1:-1):(a.pixel=e[1]-t[1],a.pixelLength=s.height,a.pixelStart=s.y,a.signal=o.inverse?-1:1),a},polar:function(t,e,n,i,r){var o=n.axis,a={},s=r.model.coordinateSystem,l=s.getRadiusAxis().getExtent(),u=s.getAngleAxis().getExtent()
return t=t?s.pointToCoord(t):[0,0],e=s.pointToCoord(e),"radiusAxis"===n.mainType?(a.pixel=e[0]-t[0],a.pixelLength=l[1]-l[0],a.pixelStart=l[0],a.signal=o.inverse?1:-1):(a.pixel=e[1]-t[1],a.pixelLength=u[1]-u[0],a.pixelStart=u[0],a.signal=o.inverse?-1:1),a},singleAxis:function(t,e,n,i,r){var o=n.axis,a=r.model.coordinateSystem.getRect(),s={}
return t=t||[0,0],"horizontal"===o.orient?(s.pixel=e[0]-t[0],s.pixelLength=a.width,s.pixelStart=a.x,s.signal=o.inverse?1:-1):(s.pixel=e[1]-t[1],s.pixelLength=a.height,s.pixelStart=a.y,s.signal=o.inverse?-1:1),s}}
const L=I
var P=n(3947),O=n(4753),N=n(7797),R=o.__,E=P.Y6
const z=function(){function t(t,e,n,i){this._dimName=t,this._axisIndex=e,this.ecModel=i,this._dataZoomModel=n}return t.prototype.hostedBy=function(t){return this._dataZoomModel===t},t.prototype.getDataValueWindow=function(){return this._valueWindow.slice()},t.prototype.getDataPercentWindow=function(){return this._percentWindow.slice()},t.prototype.getTargetSeriesModels=function(){var t=[]
return this.ecModel.eachSeries((function(e){if(function(t){var e=t.get("coordinateSystem")
return(0,o.qh)(l,e)>=0}(e)){var n=u(this._dimName),i=e.getReferringComponents(n,c.US).models[0]
i&&this._axisIndex===i.componentIndex&&t.push(e)}}),this),t},t.prototype.getAxisModel=function(){return this.ecModel.getComponent(this._dimName+"Axis",this._axisIndex)},t.prototype.getMinMaxSpan=function(){return o.o8(this._minMaxSpan)},t.prototype.calculateDataWindow=function(t){var e,n=this._dataExtent,i=this.getAxisModel().axis.scale,r=this._dataZoomModel.getRangePropMode(),o=[0,100],a=[],s=[]
R(["start","end"],(function(l,u){var h=t[l],c=t[l+"Value"]
"percent"===r[u]?(null==h&&(h=o[u]),c=i.parse(P.Cb(h,o,n))):(e=!0,c=null==c?n[u]:i.parse(c),h=P.Cb(c,n,o)),s[u]=null==c||isNaN(c)?n[u]:c,a[u]=null==h||isNaN(h)?o[u]:h})),E(s),E(a)
var l=this._minMaxSpan
function u(t,e,n,r,o){var a=o?"Span":"ValueSpan"
m(0,t,n,"all",l["min"+a],l["max"+a])
for(var s=0;s<2;s++)e[s]=P.Cb(t[s],n,r,!0),o&&(e[s]=i.parse(e[s]))}return e?u(s,a,n,o,!1):u(a,s,o,n,!0),{valueWindow:s,percentWindow:a}},t.prototype.reset=function(t){if(t===this._dataZoomModel){var e=this.getTargetSeriesModels()
this._dataExtent=function(t,e,n){var i=[1/0,-1/0]
R(n,(function(t){(0,O.PN)(i,t.getData(),e)}))
var r=t.getAxisModel(),o=(0,N.Tc)(r.axis.scale,r,i).calculate()
return[o.min,o.max]}(this,this._dimName,e),this._updateMinMaxSpan()
var n=this.calculateDataWindow(t.settledOption)
this._valueWindow=n.valueWindow,this._percentWindow=n.percentWindow,this._setAxisModel()}},t.prototype.filterData=function(t,e){if(t===this._dataZoomModel){var n=this._dimName,i=this.getTargetSeriesModels(),r=t.get("filterMode"),a=this._valueWindow
"none"!==r&&R(i,(function(t){var e=t.getData(),i=e.mapDimensionsAll(n)
if(i.length){if("weakFilter"===r){var s=e.getStore(),l=o.Tj(i,(function(t){return e.getDimensionIndex(t)}),e)
e.filterSelf((function(t){for(var e,n,r,o=0;o<i.length;o++){var u=s.get(l[o],t),h=!isNaN(u),c=u<a[0],d=u>a[1]
if(h&&!c&&!d)return!0
h&&(r=!0),c&&(e=!0),d&&(n=!0)}return r&&e&&n}))}else R(i,(function(n){if("empty"===r)t.setData(e=e.map(n,(function(t){return function(t){return t>=a[0]&&t<=a[1]}(t)?t:NaN})))
else{var i={}
i[n]=a,e.selectRange(i)}}))
R(i,(function(t){e.setApproximateExtent(a,t)}))}}))}},t.prototype._updateMinMaxSpan=function(){var t=this._minMaxSpan={},e=this._dataZoomModel,n=this._dataExtent
R(["min","max"],(function(i){var r=e.get(i+"Span"),o=e.get(i+"ValueSpan")
null!=o&&(o=this.getAxisModel().axis.scale.parse(o)),null!=o?r=P.Cb(n[0]+o,n,[0,100],!0):null!=r&&(o=P.Cb(r,[0,100],n,!0)-n[0]),t[i+"Span"]=r,t[i+"ValueSpan"]=o}),this)},t.prototype._setAxisModel=function(){var t=this.getAxisModel(),e=this._percentWindow,n=this._valueWindow
if(e){var i=P.hb(n,[0,500])
i=Math.min(i,20)
var r=t.axis.scale.rawExtentInfo
0!==e[0]&&r.setDeterminedMinMax("min",+n[0].toFixed(i)),100!==e[1]&&r.setDeterminedMinMax("max",+n[1].toFixed(i)),r.freeze()}},t}(),B={getTargetSeries:function(t){function e(e){t.eachComponent("dataZoom",(function(n){n.eachTargetAxis((function(i,r){var o=t.getComponent(u(i),r)
e(i,r,o,n)}))}))}e((function(t,e,n,i){n.__dzAxisProxy=null}))
var n=[]
e((function(e,i,r,o){r.__dzAxisProxy||(r.__dzAxisProxy=new z(e,i,o,t),n.push(r.__dzAxisProxy))}))
var i=(0,o.nt)()
return(0,o.__)(n,(function(t){(0,o.__)(t.getTargetSeriesModels(),(function(t){i.set(t.uid,t)}))})),i},overallReset:function(t,e){t.eachComponent("dataZoom",(function(t){t.eachTargetAxis((function(e,n){t.getAxisProxy(e,n).reset(t)})),t.eachTargetAxis((function(n,i){t.getAxisProxy(n,i).filterData(t,e)}))})),t.eachComponent("dataZoom",(function(t){var e=t.findRepresentativeAxisProxy()
if(e){var n=e.getDataPercentWindow(),i=e.getDataValueWindow()
t.setCalculatedRange({start:n[0],end:n[1],startValue:i[0],endValue:i[1]})}}))}}
var V=!1
function F(t){V||(V=!0,t.registerProcessor(t.PRIORITY.PROCESSOR.FILTER,B),function(t){t.registerAction("dataZoom",(function(t,e){var n=function(t,e){var n,i=(0,o.nt)(),r=[],a=(0,o.nt)()
t.eachComponent({mainType:"dataZoom",query:e},(function(t){a.get(t.uid)||l(t)}))
do{n=!1,t.eachComponent("dataZoom",s)}while(n)
function s(t){!a.get(t.uid)&&function(t){var e=!1
return t.eachTargetAxis((function(t,n){var r=i.get(t)
r&&r[n]&&(e=!0)})),e}(t)&&(l(t),n=!0)}function l(t){a.set(t.uid,!0),r.push(t),t.eachTargetAxis((function(t,e){(i.get(t)||i.set(t,[]))[e]=!0}))}return r}(e,t);(0,o.__)(n,(function(e){e.setRawRange({start:t.start,end:t.end,startValue:t.startValue,endValue:t.endValue})}))}))}(t),t.registerSubTypeDefaulter("dataZoom",(function(){return"slider"})))}function W(t){F(t),t.registerComponentModel(y),t.registerComponentView(L),function(t){t.registerProcessor(t.PRIORITY.PROCESSOR.FILTER,(function(t,e){var n=A(e),i=n.coordSysRecordMap||(n.coordSysRecordMap=(0,o.nt)())
i.each((function(t){t.dataZoomInfoMap=null})),t.eachComponent({mainType:"dataZoom",subType:"inside"},(function(t){var n=h(t);(0,o.__)(n.infoList,(function(n){var r=n.model.uid,a=i.get(r)||i.set(r,function(t,e){var n={model:e,containsPoint:(0,o.cF)(T,e),dispatchAction:(0,o.cF)(M,t),dataZoomInfoMap:null,controller:null},i=n.controller=new b.A(t.getZr())
return(0,o.__)(["pan","zoom","scrollMove"],(function(t){i.on(t,(function(e){var i=[]
n.dataZoomInfoMap.each((function(r){if(e.isAvailableBehavior(r.model.option)){var o=(r.getRange||{})[t],a=o&&o(r.dzReferCoordSysInfo,n.model.mainType,n.controller,e)
!r.model.get("disabled",!0)&&a&&i.push({dataZoomId:r.model.id,start:a[0],end:a[1]})}})),i.length&&n.dispatchAction(i)}))})),n}(e,n.model));(a.dataZoomInfoMap||(a.dataZoomInfoMap=(0,o.nt)())).set(t.uid,{dzReferCoordSysInfo:n,model:t,getRange:null})}))})),i.each((function(t){var e,n=t.controller,r=t.dataZoomInfoMap
if(r){var o=r.keys()[0]
null!=o&&(e=r.get(o))}if(e){var a=function(t){var e,n="type_",i={type_true:2,type_move:1,type_false:0,type_undefined:-1},r=!0
return t.each((function(t){var o=t.model,a=!o.get("disabled",!0)&&(!o.get("zoomLock",!0)||"move")
i[n+a]>i[n+e]&&(e=a),r=r&&o.get("preventDefaultMouseMove",!0)})),{controlType:e,opt:{zoomOnMouseWheel:!0,moveOnMouseMove:!0,moveOnMouseWheel:!0,preventDefaultMouseMove:!!r}}}(r)
n.enable(a.controlType,a.opt),n.setPointerChecker(t.containsPoint),w.N(t,"dispatchAction",e.model.get("throttle",!0),"fixRate")}else S(i,t)}))}))}(t)}const H=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n}return(0,r.C6)(e,t),e.type="dataZoom.slider",e.layoutMode="box",e.defaultOption=(0,g.G_)(f.defaultOption,{show:!0,right:"ph",top:"ph",width:"ph",height:"ph",left:null,bottom:null,borderColor:"#d2dbee",borderRadius:3,backgroundColor:"rgba(47,69,84,0)",dataBackground:{lineStyle:{color:"#d2dbee",width:.5},areaStyle:{color:"#d2dbee",opacity:.2}},selectedDataBackground:{lineStyle:{color:"#8fb0f7",width:.5},areaStyle:{color:"#8fb0f7",opacity:.2}},fillerColor:"rgba(135,175,274,0.2)",handleIcon:"path://M-9.35,34.56V42m0-40V9.5m-2,0h4a2,2,0,0,1,2,2v21a2,2,0,0,1-2,2h-4a2,2,0,0,1-2-2v-21A2,2,0,0,1-11.35,9.5Z",handleSize:"100%",handleStyle:{color:"#fff",borderColor:"#ACB8D1"},moveHandleSize:7,moveHandleIcon:"path://M-320.9-50L-320.9-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-348-41-339-50-320.9-50z M-212.3-50L-212.3-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-239.4-41-230.4-50-212.3-50z M-103.7-50L-103.7-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-130.9-41-121.8-50-103.7-50z",moveHandleStyle:{color:"#D2DBEE",opacity:.7},showDetail:!0,showDataShadow:"auto",realtime:!0,zoomLock:!1,textStyle:{color:"#6E7079"},brushSelect:!0,brushStyle:{color:"rgba(135,175,274,0.15)"},emphasis:{handleStyle:{borderColor:"#8FB0F7"},moveHandleStyle:{color:"#8FB0F7"}}}),e}(f)
var G=n(6885),j=n(4130),X=n(7941),Y=n(2806),U=n(6826),Z=n(5652),$=n(3023),q=n(1655),K=n(3960),Q=n(200),J=n(5478),tt=n(923),et=j.A,nt="horizontal",it="vertical",rt=["line","bar","candlestick","scatter"],ot={easing:"cubicOut",duration:100,delay:0},at=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n._displayables={},n}return(0,r.C6)(e,t),e.prototype.init=function(t,e){this.api=e,this._onBrush=(0,o.oI)(this._onBrush,this),this._onBrushEnd=(0,o.oI)(this._onBrushEnd,this)},e.prototype.render=function(e,n,i,r){if(t.prototype.render.apply(this,arguments),w.N(this,"_dispatchZoomAction",e.get("throttle"),"fixRate"),this._orient=e.getOrient(),!1!==e.get("show")){if(e.noTarget())return this._clear(),void this.group.removeAll()
r&&"dataZoom"===r.type&&r.from===this.uid||this._buildView(),this._updateView()}else this.group.removeAll()},e.prototype.dispose=function(){this._clear(),t.prototype.dispose.apply(this,arguments)},e.prototype._clear=function(){w.IU(this,"_dispatchZoomAction")
var t=this.api.getZr()
t.off("mousemove",this._onBrush),t.off("mouseup",this._onBrushEnd)},e.prototype._buildView=function(){var t=this.group
t.removeAll(),this._brushing=!1,this._displayables.brushRect=null,this._resetLocation(),this._resetInterval()
var e=this._displayables.sliderGroup=new X.A
this._renderBackground(),this._renderHandle(),this._renderDataShadow(),t.add(e),this._positionGroup()},e.prototype._resetLocation=function(){var t=this.dataZoomModel,e=this.api,n=t.get("brushSelect")?7:0,i=this._findCoordRect(),r={width:e.getWidth(),height:e.getHeight()},a=this._orient===nt?{right:r.width-i.x-i.width,top:r.height-30-7-n,width:i.width,height:30}:{right:7,top:i.y,width:30,height:i.height},s=K.vs(t.option);(0,o.__)(["right","top","width","height"],(function(t){"ph"===s[t]&&(s[t]=a[t])}))
var l=K.dV(s,r)
this._location={x:l.x,y:l.y},this._size=[l.width,l.height],this._orient===it&&this._size.reverse()},e.prototype._positionGroup=function(){var t=this.group,e=this._location,n=this._orient,i=this.dataZoomModel.getFirstTargetAxisModel(),r=i&&i.get("inverse"),o=this._displayables.sliderGroup,a=(this._dataShadowInfo||{}).otherAxisInverse
o.attr(n!==nt||r?n===nt&&r?{scaleY:a?1:-1,scaleX:-1}:n!==it||r?{scaleY:a?-1:1,scaleX:-1,rotation:Math.PI/2}:{scaleY:a?-1:1,scaleX:1,rotation:Math.PI/2}:{scaleY:a?1:-1,scaleX:1})
var s=t.getBoundingRect([o])
t.x=e.x-s.x,t.y=e.y-s.y,t.markRedraw()},e.prototype._getViewExtent=function(){return[0,this._size[0]]},e.prototype._renderBackground=function(){var t=this.dataZoomModel,e=this._size,n=this._displayables.sliderGroup,i=t.get("brushSelect")
n.add(new et({silent:!0,shape:{x:0,y:0,width:e[0],height:e[1]},style:{fill:t.get("backgroundColor")},z2:-40}))
var r=new et({shape:{x:0,y:0,width:e[0],height:e[1]},style:{fill:"transparent"},z2:0,onclick:(0,o.oI)(this._onClickPanel,this)}),a=this.api.getZr()
i?(r.on("mousedown",this._onBrushStart,this),r.cursor="crosshair",a.on("mousemove",this._onBrush),a.on("mouseup",this._onBrushEnd)):(a.off("mousemove",this._onBrush),a.off("mouseup",this._onBrushEnd)),n.add(r)},e.prototype._renderDataShadow=function(){var t=this._dataShadowInfo=this._prepareDataShadowInfo()
if(this._displayables.dataShadowSegs=[],t){var e=this._size,n=this._shadowSize||[],i=t.series,r=i.getRawData(),o=i.getShadowDim&&i.getShadowDim(),a=o&&r.getDimensionInfo(o)?i.getShadowDim():t.otherDim
if(null!=a){var s=this._shadowPolygonPts,l=this._shadowPolylinePts
if(r!==this._shadowData||a!==this._shadowDim||e[0]!==n[0]||e[1]!==n[1]){var u=r.getDataExtent(a),h=.3*(u[1]-u[0])
u=[u[0]-h,u[1]+h]
var c,d=[0,e[1]],p=[0,e[0]],f=[[e[0],0],[0,0]],g=[],y=p[1]/(r.count()-1),v=0,m=Math.round(r.count()/e[0])
r.each([a],(function(t,e){if(m>0&&e%m)v+=y
else{var n=null==t||isNaN(t)||""===t,i=n?0:(0,P.Cb)(t,u,d,!0)
n&&!c&&e?(f.push([f[f.length-1][0],0]),g.push([g[g.length-1][0],0])):!n&&c&&(f.push([v,0]),g.push([v,0])),f.push([v,i]),g.push([v,i]),v+=y,c=n}})),s=this._shadowPolygonPts=f,l=this._shadowPolylinePts=g}this._shadowData=r,this._shadowDim=a,this._shadowSize=[e[0],e[1]]
for(var _=this.dataZoomModel,x=0;x<3;x++){var b=w(1===x)
this._displayables.sliderGroup.add(b),this._displayables.dataShadowSegs.push(b)}}}function w(t){var e=_.getModel(t?"selectedDataBackground":"dataBackground"),n=new X.A,i=new Y.A({shape:{points:s},segmentIgnoreThreshold:1,style:e.getModel("areaStyle").getAreaStyle(),silent:!0,z2:-20}),r=new U.A({shape:{points:l},segmentIgnoreThreshold:1,style:e.getModel("lineStyle").getLineStyle(),silent:!0,z2:-19})
return n.add(i),n.add(r),n}},e.prototype._prepareDataShadowInfo=function(){var t=this.dataZoomModel,e=t.get("showDataShadow")
if(!1!==e){var n,i=this.ecModel
return t.eachTargetAxis((function(r,a){var s=t.getAxisProxy(r,a).getTargetSeriesModels();(0,o.__)(s,(function(t){if(!(n||!0!==e&&(0,o.qh)(rt,t.get("type"))<0)){var s,l=i.getComponent(u(r),a).axis,h={x:"y",y:"x",radius:"angle",angle:"radius"}[r],c=t.coordinateSystem
null!=h&&c.getOtherAxis&&(s=c.getOtherAxis(l).inverse),h=t.getData().mapDimension(h),n={thisAxis:l,series:t,thisDim:r,otherDim:h,otherAxisInverse:s}}}),this)}),this),n}},e.prototype._renderHandle=function(){var t=this.group,e=this._displayables,n=e.handles=[null,null],i=e.handleLabels=[null,null],r=this._displayables.sliderGroup,a=this._size,s=this.dataZoomModel,l=this.api,u=s.get("borderRadius")||0,h=s.get("brushSelect"),c=e.filler=new et({silent:h,style:{fill:s.get("fillerColor")},textConfig:{position:"inside"}})
r.add(c),r.add(new et({silent:!0,subPixelOptimize:!0,shape:{x:0,y:0,width:a[0],height:a[1],r:u},style:{stroke:s.get("dataBackgroundColor")||s.get("borderColor"),lineWidth:1,fill:"rgba(0,0,0,0)"}})),(0,o.__)([0,1],(function(e){var a=s.get("handleIcon")
!J.$V[a]&&a.indexOf("path://")<0&&a.indexOf("image://")<0&&(a="path://"+a)
var l=(0,J.v5)(a,-1,0,2,2,null,!0)
l.attr({cursor:st(this._orient),draggable:!0,drift:(0,o.oI)(this._onDragMove,this,e),ondragend:(0,o.oI)(this._onDragEnd,this),onmouseover:(0,o.oI)(this._showDataInfo,this,!0),onmouseout:(0,o.oI)(this._showDataInfo,this,!1),z2:5})
var u=l.getBoundingRect(),h=s.get("handleSize")
this._handleHeight=(0,P.lo)(h,this._size[1]),this._handleWidth=u.width/u.height*this._handleHeight,l.setStyle(s.getModel("handleStyle").getItemStyle()),l.style.strokeNoScale=!0,l.rectHover=!0,l.ensureState("emphasis").style=s.getModel(["emphasis","handleStyle"]).getItemStyle(),(0,Q.iJ)(l)
var c=s.get("handleColor")
null!=c&&(l.style.fill=c),r.add(n[e]=l)
var d=s.getModel("textStyle")
t.add(i[e]=new Z.Ay({silent:!0,invisible:!0,style:(0,tt.VB)(d,{x:0,y:0,text:"",verticalAlign:"middle",align:"center",fill:d.getTextColor(),font:d.getFont()}),z2:10}))}),this)
var d=c
if(h){var p=(0,P.lo)(s.get("moveHandleSize"),a[1]),f=e.moveHandle=new j.A({style:s.getModel("moveHandleStyle").getItemStyle(),silent:!0,shape:{r:[0,0,2,2],y:a[1]-.5,height:p}}),g=.8*p,y=e.moveHandleIcon=(0,J.v5)(s.get("moveHandleIcon"),-g/2,-g/2,g,g,"#fff",!0)
y.silent=!0,y.y=a[1]+p/2-.5,f.ensureState("emphasis").style=s.getModel(["emphasis","moveHandleStyle"]).getItemStyle()
var v=Math.min(a[1]/2,Math.max(p,10));(d=e.moveZone=new j.A({invisible:!0,shape:{y:a[1]-v,height:p+v}})).on("mouseover",(function(){l.enterEmphasis(f)})).on("mouseout",(function(){l.leaveEmphasis(f)})),r.add(f),r.add(y),r.add(d)}d.attr({draggable:!0,cursor:st(this._orient),drift:(0,o.oI)(this._onDragMove,this,"all"),ondragstart:(0,o.oI)(this._showDataInfo,this,!0),ondragend:(0,o.oI)(this._onDragEnd,this),onmouseover:(0,o.oI)(this._showDataInfo,this,!0),onmouseout:(0,o.oI)(this._showDataInfo,this,!1)})},e.prototype._resetInterval=function(){var t=this._range=this.dataZoomModel.getPercentRange(),e=this._getViewExtent()
this._handleEnds=[(0,P.Cb)(t[0],[0,100],e,!0),(0,P.Cb)(t[1],[0,100],e,!0)]},e.prototype._updateInterval=function(t,e){var n=this.dataZoomModel,i=this._handleEnds,r=this._getViewExtent(),o=n.findRepresentativeAxisProxy().getMinMaxSpan(),a=[0,100]
m(e,i,r,n.get("zoomLock")?"all":t,null!=o.minSpan?(0,P.Cb)(o.minSpan,a,r,!0):null,null!=o.maxSpan?(0,P.Cb)(o.maxSpan,a,r,!0):null)
var s=this._range,l=this._range=(0,P.Y6)([(0,P.Cb)(i[0],r,a,!0),(0,P.Cb)(i[1],r,a,!0)])
return!s||s[0]!==l[0]||s[1]!==l[1]},e.prototype._updateView=function(t){var e=this._displayables,n=this._handleEnds,i=(0,P.Y6)(n.slice()),r=this._size;(0,o.__)([0,1],(function(t){var i=e.handles[t],o=this._handleHeight
i.attr({scaleX:o/2,scaleY:o/2,x:n[t]+(t?-1:1),y:r[1]/2-o/2})}),this),e.filler.setShape({x:i[0],y:0,width:i[1]-i[0],height:r[1]})
var a={x:i[0],width:i[1]-i[0]}
e.moveHandle&&(e.moveHandle.setShape(a),e.moveZone.setShape(a),e.moveZone.getBoundingRect(),e.moveHandleIcon&&e.moveHandleIcon.attr("x",a.x+a.width/2))
for(var s=e.dataShadowSegs,l=[0,i[0],i[1],r[0]],u=0;u<s.length;u++){var h=s[u],c=h.getClipPath()
c||(c=new j.A,h.setClipPath(c)),c.setShape({x:l[u],y:0,width:l[u+1]-l[u],height:r[1]})}this._updateDataInfo(t)},e.prototype._updateDataInfo=function(t){var e=this.dataZoomModel,n=this._displayables,i=n.handleLabels,r=this._orient,o=["",""]
if(e.get("showDetail")){var a=e.findRepresentativeAxisProxy()
if(a){var s=a.getAxisModel().axis,l=this._range,u=t?a.calculateDataWindow({start:l[0],end:l[1]}).valueWindow:a.getDataValueWindow()
o=[this._formatLabel(u[0],s),this._formatLabel(u[1],s)]}}var h=(0,P.Y6)(this._handleEnds.slice())
function c(t){var e=$.getTransform(n.handles[t].parent,this.group),a=$.transformDirection(0===t?"right":"left",e),s=this._handleWidth/2+5,l=$.applyTransform([h[t]+(0===t?-s:s),this._size[1]/2],e)
i[t].setStyle({x:l[0],y:l[1],verticalAlign:r===nt?"middle":a,align:r===nt?a:"center",text:o[t]})}c.call(this,0),c.call(this,1)},e.prototype._formatLabel=function(t,e){var n=this.dataZoomModel,i=n.get("labelFormatter"),r=n.get("labelPrecision")
null!=r&&"auto"!==r||(r=e.getPixelPrecision())
var a=null==t||isNaN(t)?"":"category"===e.type||"time"===e.type?e.scale.getLabel({value:Math.round(t)}):t.toFixed(Math.min(r,20))
return(0,o.Tn)(i)?i(t,a):(0,o.Kg)(i)?i.replace("{value}",a):a},e.prototype._showDataInfo=function(t){t=this._dragging||t
var e=this._displayables,n=e.handleLabels
n[0].attr("invisible",!t),n[1].attr("invisible",!t),e.moveHandle&&this.api[t?"enterEmphasis":"leaveEmphasis"](e.moveHandle,1)},e.prototype._onDragMove=function(t,e,n,i){this._dragging=!0,G.ds(i.event)
var r=this._displayables.sliderGroup.getLocalTransform(),o=$.applyTransform([e,n],r,!0),a=this._updateInterval(t,o[0]),s=this.dataZoomModel.get("realtime")
this._updateView(!s),a&&s&&this._dispatchZoomAction(!0)},e.prototype._onDragEnd=function(){this._dragging=!1,this._showDataInfo(!1),!this.dataZoomModel.get("realtime")&&this._dispatchZoomAction(!1)},e.prototype._onClickPanel=function(t){var e=this._size,n=this._displayables.sliderGroup.transformCoordToLocal(t.offsetX,t.offsetY)
if(!(n[0]<0||n[0]>e[0]||n[1]<0||n[1]>e[1])){var i=this._handleEnds,r=(i[0]+i[1])/2,o=this._updateInterval("all",n[0]-r)
this._updateView(),o&&this._dispatchZoomAction(!1)}},e.prototype._onBrushStart=function(t){var e=t.offsetX,n=t.offsetY
this._brushStart=new q.A(e,n),this._brushing=!0,this._brushStartTime=+new Date},e.prototype._onBrushEnd=function(t){if(this._brushing){var e=this._displayables.brushRect
if(this._brushing=!1,e){e.attr("ignore",!0)
var n=e.shape
if(!(+new Date-this._brushStartTime<200&&Math.abs(n.width)<5)){var i=this._getViewExtent(),r=[0,100]
this._range=(0,P.Y6)([(0,P.Cb)(n.x,i,r,!0),(0,P.Cb)(n.x+n.width,i,r,!0)]),this._handleEnds=[n.x,n.x+n.width],this._updateView(),this._dispatchZoomAction(!1)}}}},e.prototype._onBrush=function(t){this._brushing&&(G.ds(t.event),this._updateBrushRect(t.offsetX,t.offsetY))},e.prototype._updateBrushRect=function(t,e){var n=this._displayables,i=this.dataZoomModel,r=n.brushRect
r||(r=n.brushRect=new et({silent:!0,style:i.getModel("brushStyle").getItemStyle()}),n.sliderGroup.add(r)),r.attr("ignore",!1)
var o=this._brushStart,a=this._displayables.sliderGroup,s=a.transformCoordToLocal(t,e),l=a.transformCoordToLocal(o.x,o.y),u=this._size
s[0]=Math.max(Math.min(u[0],s[0]),0),r.setShape({x:l[0],y:0,width:s[0]-l[0],height:u[1]})},e.prototype._dispatchZoomAction=function(t){var e=this._range
this.api.dispatchAction({type:"dataZoom",from:this.uid,dataZoomId:this.dataZoomModel.id,animation:t?ot:null,start:e[0],end:e[1]})},e.prototype._findCoordRect=function(){var t,e=h(this.dataZoomModel).infoList
if(!t&&e.length){var n=e[0].model.coordinateSystem
t=n.getRect&&n.getRect()}if(!t){var i=this.api.getWidth(),r=this.api.getHeight()
t={x:.2*i,y:.2*r,width:.6*i,height:.6*r}}return t},e.type="dataZoom.slider",e}(v)
function st(t){return"vertical"===t?"ns-resize":"ew-resize"}const lt=at
function ut(t){t.registerComponentModel(H),t.registerComponentView(lt),F(t)}function ht(t){(0,i.Y)(W),(0,i.Y)(ut)}},1460:(t,e,n)=>{n.d(e,{a:()=>q})
var i=n(8301),r=n(4784),o=n(5225),a=n(7518),s=n(3960)
function l(t,e){var n
return i.__(e,(function(e){null!=t[e]&&"auto"!==t[e]&&(n=!0)})),n}var u=["transition","enterFrom","leaveTo"],h=u.concat(["enterAnimation","updateAnimation","leaveAnimation"])
function c(t,e,n){if(n&&(!t[n]&&e[n]&&(t[n]={}),t=t[n],e=e[n]),t&&e)for(var i=n?u:h,r=0;r<i.length;r++){var o=i[r]
null==t[o]&&null!=e[o]&&(t[o]=e[o])}}var d=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n.preventAutoZ=!0,n}return(0,r.C6)(e,t),e.prototype.mergeOption=function(e,n){var i=this.option.elements
this.option.elements=null,t.prototype.mergeOption.call(this,e,n),this.option.elements=i},e.prototype.optionUpdated=function(t,e){var n=this.option,r=(e?n:t).elements,a=n.elements=e?[]:n.elements,u=[]
this._flatten(r,u,null)
var h=o.O2(a,u,"normalMerge"),d=this._elOptionsToUpdate=[]
i.__(h,(function(t,e){var n=t.newOption
n&&(d.push(n),function(t,e){var n=t.existing
if(e.id=t.keyInfo.id,!e.type&&n&&(e.type=n.type),null==e.parentId){var i=e.parentOption
i?e.parentId=i.id:n&&(e.parentId=n.parentId)}e.parentOption=null}(t,n),function(t,e,n){var r=i.X$({},n),o=t[e],a=n.$action||"merge"
"merge"===a?o?(i.h1(o,r,!0),(0,s.YA)(o,r,{ignoreSize:!0}),(0,s.Ir)(n,o),c(n,o),c(n,o,"shape"),c(n,o,"style"),c(n,o,"extra"),n.clipPath=o.clipPath):t[e]=r:"replace"===a?t[e]=r:"remove"===a&&o&&(t[e]=null)}(a,e,n),function(t,e){if(t&&(t.hv=e.hv=[l(e,["left","right"]),l(e,["top","bottom"])],"group"===t.type)){var n=t,i=e
null==n.width&&(n.width=i.width=0),null==n.height&&(n.height=i.height=0)}}(a[e],n))}),this),n.elements=i.pb(a,(function(t){return t&&delete t.$action,null!=t}))},e.prototype._flatten=function(t,e,n){i.__(t,(function(t){if(t){n&&(t.parentOption=n),e.push(t)
var i=t.children
i&&i.length&&this._flatten(i,e,t),delete t.children}}),this)},e.prototype.useElOptionsToUpdate=function(){var t=this._elOptionsToUpdate
return this._elOptionsToUpdate=null,t},e.type="graphic",e.defaultOption={elements:[]},e}(a.A),p=n(2028),f=n(7941),g=n(2655),y=n(5652),v=n(3023),m=n(3947),_=n(4642),x=n(1323)
function b(t,e){e&&(e.font=e.textFont||e.font,(0,i.$3)(e,"textStrokeWidth")&&(t.lineWidth=e.textStrokeWidth),(0,i.$3)(e,"textAlign")&&(t.align=e.textAlign),(0,i.$3)(e,"textVerticalAlign")&&(t.verticalAlign=e.textVerticalAlign),(0,i.$3)(e,"textLineHeight")&&(t.lineHeight=e.textLineHeight),(0,i.$3)(e,"textWidth")&&(t.width=e.textWidth),(0,i.$3)(e,"textHeight")&&(t.height=e.textHeight),(0,i.$3)(e,"textBackgroundColor")&&(t.backgroundColor=e.textBackgroundColor),(0,i.$3)(e,"textPadding")&&(t.padding=e.textPadding),(0,i.$3)(e,"textBorderColor")&&(t.borderColor=e.textBorderColor),(0,i.$3)(e,"textBorderWidth")&&(t.borderWidth=e.textBorderWidth),(0,i.$3)(e,"textBorderRadius")&&(t.borderRadius=e.textBorderRadius),(0,i.$3)(e,"textBoxShadowColor")&&(t.shadowColor=e.textBoxShadowColor),(0,i.$3)(e,"textBoxShadowBlur")&&(t.shadowBlur=e.textBoxShadowBlur),(0,i.$3)(e,"textBoxShadowOffsetX")&&(t.shadowOffsetX=e.textBoxShadowOffsetX),(0,i.$3)(e,"textBoxShadowOffsetY")&&(t.shadowOffsetY=e.textBoxShadowOffsetY))}var w=n(160),A=n(8283),S=n(4427),M=n(7157),T={position:["x","y"],scale:["scaleX","scaleY"],origin:["originX","originY"]},I=(0,i.HP)(T),C=((0,i.TS)(M.Wx,(function(t,e){return t[e]=1,t}),{}),M.Wx.join(", "),["","style","shape","extra"]),D=(0,o.$r)()
function k(t,e,n,r,o){var a=t+"Animation",s=(0,A.Jw)(t,r,o)||{},l=D(e).userDuring
return s.duration>0&&(s.during=l?(0,i.oI)(E,{el:e,userDuring:l}):null,s.setToFinal=!0,s.scope=t),(0,i.X$)(s,n[a]),s}function L(t,e,n,r){var a=(r=r||{}).dataIndex,s=r.isInit,l=r.clearStyle,u=n.isAnimationEnabled(),h=D(t),c=e.style
h.userDuring=e.during
var d={},f={}
if(function(t,e,n){for(var i=0;i<I.length;i++){var r=I[i],o=T[r],a=e[r]
a&&(n[o[0]]=a[0],n[o[1]]=a[1])}for(i=0;i<M.Wx.length;i++){var s=M.Wx[i]
null!=e[s]&&(n[s]=e[s])}}(0,e,f),B("shape",e,f),B("extra",e,f),!s&&u&&(function(t,e,n){for(var i=e.transition,r=O(i)?M.Wx:(0,o.qB)(i||[]),a=0;a<r.length;a++){var s=r[a]
if("style"!==s&&"shape"!==s&&"extra"!==s){var l=t[s]
n[s]=l}}}(t,e,d),z("shape",t,e,d),z("extra",t,e,d),function(t,e,n,r){if(n){var a,s=t.style
if(s){var l=n.transition,u=e.transition
if(l&&!O(l)){var h=(0,o.qB)(l)
!a&&(a=r.style={})
for(var c=0;c<h.length;c++){var d=s[y=h[c]]
a[y]=d}}else if(t.getAnimationStyleProps&&(O(u)||O(l)||(0,i.qh)(u,"style")>=0)){var p=t.getAnimationStyleProps(),f=p?p.style:null
if(f){!a&&(a=r.style={})
var g=(0,i.HP)(n)
for(c=0;c<g.length;c++){var y
f[y=g[c]]&&(d=s[y],a[y]=d)}}}}}}(t,e,c,d)),f.style=c,function(t,e,n){var i=e.style
if(!t.isGroup&&i){if(n){t.useStyle({})
for(var r=t.animators,o=0;o<r.length;o++){var a=r[o]
"style"===a.targetName&&a.changeTarget(t.style)}}t.setStyle(i)}e&&(e.style=null,e&&t.attr(e),e.style=i)}(t,f,l),function(t,e){(0,i.$3)(e,"silent")&&(t.silent=e.silent),(0,i.$3)(e,"ignore")&&(t.ignore=e.ignore),t instanceof p.Ay&&(0,i.$3)(e,"invisible")&&(t.invisible=e.invisible),t instanceof S.Ay&&(0,i.$3)(e,"autoBatch")&&(t.autoBatch=e.autoBatch)}(t,e),u)if(s){var g={};(0,i.__)(C,(function(t){var n=t?e[t]:e
n&&n.enterFrom&&(t&&(g[t]=g[t]||{}),(0,i.X$)(t?g[t]:g,n.enterFrom))}))
var y=k("enter",t,e,n,a)
y.duration>0&&t.animateFrom(g,y)}else!function(t,e,n,i,r){if(r){var o=k("update",t,e,i,n)
o.duration>0&&t.animateFrom(r,o)}}(t,e,a||0,n,d)
P(t,e),c?t.dirty():t.markRedraw()}function P(t,e){for(var n=D(t).leaveToProps,r=0;r<C.length;r++){var o=C[r],a=o?e[o]:e
a&&a.leaveTo&&(n||(n=D(t).leaveToProps={}),o&&(n[o]=n[o]||{}),(0,i.X$)(o?n[o]:n,a.leaveTo))}}function O(t){return"all"===t}var N={},R={setTransform:function(t,e){return N.el[t]=e,this},getTransform:function(t){return N.el[t]},setShape:function(t,e){var n=N.el
return(n.shape||(n.shape={}))[t]=e,n.dirtyShape&&n.dirtyShape(),this},getShape:function(t){var e=N.el.shape
if(e)return e[t]},setStyle:function(t,e){var n=N.el,i=n.style
return i&&(i[t]=e,n.dirtyStyle&&n.dirtyStyle()),this},getStyle:function(t){var e=N.el.style
if(e)return e[t]},setExtra:function(t,e){return(N.el.extra||(N.el.extra={}))[t]=e,this},getExtra:function(t){var e=N.el.extra
if(e)return e[t]}}
function E(){var t=this,e=t.el
if(e){var n=D(e).userDuring,i=t.userDuring
n===i?(N.el=e,i(R)):t.el=t.userDuring=null}}function z(t,e,n,r){var a=n[t]
if(a){var s,l=e[t]
if(l){var u=n.transition,h=a.transition
if(h)if(!s&&(s=r[t]={}),O(h))(0,i.X$)(s,l)
else for(var c=(0,o.qB)(h),d=0;d<c.length;d++){var p=l[g=c[d]]
s[g]=p}else if(O(u)||(0,i.qh)(u,t)>=0){!s&&(s=r[t]={})
var f=(0,i.HP)(l)
for(d=0;d<f.length;d++){var g
p=l[g=f[d]],V(a[g],p)&&(s[g]=p)}}}}}function B(t,e,n){var r=e[t]
if(r)for(var o=n[t]={},a=(0,i.HP)(r),s=0;s<a.length;s++){var l=a[s]
o[l]=(0,w.F)(r[l])}}function V(t,e){return(0,i.Xj)(t)?t!==e:null!=t&&isFinite(t)}var F=(0,o.$r)(),W=["percent","easing","shape","style","extra"]
function H(t,e,n){if(n.isAnimationEnabled()&&e)if((0,i.cy)(e))(0,i.__)(e,(function(e){H(t,e,n)}))
else{var r=e.keyframes,o=e.duration
if(n&&null==o){var a=(0,A.Jw)("enter",n,0)
o=a&&a.duration}if(r&&o){var s=F(t);(0,i.__)(C,(function(n){var a
n&&!t[n]||(r.sort((function(t,e){return t.percent-e.percent})),(0,i.__)(r,(function(r){var l=t.animators,u=n?r[n]:r
if(u){var h=(0,i.HP)(u)
if(n||(h=(0,i.pb)(h,(function(t){return(0,i.qh)(W,t)<0}))),h.length){a||((a=t.animate(n,e.loop,!0)).scope="keyframe")
for(var c=0;c<l.length;c++)l[c]!==a&&l[c].targetName===a.targetName&&l[c].stopTracks(h)
n&&(s[n]=s[n]||{})
var d=n?s[n]:s;(0,i.__)(h,(function(e){d[e]=((n?t[n]:t)||{})[e]})),a.whenWithKeys(o*r.percent,u,h,r.easing)}}})),a&&a.delay(e.delay||0).duration(o).start(e.easing))}))}}}var G={path:null,compoundPath:null,group:f.A,image:g.Ay,text:y.Ay},j=o.$r(),X=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n}return(0,r.C6)(e,t),e.prototype.init=function(){this._elMap=i.nt()},e.prototype.render=function(t,e,n){t!==this._lastGraphicModel&&this._clear(),this._lastGraphicModel=t,this._updateElements(t),this._relocate(t,n)},e.prototype._updateElements=function(t){var e=t.useElOptionsToUpdate()
if(e){var n=this._elMap,r=this.group,a=t.get("z"),l=t.get("zlevel")
i.__(e,(function(e){var u=o.vS(e.id,null),h=null!=u?n.get(u):null,c=o.vS(e.parentId,null),d=null!=c?n.get(c):r,p=e.type,f=e.style
"text"===p&&f&&e.hv&&e.hv[1]&&(f.textVerticalAlign=f.textBaseline=f.verticalAlign=f.align=null)
var g=e.textContent,m=e.textConfig
if(f&&function(t,e,n,r){return t&&(t.legacy||!1!==t.legacy&&!n&&!r&&"tspan"!==e&&("text"===e||(0,i.$3)(t,"text")))}(f,p,!!m,!!g)){var _=function(t,e){var n,r,o,a=t
if("text"===e)o=a
else{o={},(0,i.$3)(a,"text")&&(o.text=a.text),(0,i.$3)(a,"rich")&&(o.rich=a.rich),(0,i.$3)(a,"textFill")&&(o.fill=a.textFill),(0,i.$3)(a,"textStroke")&&(o.stroke=a.textStroke),(0,i.$3)(a,"fontFamily")&&(o.fontFamily=a.fontFamily),(0,i.$3)(a,"fontSize")&&(o.fontSize=a.fontSize),(0,i.$3)(a,"fontStyle")&&(o.fontStyle=a.fontStyle),(0,i.$3)(a,"fontWeight")&&(o.fontWeight=a.fontWeight),r={type:"text",style:o,silent:!0},n={}
var s=(0,i.$3)(a,"textPosition")
n.position=s?a.textPosition:"inside",(0,i.$3)(a,"textPosition")&&(n.position=a.textPosition),(0,i.$3)(a,"textOffset")&&(n.offset=a.textOffset),(0,i.$3)(a,"textRotation")&&(n.rotation=a.textRotation),(0,i.$3)(a,"textDistance")&&(n.distance=a.textDistance)}return b(o,t),(0,i.__)(o.rich,(function(t){b(t,t)})),{textConfig:n,textContent:r}}(f,p)
!m&&_.textConfig&&(m=e.textConfig=_.textConfig),!g&&_.textContent&&(g=_.textContent)}var w=function(t){return t=i.X$({},t),i.__(["id","parentId","$action","hv","bounding","textContent","clipPath"].concat(s.Tj),(function(e){delete t[e]})),t}(e),A=e.$action||"merge",S="merge"===A,M="replace"===A
if(S){var T=h;(R=!h)?T=U(u,d,e.type,n):(T&&(j(T).isNew=!1),function(t){t.stopAnimation("keyframe"),t.attr(F(t))}(T)),T&&(L(T,w,t,{isInit:R}),$(T,e,a,l))}else if(M){Z(h,e,n,t)
var I=U(u,d,e.type,n)
I&&(L(I,w,t,{isInit:!0}),$(I,e,a,l))}else"remove"===A&&(P(h,e),Z(h,e,n,t))
var C=n.get(u)
if(C&&g)if(S){var D=C.getTextContent()
D?D.attr(g):C.setTextContent(new y.Ay(g))}else M&&C.setTextContent(new y.Ay(g))
if(C){var k=e.clipPath
if(k){var O=k.type,N=void 0,R=!1
if(S){var E=C.getClipPath()
N=(R=!E||j(E).type!==O)?Y(O):E}else M&&(R=!0,N=Y(O))
C.setClipPath(N),L(N,k,t,{isInit:R}),H(N,k.keyframeAnimation,t)}var z=j(C)
C.setTextConfig(m),z.option=e,function(t,e,n){var i=(0,x.z)(t).eventData
t.silent||t.ignore||i||(i=(0,x.z)(t).eventData={componentType:"graphic",componentIndex:e.componentIndex,name:t.name}),i&&(i.info=n.info)}(C,t,e),v.setTooltipConfig({el:C,componentModel:t,itemName:C.name,itemTooltipOption:e.tooltip}),H(C,e.keyframeAnimation,t)}}))}},e.prototype._relocate=function(t,e){for(var n=t.option.elements,r=this.group,a=this._elMap,l=e.getWidth(),u=e.getHeight(),h=["x","y"],c=0;c<n.length;c++){var d=n[c]
if((v=null!=(y=o.vS(d.id,null))?a.get(y):null)&&v.isGroup){var p=(_=v.parent)===r,f=j(v),g=j(_)
f.width=(0,m.lo)(f.option.width,p?l:g.width)||0,f.height=(0,m.lo)(f.option.height,p?u:g.height)||0}}for(c=n.length-1;c>=0;c--){var y,v
if(d=n[c],v=null!=(y=o.vS(d.id,null))?a.get(y):null){var _=v.parent,x=(g=j(_),_===r?{width:l,height:u}:{width:g.width,height:g.height}),b={},w=s.m$(v,d,x,null,{hv:d.hv,boundingMode:d.bounding},b)
if(!j(v).isNew&&w){for(var S=d.transition,M={},T=0;T<h.length;T++){var I=h[T],C=b[I]
S&&(O(S)||i.qh(S,I)>=0)?M[I]=C:v[I]=C}(0,A.oi)(v,M,t,0)}else v.attr(b)}}},e.prototype._clear=function(){var t=this,e=this._elMap
e.each((function(n){Z(n,j(n).option,e,t._lastGraphicModel)})),this._elMap=i.nt()},e.prototype.dispose=function(){this._clear()},e.type="graphic",e}(_.A)
function Y(t){var e=new(i.$3(G,t)?G[t]:v.getShapeClass(t))({})
return j(e).type=t,e}function U(t,e,n,i){var r=Y(n)
return e.add(r),i.set(t,r),j(r).id=t,j(r).isNew=!0,r}function Z(t,e,n,i){t&&t.parent&&("group"===t.type&&t.traverse((function(t){Z(t,e,n,i)})),function(t,e,n){if(t){var i=t.parent,r=D(t).leaveToProps
if(r){var o=k("update",t,e,n,0)
o.done=function(){i.remove(t)},t.animateTo(r,o)}else i.remove(t)}}(t,e,i),n.removeKey(j(t).id))}function $(t,e,n,r){t.isGroup||i.__([["cursor",p.Ay.prototype.cursor],["zlevel",r||0],["z",n||0],["z2",0]],(function(n){var r=n[0]
i.$3(e,r)?t[r]=i.bZ(e[r],n[1]):null==t[r]&&(t[r]=n[1])})),i.__(i.HP(e),(function(n){if(0===n.indexOf("on")){var r=e[n]
t[n]=i.Tn(r)?r:null}})),i.$3(e,"draggable")&&(t.draggable=e.draggable),null!=e.name&&(t.name=e.name),null!=e.id&&(t.id=e.id)}function q(t){t.registerComponentModel(d),t.registerComponentView(X),t.registerPreprocessor((function(t){var e=t.graphic;(0,i.cy)(e)?e[0]&&e[0].elements?t.graphic=[t.graphic[0]]:t.graphic=[{elements:e}]:e&&!e.elements&&(t.graphic=[{elements:[e]}])}))}},2125:(t,e,n)=>{n.d(e,{a:()=>ft})
var i=n(4784),r=n(4642),o=n(7518)
const a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i.C6)(e,t),e.type="grid",e.dependencies=["xAxis","yAxis"],e.layoutMode="box",e.defaultOption={show:!1,z:0,left:"10%",top:60,right:"10%",bottom:70,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"},e}(o.A)
var s=n(4130),l=n(8301),u=function(){function t(){}return t.prototype.getNeedCrossZero=function(){return!this.option.scale},t.prototype.getCoordSysModel=function(){},t}(),h=n(5225),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i.C6)(e,t),e.prototype.getCoordSysModel=function(){return this.getReferringComponents("grid",h.US).models[0]},e.type="cartesian2dAxis",e}(o.A)
l.co(c,u)
var d={show:!0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#6E7079",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#E0E6F1"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.2)","rgba(210,219,238,0.2)"]}}},p=l.h1({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},d),f=l.h1({boundaryGap:[0,0],axisLine:{show:"auto"},axisTick:{show:"auto"},splitNumber:5,minorTick:{show:!1,splitNumber:5,length:3,lineStyle:{}},minorSplitLine:{show:!1,lineStyle:{color:"#F4F7FD",width:1}}},d)
const g={category:p,value:f,time:l.h1({splitNumber:6,axisLabel:{showMinLabel:!1,showMaxLabel:!1,rich:{primary:{fontWeight:"bold"}}},splitLine:{show:!1}},f),log:l.NT({logBase:10},f)}
var y=n(3960),v=n(3876),m={value:1,category:1,time:1,log:1}
function _(t,e,n,r){(0,l.__)(m,(function(o,a){var s=(0,l.h1)((0,l.h1)({},g[a],!0),r,!0),u=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e+"Axis."+a,n}return(0,i.C6)(n,t),n.prototype.mergeDefaultAndTheme=function(t,e){var n=(0,y.ad)(this),i=n?(0,y.vs)(t):{},r=e.getTheme();(0,l.h1)(t,r.get(a+"Axis")),(0,l.h1)(t,this.getDefaultOption()),t.type=x(t),n&&(0,y.YA)(t,i,n)},n.prototype.optionUpdated=function(){"category"===this.option.type&&(this.__ordinalMeta=v.A.createByAxisModel(this))},n.prototype.getCategories=function(t){var e=this.option
if("category"===e.type)return t?e.data:this.__ordinalMeta.categories},n.prototype.getOrdinalMeta=function(){return this.__ordinalMeta},n.type=e+"Axis."+a,n.defaultOption=s,n}(n)
t.registerComponentModel(u)})),t.registerSubTypeDefaulter(e+"Axis",x)}function x(t){return t.type||(t.data?"category":"value")}var b=n(4753),w=n(4703)
const A=function(){function t(t){this.type="cartesian",this._dimList=[],this._axes={},this.name=t||""}return t.prototype.getAxis=function(t){return this._axes[t]},t.prototype.getAxes=function(){return l.Tj(this._dimList,(function(t){return this._axes[t]}),this)},t.prototype.getAxesByScale=function(t){return t=t.toLowerCase(),l.pb(this.getAxes(),(function(e){return e.scale.type===t}))},t.prototype.addAxis=function(t){var e=t.dim
this._axes[e]=t,this._dimList.push(e)},t}()
var S=n(7432),M=n(1150),T=["x","y"]
function I(t){return"interval"===t.type||"time"===t.type}const C=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this
return e.type="cartesian2d",e.dimensions=T,e}return(0,i.C6)(e,t),e.prototype.calcAffineTransform=function(){this._transform=this._invTransform=null
var t=this.getAxis("x").scale,e=this.getAxis("y").scale
if(I(t)&&I(e)){var n=t.getExtent(),i=e.getExtent(),r=this.dataToPoint([n[0],i[0]]),o=this.dataToPoint([n[1],i[1]]),a=n[1]-n[0],s=i[1]-i[0]
if(a&&s){var l=(o[0]-r[0])/a,u=(o[1]-r[1])/s,h=r[0]-n[0]*l,c=r[1]-i[0]*u,d=this._transform=[l,0,0,u,h,c]
this._invTransform=(0,S.B8)([],d)}}},e.prototype.getBaseAxis=function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},e.prototype.containPoint=function(t){var e=this.getAxis("x"),n=this.getAxis("y")
return e.contain(e.toLocalCoord(t[0]))&&n.contain(n.toLocalCoord(t[1]))},e.prototype.containData=function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},e.prototype.containZone=function(t,e){var n=this.dataToPoint(t),i=this.dataToPoint(e),r=this.getArea(),o=new w.A(n[0],n[1],i[0]-n[0],i[1]-n[1])
return r.intersect(o)},e.prototype.dataToPoint=function(t,e,n){n=n||[]
var i=t[0],r=t[1]
if(this._transform&&null!=i&&isFinite(i)&&null!=r&&isFinite(r))return(0,M.NW)(n,t,this._transform)
var o=this.getAxis("x"),a=this.getAxis("y")
return n[0]=o.toGlobalCoord(o.dataToCoord(i,e)),n[1]=a.toGlobalCoord(a.dataToCoord(r,e)),n},e.prototype.clampData=function(t,e){var n=this.getAxis("x").scale,i=this.getAxis("y").scale,r=n.getExtent(),o=i.getExtent(),a=n.parse(t[0]),s=i.parse(t[1])
return(e=e||[])[0]=Math.min(Math.max(Math.min(r[0],r[1]),a),Math.max(r[0],r[1])),e[1]=Math.min(Math.max(Math.min(o[0],o[1]),s),Math.max(o[0],o[1])),e},e.prototype.pointToData=function(t,e){var n=[]
if(this._invTransform)return(0,M.NW)(n,t,this._invTransform)
var i=this.getAxis("x"),r=this.getAxis("y")
return n[0]=i.coordToData(i.toLocalCoord(t[0]),e),n[1]=r.coordToData(r.toLocalCoord(t[1]),e),n},e.prototype.getOtherAxis=function(t){return this.getAxis("x"===t.dim?"y":"x")},e.prototype.getArea=function(t){t=t||0
var e=this.getAxis("x").getGlobalExtent(),n=this.getAxis("y").getGlobalExtent(),i=Math.min(e[0],e[1])-t,r=Math.min(n[0],n[1])-t,o=Math.max(e[0],e[1])-i+t,a=Math.max(n[0],n[1])-r+t
return new w.A(i,r,o,a)},e}(A)
var D=n(3947),k=n(7627),L=(0,h.$r)()
function P(t,e){var n=l.Tj(e,(function(e){return t.scale.parse(e)}))
return"time"===t.type&&n.length>0&&(n.sort(),n.unshift(n[0]),n.push(n[n.length-1])),n}function O(t,e){var n,i,r=N(t,"labels"),o=(0,b.j2)(e)
return R(r,o)||(l.Tn(o)?n=B(t,o):(i="auto"===o?function(t){var e=L(t).autoInterval
return null!=e?e:L(t).autoInterval=t.calculateCategoryInterval()}(t):o,n=z(t,i)),E(r,o,{labels:n,labelCategoryInterval:i}))}function N(t,e){return L(t)[e]||(L(t)[e]=[])}function R(t,e){for(var n=0;n<t.length;n++)if(t[n].key===e)return t[n].value}function E(t,e,n){return t.push({key:e,value:n}),n}function z(t,e,n){var i=(0,b.ry)(t),r=t.scale,o=r.getExtent(),a=t.getLabelModel(),s=[],l=Math.max((e||0)+1,1),u=o[0],h=r.count()
0!==u&&l>1&&h/l>2&&(u=Math.round(Math.ceil(u/l)*l))
var c=(0,b.PJ)(t),d=a.get("showMinLabel")||c,p=a.get("showMaxLabel")||c
d&&u!==o[0]&&g(o[0])
for(var f=u;f<=o[1];f+=l)g(f)
function g(t){var e={value:t}
s.push(n?t:{formattedLabel:i(e),rawLabel:r.getLabel(e),tickValue:t})}return p&&f-l!==o[1]&&g(o[1]),s}function B(t,e,n){var i=t.scale,r=(0,b.ry)(t),o=[]
return l.__(i.getTicks(),(function(t){var a=i.getLabel(t),s=t.value
e(t.value,a)&&o.push(n?s:{formattedLabel:r(t),rawLabel:a,tickValue:s})})),o}var V=[0,1]
function F(t,e){var n=(t[1]-t[0])/e/2
t[0]+=n,t[1]-=n}const W=function(t){function e(e,n,i,r,o){var a=t.call(this,e,n,i)||this
return a.index=0,a.type=r||"value",a.position=o||"bottom",a}return(0,i.C6)(e,t),e.prototype.isHorizontal=function(){var t=this.position
return"top"===t||"bottom"===t},e.prototype.getGlobalExtent=function(t){var e=this.getExtent()
return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},e.prototype.pointToData=function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},e.prototype.setCategorySortInfo=function(t){if("category"!==this.type)return!1
this.model.option.categorySortInfo=t,this.scale.setSortInfo(t)},e}(function(){function t(t,e,n){this.onBand=!1,this.inverse=!1,this.dim=t,this.scale=e,this._extent=n||[0,0]}return t.prototype.contain=function(t){var e=this._extent,n=Math.min(e[0],e[1]),i=Math.max(e[0],e[1])
return t>=n&&t<=i},t.prototype.containData=function(t){return this.scale.contain(t)},t.prototype.getExtent=function(){return this._extent.slice()},t.prototype.getPixelPrecision=function(t){return(0,D.hb)(t||this.scale.getExtent(),this._extent)},t.prototype.setExtent=function(t,e){var n=this._extent
n[0]=t,n[1]=e},t.prototype.dataToCoord=function(t,e){var n=this._extent,i=this.scale
return t=i.normalize(t),this.onBand&&"ordinal"===i.type&&F(n=n.slice(),i.count()),(0,D.Cb)(t,V,n,e)},t.prototype.coordToData=function(t,e){var n=this._extent,i=this.scale
this.onBand&&"ordinal"===i.type&&F(n=n.slice(),i.count())
var r=(0,D.Cb)(t,n,V,e)
return this.scale.scale(r)},t.prototype.pointToData=function(t,e){},t.prototype.getTicksCoords=function(t){var e=(t=t||{}).tickModel||this.getTickModel(),n=function(t,e){var n=t.getTickModel().get("customValues")
return n?{ticks:P(t,n)}:"category"===t.type?function(t,e){var n,i,r=N(t,"ticks"),o=(0,b.j2)(e),a=R(r,o)
if(a)return a
if(e.get("show")&&!t.scale.isBlank()||(n=[]),l.Tn(o))n=B(t,o,!0)
else if("auto"===o){var s=O(t,t.getLabelModel())
i=s.labelCategoryInterval,n=l.Tj(s.labels,(function(t){return t.tickValue}))}else n=z(t,i=o,!0)
return E(r,o,{ticks:n,tickCategoryInterval:i})}(t,e):{ticks:l.Tj(t.scale.getTicks(),(function(t){return t.value}))}}(this,e).ticks,i=(0,l.Tj)(n,(function(t){return{coord:this.dataToCoord("ordinal"===this.scale.type?this.scale.getRawOrdinalNumber(t):t),tickValue:t}}),this)
return function(t,e,n,i){var r=e.length
if(t.onBand&&!n&&r){var o,a,s=t.getExtent()
if(1===r)e[0].coord=s[0],o=e[1]={coord:s[1]}
else{var u=e[r-1].tickValue-e[0].tickValue,h=(e[r-1].coord-e[0].coord)/u;(0,l.__)(e,(function(t){t.coord-=h/2})),a=1+t.scale.getExtent()[1]-e[r-1].tickValue,o={coord:e[r-1].coord+h*a},e.push(o)}var c=s[0]>s[1]
d(e[0].coord,s[0])&&(i?e[0].coord=s[0]:e.shift()),i&&d(s[0],e[0].coord)&&e.unshift({coord:s[0]}),d(s[1],o.coord)&&(i?o.coord=s[1]:e.pop()),i&&d(o.coord,s[1])&&e.push({coord:s[1]})}function d(t,e){return t=(0,D.LI)(t),e=(0,D.LI)(e),c?t>e:t<e}}(this,i,e.get("alignWithLabel"),t.clamp),i},t.prototype.getMinorTicksCoords=function(){if("ordinal"===this.scale.type)return[]
var t=this.model.getModel("minorTick").get("splitNumber")
t>0&&t<100||(t=5)
var e=this.scale.getMinorTicks(t)
return(0,l.Tj)(e,(function(t){return(0,l.Tj)(t,(function(t){return{coord:this.dataToCoord(t),tickValue:t}}),this)}),this)},t.prototype.getViewLabels=function(){return function(t){var e=t.getLabelModel().get("customValues")
if(e){var n=(0,b.ry)(t)
return{labels:P(t,e).map((function(e){var i={value:e}
return{formattedLabel:n(i),rawLabel:t.scale.getLabel(i),tickValue:e}}))}}return"category"===t.type?function(t){var e=t.getLabelModel(),n=O(t,e)
return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:n.labelCategoryInterval}:n}(t):function(t){var e=t.scale.getTicks(),n=(0,b.ry)(t)
return{labels:l.Tj(e,(function(e,i){return{level:e.level,formattedLabel:n(e,i),rawLabel:t.scale.getLabel(e),tickValue:e.value}}))}}(t)}(this).labels},t.prototype.getLabelModel=function(){return this.model.getModel("axisLabel")},t.prototype.getTickModel=function(){return this.model.getModel("axisTick")},t.prototype.getBandWidth=function(){var t=this._extent,e=this.scale.getExtent(),n=e[1]-e[0]+(this.onBand?1:0)
0===n&&(n=1)
var i=Math.abs(t[1]-t[0])
return Math.abs(i)/n},t.prototype.calculateCategoryInterval=function(){return function(t){var e=function(t){var e=t.getLabelModel()
return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}(t),n=(0,b.ry)(t),i=(e.axisRotate-e.labelRotate)/180*Math.PI,r=t.scale,o=r.getExtent(),a=r.count()
if(o[1]-o[0]<1)return 0
var s=1
a>40&&(s=Math.max(1,Math.floor(a/40)))
for(var l=o[0],u=t.dataToCoord(l+1)-t.dataToCoord(l),h=Math.abs(u*Math.cos(i)),c=Math.abs(u*Math.sin(i)),d=0,p=0;l<=o[1];l+=s){var f,g,y=k.NO(n({value:l}),e.font,"center","top")
f=1.3*y.width,g=1.3*y.height,d=Math.max(d,f,7),p=Math.max(p,g,7)}var v=d/h,m=p/c
isNaN(v)&&(v=1/0),isNaN(m)&&(m=1/0)
var _=Math.max(0,Math.floor(Math.min(v,m))),x=L(t.model),w=t.getExtent(),A=x.lastAutoInterval,S=x.lastTickCount
return null!=A&&null!=S&&Math.abs(A-_)<=1&&Math.abs(S-a)<=1&&A>_&&x.axisExtent0===w[0]&&x.axisExtent1===w[1]?_=A:(x.lastTickCount=a,x.lastAutoInterval=_,x.axisExtent0=w[0],x.axisExtent1=w[1]),_}(this)},t}())
var H=n(9271),G=n(2384),j=n(4841),X=Math.log,Y=function(){function t(t,e,n){this.type="grid",this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this.axisPointerEnabled=!0,this.dimensions=T,this._initCartesian(t,e,n),this.model=t}return t.prototype.getRect=function(){return this._rect},t.prototype.update=function(t,e){var n=this._axesMap
function i(t){var e,n=(0,l.HP)(t),i=n.length
if(i){for(var r=[],o=i-1;o>=0;o--){var a=t[+n[o]],s=a.model,u=a.scale;(0,G.rf)(u)&&s.get("alignTicks")&&null==s.get("interval")?r.push(a):((0,b.af)(u,s),(0,G.rf)(u)&&(e=a))}r.length&&(e||(e=r.pop(),(0,b.af)(e.scale,e.model)),(0,l.__)(r,(function(t){!function(t,e,n){var i=j.A.prototype,r=i.getTicks.call(n),o=i.getTicks.call(n,!0),a=r.length-1,s=i.getInterval.call(n),l=(0,b.Rx)(t,e),u=l.extent,h=l.fixMin,c=l.fixMax
if("log"===t.type){var d=X(t.base)
u=[X(u[0])/d,X(u[1])/d]}t.setExtent(u[0],u[1]),t.calcNiceExtent({splitNumber:a,fixMin:h,fixMax:c})
var p=i.getExtent.call(t)
h&&(u[0]=p[0]),c&&(u[1]=p[1])
var f=i.getInterval.call(t),g=u[0],y=u[1]
if(h&&c)f=(y-g)/a
else if(h)for(y=u[0]+f*a;y<u[1]&&isFinite(y)&&isFinite(u[1]);)f=(0,G.kH)(f),y=u[0]+f*a
else if(c)for(g=u[1]-f*a;g>u[0]&&isFinite(g)&&isFinite(u[0]);)f=(0,G.kH)(f),g=u[1]-f*a
else{t.getTicks().length-1>a&&(f=(0,G.kH)(f))
var v=f*a
y=Math.ceil(u[1]/f)*f,(g=(0,D.LI)(y-v))<0&&u[0]>=0?(g=0,y=(0,D.LI)(v)):y>0&&u[1]<=0&&(y=0,g=-(0,D.LI)(v))}var m=(r[0].value-o[0].value)/s,_=(r[a].value-o[a].value)/s
i.setExtent.call(t,g+f*m,y+f*_),i.setInterval.call(t,f),(m||_)&&i.setNiceExtent.call(t,g+f,y-f)}(t.scale,t.model,e.scale)})))}}this._updateScale(t,this.model),i(n.x),i(n.y)
var r={};(0,l.__)(n.x,(function(t){Z(n,"y",t,r)})),(0,l.__)(n.y,(function(t){Z(n,"x",t,r)})),this.resize(this.model,e)},t.prototype.resize=function(t,e,n){var i=t.getBoxLayoutParams(),r=!n&&t.get("containLabel"),o=(0,y.dV)(i,{width:e.getWidth(),height:e.getHeight()})
this._rect=o
var a=this._axesList
function s(){(0,l.__)(a,(function(t){var e=t.isHorizontal(),n=e?[0,o.width]:[0,o.height],i=t.inverse?1:0
t.setExtent(n[i],n[1-i]),function(t,e){var n=t.getExtent(),i=n[0]+n[1]
t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return i-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return i-t+e}}(t,e?o.x:o.y)}))}s(),r&&((0,l.__)(a,(function(t){if(!t.model.get(["axisLabel","inside"])){var e=(0,b.Og)(t)
if(e){var n=t.isHorizontal()?"height":"width",i=t.model.get(["axisLabel","margin"])
o[n]-=e[n]+i,"top"===t.position?o.y+=e.height+i:"left"===t.position&&(o.x+=e.width+i)}}})),s()),(0,l.__)(this._coordsList,(function(t){t.calcAffineTransform()}))},t.prototype.getAxis=function(t,e){var n=this._axesMap[t]
if(null!=n)return n[e||0]},t.prototype.getAxes=function(){return this._axesList.slice()},t.prototype.getCartesian=function(t,e){if(null!=t&&null!=e){var n="x"+t+"y"+e
return this._coordsMap[n]}(0,l.Gv)(t)&&(e=t.yAxisIndex,t=t.xAxisIndex)
for(var i=0,r=this._coordsList;i<r.length;i++)if(r[i].getAxis("x").index===t||r[i].getAxis("y").index===e)return r[i]},t.prototype.getCartesians=function(){return this._coordsList.slice()},t.prototype.convertToPixel=function(t,e,n){var i=this._findConvertTarget(e)
return i.cartesian?i.cartesian.dataToPoint(n):i.axis?i.axis.toGlobalCoord(i.axis.dataToCoord(n)):null},t.prototype.convertFromPixel=function(t,e,n){var i=this._findConvertTarget(e)
return i.cartesian?i.cartesian.pointToData(n):i.axis?i.axis.coordToData(i.axis.toLocalCoord(n)):null},t.prototype._findConvertTarget=function(t){var e,n,i=t.seriesModel,r=t.xAxisModel||i&&i.getReferringComponents("xAxis",h.US).models[0],o=t.yAxisModel||i&&i.getReferringComponents("yAxis",h.US).models[0],a=t.gridModel,s=this._coordsList
return i?(e=i.coordinateSystem,(0,l.qh)(s,e)<0&&(e=null)):r&&o?e=this.getCartesian(r.componentIndex,o.componentIndex):r?n=this.getAxis("x",r.componentIndex):o?n=this.getAxis("y",o.componentIndex):a&&a.coordinateSystem===this&&(e=this._coordsList[0]),{cartesian:e,axis:n}},t.prototype.containPoint=function(t){var e=this._coordsList[0]
if(e)return e.containPoint(t)},t.prototype._initCartesian=function(t,e,n){var i=this,r=this,o={left:!1,right:!1,top:!1,bottom:!1},a={x:{},y:{}},s={x:0,y:0}
if(e.eachComponent("xAxis",u("x"),this),e.eachComponent("yAxis",u("y"),this),!s.x||!s.y)return this._axesMap={},void(this._axesList=[])
function u(e){return function(n,i){if(U(n,t)){var l=n.get("position")
"x"===e?"top"!==l&&"bottom"!==l&&(l=o.bottom?"top":"bottom"):"left"!==l&&"right"!==l&&(l=o.left?"right":"left"),o[l]=!0
var u=new W(e,(0,b.f$)(n),[0,0],n.get("type"),l),h="category"===u.type
u.onBand=h&&n.get("boundaryGap"),u.inverse=n.get("inverse"),n.axis=u,u.model=n,u.grid=r,u.index=i,r._axesList.push(u),a[e][i]=u,s[e]++}}}this._axesMap=a,(0,l.__)(a.x,(function(e,n){(0,l.__)(a.y,(function(r,o){var a="x"+n+"y"+o,s=new C(a)
s.master=i,s.model=t,i._coordsMap[a]=s,i._coordsList.push(s),s.addAxis(e),s.addAxis(r)}))}))},t.prototype._updateScale=function(t,e){function n(t,e){(0,l.__)((0,b.wq)(t,e.dim),(function(n){e.scale.unionExtentFromData(t,n)}))}(0,l.__)(this._axesList,(function(t){if(t.scale.setExtent(1/0,-1/0),"category"===t.type){var e=t.model.get("categorySortInfo")
t.scale.setSortInfo(e)}})),t.eachSeries((function(t){if((0,H.gO)(t)){var i=(0,H.LR)(t),r=i.xAxisModel,o=i.yAxisModel
if(!U(r,e)||!U(o,e))return
var a=this.getCartesian(r.componentIndex,o.componentIndex),s=t.getData(),l=a.getAxis("x"),u=a.getAxis("y")
n(s,l),n(s,u)}}),this)},t.prototype.getTooltipAxes=function(t){var e=[],n=[]
return(0,l.__)(this.getCartesians(),(function(i){var r=null!=t&&"auto"!==t?i.getAxis(t):i.getBaseAxis(),o=i.getOtherAxis(r);(0,l.qh)(e,r)<0&&e.push(r),(0,l.qh)(n,o)<0&&n.push(o)})),{baseAxes:e,otherAxes:n}},t.create=function(e,n){var i=[]
return e.eachComponent("grid",(function(r,o){var a=new t(r,e,n)
a.name="grid_"+o,a.resize(r,n,!0),r.coordinateSystem=a,i.push(a)})),e.eachSeries((function(t){if((0,H.gO)(t)){var e=(0,H.LR)(t),n=e.xAxisModel,i=e.yAxisModel,r=n.getCoordSysModel().coordinateSystem
t.coordinateSystem=r.getCartesian(n.componentIndex,i.componentIndex)}})),i},t.dimensions=T,t}()
function U(t,e){return t.getCoordSysModel()===e}function Z(t,e,n,i){n.getAxesOnZeroOf=function(){return r?[r]:[]}
var r,o=t[e],a=n.model,s=a.get(["axisLine","onZero"]),l=a.get(["axisLine","onZeroAxisIndex"])
if(s){if(null!=l)$(o[l])&&(r=o[l])
else for(var u in o)if(o.hasOwnProperty(u)&&$(o[u])&&!i[h(o[u])]){r=o[u]
break}r&&(i[h(r)]=!0)}function h(t){return t.dim+"_"+t.index}}function $(t){return t&&"category"!==t.type&&"time"!==t.type&&(0,b.JJ)(t)}const q=Y
var K=n(7941),Q=n(3023),J=n(1032),tt=n(6113),et=n(5613),nt=(0,h.$r)(),it=["axisLine","axisTickLabel","axisName"],rt=["splitArea","splitLine","minorSplitLine"],ot=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n.axisPointerClass="CartesianAxisPointer",n}return(0,i.C6)(e,t),e.prototype.render=function(e,n,i,r){this.group.removeAll()
var o=this._axisGroup
if(this._axisGroup=new K.A,this.group.add(this._axisGroup),e.get("show")){var a=e.getCoordSysModel(),s=H.Zp(a,e),u=new tt.A(e,l.X$({handleAutoShown:function(t){for(var n=a.coordinateSystem.getCartesians(),i=0;i<n.length;i++)if((0,G.rf)(n[i].getOtherAxis(e.axis).scale))return!0
return!1}},s))
l.__(it,u.add,u),this._axisGroup.add(u.getGroup()),l.__(rt,(function(t){e.get([t,"show"])&&at[t](this,this._axisGroup,e,a)}),this),r&&"changeAxisOrder"===r.type&&r.isInitSort||Q.groupTransition(o,this._axisGroup,e),t.prototype.render.call(this,e,n,i,r)}},e.prototype.remove=function(){nt(this).splitAreaColors=null},e.type="cartesianAxis",e}(et.A),at={splitLine:function(t,e,n,i){var r=n.axis
if(!r.scale.isBlank()){var o=n.getModel("splitLine"),a=o.getModel("lineStyle"),s=a.get("color")
s=l.cy(s)?s:[s]
for(var u=i.coordinateSystem.getRect(),h=r.isHorizontal(),c=0,d=r.getTicksCoords({tickModel:o}),p=[],f=[],g=a.getLineStyle(),y=0;y<d.length;y++){var v=r.toGlobalCoord(d[y].coord)
h?(p[0]=v,p[1]=u.y,f[0]=v,f[1]=u.y+u.height):(p[0]=u.x,p[1]=v,f[0]=u.x+u.width,f[1]=v)
var m=c++%s.length,_=d[y].tickValue,x=new J.A({anid:null!=_?"line_"+d[y].tickValue:null,autoBatch:!0,shape:{x1:p[0],y1:p[1],x2:f[0],y2:f[1]},style:l.NT({stroke:s[m]},g),silent:!0})
Q.subPixelOptimizeLine(x.shape,g.lineWidth),e.add(x)}}},minorSplitLine:function(t,e,n,i){var r=n.axis,o=n.getModel("minorSplitLine").getModel("lineStyle"),a=i.coordinateSystem.getRect(),s=r.isHorizontal(),l=r.getMinorTicksCoords()
if(l.length)for(var u=[],h=[],c=o.getLineStyle(),d=0;d<l.length;d++)for(var p=0;p<l[d].length;p++){var f=r.toGlobalCoord(l[d][p].coord)
s?(u[0]=f,u[1]=a.y,h[0]=f,h[1]=a.y+a.height):(u[0]=a.x,u[1]=f,h[0]=a.x+a.width,h[1]=f)
var g=new J.A({anid:"minor_line_"+l[d][p].tickValue,autoBatch:!0,shape:{x1:u[0],y1:u[1],x2:h[0],y2:h[1]},style:c,silent:!0})
Q.subPixelOptimizeLine(g.shape,c.lineWidth),e.add(g)}},splitArea:function(t,e,n,i){!function(t,e,n,i){var r=n.axis
if(!r.scale.isBlank()){var o=n.getModel("splitArea"),a=o.getModel("areaStyle"),u=a.get("color"),h=i.coordinateSystem.getRect(),c=r.getTicksCoords({tickModel:o,clamp:!0})
if(c.length){var d=u.length,p=nt(t).splitAreaColors,f=l.nt(),g=0
if(p)for(var y=0;y<c.length;y++){var v=p.get(c[y].tickValue)
if(null!=v){g=(v+(d-1)*y)%d
break}}var m=r.toGlobalCoord(c[0].coord),_=a.getAreaStyle()
for(u=l.cy(u)?u:[u],y=1;y<c.length;y++){var x=r.toGlobalCoord(c[y].coord),b=void 0,w=void 0,A=void 0,S=void 0
r.isHorizontal()?(b=m,w=h.y,A=x-b,S=h.height,m=b+A):(b=h.x,w=m,A=h.width,m=w+(S=x-w))
var M=c[y-1].tickValue
null!=M&&f.set(M,g),e.add(new s.A({anid:null!=M?"area_"+M:null,shape:{x:b,y:w,width:A,height:S},style:l.NT({fill:u[g]},_),autoBatch:!0,silent:!0})),g=(g+1)%d}nt(t).splitAreaColors=f}}}(t,e,n,i)}},st=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n}return(0,i.C6)(e,t),e.type="xAxis",e}(ot),lt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this
return e.type=st.type,e}return(0,i.C6)(e,t),e.type="yAxis",e}(ot),ut=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this
return e.type="grid",e}return(0,i.C6)(e,t),e.prototype.render=function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new s.A({shape:t.coordinateSystem.getRect(),style:(0,l.NT)({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))},e.type="grid",e}(r.A),ht={offset:0}
function ct(t){t.registerComponentView(ut),t.registerComponentModel(a),t.registerCoordinateSystem("cartesian2d",q),_(t,"x",c,ht),_(t,"y",c,ht),t.registerComponentView(st),t.registerComponentView(lt),t.registerPreprocessor((function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})}))}var dt=n(6848),pt=n(2862)
function ft(t){(0,pt.Y)(ct),(0,pt.Y)(dt.a)}},2566:(t,e,n)=>{n.d(e,{A:()=>p})
var i=n(4784),r=n(9430),o=n(6885),a=n(7454),s=n(8301),l="\0_ec_interaction_mutex"
function u(t,e){return!!function(t){return t[l]||(t[l]={})}(t)[e]}function h(t,e,n,i,r){t.pointerChecker&&t.pointerChecker(i,r.originX,r.originY)&&(o.ds(i.event),c(t,e,n,i,r))}function c(t,e,n,i,r){r.isAvailableBehavior=(0,s.oI)(d,null,n,i),t.trigger(e,r)}function d(t,e,n){var i=n[t]
return!t||i&&(!(0,s.Kg)(i)||e.event[i+"Key"])}a.OH({type:"takeGlobalCursor",event:"globalCursorTaken",update:"update"},s.lQ)
const p=function(t){function e(e){var n=t.call(this)||this
n._zr=e
var i=(0,s.oI)(n._mousedownHandler,n),r=(0,s.oI)(n._mousemoveHandler,n),o=(0,s.oI)(n._mouseupHandler,n),a=(0,s.oI)(n._mousewheelHandler,n),l=(0,s.oI)(n._pinchHandler,n)
return n.enable=function(t,n){this.disable(),this._opt=(0,s.NT)((0,s.o8)(n)||{},{zoomOnMouseWheel:!0,moveOnMouseMove:!0,moveOnMouseWheel:!1,preventDefaultMouseMove:!0}),null==t&&(t=!0),!0!==t&&"move"!==t&&"pan"!==t||(e.on("mousedown",i),e.on("mousemove",r),e.on("mouseup",o)),!0!==t&&"scale"!==t&&"zoom"!==t||(e.on("mousewheel",a),e.on("pinch",l))},n.disable=function(){e.off("mousedown",i),e.off("mousemove",r),e.off("mouseup",o),e.off("mousewheel",a),e.off("pinch",l)},n}return(0,i.C6)(e,t),e.prototype.isDragging=function(){return this._dragging},e.prototype.isPinching=function(){return this._pinching},e.prototype.setPointerChecker=function(t){this.pointerChecker=t},e.prototype.dispose=function(){this.disable()},e.prototype._mousedownHandler=function(t){if(!o.W5(t)){for(var e=t.target;e;){if(e.draggable)return
e=e.__hostTarget||e.parent}var n=t.offsetX,i=t.offsetY
this.pointerChecker&&this.pointerChecker(t,n,i)&&(this._x=n,this._y=i,this._dragging=!0)}},e.prototype._mousemoveHandler=function(t){if(this._dragging&&d("moveOnMouseMove",t,this._opt)&&"pinch"!==t.gestureEvent&&!u(this._zr,"globalPan")){var e=t.offsetX,n=t.offsetY,i=this._x,r=this._y,a=e-i,s=n-r
this._x=e,this._y=n,this._opt.preventDefaultMouseMove&&o.ds(t.event),c(this,"pan","moveOnMouseMove",t,{dx:a,dy:s,oldX:i,oldY:r,newX:e,newY:n,isAvailableBehavior:null})}},e.prototype._mouseupHandler=function(t){o.W5(t)||(this._dragging=!1)},e.prototype._mousewheelHandler=function(t){var e=d("zoomOnMouseWheel",t,this._opt),n=d("moveOnMouseWheel",t,this._opt),i=t.wheelDelta,r=Math.abs(i),o=t.offsetX,a=t.offsetY
if(0!==i&&(e||n)){if(e){var s=r>3?1.4:r>1?1.2:1.1
h(this,"zoom","zoomOnMouseWheel",t,{scale:i>0?s:1/s,originX:o,originY:a,isAvailableBehavior:null})}if(n){var l=Math.abs(i)
h(this,"scrollMove","moveOnMouseWheel",t,{scrollDelta:(i>0?1:-1)*(l>3?.4:l>1?.15:.05),originX:o,originY:a,isAvailableBehavior:null})}}},e.prototype._pinchHandler=function(t){u(this._zr,"globalPan")||h(this,"zoom",null,t,{scale:t.pinchScale>1?1.1:1/1.1,originX:t.pinchX,originY:t.pinchY,isAvailableBehavior:null})},e}(r.A)},2160:(t,e,n)=>{n.d(e,{I:()=>r})
var i={axisPointer:1,tooltip:1,brush:1}
function r(t,e,n){var r=e.getComponentByElement(t.topTarget),o=r&&r.coordinateSystem
return r&&r!==n&&!i.hasOwnProperty(r.mainType)&&o&&o.model!==n}},3663:(t,e,n)=>{function i(t,e,n){var i=t.target
i.x+=e,i.y+=n,i.dirty()}function r(t,e,n,i){var r=t.target,o=t.zoomLimit,a=t.zoom=t.zoom||1
if(a*=e,o){var s=o.min||0,l=o.max||1/0
a=Math.max(Math.min(l,a),s)}var u=a/t.zoom
t.zoom=a,r.x-=(n-r.x)*(u-1),r.y-=(i-r.y)*(u-1),r.scaleX*=u,r.scaleY*=u,r.dirty()}n.d(e,{t:()=>i,x:()=>r})},2193:(t,e,n)=>{n.d(e,{a:()=>H})
var i=n(2862),r=n(4784),o=n(8301),a=n(7413),s=n(5225)
const l=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n.layoutMode={type:"box",ignoreSize:!0},n}return(0,r.C6)(e,t),e.prototype.init=function(t,e,n){this.mergeDefaultAndTheme(t,n),t.selected=t.selected||{},this._updateSelector(t)},e.prototype.mergeOption=function(e,n){t.prototype.mergeOption.call(this,e,n),this._updateSelector(e)},e.prototype._updateSelector=function(t){var e=t.selector,n=this.ecModel
!0===e&&(e=t.selector=["all","inverse"]),o.cy(e)&&o.__(e,(function(t,i){o.Kg(t)&&(t={type:t}),e[i]=o.h1(t,function(t,e){return"all"===e?{type:"all",title:t.getLocaleModel().get(["legend","selector","all"])}:"inverse"===e?{type:"inverse",title:t.getLocaleModel().get(["legend","selector","inverse"])}:void 0}(n,t.type))}))},e.prototype.optionUpdated=function(){this._updateData(this.ecModel)
var t=this._data
if(t[0]&&"single"===this.get("selectedMode")){for(var e=!1,n=0;n<t.length;n++){var i=t[n].get("name")
if(this.isSelected(i)){this.select(i),e=!0
break}}!e&&this.select(t[0].get("name"))}},e.prototype._updateData=function(t){var e=[],n=[]
t.eachRawSeries((function(i){var r,o=i.name
if(n.push(o),i.legendVisualProvider){var a=i.legendVisualProvider.getAllNames()
t.isSeriesFiltered(i)||(n=n.concat(a)),a.length?e=e.concat(a):r=!0}else r=!0
r&&(0,s.O0)(i)&&e.push(i.name)})),this._availableNames=n
var i=this.get("data")||e,r=o.nt(),l=o.Tj(i,(function(t){return(o.Kg(t)||o.Et(t))&&(t={name:t}),r.get(t.name)?null:(r.set(t.name,!0),new a.A(t,this,this.ecModel))}),this)
this._data=o.pb(l,(function(t){return!!t}))},e.prototype.getData=function(){return this._data},e.prototype.select=function(t){var e=this.option.selected
if("single"===this.get("selectedMode")){var n=this._data
o.__(n,(function(t){e[t.get("name")]=!1}))}e[t]=!0},e.prototype.unSelect=function(t){"single"!==this.get("selectedMode")&&(this.option.selected[t]=!1)},e.prototype.toggleSelected=function(t){var e=this.option.selected
e.hasOwnProperty(t)||(e[t]=!0),this[e[t]?"unSelect":"select"](t)},e.prototype.allSelect=function(){var t=this._data,e=this.option.selected
o.__(t,(function(t){e[t.get("name",!0)]=!0}))},e.prototype.inverseSelect=function(){var t=this._data,e=this.option.selected
o.__(t,(function(t){var n=t.get("name",!0)
e.hasOwnProperty(n)||(e[n]=!0),e[n]=!e[n]}))},e.prototype.isSelected=function(t){var e=this.option.selected
return!(e.hasOwnProperty(t)&&!e[t])&&o.qh(this._availableNames,t)>=0},e.prototype.getOrient=function(){return"vertical"===this.get("orient")?{index:1,name:"vertical"}:{index:0,name:"horizontal"}},e.type="legend.plain",e.dependencies=["series"],e.defaultOption={z:4,show:!0,orient:"horizontal",left:"center",top:0,align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,symbolRotate:"inherit",symbolKeepAspect:!0,inactiveColor:"#ccc",inactiveBorderColor:"#ccc",inactiveBorderWidth:"auto",itemStyle:{color:"inherit",opacity:"inherit",borderColor:"inherit",borderWidth:"auto",borderCap:"inherit",borderJoin:"inherit",borderDashOffset:"inherit",borderMiterLimit:"inherit"},lineStyle:{width:"auto",color:"inherit",inactiveColor:"#ccc",inactiveWidth:2,opacity:"inherit",type:"inherit",cap:"inherit",join:"inherit",dashOffset:"inherit",miterLimit:"inherit"},textStyle:{color:"#333"},selectedMode:!0,selector:!1,selectorLabel:{show:!0,borderRadius:10,padding:[3,5,3,5],fontSize:12,fontFamily:"sans-serif",color:"#666",borderWidth:1,borderColor:"#666"},emphasis:{selectorLabel:{show:!0,color:"#eee",backgroundColor:"#666"}},selectorPosition:"auto",selectorItemGap:7,selectorButtonGap:10,tooltip:{show:!1}},e}(n(7518).A)
var u=n(7435),h=n(7941),c=n(5652),d=n(4130),p=n(3023),f=n(200),g=n(923),y=n(3473),v=n(3960),m=n(4642),_=n(5478),x=n(9128),b=n(1323),w=o.cF,A=o.__,S=h.A
function M(t,e,n,i){C(t,e,n,i),n.dispatchAction({type:"legendToggleSelect",name:null!=t?t:e}),I(t,e,n,i)}function T(t){for(var e,n=t.getZr().storage.getDisplayList(),i=0,r=n.length;i<r&&!(e=n[i].states.emphasis);)i++
return e&&e.hoverLayer}function I(t,e,n,i){T(n)||n.dispatchAction({type:"highlight",seriesName:t,name:e,excludeSeriesId:i})}function C(t,e,n,i){T(n)||n.dispatchAction({type:"downplay",seriesName:t,name:e,excludeSeriesId:i})}const D=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n.newlineDisabled=!1,n}return(0,r.C6)(e,t),e.prototype.init=function(){this.group.add(this._contentGroup=new S),this.group.add(this._selectorGroup=new S),this._isFirstRender=!0},e.prototype.getContentGroup=function(){return this._contentGroup},e.prototype.getSelectorGroup=function(){return this._selectorGroup},e.prototype.render=function(t,e,n){var i=this._isFirstRender
if(this._isFirstRender=!1,this.resetInner(),t.get("show",!0)){var r=t.get("align"),a=t.get("orient")
r&&"auto"!==r||(r="right"===t.get("left")&&"vertical"===a?"right":"left")
var s=t.get("selector",!0),l=t.get("selectorPosition",!0)
!s||l&&"auto"!==l||(l="horizontal"===a?"end":"start"),this.renderInner(r,t,e,n,s,a,l)
var u=t.getBoxLayoutParams(),h={width:n.getWidth(),height:n.getHeight()},c=t.get("padding"),p=v.dV(u,h,c),f=this.layoutInner(t,r,p,i,s,l),g=v.dV(o.NT({width:f.width,height:f.height},u),h,c)
this.group.x=g.x-f.x,this.group.y=g.y-f.y,this.group.markRedraw(),this.group.add(this._backgroundEl=function(t,e){var n=y.QX(e.get("padding")),i=e.getItemStyle(["color","opacity"])
return i.fill=e.get("backgroundColor"),new d.A({shape:{x:t.x-n[3],y:t.y-n[0],width:t.width+n[1]+n[3],height:t.height+n[0]+n[2],r:e.get("borderRadius")},style:i,silent:!0,z2:-1})}(f,t))}},e.prototype.resetInner=function(){this.getContentGroup().removeAll(),this._backgroundEl&&this.group.remove(this._backgroundEl),this.getSelectorGroup().removeAll()},e.prototype.renderInner=function(t,e,n,i,r,a,s){var l=this.getContentGroup(),h=o.nt(),c=e.get("selectedMode"),d=[]
n.eachRawSeries((function(t){!t.get("legendHoverLink")&&d.push(t.id)})),A(e.getData(),(function(r,a){var s=r.get("name")
if(!this.newlineDisabled&&(""===s||"\n"===s)){var p=new S
return p.newline=!0,void l.add(p)}var f=n.getSeriesByName(s)[0]
if(!h.get(s))if(f){var g=f.getData(),y=g.getVisual("legendLineStyle")||{},v=g.getVisual("legendIcon"),m=g.getVisual("style"),_=this._createItem(f,s,a,r,e,t,y,m,v,c,i)
_.on("click",w(M,s,null,i,d)).on("mouseover",w(I,f.name,null,i,d)).on("mouseout",w(C,f.name,null,i,d)),n.ssr&&_.eachChild((function(t){var e=(0,b.z)(t)
e.seriesIndex=f.seriesIndex,e.dataIndex=a,e.ssrType="legend"})),h.set(s,!0)}else n.eachRawSeries((function(l){if(!h.get(s)&&l.legendVisualProvider){var p=l.legendVisualProvider
if(!p.containName(s))return
var f=p.indexOfName(s),g=p.getItemVisual(f,"style"),y=p.getItemVisual(f,"legendIcon"),v=(0,u.qg)(g.fill)
v&&0===v[3]&&(v[3]=.2,g=o.X$(o.X$({},g),{fill:(0,u.As)(v,"rgba")}))
var m=this._createItem(l,s,a,r,e,t,{},g,y,c,i)
m.on("click",w(M,null,s,i,d)).on("mouseover",w(I,null,s,i,d)).on("mouseout",w(C,null,s,i,d)),n.ssr&&m.eachChild((function(t){var e=(0,b.z)(t)
e.seriesIndex=l.seriesIndex,e.dataIndex=a,e.ssrType="legend"})),h.set(s,!0)}}),this)}),this),r&&this._createSelector(r,e,i,a,s)},e.prototype._createSelector=function(t,e,n,i,r){var o=this.getSelectorGroup()
A(t,(function(t){var i=t.type,r=new c.Ay({style:{x:0,y:0,align:"center",verticalAlign:"middle"},onclick:function(){n.dispatchAction({type:"all"===i?"legendAllSelect":"legendInverseSelect"})}})
o.add(r)
var a=e.getModel("selectorLabel"),s=e.getModel(["emphasis","selectorLabel"]);(0,g.qM)(r,{normal:a,emphasis:s},{defaultText:t.title}),(0,f.iJ)(r)}))},e.prototype._createItem=function(t,e,n,i,r,a,s,l,u,h,y){var v,m,b,w=t.visualDrawType,M=r.get("itemWidth"),T=r.get("itemHeight"),I=r.isSelected(e),C=i.get("symbolRotate"),D=i.get("symbolKeepAspect"),k=i.get("icon"),L=function(t,e,n,i,r,o,a){function s(t,e){"auto"===t.lineWidth&&(t.lineWidth=e.lineWidth>0?2:0),A(t,(function(n,i){"inherit"===t[i]&&(t[i]=e[i])}))}var l=e.getModel("itemStyle"),u=l.getItemStyle(),h=0===t.lastIndexOf("empty",0)?"fill":"stroke",c=l.getShallow("decal")
u.decal=c&&"inherit"!==c?(0,x.w)(c,a):i.decal,"inherit"===u.fill&&(u.fill=i[r]),"inherit"===u.stroke&&(u.stroke=i[h]),"inherit"===u.opacity&&(u.opacity=("fill"===r?i:n).opacity),s(u,i)
var d=e.getModel("lineStyle"),p=d.getLineStyle()
if(s(p,n),"auto"===u.fill&&(u.fill=i.fill),"auto"===u.stroke&&(u.stroke=i.fill),"auto"===p.stroke&&(p.stroke=i.fill),!o){var f=e.get("inactiveBorderWidth"),g=u[h]
u.lineWidth="auto"===f?i.lineWidth>0&&g?2:0:u.lineWidth,u.fill=e.get("inactiveColor"),u.stroke=e.get("inactiveBorderColor"),p.stroke=d.get("inactiveColor"),p.lineWidth=d.get("inactiveWidth")}return{itemStyle:u,lineStyle:p}}(u=k||u||"roundRect",i,s,l,w,I,y),P=new S,O=i.getModel("textStyle")
if(!o.Tn(t.getLegendIcon)||k&&"inherit"!==k){var N="inherit"===k&&t.getData().getVisual("symbol")?"inherit"===C?t.getData().getVisual("symbolRotate"):C:0
P.add((m=(v={itemWidth:M,itemHeight:T,icon:u,iconRotate:N,itemStyle:L.itemStyle,lineStyle:L.lineStyle,symbolKeepAspect:D}).icon||"roundRect",(b=(0,_.v5)(m,0,0,v.itemWidth,v.itemHeight,v.itemStyle.fill,v.symbolKeepAspect)).setStyle(v.itemStyle),b.rotation=(v.iconRotate||0)*Math.PI/180,b.setOrigin([v.itemWidth/2,v.itemHeight/2]),m.indexOf("empty")>-1&&(b.style.stroke=b.style.fill,b.style.fill="#fff",b.style.lineWidth=2),b))}else P.add(t.getLegendIcon({itemWidth:M,itemHeight:T,icon:u,iconRotate:C,itemStyle:L.itemStyle,lineStyle:L.lineStyle,symbolKeepAspect:D}))
var R="left"===a?M+5:-5,E=a,z=r.get("formatter"),B=e
o.Kg(z)&&z?B=z.replace("{name}",null!=e?e:""):o.Tn(z)&&(B=z(e))
var V=I?O.getTextColor():i.get("inactiveColor")
P.add(new c.Ay({style:(0,g.VB)(O,{text:B,x:R,y:T/2,fill:V,align:E,verticalAlign:"middle"},{inheritColor:V})}))
var F=new d.A({shape:P.getBoundingRect(),style:{fill:"transparent"}}),W=i.getModel("tooltip")
return W.get("show")&&p.setTooltipConfig({el:F,componentModel:r,itemName:e,itemTooltipOption:W.option}),P.add(F),P.eachChild((function(t){t.silent=!0})),F.silent=!h,this.getContentGroup().add(P),(0,f.iJ)(P),P.__legendDataIndex=n,P},e.prototype.layoutInner=function(t,e,n,i,r,o){var a=this.getContentGroup(),s=this.getSelectorGroup()
v.aP(t.get("orient"),a,t.get("itemGap"),n.width,n.height)
var l=a.getBoundingRect(),u=[-l.x,-l.y]
if(s.markRedraw(),a.markRedraw(),r){v.aP("horizontal",s,t.get("selectorItemGap",!0))
var h=s.getBoundingRect(),c=[-h.x,-h.y],d=t.get("selectorButtonGap",!0),p=t.getOrient().index,f=0===p?"width":"height",g=0===p?"height":"width",y=0===p?"y":"x"
"end"===o?c[p]+=l[f]+d:u[p]+=h[f]+d,c[1-p]+=l[g]/2-h[g]/2,s.x=c[0],s.y=c[1],a.x=u[0],a.y=u[1]
var m={x:0,y:0}
return m[f]=l[f]+d+h[f],m[g]=Math.max(l[g],h[g]),m[y]=Math.min(0,h[y]+c[1-p]),m}return a.x=u[0],a.y=u[1],this.group.getBoundingRect()},e.prototype.remove=function(){this.getContentGroup().removeAll(),this._isFirstRender=!0},e.type="legend.plain",e}(m.A)
function k(t){var e=t.findComponents({mainType:"legend"})
e&&e.length&&t.filterSeries((function(t){for(var n=0;n<e.length;n++)if(!e[n].isSelected(t.name))return!1
return!0}))}function L(t,e,n){var i,r={},a="toggleSelected"===t
return n.eachComponent("legend",(function(n){a&&null!=i?n[i?"select":"unSelect"](e.name):"allSelect"===t||"inverseSelect"===t?n[t]():(n[t](e.name),i=n.isSelected(e.name))
var s=n.getData();(0,o.__)(s,(function(t){var e=t.get("name")
if("\n"!==e&&""!==e){var i=n.isSelected(e)
r.hasOwnProperty(e)?r[e]=r[e]&&i:r[e]=i}}))})),"allSelect"===t||"inverseSelect"===t?{selected:r}:{name:e.name,selected:r}}function P(t){t.registerComponentModel(l),t.registerComponentView(D),t.registerProcessor(t.PRIORITY.PROCESSOR.SERIES_FILTER,k),t.registerSubTypeDefaulter("legend",(function(){return"plain"})),function(t){t.registerAction("legendToggleSelect","legendselectchanged",(0,o.cF)(L,"toggleSelected")),t.registerAction("legendAllSelect","legendselectall",(0,o.cF)(L,"allSelect")),t.registerAction("legendInverseSelect","legendinverseselect",(0,o.cF)(L,"inverseSelect")),t.registerAction("legendSelect","legendselected",(0,o.cF)(L,"select")),t.registerAction("legendUnSelect","legendunselected",(0,o.cF)(L,"unSelect"))}(t)}var O=n(5019)
function N(t,e,n){var i=[1,1]
i[t.getOrient().index]=0,(0,v.YA)(e,n,{type:"box",ignoreSize:!!i})}const R=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n}return(0,r.C6)(e,t),e.prototype.setScrollDataIndex=function(t){this.option.scrollDataIndex=t},e.prototype.init=function(e,n,i){var r=(0,v.vs)(e)
t.prototype.init.call(this,e,n,i),N(this,e,r)},e.prototype.mergeOption=function(e,n){t.prototype.mergeOption.call(this,e,n),N(this,this.option,e)},e.type="legend.scroll",e.defaultOption=(0,O.G_)(l.defaultOption,{scrollDataIndex:0,pageButtonItemGap:5,pageButtonGap:null,pageButtonPosition:"end",pageFormatter:"{current}/{total}",pageIcons:{horizontal:["M0,0L12,-10L12,10z","M0,0L-12,-10L-12,10z"],vertical:["M0,0L20,0L10,-20z","M0,0L20,0L10,20z"]},pageIconColor:"#2f4554",pageIconInactiveColor:"#aaa",pageIconSize:15,pageTextStyle:{color:"#333"},animationDurationUpdate:800}),e}(l)
var E=n(8283),z=h.A,B=["width","height"],V=["x","y"]
const F=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n.newlineDisabled=!0,n._currentIndex=0,n}return(0,r.C6)(e,t),e.prototype.init=function(){t.prototype.init.call(this),this.group.add(this._containerGroup=new z),this._containerGroup.add(this.getContentGroup()),this.group.add(this._controllerGroup=new z)},e.prototype.resetInner=function(){t.prototype.resetInner.call(this),this._controllerGroup.removeAll(),this._containerGroup.removeClipPath(),this._containerGroup.__rectSize=null},e.prototype.renderInner=function(e,n,i,r,a,s,l){var u=this
t.prototype.renderInner.call(this,e,n,i,r,a,s,l)
var h=this._controllerGroup,d=n.get("pageIconSize",!0),f=o.cy(d)?d:[d,d]
y("pagePrev",0)
var g=n.getModel("pageTextStyle")
function y(t,e){var i=t+"DataIndex",a=p.createIcon(n.get("pageIcons",!0)[n.getOrient().name][e],{onclick:o.oI(u._pageGo,u,i,n,r)},{x:-f[0]/2,y:-f[1]/2,width:f[0],height:f[1]})
a.name=t,h.add(a)}h.add(new c.Ay({name:"pageText",style:{text:"xx/xx",fill:g.getTextColor(),font:g.getFont(),verticalAlign:"middle",align:"center"},silent:!0})),y("pageNext",1)},e.prototype.layoutInner=function(t,e,n,i,r,a){var s=this.getSelectorGroup(),l=t.getOrient().index,u=B[l],h=V[l],c=B[1-l],d=V[1-l]
r&&v.aP("horizontal",s,t.get("selectorItemGap",!0))
var p=t.get("selectorButtonGap",!0),f=s.getBoundingRect(),g=[-f.x,-f.y],y=o.o8(n)
r&&(y[u]=n[u]-f[u]-p)
var m=this._layoutContentAndController(t,i,y,l,u,c,d,h)
if(r){if("end"===a)g[l]+=m[u]+p
else{var _=f[u]+p
g[l]-=_,m[h]-=_}m[u]+=f[u]+p,g[1-l]+=m[d]+m[c]/2-f[c]/2,m[c]=Math.max(m[c],f[c]),m[d]=Math.min(m[d],f[d]+g[1-l]),s.x=g[0],s.y=g[1],s.markRedraw()}return m},e.prototype._layoutContentAndController=function(t,e,n,i,r,a,s,l){var u=this.getContentGroup(),h=this._containerGroup,c=this._controllerGroup
v.aP(t.get("orient"),u,t.get("itemGap"),i?n.width:null,i?null:n.height),v.aP("horizontal",c,t.get("pageButtonItemGap",!0))
var p=u.getBoundingRect(),f=c.getBoundingRect(),g=this._showController=p[r]>n[r],y=[-p.x,-p.y]
e||(y[i]=u[l])
var m=[0,0],_=[-f.x,-f.y],x=o.bZ(t.get("pageButtonGap",!0),t.get("itemGap",!0))
g&&("end"===t.get("pageButtonPosition",!0)?_[i]+=n[r]-f[r]:m[i]+=f[r]+x),_[1-i]+=p[a]/2-f[a]/2,u.setPosition(y),h.setPosition(m),c.setPosition(_)
var b={x:0,y:0}
if(b[r]=g?n[r]:p[r],b[a]=Math.max(p[a],f[a]),b[s]=Math.min(0,f[s]+_[1-i]),h.__rectSize=n[r],g){var w={x:0,y:0}
w[r]=Math.max(n[r]-f[r]-x,0),w[a]=b[a],h.setClipPath(new d.A({shape:w})),h.__rectSize=w[r]}else c.eachChild((function(t){t.attr({invisible:!0,silent:!0})}))
var A=this._getPageInfo(t)
return null!=A.pageIndex&&E.oi(u,{x:A.contentPosition[0],y:A.contentPosition[1]},g?t:null),this._updatePageInfoView(t,A),b},e.prototype._pageGo=function(t,e,n){var i=this._getPageInfo(e)[t]
null!=i&&n.dispatchAction({type:"legendScroll",scrollDataIndex:i,legendId:e.id})},e.prototype._updatePageInfoView=function(t,e){var n=this._controllerGroup
o.__(["pagePrev","pageNext"],(function(i){var r=null!=e[i+"DataIndex"],o=n.childOfName(i)
o&&(o.setStyle("fill",r?t.get("pageIconColor",!0):t.get("pageIconInactiveColor",!0)),o.cursor=r?"pointer":"default")}))
var i=n.childOfName("pageText"),r=t.get("pageFormatter"),a=e.pageIndex,s=null!=a?a+1:0,l=e.pageCount
i&&r&&i.setStyle("text",o.Kg(r)?r.replace("{current}",null==s?"":s+"").replace("{total}",null==l?"":l+""):r({current:s,total:l}))},e.prototype._getPageInfo=function(t){var e=t.get("scrollDataIndex",!0),n=this.getContentGroup(),i=this._containerGroup.__rectSize,r=t.getOrient().index,o=B[r],a=V[r],s=this._findTargetItemIndex(e),l=n.children(),u=l[s],h=l.length,c=h?1:0,d={contentPosition:[n.x,n.y],pageCount:c,pageIndex:c-1,pagePrevDataIndex:null,pageNextDataIndex:null}
if(!u)return d
var p=m(u)
d.contentPosition[r]=-p.s
for(var f=s+1,g=p,y=p,v=null;f<=h;++f)(!(v=m(l[f]))&&y.e>g.s+i||v&&!_(v,g.s))&&(g=y.i>g.i?y:v)&&(null==d.pageNextDataIndex&&(d.pageNextDataIndex=g.i),++d.pageCount),y=v
for(f=s-1,g=p,y=p,v=null;f>=-1;--f)(v=m(l[f]))&&_(y,v.s)||!(g.i<y.i)||(y=g,null==d.pagePrevDataIndex&&(d.pagePrevDataIndex=g.i),++d.pageCount,++d.pageIndex),g=v
return d
function m(t){if(t){var e=t.getBoundingRect(),n=e[a]+t[a]
return{s:n,e:n+e[o],i:t.__legendDataIndex}}}function _(t,e){return t.e>=e&&t.s<=e+i}},e.prototype._findTargetItemIndex=function(t){return this._showController?(this.getContentGroup().eachChild((function(i,r){var o=i.__legendDataIndex
null==n&&null!=o&&(n=r),o===t&&(e=r)})),null!=e?e:n):0
var e,n},e.type="legend.scroll",e}(D)
function W(t){(0,i.Y)(P),t.registerComponentModel(R),t.registerComponentView(F),function(t){t.registerAction("legendScroll","legendscroll",(function(t,e){var n=t.scrollDataIndex
null!=n&&e.eachComponent({mainType:"legend",subType:"scroll",query:t},(function(t){t.setScrollDataIndex(n)}))}))}(t)}function H(t){(0,i.Y)(P),(0,i.Y)(W)}},6325:(t,e,n)=>{n.d(e,{a:()=>g})
var i=n(4784),r=n(8301),o=n(5652),a=n(4130),s=n(1323),l=n(923),u=n(3960),h=n(7518),c=n(4642),d=n(3473),p=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n.layoutMode={type:"box",ignoreSize:!0},n}return(0,i.C6)(e,t),e.type="title",e.defaultOption={z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:0,top:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bold",color:"#464646"},subtextStyle:{fontSize:12,color:"#6E7079"}},e}(h.A),f=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n}return(0,i.C6)(e,t),e.prototype.render=function(t,e,n){if(this.group.removeAll(),t.get("show")){var i=this.group,h=t.getModel("textStyle"),c=t.getModel("subtextStyle"),p=t.get("textAlign"),f=r.bZ(t.get("textBaseline"),t.get("textVerticalAlign")),g=new o.Ay({style:(0,l.VB)(h,{text:t.get("text"),fill:h.getTextColor()},{disableBox:!0}),z2:10}),y=g.getBoundingRect(),v=t.get("subtext"),m=new o.Ay({style:(0,l.VB)(c,{text:v,fill:c.getTextColor(),y:y.height+t.get("itemGap"),verticalAlign:"top"},{disableBox:!0}),z2:10}),_=t.get("link"),x=t.get("sublink"),b=t.get("triggerEvent",!0)
g.silent=!_&&!b,m.silent=!x&&!b,_&&g.on("click",(function(){(0,d.JW)(_,"_"+t.get("target"))})),x&&m.on("click",(function(){(0,d.JW)(x,"_"+t.get("subtarget"))})),(0,s.z)(g).eventData=(0,s.z)(m).eventData=b?{componentType:"title",componentIndex:t.componentIndex}:null,i.add(g),v&&i.add(m)
var w=i.getBoundingRect(),A=t.getBoxLayoutParams()
A.width=w.width,A.height=w.height
var S=(0,u.dV)(A,{width:n.getWidth(),height:n.getHeight()},t.get("padding"))
p||("middle"===(p=t.get("left")||t.get("right"))&&(p="center"),"right"===p?S.x+=S.width:"center"===p&&(S.x+=S.width/2)),f||("center"===(f=t.get("top")||t.get("bottom"))&&(f="middle"),"bottom"===f?S.y+=S.height:"middle"===f&&(S.y+=S.height/2),f=f||"top"),i.x=S.x,i.y=S.y,i.markRedraw()
var M={align:p,verticalAlign:f}
g.setStyle(M),m.setStyle(M),w=i.getBoundingRect()
var T=S.margin,I=t.getItemStyle(["color","opacity"])
I.fill=t.get("backgroundColor")
var C=new a.A({shape:{x:w.x-T[3],y:w.y-T[0],width:w.width+T[1]+T[3],height:w.height+T[0]+T[2],r:t.get("borderRadius")},style:I,subPixelOptimize:!0,silent:!0})
i.add(C)}},e.type="title",e}(c.A)
function g(t){t.registerComponentModel(p),t.registerComponentView(f)}},1606:(t,e,n)=>{n.d(e,{a:()=>Q})
var i=n(6848),r=n(2862),o=n(4784)
const a=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n}return(0,o.C6)(e,t),e.type="tooltip",e.dependencies=["axisPointer"],e.defaultOption={z:60,show:!0,showContent:!0,trigger:"item",triggerOn:"mousemove|click",alwaysShowContent:!1,displayMode:"single",renderMode:"auto",confine:null,showDelay:0,hideDelay:100,transitionDuration:.4,enterable:!1,backgroundColor:"#fff",shadowBlur:10,shadowColor:"rgba(0, 0, 0, .2)",shadowOffsetX:1,shadowOffsetY:2,borderRadius:4,borderWidth:1,padding:null,extraCssText:"",axisPointer:{type:"line",axis:"auto",animation:"auto",animationDurationUpdate:200,animationEasingUpdate:"exponentialOut",crossStyle:{color:"#999",width:1,type:"dashed",textStyle:{}}},textStyle:{color:"#666",fontSize:14}},e}(n(7518).A)
var s=n(8301),l=n(9714),u=n(6885),h=n(7028),c=n(3473)
function d(t){var e=t.get("confine")
return null!=e?!!e:"richText"===t.get("renderMode")}function p(t){if(l.A.domSupported)for(var e=document.documentElement.style,n=0,i=t.length;n<i;n++)if(t[n]in e)return t[n]}var f=p(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),g=p(["webkitTransition","transition","OTransition","MozTransition","msTransition"])
function y(t,e){if(!t)return e
e=(0,c.Cb)(e,!0)
var n=t.indexOf(e)
return(t=-1===n?e:"-"+t.slice(0,n)+"-"+e).toLowerCase()}var v=n(7908),m=y(g,"transition"),_=y(f,"transform"),x="position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;"+(l.A.transform3dSupported?"will-change:transform;":"")
function b(t,e,n){var i=t.toFixed(0)+"px",r=e.toFixed(0)+"px"
if(!l.A.transformSupported)return n?"top:"+r+";left:"+i+";":[["top",r],["left",i]]
var o=l.A.transform3dSupported,a="translate"+(o?"3d":"")+"("+i+","+r+(o?",0":"")+")"
return n?"top:0;left:0;"+_+":"+a+";":[["top",0],["left",0],[f,a]]}function w(t,e,n,i,r){var o=e&&e.painter
if(n){var a=o&&o.getViewportRoot()
a&&(0,h.lJ)(t,a,n,i,r)}else{t[0]=i,t[1]=r
var s=o&&o.getViewportRootOffset()
s&&(t[0]+=s.offsetLeft,t[1]+=s.offsetTop)}t[2]=t[0]/e.getWidth(),t[3]=t[1]/e.getHeight()}var A=function(){function t(t,e){if(this._show=!1,this._styleCoord=[0,0,0,0],this._enterable=!0,this._alwaysShowContent=!1,this._firstShow=!0,this._longHide=!0,l.A.wxa)return null
var n=document.createElement("div")
n.domBelongToZr=!0,this.el=n
var i=this._zr=t.getZr(),r=e.appendTo,o=r&&((0,s.Kg)(r)?document.querySelector(r):(0,s.n_)(r)?r:(0,s.Tn)(r)&&r(t.getDom()))
w(this._styleCoord,i,o,t.getWidth()/2,t.getHeight()/2),(o||t.getDom()).appendChild(n),this._api=t,this._container=o
var a=this
n.onmouseenter=function(){a._enterable&&(clearTimeout(a._hideTimeout),a._show=!0),a._inContent=!0},n.onmousemove=function(t){if(t=t||window.event,!a._enterable){var e=i.handler,n=i.painter.getViewportRoot();(0,u.e0)(n,t,!0),e.dispatch("mousemove",t)}},n.onmouseleave=function(){a._inContent=!1,a._enterable&&a._show&&a.hideLater(a._hideDelay)}}return t.prototype.update=function(t){if(!this._container){var e=this._api.getDom(),n=(o="position",(a=(r=e).currentStyle||document.defaultView&&document.defaultView.getComputedStyle(r))?o?a[o]:a:null),i=e.style
"absolute"!==i.position&&"absolute"!==n&&(i.position="relative")}var r,o,a,s=t.get("alwaysShowContent")
s&&this._moveIfResized(),this._alwaysShowContent=s,this.el.className=t.get("className")||""},t.prototype.show=function(t,e){clearTimeout(this._hideTimeout),clearTimeout(this._longHideTimeout)
var n=this.el,i=n.style,r=this._styleCoord
n.innerHTML?i.cssText=x+function(t,e,n){var i=[],r=t.get("transitionDuration"),o=t.get("backgroundColor"),a=t.get("shadowBlur"),u=t.get("shadowColor"),h=t.get("shadowOffsetX"),d=t.get("shadowOffsetY"),p=t.getModel("textStyle"),f=(0,v.CO)(t,"html"),g=h+"px "+d+"px "+a+"px "+u
return i.push("box-shadow:"+g),e&&r&&i.push(function(t,e){var n="cubic-bezier(0.23,1,0.32,1)",i=" "+t/2+"s "+n,r="opacity"+i+",visibility"+i
return e||(i=" "+t+"s "+n,r+=l.A.transformSupported?","+_+i:",left"+i+",top"+i),m+":"+r}(r,n)),o&&i.push("background-color:"+o),(0,s.__)(["width","color","radius"],(function(e){var n="border-"+e,r=(0,c.Cb)(n),o=t.get(r)
null!=o&&i.push(n+":"+o+("color"===e?"":"px"))})),i.push(function(t){var e=[],n=t.get("fontSize"),i=t.getTextColor()
i&&e.push("color:"+i),e.push("font:"+t.getFont()),n&&e.push("line-height:"+Math.round(3*n/2)+"px")
var r=t.get("textShadowColor"),o=t.get("textShadowBlur")||0,a=t.get("textShadowOffsetX")||0,l=t.get("textShadowOffsetY")||0
return r&&o&&e.push("text-shadow:"+a+"px "+l+"px "+o+"px "+r),(0,s.__)(["decoration","align"],(function(n){var i=t.get(n)
i&&e.push("text-"+n+":"+i)})),e.join(";")}(p)),null!=f&&i.push("padding:"+(0,c.QX)(f).join("px ")+"px"),i.join(";")+";"}(t,!this._firstShow,this._longHide)+b(r[0],r[1],!0)+"border-color:"+(0,c.he)(e)+";"+(t.get("extraCssText")||"")+";pointer-events:"+(this._enterable?"auto":"none"):i.display="none",this._show=!0,this._firstShow=!1,this._longHide=!1},t.prototype.setContent=function(t,e,n,i,r){var o=this.el
if(null!=t){var a=""
if((0,s.Kg)(r)&&"item"===n.get("trigger")&&!d(n)&&(a=function(t,e,n){if(!(0,s.Kg)(n)||"inside"===n)return""
var i=t.get("backgroundColor"),r=t.get("borderWidth")
e=(0,c.he)(e)
var o,a,l="left"===(o=n)?"right":"right"===o?"left":"top"===o?"bottom":"top",u=Math.max(1.5*Math.round(r),6),h="",d=_+":";(0,s.qh)(["left","right"],l)>-1?(h+="top:50%",d+="translateY(-50%) rotate("+(a="left"===l?-225:-45)+"deg)"):(h+="left:50%",d+="translateX(-50%) rotate("+(a="top"===l?225:45)+"deg)")
var p=a*Math.PI/180,f=u+r,g=f*Math.abs(Math.cos(p))+f*Math.abs(Math.sin(p)),y=e+" solid "+r+"px;"
return'<div style="'+["position:absolute;width:"+u+"px;height:"+u+"px;z-index:-1;",(h+=";"+l+":-"+Math.round(100*((g-Math.SQRT2*r)/2+Math.SQRT2*r-(g-f)/2))/100+"px")+";"+d+";","border-bottom:"+y,"border-right:"+y,"background-color:"+i+";"].join("")+'"></div>'}(n,i,r)),(0,s.Kg)(t))o.innerHTML=t+a
else if(t){o.innerHTML="",(0,s.cy)(t)||(t=[t])
for(var l=0;l<t.length;l++)(0,s.n_)(t[l])&&t[l].parentNode!==o&&o.appendChild(t[l])
if(a&&o.childNodes.length){var u=document.createElement("div")
u.innerHTML=a,o.appendChild(u)}}}else o.innerHTML=""},t.prototype.setEnterable=function(t){this._enterable=t},t.prototype.getSize=function(){var t=this.el
return[t.offsetWidth,t.offsetHeight]},t.prototype.moveTo=function(t,e){var n=this._styleCoord
if(w(n,this._zr,this._container,t,e),null!=n[0]&&null!=n[1]){var i=this.el.style,r=b(n[0],n[1]);(0,s.__)(r,(function(t){i[t[0]]=t[1]}))}},t.prototype._moveIfResized=function(){var t=this._styleCoord[2],e=this._styleCoord[3]
this.moveTo(t*this._zr.getWidth(),e*this._zr.getHeight())},t.prototype.hide=function(){var t=this,e=this.el.style
e.visibility="hidden",e.opacity="0",l.A.transform3dSupported&&(e.willChange=""),this._show=!1,this._longHideTimeout=setTimeout((function(){return t._longHide=!0}),500)},t.prototype.hideLater=function(t){!this._show||this._inContent&&this._enterable||this._alwaysShowContent||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout((0,s.oI)(this.hide,this),t)):this.hide())},t.prototype.isShow=function(){return this._show},t.prototype.dispose=function(){clearTimeout(this._hideTimeout),clearTimeout(this._longHideTimeout)
var t=this.el.parentNode
t&&t.removeChild(this.el),this.el=this._container=null},t}()
const S=A
var M=n(5652),T=n(310),I=function(){function t(t){this._show=!1,this._styleCoord=[0,0,0,0],this._alwaysShowContent=!1,this._enterable=!0,this._zr=t.getZr(),k(this._styleCoord,this._zr,t.getWidth()/2,t.getHeight()/2)}return t.prototype.update=function(t){var e=t.get("alwaysShowContent")
e&&this._moveIfResized(),this._alwaysShowContent=e},t.prototype.show=function(){this._hideTimeout&&clearTimeout(this._hideTimeout),this.el.show(),this._show=!0},t.prototype.setContent=function(t,e,n,i,r){var o=this
s.Gv(t)&&(0,T.$8)(""),this.el&&this._zr.remove(this.el)
var a=n.getModel("textStyle")
this.el=new M.Ay({style:{rich:e.richTextStyles,text:t,lineHeight:22,borderWidth:1,borderColor:i,textShadowColor:a.get("textShadowColor"),fill:n.get(["textStyle","color"]),padding:(0,v.CO)(n,"richText"),verticalAlign:"top",align:"left"},z:n.get("z")}),s.__(["backgroundColor","borderRadius","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"],(function(t){o.el.style[t]=n.get(t)})),s.__(["textShadowBlur","textShadowOffsetX","textShadowOffsetY"],(function(t){o.el.style[t]=a.get(t)||0})),this._zr.add(this.el)
var l=this
this.el.on("mouseover",(function(){l._enterable&&(clearTimeout(l._hideTimeout),l._show=!0),l._inContent=!0})),this.el.on("mouseout",(function(){l._enterable&&l._show&&l.hideLater(l._hideDelay),l._inContent=!1}))},t.prototype.setEnterable=function(t){this._enterable=t},t.prototype.getSize=function(){var t=this.el,e=this.el.getBoundingRect(),n=D(t.style)
return[e.width+n.left+n.right,e.height+n.top+n.bottom]},t.prototype.moveTo=function(t,e){var n=this.el
if(n){var i=this._styleCoord
k(i,this._zr,t,e),t=i[0],e=i[1]
var r=n.style,o=C(r.borderWidth||0),a=D(r)
n.x=t+o+a.left,n.y=e+o+a.top,n.markRedraw()}},t.prototype._moveIfResized=function(){var t=this._styleCoord[2],e=this._styleCoord[3]
this.moveTo(t*this._zr.getWidth(),e*this._zr.getHeight())},t.prototype.hide=function(){this.el&&this.el.hide(),this._show=!1},t.prototype.hideLater=function(t){!this._show||this._inContent&&this._enterable||this._alwaysShowContent||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(s.oI(this.hide,this),t)):this.hide())},t.prototype.isShow=function(){return this._show},t.prototype.dispose=function(){this._zr.remove(this.el)},t}()
function C(t){return Math.max(0,t)}function D(t){var e=C(t.shadowBlur||0),n=C(t.shadowOffsetX||0),i=C(t.shadowOffsetY||0)
return{left:C(e-n),right:C(e+n),top:C(e-i),bottom:C(e+i)}}function k(t,e,n,i){t[0]=n,t[1]=i,t[2]=t[0]/e.getWidth(),t[3]=t[1]/e.getHeight()}const L=I
var P=n(3947),O=n(4130),N=n(4496),R=n(3960),E=n(7413),z=n(6631),B=n(4753),V=n(6229),F=n(5225),W=n(4642),H=n(8327),G=n(1323),j=n(4272),X=n(8456),Y=n(7322),U=new O.A({shape:{x:-1,y:-1,width:2,height:2}})
function Z(t,e,n){var i,r=e.ecModel
n?(i=new E.A(n,r,r),i=new E.A(e.option,i,r)):i=e
for(var o=t.length-1;o>=0;o--){var a=t[o]
a&&(a instanceof E.A&&(a=a.get("tooltip",!0)),(0,s.Kg)(a)&&(a={formatter:a}),a&&(i=new E.A(a,i,r)))}return i}function $(t,e){return t.dispatchAction||(0,s.oI)(e.dispatchAction,e)}function q(t){return"center"===t||"middle"===t}const K=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this
return n.type=e.type,n}return(0,o.C6)(e,t),e.prototype.init=function(t,e){if(!l.A.node&&e.getDom()){var n=t.getComponent("tooltip"),i=this._renderMode=(0,F.XJ)(n.get("renderMode"))
this._tooltipContent="richText"===i?new L(e):new S(e,{appendTo:n.get("appendToBody",!0)?"body":n.get("appendTo",!0)})}},e.prototype.render=function(t,e,n){if(!l.A.node&&n.getDom()){this.group.removeAll(),this._tooltipModel=t,this._ecModel=e,this._api=n
var i=this._tooltipContent
i.update(t),i.setEnterable(t.get("enterable")),this._initGlobalListener(),this._keepShow(),"richText"!==this._renderMode&&t.get("transitionDuration")?(0,Y.N)(this,"_updatePosition",50,"fixRate"):(0,Y.IU)(this,"_updatePosition")}},e.prototype._initGlobalListener=function(){var t=this._tooltipModel.get("triggerOn")
z.k("itemTooltip",this._api,(0,s.oI)((function(e,n,i){"none"!==t&&(t.indexOf(e)>=0?this._tryShow(n,i):"leave"===e&&this._hide(i))}),this))},e.prototype._keepShow=function(){var t=this._tooltipModel,e=this._ecModel,n=this._api,i=t.get("triggerOn")
if(null!=this._lastX&&null!=this._lastY&&"none"!==i&&"click"!==i){var r=this
clearTimeout(this._refreshUpdateTimeout),this._refreshUpdateTimeout=setTimeout((function(){!n.isDisposed()&&r.manuallyShowTip(t,e,n,{x:r._lastX,y:r._lastY,dataByCoordSys:r._lastDataByCoordSys})}))}},e.prototype.manuallyShowTip=function(t,e,n,i){if(i.from!==this.uid&&!l.A.node&&n.getDom()){var r=$(i,n)
this._ticket=""
var o=i.dataByCoordSys,a=function(t,e,n){var i=(0,F.HB)(t).queryOptionMap,r=i.keys()[0]
if(r&&"series"!==r){var o,a=(0,F.JO)(e,r,i.get(r),{useDefault:!1,enableAll:!1,enableNone:!1}).models[0]
if(a)return n.getViewOfComponentModel(a).group.traverse((function(e){var n=(0,G.z)(e).tooltipConfig
if(n&&n.name===t.name)return o=e,!0})),o?{componentMainType:r,componentIndex:a.componentIndex,el:o}:void 0}}(i,e,n)
if(a){var s=a.el.getBoundingRect().clone()
s.applyTransform(a.el.transform),this._tryShow({offsetX:s.x+s.width/2,offsetY:s.y+s.height/2,target:a.el,position:i.position,positionDefault:"bottom"},r)}else if(i.tooltip&&null!=i.x&&null!=i.y){var u=U
u.x=i.x,u.y=i.y,u.update(),(0,G.z)(u).tooltipConfig={name:null,option:i.tooltip},this._tryShow({offsetX:i.x,offsetY:i.y,target:u},r)}else if(o)this._tryShow({offsetX:i.x,offsetY:i.y,position:i.position,dataByCoordSys:o,tooltipOption:i.tooltipOption},r)
else if(null!=i.seriesIndex){if(this._manuallyAxisShowTip(t,e,n,i))return
var h=(0,N.A)(i,e),c=h.point[0],d=h.point[1]
null!=c&&null!=d&&this._tryShow({offsetX:c,offsetY:d,target:h.el,position:i.position,positionDefault:"bottom"},r)}else null!=i.x&&null!=i.y&&(n.dispatchAction({type:"updateAxisPointer",x:i.x,y:i.y}),this._tryShow({offsetX:i.x,offsetY:i.y,position:i.position,target:n.getZr().findHover(i.x,i.y).target},r))}},e.prototype.manuallyHideTip=function(t,e,n,i){var r=this._tooltipContent
this._tooltipModel&&r.hideLater(this._tooltipModel.get("hideDelay")),this._lastX=this._lastY=this._lastDataByCoordSys=null,i.from!==this.uid&&this._hide($(i,n))},e.prototype._manuallyAxisShowTip=function(t,e,n,i){var r=i.seriesIndex,o=i.dataIndex,a=e.getComponent("axisPointer").coordSysAxesInfo
if(null!=r&&null!=o&&null!=a){var s=e.getSeriesByIndex(r)
if(s&&"axis"===Z([s.getData().getItemModel(o),s,(s.coordinateSystem||{}).model],this._tooltipModel).get("trigger"))return n.dispatchAction({type:"updateAxisPointer",seriesIndex:r,dataIndex:o,position:i.position}),!0}},e.prototype._tryShow=function(t,e){var n=t.target
if(this._tooltipModel){this._lastX=t.offsetX,this._lastY=t.offsetY
var i=t.dataByCoordSys
if(i&&i.length)this._showAxisTooltip(i,t)
else if(n){var r,o
if("legend"===(0,G.z)(n).ssrType)return
this._lastDataByCoordSys=null,(0,X.R)(n,(function(t){return null!=(0,G.z)(t).dataIndex?(r=t,!0):null!=(0,G.z)(t).tooltipConfig?(o=t,!0):void 0}),!0),r?this._showSeriesItemTooltip(t,r,e):o?this._showComponentItemTooltip(t,o,e):this._hide(e)}else this._lastDataByCoordSys=null,this._hide(e)}},e.prototype._showOrMove=function(t,e){var n=t.get("showDelay")
e=(0,s.oI)(e,this),clearTimeout(this._showTimout),n>0?this._showTimout=setTimeout(e,n):e()},e.prototype._showAxisTooltip=function(t,e){var n=this._ecModel,i=this._tooltipModel,r=[e.offsetX,e.offsetY],o=Z([e.tooltipOption],i),a=this._renderMode,l=[],u=(0,v.Qx)("section",{blocks:[],noHeader:!0}),h=[],d=new v.lb;(0,s.__)(t,(function(t){(0,s.__)(t.dataByAxis,(function(t){var e=n.getComponent(t.axisDim+"Axis",t.axisIndex),r=t.value
if(e&&null!=r){var o=V._F(r,e.axis,n,t.seriesDataIndices,t.valueLabelOpt),p=(0,v.Qx)("section",{header:o,noHeader:!(0,s.Bq)(o),sortBlocks:!0,blocks:[]})
u.blocks.push(p),(0,s.__)(t.seriesDataIndices,(function(u){var f=n.getSeriesByIndex(u.seriesIndex),g=u.dataIndexInside,y=f.getDataParams(g)
if(!(y.dataIndex<0)){y.axisDim=t.axisDim,y.axisIndex=t.axisIndex,y.axisType=t.axisType,y.axisId=t.axisId,y.axisValue=B.Dt(e.axis,{value:r}),y.axisValueLabel=o,y.marker=d.makeTooltipMarker("item",(0,c.he)(y.color),a)
var v=(0,j.L)(f.formatTooltip(g,!0,null)),m=v.frag
if(m){var _=Z([f],i).get("valueFormatter")
p.blocks.push(_?(0,s.X$)({valueFormatter:_},m):m)}v.text&&h.push(v.text),l.push(y)}}))}}))})),u.blocks.reverse(),h.reverse()
var p=e.position,f=o.get("order"),g=(0,v.Yu)(u,d,a,f,n.get("useUTC"),o.get("textStyle"))
g&&h.unshift(g)
var y="richText"===a?"\n\n":"<br/>",m=h.join(y)
this._showOrMove(o,(function(){this._updateContentNotChangedOnAxis(t,l)?this._updatePosition(o,p,r[0],r[1],this._tooltipContent,l):this._showTooltipContent(o,m,l,Math.random()+"",r[0],r[1],p,null,d)}))},e.prototype._showSeriesItemTooltip=function(t,e,n){var i=this._ecModel,r=(0,G.z)(e),o=r.seriesIndex,a=i.getSeriesByIndex(o),l=r.dataModel||a,u=r.dataIndex,h=r.dataType,d=l.getData(h),p=this._renderMode,f=t.positionDefault,g=Z([d.getItemModel(u),l,a&&(a.coordinateSystem||{}).model],this._tooltipModel,f?{position:f}:null),y=g.get("trigger")
if(null==y||"item"===y){var m=l.getDataParams(u,h),_=new v.lb
m.marker=_.makeTooltipMarker("item",(0,c.he)(m.color),p)
var x=(0,j.L)(l.formatTooltip(u,!1,h)),b=g.get("order"),w=g.get("valueFormatter"),A=x.frag,S=A?(0,v.Yu)(w?(0,s.X$)({valueFormatter:w},A):A,_,p,b,i.get("useUTC"),g.get("textStyle")):x.text,M="item_"+l.name+"_"+u
this._showOrMove(g,(function(){this._showTooltipContent(g,S,m,M,t.offsetX,t.offsetY,t.position,t.target,_)})),n({type:"showTip",dataIndexInside:u,dataIndex:d.getRawIndex(u),seriesIndex:o,from:this.uid})}},e.prototype._showComponentItemTooltip=function(t,e,n){var i="html"===this._renderMode,r=(0,G.z)(e),o=r.tooltipConfig.option||{},a=o.encodeHTMLContent;(0,s.Kg)(o)&&(o={content:o,formatter:o},a=!0),a&&i&&o.content&&((o=(0,s.o8)(o)).content=(0,h.Me)(o.content))
var l=[o],u=this._ecModel.getComponent(r.componentMainType,r.componentIndex)
u&&l.push(u),l.push({formatter:o.content})
var c=t.positionDefault,d=Z(l,this._tooltipModel,c?{position:c}:null),p=d.get("content"),f=Math.random()+"",g=new v.lb
this._showOrMove(d,(function(){var n=(0,s.o8)(d.get("formatterParams")||{})
this._showTooltipContent(d,p,n,f,t.offsetX,t.offsetY,t.position,e,g)})),n({type:"showTip",from:this.uid})},e.prototype._showTooltipContent=function(t,e,n,i,r,o,a,l,u){if(this._ticket="",t.get("showContent")&&t.get("show")){var h=this._tooltipContent
h.setEnterable(t.get("enterable"))
var d=t.get("formatter")
a=a||t.get("position")
var p=e,f=this._getNearestPoint([r,o],n,t.get("trigger"),t.get("borderColor")).color
if(d)if((0,s.Kg)(d)){var g=t.ecModel.get("useUTC"),y=(0,s.cy)(n)?n[0]:n
p=d,y&&y.axisType&&y.axisType.indexOf("time")>=0&&(p=(0,H.GP)(y.axisValue,p,g)),p=(0,c.YK)(p,n,!0)}else if((0,s.Tn)(d)){var v=(0,s.oI)((function(e,i){e===this._ticket&&(h.setContent(i,u,t,f,a),this._updatePosition(t,a,r,o,h,n,l))}),this)
this._ticket=i,p=d(n,i,v)}else p=d
h.setContent(p,u,t,f,a),h.show(t,f),this._updatePosition(t,a,r,o,h,n,l)}},e.prototype._getNearestPoint=function(t,e,n,i){return"axis"===n||(0,s.cy)(e)?{color:i||("html"===this._renderMode?"#fff":"none")}:(0,s.cy)(e)?void 0:{color:i||e.color||e.borderColor}},e.prototype._updatePosition=function(t,e,n,i,r,o,a){var l=this._api.getWidth(),u=this._api.getHeight()
e=e||t.get("position")
var h=r.getSize(),c=t.get("align"),p=t.get("verticalAlign"),f=a&&a.getBoundingRect().clone()
if(a&&f.applyTransform(a.transform),(0,s.Tn)(e)&&(e=e([n,i],o,r.el,f,{viewSize:[l,u],contentSize:h.slice()})),(0,s.cy)(e))n=(0,P.lo)(e[0],l),i=(0,P.lo)(e[1],u)
else if((0,s.Gv)(e)){var g=e
g.width=h[0],g.height=h[1]
var y=(0,R.dV)(g,{width:l,height:u})
n=y.x,i=y.y,c=null,p=null}else if((0,s.Kg)(e)&&a){var v=function(t,e,n,i){var r=n[0],o=n[1],a=Math.ceil(Math.SQRT2*i)+8,s=0,l=0,u=e.width,h=e.height
switch(t){case"inside":s=e.x+u/2-r/2,l=e.y+h/2-o/2
break
case"top":s=e.x+u/2-r/2,l=e.y-o-a
break
case"bottom":s=e.x+u/2-r/2,l=e.y+h+a
break
case"left":s=e.x-r-a,l=e.y+h/2-o/2
break
case"right":s=e.x+u+a,l=e.y+h/2-o/2}return[s,l]}(e,f,h,t.get("borderWidth"))
n=v[0],i=v[1]}else v=function(t,e,n,i,r,o,a){var s=n.getSize(),l=s[0],u=s[1]
return null!=o&&(t+l+o+2>i?t-=l+o:t+=o),null!=a&&(e+u+a>r?e-=u+a:e+=a),[t,e]}(n,i,r,l,u,c?null:20,p?null:20),n=v[0],i=v[1]
c&&(n-=q(c)?h[0]/2:"right"===c?h[0]:0),p&&(i-=q(p)?h[1]/2:"bottom"===p?h[1]:0),d(t)&&(v=function(t,e,n,i,r){var o=n.getSize(),a=o[0],s=o[1]
return t=Math.min(t+a,i)-a,e=Math.min(e+s,r)-s,[t=Math.max(t,0),e=Math.max(e,0)]}(n,i,r,l,u),n=v[0],i=v[1]),r.moveTo(n,i)},e.prototype._updateContentNotChangedOnAxis=function(t,e){var n=this._lastDataByCoordSys,i=this._cbParamsList,r=!!n&&n.length===t.length
return r&&(0,s.__)(n,(function(n,o){var a=n.dataByAxis||[],l=(t[o]||{}).dataByAxis||[];(r=r&&a.length===l.length)&&(0,s.__)(a,(function(t,n){var o=l[n]||{},a=t.seriesDataIndices||[],u=o.seriesDataIndices||[];(r=r&&t.value===o.value&&t.axisType===o.axisType&&t.axisId===o.axisId&&a.length===u.length)&&(0,s.__)(a,(function(t,e){var n=u[e]
r=r&&t.seriesIndex===n.seriesIndex&&t.dataIndex===n.dataIndex})),i&&(0,s.__)(t.seriesDataIndices,(function(t){var n=t.seriesIndex,o=e[n],a=i[n]
o&&a&&a.data!==o.data&&(r=!1)}))}))})),this._lastDataByCoordSys=t,this._cbParamsList=e,!!r},e.prototype._hide=function(t){this._lastDataByCoordSys=null,t({type:"hideTip",from:this.uid})},e.prototype.dispose=function(t,e){!l.A.node&&e.getDom()&&((0,Y.IU)(this,"_updatePosition"),this._tooltipContent.dispose(),z.h("itemTooltip",e))},e.type="tooltip",e}(W.A)
function Q(t){(0,r.Y)(i.a),t.registerComponentModel(a),t.registerComponentView(K),t.registerAction({type:"showTip",event:"showTip",update:"tooltip:manuallyShowTip"},s.lQ),t.registerAction({type:"hideTip",event:"hideTip",update:"tooltip:manuallyHideTip"},s.lQ)}},7446:(t,e,n)=>{n.d(e,{J:()=>s})
var i=n(8301),r=n(7908),o=n(4152),a=n(5225)
function s(t){var e,n,s,l,u=t.series,h=t.dataIndex,c=t.multipleSeries,d=u.getData(),p=d.mapDimensionsAll("defaultedTooltip"),f=p.length,g=u.getRawValue(h),y=(0,i.cy)(g),v=(0,r.aw)(u,h)
if(f>1||y&&!f){var m=function(t,e,n,a,s){var l=e.getData(),u=(0,i.TS)(t,(function(t,e,n){var i=l.getDimensionInfo(n)
return t||i&&!1!==i.tooltip&&null!=i.displayName}),!1),h=[],c=[],d=[]
function p(t,e){var n=l.getDimensionInfo(e)
n&&!1!==n.otherDims.tooltip&&(u?d.push((0,r.Qx)("nameValue",{markerType:"subItem",markerColor:s,name:n.displayName,value:t,valueType:n.type})):(h.push(t),c.push(n.type)))}return a.length?(0,i.__)(a,(function(t){p((0,o.QE)(l,n,t),t)})):(0,i.__)(t,p),{inlineValues:h,inlineValueTypes:c,blocks:d}}(g,u,h,p,v)
e=m.inlineValues,n=m.inlineValueTypes,s=m.blocks,l=m.inlineValues[0]}else if(f){var _=d.getDimensionInfo(p[0])
l=e=(0,o.QE)(d,h,p[0]),n=_.type}else l=e=y?g[0]:g
var x=(0,a.O0)(u),b=x&&u.name||"",w=d.getName(h),A=c?b:w
return(0,r.Qx)("section",{header:b,noHeader:c||!x,sortParam:l,blocks:[(0,r.Qx)("nameValue",{markerType:"item",markerColor:v,name:A,noName:!(0,i.Bq)(A),value:e,valueType:n,dataIndex:h})].concat(s||[])})}},7908:(t,e,n)=>{n.d(e,{CO:()=>w,Qx:()=>d,Yu:()=>m,aw:()=>b,lb:()=>A})
var i=n(7028),r=n(3473),o=n(8301),a=n(9784),s=n(3947),l="line-height:1"
function u(t,e){var n=t.color||"#6e7079",r=t.fontSize||12,o=t.fontWeight||"400",a=t.color||"#464646",s=t.fontSize||14,l=t.fontWeight||"900"
return"html"===e?{nameStyle:"font-size:"+(0,i.Me)(r+"")+"px;color:"+(0,i.Me)(n)+";font-weight:"+(0,i.Me)(o+""),valueStyle:"font-size:"+(0,i.Me)(s+"")+"px;color:"+(0,i.Me)(a)+";font-weight:"+(0,i.Me)(l+"")}:{nameStyle:{fontSize:r,fill:n,fontWeight:o},valueStyle:{fontSize:s,fill:a,fontWeight:l}}}var h=[0,10,20,30],c=["","\n","\n\n","\n\n\n"]
function d(t,e){return e.type=t,e}function p(t){return"section"===t.type}function f(t){return p(t)?y:v}function g(t){if(p(t)){var e=0,n=t.blocks.length,i=n>1||n>0&&!t.noHeader
return(0,o.__)(t.blocks,(function(t){var n=g(t)
n>=e&&(e=n+ +(i&&(!n||p(t)&&!t.noHeader)))})),e}return 0}function y(t,e,n,s){var d,p=e.noHeader,y=(d=g(e),{html:h[d],richText:c[d]}),v=[],m=e.blocks||[];(0,o.vA)(!m||(0,o.cy)(m)),m=m||[]
var b=t.orderMode
if(e.sortBlocks&&b){m=m.slice()
var w={valueAsc:"asc",valueDesc:"desc"}
if((0,o.$3)(w,b)){var A=new a.Fl(w[b],null)
m.sort((function(t,e){return A.evaluate(t.sortParam,e.sortParam)}))}else"seriesDesc"===b&&m.reverse()}(0,o.__)(m,(function(n,i){var r=e.valueFormatter,a=f(n)(r?(0,o.X$)((0,o.X$)({},t),{valueFormatter:r}):t,n,i>0?y.html:0,s)
null!=a&&v.push(a)}))
var S="richText"===t.renderMode?v.join(y.richText):_(v.join(""),p?n:y.html)
if(p)return S
var M=(0,r.yC)(e.header,"ordinal",t.useUTC),T=u(s,t.renderMode).nameStyle
return"richText"===t.renderMode?x(t,M,T)+y.richText+S:_('<div style="'+T+";"+l+';">'+(0,i.Me)(M)+"</div>"+S,n)}function v(t,e,n,a){var s=t.renderMode,l=e.noName,h=e.noValue,c=!e.markerType,d=e.name,p=t.useUTC,f=e.valueFormatter||t.valueFormatter||function(t){return t=(0,o.cy)(t)?t:[t],(0,o.Tj)(t,(function(t,e){return(0,r.yC)(t,(0,o.cy)(v)?v[e]:v,p)}))}
if(!l||!h){var g=c?"":t.markupStyleCreator.makeTooltipMarker(e.markerType,e.markerColor||"#333",s),y=l?"":(0,r.yC)(d,"ordinal",p),v=e.valueType,m=h?[]:f(e.value,e.dataIndex),b=!c||!l,w=!c&&l,A=u(a,s),S=A.nameStyle,M=A.valueStyle
return"richText"===s?(c?"":g)+(l?"":x(t,y,S))+(h?"":function(t,e,n,i,r){var a=[r],s=i?10:20
return n&&a.push({padding:[0,0,0,s],align:"right"}),t.markupStyleCreator.wrapRichTextStyle((0,o.cy)(e)?e.join("  "):e,a)}(t,m,b,w,M)):_((c?"":g)+(l?"":function(t,e,n){return'<span style="'+n+";"+(e?"margin-left:2px":"")+'">'+(0,i.Me)(t)+"</span>"}(y,!c,S))+(h?"":function(t,e,n,r){var a=e?"float:right;margin-left:"+(n?"10px":"20px"):""
return t=(0,o.cy)(t)?t:[t],'<span style="'+a+";"+r+'">'+(0,o.Tj)(t,(function(t){return(0,i.Me)(t)})).join("&nbsp;&nbsp;")+"</span>"}(m,b,w,M)),n)}}function m(t,e,n,i,r,o){if(t)return f(t)({useUTC:r,renderMode:n,orderMode:i,markupStyleCreator:e,valueFormatter:t.valueFormatter},t,0,o)}function _(t,e){return'<div style="margin: '+e+"px 0 0;"+l+';">'+t+'<div style="clear:both"></div></div>'}function x(t,e,n){return t.markupStyleCreator.wrapRichTextStyle(e,n)}function b(t,e){var n=t.getData().getItemVisual(e,"style")[t.visualDrawType]
return(0,r.he)(n)}function w(t,e){var n=t.get("padding")
return null!=n?n:"richText"===e?[8,10]:10}var A=function(){function t(){this.richTextStyles={},this._nextStyleNameId=(0,s.IH)()}return t.prototype._generateStyleName=function(){return"__EC_aUTo_"+this._nextStyleNameId++},t.prototype.makeTooltipMarker=function(t,e,n){var i="richText"===n?this._generateStyleName():null,a=(0,r.qg)({color:e,type:t,renderMode:n,markerId:i})
return(0,o.Kg)(a)?a:(this.richTextStyles[i]=a.style,a.content)},t.prototype.wrapRichTextStyle=function(t,e){var n={};(0,o.cy)(e)?(0,o.__)(e,(function(t){return(0,o.X$)(n,t)})):(0,o.X$)(n,e)
var i=this._generateStyleName()
return this.richTextStyles[i]=n,"{"+i+"|"+t+"}"},t}()},6534:(t,e,n)=>{function i(t,e){return t.type===e}n.d(e,{g:()=>i})},2648:(t,e,n)=>{n.d(e,{A:()=>c})
var i=n(4784),r=n(1150),o=n(7432),a=n(4703),s=n(7157),l=n(3947),u=r.NW
function h(t){var e=t.seriesModel
return e?e.coordinateSystem:null}const c=function(t){function e(e){var n=t.call(this)||this
return n.type="view",n.dimensions=["x","y"],n._roamTransformable=new s.Ay,n._rawTransformable=new s.Ay,n.name=e,n}return(0,i.C6)(e,t),e.prototype.setBoundingRect=function(t,e,n,i){return this._rect=new a.A(t,e,n,i),this._rect},e.prototype.getBoundingRect=function(){return this._rect},e.prototype.setViewRect=function(t,e,n,i){this._transformTo(t,e,n,i),this._viewRect=new a.A(t,e,n,i)},e.prototype._transformTo=function(t,e,n,i){var r=this.getBoundingRect(),o=this._rawTransformable
o.transform=r.calculateTransform(new a.A(t,e,n,i))
var s=o.parent
o.parent=null,o.decomposeTransform(),o.parent=s,this._updateTransform()},e.prototype.setCenter=function(t,e){t&&(this._center=[(0,l.lo)(t[0],e.getWidth()),(0,l.lo)(t[1],e.getHeight())],this._updateCenterAndZoom())},e.prototype.setZoom=function(t){t=t||1
var e=this.zoomLimit
e&&(null!=e.max&&(t=Math.min(e.max,t)),null!=e.min&&(t=Math.max(e.min,t))),this._zoom=t,this._updateCenterAndZoom()},e.prototype.getDefaultCenter=function(){var t=this.getBoundingRect()
return[t.x+t.width/2,t.y+t.height/2]},e.prototype.getCenter=function(){return this._center||this.getDefaultCenter()},e.prototype.getZoom=function(){return this._zoom||1},e.prototype.getRoamTransform=function(){return this._roamTransformable.getLocalTransform()},e.prototype._updateCenterAndZoom=function(){var t=this._rawTransformable.getLocalTransform(),e=this._roamTransformable,n=this.getDefaultCenter(),i=this.getCenter(),o=this.getZoom()
i=r.NW([],i,t),n=r.NW([],n,t),e.originX=i[0],e.originY=i[1],e.x=n[0]-i[0],e.y=n[1]-i[1],e.scaleX=e.scaleY=o,this._updateTransform()},e.prototype._updateTransform=function(){var t=this._roamTransformable,e=this._rawTransformable
e.parent=t,t.updateTransform(),e.updateTransform(),o.C(this.transform||(this.transform=[]),e.transform||o.vt()),this._rawTransform=e.getLocalTransform(),this.invTransform=this.invTransform||[],o.B8(this.invTransform,this.transform),this.decomposeTransform()},e.prototype.getTransformInfo=function(){var t=this._rawTransformable,e=this._roamTransformable,n=new s.Ay
return n.transform=e.transform,n.decomposeTransform(),{roam:{x:n.x,y:n.y,scaleX:n.scaleX,scaleY:n.scaleY},raw:{x:t.x,y:t.y,scaleX:t.scaleX,scaleY:t.scaleY}}},e.prototype.getViewRect=function(){return this._viewRect},e.prototype.getViewRectAfterRoam=function(){var t=this.getBoundingRect().clone()
return t.applyTransform(this.transform),t},e.prototype.dataToPoint=function(t,e,n){var i=e?this._rawTransform:this.transform
return n=n||[],i?u(n,t,i):r.C(n,t)},e.prototype.pointToData=function(t){var e=this.invTransform
return e?u([],t,e):[t[0],t[1]]},e.prototype.convertToPixel=function(t,e,n){var i=h(e)
return i===this?i.dataToPoint(n):null},e.prototype.convertFromPixel=function(t,e,n){var i=h(e)
return i===this?i.pointToData(n):null},e.prototype.containPoint=function(t){return this.getViewRectAfterRoam().contain(t[0],t[1])},e.dimensions=["x","y"],e}(s.Ay)},4753:(t,e,n)=>{n.d(e,{f$:()=>V,Og:()=>G,Dt:()=>H,wq:()=>Y,j2:()=>j,Rx:()=>z,JJ:()=>F,ry:()=>W,af:()=>B,PJ:()=>X,PN:()=>U})
var i=n(8301),r=n(4784),o=n(3980),a=n(3876),s=n(2384),l=function(t){function e(e){var n=t.call(this,e)||this
n.type="ordinal"
var r=n.getSetting("ordinalMeta")
return r||(r=new a.A({})),(0,i.cy)(r)&&(r=new a.A({categories:(0,i.Tj)(r,(function(t){return(0,i.Gv)(t)?t.value:t}))})),n._ordinalMeta=r,n._extent=n.getSetting("extent")||[0,r.categories.length-1],n}return(0,r.C6)(e,t),e.prototype.parse=function(t){return null==t?NaN:(0,i.Kg)(t)?this._ordinalMeta.getOrdinal(t):Math.round(t)},e.prototype.contain=function(t){return t=this.parse(t),s.lP(t,this._extent)&&null!=this._ordinalMeta.categories[t]},e.prototype.normalize=function(t){return t=this._getTickNumber(this.parse(t)),s.S8(t,this._extent)},e.prototype.scale=function(t){return t=Math.round(s.hs(t,this._extent)),this.getRawOrdinalNumber(t)},e.prototype.getTicks=function(){for(var t=[],e=this._extent,n=e[0];n<=e[1];)t.push({value:n}),n++
return t},e.prototype.getMinorTicks=function(t){},e.prototype.setSortInfo=function(t){if(null!=t){for(var e=t.ordinalNumbers,n=this._ordinalNumbersByTick=[],i=this._ticksByOrdinalNumber=[],r=0,o=this._ordinalMeta.categories.length,a=Math.min(o,e.length);r<a;++r){var s=e[r]
n[r]=s,i[s]=r}for(var l=0;r<o;++r){for(;null!=i[l];)l++
n.push(l),i[l]=r}}else this._ordinalNumbersByTick=this._ticksByOrdinalNumber=null},e.prototype._getTickNumber=function(t){var e=this._ticksByOrdinalNumber
return e&&t>=0&&t<e.length?e[t]:t},e.prototype.getRawOrdinalNumber=function(t){var e=this._ordinalNumbersByTick
return e&&t>=0&&t<e.length?e[t]:t},e.prototype.getLabel=function(t){if(!this.isBlank()){var e=this.getRawOrdinalNumber(t.value),n=this._ordinalMeta.categories[e]
return null==n?"":n+""}},e.prototype.count=function(){return this._extent[1]-this._extent[0]+1},e.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},e.prototype.isInExtentRange=function(t){return t=this._getTickNumber(t),this._extent[0]<=t&&this._extent[1]>=t},e.prototype.getOrdinalMeta=function(){return this._ordinalMeta},e.prototype.calcNiceTicks=function(){},e.prototype.calcNiceExtent=function(){},e.type="ordinal",e}(o.A)
o.A.registerClass(l)
const u=l
var h=n(4841),c=n(8907),d=n(4703),p=n(3947),f=n(8327),g=function(t){function e(e){var n=t.call(this,e)||this
return n.type="time",n}return(0,r.C6)(e,t),e.prototype.getLabel=function(t){var e=this.getSetting("useUTC")
return(0,f.GP)(t.value,f.Lm[(0,f.$9)((0,f.ym)(this._minLevelUnit))]||f.Lm.second,e,this.getSetting("locale"))},e.prototype.getFormattedLabel=function(t,e,n){var i=this.getSetting("useUTC"),r=this.getSetting("locale")
return(0,f.X_)(t,e,n,r,i)},e.prototype.getTicks=function(){var t=this._interval,e=this._extent,n=[]
if(!t)return n
n.push({value:e[0],level:0})
var r=this.getSetting("useUTC"),o=function(t,e,n,r){var o=f.F7,a=0
function s(t,e,n,i,o,a,s){for(var l=new Date(e),u=e,h=l[i]();u<n&&u<=r[1];)s.push({value:u}),h+=t,l[o](h),u=l.getTime()
s.push({value:u,notAdd:!0})}function l(t,i,o){var a=[],l=!i.length
if(!function(t,e,n,i){var r=p._U(e),o=p._U(n),a=function(t){return(0,f.g0)(r,t,i)===(0,f.g0)(o,t,i)},s=function(){return a("year")},l=function(){return s()&&a("month")},u=function(){return l()&&a("day")},h=function(){return u()&&a("hour")},c=function(){return h()&&a("minute")},d=function(){return c()&&a("second")}
switch(t){case"year":return s()
case"month":return l()
case"day":return u()
case"hour":return h()
case"minute":return c()
case"second":return d()
case"millisecond":return d()&&a("millisecond")}}((0,f.ym)(t),r[0],r[1],n)){l&&(i=[{value:w(new Date(r[0]),t,n)},{value:r[1]}])
for(var u=0;u<i.length-1;u++){var h=i[u].value,c=i[u+1].value
if(h!==c){var d=void 0,g=void 0,y=void 0
switch(t){case"year":d=Math.max(1,Math.round(e/f.CZ/365)),g=(0,f.hY)(n),y=(0,f.tM)(n)
break
case"half-year":case"quarter":case"month":d=m(e),g=(0,f.jJ)(n),y=(0,f.xu)(n)
break
case"week":case"half-week":case"day":d=v(e),g=(0,f.bP)(n),y=(0,f.ti)(n)
break
case"half-day":case"quarter-day":case"hour":d=_(e),g=(0,f.iC)(n),y=(0,f.Yd)(n)
break
case"minute":d=x(e,!0),g=(0,f.yB)(n),y=(0,f.KF)(n)
break
case"second":d=x(e,!1),g=(0,f.Wf)(n),y=(0,f.ww)(n)
break
case"millisecond":d=b(e),g=(0,f.Zz)(n),y=(0,f.FP)(n)}s(d,h,c,g,y,0,a),"year"===t&&o.length>1&&0===u&&o.unshift({value:o[0].value-d})}}for(u=0;u<a.length;u++)o.push(a[u])
return a}}for(var u=[],h=[],c=0,d=0,g=0;g<o.length&&a++<1e4;++g){var y=(0,f.ym)(o[g])
if((0,f.ce)(o[g])&&(l(o[g],u[u.length-1]||[],h),y!==(o[g+1]?(0,f.ym)(o[g+1]):null))){if(h.length){d=c,h.sort((function(t,e){return t.value-e.value}))
for(var A=[],S=0;S<h.length;++S){var M=h[S].value
0!==S&&h[S-1].value===M||(A.push(h[S]),M>=r[0]&&M<=r[1]&&c++)}var T=(r[1]-r[0])/e
if(c>1.5*T&&d>T/1.5)break
if(u.push(A),c>T||t===o[g])break}h=[]}}var I=(0,i.pb)((0,i.Tj)(u,(function(t){return(0,i.pb)(t,(function(t){return t.value>=r[0]&&t.value<=r[1]&&!t.notAdd}))})),(function(t){return t.length>0})),C=[],D=I.length-1
for(g=0;g<I.length;++g)for(var k=I[g],L=0;L<k.length;++L)C.push({value:k[L].value,level:D-g})
C.sort((function(t,e){return t.value-e.value}))
var P=[]
for(g=0;g<C.length;++g)0!==g&&C[g].value===C[g-1].value||P.push(C[g])
return P}(this._minLevelUnit,this._approxInterval,r,e)
return(n=n.concat(o)).push({value:e[1],level:0}),n},e.prototype.calcNiceExtent=function(t){var e=this._extent
if(e[0]===e[1]&&(e[0]-=f.CZ,e[1]+=f.CZ),e[1]===-1/0&&e[0]===1/0){var n=new Date
e[1]=+new Date(n.getFullYear(),n.getMonth(),n.getDate()),e[0]=e[1]-f.CZ}this.calcNiceTicks(t.splitNumber,t.minInterval,t.maxInterval)},e.prototype.calcNiceTicks=function(t,e,n){t=t||10
var i=this._extent,r=i[1]-i[0]
this._approxInterval=r/t,null!=e&&this._approxInterval<e&&(this._approxInterval=e),null!=n&&this._approxInterval>n&&(this._approxInterval=n)
var o=y.length,a=Math.min(function(t,e,n,i){for(;n<i;){var r=n+i>>>1
t[r][1]<e?n=r+1:i=r}return n}(y,this._approxInterval,0,o),o-1)
this._interval=y[a][1],this._minLevelUnit=y[Math.max(a-1,0)][0]},e.prototype.parse=function(t){return(0,i.Et)(t)?t:+p._U(t)},e.prototype.contain=function(t){return s.lP(this.parse(t),this._extent)},e.prototype.normalize=function(t){return s.S8(this.parse(t),this._extent)},e.prototype.scale=function(t){return s.hs(t,this._extent)},e.type="time",e}(h.A),y=[["second",f.OY],["minute",f.iW],["hour",f.MA],["quarter-day",6*f.MA],["half-day",12*f.MA],["day",1.2*f.CZ],["half-week",3.5*f.CZ],["week",7*f.CZ],["month",31*f.CZ],["quarter",95*f.CZ],["half-year",f.$H/2],["year",f.$H]]
function v(t,e){return(t/=f.CZ)>16?16:t>7.5?7:t>3.5?4:t>1.5?2:1}function m(t){return(t/=30*f.CZ)>6?6:t>3?3:t>2?2:1}function _(t){return(t/=f.MA)>12?12:t>6?6:t>3.5?4:t>2?2:1}function x(t,e){return(t/=e?f.iW:f.OY)>30?30:t>20?20:t>15?15:t>10?10:t>5?5:t>2?2:1}function b(t){return p.Cm(t,!0)}function w(t,e,n){var i=new Date(t)
switch((0,f.ym)(e)){case"year":case"month":i[(0,f.xu)(n)](0)
case"day":i[(0,f.ti)(n)](1)
case"hour":i[(0,f.Yd)(n)](0)
case"minute":i[(0,f.KF)(n)](0)
case"second":i[(0,f.ww)(n)](0),i[(0,f.FP)(n)](0)}return i.getTime()}o.A.registerClass(g)
const A=g
var S=o.A.prototype,M=h.A.prototype,T=p.LI,I=Math.floor,C=Math.ceil,D=Math.pow,k=Math.log,L=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this
return e.type="log",e.base=10,e._originalScale=new h.A,e._interval=0,e}return(0,r.C6)(e,t),e.prototype.getTicks=function(t){var e=this._originalScale,n=this._extent,r=e.getExtent(),o=M.getTicks.call(this,t)
return i.Tj(o,(function(t){var e=t.value,i=p.LI(D(this.base,e))
return i=e===n[0]&&this._fixMin?O(i,r[0]):i,{value:i=e===n[1]&&this._fixMax?O(i,r[1]):i}}),this)},e.prototype.setExtent=function(t,e){var n=k(this.base)
t=k(Math.max(0,t))/n,e=k(Math.max(0,e))/n,M.setExtent.call(this,t,e)},e.prototype.getExtent=function(){var t=this.base,e=S.getExtent.call(this)
e[0]=D(t,e[0]),e[1]=D(t,e[1])
var n=this._originalScale.getExtent()
return this._fixMin&&(e[0]=O(e[0],n[0])),this._fixMax&&(e[1]=O(e[1],n[1])),e},e.prototype.unionExtent=function(t){this._originalScale.unionExtent(t)
var e=this.base
t[0]=k(t[0])/k(e),t[1]=k(t[1])/k(e),S.unionExtent.call(this,t)},e.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},e.prototype.calcNiceTicks=function(t){t=t||10
var e=this._extent,n=e[1]-e[0]
if(!(n===1/0||n<=0)){var i=p.au(n)
for(t/n*i<=.5&&(i*=10);!isNaN(i)&&Math.abs(i)<1&&Math.abs(i)>0;)i*=10
var r=[p.LI(C(e[0]/i)*i),p.LI(I(e[1]/i)*i)]
this._interval=i,this._niceExtent=r}},e.prototype.calcNiceExtent=function(t){M.calcNiceExtent.call(this,t),this._fixMin=t.fixMin,this._fixMax=t.fixMax},e.prototype.parse=function(t){return t},e.prototype.contain=function(t){return t=k(t)/k(this.base),s.lP(t,this._extent)},e.prototype.normalize=function(t){return t=k(t)/k(this.base),s.S8(t,this._extent)},e.prototype.scale=function(t){return t=s.hs(t,this._extent),D(this.base,t)},e.type="log",e}(o.A),P=L.prototype
function O(t,e){return T(t,p.XV(e))}P.getMinorTicks=M.getMinorTicks,P.getLabel=M.getLabel,o.A.registerClass(L)
const N=L
var R=n(4061),E=n(7797)
function z(t,e){var n=t.type,r=(0,E.Tc)(t,e,t.getExtent()).calculate()
t.setBlank(r.isBlank)
var o=r.min,a=r.max,s=e.ecModel
if(s&&"time"===n){var l=(0,c.GL)("bar",s),u=!1
if(i.__(l,(function(t){u=u||t.getBaseAxis()===e.axis})),u){var h=(0,c.vq)(l),d=function(t,e,n,r){var o=n.axis.getExtent(),a=o[1]-o[0],s=(0,c.VA)(r,n.axis)
if(void 0===s)return{min:t,max:e}
var l=1/0
i.__(s,(function(t){l=Math.min(t.offset,l)}))
var u=-1/0
i.__(s,(function(t){u=Math.max(t.offset+t.width,u)})),l=Math.abs(l),u=Math.abs(u)
var h=l+u,d=e-t,p=d/(1-(l+u)/a)-d
return{min:t-=p*(l/h),max:e+=p*(u/h)}}(o,a,e,h)
o=d.min,a=d.max}}return{extent:[o,a],fixMin:r.minFixed,fixMax:r.maxFixed}}function B(t,e){var n=e,i=z(t,n),r=i.extent,o=n.get("splitNumber")
t instanceof N&&(t.base=n.get("logBase"))
var a=t.type,s=n.get("interval"),l="interval"===a||"time"===a
t.setExtent(r[0],r[1]),t.calcNiceExtent({splitNumber:o,fixMin:i.fixMin,fixMax:i.fixMax,minInterval:l?n.get("minInterval"):null,maxInterval:l?n.get("maxInterval"):null}),null!=s&&t.setInterval&&t.setInterval(s)}function V(t,e){if(e=e||t.get("type"))switch(e){case"category":return new u({ordinalMeta:t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),extent:[1/0,-1/0]})
case"time":return new A({locale:t.ecModel.getLocaleModel(),useUTC:t.ecModel.get("useUTC")})
default:return new(o.A.getClass(e)||h.A)}}function F(t){var e=t.scale.getExtent(),n=e[0],i=e[1]
return!(n>0&&i>0||n<0&&i<0)}function W(t){var e,n,r=t.getLabelModel().get("formatter"),o="category"===t.type?t.scale.getExtent()[0]:null
return"time"===t.scale.type?(n=r,function(e,i){return t.scale.getFormattedLabel(e,i,n)}):i.Kg(r)?function(e){return function(n){var i=t.scale.getLabel(n)
return e.replace("{value}",null!=i?i:"")}}(r):i.Tn(r)?(e=r,function(n,i){return null!=o&&(i=n.value-o),e(H(t,n),i,null!=n.level?{level:n.level}:null)}):function(e){return t.scale.getLabel(e)}}function H(t,e){return"category"===t.type?t.scale.getLabel(e):e.value}function G(t){var e=t.model,n=t.scale
if(e.get(["axisLabel","show"])&&!n.isBlank()){var i,r,o=n.getExtent()
r=n instanceof u?n.count():(i=n.getTicks()).length
var a,s,l,h,c,p,f,g=t.getLabelModel(),y=W(t),v=1
r>40&&(v=Math.ceil(r/40))
for(var m=0;m<r;m+=v){var _=y(i?i[m]:{value:o[0]+m},m),x=(s=g.getTextRect(_),l=(g.get("rotate")||0)*Math.PI/180,h=s.width,c=s.height,p=h*Math.abs(Math.cos(l))+Math.abs(c*Math.sin(l)),f=h*Math.abs(Math.sin(l))+Math.abs(c*Math.cos(l)),new d.A(s.x,s.y,p,f))
a?a.union(x):a=x}return a}}function j(t){var e=t.get("interval")
return null==e?"auto":e}function X(t){return"category"===t.type&&0===j(t.getLabelModel())}function Y(t,e){var n={}
return i.__(t.mapDimensionsAll(e),(function(e){n[(0,R.me)(t,e)]=!0})),i.HP(n)}function U(t,e,n){e&&i.__(Y(e,n),(function(n){var i=e.getApproximateExtent(n)
i[0]<t[0]&&(t[0]=i[0]),i[1]>t[1]&&(t[1]=i[1])}))}},9271:(t,e,n)=>{n.d(e,{LR:()=>s,Zp:()=>o,gO:()=>a})
var i=n(8301),r=n(5225)
function o(t,e,n){n=n||{}
var r=t.coordinateSystem,o=e.axis,a={},s=o.getAxesOnZeroOf()[0],l=o.position,u=s?"onZero":l,h=o.dim,c=r.getRect(),d=[c.x,c.x+c.width,c.y,c.y+c.height],p={left:0,right:1,top:0,bottom:1,onZero:2},f=e.get("offset")||0,g="x"===h?[d[2]-f,d[3]+f]:[d[0]-f,d[1]+f]
if(s){var y=s.toGlobalCoord(s.dataToCoord(0))
g[p.onZero]=Math.max(Math.min(y,g[1]),g[0])}a.position=["y"===h?g[p[u]]:d[0],"x"===h?g[p[u]]:d[3]],a.rotation=Math.PI/2*("x"===h?0:1),a.labelDirection=a.tickDirection=a.nameDirection={top:-1,bottom:1,left:-1,right:1}[l],a.labelOffset=s?g[p[l]]-g[p.onZero]:0,e.get(["axisTick","inside"])&&(a.tickDirection=-a.tickDirection),i.Je(n.labelInside,e.get(["axisLabel","inside"]))&&(a.labelDirection=-a.labelDirection)
var v=e.get(["axisLabel","rotate"])
return a.labelRotate="top"===u?-v:v,a.z2=1,a}function a(t){return"cartesian2d"===t.get("coordinateSystem")}function s(t){var e={xAxisModel:null,yAxisModel:null}
return i.__(e,(function(n,i){var o=i.replace(/Model$/,""),a=t.getReferringComponents(o,r.US).models[0]
e[i]=a})),e}},7797:(t,e,n)=>{n.d(e,{Tc:()=>l})
var i=n(8301),r=n(7627),o=function(){function t(t,e,n){this._prepareParams(t,e,n)}return t.prototype._prepareParams=function(t,e,n){n[1]<n[0]&&(n=[NaN,NaN]),this._dataMin=n[0],this._dataMax=n[1]
var o=this._isOrdinal="ordinal"===t.type
this._needCrossZero="interval"===t.type&&e.getNeedCrossZero&&e.getNeedCrossZero()
var a=e.get("min",!0)
null==a&&(a=e.get("startValue",!0))
var s=this._modelMinRaw=a;(0,i.Tn)(s)?this._modelMinNum=u(t,s({min:n[0],max:n[1]})):"dataMin"!==s&&(this._modelMinNum=u(t,s))
var l=this._modelMaxRaw=e.get("max",!0)
if((0,i.Tn)(l)?this._modelMaxNum=u(t,l({min:n[0],max:n[1]})):"dataMax"!==l&&(this._modelMaxNum=u(t,l)),o)this._axisDataLen=e.getCategories().length
else{var h=e.get("boundaryGap"),c=(0,i.cy)(h)?h:[h||0,h||0]
"boolean"==typeof c[0]||"boolean"==typeof c[1]?this._boundaryGapInner=[0,0]:this._boundaryGapInner=[(0,r.lo)(c[0],1),(0,r.lo)(c[1],1)]}},t.prototype.calculate=function(){var t=this._isOrdinal,e=this._dataMin,n=this._dataMax,r=this._axisDataLen,o=this._boundaryGapInner,a=t?null:n-e||Math.abs(e),s="dataMin"===this._modelMinRaw?e:this._modelMinNum,l="dataMax"===this._modelMaxRaw?n:this._modelMaxNum,u=null!=s,h=null!=l
null==s&&(s=t?r?0:NaN:e-o[0]*a),null==l&&(l=t?r?r-1:NaN:n+o[1]*a),(null==s||!isFinite(s))&&(s=NaN),(null==l||!isFinite(l))&&(l=NaN)
var c=(0,i.Yp)(s)||(0,i.Yp)(l)||t&&!r
this._needCrossZero&&(s>0&&l>0&&!u&&(s=0),s<0&&l<0&&!h&&(l=0))
var d=this._determinedMin,p=this._determinedMax
return null!=d&&(s=d,u=!0),null!=p&&(l=p,h=!0),{min:s,max:l,minFixed:u,maxFixed:h,isBlank:c}},t.prototype.modifyDataMinMax=function(t,e){this[s[t]]=e},t.prototype.setDeterminedMinMax=function(t,e){this[a[t]]=e},t.prototype.freeze=function(){this.frozen=!0},t}(),a={min:"_determinedMin",max:"_determinedMax"},s={min:"_dataMin",max:"_dataMax"}
function l(t,e,n){var i=t.rawExtentInfo
return i||(i=new o(t,e,n),t.rawExtentInfo=i,i)}function u(t,e){return null==e?null:(0,i.Yp)(e)?NaN:t.parse(e)}},4:(t,e,n)=>{n.d(e,{A:()=>o})
var i=n(8301),r={}
const o=function(){function t(){this._coordinateSystems=[]}return t.prototype.create=function(t,e){var n=[]
i.__(r,(function(i,r){var o=i.create(t,e)
n=n.concat(o||[])})),this._coordinateSystems=n},t.prototype.update=function(t,e){i.__(this._coordinateSystems,(function(n){n.update&&n.update(t,e)}))},t.prototype.getCoordinateSystems=function(){return this._coordinateSystems.slice()},t.register=function(t,e){r[t]=e},t.get=function(t){return r[t]},t}()},7454:(t,e,n)=>{n.d(e,{FQ:()=>_e,Ts:()=>un,OH:()=>yn,pX:()=>vn,Oh:()=>mn,Ej:()=>wn,mz:()=>An,cf:()=>pn,tb:()=>fn,lP:()=>cn,qg:()=>dn,iY:()=>Sn,xV:()=>gn,AF:()=>_n})
var i=n(4784),r=n(7662),o=n(8301),a=n(9714),s=n(4891),l=n(9430),u=n(5225),h=n(7413),c=n(7518),d=""
"undefined"!=typeof navigator&&(d=navigator.platform||"")
var p="rgba(0, 0, 0, 0.2)"
const f={darkMode:"auto",colorBy:"series",color:["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],gradientColor:["#f6efa6","#d88273","#bf444c"],aria:{decal:{decals:[{color:p,dashArrayX:[1,0],dashArrayY:[2,5],symbolSize:1,rotation:Math.PI/6},{color:p,symbol:"circle",dashArrayX:[[8,8],[0,8,8,0]],dashArrayY:[6,0],symbolSize:.8},{color:p,dashArrayX:[1,0],dashArrayY:[4,3],rotation:-Math.PI/4},{color:p,dashArrayX:[[6,6],[0,6,6,0]],dashArrayY:[6,0]},{color:p,dashArrayX:[[1,0],[1,6]],dashArrayY:[1,0,6,0],rotation:Math.PI/4},{color:p,symbol:"triangle",dashArrayX:[[9,9],[0,9,9,0]],dashArrayY:[7,2],symbolSize:.75}]}},textStyle:{fontFamily:d.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,stateAnimation:{duration:300,easing:"cubicOut"},animation:"auto",animationDuration:1e3,animationDurationUpdate:500,animationEasing:"cubicInOut",animationEasingUpdate:"cubicInOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1}
var g,y,v,m=n(6604),_=(0,o.nt)(),x=n(8639),b="\0_ec_inner",w=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i.C6)(e,t),e.prototype.init=function(t,e,n,i,r,o){i=i||{},this.option=null,this._theme=new h.A(i),this._locale=new h.A(r),this._optionManager=o},e.prototype.setOption=function(t,e,n){var i=M(e)
this._optionManager.setOption(t,n,i),this._resetOption(null,i)},e.prototype.resetOption=function(t,e){return this._resetOption(t,M(e))},e.prototype._resetOption=function(t,e){var n=!1,i=this._optionManager
if(!t||"recreate"===t){var r=i.mountOption("recreate"===t)
this.option&&"recreate"!==t?(this.restoreData(),this._mergeOption(r,e)):v(this,r),n=!0}if("timeline"!==t&&"media"!==t||this.restoreData(),!t||"recreate"===t||"timeline"===t){var a=i.getTimelineOption(this)
a&&(n=!0,this._mergeOption(a,e))}if(!t||"recreate"===t||"media"===t){var s=i.getMediaOption(this)
s.length&&(0,o.__)(s,(function(t){n=!0,this._mergeOption(t,e)}),this)}return n},e.prototype.mergeOption=function(t){this._mergeOption(t,null)},e.prototype._mergeOption=function(t,e){var n=this.option,i=this._componentsMap,r=this._componentsCount,a=[],s=(0,o.nt)(),l=e&&e.replaceMergeMainTypeMap;(0,m.ps)(this),(0,o.__)(t,(function(t,e){null!=t&&(c.A.hasClass(e)?e&&(a.push(e),s.set(e,!0)):n[e]=null==n[e]?(0,o.o8)(t):(0,o.h1)(n[e],t,!0))})),l&&l.each((function(t,e){c.A.hasClass(e)&&!s.get(e)&&(a.push(e),s.set(e,!0))})),c.A.topologicalTravel(a,c.A.getAllClassMainTypes(),(function(e){var a=function(t,e,n){var i=_.get(e)
if(!i)return n
var r=i(t)
return r?n.concat(r):n}(this,e,u.qB(t[e])),s=i.get(e),h=s?l&&l.get(e)?"replaceMerge":"normalMerge":"replaceAll",d=u.O2(s,a,h)
u.GX(d,e,c.A),n[e]=null,i.set(e,null),r.set(e,0)
var p,f=[],y=[],v=0;(0,o.__)(d,(function(t,n){var i=t.existing,r=t.newOption
if(r){var a="series"===e,s=c.A.getClass(e,t.keyInfo.subType,!a)
if(!s)return
if("tooltip"===e){if(p)return
p=!0}if(i&&i.constructor===s)i.name=t.keyInfo.name,i.mergeOption(r,this),i.optionUpdated(r,!1)
else{var l=(0,o.X$)({componentIndex:n},t.keyInfo)
i=new s(r,this,this,l),(0,o.X$)(i,l),t.brandNew&&(i.__requireNewView=!0),i.init(r,this,this),i.optionUpdated(null,!0)}}else i&&(i.mergeOption({},this),i.optionUpdated({},!1))
i?(f.push(i.option),y.push(i),v++):(f.push(void 0),y.push(void 0))}),this),n[e]=f,i.set(e,y),r.set(e,v),"series"===e&&g(this)}),this),this._seriesIndices||g(this)},e.prototype.getOption=function(){var t=(0,o.o8)(this.option)
return(0,o.__)(t,(function(e,n){if(c.A.hasClass(n)){for(var i=u.qB(e),r=i.length,o=!1,a=r-1;a>=0;a--)i[a]&&!u.oh(i[a])?o=!0:(i[a]=null,!o&&r--)
i.length=r,t[n]=i}})),delete t[b],t},e.prototype.getTheme=function(){return this._theme},e.prototype.getLocaleModel=function(){return this._locale},e.prototype.setUpdatePayload=function(t){this._payload=t},e.prototype.getUpdatePayload=function(){return this._payload},e.prototype.getComponent=function(t,e){var n=this._componentsMap.get(t)
if(n){var i=n[e||0]
if(i)return i
if(null==e)for(var r=0;r<n.length;r++)if(n[r])return n[r]}},e.prototype.queryComponents=function(t){var e=t.mainType
if(!e)return[]
var n,i=t.index,r=t.id,a=t.name,s=this._componentsMap.get(e)
return s&&s.length?(null!=i?(n=[],(0,o.__)(u.qB(i),(function(t){s[t]&&n.push(s[t])}))):n=null!=r?A("id",r,s):null!=a?A("name",a,s):(0,o.pb)(s,(function(t){return!!t})),S(n,t)):[]},e.prototype.findComponents=function(t){var e,n,i,r,a,s=t.query,l=t.mainType,u=(n=l+"Index",i=l+"Id",r=l+"Name",!(e=s)||null==e[n]&&null==e[i]&&null==e[r]?null:{mainType:l,index:e[n],id:e[i],name:e[r]})
return a=S(u?this.queryComponents(u):(0,o.pb)(this._componentsMap.get(l),(function(t){return!!t})),t),t.filter?(0,o.pb)(a,t.filter):a},e.prototype.eachComponent=function(t,e,n){var i=this._componentsMap
if((0,o.Tn)(t)){var r=e,a=t
i.each((function(t,e){for(var n=0;t&&n<t.length;n++){var i=t[n]
i&&a.call(r,e,i,i.componentIndex)}}))}else for(var s=(0,o.Kg)(t)?i.get(t):(0,o.Gv)(t)?this.findComponents(t):null,l=0;s&&l<s.length;l++){var u=s[l]
u&&e.call(n,u,u.componentIndex)}},e.prototype.getSeriesByName=function(t){var e=u.vS(t,null)
return(0,o.pb)(this._componentsMap.get("series"),(function(t){return!!t&&null!=e&&t.name===e}))},e.prototype.getSeriesByIndex=function(t){return this._componentsMap.get("series")[t]},e.prototype.getSeriesByType=function(t){return(0,o.pb)(this._componentsMap.get("series"),(function(e){return!!e&&e.subType===t}))},e.prototype.getSeries=function(){return(0,o.pb)(this._componentsMap.get("series"),(function(t){return!!t}))},e.prototype.getSeriesCount=function(){return this._componentsCount.get("series")},e.prototype.eachSeries=function(t,e){y(this),(0,o.__)(this._seriesIndices,(function(n){var i=this._componentsMap.get("series")[n]
t.call(e,i,n)}),this)},e.prototype.eachRawSeries=function(t,e){(0,o.__)(this._componentsMap.get("series"),(function(n){n&&t.call(e,n,n.componentIndex)}))},e.prototype.eachSeriesByType=function(t,e,n){y(this),(0,o.__)(this._seriesIndices,(function(i){var r=this._componentsMap.get("series")[i]
r.subType===t&&e.call(n,r,i)}),this)},e.prototype.eachRawSeriesByType=function(t,e,n){return(0,o.__)(this.getSeriesByType(t),e,n)},e.prototype.isSeriesFiltered=function(t){return y(this),null==this._seriesIndicesMap.get(t.componentIndex)},e.prototype.getCurrentSeriesIndices=function(){return(this._seriesIndices||[]).slice()},e.prototype.filterSeries=function(t,e){y(this)
var n=[];(0,o.__)(this._seriesIndices,(function(i){var r=this._componentsMap.get("series")[i]
t.call(e,r,i)&&n.push(i)}),this),this._seriesIndices=n,this._seriesIndicesMap=(0,o.nt)(n)},e.prototype.restoreData=function(t){g(this)
var e=this._componentsMap,n=[]
e.each((function(t,e){c.A.hasClass(e)&&n.push(e)})),c.A.topologicalTravel(n,c.A.getAllClassMainTypes(),(function(n){(0,o.__)(e.get(n),(function(e){!e||"series"===n&&function(t,e){if(e){var n=e.seriesIndex,i=e.seriesId,r=e.seriesName
return null!=n&&t.componentIndex!==n||null!=i&&t.id!==i||null!=r&&t.name!==r}}(e,t)||e.restoreData()}))}))},e.internalField=(g=function(t){var e=t._seriesIndices=[];(0,o.__)(t._componentsMap.get("series"),(function(t){t&&e.push(t.componentIndex)})),t._seriesIndicesMap=(0,o.nt)(e)},y=function(t){},void(v=function(t,e){t.option={},t.option[b]=1,t._componentsMap=(0,o.nt)({series:[]}),t._componentsCount=(0,o.nt)()
var n=e.aria;(0,o.Gv)(n)&&null==n.enabled&&(n.enabled=!0),function(t,e){var n=t.color&&!t.colorLayer;(0,o.__)(e,(function(e,i){"colorLayer"===i&&n||c.A.hasClass(i)||("object"==typeof e?t[i]=t[i]?(0,o.h1)(t[i],e,!1):(0,o.o8)(e):null==t[i]&&(t[i]=e))}))}(e,t._theme.option),(0,o.h1)(e,f,!1),t._mergeOption(e,null)})),e}(h.A)
function A(t,e,n){if((0,o.cy)(e)){var i=(0,o.nt)()
return(0,o.__)(e,(function(t){null!=t&&null!=u.vS(t,null)&&i.set(t,!0)})),(0,o.pb)(n,(function(e){return e&&i.get(e[t])}))}var r=u.vS(e,null)
return(0,o.pb)(n,(function(e){return e&&null!=r&&e[t]===r}))}function S(t,e){return e.hasOwnProperty("subType")?(0,o.pb)(t,(function(t){return t&&t.subType===e.subType})):t}function M(t){var e=(0,o.nt)()
return t&&(0,o.__)(u.qB(t.replaceMerge),(function(t){e.set(t,!0)})),{replaceMergeMainTypeMap:e}}(0,o.co)(w,x.X)
const T=w
var I=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isSSR","isDisposed","on","off","getDataURL","getConnectedDataURL","getOption","getId","updateLabelLayout"]
const C=function(t){o.__(I,(function(e){this[e]=o.oI(t[e],t)}),this)}
var D=n(4),k=/^(min|max)?(.+)$/,L=function(){function t(t){this._timelineOptions=[],this._mediaList=[],this._currentMediaIndices=[],this._api=t}return t.prototype.setOption=function(t,e,n){t&&((0,o.__)((0,u.qB)(t.series),(function(t){t&&t.data&&(0,o.iu)(t.data)&&(0,o.En)(t.data)})),(0,o.__)((0,u.qB)(t.dataset),(function(t){t&&t.source&&(0,o.iu)(t.source)&&(0,o.En)(t.source)}))),t=(0,o.o8)(t)
var i=this._optionBackup,r=function(t,e,n){var i,r,a=[],s=t.baseOption,l=t.timeline,u=t.options,h=t.media,c=!!t.media,d=!!(u||l||s&&s.timeline)
function p(t){(0,o.__)(e,(function(e){e(t,n)}))}return s?(r=s).timeline||(r.timeline=l):((d||c)&&(t.options=t.media=null),r=t),c&&(0,o.cy)(h)&&(0,o.__)(h,(function(t){t&&t.option&&(t.query?a.push(t):i||(i=t))})),p(r),(0,o.__)(u,(function(t){return p(t)})),(0,o.__)(a,(function(t){return p(t.option)})),{baseOption:r,timelineOptions:u||[],mediaDefault:i,mediaList:a}}(t,e,!i)
this._newBaseOption=r.baseOption,i?(r.timelineOptions.length&&(i.timelineOptions=r.timelineOptions),r.mediaList.length&&(i.mediaList=r.mediaList),r.mediaDefault&&(i.mediaDefault=r.mediaDefault)):this._optionBackup=r},t.prototype.mountOption=function(t){var e=this._optionBackup
return this._timelineOptions=e.timelineOptions,this._mediaList=e.mediaList,this._mediaDefault=e.mediaDefault,this._currentMediaIndices=[],(0,o.o8)(t?e.baseOption:this._newBaseOption)},t.prototype.getTimelineOption=function(t){var e,n=this._timelineOptions
if(n.length){var i=t.getComponent("timeline")
i&&(e=(0,o.o8)(n[i.getCurrentIndex()]))}return e},t.prototype.getMediaOption=function(t){var e,n,i=this._api.getWidth(),r=this._api.getHeight(),a=this._mediaList,s=this._mediaDefault,l=[],u=[]
if(!a.length&&!s)return u
for(var h=0,c=a.length;h<c;h++)P(a[h].query,i,r)&&l.push(h)
return!l.length&&s&&(l=[-1]),l.length&&(e=l,n=this._currentMediaIndices,e.join(",")!==n.join(","))&&(u=(0,o.Tj)(l,(function(t){return(0,o.o8)(-1===t?s.option:a[t].option)}))),this._currentMediaIndices=l,u},t}()
function P(t,e,n){var i={width:e,height:n,aspectratio:e/n},r=!0
return(0,o.__)(t,(function(t,e){var n=e.match(k)
if(n&&n[1]&&n[2]){var o=n[1],a=n[2].toLowerCase();(function(t,e,n){return"min"===n?t>=e:"max"===n?t<=e:t===e})(i[a],t,o)||(r=!1)}})),r}const O=L
var N=o.__,R=o.Gv,E=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"]
function z(t){var e=t&&t.itemStyle
if(e)for(var n=0,i=E.length;n<i;n++){var r=E[n],a=e.normal,s=e.emphasis
a&&a[r]&&(t[r]=t[r]||{},t[r].normal?o.h1(t[r].normal,a[r]):t[r].normal=a[r],a[r]=null),s&&s[r]&&(t[r]=t[r]||{},t[r].emphasis?o.h1(t[r].emphasis,s[r]):t[r].emphasis=s[r],s[r]=null)}}function B(t,e,n){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var i=t[e].normal,r=t[e].emphasis
i&&(n?(t[e].normal=t[e].emphasis=null,o.NT(t[e],i)):t[e]=i),r&&(t.emphasis=t.emphasis||{},t.emphasis[e]=r,r.focus&&(t.emphasis.focus=r.focus),r.blurScope&&(t.emphasis.blurScope=r.blurScope))}}function V(t){B(t,"itemStyle"),B(t,"lineStyle"),B(t,"areaStyle"),B(t,"label"),B(t,"labelLine"),B(t,"upperLabel"),B(t,"edgeLabel")}function F(t,e){var n=R(t)&&t[e],i=R(n)&&n.textStyle
if(i)for(var r=0,o=u.JS.length;r<o;r++){var a=u.JS[r]
i.hasOwnProperty(a)&&(n[a]=i[a])}}function W(t){t&&(V(t),F(t,"label"),t.emphasis&&F(t.emphasis,"label"))}function H(t){return o.cy(t)?t:t?[t]:[]}function G(t){return(o.cy(t)?t[0]:t)||{}}function j(t){t&&(0,o.__)(X,(function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])}))}var X=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],Y=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],U=[["borderRadius","barBorderRadius"],["borderColor","barBorderColor"],["borderWidth","barBorderWidth"]]
function Z(t){var e=t&&t.itemStyle
if(e)for(var n=0;n<U.length;n++){var i=U[n][1],r=U[n][0]
null!=e[i]&&(e[r]=e[i])}}function $(t){t&&"edge"===t.alignTo&&null!=t.margin&&null==t.edgeDistance&&(t.edgeDistance=t.margin)}function q(t){t&&t.downplay&&!t.blur&&(t.blur=t.downplay)}function K(t,e){if(t)for(var n=0;n<t.length;n++)e(t[n]),t[n]&&K(t[n].children,e)}function Q(t,e){(function(t,e){N(H(t.series),(function(t){R(t)&&function(t){if(R(t)){z(t),V(t),F(t,"label"),F(t,"upperLabel"),F(t,"edgeLabel"),t.emphasis&&(F(t.emphasis,"label"),F(t.emphasis,"upperLabel"),F(t.emphasis,"edgeLabel"))
var e=t.markPoint
e&&(z(e),W(e))
var n=t.markLine
n&&(z(n),W(n))
var i=t.markArea
i&&W(i)
var r=t.data
if("graph"===t.type){r=r||t.nodes
var a=t.links||t.edges
if(a&&!o.iu(a))for(var s=0;s<a.length;s++)W(a[s])
o.__(t.categories,(function(t){V(t)}))}if(r&&!o.iu(r))for(s=0;s<r.length;s++)W(r[s])
if((e=t.markPoint)&&e.data){var l=e.data
for(s=0;s<l.length;s++)W(l[s])}if((n=t.markLine)&&n.data){var u=n.data
for(s=0;s<u.length;s++)o.cy(u[s])?(W(u[s][0]),W(u[s][1])):W(u[s])}"gauge"===t.type?(F(t,"axisLabel"),F(t,"title"),F(t,"detail")):"treemap"===t.type?(B(t.breadcrumb,"itemStyle"),o.__(t.levels,(function(t){V(t)}))):"tree"===t.type&&V(t.leaves)}}(t)}))
var n=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","parallelAxis","radar"]
e&&n.push("valueAxis","categoryAxis","logAxis","timeAxis"),N(n,(function(e){N(H(t[e]),(function(t){t&&(F(t,"axisLabel"),F(t.axisPointer,"label"))}))})),N(H(t.parallel),(function(t){var e=t&&t.parallelAxisDefault
F(e,"axisLabel"),F(e&&e.axisPointer,"label")})),N(H(t.calendar),(function(t){B(t,"itemStyle"),F(t,"dayLabel"),F(t,"monthLabel"),F(t,"yearLabel")})),N(H(t.radar),(function(t){F(t,"name"),t.name&&null==t.axisName&&(t.axisName=t.name,delete t.name),null!=t.nameGap&&null==t.axisNameGap&&(t.axisNameGap=t.nameGap,delete t.nameGap)})),N(H(t.geo),(function(t){R(t)&&(W(t),N(H(t.regions),(function(t){W(t)})))})),N(H(t.timeline),(function(t){W(t),B(t,"label"),B(t,"itemStyle"),B(t,"controlStyle",!0)
var e=t.data
o.cy(e)&&o.__(e,(function(t){o.Gv(t)&&(B(t,"label"),B(t,"itemStyle"))}))})),N(H(t.toolbox),(function(t){B(t,"iconStyle"),N(t.feature,(function(t){B(t,"iconStyle")}))})),F(G(t.axisPointer),"label"),F(G(t.tooltip).axisPointer,"label")})(t,e),t.series=(0,u.qB)(t.series),(0,o.__)(t.series,(function(t){if((0,o.Gv)(t)){var e=t.type
if("line"===e)null!=t.clipOverflow&&(t.clip=t.clipOverflow)
else if("pie"===e||"gauge"===e){if(null!=t.clockWise&&(t.clockwise=t.clockWise),$(t.label),(r=t.data)&&!(0,o.iu)(r))for(var n=0;n<r.length;n++)$(r[n])
null!=t.hoverOffset&&(t.emphasis=t.emphasis||{},(t.emphasis.scaleSize=null)&&(t.emphasis.scaleSize=t.hoverOffset))}else if("gauge"===e){var i=function(t){for(var e="pointer.color".split(","),n=t,i=0;i<e.length&&null!=(n=n&&n[e[i]]);i++);return n}(t)
null!=i&&function(t,e,n){for(var i,r="itemStyle.color".split(","),o=t,a=0;a<r.length-1;a++)null==o[i=r[a]]&&(o[i]={}),o=o[i]
null==o[r[a]]&&(o[r[a]]=n)}(t,0,i)}else if("bar"===e){var r
if(Z(t),Z(t.backgroundStyle),Z(t.emphasis),(r=t.data)&&!(0,o.iu)(r))for(n=0;n<r.length;n++)"object"==typeof r[n]&&(Z(r[n]),Z(r[n]&&r[n].emphasis))}else if("sunburst"===e){var a=t.highlightPolicy
a&&(t.emphasis=t.emphasis||{},t.emphasis.focus||(t.emphasis.focus=a)),q(t),K(t.data,q)}else"graph"===e||"sankey"===e?function(t){t&&null!=t.focusNodeAdjacency&&(t.emphasis=t.emphasis||{},null==t.emphasis.focus&&(t.emphasis.focus="adjacency"))}(t):"map"===e&&(t.mapType&&!t.map&&(t.map=t.mapType),t.mapLocation&&(0,o.NT)(t,t.mapLocation))
null!=t.hoverAnimation&&(t.emphasis=t.emphasis||{},t.emphasis&&null==t.emphasis.scale&&(t.emphasis.scale=t.hoverAnimation)),j(t)}})),t.dataRange&&(t.visualMap=t.dataRange),(0,o.__)(Y,(function(e){var n=t[e]
n&&((0,o.cy)(n)||(n=[n]),(0,o.__)(n,(function(t){j(t)})))}))}var J=n(3947)
function tt(t){(0,o.__)(t,(function(e,n){var i=[],r=[NaN,NaN],o=[e.stackResultDimension,e.stackedOverDimension],a=e.data,s=e.isStackedByIndex,l=e.seriesModel.get("stackStrategy")||"samesign"
a.modify(o,(function(o,u,h){var c,d,p=a.get(e.stackedDimension,h)
if(isNaN(p))return r
s?d=a.getRawIndex(h):c=a.get(e.stackedByDimension,h)
for(var f=NaN,g=n-1;g>=0;g--){var y=t[g]
if(s||(d=y.data.rawIndexOf(y.stackedByDimension,c)),d>=0){var v=y.data.getByRawIndex(y.stackResultDimension,d)
if("all"===l||"positive"===l&&v>0||"negative"===l&&v<0||"samesign"===l&&p>=0&&v>0||"samesign"===l&&p<=0&&v<0){p=(0,J.Tr)(p,v),f=v
break}}}return i[0]=p,i[1]=f,i}))}))}var et=n(3397),nt=n(4642),it=n(1993),rt=n(4130),ot=n(2655),at=n(8283),st=n(4427),lt=n(1323),ut=n(200),ht=n(7322),ct=n(5897),dt=n(1159),pt=n(1908),ft=(0,u.$r)(),gt={itemStyle:(0,ct.A)(dt.L,!0),lineStyle:(0,ct.A)(pt.m,!0)},yt={lineStyle:"stroke",itemStyle:"fill"}
function vt(t,e){return t.visualStyleMapper||gt[e]||(console.warn("Unknown style type '"+e+"'."),gt.itemStyle)}function mt(t,e){return t.visualDrawType||yt[e]||(console.warn("Unknown style type '"+e+"'."),"fill")}var _t={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){var n=t.getData(),i=t.visualStyleAccessPath||"itemStyle",r=t.getModel(i),a=vt(t,i)(r),s=r.getShallow("decal")
s&&(n.setVisual("decal",s),s.dirty=!0)
var l=mt(t,i),u=a[l],h=(0,o.Tn)(u)?u:null,c="auto"===a.fill||"auto"===a.stroke
if(!a[l]||h||c){var d=t.getColorFromPalette(t.name,null,e.getSeriesCount())
a[l]||(a[l]=d,n.setVisual("colorFromPalette",!0)),a.fill="auto"===a.fill||(0,o.Tn)(a.fill)?d:a.fill,a.stroke="auto"===a.stroke||(0,o.Tn)(a.stroke)?d:a.stroke}if(n.setVisual("style",a),n.setVisual("drawType",l),!e.isSeriesFiltered(t)&&h)return n.setVisual("colorFromPalette",!1),{dataEach:function(e,n){var i=t.getDataParams(n),r=(0,o.X$)({},a)
r[l]=h(i),e.setItemVisual(n,"style",r)}}}},xt=new h.A,bt={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){if(!t.ignoreStyleOnData&&!e.isSeriesFiltered(t)){var n=t.getData(),i=t.visualStyleAccessPath||"itemStyle",r=vt(t,i),a=n.getVisual("drawType")
return{dataEach:n.hasItemOption?function(t,e){var n=t.getRawDataItem(e)
if(n&&n[i]){xt.option=n[i]
var s=r(xt),l=t.ensureUniqueItemVisual(e,"style");(0,o.X$)(l,s),xt.option.decal&&(t.setItemVisual(e,"decal",xt.option.decal),xt.option.decal.dirty=!0),a in s&&t.setItemVisual(e,"colorFromPalette",!1)}}:null}}}},wt={performRawSeries:!0,overallReset:function(t){var e=(0,o.nt)()
t.eachSeries((function(t){var n=t.getColorBy()
if(!t.isColorBySeries()){var i=t.type+"-"+n,r=e.get(i)
r||(r={},e.set(i,r)),ft(t).scope=r}})),t.eachSeries((function(e){if(!e.isColorBySeries()&&!t.isSeriesFiltered(e)){var n=e.getRawData(),i={},r=e.getData(),o=ft(e).scope,a=e.visualStyleAccessPath||"itemStyle",s=mt(e,a)
r.each((function(t){var e=r.getRawIndex(t)
i[e]=t})),n.each((function(t){var a=i[t]
if(r.getItemVisual(a,"colorFromPalette")){var l=r.ensureUniqueItemVisual(a,"style"),u=n.getName(t)||t+"",h=n.count()
l[s]=e.getColorFromPalette(u,o,h)}}))}}))}},At=n(7941),St=n(5652),Mt=n(5844),Tt=Math.PI,It=n(3046),Ct=n(5019),Dt=function(){function t(t,e,n,i){this._stageTaskMap=(0,o.nt)(),this.ecInstance=t,this.api=e,n=this._dataProcessorHandlers=n.slice(),i=this._visualHandlers=i.slice(),this._allHandlers=n.concat(i)}return t.prototype.restoreData=function(t,e){t.restoreData(e),this._stageTaskMap.each((function(t){var e=t.overallTask
e&&e.dirty()}))},t.prototype.getPerformArgs=function(t,e){if(t.__pipeline){var n=this._pipelineMap.get(t.__pipeline.id),i=n.context,r=!e&&n.progressiveEnabled&&(!i||i.progressiveRender)&&t.__idxInPipeline>n.blockIndex?n.step:null,o=i&&i.modDataCount
return{step:r,modBy:null!=o?Math.ceil(o/r):null,modDataCount:o}}},t.prototype.getPipeline=function(t){return this._pipelineMap.get(t)},t.prototype.updateStreamModes=function(t,e){var n=this._pipelineMap.get(t.uid),i=t.getData().count(),r=n.progressiveEnabled&&e.incrementalPrepareRender&&i>=n.threshold,o=t.get("large")&&i>=t.get("largeThreshold"),a="mod"===t.get("progressiveChunkMode")?i:null
t.pipelineContext=n.context={progressiveRender:r,modDataCount:a,large:o}},t.prototype.restorePipelines=function(t){var e=this,n=e._pipelineMap=(0,o.nt)()
t.eachSeries((function(t){var i=t.getProgressive(),r=t.uid
n.set(r,{id:r,head:null,tail:null,threshold:t.getProgressiveThreshold(),progressiveEnabled:i&&!(t.preventIncremental&&t.preventIncremental()),blockIndex:-1,step:Math.round(i||700),count:0}),e._pipe(t,t.dataTask)}))},t.prototype.prepareStageTasks=function(){var t=this._stageTaskMap,e=this.api.getModel(),n=this.api;(0,o.__)(this._allHandlers,(function(i){var r=t.get(i.uid)||t.set(i.uid,{});(0,o.vA)(!(i.reset&&i.overallReset),""),i.reset&&this._createSeriesStageTask(i,r,e,n),i.overallReset&&this._createOverallStageTask(i,r,e,n)}),this)},t.prototype.prepareView=function(t,e,n,i){var r=t.renderTask,o=r.context
o.model=e,o.ecModel=n,o.api=i,r.__block=!t.incrementalPrepareRender,this._pipe(e,r)},t.prototype.performDataProcessorTasks=function(t,e){this._performStageTasks(this._dataProcessorHandlers,t,e,{block:!0})},t.prototype.performVisualTasks=function(t,e,n){this._performStageTasks(this._visualHandlers,t,e,n)},t.prototype._performStageTasks=function(t,e,n,i){i=i||{}
var r=!1,a=this
function s(t,e){return t.setDirty&&(!t.dirtyMap||t.dirtyMap.get(e.__pipeline.id))}(0,o.__)(t,(function(t,o){if(!i.visualType||i.visualType===t.visualType){var l=a._stageTaskMap.get(t.uid),u=l.seriesTaskMap,h=l.overallTask
if(h){var c,d=h.agentStubMap
d.each((function(t){s(i,t)&&(t.dirty(),c=!0)})),c&&h.dirty(),a.updatePayload(h,n)
var p=a.getPerformArgs(h,i.block)
d.each((function(t){t.perform(p)})),h.perform(p)&&(r=!0)}else u&&u.each((function(o,l){s(i,o)&&o.dirty()
var u=a.getPerformArgs(o,i.block)
u.skip=!t.performRawSeries&&e.isSeriesFiltered(o.context.model),a.updatePayload(o,n),o.perform(u)&&(r=!0)}))}})),this.unfinished=r||this.unfinished},t.prototype.performSeriesTasks=function(t){var e
t.eachSeries((function(t){e=t.dataTask.perform()||e})),this.unfinished=e||this.unfinished},t.prototype.plan=function(){this._pipelineMap.each((function(t){var e=t.tail
do{if(e.__block){t.blockIndex=e.__idxInPipeline
break}e=e.getUpstream()}while(e)}))},t.prototype.updatePayload=function(t,e){"remain"!==e&&(t.context.payload=e)},t.prototype._createSeriesStageTask=function(t,e,n,i){var r=this,a=e.seriesTaskMap,s=e.seriesTaskMap=(0,o.nt)(),l=t.seriesType,u=t.getTargetSeries
function h(e){var o=e.uid,l=s.set(o,a&&a.get(o)||(0,It.U)({plan:Nt,reset:Rt,count:Bt}))
l.context={model:e,ecModel:n,api:i,useClearVisual:t.isVisual&&!t.isLayout,plan:t.plan,reset:t.reset,scheduler:r},r._pipe(e,l)}t.createOnAllSeries?n.eachRawSeries(h):l?n.eachRawSeriesByType(l,h):u&&u(n,i).each(h)},t.prototype._createOverallStageTask=function(t,e,n,i){var r=this,a=e.overallTask=e.overallTask||(0,It.U)({reset:kt})
a.context={ecModel:n,api:i,overallReset:t.overallReset,scheduler:r}
var s=a.agentStubMap,l=a.agentStubMap=(0,o.nt)(),u=t.seriesType,h=t.getTargetSeries,c=!0,d=!1
function p(t){var e=t.uid,n=l.set(e,s&&s.get(e)||(d=!0,(0,It.U)({reset:Lt,onDirty:Ot})))
n.context={model:t,overallProgress:c},n.agent=a,n.__block=c,r._pipe(t,n)}(0,o.vA)(!t.createOnAllSeries,""),u?n.eachRawSeriesByType(u,p):h?h(n,i).each(p):(c=!1,(0,o.__)(n.getSeries(),p)),d&&a.dirty()},t.prototype._pipe=function(t,e){var n=t.uid,i=this._pipelineMap.get(n)
!i.head&&(i.head=e),i.tail&&i.tail.pipe(e),i.tail=e,e.__idxInPipeline=i.count++,e.__pipeline=i},t.wrapStageHandler=function(t,e){return(0,o.Tn)(t)&&(t={overallReset:t,seriesType:Vt(t)}),t.uid=(0,Ct.$Q)("stageHandler"),e&&(t.visualType=e),t},t}()
function kt(t){t.overallReset(t.ecModel,t.api,t.payload)}function Lt(t){return t.overallProgress&&Pt}function Pt(){this.agent.dirty(),this.getDownstream().dirty()}function Ot(){this.agent&&this.agent.dirty()}function Nt(t){return t.plan?t.plan(t.model,t.ecModel,t.api,t.payload):null}function Rt(t){t.useClearVisual&&t.data.clearAllVisual()
var e=t.resetDefines=(0,u.qB)(t.reset(t.model,t.ecModel,t.api,t.payload))
return e.length>1?(0,o.Tj)(e,(function(t,e){return zt(e)})):Et}var Et=zt(0)
function zt(t){return function(e,n){var i=n.data,r=n.resetDefines[t]
if(r&&r.dataEach)for(var o=e.start;o<e.end;o++)r.dataEach(i,o)
else r&&r.progress&&r.progress(e,i)}}function Bt(t){return t.data.count()}function Vt(t){Ft=null
try{t(Wt,Ht)}catch(t){}return Ft}var Ft,Wt={},Ht={}
function Gt(t,e){for(var n in e.prototype)t[n]=o.lQ}Gt(Wt,T),Gt(Ht,C),Wt.eachSeriesByType=Wt.eachRawSeriesByType=function(t){Ft=t},Wt.eachComponent=function(t){"series"===t.mainType&&t.subType&&(Ft=t.subType)}
const jt=Dt
var Xt=["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"]
const Yt={color:Xt,colorLayer:[["#37A2DA","#ffd85c","#fd7b5f"],["#37A2DA","#67E0E3","#FFDB5C","#ff9f7f","#E062AE","#9d96f5"],["#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#e7bcf3","#8378EA","#96BFFF"],Xt]}
var Ut="#B9B8CE",Zt="#100C2A",$t=function(){return{axisLine:{lineStyle:{color:Ut}},splitLine:{lineStyle:{color:"#484753"}},splitArea:{areaStyle:{color:["rgba(255,255,255,0.02)","rgba(255,255,255,0.05)"]}},minorSplitLine:{lineStyle:{color:"#20203B"}}}},qt=["#4992ff","#7cffb2","#fddd60","#ff6e76","#58d9f9","#05c091","#ff8a45","#8d48e3","#dd79ff"],Kt={darkMode:!0,color:qt,backgroundColor:Zt,axisPointer:{lineStyle:{color:"#817f91"},crossStyle:{color:"#817f91"},label:{color:"#fff"}},legend:{textStyle:{color:Ut}},textStyle:{color:Ut},title:{textStyle:{color:"#EEF1FA"},subtextStyle:{color:"#B9B8CE"}},toolbox:{iconStyle:{borderColor:Ut}},dataZoom:{borderColor:"#71708A",textStyle:{color:Ut},brushStyle:{color:"rgba(135,163,206,0.3)"},handleStyle:{color:"#353450",borderColor:"#C5CBE3"},moveHandleStyle:{color:"#B0B6C3",opacity:.3},fillerColor:"rgba(135,163,206,0.2)",emphasis:{handleStyle:{borderColor:"#91B7F2",color:"#4D587D"},moveHandleStyle:{color:"#636D9A",opacity:.7}},dataBackground:{lineStyle:{color:"#71708A",width:1},areaStyle:{color:"#71708A"}},selectedDataBackground:{lineStyle:{color:"#87A3CE"},areaStyle:{color:"#87A3CE"}}},visualMap:{textStyle:{color:Ut}},timeline:{lineStyle:{color:Ut},label:{color:Ut},controlStyle:{color:Ut,borderColor:Ut}},calendar:{itemStyle:{color:Zt},dayLabel:{color:Ut},monthLabel:{color:Ut},yearLabel:{color:Ut}},timeAxis:$t(),logAxis:$t(),valueAxis:$t(),categoryAxis:$t(),line:{symbol:"circle"},graph:{color:qt},gauge:{title:{color:Ut},axisLine:{lineStyle:{color:[[1,"rgba(207,212,219,0.2)"]]}},axisLabel:{color:Ut},detail:{color:"#EEF1FA"}},candlestick:{itemStyle:{color:"#f64e56",color0:"#54ea92",borderColor:"#f64e56",borderColor0:"#54ea92"}}}
Kt.categoryAxis.splitLine.show=!1
const Qt=Kt
var Jt=n(3078),te=function(){function t(){}return t.prototype.normalizeQuery=function(t){var e={},n={},i={}
if(o.Kg(t)){var r=(0,Jt.CC)(t)
e.mainType=r.main||null,e.subType=r.sub||null}else{var a=["Index","Name","Id"],s={name:1,dataIndex:1,dataType:1}
o.__(t,(function(t,r){for(var o=!1,l=0;l<a.length;l++){var u=a[l],h=r.lastIndexOf(u)
if(h>0&&h===r.length-u.length){var c=r.slice(0,h)
"data"!==c&&(e.mainType=c,e[u.toLowerCase()]=t,o=!0)}}s.hasOwnProperty(r)&&(n[r]=t,o=!0),o||(i[r]=t)}))}return{cptQuery:e,dataQuery:n,otherQuery:i}},t.prototype.filter=function(t,e){var n=this.eventInfo
if(!n)return!0
var i=n.targetEl,r=n.packedEvent,o=n.model,a=n.view
if(!o||!a)return!0
var s=e.cptQuery,l=e.dataQuery
return u(s,o,"mainType")&&u(s,o,"subType")&&u(s,o,"index","componentIndex")&&u(s,o,"name")&&u(s,o,"id")&&u(l,r,"name")&&u(l,r,"dataIndex")&&u(l,r,"dataType")&&(!a.filterForExposedEvent||a.filterForExposedEvent(t,e.otherQuery,i,r))
function u(t,e,n,i){return null==t[n]||e[i||n]===t[n]}},t.prototype.afterTrigger=function(){this.eventInfo=null},t}(),ee=["symbol","symbolSize","symbolRotate","symbolOffset"],ne=ee.concat(["symbolKeepAspect"]),ie={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){var n=t.getData()
if(t.legendIcon&&n.setVisual("legendIcon",t.legendIcon),t.hasSymbolVisual){for(var i={},r={},a=!1,s=0;s<ee.length;s++){var l=ee[s],u=t.get(l);(0,o.Tn)(u)?(a=!0,r[l]=u):i[l]=u}if(i.symbol=i.symbol||t.defaultSymbol,n.setVisual((0,o.X$)({legendIcon:t.legendIcon||i.symbol,symbolKeepAspect:t.get("symbolKeepAspect")},i)),!e.isSeriesFiltered(t)){var h=(0,o.HP)(r)
return{dataEach:a?function(e,n){for(var i=t.getRawValue(n),o=t.getDataParams(n),a=0;a<h.length;a++){var s=h[a]
e.setItemVisual(n,s,r[s](i,o))}}:null}}}}},re={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){if(t.hasSymbolVisual&&!e.isSeriesFiltered(t))return{dataEach:t.getData().hasItemOption?function(t,e){for(var n=t.getItemModel(e),i=0;i<ne.length;i++){var r=ne[i],o=n.getShallow(r,!0)
null!=o&&t.setItemVisual(e,r,o)}}:null}}},oe=n(310),ae=n(5493),se=n(2713),le=n(7411),ue=n(8456),he=n(9128)
const ce=new l.A
var de=n(1854),pe=n(7313),fe=2e3,ge=1e3,ye=2e3,ve=3e3,me=4500,_e={PROCESSOR:{FILTER:1e3,SERIES_FILTER:800,STATISTIC:5e3},VISUAL:{LAYOUT:ge,PROGRESSIVE_LAYOUT:1100,GLOBAL:ye,CHART:ve,POST_CHART_LAYOUT:4600,COMPONENT:4e3,BRUSH:5e3,CHART_ITEM:me,ARIA:6e3,DECAL:7e3}},xe="__flagInMainProcess",be="__pendingUpdate",we="__needsUpdateStatus",Ae=/^[a-zA-Z0-9_]+$/,Se="__connectUpdateStatus"
function Me(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
if(!this.isDisposed())return Ie(this,t,e)
this.id}}function Te(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
return Ie(this,t,e)}}function Ie(t,e,n){return n[0]=n[0]&&n[0].toLowerCase(),l.A.prototype[e].apply(t,n)}var Ce,De,ke,Le,Pe,Oe,Ne,Re,Ee,ze,Be,Ve,Fe,We,He,Ge,je,Xe,Ye=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i.C6)(e,t),e}(l.A),Ue=Ye.prototype
Ue.on=Te("on"),Ue.off=Te("off")
var Ze=function(t){function e(e,n,i){var a=t.call(this,new te)||this
a._chartsViews=[],a._chartsMap={},a._componentsViews=[],a._componentsMap={},a._pendingActions=[],i=i||{},(0,o.Kg)(n)&&(n=nn[n]),a._dom=e,i.ssr&&r.jW((function(t){var e=(0,lt.z)(t),n=e.dataIndex
if(null!=n){var i=(0,o.nt)()
return i.set("series_index",e.seriesIndex),i.set("data_index",n),e.ssrType&&i.set("ssr_type",e.ssrType),i}}))
var l=a._zr=r.Ts(e,{renderer:i.renderer||"canvas",devicePixelRatio:i.devicePixelRatio,width:i.width,height:i.height,ssr:i.ssr,useDirtyRect:(0,o.bZ)(i.useDirtyRect,!1),useCoarsePointer:(0,o.bZ)(i.useCoarsePointer,"auto"),pointerSize:i.pointerSize})
a._ssr=i.ssr,a._throttledZrFlush=(0,ht.nF)((0,o.oI)(l.flush,l),17),(n=(0,o.o8)(n))&&Q(n,!0),a._theme=n,a._locale=(0,le.A$)(i.locale||le.Lv),a._coordSysMgr=new D.A
var u=a._api=He(a)
function h(t,e){return t.__prio-e.__prio}return(0,s.A)(en,h),(0,s.A)(Je,h),a._scheduler=new jt(a,u,Je,en),a._messageCenter=new Ye,a._initEvents(),a.resize=(0,o.oI)(a.resize,a),l.animation.on("frame",a._onframe,a),ze(l,a),Be(l,a),(0,o.En)(a),a}return(0,i.C6)(e,t),e.prototype._onframe=function(){if(!this._disposed){Xe(this)
var t=this._scheduler
if(this[be]){var e=this[be].silent
this[xe]=!0
try{Ce(this),Le.update.call(this,null,this[be].updateParams)}catch(t){throw this[xe]=!1,this[be]=null,t}this._zr.flush(),this[xe]=!1,this[be]=null,Re.call(this,e),Ee.call(this,e)}else if(t.unfinished){var n=1,i=this._model,r=this._api
t.unfinished=!1
do{var o=+new Date
t.performSeriesTasks(i),t.performDataProcessorTasks(i),Oe(this,i),t.performVisualTasks(i),We(this,this._model,r,"remain",{}),n-=+new Date-o}while(n>0&&t.unfinished)
t.unfinished||this._zr.flush()}}},e.prototype.getDom=function(){return this._dom},e.prototype.getId=function(){return this.id},e.prototype.getZr=function(){return this._zr},e.prototype.isSSR=function(){return this._ssr},e.prototype.setOption=function(t,e,n){if(!this[xe])if(this._disposed)this.id
else{var i,r,a
if((0,o.Gv)(e)&&(n=e.lazyUpdate,i=e.silent,r=e.replaceMerge,a=e.transition,e=e.notMerge),this[xe]=!0,!this._model||e){var s=new O(this._api),l=this._theme,u=this._model=new T
u.scheduler=this._scheduler,u.ssr=this._ssr,u.init(null,null,null,l,this._locale,s)}this._model.setOption(t,{replaceMerge:r},tn)
var h={seriesTransition:a,optionChanged:!0}
if(n)this[be]={silent:i,updateParams:h},this[xe]=!1,this.getZr().wakeUp()
else{try{Ce(this),Le.update.call(this,null,h)}catch(t){throw this[be]=null,this[xe]=!1,t}this._ssr||this._zr.flush(),this[be]=null,this[xe]=!1,Re.call(this,i),Ee.call(this,i)}}},e.prototype.setTheme=function(){(0,oe.aT)("ECharts#setTheme() is DEPRECATED in ECharts 3.0")},e.prototype.getModel=function(){return this._model},e.prototype.getOption=function(){return this._model&&this._model.getOption()},e.prototype.getWidth=function(){return this._zr.getWidth()},e.prototype.getHeight=function(){return this._zr.getHeight()},e.prototype.getDevicePixelRatio=function(){return this._zr.painter.dpr||a.A.hasGlobalWindow&&window.devicePixelRatio||1},e.prototype.getRenderedCanvas=function(t){return this.renderToCanvas(t)},e.prototype.renderToCanvas=function(t){return t=t||{},this._zr.painter.getRenderedCanvas({backgroundColor:t.backgroundColor||this._model.get("backgroundColor"),pixelRatio:t.pixelRatio||this.getDevicePixelRatio()})},e.prototype.renderToSVGString=function(t){return t=t||{},this._zr.painter.renderToString({useViewBox:t.useViewBox})},e.prototype.getSvgDataURL=function(){if(a.A.svgSupported){var t=this._zr,e=t.storage.getDisplayList()
return(0,o.__)(e,(function(t){t.stopAnimation(null,!0)})),t.painter.toDataURL()}},e.prototype.getDataURL=function(t){if(!this._disposed){var e=(t=t||{}).excludeComponents,n=this._model,i=[],r=this;(0,o.__)(e,(function(t){n.eachComponent({mainType:t},(function(t){var e=r._componentsMap[t.__viewId]
e.group.ignore||(i.push(e),e.group.ignore=!0)}))}))
var a="svg"===this._zr.painter.getType()?this.getSvgDataURL():this.renderToCanvas(t).toDataURL("image/"+(t&&t.type||"png"))
return(0,o.__)(i,(function(t){t.group.ignore=!1})),a}this.id},e.prototype.getConnectedDataURL=function(t){if(!this._disposed){var e="svg"===t.type,n=this.group,i=Math.min,a=Math.max,s=1/0
if(an[n]){var l=s,u=s,h=-1/0,c=-1/0,d=[],p=t&&t.pixelRatio||this.getDevicePixelRatio();(0,o.__)(on,(function(r,s){if(r.group===n){var p=e?r.getZr().painter.getSvgDom().innerHTML:r.renderToCanvas((0,o.o8)(t)),f=r.getDom().getBoundingClientRect()
l=i(f.left,l),u=i(f.top,u),h=a(f.right,h),c=a(f.bottom,c),d.push({dom:p,left:f.left,top:f.top})}}))
var f=(h*=p)-(l*=p),g=(c*=p)-(u*=p),y=de.yh.createCanvas(),v=r.Ts(y,{renderer:e?"svg":"canvas"})
if(v.resize({width:f,height:g}),e){var m=""
return(0,o.__)(d,(function(t){var e=t.left-l,n=t.top-u
m+='<g transform="translate('+e+","+n+')">'+t.dom+"</g>"})),v.painter.getSvgRoot().innerHTML=m,t.connectedBackgroundColor&&v.painter.setBackgroundColor(t.connectedBackgroundColor),v.refreshImmediately(),v.painter.toDataURL()}return t.connectedBackgroundColor&&v.add(new rt.A({shape:{x:0,y:0,width:f,height:g},style:{fill:t.connectedBackgroundColor}})),(0,o.__)(d,(function(t){var e=new ot.Ay({style:{x:t.left*p-l,y:t.top*p-u,image:t.dom}})
v.add(e)})),v.refreshImmediately(),y.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}this.id},e.prototype.convertToPixel=function(t,e){return Pe(this,"convertToPixel",t,e)},e.prototype.convertFromPixel=function(t,e){return Pe(this,"convertFromPixel",t,e)},e.prototype.containPixel=function(t,e){if(!this._disposed){var n,i=this._model,r=u._e(i,t)
return(0,o.__)(r,(function(t,i){i.indexOf("Models")>=0&&(0,o.__)(t,(function(t){var r=t.coordinateSystem
if(r&&r.containPoint)n=n||!!r.containPoint(e)
else if("seriesModels"===i){var o=this._chartsMap[t.__viewId]
o&&o.containPoint&&(n=n||o.containPoint(e,t))}}),this)}),this),!!n}this.id},e.prototype.getVisual=function(t,e){var n=this._model,i=u._e(n,t,{defaultMainType:"series"}),r=i.seriesModel.getData(),o=i.hasOwnProperty("dataIndexInside")?i.dataIndexInside:i.hasOwnProperty("dataIndex")?r.indexOfRawIndex(i.dataIndex):null
return null!=o?function(t,e,n){switch(n){case"color":return t.getItemVisual(e,"style")[t.getVisual("drawType")]
case"opacity":return t.getItemVisual(e,"style").opacity
case"symbol":case"symbolSize":case"liftZ":return t.getItemVisual(e,n)}}(r,o,e):function(t,e){switch(e){case"color":return t.getVisual("style")[t.getVisual("drawType")]
case"opacity":return t.getVisual("style").opacity
case"symbol":case"symbolSize":case"liftZ":return t.getVisual(e)}}(r,e)},e.prototype.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId]},e.prototype.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId]},e.prototype._initEvents=function(){var t=this;(0,o.__)(qe,(function(e){var n=function(n){var i,r=t.getModel(),a=n.target
if("globalout"===e?i={}:a&&(0,ue.R)(a,(function(t){var e=(0,lt.z)(t)
if(e&&null!=e.dataIndex){var n=e.dataModel||r.getSeriesByIndex(e.seriesIndex)
return i=n&&n.getDataParams(e.dataIndex,e.dataType,a)||{},!0}if(e.eventData)return i=(0,o.X$)({},e.eventData),!0}),!0),i){var s=i.componentType,l=i.componentIndex
"markLine"!==s&&"markPoint"!==s&&"markArea"!==s||(s="series",l=i.seriesIndex)
var u=s&&null!=l&&r.getComponent(s,l),h=u&&t["series"===u.mainType?"_chartsMap":"_componentsMap"][u.__viewId]
i.event=n,i.type=e,t._$eventProcessor.eventInfo={targetEl:a,packedEvent:i,model:u,view:h},t.trigger(e,i)}}
n.zrEventfulCallAtLast=!0,t._zr.on(e,n,t)})),(0,o.__)(Qe,(function(e,n){t._messageCenter.on(n,(function(t){this.trigger(n,t)}),t)})),(0,o.__)(["selectchanged"],(function(e){t._messageCenter.on(e,(function(t){this.trigger(e,t)}),t)})),(0,ae.l)(this._messageCenter,this,this._api)},e.prototype.isDisposed=function(){return this._disposed},e.prototype.clear=function(){this._disposed?this.id:this.setOption({series:[]},!0)},e.prototype.dispose=function(){if(this._disposed)this.id
else{this._disposed=!0,this.getDom()&&u.Bq(this.getDom(),ln,"")
var t=this,e=t._api,n=t._model;(0,o.__)(t._componentsViews,(function(t){t.dispose(n,e)})),(0,o.__)(t._chartsViews,(function(t){t.dispose(n,e)})),t._zr.dispose(),t._dom=t._model=t._chartsMap=t._componentsMap=t._chartsViews=t._componentsViews=t._scheduler=t._api=t._zr=t._throttledZrFlush=t._theme=t._coordSysMgr=t._messageCenter=null,delete on[t.id]}},e.prototype.resize=function(t){if(!this[xe])if(this._disposed)this.id
else{this._zr.resize(t)
var e=this._model
if(this._loadingFX&&this._loadingFX.resize(),e){var n=e.resetOption("media"),i=t&&t.silent
this[be]&&(null==i&&(i=this[be].silent),n=!0,this[be]=null),this[xe]=!0
try{n&&Ce(this),Le.update.call(this,{type:"resize",animation:(0,o.X$)({duration:0},t&&t.animation)})}catch(t){throw this[xe]=!1,t}this[xe]=!1,Re.call(this,i),Ee.call(this,i)}}},e.prototype.showLoading=function(t,e){if(this._disposed)this.id
else if((0,o.Gv)(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),rn[t]){var n=rn[t](this._api,e),i=this._zr
this._loadingFX=n,i.add(n)}},e.prototype.hideLoading=function(){this._disposed?this.id:(this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null)},e.prototype.makeActionFromEvent=function(t){var e=(0,o.X$)({},t)
return e.type=Qe[t.type],e},e.prototype.dispatchAction=function(t,e){if(this._disposed)this.id
else if((0,o.Gv)(e)||(e={silent:!!e}),Ke[t.type]&&this._model)if(this[xe])this._pendingActions.push(t)
else{var n=e.silent
Ne.call(this,t,n)
var i=e.flush
i?this._zr.flush():!1!==i&&a.A.browser.weChat&&this._throttledZrFlush(),Re.call(this,n),Ee.call(this,n)}},e.prototype.updateLabelLayout=function(){ce.trigger("series:layoutlabels",this._model,this._api,{updatedSeries:[]})},e.prototype.appendData=function(t){if(this._disposed)this.id
else{var e=t.seriesIndex
this.getModel().getSeriesByIndex(e).appendData(t),this._scheduler.unfinished=!0,this.getZr().wakeUp()}},e.internalField=function(){function t(t){t.clearColorPalette(),t.eachSeries((function(t){t.clearColorPalette()}))}function e(t){for(var e=[],n=t.currentStates,i=0;i<n.length;i++){var r=n[i]
"emphasis"!==r&&"blur"!==r&&"select"!==r&&e.push(r)}t.selected&&t.states.select&&e.push("select"),t.hoverState===ut.e3&&t.states.emphasis?e.push("emphasis"):t.hoverState===ut.zX&&t.states.blur&&e.push("blur"),t.useStates(e)}function n(t,e){if(!t.preventAutoZ){var n=t.get("z")||0,i=t.get("zlevel")||0
e.eachRendered((function(t){return r(t,n,i,-1/0),!0}))}}function r(t,e,n,i){var o=t.getTextContent(),a=t.getTextGuideLine()
if(t.isGroup)for(var s=t.childrenRef(),l=0;l<s.length;l++)i=Math.max(r(s[l],e,n,i),i)
else t.z=e,t.zlevel=n,i=Math.max(t.z2,i)
if(o&&(o.z=e,o.zlevel=n,isFinite(i)&&(o.z2=i+2)),a){var u=t.textGuideLineConfig
a.z=e,a.zlevel=n,isFinite(i)&&(a.z2=i+(u&&u.showAbove?1:-1))}return i}function l(t,e){e.eachRendered((function(t){if(!at.LR(t)){var e=t.getTextContent(),n=t.getTextGuideLine()
t.stateTransition&&(t.stateTransition=null),e&&e.stateTransition&&(e.stateTransition=null),n&&n.stateTransition&&(n.stateTransition=null),t.hasState()?(t.prevStates=t.currentStates,t.clearStates()):t.prevStates&&(t.prevStates=null)}}))}function h(t,n){var i=t.getModel("stateAnimation"),r=t.isAnimationEnabled(),o=i.get("duration"),a=o>0?{duration:o,delay:i.get("delay"),easing:i.get("easing")}:null
n.eachRendered((function(t){if(t.states&&t.states.emphasis){if(at.LR(t))return
if(t instanceof st.Ay&&(0,ut.fz)(t),t.__dirty){var n=t.prevStates
n&&t.useStates(n)}if(r){t.stateTransition=a
var i=t.getTextContent(),o=t.getTextGuideLine()
i&&(i.stateTransition=a),o&&(o.stateTransition=a)}t.__dirty&&e(t)}}))}Ce=function(t){var e=t._scheduler
e.restorePipelines(t._model),e.prepareStageTasks(),De(t,!0),De(t,!1),e.plan()},De=function(t,e){for(var n=t._model,i=t._scheduler,r=e?t._componentsViews:t._chartsViews,o=e?t._componentsMap:t._chartsMap,a=t._zr,s=t._api,l=0;l<r.length;l++)r[l].__alive=!1
function u(t){var l=t.__requireNewView
t.__requireNewView=!1
var u="_ec_"+t.id+"_"+t.type,h=!l&&o[u]
if(!h){var c=(0,Jt.CC)(t.type);(h=new(e?nt.A.getClass(c.main,c.sub):it.A.getClass(c.sub))).init(n,s),o[u]=h,r.push(h),a.add(h.group)}t.__viewId=h.__id=u,h.__alive=!0,h.__model=t,h.group.__ecComponentInfo={mainType:t.mainType,index:t.componentIndex},!e&&i.prepareView(h,t,n,s)}for(e?n.eachComponent((function(t,e){"series"!==t&&u(e)})):n.eachSeries(u),l=0;l<r.length;){var h=r[l]
h.__alive?l++:(!e&&h.renderTask.dispose(),a.remove(h.group),h.dispose(n,s),r.splice(l,1),o[h.__id]===h&&delete o[h.__id],h.__id=h.group.__ecComponentInfo=null)}},ke=function(t,e,n,i,r){var a=t._model
if(a.setUpdatePayload(n),i){var s={}
s[i+"Id"]=n[i+"Id"],s[i+"Index"]=n[i+"Index"],s[i+"Name"]=n[i+"Name"]
var l={mainType:i,query:s}
r&&(l.subType=r)
var h,c=n.excludeSeriesId
null!=c&&(h=(0,o.nt)(),(0,o.__)(u.qB(c),(function(t){var e=u.vS(t,null)
null!=e&&h.set(e,!0)}))),a&&a.eachComponent(l,(function(e){if(!h||null==h.get(e.id))if((0,ut.T$)(n))if(e instanceof et.A)n.type!==ut.h5||n.notBlur||e.get(["emphasis","disabled"])||(0,ut.lV)(e,n,t._api)
else{var i=(0,ut.Tl)(e.mainType,e.componentIndex,n.name,t._api),r=i.focusSelf,a=i.dispatchers
n.type===ut.h5&&r&&!n.notBlur&&(0,ut.Du)(e.mainType,e.componentIndex,t._api),a&&(0,o.__)(a,(function(t){n.type===ut.h5?(0,ut.HY)(t):(0,ut.SD)(t)}))}else(0,ut.Lx)(n)&&e instanceof et.A&&((0,ut.t6)(e,n,t._api),(0,ut.jA)(e),je(t))}),t),a&&a.eachComponent(l,(function(e){h&&null!=h.get(e.id)||d(t["series"===i?"_chartsMap":"_componentsMap"][e.__viewId])}),t)}else(0,o.__)([].concat(t._componentsViews).concat(t._chartsViews),d)
function d(i){i&&i.__alive&&i[e]&&i[e](i.__model,a,t._api,n)}},Le={prepareAndUpdate:function(t){Ce(this),Le.update.call(this,t,{optionChanged:null!=t.newOption})},update:function(e,n){var i=this._model,r=this._api,o=this._zr,a=this._coordSysMgr,s=this._scheduler
if(i){i.setUpdatePayload(e),s.restoreData(i,e),s.performSeriesTasks(i),a.create(i,r),s.performDataProcessorTasks(i,e),Oe(this,i),a.update(i,r),t(i),s.performVisualTasks(i,e),Ve(this,i,r,e,n)
var l=i.get("backgroundColor")||"transparent",u=i.get("darkMode")
o.setBackgroundColor(l),null!=u&&"auto"!==u&&o.setDarkMode(u),ce.trigger("afterupdate",i,r)}},updateTransform:function(e){var n=this,i=this._model,r=this._api
if(i){i.setUpdatePayload(e)
var a=[]
i.eachComponent((function(t,o){if("series"!==t){var s=n.getViewOfComponentModel(o)
if(s&&s.__alive)if(s.updateTransform){var l=s.updateTransform(o,i,r,e)
l&&l.update&&a.push(s)}else a.push(s)}}))
var s=(0,o.nt)()
i.eachSeries((function(t){var o=n._chartsMap[t.__viewId]
if(o.updateTransform){var a=o.updateTransform(t,i,r,e)
a&&a.update&&s.set(t.uid,1)}else s.set(t.uid,1)})),t(i),this._scheduler.performVisualTasks(i,e,{setDirty:!0,dirtyMap:s}),We(this,i,r,e,{},s),ce.trigger("afterupdate",i,r)}},updateView:function(e){var n=this._model
n&&(n.setUpdatePayload(e),it.A.markUpdateMethod(e,"updateView"),t(n),this._scheduler.performVisualTasks(n,e,{setDirty:!0}),Ve(this,n,this._api,e,{}),ce.trigger("afterupdate",n,this._api))},updateVisual:function(e){var n=this,i=this._model
i&&(i.setUpdatePayload(e),i.eachSeries((function(t){t.getData().clearAllVisual()})),it.A.markUpdateMethod(e,"updateVisual"),t(i),this._scheduler.performVisualTasks(i,e,{visualType:"visual",setDirty:!0}),i.eachComponent((function(t,r){if("series"!==t){var o=n.getViewOfComponentModel(r)
o&&o.__alive&&o.updateVisual(r,i,n._api,e)}})),i.eachSeries((function(t){n._chartsMap[t.__viewId].updateVisual(t,i,n._api,e)})),ce.trigger("afterupdate",i,this._api))},updateLayout:function(t){Le.update.call(this,t)}},Pe=function(t,e,n,i){if(t._disposed)t.id
else for(var r,o=t._model,a=t._coordSysMgr.getCoordinateSystems(),s=u._e(o,n),l=0;l<a.length;l++){var h=a[l]
if(h[e]&&null!=(r=h[e](o,s,i)))return r}},Oe=function(t,e){var n=t._chartsMap,i=t._scheduler
e.eachSeries((function(t){i.updateStreamModes(t,n[t.__viewId])}))},Ne=function(t,e){var n=this,i=this.getModel(),r=t.type,a=t.escapeConnect,s=Ke[r],l=s.actionInfo,h=(l.update||"update").split(":"),c=h.pop(),d=null!=h[0]&&(0,Jt.CC)(h[0])
this[xe]=!0
var p=[t],f=!1
t.batch&&(f=!0,p=(0,o.Tj)(t.batch,(function(e){return(e=(0,o.NT)((0,o.X$)({},e),t)).batch=null,e})))
var g,y=[],v=(0,ut.Lx)(t),m=(0,ut.T$)(t)
if(m&&(0,ut.qR)(this._api),(0,o.__)(p,(function(e){if((g=(g=s.action(e,n._model,n._api))||(0,o.X$)({},e)).type=l.event||g.type,y.push(g),m){var i=u.HB(t),r=i.queryOptionMap,a=i.mainTypeSpecified?r.keys()[0]:"series"
ke(n,c,e,a),je(n)}else v?(ke(n,c,e,"series"),je(n)):d&&ke(n,c,e,d.main,d.sub)})),"none"!==c&&!m&&!v&&!d)try{this[be]?(Ce(this),Le.update.call(this,t),this[be]=null):Le[c].call(this,t)}catch(t){throw this[xe]=!1,t}if(g=f?{type:l.event||r,escapeConnect:a,batch:y}:y[0],this[xe]=!1,!e){var _=this._messageCenter
if(_.trigger(g.type,g),v){var x={type:"selectchanged",escapeConnect:a,selected:(0,ut.mc)(i),isFromClick:t.isFromClick||!1,fromAction:t.type,fromActionPayload:t}
_.trigger(x.type,x)}}},Re=function(t){for(var e=this._pendingActions;e.length;){var n=e.shift()
Ne.call(this,n,t)}},Ee=function(t){!t&&this.trigger("updated")},ze=function(t,e){t.on("rendered",(function(n){e.trigger("rendered",n),!t.animation.isFinished()||e[be]||e._scheduler.unfinished||e._pendingActions.length||e.trigger("finished")}))},Be=function(t,e){t.on("mouseover",(function(t){var n=t.target,i=(0,ue.R)(n,ut.u6)
i&&((0,ut._m)(i,t,e._api),je(e))})).on("mouseout",(function(t){var n=t.target,i=(0,ue.R)(n,ut.u6)
i&&((0,ut.Iz)(i,t,e._api),je(e))})).on("click",(function(t){var n=t.target,i=(0,ue.R)(n,(function(t){return null!=(0,lt.z)(t).dataIndex}),!0)
if(i){var r=i.selected?"unselect":"select",o=(0,lt.z)(i)
e._api.dispatchAction({type:r,dataType:o.dataType,dataIndexInside:o.dataIndex,seriesIndex:o.seriesIndex,isFromClick:!0})}}))},Ve=function(t,e,n,i,r){!function(t){var e=[],n=[],i=!1
if(t.eachComponent((function(t,r){var o=r.get("zlevel")||0,a=r.get("z")||0,s=r.getZLevelKey()
i=i||!!s,("series"===t?n:e).push({zlevel:o,z:a,idx:r.componentIndex,type:t,key:s})})),i){var r,a,l=e.concat(n);(0,s.A)(l,(function(t,e){return t.zlevel===e.zlevel?t.z-e.z:t.zlevel-e.zlevel})),(0,o.__)(l,(function(e){var n=t.getComponent(e.type,e.idx),i=e.zlevel,o=e.key
null!=r&&(i=Math.max(r,i)),o?(i===r&&o!==a&&i++,a=o):a&&(i===r&&i++,a=""),r=i,n.setZLevel(i)}))}}(e),Fe(t,e,n,i,r),(0,o.__)(t._chartsViews,(function(t){t.__alive=!1})),We(t,e,n,i,r),(0,o.__)(t._chartsViews,(function(t){t.__alive||t.remove(e,n)}))},Fe=function(t,e,i,r,a,s){(0,o.__)(s||t._componentsViews,(function(t){var o=t.__model
l(0,t),t.render(o,e,i,r),n(o,t),h(o,t)}))},We=function(t,e,i,r,s,u){var c=t._scheduler
s=(0,o.X$)(s||{},{updatedSeries:e.getSeries()}),ce.trigger("series:beforeupdate",e,i,s)
var d=!1
e.eachSeries((function(e){var n=t._chartsMap[e.__viewId]
n.__alive=!0
var i=n.renderTask
c.updatePayload(i,r),l(0,n),u&&u.get(e.uid)&&i.dirty(),i.perform(c.getPerformArgs(i))&&(d=!0),n.group.silent=!!e.get("silent"),function(t,e){var n=t.get("blendMode")||null
e.eachRendered((function(t){t.isGroup||(t.style.blend=n)}))}(e,n),(0,ut.jA)(e)})),c.unfinished=d||c.unfinished,ce.trigger("series:layoutlabels",e,i,s),ce.trigger("series:transition",e,i,s),e.eachSeries((function(e){var i=t._chartsMap[e.__viewId]
n(e,i),h(e,i)})),function(t,e){var n=t._zr.storage,i=0
n.traverse((function(t){t.isGroup||i++})),i>e.get("hoverLayerThreshold")&&!a.A.node&&!a.A.worker&&e.eachSeries((function(e){if(!e.preventUsingHoverLayer){var n=t._chartsMap[e.__viewId]
n.__alive&&n.eachRendered((function(t){t.states.emphasis&&(t.states.emphasis.hoverLayer=!0)}))}}))}(t,e),ce.trigger("series:afterupdate",e,i,s)},je=function(t){t[we]=!0,t.getZr().wakeUp()},Xe=function(t){t[we]&&(t.getZr().storage.traverse((function(t){at.LR(t)||e(t)})),t[we]=!1)},He=function(t){return new(function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return(0,i.C6)(n,e),n.prototype.getCoordinateSystems=function(){return t._coordSysMgr.getCoordinateSystems()},n.prototype.getComponentByElement=function(e){for(;e;){var n=e.__ecComponentInfo
if(null!=n)return t._model.getComponent(n.mainType,n.index)
e=e.parent}},n.prototype.enterEmphasis=function(e,n){(0,ut.HY)(e,n),je(t)},n.prototype.leaveEmphasis=function(e,n){(0,ut.SD)(e,n),je(t)},n.prototype.enterBlur=function(e){(0,ut.QX)(e),je(t)},n.prototype.leaveBlur=function(e){(0,ut.JC)(e),je(t)},n.prototype.enterSelect=function(e){(0,ut.JI)(e),je(t)},n.prototype.leaveSelect=function(e){(0,ut.gd)(e),je(t)},n.prototype.getModel=function(){return t.getModel()},n.prototype.getViewOfComponentModel=function(e){return t.getViewOfComponentModel(e)},n.prototype.getViewOfSeriesModel=function(e){return t.getViewOfSeriesModel(e)},n}(C))(t)},Ge=function(t){function e(t,e){for(var n=0;n<t.length;n++)t[n][Se]=e}(0,o.__)(Qe,(function(n,i){t._messageCenter.on(i,(function(n){if(an[t.group]&&0!==t[Se]){if(n&&n.escapeConnect)return
var i=t.makeActionFromEvent(n),r=[];(0,o.__)(on,(function(e){e!==t&&e.group===t.group&&r.push(e)})),e(r,0),(0,o.__)(r,(function(t){1!==t[Se]&&t.dispatchAction(i)})),e(r,2)}}))}))}}(),e}(l.A),$e=Ze.prototype
$e.on=Me("on"),$e.off=Me("off"),$e.one=function(t,e,n){var i=this;(0,oe.aT)("ECharts#one is deprecated."),this.on.call(this,t,(function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
e&&e.apply&&e.apply(this,r),i.off(t,n)}),n)}
var qe=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"]
var Ke={},Qe={},Je=[],tn=[],en=[],nn={},rn={},on={},an={},sn=+new Date-0,ln=(new Date,"_echarts_instance_")
function un(t,e,n){var i=!(n&&n.ssr)
if(i){var r=function(t){return on[u.D$(t,ln)]}(t)
if(r)return r}var o=new Ze(t,e,n)
return o.id="ec_"+sn++,on[o.id]=o,i&&u.Bq(t,ln,o.id),Ge(o),ce.trigger("afterinit",o),o}function hn(t,e){nn[t]=e}function cn(t){(0,o.qh)(tn,t)<0&&tn.push(t)}function dn(t,e){bn(Je,t,e,fe)}function pn(t){gn("afterinit",t)}function fn(t){gn("afterupdate",t)}function gn(t,e){ce.on(t,e)}function yn(t,e,n){(0,o.Tn)(e)&&(n=e,e="")
var i=(0,o.Gv)(t)?t.type:[t,t={event:e}][0]
t.event=(t.event||i).toLowerCase(),e=t.event,Qe[e]||((0,o.vA)(Ae.test(i)&&Ae.test(e)),Ke[i]||(Ke[i]={action:n,actionInfo:t}),Qe[e]=i)}function vn(t,e){D.A.register(t,e)}function mn(t,e){bn(en,t,e,ge,"layout")}function _n(t,e){bn(en,t,e,ve,"visual")}var xn=[]
function bn(t,e,n,i,r){if(((0,o.Tn)(e)||(0,o.Gv)(e))&&(n=e,e=i),!((0,o.qh)(xn,n)>=0)){xn.push(n)
var a=jt.wrapStageHandler(n,r)
a.__prio=e,a.__raw=n,t.push(a)}}function wn(t,e){rn[t]=e}function An(t,e,n){var i=(0,pe.v)("registerMap")
i&&i(t,e,n)}var Sn=se.v5
_n(ye,_t),_n(me,bt),_n(me,wt),_n(ye,ie),_n(me,re),_n(7e3,(function(t,e){t.eachRawSeries((function(n){if(!t.isSeriesFiltered(n)){var i=n.getData()
i.hasItemVisual()&&i.each((function(t){var n=i.getItemVisual(t,"decal")
n&&(i.ensureUniqueItemVisual(t,"style").decal=(0,he.w)(n,e))}))
var r=i.getVisual("decal")
r&&(i.getVisual("style").decal=(0,he.w)(r,e))}}))})),cn(Q),dn(900,(function(t){var e=(0,o.nt)()
t.eachSeries((function(t){var n=t.get("stack")
if(n){var i=e.get(n)||e.set(n,[]),r=t.getData(),o={stackResultDimension:r.getCalculationInfo("stackResultDimension"),stackedOverDimension:r.getCalculationInfo("stackedOverDimension"),stackedDimension:r.getCalculationInfo("stackedDimension"),stackedByDimension:r.getCalculationInfo("stackedByDimension"),isStackedByIndex:r.getCalculationInfo("isStackedByIndex"),data:r,seriesModel:t}
if(!o.stackedDimension||!o.isStackedByIndex&&!o.stackedByDimension)return
i.length&&r.setCalculationInfo("stackedOnSeries",i[i.length-1].seriesModel),i.push(o)}})),e.each(tt)})),wn("default",(function(t,e){e=e||{},o.NT(e,{text:"loading",textColor:"#000",fontSize:12,fontWeight:"normal",fontStyle:"normal",fontFamily:"sans-serif",maskColor:"rgba(255, 255, 255, 0.8)",showSpinner:!0,color:"#5470c6",spinnerRadius:10,lineWidth:5,zlevel:0})
var n=new At.A,i=new rt.A({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4})
n.add(i)
var r,a=new St.Ay({style:{text:e.text,fill:e.textColor,fontSize:e.fontSize,fontWeight:e.fontWeight,fontStyle:e.fontStyle,fontFamily:e.fontFamily},zlevel:e.zlevel,z:10001}),s=new rt.A({style:{fill:"none"},textContent:a,textConfig:{position:"right",distance:10},zlevel:e.zlevel,z:10001})
return n.add(s),e.showSpinner&&((r=new Mt.A({shape:{startAngle:-Tt/2,endAngle:-Tt/2+.1,r:e.spinnerRadius},style:{stroke:e.color,lineCap:"round",lineWidth:e.lineWidth},zlevel:e.zlevel,z:10001})).animateShape(!0).when(1e3,{endAngle:3*Tt/2}).start("circularInOut"),r.animateShape(!0).when(1e3,{startAngle:3*Tt/2}).delay(300).start("circularInOut"),n.add(r)),n.resize=function(){var n=a.getBoundingRect().width,o=e.showSpinner?e.spinnerRadius:0,l=(t.getWidth()-2*o-(e.showSpinner&&n?10:0)-n)/2-(e.showSpinner&&n?0:5+n/2)+(e.showSpinner?0:n/2)+(n?0:o),u=t.getHeight()/2
e.showSpinner&&r.setShape({cx:l,cy:u}),s.setShape({x:l-o,y:u-o,width:2*o,height:2*o}),i.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()})},n.resize(),n})),yn({type:ut.h5,event:ut.h5,update:ut.h5},o.lQ),yn({type:ut.PW,event:ut.PW,update:ut.PW},o.lQ),yn({type:ut.Lv,event:ut.Lv,update:ut.Lv},o.lQ),yn({type:ut.U2,event:ut.U2,update:ut.U2},o.lQ),yn({type:ut.Q6,event:ut.Q6,update:ut.Q6},o.lQ),hn("light",Yt),hn("dark",Qt)},7313:(t,e,n)=>{n.d(e,{m:()=>r,v:()=>o})
var i={}
function r(t,e){i[t]=e}function o(t){return i[t]}},7411:(t,e,n)=>{n.d(e,{Lv:()=>c,A$:()=>p,pr:()=>g,A4:()=>f})
var i=n(7413),r=n(9714),o=n(8301),a="ZH",s="EN",l=s,u={},h={},c=r.A.domSupported&&(document.documentElement.lang||navigator.language||navigator.browserLanguage||l).toUpperCase().indexOf(a)>-1?a:l
function d(t,e){t=t.toUpperCase(),h[t]=new i.A(e),u[t]=e}function p(t){if((0,o.Kg)(t)){var e=u[t.toUpperCase()]||{}
return t===a||t===s?(0,o.o8)(e):(0,o.h1)((0,o.o8)(e),(0,o.o8)(u[l]),!1)}return(0,o.h1)((0,o.o8)(t),(0,o.o8)(u[l]),!1)}function f(t){return h[t]}function g(){return h[l]}d(s,{time:{month:["January","February","March","April","May","June","July","August","September","October","November","December"],monthAbbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayOfWeekAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},legend:{selector:{all:"All",inverse:"Inv"}},toolbox:{brush:{title:{rect:"Box Select",polygon:"Lasso Select",lineX:"Horizontally Select",lineY:"Vertically Select",keep:"Keep Selections",clear:"Clear Selections"}},dataView:{title:"Data View",lang:["Data View","Close","Refresh"]},dataZoom:{title:{zoom:"Zoom",back:"Zoom Reset"}},magicType:{title:{line:"Switch to Line Chart",bar:"Switch to Bar Chart",stack:"Stack",tiled:"Tile"}},restore:{title:"Restore"},saveAsImage:{title:"Save as Image",lang:["Right Click to Save Image"]}},series:{typeNames:{pie:"Pie chart",bar:"Bar chart",line:"Line chart",scatter:"Scatter plot",effectScatter:"Ripple scatter plot",radar:"Radar chart",tree:"Tree",treemap:"Treemap",boxplot:"Boxplot",candlestick:"Candlestick",k:"K line chart",heatmap:"Heat map",map:"Map",parallel:"Parallel coordinate map",lines:"Line graph",graph:"Relationship graph",sankey:"Sankey diagram",funnel:"Funnel chart",gauge:"Gauge",pictorialBar:"Pictorial bar",themeRiver:"Theme River Map",sunburst:"Sunburst",custom:"Custom chart",chart:"Chart"}},aria:{general:{withTitle:'This is a chart about "{title}"',withoutTitle:"This is a chart"},series:{single:{prefix:"",withName:" with type {seriesType} named {seriesName}.",withoutName:" with type {seriesType}."},multiple:{prefix:". It consists of {seriesCount} series count.",withName:" The {seriesId} series is a {seriesType} representing {seriesName}.",withoutName:" The {seriesId} series is a {seriesType}.",separator:{middle:"",end:""}}},data:{allData:"The data is as follows: ",partialData:"The first {displayCnt} items are: ",withName:"the data for {name} is {value}",withoutName:"{value}",separator:{middle:", ",end:". "}}}}),d(a,{time:{month:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthAbbr:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dayOfWeek:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayOfWeekAbbr:["日","一","二","三","四","五","六"]},legend:{selector:{all:"全选",inverse:"反选"}},toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}},series:{typeNames:{pie:"饼图",bar:"柱状图",line:"折线图",scatter:"散点图",effectScatter:"涟漪散点图",radar:"雷达图",tree:"树图",treemap:"矩形树图",boxplot:"箱型图",candlestick:"K线图",k:"K线图",heatmap:"热力图",map:"地图",parallel:"平行坐标图",lines:"线图",graph:"关系图",sankey:"桑基图",funnel:"漏斗图",gauge:"仪表盘图",pictorialBar:"象形柱图",themeRiver:"主题河流图",sunburst:"旭日图",custom:"自定义图表",chart:"图表"}},aria:{general:{withTitle:"这是一个关于“{title}”的图表。",withoutTitle:"这是一个图表，"},series:{single:{prefix:"",withName:"图表类型是{seriesType}，表示{seriesName}。",withoutName:"图表类型是{seriesType}。"},multiple:{prefix:"它由{seriesCount}个图表系列组成。",withName:"第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",withoutName:"第{seriesId}个系列是一个{seriesType}，",separator:{middle:"；",end:"。"}}},data:{allData:"其数据是——",partialData:"其中，前{displayCnt}项是——",withName:"{name}的数据是{value}",withoutName:"{value}",separator:{middle:"，",end:""}}}})},3046:(t,e,n)=>{n.d(e,{U:()=>r})
var i=n(8301)
function r(t){return new o(t)}var o=function(){function t(t){t=t||{},this._reset=t.reset,this._plan=t.plan,this._count=t.count,this._onDirty=t.onDirty,this._dirty=!0}return t.prototype.perform=function(t){var e,n=this._upstream,r=t&&t.skip
if(this._dirty&&n){var o=this.context
o.data=o.outputData=n.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this),this._plan&&!r&&(e=this._plan(this.context))
var a,s=c(this._modBy),l=this._modDataCount||0,u=c(t&&t.modBy),h=t&&t.modDataCount||0
function c(t){return!(t>=1)&&(t=1),t}s===u&&l===h||(e="reset"),(this._dirty||"reset"===e)&&(this._dirty=!1,a=this._doReset(r)),this._modBy=u,this._modDataCount=h
var d=t&&t.step
if(this._dueEnd=n?n._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var p=this._dueIndex,f=Math.min(null!=d?this._dueIndex+d:1/0,this._dueEnd)
if(!r&&(a||p<f)){var g=this._progress
if((0,i.cy)(g))for(var y=0;y<g.length;y++)this._doProgress(g[y],p,f,u,h)
else this._doProgress(g,p,f,u,h)}this._dueIndex=f
var v=null!=this._settedOutputEnd?this._settedOutputEnd:f
this._outputDueEnd=v}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd
return this.unfinished()},t.prototype.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},t.prototype._doProgress=function(t,e,n,i,r){a.reset(e,n,i,r),this._callingProgress=t,this._callingProgress({start:e,end:n,count:n-e,next:a.next},this.context)},t.prototype._doReset=function(t){var e,n
this._dueIndex=this._outputDueEnd=this._dueEnd=0,this._settedOutputEnd=null,!t&&this._reset&&((e=this._reset(this.context))&&e.progress&&(n=e.forceFirstProgress,e=e.progress),(0,i.cy)(e)&&!e.length&&(e=null)),this._progress=e,this._modBy=this._modDataCount=null
var r=this._downstream
return r&&r.dirty(),n},t.prototype.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},t.prototype.pipe=function(t){(this._downstream!==t||this._dirty)&&(this._downstream=t,t._upstream=this,t.dirty())},t.prototype.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},t.prototype.getUpstream=function(){return this._upstream},t.prototype.getDownstream=function(){return this._downstream},t.prototype.setOutputEnd=function(t){this._outputDueEnd=this._settedOutputEnd=t},t}(),a=function(){var t,e,n,i,r,o={reset:function(l,u,h,c){e=l,t=u,n=h,i=c,r=Math.ceil(i/n),o.next=n>1&&i>0?s:a}}
return o
function a(){return e<t?e++:null}function s(){var o=e%r*n+Math.ceil(e/r),a=e>=t?null:o<i?o:e
return e++,a}}()},8337:(t,e,n)=>{n.d(e,{A_:()=>h,Ay:()=>g})
var i,r=n(8301),o=n(9784),a=n(9879),s="undefined",l=typeof Uint32Array===s?Array:Uint32Array,u=typeof Uint16Array===s?Array:Uint16Array,h=typeof Int32Array===s?Array:Int32Array,c=typeof Float64Array===s?Array:Float64Array,d={float:c,int:h,ordinal:Array,number:Array,time:c}
function p(t){return t>65535?l:u}function f(t,e,n,i,r){var o=d[n||"float"]
if(r){var a=t[e],s=a&&a.length
if(s!==i){for(var l=new o(i),u=0;u<s;u++)l[u]=a[u]
t[e]=l}}else t[e]=new o(i)}const g=function(){function t(){this._chunks=[],this._rawExtent=[],this._extent=[],this._count=0,this._rawCount=0,this._calcDimNameToIdx=(0,r.nt)()}return t.prototype.initData=function(t,e,n){this._provider=t,this._chunks=[],this._indices=null,this.getRawIndex=this._getRawIdxIdentity
var o=t.getSource(),s=this.defaultDimValueGetter=i[o.sourceFormat]
this._dimValueGetter=n||s,this._rawExtent=[],(0,a.O0)(o),this._dimensions=(0,r.Tj)(e,(function(t){return{type:t.type,property:t.property}})),this._initDataFromProvider(0,t.count())},t.prototype.getProvider=function(){return this._provider},t.prototype.getSource=function(){return this._provider.getSource()},t.prototype.ensureCalculationDimension=function(t,e){var n=this._calcDimNameToIdx,i=this._dimensions,r=n.get(t)
if(null!=r){if(i[r].type===e)return r}else r=i.length
return i[r]={type:e},n.set(t,r),this._chunks[r]=new d[e||"float"](this._rawCount),this._rawExtent[r]=[1/0,-1/0],r},t.prototype.collectOrdinalMeta=function(t,e){var n=this._chunks[t],i=this._dimensions[t],r=this._rawExtent,o=i.ordinalOffset||0,a=n.length
0===o&&(r[t]=[1/0,-1/0])
for(var s=r[t],l=o;l<a;l++){var u=n[l]=e.parseAndCollect(n[l])
isNaN(u)||(s[0]=Math.min(u,s[0]),s[1]=Math.max(u,s[1]))}i.ordinalMeta=e,i.ordinalOffset=a,i.type="ordinal"},t.prototype.getOrdinalMeta=function(t){return this._dimensions[t].ordinalMeta},t.prototype.getDimensionProperty=function(t){var e=this._dimensions[t]
return e&&e.property},t.prototype.appendData=function(t){var e=this._provider,n=this.count()
e.appendData(t)
var i=e.count()
return e.persistent||(i+=n),n<i&&this._initDataFromProvider(n,i,!0),[n,i]},t.prototype.appendValues=function(t,e){for(var n=this._chunks,r=this._dimensions,o=r.length,a=this._rawExtent,s=this.count(),l=s+Math.max(t.length,e||0),u=0;u<o;u++)f(n,u,(g=r[u]).type,l,!0)
for(var h=[],c=s;c<l;c++)for(var d=c-s,p=0;p<o;p++){var g=r[p],y=i.arrayRows.call(this,t[d]||h,g.property,d,p)
n[p][c]=y
var v=a[p]
y<v[0]&&(v[0]=y),y>v[1]&&(v[1]=y)}return this._rawCount=this._count=l,{start:s,end:l}},t.prototype._initDataFromProvider=function(t,e,n){for(var i=this._provider,o=this._chunks,a=this._dimensions,s=a.length,l=this._rawExtent,u=(0,r.Tj)(a,(function(t){return t.property})),h=0;h<s;h++){var c=a[h]
l[h]||(l[h]=[1/0,-1/0]),f(o,h,c.type,e,n)}if(i.fillStorage)i.fillStorage(t,e,o,l)
else for(var d=[],p=t;p<e;p++){d=i.getItem(p,d)
for(var g=0;g<s;g++){var y=o[g],v=this._dimValueGetter(d,u[g],p,g)
y[p]=v
var m=l[g]
v<m[0]&&(m[0]=v),v>m[1]&&(m[1]=v)}}!i.persistent&&i.clean&&i.clean(),this._rawCount=this._count=e,this._extent=[]},t.prototype.count=function(){return this._count},t.prototype.get=function(t,e){if(!(e>=0&&e<this._count))return NaN
var n=this._chunks[t]
return n?n[this.getRawIndex(e)]:NaN},t.prototype.getValues=function(t,e){var n=[],i=[]
if(null==e){e=t,t=[]
for(var r=0;r<this._dimensions.length;r++)i.push(r)}else i=t
r=0
for(var o=i.length;r<o;r++)n.push(this.get(i[r],e))
return n},t.prototype.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN
var n=this._chunks[t]
return n?n[e]:NaN},t.prototype.getSum=function(t){var e=0
if(this._chunks[t])for(var n=0,i=this.count();n<i;n++){var r=this.get(t,n)
isNaN(r)||(e+=r)}return e},t.prototype.getMedian=function(t){var e=[]
this.each([t],(function(t){isNaN(t)||e.push(t)}))
var n=e.sort((function(t,e){return t-e})),i=this.count()
return 0===i?0:i%2==1?n[(i-1)/2]:(n[i/2]+n[i/2-1])/2},t.prototype.indexOfRawIndex=function(t){if(t>=this._rawCount||t<0)return-1
if(!this._indices)return t
var e=this._indices,n=e[t]
if(null!=n&&n<this._count&&n===t)return t
for(var i=0,r=this._count-1;i<=r;){var o=(i+r)/2|0
if(e[o]<t)i=o+1
else{if(!(e[o]>t))return o
r=o-1}}return-1},t.prototype.indicesOfNearest=function(t,e,n){var i=this._chunks[t],r=[]
if(!i)return r
null==n&&(n=1/0)
for(var o=1/0,a=-1,s=0,l=0,u=this.count();l<u;l++){var h=e-i[this.getRawIndex(l)],c=Math.abs(h)
c<=n&&((c<o||c===o&&h>=0&&a<0)&&(o=c,a=h,s=0),h===a&&(r[s++]=l))}return r.length=s,r},t.prototype.getIndices=function(){var t,e=this._indices
if(e){var n=e.constructor,i=this._count
if(n===Array){t=new n(i)
for(var r=0;r<i;r++)t[r]=e[r]}else t=new n(e.buffer,0,i)}else for(t=new(n=p(this._rawCount))(this.count()),r=0;r<t.length;r++)t[r]=r
return t},t.prototype.filter=function(t,e){if(!this._count)return this
for(var n=this.clone(),i=n.count(),r=new(p(n._rawCount))(i),o=[],a=t.length,s=0,l=t[0],u=n._chunks,h=0;h<i;h++){var c=void 0,d=n.getRawIndex(h)
if(0===a)c=e(h)
else if(1===a)c=e(u[l][d],h)
else{for(var f=0;f<a;f++)o[f]=u[t[f]][d]
o[f]=h,c=e.apply(null,o)}c&&(r[s++]=d)}return s<i&&(n._indices=r),n._count=s,n._extent=[],n._updateGetRawIdx(),n},t.prototype.selectRange=function(t){var e=this.clone(),n=e._count
if(!n)return this
var i=(0,r.HP)(t),o=i.length
if(!o)return this
var a=e.count(),s=new(p(e._rawCount))(a),l=0,u=i[0],h=t[u][0],c=t[u][1],d=e._chunks,f=!1
if(!e._indices){var g=0
if(1===o){for(var y=d[i[0]],v=0;v<n;v++)((b=y[v])>=h&&b<=c||isNaN(b))&&(s[l++]=g),g++
f=!0}else if(2===o){y=d[i[0]]
var m=d[i[1]],_=t[i[1]][0],x=t[i[1]][1]
for(v=0;v<n;v++){var b=y[v],w=m[v];(b>=h&&b<=c||isNaN(b))&&(w>=_&&w<=x||isNaN(w))&&(s[l++]=g),g++}f=!0}}if(!f)if(1===o)for(v=0;v<a;v++){var A=e.getRawIndex(v);((b=d[i[0]][A])>=h&&b<=c||isNaN(b))&&(s[l++]=A)}else for(v=0;v<a;v++){for(var S=!0,M=(A=e.getRawIndex(v),0);M<o;M++){var T=i[M];((b=d[T][A])<t[T][0]||b>t[T][1])&&(S=!1)}S&&(s[l++]=e.getRawIndex(v))}return l<a&&(e._indices=s),e._count=l,e._extent=[],e._updateGetRawIdx(),e},t.prototype.map=function(t,e){var n=this.clone(t)
return this._updateDims(n,t,e),n},t.prototype.modify=function(t,e){this._updateDims(this,t,e)},t.prototype._updateDims=function(t,e,n){for(var i=t._chunks,r=[],o=e.length,a=t.count(),s=[],l=t._rawExtent,u=0;u<e.length;u++)l[e[u]]=[1/0,-1/0]
for(var h=0;h<a;h++){for(var c=t.getRawIndex(h),d=0;d<o;d++)s[d]=i[e[d]][c]
s[o]=h
var p=n&&n.apply(null,s)
if(null!=p)for("object"!=typeof p&&(r[0]=p,p=r),u=0;u<p.length;u++){var f=e[u],g=p[u],y=l[f],v=i[f]
v&&(v[c]=g),g<y[0]&&(y[0]=g),g>y[1]&&(y[1]=g)}}},t.prototype.lttbDownSample=function(t,e){var n,i,r,o=this.clone([t],!0),a=o._chunks[t],s=this.count(),l=0,u=Math.floor(1/e),h=this.getRawIndex(0),c=new(p(this._rawCount))(Math.min(2*(Math.ceil(s/u)+2),s))
c[l++]=h
for(var d=1;d<s-1;d+=u){for(var f=Math.min(d+u,s-1),g=Math.min(d+2*u,s),y=(g+f)/2,v=0,m=f;m<g;m++){var _=a[T=this.getRawIndex(m)]
isNaN(_)||(v+=_)}v/=g-f
var x=d,b=Math.min(d+u,s),w=d-1,A=a[h]
n=-1,r=x
var S=-1,M=0
for(m=x;m<b;m++){var T
_=a[T=this.getRawIndex(m)],isNaN(_)?(M++,S<0&&(S=T)):(i=Math.abs((w-y)*(_-A)-(w-m)*(v-A)))>n&&(n=i,r=T)}M>0&&M<b-x&&(c[l++]=Math.min(S,r),r=Math.max(S,r)),c[l++]=r,h=r}return c[l++]=this.getRawIndex(s-1),o._count=l,o._indices=c,o.getRawIndex=this._getRawIdx,o},t.prototype.downSample=function(t,e,n,i){for(var r=this.clone([t],!0),o=r._chunks,a=[],s=Math.floor(1/e),l=o[t],u=this.count(),h=r._rawExtent[t]=[1/0,-1/0],c=new(p(this._rawCount))(Math.ceil(u/s)),d=0,f=0;f<u;f+=s){s>u-f&&(s=u-f,a.length=s)
for(var g=0;g<s;g++){var y=this.getRawIndex(f+g)
a[g]=l[y]}var v=n(a),m=this.getRawIndex(Math.min(f+i(a,v)||0,u-1))
l[m]=v,v<h[0]&&(h[0]=v),v>h[1]&&(h[1]=v),c[d++]=m}return r._count=d,r._indices=c,r._updateGetRawIdx(),r},t.prototype.each=function(t,e){if(this._count)for(var n=t.length,i=this._chunks,r=0,o=this.count();r<o;r++){var a=this.getRawIndex(r)
switch(n){case 0:e(r)
break
case 1:e(i[t[0]][a],r)
break
case 2:e(i[t[0]][a],i[t[1]][a],r)
break
default:for(var s=0,l=[];s<n;s++)l[s]=i[t[s]][a]
l[s]=r,e.apply(null,l)}}},t.prototype.getDataExtent=function(t){var e=this._chunks[t],n=[1/0,-1/0]
if(!e)return n
var i,r=this.count()
if(!this._indices)return this._rawExtent[t].slice()
if(i=this._extent[t])return i.slice()
for(var o=(i=n)[0],a=i[1],s=0;s<r;s++){var l=e[this.getRawIndex(s)]
l<o&&(o=l),l>a&&(a=l)}return i=[o,a],this._extent[t]=i,i},t.prototype.getRawDataItem=function(t){var e=this.getRawIndex(t)
if(this._provider.persistent)return this._provider.getItem(e)
for(var n=[],i=this._chunks,r=0;r<i.length;r++)n.push(i[r][e])
return n},t.prototype.clone=function(e,n){var i,o,a=new t,s=this._chunks,l=e&&(0,r.TS)(e,(function(t,e){return t[e]=!0,t}),{})
if(l)for(var u=0;u<s.length;u++)a._chunks[u]=l[u]?(o=void 0,(o=(i=s[u]).constructor)===Array?i.slice():new o(i)):s[u]
else a._chunks=s
return this._copyCommonProps(a),n||(a._indices=this._cloneIndices()),a._updateGetRawIdx(),a},t.prototype._copyCommonProps=function(t){t._count=this._count,t._rawCount=this._rawCount,t._provider=this._provider,t._dimensions=this._dimensions,t._extent=(0,r.o8)(this._extent),t._rawExtent=(0,r.o8)(this._rawExtent)},t.prototype._cloneIndices=function(){if(this._indices){var t=this._indices.constructor,e=void 0
if(t===Array){var n=this._indices.length
e=new t(n)
for(var i=0;i<n;i++)e[i]=this._indices[i]}else e=new t(this._indices)
return e}return null},t.prototype._getRawIdxIdentity=function(t){return t},t.prototype._getRawIdx=function(t){return t<this._count&&t>=0?this._indices[t]:-1},t.prototype._updateGetRawIdx=function(){this.getRawIndex=this._indices?this._getRawIdx:this._getRawIdxIdentity},t.internalField=function(){function t(t,e,n,i){return(0,o.Pn)(t[i],this._dimensions[i])}i={arrayRows:t,objectRows:function(t,e,n,i){return(0,o.Pn)(t[e],this._dimensions[i])},keyedColumns:t,original:function(t,e,n,i){var r=t&&(null==t.value?t:t.value)
return(0,o.Pn)(r instanceof Array?r[i]:r,this._dimensions[i])},typedArray:function(t,e,n,i){return t[i]}}}(),t}()},3876:(t,e,n)=>{n.d(e,{A:()=>a})
var i=n(8301),r=0
function o(t){return(0,i.Gv)(t)&&null!=t.value?t.value:t+""}const a=function(){function t(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this.uid=++r}return t.createByAxisModel=function(e){var n=e.option,r=n.data,a=r&&(0,i.Tj)(r,o)
return new t({categories:a,needCollect:!a,deduplication:!1!==n.dedplication})},t.prototype.getOrdinal=function(t){return this._getOrCreateMap().get(t)},t.prototype.parseAndCollect=function(t){var e,n=this._needCollect
if(!(0,i.Kg)(t)&&!n)return t
if(n&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e
var r=this._getOrCreateMap()
return null==(e=r.get(t))&&(n?(e=this.categories.length,this.categories[e]=t,r.set(t,e)):e=NaN),e},t.prototype._getOrCreateMap=function(){return this._map||(this._map=(0,i.nt)(this.categories))},t}()},8344:(t,e,n)=>{n.d(e,{A:()=>k})
var i=n(8301),r=n(7413)
function o(t){return null==t?0:t.length||1}function a(t){return t}var s=function(){function t(t,e,n,i,r,o){this._old=t,this._new=e,this._oldKeyGetter=n||a,this._newKeyGetter=i||a,this.context=r,this._diffModeMultiple="multiple"===o}return t.prototype.add=function(t){return this._add=t,this},t.prototype.update=function(t){return this._update=t,this},t.prototype.updateManyToOne=function(t){return this._updateManyToOne=t,this},t.prototype.updateOneToMany=function(t){return this._updateOneToMany=t,this},t.prototype.updateManyToMany=function(t){return this._updateManyToMany=t,this},t.prototype.remove=function(t){return this._remove=t,this},t.prototype.execute=function(){this[this._diffModeMultiple?"_executeMultiple":"_executeOneToOne"]()},t.prototype._executeOneToOne=function(){var t=this._old,e=this._new,n={},i=new Array(t.length),r=new Array(e.length)
this._initIndexMap(t,null,i,"_oldKeyGetter"),this._initIndexMap(e,n,r,"_newKeyGetter")
for(var a=0;a<t.length;a++){var s=i[a],l=n[s],u=o(l)
if(u>1){var h=l.shift()
1===l.length&&(n[s]=l[0]),this._update&&this._update(h,a)}else 1===u?(n[s]=null,this._update&&this._update(l,a)):this._remove&&this._remove(a)}this._performRestAdd(r,n)},t.prototype._executeMultiple=function(){var t=this._old,e=this._new,n={},i={},r=[],a=[]
this._initIndexMap(t,n,r,"_oldKeyGetter"),this._initIndexMap(e,i,a,"_newKeyGetter")
for(var s=0;s<r.length;s++){var l=r[s],u=n[l],h=i[l],c=o(u),d=o(h)
if(c>1&&1===d)this._updateManyToOne&&this._updateManyToOne(h,u),i[l]=null
else if(1===c&&d>1)this._updateOneToMany&&this._updateOneToMany(h,u),i[l]=null
else if(1===c&&1===d)this._update&&this._update(h,u),i[l]=null
else if(c>1&&d>1)this._updateManyToMany&&this._updateManyToMany(h,u),i[l]=null
else if(c>1)for(var p=0;p<c;p++)this._remove&&this._remove(u[p])
else this._remove&&this._remove(u)}this._performRestAdd(a,i)},t.prototype._performRestAdd=function(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=e[i],a=o(r)
if(a>1)for(var s=0;s<a;s++)this._add&&this._add(r[s])
else 1===a&&this._add&&this._add(r)
e[i]=null}},t.prototype._initIndexMap=function(t,e,n,i){for(var r=this._diffModeMultiple,a=0;a<t.length;a++){var s="_ec_"+this[i](t[a],a)
if(r||(n[a]=s),e){var l=e[s],u=o(l)
0===u?(e[s]=a,r&&n.push(s)):1===u?e[s]=[l,a]:l.push(a)}}},t}()
const l=s
var u,h,c,d,p,f,g,y=n(4152),v=n(5157),m=n(9079),_=n(6233),x=n(5225),b=n(1323),w=n(9879),A=n(8337),S=n(2903),M=i.Gv,T=i.Tj,I="undefined"==typeof Int32Array?Array:Int32Array,C=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_dimSummary","userOutput","_rawData","_dimValueGetter","_nameDimIdx","_idDimIdx","_nameRepeatCount"],D=["_approximateExtent"]
const k=function(){function t(t,e){var n
this.type="list",this._dimOmitted=!1,this._nameList=[],this._idList=[],this._visual={},this._layout={},this._itemVisuals=[],this._itemLayouts=[],this._graphicEls=[],this._approximateExtent={},this._calculationInfo={},this.hasItemOption=!1,this.TRANSFERABLE_METHODS=["cloneShallow","downSample","lttbDownSample","map"],this.CHANGABLE_METHODS=["filterSelf","selectRange"],this.DOWNSAMPLE_METHODS=["downSample","lttbDownSample"]
var r=!1;(0,S.fg)(t)?(n=t.dimensions,this._dimOmitted=t.isDimensionOmitted(),this._schema=t):(r=!0,n=t),n=n||["x","y"]
for(var o={},a=[],s={},l=!1,u={},h=0;h<n.length;h++){var c=n[h],d=i.Kg(c)?new m.A({name:c}):c instanceof m.A?c:new m.A(c),p=d.name
d.type=d.type||"float",d.coordDim||(d.coordDim=p,d.coordDimIndex=0)
var f=d.otherDims=d.otherDims||{}
a.push(p),o[p]=d,null!=u[p]&&(l=!0),d.createInvertedIndices&&(s[p]=[]),0===f.itemName&&(this._nameDimIdx=h),0===f.itemId&&(this._idDimIdx=h),r&&(d.storeDimIndex=h)}if(this.dimensions=a,this._dimInfos=o,this._initGetDimensionInfo(l),this.hostModel=e,this._invertedIndicesMap=s,this._dimOmitted){var g=this._dimIdxToName=i.nt()
i.__(a,(function(t){g.set(o[t].storeDimIndex,t)}))}}return t.prototype.getDimension=function(t){var e=this._recognizeDimIndex(t)
if(null==e)return t
if(e=t,!this._dimOmitted)return this.dimensions[e]
var n=this._dimIdxToName.get(e)
if(null!=n)return n
var i=this._schema.getSourceDimension(e)
return i?i.name:void 0},t.prototype.getDimensionIndex=function(t){var e=this._recognizeDimIndex(t)
if(null!=e)return e
if(null==t)return-1
var n=this._getDimInfo(t)
return n?n.storeDimIndex:this._dimOmitted?this._schema.getSourceDimensionIndex(t):-1},t.prototype._recognizeDimIndex=function(t){if(i.Et(t)||null!=t&&!isNaN(t)&&!this._getDimInfo(t)&&(!this._dimOmitted||this._schema.getSourceDimensionIndex(t)<0))return+t},t.prototype._getStoreDimIndex=function(t){return this.getDimensionIndex(t)},t.prototype.getDimensionInfo=function(t){return this._getDimInfo(this.getDimension(t))},t.prototype._initGetDimensionInfo=function(t){var e=this._dimInfos
this._getDimInfo=t?function(t){return e.hasOwnProperty(t)?e[t]:void 0}:function(t){return e[t]}},t.prototype.getDimensionsOnCoord=function(){return this._dimSummary.dataDimsOnCoord.slice()},t.prototype.mapDimension=function(t,e){var n=this._dimSummary
if(null==e)return n.encodeFirstDimNotExtra[t]
var i=n.encode[t]
return i?i[e]:null},t.prototype.mapDimensionsAll=function(t){return(this._dimSummary.encode[t]||[]).slice()},t.prototype.getStore=function(){return this._store},t.prototype.initData=function(t,e,n){var r,o=this
if(t instanceof A.Ay&&(r=t),!r){var a=this.dimensions,s=(0,w.tP)(t)||i.Xj(t)?new y.d1(t,a.length):t
r=new A.Ay
var l=T(a,(function(t){return{type:o._dimInfos[t].type,property:t}}))
r.initData(s,l,n)}this._store=r,this._nameList=(e||[]).slice(),this._idList=[],this._nameRepeatCount={},this._doInit(0,r.count()),this._dimSummary=(0,v.l)(this,this._schema),this.userOutput=this._dimSummary.userOutput},t.prototype.appendData=function(t){var e=this._store.appendData(t)
this._doInit(e[0],e[1])},t.prototype.appendValues=function(t,e){var n=this._store.appendValues(t,e.length),i=n.start,r=n.end,o=this._shouldMakeIdFromName()
if(this._updateOrdinalMeta(),e)for(var a=i;a<r;a++){var s=a-i
this._nameList[a]=e[s],o&&g(this,a)}},t.prototype._updateOrdinalMeta=function(){for(var t=this._store,e=this.dimensions,n=0;n<e.length;n++){var i=this._dimInfos[e[n]]
i.ordinalMeta&&t.collectOrdinalMeta(i.storeDimIndex,i.ordinalMeta)}},t.prototype._shouldMakeIdFromName=function(){var t=this._store.getProvider()
return null==this._idDimIdx&&t.getSource().sourceFormat!==_.XO&&!t.fillStorage},t.prototype._doInit=function(t,e){if(!(t>=e)){var n=this._store.getProvider()
this._updateOrdinalMeta()
var i=this._nameList,r=this._idList
if(n.getSource().sourceFormat===_.mK&&!n.pure)for(var o=[],a=t;a<e;a++){var s=n.getItem(a,o)
if(!this.hasItemOption&&(0,x.zu)(s)&&(this.hasItemOption=!0),s){var l=s.name
null==i[a]&&null!=l&&(i[a]=(0,x.vS)(l,null))
var h=s.id
null==r[a]&&null!=h&&(r[a]=(0,x.vS)(h,null))}}if(this._shouldMakeIdFromName())for(a=t;a<e;a++)g(this,a)
u(this)}},t.prototype.getApproximateExtent=function(t){return this._approximateExtent[t]||this._store.getDataExtent(this._getStoreDimIndex(t))},t.prototype.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},t.prototype.getCalculationInfo=function(t){return this._calculationInfo[t]},t.prototype.setCalculationInfo=function(t,e){M(t)?i.X$(this._calculationInfo,t):this._calculationInfo[t]=e},t.prototype.getName=function(t){var e=this.getRawIndex(t),n=this._nameList[e]
return null==n&&null!=this._nameDimIdx&&(n=c(this,this._nameDimIdx,e)),null==n&&(n=""),n},t.prototype._getCategory=function(t,e){var n=this._store.get(t,e),i=this._store.getOrdinalMeta(t)
return i?i.categories[n]:n},t.prototype.getId=function(t){return h(this,this.getRawIndex(t))},t.prototype.count=function(){return this._store.count()},t.prototype.get=function(t,e){var n=this._store,i=this._dimInfos[t]
if(i)return n.get(i.storeDimIndex,e)},t.prototype.getByRawIndex=function(t,e){var n=this._store,i=this._dimInfos[t]
if(i)return n.getByRawIndex(i.storeDimIndex,e)},t.prototype.getIndices=function(){return this._store.getIndices()},t.prototype.getDataExtent=function(t){return this._store.getDataExtent(this._getStoreDimIndex(t))},t.prototype.getSum=function(t){return this._store.getSum(this._getStoreDimIndex(t))},t.prototype.getMedian=function(t){return this._store.getMedian(this._getStoreDimIndex(t))},t.prototype.getValues=function(t,e){var n=this,r=this._store
return i.cy(t)?r.getValues(T(t,(function(t){return n._getStoreDimIndex(t)})),e):r.getValues(t)},t.prototype.hasValue=function(t){for(var e=this._dimSummary.dataDimIndicesOnCoord,n=0,i=e.length;n<i;n++)if(isNaN(this._store.get(e[n],t)))return!1
return!0},t.prototype.indexOfName=function(t){for(var e=0,n=this._store.count();e<n;e++)if(this.getName(e)===t)return e
return-1},t.prototype.getRawIndex=function(t){return this._store.getRawIndex(t)},t.prototype.indexOfRawIndex=function(t){return this._store.indexOfRawIndex(t)},t.prototype.rawIndexOf=function(t,e){var n=(t&&this._invertedIndicesMap[t])[e]
return null==n||isNaN(n)?-1:n},t.prototype.indicesOfNearest=function(t,e,n){return this._store.indicesOfNearest(this._getStoreDimIndex(t),e,n)},t.prototype.each=function(t,e,n){i.Tn(t)&&(n=e,e=t,t=[])
var r=n||this,o=T(d(t),this._getStoreDimIndex,this)
this._store.each(o,r?i.oI(e,r):e)},t.prototype.filterSelf=function(t,e,n){i.Tn(t)&&(n=e,e=t,t=[])
var r=n||this,o=T(d(t),this._getStoreDimIndex,this)
return this._store=this._store.filter(o,r?i.oI(e,r):e),this},t.prototype.selectRange=function(t){var e=this,n={},r=i.HP(t),o=[]
return i.__(r,(function(i){var r=e._getStoreDimIndex(i)
n[r]=t[i],o.push(r)})),this._store=this._store.selectRange(n),this},t.prototype.mapArray=function(t,e,n){i.Tn(t)&&(n=e,e=t,t=[]),n=n||this
var r=[]
return this.each(t,(function(){r.push(e&&e.apply(this,arguments))}),n),r},t.prototype.map=function(t,e,n,r){var o=n||r||this,a=T(d(t),this._getStoreDimIndex,this),s=f(this)
return s._store=this._store.map(a,o?i.oI(e,o):e),s},t.prototype.modify=function(t,e,n,r){var o=n||r||this,a=T(d(t),this._getStoreDimIndex,this)
this._store.modify(a,o?i.oI(e,o):e)},t.prototype.downSample=function(t,e,n,i){var r=f(this)
return r._store=this._store.downSample(this._getStoreDimIndex(t),e,n,i),r},t.prototype.lttbDownSample=function(t,e){var n=f(this)
return n._store=this._store.lttbDownSample(this._getStoreDimIndex(t),e),n},t.prototype.getRawDataItem=function(t){return this._store.getRawDataItem(t)},t.prototype.getItemModel=function(t){var e=this.hostModel,n=this.getRawDataItem(t)
return new r.A(n,e,e&&e.ecModel)},t.prototype.diff=function(t){var e=this
return new l(t?t.getStore().getIndices():[],this.getStore().getIndices(),(function(e){return h(t,e)}),(function(t){return h(e,t)}))},t.prototype.getVisual=function(t){var e=this._visual
return e&&e[t]},t.prototype.setVisual=function(t,e){this._visual=this._visual||{},M(t)?i.X$(this._visual,t):this._visual[t]=e},t.prototype.getItemVisual=function(t,e){var n=this._itemVisuals[t],i=n&&n[e]
return null==i?this.getVisual(e):i},t.prototype.hasItemVisual=function(){return this._itemVisuals.length>0},t.prototype.ensureUniqueItemVisual=function(t,e){var n=this._itemVisuals,r=n[t]
r||(r=n[t]={})
var o=r[e]
return null==o&&(o=this.getVisual(e),i.cy(o)?o=o.slice():M(o)&&(o=i.X$({},o)),r[e]=o),o},t.prototype.setItemVisual=function(t,e,n){var r=this._itemVisuals[t]||{}
this._itemVisuals[t]=r,M(e)?i.X$(r,e):r[e]=n},t.prototype.clearAllVisual=function(){this._visual={},this._itemVisuals=[]},t.prototype.setLayout=function(t,e){M(t)?i.X$(this._layout,t):this._layout[t]=e},t.prototype.getLayout=function(t){return this._layout[t]},t.prototype.getItemLayout=function(t){return this._itemLayouts[t]},t.prototype.setItemLayout=function(t,e,n){this._itemLayouts[t]=n?i.X$(this._itemLayouts[t]||{},e):e},t.prototype.clearItemLayouts=function(){this._itemLayouts.length=0},t.prototype.setItemGraphicEl=function(t,e){var n=this.hostModel&&this.hostModel.seriesIndex;(0,b.a)(n,this.dataType,t,e),this._graphicEls[t]=e},t.prototype.getItemGraphicEl=function(t){return this._graphicEls[t]},t.prototype.eachItemGraphicEl=function(t,e){i.__(this._graphicEls,(function(n,i){n&&t&&t.call(e,n,i)}))},t.prototype.cloneShallow=function(e){return e||(e=new t(this._schema?this._schema:T(this.dimensions,this._getDimInfo,this),this.hostModel)),p(e,this),e._store=this._store,e},t.prototype.wrapMethod=function(t,e){var n=this[t]
i.Tn(n)&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=n.apply(this,arguments)
return e.apply(this,[t].concat(i.di(arguments)))})},t.internalField=(u=function(t){var e=t._invertedIndicesMap
i.__(e,(function(n,i){var r=t._dimInfos[i],o=r.ordinalMeta,a=t._store
if(o){n=e[i]=new I(o.categories.length)
for(var s=0;s<n.length;s++)n[s]=-1
for(s=0;s<a.count();s++)n[a.get(r.storeDimIndex,s)]=s}}))},c=function(t,e,n){return(0,x.vS)(t._getCategory(e,n),null)},h=function(t,e){var n=t._idList[e]
return null==n&&null!=t._idDimIdx&&(n=c(t,t._idDimIdx,e)),null==n&&(n="e\0\0"+e),n},d=function(t){return i.cy(t)||(t=null!=t?[t]:[]),t},f=function(e){var n=new t(e._schema?e._schema:T(e.dimensions,e._getDimInfo,e),e.hostModel)
return p(n,e),n},p=function(t,e){i.__(C.concat(e.__wrappedMethods||[]),(function(n){e.hasOwnProperty(n)&&(t[n]=e[n])})),t.__wrappedMethods=e.__wrappedMethods,i.__(D,(function(n){t[n]=i.o8(e[n])})),t._calculationInfo=i.X$({},e._calculationInfo)},void(g=function(t,e){var n=t._nameList,i=t._idList,r=t._nameDimIdx,o=t._idDimIdx,a=n[e],s=i[e]
if(null==a&&null!=r&&(n[e]=a=c(t,r,e)),null==s&&null!=o&&(i[e]=s=c(t,o,e)),null==s&&null!=a){var l=t._nameRepeatCount,u=l[a]=(l[a]||0)+1
s=a,u>1&&(s+="__ec__"+u),i[e]=s}})),t}()},9079:(t,e,n)=>{n.d(e,{A:()=>r})
var i=n(8301)
const r=function(t){this.otherDims={},null!=t&&i.X$(this,t)}},9879:(t,e,n)=>{n.d(e,{AF:()=>h,BE:()=>c,O0:()=>g,gV:()=>u,tP:()=>l,wZ:()=>d})
var i=n(8301),r=n(6233),o=n(5225),a=n(6604),s=function(t){this.data=t.data||(t.sourceFormat===r.t1?{}:[]),this.sourceFormat=t.sourceFormat||r.vm,this.seriesLayoutBy=t.seriesLayoutBy||r.i_,this.startIndex=t.startIndex||0,this.dimensionsDetectedCount=t.dimensionsDetectedCount,this.metaRawOption=t.metaRawOption
var e=this.dimensionsDefine=t.dimensionsDefine
if(e)for(var n=0;n<e.length;n++){var i=e[n]
null==i.type&&(0,a.PU)(this,n)===a.sc.Must&&(i.type="ordinal")}}
function l(t){return t instanceof s}function u(t,e,n){n=n||d(t)
var a=e.seriesLayoutBy,l=function(t,e,n,a,s){var l,u
if(!t)return{dimensionsDefine:p(s),startIndex:u,dimensionsDetectedCount:l}
if(e===r.Km){var h=t
"auto"===a||null==a?f((function(t){null!=t&&"-"!==t&&((0,i.Kg)(t)?null==u&&(u=1):u=0)}),n,h,10):u=(0,i.Et)(a)?a:a?1:0,s||1!==u||(s=[],f((function(t,e){s[e]=null!=t?t+"":""}),n,h,1/0)),l=s?s.length:n===r.oC?h.length:h[0]?h[0].length:null}else if(e===r.Wk)s||(s=function(t){for(var e,n=0;n<t.length&&!(e=t[n++]););if(e)return(0,i.HP)(e)}(t))
else if(e===r.t1)s||(s=[],(0,i.__)(t,(function(t,e){s.push(e)})))
else if(e===r.mK){var c=(0,o.vj)(t[0])
l=(0,i.cy)(c)&&c.length||1}else r.XO
return{startIndex:u,dimensionsDefine:p(s),dimensionsDetectedCount:l}}(t,n,a,e.sourceHeader,e.dimensions)
return new s({data:t,sourceFormat:n,seriesLayoutBy:a,dimensionsDefine:l.dimensionsDefine,startIndex:l.startIndex,dimensionsDetectedCount:l.dimensionsDetectedCount,metaRawOption:(0,i.o8)(e)})}function h(t){return new s({data:t,sourceFormat:(0,i.iu)(t)?r.XO:r.mK})}function c(t){return new s({data:t.data,sourceFormat:t.sourceFormat,seriesLayoutBy:t.seriesLayoutBy,dimensionsDefine:(0,i.o8)(t.dimensionsDefine),startIndex:t.startIndex,dimensionsDetectedCount:t.dimensionsDetectedCount})}function d(t){var e=r.vm
if((0,i.iu)(t))e=r.XO
else if((0,i.cy)(t)){0===t.length&&(e=r.Km)
for(var n=0,o=t.length;n<o;n++){var a=t[n]
if(null!=a){if((0,i.cy)(a)||(0,i.iu)(a)){e=r.Km
break}if((0,i.Gv)(a)){e=r.Wk
break}}}}else if((0,i.Gv)(t))for(var s in t)if((0,i.$3)(t,s)&&(0,i.Xj)(t[s])){e=r.t1
break}return e}function p(t){if(t){var e=(0,i.nt)()
return(0,i.Tj)(t,(function(t,n){var r={name:(t=(0,i.Gv)(t)?t:{name:t}).name,displayName:t.displayName,type:t.type}
if(null==r.name)return r
r.name+="",null==r.displayName&&(r.displayName=r.name)
var o=e.get(r.name)
return o?r.name+="-"+o.count++:e.set(r.name,{count:1}),r}))}}function f(t,e,n,i){if(e===r.oC)for(var o=0;o<n.length&&o<i;o++)t(n[o]?n[o][0]:null,o)
else{var a=n[0]||[]
for(o=0;o<a.length&&o<i;o++)t(a[o],o)}}function g(t){var e=t.sourceFormat
return e===r.Wk||e===r.t1}},2903:(t,e,n)=>{n.d(e,{Tc:()=>l,eS:()=>d,fg:()=>u,io:()=>h,j_:()=>c})
var i=n(8301),r=n(5225),o=n(9879),a=(0,r.$r)(),s={float:"f",int:"i",ordinal:"o",number:"n",time:"t"},l=function(){function t(t){this.dimensions=t.dimensions,this._dimOmitted=t.dimensionOmitted,this.source=t.source,this._fullDimCount=t.fullDimensionCount,this._updateDimOmitted(t.dimensionOmitted)}return t.prototype.isDimensionOmitted=function(){return this._dimOmitted},t.prototype._updateDimOmitted=function(t){this._dimOmitted=t,t&&(this._dimNameMap||(this._dimNameMap=c(this.source)))},t.prototype.getSourceDimensionIndex=function(t){return(0,i.bZ)(this._dimNameMap.get(t),-1)},t.prototype.getSourceDimension=function(t){var e=this.source.dimensionsDefine
if(e)return e[t]},t.prototype.makeStoreSchema=function(){for(var t=this._fullDimCount,e=(0,o.O0)(this.source),n=!d(t),i="",r=[],a=0,l=0;a<t;a++){var u=void 0,h=void 0,c=void 0,p=this.dimensions[l]
if(p&&p.storeDimIndex===a)u=e?p.name:null,h=p.type,c=p.ordinalMeta,l++
else{var f=this.getSourceDimension(a)
f&&(u=e?f.name:null,h=f.type)}r.push({property:u,type:h,ordinalMeta:c}),!e||null==u||p&&p.isCalculationCoord||(i+=n?u.replace(/\`/g,"`1").replace(/\$/g,"`2"):u),i+="$",i+=s[h]||"f",c&&(i+=c.uid),i+="$"}var g=this.source
return{dimensions:r,hash:[g.seriesLayoutBy,g.startIndex,i].join("$$")}},t.prototype.makeOutputDimensionNames=function(){for(var t=[],e=0,n=0;e<this._fullDimCount;e++){var i=void 0,r=this.dimensions[n]
if(r&&r.storeDimIndex===e)r.isCalculationCoord||(i=r.name),n++
else{var o=this.getSourceDimension(e)
o&&(i=o.name)}t.push(i)}return t},t.prototype.appendCalculationDimension=function(t){this.dimensions.push(t),t.isCalculationCoord=!0,this._fullDimCount++,this._updateDimOmitted(!0)},t}()
function u(t){return t instanceof l}function h(t){for(var e=(0,i.nt)(),n=0;n<(t||[]).length;n++){var r=t[n],o=(0,i.Gv)(r)?r.name:r
null!=o&&null==e.get(o)&&e.set(o,n)}return e}function c(t){var e=a(t)
return e.dimNameMap||(e.dimNameMap=h(t.dimensionsDefine))}function d(t){return t>30}},8536:(t,e,n)=>{n.d(e,{A:()=>c})
var i=n(6233),r=n(9079),o=n(8301),a=n(9879),s=n(8337),l=n(5225),u=n(6604),h=n(2903)
function c(t,e){(0,a.tP)(t)||(t=(0,a.AF)(t))
var n=(e=e||{}).coordDimensions||[],c=e.dimensionsDefine||t.dimensionsDefine||[],p=(0,o.nt)(),f=[],g=function(t,e,n,i){var r=Math.max(t.dimensionsDetectedCount||1,e.length,n.length,i||0)
return(0,o.__)(e,(function(t){var e;(0,o.Gv)(t)&&(e=t.dimsDef)&&(r=Math.max(r,e.length))})),r}(t,n,c,e.dimensionsCount),y=e.canOmitUnusedDimensions&&(0,h.eS)(g),v=c===t.dimensionsDefine,m=v?(0,h.j_)(t):(0,h.io)(c),_=e.encodeDefine
!_&&e.encodeDefaulter&&(_=e.encodeDefaulter(t,g))
for(var x=(0,o.nt)(_),b=new s.A_(g),w=0;w<b.length;w++)b[w]=-1
function A(t){var e=b[t]
if(e<0){var n=c[t],i=(0,o.Gv)(n)?n:{name:n},a=new r.A,s=i.name
null!=s&&null!=m.get(s)&&(a.name=a.displayName=s),null!=i.type&&(a.type=i.type),null!=i.displayName&&(a.displayName=i.displayName)
var l=f.length
return b[t]=l,a.storeDimIndex=t,f.push(a),a}return f[e]}if(!y)for(w=0;w<g;w++)A(w)
x.each((function(t,e){var n=(0,l.qB)(t).slice()
if(1===n.length&&!(0,o.Kg)(n[0])&&n[0]<0)x.set(e,!1)
else{var i=x.set(e,[]);(0,o.__)(n,(function(t,n){var r=(0,o.Kg)(t)?m.get(t):t
null!=r&&r<g&&(i[n]=r,M(A(r),e,n))}))}}))
var S=0
function M(t,e,n){null!=i.Pe.get(e)?t.otherDims[e]=n:(t.coordDim=e,t.coordDimIndex=n,p.set(e,!0))}(0,o.__)(n,(function(t){var e,n,i,r
if((0,o.Kg)(t))e=t,r={}
else{e=(r=t).name
var a=r.ordinalMeta
r.ordinalMeta=null,(r=(0,o.X$)({},r)).ordinalMeta=a,n=r.dimsDef,i=r.otherDims,r.name=r.coordDim=r.coordDimIndex=r.dimsDef=r.otherDims=null}var s=x.get(e)
if(!1!==s){if(!(s=(0,l.qB)(s)).length)for(var u=0;u<(n&&n.length||1);u++){for(;S<g&&null!=A(S).coordDim;)S++
S<g&&s.push(S++)}(0,o.__)(s,(function(t,a){var s=A(t)
if(v&&null!=r.type&&(s.type=r.type),M((0,o.NT)(s,r),e,a),null==s.name&&n){var l=n[a]
!(0,o.Gv)(l)&&(l={name:l}),s.name=s.displayName=l.name,s.defaultTooltip=l.defaultTooltip}i&&(0,o.NT)(s.otherDims,i)}))}}))
var T=e.generateCoord,I=e.generateCoordCount,C=null!=I
I=T?I||1:0
var D=T||"value"
function k(t){null==t.name&&(t.name=t.coordDim)}if(y)(0,o.__)(f,(function(t){k(t)})),f.sort((function(t,e){return t.storeDimIndex-e.storeDimIndex}))
else for(var L=0;L<g;L++){var P=A(L)
null==P.coordDim&&(P.coordDim=d(D,p,C),P.coordDimIndex=0,(!T||I<=0)&&(P.isExtraCoord=!0),I--),k(P),null!=P.type||(0,u.PU)(t,L)!==u.sc.Must&&(!P.isExtraCoord||null==P.otherDims.itemName&&null==P.otherDims.seriesName)||(P.type="ordinal")}return function(t){for(var e=(0,o.nt)(),n=0;n<t.length;n++){var i=t[n],r=i.name,a=e.get(r)||0
a>0&&(i.name=r+(a-1)),a++,e.set(r,a)}}(f),new h.Tc({source:t,dimensions:f,fullDimensionCount:g,dimensionOmitted:y})}function d(t,e,n){if(n||e.hasKey(t)){for(var i=0;e.hasKey(t+i);)i++
t+=i}return e.set(t,!0),t}},4152:(t,e,n)=>{n.d(e,{Kd:()=>m,QE:()=>A,d1:()=>d,sC:()=>g,uQ:()=>b})
var i,r,o,a,s,l=n(8301),u=n(5225),h=n(9879),c=n(6233),d=function(){function t(t,e){var n=(0,h.tP)(t)?t:(0,h.AF)(t)
this._source=n
var i=this._data=n.data
n.sourceFormat===c.XO&&(this._offset=0,this._dimSize=e,this._data=i),s(this,i,n)}var e
return t.prototype.getSource=function(){return this._source},t.prototype.count=function(){return 0},t.prototype.getItem=function(t,e){},t.prototype.appendData=function(t){},t.prototype.clean=function(){},t.protoInitialize=((e=t.prototype).pure=!1,void(e.persistent=!0)),t.internalField=function(){var t
s=function(t,r,o){var s=o.sourceFormat,u=o.seriesLayoutBy,h=o.startIndex,d=o.dimensionsDefine,p=a[w(s,u)]
if((0,l.X$)(t,p),s===c.XO)t.getItem=e,t.count=i,t.fillStorage=n
else{var f=g(s,u)
t.getItem=(0,l.oI)(f,null,r,h,d)
var y=m(s,u)
t.count=(0,l.oI)(y,null,r,h,d)}}
var e=function(t,e){t-=this._offset,e=e||[]
for(var n=this._data,i=this._dimSize,r=i*t,o=0;o<i;o++)e[o]=n[r+o]
return e},n=function(t,e,n,i){for(var r=this._data,o=this._dimSize,a=0;a<o;a++){for(var s=i[a],l=null==s[0]?1/0:s[0],u=null==s[1]?-1/0:s[1],h=e-t,c=n[a],d=0;d<h;d++){var p=r[d*o+a]
c[t+d]=p,p<l&&(l=p),p>u&&(u=p)}s[0]=l,s[1]=u}},i=function(){return this._data?this._data.length/this._dimSize:0}
function r(t){for(var e=0;e<t.length;e++)this._data.push(t[e])}(t={})[c.Km+"_"+c.i_]={pure:!0,appendData:r},t[c.Km+"_"+c.oC]={pure:!0,appendData:function(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".')}},t[c.Wk]={pure:!0,appendData:r},t[c.t1]={pure:!0,appendData:function(t){var e=this._data;(0,l.__)(t,(function(t,n){for(var i=e[n]||(e[n]=[]),r=0;r<(t||[]).length;r++)i.push(t[r])}))}},t[c.mK]={appendData:r},t[c.XO]={persistent:!1,pure:!0,appendData:function(t){this._data=t},clean:function(){this._offset+=this.count(),this._data=null}},a=t}(),t}(),p=function(t,e,n,i){return t[i]},f=((i={})[c.Km+"_"+c.i_]=function(t,e,n,i){return t[i+e]},i[c.Km+"_"+c.oC]=function(t,e,n,i,r){i+=e
for(var o=r||[],a=t,s=0;s<a.length;s++){var l=a[s]
o[s]=l?l[i]:null}return o},i[c.Wk]=p,i[c.t1]=function(t,e,n,i,r){for(var o=r||[],a=0;a<n.length;a++){var s=t[n[a].name]
o[a]=s?s[i]:null}return o},i[c.mK]=p,i)
function g(t,e){return f[w(t,e)]}var y=function(t,e,n){return t.length},v=((r={})[c.Km+"_"+c.i_]=function(t,e,n){return Math.max(0,t.length-e)},r[c.Km+"_"+c.oC]=function(t,e,n){var i=t[0]
return i?Math.max(0,i.length-e):0},r[c.Wk]=y,r[c.t1]=function(t,e,n){var i=t[n[0].name]
return i?i.length:0},r[c.mK]=y,r)
function m(t,e){return v[w(t,e)]}var _=function(t,e,n){return t[e]},x=((o={})[c.Km]=_,o[c.Wk]=function(t,e,n){return t[n]},o[c.t1]=_,o[c.mK]=function(t,e,n){var i=(0,u.vj)(t)
return i instanceof Array?i[e]:i},o[c.XO]=_,o)
function b(t){return x[t]}function w(t,e){return t===c.Km?t+"_"+e:t}function A(t,e,n){if(t){var i=t.getRawDataItem(e)
if(null!=i){var r=t.getStore(),o=r.getSource().sourceFormat
if(null!=n){var a=t.getDimensionIndex(n),s=r.getDimensionProperty(a)
return b(o)(i,a,s)}var l=i
return o===c.mK&&(l=(0,u.vj)(i)),l}}}},4061:(t,e,n)=>{n.d(e,{iJ:()=>o,me:()=>s,sJ:()=>a})
var i=n(8301),r=n(2903)
function o(t,e,n){var o,a,s,l=(n=n||{}).byIndex,u=n.stackedCoordDimension
!function(t){return!(0,r.fg)(t.schema)}(e)?(a=e.schema,o=a.dimensions,s=e.store):o=e
var h,c,d,p,f=!(!t||!t.get("stack"))
if((0,i.__)(o,(function(t,e){(0,i.Kg)(t)&&(o[e]=t={name:t}),f&&!t.isExtraCoord&&(l||h||!t.ordinalMeta||(h=t),c||"ordinal"===t.type||"time"===t.type||u&&u!==t.coordDim||(c=t))})),!c||l||h||(l=!0),c){d="__\0ecstackresult_"+t.id,p="__\0ecstackedover_"+t.id,h&&(h.createInvertedIndices=!0)
var g=c.coordDim,y=c.type,v=0;(0,i.__)(o,(function(t){t.coordDim===g&&v++}))
var m={name:d,coordDim:g,coordDimIndex:v,type:y,isExtraCoord:!0,isCalculationCoord:!0,storeDimIndex:o.length},_={name:p,coordDim:p,coordDimIndex:v+1,type:y,isExtraCoord:!0,isCalculationCoord:!0,storeDimIndex:o.length+1}
a?(s&&(m.storeDimIndex=s.ensureCalculationDimension(p,y),_.storeDimIndex=s.ensureCalculationDimension(d,y)),a.appendCalculationDimension(m),a.appendCalculationDimension(_)):(o.push(m),o.push(_))}return{stackedDimension:c&&c.name,stackedByDimension:h&&h.name,isStackedByIndex:l,stackedOverDimension:p,stackResultDimension:d}}function a(t,e){return!!e&&e===t.getCalculationInfo("stackedDimension")}function s(t,e){return a(t,e)?t.getCalculationInfo("stackResultDimension"):e}},9784:(t,e,n)=>{n.d(e,{Fl:()=>a,Pn:()=>o})
var i=n(3947),r=n(8301)
function o(t,e){var n=e&&e.type
return"ordinal"===n?t:("time"!==n||(0,r.Et)(t)||null==t||"-"===t||(t=+(0,i._U)(t)),null==t||""===t?NaN:Number(t))}n(310),(0,r.nt)({number:function(t){return parseFloat(t)},time:function(t){return+(0,i._U)(t)},trim:function(t){return(0,r.Kg)(t)?(0,r.Bq)(t):t}})
var a=function(){function t(t,e){var n="desc"===t
this._resultLT=n?1:-1,null==e&&(e=n?"min":"max"),this._incomparable="min"===e?-1/0:1/0}return t.prototype.evaluate=function(t,e){var n=(0,r.Et)(t)?t:(0,i.Sm)(t),o=(0,r.Et)(e)?e:(0,i.Sm)(e),a=isNaN(n),s=isNaN(o)
if(a&&(n=this._incomparable),s&&(o=this._incomparable),a&&s){var l=(0,r.Kg)(t),u=(0,r.Kg)(e)
l&&(n=u?t:0),u&&(o=l?e:0)}return n<o?this._resultLT:n>o?-this._resultLT:0},t}()},5157:(t,e,n)=>{n.d(e,{B:()=>l,l:()=>a})
var i=n(8301),r=n(6233),o=function(){function t(t,e){this._encode=t,this._schema=e}return t.prototype.get=function(){return{fullDimensions:this._getFullDimensionNames(),encode:this._encode}},t.prototype._getFullDimensionNames=function(){return this._cachedDimNames||(this._cachedDimNames=this._schema?this._schema.makeOutputDimensionNames():[]),this._cachedDimNames},t}()
function a(t,e){var n={},a=n.encode={},l=(0,i.nt)(),u=[],h=[],c={};(0,i.__)(t.dimensions,(function(e){var n,i=t.getDimensionInfo(e),o=i.coordDim
if(o){var d=i.coordDimIndex
s(a,o)[d]=e,i.isExtraCoord||(l.set(o,1),"ordinal"!==(n=i.type)&&"time"!==n&&(u[0]=e),s(c,o)[d]=t.getDimensionIndex(i.name)),i.defaultTooltip&&h.push(e)}r.Pe.each((function(t,e){var n=s(a,e),r=i.otherDims[e]
null!=r&&!1!==r&&(n[r]=i.name)}))}))
var d=[],p={}
l.each((function(t,e){var n=a[e]
p[e]=n[0],d=d.concat(n)})),n.dataDimsOnCoord=d,n.dataDimIndicesOnCoord=(0,i.Tj)(d,(function(e){return t.getDimensionInfo(e).storeDimIndex})),n.encodeFirstDimNotExtra=p
var f=a.label
f&&f.length&&(u=f.slice())
var g=a.tooltip
return g&&g.length?h=g.slice():h.length||(h=u.slice()),a.defaultedLabel=u,a.defaultedTooltip=h,n.userOutput=new o(c,e),n}function s(t,e){return t.hasOwnProperty(e)||(t[e]=[]),t[e]}function l(t){return"category"===t?"ordinal":"time"===t?"time":"float"}},6108:(t,e,n)=>{n.d(e,{A:()=>d})
var i=n(8301),r=(0,n(5225).$r)()
function o(t,e){if(r(this).mainData===this){var n=(0,i.X$)({},r(this).datas)
n[this.dataType]=e,h(e,n,t)}else c(e,this.dataType,r(this).mainData,t)
return e}function a(t,e){return t.struct&&t.struct.update(),e}function s(t,e){return(0,i.__)(r(e).datas,(function(n,i){n!==e&&c(n.cloneShallow(),i,e,t)})),e}function l(t){var e=r(this).mainData
return null==t||null==e?e:r(e).datas[t]}function u(){var t=r(this).mainData
return null==t?[{data:t}]:(0,i.Tj)((0,i.HP)(r(t).datas),(function(e){return{type:e,data:r(t).datas[e]}}))}function h(t,e,n){r(t).datas={},(0,i.__)(e,(function(e,i){c(e,i,t,n)}))}function c(t,e,n,i){r(n).datas[e]=t,r(t).mainData=n,t.dataType=e,i.struct&&(t[i.structAttr]=i.struct,i.struct[i.datasAttr[e]]=t),t.getLinkedData=l,t.getLinkedDataAll=u}const d=function(t){var e=t.mainData,n=t.datas
n||(n={main:e},t.datasAttr={main:"data"}),t.datas=t.mainData=null,h(e,n,t),(0,i.__)(n,(function(n){(0,i.__)(e.TRANSFERABLE_METHODS,(function(e){n.wrapMethod(e,(0,i.cF)(o,t))}))})),e.wrapMethod("cloneShallow",(0,i.cF)(s,t)),(0,i.__)(e.CHANGABLE_METHODS,(function(n){e.wrapMethod(n,(0,i.cF)(a,t))})),(0,i.vA)(n[e.dataType]===e)}},6604:(t,e,n)=>{n.d(e,{G9:()=>c,Gt:()=>d,OC:()=>u,PU:()=>p,ln:()=>h,ps:()=>l,sc:()=>a})
var i=n(5225),r=n(8301),o=n(6233),a={Must:1,Might:2,Not:3},s=(0,i.$r)()
function l(t){s(t).datasetMap=(0,r.nt)()}function u(t,e,n){var i={},o=c(e)
if(!o||!t)return i
var a,l,u=[],h=[],d=e.ecModel,p=s(d).datasetMap,f=o.uid+"_"+n.seriesLayoutBy
t=t.slice(),(0,r.__)(t,(function(e,n){var o=(0,r.Gv)(e)?e:t[n]={name:e}
"ordinal"===o.type&&null==a&&(a=n,l=v(o)),i[o.name]=[]}))
var g=p.get(f)||p.set(f,{categoryWayDim:l,valueWayDim:0})
function y(t,e,n){for(var i=0;i<n;i++)t.push(e+i)}function v(t){var e=t.dimsDef
return e?e.length:1}return(0,r.__)(t,(function(t,e){var n=t.name,r=v(t)
if(null==a){var o=g.valueWayDim
y(i[n],o,r),y(h,o,r),g.valueWayDim+=r}else a===e?(y(i[n],0,r),y(u,0,r)):(o=g.categoryWayDim,y(i[n],o,r),y(h,o,r),g.categoryWayDim+=r)})),u.length&&(i.itemName=u),h.length&&(i.seriesName=h),i}function h(t,e,n){var i={}
if(!c(t))return i
var s,l=e.sourceFormat,u=e.dimensionsDefine
l!==o.Wk&&l!==o.t1||(0,r.__)(u,(function(t,e){"name"===((0,r.Gv)(t)?t.name:t)&&(s=e)}))
var h=function(){for(var t={},i={},r=[],o=0,h=Math.min(5,n);o<h;o++){var c=f(e.data,l,e.seriesLayoutBy,u,e.startIndex,o)
r.push(c)
var d=c===a.Not
if(d&&null==t.v&&o!==s&&(t.v=o),(null==t.n||t.n===t.v||!d&&r[t.n]===a.Not)&&(t.n=o),p(t)&&r[t.n]!==a.Not)return t
d||(c===a.Might&&null==i.v&&o!==s&&(i.v=o),null!=i.n&&i.n!==i.v||(i.n=o))}function p(t){return null!=t.v&&null!=t.n}return p(t)?t:p(i)?i:null}()
if(h){i.value=[h.v]
var d=null!=s?s:h.n
i.itemName=[d],i.seriesName=[d]}return i}function c(t){if(!t.get("data",!0))return(0,i.JO)(t.ecModel,"dataset",{index:t.get("datasetIndex",!0),id:t.get("datasetId",!0)},i.US).models[0]}function d(t){return t.get("transform",!0)||t.get("fromTransformResult",!0)?(0,i.JO)(t.ecModel,"dataset",{index:t.get("fromDatasetIndex",!0),id:t.get("fromDatasetId",!0)},i.US).models:[]}function p(t,e){return f(t.data,t.sourceFormat,t.seriesLayoutBy,t.dimensionsDefine,t.startIndex,e)}function f(t,e,n,s,l,u){var h,c,d
if((0,r.iu)(t))return a.Not
if(s){var p=s[u];(0,r.Gv)(p)?(c=p.name,d=p.type):(0,r.Kg)(p)&&(c=p)}if(null!=d)return"ordinal"===d?a.Must:a.Not
if(e===o.Km){var f=t
if(n===o.oC){for(var g=f[u],y=0;y<(g||[]).length&&y<5;y++)if(null!=(h=A(g[l+y])))return h}else for(y=0;y<f.length&&y<5;y++){var v=f[l+y]
if(v&&null!=(h=A(v[u])))return h}}else if(e===o.Wk){var m=t
if(!c)return a.Not
for(y=0;y<m.length&&y<5;y++)if((b=m[y])&&null!=(h=A(b[c])))return h}else if(e===o.t1){var _=t
if(!c)return a.Not
if(!(g=_[c])||(0,r.iu)(g))return a.Not
for(y=0;y<g.length&&y<5;y++)if(null!=(h=A(g[y])))return h}else if(e===o.mK){var x=t
for(y=0;y<x.length&&y<5;y++){var b=x[y],w=(0,i.vj)(b)
if(!(0,r.cy)(w))return a.Not
if(null!=(h=A(w[u])))return h}}function A(t){var e=(0,r.Kg)(t)
return null!=t&&Number.isFinite(Number(t))&&""!==t?e?a.Might:a.Not:e&&"-"!==t?a.Must:void 0}return a.Not}},2713:(t,e,n)=>{n.d(e,{py:()=>v,v5:()=>y})
var i=n(6233),r=n(5225),o=n(8301),a=n(4152),s=n(9784),l=n(310),u=n(9879),h=function(){function t(){}return t.prototype.getRawData=function(){throw new Error("not supported")},t.prototype.getRawDataItem=function(t){throw new Error("not supported")},t.prototype.cloneRawData=function(){},t.prototype.getDimensionInfo=function(t){},t.prototype.cloneAllDimensionInfo=function(){},t.prototype.count=function(){},t.prototype.retrieveValue=function(t,e){},t.prototype.retrieveValueFromItem=function(t,e){},t.prototype.convertValue=function(t,e){return(0,s.Pn)(t,e)},t}()
function c(t){return _(t.sourceFormat)||(0,l.$8)(""),t.data}function d(t){var e=t.sourceFormat,n=t.data
if(_(e)||(0,l.$8)(""),e===i.Km){for(var r=[],a=0,s=n.length;a<s;a++)r.push(n[a].slice())
return r}if(e===i.Wk){for(r=[],a=0,s=n.length;a<s;a++)r.push((0,o.X$)({},n[a]))
return r}}function p(t,e,n){if(null!=n)return(0,o.Et)(n)||!isNaN(n)&&!(0,o.$3)(e,n)?t[n]:(0,o.$3)(e,n)?e[n]:void 0}function f(t){return(0,o.o8)(t)}var g=(0,o.nt)()
function y(t){var e=(t=(0,o.o8)(t)).type
e||(0,l.$8)("")
var n=e.split(":")
2!==n.length&&(0,l.$8)("")
var i=!1
"echarts"===n[0]&&(e=n[1],i=!0),t.__isBuiltIn=i,g.set(e,t)}function v(t,e,n){var i=(0,r.qB)(t),o=i.length
o||(0,l.$8)("")
for(var a=0,s=o;a<s;a++)e=m(i[a],e),a!==s-1&&(e.length=Math.max(e.length,1))
return e}function m(t,e,n,s){e.length||(0,l.$8)(""),(0,o.Gv)(t)||(0,l.$8)("")
var y=t.type,v=g.get(y)
v||(0,l.$8)("")
var m=(0,o.Tj)(e,(function(t){return function(t,e){var n=new h,r=t.data,s=n.sourceFormat=t.sourceFormat,u=t.startIndex
t.seriesLayoutBy!==i.i_&&(0,l.$8)("")
var g=[],y={},v=t.dimensionsDefine
if(v)(0,o.__)(v,(function(t,e){var n=t.name,i={index:e,name:n,displayName:t.displayName}
g.push(i),null!=n&&((0,o.$3)(y,n)&&(0,l.$8)(""),y[n]=i)}))
else for(var m=0;m<t.dimensionsDetectedCount;m++)g.push({index:m})
var _=(0,a.sC)(s,i.i_)
e.__isBuiltIn&&(n.getRawDataItem=function(t){return _(r,u,g,t)},n.getRawData=(0,o.oI)(c,null,t)),n.cloneRawData=(0,o.oI)(d,null,t)
var x=(0,a.Kd)(s,i.i_)
n.count=(0,o.oI)(x,null,r,u,g)
var b=(0,a.uQ)(s)
n.retrieveValue=function(t,e){var n=_(r,u,g,t)
return w(n,e)}
var w=n.retrieveValueFromItem=function(t,e){if(null!=t){var n=g[e]
return n?b(t,e,n.name):void 0}}
return n.getDimensionInfo=(0,o.oI)(p,null,g,y),n.cloneAllDimensionInfo=(0,o.oI)(f,null,g),n}(t,v)})),x=(0,r.qB)(v.transform({upstream:m[0],upstreamList:m,config:(0,o.o8)(t.config)}))
return(0,o.Tj)(x,(function(t,n){var r;(0,o.Gv)(t)||(0,l.$8)(""),t.data||(0,l.$8)(""),_((0,u.wZ)(t.data))||(0,l.$8)("")
var a=e[0]
if(a&&0===n&&!t.dimensions){var s=a.startIndex
s&&(t.data=a.data.slice(0,s).concat(t.data)),r={seriesLayoutBy:i.i_,sourceHeader:s,dimensions:a.metaRawOption.dimensions}}else r={seriesLayoutBy:i.i_,sourceHeader:0,dimensions:t.dimensions}
return(0,u.gV)(t.data,r,null)}))}function _(t){return t===i.Km||t===i.Wk}},9697:(t,e,n)=>{n.d(e,{rF:()=>a})
var i=n(4753),r=n(7413),o=n(4061)
function a(t,e){var n=e
e instanceof r.A||(n=new r.A(e))
var o=i.f$(n)
return o.setExtent(t[0],t[1]),i.af(o,n),o}o.sJ,o.iJ,o.me},2862:(t,e,n)=>{n.d(e,{Y:()=>p})
var i=n(7454),r=n(4642),o=n(1993),a=n(7518),s=n(3397),l=n(8301),u=n(7313),h=n(7662),c=[],d={registerPreprocessor:i.lP,registerProcessor:i.qg,registerPostInit:i.cf,registerPostUpdate:i.tb,registerUpdateLifecycle:i.xV,registerAction:i.OH,registerCoordinateSystem:i.pX,registerLayout:i.Oh,registerVisual:i.AF,registerTransform:i.iY,registerLoading:i.Ej,registerMap:i.mz,registerImpl:u.m,PRIORITY:i.FQ,ComponentModel:a.A,ComponentView:r.A,SeriesModel:s.A,ChartView:o.A,registerComponentModel:function(t){a.A.registerClass(t)},registerComponentView:function(t){r.A.registerClass(t)},registerSeriesModel:function(t){s.A.registerClass(t)},registerChartView:function(t){o.A.registerClass(t)},registerSubTypeDefaulter:function(t,e){a.A.registerSubTypeDefaulter(t,e)},registerPainter:function(t,e){(0,h.fI)(t,e)}}
function p(t){(0,l.cy)(t)?(0,l.__)(t,(function(t){p(t)})):(0,l.qh)(c,t)>=0||(c.push(t),(0,l.Tn)(t)&&(t={install:t}),t.install(d))}},7786:(t,e,n)=>{n.d(e,{If:()=>s,Xe:()=>a,os:()=>o})
var i=n(7427),r=n(4703)
function o(t){for(var e=[],n=0;n<t.length;n++){var r=t[n]
if(!r.defaultAttr.ignore){var o=r.label,a=o.getComputedTransform(),s=o.getBoundingRect(),l=!a||a[1]<1e-5&&a[2]<1e-5,u=o.style.margin||0,h=s.clone()
h.applyTransform(a),h.x-=u/2,h.y-=u/2,h.width+=u,h.height+=u
var c=l?new i.A(s,a):null
e.push({label:o,labelLine:r.labelLine,rect:h,localRect:s,obb:c,priority:r.priority,defaultAttr:r.defaultAttr,layoutOption:r.computedLayoutOption,axisAligned:l,transform:a})}}return e}function a(t,e,n,i){return function(t,e,n,i,r,o){var a=t.length
if(!(a<2)){t.sort((function(t,n){return t.rect[e]-n.rect[e]}))
for(var s,l=0,u=!1,h=[],c=0,d=0;d<a;d++){var p=t[d],f=p.rect;(s=f[e]-l)<0&&(f[e]-=s,p.label[e]-=s,u=!0)
var g=Math.max(-s,0)
h.push(g),c+=g,l=f[e]+f[n]}c>0&&o&&w(-c/a,0,a)
var y,v,m=t[0],_=t[a-1]
return x(),y<0&&A(-y,.8),v<0&&A(v,.8),x(),b(y,v,1),b(v,y,-1),x(),y<0&&S(-y),v<0&&S(v),u}function x(){y=m.rect[e]-i,v=r-_.rect[e]-_.rect[n]}function b(t,e,n){if(t<0){var i=Math.min(e,-t)
if(i>0){w(i*n,0,a)
var r=i+t
r<0&&A(-r*n,1)}else A(-t*n,1)}}function w(n,i,r){0!==n&&(u=!0)
for(var o=i;o<r;o++){var a=t[o]
a.rect[e]+=n,a.label[e]+=n}}function A(i,r){for(var o=[],s=0,l=1;l<a;l++){var u=t[l-1].rect,h=Math.max(t[l].rect[e]-u[e]-u[n],0)
o.push(h),s+=h}if(s){var c=Math.min(Math.abs(i)/s,r)
if(i>0)for(l=0;l<a-1;l++)w(o[l]*c,0,l+1)
else for(l=a-1;l>0;l--)w(-o[l-1]*c,l,a)}}function S(t){var e=t<0?-1:1
t=Math.abs(t)
for(var n=Math.ceil(t/(a-1)),i=0;i<a-1;i++)if(e>0?w(n,0,i+1):w(-n,a-i-1,a),(t-=n)<=0)return}}(t,"y","height",e,n,i)}function s(t){var e=[]
t.sort((function(t,e){return e.priority-t.priority}))
var n=new r.A(0,0,0,0)
function o(t){if(!t.ignore){var e=t.ensureState("emphasis")
null==e.ignore&&(e.ignore=!1)}t.ignore=!0}for(var a=0;a<t.length;a++){var s=t[a],l=s.axisAligned,u=s.localRect,h=s.transform,c=s.label,d=s.labelLine
n.copy(s.rect),n.width-=.1,n.height-=.1,n.x+=.05,n.y+=.05
for(var p=s.obb,f=!1,g=0;g<e.length;g++){var y=e[g]
if(n.intersect(y.rect)){if(l&&y.axisAligned){f=!0
break}if(y.obb||(y.obb=new i.A(y.localRect,y.transform)),p||(p=new i.A(u,h)),p.intersect(y.obb)){f=!0
break}}}f?(o(c),d&&o(d)):(c.attr("ignore",s.defaultAttr.ignore),d&&d.attr("ignore",s.defaultAttr.labelGuideIgnore),e.push(s))}}},923:(t,e,n)=>{n.d(e,{Lu:()=>m,Oh:()=>_,VB:()=>c,c8:()=>v,lx:()=>h,qM:()=>u})
var i=n(5652),r=n(8301),o=n(200),a=n(5225),s={}
function l(t,e,n){var i,a=t.labelFetcher,s=t.labelDataIndex,l=t.labelDimIndex,u=e.normal
a&&(i=a.getFormattedLabel(s,"normal",null,l,u&&u.get("formatter"),null!=n?{interpolatedValue:n}:null)),null==i&&(i=(0,r.Tn)(t.defaultText)?t.defaultText(s,t,n):t.defaultText)
for(var h={normal:i},c=0;c<o.BV.length;c++){var d=o.BV[c],p=e[d]
h[d]=(0,r.bZ)(a?a.getFormattedLabel(s,d,null,l,p&&p.get("formatter")):null,i)}return h}function u(t,e,n,a){n=n||s
for(var u=t instanceof i.Ay,h=!1,p=0;p<o.wV.length;p++)if((x=e[o.wV[p]])&&x.getShallow("show")){h=!0
break}var f=u?t:t.getTextContent()
if(h){u||(f||(f=new i.Ay,t.setTextContent(f)),t.stateProxy&&(f.stateProxy=t.stateProxy))
var g=l(n,e),y=e.normal,v=!!y.getShallow("show"),_=c(y,a&&a.normal,n,!1,!u)
for(_.text=g.normal,u||t.setTextConfig(d(y,n,!1)),p=0;p<o.BV.length;p++){var x,b=o.BV[p]
if(x=e[b]){var w=f.ensureState(b),A=!!(0,r.bZ)(x.getShallow("show"),v)
A!==v&&(w.ignore=!A),w.style=c(x,a&&a[b],n,!0,!u),w.style.text=g[b],u||(t.ensureState(b).textConfig=d(x,n,!0))}}f.silent=!!y.getShallow("silent"),null!=f.style.x&&(_.x=f.style.x),null!=f.style.y&&(_.y=f.style.y),f.ignore=!v,f.useStyle(_),f.dirty(),n.enableTextSetter&&(m(f).setLabelText=function(t){var i=l(n,e,t)
!function(t,e){for(var n=0;n<o.BV.length;n++){var i=o.BV[n],r=e[i],a=t.ensureState(i)
a.style=a.style||{},a.style.text=r}var s=t.currentStates.slice()
t.clearStates(!0),t.setStyle({text:e.normal}),t.useStates(s,!0)}(f,i)})}else f&&(f.ignore=!0)
t.dirty()}function h(t,e){e=e||"label"
for(var n={normal:t.getModel(e)},i=0;i<o.BV.length;i++){var r=o.BV[i]
n[r]=t.getModel([r,e])}return n}function c(t,e,n,i,o){var a={}
return function(t,e,n,i,o){n=n||s
var a,l=e.ecModel,u=l&&l.option.textStyle,h=function(t){for(var e;t&&t!==t.ecModel;){var n=(t.option||s).rich
if(n){e=e||{}
for(var i=(0,r.HP)(n),o=0;o<i.length;o++)e[i[o]]=1}t=t.parentModel}return e}(e)
if(h)for(var c in a={},h)if(h.hasOwnProperty(c)){var d=e.getModel(["rich",c])
y(a[c]={},d,u,n,i,o,!1,!0)}a&&(t.rich=a)
var p=e.get("overflow")
p&&(t.overflow=p)
var f=e.get("minMargin")
null!=f&&(t.margin=f),y(t,e,u,n,i,o,!0,!1)}(a,t,n,i,o),e&&(0,r.X$)(a,e),a}function d(t,e,n){e=e||{}
var i,o={},a=t.getShallow("rotate"),s=(0,r.bZ)(t.getShallow("distance"),n?null:5),l=t.getShallow("offset")
return"outside"===(i=t.getShallow("position")||(n?null:"inside"))&&(i=e.defaultOutsidePosition||"top"),null!=i&&(o.position=i),null!=l&&(o.offset=l),null!=a&&(a*=Math.PI/180,o.rotation=a),null!=s&&(o.distance=s),o.outsideFill="inherit"===t.get("color")?e.inheritColor||null:"auto",o}var p=["fontStyle","fontWeight","fontSize","fontFamily","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY"],f=["align","lineHeight","width","height","tag","verticalAlign","ellipsis"],g=["padding","borderWidth","borderRadius","borderDashOffset","backgroundColor","borderColor","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"]
function y(t,e,n,i,o,a,l,u){n=!o&&n||s
var h=i&&i.inheritColor,c=e.getShallow("color"),d=e.getShallow("textBorderColor"),y=(0,r.bZ)(e.getShallow("opacity"),n.opacity)
"inherit"!==c&&"auto"!==c||(c=h||null),"inherit"!==d&&"auto"!==d||(d=h||null),a||(c=c||n.color,d=d||n.textBorderColor),null!=c&&(t.fill=c),null!=d&&(t.stroke=d)
var v=(0,r.bZ)(e.getShallow("textBorderWidth"),n.textBorderWidth)
null!=v&&(t.lineWidth=v)
var m=(0,r.bZ)(e.getShallow("textBorderType"),n.textBorderType)
null!=m&&(t.lineDash=m)
var _=(0,r.bZ)(e.getShallow("textBorderDashOffset"),n.textBorderDashOffset)
null!=_&&(t.lineDashOffset=_),o||null!=y||u||(y=i&&i.defaultOpacity),null!=y&&(t.opacity=y),o||a||null==t.fill&&i.inheritColor&&(t.fill=i.inheritColor)
for(var x=0;x<p.length;x++){var b=p[x]
null!=(A=(0,r.bZ)(e.getShallow(b),n[b]))&&(t[b]=A)}for(x=0;x<f.length;x++)b=f[x],null!=(A=e.getShallow(b))&&(t[b]=A)
if(null==t.verticalAlign){var w=e.getShallow("baseline")
null!=w&&(t.verticalAlign=w)}if(!l||!i.disableBox){for(x=0;x<g.length;x++){var A
b=g[x],null!=(A=e.getShallow(b))&&(t[b]=A)}var S=e.getShallow("borderType")
null!=S&&(t.borderDash=S),"auto"!==t.backgroundColor&&"inherit"!==t.backgroundColor||!h||(t.backgroundColor=h),"auto"!==t.borderColor&&"inherit"!==t.borderColor||!h||(t.borderColor=h)}}function v(t,e){var n=e&&e.getModel("textStyle")
return(0,r.Bq)([t.fontStyle||n&&n.getShallow("fontStyle")||"",t.fontWeight||n&&n.getShallow("fontWeight")||"",(t.fontSize||n&&n.getShallow("fontSize")||12)+"px",t.fontFamily||n&&n.getShallow("fontFamily")||"sans-serif"].join(" "))}var m=(0,a.$r)()
function _(t,e,n,i){if(t){var r=m(t)
r.prevValue=r.value,r.value=n
var o=e.normal
r.valueAnimation=o.get("valueAnimation"),r.valueAnimation&&(r.precision=o.get("precision"),r.defaultInterpolatedText=i,r.statesModels=e)}}},8907:(t,e,n)=>{n.d(e,{GL:()=>c,KF:()=>g,VA:()=>p,Zp:()=>f,vq:()=>d})
var i=n(8301),r=n(3947),o=n(4061),a=n(2165),s=n(6228),l="__ec_stack_"
function u(t){return t.get("stack")||l+t.seriesIndex}function h(t){return t.dim+t.index}function c(t,e){var n=[]
return e.eachSeriesByType(t,(function(t){y(t)&&n.push(t)})),n}function d(t){var e=function(t){var e={};(0,i.__)(t,(function(t){var n=t.coordinateSystem.getBaseAxis()
if("time"===n.type||"value"===n.type)for(var i=t.getData(),r=n.dim+"_"+n.index,o=i.getDimensionIndex(i.mapDimension(n.dim)),a=i.getStore(),s=0,l=a.count();s<l;++s){var u=a.get(o,s)
e[r]?e[r].push(u):e[r]=[u]}}))
var n={}
for(var r in e)if(e.hasOwnProperty(r)){var o=e[r]
if(o){o.sort((function(t,e){return t-e}))
for(var a=null,s=1;s<o.length;++s){var l=o[s]-o[s-1]
l>0&&(a=null===a?l:Math.min(a,l))}n[r]=a}}return n}(t),n=[]
return(0,i.__)(t,(function(t){var i,o=t.coordinateSystem.getBaseAxis(),a=o.getExtent()
if("category"===o.type)i=o.getBandWidth()
else if("value"===o.type||"time"===o.type){var s=o.dim+"_"+o.index,l=e[s],c=Math.abs(a[1]-a[0]),d=o.scale.getExtent(),p=Math.abs(d[1]-d[0])
i=l?c/p*l:c}else{var f=t.getData()
i=Math.abs(a[1]-a[0])/f.count()}var g=(0,r.lo)(t.get("barWidth"),i),y=(0,r.lo)(t.get("barMaxWidth"),i),m=(0,r.lo)(t.get("barMinWidth")||(v(t)?.5:1),i),_=t.get("barGap"),x=t.get("barCategoryGap")
n.push({bandWidth:i,barWidth:g,barMaxWidth:y,barMinWidth:m,barGap:_,barCategoryGap:x,axisKey:h(o),stackId:u(t)})})),function(t){var e={};(0,i.__)(t,(function(t,n){var i=t.axisKey,r=t.bandWidth,o=e[i]||{bandWidth:r,remainedWidth:r,autoWidthCount:0,categoryGap:null,gap:"20%",stacks:{}},a=o.stacks
e[i]=o
var s=t.stackId
a[s]||o.autoWidthCount++,a[s]=a[s]||{width:0,maxWidth:0}
var l=t.barWidth
l&&!a[s].width&&(a[s].width=l,l=Math.min(o.remainedWidth,l),o.remainedWidth-=l)
var u=t.barMaxWidth
u&&(a[s].maxWidth=u)
var h=t.barMinWidth
h&&(a[s].minWidth=h)
var c=t.barGap
null!=c&&(o.gap=c)
var d=t.barCategoryGap
null!=d&&(o.categoryGap=d)}))
var n={}
return(0,i.__)(e,(function(t,e){n[e]={}
var o=t.stacks,a=t.bandWidth,s=t.categoryGap
if(null==s){var l=(0,i.HP)(o).length
s=Math.max(35-4*l,15)+"%"}var u=(0,r.lo)(s,a),h=(0,r.lo)(t.gap,1),c=t.remainedWidth,d=t.autoWidthCount,p=(c-u)/(d+(d-1)*h)
p=Math.max(p,0),(0,i.__)(o,(function(t){var e=t.maxWidth,n=t.minWidth
if(t.width)i=t.width,e&&(i=Math.min(i,e)),n&&(i=Math.max(i,n)),t.width=i,c-=i+h*i,d--
else{var i=p
e&&e<i&&(i=Math.min(e,c)),n&&n>i&&(i=n),i!==p&&(t.width=i,c-=i+h*i,d--)}})),p=(c-u)/(d+(d-1)*h),p=Math.max(p,0)
var f,g=0;(0,i.__)(o,(function(t,e){t.width||(t.width=p),f=t,g+=t.width*(1+h)})),f&&(g-=f.width*h)
var y=-g/2;(0,i.__)(o,(function(t,i){n[e][i]=n[e][i]||{bandWidth:a,offset:y,width:t.width},y+=t.width*(1+h)}))})),n}(n)}function p(t,e,n){if(t&&e){var i=t[h(e)]
return null!=i&&null!=n?i[u(n)]:i}}function f(t,e){var n=c(t,e),r=d(n);(0,i.__)(n,(function(t){var e=t.getData(),n=t.coordinateSystem.getBaseAxis(),i=u(t),o=r[h(n)][i],a=o.offset,s=o.width
e.setLayout({bandWidth:o.bandWidth,offset:a,size:s})}))}function g(t){return{seriesType:t,plan:(0,a.A)(),reset:function(t){if(y(t)){var e=t.getData(),n=t.coordinateSystem,i=n.getBaseAxis(),r=n.getOtherAxis(i),a=e.getDimensionIndex(e.mapDimension(r.dim)),l=e.getDimensionIndex(e.mapDimension(i.dim)),u=t.get("showBackground",!0),h=e.mapDimension(r.dim),c=e.getCalculationInfo("stackResultDimension"),d=(0,o.sJ)(e,h)&&!!e.getCalculationInfo("stackedOnSeries"),p=r.isHorizontal(),f=function(t,e){var n=e.model.get("startValue")
return n||(n=0),e.toGlobalCoord(e.dataToCoord("log"===e.type?n>0?n:1:n))}(0,r),g=v(t),m=t.get("barMinHeight")||0,_=c&&e.getDimensionIndex(c),x=e.getLayout("size"),b=e.getLayout("offset")
return{progress:function(t,e){for(var i,r=t.count,o=g&&(0,s.J)(3*r),h=g&&u&&(0,s.J)(3*r),c=g&&(0,s.J)(r),y=n.master.getRect(),v=p?y.width:y.height,w=e.getStore(),A=0;null!=(i=t.next());){var S=w.get(d?_:a,i),M=w.get(l,i),T=f,I=void 0
d&&(I=+S-w.get(a,i))
var C=void 0,D=void 0,k=void 0,L=void 0
if(p){var P=n.dataToPoint([S,M])
d&&(T=n.dataToPoint([I,M])[0]),C=T,D=P[1]+b,k=P[0]-T,L=x,Math.abs(k)<m&&(k=(k<0?-1:1)*m)}else P=n.dataToPoint([M,S]),d&&(T=n.dataToPoint([M,I])[1]),C=P[0]+b,D=T,k=x,L=P[1]-T,Math.abs(L)<m&&(L=(L<=0?-1:1)*m)
g?(o[A]=C,o[A+1]=D,o[A+2]=p?k:L,h&&(h[A]=p?y.x:C,h[A+1]=p?D:y.y,h[A+2]=v),c[i]=i):e.setItemLayout(i,{x:C,y:D,width:k,height:L}),A+=3}g&&e.setLayout({largePoints:o,largeDataIndices:c,largeBackgroundPoints:h,valueAxisHorizontal:p})}}}}}}function y(t){return t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type}function v(t){return t.pipelineContext&&t.pipelineContext.large}},5493:(t,e,n)=>{n.d(e,{I:()=>o,l:()=>s})
var i=n(8301),r=n(5225)
function o(t,e){function n(e,n){var i=[]
return e.eachComponent({mainType:"series",subType:t,query:n},(function(t){i.push(t.seriesIndex)})),i}(0,i.__)([[t+"ToggleSelect","toggleSelect"],[t+"Select","select"],[t+"UnSelect","unselect"]],(function(t){e(t[0],(function(e,r,o){e=(0,i.X$)({},e),o.dispatchAction((0,i.X$)(e,{type:t[1],seriesIndex:n(r,e)}))}))}))}function a(t,e,n,o,a){var s=t+e
n.isSilent(s)||o.eachComponent({mainType:"series",subType:"pie"},(function(t){for(var e=t.seriesIndex,o=t.option.selectedMap,l=a.selected,u=0;u<l.length;u++)if(l[u].seriesIndex===e){var h=t.getData(),c=(0,r.le)(h,a.fromActionPayload)
n.trigger(s,{type:s,seriesId:t.id,name:(0,i.cy)(c)?h.getName(c[0]):h.getName(c),selected:(0,i.Kg)(o)?o:(0,i.X$)({},o)})}}))}function s(t,e,n){t.on("selectchanged",(function(t){var i=n.getModel()
t.isFromClick?(a("map","selectchanged",e,i,t),a("pie","selectchanged",e,i,t)):"select"===t.fromAction?(a("map","selected",e,i,t),a("pie","selected",e,i,t)):"unselect"===t.fromAction&&(a("map","unselected",e,i,t),a("pie","unselected",e,i,t))}))}},7518:(t,e,n)=>{n.d(e,{A:()=>d})
var i=n(4784),r=n(8301),o=n(7413),a=n(5019),s=n(3078),l=n(5225),u=n(3960),h=(0,l.$r)(),c=function(t){function e(e,n,i){var r=t.call(this,e,n,i)||this
return r.uid=a.$Q("ec_cpt_model"),r}var n
return(0,i.C6)(e,t),e.prototype.init=function(t,e,n){this.mergeDefaultAndTheme(t,n)},e.prototype.mergeDefaultAndTheme=function(t,e){var n=u.ad(this),i=n?u.vs(t):{},o=e.getTheme()
r.h1(t,o.get(this.mainType)),r.h1(t,this.getDefaultOption()),n&&u.YA(t,i,n)},e.prototype.mergeOption=function(t,e){r.h1(this.option,t,!0)
var n=u.ad(this)
n&&u.YA(this.option,t,n)},e.prototype.optionUpdated=function(t,e){},e.prototype.getDefaultOption=function(){var t=this.constructor
if(!(0,s._E)(t))return t.defaultOption
var e=h(this)
if(!e.defaultOption){for(var n=[],i=t;i;){var o=i.prototype.defaultOption
o&&n.push(o),i=i.superClass}for(var a={},l=n.length-1;l>=0;l--)a=r.h1(a,n[l],!0)
e.defaultOption=a}return e.defaultOption},e.prototype.getReferringComponents=function(t,e){var n=t+"Index",i=t+"Id"
return(0,l.JO)(this.ecModel,t,{index:this.get(n,!0),id:this.get(i,!0)},e)},e.prototype.getBoxLayoutParams=function(){var t=this
return{left:t.get("left"),top:t.get("top"),right:t.get("right"),bottom:t.get("bottom"),width:t.get("width"),height:t.get("height")}},e.prototype.getZLevelKey=function(){return""},e.prototype.setZLevel=function(t){this.option.zlevel=t},e.protoInitialize=((n=e.prototype).type="component",n.id="",n.name="",n.mainType="",n.subType="",void(n.componentIndex=0)),e}(o.A);(0,s.q7)(c,o.A),(0,s.tQ)(c),a.A6(c),a.vf(c,(function(t){var e=[]
return r.__(c.getClassesByMainType(t),(function(t){e=e.concat(t.dependencies||t.prototype.dependencies||[])})),e=r.Tj(e,(function(t){return(0,s.CC)(t).main})),"dataset"!==t&&r.qh(e,"dataset")<=0&&e.unshift("dataset"),e}))
const d=c},7413:(t,e,n)=>{n.d(e,{A:()=>v})
var i=n(9714),r=n(3078),o=(0,n(5897).A)([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]]),a=function(){function t(){}return t.prototype.getAreaStyle=function(t,e){return o(this,t,e)},t}(),s=n(923),l=n(5652),u=["textStyle","color"],h=["fontStyle","fontWeight","fontSize","fontFamily","padding","lineHeight","rich","width","height","overflow"],c=new l.Ay
const d=function(){function t(){}return t.prototype.getTextColor=function(t){var e=this.ecModel
return this.getShallow("color")||(!t&&e?e.get(u):null)},t.prototype.getFont=function(){return(0,s.c8)({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel)},t.prototype.getTextRect=function(t){for(var e={text:t,verticalAlign:this.getShallow("verticalAlign")||this.getShallow("baseline")},n=0;n<h.length;n++)e[h[n]]=this.getShallow(h[n])
return c.useStyle(e),c.update(),c.getBoundingRect()},t}()
var p=n(1908),f=n(1159),g=n(8301),y=function(){function t(t,e,n){this.parentModel=e,this.ecModel=n,this.option=t}return t.prototype.init=function(t,e,n){for(var i=[],r=3;r<arguments.length;r++)i[r-3]=arguments[r]},t.prototype.mergeOption=function(t,e){(0,g.h1)(this.option,t,!0)},t.prototype.get=function(t,e){return null==t?this.option:this._doGet(this.parsePath(t),!e&&this.parentModel)},t.prototype.getShallow=function(t,e){var n=this.option,i=null==n?n:n[t]
if(null==i&&!e){var r=this.parentModel
r&&(i=r.getShallow(t))}return i},t.prototype.getModel=function(e,n){var i=null!=e,r=i?this.parsePath(e):null
return new t(i?this._doGet(r):this.option,n=n||this.parentModel&&this.parentModel.getModel(this.resolveParentPath(r)),this.ecModel)},t.prototype.isEmpty=function(){return null==this.option},t.prototype.restoreData=function(){},t.prototype.clone=function(){return new(0,this.constructor)((0,g.o8)(this.option))},t.prototype.parsePath=function(t){return"string"==typeof t?t.split("."):t},t.prototype.resolveParentPath=function(t){return t},t.prototype.isAnimationEnabled=function(){if(!i.A.node&&this.option){if(null!=this.option.animation)return!!this.option.animation
if(this.parentModel)return this.parentModel.isAnimationEnabled()}},t.prototype._doGet=function(t,e){var n=this.option
if(!t)return n
for(var i=0;i<t.length&&(!t[i]||null!=(n=n&&"object"==typeof n?n[t[i]]:null));i++);return null==n&&e&&(n=e._doGet(this.resolveParentPath(t),e.parentModel)),n},t}();(0,r.gq)(y),(0,r.Od)(y),(0,g.co)(y,p.J),(0,g.co)(y,f.s),(0,g.co)(y,a),(0,g.co)(y,d)
const v=y},3397:(t,e,n)=>{n.d(e,{A:()=>O})
var i=n(4784),r=n(8301),o=n(9714),a=n(5225),s=n(7518),l=n(8639),u=n(4272),h=n(3960),c=n(3046),d=n(3078),p=n(9879),f=n(6233),g=n(6604),y=n(2713),v=n(8337),m=n(4152),_=function(){function t(t){this._sourceList=[],this._storeList=[],this._upstreamSignList=[],this._versionSignBase=0,this._dirty=!0,this._sourceHost=t}return t.prototype.dirty=function(){this._setLocalSource([],[]),this._storeList=[],this._dirty=!0},t.prototype._setLocalSource=function(t,e){this._sourceList=t,this._upstreamSignList=e,this._versionSignBase++,this._versionSignBase>9e10&&(this._versionSignBase=0)},t.prototype._getVersionSign=function(){return this._sourceHost.uid+"_"+this._versionSignBase},t.prototype.prepareSource=function(){this._isDirty()&&(this._createSource(),this._dirty=!1)},t.prototype._createSource=function(){this._setLocalSource([],[])
var t,e,n=this._sourceHost,i=this._getUpstreamSourceManagers(),o=!!i.length
if(x(n)){var a=n,s=void 0,l=void 0,u=void 0
if(o){var h=i[0]
h.prepareSource(),s=(u=h.getSource()).data,l=u.sourceFormat,e=[h._getVersionSign()]}else s=a.get("data",!0),l=(0,r.iu)(s)?f.XO:f.mK,e=[]
var c=this._getSourceMetaRawOption()||{},d=u&&u.metaRawOption||{},g=(0,r.bZ)(c.seriesLayoutBy,d.seriesLayoutBy)||null,y=(0,r.bZ)(c.sourceHeader,d.sourceHeader),v=(0,r.bZ)(c.dimensions,d.dimensions)
t=g!==d.seriesLayoutBy||!!y!=!!d.sourceHeader||v?[(0,p.gV)(s,{seriesLayoutBy:g,sourceHeader:y,dimensions:v},l)]:[]}else{var m=n
if(o){var _=this._applyTransform(i)
t=_.sourceList,e=_.upstreamSignList}else{var b=m.get("source",!0)
t=[(0,p.gV)(b,this._getSourceMetaRawOption(),null)],e=[]}}this._setLocalSource(t,e)},t.prototype._applyTransform=function(t){var e,n=this._sourceHost,i=n.get("transform",!0),o=n.get("fromTransformResult",!0)
null!=o&&1!==t.length&&b("")
var a=[],s=[]
return(0,r.__)(t,(function(t){t.prepareSource()
var e=t.getSource(o||0)
null==o||e||b(""),a.push(e),s.push(t._getVersionSign())})),i?e=(0,y.py)(i,a,{datasetIndex:n.componentIndex}):null!=o&&(e=[(0,p.BE)(a[0])]),{sourceList:e,upstreamSignList:s}},t.prototype._isDirty=function(){if(this._dirty)return!0
for(var t=this._getUpstreamSourceManagers(),e=0;e<t.length;e++){var n=t[e]
if(n._isDirty()||this._upstreamSignList[e]!==n._getVersionSign())return!0}},t.prototype.getSource=function(t){t=t||0
var e=this._sourceList[t]
if(!e){var n=this._getUpstreamSourceManagers()
return n[0]&&n[0].getSource(t)}return e},t.prototype.getSharedDataStore=function(t){var e=t.makeStoreSchema()
return this._innerGetDataStore(e.dimensions,t.source,e.hash)},t.prototype._innerGetDataStore=function(t,e,n){var i=this._storeList,r=i[0]
r||(r=i[0]={})
var o=r[n]
if(!o){var a=this._getUpstreamSourceManagers()[0]
x(this._sourceHost)&&a?o=a._innerGetDataStore(t,e,n):(o=new v.Ay).initData(new m.d1(e,t.length),t),r[n]=o}return o},t.prototype._getUpstreamSourceManagers=function(){var t=this._sourceHost
if(x(t)){var e=(0,g.G9)(t)
return e?[e.getSourceManager()]:[]}return(0,r.Tj)((0,g.Gt)(t),(function(t){return t.getSourceManager()}))},t.prototype._getSourceMetaRawOption=function(){var t,e,n,i=this._sourceHost
if(x(i))t=i.get("seriesLayoutBy",!0),e=i.get("sourceHeader",!0),n=i.get("dimensions",!0)
else if(!this._getUpstreamSourceManagers().length){var r=i
t=r.get("seriesLayoutBy",!0),e=r.get("sourceHeader",!0),n=r.get("dimensions",!0)}return{seriesLayoutBy:t,sourceHeader:e,dimensions:n}},t}()
function x(t){return"series"===t.mainType}function b(t){throw new Error(t)}var w=n(7446),A=a.$r()
function S(t,e){return t.getName(e)||t.getId(e)}var M=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this
return e._selectedDataIndicesMap={},e}var n
return(0,i.C6)(e,t),e.prototype.init=function(t,e,n){this.seriesIndex=this.componentIndex,this.dataTask=(0,c.U)({count:I,reset:C}),this.dataTask.context={model:this},this.mergeDefaultAndTheme(t,n),(A(this).sourceManager=new _(this)).prepareSource()
var i=this.getInitialData(t,n)
k(i,this),this.dataTask.context.data=i,A(this).dataBeforeProcessed=i,T(this),this._initSelectedMapFromData(i)},e.prototype.mergeDefaultAndTheme=function(t,e){var n=(0,h.ad)(this),i=n?(0,h.vs)(t):{},o=this.subType
s.A.hasClass(o)&&(o+="Series"),r.h1(t,e.getTheme().get(this.subType)),r.h1(t,this.getDefaultOption()),a.M5(t,"label",["show"]),this.fillDataTextStyle(t.data),n&&(0,h.YA)(t,i,n)},e.prototype.mergeOption=function(t,e){t=r.h1(this.option,t,!0),this.fillDataTextStyle(t.data)
var n=(0,h.ad)(this)
n&&(0,h.YA)(this.option,t,n)
var i=A(this).sourceManager
i.dirty(),i.prepareSource()
var o=this.getInitialData(t,e)
k(o,this),this.dataTask.dirty(),this.dataTask.context.data=o,A(this).dataBeforeProcessed=o,T(this),this._initSelectedMapFromData(o)},e.prototype.fillDataTextStyle=function(t){if(t&&!r.iu(t))for(var e=["show"],n=0;n<t.length;n++)t[n]&&t[n].label&&a.M5(t[n],"label",e)},e.prototype.getInitialData=function(t,e){},e.prototype.appendData=function(t){this.getRawData().appendData(t.data)},e.prototype.getData=function(t){var e=P(this)
if(e){var n=e.context.data
return null!=t&&n.getLinkedData?n.getLinkedData(t):n}return A(this).data},e.prototype.getAllData=function(){var t=this.getData()
return t&&t.getLinkedDataAll?t.getLinkedDataAll():[{data:t}]},e.prototype.setData=function(t){var e=P(this)
if(e){var n=e.context
n.outputData=t,e!==this.dataTask&&(n.data=t)}A(this).data=t},e.prototype.getEncode=function(){var t=this.get("encode",!0)
if(t)return r.nt(t)},e.prototype.getSourceManager=function(){return A(this).sourceManager},e.prototype.getSource=function(){return this.getSourceManager().getSource()},e.prototype.getRawData=function(){return A(this).dataBeforeProcessed},e.prototype.getColorBy=function(){return this.get("colorBy")||"series"},e.prototype.isColorBySeries=function(){return"series"===this.getColorBy()},e.prototype.getBaseAxis=function(){var t=this.coordinateSystem
return t&&t.getBaseAxis&&t.getBaseAxis()},e.prototype.formatTooltip=function(t,e,n){return(0,w.J)({series:this,dataIndex:t,multipleSeries:e})},e.prototype.isAnimationEnabled=function(){var t=this.ecModel
if(o.A.node&&(!t||!t.ssr))return!1
var e=this.getShallow("animation")
return e&&this.getData().count()>this.getShallow("animationThreshold")&&(e=!1),!!e},e.prototype.restoreData=function(){this.dataTask.dirty()},e.prototype.getColorFromPalette=function(t,e,n){var i=this.ecModel,r=l.X.prototype.getColorFromPalette.call(this,t,e,n)
return r||(r=i.getColorFromPalette(t,e,n)),r},e.prototype.coordDimToDataDim=function(t){return this.getRawData().mapDimensionsAll(t)},e.prototype.getProgressive=function(){return this.get("progressive")},e.prototype.getProgressiveThreshold=function(){return this.get("progressiveThreshold")},e.prototype.select=function(t,e){this._innerSelect(this.getData(e),t)},e.prototype.unselect=function(t,e){var n=this.option.selectedMap
if(n){var i=this.option.selectedMode,r=this.getData(e)
if("series"===i||"all"===n)return this.option.selectedMap={},void(this._selectedDataIndicesMap={})
for(var o=0;o<t.length;o++){var a=S(r,t[o])
n[a]=!1,this._selectedDataIndicesMap[a]=-1}}},e.prototype.toggleSelect=function(t,e){for(var n=[],i=0;i<t.length;i++)n[0]=t[i],this.isSelected(t[i],e)?this.unselect(n,e):this.select(n,e)},e.prototype.getSelectedDataIndices=function(){if("all"===this.option.selectedMap)return[].slice.call(this.getData().getIndices())
for(var t=this._selectedDataIndicesMap,e=r.HP(t),n=[],i=0;i<e.length;i++){var o=t[e[i]]
o>=0&&n.push(o)}return n},e.prototype.isSelected=function(t,e){var n=this.option.selectedMap
if(!n)return!1
var i=this.getData(e)
return("all"===n||n[S(i,t)])&&!i.getItemModel(t).get(["select","disabled"])},e.prototype.isUniversalTransitionEnabled=function(){if(this.__universalTransitionEnabled)return!0
var t=this.option.universalTransition
return!!t&&(!0===t||t&&t.enabled)},e.prototype._innerSelect=function(t,e){var n,i,o=this.option,a=o.selectedMode,s=e.length
if(a&&s)if("series"===a)o.selectedMap="all"
else if("multiple"===a){r.Gv(o.selectedMap)||(o.selectedMap={})
for(var l=o.selectedMap,u=0;u<s;u++){var h=e[u]
l[d=S(t,h)]=!0,this._selectedDataIndicesMap[d]=t.getRawIndex(h)}}else if("single"===a||!0===a){var c=e[s-1],d=S(t,c)
o.selectedMap=((n={})[d]=!0,n),this._selectedDataIndicesMap=((i={})[d]=t.getRawIndex(c),i)}},e.prototype._initSelectedMapFromData=function(t){if(!this.option.selectedMap){var e=[]
t.hasItemOption&&t.each((function(n){var i=t.getRawDataItem(n)
i&&i.selected&&e.push(n)})),e.length>0&&this._innerSelect(t,e)}},e.registerClass=function(t){return s.A.registerClass(t)},e.protoInitialize=((n=e.prototype).type="series.__base__",n.seriesIndex=0,n.ignoreStyleOnData=!1,n.hasSymbolVisual=!1,n.defaultSymbol="circle",n.visualStyleAccessPath="itemStyle",void(n.visualDrawType="fill")),e}(s.A)
function T(t){var e=t.name
a.O0(t)||(t.name=function(t){var e=t.getRawData(),n=e.mapDimensionsAll("seriesName"),i=[]
return r.__(n,(function(t){var n=e.getDimensionInfo(t)
n.displayName&&i.push(n.displayName)})),i.join(" ")}(t)||e)}function I(t){return t.model.getRawData().count()}function C(t){var e=t.model
return e.setData(e.getRawData().cloneShallow()),D}function D(t,e){e.outputData&&t.end>e.outputData.count()&&e.model.getRawData().cloneShallow(e.outputData)}function k(t,e){r.__(r.yB(t.CHANGABLE_METHODS,t.DOWNSAMPLE_METHODS),(function(n){t.wrapMethod(n,r.cF(L,e))}))}function L(t,e){var n=P(t)
return n&&n.setOutputEnd((e||this).count()),e}function P(t){var e=(t.ecModel||{}).scheduler,n=e&&e.getPipeline(t.uid)
if(n){var i=n.currentTask
if(i){var r=i.agentStubMap
r&&(i=r.get(t.uid))}return i}}r.co(M,u.J),r.co(M,l.X),(0,d.q7)(M,s.A)
const O=M},4272:(t,e,n)=>{n.d(e,{J:()=>s,L:()=>l})
var i=n(8301),r=n(4152),o=n(3473),a=/\{@(.+?)\}/g,s=function(){function t(){}return t.prototype.getDataParams=function(t,e){var n=this.getData(e),i=this.getRawValue(t,e),r=n.getRawIndex(t),o=n.getName(t),a=n.getRawDataItem(t),s=n.getItemVisual(t,"style"),l=s&&s[n.getItemVisual(t,"drawType")||"fill"],u=s&&s.stroke,h=this.mainType,c="series"===h,d=n.userOutput&&n.userOutput.get()
return{componentType:h,componentSubType:this.subType,componentIndex:this.componentIndex,seriesType:c?this.subType:null,seriesIndex:this.seriesIndex,seriesId:c?this.id:null,seriesName:c?this.name:null,name:o,dataIndex:r,data:a,dataType:e,value:i,color:l,borderColor:u,dimensionNames:d?d.fullDimensions:null,encode:d?d.encode:null,$vars:["seriesName","name","value"]}},t.prototype.getFormattedLabel=function(t,e,n,s,l,u){e=e||"normal"
var h=this.getData(n),c=this.getDataParams(t,n)
return u&&(c.value=u.interpolatedValue),null!=s&&i.cy(c.value)&&(c.value=c.value[s]),l||(l=h.getItemModel(t).get("normal"===e?["label","formatter"]:[e,"label","formatter"])),i.Tn(l)?(c.status=e,c.dimensionIndex=s,l(c)):i.Kg(l)?(0,o.YK)(l,c).replace(a,(function(e,n){var o=n.length,a=n
"["===a.charAt(0)&&"]"===a.charAt(o-1)&&(a=+a.slice(1,o-1))
var s=(0,r.QE)(h,t,a)
if(u&&i.cy(u.interpolatedValue)){var l=h.getDimensionIndex(a)
l>=0&&(s=u.interpolatedValue[l])}return null!=s?s+"":""})):void 0},t.prototype.getRawValue=function(t,e){return(0,r.QE)(this.getData(e),t)},t.prototype.formatTooltip=function(t,e,n){},t}()
function l(t){var e,n
return i.Gv(t)?t.type&&(n=t):e=t,{text:e,frag:n}}},1159:(t,e,n)=>{n.d(e,{L:()=>r,s:()=>a})
var i=n(5897),r=[["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["lineDash","borderType"],["lineDashOffset","borderDashOffset"],["lineCap","borderCap"],["lineJoin","borderJoin"],["miterLimit","borderMiterLimit"]],o=(0,i.A)(r),a=function(){function t(){}return t.prototype.getItemStyle=function(t,e){return o(this,t,e)},t}()},1908:(t,e,n)=>{n.d(e,{J:()=>a,m:()=>r})
var i=n(5897),r=[["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["lineDash","type"],["lineDashOffset","dashOffset"],["lineCap","cap"],["lineJoin","join"],["miterLimit"]],o=(0,i.A)(r),a=function(){function t(){}return t.prototype.getLineStyle=function(t){return o(this,t)},t}()},5897:(t,e,n)=>{n.d(e,{A:()=>r})
var i=n(8301)
function r(t,e){for(var n=0;n<t.length;n++)t[n][1]||(t[n][1]=t[n][0])
return e=e||!1,function(n,r,o){for(var a={},s=0;s<t.length;s++){var l=t[s][1]
if(!(r&&i.qh(r,l)>=0||o&&i.qh(o,l)<0)){var u=n.getShallow(l,e)
null!=u&&(a[t[s][0]]=u)}}return a}}},8639:(t,e,n)=>{n.d(e,{X:()=>o})
var i=n(5225),r=(0,i.$r)(),o=((0,i.$r)(),function(){function t(){}return t.prototype.getColorFromPalette=function(t,e,n){var o=(0,i.qB)(this.get("color",!0)),a=this.get("colorLayer",!0)
return function(t,e,n,i,r,o,a){var s=e(o=o||t),l=s.paletteIdx||0,u=s.paletteNameMap=s.paletteNameMap||{}
if(u.hasOwnProperty(r))return u[r]
var h=null!=a&&i?function(t,e){for(var n=t.length,i=0;i<n;i++)if(t[i].length>e)return t[i]
return t[n-1]}(i,a):n
if((h=h||n)&&h.length){var c=h[l]
return r&&(u[r]=c),s.paletteIdx=(l+1)%h.length,c}}(this,r,o,a,t,e,n)},t.prototype.clearColorPalette=function(){var t;(t=r)(this).paletteIdx=0,t(this).paletteNameMap={}},t}())},5784:(t,e,n)=>{n.d(e,{A:()=>a})
var i=n(8301),r={average:function(t){for(var e=0,n=0,i=0;i<t.length;i++)isNaN(t[i])||(e+=t[i],n++)
return 0===n?NaN:e/n},sum:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n]||0
return e},max:function(t){for(var e=-1/0,n=0;n<t.length;n++)t[n]>e&&(e=t[n])
return isFinite(e)?e:NaN},min:function(t){for(var e=1/0,n=0;n<t.length;n++)t[n]<e&&(e=t[n])
return isFinite(e)?e:NaN},minmax:function(t){for(var e=-1/0,n=-1/0,i=0;i<t.length;i++){var r=t[i],o=Math.abs(r)
o>e&&(e=o,n=r)}return isFinite(n)?n:NaN},nearest:function(t){return t[0]}},o=function(t){return Math.round(t.length/2)}
function a(t){return{seriesType:t,reset:function(t,e,n){var a=t.getData(),s=t.get("sampling"),l=t.coordinateSystem,u=a.count()
if(u>10&&"cartesian2d"===l.type&&s){var h=l.getBaseAxis(),c=l.getOtherAxis(h),d=h.getExtent(),p=n.getDevicePixelRatio(),f=Math.abs(d[1]-d[0])*(p||1),g=Math.round(u/f)
if(isFinite(g)&&g>1){"lttb"===s&&t.setData(a.lttbDownSample(a.mapDimension(c.dim),1/g))
var y=void 0;(0,i.Kg)(s)?y=r[s]:(0,i.Tn)(s)&&(y=s),y&&t.setData(a.downSample(a.mapDimension(c.dim),1/g,y,o))}}}}}},5657:(t,e,n)=>{n.d(e,{a:()=>b})
var i=n(5499),r=n(8301),o=n(4784),a=n(9430),s=n(2380),l=n(9041),u=n(4703),h=n(5451),c=n(1854)
function d(t,e,n){var i=c.yh.createCanvas(),r=e.getWidth(),o=e.getHeight(),a=i.style
return a&&(a.position="absolute",a.left="0",a.top="0",a.width=r+"px",a.height=o+"px",i.setAttribute("data-zr-dom-id",t)),i.width=r*n,i.height=o*n,i}const p=function(t){function e(e,n,o){var a,s=t.call(this)||this
s.motionBlur=!1,s.lastFrameAlpha=.7,s.dpr=1,s.virtual=!1,s.config={},s.incremental=!1,s.zlevel=0,s.maxRepaintRectCount=5,s.__dirty=!0,s.__firstTimePaint=!0,s.__used=!1,s.__drawIndex=0,s.__startIndex=0,s.__endIndex=0,s.__prevStartIndex=null,s.__prevEndIndex=null,o=o||i.Y5,"string"==typeof e?a=d(e,n,o):r.Gv(e)&&(e=(a=e).id),s.id=e,s.dom=a
var l=a.style
return l&&(r.iq(a),a.onselectstart=function(){return!1},l.padding="0",l.margin="0",l.borderWidth="0"),s.painter=n,s.dpr=o,s}return(0,o.C6)(e,t),e.prototype.getElementCount=function(){return this.__endIndex-this.__startIndex},e.prototype.afterBrush=function(){this.__prevStartIndex=this.__startIndex,this.__prevEndIndex=this.__endIndex},e.prototype.initContext=function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},e.prototype.setUnpainted=function(){this.__firstTimePaint=!0},e.prototype.createBackBuffer=function(){var t=this.dpr
this.domBack=d("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!==t&&this.ctxBack.scale(t,t)},e.prototype.createRepaintRects=function(t,e,n,i){if(this.__firstTimePaint)return this.__firstTimePaint=!1,null
var r,o=[],a=this.maxRepaintRectCount,s=!1,l=new u.A(0,0,0,0)
function c(t){if(t.isFinite()&&!t.isZero())if(0===o.length)(e=new u.A(0,0,0,0)).copy(t),o.push(e)
else{for(var e,n=!1,i=1/0,r=0,h=0;h<o.length;++h){var c=o[h]
if(c.intersect(t)){var d=new u.A(0,0,0,0)
d.copy(c),d.union(t),o[h]=d,n=!0
break}if(s){l.copy(t),l.union(c)
var p=t.width*t.height,f=c.width*c.height,g=l.width*l.height-p-f
g<i&&(i=g,r=h)}}s&&(o[r].union(t),n=!0),n||((e=new u.A(0,0,0,0)).copy(t),o.push(e)),s||(s=o.length>=a)}}for(var d=this.__startIndex;d<this.__endIndex;++d)if(g=t[d]){var p=g.shouldBePainted(n,i,!0,!0);(y=g.__isRendered&&(g.__dirty&h.M||!p)?g.getPrevPaintRect():null)&&c(y)
var f=p&&(g.__dirty&h.M||!g.__isRendered)?g.getPaintRect():null
f&&c(f)}for(d=this.__prevStartIndex;d<this.__prevEndIndex;++d){var g,y
p=(g=e[d])&&g.shouldBePainted(n,i,!0,!0),!g||p&&g.__zr||!g.__isRendered||(y=g.getPrevPaintRect())&&c(y)}do{for(r=!1,d=0;d<o.length;)if(o[d].isZero())o.splice(d,1)
else{for(var v=d+1;v<o.length;)o[d].intersect(o[v])?(r=!0,o[d].union(o[v]),o.splice(v,1)):v++
d++}}while(r)
return this._paintRects=o,o},e.prototype.debugGetPaintRects=function(){return(this._paintRects||[]).slice()},e.prototype.resize=function(t,e){var n=this.dpr,i=this.dom,r=i.style,o=this.domBack
r&&(r.width=t+"px",r.height=e+"px"),i.width=t*n,i.height=e*n,o&&(o.width=t*n,o.height=e*n,1!==n&&this.ctxBack.scale(n,n))},e.prototype.clear=function(t,e,n){var i=this.dom,o=this.ctx,a=i.width,u=i.height
e=e||this.clearColor
var h=this.motionBlur&&!t,c=this.lastFrameAlpha,d=this.dpr,p=this
h&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(i,0,0,a/d,u/d))
var f=this.domBack
function g(t,n,i,a){if(o.clearRect(t,n,i,a),e&&"transparent"!==e){var u=void 0
r.C7(e)?(u=(e.global||e.__width===i&&e.__height===a)&&e.__canvasGradient||(0,s.Ff)(o,e,{x:0,y:0,width:i,height:a}),e.__canvasGradient=u,e.__width=i,e.__height=a):r.HE(e)&&(e.scaleX=e.scaleX||d,e.scaleY=e.scaleY||d,u=(0,l.ZQ)(o,e,{dirty:function(){p.setUnpainted(),p.painter.refresh()}})),o.save(),o.fillStyle=u||e,o.fillRect(t,n,i,a),o.restore()}h&&(o.save(),o.globalAlpha=c,o.drawImage(f,t,n,i,a),o.restore())}!n||h?g(0,0,a,u):n.length&&r.__(n,(function(t){g(t.x*d,t.y*d,t.width*d,t.height*d)}))},e}(a.A)
var f=n(8694),g=n(9714),y=1e5,v=314159,m=.01,_=function(){function t(t,e,n,o){this.type="canvas",this._zlevelList=[],this._prevDisplayList=[],this._layers={},this._layerConfig={},this._needsManuallyCompositing=!1,this.type="canvas"
var a=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase()
this._opts=n=r.X$({},n||{}),this.dpr=n.devicePixelRatio||i.Y5,this._singleCanvas=a,this.root=t,t.style&&(r.iq(t),t.innerHTML=""),this.storage=e
var l=this._zlevelList
this._prevDisplayList=[]
var u=this._layers
if(a){var h=t,c=h.width,d=h.height
null!=n.width&&(c=n.width),null!=n.height&&(d=n.height),this.dpr=n.devicePixelRatio||1,h.width=c*this.dpr,h.height=d*this.dpr,this._width=c,this._height=d
var f=new p(h,this,this.dpr)
f.__builtin__=!0,f.initContext(),u[314159]=f,f.zlevel=v,l.push(v),this._domRoot=t}else{this._width=(0,s.YC)(t,0,n),this._height=(0,s.YC)(t,1,n)
var g=this._domRoot=function(t,e){var n=document.createElement("div")
return n.style.cssText=["position:relative","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",n}(this._width,this._height)
t.appendChild(g)}}return t.prototype.getType=function(){return"canvas"},t.prototype.isSingleCanvas=function(){return this._singleCanvas},t.prototype.getViewportRoot=function(){return this._domRoot},t.prototype.getViewportRootOffset=function(){var t=this.getViewportRoot()
if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},t.prototype.refresh=function(t){var e=this.storage.getDisplayList(!0),n=this._prevDisplayList,i=this._zlevelList
this._redrawId=Math.random(),this._paintList(e,n,t,this._redrawId)
for(var r=0;r<i.length;r++){var o=i[r],a=this._layers[o]
if(!a.__builtin__&&a.refresh){var s=0===r?this._backgroundColor:null
a.refresh(s)}}return this._opts.useDirtyRect&&(this._prevDisplayList=e.slice()),this},t.prototype.refreshHover=function(){this._paintHoverList(this.storage.getDisplayList(!1))},t.prototype._paintHoverList=function(t){var e=t.length,n=this._hoverlayer
if(n&&n.clear(),e){for(var i,r={inHover:!0,viewWidth:this._width,viewHeight:this._height},o=0;o<e;o++){var a=t[o]
a.__inHover&&(n||(n=this._hoverlayer=this.getLayer(y)),i||(i=n.ctx).save(),(0,l.V$)(i,a,r,o===e-1))}i&&i.restore()}},t.prototype.getHoverLayer=function(){return this.getLayer(y)},t.prototype.paintOne=function(t,e){(0,l.Xi)(t,e)},t.prototype._paintList=function(t,e,n,i){if(this._redrawId===i){n=n||!1,this._updateLayerStatus(t)
var r=this._doPaintList(t,e,n),o=r.finished,a=r.needsRefreshHover
if(this._needsManuallyCompositing&&this._compositeManually(),a&&this._paintHoverList(t),o)this.eachLayer((function(t){t.afterBrush&&t.afterBrush()}))
else{var s=this;(0,f.A)((function(){s._paintList(t,e,n,i)}))}}},t.prototype._compositeManually=function(){var t=this.getLayer(v).ctx,e=this._domRoot.width,n=this._domRoot.height
t.clearRect(0,0,e,n),this.eachBuiltinLayer((function(i){i.virtual&&t.drawImage(i.dom,0,0,e,n)}))},t.prototype._doPaintList=function(t,e,n){for(var i=this,o=[],a=this._opts.useDirtyRect,s=0;s<this._zlevelList.length;s++){var l=this._zlevelList[s],u=this._layers[l]
u.__builtin__&&u!==this._hoverlayer&&(u.__dirty||n)&&o.push(u)}for(var h=!0,c=!1,d=function(r){var s,l=o[r],u=l.ctx,d=a&&l.createRepaintRects(t,e,p._width,p._height),f=n?l.__startIndex:l.__drawIndex,g=!n&&l.incremental&&Date.now,y=g&&Date.now(),v=l.zlevel===p._zlevelList[0]?p._backgroundColor:null
if(l.__startIndex===l.__endIndex)l.clear(!1,v,d)
else if(f===l.__startIndex){var m=t[f]
m.incremental&&m.notClear&&!n||l.clear(!1,v,d)}-1===f&&(console.error("For some unknown reason. drawIndex is -1"),f=l.__startIndex)
var _=function(e){var n={inHover:!1,allClipped:!1,prevEl:null,viewWidth:i._width,viewHeight:i._height}
for(s=f;s<l.__endIndex;s++){var r=t[s]
if(r.__inHover&&(c=!0),i._doPaintEl(r,l,a,e,n,s===l.__endIndex-1),g&&Date.now()-y>15)break}n.prevElClipPaths&&u.restore()}
if(d)if(0===d.length)s=l.__endIndex
else for(var x=p.dpr,b=0;b<d.length;++b){var w=d[b]
u.save(),u.beginPath(),u.rect(w.x*x,w.y*x,w.width*x,w.height*x),u.clip(),_(w),u.restore()}else u.save(),_(),u.restore()
l.__drawIndex=s,l.__drawIndex<l.__endIndex&&(h=!1)},p=this,f=0;f<o.length;f++)d(f)
return g.A.wxa&&r.__(this._layers,(function(t){t&&t.ctx&&t.ctx.draw&&t.ctx.draw()})),{finished:h,needsRefreshHover:c}},t.prototype._doPaintEl=function(t,e,n,i,r,o){var a=e.ctx
if(n){var s=t.getPaintRect();(!i||s&&s.intersect(i))&&((0,l.V$)(a,t,r,o),t.setPrevPaintRect(s))}else(0,l.V$)(a,t,r,o)},t.prototype.getLayer=function(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=v)
var n=this._layers[t]
return n||((n=new p("zr_"+t,this,this.dpr)).zlevel=t,n.__builtin__=!0,this._layerConfig[t]?r.h1(n,this._layerConfig[t],!0):this._layerConfig[t-m]&&r.h1(n,this._layerConfig[t-m],!0),e&&(n.virtual=e),this.insertLayer(t,n),n.initContext()),n},t.prototype.insertLayer=function(t,e){var n=this._layers,i=this._zlevelList,r=i.length,o=this._domRoot,a=null,s=-1
if(!n[t]&&function(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh)}(e)){if(r>0&&t>i[0]){for(s=0;s<r-1&&!(i[s]<t&&i[s+1]>t);s++);a=n[i[s]]}if(i.splice(s+1,0,t),n[t]=e,!e.virtual)if(a){var l=a.dom
l.nextSibling?o.insertBefore(e.dom,l.nextSibling):o.appendChild(e.dom)}else o.firstChild?o.insertBefore(e.dom,o.firstChild):o.appendChild(e.dom)
e.painter||(e.painter=this)}},t.prototype.eachLayer=function(t,e){for(var n=this._zlevelList,i=0;i<n.length;i++){var r=n[i]
t.call(e,this._layers[r],r)}},t.prototype.eachBuiltinLayer=function(t,e){for(var n=this._zlevelList,i=0;i<n.length;i++){var r=n[i],o=this._layers[r]
o.__builtin__&&t.call(e,o,r)}},t.prototype.eachOtherLayer=function(t,e){for(var n=this._zlevelList,i=0;i<n.length;i++){var r=n[i],o=this._layers[r]
o.__builtin__||t.call(e,o,r)}},t.prototype.getLayers=function(){return this._layers},t.prototype._updateLayerStatus=function(t){function e(t){a&&(a.__endIndex!==t&&(a.__dirty=!0),a.__endIndex=t)}if(this.eachBuiltinLayer((function(t,e){t.__dirty=t.__used=!1})),this._singleCanvas)for(var n=1;n<t.length;n++)if((l=t[n]).zlevel!==t[n-1].zlevel||l.incremental){this._needsManuallyCompositing=!0
break}var i,o,a=null,s=0
for(o=0;o<t.length;o++){var l,u=(l=t[o]).zlevel,c=void 0
i!==u&&(i=u,s=0),l.incremental?((c=this.getLayer(u+.001,this._needsManuallyCompositing)).incremental=!0,s=1):c=this.getLayer(u+(s>0?m:0),this._needsManuallyCompositing),c.__builtin__||r.vV("ZLevel "+u+" has been used by unkown layer "+c.id),c!==a&&(c.__used=!0,c.__startIndex!==o&&(c.__dirty=!0),c.__startIndex=o,c.incremental?c.__drawIndex=-1:c.__drawIndex=o,e(o),a=c),l.__dirty&h.M&&!l.__inHover&&(c.__dirty=!0,c.incremental&&c.__drawIndex<0&&(c.__drawIndex=o))}e(o),this.eachBuiltinLayer((function(t,e){!t.__used&&t.getElementCount()>0&&(t.__dirty=!0,t.__startIndex=t.__endIndex=t.__drawIndex=0),t.__dirty&&t.__drawIndex<0&&(t.__drawIndex=t.__startIndex)}))},t.prototype.clear=function(){return this.eachBuiltinLayer(this._clearLayer),this},t.prototype._clearLayer=function(t){t.clear()},t.prototype.setBackgroundColor=function(t){this._backgroundColor=t,r.__(this._layers,(function(t){t.setUnpainted()}))},t.prototype.configLayer=function(t,e){if(e){var n=this._layerConfig
n[t]?r.h1(n[t],e,!0):n[t]=e
for(var i=0;i<this._zlevelList.length;i++){var o=this._zlevelList[i]
if(o===t||o===t+m){var a=this._layers[o]
r.h1(a,n[t],!0)}}}},t.prototype.delLayer=function(t){var e=this._layers,n=this._zlevelList,i=e[t]
i&&(i.dom.parentNode.removeChild(i.dom),delete e[t],n.splice(r.qh(n,t),1))},t.prototype.resize=function(t,e){if(this._domRoot.style){var n=this._domRoot
n.style.display="none"
var i=this._opts,r=this.root
if(null!=t&&(i.width=t),null!=e&&(i.height=e),t=(0,s.YC)(r,0,i),e=(0,s.YC)(r,1,i),n.style.display="",this._width!==t||e!==this._height){for(var o in n.style.width=t+"px",n.style.height=e+"px",this._layers)this._layers.hasOwnProperty(o)&&this._layers[o].resize(t,e)
this.refresh(!0)}this._width=t,this._height=e}else{if(null==t||null==e)return
this._width=t,this._height=e,this.getLayer(v).resize(t,e)}return this},t.prototype.clearLayer=function(t){var e=this._layers[t]
e&&e.clear()},t.prototype.dispose=function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},t.prototype.getRenderedCanvas=function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[314159].dom
var e=new p("image",this,t.pixelRatio||this.dpr)
e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor)
var n=e.ctx
if(t.pixelRatio<=this.dpr){this.refresh()
var i=e.dom.width,r=e.dom.height
this.eachLayer((function(t){t.__builtin__?n.drawImage(t.dom,0,0,i,r):t.renderToCanvas&&(n.save(),t.renderToCanvas(n),n.restore())}))}else for(var o={inHover:!1,viewWidth:this._width,viewHeight:this._height},a=this.storage.getDisplayList(!0),s=0,u=a.length;s<u;s++){var h=a[s];(0,l.V$)(n,h,o,s===u-1)}return e.dom},t.prototype.getWidth=function(){return this._width},t.prototype.getHeight=function(){return this._height},t}()
const x=_
function b(t){t.registerPainter("canvas",x)}},4841:(t,e,n)=>{n.d(e,{A:()=>h})
var i=n(4784),r=n(3947),o=n(3473),a=n(3980),s=n(2384),l=r.LI,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this
return e.type="interval",e._interval=0,e._intervalPrecision=2,e}return(0,i.C6)(e,t),e.prototype.parse=function(t){return t},e.prototype.contain=function(t){return s.lP(t,this._extent)},e.prototype.normalize=function(t){return s.S8(t,this._extent)},e.prototype.scale=function(t){return s.hs(t,this._extent)},e.prototype.setExtent=function(t,e){var n=this._extent
isNaN(t)||(n[0]=parseFloat(t)),isNaN(e)||(n[1]=parseFloat(e))},e.prototype.unionExtent=function(t){var e=this._extent
t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),this.setExtent(e[0],e[1])},e.prototype.getInterval=function(){return this._interval},e.prototype.setInterval=function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=s.u$(t)},e.prototype.getTicks=function(t){var e=this._interval,n=this._extent,i=this._niceExtent,r=this._intervalPrecision,o=[]
if(!e)return o
n[0]<i[0]&&(t?o.push({value:l(i[0]-e,r)}):o.push({value:n[0]}))
for(var a=i[0];a<=i[1]&&(o.push({value:a}),(a=l(a+e,r))!==o[o.length-1].value);)if(o.length>1e4)return[]
var s=o.length?o[o.length-1].value:i[1]
return n[1]>s&&(t?o.push({value:l(s+e,r)}):o.push({value:n[1]})),o},e.prototype.getMinorTicks=function(t){for(var e=this.getTicks(!0),n=[],i=this.getExtent(),r=1;r<e.length;r++){for(var o=e[r],a=e[r-1],s=0,u=[],h=(o.value-a.value)/t;s<t-1;){var c=l(a.value+(s+1)*h)
c>i[0]&&c<i[1]&&u.push(c),s++}n.push(u)}return n},e.prototype.getLabel=function(t,e){if(null==t)return""
var n=e&&e.precision
null==n?n=r.XV(t.value)||0:"auto"===n&&(n=this._intervalPrecision)
var i=l(t.value,n,!0)
return o.ob(i)},e.prototype.calcNiceTicks=function(t,e,n){t=t||5
var i=this._extent,r=i[1]-i[0]
if(isFinite(r)){r<0&&(r=-r,i.reverse())
var o=s.xh(i,t,e,n)
this._intervalPrecision=o.intervalPrecision,this._interval=o.interval,this._niceExtent=o.niceTickExtent}},e.prototype.calcNiceExtent=function(t){var e=this._extent
if(e[0]===e[1])if(0!==e[0]){var n=Math.abs(e[0])
t.fixMax||(e[1]+=n/2),e[0]-=n/2}else e[1]=1
var i=e[1]-e[0]
isFinite(i)||(e[0]=0,e[1]=1),this.calcNiceTicks(t.splitNumber,t.minInterval,t.maxInterval)
var r=this._interval
t.fixMin||(e[0]=l(Math.floor(e[0]/r)*r)),t.fixMax||(e[1]=l(Math.ceil(e[1]/r)*r))},e.prototype.setNiceExtent=function(t,e){this._niceExtent=[t,e]},e.type="interval",e}(a.A)
a.A.registerClass(u)
const h=u},3980:(t,e,n)=>{n.d(e,{A:()=>o})
var i=n(3078),r=function(){function t(t){this._setting=t||{},this._extent=[1/0,-1/0]}return t.prototype.getSetting=function(t){return this._setting[t]},t.prototype.unionExtent=function(t){var e=this._extent
t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},t.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},t.prototype.getExtent=function(){return this._extent.slice()},t.prototype.setExtent=function(t,e){var n=this._extent
isNaN(t)||(n[0]=t),isNaN(e)||(n[1]=e)},t.prototype.isInExtentRange=function(t){return this._extent[0]<=t&&this._extent[1]>=t},t.prototype.isBlank=function(){return this._isBlank},t.prototype.setBlank=function(t){this._isBlank=t},t}()
i.tQ(r)
const o=r},2384:(t,e,n)=>{n.d(e,{S8:()=>h,hs:()=>c,kH:()=>a,lP:()=>u,rf:()=>r,u$:()=>s,xh:()=>o})
var i=n(3947)
function r(t){return"interval"===t.type||"log"===t.type}function o(t,e,n,r){var o={},a=t[1]-t[0],u=o.interval=(0,i.Cm)(a/e,!0)
null!=n&&u<n&&(u=o.interval=n),null!=r&&u>r&&(u=o.interval=r)
var h=o.intervalPrecision=s(u)
return function(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),l(t,0,e),l(t,1,e),t[0]>t[1]&&(t[0]=t[1])}(o.niceTickExtent=[(0,i.LI)(Math.ceil(t[0]/u)*u,h),(0,i.LI)(Math.floor(t[1]/u)*u,h)],t),o}function a(t){var e=Math.pow(10,(0,i.NX)(t)),n=t/e
return n?2===n?n=3:3===n?n=5:n*=2:n=1,(0,i.LI)(n*e)}function s(t){return(0,i.XV)(t)+2}function l(t,e,n){t[e]=Math.max(Math.min(t[e],n[1]),n[0])}function u(t,e){return t>=e[0]&&t<=e[1]}function h(t,e){return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])}function c(t,e){return t*(e[1]-e[0])+e[0]}},3078:(t,e,n)=>{n.d(e,{CC:()=>l,Od:()=>p,_E:()=>u,gq:()=>h,q7:()=>c,tQ:()=>y})
var i=n(4784),r=n(8301),o=".",a="___EC__COMPONENT__CONTAINER___",s="___EC__EXTENDED_CLASS___"
function l(t){var e={main:"",sub:""}
if(t){var n=t.split(o)
e.main=n[0]||"",e.sub=n[1]||""}return e}function u(t){return!(!t||!t[s])}function h(t,e){t.$constructor=t,t.extend=function(t){var e,n,o=this
return n=o,r.Tn(n)&&/^class\s/.test(Function.prototype.toString.call(n))?e=function(t){function e(){return t.apply(this,arguments)||this}return(0,i.C6)(e,t),e}(o):(e=function(){(t.$constructor||o).apply(this,arguments)},r.B(e,this)),r.X$(e.prototype,t),e[s]=!0,e.extend=this.extend,e.superCall=f,e.superApply=g,e.superClass=o,e}}function c(t,e){t.extend=e.extend}var d=Math.round(10*Math.random())
function p(t){var e=["__\0is_clz",d++].join("_")
t.prototype[e]=!0,t.isInstance=function(t){return!(!t||!t[e])}}function f(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i]
return this.superClass.prototype[e].apply(t,n)}function g(t,e,n){return this.superClass.prototype[e].apply(t,n)}function y(t){var e={}
t.registerClass=function(t){var n,i=t.type||t.prototype.type
if(i){n=i,r.vA(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(n),'componentType "'+n+'" illegal'),t.prototype.type=i
var o=l(i)
if(o.sub){if(o.sub!==a){var s=function(t){var n=e[t.main]
return n&&n[a]||((n=e[t.main]={})[a]=!0),n}(o)
s[o.sub]=t}}else e[o.main]=t}return t},t.getClass=function(t,n,i){var r=e[t]
if(r&&r[a]&&(r=n?r[n]:null),i&&!r)throw new Error(n?"Component "+t+"."+(n||"")+" is used but not imported.":t+".type should be specified.")
return r},t.getClassesByMainType=function(t){var n=l(t),i=[],o=e[n.main]
return o&&o[a]?r.__(o,(function(t,e){e!==a&&i.push(t)})):i.push(o),i},t.hasClass=function(t){var n=l(t)
return!!e[n.main]},t.getAllClassMainTypes=function(){var t=[]
return r.__(e,(function(e,n){t.push(n)})),t},t.hasSubTypes=function(t){var n=l(t),i=e[n.main]
return i&&i[a]}}},5019:(t,e,n)=>{n.d(e,{$Q:()=>a,A6:()=>s,G_:()=>u,vf:()=>l})
var i=n(8301),r=n(3078),o=Math.round(10*Math.random())
function a(t){return[t||"",o++].join("_")}function s(t){var e={}
t.registerSubTypeDefaulter=function(t,n){var i=(0,r.CC)(t)
e[i.main]=n},t.determineSubType=function(n,i){var o=i.type
if(!o){var a=(0,r.CC)(n).main
t.hasSubTypes(n)&&e[a]&&(o=e[a](i))}return o}}function l(t,e){function n(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}t.topologicalTravel=function(t,r,o,a){if(t.length){var s=function(t){var r={},o=[]
return i.__(t,(function(a){var s=n(r,a),l=function(t,e){var n=[]
return i.__(t,(function(t){i.qh(e,t)>=0&&n.push(t)})),n}(s.originalDeps=e(a),t)
s.entryCount=l.length,0===s.entryCount&&o.push(a),i.__(l,(function(t){i.qh(s.predecessor,t)<0&&s.predecessor.push(t)
var e=n(r,t)
i.qh(e.successor,t)<0&&e.successor.push(a)}))})),{graph:r,noEntryList:o}}(r),l=s.graph,u=s.noEntryList,h={}
for(i.__(t,(function(t){h[t]=!0}));u.length;){var c=u.pop(),d=l[c],p=!!h[c]
p&&(o.call(a,c,d.originalDeps.slice()),delete h[c]),i.__(d.successor,p?g:f)}i.__(h,(function(){throw new Error("")}))}function f(t){l[t].entryCount--,0===l[t].entryCount&&u.push(t)}function g(t){h[t]=!0,f(t)}}}function u(t,e){return i.h1(i.h1({},t,!0),e,!0)}},9128:(t,e,n)=>{n.d(e,{w:()=>g})
var i=Math.round(9*Math.random()),r="function"==typeof Object.defineProperty
const o=function(){function t(){this._id="__ec_inner_"+i++}return t.prototype.get=function(t){return this._guard(t)[this._id]},t.prototype.set=function(t,e){var n=this._guard(t)
return r?Object.defineProperty(n,this._id,{value:e,enumerable:!1,configurable:!0}):n[this._id]=e,this},t.prototype.delete=function(t){return!!this.has(t)&&(delete this._guard(t)[this._id],!0)},t.prototype.has=function(t){return!!this._guard(t)[this._id]},t.prototype._guard=function(t){if(t!==Object(t))throw TypeError("Value of WeakMap is not a non-null object.")
return t},t}()
var a=n(4592),s=n(8301),l=n(3947),u=n(5478),h=n(9041),c=n(1854),d=new o,p=new a.Ay(100),f=["symbol","symbolSize","symbolKeepAspect","color","backgroundColor","dashArrayX","dashArrayY","maxTileWidth","maxTileHeight"]
function g(t,e){if("none"===t)return null
var n=e.getDevicePixelRatio(),i=e.getZr(),r="svg"===i.painter.type
t.dirty&&d.delete(t)
var o=d.get(t)
if(o)return o
var a=(0,s.NT)(t,{symbol:"rect",symbolSize:1,symbolKeepAspect:!0,color:"rgba(0, 0, 0, 0.2)",backgroundColor:null,dashArrayX:5,dashArrayY:5,rotation:0,maxTileWidth:512,maxTileHeight:512})
"none"===a.backgroundColor&&(a.backgroundColor=null)
var g={repeat:"repeat"}
return function(t){for(var e,o=[n],d=!0,g=0;g<f.length;++g){var _=a[f[g]]
if(null!=_&&!(0,s.cy)(_)&&!(0,s.Kg)(_)&&!(0,s.Et)(_)&&"boolean"!=typeof _){d=!1
break}o.push(_)}if(d){e=o.join(",")+(r?"-svg":"")
var x=p.get(e)
x&&(r?t.svgElement=x:t.image=x)}var b,w,A=v(a.dashArrayX),S=function(t){if(!t||"object"==typeof t&&0===t.length)return[0,0]
if((0,s.Et)(t)){var e=Math.ceil(t)
return[e,e]}var n=(0,s.Tj)(t,(function(t){return Math.ceil(t)}))
return t.length%2?n.concat(n):n}(a.dashArrayY),M=y(a.symbol),T=(w=A,(0,s.Tj)(w,(function(t){return m(t)}))),I=m(S),C=!r&&c.yh.createCanvas(),D=r&&{tag:"g",attrs:{},key:"dcl",children:[]},k=function(){for(var t=1,e=0,n=T.length;e<n;++e)t=(0,l.lQ)(t,T[e])
var i=1
for(e=0,n=M.length;e<n;++e)i=(0,l.lQ)(i,M[e].length)
t*=i
var r=I*T.length*M.length
return{width:Math.max(1,Math.min(t,a.maxTileWidth)),height:Math.max(1,Math.min(r,a.maxTileHeight))}}()
C&&(C.width=k.width*n,C.height=k.height*n,b=C.getContext("2d")),function(){b&&(b.clearRect(0,0,C.width,C.height),a.backgroundColor&&(b.fillStyle=a.backgroundColor,b.fillRect(0,0,C.width,C.height)))
for(var t=0,e=0;e<S.length;++e)t+=S[e]
if(!(t<=0))for(var o=-I,s=0,l=0,c=0;o<k.height;){if(s%2==0){for(var d=l/2%M.length,p=0,f=0,g=0;p<2*k.width;){var y=0
for(e=0;e<A[c].length;++e)y+=A[c][e]
if(y<=0)break
if(f%2==0){var v=.5*(1-a.symbolSize),m=p+A[c][f]*v,_=o+S[s]*v,x=A[c][f]*a.symbolSize,w=S[s]*a.symbolSize,T=g/2%M[d].length
L(m,_,x,w,M[d][T])}p+=A[c][f],++g,++f===A[c].length&&(f=0)}++c===A.length&&(c=0)}o+=S[s],++l,++s===S.length&&(s=0)}function L(t,e,o,s,l){var c=r?1:n,d=(0,u.v5)(l,t*c,e*c,o*c,s*c,a.color,a.symbolKeepAspect)
if(r){var p=i.painter.renderOneToVNode(d)
p&&D.children.push(p)}else(0,h.Xi)(b,d)}}(),d&&p.put(e,C||D),t.image=C,t.svgElement=D,t.svgWidth=k.width,t.svgHeight=k.height}(g),g.rotation=a.rotation,g.scaleX=g.scaleY=r?1:1/n,d.set(t,g),t.dirty=!1,g}function y(t){if(!t||0===t.length)return[["rect"]]
if((0,s.Kg)(t))return[[t]]
for(var e=!0,n=0;n<t.length;++n)if(!(0,s.Kg)(t[n])){e=!1
break}if(e)return y([t])
var i=[]
for(n=0;n<t.length;++n)(0,s.Kg)(t[n])?i.push([t[n]]):i.push(t[n])
return i}function v(t){if(!t||0===t.length)return[[0,0]]
if((0,s.Et)(t))return[[r=Math.ceil(t),r]]
for(var e=!0,n=0;n<t.length;++n)if(!(0,s.Et)(t[n])){e=!1
break}if(e)return v([t])
var i=[]
for(n=0;n<t.length;++n)if((0,s.Et)(t[n])){var r=Math.ceil(t[n])
i.push([r,r])}else(r=(0,s.Tj)(t[n],(function(t){return Math.ceil(t)}))).length%2==1?i.push(r.concat(r)):i.push(r)
return i}function m(t){for(var e=0,n=0;n<t.length;++n)e+=t[n]
return t.length%2==1?2*e:e}},8456:(t,e,n)=>{function i(t,e,n){for(var i;t&&(!e(t)||(i=t,!n));)t=t.__hostTarget||t.parent
return i}n.d(e,{R:()=>i})},3473:(t,e,n)=>{n.d(e,{Cb:()=>l,JW:()=>y,QX:()=>u,YK:()=>p,he:()=>g,ob:()=>s,qg:()=>f,yC:()=>h})
var i=n(8301),r=n(7028),o=n(3947),a=n(8327)
function s(t){if(!(0,o.kf)(t))return i.Kg(t)?t:"-"
var e=(t+"").split(".")
return e[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(e.length>1?"."+e[1]:"")}function l(t,e){return t=(t||"").toLowerCase().replace(/-(.)/g,(function(t,e){return e.toUpperCase()})),e&&t&&(t=t.charAt(0).toUpperCase()+t.slice(1)),t}var u=i.QX
function h(t,e,n){function r(t){return t&&i.Bq(t)?t:"-"}function l(t){return!(null==t||isNaN(t)||!isFinite(t))}var u="time"===e,h=t instanceof Date
if(u||h){var c=u?(0,o._U)(t):t
if(!isNaN(+c))return(0,a.GP)(c,"{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}",n)
if(h)return"-"}if("ordinal"===e)return i.Lh(t)?r(t):i.Et(t)&&l(t)?t+"":"-"
var d=(0,o.Sm)(t)
return l(d)?s(d):i.Lh(t)?r(t):"boolean"==typeof t?t+"":"-"}var c=["a","b","c","d","e","f","g"],d=function(t,e){return"{"+t+(null==e?"":e)+"}"}
function p(t,e,n){i.cy(e)||(e=[e])
var o=e.length
if(!o)return""
for(var a=e[0].$vars||[],s=0;s<a.length;s++){var l=c[s]
t=t.replace(d(l),d(l,0))}for(var u=0;u<o;u++)for(var h=0;h<a.length;h++){var p=e[u][a[h]]
t=t.replace(d(c[h],u),n?(0,r.Me)(p):p)}return t}function f(t,e){var n=i.Kg(t)?{color:t,extraCssText:e}:t||{},o=n.color,a=n.type
e=n.extraCssText
var s=n.renderMode||"html"
return o?"html"===s?"subItem"===a?'<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:'+(0,r.Me)(o)+";"+(e||"")+'"></span>':'<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:'+(0,r.Me)(o)+";"+(e||"")+'"></span>':{renderMode:s,content:"{"+(n.markerId||"markerX")+"|}  ",style:"subItem"===a?{width:4,height:4,borderRadius:2,backgroundColor:o}:{width:10,height:10,borderRadius:5,backgroundColor:o}}:""}function g(t,e){return e=e||"transparent",i.Kg(t)?t:i.Gv(t)&&t.colorStops&&(t.colorStops[0]||{}).color||e}function y(t,e){if("_blank"===e||"blank"===e){var n=window.open()
n.opener=null,n.location.href=t}else window.open(t,e)}},3023:(t,e,n)=>{n.r(e),n.d(e,{Arc:()=>G.A,BezierCurve:()=>H.A,BoundingRect:()=>U.A,Circle:()=>k.A,CompoundPath:()=>j,Ellipse:()=>O,Group:()=>C.A,Image:()=>I.Ay,IncrementalDisplayable:()=>Q,Line:()=>W.A,LinearGradient:()=>X.A,OrientedBoundingRect:()=>Z.A,Path:()=>r.Ay,Point:()=>$.A,Polygon:()=>B.A,Polyline:()=>V.A,RadialGradient:()=>Y,Rect:()=>F.A,Ring:()=>z,Sector:()=>N.A,Text:()=>D.Ay,applyTransform:()=>_t,clipPointsByRect:()=>At,clipRectByRect:()=>St,createIcon:()=>Mt,extendPath:()=>st,extendShape:()=>ot,getShapeClass:()=>ut,getTransform:()=>mt,groupTransition:()=>wt,initProps:()=>et.LW,isElementRemoved:()=>et.LR,lineLineIntersect:()=>It,linePolygonIntersect:()=>Tt,makeImage:()=>ct,makePath:()=>ht,mergePath:()=>pt,registerShape:()=>lt,removeElement:()=>et.Nz,removeElementWithFadeOut:()=>et.t5,resizePath:()=>ft,setTooltipConfig:()=>Dt,subPixelOptimize:()=>vt,subPixelOptimizeLine:()=>gt,subPixelOptimizeRect:()=>yt,transformDirection:()=>xt,traverseElements:()=>Lt,updateProps:()=>et.oi})
var i=n(4784),r=n(4427),o=n(928),a=n(1150),s=o.A.CMD,l=[[],[],[]],u=Math.sqrt,h=Math.atan2,c=n(8301),d=Math.sqrt,p=Math.sin,f=Math.cos,g=Math.PI
function y(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function v(t,e){return(t[0]*e[0]+t[1]*e[1])/(y(t)*y(e))}function m(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(v(t,e))}function _(t,e,n,i,r,o,a,s,l,u,h){var c=l*(g/180),y=f(c)*(t-n)/2+p(c)*(e-i)/2,_=-1*p(c)*(t-n)/2+f(c)*(e-i)/2,x=y*y/(a*a)+_*_/(s*s)
x>1&&(a*=d(x),s*=d(x))
var b=(r===o?-1:1)*d((a*a*(s*s)-a*a*(_*_)-s*s*(y*y))/(a*a*(_*_)+s*s*(y*y)))||0,w=b*a*_/s,A=b*-s*y/a,S=(t+n)/2+f(c)*w-p(c)*A,M=(e+i)/2+p(c)*w+f(c)*A,T=m([1,0],[(y-w)/a,(_-A)/s]),I=[(y-w)/a,(_-A)/s],C=[(-1*y-w)/a,(-1*_-A)/s],D=m(I,C)
if(v(I,C)<=-1&&(D=g),v(I,C)>=1&&(D=0),D<0){var k=Math.round(D/g*1e6)/1e6
D=2*g+k%2*g}h.addData(u,S,M,a,s,T,D,c,o)}var x=/([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,b=/-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,w=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i.C6)(e,t),e.prototype.applyTransform=function(t){},e}(r.Ay)
function A(t){return null!=t.setData}function S(t,e){var n=function(t){var e=new o.A
if(!t)return e
var n,i=0,r=0,a=i,s=r,l=o.A.CMD,u=t.match(x)
if(!u)return e
for(var h=0;h<u.length;h++){for(var c=u[h],d=c.charAt(0),p=void 0,f=c.match(b)||[],g=f.length,y=0;y<g;y++)f[y]=parseFloat(f[y])
for(var v=0;v<g;){var m=void 0,w=void 0,A=void 0,S=void 0,M=void 0,T=void 0,I=void 0,C=i,D=r,k=void 0,L=void 0
switch(d){case"l":i+=f[v++],r+=f[v++],p=l.L,e.addData(p,i,r)
break
case"L":i=f[v++],r=f[v++],p=l.L,e.addData(p,i,r)
break
case"m":i+=f[v++],r+=f[v++],p=l.M,e.addData(p,i,r),a=i,s=r,d="l"
break
case"M":i=f[v++],r=f[v++],p=l.M,e.addData(p,i,r),a=i,s=r,d="L"
break
case"h":i+=f[v++],p=l.L,e.addData(p,i,r)
break
case"H":i=f[v++],p=l.L,e.addData(p,i,r)
break
case"v":r+=f[v++],p=l.L,e.addData(p,i,r)
break
case"V":r=f[v++],p=l.L,e.addData(p,i,r)
break
case"C":p=l.C,e.addData(p,f[v++],f[v++],f[v++],f[v++],f[v++],f[v++]),i=f[v-2],r=f[v-1]
break
case"c":p=l.C,e.addData(p,f[v++]+i,f[v++]+r,f[v++]+i,f[v++]+r,f[v++]+i,f[v++]+r),i+=f[v-2],r+=f[v-1]
break
case"S":m=i,w=r,k=e.len(),L=e.data,n===l.C&&(m+=i-L[k-4],w+=r-L[k-3]),p=l.C,C=f[v++],D=f[v++],i=f[v++],r=f[v++],e.addData(p,m,w,C,D,i,r)
break
case"s":m=i,w=r,k=e.len(),L=e.data,n===l.C&&(m+=i-L[k-4],w+=r-L[k-3]),p=l.C,C=i+f[v++],D=r+f[v++],i+=f[v++],r+=f[v++],e.addData(p,m,w,C,D,i,r)
break
case"Q":C=f[v++],D=f[v++],i=f[v++],r=f[v++],p=l.Q,e.addData(p,C,D,i,r)
break
case"q":C=f[v++]+i,D=f[v++]+r,i+=f[v++],r+=f[v++],p=l.Q,e.addData(p,C,D,i,r)
break
case"T":m=i,w=r,k=e.len(),L=e.data,n===l.Q&&(m+=i-L[k-4],w+=r-L[k-3]),i=f[v++],r=f[v++],p=l.Q,e.addData(p,m,w,i,r)
break
case"t":m=i,w=r,k=e.len(),L=e.data,n===l.Q&&(m+=i-L[k-4],w+=r-L[k-3]),i+=f[v++],r+=f[v++],p=l.Q,e.addData(p,m,w,i,r)
break
case"A":A=f[v++],S=f[v++],M=f[v++],T=f[v++],I=f[v++],_(C=i,D=r,i=f[v++],r=f[v++],T,I,A,S,M,p=l.A,e)
break
case"a":A=f[v++],S=f[v++],M=f[v++],T=f[v++],I=f[v++],_(C=i,D=r,i+=f[v++],r+=f[v++],T,I,A,S,M,p=l.A,e)}}"z"!==d&&"Z"!==d||(p=l.Z,e.addData(p),i=a,r=s),n=p}return e.toStatic(),e}(t),i=(0,c.X$)({},e)
return i.buildPath=function(t){if(A(t))t.setData(n.data),(e=t.getContext())&&t.rebuildPath(e,1)
else{var e=t
n.rebuildPath(e,1)}},i.applyTransform=function(t){!function(t,e){if(e){var n,i,r,o,c,d,p=t.data,f=t.len(),g=s.M,y=s.C,v=s.L,m=s.R,_=s.A,x=s.Q
for(r=0,o=0;r<f;){switch(n=p[r++],o=r,i=0,n){case g:case v:i=1
break
case y:i=3
break
case x:i=2
break
case _:var b=e[4],w=e[5],A=u(e[0]*e[0]+e[1]*e[1]),S=u(e[2]*e[2]+e[3]*e[3]),M=h(-e[1]/S,e[0]/A)
p[r]*=A,p[r++]+=b,p[r]*=S,p[r++]+=w,p[r++]*=A,p[r++]*=S,p[r++]+=M,p[r++]+=M,o=r+=2
break
case m:d[0]=p[r++],d[1]=p[r++],(0,a.NW)(d,d,e),p[o++]=d[0],p[o++]=d[1],d[0]+=p[r++],d[1]+=p[r++],(0,a.NW)(d,d,e),p[o++]=d[0],p[o++]=d[1]}for(c=0;c<i;c++){var T=l[c]
T[0]=p[r++],T[1]=p[r++],(0,a.NW)(T,T,e),p[o++]=T[0],p[o++]=T[1]}}t.increaseVersion()}}(n,t),this.dirtyShape()},i}var M=n(7432),T=n(7157),I=n(2655),C=n(7941),D=n(5652),k=n(7958),L=function(){this.cx=0,this.cy=0,this.rx=0,this.ry=0},P=function(t){function e(e){return t.call(this,e)||this}return(0,i.C6)(e,t),e.prototype.getDefaultShape=function(){return new L},e.prototype.buildPath=function(t,e){var n=.5522848,i=e.cx,r=e.cy,o=e.rx,a=e.ry,s=o*n,l=a*n
t.moveTo(i-o,r),t.bezierCurveTo(i-o,r-l,i-s,r-a,i,r-a),t.bezierCurveTo(i+s,r-a,i+o,r-l,i+o,r),t.bezierCurveTo(i+o,r+l,i+s,r+a,i,r+a),t.bezierCurveTo(i-s,r+a,i-o,r+l,i-o,r),t.closePath()},e}(r.Ay)
P.prototype.type="ellipse"
const O=P
var N=n(1770),R=function(){this.cx=0,this.cy=0,this.r=0,this.r0=0},E=function(t){function e(e){return t.call(this,e)||this}return(0,i.C6)(e,t),e.prototype.getDefaultShape=function(){return new R},e.prototype.buildPath=function(t,e){var n=e.cx,i=e.cy,r=2*Math.PI
t.moveTo(n+e.r,i),t.arc(n,i,e.r,0,r,!1),t.moveTo(n+e.r0,i),t.arc(n,i,e.r0,0,r,!0)},e}(r.Ay)
E.prototype.type="ring"
const z=E
var B=n(2806),V=n(6826),F=n(4130),W=n(1032),H=n(2198),G=n(5844)
const j=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this
return e.type="compound",e}return(0,i.C6)(e,t),e.prototype._updatePathDirty=function(){for(var t=this.shape.paths,e=this.shapeChanged(),n=0;n<t.length;n++)e=e||t[n].shapeChanged()
e&&this.dirtyShape()},e.prototype.beforeBrush=function(){this._updatePathDirty()
for(var t=this.shape.paths||[],e=this.getGlobalScale(),n=0;n<t.length;n++)t[n].path||t[n].createPathProxy(),t[n].path.setScale(e[0],e[1],t[n].segmentIgnoreThreshold)},e.prototype.buildPath=function(t,e){for(var n=e.paths||[],i=0;i<n.length;i++)n[i].buildPath(t,n[i].shape,!0)},e.prototype.afterBrush=function(){for(var t=this.shape.paths||[],e=0;e<t.length;e++)t[e].pathUpdated()},e.prototype.getBoundingRect=function(){return this._updatePathDirty.call(this),r.Ay.prototype.getBoundingRect.call(this)},e}(r.Ay)
var X=n(3125)
const Y=function(t){function e(e,n,i,r,o){var a=t.call(this,r)||this
return a.x=null==e?.5:e,a.y=null==n?.5:n,a.r=null==i?.5:i,a.type="radial",a.global=o||!1,a}return(0,i.C6)(e,t),e}(n(2316).A)
var U=n(4703),Z=n(7427),$=n(1655),q=n(2028),K=[]
const Q=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this
return e.notClear=!0,e.incremental=!0,e._displayables=[],e._temporaryDisplayables=[],e._cursor=0,e}return(0,i.C6)(e,t),e.prototype.traverse=function(t,e){t.call(e,this)},e.prototype.useStyle=function(){this.style={}},e.prototype.getCursor=function(){return this._cursor},e.prototype.innerAfterBrush=function(){this._cursor=this._displayables.length},e.prototype.clearDisplaybles=function(){this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.markRedraw(),this.notClear=!1},e.prototype.clearTemporalDisplayables=function(){this._temporaryDisplayables=[]},e.prototype.addDisplayable=function(t,e){e?this._temporaryDisplayables.push(t):this._displayables.push(t),this.markRedraw()},e.prototype.addDisplayables=function(t,e){e=e||!1
for(var n=0;n<t.length;n++)this.addDisplayable(t[n],e)},e.prototype.getDisplayables=function(){return this._displayables},e.prototype.getTemporalDisplayables=function(){return this._temporaryDisplayables},e.prototype.eachPendingDisplayable=function(t){for(var e=this._cursor;e<this._displayables.length;e++)t&&t(this._displayables[e])
for(e=0;e<this._temporaryDisplayables.length;e++)t&&t(this._temporaryDisplayables[e])},e.prototype.update=function(){this.updateTransform()
for(var t=this._cursor;t<this._displayables.length;t++)(e=this._displayables[t]).parent=this,e.update(),e.parent=null
for(t=0;t<this._temporaryDisplayables.length;t++){var e;(e=this._temporaryDisplayables[t]).parent=this,e.update(),e.parent=null}},e.prototype.getBoundingRect=function(){if(!this._rect){for(var t=new U.A(1/0,1/0,-1/0,-1/0),e=0;e<this._displayables.length;e++){var n=this._displayables[e],i=n.getBoundingRect().clone()
n.needLocalTransform()&&i.applyTransform(n.getLocalTransform(K)),t.union(i)}this._rect=t}return this._rect},e.prototype.contain=function(t,e){var n=this.transformCoordToLocal(t,e)
if(this.getBoundingRect().contain(n[0],n[1]))for(var i=0;i<this._displayables.length;i++)if(this._displayables[i].contain(t,e))return!0
return!1},e}(q.Ay)
var J=n(3302),tt=n(1323),et=n(8283),nt=Math.max,it=Math.min,rt={}
function ot(t){return r.Ay.extend(t)}var at=function(t,e){var n=S(t,e)
return function(t){function e(e){var i=t.call(this,e)||this
return i.applyTransform=n.applyTransform,i.buildPath=n.buildPath,i}return(0,i.C6)(e,t),e}(w)}
function st(t,e){return at(t,e)}function lt(t,e){rt[t]=e}function ut(t){if(rt.hasOwnProperty(t))return rt[t]}function ht(t,e,n,i){var r=function(t,e){return new w(S(t,e))}(t,e)
return n&&("center"===i&&(n=dt(n,r.getBoundingRect())),ft(r,n)),r}function ct(t,e,n){var i=new I.Ay({style:{image:t,x:e.x,y:e.y,width:e.width,height:e.height},onload:function(t){if("center"===n){var r={width:t.width,height:t.height}
i.setStyle(dt(e,r))}}})
return i}function dt(t,e){var n,i=e.width/e.height,r=t.height*i
return n=r<=t.width?t.height:(r=t.width)/i,{x:t.x+t.width/2-r/2,y:t.y+t.height/2-n/2,width:r,height:n}}var pt=function(t,e){for(var n=[],i=t.length,o=0;o<i;o++){var a=t[o]
n.push(a.getUpdatedPathProxy(!0))}var s=new r.Ay(e)
return s.createPathProxy(),s.buildPath=function(t){if(A(t)){t.appendPath(n)
var e=t.getContext()
e&&t.rebuildPath(e,1)}},s}
function ft(t,e){if(t.applyTransform){var n=t.getBoundingRect().calculateTransform(e)
t.applyTransform(n)}}function gt(t,e){return J.eB(t,t,{lineWidth:e}),t}function yt(t){return J.Op(t.shape,t.shape,t.style),t}var vt=J.M7
function mt(t,e){for(var n=M.D_([]);t&&t!==e;)M.lK(n,t.getLocalTransform(),n),t=t.parent
return n}function _t(t,e,n){return e&&!(0,c.Xj)(e)&&(e=T.Ay.getLocalTransform(e)),n&&(e=M.B8([],e)),a.NW([],t,e)}function xt(t,e,n){var i=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),r=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),o=["left"===t?-i:"right"===t?i:0,"top"===t?-r:"bottom"===t?r:0]
return o=_t(o,e,n),Math.abs(o[0])>Math.abs(o[1])?o[0]>0?"right":"left":o[1]>0?"bottom":"top"}function bt(t){return!t.isGroup}function wt(t,e,n){if(t&&e){var i,r=(i={},t.traverse((function(t){bt(t)&&t.anid&&(i[t.anid]=t)})),i)
e.traverse((function(t){if(bt(t)&&t.anid){var e=r[t.anid]
if(e){var i=o(t)
t.attr(o(e)),(0,et.oi)(t,i,n,(0,tt.z)(t).dataIndex)}}}))}function o(t){var e={x:t.x,y:t.y,rotation:t.rotation}
return function(t){return null!=t.shape}(t)&&(e.shape=(0,c.X$)({},t.shape)),e}}function At(t,e){return(0,c.Tj)(t,(function(t){var n=t[0]
n=nt(n,e.x),n=it(n,e.x+e.width)
var i=t[1]
return i=nt(i,e.y),[n,i=it(i,e.y+e.height)]}))}function St(t,e){var n=nt(t.x,e.x),i=it(t.x+t.width,e.x+e.width),r=nt(t.y,e.y),o=it(t.y+t.height,e.y+e.height)
if(i>=n&&o>=r)return{x:n,y:r,width:i-n,height:o-r}}function Mt(t,e,n){var i=(0,c.X$)({rectHover:!0},e),r=i.style={strokeNoScale:!0}
if(n=n||{x:-1,y:-1,width:2,height:2},t)return 0===t.indexOf("image://")?(r.image=t.slice(8),(0,c.NT)(r,n),new I.Ay(i)):ht(t.replace("path://",""),i,n,"center")}function Tt(t,e,n,i,r){for(var o=0,a=r[r.length-1];o<r.length;o++){var s=r[o]
if(It(t,e,n,i,s[0],s[1],a[0],a[1]))return!0
a=s}}function It(t,e,n,i,r,o,a,s){var l,u=n-t,h=i-e,c=a-r,d=s-o,p=Ct(c,d,u,h)
if((l=p)<=1e-6&&l>=-1e-6)return!1
var f=t-r,g=e-o,y=Ct(f,g,u,h)/p
if(y<0||y>1)return!1
var v=Ct(f,g,c,d)/p
return!(v<0||v>1)}function Ct(t,e,n,i){return t*i-n*e}function Dt(t){var e=t.itemTooltipOption,n=t.componentModel,i=t.itemName,r=(0,c.Kg)(e)?{formatter:e}:e,o=n.mainType,a=n.componentIndex,s={componentType:o,name:i,$vars:["name"]}
s[o+"Index"]=a
var l=t.formatterParamsExtra
l&&(0,c.__)((0,c.HP)(l),(function(t){(0,c.$3)(s,t)||(s[t]=l[t],s.$vars.push(t))}))
var u=(0,tt.z)(t.el)
u.componentMainType=o,u.componentIndex=a,u.tooltipConfig={name:i,option:(0,c.NT)({content:i,encodeHTMLContent:!0,formatterParams:s},r)}}function kt(t,e){var n
t.isGroup&&(n=e(t)),n||t.traverse(e)}function Lt(t,e){if(t)if((0,c.cy)(t))for(var n=0;n<t.length;n++)kt(t[n],e)
else kt(t,e)}lt("circle",k.A),lt("ellipse",O),lt("sector",N.A),lt("ring",z),lt("polygon",B.A),lt("polyline",V.A),lt("rect",F.A),lt("line",W.A),lt("bezierCurve",H.A),lt("arc",G.A)},1323:(t,e,n)=>{n.d(e,{a:()=>r,z:()=>i})
var i=(0,n(5225).$r)(),r=function(t,e,n,r){if(r){var o=i(r)
o.dataIndex=n,o.dataType=e,o.seriesIndex=t,o.ssrType="chart","group"===r.type&&r.traverse((function(r){var o=i(r)
o.seriesIndex=t,o.dataIndex=n,o.dataType=e,o.ssrType="chart"}))}}},3960:(t,e,n)=>{n.d(e,{Ir:()=>v,Tj:()=>l,YA:()=>g,aP:()=>c,ad:()=>f,dV:()=>d,m$:()=>p,vs:()=>y})
var i=n(8301),r=n(4703),o=n(3947),a=n(3473),s=i.__,l=["left","right","top","bottom","width","height"],u=[["width","left","right"],["height","top","bottom"]]
function h(t,e,n,i,r){var o=0,a=0
null==i&&(i=1/0),null==r&&(r=1/0)
var s=0
e.eachChild((function(l,u){var h,c,d=l.getBoundingRect(),p=e.childAt(u+1),f=p&&p.getBoundingRect()
if("horizontal"===t){var g=d.width+(f?-f.x+d.x:0);(h=o+g)>i||l.newline?(o=0,h=g,a+=s+n,s=d.height):s=Math.max(s,d.height)}else{var y=d.height+(f?-f.y+d.y:0);(c=a+y)>r||l.newline?(o+=s+n,a=0,c=y,s=d.width):s=Math.max(s,d.width)}l.newline||(l.x=o,l.y=a,l.markRedraw(),"horizontal"===t?o=h+n:a=c+n)}))}var c=h
function d(t,e,n){n=a.QX(n||0)
var i=e.width,s=e.height,l=(0,o.lo)(t.left,i),u=(0,o.lo)(t.top,s),h=(0,o.lo)(t.right,i),c=(0,o.lo)(t.bottom,s),d=(0,o.lo)(t.width,i),p=(0,o.lo)(t.height,s),f=n[2]+n[0],g=n[1]+n[3],y=t.aspect
switch(isNaN(d)&&(d=i-h-g-l),isNaN(p)&&(p=s-c-f-u),null!=y&&(isNaN(d)&&isNaN(p)&&(y>i/s?d=.8*i:p=.8*s),isNaN(d)&&(d=y*p),isNaN(p)&&(p=d/y)),isNaN(l)&&(l=i-h-d-g),isNaN(u)&&(u=s-c-p-f),t.left||t.right){case"center":l=i/2-d/2-n[3]
break
case"right":l=i-d-g}switch(t.top||t.bottom){case"middle":case"center":u=s/2-p/2-n[0]
break
case"bottom":u=s-p-f}l=l||0,u=u||0,isNaN(d)&&(d=i-g-l-(h||0)),isNaN(p)&&(p=s-f-u-(c||0))
var v=new r.A(l+n[3],u+n[0],d,p)
return v.margin=n,v}function p(t,e,n,o,a,s){var l,u=!a||!a.hv||a.hv[0],h=!a||!a.hv||a.hv[1],c=a&&a.boundingMode||"all"
if((s=s||t).x=t.x,s.y=t.y,!u&&!h)return!1
if("raw"===c)l="group"===t.type?new r.A(0,0,+e.width||0,+e.height||0):t.getBoundingRect()
else if(l=t.getBoundingRect(),t.needLocalTransform()){var p=t.getLocalTransform();(l=l.clone()).applyTransform(p)}var f=d(i.NT({width:l.width,height:l.height},e),n,o),g=u?f.x-l.x:0,y=h?f.y-l.y:0
return"raw"===c?(s.x=g,s.y=y):(s.x+=g,s.y+=y),s===t&&t.markRedraw(),!0}function f(t){var e=t.layoutMode||t.constructor.layoutMode
return i.Gv(e)?e:e?{type:e}:null}function g(t,e,n){var r=n&&n.ignoreSize
!i.cy(r)&&(r=[r,r])
var o=l(u[0],0),a=l(u[1],1)
function l(n,i){var o={},a=0,l={},u=0
if(s(n,(function(e){l[e]=t[e]})),s(n,(function(t){h(e,t)&&(o[t]=l[t]=e[t]),c(o,t)&&a++,c(l,t)&&u++})),r[i])return c(e,n[1])?l[n[2]]=null:c(e,n[2])&&(l[n[1]]=null),l
if(2!==u&&a){if(a>=2)return o
for(var d=0;d<n.length;d++){var p=n[d]
if(!h(o,p)&&h(t,p)){o[p]=t[p]
break}}return o}return l}function h(t,e){return t.hasOwnProperty(e)}function c(t,e){return null!=t[e]&&"auto"!==t[e]}function d(t,e,n){s(t,(function(t){e[t]=n[t]}))}d(u[0],t,o),d(u[1],t,a)}function y(t){return v({},t)}function v(t,e){return e&&t&&s(l,(function(n){e.hasOwnProperty(n)&&(t[n]=e[n])})),t}i.cF(h,"vertical"),i.cF(h,"horizontal")},310:(t,e,n)=>{function i(t){}function r(t){throw new Error(t)}n.d(e,{$8:()=>r,aT:()=>i}),"undefined"!=typeof console&&console.warn&&console.log},5225:(t,e,n)=>{n.d(e,{$r:()=>w,Bq:()=>D,D$:()=>k,GX:()=>x,HB:()=>M,Il:()=>P,JO:()=>C,JS:()=>c,M5:()=>h,O0:()=>m,O2:()=>f,US:()=>T,UW:()=>I,XJ:()=>L,_e:()=>S,le:()=>b,oh:()=>_,qB:()=>u,vS:()=>v,vj:()=>d,zu:()=>p})
var i=n(8301),r=n(9714),o=n(3947)
function a(t,e,n){return(e-t)*n+t}var s="series\0",l="\0_ec_\0"
function u(t){return t instanceof Array?t:null==t?[]:[t]}function h(t,e,n){if(t){t[e]=t[e]||{},t.emphasis=t.emphasis||{},t.emphasis[e]=t.emphasis[e]||{}
for(var i=0,r=n.length;i<r;i++){var o=n[i]
!t.emphasis[e].hasOwnProperty(o)&&t[e].hasOwnProperty(o)&&(t.emphasis[e][o]=t[e][o])}}}var c=["fontStyle","fontWeight","fontSize","fontFamily","rich","tag","color","textBorderColor","textBorderWidth","width","height","lineHeight","align","verticalAlign","baseline","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY","backgroundColor","borderColor","borderWidth","borderRadius","padding"]
function d(t){return!(0,i.Gv)(t)||(0,i.cy)(t)||t instanceof Date?t:t.value}function p(t){return(0,i.Gv)(t)&&!(t instanceof Array)}function f(t,e,n){var r="normalMerge"===n,o="replaceMerge"===n,a="replaceAll"===n
t=t||[],e=(e||[]).slice()
var l=(0,i.nt)();(0,i.__)(e,(function(t,n){(0,i.Gv)(t)||(e[n]=null)}))
var u,h,c=function(t,e,n){var i=[]
if("replaceAll"===n)return i
for(var r=0;r<t.length;r++){var o=t[r]
o&&null!=o.id&&e.set(o.id,r),i.push({existing:"replaceMerge"===n||_(o)?null:o,newOption:null,keyInfo:null,brandNew:null})}return i}(t,l,n)
return(r||o)&&function(t,e,n,r){(0,i.__)(r,(function(o,a){if(o&&null!=o.id){var s=y(o.id),l=n.get(s)
if(null!=l){var u=t[l];(0,i.vA)(!u.newOption,'Duplicated option on id "'+s+'".'),u.newOption=o,u.existing=e[l],r[a]=null}}}))}(c,t,l,e),r&&function(t,e){(0,i.__)(e,(function(n,i){if(n&&null!=n.name)for(var r=0;r<t.length;r++){var o=t[r].existing
if(!t[r].newOption&&o&&(null==o.id||null==n.id)&&!_(n)&&!_(o)&&g("name",o,n))return t[r].newOption=n,void(e[i]=null)}}))}(c,e),r||o?function(t,e,n){(0,i.__)(e,(function(e){if(e){for(var i,r=0;(i=t[r])&&(i.newOption||_(i.existing)||i.existing&&null!=e.id&&!g("id",e,i.existing));)r++
i?(i.newOption=e,i.brandNew=n):t.push({newOption:e,brandNew:n,existing:null,keyInfo:null}),r++}}))}(c,e,o):a&&function(t,e){(0,i.__)(e,(function(e){t.push({newOption:e,brandNew:!0,existing:null,keyInfo:null})}))}(c,e),u=c,h=(0,i.nt)(),(0,i.__)(u,(function(t){var e=t.existing
e&&h.set(e.id,t)})),(0,i.__)(u,(function(t){var e=t.newOption;(0,i.vA)(!e||null==e.id||!h.get(e.id)||h.get(e.id)===t,"id duplicates: "+(e&&e.id)),e&&null!=e.id&&h.set(e.id,t),!t.keyInfo&&(t.keyInfo={})})),(0,i.__)(u,(function(t,e){var n=t.existing,r=t.newOption,o=t.keyInfo
if((0,i.Gv)(r)){if(o.name=null!=r.name?y(r.name):n?n.name:s+e,n)o.id=y(n.id)
else if(null!=r.id)o.id=y(r.id)
else{var a=0
do{o.id="\0"+o.name+"\0"+a++}while(h.get(o.id))}h.set(o.id,t)}})),c}function g(t,e,n){var i=v(e[t],null),r=v(n[t],null)
return null!=i&&null!=r&&i===r}function y(t){return v(t,"")}function v(t,e){return null==t?e:(0,i.Kg)(t)?t:(0,i.Et)(t)||(0,i.Lh)(t)?t+"":e}function m(t){var e=t.name
return!(!e||!e.indexOf(s))}function _(t){return t&&null!=t.id&&0===y(t.id).indexOf(l)}function x(t,e,n){(0,i.__)(t,(function(t){var r=t.newOption;(0,i.Gv)(r)&&(t.keyInfo.mainType=e,t.keyInfo.subType=function(t,e,n,i){return e.type?e.type:n?n.subType:i.determineSubType(t,e)}(e,r,t.existing,n))}))}function b(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?(0,i.cy)(e.dataIndex)?(0,i.Tj)(e.dataIndex,(function(e){return t.indexOfRawIndex(e)})):t.indexOfRawIndex(e.dataIndex):null!=e.name?(0,i.cy)(e.name)?(0,i.Tj)(e.name,(function(e){return t.indexOfName(e)})):t.indexOfName(e.name):void 0}function w(){var t="__ec_inner_"+A++
return function(e){return e[t]||(e[t]={})}}var A=(0,o.IH)()
function S(t,e,n){var i=M(e,n),r=i.mainTypeSpecified,o=i.queryOptionMap,a=i.others,s=n?n.defaultMainType:null
return!r&&s&&o.set(s,{}),o.each((function(e,i){var r=C(t,i,e,{useDefault:s===i,enableAll:!n||null==n.enableAll||n.enableAll,enableNone:!n||null==n.enableNone||n.enableNone})
a[i+"Models"]=r.models,a[i+"Model"]=r.models[0]})),a}function M(t,e){var n
if((0,i.Kg)(t)){var r={}
r[t+"Index"]=0,n=r}else n=t
var o=(0,i.nt)(),a={},s=!1
return(0,i.__)(n,(function(t,n){if("dataIndex"!==n&&"dataIndexInside"!==n){var r=n.match(/^(\w+)(Index|Id|Name)$/)||[],l=r[1],u=(r[2]||"").toLowerCase()
!l||!u||e&&e.includeMainTypes&&(0,i.qh)(e.includeMainTypes,l)<0||(s=s||!!l,(o.get(l)||o.set(l,{}))[u]=t)}else a[n]=t})),{mainTypeSpecified:s,queryOptionMap:o,others:a}}var T={useDefault:!0,enableAll:!1,enableNone:!1},I={useDefault:!1,enableAll:!0,enableNone:!0}
function C(t,e,n,r){r=r||T
var o=n.index,a=n.id,s=n.name,l={models:null,specified:null!=o||null!=a||null!=s}
if(!l.specified){var u=void 0
return l.models=r.useDefault&&(u=t.getComponent(e))?[u]:[],l}return"none"===o||!1===o?((0,i.vA)(r.enableNone,'`"none"` or `false` is not a valid value on index option.'),l.models=[],l):("all"===o&&((0,i.vA)(r.enableAll,'`"all"` is not a valid value on index option.'),o=a=s=null),l.models=t.queryComponents({mainType:e,index:o,id:a,name:s}),l)}function D(t,e,n){t.setAttribute?t.setAttribute(e,n):t[e]=n}function k(t,e){return t.getAttribute?t.getAttribute(e):t[e]}function L(t){return"auto"===t?r.A.domSupported?"html":"richText":t||"html"}function P(t,e,n,r,s){var l=null==e||"auto"===e
if(null==r)return r
if((0,i.Et)(r)){var u=a(n||0,r,s)
return(0,o.LI)(u,l?Math.max((0,o.XV)(n||0),(0,o.XV)(r)):e)}if((0,i.Kg)(r))return s<1?n:r
for(var h=[],c=n,d=r,p=Math.max(c?c.length:0,d.length),f=0;f<p;++f){var g=t.getDimensionInfo(f)
if(g&&"ordinal"===g.type)h[f]=(s<1&&c?c:d)[f]
else{var y=c&&c[f]?c[f]:0,v=d[f]
u=a(y,v,s),h[f]=(0,o.LI)(u,l?Math.max((0,o.XV)(y),(0,o.XV)(v)):e)}}return h}},3947:(t,e,n)=>{n.d(e,{Cb:()=>a,Cm:()=>x,IH:()=>A,LI:()=>l,NX:()=>_,Sm:()=>b,Tr:()=>p,XV:()=>h,Y6:()=>u,_7:()=>f,_U:()=>v,au:()=>m,dh:()=>g,hb:()=>c,kM:()=>d,kf:()=>w,lQ:()=>M,lo:()=>s})
var i=n(8301),r=1e-4,o=20
function a(t,e,n,i){var r=e[0],o=e[1],a=n[0],s=n[1],l=o-r,u=s-a
if(0===l)return 0===u?a:(a+s)/2
if(i)if(l>0){if(t<=r)return a
if(t>=o)return s}else{if(t>=r)return a
if(t<=o)return s}else{if(t===r)return a
if(t===o)return s}return(t-r)/l*u+a}function s(t,e){switch(t){case"center":case"middle":t="50%"
break
case"left":case"top":t="0%"
break
case"right":case"bottom":t="100%"}return i.Kg(t)?(n=t,n.replace(/^\s+|\s+$/g,"")).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t
var n}function l(t,e,n){return null==e&&(e=10),e=Math.min(Math.max(0,e),o),t=(+t).toFixed(e),n?t:+t}function u(t){return t.sort((function(t,e){return t-e})),t}function h(t){if(t=+t,isNaN(t))return 0
if(t>1e-14)for(var e=1,n=0;n<15;n++,e*=10)if(Math.round(t*e)/e===t)return n
return function(t){var e=t.toString().toLowerCase(),n=e.indexOf("e"),i=n>0?+e.slice(n+1):0,r=n>0?n:e.length,o=e.indexOf("."),a=o<0?0:r-1-o
return Math.max(0,a-i)}(t)}function c(t,e){var n=Math.log,i=Math.LN10,r=Math.floor(n(t[1]-t[0])/i),o=Math.round(n(Math.abs(e[1]-e[0]))/i),a=Math.min(Math.max(-r+o,0),20)
return isFinite(a)?a:20}function d(t,e){var n=i.TS(t,(function(t,e){return t+(isNaN(e)?0:e)}),0)
if(0===n)return[]
for(var r=Math.pow(10,e),o=i.Tj(t,(function(t){return(isNaN(t)?0:t)/n*r*100})),a=100*r,s=i.Tj(o,(function(t){return Math.floor(t)})),l=i.TS(s,(function(t,e){return t+e}),0),u=i.Tj(o,(function(t,e){return t-s[e]}));l<a;){for(var h=Number.NEGATIVE_INFINITY,c=null,d=0,p=u.length;d<p;++d)u[d]>h&&(h=u[d],c=d);++s[c],u[c]=0,++l}return i.Tj(s,(function(t){return t/r}))}function p(t,e){var n=Math.max(h(t),h(e)),i=t+e
return n>o?i:l(i,n)}function f(t){var e=2*Math.PI
return(t%e+e)%e}function g(t){return t>-r&&t<r}var y=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/
function v(t){if(t instanceof Date)return t
if(i.Kg(t)){var e=y.exec(t)
if(!e)return new Date(NaN)
if(e[8]){var n=+e[4]||0
return"Z"!==e[8].toUpperCase()&&(n-=+e[8].slice(0,3)),new Date(Date.UTC(+e[1],+(e[2]||1)-1,+e[3]||1,n,+(e[5]||0),+e[6]||0,e[7]?+e[7].substring(0,3):0))}return new Date(+e[1],+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0),+e[6]||0,e[7]?+e[7].substring(0,3):0)}return null==t?new Date(NaN):new Date(Math.round(t))}function m(t){return Math.pow(10,_(t))}function _(t){if(0===t)return 0
var e=Math.floor(Math.log(t)/Math.LN10)
return t/Math.pow(10,e)>=10&&e++,e}function x(t,e){var n=_(t),i=Math.pow(10,n),r=t/i
return t=(e?r<1.5?1:r<2.5?2:r<4?3:r<7?5:10:r<1?1:r<2?2:r<3?3:r<5?5:10)*i,n>=-20?+t.toFixed(n<0?-n:0):t}function b(t){var e=parseFloat(t)
return e==t&&(0!==e||!i.Kg(t)||t.indexOf("x")<=0)?e:NaN}function w(t){return!isNaN(b(t))}function A(){return Math.round(9*Math.random())}function S(t,e){return 0===e?t:S(e,t%e)}function M(t,e){return null==t?e:null==e?t:t*e/S(t,e)}},200:(t,e,n)=>{n.d(e,{BV:()=>g,DW:()=>E,Du:()=>Z,HY:()=>V,Iz:()=>Q,JC:()=>H,JI:()=>G,Lm:()=>it,Lv:()=>b,Lx:()=>ht,Mx:()=>at,PW:()=>x,Pk:()=>N,Q6:()=>A,QX:()=>W,SD:()=>F,T$:()=>ct,Tl:()=>q,U2:()=>w,_m:()=>K,_n:()=>ut,e3:()=>f,fz:()=>dt,gd:()=>j,h5:()=>_,iJ:()=>nt,jA:()=>tt,lV:()=>$,mc:()=>et,qR:()=>Y,t6:()=>J,u6:()=>lt,wV:()=>y,zX:()=>p})
var i=n(8301),r=n(1323),o=n(7435),a=n(5225),s=n(4427),l=1,u={},h=(0,a.$r)(),c=(0,a.$r)(),d=0,p=1,f=2,g=["emphasis","blur","select"],y=["normal","emphasis","blur","select"],v=10,m=9,_="highlight",x="downplay",b="select",w="unselect",A="toggleSelect"
function S(t){return null!=t&&"none"!==t}function M(t,e,n){t.onHoverStateChange&&(t.hoverState||0)!==n&&t.onHoverStateChange(e),t.hoverState=n}function T(t){M(t,"emphasis",f)}function I(t){t.hoverState===f&&M(t,"normal",d)}function C(t){M(t,"blur",p)}function D(t){t.hoverState===p&&M(t,"normal",d)}function k(t){t.selected=!0}function L(t){t.selected=!1}function P(t,e,n){e(t,n)}function O(t,e,n){P(t,e,n),t.isGroup&&t.traverse((function(t){P(t,e,n)}))}function N(t,e){switch(e){case"emphasis":t.hoverState=f
break
case"normal":t.hoverState=d
break
case"blur":t.hoverState=p
break
case"select":t.selected=!0}}function R(t,e){var n=this.states[t]
if(this.style){if("emphasis"===t)return function(t,e,n,r){var a=n&&(0,i.qh)(n,"select")>=0,l=!1
if(t instanceof s.Ay){var u=h(t),c=a&&u.selectFill||u.normalFill,d=a&&u.selectStroke||u.normalStroke
if(S(c)||S(d)){var p=(r=r||{}).style||{}
"inherit"===p.fill?(l=!0,r=(0,i.X$)({},r),(p=(0,i.X$)({},p)).fill=c):!S(p.fill)&&S(c)?(l=!0,r=(0,i.X$)({},r),(p=(0,i.X$)({},p)).fill=(0,o.P)(c)):!S(p.stroke)&&S(d)&&(l||(r=(0,i.X$)({},r),p=(0,i.X$)({},p)),p.stroke=(0,o.P)(d)),r.style=p}}if(r&&null==r.z2){l||(r=(0,i.X$)({},r))
var f=t.z2EmphasisLift
r.z2=t.z2+(null!=f?f:v)}return r}(this,0,e,n)
if("blur"===t)return function(t,e,n){var r=(0,i.qh)(t.currentStates,e)>=0,o=t.style.opacity,a=r?null:function(t,e,n,i){for(var r=t.style,o={},a=0;a<e.length;a++){var s=e[a],l=r[s]
o[s]=null==l?i&&i[s]:l}for(a=0;a<t.animators.length;a++){var u=t.animators[a]
u.__fromStateTransition&&u.__fromStateTransition.indexOf(n)<0&&"style"===u.targetName&&u.saveTo(o,e)}return o}(t,["opacity"],e,{opacity:1}),s=(n=n||{}).style||{}
return null==s.opacity&&(n=(0,i.X$)({},n),s=(0,i.X$)({opacity:r?o:.1*a.opacity},s),n.style=s),n}(this,t,n)
if("select"===t)return function(t,e,n){if(n&&null==n.z2){n=(0,i.X$)({},n)
var r=t.z2SelectLift
n.z2=t.z2+(null!=r?r:m)}return n}(this,0,n)}return n}function E(t){t.stateProxy=R
var e=t.getTextContent(),n=t.getTextGuideLine()
e&&(e.stateProxy=R),n&&(n.stateProxy=R)}function z(t,e){!X(t,e)&&!t.__highByOuter&&O(t,T)}function B(t,e){!X(t,e)&&!t.__highByOuter&&O(t,I)}function V(t,e){t.__highByOuter|=1<<(e||0),O(t,T)}function F(t,e){!(t.__highByOuter&=~(1<<(e||0)))&&O(t,I)}function W(t){O(t,C)}function H(t){O(t,D)}function G(t){O(t,k)}function j(t){O(t,L)}function X(t,e){return t.__highDownSilentOnTouch&&e.zrByTouch}function Y(t){var e=t.getModel(),n=[],r=[]
e.eachComponent((function(e,i){var o=c(i),a="series"===e,s=a?t.getViewOfSeriesModel(i):t.getViewOfComponentModel(i)
!a&&r.push(s),o.isBlured&&(s.group.traverse((function(t){D(t)})),a&&n.push(i)),o.isBlured=!1})),(0,i.__)(r,(function(t){t&&t.toggleBlurSeries&&t.toggleBlurSeries(n,!1,e)}))}function U(t,e,n,r){var o=r.getModel()
function a(t,e){for(var n=0;n<e.length;n++){var i=t.getItemGraphicEl(e[n])
i&&H(i)}}if(n=n||"coordinateSystem",null!=t&&e&&"none"!==e){var s=o.getSeriesByIndex(t),l=s.coordinateSystem
l&&l.master&&(l=l.master)
var u=[]
o.eachSeries((function(t){var o=s===t,h=t.coordinateSystem
if(h&&h.master&&(h=h.master),!("series"===n&&!o||"coordinateSystem"===n&&!(h&&l?h===l:o)||"series"===e&&o)){if(r.getViewOfSeriesModel(t).group.traverse((function(t){t.__highByOuter&&o&&"self"===e||C(t)})),(0,i.Xj)(e))a(t.getData(),e)
else if((0,i.Gv)(e))for(var d=(0,i.HP)(e),p=0;p<d.length;p++)a(t.getData(d[p]),e[d[p]])
u.push(t),c(t).isBlured=!0}})),o.eachComponent((function(t,e){if("series"!==t){var n=r.getViewOfComponentModel(e)
n&&n.toggleBlurSeries&&n.toggleBlurSeries(u,!0,o)}}))}}function Z(t,e,n){if(null!=t&&null!=e){var i=n.getModel().getComponent(t,e)
if(i){c(i).isBlured=!0
var r=n.getViewOfComponentModel(i)
r&&r.focusBlurEnabled&&r.group.traverse((function(t){C(t)}))}}}function $(t,e,n){var o=t.seriesIndex,s=t.getData(e.dataType)
if(s){var l=(0,a.le)(s,e)
l=((0,i.cy)(l)?l[0]:l)||0
var u=s.getItemGraphicEl(l)
if(!u)for(var h=s.count(),c=0;!u&&c<h;)u=s.getItemGraphicEl(c++)
if(u){var d=(0,r.z)(u)
U(o,d.focus,d.blurScope,n)}else{var p=t.get(["emphasis","focus"]),f=t.get(["emphasis","blurScope"])
null!=p&&U(o,p,f,n)}}}function q(t,e,n,i){var o={focusSelf:!1,dispatchers:null}
if(null==t||"series"===t||null==e||null==n)return o
var a=i.getModel().getComponent(t,e)
if(!a)return o
var s=i.getViewOfComponentModel(a)
if(!s||!s.findHighDownDispatchers)return o
for(var l,u=s.findHighDownDispatchers(n),h=0;h<u.length;h++)if("self"===(0,r.z)(u[h]).focus){l=!0
break}return{focusSelf:l,dispatchers:u}}function K(t,e,n){var o=(0,r.z)(t),a=q(o.componentMainType,o.componentIndex,o.componentHighDownName,n),s=a.dispatchers,l=a.focusSelf
s?(l&&Z(o.componentMainType,o.componentIndex,n),(0,i.__)(s,(function(t){return z(t,e)}))):(U(o.seriesIndex,o.focus,o.blurScope,n),"self"===o.focus&&Z(o.componentMainType,o.componentIndex,n),z(t,e))}function Q(t,e,n){Y(n)
var o=(0,r.z)(t),a=q(o.componentMainType,o.componentIndex,o.componentHighDownName,n).dispatchers
a?(0,i.__)(a,(function(t){return B(t,e)})):B(t,e)}function J(t,e,n){if(ht(e)){var r=e.dataType,o=t.getData(r),s=(0,a.le)(o,e);(0,i.cy)(s)||(s=[s]),t[e.type===A?"toggleSelect":e.type===b?"select":"unselect"](s,r)}}function tt(t){var e=t.getAllData();(0,i.__)(e,(function(e){var n=e.data,i=e.type
n.eachItemGraphicEl((function(e,n){t.isSelected(n,i)?G(e):j(e)}))}))}function et(t){var e=[]
return t.eachSeries((function(t){var n=t.getAllData();(0,i.__)(n,(function(n){n.data
var i=n.type,r=t.getSelectedDataIndices()
if(r.length>0){var o={dataIndex:r,seriesIndex:t.seriesIndex}
null!=i&&(o.dataType=i),e.push(o)}}))})),e}function nt(t,e,n){st(t,!0),O(t,E),function(t,e,n){var i=(0,r.z)(t)
null!=e?(i.focus=e,i.blurScope=n):i.focus&&(i.focus=null)}(t,e,n)}function it(t,e,n,i){i?function(t){st(t,!1)}(t):nt(t,e,n)}var rt=["emphasis","blur","select"],ot={itemStyle:"getItemStyle",lineStyle:"getLineStyle",areaStyle:"getAreaStyle"}
function at(t,e,n,i){n=n||"itemStyle"
for(var r=0;r<rt.length;r++){var o=rt[r],a=e.getModel([o,n])
t.ensureState(o).style=i?i(a):a[ot[n]]()}}function st(t,e){var n=!1===e,i=t
t.highDownSilentOnTouch&&(i.__highDownSilentOnTouch=t.highDownSilentOnTouch),n&&!i.__highDownDispatcher||(i.__highByOuter=i.__highByOuter||0,i.__highDownDispatcher=!n)}function lt(t){return!(!t||!t.__highDownDispatcher)}function ut(t){var e=u[t]
return null==e&&l<=32&&(e=u[t]=l++),e}function ht(t){var e=t.type
return e===b||e===w||e===A}function ct(t){var e=t.type
return e===_||e===x}function dt(t){var e=h(t)
e.normalFill=t.style.fill,e.normalStroke=t.style.stroke
var n=t.states.select||{}
e.selectFill=n.style&&n.style.fill||null,e.selectStroke=n.style&&n.style.stroke||null}},5478:(t,e,n)=>{n.d(e,{$V:()=>m,hV:()=>A,v5:()=>b,xU:()=>w})
var i=n(8301),r=n(4427),o=n(1032),a=n(4130),s=n(7958),l=n(3023),u=n(4703),h=n(7627),c=n(3947),d=r.Ay.extend({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,o=e.height/2
t.moveTo(n,i-o),t.lineTo(n+r,i+o),t.lineTo(n-r,i+o),t.closePath()}}),p=r.Ay.extend({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,o=e.height/2
t.moveTo(n,i-o),t.lineTo(n+r,i),t.lineTo(n,i+o),t.lineTo(n-r,i),t.closePath()}}),f=r.Ay.extend({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width/5*3,o=Math.max(r,e.height),a=r/2,s=a*a/(o-a),l=i-o+a+s,u=Math.asin(s/a),h=Math.cos(u)*a,c=Math.sin(u),d=Math.cos(u),p=.6*a,f=.7*a
t.moveTo(n-h,l+s),t.arc(n,l,a,Math.PI-u,2*Math.PI+u),t.bezierCurveTo(n+h-c*p,l+s+d*p,n,i-f,n,i),t.bezierCurveTo(n,i-f,n-h+c*p,l+s+d*p,n-h,l+s),t.closePath()}}),g=r.Ay.extend({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.height,i=e.width,r=e.x,o=e.y,a=i/3*2
t.moveTo(r,o),t.lineTo(r+a,o+n),t.lineTo(r,o+n/4*3),t.lineTo(r-a,o+n),t.lineTo(r,o),t.closePath()}}),y={line:o.A,rect:a.A,roundRect:a.A,square:a.A,circle:s.A,diamond:p,pin:f,arrow:g,triangle:d},v={line:function(t,e,n,i,r){r.x1=t,r.y1=e+i/2,r.x2=t+n,r.y2=e+i/2},rect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i},roundRect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i,r.r=Math.min(n,i)/4},square:function(t,e,n,i,r){var o=Math.min(n,i)
r.x=t,r.y=e,r.width=o,r.height=o},circle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.r=Math.min(n,i)/2},diamond:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i},pin:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},arrow:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},triangle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i}},m={};(0,i.__)(y,(function(t,e){m[e]=new t}))
var _=r.Ay.extend({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},calculateTextPosition:function(t,e,n){var i=(0,h.X4)(t,e,n),r=this.shape
return r&&"pin"===r.symbolType&&"inside"===e.position&&(i.y=n.y+.4*n.height),i},buildPath:function(t,e,n){var i=e.symbolType
if("none"!==i){var r=m[i]
r||(r=m[i="rect"]),v[i](e.x,e.y,e.width,e.height,r.shape),r.buildPath(t,r.shape,n)}}})
function x(t,e){if("image"!==this.type){var n=this.style
this.__isEmptyBrush?(n.stroke=t,n.fill=e||"#fff",n.lineWidth=2):"line"===this.shape.symbolType?n.stroke=t:n.fill=t,this.markRedraw()}}function b(t,e,n,i,r,o,a){var s,h=0===t.indexOf("empty")
return h&&(t=t.substr(5,1).toLowerCase()+t.substr(6)),(s=0===t.indexOf("image://")?l.makeImage(t.slice(8),new u.A(e,n,i,r),a?"center":"cover"):0===t.indexOf("path://")?l.makePath(t.slice(7),{},new u.A(e,n,i,r),a?"center":"cover"):new _({shape:{symbolType:t,x:e,y:n,width:i,height:r}})).__isEmptyBrush=h,s.setColor=x,o&&s.setColor(o),s}function w(t){return(0,i.cy)(t)||(t=[+t,+t]),[t[0]||0,t[1]||0]}function A(t,e){if(null!=t)return(0,i.cy)(t)||(t=[t,t]),[(0,c.lo)(t[0],e[0])||0,(0,c.lo)((0,i.bZ)(t[1],t[0]),e[1])||0]}},7322:(t,e,n)=>{n.d(e,{IU:()=>l,N:()=>s,nF:()=>a})
var i="\0__throttleOriginMethod",r="\0__throttleRate",o="\0__throttleType"
function a(t,e,n){var i,r,o,a,s,l=0,u=0,h=null
function c(){u=(new Date).getTime(),h=null,t.apply(o,a||[])}e=e||0
var d=function(){for(var t=[],d=0;d<arguments.length;d++)t[d]=arguments[d]
i=(new Date).getTime(),o=this,a=t
var p=s||e,f=s||n
s=null,r=i-(f?l:u)-p,clearTimeout(h),f?h=setTimeout(c,p):r>=0?c():h=setTimeout(c,-r),l=i}
return d.clear=function(){h&&(clearTimeout(h),h=null)},d.debounceNextCall=function(t){s=t},d}function s(t,e,n,s){var l=t[e]
if(l){var u=l[i]||l,h=l[o]
if(l[r]!==n||h!==s){if(null==n||!s)return t[e]=u;(l=t[e]=a(u,n,"debounce"===s))[i]=u,l[o]=s,l[r]=n}return l}}function l(t,e){var n=t[e]
n&&n[i]&&(n.clear&&n.clear(),t[e]=n[i])}},8327:(t,e,n)=>{n.d(e,{$9:()=>x,$H:()=>c,CZ:()=>h,F7:()=>y,FP:()=>B,GP:()=>b,KF:()=>E,Lm:()=>f,MA:()=>u,OY:()=>s,Wf:()=>k,X_:()=>w,Yd:()=>R,Zz:()=>L,bP:()=>I,ce:()=>_,g0:()=>S,hY:()=>M,iC:()=>C,iW:()=>l,jJ:()=>T,tM:()=>P,ti:()=>N,ww:()=>z,xu:()=>O,yB:()=>D,ym:()=>m})
var i=n(8301),r=n(3947),o=n(7411),a=n(7413),s=1e3,l=60*s,u=60*l,h=24*u,c=365*h,d={year:"{yyyy}",month:"{MMM}",day:"{d}",hour:"{HH}:{mm}",minute:"{HH}:{mm}",second:"{HH}:{mm}:{ss}",millisecond:"{HH}:{mm}:{ss} {SSS}",none:"{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}"},p="{yyyy}-{MM}-{dd}",f={year:"{yyyy}",month:"{yyyy}-{MM}",day:p,hour:p+" "+d.hour,minute:p+" "+d.minute,second:p+" "+d.second,millisecond:d.none},g=["year","month","day","hour","minute","second","millisecond"],y=["year","half-year","quarter","month","week","half-week","day","half-day","quarter-day","hour","minute","second","millisecond"]
function v(t,e){return"0000".substr(0,e-(t+="").length)+t}function m(t){switch(t){case"half-year":case"quarter":return"month"
case"week":case"half-week":return"day"
case"half-day":case"quarter-day":return"hour"
default:return t}}function _(t){return t===m(t)}function x(t){switch(t){case"year":case"month":return"day"
case"millisecond":return"millisecond"
default:return"second"}}function b(t,e,n,i){var s=r._U(t),l=s[M(n)](),u=s[T(n)]()+1,h=Math.floor((u-1)/3)+1,c=s[I(n)](),d=s["get"+(n?"UTC":"")+"Day"](),p=s[C(n)](),f=(p-1)%12+1,g=s[D(n)](),y=s[k(n)](),m=s[L(n)](),_=p>=12?"pm":"am",x=_.toUpperCase(),b=(i instanceof a.A?i:(0,o.A4)(i||o.Lv)||(0,o.pr)()).getModel("time"),w=b.get("month"),A=b.get("monthAbbr"),S=b.get("dayOfWeek"),P=b.get("dayOfWeekAbbr")
return(e||"").replace(/{a}/g,_+"").replace(/{A}/g,x+"").replace(/{yyyy}/g,l+"").replace(/{yy}/g,v(l%100+"",2)).replace(/{Q}/g,h+"").replace(/{MMMM}/g,w[u-1]).replace(/{MMM}/g,A[u-1]).replace(/{MM}/g,v(u,2)).replace(/{M}/g,u+"").replace(/{dd}/g,v(c,2)).replace(/{d}/g,c+"").replace(/{eeee}/g,S[d]).replace(/{ee}/g,P[d]).replace(/{e}/g,d+"").replace(/{HH}/g,v(p,2)).replace(/{H}/g,p+"").replace(/{hh}/g,v(f+"",2)).replace(/{h}/g,f+"").replace(/{mm}/g,v(g,2)).replace(/{m}/g,g+"").replace(/{ss}/g,v(y,2)).replace(/{s}/g,y+"").replace(/{SSS}/g,v(m,3)).replace(/{S}/g,m+"")}function w(t,e,n,r,o){var a=null
if(i.Kg(n))a=n
else if(i.Tn(n))a=n(t.value,e,{level:t.level})
else{var s=i.X$({},d)
if(t.level>0)for(var l=0;l<g.length;++l)s[g[l]]="{primary|"+s[g[l]]+"}"
var u=n?!1===n.inherit?n:i.NT(n,s):s,h=A(t.value,o)
if(u[h])a=u[h]
else if(u.inherit){for(l=y.indexOf(h)-1;l>=0;--l)if(u[h]){a=u[h]
break}a=a||s.none}if(i.cy(a)){var c=null==t.level?0:t.level>=0?t.level:a.length+t.level
a=a[c=Math.min(c,a.length-1)]}}return b(new Date(t.value),a,o,r)}function A(t,e){var n=r._U(t),i=n[T(e)]()+1,o=n[I(e)](),a=n[C(e)](),s=n[D(e)](),l=n[k(e)](),u=0===n[L(e)](),h=u&&0===l,c=h&&0===s,d=c&&0===a,p=d&&1===o
return p&&1===i?"year":p?"month":d?"day":c?"hour":h?"minute":u?"second":"millisecond"}function S(t,e,n){var o=i.Et(t)?r._U(t):t
switch(e=e||A(t,n)){case"year":return o[M(n)]()
case"half-year":return o[T(n)]()>=6?1:0
case"quarter":return Math.floor((o[T(n)]()+1)/4)
case"month":return o[T(n)]()
case"day":return o[I(n)]()
case"half-day":return o[C(n)]()/24
case"hour":return o[C(n)]()
case"minute":return o[D(n)]()
case"second":return o[k(n)]()
case"millisecond":return o[L(n)]()}}function M(t){return t?"getUTCFullYear":"getFullYear"}function T(t){return t?"getUTCMonth":"getMonth"}function I(t){return t?"getUTCDate":"getDate"}function C(t){return t?"getUTCHours":"getHours"}function D(t){return t?"getUTCMinutes":"getMinutes"}function k(t){return t?"getUTCSeconds":"getSeconds"}function L(t){return t?"getUTCMilliseconds":"getMilliseconds"}function P(t){return t?"setUTCFullYear":"setFullYear"}function O(t){return t?"setUTCMonth":"setMonth"}function N(t){return t?"setUTCDate":"setDate"}function R(t){return t?"setUTCHours":"setHours"}function E(t){return t?"setUTCMinutes":"setMinutes"}function z(t){return t?"setUTCSeconds":"setSeconds"}function B(t){return t?"setUTCMilliseconds":"setMilliseconds"}},6233:(t,e,n)=>{n.d(e,{Km:()=>o,Pe:()=>i,Wk:()=>a,XO:()=>l,i_:()=>h,mK:()=>r,oC:()=>c,t1:()=>s,vm:()=>u})
var i=(0,n(8301).nt)(["tooltip","label","itemName","itemId","itemGroupId","itemChildGroupId","seriesName"]),r="original",o="arrayRows",a="objectRows",s="keyedColumns",l="typedArray",u="unknown",h="column",c="row"},6228:(t,e,n)=>{n.d(e,{J:()=>a})
var i=n(8301),r="undefined"!=typeof Float32Array,o=r?Float32Array:Array
function a(t){return(0,i.cy)(t)?r?new Float32Array(t):t:new o(t)}},1993:(t,e,n)=>{n.d(e,{A:()=>x})
var i=n(8301),r=n(7941),o=n(5019),a=n(3078),s=n(5225),l=n(200),u=n(3046),h=n(2165),c=n(3023),d=s.$r(),p=(0,h.A)(),f=function(){function t(){this.group=new r.A,this.uid=o.$Q("viewChart"),this.renderTask=(0,u.U)({plan:v,reset:m}),this.renderTask.context={view:this}}return t.prototype.init=function(t,e){},t.prototype.render=function(t,e,n,i){},t.prototype.highlight=function(t,e,n,i){var r=t.getData(i&&i.dataType)
r&&y(r,i,"emphasis")},t.prototype.downplay=function(t,e,n,i){var r=t.getData(i&&i.dataType)
r&&y(r,i,"normal")},t.prototype.remove=function(t,e){this.group.removeAll()},t.prototype.dispose=function(t,e){},t.prototype.updateView=function(t,e,n,i){this.render(t,e,n,i)},t.prototype.updateLayout=function(t,e,n,i){this.render(t,e,n,i)},t.prototype.updateVisual=function(t,e,n,i){this.render(t,e,n,i)},t.prototype.eachRendered=function(t){(0,c.traverseElements)(this.group,t)},t.markUpdateMethod=function(t,e){d(t).updateMethod=e},t.protoInitialize=void(t.prototype.type="chart"),t}()
function g(t,e,n){t&&(0,l.u6)(t)&&("emphasis"===e?l.HY:l.SD)(t,n)}function y(t,e,n){var r=s.le(t,e),o=e&&null!=e.highlightKey?(0,l._n)(e.highlightKey):null
null!=r?(0,i.__)(s.qB(r),(function(e){g(t.getItemGraphicEl(e),n,o)})):t.eachItemGraphicEl((function(t){g(t,n,o)}))}function v(t){return p(t.model)}function m(t){var e=t.model,n=t.ecModel,i=t.api,r=t.payload,o=e.pipelineContext.progressiveRender,a=t.view,s=r&&d(r).updateMethod,l=o?"incrementalPrepareRender":s&&a[s]?s:"render"
return"render"!==l&&a[l](e,n,i,r),_[l]}a.gq(f,["dispose"]),a.tQ(f)
var _={incrementalPrepareRender:{progress:function(t,e){e.view.incrementalRender(t,e.model,e.ecModel,e.api,e.payload)}},render:{forceFirstProgress:!0,progress:function(t,e){e.view.render(e.model,e.ecModel,e.api,e.payload)}}}
const x=f},4642:(t,e,n)=>{n.d(e,{A:()=>s})
var i=n(7941),r=n(5019),o=n(3078),a=function(){function t(){this.group=new i.A,this.uid=r.$Q("viewComponent")}return t.prototype.init=function(t,e){},t.prototype.render=function(t,e,n,i){},t.prototype.dispose=function(t,e){},t.prototype.updateView=function(t,e,n,i){},t.prototype.updateLayout=function(t,e,n,i){},t.prototype.updateVisual=function(t,e,n,i){},t.prototype.toggleBlurSeries=function(t,e,n){},t.prototype.eachRendered=function(t){var e=this.group
e&&e.traverse(t)},t}()
o.gq(a),o.tQ(a)
const s=a},7538:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(){function t(t,e){this._getDataWithEncodedVisual=t,this._getRawData=e}return t.prototype.getAllNames=function(){var t=this._getRawData()
return t.mapArray(t.getName)},t.prototype.containName=function(t){return this._getRawData().indexOfName(t)>=0},t.prototype.indexOfName=function(t){return this._getDataWithEncodedVisual().indexOfName(t)},t.prototype.getItemVisual=function(t,e){return this._getDataWithEncodedVisual().getItemVisual(t,e)},t}()},4986:(t,e,n)=>{n.d(e,{A:()=>s})
var i=n(1343)
const r=function(t,e){for(var n=t.length;n--;)if((0,i.A)(t[n][0],e))return n
return-1}
var o=Array.prototype.splice
function a(t){var e=-1,n=null==t?0:t.length
for(this.clear();++e<n;){var i=t[e]
this.set(i[0],i[1])}}a.prototype.clear=function(){this.__data__=[],this.size=0},a.prototype.delete=function(t){var e=this.__data__,n=r(e,t)
return!(n<0||(n==e.length-1?e.pop():o.call(e,n,1),--this.size,0))},a.prototype.get=function(t){var e=this.__data__,n=r(e,t)
return n<0?void 0:e[n][1]},a.prototype.has=function(t){return r(this.__data__,t)>-1},a.prototype.set=function(t,e){var n=this.__data__,i=r(n,t)
return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}
const s=a},4464:(t,e,n)=>{n.d(e,{A:()=>o})
var i=n(5252),r=n(1020)
const o=(0,i.A)(r.A,"Map")},4972:(t,e,n)=>{n.d(e,{A:()=>d})
const i=(0,n(5252).A)(Object,"create")
var r=Object.prototype.hasOwnProperty,o=Object.prototype.hasOwnProperty
function a(t){var e=-1,n=null==t?0:t.length
for(this.clear();++e<n;){var i=t[e]
this.set(i[0],i[1])}}a.prototype.clear=function(){this.__data__=i?i(null):{},this.size=0},a.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t]
return this.size-=e?1:0,e},a.prototype.get=function(t){var e=this.__data__
if(i){var n=e[t]
return"__lodash_hash_undefined__"===n?void 0:n}return r.call(e,t)?e[t]:void 0},a.prototype.has=function(t){var e=this.__data__
return i?void 0!==e[t]:o.call(e,t)},a.prototype.set=function(t,e){var n=this.__data__
return this.size+=this.has(t)?0:1,n[t]=i&&void 0===e?"__lodash_hash_undefined__":e,this}
const s=a
var l=n(4986),u=n(4464)
const h=function(t,e){var n,i,r=t.__data__
return("string"==(i=typeof(n=e))||"number"==i||"symbol"==i||"boolean"==i?"__proto__"!==n:null===n)?r["string"==typeof e?"string":"hash"]:r.map}
function c(t){var e=-1,n=null==t?0:t.length
for(this.clear();++e<n;){var i=t[e]
this.set(i[0],i[1])}}c.prototype.clear=function(){this.size=0,this.__data__={hash:new s,map:new(u.A||l.A),string:new s}},c.prototype.delete=function(t){var e=h(this,t).delete(t)
return this.size-=e?1:0,e},c.prototype.get=function(t){return h(this,t).get(t)},c.prototype.has=function(t){return h(this,t).has(t)},c.prototype.set=function(t,e){var n=h(this,t),i=n.size
return n.set(t,e),this.size+=n.size==i?0:1,this}
const d=c},4919:(t,e,n)=>{n.d(e,{A:()=>s})
var i=n(4986),r=n(4464),o=n(4972)
function a(t){var e=this.__data__=new i.A(t)
this.size=e.size}a.prototype.clear=function(){this.__data__=new i.A,this.size=0},a.prototype.delete=function(t){var e=this.__data__,n=e.delete(t)
return this.size=e.size,n},a.prototype.get=function(t){return this.__data__.get(t)},a.prototype.has=function(t){return this.__data__.has(t)},a.prototype.set=function(t,e){var n=this.__data__
if(n instanceof i.A){var a=n.__data__
if(!r.A||a.length<199)return a.push([t,e]),this.size=++n.size,this
n=this.__data__=new o.A(a)}return n.set(t,e),this.size=n.size,this}
const s=a},3480:(t,e,n)=>{n.d(e,{A:()=>i})
const i=n(1020).A.Symbol},8805:(t,e,n)=>{n.d(e,{A:()=>i})
const i=n(1020).A.Uint8Array},6114:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(t,e){for(var n=-1,i=null==t?0:t.length;++n<i&&!1!==e(t[n],n,t););return t}},9578:(t,e,n)=>{n.d(e,{A:()=>u})
var i=n(6469),r=n(6712),o=n(8167),a=n(7638),s=n(1189),l=Object.prototype.hasOwnProperty
const u=function(t,e){var n=(0,r.A)(t),u=!n&&(0,i.A)(t),h=!n&&!u&&(0,o.A)(t),c=!n&&!u&&!h&&(0,s.A)(t),d=n||u||h||c,p=d?function(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n)
return i}(t.length,String):[],f=p.length
for(var g in t)!e&&!l.call(t,g)||d&&("length"==g||h&&("offset"==g||"parent"==g)||c&&("buffer"==g||"byteLength"==g||"byteOffset"==g)||(0,a.A)(g,f))||p.push(g)
return p}},9049:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(t,e){for(var n=-1,i=null==t?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t)
return r}},4907:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(t,e){for(var n=-1,i=e.length,r=t.length;++n<i;)t[r+n]=e[n]
return t}},5704:(t,e,n)=>{n.d(e,{A:()=>a})
var i=n(5595),r=n(1343),o=Object.prototype.hasOwnProperty
const a=function(t,e,n){var a=t[e]
o.call(t,e)&&(0,r.A)(a,n)&&(void 0!==n||e in t)||(0,i.A)(t,e,n)}},5595:(t,e,n)=>{n.d(e,{A:()=>r})
var i=n(6898)
const r=function(t,e,n){"__proto__"==e&&i.A?(0,i.A)(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},1077:(t,e,n)=>{n.d(e,{A:()=>o})
var i=n(3698),r=Object.create
const o=function(){function t(){}return function(e){if(!(0,i.A)(e))return{}
if(r)return r(e)
t.prototype=e
var n=new t
return t.prototype=void 0,n}}()},5548:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(t,e,n){for(var i=-1,r=Object(t),o=n(t),a=o.length;a--;){var s=o[++i]
if(!1===e(r[s],s,r))break}return t}},3412:(t,e,n)=>{n.d(e,{A:()=>o})
var i=n(5548),r=n(2214)
const o=function(t,e){return t&&(0,i.A)(t,e,r.A)}},8221:(t,e,n)=>{n.d(e,{A:()=>o})
var i=n(5044),r=n(8958)
const o=function(t,e){for(var n=0,o=(e=(0,i.A)(e,t)).length;null!=t&&n<o;)t=t[(0,r.A)(e[n++])]
return n&&n==o?t:void 0}},810:(t,e,n)=>{n.d(e,{A:()=>o})
var i=n(4907),r=n(6712)
const o=function(t,e,n){var o=e(t)
return(0,r.A)(t)?o:(0,i.A)(o,n(t))}},5651:(t,e,n)=>{n.d(e,{A:()=>h})
var i=n(3480),r=Object.prototype,o=r.hasOwnProperty,a=r.toString,s=i.A?i.A.toStringTag:void 0,l=Object.prototype.toString,u=i.A?i.A.toStringTag:void 0
const h=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?function(t){var e=o.call(t,s),n=t[s]
try{t[s]=void 0
var i=!0}catch(t){}var r=a.call(t)
return i&&(e?t[s]=n:delete t[s]),r}(t):function(t){return l.call(t)}(t)}},8985:(t,e,n)=>{n.d(e,{A:()=>V})
var i=n(4919),r=n(4972)
function o(t){var e=-1,n=null==t?0:t.length
for(this.__data__=new r.A;++e<n;)this.add(t[e])}o.prototype.add=o.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},o.prototype.has=function(t){return this.__data__.has(t)}
const a=o,s=function(t,e){for(var n=-1,i=null==t?0:t.length;++n<i;)if(e(t[n],n,t))return!0
return!1},l=function(t,e,n,i,r,o){var l=1&n,u=t.length,h=e.length
if(u!=h&&!(l&&h>u))return!1
var c=o.get(t),d=o.get(e)
if(c&&d)return c==e&&d==t
var p=-1,f=!0,g=2&n?new a:void 0
for(o.set(t,e),o.set(e,t);++p<u;){var y=t[p],v=e[p]
if(i)var m=l?i(v,y,p,e,t,o):i(y,v,p,t,e,o)
if(void 0!==m){if(m)continue
f=!1
break}if(g){if(!s(e,(function(t,e){if(a=e,!g.has(a)&&(y===t||r(y,t,n,i,o)))return g.push(e)
var a}))){f=!1
break}}else if(y!==v&&!r(y,v,n,i,o)){f=!1
break}}return o.delete(t),o.delete(e),f}
var u=n(3480),h=n(8805),c=n(1343)
const d=function(t){var e=-1,n=Array(t.size)
return t.forEach((function(t,i){n[++e]=[i,t]})),n},p=function(t){var e=-1,n=Array(t.size)
return t.forEach((function(t){n[++e]=t})),n}
var f=u.A?u.A.prototype:void 0,g=f?f.valueOf:void 0,y=n(4639),v=Object.prototype.hasOwnProperty,m=n(6982),_=n(6712),x=n(8167),b=n(1189),w="[object Arguments]",A="[object Array]",S="[object Object]",M=Object.prototype.hasOwnProperty
const T=function(t,e,n,r,o,a){var s=(0,_.A)(t),u=(0,_.A)(e),f=s?A:(0,m.A)(t),T=u?A:(0,m.A)(e),I=(f=f==w?S:f)==S,C=(T=T==w?S:T)==S,D=f==T
if(D&&(0,x.A)(t)){if(!(0,x.A)(e))return!1
s=!0,I=!1}if(D&&!I)return a||(a=new i.A),s||(0,b.A)(t)?l(t,e,n,r,o,a):function(t,e,n,i,r,o,a){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1
t=t.buffer,e=e.buffer
case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!o(new h.A(t),new h.A(e)))
case"[object Boolean]":case"[object Date]":case"[object Number]":return(0,c.A)(+t,+e)
case"[object Error]":return t.name==e.name&&t.message==e.message
case"[object RegExp]":case"[object String]":return t==e+""
case"[object Map]":var s=d
case"[object Set]":var u=1&i
if(s||(s=p),t.size!=e.size&&!u)return!1
var f=a.get(t)
if(f)return f==e
i|=2,a.set(t,e)
var y=l(s(t),s(e),i,r,o,a)
return a.delete(t),y
case"[object Symbol]":if(g)return g.call(t)==g.call(e)}return!1}(t,e,f,n,r,o,a)
if(!(1&n)){var k=I&&M.call(t,"__wrapped__"),L=C&&M.call(e,"__wrapped__")
if(k||L){var P=k?t.value():t,O=L?e.value():e
return a||(a=new i.A),o(P,O,n,r,a)}}return!!D&&(a||(a=new i.A),function(t,e,n,i,r,o){var a=1&n,s=(0,y.A)(t),l=s.length
if(l!=(0,y.A)(e).length&&!a)return!1
for(var u=l;u--;){var h=s[u]
if(!(a?h in e:v.call(e,h)))return!1}var c=o.get(t),d=o.get(e)
if(c&&d)return c==e&&d==t
var p=!0
o.set(t,e),o.set(e,t)
for(var f=a;++u<l;){var g=t[h=s[u]],m=e[h]
if(i)var _=a?i(m,g,h,e,t,o):i(g,m,h,t,e,o)
if(!(void 0===_?g===m||r(g,m,n,i,o):_)){p=!1
break}f||(f="constructor"==h)}if(p&&!f){var x=t.constructor,b=e.constructor
x==b||!("constructor"in t)||!("constructor"in e)||"function"==typeof x&&x instanceof x&&"function"==typeof b&&b instanceof b||(p=!1)}return o.delete(t),o.delete(e),p}(t,e,n,r,o,a))}
var I=n(9629)
const C=function t(e,n,i,r,o){return e===n||(null==e||null==n||!(0,I.A)(e)&&!(0,I.A)(n)?e!=e&&n!=n:T(e,n,i,r,t,o))}
var D=n(3698)
const k=function(t){return t==t&&!(0,D.A)(t)}
var L=n(2214)
const P=function(t,e){return function(n){return null!=n&&n[t]===e&&(void 0!==e||t in Object(n))}}
var O=n(5541),N=n(7811),R=n(3249),E=n(8958),z=n(659),B=n(8221)
const V=function(t){return"function"==typeof t?t:null==t?z.A:"object"==typeof t?(0,_.A)(t)?(e=t[0],n=t[1],(0,R.A)(e)&&k(n)?P((0,E.A)(e),n):function(t){var i=(0,O.A)(t,e)
return void 0===i&&i===n?(0,N.A)(t,e):C(n,i,3)}):function(t){var e=function(t){for(var e=(0,L.A)(t),n=e.length;n--;){var i=e[n],r=t[i]
e[n]=[i,r,k(r)]}return e}(t)
return 1==e.length&&e[0][2]?P(e[0][0],e[0][1]):function(n){return n===t||function(t,e,n,r){var o=n.length,a=o
if(null==t)return!a
for(t=Object(t);o--;){var s=n[o]
if(s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++o<a;){var l=(s=n[o])[0],u=t[l],h=s[1]
if(s[2]){if(void 0===u&&!(l in t))return!1}else{var c,d=new i.A
if(!(void 0===c?C(h,u,3,r,d):c))return!1}}return!0}(n,0,e)}}(t):function(t){return(0,R.A)(t)?(e=(0,E.A)(t),function(t){return null==t?void 0:t[e]}):function(t){return function(e){return(0,B.A)(e,t)}}(t)
var e}(t)
var e,n}},4909:(t,e,n)=>{n.d(e,{A:()=>a})
var i=n(8221),r=n(3289),o=n(5044)
const a=function(t,e,n){for(var a=-1,s=e.length,l={};++a<s;){var u=e[a],h=(0,i.A)(t,u)
n(h,u)&&(0,r.A)(l,(0,o.A)(u,t),h)}return l}},3289:(t,e,n)=>{n.d(e,{A:()=>l})
var i=n(5704),r=n(5044),o=n(7638),a=n(3698),s=n(8958)
const l=function(t,e,n,l){if(!(0,a.A)(t))return t
for(var u=-1,h=(e=(0,r.A)(e,t)).length,c=h-1,d=t;null!=d&&++u<h;){var p=(0,s.A)(e[u]),f=n
if("__proto__"===p||"constructor"===p||"prototype"===p)return t
if(u!=c){var g=d[p]
void 0===(f=l?l(g,p,d):void 0)&&(f=(0,a.A)(g)?g:(0,o.A)(e[u+1])?[]:{})}(0,i.A)(d,p,f),d=d[p]}return t}},1755:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(t,e,n){var i=-1,r=t.length
e<0&&(e=-e>r?0:r+e),(n=n>r?r:n)<0&&(n+=r),r=e>n?0:n-e>>>0,e>>>=0
for(var o=Array(r);++i<r;)o[i]=t[i+e]
return o}},1026:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(t){return function(e){return t(e)}}},5044:(t,e,n)=>{n.d(e,{A:()=>p})
var i=n(6712),r=n(3249),o=n(4972)
function a(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function")
var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],o=n.cache
if(o.has(r))return o.get(r)
var a=t.apply(this,i)
return n.cache=o.set(r,a)||o,a}
return n.cache=new(a.Cache||o.A),n}a.Cache=o.A
var s=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,l=/\\(\\)?/g
const u=(h=a((function(t){var e=[]
return 46===t.charCodeAt(0)&&e.push(""),t.replace(s,(function(t,n,i,r){e.push(i?r.replace(l,"$1"):n||t)})),e}),(function(t){return 500===c.size&&c.clear(),t})),c=h.cache,h)
var h,c,d=n(5213)
const p=function(t,e){return(0,i.A)(t)?t:(0,r.A)(t,e)?[t]:u((0,d.A)(t))}},5448:(t,e,n)=>{n.d(e,{A:()=>r})
var i=n(8805)
const r=function(t){var e=new t.constructor(t.byteLength)
return new i.A(e).set(new i.A(t)),e}},2773:(t,e,n)=>{n.d(e,{A:()=>l})
var i=n(1020),r="object"==typeof exports&&exports&&!exports.nodeType&&exports,o=r&&"object"==typeof module&&module&&!module.nodeType&&module,a=o&&o.exports===r?i.A.Buffer:void 0,s=a?a.allocUnsafe:void 0
const l=function(t,e){if(e)return t.slice()
var n=t.length,i=s?s(n):new t.constructor(n)
return t.copy(i),i}},2194:(t,e,n)=>{n.d(e,{A:()=>r})
var i=n(5448)
const r=function(t,e){var n=e?(0,i.A)(t.buffer):t.buffer
return new t.constructor(n,t.byteOffset,t.length)}},6808:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(t,e){var n=-1,i=t.length
for(e||(e=Array(i));++n<i;)e[n]=t[n]
return e}},2626:(t,e,n)=>{n.d(e,{A:()=>o})
var i=n(5704),r=n(5595)
const o=function(t,e,n,o){var a=!n
n||(n={})
for(var s=-1,l=e.length;++s<l;){var u=e[s],h=o?o(n[u],t[u],u,n,t):void 0
void 0===h&&(h=t[u]),a?(0,r.A)(n,u,h):(0,i.A)(n,u,h)}return n}},4824:(t,e,n)=>{n.d(e,{A:()=>O})
const i=(r={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},function(t){return null==r?void 0:r[t]})
var r,o=n(5213),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,s=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),l=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,u=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,h="\\ud800-\\udfff",c="\\u2700-\\u27bf",d="a-z\\xdf-\\xf6\\xf8-\\xff",p="A-Z\\xc0-\\xd6\\xd8-\\xde",f="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",g="["+f+"]",y="\\d+",v="["+c+"]",m="["+d+"]",_="[^"+h+f+y+c+d+p+"]",x="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",w="["+p+"]",A="(?:"+m+"|"+_+")",S="(?:"+w+"|"+_+")",M="(?:['’](?:d|ll|m|re|s|t|ve))?",T="(?:['’](?:D|LL|M|RE|S|T|VE))?",I="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",C="[\\ufe0e\\ufe0f]?",D=C+I+"(?:\\u200d(?:"+["[^"+h+"]",x,b].join("|")+")"+C+I+")*",k="(?:"+[v,x,b].join("|")+")"+D,L=RegExp([w+"?"+m+"+"+M+"(?="+[g,w,"$"].join("|")+")",S+"+"+T+"(?="+[g,w+A,"$"].join("|")+")",w+"?"+A+"+"+M,w+"+"+T,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",y,k].join("|"),"g")
var P=RegExp("['’]","g")
const O=function(t){return function(e){return function(t,e,n){for(var i=-1,r=null==t?0:t.length;++i<r;)n=e(n,t[i],i,t)
return n}(function(t,e,n){return t=(0,o.A)(t),void 0===(e=n?void 0:e)?function(t){return u.test(t)}(t)?function(t){return t.match(L)||[]}(t):function(t){return t.match(l)||[]}(t):t.match(e)||[]}(function(t){return(t=(0,o.A)(t))&&t.replace(a,i).replace(s,"")}(e).replace(P,"")),t,"")}}},6898:(t,e,n)=>{n.d(e,{A:()=>r})
var i=n(5252)
const r=function(){try{var t=(0,i.A)(Object,"defineProperty")
return t({},"",{}),t}catch(t){}}()},6901:(t,e,n)=>{n.d(e,{A:()=>a})
var i=n(2472),r=n(1361),o=n(8052)
const a=function(t){return(0,o.A)((0,r.A)(t,void 0,i.A),t+"")}},6805:(t,e,n)=>{n.d(e,{A:()=>i})
const i="object"==typeof global&&global&&global.Object===Object&&global},4639:(t,e,n)=>{n.d(e,{A:()=>a})
var i=n(810),r=n(3831),o=n(2214)
const a=function(t){return(0,i.A)(t,o.A,r.A)}},1556:(t,e,n)=>{n.d(e,{A:()=>a})
var i=n(810),r=n(4218),o=n(440)
const a=function(t){return(0,i.A)(t,o.A,r.A)}},5252:(t,e,n)=>{n.d(e,{A:()=>g})
var i=n(5193)
const r=n(1020).A["__core-js_shared__"]
var o,a=(o=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"",s=n(3698),l=n(5944),u=/^\[object .+?Constructor\]$/,h=Function.prototype,c=Object.prototype,d=h.toString,p=c.hasOwnProperty,f=RegExp("^"+d.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$")
const g=function(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e)
return function(t){return!(!(0,s.A)(t)||(e=t,a&&a in e))&&((0,i.A)(t)?f:u).test((0,l.A)(t))
var e}(n)?n:void 0}},1154:(t,e,n)=>{n.d(e,{A:()=>i})
const i=(0,n(8200).A)(Object.getPrototypeOf,Object)},3831:(t,e,n)=>{n.d(e,{A:()=>a})
var i=n(1896),r=Object.prototype.propertyIsEnumerable,o=Object.getOwnPropertySymbols
const a=o?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,i=null==t?0:t.length,r=0,o=[];++n<i;){var a=t[n]
e(a)&&(o[r++]=a)}return o}(o(t),(function(e){return r.call(t,e)})))}:i.A},4218:(t,e,n)=>{n.d(e,{A:()=>s})
var i=n(4907),r=n(1154),o=n(3831),a=n(1896)
const s=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)(0,i.A)(e,(0,o.A)(t)),t=(0,r.A)(t)
return e}:a.A},6982:(t,e,n)=>{n.d(e,{A:()=>A})
var i=n(5252),r=n(1020)
const o=(0,i.A)(r.A,"DataView")
var a=n(4464)
const s=(0,i.A)(r.A,"Promise"),l=(0,i.A)(r.A,"Set"),u=(0,i.A)(r.A,"WeakMap")
var h=n(5651),c=n(5944),d="[object Map]",p="[object Promise]",f="[object Set]",g="[object WeakMap]",y="[object DataView]",v=(0,c.A)(o),m=(0,c.A)(a.A),_=(0,c.A)(s),x=(0,c.A)(l),b=(0,c.A)(u),w=h.A;(o&&w(new o(new ArrayBuffer(1)))!=y||a.A&&w(new a.A)!=d||s&&w(s.resolve())!=p||l&&w(new l)!=f||u&&w(new u)!=g)&&(w=function(t){var e=(0,h.A)(t),n="[object Object]"==e?t.constructor:void 0,i=n?(0,c.A)(n):""
if(i)switch(i){case v:return y
case m:return d
case _:return p
case x:return f
case b:return g}return e})
const A=w},5490:(t,e,n)=>{n.d(e,{A:()=>a})
var i=n(1077),r=n(1154),o=n(5016)
const a=function(t){return"function"!=typeof t.constructor||(0,o.A)(t)?{}:(0,i.A)((0,r.A)(t))}},7638:(t,e,n)=>{n.d(e,{A:()=>r})
var i=/^(?:0|[1-9]\d*)$/
const r=function(t,e){var n=typeof t
return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&i.test(t))&&t>-1&&t%1==0&&t<e}},3249:(t,e,n)=>{n.d(e,{A:()=>s})
var i=n(6712),r=n(1205),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/
const s=function(t,e){if((0,i.A)(t))return!1
var n=typeof t
return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!(0,r.A)(t))||a.test(t)||!o.test(t)||null!=e&&t in Object(e)}},5016:(t,e,n)=>{n.d(e,{A:()=>r})
var i=Object.prototype
const r=function(t){var e=t&&t.constructor
return t===("function"==typeof e&&e.prototype||i)}},4468:(t,e,n)=>{n.d(e,{A:()=>s})
var i=n(6805),r="object"==typeof exports&&exports&&!exports.nodeType&&exports,o=r&&"object"==typeof module&&module&&!module.nodeType&&module,a=o&&o.exports===r&&i.A.process
const s=function(){try{return o&&o.require&&o.require("util").types||a&&a.binding&&a.binding("util")}catch(t){}}()},8200:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(t,e){return function(n){return t(e(n))}}},1361:(t,e,n)=>{n.d(e,{A:()=>r})
var i=Math.max
const r=function(t,e,n){return e=i(void 0===e?t.length-1:e,0),function(){for(var r=arguments,o=-1,a=i(r.length-e,0),s=Array(a);++o<a;)s[o]=r[e+o]
o=-1
for(var l=Array(e+1);++o<e;)l[o]=r[o]
return l[e]=n(s),function(t,e,n){switch(n.length){case 0:return t.call(e)
case 1:return t.call(e,n[0])
case 2:return t.call(e,n[0],n[1])
case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}(t,this,l)}}},1020:(t,e,n)=>{n.d(e,{A:()=>o})
var i=n(6805),r="object"==typeof self&&self&&self.Object===Object&&self
const o=i.A||r||Function("return this")()},8052:(t,e,n)=>{n.d(e,{A:()=>s})
var i=n(6898),r=n(659)
const o=i.A?function(t,e){return(0,i.A)(t,"toString",{configurable:!0,enumerable:!1,value:(n=e,function(){return n}),writable:!0})
var n}:r.A
var a=Date.now
const s=(l=o,u=0,h=0,function(){var t=a(),e=16-(t-h)
if(h=t,e>0){if(++u>=800)return arguments[0]}else u=0
return l.apply(void 0,arguments)})
var l,u,h},8958:(t,e,n)=>{n.d(e,{A:()=>r})
var i=n(1205)
const r=function(t){if("string"==typeof t||(0,i.A)(t))return t
var e=t+""
return"0"==e&&1/t==-1/0?"-0":e}},5944:(t,e,n)=>{n.d(e,{A:()=>r})
var i=Function.prototype.toString
const r=function(t){if(null!=t){try{return i.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},8847:(t,e,n)=>{n.d(e,{A:()=>x})
var i=n(5213),r=n(1755),o=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]")
const a=function(t){return o.test(t)}
var s="\\ud800-\\udfff",l="["+s+"]",u="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",h="\\ud83c[\\udffb-\\udfff]",c="[^"+s+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",p="[\\ud800-\\udbff][\\udc00-\\udfff]",f="(?:"+u+"|"+h+")?",g="[\\ufe0e\\ufe0f]?",y=g+f+"(?:\\u200d(?:"+[c,d,p].join("|")+")"+g+f+")*",v="(?:"+[c+u+"?",u,d,p,l].join("|")+")",m=RegExp(h+"(?="+h+")|"+v+y,"g")
const _=function(t){t=(0,i.A)(t)
var e,n,o,s=a(t)?function(t){return a(t)?function(t){return t.match(m)||[]}(t):function(t){return t.split("")}(t)}(t):void 0,l=s?s[0]:t.charAt(0),u=s?(e=s,o=e.length,n=void 0===n?o:n,(0,r.A)(e,1,n)).join(""):t.slice(1)
return l.toUpperCase()+u},x=(0,n(4824).A)((function(t,e,n){return e=e.toLowerCase(),t+(n?(r=e,_((0,i.A)(r).toLowerCase())):e)
var r}))},5008:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(t){for(var e=-1,n=null==t?0:t.length,i=0,r=[];++e<n;){var o=t[e]
o&&(r[i++]=o)}return r}},732:(t,e,n)=>{n.d(e,{A:()=>p})
var i=n(5595)
const r=function(t,e,n,i){for(var r=-1,o=null==t?0:t.length;++r<o;){var a=t[r]
e(i,a,n(a),t)}return i}
var o=n(3412),a=n(751)
const s=(l=o.A,function(t,e){if(null==t)return t
if(!(0,a.A)(t))return l(t,e)
for(var n=t.length,i=-1,r=Object(t);++i<n&&!1!==e(r[i],i,r););return t})
var l
const u=function(t,e,n,i){return s(t,(function(t,r,o){e(i,t,n(t),o)})),i}
var h=n(8985),c=n(6712),d=Object.prototype.hasOwnProperty
const p=(f=function(t,e,n){d.call(t,n)?++t[n]:(0,i.A)(t,n,1)},function(t,e){var n={}
return((0,c.A)(t)?r:u)(t,f,(0,h.A)(e,2),n)})
var f},1343:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(t,e){return t===e||t!=t&&e!=e}},2472:(t,e,n)=>{n.d(e,{A:()=>h})
var i=n(4907),r=n(3480),o=n(6469),a=n(6712),s=r.A?r.A.isConcatSpreadable:void 0
const l=function(t){return(0,a.A)(t)||(0,o.A)(t)||!!(s&&t&&t[s])},u=function t(e,n,r,o,a){var s=-1,u=e.length
for(r||(r=l),a||(a=[]);++s<u;){var h=e[s]
n>0&&r(h)?n>1?t(h,n-1,r,o,a):(0,i.A)(a,h):o||(a[a.length]=h)}return a},h=function(t){return null!=t&&t.length?u(t,1):[]}},5541:(t,e,n)=>{n.d(e,{A:()=>r})
var i=n(8221)
const r=function(t,e,n){var r=null==t?void 0:(0,i.A)(t,e)
return void 0===r?n:r}},7811:(t,e,n)=>{n.d(e,{A:()=>h})
const i=function(t,e){return null!=t&&e in Object(t)}
var r=n(5044),o=n(6469),a=n(6712),s=n(7638),l=n(6689),u=n(8958)
const h=function(t,e){return null!=t&&function(t,e,n){for(var i=-1,h=(e=(0,r.A)(e,t)).length,c=!1;++i<h;){var d=(0,u.A)(e[i])
if(!(c=null!=t&&n(t,d)))break
t=t[d]}return c||++i!=h?c:!!(h=null==t?0:t.length)&&(0,l.A)(h)&&(0,s.A)(d,h)&&((0,a.A)(t)||(0,o.A)(t))}(t,e,i)}},659:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(t){return t}},6469:(t,e,n)=>{n.d(e,{A:()=>u})
var i=n(5651),r=n(9629)
const o=function(t){return(0,r.A)(t)&&"[object Arguments]"==(0,i.A)(t)}
var a=Object.prototype,s=a.hasOwnProperty,l=a.propertyIsEnumerable
const u=o(function(){return arguments}())?o:function(t){return(0,r.A)(t)&&s.call(t,"callee")&&!l.call(t,"callee")}},6712:(t,e,n)=>{n.d(e,{A:()=>i})
const i=Array.isArray},751:(t,e,n)=>{n.d(e,{A:()=>o})
var i=n(5193),r=n(6689)
const o=function(t){return null!=t&&(0,r.A)(t.length)&&!(0,i.A)(t)}},8167:(t,e,n)=>{n.d(e,{A:()=>s})
var i=n(1020),r="object"==typeof exports&&exports&&!exports.nodeType&&exports,o=r&&"object"==typeof module&&module&&!module.nodeType&&module,a=o&&o.exports===r?i.A.Buffer:void 0
const s=(a?a.isBuffer:void 0)||function(){return!1}},5193:(t,e,n)=>{n.d(e,{A:()=>o})
var i=n(5651),r=n(3698)
const o=function(t){if(!(0,r.A)(t))return!1
var e=(0,i.A)(t)
return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},6689:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3698:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(t){var e=typeof t
return null!=t&&("object"==e||"function"==e)}},9629:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(t){return null!=t&&"object"==typeof t}},382:(t,e,n)=>{n.d(e,{A:()=>c})
var i=n(5651),r=n(1154),o=n(9629),a=Function.prototype,s=Object.prototype,l=a.toString,u=s.hasOwnProperty,h=l.call(Object)
const c=function(t){if(!(0,o.A)(t)||"[object Object]"!=(0,i.A)(t))return!1
var e=(0,r.A)(t)
if(null===e)return!0
var n=u.call(e,"constructor")&&e.constructor
return"function"==typeof n&&n instanceof n&&l.call(n)==h}},1205:(t,e,n)=>{n.d(e,{A:()=>o})
var i=n(5651),r=n(9629)
const o=function(t){return"symbol"==typeof t||(0,r.A)(t)&&"[object Symbol]"==(0,i.A)(t)}},1189:(t,e,n)=>{n.d(e,{A:()=>h})
var i=n(5651),r=n(6689),o=n(9629),a={}
a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1
var s=n(1026),l=n(4468),u=l.A&&l.A.isTypedArray
const h=u?(0,s.A)(u):function(t){return(0,o.A)(t)&&(0,r.A)(t.length)&&!!a[(0,i.A)(t)]}},7184:(t,e,n)=>{n.d(e,{A:()=>i})
const i=(0,n(4824).A)((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}))},2214:(t,e,n)=>{n.d(e,{A:()=>l})
var i=n(9578),r=n(5016)
const o=(0,n(8200).A)(Object.keys,Object)
var a=Object.prototype.hasOwnProperty,s=n(751)
const l=function(t){return(0,s.A)(t)?(0,i.A)(t):function(t){if(!(0,r.A)(t))return o(t)
var e=[]
for(var n in Object(t))a.call(t,n)&&"constructor"!=n&&e.push(n)
return e}(t)}},440:(t,e,n)=>{n.d(e,{A:()=>l})
var i=n(9578),r=n(3698),o=n(5016),a=Object.prototype.hasOwnProperty
var s=n(751)
const l=function(t){return(0,s.A)(t)?(0,i.A)(t,!0):function(t){if(!(0,r.A)(t))return function(t){var e=[]
if(null!=t)for(var n in Object(t))e.push(n)
return e}(t)
var e=(0,o.A)(t),n=[]
for(var i in t)("constructor"!=i||!e&&a.call(t,i))&&n.push(i)
return n}(t)}},129:(t,e,n)=>{n.d(e,{A:()=>a})
var i=n(5595),r=n(3412),o=n(8985)
const a=function(t,e){var n={}
return e=(0,o.A)(e,3),(0,r.A)(t,(function(t,r,o){(0,i.A)(n,r,e(t,r,o))})),n}},5109:(t,e,n)=>{n.d(e,{A:()=>k})
var i=n(4919),r=n(5595),o=n(1343)
const a=function(t,e,n){(void 0!==n&&!(0,o.A)(t[e],n)||void 0===n&&!(e in t))&&(0,r.A)(t,e,n)}
var s=n(5548),l=n(2773),u=n(2194),h=n(6808),c=n(5490),d=n(6469),p=n(6712),f=n(751),g=n(9629),y=n(8167),v=n(5193),m=n(3698),_=n(382),x=n(1189)
const b=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}
var w=n(2626),A=n(440)
const S=function(t,e,n,i,r,o,s){var S,M=b(t,n),T=b(e,n),I=s.get(T)
if(I)a(t,n,I)
else{var C=o?o(M,T,n+"",t,e,s):void 0,D=void 0===C
if(D){var k=(0,p.A)(T),L=!k&&(0,y.A)(T),P=!k&&!L&&(0,x.A)(T)
C=T,k||L||P?(0,p.A)(M)?C=M:(S=M,(0,g.A)(S)&&(0,f.A)(S)?C=(0,h.A)(M):L?(D=!1,C=(0,l.A)(T,!0)):P?(D=!1,C=(0,u.A)(T,!0)):C=[]):(0,_.A)(T)||(0,d.A)(T)?(C=M,(0,d.A)(M)?C=function(t){return(0,w.A)(t,(0,A.A)(t))}(M):(0,m.A)(M)&&!(0,v.A)(M)||(C=(0,c.A)(T))):D=!1}D&&(s.set(T,C),r(C,T,i,o,s),s.delete(T)),a(t,n,C)}},M=function t(e,n,r,o,l){e!==n&&(0,s.A)(n,(function(s,u){if(l||(l=new i.A),(0,m.A)(s))S(e,n,u,r,t,o,l)
else{var h=o?o(b(e,u),s,u+"",e,n,l):void 0
void 0===h&&(h=s),a(e,u,h)}}),A.A)}
var T=n(659),I=n(1361),C=n(8052),D=n(7638)
const k=(L=function(t,e,n){M(t,e,n)},P=function(t,e){var n=-1,i=e.length,r=i>1?e[i-1]:void 0,a=i>2?e[2]:void 0
for(r=L.length>3&&"function"==typeof r?(i--,r):void 0,a&&function(t,e,n){if(!(0,m.A)(n))return!1
var i=typeof e
return!!("number"==i?(0,f.A)(n)&&(0,D.A)(e,n.length):"string"==i&&e in n)&&(0,o.A)(n[e],t)}(e[0],e[1],a)&&(r=i<3?void 0:r,i=1),t=Object(t);++n<i;){var s=e[n]
s&&L(t,s,n)}return t},(0,C.A)((0,I.A)(P,undefined,T.A),P+""))
var L,P},2933:(t,e,n)=>{n.d(e,{A:()=>Z})
var i=n(9049),r=n(4919),o=n(6114),a=n(5704),s=n(2626),l=n(2214),u=n(440),h=n(2773),c=n(6808),d=n(3831),p=n(4218),f=n(4639),g=n(1556),y=n(6982),v=Object.prototype.hasOwnProperty,m=n(5448),_=/\w*$/,x=n(3480),b=x.A?x.A.prototype:void 0,w=b?b.valueOf:void 0,A=n(2194)
const S=function(t,e,n){var i,r,o,a=t.constructor
switch(e){case"[object ArrayBuffer]":return(0,m.A)(t)
case"[object Boolean]":case"[object Date]":return new a(+t)
case"[object DataView]":return function(t,e){var n=e?(0,m.A)(t.buffer):t.buffer
return new t.constructor(n,t.byteOffset,t.byteLength)}(t,n)
case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return(0,A.A)(t,n)
case"[object Map]":case"[object Set]":return new a
case"[object Number]":case"[object String]":return new a(t)
case"[object RegExp]":return(o=new(r=t).constructor(r.source,_.exec(r))).lastIndex=r.lastIndex,o
case"[object Symbol]":return i=t,w?Object(w.call(i)):{}}}
var M=n(5490),T=n(6712),I=n(8167),C=n(9629),D=n(1026),k=n(4468),L=k.A&&k.A.isMap
const P=L?(0,D.A)(L):function(t){return(0,C.A)(t)&&"[object Map]"==(0,y.A)(t)}
var O=n(3698),N=k.A&&k.A.isSet
const R=N?(0,D.A)(N):function(t){return(0,C.A)(t)&&"[object Set]"==(0,y.A)(t)}
var E="[object Arguments]",z="[object Function]",B="[object Object]",V={}
V[E]=V["[object Array]"]=V["[object ArrayBuffer]"]=V["[object DataView]"]=V["[object Boolean]"]=V["[object Date]"]=V["[object Float32Array]"]=V["[object Float64Array]"]=V["[object Int8Array]"]=V["[object Int16Array]"]=V["[object Int32Array]"]=V["[object Map]"]=V["[object Number]"]=V[B]=V["[object RegExp]"]=V["[object Set]"]=V["[object String]"]=V["[object Symbol]"]=V["[object Uint8Array]"]=V["[object Uint8ClampedArray]"]=V["[object Uint16Array]"]=V["[object Uint32Array]"]=!0,V["[object Error]"]=V[z]=V["[object WeakMap]"]=!1
const F=function t(e,n,i,m,_,x){var b,w=1&n,A=2&n,C=4&n
if(i&&(b=_?i(e,m,_,x):i(e)),void 0!==b)return b
if(!(0,O.A)(e))return e
var D=(0,T.A)(e)
if(D){if(b=function(t){var e=t.length,n=new t.constructor(e)
return e&&"string"==typeof t[0]&&v.call(t,"index")&&(n.index=t.index,n.input=t.input),n}(e),!w)return(0,c.A)(e,b)}else{var k=(0,y.A)(e),L=k==z||"[object GeneratorFunction]"==k
if((0,I.A)(e))return(0,h.A)(e,w)
if(k==B||k==E||L&&!_){if(b=A||L?{}:(0,M.A)(e),!w)return A?function(t,e){return(0,s.A)(t,(0,p.A)(t),e)}(e,function(t,e){return t&&(0,s.A)(e,(0,u.A)(e),t)}(b,e)):function(t,e){return(0,s.A)(t,(0,d.A)(t),e)}(e,function(t,e){return t&&(0,s.A)(e,(0,l.A)(e),t)}(b,e))}else{if(!V[k])return _?e:{}
b=S(e,k,w)}}x||(x=new r.A)
var N=x.get(e)
if(N)return N
x.set(e,b),R(e)?e.forEach((function(r){b.add(t(r,n,i,r,e,x))})):P(e)&&e.forEach((function(r,o){b.set(o,t(r,n,i,o,e,x))}))
var F=C?A?g.A:f.A:A?u.A:l.A,W=D?void 0:F(e)
return(0,o.A)(W||e,(function(r,o){W&&(r=e[o=r]),(0,a.A)(b,o,t(r,n,i,o,e,x))})),b}
var W=n(5044),H=n(8221),G=n(1755),j=n(8958)
const X=function(t,e){return null==(t=function(t,e){return e.length<2?t:(0,H.A)(t,(0,G.A)(e,0,-1))}(t,e=(0,W.A)(e,t)))||delete t[(0,j.A)((n=e,i=null==n?0:n.length,i?n[i-1]:void 0))]
var n,i}
var Y=n(382)
const U=function(t){return(0,Y.A)(t)?void 0:t},Z=(0,n(6901).A)((function(t,e){var n={}
if(null==t)return n
var r=!1
e=(0,i.A)(e,(function(e){return e=(0,W.A)(e,t),r||(r=e.length>1),e})),(0,s.A)(t,(0,g.A)(t),n),r&&(n=F(n,7,U))
for(var o=e.length;o--;)X(n,e[o])
return n}))},5529:(t,e,n)=>{n.d(e,{A:()=>o})
var i=n(4909),r=n(7811)
const o=(0,n(6901).A)((function(t,e){return null==t?{}:function(t,e){return(0,i.A)(t,e,(function(e,n){return(0,r.A)(t,n)}))}(t,e)}))},1653:(t,e,n)=>{n.d(e,{A:()=>s})
var i=n(9049),r=n(8985),o=n(4909),a=n(1556)
const s=function(t,e){if(null==t)return{}
var n=(0,i.A)((0,a.A)(t),(function(t){return[t]}))
return e=(0,r.A)(e),(0,o.A)(t,n,(function(t,n){return e(t,n[0])}))}},161:(t,e,n)=>{n.d(e,{A:()=>r})
var i=n(3289)
const r=function(t,e,n){return null==t?t:(0,i.A)(t,e,n)}},1896:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(){return[]}},5213:(t,e,n)=>{n.d(e,{A:()=>h})
var i=n(3480),r=n(9049),o=n(6712),a=n(1205),s=i.A?i.A.prototype:void 0,l=s?s.toString:void 0
const u=function t(e){if("string"==typeof e)return e
if((0,o.A)(e))return(0,r.A)(e,t)+""
if((0,a.A)(e))return l?l.call(e):""
var n=e+""
return"0"==n&&1/e==-1/0?"-0":n},h=function(t){return null==t?"":u(t)}},2249:(t,e,n)=>{n.d(e,{A:()=>p})
var i=n(6114),r=n(1077),o=n(3412),a=n(8985),s=n(1154),l=n(6712),u=n(8167),h=n(5193),c=n(3698),d=n(1189)
const p=function(t,e,n){var p=(0,l.A)(t),f=p||(0,u.A)(t)||(0,d.A)(t)
if(e=(0,a.A)(e,4),null==n){var g=t&&t.constructor
n=f?p?new g:[]:(0,c.A)(t)&&(0,h.A)(g)?(0,r.A)((0,s.A)(t)):{}}return(f?i.A:o.A)(t,(function(t,i,r){return e(n,t,i,r)})),n}},6245:(t,e,n)=>{n.d(e,{A:()=>w})
var i=n(7157),r=n(160),o=n(4703),a=n(9430),s=n(7627),l=n(8301),u=n(5499),h=n(7435),c=n(5451),d="__zr_normal__",p=i.Wx.concat(["ignore"]),f=(0,l.TS)(i.Wx,(function(t,e){return t[e]=!0,t}),{ignore:!1}),g={},y=new o.A(0,0,0,0),v=function(){function t(t){this.id=(0,l.Os)(),this.animators=[],this.currentStates=[],this.states={},this._init(t)}return t.prototype._init=function(t){this.attr(t)},t.prototype.drift=function(t,e,n){switch(this.draggable){case"horizontal":e=0
break
case"vertical":t=0}var i=this.transform
i||(i=this.transform=[1,0,0,1,0,0]),i[4]+=t,i[5]+=e,this.decomposeTransform(),this.markRedraw()},t.prototype.beforeUpdate=function(){},t.prototype.afterUpdate=function(){},t.prototype.update=function(){this.updateTransform(),this.__dirty&&this.updateInnerText()},t.prototype.updateInnerText=function(t){var e=this._textContent
if(e&&(!e.ignore||t)){this.textConfig||(this.textConfig={})
var n=this.textConfig,i=n.local,r=e.innerTransformable,o=void 0,a=void 0,l=!1
r.parent=i?this:null
var u=!1
if(r.copyTransform(e),null!=n.position){var h=y
n.layoutRect?h.copy(n.layoutRect):h.copy(this.getBoundingRect()),i||h.applyTransform(this.transform),this.calculateTextPosition?this.calculateTextPosition(g,n,h):(0,s.X4)(g,n,h),r.x=g.x,r.y=g.y,o=g.align,a=g.verticalAlign
var d=n.origin
if(d&&null!=n.rotation){var p=void 0,f=void 0
"center"===d?(p=.5*h.width,f=.5*h.height):(p=(0,s.lo)(d[0],h.width),f=(0,s.lo)(d[1],h.height)),u=!0,r.originX=-r.x+p+(i?0:h.x),r.originY=-r.y+f+(i?0:h.y)}}null!=n.rotation&&(r.rotation=n.rotation)
var v=n.offset
v&&(r.x+=v[0],r.y+=v[1],u||(r.originX=-v[0],r.originY=-v[1]))
var m=null==n.inside?"string"==typeof n.position&&n.position.indexOf("inside")>=0:n.inside,_=this._innerTextDefaultStyle||(this._innerTextDefaultStyle={}),x=void 0,b=void 0,w=void 0
m&&this.canBeInsideText()?(x=n.insideFill,b=n.insideStroke,null!=x&&"auto"!==x||(x=this.getInsideTextFill()),null!=b&&"auto"!==b||(b=this.getInsideTextStroke(x),w=!0)):(x=n.outsideFill,b=n.outsideStroke,null!=x&&"auto"!==x||(x=this.getOutsideFill()),null!=b&&"auto"!==b||(b=this.getOutsideStroke(x),w=!0)),(x=x||"#000")===_.fill&&b===_.stroke&&w===_.autoStroke&&o===_.align&&a===_.verticalAlign||(l=!0,_.fill=x,_.stroke=b,_.autoStroke=w,_.align=o,_.verticalAlign=a,e.setDefaultTextStyle(_)),e.__dirty|=c.M,l&&e.dirtyStyle(!0)}},t.prototype.canBeInsideText=function(){return!0},t.prototype.getInsideTextFill=function(){return"#fff"},t.prototype.getInsideTextStroke=function(t){return"#000"},t.prototype.getOutsideFill=function(){return this.__zr&&this.__zr.isDarkMode()?u.el:u._S},t.prototype.getOutsideStroke=function(t){var e=this.__zr&&this.__zr.getBackgroundColor(),n="string"==typeof e&&(0,h.qg)(e)
n||(n=[255,255,255,1])
for(var i=n[3],r=this.__zr.isDarkMode(),o=0;o<3;o++)n[o]=n[o]*i+(r?0:255)*(1-i)
return n[3]=1,(0,h.As)(n,"rgba")},t.prototype.traverse=function(t,e){},t.prototype.attrKV=function(t,e){"textConfig"===t?this.setTextConfig(e):"textContent"===t?this.setTextContent(e):"clipPath"===t?this.setClipPath(e):"extra"===t?(this.extra=this.extra||{},(0,l.X$)(this.extra,e)):this[t]=e},t.prototype.hide=function(){this.ignore=!0,this.markRedraw()},t.prototype.show=function(){this.ignore=!1,this.markRedraw()},t.prototype.attr=function(t,e){if("string"==typeof t)this.attrKV(t,e)
else if((0,l.Gv)(t))for(var n=t,i=(0,l.HP)(n),r=0;r<i.length;r++){var o=i[r]
this.attrKV(o,t[o])}return this.markRedraw(),this},t.prototype.saveCurrentToNormalState=function(t){this._innerSaveToNormal(t)
for(var e=this._normalState,n=0;n<this.animators.length;n++){var i=this.animators[n],r=i.__fromStateTransition
if(!(i.getLoop()||r&&r!==d)){var o=i.targetName,a=o?e[o]:e
i.saveTo(a)}}},t.prototype._innerSaveToNormal=function(t){var e=this._normalState
e||(e=this._normalState={}),t.textConfig&&!e.textConfig&&(e.textConfig=this.textConfig),this._savePrimaryToNormal(t,e,p)},t.prototype._savePrimaryToNormal=function(t,e,n){for(var i=0;i<n.length;i++){var r=n[i]
null==t[r]||r in e||(e[r]=this[r])}},t.prototype.hasState=function(){return this.currentStates.length>0},t.prototype.getState=function(t){return this.states[t]},t.prototype.ensureState=function(t){var e=this.states
return e[t]||(e[t]={}),e[t]},t.prototype.clearStates=function(t){this.useState(d,!1,t)},t.prototype.useState=function(t,e,n,i){var r=t===d
if(this.hasState()||!r){var o=this.currentStates,a=this.stateTransition
if(!((0,l.qh)(o,t)>=0)||!e&&1!==o.length){var s
if(this.stateProxy&&!r&&(s=this.stateProxy(t)),s||(s=this.states&&this.states[t]),s||r){r||this.saveCurrentToNormalState(s)
var u=!!(s&&s.hoverLayer||i)
u&&this._toggleHoverLayerFlag(!0),this._applyStateObj(t,s,this._normalState,e,!n&&!this.__inHover&&a&&a.duration>0,a)
var h=this._textContent,p=this._textGuide
return h&&h.useState(t,e,n,u),p&&p.useState(t,e,n,u),r?(this.currentStates=[],this._normalState={}):e?this.currentStates.push(t):this.currentStates=[t],this._updateAnimationTargets(),this.markRedraw(),!u&&this.__inHover&&(this._toggleHoverLayerFlag(!1),this.__dirty&=~c.M),s}(0,l.vV)("State "+t+" not exists.")}}},t.prototype.useStates=function(t,e,n){if(t.length){var i=[],r=this.currentStates,o=t.length,a=o===r.length
if(a)for(var s=0;s<o;s++)if(t[s]!==r[s]){a=!1
break}if(a)return
for(s=0;s<o;s++){var l=t[s],u=void 0
this.stateProxy&&(u=this.stateProxy(l,t)),u||(u=this.states[l]),u&&i.push(u)}var h=i[o-1],d=!!(h&&h.hoverLayer||n)
d&&this._toggleHoverLayerFlag(!0)
var p=this._mergeStates(i),f=this.stateTransition
this.saveCurrentToNormalState(p),this._applyStateObj(t.join(","),p,this._normalState,!1,!e&&!this.__inHover&&f&&f.duration>0,f)
var g=this._textContent,y=this._textGuide
g&&g.useStates(t,e,d),y&&y.useStates(t,e,d),this._updateAnimationTargets(),this.currentStates=t.slice(),this.markRedraw(),!d&&this.__inHover&&(this._toggleHoverLayerFlag(!1),this.__dirty&=~c.M)}else this.clearStates()},t.prototype.isSilent=function(){for(var t=this.silent,e=this.parent;!t&&e;){if(e.silent){t=!0
break}e=e.parent}return t},t.prototype._updateAnimationTargets=function(){for(var t=0;t<this.animators.length;t++){var e=this.animators[t]
e.targetName&&e.changeTarget(this[e.targetName])}},t.prototype.removeState=function(t){var e=(0,l.qh)(this.currentStates,t)
if(e>=0){var n=this.currentStates.slice()
n.splice(e,1),this.useStates(n)}},t.prototype.replaceState=function(t,e,n){var i=this.currentStates.slice(),r=(0,l.qh)(i,t),o=(0,l.qh)(i,e)>=0
r>=0?o?i.splice(r,1):i[r]=e:n&&!o&&i.push(e),this.useStates(i)},t.prototype.toggleState=function(t,e){e?this.useState(t,!0):this.removeState(t)},t.prototype._mergeStates=function(t){for(var e,n={},i=0;i<t.length;i++){var r=t[i];(0,l.X$)(n,r),r.textConfig&&(e=e||{},(0,l.X$)(e,r.textConfig))}return e&&(n.textConfig=e),n},t.prototype._applyStateObj=function(t,e,n,i,r,o){var a=!(e&&i)
e&&e.textConfig?(this.textConfig=(0,l.X$)({},i?this.textConfig:n.textConfig),(0,l.X$)(this.textConfig,e.textConfig)):a&&n.textConfig&&(this.textConfig=n.textConfig)
for(var s={},u=!1,h=0;h<p.length;h++){var c=p[h],d=r&&f[c]
e&&null!=e[c]?d?(u=!0,s[c]=e[c]):this[c]=e[c]:a&&null!=n[c]&&(d?(u=!0,s[c]=n[c]):this[c]=n[c])}if(!r)for(h=0;h<this.animators.length;h++){var g=this.animators[h],y=g.targetName
g.getLoop()||g.__changeFinalValue(y?(e||n)[y]:e||n)}u&&this._transitionState(t,s,o)},t.prototype._attachComponent=function(t){if((!t.__zr||t.__hostTarget)&&t!==this){var e=this.__zr
e&&t.addSelfToZr(e),t.__zr=e,t.__hostTarget=this}},t.prototype._detachComponent=function(t){t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__hostTarget=null},t.prototype.getClipPath=function(){return this._clipPath},t.prototype.setClipPath=function(t){this._clipPath&&this._clipPath!==t&&this.removeClipPath(),this._attachComponent(t),this._clipPath=t,this.markRedraw()},t.prototype.removeClipPath=function(){var t=this._clipPath
t&&(this._detachComponent(t),this._clipPath=null,this.markRedraw())},t.prototype.getTextContent=function(){return this._textContent},t.prototype.setTextContent=function(t){var e=this._textContent
e!==t&&(e&&e!==t&&this.removeTextContent(),t.innerTransformable=new i.Ay,this._attachComponent(t),this._textContent=t,this.markRedraw())},t.prototype.setTextConfig=function(t){this.textConfig||(this.textConfig={}),(0,l.X$)(this.textConfig,t),this.markRedraw()},t.prototype.removeTextConfig=function(){this.textConfig=null,this.markRedraw()},t.prototype.removeTextContent=function(){var t=this._textContent
t&&(t.innerTransformable=null,this._detachComponent(t),this._textContent=null,this._innerTextDefaultStyle=null,this.markRedraw())},t.prototype.getTextGuideLine=function(){return this._textGuide},t.prototype.setTextGuideLine=function(t){this._textGuide&&this._textGuide!==t&&this.removeTextGuideLine(),this._attachComponent(t),this._textGuide=t,this.markRedraw()},t.prototype.removeTextGuideLine=function(){var t=this._textGuide
t&&(this._detachComponent(t),this._textGuide=null,this.markRedraw())},t.prototype.markRedraw=function(){this.__dirty|=c.M
var t=this.__zr
t&&(this.__inHover?t.refreshHover():t.refresh()),this.__hostTarget&&this.__hostTarget.markRedraw()},t.prototype.dirty=function(){this.markRedraw()},t.prototype._toggleHoverLayerFlag=function(t){this.__inHover=t
var e=this._textContent,n=this._textGuide
e&&(e.__inHover=t),n&&(n.__inHover=t)},t.prototype.addSelfToZr=function(t){if(this.__zr!==t){this.__zr=t
var e=this.animators
if(e)for(var n=0;n<e.length;n++)t.animation.addAnimator(e[n])
this._clipPath&&this._clipPath.addSelfToZr(t),this._textContent&&this._textContent.addSelfToZr(t),this._textGuide&&this._textGuide.addSelfToZr(t)}},t.prototype.removeSelfFromZr=function(t){if(this.__zr){this.__zr=null
var e=this.animators
if(e)for(var n=0;n<e.length;n++)t.animation.removeAnimator(e[n])
this._clipPath&&this._clipPath.removeSelfFromZr(t),this._textContent&&this._textContent.removeSelfFromZr(t),this._textGuide&&this._textGuide.removeSelfFromZr(t)}},t.prototype.animate=function(t,e,n){var i=t?this[t]:this,o=new r.A(i,e,n)
return t&&(o.targetName=t),this.addAnimator(o,t),o},t.prototype.addAnimator=function(t,e){var n=this.__zr,i=this
t.during((function(){i.updateDuringAnimation(e)})).done((function(){var e=i.animators,n=(0,l.qh)(e,t)
n>=0&&e.splice(n,1)})),this.animators.push(t),n&&n.animation.addAnimator(t),n&&n.wakeUp()},t.prototype.updateDuringAnimation=function(t){this.markRedraw()},t.prototype.stopAnimation=function(t,e){for(var n=this.animators,i=n.length,r=[],o=0;o<i;o++){var a=n[o]
t&&t!==a.scope?r.push(a):a.stop(e)}return this.animators=r,this},t.prototype.animateTo=function(t,e,n){m(this,t,e,n)},t.prototype.animateFrom=function(t,e,n){m(this,t,e,n,!0)},t.prototype._transitionState=function(t,e,n,i){for(var r=m(this,e,n,i),o=0;o<r.length;o++)r[o].__fromStateTransition=t},t.prototype.getBoundingRect=function(){return null},t.prototype.getPaintRect=function(){return null},t.initDefaultProps=function(){var e=t.prototype
function n(t,n,i,r){function o(t,e){Object.defineProperty(e,0,{get:function(){return t[i]},set:function(e){t[i]=e}}),Object.defineProperty(e,1,{get:function(){return t[r]},set:function(e){t[r]=e}})}Object.defineProperty(e,t,{get:function(){return this[n]||o(this,this[n]=[]),this[n]},set:function(t){this[i]=t[0],this[r]=t[1],this[n]=t,o(this,t)}})}e.type="element",e.name="",e.ignore=e.silent=e.isGroup=e.draggable=e.dragging=e.ignoreClip=e.__inHover=!1,e.__dirty=c.M,Object.defineProperty&&(n("position","_legacyPos","x","y"),n("scale","_legacyScale","scaleX","scaleY"),n("origin","_legacyOrigin","originX","originY"))}(),t}()
function m(t,e,n,i,r){var o=[]
b(t,"",t,e,n=n||{},i,o,r)
var a=o.length,s=!1,l=n.done,u=n.aborted,h=function(){s=!0,--a<=0&&(s?l&&l():u&&u())},c=function(){--a<=0&&(s?l&&l():u&&u())}
a||l&&l(),o.length>0&&n.during&&o[0].during((function(t,e){n.during(e)}))
for(var d=0;d<o.length;d++){var p=o[d]
h&&p.done(h),c&&p.aborted(c),n.force&&p.duration(n.duration),p.start(n.easing)}return o}function _(t,e,n){for(var i=0;i<n;i++)t[i]=e[i]}function x(t,e,n){if((0,l.Xj)(e[n]))if((0,l.Xj)(t[n])||(t[n]=[]),(0,l.iu)(e[n])){var i=e[n].length
t[n].length!==i&&(t[n]=new e[n].constructor(i),_(t[n],e[n],i))}else{var r=e[n],o=t[n],a=r.length
if(h=r,(0,l.Xj)(h[0]))for(var s=r[0].length,u=0;u<a;u++)o[u]?_(o[u],r[u],s):o[u]=Array.prototype.slice.call(r[u])
else _(o,r,a)
o.length=r.length}else t[n]=e[n]
var h}function b(t,e,n,i,o,a,s,u){for(var h=(0,l.HP)(i),c=o.duration,d=o.delay,p=o.additive,f=o.setToFinal,g=!(0,l.Gv)(a),y=t.animators,v=[],m=0;m<h.length;m++){var _=h[m],w=i[_]
if(null!=w&&null!=n[_]&&(g||a[_]))if(!(0,l.Gv)(w)||(0,l.Xj)(w)||(0,l.C7)(w))v.push(_)
else{if(e){u||(n[_]=w,t.updateDuringAnimation(e))
continue}b(t,_,n[_],w,o,a&&a[_],s,u)}else u||(n[_]=w,t.updateDuringAnimation(e),v.push(_))}var A=v.length
if(!p&&A)for(var S=0;S<y.length;S++)if((T=y[S]).targetName===e&&T.stopTracks(v)){var M=(0,l.qh)(y,T)
y.splice(M,1)}if(o.force||(v=(0,l.pb)(v,(function(t){return!((e=i[t])===(r=n[t])||(0,l.Xj)(e)&&(0,l.Xj)(r)&&function(t,e){var n=t.length
if(n!==e.length)return!1
for(var i=0;i<n;i++)if(t[i]!==e[i])return!1
return!0}(e,r))
var e,r})),A=v.length),A>0||o.force&&!s.length){var T,I=void 0,C=void 0,D=void 0
if(u)for(C={},f&&(I={}),S=0;S<A;S++)C[_=v[S]]=n[_],f?I[_]=i[_]:n[_]=i[_]
else if(f)for(D={},S=0;S<A;S++)D[_=v[S]]=(0,r.F)(n[_]),x(n,i,_);(T=new r.A(n,!1,!1,p?(0,l.pb)(y,(function(t){return t.targetName===e})):null)).targetName=e,o.scope&&(T.scope=o.scope),f&&I&&T.whenWithKeys(0,I,v),D&&T.whenWithKeys(0,D,v),T.whenWithKeys(null==c?500:c,u?C:i,v).delay(d||0),t.addAnimator(T,e),s.push(T)}}(0,l.co)(v,a.A),(0,l.co)(v,i.Ay)
const w=v},160:(t,e,n)=>{n.d(e,{F:()=>_,A:()=>M})
var i={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,n=.1
return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},elasticOut:function(t){var e,n=.1
return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},elasticInOut:function(t){var e,n=.1
return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},backIn:function(t){var e=1.70158
return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158
return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095
return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-i.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*i.bounceIn(2*t):.5*i.bounceOut(2*t-1)+.5}}
const r=i
var o=n(8301),a=n(3906),s=/cubic-bezier\(([0-9,\.e ]+)\)/
function l(t){var e=t&&s.exec(t)
if(e){var n=e[1].split(","),i=+(0,o.Bq)(n[0]),r=+(0,o.Bq)(n[1]),l=+(0,o.Bq)(n[2]),u=+(0,o.Bq)(n[3])
if(isNaN(i+r+l+u))return
var h=[]
return function(t){return t<=0?0:t>=1?1:(0,a._E)(0,i,l,1,t,h)&&(0,a.Yb)(0,r,u,1,h[0])}}}const u=function(){function t(t){this._inited=!1,this._startTime=0,this._pausedTime=0,this._paused=!1,this._life=t.life||1e3,this._delay=t.delay||0,this.loop=t.loop||!1,this.onframe=t.onframe||o.lQ,this.ondestroy=t.ondestroy||o.lQ,this.onrestart=t.onrestart||o.lQ,t.easing&&this.setEasing(t.easing)}return t.prototype.step=function(t,e){if(this._inited||(this._startTime=t+this._delay,this._inited=!0),!this._paused){var n=this._life,i=t-this._startTime-this._pausedTime,r=i/n
r<0&&(r=0),r=Math.min(r,1)
var o=this.easingFunc,a=o?o(r):r
if(this.onframe(a),1===r){if(!this.loop)return!0
var s=i%n
this._startTime=t-s,this._pausedTime=0,this.onrestart()}return!1}this._pausedTime+=e},t.prototype.pause=function(){this._paused=!0},t.prototype.resume=function(){this._paused=!1},t.prototype.setEasing=function(t){this.easing=t,this.easingFunc=(0,o.Tn)(t)?t:r[t]||l(t)},t}()
var h=n(7435),c=n(9714)
Math.round,c.A.hasGlobalWindow&&(0,o.Tn)(window.btoa)
var d=Array.prototype.slice
function p(t,e,n){return(e-t)*n+t}function f(t,e,n,i){for(var r=e.length,o=0;o<r;o++)t[o]=p(e[o],n[o],i)
return t}function g(t,e,n,i){for(var r=e.length,o=0;o<r;o++)t[o]=e[o]+n[o]*i
return t}function y(t,e,n,i){for(var r=e.length,o=r&&e[0].length,a=0;a<r;a++){t[a]||(t[a]=[])
for(var s=0;s<o;s++)t[a][s]=e[a][s]+n[a][s]*i}return t}function v(t,e){for(var n=t.length,i=e.length,r=n>i?e:t,o=Math.min(n,i),a=r[o-1]||{color:[0,0,0,0],offset:0},s=o;s<Math.max(n,i);s++)r.push({offset:a.offset,color:a.color.slice()})}function m(t,e,n){var i=t,r=e
if(i.push&&r.push){var o=i.length,a=r.length
if(o!==a)if(o>a)i.length=a
else for(var s=o;s<a;s++)i.push(1===n?r[s]:d.call(r[s]))
var l=i[0]&&i[0].length
for(s=0;s<i.length;s++)if(1===n)isNaN(i[s])&&(i[s]=r[s])
else for(var u=0;u<l;u++)isNaN(i[s][u])&&(i[s][u]=r[s][u])}}function _(t){if((0,o.Xj)(t)){var e=t.length
if((0,o.Xj)(t[0])){for(var n=[],i=0;i<e;i++)n.push(d.call(t[i]))
return n}return d.call(t)}return t}function x(t){return t[0]=Math.floor(t[0])||0,t[1]=Math.floor(t[1])||0,t[2]=Math.floor(t[2])||0,t[3]=null==t[3]?1:t[3],"rgba("+t.join(",")+")"}function b(t){return 4===t||5===t}function w(t){return 1===t||2===t}var A=[0,0,0,0],S=function(){function t(t){this.keyframes=[],this.discrete=!1,this._invalid=!1,this._needsSort=!1,this._lastFr=0,this._lastFrP=0,this.propName=t}return t.prototype.isFinished=function(){return this._finished},t.prototype.setFinished=function(){this._finished=!0,this._additiveTrack&&this._additiveTrack.setFinished()},t.prototype.needsAnimate=function(){return this.keyframes.length>=1},t.prototype.getAdditiveTrack=function(){return this._additiveTrack},t.prototype.addKeyframe=function(t,e,n){this._needsSort=!0
var i=this.keyframes,a=i.length,s=!1,u=6,c=e
if((0,o.Xj)(e)){var d=function(t){return(0,o.Xj)(t&&t[0])?2:1}(e)
u=d,(1===d&&!(0,o.Et)(e[0])||2===d&&!(0,o.Et)(e[0][0]))&&(s=!0)}else if((0,o.Et)(e)&&!(0,o.Yp)(e))u=0
else if((0,o.Kg)(e))if(isNaN(+e)){var p=h.qg(e)
p&&(c=p,u=3)}else u=0
else if((0,o.C7)(e)){var f=(0,o.X$)({},c)
f.colorStops=(0,o.Tj)(e.colorStops,(function(t){return{offset:t.offset,color:h.qg(t.color)}})),"linear"===e.type?u=4:"radial"===e.type&&(u=5),c=f}0===a?this.valType=u:u===this.valType&&6!==u||(s=!0),this.discrete=this.discrete||s
var g={time:t,value:c,rawValue:e,percent:0}
return n&&(g.easing=n,g.easingFunc=(0,o.Tn)(n)?n:r[n]||l(n)),i.push(g),g},t.prototype.prepare=function(t,e){var n=this.keyframes
this._needsSort&&n.sort((function(t,e){return t.time-e.time}))
for(var i=this.valType,r=n.length,o=n[r-1],a=this.discrete,s=w(i),l=b(i),u=0;u<r;u++){var h=n[u],c=h.value,d=o.value
h.percent=h.time/t,a||(s&&u!==r-1?m(c,d,i):l&&v(c.colorStops,d.colorStops))}if(!a&&5!==i&&e&&this.needsAnimate()&&e.needsAnimate()&&i===e.valType&&!e._finished){this._additiveTrack=e
var p=n[0].value
for(u=0;u<r;u++)0===i?n[u].additiveValue=n[u].value-p:3===i?n[u].additiveValue=g([],n[u].value,p,-1):w(i)&&(n[u].additiveValue=1===i?g([],n[u].value,p,-1):y([],n[u].value,p,-1))}},t.prototype.step=function(t,e){if(!this._finished){this._additiveTrack&&this._additiveTrack._finished&&(this._additiveTrack=null)
var n,i,r,a=null!=this._additiveTrack,s=a?"additiveValue":"value",l=this.valType,u=this.keyframes,h=u.length,c=this.propName,d=3===l,g=this._lastFr,y=Math.min
if(1===h)i=r=u[0]
else{if(e<0)n=0
else if(e<this._lastFrP){for(n=y(g+1,h-1);n>=0&&!(u[n].percent<=e);n--);n=y(n,h-2)}else{for(n=g;n<h&&!(u[n].percent>e);n++);n=y(n-1,h-2)}r=u[n+1],i=u[n]}if(i&&r){this._lastFr=n,this._lastFrP=e
var v=r.percent-i.percent,m=0===v?1:y((e-i.percent)/v,1)
r.easingFunc&&(m=r.easingFunc(m))
var _=a?this._additiveValue:d?A:t[c]
if(!w(l)&&!d||_||(_=this._additiveValue=[]),this.discrete)t[c]=m<1?i.rawValue:r.rawValue
else if(w(l))1===l?f(_,i[s],r[s],m):function(t,e,n,i){for(var r=e.length,o=r&&e[0].length,a=0;a<r;a++){t[a]||(t[a]=[])
for(var s=0;s<o;s++)t[a][s]=p(e[a][s],n[a][s],i)}}(_,i[s],r[s],m)
else if(b(l)){var S=i[s],M=r[s],T=4===l
t[c]={type:T?"linear":"radial",x:p(S.x,M.x,m),y:p(S.y,M.y,m),colorStops:(0,o.Tj)(S.colorStops,(function(t,e){var n=M.colorStops[e]
return{offset:p(t.offset,n.offset,m),color:x(f([],t.color,n.color,m))}})),global:M.global},T?(t[c].x2=p(S.x2,M.x2,m),t[c].y2=p(S.y2,M.y2,m)):t[c].r=p(S.r,M.r,m)}else if(d)f(_,i[s],r[s],m),a||(t[c]=x(_))
else{var I=p(i[s],r[s],m)
a?this._additiveValue=I:t[c]=I}a&&this._addToTarget(t)}}},t.prototype._addToTarget=function(t){var e=this.valType,n=this.propName,i=this._additiveValue
0===e?t[n]=t[n]+i:3===e?(h.qg(t[n],A),g(A,A,i,1),t[n]=x(A)):1===e?g(t[n],t[n],i,1):2===e&&y(t[n],t[n],i,1)},t}()
const M=function(){function t(t,e,n,i){this._tracks={},this._trackKeys=[],this._maxTime=0,this._started=0,this._clip=null,this._target=t,this._loop=e,e&&i?(0,o.vV)("Can' use additive animation on looped animation."):(this._additiveAnimators=i,this._allowDiscrete=n)}return t.prototype.getMaxTime=function(){return this._maxTime},t.prototype.getDelay=function(){return this._delay},t.prototype.getLoop=function(){return this._loop},t.prototype.getTarget=function(){return this._target},t.prototype.changeTarget=function(t){this._target=t},t.prototype.when=function(t,e,n){return this.whenWithKeys(t,e,(0,o.HP)(e),n)},t.prototype.whenWithKeys=function(t,e,n,i){for(var r=this._tracks,o=0;o<n.length;o++){var a=n[o],s=r[a]
if(!s){s=r[a]=new S(a)
var l=void 0,u=this._getAdditiveTrack(a)
if(u){var h=u.keyframes,c=h[h.length-1]
l=c&&c.value,3===u.valType&&l&&(l=x(l))}else l=this._target[a]
if(null==l)continue
t>0&&s.addKeyframe(0,_(l),i),this._trackKeys.push(a)}s.addKeyframe(t,_(e[a]),i)}return this._maxTime=Math.max(this._maxTime,t),this},t.prototype.pause=function(){this._clip.pause(),this._paused=!0},t.prototype.resume=function(){this._clip.resume(),this._paused=!1},t.prototype.isPaused=function(){return!!this._paused},t.prototype.duration=function(t){return this._maxTime=t,this._force=!0,this},t.prototype._doneCallback=function(){this._setTracksFinished(),this._clip=null
var t=this._doneCbs
if(t)for(var e=t.length,n=0;n<e;n++)t[n].call(this)},t.prototype._abortedCallback=function(){this._setTracksFinished()
var t=this.animation,e=this._abortedCbs
if(t&&t.removeClip(this._clip),this._clip=null,e)for(var n=0;n<e.length;n++)e[n].call(this)},t.prototype._setTracksFinished=function(){for(var t=this._tracks,e=this._trackKeys,n=0;n<e.length;n++)t[e[n]].setFinished()},t.prototype._getAdditiveTrack=function(t){var e,n=this._additiveAnimators
if(n)for(var i=0;i<n.length;i++){var r=n[i].getTrack(t)
r&&(e=r)}return e},t.prototype.start=function(t){if(!(this._started>0)){this._started=1
for(var e=this,n=[],i=this._maxTime||0,r=0;r<this._trackKeys.length;r++){var o=this._trackKeys[r],a=this._tracks[o],s=this._getAdditiveTrack(o),l=a.keyframes,h=l.length
if(a.prepare(i,s),a.needsAnimate())if(!this._allowDiscrete&&a.discrete){var c=l[h-1]
c&&(e._target[a.propName]=c.rawValue),a.setFinished()}else n.push(a)}if(n.length||this._force){var d=new u({life:i,loop:this._loop,delay:this._delay||0,onframe:function(t){e._started=2
var i=e._additiveAnimators
if(i){for(var r=!1,o=0;o<i.length;o++)if(i[o]._clip){r=!0
break}r||(e._additiveAnimators=null)}for(o=0;o<n.length;o++)n[o].step(e._target,t)
var a=e._onframeCbs
if(a)for(o=0;o<a.length;o++)a[o](e._target,t)},ondestroy:function(){e._doneCallback()}})
this._clip=d,this.animation&&this.animation.addClip(d),t&&d.setEasing(t)}else this._doneCallback()
return this}},t.prototype.stop=function(t){if(this._clip){var e=this._clip
t&&e.onframe(1),this._abortedCallback()}},t.prototype.delay=function(t){return this._delay=t,this},t.prototype.during=function(t){return t&&(this._onframeCbs||(this._onframeCbs=[]),this._onframeCbs.push(t)),this},t.prototype.done=function(t){return t&&(this._doneCbs||(this._doneCbs=[]),this._doneCbs.push(t)),this},t.prototype.aborted=function(t){return t&&(this._abortedCbs||(this._abortedCbs=[]),this._abortedCbs.push(t)),this},t.prototype.getClip=function(){return this._clip},t.prototype.getTrack=function(t){return this._tracks[t]},t.prototype.getTracks=function(){var t=this
return(0,o.Tj)(this._trackKeys,(function(e){return t._tracks[e]}))},t.prototype.stopTracks=function(t,e){if(!t.length||!this._clip)return!0
for(var n=this._tracks,i=this._trackKeys,r=0;r<t.length;r++){var o=n[t[r]]
o&&!o.isFinished()&&(e?o.step(this._target,1):1===this._started&&o.step(this._target,0),o.setFinished())}var a=!0
for(r=0;r<i.length;r++)if(!n[i[r]].isFinished()){a=!1
break}return a&&this._abortedCallback(),a},t.prototype.saveTo=function(t,e,n){if(t){e=e||this._trackKeys
for(var i=0;i<e.length;i++){var r=e[i],o=this._tracks[r]
if(o&&!o.isFinished()){var a=o.keyframes,s=a[n?0:a.length-1]
s&&(t[r]=_(s.rawValue))}}}},t.prototype.__changeFinalValue=function(t,e){e=e||(0,o.HP)(t)
for(var n=0;n<e.length;n++){var i=e[n],r=this._tracks[i]
if(r){var a=r.keyframes
if(a.length>1){var s=a.pop()
r.addKeyframe(s.time,t[i]),r.prepare(this._maxTime,r.getAdditiveTrack())}}}},t}()},8694:(t,e,n)=>{n.d(e,{A:()=>i})
const i=n(9714).A.hasGlobalWindow&&(window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.msRequestAnimationFrame&&window.msRequestAnimationFrame.bind(window)||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){return setTimeout(t,16)}},9041:(t,e,n)=>{n.d(e,{V$:()=>O,Xi:()=>P,ZQ:()=>x})
var i=n(2028),r=n(928),o=n(246),a=n(2380),s=n(4427),l=n(2655),u=n(9402),h=n(8301)
function c(t){var e,n,i=t.style,r=i.lineDash&&i.lineWidth>0&&(e=i.lineDash,n=i.lineWidth,e&&"solid"!==e&&n>0?"dashed"===e?[4*n,2*n]:"dotted"===e?[n]:(0,h.Et)(e)?[e]:(0,h.cy)(e)?e:null:null),o=i.lineDashOffset
if(r){var a=i.strokeNoScale&&t.getLineScale?t.getLineScale():1
a&&1!==a&&(r=(0,h.Tj)(r,(function(t){return t/a})),o/=a)}return[r,o]}var d=n(5451),p=n(1854),f=new r.A(!0)
function g(t){var e=t.stroke
return!(null==e||"none"===e||!(t.lineWidth>0))}function y(t){return"string"==typeof t&&"none"!==t}function v(t){var e=t.fill
return null!=e&&"none"!==e}function m(t,e){if(null!=e.fillOpacity&&1!==e.fillOpacity){var n=t.globalAlpha
t.globalAlpha=e.fillOpacity*e.opacity,t.fill(),t.globalAlpha=n}else t.fill()}function _(t,e){if(null!=e.strokeOpacity&&1!==e.strokeOpacity){var n=t.globalAlpha
t.globalAlpha=e.strokeOpacity*e.opacity,t.stroke(),t.globalAlpha=n}else t.stroke()}function x(t,e,n){var i=(0,o.OD)(e.image,e.__image,n)
if((0,o.xA)(i)){var r=t.createPattern(i,e.repeat||"repeat")
if("function"==typeof DOMMatrix&&r&&r.setTransform){var a=new DOMMatrix
a.translateSelf(e.x||0,e.y||0),a.rotateSelf(0,0,(e.rotation||0)*h.lI),a.scaleSelf(e.scaleX||1,e.scaleY||1),r.setTransform(a)}return r}}var b=["shadowBlur","shadowOffsetX","shadowOffsetY"],w=[["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]]
function A(t,e,n,r,o){var a=!1
if(!r&&e===(n=n||{}))return!1
if(r||e.opacity!==n.opacity){k(t,o),a=!0
var s=Math.max(Math.min(e.opacity,1),0)
t.globalAlpha=isNaN(s)?i.oN.opacity:s}(r||e.blend!==n.blend)&&(a||(k(t,o),a=!0),t.globalCompositeOperation=e.blend||i.oN.blend)
for(var l=0;l<b.length;l++){var u=b[l];(r||e[u]!==n[u])&&(a||(k(t,o),a=!0),t[u]=t.dpr*(e[u]||0))}return(r||e.shadowColor!==n.shadowColor)&&(a||(k(t,o),a=!0),t.shadowColor=e.shadowColor||i.oN.shadowColor),a}function S(t,e,n,i,r){var o=L(e,r.inHover),a=i?null:n&&L(n,r.inHover)||{}
if(o===a)return!1
var s=A(t,o,a,i,r)
if((i||o.fill!==a.fill)&&(s||(k(t,r),s=!0),y(o.fill)&&(t.fillStyle=o.fill)),(i||o.stroke!==a.stroke)&&(s||(k(t,r),s=!0),y(o.stroke)&&(t.strokeStyle=o.stroke)),(i||o.opacity!==a.opacity)&&(s||(k(t,r),s=!0),t.globalAlpha=null==o.opacity?1:o.opacity),e.hasStroke()){var l=o.lineWidth/(o.strokeNoScale&&e.getLineScale?e.getLineScale():1)
t.lineWidth!==l&&(s||(k(t,r),s=!0),t.lineWidth=l)}for(var u=0;u<w.length;u++){var h=w[u],c=h[0];(i||o[c]!==a[c])&&(s||(k(t,r),s=!0),t[c]=o[c]||h[1])}return s}function M(t,e){var n=e.transform,i=t.dpr||1
n?t.setTransform(i*n[0],i*n[1],i*n[2],i*n[3],i*n[4],i*n[5]):t.setTransform(i,0,0,i,0,0)}var T=1,I=2,C=3,D=4
function k(t,e){e.batchFill&&t.fill(),e.batchStroke&&t.stroke(),e.batchFill="",e.batchStroke=""}function L(t,e){return e&&t.__hoverStyle||t.style}function P(t,e){O(t,e,{inHover:!1,viewWidth:0,viewHeight:0},!0)}function O(t,e,n,i){var r=e.transform
if(!e.shouldBePainted(n.viewWidth,n.viewHeight,!1,!1))return e.__dirty&=~d.M,void(e.__isRendered=!1)
var h=e.__clipPaths,y=n.prevElClipPaths,b=!1,w=!1
if(y&&!(0,a.KU)(h,y)||(y&&y.length&&(k(t,n),t.restore(),w=b=!0,n.prevElClipPaths=null,n.allClipped=!1,n.prevEl=null),h&&h.length&&(k(t,n),t.save(),function(t,e,n){for(var i=!1,r=0;r<t.length;r++){var o=t[r]
i=i||o.isZeroArea(),M(e,o),e.beginPath(),o.buildPath(e,o.shape),e.clip()}n.allClipped=i}(h,t,n),b=!0),n.prevElClipPaths=h),n.allClipped)e.__isRendered=!1
else{e.beforeBrush&&e.beforeBrush(),e.innerBeforeBrush()
var P=n.prevEl
P||(w=b=!0)
var N,R,E=e instanceof s.Ay&&e.autoBatch&&function(t){var e=v(t),n=g(t)
return!(t.lineDash||!(+e^+n)||e&&"string"!=typeof t.fill||n&&"string"!=typeof t.stroke||t.strokePercent<1||t.strokeOpacity<1||t.fillOpacity<1)}(e.style)
b||(N=r,R=P.transform,N&&R?N[0]!==R[0]||N[1]!==R[1]||N[2]!==R[2]||N[3]!==R[3]||N[4]!==R[4]||N[5]!==R[5]:N||R)?(k(t,n),M(t,e)):E||k(t,n)
var z=L(e,n.inHover)
e instanceof s.Ay?(n.lastDrawType!==T&&(w=!0,n.lastDrawType=T),S(t,e,P,w,n),E&&(n.batchFill||n.batchStroke)||t.beginPath(),function(t,e,n,i){var r,o=g(n),s=v(n),l=n.strokePercent,u=l<1,h=!e.path
e.silent&&!u||!h||e.createPathProxy()
var p=e.path||f,y=e.__dirty
if(!i){var b=n.fill,w=n.stroke,A=s&&!!b.colorStops,S=o&&!!w.colorStops,M=s&&!!b.image,T=o&&!!w.image,I=void 0,C=void 0,D=void 0,k=void 0,L=void 0;(A||S)&&(L=e.getBoundingRect()),A&&(I=y?(0,a.Ff)(t,b,L):e.__canvasFillGradient,e.__canvasFillGradient=I),S&&(C=y?(0,a.Ff)(t,w,L):e.__canvasStrokeGradient,e.__canvasStrokeGradient=C),M&&(D=y||!e.__canvasFillPattern?x(t,b,e):e.__canvasFillPattern,e.__canvasFillPattern=D),T&&(k=y||!e.__canvasStrokePattern?x(t,w,e):e.__canvasStrokePattern,e.__canvasStrokePattern=D),A?t.fillStyle=I:M&&(D?t.fillStyle=D:s=!1),S?t.strokeStyle=C:T&&(k?t.strokeStyle=k:o=!1)}var P,O,N=e.getGlobalScale()
p.setScale(N[0],N[1],e.segmentIgnoreThreshold),t.setLineDash&&n.lineDash&&(P=(r=c(e))[0],O=r[1])
var R=!0;(h||y&d.Dl)&&(p.setDPR(t.dpr),u?p.setContext(null):(p.setContext(t),R=!1),p.reset(),e.buildPath(p,e.shape,i),p.toStatic(),e.pathUpdated()),R&&p.rebuildPath(t,u?l:1),P&&(t.setLineDash(P),t.lineDashOffset=O),i||(n.strokeFirst?(o&&_(t,n),s&&m(t,n)):(s&&m(t,n),o&&_(t,n))),P&&t.setLineDash([])}(t,e,z,E),E&&(n.batchFill=z.fill||"",n.batchStroke=z.stroke||"")):e instanceof u.A?(n.lastDrawType!==C&&(w=!0,n.lastDrawType=C),S(t,e,P,w,n),function(t,e,n){var i,r=n.text
if(null!=r&&(r+=""),r){t.font=n.font||p.OH,t.textAlign=n.textAlign,t.textBaseline=n.textBaseline
var o=void 0,a=void 0
t.setLineDash&&n.lineDash&&(o=(i=c(e))[0],a=i[1]),o&&(t.setLineDash(o),t.lineDashOffset=a),n.strokeFirst?(g(n)&&t.strokeText(r,n.x,n.y),v(n)&&t.fillText(r,n.x,n.y)):(v(n)&&t.fillText(r,n.x,n.y),g(n)&&t.strokeText(r,n.x,n.y)),o&&t.setLineDash([])}}(t,e,z)):e instanceof l.Ay?(n.lastDrawType!==I&&(w=!0,n.lastDrawType=I),function(t,e,n,i,r){A(t,L(e,r.inHover),n&&L(n,r.inHover),i,r)}(t,e,P,w,n),function(t,e,n){var i=e.__image=(0,o.OD)(n.image,e.__image,e,e.onload)
if(i&&(0,o.xA)(i)){var r=n.x||0,a=n.y||0,s=e.getWidth(),l=e.getHeight(),u=i.width/i.height
if(null==s&&null!=l?s=l*u:null==l&&null!=s?l=s/u:null==s&&null==l&&(s=i.width,l=i.height),n.sWidth&&n.sHeight){var h=n.sx||0,c=n.sy||0
t.drawImage(i,h,c,n.sWidth,n.sHeight,r,a,s,l)}else if(n.sx&&n.sy){var d=s-(h=n.sx),p=l-(c=n.sy)
t.drawImage(i,h,c,d,p,r,a,s,l)}else t.drawImage(i,r,a,s,l)}}(t,e,z)):e.getTemporalDisplayables&&(n.lastDrawType!==D&&(w=!0,n.lastDrawType=D),function(t,e,n){var i=e.getDisplayables(),r=e.getTemporalDisplayables()
t.save()
var o,a,s={prevElClipPaths:null,prevEl:null,allClipped:!1,viewWidth:n.viewWidth,viewHeight:n.viewHeight,inHover:n.inHover}
for(o=e.getCursor(),a=i.length;o<a;o++)(h=i[o]).beforeBrush&&h.beforeBrush(),h.innerBeforeBrush(),O(t,h,s,o===a-1),h.innerAfterBrush(),h.afterBrush&&h.afterBrush(),s.prevEl=h
for(var l=0,u=r.length;l<u;l++){var h;(h=r[l]).beforeBrush&&h.beforeBrush(),h.innerBeforeBrush(),O(t,h,s,l===u-1),h.innerAfterBrush(),h.afterBrush&&h.afterBrush(),s.prevEl=h}e.clearTemporalDisplayables(),e.notClear=!0,t.restore()}(t,e,n)),E&&i&&k(t,n),e.innerAfterBrush(),e.afterBrush&&e.afterBrush(),n.prevEl=e,e.__dirty=0,e.__isRendered=!0}}},2380:(t,e,n)=>{function i(t){return isFinite(t)}function r(t,e,n){for(var r="radial"===e.type?function(t,e,n){var r=n.width,o=n.height,a=Math.min(r,o),s=null==e.x?.5:e.x,l=null==e.y?.5:e.y,u=null==e.r?.5:e.r
return e.global||(s=s*r+n.x,l=l*o+n.y,u*=a),s=i(s)?s:.5,l=i(l)?l:.5,u=u>=0&&i(u)?u:.5,t.createRadialGradient(s,l,0,s,l,u)}(t,e,n):function(t,e,n){var r=null==e.x?0:e.x,o=null==e.x2?1:e.x2,a=null==e.y?0:e.y,s=null==e.y2?0:e.y2
return e.global||(r=r*n.width+n.x,o=o*n.width+n.x,a=a*n.height+n.y,s=s*n.height+n.y),r=i(r)?r:0,o=i(o)?o:1,a=i(a)?a:0,s=i(s)?s:0,t.createLinearGradient(r,a,o,s)}(t,e,n),o=e.colorStops,a=0;a<o.length;a++)r.addColorStop(o[a].offset,o[a].color)
return r}function o(t,e){if(t===e||!t&&!e)return!1
if(!t||!e||t.length!==e.length)return!0
for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!0
return!1}function a(t){return parseInt(t,10)}function s(t,e,n){var i=["width","height"][e],r=["clientWidth","clientHeight"][e],o=["paddingLeft","paddingTop"][e],s=["paddingRight","paddingBottom"][e]
if(null!=n[i]&&"auto"!==n[i])return parseFloat(n[i])
var l=document.defaultView.getComputedStyle(t)
return(t[r]||a(l[i])||a(t.style[i]))-(a(l[o])||0)-(a(l[s])||0)|0}n.d(e,{Ff:()=>r,KU:()=>o,YC:()=>s})},5499:(t,e,n)=>{n.d(e,{Y5:()=>r,_S:()=>a,el:()=>s,ps:()=>o,tY:()=>l})
var i=1
n(9714).A.hasGlobalWindow&&(i=Math.max(window.devicePixelRatio||window.screen&&window.screen.deviceXDPI/window.screen.logicalXDPI||1,1))
var r=i,o=.4,a="#333",s="#ccc",l="#eee"},7627:(t,e,n)=>{n.d(e,{NO:()=>u,RG:()=>s,X4:()=>f,ks:()=>d,ll:()=>h,lo:()=>p,sZ:()=>c})
var i=n(4703),r=n(4592),o=n(1854),a={}
function s(t,e){e=e||o.OH
var n=a[e]
n||(n=a[e]=new r.Ay(500))
var i=n.get(t)
return null==i&&(i=o.yh.measureText(t,e).width,n.put(t,i)),i}function l(t,e,n,r){var o=s(t,e),a=d(e),l=h(0,o,n),u=c(0,a,r)
return new i.A(l,u,o,a)}function u(t,e,n,r){var o=((t||"")+"").split("\n")
if(1===o.length)return l(o[0],e,n,r)
for(var a=new i.A(0,0,0,0),s=0;s<o.length;s++){var u=l(o[s],e,n,r)
0===s?a.copy(u):a.union(u)}return a}function h(t,e,n){return"right"===n?t-=e:"center"===n&&(t-=e/2),t}function c(t,e,n){return"middle"===n?t-=e/2:"bottom"===n&&(t-=e),t}function d(t){return s("国",t)}function p(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}function f(t,e,n){var i=e.position||"inside",r=null!=e.distance?e.distance:5,o=n.height,a=n.width,s=o/2,l=n.x,u=n.y,h="left",c="top"
if(i instanceof Array)l+=p(i[0],n.width),u+=p(i[1],n.height),h=null,c=null
else switch(i){case"left":l-=r,u+=s,h="right",c="middle"
break
case"right":l+=r+a,u+=s,c="middle"
break
case"top":l+=a/2,u-=r,h="center",c="bottom"
break
case"bottom":l+=a/2,u+=o+r,h="center"
break
case"inside":l+=a/2,u+=s,h="center",c="middle"
break
case"insideLeft":l+=r,u+=s,c="middle"
break
case"insideRight":l+=a-r,u+=s,h="right",c="middle"
break
case"insideTop":l+=a/2,u+=r,h="center"
break
case"insideBottom":l+=a/2,u+=o-r,h="center",c="bottom"
break
case"insideTopLeft":l+=r,u+=r
break
case"insideTopRight":l+=a-r,u+=r,h="right"
break
case"insideBottomLeft":l+=r,u+=o-r,c="bottom"
break
case"insideBottomRight":l+=a-r,u+=o-r,h="right",c="bottom"}return(t=t||{}).x=l,t.y=u,t.align=h,t.verticalAlign=c,t}},4703:(t,e,n)=>{n.d(e,{A:()=>p})
var i=n(7432),r=n(1655),o=Math.min,a=Math.max,s=new r.A,l=new r.A,u=new r.A,h=new r.A,c=new r.A,d=new r.A
const p=function(){function t(t,e,n,i){n<0&&(t+=n,n=-n),i<0&&(e+=i,i=-i),this.x=t,this.y=e,this.width=n,this.height=i}return t.prototype.union=function(t){var e=o(t.x,this.x),n=o(t.y,this.y)
isFinite(this.x)&&isFinite(this.width)?this.width=a(t.x+t.width,this.x+this.width)-e:this.width=t.width,isFinite(this.y)&&isFinite(this.height)?this.height=a(t.y+t.height,this.y+this.height)-n:this.height=t.height,this.x=e,this.y=n},t.prototype.applyTransform=function(e){t.applyTransform(this,this,e)},t.prototype.calculateTransform=function(t){var e=this,n=t.width/e.width,r=t.height/e.height,o=i.vt()
return i.Tl(o,o,[-e.x,-e.y]),i.hs(o,o,[n,r]),i.Tl(o,o,[t.x,t.y]),o},t.prototype.intersect=function(e,n){if(!e)return!1
e instanceof t||(e=t.create(e))
var i=this,o=i.x,a=i.x+i.width,s=i.y,l=i.y+i.height,u=e.x,h=e.x+e.width,p=e.y,f=e.y+e.height,g=!(a<u||h<o||l<p||f<s)
if(n){var y=1/0,v=0,m=Math.abs(a-u),_=Math.abs(h-o),x=Math.abs(l-p),b=Math.abs(f-s),w=Math.min(m,_),A=Math.min(x,b)
a<u||h<o?w>v&&(v=w,m<_?r.A.set(d,-m,0):r.A.set(d,_,0)):w<y&&(y=w,m<_?r.A.set(c,m,0):r.A.set(c,-_,0)),l<p||f<s?A>v&&(v=A,x<b?r.A.set(d,0,-x):r.A.set(d,0,b)):w<y&&(y=w,x<b?r.A.set(c,0,x):r.A.set(c,0,-b))}return n&&r.A.copy(n,g?c:d),g},t.prototype.contain=function(t,e){var n=this
return t>=n.x&&t<=n.x+n.width&&e>=n.y&&e<=n.y+n.height},t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height)},t.prototype.copy=function(e){t.copy(this,e)},t.prototype.plain=function(){return{x:this.x,y:this.y,width:this.width,height:this.height}},t.prototype.isFinite=function(){return isFinite(this.x)&&isFinite(this.y)&&isFinite(this.width)&&isFinite(this.height)},t.prototype.isZero=function(){return 0===this.width||0===this.height},t.create=function(e){return new t(e.x,e.y,e.width,e.height)},t.copy=function(t,e){t.x=e.x,t.y=e.y,t.width=e.width,t.height=e.height},t.applyTransform=function(e,n,i){if(i){if(i[1]<1e-5&&i[1]>-1e-5&&i[2]<1e-5&&i[2]>-1e-5){var r=i[0],c=i[3],d=i[4],p=i[5]
return e.x=n.x*r+d,e.y=n.y*c+p,e.width=n.width*r,e.height=n.height*c,e.width<0&&(e.x+=e.width,e.width=-e.width),void(e.height<0&&(e.y+=e.height,e.height=-e.height))}s.x=u.x=n.x,s.y=h.y=n.y,l.x=h.x=n.x+n.width,l.y=u.y=n.y+n.height,s.transform(i),h.transform(i),l.transform(i),u.transform(i),e.x=o(s.x,l.x,u.x,h.x),e.y=o(s.y,l.y,u.y,h.y)
var f=a(s.x,l.x,u.x,h.x),g=a(s.y,l.y,u.y,h.y)
e.width=f-e.x,e.height=g-e.y}else e!==n&&t.copy(e,n)},t}()},9430:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(){function t(t){t&&(this._$eventProcessor=t)}return t.prototype.on=function(t,e,n,i){this._$handlers||(this._$handlers={})
var r=this._$handlers
if("function"==typeof e&&(i=n,n=e,e=null),!n||!t)return this
var o=this._$eventProcessor
null!=e&&o&&o.normalizeQuery&&(e=o.normalizeQuery(e)),r[t]||(r[t]=[])
for(var a=0;a<r[t].length;a++)if(r[t][a].h===n)return this
var s={h:n,query:e,ctx:i||this,callAtLast:n.zrEventfulCallAtLast},l=r[t].length-1,u=r[t][l]
return u&&u.callAtLast?r[t].splice(l,0,s):r[t].push(s),this},t.prototype.isSilent=function(t){var e=this._$handlers
return!e||!e[t]||!e[t].length},t.prototype.off=function(t,e){var n=this._$handlers
if(!n)return this
if(!t)return this._$handlers={},this
if(e){if(n[t]){for(var i=[],r=0,o=n[t].length;r<o;r++)n[t][r].h!==e&&i.push(n[t][r])
n[t]=i}n[t]&&0===n[t].length&&delete n[t]}else delete n[t]
return this},t.prototype.trigger=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
if(!this._$handlers)return this
var i=this._$handlers[t],r=this._$eventProcessor
if(i)for(var o=e.length,a=i.length,s=0;s<a;s++){var l=i[s]
if(!r||!r.filter||null==l.query||r.filter(t,l.query))switch(o){case 0:l.h.call(l.ctx)
break
case 1:l.h.call(l.ctx,e[0])
break
case 2:l.h.call(l.ctx,e[0],e[1])
break
default:l.h.apply(l.ctx,e)}}return r&&r.afterTrigger&&r.afterTrigger(t),this},t.prototype.triggerWithContext=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
if(!this._$handlers)return this
var i=this._$handlers[t],r=this._$eventProcessor
if(i)for(var o=e.length,a=e[o-1],s=i.length,l=0;l<s;l++){var u=i[l]
if(!r||!r.filter||null==u.query||r.filter(t,u.query))switch(o){case 0:u.h.call(a)
break
case 1:u.h.call(a,e[0])
break
case 2:u.h.call(a,e[0],e[1])
break
default:u.h.apply(a,e.slice(1,o-1))}}return r&&r.afterTrigger&&r.afterTrigger(t),this},t}()},4592:(t,e,n)=>{n.d(e,{Ay:()=>o})
var i=function(t){this.value=t},r=function(){function t(){this._len=0}return t.prototype.insert=function(t){var e=new i(t)
return this.insertEntry(e),e},t.prototype.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},t.prototype.remove=function(t){var e=t.prev,n=t.next
e?e.next=n:this.head=n,n?n.prev=e:this.tail=e,t.next=t.prev=null,this._len--},t.prototype.len=function(){return this._len},t.prototype.clear=function(){this.head=this.tail=null,this._len=0},t}()
const o=function(){function t(t){this._list=new r,this._maxSize=10,this._map={},this._maxSize=t}return t.prototype.put=function(t,e){var n=this._list,r=this._map,o=null
if(null==r[t]){var a=n.len(),s=this._lastRemovedEntry
if(a>=this._maxSize&&a>0){var l=n.head
n.remove(l),delete r[l.key],o=l.value,this._lastRemovedEntry=l}s?s.value=e:s=new i(e),s.key=t,n.insertEntry(s),r[t]=s}return o},t.prototype.get=function(t){var e=this._map[t],n=this._list
if(null!=e)return e!==n.tail&&(n.remove(e),n.insertEntry(e)),e.value},t.prototype.clear=function(){this._list.clear(),this._map={}},t.prototype.len=function(){return this._list.len()},t}()},7427:(t,e,n)=>{n.d(e,{A:()=>l})
var i=n(1655),r=[0,0],o=[0,0],a=new i.A,s=new i.A
const l=function(){function t(t,e){this._corners=[],this._axes=[],this._origin=[0,0]
for(var n=0;n<4;n++)this._corners[n]=new i.A
for(n=0;n<2;n++)this._axes[n]=new i.A
t&&this.fromBoundingRect(t,e)}return t.prototype.fromBoundingRect=function(t,e){var n=this._corners,r=this._axes,o=t.x,a=t.y,s=o+t.width,l=a+t.height
if(n[0].set(o,a),n[1].set(s,a),n[2].set(s,l),n[3].set(o,l),e)for(var u=0;u<4;u++)n[u].transform(e)
for(i.A.sub(r[0],n[1],n[0]),i.A.sub(r[1],n[3],n[0]),r[0].normalize(),r[1].normalize(),u=0;u<2;u++)this._origin[u]=r[u].dot(n[0])},t.prototype.intersect=function(t,e){var n=!0,r=!e
return a.set(1/0,1/0),s.set(0,0),!this._intersectCheckOneSide(this,t,a,s,r,1)&&(n=!1,r)||!this._intersectCheckOneSide(t,this,a,s,r,-1)&&(n=!1,r)||r||i.A.copy(e,n?a:s),n},t.prototype._intersectCheckOneSide=function(t,e,n,a,s,l){for(var u=!0,h=0;h<2;h++){var c=this._axes[h]
if(this._getProjMinMaxOnAxis(h,t._corners,r),this._getProjMinMaxOnAxis(h,e._corners,o),r[1]<o[0]||r[0]>o[1]){if(u=!1,s)return u
var d=Math.abs(o[0]-r[1]),p=Math.abs(r[0]-o[1])
Math.min(d,p)>a.len()&&(d<p?i.A.scale(a,c,-d*l):i.A.scale(a,c,p*l))}else n&&(d=Math.abs(o[0]-r[1]),p=Math.abs(r[0]-o[1]),Math.min(d,p)<n.len()&&(d<p?i.A.scale(n,c,d*l):i.A.scale(n,c,-p*l)))}return u},t.prototype._getProjMinMaxOnAxis=function(t,e,n){for(var i=this._axes[t],r=this._origin,o=e[0].dot(i)+r[t],a=o,s=o,l=1;l<e.length;l++){var u=e[l].dot(i)+r[t]
a=Math.min(u,a),s=Math.max(u,s)}n[0]=a,n[1]=s},t}()},928:(t,e,n)=>{n.d(e,{A:()=>T,q:()=>M})
var i=n(1150),r=n(4703),o=n(5499),a=n(5950),s=n(3906),l={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},u=[],h=[],c=[],d=[],p=[],f=[],g=Math.min,y=Math.max,v=Math.cos,m=Math.sin,_=Math.abs,x=Math.PI,b=2*x,w="undefined"!=typeof Float32Array,A=[]
function S(t){return Math.round(t/x*1e8)/1e8%2*x}function M(t,e){var n=S(t[0])
n<0&&(n+=b)
var i=n-t[0],r=t[1]
r+=i,!e&&r-n>=b?r=n+b:e&&n-r>=b?r=n-b:!e&&n>r?r=n+(b-S(n-r)):e&&n<r&&(r=n-(b-S(r-n))),t[0]=n,t[1]=r}const T=function(){function t(t){this.dpr=1,this._xi=0,this._yi=0,this._x0=0,this._y0=0,this._len=0,t&&(this._saveData=!1),this._saveData&&(this.data=[])}var e
return t.prototype.increaseVersion=function(){this._version++},t.prototype.getVersion=function(){return this._version},t.prototype.setScale=function(t,e,n){(n=n||0)>0&&(this._ux=_(n/o.Y5/t)||0,this._uy=_(n/o.Y5/e)||0)},t.prototype.setDPR=function(t){this.dpr=t},t.prototype.setContext=function(t){this._ctx=t},t.prototype.getContext=function(){return this._ctx},t.prototype.beginPath=function(){return this._ctx&&this._ctx.beginPath(),this.reset(),this},t.prototype.reset=function(){this._saveData&&(this._len=0),this._pathSegLen&&(this._pathSegLen=null,this._pathLen=0),this._version++},t.prototype.moveTo=function(t,e){return this._drawPendingPt(),this.addData(l.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},t.prototype.lineTo=function(t,e){var n=_(t-this._xi),i=_(e-this._yi),r=n>this._ux||i>this._uy
if(this.addData(l.L,t,e),this._ctx&&r&&this._ctx.lineTo(t,e),r)this._xi=t,this._yi=e,this._pendingPtDist=0
else{var o=n*n+i*i
o>this._pendingPtDist&&(this._pendingPtX=t,this._pendingPtY=e,this._pendingPtDist=o)}return this},t.prototype.bezierCurveTo=function(t,e,n,i,r,o){return this._drawPendingPt(),this.addData(l.C,t,e,n,i,r,o),this._ctx&&this._ctx.bezierCurveTo(t,e,n,i,r,o),this._xi=r,this._yi=o,this},t.prototype.quadraticCurveTo=function(t,e,n,i){return this._drawPendingPt(),this.addData(l.Q,t,e,n,i),this._ctx&&this._ctx.quadraticCurveTo(t,e,n,i),this._xi=n,this._yi=i,this},t.prototype.arc=function(t,e,n,i,r,o){this._drawPendingPt(),A[0]=i,A[1]=r,M(A,o),i=A[0]
var a=(r=A[1])-i
return this.addData(l.A,t,e,n,n,i,a,0,o?0:1),this._ctx&&this._ctx.arc(t,e,n,i,r,o),this._xi=v(r)*n+t,this._yi=m(r)*n+e,this},t.prototype.arcTo=function(t,e,n,i,r){return this._drawPendingPt(),this._ctx&&this._ctx.arcTo(t,e,n,i,r),this},t.prototype.rect=function(t,e,n,i){return this._drawPendingPt(),this._ctx&&this._ctx.rect(t,e,n,i),this.addData(l.R,t,e,n,i),this},t.prototype.closePath=function(){this._drawPendingPt(),this.addData(l.Z)
var t=this._ctx,e=this._x0,n=this._y0
return t&&t.closePath(),this._xi=e,this._yi=n,this},t.prototype.fill=function(t){t&&t.fill(),this.toStatic()},t.prototype.stroke=function(t){t&&t.stroke(),this.toStatic()},t.prototype.len=function(){return this._len},t.prototype.setData=function(t){var e=t.length
this.data&&this.data.length===e||!w||(this.data=new Float32Array(e))
for(var n=0;n<e;n++)this.data[n]=t[n]
this._len=e},t.prototype.appendPath=function(t){t instanceof Array||(t=[t])
for(var e=t.length,n=0,i=this._len,r=0;r<e;r++)n+=t[r].len()
for(w&&this.data instanceof Float32Array&&(this.data=new Float32Array(i+n)),r=0;r<e;r++)for(var o=t[r].data,a=0;a<o.length;a++)this.data[i++]=o[a]
this._len=i},t.prototype.addData=function(t,e,n,i,r,o,a,s,l){if(this._saveData){var u=this.data
this._len+arguments.length>u.length&&(this._expandData(),u=this.data)
for(var h=0;h<arguments.length;h++)u[this._len++]=arguments[h]}},t.prototype._drawPendingPt=function(){this._pendingPtDist>0&&(this._ctx&&this._ctx.lineTo(this._pendingPtX,this._pendingPtY),this._pendingPtDist=0)},t.prototype._expandData=function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e]
this.data=t}},t.prototype.toStatic=function(){if(this._saveData){this._drawPendingPt()
var t=this.data
t instanceof Array&&(t.length=this._len,w&&this._len>11&&(this.data=new Float32Array(t)))}},t.prototype.getBoundingRect=function(){c[0]=c[1]=p[0]=p[1]=Number.MAX_VALUE,d[0]=d[1]=f[0]=f[1]=-Number.MAX_VALUE
var t,e=this.data,n=0,o=0,s=0,u=0
for(t=0;t<this._len;){var h=e[t++],g=1===t
switch(g&&(s=n=e[t],u=o=e[t+1]),h){case l.M:n=s=e[t++],o=u=e[t++],p[0]=s,p[1]=u,f[0]=s,f[1]=u
break
case l.L:(0,a.j6)(n,o,e[t],e[t+1],p,f),n=e[t++],o=e[t++]
break
case l.C:(0,a.BM)(n,o,e[t++],e[t++],e[t++],e[t++],e[t],e[t+1],p,f),n=e[t++],o=e[t++]
break
case l.Q:(0,a.tW)(n,o,e[t++],e[t++],e[t],e[t+1],p,f),n=e[t++],o=e[t++]
break
case l.A:var y=e[t++],_=e[t++],x=e[t++],b=e[t++],w=e[t++],A=e[t++]+w
t+=1
var S=!e[t++]
g&&(s=v(w)*x+y,u=m(w)*b+_),(0,a.$s)(y,_,x,b,w,A,S,p,f),n=v(A)*x+y,o=m(A)*b+_
break
case l.R:s=n=e[t++],u=o=e[t++]
var M=e[t++],T=e[t++];(0,a.j6)(s,u,s+M,u+T,p,f)
break
case l.Z:n=s,o=u}i.jk(c,c,p),i.T9(d,d,f)}return 0===t&&(c[0]=c[1]=d[0]=d[1]=0),new r.A(c[0],c[1],d[0]-c[0],d[1]-c[1])},t.prototype._calculateLength=function(){var t=this.data,e=this._len,n=this._ux,i=this._uy,r=0,o=0,a=0,u=0
this._pathSegLen||(this._pathSegLen=[])
for(var h=this._pathSegLen,c=0,d=0,p=0;p<e;){var f=t[p++],x=1===p
x&&(a=r=t[p],u=o=t[p+1])
var w=-1
switch(f){case l.M:r=a=t[p++],o=u=t[p++]
break
case l.L:var A=t[p++],S=(I=t[p++])-o;(_(z=A-r)>n||_(S)>i||p===e-1)&&(w=Math.sqrt(z*z+S*S),r=A,o=I)
break
case l.C:var M=t[p++],T=t[p++],I=(A=t[p++],t[p++]),C=t[p++],D=t[p++]
w=(0,s.h0)(r,o,M,T,A,I,C,D,10),r=C,o=D
break
case l.Q:M=t[p++],T=t[p++],A=t[p++],I=t[p++],w=(0,s.d8)(r,o,M,T,A,I,10),r=A,o=I
break
case l.A:var k=t[p++],L=t[p++],P=t[p++],O=t[p++],N=t[p++],R=t[p++],E=R+N
p+=1,x&&(a=v(N)*P+k,u=m(N)*O+L),w=y(P,O)*g(b,Math.abs(R)),r=v(E)*P+k,o=m(E)*O+L
break
case l.R:a=r=t[p++],u=o=t[p++],w=2*t[p++]+2*t[p++]
break
case l.Z:var z=a-r
S=u-o,w=Math.sqrt(z*z+S*S),r=a,o=u}w>=0&&(h[d++]=w,c+=w)}return this._pathLen=c,c},t.prototype.rebuildPath=function(t,e){var n,i,r,o,a,c,d,p,f,x,b=this.data,w=this._ux,A=this._uy,S=this._len,M=e<1,T=0,I=0,C=0
if(!M||(this._pathSegLen||this._calculateLength(),d=this._pathSegLen,p=e*this._pathLen))t:for(var D=0;D<S;){var k=b[D++],L=1===D
switch(L&&(n=r=b[D],i=o=b[D+1]),k!==l.L&&C>0&&(t.lineTo(f,x),C=0),k){case l.M:n=r=b[D++],i=o=b[D++],t.moveTo(r,o)
break
case l.L:a=b[D++],c=b[D++]
var P=_(a-r),O=_(c-o)
if(P>w||O>A){if(M){if(T+(it=d[I++])>p){var N=(p-T)/it
t.lineTo(r*(1-N)+a*N,o*(1-N)+c*N)
break t}T+=it}t.lineTo(a,c),r=a,o=c,C=0}else{var R=P*P+O*O
R>C&&(f=a,x=c,C=R)}break
case l.C:var E=b[D++],z=b[D++],B=b[D++],V=b[D++],F=b[D++],W=b[D++]
if(M){if(T+(it=d[I++])>p){N=(p-T)/it,(0,s.YT)(r,E,B,F,N,u),(0,s.YT)(o,z,V,W,N,h),t.bezierCurveTo(u[1],h[1],u[2],h[2],u[3],h[3])
break t}T+=it}t.bezierCurveTo(E,z,B,V,F,W),r=F,o=W
break
case l.Q:if(E=b[D++],z=b[D++],B=b[D++],V=b[D++],M){if(T+(it=d[I++])>p){N=(p-T)/it,(0,s.kx)(r,E,B,N,u),(0,s.kx)(o,z,V,N,h),t.quadraticCurveTo(u[1],h[1],u[2],h[2])
break t}T+=it}t.quadraticCurveTo(E,z,B,V),r=B,o=V
break
case l.A:var H=b[D++],G=b[D++],j=b[D++],X=b[D++],Y=b[D++],U=b[D++],Z=b[D++],$=!b[D++],q=j>X?j:X,K=_(j-X)>.001,Q=Y+U,J=!1
if(M&&(T+(it=d[I++])>p&&(Q=Y+U*(p-T)/it,J=!0),T+=it),K&&t.ellipse?t.ellipse(H,G,j,X,Z,Y,Q,$):t.arc(H,G,q,Y,Q,$),J)break t
L&&(n=v(Y)*j+H,i=m(Y)*X+G),r=v(Q)*j+H,o=m(Q)*X+G
break
case l.R:n=r=b[D],i=o=b[D+1],a=b[D++],c=b[D++]
var tt=b[D++],et=b[D++]
if(M){if(T+(it=d[I++])>p){var nt=p-T
t.moveTo(a,c),t.lineTo(a+g(nt,tt),c),(nt-=tt)>0&&t.lineTo(a+tt,c+g(nt,et)),(nt-=et)>0&&t.lineTo(a+y(tt-nt,0),c+et),(nt-=tt)>0&&t.lineTo(a,c+y(et-nt,0))
break t}T+=it}t.rect(a,c,tt,et)
break
case l.Z:if(M){var it
if(T+(it=d[I++])>p){N=(p-T)/it,t.lineTo(r*(1-N)+n*N,o*(1-N)+i*N)
break t}T+=it}t.closePath(),r=n,o=i}}},t.prototype.clone=function(){var e=new t,n=this.data
return e.data=n.slice?n.slice():Array.prototype.slice.call(n),e._len=this._len,e},t.CMD=l,t.initDefaultProps=((e=t.prototype)._saveData=!0,e._ux=0,e._uy=0,e._pendingPtDist=0,void(e._version=0)),t}()},1655:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(){function t(t,e){this.x=t||0,this.y=e||0}return t.prototype.copy=function(t){return this.x=t.x,this.y=t.y,this},t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.set=function(t,e){return this.x=t,this.y=e,this},t.prototype.equal=function(t){return t.x===this.x&&t.y===this.y},t.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},t.prototype.scale=function(t){this.x*=t,this.y*=t},t.prototype.scaleAndAdd=function(t,e){this.x+=t.x*e,this.y+=t.y*e},t.prototype.sub=function(t){return this.x-=t.x,this.y-=t.y,this},t.prototype.dot=function(t){return this.x*t.x+this.y*t.y},t.prototype.len=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},t.prototype.lenSquare=function(){return this.x*this.x+this.y*this.y},t.prototype.normalize=function(){var t=this.len()
return this.x/=t,this.y/=t,this},t.prototype.distance=function(t){var e=this.x-t.x,n=this.y-t.y
return Math.sqrt(e*e+n*n)},t.prototype.distanceSquare=function(t){var e=this.x-t.x,n=this.y-t.y
return e*e+n*n},t.prototype.negate=function(){return this.x=-this.x,this.y=-this.y,this},t.prototype.transform=function(t){if(t){var e=this.x,n=this.y
return this.x=t[0]*e+t[2]*n+t[4],this.y=t[1]*e+t[3]*n+t[5],this}},t.prototype.toArray=function(t){return t[0]=this.x,t[1]=this.y,t},t.prototype.fromArray=function(t){this.x=t[0],this.y=t[1]},t.set=function(t,e,n){t.x=e,t.y=n},t.copy=function(t,e){t.x=e.x,t.y=e.y},t.len=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},t.lenSquare=function(t){return t.x*t.x+t.y*t.y},t.dot=function(t,e){return t.x*e.x+t.y*e.y},t.add=function(t,e,n){t.x=e.x+n.x,t.y=e.y+n.y},t.sub=function(t,e,n){t.x=e.x-n.x,t.y=e.y-n.y},t.scale=function(t,e,n){t.x=e.x*n,t.y=e.y*n},t.scaleAndAdd=function(t,e,n,i){t.x=e.x+n.x*i,t.y=e.y+n.y*i},t.lerp=function(t,e,n,i){var r=1-i
t.x=r*e.x+i*n.x,t.y=r*e.y+i*n.y},t}()},7157:(t,e,n)=>{n.d(e,{Ay:()=>p,Wx:()=>d})
var i=n(7432),r=n(1150),o=i.D_
function a(t){return t>5e-5||t<-5e-5}var s=[],l=[],u=i.vt(),h=Math.abs,c=function(){function t(){}var e
return t.prototype.getLocalTransform=function(e){return t.getLocalTransform(this,e)},t.prototype.setPosition=function(t){this.x=t[0],this.y=t[1]},t.prototype.setScale=function(t){this.scaleX=t[0],this.scaleY=t[1]},t.prototype.setSkew=function(t){this.skewX=t[0],this.skewY=t[1]},t.prototype.setOrigin=function(t){this.originX=t[0],this.originY=t[1]},t.prototype.needLocalTransform=function(){return a(this.rotation)||a(this.x)||a(this.y)||a(this.scaleX-1)||a(this.scaleY-1)||a(this.skewX)||a(this.skewY)},t.prototype.updateTransform=function(){var t=this.parent&&this.parent.transform,e=this.needLocalTransform(),n=this.transform
e||t?(n=n||i.vt(),e?this.getLocalTransform(n):o(n),t&&(e?i.lK(n,t,n):i.C(n,t)),this.transform=n,this._resolveGlobalScaleRatio(n)):n&&(o(n),this.invTransform=null)},t.prototype._resolveGlobalScaleRatio=function(t){var e=this.globalScaleRatio
if(null!=e&&1!==e){this.getGlobalScale(s)
var n=s[0]<0?-1:1,r=s[1]<0?-1:1,o=((s[0]-n)*e+n)/s[0]||0,a=((s[1]-r)*e+r)/s[1]||0
t[0]*=o,t[1]*=o,t[2]*=a,t[3]*=a}this.invTransform=this.invTransform||i.vt(),i.B8(this.invTransform,t)},t.prototype.getComputedTransform=function(){for(var t=this,e=[];t;)e.push(t),t=t.parent
for(;t=e.pop();)t.updateTransform()
return this.transform},t.prototype.setLocalTransform=function(t){if(t){var e=t[0]*t[0]+t[1]*t[1],n=t[2]*t[2]+t[3]*t[3],i=Math.atan2(t[1],t[0]),r=Math.PI/2+i-Math.atan2(t[3],t[2])
n=Math.sqrt(n)*Math.cos(r),e=Math.sqrt(e),this.skewX=r,this.skewY=0,this.rotation=-i,this.x=+t[4],this.y=+t[5],this.scaleX=e,this.scaleY=n,this.originX=0,this.originY=0}},t.prototype.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform
t&&t.transform&&(t.invTransform=t.invTransform||i.vt(),i.lK(l,t.invTransform,e),e=l)
var n=this.originX,r=this.originY;(n||r)&&(u[4]=n,u[5]=r,i.lK(l,e,u),l[4]-=n,l[5]-=r,e=l),this.setLocalTransform(e)}},t.prototype.getGlobalScale=function(t){var e=this.transform
return t=t||[],e?(t[0]=Math.sqrt(e[0]*e[0]+e[1]*e[1]),t[1]=Math.sqrt(e[2]*e[2]+e[3]*e[3]),e[0]<0&&(t[0]=-t[0]),e[3]<0&&(t[1]=-t[1]),t):(t[0]=1,t[1]=1,t)},t.prototype.transformCoordToLocal=function(t,e){var n=[t,e],i=this.invTransform
return i&&r.NW(n,n,i),n},t.prototype.transformCoordToGlobal=function(t,e){var n=[t,e],i=this.transform
return i&&r.NW(n,n,i),n},t.prototype.getLineScale=function(){var t=this.transform
return t&&h(t[0]-1)>1e-10&&h(t[3]-1)>1e-10?Math.sqrt(h(t[0]*t[3]-t[2]*t[1])):1},t.prototype.copyTransform=function(t){!function(t,e){for(var n=0;n<d.length;n++){var i=d[n]
t[i]=e[i]}}(this,t)},t.getLocalTransform=function(t,e){e=e||[]
var n=t.originX||0,r=t.originY||0,o=t.scaleX,a=t.scaleY,s=t.anchorX,l=t.anchorY,u=t.rotation||0,h=t.x,c=t.y,d=t.skewX?Math.tan(t.skewX):0,p=t.skewY?Math.tan(-t.skewY):0
if(n||r||s||l){var f=n+s,g=r+l
e[4]=-f*o-d*g*a,e[5]=-g*a-p*f*o}else e[4]=e[5]=0
return e[0]=o,e[3]=a,e[1]=p*o,e[2]=d*a,u&&i.e$(e,e,u),e[4]+=n+h,e[5]+=r+c,e},t.initDefaultProps=((e=t.prototype).scaleX=e.scaleY=e.globalScaleRatio=1,void(e.x=e.y=e.originX=e.originY=e.skewX=e.skewY=e.rotation=e.anchorX=e.anchorY=0)),t}(),d=["x","y","originX","originY","anchorX","anchorY","rotation","scaleX","scaleY","skewX","skewY"]
const p=c},5950:(t,e,n)=>{n.d(e,{$s:()=>_,BM:()=>v,Cr:()=>p,j6:()=>f,tW:()=>m})
var i=n(1150),r=n(3906),o=Math.min,a=Math.max,s=Math.sin,l=Math.cos,u=2*Math.PI,h=i.vt(),c=i.vt(),d=i.vt()
function p(t,e,n){if(0!==t.length){for(var i=t[0],r=i[0],s=i[0],l=i[1],u=i[1],h=1;h<t.length;h++)i=t[h],r=o(r,i[0]),s=a(s,i[0]),l=o(l,i[1]),u=a(u,i[1])
e[0]=r,e[1]=l,n[0]=s,n[1]=u}}function f(t,e,n,i,r,s){r[0]=o(t,n),r[1]=o(e,i),s[0]=a(t,n),s[1]=a(e,i)}var g=[],y=[]
function v(t,e,n,i,s,l,u,h,c,d){var p=r.lX,f=r.Yb,v=p(t,n,s,u,g)
c[0]=1/0,c[1]=1/0,d[0]=-1/0,d[1]=-1/0
for(var m=0;m<v;m++){var _=f(t,n,s,u,g[m])
c[0]=o(_,c[0]),d[0]=a(_,d[0])}for(v=p(e,i,l,h,y),m=0;m<v;m++){var x=f(e,i,l,h,y[m])
c[1]=o(x,c[1]),d[1]=a(x,d[1])}c[0]=o(t,c[0]),d[0]=a(t,d[0]),c[0]=o(u,c[0]),d[0]=a(u,d[0]),c[1]=o(e,c[1]),d[1]=a(e,d[1]),c[1]=o(h,c[1]),d[1]=a(h,d[1])}function m(t,e,n,i,s,l,u,h){var c=r.gC,d=r.k3,p=a(o(c(t,n,s),1),0),f=a(o(c(e,i,l),1),0),g=d(t,n,s,p),y=d(e,i,l,f)
u[0]=o(t,s,g),u[1]=o(e,l,y),h[0]=a(t,s,g),h[1]=a(e,l,y)}function _(t,e,n,r,o,a,p,f,g){var y=i.jk,v=i.T9,m=Math.abs(o-a)
if(m%u<1e-4&&m>1e-4)return f[0]=t-n,f[1]=e-r,g[0]=t+n,void(g[1]=e+r)
if(h[0]=l(o)*n+t,h[1]=s(o)*r+e,c[0]=l(a)*n+t,c[1]=s(a)*r+e,y(f,h,c),v(g,h,c),(o%=u)<0&&(o+=u),(a%=u)<0&&(a+=u),o>a&&!p?a+=u:o<a&&p&&(o+=u),p){var _=a
a=o,o=_}for(var x=0;x<a;x+=Math.PI/2)x>o&&(d[0]=l(x)*n+t,d[1]=s(x)*r+e,y(f,d,f),v(g,d,g))}},3906:(t,e,n)=>{n.d(e,{Et:()=>x,YT:()=>_,Yb:()=>g,_E:()=>v,d8:()=>C,gC:()=>M,h0:()=>b,k3:()=>w,kh:()=>I,kx:()=>T,lX:()=>m,qY:()=>S,rD:()=>y,z7:()=>A})
var i=n(1150),r=Math.pow,o=Math.sqrt,a=1e-8,s=1e-4,l=o(3),u=1/3,h=(0,i.vt)(),c=(0,i.vt)(),d=(0,i.vt)()
function p(t){return t>-a&&t<a}function f(t){return t>a||t<-a}function g(t,e,n,i,r){var o=1-r
return o*o*(o*t+3*r*e)+r*r*(r*i+3*o*n)}function y(t,e,n,i,r){var o=1-r
return 3*(((e-t)*o+2*(n-e)*r)*o+(i-n)*r*r)}function v(t,e,n,i,a,s){var h=i+3*(e-n)-t,c=3*(n-2*e+t),d=3*(e-t),f=t-a,g=c*c-3*h*d,y=c*d-9*h*f,v=d*d-3*c*f,m=0
if(p(g)&&p(y))p(c)?s[0]=0:(D=-d/c)>=0&&D<=1&&(s[m++]=D)
else{var _=y*y-4*g*v
if(p(_)){var x=y/g,b=-x/2;(D=-c/h+x)>=0&&D<=1&&(s[m++]=D),b>=0&&b<=1&&(s[m++]=b)}else if(_>0){var w=o(_),A=g*c+1.5*h*(-y+w),S=g*c+1.5*h*(-y-w);(D=(-c-((A=A<0?-r(-A,u):r(A,u))+(S=S<0?-r(-S,u):r(S,u))))/(3*h))>=0&&D<=1&&(s[m++]=D)}else{var M=(2*g*c-3*h*y)/(2*o(g*g*g)),T=Math.acos(M)/3,I=o(g),C=Math.cos(T),D=(-c-2*I*C)/(3*h),k=(b=(-c+I*(C+l*Math.sin(T)))/(3*h),(-c+I*(C-l*Math.sin(T)))/(3*h))
D>=0&&D<=1&&(s[m++]=D),b>=0&&b<=1&&(s[m++]=b),k>=0&&k<=1&&(s[m++]=k)}}return m}function m(t,e,n,i,r){var a=6*n-12*e+6*t,s=9*e+3*i-3*t-9*n,l=3*e-3*t,u=0
if(p(s))f(a)&&(c=-l/a)>=0&&c<=1&&(r[u++]=c)
else{var h=a*a-4*s*l
if(p(h))r[0]=-a/(2*s)
else if(h>0){var c,d=o(h),g=(-a-d)/(2*s);(c=(-a+d)/(2*s))>=0&&c<=1&&(r[u++]=c),g>=0&&g<=1&&(r[u++]=g)}}return u}function _(t,e,n,i,r,o){var a=(e-t)*r+t,s=(n-e)*r+e,l=(i-n)*r+n,u=(s-a)*r+a,h=(l-s)*r+s,c=(h-u)*r+u
o[0]=t,o[1]=a,o[2]=u,o[3]=c,o[4]=c,o[5]=h,o[6]=l,o[7]=i}function x(t,e,n,r,a,l,u,p,f,y,v){var m,_,x,b,w,A=.005,S=1/0
h[0]=f,h[1]=y
for(var M=0;M<1;M+=.05)c[0]=g(t,n,a,u,M),c[1]=g(e,r,l,p,M),(b=(0,i.oi)(h,c))<S&&(m=M,S=b)
S=1/0
for(var T=0;T<32&&!(A<s);T++)_=m-A,x=m+A,c[0]=g(t,n,a,u,_),c[1]=g(e,r,l,p,_),b=(0,i.oi)(c,h),_>=0&&b<S?(m=_,S=b):(d[0]=g(t,n,a,u,x),d[1]=g(e,r,l,p,x),w=(0,i.oi)(d,h),x<=1&&w<S?(m=x,S=w):A*=.5)
return v&&(v[0]=g(t,n,a,u,m),v[1]=g(e,r,l,p,m)),o(S)}function b(t,e,n,i,r,o,a,s,l){for(var u=t,h=e,c=0,d=1/l,p=1;p<=l;p++){var f=p*d,y=g(t,n,r,a,f),v=g(e,i,o,s,f),m=y-u,_=v-h
c+=Math.sqrt(m*m+_*_),u=y,h=v}return c}function w(t,e,n,i){var r=1-i
return r*(r*t+2*i*e)+i*i*n}function A(t,e,n,i){return 2*((1-i)*(e-t)+i*(n-e))}function S(t,e,n,i,r){var a=t-2*e+n,s=2*(e-t),l=t-i,u=0
if(p(a))f(s)&&(c=-l/s)>=0&&c<=1&&(r[u++]=c)
else{var h=s*s-4*a*l
if(p(h))(c=-s/(2*a))>=0&&c<=1&&(r[u++]=c)
else if(h>0){var c,d=o(h),g=(-s-d)/(2*a);(c=(-s+d)/(2*a))>=0&&c<=1&&(r[u++]=c),g>=0&&g<=1&&(r[u++]=g)}}return u}function M(t,e,n){var i=t+n-2*e
return 0===i?.5:(t-e)/i}function T(t,e,n,i,r){var o=(e-t)*i+t,a=(n-e)*i+e,s=(a-o)*i+o
r[0]=t,r[1]=o,r[2]=s,r[3]=s,r[4]=a,r[5]=n}function I(t,e,n,r,a,l,u,p,f){var g,y=.005,v=1/0
h[0]=u,h[1]=p
for(var m=0;m<1;m+=.05)c[0]=w(t,n,a,m),c[1]=w(e,r,l,m),(A=(0,i.oi)(h,c))<v&&(g=m,v=A)
v=1/0
for(var _=0;_<32&&!(y<s);_++){var x=g-y,b=g+y
c[0]=w(t,n,a,x),c[1]=w(e,r,l,x)
var A=(0,i.oi)(c,h)
if(x>=0&&A<v)g=x,v=A
else{d[0]=w(t,n,a,b),d[1]=w(e,r,l,b)
var S=(0,i.oi)(d,h)
b<=1&&S<v?(g=b,v=S):y*=.5}}return f&&(f[0]=w(t,n,a,g),f[1]=w(e,r,l,g)),o(v)}function C(t,e,n,i,r,o,a){for(var s=t,l=e,u=0,h=1/a,c=1;c<=a;c++){var d=c*h,p=w(t,n,r,d),f=w(e,i,o,d),g=p-s,y=f-l
u+=Math.sqrt(g*g+y*y),s=p,l=f}return u}},7028:(t,e,n)=>{n.d(e,{Me:()=>f,ot:()=>c,oq:()=>h,lJ:()=>u})
var i=n(9714),r=Math.log(2)
function o(t,e,n,i,a,s){var l=i+"-"+a,u=t.length
if(s.hasOwnProperty(l))return s[l]
if(1===e){var h=Math.round(Math.log((1<<u)-1&~a)/r)
return t[n][h]}for(var c=i|1<<n,d=n+1;i&1<<d;)d++
for(var p=0,f=0,g=0;f<u;f++){var y=1<<f
y&a||(p+=(g%2?-1:1)*t[n][f]*o(t,e-1,d,c,a|y,s),g++)}return s[l]=p,p}function a(t,e){var n=[[t[0],t[1],1,0,0,0,-e[0]*t[0],-e[0]*t[1]],[0,0,0,t[0],t[1],1,-e[1]*t[0],-e[1]*t[1]],[t[2],t[3],1,0,0,0,-e[2]*t[2],-e[2]*t[3]],[0,0,0,t[2],t[3],1,-e[3]*t[2],-e[3]*t[3]],[t[4],t[5],1,0,0,0,-e[4]*t[4],-e[4]*t[5]],[0,0,0,t[4],t[5],1,-e[5]*t[4],-e[5]*t[5]],[t[6],t[7],1,0,0,0,-e[6]*t[6],-e[6]*t[7]],[0,0,0,t[6],t[7],1,-e[7]*t[6],-e[7]*t[7]]],i={},r=o(n,8,0,0,0,i)
if(0!==r){for(var a=[],s=0;s<8;s++)for(var l=0;l<8;l++)null==a[l]&&(a[l]=0),a[l]+=((s+l)%2?-1:1)*o(n,7,0===s?1:0,1<<s,1<<l,i)/r*e[s]
return function(t,e,n){var i=e*a[6]+n*a[7]+1
t[0]=(e*a[0]+n*a[1]+a[2])/i,t[1]=(e*a[3]+n*a[4]+a[5])/i}}}var s="___zrEVENTSAVED",l=[]
function u(t,e,n,i,r){return h(l,e,i,r,!0)&&h(t,n,l[0],l[1])}function h(t,e,n,r,o){if(e.getBoundingClientRect&&i.A.domSupported&&!c(e)){var l=e[s]||(e[s]={}),u=function(t,e){var n=e.markers
if(n)return n
n=e.markers=[]
for(var i=["left","right"],r=["top","bottom"],o=0;o<4;o++){var a=document.createElement("div"),s=o%2,l=(o>>1)%2
a.style.cssText=["position: absolute","visibility: hidden","padding: 0","margin: 0","border-width: 0","user-select: none","width:0","height:0",i[s]+":0",r[l]+":0",i[1-s]+":auto",r[1-l]+":auto",""].join("!important;"),t.appendChild(a),n.push(a)}return n}(e,l),h=function(t,e,n){for(var i=n?"invTrans":"trans",r=e[i],o=e.srcCoords,s=[],l=[],u=!0,h=0;h<4;h++){var c=t[h].getBoundingClientRect(),d=2*h,p=c.left,f=c.top
s.push(p,f),u=u&&o&&p===o[d]&&f===o[d+1],l.push(t[h].offsetLeft,t[h].offsetTop)}return u&&r?r:(e.srcCoords=s,e[i]=n?a(l,s):a(s,l))}(u,l,o)
if(h)return h(t,n,r),!0}return!1}function c(t){return"CANVAS"===t.nodeName.toUpperCase()}var d=/([&<>"'])/g,p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}
function f(t){return null==t?"":(t+"").replace(d,(function(t,e){return p[e]}))}},9714:(t,e,n)=>{n.d(e,{A:()=>o})
var i=function(){this.firefox=!1,this.ie=!1,this.edge=!1,this.newEdge=!1,this.weChat=!1},r=new function(){this.browser=new i,this.node=!1,this.wxa=!1,this.worker=!1,this.svgSupported=!1,this.touchEventsSupported=!1,this.pointerEventsSupported=!1,this.domSupported=!1,this.transformSupported=!1,this.transform3dSupported=!1,this.hasGlobalWindow="undefined"!=typeof window}
"object"==typeof wx&&"function"==typeof wx.getSystemInfoSync?(r.wxa=!0,r.touchEventsSupported=!0):"undefined"==typeof document&&"undefined"!=typeof self?r.worker=!0:"undefined"==typeof navigator||0===navigator.userAgent.indexOf("Node.js")?(r.node=!0,r.svgSupported=!0):function(t,e){var n=e.browser,i=t.match(/Firefox\/([\d.]+)/),r=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),o=t.match(/Edge?\/([\d.]+)/),a=/micromessenger/i.test(t)
i&&(n.firefox=!0,n.version=i[1]),r&&(n.ie=!0,n.version=r[1]),o&&(n.edge=!0,n.version=o[1],n.newEdge=+o[1].split(".")[0]>18),a&&(n.weChat=!0),e.svgSupported="undefined"!=typeof SVGRect,e.touchEventsSupported="ontouchstart"in window&&!n.ie&&!n.edge,e.pointerEventsSupported="onpointerdown"in window&&(n.edge||n.ie&&+n.version>=11),e.domSupported="undefined"!=typeof document
var s=document.documentElement.style
e.transform3dSupported=(n.ie&&"transition"in s||n.edge||"WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix||"MozPerspective"in s)&&!("OTransition"in s),e.transformSupported=e.transform3dSupported||n.ie&&+n.version>=9}(navigator.userAgent,r)
const o=r},6885:(t,e,n)=>{n.d(e,{W5:()=>g,Yo:()=>l,ds:()=>f,e0:()=>c,f:()=>p,mK:()=>h,q2:()=>d})
var i=n(9714),r=n(7028),o=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,a=[],s=i.A.browser.firefox&&+i.A.browser.version.split(".")[0]<39
function l(t,e,n,i){return n=n||{},i?u(t,e,n):s&&null!=e.layerX&&e.layerX!==e.offsetX?(n.zrX=e.layerX,n.zrY=e.layerY):null!=e.offsetX?(n.zrX=e.offsetX,n.zrY=e.offsetY):u(t,e,n),n}function u(t,e,n){if(i.A.domSupported&&t.getBoundingClientRect){var o=e.clientX,s=e.clientY
if((0,r.ot)(t)){var l=t.getBoundingClientRect()
return n.zrX=o-l.left,void(n.zrY=s-l.top)}if((0,r.oq)(a,t,o,s))return n.zrX=a[0],void(n.zrY=a[1])}n.zrX=n.zrY=0}function h(t){return t||window.event}function c(t,e,n){if(null!=(e=h(e)).zrX)return e
var i=e.type
if(i&&i.indexOf("touch")>=0){var r="touchend"!==i?e.targetTouches[0]:e.changedTouches[0]
r&&l(t,r,e,n)}else{l(t,e,e,n)
var a=function(t){var e=t.wheelDelta
if(e)return e
var n=t.deltaX,i=t.deltaY
return null==n||null==i?e:3*(0!==i?Math.abs(i):Math.abs(n))*(i>0?-1:i<0?1:n>0?-1:1)}(e)
e.zrDelta=a?a/120:-(e.detail||0)/3}var s=e.button
return null==e.which&&void 0!==s&&o.test(e.type)&&(e.which=1&s?1:2&s?3:4&s?2:0),e}function d(t,e,n,i){t.addEventListener(e,n,i)}function p(t,e,n,i){t.removeEventListener(e,n,i)}var f=function(t){t.preventDefault(),t.stopPropagation(),t.cancelBubble=!0}
function g(t){return 2===t.which||3===t.which}},7432:(t,e,n)=>{function i(){return[1,0,0,1,0,0]}function r(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function o(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function a(t,e,n){var i=e[0]*n[0]+e[2]*n[1],r=e[1]*n[0]+e[3]*n[1],o=e[0]*n[2]+e[2]*n[3],a=e[1]*n[2]+e[3]*n[3],s=e[0]*n[4]+e[2]*n[5]+e[4],l=e[1]*n[4]+e[3]*n[5]+e[5]
return t[0]=i,t[1]=r,t[2]=o,t[3]=a,t[4]=s,t[5]=l,t}function s(t,e,n){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+n[0],t[5]=e[5]+n[1],t}function l(t,e,n,i){void 0===i&&(i=[0,0])
var r=e[0],o=e[2],a=e[4],s=e[1],l=e[3],u=e[5],h=Math.sin(n),c=Math.cos(n)
return t[0]=r*c+s*h,t[1]=-r*h+s*c,t[2]=o*c+l*h,t[3]=-o*h+c*l,t[4]=c*(a-i[0])+h*(u-i[1])+i[0],t[5]=c*(u-i[1])-h*(a-i[0])+i[1],t}function u(t,e,n){var i=n[0],r=n[1]
return t[0]=e[0]*i,t[1]=e[1]*r,t[2]=e[2]*i,t[3]=e[3]*r,t[4]=e[4]*i,t[5]=e[5]*r,t}function h(t,e){var n=e[0],i=e[2],r=e[4],o=e[1],a=e[3],s=e[5],l=n*a-o*i
return l?(l=1/l,t[0]=a*l,t[1]=-o*l,t[2]=-i*l,t[3]=n*l,t[4]=(i*s-a*r)*l,t[5]=(o*r-n*s)*l,t):null}n.d(e,{B8:()=>h,C:()=>o,D_:()=>r,Tl:()=>s,e$:()=>l,hs:()=>u,lK:()=>a,vt:()=>i})},1854:(t,e,n)=>{n.d(e,{OH:()=>a,gI:()=>o,yh:()=>l})
var i,r,o=12,a=o+"px sans-serif",s=function(){var t={}
if("undefined"==typeof JSON)return t
for(var e=0;e<95;e++){var n=String.fromCharCode(e+32),i=("007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N".charCodeAt(e)-20)/100
t[n]=i}return t}(),l={createCanvas:function(){return"undefined"!=typeof document&&document.createElement("canvas")},measureText:function(t,e){if(!i){var n=l.createCanvas()
i=n&&n.getContext("2d")}if(i)return r!==e&&(r=i.font=e||a),i.measureText(t)
t=t||""
var u=/((?:\d+)?\.?\d*)px/.exec(e=e||a),h=u&&+u[1]||o,c=0
if(e.indexOf("mono")>=0)c=h*t.length
else for(var d=0;d<t.length;d++){var p=s[t[d]]
c+=null==p?h:p*h}return{width:c}},loadImage:function(t,e,n){var i=new Image
return i.onload=e,i.onerror=n,i.src=t,i}}},4891:(t,e,n)=>{n.d(e,{A:()=>u})
var i=32,r=7
function o(t,e,n,i){var r=e+1
if(r===n)return 1
if(i(t[r++],t[e])<0){for(;r<n&&i(t[r],t[r-1])<0;)r++
!function(t,e,n){for(n--;e<n;){var i=t[e]
t[e++]=t[n],t[n--]=i}}(t,e,r)}else for(;r<n&&i(t[r],t[r-1])>=0;)r++
return r-e}function a(t,e,n,i,r){for(i===e&&i++;i<n;i++){for(var o,a=t[i],s=e,l=i;s<l;)r(a,t[o=s+l>>>1])<0?l=o:s=o+1
var u=i-s
switch(u){case 3:t[s+3]=t[s+2]
case 2:t[s+2]=t[s+1]
case 1:t[s+1]=t[s]
break
default:for(;u>0;)t[s+u]=t[s+u-1],u--}t[s]=a}}function s(t,e,n,i,r,o){var a=0,s=0,l=1
if(o(t,e[n+r])>0){for(s=i-r;l<s&&o(t,e[n+r+l])>0;)a=l,(l=1+(l<<1))<=0&&(l=s)
l>s&&(l=s),a+=r,l+=r}else{for(s=r+1;l<s&&o(t,e[n+r-l])<=0;)a=l,(l=1+(l<<1))<=0&&(l=s)
l>s&&(l=s)
var u=a
a=r-l,l=r-u}for(a++;a<l;){var h=a+(l-a>>>1)
o(t,e[n+h])>0?a=h+1:l=h}return l}function l(t,e,n,i,r,o){var a=0,s=0,l=1
if(o(t,e[n+r])<0){for(s=r+1;l<s&&o(t,e[n+r-l])<0;)a=l,(l=1+(l<<1))<=0&&(l=s)
l>s&&(l=s)
var u=a
a=r-l,l=r-u}else{for(s=i-r;l<s&&o(t,e[n+r+l])>=0;)a=l,(l=1+(l<<1))<=0&&(l=s)
l>s&&(l=s),a+=r,l+=r}for(a++;a<l;){var h=a+(l-a>>>1)
o(t,e[n+h])<0?l=h:a=h+1}return l}function u(t,e,n,u){n||(n=0),u||(u=t.length)
var h=u-n
if(!(h<2)){var c=0
if(h<i)a(t,n,u,n+(c=o(t,n,u,e)),e)
else{var d=function(t,e){var n,i,o=r,a=0,u=[]
function h(h){var c=n[h],d=i[h],p=n[h+1],f=i[h+1]
i[h]=d+f,h===a-3&&(n[h+1]=n[h+2],i[h+1]=i[h+2]),a--
var g=l(t[p],t,c,d,0,e)
c+=g,0!=(d-=g)&&0!==(f=s(t[c+d-1],t,p,f,f-1,e))&&(d<=f?function(n,i,a,h){var c=0
for(c=0;c<i;c++)u[c]=t[n+c]
var d=0,p=a,f=n
if(t[f++]=t[p++],0!=--h)if(1!==i){for(var g,y,v,m=o;;){g=0,y=0,v=!1
do{if(e(t[p],u[d])<0){if(t[f++]=t[p++],y++,g=0,0==--h){v=!0
break}}else if(t[f++]=u[d++],g++,y=0,1==--i){v=!0
break}}while((g|y)<m)
if(v)break
do{if(0!==(g=l(t[p],u,d,i,0,e))){for(c=0;c<g;c++)t[f+c]=u[d+c]
if(f+=g,d+=g,(i-=g)<=1){v=!0
break}}if(t[f++]=t[p++],0==--h){v=!0
break}if(0!==(y=s(u[d],t,p,h,0,e))){for(c=0;c<y;c++)t[f+c]=t[p+c]
if(f+=y,p+=y,0==(h-=y)){v=!0
break}}if(t[f++]=u[d++],1==--i){v=!0
break}m--}while(g>=r||y>=r)
if(v)break
m<0&&(m=0),m+=2}if((o=m)<1&&(o=1),1===i){for(c=0;c<h;c++)t[f+c]=t[p+c]
t[f+h]=u[d]}else{if(0===i)throw new Error
for(c=0;c<i;c++)t[f+c]=u[d+c]}}else{for(c=0;c<h;c++)t[f+c]=t[p+c]
t[f+h]=u[d]}else for(c=0;c<i;c++)t[f+c]=u[d+c]}(c,d,p,f):function(n,i,a,h){var c=0
for(c=0;c<h;c++)u[c]=t[a+c]
var d=n+i-1,p=h-1,f=a+h-1,g=0,y=0
if(t[f--]=t[d--],0!=--i)if(1!==h){for(var v=o;;){var m=0,_=0,x=!1
do{if(e(u[p],t[d])<0){if(t[f--]=t[d--],m++,_=0,0==--i){x=!0
break}}else if(t[f--]=u[p--],_++,m=0,1==--h){x=!0
break}}while((m|_)<v)
if(x)break
do{if(0!=(m=i-l(u[p],t,n,i,i-1,e))){for(i-=m,y=1+(f-=m),g=1+(d-=m),c=m-1;c>=0;c--)t[y+c]=t[g+c]
if(0===i){x=!0
break}}if(t[f--]=u[p--],1==--h){x=!0
break}if(0!=(_=h-s(t[d],u,0,h,h-1,e))){for(h-=_,y=1+(f-=_),g=1+(p-=_),c=0;c<_;c++)t[y+c]=u[g+c]
if(h<=1){x=!0
break}}if(t[f--]=t[d--],0==--i){x=!0
break}v--}while(m>=r||_>=r)
if(x)break
v<0&&(v=0),v+=2}if((o=v)<1&&(o=1),1===h){for(y=1+(f-=i),g=1+(d-=i),c=i-1;c>=0;c--)t[y+c]=t[g+c]
t[f]=u[p]}else{if(0===h)throw new Error
for(g=f-(h-1),c=0;c<h;c++)t[g+c]=u[c]}}else{for(y=1+(f-=i),g=1+(d-=i),c=i-1;c>=0;c--)t[y+c]=t[g+c]
t[f]=u[p]}else for(g=f-(h-1),c=0;c<h;c++)t[g+c]=u[c]}(c,d,p,f))}return n=[],i=[],{mergeRuns:function(){for(;a>1;){var t=a-2
if(t>=1&&i[t-1]<=i[t]+i[t+1]||t>=2&&i[t-2]<=i[t]+i[t-1])i[t-1]<i[t+1]&&t--
else if(i[t]>i[t+1])break
h(t)}},forceMergeRuns:function(){for(;a>1;){var t=a-2
t>0&&i[t-1]<i[t+1]&&t--,h(t)}},pushRun:function(t,e){n[a]=t,i[a]=e,a+=1}}}(t,e),p=function(t){for(var e=0;t>=i;)e|=1&t,t>>=1
return t+e}(h)
do{if((c=o(t,n,u,e))<p){var f=h
f>p&&(f=p),a(t,n,n+f,n+c,e),c=f}d.pushRun(n,c),d.mergeRuns(),h-=c,n+=c}while(0!==h)
d.forceMergeRuns()}}}},8301:(t,e,n)=>{n.d(e,{$3:()=>lt,B:()=>A,Bq:()=>K,C7:()=>H,En:()=>J,Et:()=>z,Gv:()=>B,HE:()=>G,HP:()=>k,Je:()=>X,Kg:()=>R,Lh:()=>E,NT:()=>b,Os:()=>y,QX:()=>$,TS:()=>C,Tj:()=>I,Tn:()=>N,WV:()=>U,X$:()=>x,Xj:()=>M,Yp:()=>j,__:()=>T,bZ:()=>Y,cF:()=>P,co:()=>S,cy:()=>O,di:()=>Z,ed:()=>at,h1:()=>_,iq:()=>st,iu:()=>F,lI:()=>ht,lQ:()=>ut,n_:()=>W,nt:()=>rt,o8:()=>m,oI:()=>L,pb:()=>D,qh:()=>w,vA:()=>q,vV:()=>v,yB:()=>ot})
var i=n(1854),r=C(["Function","RegExp","Date","Error","CanvasGradient","CanvasPattern","Image","Canvas"],(function(t,e){return t["[object "+e+"]"]=!0,t}),{}),o=C(["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64"],(function(t,e){return t["[object "+e+"Array]"]=!0,t}),{}),a=Object.prototype.toString,s=Array.prototype,l=s.forEach,u=s.filter,h=s.slice,c=s.map,d=function(){}.constructor,p=d?d.prototype:null,f="__proto__",g=2311
function y(){return g++}function v(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
"undefined"!=typeof console&&console.error.apply(console,t)}function m(t){if(null==t||"object"!=typeof t)return t
var e=t,n=a.call(t)
if("[object Array]"===n){if(!tt(t)){e=[]
for(var i=0,s=t.length;i<s;i++)e[i]=m(t[i])}}else if(o[n]){if(!tt(t)){var l=t.constructor
if(l.from)e=l.from(t)
else for(e=new l(t.length),i=0,s=t.length;i<s;i++)e[i]=t[i]}}else if(!r[n]&&!tt(t)&&!W(t))for(var u in e={},t)t.hasOwnProperty(u)&&u!==f&&(e[u]=m(t[u]))
return e}function _(t,e,n){if(!B(e)||!B(t))return n?m(e):t
for(var i in e)if(e.hasOwnProperty(i)&&i!==f){var r=t[i],o=e[i]
!B(o)||!B(r)||O(o)||O(r)||W(o)||W(r)||V(o)||V(r)||tt(o)||tt(r)?!n&&i in t||(t[i]=m(e[i])):_(r,o,n)}return t}function x(t,e){if(Object.assign)Object.assign(t,e)
else for(var n in e)e.hasOwnProperty(n)&&n!==f&&(t[n]=e[n])
return t}function b(t,e,n){for(var i=k(e),r=0;r<i.length;r++){var o=i[r];(n?null!=e[o]:null==t[o])&&(t[o]=e[o])}return t}function w(t,e){if(t){if(t.indexOf)return t.indexOf(e)
for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n}return-1}function A(t,e){var n=t.prototype
function i(){}for(var r in i.prototype=e.prototype,t.prototype=new i,n)n.hasOwnProperty(r)&&(t.prototype[r]=n[r])
t.prototype.constructor=t,t.superClass=e}function S(t,e,n){if(t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,Object.getOwnPropertyNames)for(var i=Object.getOwnPropertyNames(e),r=0;r<i.length;r++){var o=i[r]
"constructor"!==o&&(n?null!=e[o]:null==t[o])&&(t[o]=e[o])}else b(t,e,n)}function M(t){return!!t&&"string"!=typeof t&&"number"==typeof t.length}function T(t,e,n){if(t&&e)if(t.forEach&&t.forEach===l)t.forEach(e,n)
else if(t.length===+t.length)for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i,t)
else for(var o in t)t.hasOwnProperty(o)&&e.call(n,t[o],o,t)}function I(t,e,n){if(!t)return[]
if(!e)return Z(t)
if(t.map&&t.map===c)return t.map(e,n)
for(var i=[],r=0,o=t.length;r<o;r++)i.push(e.call(n,t[r],r,t))
return i}function C(t,e,n,i){if(t&&e){for(var r=0,o=t.length;r<o;r++)n=e.call(i,n,t[r],r,t)
return n}}function D(t,e,n){if(!t)return[]
if(!e)return Z(t)
if(t.filter&&t.filter===u)return t.filter(e,n)
for(var i=[],r=0,o=t.length;r<o;r++)e.call(n,t[r],r,t)&&i.push(t[r])
return i}function k(t){if(!t)return[]
if(Object.keys)return Object.keys(t)
var e=[]
for(var n in t)t.hasOwnProperty(n)&&e.push(n)
return e}i.yh.createCanvas
var L=p&&N(p.bind)?p.call.bind(p.bind):function(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i]
return function(){return t.apply(e,n.concat(h.call(arguments)))}}
function P(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
return function(){return t.apply(this,e.concat(h.call(arguments)))}}function O(t){return Array.isArray?Array.isArray(t):"[object Array]"===a.call(t)}function N(t){return"function"==typeof t}function R(t){return"string"==typeof t}function E(t){return"[object String]"===a.call(t)}function z(t){return"number"==typeof t}function B(t){var e=typeof t
return"function"===e||!!t&&"object"===e}function V(t){return!!r[a.call(t)]}function F(t){return!!o[a.call(t)]}function W(t){return"object"==typeof t&&"number"==typeof t.nodeType&&"object"==typeof t.ownerDocument}function H(t){return null!=t.colorStops}function G(t){return null!=t.image}function j(t){return t!=t}function X(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
for(var n=0,i=t.length;n<i;n++)if(null!=t[n])return t[n]}function Y(t,e){return null!=t?t:e}function U(t,e,n){return null!=t?t:null!=e?e:n}function Z(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
return h.apply(t,e)}function $(t){if("number"==typeof t)return[t,t,t,t]
var e=t.length
return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t}function q(t,e){if(!t)throw new Error(e)}function K(t){return null==t?null:"function"==typeof t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}var Q="__ec_primitive__"
function J(t){t[Q]=!0}function tt(t){return t[Q]}var et=function(){function t(){this.data={}}return t.prototype.delete=function(t){var e=this.has(t)
return e&&delete this.data[t],e},t.prototype.has=function(t){return this.data.hasOwnProperty(t)},t.prototype.get=function(t){return this.data[t]},t.prototype.set=function(t,e){return this.data[t]=e,this},t.prototype.keys=function(){return k(this.data)},t.prototype.forEach=function(t){var e=this.data
for(var n in e)e.hasOwnProperty(n)&&t(e[n],n)},t}(),nt="function"==typeof Map,it=function(){function t(e){var n=O(e)
this.data=nt?new Map:new et
var i=this
function r(t,e){n?i.set(t,e):i.set(e,t)}e instanceof t?e.each(r):e&&T(e,r)}return t.prototype.hasKey=function(t){return this.data.has(t)},t.prototype.get=function(t){return this.data.get(t)},t.prototype.set=function(t,e){return this.data.set(t,e),e},t.prototype.each=function(t,e){this.data.forEach((function(n,i){t.call(e,n,i)}))},t.prototype.keys=function(){var t=this.data.keys()
return nt?Array.from(t):t},t.prototype.removeKey=function(t){this.data.delete(t)},t}()
function rt(t){return new it(t)}function ot(t,e){for(var n=new t.constructor(t.length+e.length),i=0;i<t.length;i++)n[i]=t[i]
var r=t.length
for(i=0;i<e.length;i++)n[i+r]=e[i]
return n}function at(t,e){var n
if(Object.create)n=Object.create(t)
else{var i=function(){}
i.prototype=t,n=new i}return e&&x(n,e),n}function st(t){var e=t.style
e.webkitUserSelect="none",e.userSelect="none",e.webkitTapHighlightColor="rgba(0,0,0,0)",e["-webkit-touch-callout"]="none"}function lt(t,e){return t.hasOwnProperty(e)}function ut(){}var ht=180/Math.PI},1150:(t,e,n)=>{function i(t,e){return null==t&&(t=0),null==e&&(e=0),[t,e]}function r(t,e){return t[0]=e[0],t[1]=e[1],t}function o(t){return[t[0],t[1]]}function a(t,e,n){return t[0]=e,t[1]=n,t}function s(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}function l(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t}function u(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function h(t){return Math.sqrt(function(t){return t[0]*t[0]+t[1]*t[1]}(t))}function c(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}function d(t,e){var n=h(e)
return 0===n?(t[0]=0,t[1]=0):(t[0]=e[0]/n,t[1]=e[1]/n),t}function p(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}n.d(e,{C:()=>r,Cc:()=>y,Il:()=>h,Io:()=>p,Ln:()=>l,NW:()=>v,S8:()=>d,T9:()=>_,WQ:()=>s,hZ:()=>a,hs:()=>c,jb:()=>u,jk:()=>m,o8:()=>o,oi:()=>g,vt:()=>i,xg:()=>f})
var f=p,g=function(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])}
function y(t,e,n,i){return t[0]=e[0]+i*(n[0]-e[0]),t[1]=e[1]+i*(n[1]-e[1]),t}function v(t,e,n){var i=e[0],r=e[1]
return t[0]=n[0]*i+n[2]*r+n[4],t[1]=n[1]*i+n[3]*r+n[5],t}function m(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t}function _(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t}},2028:(t,e,n)=>{n.d(e,{Ay:()=>y,oN:()=>u,sW:()=>h})
var i=n(4784),r=n(6245),o=n(4703),a=n(8301),s=n(5451),l="__zr_style_"+Math.round(10*Math.random()),u={shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,shadowColor:"#000",opacity:1,blend:"source-over"},h={style:{shadowBlur:!0,shadowOffsetX:!0,shadowOffsetY:!0,shadowColor:!0,opacity:!0}}
u[l]=!0
var c=["z","z2","invisible"],d=["invisible"],p=function(t){function e(e){return t.call(this,e)||this}var n
return(0,i.C6)(e,t),e.prototype._init=function(e){for(var n=(0,a.HP)(e),i=0;i<n.length;i++){var r=n[i]
"style"===r?this.useStyle(e[r]):t.prototype.attrKV.call(this,r,e[r])}this.style||this.useStyle({})},e.prototype.beforeBrush=function(){},e.prototype.afterBrush=function(){},e.prototype.innerBeforeBrush=function(){},e.prototype.innerAfterBrush=function(){},e.prototype.shouldBePainted=function(t,e,n,i){var r,o,a,s=this.transform
if(this.ignore||this.invisible||0===this.style.opacity||this.culling&&(r=this,o=t,a=e,f.copy(r.getBoundingRect()),r.transform&&f.applyTransform(r.transform),g.width=o,g.height=a,!f.intersect(g))||s&&!s[0]&&!s[3])return!1
if(n&&this.__clipPaths)for(var l=0;l<this.__clipPaths.length;++l)if(this.__clipPaths[l].isZeroArea())return!1
if(i&&this.parent)for(var u=this.parent;u;){if(u.ignore)return!1
u=u.parent}return!0},e.prototype.contain=function(t,e){return this.rectContain(t,e)},e.prototype.traverse=function(t,e){t.call(e,this)},e.prototype.rectContain=function(t,e){var n=this.transformCoordToLocal(t,e)
return this.getBoundingRect().contain(n[0],n[1])},e.prototype.getPaintRect=function(){var t=this._paintRect
if(!this._paintRect||this.__dirty){var e=this.transform,n=this.getBoundingRect(),i=this.style,r=i.shadowBlur||0,a=i.shadowOffsetX||0,s=i.shadowOffsetY||0
t=this._paintRect||(this._paintRect=new o.A(0,0,0,0)),e?o.A.applyTransform(t,n,e):t.copy(n),(r||a||s)&&(t.width+=2*r+Math.abs(a),t.height+=2*r+Math.abs(s),t.x=Math.min(t.x,t.x+a-r),t.y=Math.min(t.y,t.y+s-r))
var l=this.dirtyRectTolerance
t.isZero()||(t.x=Math.floor(t.x-l),t.y=Math.floor(t.y-l),t.width=Math.ceil(t.width+1+2*l),t.height=Math.ceil(t.height+1+2*l))}return t},e.prototype.setPrevPaintRect=function(t){t?(this._prevPaintRect=this._prevPaintRect||new o.A(0,0,0,0),this._prevPaintRect.copy(t)):this._prevPaintRect=null},e.prototype.getPrevPaintRect=function(){return this._prevPaintRect},e.prototype.animateStyle=function(t){return this.animate("style",t)},e.prototype.updateDuringAnimation=function(t){"style"===t?this.dirtyStyle():this.markRedraw()},e.prototype.attrKV=function(e,n){"style"!==e?t.prototype.attrKV.call(this,e,n):this.style?this.setStyle(n):this.useStyle(n)},e.prototype.setStyle=function(t,e){return"string"==typeof t?this.style[t]=e:(0,a.X$)(this.style,t),this.dirtyStyle(),this},e.prototype.dirtyStyle=function(t){t||this.markRedraw(),this.__dirty|=s.pO,this._rect&&(this._rect=null)},e.prototype.dirty=function(){this.dirtyStyle()},e.prototype.styleChanged=function(){return!!(this.__dirty&s.pO)},e.prototype.styleUpdated=function(){this.__dirty&=~s.pO},e.prototype.createStyle=function(t){return(0,a.ed)(u,t)},e.prototype.useStyle=function(t){t[l]||(t=this.createStyle(t)),this.__inHover?this.__hoverStyle=t:this.style=t,this.dirtyStyle()},e.prototype.isStyleObject=function(t){return t[l]},e.prototype._innerSaveToNormal=function(e){t.prototype._innerSaveToNormal.call(this,e)
var n=this._normalState
e.style&&!n.style&&(n.style=this._mergeStyle(this.createStyle(),this.style)),this._savePrimaryToNormal(e,n,c)},e.prototype._applyStateObj=function(e,n,i,r,o,s){t.prototype._applyStateObj.call(this,e,n,i,r,o,s)
var l,u=!(n&&r)
if(n&&n.style?o?r?l=n.style:(l=this._mergeStyle(this.createStyle(),i.style),this._mergeStyle(l,n.style)):(l=this._mergeStyle(this.createStyle(),r?this.style:i.style),this._mergeStyle(l,n.style)):u&&(l=i.style),l)if(o){var h=this.style
if(this.style=this.createStyle(u?{}:h),u)for(var p=(0,a.HP)(h),f=0;f<p.length;f++)(y=p[f])in l&&(l[y]=l[y],this.style[y]=h[y])
var g=(0,a.HP)(l)
for(f=0;f<g.length;f++){var y=g[f]
this.style[y]=this.style[y]}this._transitionState(e,{style:l},s,this.getAnimationStyleProps())}else this.useStyle(l)
var v=this.__inHover?d:c
for(f=0;f<v.length;f++)y=v[f],n&&null!=n[y]?this[y]=n[y]:u&&null!=i[y]&&(this[y]=i[y])},e.prototype._mergeStates=function(e){for(var n,i=t.prototype._mergeStates.call(this,e),r=0;r<e.length;r++){var o=e[r]
o.style&&(n=n||{},this._mergeStyle(n,o.style))}return n&&(i.style=n),i},e.prototype._mergeStyle=function(t,e){return(0,a.X$)(t,e),t},e.prototype.getAnimationStyleProps=function(){return h},e.initDefaultProps=((n=e.prototype).type="displayable",n.invisible=!1,n.z=0,n.z2=0,n.zlevel=0,n.culling=!1,n.cursor="pointer",n.rectHover=!1,n.incremental=!1,n._rect=null,n.dirtyRectTolerance=0,void(n.__dirty=s.M|s.pO)),e}(r.A),f=new o.A(0,0,0,0),g=new o.A(0,0,0,0)
const y=p},2316:(t,e,n)=>{n.d(e,{A:()=>i})
const i=function(){function t(t){this.colorStops=t||[]}return t.prototype.addColorStop=function(t,e){this.colorStops.push({offset:t,color:e})},t}()},7941:(t,e,n)=>{n.d(e,{A:()=>l})
var i=n(4784),r=n(8301),o=n(6245),a=n(4703),s=function(t){function e(e){var n=t.call(this)||this
return n.isGroup=!0,n._children=[],n.attr(e),n}return(0,i.C6)(e,t),e.prototype.childrenRef=function(){return this._children},e.prototype.children=function(){return this._children.slice()},e.prototype.childAt=function(t){return this._children[t]},e.prototype.childOfName=function(t){for(var e=this._children,n=0;n<e.length;n++)if(e[n].name===t)return e[n]},e.prototype.childCount=function(){return this._children.length},e.prototype.add=function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},e.prototype.addBefore=function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var n=this._children,i=n.indexOf(e)
i>=0&&(n.splice(i,0,t),this._doAdd(t))}return this},e.prototype.replace=function(t,e){var n=r.qh(this._children,t)
return n>=0&&this.replaceAt(e,n),this},e.prototype.replaceAt=function(t,e){var n=this._children,i=n[e]
if(t&&t!==this&&t.parent!==this&&t!==i){n[e]=t,i.parent=null
var r=this.__zr
r&&i.removeSelfFromZr(r),this._doAdd(t)}return this},e.prototype._doAdd=function(t){t.parent&&t.parent.remove(t),t.parent=this
var e=this.__zr
e&&e!==t.__zr&&t.addSelfToZr(e),e&&e.refresh()},e.prototype.remove=function(t){var e=this.__zr,n=this._children,i=r.qh(n,t)
return i<0||(n.splice(i,1),t.parent=null,e&&t.removeSelfFromZr(e),e&&e.refresh()),this},e.prototype.removeAll=function(){for(var t=this._children,e=this.__zr,n=0;n<t.length;n++){var i=t[n]
e&&i.removeSelfFromZr(e),i.parent=null}return t.length=0,this},e.prototype.eachChild=function(t,e){for(var n=this._children,i=0;i<n.length;i++){var r=n[i]
t.call(e,r,i)}return this},e.prototype.traverse=function(t,e){for(var n=0;n<this._children.length;n++){var i=this._children[n],r=t.call(e,i)
i.isGroup&&!r&&i.traverse(t,e)}return this},e.prototype.addSelfToZr=function(e){t.prototype.addSelfToZr.call(this,e)
for(var n=0;n<this._children.length;n++)this._children[n].addSelfToZr(e)},e.prototype.removeSelfFromZr=function(e){t.prototype.removeSelfFromZr.call(this,e)
for(var n=0;n<this._children.length;n++)this._children[n].removeSelfFromZr(e)},e.prototype.getBoundingRect=function(t){for(var e=new a.A(0,0,0,0),n=t||this._children,i=[],r=null,o=0;o<n.length;o++){var s=n[o]
if(!s.ignore&&!s.invisible){var l=s.getBoundingRect(),u=s.getLocalTransform(i)
u?(a.A.applyTransform(e,l,u),(r=r||e.clone()).union(e)):(r=r||l.clone()).union(l)}}return r||e},e}(o.A)
s.prototype.type="group"
const l=s},2655:(t,e,n)=>{n.d(e,{Ay:()=>h})
var i=n(4784),r=n(2028),o=n(4703),a=n(8301),s=(0,a.NT)({x:0,y:0},r.oN),l={style:(0,a.NT)({x:!0,y:!0,width:!0,height:!0,sx:!0,sy:!0,sWidth:!0,sHeight:!0},r.sW.style)},u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i.C6)(e,t),e.prototype.createStyle=function(t){return(0,a.ed)(s,t)},e.prototype._getSize=function(t){var e=this.style,n=e[t]
if(null!=n)return n
var i,r=(i=e.image)&&"string"!=typeof i&&i.width&&i.height?e.image:this.__image
if(!r)return 0
var o="width"===t?"height":"width",a=e[o]
return null==a?r[t]:r[t]/r[o]*a},e.prototype.getWidth=function(){return this._getSize("width")},e.prototype.getHeight=function(){return this._getSize("height")},e.prototype.getAnimationStyleProps=function(){return l},e.prototype.getBoundingRect=function(){var t=this.style
return this._rect||(this._rect=new o.A(t.x||0,t.y||0,this.getWidth(),this.getHeight())),this._rect},e}(r.Ay)
u.prototype.type="image"
const h=u},3125:(t,e,n)=>{n.d(e,{A:()=>r})
var i=n(4784)
const r=function(t){function e(e,n,i,r,o,a){var s=t.call(this,o)||this
return s.x=null==e?0:e,s.y=null==n?0:n,s.x2=null==i?1:i,s.y2=null==r?0:r,s.type="linear",s.global=a||!1,s}return(0,i.C6)(e,t),e}(n(2316).A)},4427:(t,e,n)=>{n.d(e,{MW:()=>C,Ay:()=>L})
var i=n(4784),r=n(2028),o=n(928)
function a(t,e,n,i,r,o,a){if(0===r)return!1
var s,l=r
if(a>e+l&&a>i+l||a<e-l&&a<i-l||o>t+l&&o>n+l||o<t-l&&o<n-l)return!1
if(t===n)return Math.abs(o-t)<=l/2
var u=(s=(e-i)/(t-n))*o-a+(t*i-n*e)/(t-n)
return u*u/(s*s+1)<=l/2*l/2}var s=n(3906)
function l(t,e,n,i,r,o,a,l,u,h,c){if(0===u)return!1
var d=u
return!(c>e+d&&c>i+d&&c>o+d&&c>l+d||c<e-d&&c<i-d&&c<o-d&&c<l-d||h>t+d&&h>n+d&&h>r+d&&h>a+d||h<t-d&&h<n-d&&h<r-d&&h<a-d)&&s.Et(t,e,n,i,r,o,a,l,h,c,null)<=d/2}function u(t,e,n,i,r,o,a,l,u){if(0===a)return!1
var h=a
return!(u>e+h&&u>i+h&&u>o+h||u<e-h&&u<i-h&&u<o-h||l>t+h&&l>n+h&&l>r+h||l<t-h&&l<n-h&&l<r-h)&&(0,s.kh)(t,e,n,i,r,o,l,u,null)<=h/2}var h=2*Math.PI
function c(t){return(t%=h)<0&&(t+=h),t}var d=2*Math.PI
function p(t,e,n,i,r,o,a,s,l){if(0===a)return!1
var u=a
s-=t,l-=e
var h=Math.sqrt(s*s+l*l)
if(h-u>n||h+u<n)return!1
if(Math.abs(i-r)%d<1e-4)return!0
if(o){var p=i
i=c(r),r=c(p)}else i=c(i),r=c(r)
i>r&&(r+=d)
var f=Math.atan2(l,s)
return f<0&&(f+=d),f>=i&&f<=r||f+d>=i&&f+d<=r}function f(t,e,n,i,r,o){if(o>e&&o>i||o<e&&o<i)return 0
if(i===e)return 0
var a=(o-e)/(i-e),s=i<e?1:-1
1!==a&&0!==a||(s=i<e?.5:-.5)
var l=a*(n-t)+t
return l===r?1/0:l>r?s:0}var g=o.A.CMD,y=2*Math.PI,v=[-1,-1,-1],m=[-1,-1]
function _(t,e,n,i,r,o,a,l,u,h){if(h>e&&h>i&&h>o&&h>l||h<e&&h<i&&h<o&&h<l)return 0
var c,d=s._E(e,i,o,l,h,v)
if(0===d)return 0
for(var p=0,f=-1,g=void 0,y=void 0,_=0;_<d;_++){var x=v[_],b=0===x||1===x?.5:1
s.Yb(t,n,r,a,x)<u||(f<0&&(f=s.lX(e,i,o,l,m),m[1]<m[0]&&f>1&&(c=m[0],m[0]=m[1],m[1]=c),g=s.Yb(e,i,o,l,m[0]),f>1&&(y=s.Yb(e,i,o,l,m[1]))),2===f?x<m[0]?p+=g<e?b:-b:x<m[1]?p+=y<g?b:-b:p+=l<y?b:-b:x<m[0]?p+=g<e?b:-b:p+=l<g?b:-b)}return p}function x(t,e,n,i,r,o,a,l){if(l>e&&l>i&&l>o||l<e&&l<i&&l<o)return 0
var u=s.qY(e,i,o,l,v)
if(0===u)return 0
var h=s.gC(e,i,o)
if(h>=0&&h<=1){for(var c=0,d=s.k3(e,i,o,h),p=0;p<u;p++){var f=0===v[p]||1===v[p]?.5:1
s.k3(t,n,r,v[p])<a||(v[p]<h?c+=d<e?f:-f:c+=o<d?f:-f)}return c}return f=0===v[0]||1===v[0]?.5:1,s.k3(t,n,r,v[0])<a?0:o<e?f:-f}function b(t,e,n,i,r,o,a,s){if((s-=e)>n||s<-n)return 0
var l=Math.sqrt(n*n-s*s)
v[0]=-l,v[1]=l
var u=Math.abs(i-r)
if(u<1e-4)return 0
if(u>=y-1e-4){i=0,r=y
var h=o?1:-1
return a>=v[0]+t&&a<=v[1]+t?h:0}if(i>r){var c=i
i=r,r=c}i<0&&(i+=y,r+=y)
for(var d=0,p=0;p<2;p++){var f=v[p]
if(f+t>a){var g=Math.atan2(s,f)
h=o?1:-1,g<0&&(g=y+g),(g>=i&&g<=r||g+y>=i&&g+y<=r)&&(g>Math.PI/2&&g<1.5*Math.PI&&(h=-h),d+=h)}}return d}function w(t,e,n,i,r){for(var o,s,h,c,d=t.data,y=t.len(),v=0,m=0,w=0,A=0,S=0,M=0;M<y;){var T=d[M++],I=1===M
switch(T===g.M&&M>1&&(n||(v+=f(m,w,A,S,i,r))),I&&(A=m=d[M],S=w=d[M+1]),T){case g.M:m=A=d[M++],w=S=d[M++]
break
case g.L:if(n){if(a(m,w,d[M],d[M+1],e,i,r))return!0}else v+=f(m,w,d[M],d[M+1],i,r)||0
m=d[M++],w=d[M++]
break
case g.C:if(n){if(l(m,w,d[M++],d[M++],d[M++],d[M++],d[M],d[M+1],e,i,r))return!0}else v+=_(m,w,d[M++],d[M++],d[M++],d[M++],d[M],d[M+1],i,r)||0
m=d[M++],w=d[M++]
break
case g.Q:if(n){if(u(m,w,d[M++],d[M++],d[M],d[M+1],e,i,r))return!0}else v+=x(m,w,d[M++],d[M++],d[M],d[M+1],i,r)||0
m=d[M++],w=d[M++]
break
case g.A:var C=d[M++],D=d[M++],k=d[M++],L=d[M++],P=d[M++],O=d[M++]
M+=1
var N=!!(1-d[M++])
o=Math.cos(P)*k+C,s=Math.sin(P)*L+D,I?(A=o,S=s):v+=f(m,w,o,s,i,r)
var R=(i-C)*L/k+C
if(n){if(p(C,D,L,P,P+O,N,e,R,r))return!0}else v+=b(C,D,L,P,P+O,N,R,r)
m=Math.cos(P+O)*k+C,w=Math.sin(P+O)*L+D
break
case g.R:if(A=m=d[M++],S=w=d[M++],o=A+d[M++],s=S+d[M++],n){if(a(A,S,o,S,e,i,r)||a(o,S,o,s,e,i,r)||a(o,s,A,s,e,i,r)||a(A,s,A,S,e,i,r))return!0}else v+=f(o,S,o,s,i,r),v+=f(A,s,A,S,i,r)
break
case g.Z:if(n){if(a(m,w,A,S,e,i,r))return!0}else v+=f(m,w,A,S,i,r)
m=A,w=S}}return n||(h=w,c=S,Math.abs(h-c)<1e-4)||(v+=f(m,w,A,S,i,r)||0),0!==v}var A=n(8301),S=n(7435),M=n(5499),T=n(5451),I=n(7157),C=(0,A.NT)({fill:"#000",stroke:null,strokePercent:1,fillOpacity:1,strokeOpacity:1,lineDashOffset:0,lineWidth:1,lineCap:"butt",miterLimit:10,strokeNoScale:!1,strokeFirst:!1},r.oN),D={style:(0,A.NT)({fill:!0,stroke:!0,strokePercent:!0,fillOpacity:!0,strokeOpacity:!0,lineDashOffset:!0,lineWidth:!0,miterLimit:!0},r.sW.style)},k=I.Wx.concat(["invisible","culling","z","z2","zlevel","parent"])
const L=function(t){function e(e){return t.call(this,e)||this}var n
return(0,i.C6)(e,t),e.prototype.update=function(){var n=this
t.prototype.update.call(this)
var i=this.style
if(i.decal){var r=this._decalEl=this._decalEl||new e
r.buildPath===e.prototype.buildPath&&(r.buildPath=function(t){n.buildPath(t,n.shape)}),r.silent=!0
var o=r.style
for(var a in i)o[a]!==i[a]&&(o[a]=i[a])
o.fill=i.fill?i.decal:null,o.decal=null,o.shadowColor=null,i.strokeFirst&&(o.stroke=null)
for(var s=0;s<k.length;++s)r[k[s]]=this[k[s]]
r.__dirty|=T.M}else this._decalEl&&(this._decalEl=null)},e.prototype.getDecalElement=function(){return this._decalEl},e.prototype._init=function(e){var n=(0,A.HP)(e)
this.shape=this.getDefaultShape()
var i=this.getDefaultStyle()
i&&this.useStyle(i)
for(var r=0;r<n.length;r++){var o=n[r],a=e[o]
"style"===o?this.style?(0,A.X$)(this.style,a):this.useStyle(a):"shape"===o?(0,A.X$)(this.shape,a):t.prototype.attrKV.call(this,o,a)}this.style||this.useStyle({})},e.prototype.getDefaultStyle=function(){return null},e.prototype.getDefaultShape=function(){return{}},e.prototype.canBeInsideText=function(){return this.hasFill()},e.prototype.getInsideTextFill=function(){var t=this.style.fill
if("none"!==t){if((0,A.Kg)(t)){var e=(0,S.fN)(t,0)
return e>.5?M._S:e>.2?M.tY:M.el}if(t)return M.el}return M._S},e.prototype.getInsideTextStroke=function(t){var e=this.style.fill
if((0,A.Kg)(e)){var n=this.__zr
if(!(!n||!n.isDarkMode())==(0,S.fN)(t,0)<M.ps)return e}},e.prototype.buildPath=function(t,e,n){},e.prototype.pathUpdated=function(){this.__dirty&=~T.Dl},e.prototype.getUpdatedPathProxy=function(t){return!this.path&&this.createPathProxy(),this.path.beginPath(),this.buildPath(this.path,this.shape,t),this.path},e.prototype.createPathProxy=function(){this.path=new o.A(!1)},e.prototype.hasStroke=function(){var t=this.style,e=t.stroke
return!(null==e||"none"===e||!(t.lineWidth>0))},e.prototype.hasFill=function(){var t=this.style.fill
return null!=t&&"none"!==t},e.prototype.getBoundingRect=function(){var t=this._rect,e=this.style,n=!t
if(n){var i=!1
this.path||(i=!0,this.createPathProxy())
var r=this.path;(i||this.__dirty&T.Dl)&&(r.beginPath(),this.buildPath(r,this.shape,!1),this.pathUpdated()),t=r.getBoundingRect()}if(this._rect=t,this.hasStroke()&&this.path&&this.path.len()>0){var o=this._rectStroke||(this._rectStroke=t.clone())
if(this.__dirty||n){o.copy(t)
var a=e.strokeNoScale?this.getLineScale():1,s=e.lineWidth
if(!this.hasFill()){var l=this.strokeContainThreshold
s=Math.max(s,null==l?4:l)}a>1e-10&&(o.width+=s/a,o.height+=s/a,o.x-=s/a/2,o.y-=s/a/2)}return o}return t},e.prototype.contain=function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect(),r=this.style
if(t=n[0],e=n[1],i.contain(t,e)){var o=this.path
if(this.hasStroke()){var a=r.lineWidth,s=r.strokeNoScale?this.getLineScale():1
if(s>1e-10&&(this.hasFill()||(a=Math.max(a,this.strokeContainThreshold)),function(t,e,n,i){return w(t,e,!0,n,i)}(o,a/s,t,e)))return!0}if(this.hasFill())return function(t,e,n){return w(t,0,!1,e,n)}(o,t,e)}return!1},e.prototype.dirtyShape=function(){this.__dirty|=T.Dl,this._rect&&(this._rect=null),this._decalEl&&this._decalEl.dirtyShape(),this.markRedraw()},e.prototype.dirty=function(){this.dirtyStyle(),this.dirtyShape()},e.prototype.animateShape=function(t){return this.animate("shape",t)},e.prototype.updateDuringAnimation=function(t){"style"===t?this.dirtyStyle():"shape"===t?this.dirtyShape():this.markRedraw()},e.prototype.attrKV=function(e,n){"shape"===e?this.setShape(n):t.prototype.attrKV.call(this,e,n)},e.prototype.setShape=function(t,e){var n=this.shape
return n||(n=this.shape={}),"string"==typeof t?n[t]=e:(0,A.X$)(n,t),this.dirtyShape(),this},e.prototype.shapeChanged=function(){return!!(this.__dirty&T.Dl)},e.prototype.createStyle=function(t){return(0,A.ed)(C,t)},e.prototype._innerSaveToNormal=function(e){t.prototype._innerSaveToNormal.call(this,e)
var n=this._normalState
e.shape&&!n.shape&&(n.shape=(0,A.X$)({},this.shape))},e.prototype._applyStateObj=function(e,n,i,r,o,a){t.prototype._applyStateObj.call(this,e,n,i,r,o,a)
var s,l=!(n&&r)
if(n&&n.shape?o?r?s=n.shape:(s=(0,A.X$)({},i.shape),(0,A.X$)(s,n.shape)):(s=(0,A.X$)({},r?this.shape:i.shape),(0,A.X$)(s,n.shape)):l&&(s=i.shape),s)if(o){this.shape=(0,A.X$)({},this.shape)
for(var u={},h=(0,A.HP)(s),c=0;c<h.length;c++){var d=h[c]
"object"==typeof s[d]?this.shape[d]=s[d]:u[d]=s[d]}this._transitionState(e,{shape:u},a)}else this.shape=s,this.dirtyShape()},e.prototype._mergeStates=function(e){for(var n,i=t.prototype._mergeStates.call(this,e),r=0;r<e.length;r++){var o=e[r]
o.shape&&(n=n||{},this._mergeStyle(n,o.shape))}return n&&(i.shape=n),i},e.prototype.getAnimationStyleProps=function(){return D},e.prototype.isZeroArea=function(){return!1},e.extend=function(t){var n=function(e){function n(n){var i=e.call(this,n)||this
return t.init&&t.init.call(i,n),i}return(0,i.C6)(n,e),n.prototype.getDefaultStyle=function(){return(0,A.o8)(t.style)},n.prototype.getDefaultShape=function(){return(0,A.o8)(t.shape)},n}(e)
for(var r in t)"function"==typeof t[r]&&(n.prototype[r]=t[r])
return n},e.initDefaultProps=((n=e.prototype).type="path",n.strokeContainThreshold=5,n.segmentIgnoreThreshold=0,n.subPixelOptimize=!1,n.autoBatch=!1,void(n.__dirty=T.M|T.pO|T.Dl)),e}(r.Ay)},9402:(t,e,n)=>{n.d(e,{A:()=>c})
var i=n(4784),r=n(2028),o=n(7627),a=n(4427),s=n(8301),l=n(1854),u=(0,s.NT)({strokeFirst:!0,font:l.OH,x:0,y:0,textAlign:"left",textBaseline:"top",miterLimit:2},a.MW),h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i.C6)(e,t),e.prototype.hasStroke=function(){var t=this.style,e=t.stroke
return null!=e&&"none"!==e&&t.lineWidth>0},e.prototype.hasFill=function(){var t=this.style.fill
return null!=t&&"none"!==t},e.prototype.createStyle=function(t){return(0,s.ed)(u,t)},e.prototype.setBoundingRect=function(t){this._rect=t},e.prototype.getBoundingRect=function(){var t=this.style
if(!this._rect){var e=t.text
null!=e?e+="":e=""
var n=(0,o.NO)(e,t.font,t.textAlign,t.textBaseline)
if(n.x+=t.x||0,n.y+=t.y||0,this.hasStroke()){var i=t.lineWidth
n.x-=i/2,n.y-=i/2,n.width+=i,n.height+=i}this._rect=n}return this._rect},e.initDefaultProps=void(e.prototype.dirtyRectTolerance=10),e}(r.Ay)
h.prototype.type="tspan"
const c=h},5652:(t,e,n)=>{n.d(e,{Ay:()=>B})
var i=n(4784),r=n(246),o=n(8301),a=n(7627),s=/\{([a-zA-Z0-9_]+)\|([^}]*)\}/g
function l(t,e,n,i,r){if(!e)return""
var o=(t+"").split("\n")
r=u(e,n,i,r)
for(var a=0,s=o.length;a<s;a++)o[a]=h(o[a],r)
return o.join("\n")}function u(t,e,n,i){i=i||{}
var r=(0,o.X$)({},i)
r.font=e,n=(0,o.bZ)(n,"..."),r.maxIterations=(0,o.bZ)(i.maxIterations,2)
var s=r.minChar=(0,o.bZ)(i.minChar,0)
r.cnCharWidth=(0,a.RG)("国",e)
var l=r.ascCharWidth=(0,a.RG)("a",e)
r.placeholder=(0,o.bZ)(i.placeholder,"")
for(var u=t=Math.max(0,t-1),h=0;h<s&&u>=l;h++)u-=l
var c=(0,a.RG)(n,e)
return c>u&&(n="",c=0),u=t-c,r.ellipsis=n,r.ellipsisWidth=c,r.contentWidth=u,r.containerWidth=t,r}function h(t,e){var n=e.containerWidth,i=e.font,r=e.contentWidth
if(!n)return""
var o=(0,a.RG)(t,i)
if(o<=n)return t
for(var s=0;;s++){if(o<=r||s>=e.maxIterations){t+=e.ellipsis
break}var l=0===s?c(t,r,e.ascCharWidth,e.cnCharWidth):o>0?Math.floor(t.length*r/o):0
t=t.substr(0,l),o=(0,a.RG)(t,i)}return""===t&&(t=e.placeholder),t}function c(t,e,n,i){for(var r=0,o=0,a=t.length;o<a&&r<e;o++){var s=t.charCodeAt(o)
r+=0<=s&&s<=127?n:i}return o}var d=function(){},p=function(t){this.tokens=[],t&&(this.tokens=t)},f=function(){this.width=0,this.height=0,this.contentWidth=0,this.contentHeight=0,this.outerWidth=0,this.outerHeight=0,this.lines=[]}
function g(t,e,n,i,r){var o,s,l=""===e,u=r&&n.rich[r]||{},h=t.lines,c=u.font||n.font,f=!1
if(i){var g=u.padding,y=g?g[1]+g[3]:0
if(null!=u.width&&"auto"!==u.width){var v=(0,a.lo)(u.width,i.width)+y
h.length>0&&v+i.accumWidth>i.width&&(o=e.split("\n"),f=!0),i.accumWidth=v}else{var _=m(e,c,i.width,i.breakAll,i.accumWidth)
i.accumWidth=_.accumWidth+y,s=_.linesWidths,o=_.lines}}else o=e.split("\n")
for(var x=0;x<o.length;x++){var b=o[x],w=new d
if(w.styleName=r,w.text=b,w.isLineHolder=!b&&!l,"number"==typeof u.width?w.width=u.width:w.width=s?s[x]:(0,a.RG)(b,c),x||f)h.push(new p([w]))
else{var A=(h[h.length-1]||(h[0]=new p)).tokens,S=A.length
1===S&&A[0].isLineHolder?A[0]=w:(b||!S||l)&&A.push(w)}}}var y=(0,o.TS)(",&?/;] ".split(""),(function(t,e){return t[e]=!0,t}),{})
function v(t){return!function(t){var e=t.charCodeAt(0)
return e>=32&&e<=591||e>=880&&e<=4351||e>=4608&&e<=5119||e>=7680&&e<=8303}(t)||!!y[t]}function m(t,e,n,i,r){for(var o=[],s=[],l="",u="",h=0,c=0,d=0;d<t.length;d++){var p=t.charAt(d)
if("\n"!==p){var f=(0,a.RG)(p,e),g=!i&&!v(p);(o.length?c+f>n:r+c+f>n)?c?(l||u)&&(g?(l||(l=u,u="",c=h=0),o.push(l),s.push(c-h),u+=p,l="",c=h+=f):(u&&(l+=u,u="",h=0),o.push(l),s.push(c),l=p,c=f)):g?(o.push(u),s.push(h),u=p,h=f):(o.push(p),s.push(f)):(c+=f,g?(u+=p,h+=f):(u&&(l+=u,u="",h=0),l+=p))}else u&&(l+=u,c+=h),o.push(l),s.push(c),l="",u="",h=0,c=0}return o.length||l||(l=t,u="",h=0),u&&(l+=u),l&&(o.push(l),s.push(c)),1===o.length&&(c+=r),{accumWidth:c,lines:o,linesWidths:s}}var _=n(9402),x=n(2655),b=n(4130),w=n(4703),A=n(2028),S=n(1854),M={fill:"#000"},T={style:(0,o.NT)({fill:!0,stroke:!0,fillOpacity:!0,strokeOpacity:!0,lineWidth:!0,fontSize:!0,lineHeight:!0,width:!0,height:!0,textShadowColor:!0,textShadowBlur:!0,textShadowOffsetX:!0,textShadowOffsetY:!0,backgroundColor:!0,padding:!0,borderColor:!0,borderWidth:!0,borderRadius:!0},A.sW.style)},I=function(t){function e(e){var n=t.call(this)||this
return n.type="text",n._children=[],n._defaultStyle=M,n.attr(e),n}return(0,i.C6)(e,t),e.prototype.childrenRef=function(){return this._children},e.prototype.update=function(){t.prototype.update.call(this),this.styleChanged()&&this._updateSubTexts()
for(var e=0;e<this._children.length;e++){var n=this._children[e]
n.zlevel=this.zlevel,n.z=this.z,n.z2=this.z2,n.culling=this.culling,n.cursor=this.cursor,n.invisible=this.invisible}},e.prototype.updateTransform=function(){var e=this.innerTransformable
e?(e.updateTransform(),e.transform&&(this.transform=e.transform)):t.prototype.updateTransform.call(this)},e.prototype.getLocalTransform=function(e){var n=this.innerTransformable
return n?n.getLocalTransform(e):t.prototype.getLocalTransform.call(this,e)},e.prototype.getComputedTransform=function(){return this.__hostTarget&&(this.__hostTarget.getComputedTransform(),this.__hostTarget.updateInnerText(!0)),t.prototype.getComputedTransform.call(this)},e.prototype._updateSubTexts=function(){var t
this._childCursor=0,P(t=this.style),(0,o.__)(t.rich,P),this.style.rich?this._updateRichTexts():this._updatePlainTexts(),this._children.length=this._childCursor,this.styleUpdated()},e.prototype.addSelfToZr=function(e){t.prototype.addSelfToZr.call(this,e)
for(var n=0;n<this._children.length;n++)this._children[n].__zr=e},e.prototype.removeSelfFromZr=function(e){t.prototype.removeSelfFromZr.call(this,e)
for(var n=0;n<this._children.length;n++)this._children[n].__zr=null},e.prototype.getBoundingRect=function(){if(this.styleChanged()&&this._updateSubTexts(),!this._rect){for(var t=new w.A(0,0,0,0),e=this._children,n=[],i=null,r=0;r<e.length;r++){var o=e[r],a=o.getBoundingRect(),s=o.getLocalTransform(n)
s?(t.copy(a),t.applyTransform(s),(i=i||t.clone()).union(t)):(i=i||a.clone()).union(a)}this._rect=i||t}return this._rect},e.prototype.setDefaultTextStyle=function(t){this._defaultStyle=t||M},e.prototype.setTextContent=function(t){},e.prototype._mergeStyle=function(t,e){if(!e)return t
var n=e.rich,i=t.rich||n&&{}
return(0,o.X$)(t,e),n&&i?(this._mergeRich(i,n),t.rich=i):i&&(t.rich=i),t},e.prototype._mergeRich=function(t,e){for(var n=(0,o.HP)(e),i=0;i<n.length;i++){var r=n[i]
t[r]=t[r]||{},(0,o.X$)(t[r],e[r])}},e.prototype.getAnimationStyleProps=function(){return T},e.prototype._getOrCreateChild=function(t){var e=this._children[this._childCursor]
return e&&e instanceof t||(e=new t),this._children[this._childCursor++]=e,e.__zr=this.__zr,e.parent=this,e},e.prototype._updatePlainTexts=function(){var t=this.style,e=t.font||S.OH,n=t.padding,i=function(t,e){null!=t&&(t+="")
var n,i=e.overflow,r=e.padding,s=e.font,l="truncate"===i,c=(0,a.ks)(s),d=(0,o.bZ)(e.lineHeight,c),p=!!e.backgroundColor,f="truncate"===e.lineOverflow,g=e.width,y=(n=null==g||"break"!==i&&"breakAll"!==i?t?t.split("\n"):[]:t?m(t,e.font,g,"breakAll"===i,0).lines:[]).length*d,v=(0,o.bZ)(e.height,y)
if(y>v&&f){var _=Math.floor(v/d)
n=n.slice(0,_)}if(t&&l&&null!=g)for(var x=u(g,s,e.ellipsis,{minChar:e.truncateMinChar,placeholder:e.placeholder}),b=0;b<n.length;b++)n[b]=h(n[b],x)
var w=v,A=0
for(b=0;b<n.length;b++)A=Math.max((0,a.RG)(n[b],s),A)
null==g&&(g=A)
var S=A
return r&&(w+=r[0]+r[2],S+=r[1]+r[3],g+=r[1]+r[3]),p&&(S=g),{lines:n,height:v,outerWidth:S,outerHeight:w,lineHeight:d,calculatedLineHeight:c,contentWidth:A,contentHeight:y,width:g}}(E(t),t),r=z(t),s=!!t.backgroundColor,l=i.outerHeight,c=i.outerWidth,d=i.contentWidth,p=i.lines,f=i.lineHeight,g=this._defaultStyle,y=t.x||0,v=t.y||0,x=t.align||g.align||"left",b=t.verticalAlign||g.verticalAlign||"top",A=y,M=(0,a.sZ)(v,i.contentHeight,b)
if(r||n){var T=(0,a.ll)(y,c,x),I=(0,a.sZ)(v,l,b)
r&&this._renderBackground(t,t,T,I,c,l)}M+=f/2,n&&(A=R(y,x,n),"top"===b?M+=n[0]:"bottom"===b&&(M-=n[2]))
for(var C=0,D=!1,k=(N("fill"in t?t.fill:(D=!0,g.fill))),P=(O("stroke"in t?t.stroke:s||g.autoStroke&&!D?null:(C=2,g.stroke))),B=t.textShadowBlur>0,V=null!=t.width&&("truncate"===t.overflow||"break"===t.overflow||"breakAll"===t.overflow),F=i.calculatedLineHeight,W=0;W<p.length;W++){var H=this._getOrCreateChild(_.A),G=H.createStyle()
H.useStyle(G),G.text=p[W],G.x=A,G.y=M,x&&(G.textAlign=x),G.textBaseline="middle",G.opacity=t.opacity,G.strokeFirst=!0,B&&(G.shadowBlur=t.textShadowBlur||0,G.shadowColor=t.textShadowColor||"transparent",G.shadowOffsetX=t.textShadowOffsetX||0,G.shadowOffsetY=t.textShadowOffsetY||0),G.stroke=P,G.fill=k,P&&(G.lineWidth=t.lineWidth||C,G.lineDash=t.lineDash,G.lineDashOffset=t.lineDashOffset||0),G.font=e,L(G,t),M+=f,V&&H.setBoundingRect(new w.A((0,a.ll)(G.x,t.width,G.textAlign),(0,a.sZ)(G.y,F,G.textBaseline),d,F))}},e.prototype._updateRichTexts=function(){var t=this.style,e=function(t,e){var n=new f
if(null!=t&&(t+=""),!t)return n
for(var i,u=e.width,h=e.height,c=e.overflow,d="break"!==c&&"breakAll"!==c||null==u?null:{width:u,accumWidth:0,breakAll:"breakAll"===c},p=s.lastIndex=0;null!=(i=s.exec(t));){var y=i.index
y>p&&g(n,t.substring(p,y),e,d),g(n,i[2],e,d,i[1]),p=s.lastIndex}p<t.length&&g(n,t.substring(p,t.length),e,d)
var v=[],m=0,_=0,x=e.padding,b="truncate"===c,w="truncate"===e.lineOverflow
function A(t,e,n){t.width=e,t.lineHeight=n,m+=n,_=Math.max(_,e)}t:for(var S=0;S<n.lines.length;S++){for(var M=n.lines[S],T=0,I=0,C=0;C<M.tokens.length;C++){var D=(V=M.tokens[C]).styleName&&e.rich[V.styleName]||{},k=V.textPadding=D.padding,L=k?k[1]+k[3]:0,P=V.font=D.font||e.font
V.contentHeight=(0,a.ks)(P)
var O=(0,o.bZ)(D.height,V.contentHeight)
if(V.innerHeight=O,k&&(O+=k[0]+k[2]),V.height=O,V.lineHeight=(0,o.WV)(D.lineHeight,e.lineHeight,O),V.align=D&&D.align||e.align,V.verticalAlign=D&&D.verticalAlign||"middle",w&&null!=h&&m+V.lineHeight>h){C>0?(M.tokens=M.tokens.slice(0,C),A(M,I,T),n.lines=n.lines.slice(0,S+1)):n.lines=n.lines.slice(0,S)
break t}var N=D.width,R=null==N||"auto"===N
if("string"==typeof N&&"%"===N.charAt(N.length-1))V.percentWidth=N,v.push(V),V.contentWidth=(0,a.RG)(V.text,P)
else{if(R){var E=D.backgroundColor,z=E&&E.image
z&&(z=r.SR(z),r.xA(z)&&(V.width=Math.max(V.width,z.width*O/z.height)))}var B=b&&null!=u?u-I:null
null!=B&&B<V.width?!R||B<L?(V.text="",V.width=V.contentWidth=0):(V.text=l(V.text,B-L,P,e.ellipsis,{minChar:e.truncateMinChar}),V.width=V.contentWidth=(0,a.RG)(V.text,P)):V.contentWidth=(0,a.RG)(V.text,P)}V.width+=L,I+=V.width,D&&(T=Math.max(T,V.lineHeight))}A(M,I,T)}for(n.outerWidth=n.width=(0,o.bZ)(u,_),n.outerHeight=n.height=(0,o.bZ)(h,m),n.contentHeight=m,n.contentWidth=_,x&&(n.outerWidth+=x[1]+x[3],n.outerHeight+=x[0]+x[2]),S=0;S<v.length;S++){var V,F=(V=v[S]).percentWidth
V.width=parseInt(F,10)/100*n.width}return n}(E(t),t),n=e.width,i=e.outerWidth,u=e.outerHeight,h=t.padding,c=t.x||0,d=t.y||0,p=this._defaultStyle,y=t.align||p.align,v=t.verticalAlign||p.verticalAlign,m=(0,a.ll)(c,i,y),_=(0,a.sZ)(d,u,v),x=m,b=_
h&&(x+=h[3],b+=h[0])
var w=x+n
z(t)&&this._renderBackground(t,t,m,_,i,u)
for(var A=!!t.backgroundColor,S=0;S<e.lines.length;S++){for(var M=e.lines[S],T=M.tokens,I=T.length,C=M.lineHeight,D=M.width,k=0,L=x,P=w,O=I-1,N=void 0;k<I&&(!(N=T[k]).align||"left"===N.align);)this._placeToken(N,t,C,b,L,"left",A),D-=N.width,L+=N.width,k++
for(;O>=0&&"right"===(N=T[O]).align;)this._placeToken(N,t,C,b,P,"right",A),D-=N.width,P-=N.width,O--
for(L+=(n-(L-x)-(w-P)-D)/2;k<=O;)N=T[k],this._placeToken(N,t,C,b,L+N.width/2,"center",A),L+=N.width,k++
b+=C}},e.prototype._placeToken=function(t,e,n,i,r,s,l){var u=e.rich[t.styleName]||{}
u.text=t.text
var h=t.verticalAlign,c=i+n/2
"top"===h?c=i+t.height/2:"bottom"===h&&(c=i+n-t.height/2),!t.isLineHolder&&z(u)&&this._renderBackground(u,e,"right"===s?r-t.width:"center"===s?r-t.width/2:r,c-t.height/2,t.width,t.height)
var d=!!u.backgroundColor,p=t.textPadding
p&&(r=R(r,s,p),c-=t.height/2-p[0]-t.innerHeight/2)
var f=this._getOrCreateChild(_.A),g=f.createStyle()
f.useStyle(g)
var y=this._defaultStyle,v=!1,m=0,x=N("fill"in u?u.fill:"fill"in e?e.fill:(v=!0,y.fill)),b=O("stroke"in u?u.stroke:"stroke"in e?e.stroke:d||l||y.autoStroke&&!v?null:(m=2,y.stroke)),A=u.textShadowBlur>0||e.textShadowBlur>0
g.text=t.text,g.x=r,g.y=c,A&&(g.shadowBlur=u.textShadowBlur||e.textShadowBlur||0,g.shadowColor=u.textShadowColor||e.textShadowColor||"transparent",g.shadowOffsetX=u.textShadowOffsetX||e.textShadowOffsetX||0,g.shadowOffsetY=u.textShadowOffsetY||e.textShadowOffsetY||0),g.textAlign=s,g.textBaseline="middle",g.font=t.font||S.OH,g.opacity=(0,o.WV)(u.opacity,e.opacity,1),L(g,u),b&&(g.lineWidth=(0,o.WV)(u.lineWidth,e.lineWidth,m),g.lineDash=(0,o.bZ)(u.lineDash,e.lineDash),g.lineDashOffset=e.lineDashOffset||0,g.stroke=b),x&&(g.fill=x)
var M=t.contentWidth,T=t.contentHeight
f.setBoundingRect(new w.A((0,a.ll)(g.x,M,g.textAlign),(0,a.sZ)(g.y,T,g.textBaseline),M,T))},e.prototype._renderBackground=function(t,e,n,i,r,a){var s,l,u,h=t.backgroundColor,c=t.borderWidth,d=t.borderColor,p=h&&h.image,f=h&&!p,g=t.borderRadius,y=this
if(f||t.lineHeight||c&&d){(s=this._getOrCreateChild(b.A)).useStyle(s.createStyle()),s.style.fill=null
var v=s.shape
v.x=n,v.y=i,v.width=r,v.height=a,v.r=g,s.dirtyShape()}if(f)(u=s.style).fill=h||null,u.fillOpacity=(0,o.bZ)(t.fillOpacity,1)
else if(p){(l=this._getOrCreateChild(x.Ay)).onload=function(){y.dirtyStyle()}
var m=l.style
m.image=h.image,m.x=n,m.y=i,m.width=r,m.height=a}c&&d&&((u=s.style).lineWidth=c,u.stroke=d,u.strokeOpacity=(0,o.bZ)(t.strokeOpacity,1),u.lineDash=t.borderDash,u.lineDashOffset=t.borderDashOffset||0,s.strokeContainThreshold=0,s.hasFill()&&s.hasStroke()&&(u.strokeFirst=!0,u.lineWidth*=2))
var _=(s||l).style
_.shadowBlur=t.shadowBlur||0,_.shadowColor=t.shadowColor||"transparent",_.shadowOffsetX=t.shadowOffsetX||0,_.shadowOffsetY=t.shadowOffsetY||0,_.opacity=(0,o.WV)(t.opacity,e.opacity,1)},e.makeFont=function(t){var e,n=""
return function(t){return null!=t.fontSize||t.fontFamily||t.fontWeight}(t)&&(n=[t.fontStyle,t.fontWeight,(e=t.fontSize,"string"!=typeof e||-1===e.indexOf("px")&&-1===e.indexOf("rem")&&-1===e.indexOf("em")?isNaN(+e)?S.gI+"px":e+"px":e),t.fontFamily||"sans-serif"].join(" ")),n&&(0,o.Bq)(n)||t.textFont||t.font},e}(A.Ay),C={left:!0,right:1,center:1},D={top:1,bottom:1,middle:1},k=["fontStyle","fontWeight","fontSize","fontFamily"]
function L(t,e){for(var n=0;n<k.length;n++){var i=k[n],r=e[i]
null!=r&&(t[i]=r)}}function P(t){if(t){t.font=I.makeFont(t)
var e=t.align
"middle"===e&&(e="center"),t.align=null==e||C[e]?e:"left"
var n=t.verticalAlign
"center"===n&&(n="middle"),t.verticalAlign=null==n||D[n]?n:"top",t.padding&&(t.padding=(0,o.QX)(t.padding))}}function O(t,e){return null==t||e<=0||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t}function N(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t}function R(t,e,n){return"right"===e?t-n[1]:"center"===e?t+n[3]/2-n[1]/2:t+n[3]}function E(t){var e=t.text
return null!=e&&(e+=""),e}function z(t){return!!(t.backgroundColor||t.lineHeight||t.borderWidth&&t.borderColor)}const B=I},5451:(t,e,n)=>{n.d(e,{Dl:()=>o,M:()=>i,pO:()=>r})
var i=1,r=2,o=4},246:(t,e,n)=>{n.d(e,{OD:()=>s,SR:()=>a,xA:()=>u})
var i=n(4592),r=n(1854),o=new i.Ay(50)
function a(t){if("string"==typeof t){var e=o.get(t)
return e&&e.image}return t}function s(t,e,n,i,a){if(t){if("string"==typeof t){if(e&&e.__zrImageSrc===t||!n)return e
var s=o.get(t),h={hostEl:n,cb:i,cbPayload:a}
return s?!u(e=s.image)&&s.pending.push(h):((e=r.yh.loadImage(t,l,l)).__zrImageSrc=t,o.put(t,e.__cachedImgObj={image:e,pending:[h]})),e}return t}return e}function l(){var t=this.__cachedImgObj
this.onload=this.onerror=this.__cachedImgObj=null
for(var e=0;e<t.pending.length;e++){var n=t.pending[e],i=n.cb
i&&i(this,n.cbPayload),n.hostEl.dirty()}t.pending.length=0}function u(t){return t&&t.width&&t.height}},4878:(t,e,n)=>{n.d(e,{U:()=>r})
var i=n(1150)
function r(t,e,n){var r=e.smooth,o=e.points
if(o&&o.length>=2){if(r){var a=function(t,e,n,r){var o,a,s,l,u=[],h=[],c=[],d=[]
if(r){s=[1/0,1/0],l=[-1/0,-1/0]
for(var p=0,f=t.length;p<f;p++)(0,i.jk)(s,s,t[p]),(0,i.T9)(l,l,t[p]);(0,i.jk)(s,s,r[0]),(0,i.T9)(l,l,r[1])}for(p=0,f=t.length;p<f;p++){var g=t[p]
if(n)o=t[p?p-1:f-1],a=t[(p+1)%f]
else{if(0===p||p===f-1){u.push((0,i.o8)(t[p]))
continue}o=t[p-1],a=t[p+1]}(0,i.jb)(h,a,o),(0,i.hs)(h,h,e)
var y=(0,i.Io)(g,o),v=(0,i.Io)(g,a),m=y+v
0!==m&&(y/=m,v/=m),(0,i.hs)(c,h,-y),(0,i.hs)(d,h,v)
var _=(0,i.WQ)([],g,c),x=(0,i.WQ)([],g,d)
r&&((0,i.T9)(_,_,s),(0,i.jk)(_,_,l),(0,i.T9)(x,x,s),(0,i.jk)(x,x,l)),u.push(_),u.push(x)}return n&&u.push(u.shift()),u}(o,r,n,e.smoothConstraint)
t.moveTo(o[0][0],o[0][1])
for(var s=o.length,l=0;l<(n?s:s-1);l++){var u=a[2*l],h=a[2*l+1],c=o[(l+1)%s]
t.bezierCurveTo(u[0],u[1],h[0],h[1],c[0],c[1])}}else{t.moveTo(o[0][0],o[0][1]),l=1
for(var d=o.length;l<d;l++)t.lineTo(o[l][0],o[l][1])}n&&t.closePath()}}},3302:(t,e,n)=>{n.d(e,{M7:()=>a,Op:()=>o,eB:()=>r})
var i=Math.round
function r(t,e,n){if(e){var r=e.x1,o=e.x2,s=e.y1,l=e.y2
t.x1=r,t.x2=o,t.y1=s,t.y2=l
var u=n&&n.lineWidth
return u?(i(2*r)===i(2*o)&&(t.x1=t.x2=a(r,u,!0)),i(2*s)===i(2*l)&&(t.y1=t.y2=a(s,u,!0)),t):t}}function o(t,e,n){if(e){var i=e.x,r=e.y,o=e.width,s=e.height
t.x=i,t.y=r,t.width=o,t.height=s
var l=n&&n.lineWidth
return l?(t.x=a(i,l,!0),t.y=a(r,l,!0),t.width=Math.max(a(i+o,l,!1)-t.x,0===o?0:1),t.height=Math.max(a(r+s,l,!1)-t.y,0===s?0:1),t):t}}function a(t,e,n){if(!e)return t
var r=i(2*t)
return(r+i(e))%2==0?r/2:(r+(n?1:-1))/2}},5844:(t,e,n)=>{n.d(e,{A:()=>s})
var i=n(4784),r=n(4427),o=function(){this.cx=0,this.cy=0,this.r=0,this.startAngle=0,this.endAngle=2*Math.PI,this.clockwise=!0},a=function(t){function e(e){return t.call(this,e)||this}return(0,i.C6)(e,t),e.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},e.prototype.getDefaultShape=function(){return new o},e.prototype.buildPath=function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r,0),o=e.startAngle,a=e.endAngle,s=e.clockwise,l=Math.cos(o),u=Math.sin(o)
t.moveTo(l*r+n,u*r+i),t.arc(n,i,r,o,a,!s)},e}(r.Ay)
a.prototype.type="arc"
const s=a},2198:(t,e,n)=>{n.d(e,{A:()=>c})
var i=n(4784),r=n(4427),o=n(1150),a=n(3906),s=[],l=function(){this.x1=0,this.y1=0,this.x2=0,this.y2=0,this.cpx1=0,this.cpy1=0,this.percent=1}
function u(t,e,n){var i=t.cpx2,r=t.cpy2
return null!=i||null!=r?[(n?a.rD:a.Yb)(t.x1,t.cpx1,t.cpx2,t.x2,e),(n?a.rD:a.Yb)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(n?a.z7:a.k3)(t.x1,t.cpx1,t.x2,e),(n?a.z7:a.k3)(t.y1,t.cpy1,t.y2,e)]}var h=function(t){function e(e){return t.call(this,e)||this}return(0,i.C6)(e,t),e.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},e.prototype.getDefaultShape=function(){return new l},e.prototype.buildPath=function(t,e){var n=e.x1,i=e.y1,r=e.x2,o=e.y2,l=e.cpx1,u=e.cpy1,h=e.cpx2,c=e.cpy2,d=e.percent
0!==d&&(t.moveTo(n,i),null==h||null==c?(d<1&&((0,a.kx)(n,l,r,d,s),l=s[1],r=s[2],(0,a.kx)(i,u,o,d,s),u=s[1],o=s[2]),t.quadraticCurveTo(l,u,r,o)):(d<1&&((0,a.YT)(n,l,h,r,d,s),l=s[1],h=s[2],r=s[3],(0,a.YT)(i,u,c,o,d,s),u=s[1],c=s[2],o=s[3]),t.bezierCurveTo(l,u,h,c,r,o)))},e.prototype.pointAt=function(t){return u(this.shape,t,!1)},e.prototype.tangentAt=function(t){var e=u(this.shape,t,!0)
return o.S8(e,e)},e}(r.Ay)
h.prototype.type="bezier-curve"
const c=h},7958:(t,e,n)=>{n.d(e,{A:()=>s})
var i=n(4784),r=n(4427),o=function(){this.cx=0,this.cy=0,this.r=0},a=function(t){function e(e){return t.call(this,e)||this}return(0,i.C6)(e,t),e.prototype.getDefaultShape=function(){return new o},e.prototype.buildPath=function(t,e){t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI)},e}(r.Ay)
a.prototype.type="circle"
const s=a},1032:(t,e,n)=>{n.d(e,{A:()=>u})
var i=n(4784),r=n(4427),o=n(3302),a={},s=function(){this.x1=0,this.y1=0,this.x2=0,this.y2=0,this.percent=1},l=function(t){function e(e){return t.call(this,e)||this}return(0,i.C6)(e,t),e.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},e.prototype.getDefaultShape=function(){return new s},e.prototype.buildPath=function(t,e){var n,i,r,s
if(this.subPixelOptimize){var l=(0,o.eB)(a,e,this.style)
n=l.x1,i=l.y1,r=l.x2,s=l.y2}else n=e.x1,i=e.y1,r=e.x2,s=e.y2
var u=e.percent
0!==u&&(t.moveTo(n,i),u<1&&(r=n*(1-u)+r*u,s=i*(1-u)+s*u),t.lineTo(r,s))},e.prototype.pointAt=function(t){var e=this.shape
return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]},e}(r.Ay)
l.prototype.type="line"
const u=l},2806:(t,e,n)=>{n.d(e,{A:()=>l})
var i=n(4784),r=n(4427),o=n(4878),a=function(){this.points=null,this.smooth=0,this.smoothConstraint=null},s=function(t){function e(e){return t.call(this,e)||this}return(0,i.C6)(e,t),e.prototype.getDefaultShape=function(){return new a},e.prototype.buildPath=function(t,e){o.U(t,e,!0)},e}(r.Ay)
s.prototype.type="polygon"
const l=s},6826:(t,e,n)=>{n.d(e,{A:()=>l})
var i=n(4784),r=n(4427),o=n(4878),a=function(){this.points=null,this.percent=1,this.smooth=0,this.smoothConstraint=null},s=function(t){function e(e){return t.call(this,e)||this}return(0,i.C6)(e,t),e.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},e.prototype.getDefaultShape=function(){return new a},e.prototype.buildPath=function(t,e){o.U(t,e,!1)},e}(r.Ay)
s.prototype.type="polyline"
const l=s},4130:(t,e,n)=>{n.d(e,{A:()=>u})
var i=n(4784),r=n(4427),o=n(3302),a=function(){this.x=0,this.y=0,this.width=0,this.height=0},s={},l=function(t){function e(e){return t.call(this,e)||this}return(0,i.C6)(e,t),e.prototype.getDefaultShape=function(){return new a},e.prototype.buildPath=function(t,e){var n,i,r,a
if(this.subPixelOptimize){var l=(0,o.Op)(s,e,this.style)
n=l.x,i=l.y,r=l.width,a=l.height,l.r=e.r,e=l}else n=e.x,i=e.y,r=e.width,a=e.height
e.r?function(t,e){var n,i,r,o,a,s=e.x,l=e.y,u=e.width,h=e.height,c=e.r
u<0&&(s+=u,u=-u),h<0&&(l+=h,h=-h),"number"==typeof c?n=i=r=o=c:c instanceof Array?1===c.length?n=i=r=o=c[0]:2===c.length?(n=r=c[0],i=o=c[1]):3===c.length?(n=c[0],i=o=c[1],r=c[2]):(n=c[0],i=c[1],r=c[2],o=c[3]):n=i=r=o=0,n+i>u&&(n*=u/(a=n+i),i*=u/a),r+o>u&&(r*=u/(a=r+o),o*=u/a),i+r>h&&(i*=h/(a=i+r),r*=h/a),n+o>h&&(n*=h/(a=n+o),o*=h/a),t.moveTo(s+n,l),t.lineTo(s+u-i,l),0!==i&&t.arc(s+u-i,l+i,i,-Math.PI/2,0),t.lineTo(s+u,l+h-r),0!==r&&t.arc(s+u-r,l+h-r,r,0,Math.PI/2),t.lineTo(s+o,l+h),0!==o&&t.arc(s+o,l+h-o,o,Math.PI/2,Math.PI),t.lineTo(s,l+n),0!==n&&t.arc(s+n,l+n,n,Math.PI,1.5*Math.PI)}(t,e):t.rect(n,i,r,a)},e.prototype.isZeroArea=function(){return!this.shape.width||!this.shape.height},e}(r.Ay)
l.prototype.type="rect"
const u=l},1770:(t,e,n)=>{n.d(e,{A:()=>x})
var i=n(4784),r=n(4427),o=n(8301),a=Math.PI,s=2*a,l=Math.sin,u=Math.cos,h=Math.acos,c=Math.atan2,d=Math.abs,p=Math.sqrt,f=Math.max,g=Math.min,y=1e-4
function v(t,e,n,i,r,o,a){var s=t-n,l=e-i,u=(a?o:-o)/p(s*s+l*l),h=u*l,c=-u*s,d=t+h,g=e+c,y=n+h,v=i+c,m=(d+y)/2,_=(g+v)/2,x=y-d,b=v-g,w=x*x+b*b,A=r-o,S=d*v-y*g,M=(b<0?-1:1)*p(f(0,A*A*w-S*S)),T=(S*b-x*M)/w,I=(-S*x-b*M)/w,C=(S*b+x*M)/w,D=(-S*x+b*M)/w,k=T-m,L=I-_,P=C-m,O=D-_
return k*k+L*L>P*P+O*O&&(T=C,I=D),{cx:T,cy:I,x0:-h,y0:-c,x1:T*(r/A-1),y1:I*(r/A-1)}}var m=function(){this.cx=0,this.cy=0,this.r0=0,this.r=0,this.startAngle=0,this.endAngle=2*Math.PI,this.clockwise=!0,this.cornerRadius=0},_=function(t){function e(e){return t.call(this,e)||this}return(0,i.C6)(e,t),e.prototype.getDefaultShape=function(){return new m},e.prototype.buildPath=function(t,e){!function(t,e){var n,i=f(e.r,0),r=f(e.r0||0,0),m=i>0
if(m||r>0){if(m||(i=r,r=0),r>i){var _=i
i=r,r=_}var x=e.startAngle,b=e.endAngle
if(!isNaN(x)&&!isNaN(b)){var w=e.cx,A=e.cy,S=!!e.clockwise,M=d(b-x),T=M>s&&M%s
if(T>y&&(M=T),i>y)if(M>s-y)t.moveTo(w+i*u(x),A+i*l(x)),t.arc(w,A,i,x,b,!S),r>y&&(t.moveTo(w+r*u(b),A+r*l(b)),t.arc(w,A,r,b,x,S))
else{var I=void 0,C=void 0,D=void 0,k=void 0,L=void 0,P=void 0,O=void 0,N=void 0,R=void 0,E=void 0,z=void 0,B=void 0,V=void 0,F=void 0,W=void 0,H=void 0,G=i*u(x),j=i*l(x),X=r*u(b),Y=r*l(b),U=M>y
if(U){var Z=e.cornerRadius
Z&&(I=(n=function(t){var e
if((0,o.cy)(t)){var n=t.length
if(!n)return t
e=1===n?[t[0],t[0],0,0]:2===n?[t[0],t[0],t[1],t[1]]:3===n?t.concat(t[2]):t}else e=[t,t,t,t]
return e}(Z))[0],C=n[1],D=n[2],k=n[3])
var $=d(i-r)/2
if(L=g($,D),P=g($,k),O=g($,I),N=g($,C),z=R=f(L,P),B=E=f(O,N),(R>y||E>y)&&(V=i*u(b),F=i*l(b),W=r*u(x),H=r*l(x),M<a)){var q=function(t,e,n,i,r,o,a,s){var l=n-t,u=i-e,h=a-r,c=s-o,d=c*l-h*u
if(!(d*d<y))return[t+(d=(h*(e-o)-c*(t-r))/d)*l,e+d*u]}(G,j,W,H,V,F,X,Y)
if(q){var K=G-q[0],Q=j-q[1],J=V-q[0],tt=F-q[1],et=1/l(h((K*J+Q*tt)/(p(K*K+Q*Q)*p(J*J+tt*tt)))/2),nt=p(q[0]*q[0]+q[1]*q[1])
z=g(R,(i-nt)/(et+1)),B=g(E,(r-nt)/(et-1))}}}if(U)if(z>y){var it=g(D,z),rt=g(k,z),ot=v(W,H,G,j,i,it,S),at=v(V,F,X,Y,i,rt,S)
t.moveTo(w+ot.cx+ot.x0,A+ot.cy+ot.y0),z<R&&it===rt?t.arc(w+ot.cx,A+ot.cy,z,c(ot.y0,ot.x0),c(at.y0,at.x0),!S):(it>0&&t.arc(w+ot.cx,A+ot.cy,it,c(ot.y0,ot.x0),c(ot.y1,ot.x1),!S),t.arc(w,A,i,c(ot.cy+ot.y1,ot.cx+ot.x1),c(at.cy+at.y1,at.cx+at.x1),!S),rt>0&&t.arc(w+at.cx,A+at.cy,rt,c(at.y1,at.x1),c(at.y0,at.x0),!S))}else t.moveTo(w+G,A+j),t.arc(w,A,i,x,b,!S)
else t.moveTo(w+G,A+j)
r>y&&U?B>y?(it=g(I,B),ot=v(X,Y,V,F,r,-(rt=g(C,B)),S),at=v(G,j,W,H,r,-it,S),t.lineTo(w+ot.cx+ot.x0,A+ot.cy+ot.y0),B<E&&it===rt?t.arc(w+ot.cx,A+ot.cy,B,c(ot.y0,ot.x0),c(at.y0,at.x0),!S):(rt>0&&t.arc(w+ot.cx,A+ot.cy,rt,c(ot.y0,ot.x0),c(ot.y1,ot.x1),!S),t.arc(w,A,r,c(ot.cy+ot.y1,ot.cx+ot.x1),c(at.cy+at.y1,at.cx+at.x1),S),it>0&&t.arc(w+at.cx,A+at.cy,it,c(at.y1,at.x1),c(at.y0,at.x0),!S))):(t.lineTo(w+X,A+Y),t.arc(w,A,r,b,x,S)):t.lineTo(w+X,A+Y)}else t.moveTo(w,A)
t.closePath()}}}(t,e)},e.prototype.isZeroArea=function(){return this.shape.startAngle===this.shape.endAngle||this.shape.r===this.shape.r0},e}(r.Ay)
_.prototype.type="sector"
const x=_},7435:(t,e,n)=>{n.d(e,{As:()=>b,Cc:()=>x,P:()=>S,fN:()=>w,qg:()=>v})
var i=n(4592),r=n(8301),o={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]}
function a(t){return(t=Math.round(t))<0?0:t>255?255:t}function s(t){return t<0?0:t>1?1:t}function l(t){var e=t
return e.length&&"%"===e.charAt(e.length-1)?a(parseFloat(e)/100*255):a(parseInt(e,10))}function u(t){var e=t
return e.length&&"%"===e.charAt(e.length-1)?s(parseFloat(e)/100):s(parseFloat(e))}function h(t,e,n){return n<0?n+=1:n>1&&(n-=1),6*n<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}function c(t,e,n){return t+(e-t)*n}function d(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function p(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}var f=new i.Ay(20),g=null
function y(t,e){g&&p(g,e),g=f.put(t,g||e.slice())}function v(t,e){if(t){e=e||[]
var n=f.get(t)
if(n)return p(e,n)
var i=(t+="").replace(/ /g,"").toLowerCase()
if(i in o)return p(e,o[i]),y(t,e),e
var r,a=i.length
if("#"===i.charAt(0))return 4===a||5===a?(r=parseInt(i.slice(1,4),16))>=0&&r<=4095?(d(e,(3840&r)>>4|(3840&r)>>8,240&r|(240&r)>>4,15&r|(15&r)<<4,5===a?parseInt(i.slice(4),16)/15:1),y(t,e),e):void d(e,0,0,0,1):7===a||9===a?(r=parseInt(i.slice(1,7),16))>=0&&r<=16777215?(d(e,(16711680&r)>>16,(65280&r)>>8,255&r,9===a?parseInt(i.slice(7),16)/255:1),y(t,e),e):void d(e,0,0,0,1):void 0
var s=i.indexOf("("),h=i.indexOf(")")
if(-1!==s&&h+1===a){var c=i.substr(0,s),g=i.substr(s+1,h-(s+1)).split(","),v=1
switch(c){case"rgba":if(4!==g.length)return 3===g.length?d(e,+g[0],+g[1],+g[2],1):d(e,0,0,0,1)
v=u(g.pop())
case"rgb":return g.length>=3?(d(e,l(g[0]),l(g[1]),l(g[2]),3===g.length?v:u(g[3])),y(t,e),e):void d(e,0,0,0,1)
case"hsla":return 4!==g.length?void d(e,0,0,0,1):(g[3]=u(g[3]),m(g,e),y(t,e),e)
case"hsl":return 3!==g.length?void d(e,0,0,0,1):(m(g,e),y(t,e),e)
default:return}}d(e,0,0,0,1)}}function m(t,e){var n=(parseFloat(t[0])%360+360)%360/360,i=u(t[1]),r=u(t[2]),o=r<=.5?r*(i+1):r+i-r*i,s=2*r-o
return d(e=e||[],a(255*h(s,o,n+1/3)),a(255*h(s,o,n)),a(255*h(s,o,n-1/3)),1),4===t.length&&(e[3]=t[3]),e}function _(t,e){var n=v(t)
if(n){for(var i=0;i<3;i++)n[i]=e<0?n[i]*(1-e)|0:(255-n[i])*e+n[i]|0,n[i]>255?n[i]=255:n[i]<0&&(n[i]=0)
return b(n,4===n.length?"rgba":"rgb")}}function x(t,e,n){if(e&&e.length&&t>=0&&t<=1){var i=t*(e.length-1),r=Math.floor(i),o=Math.ceil(i),l=v(e[r]),u=v(e[o]),h=i-r,d=b([a(c(l[0],u[0],h)),a(c(l[1],u[1],h)),a(c(l[2],u[2],h)),s(c(l[3],u[3],h))],"rgba")
return n?{color:d,leftIndex:r,rightIndex:o,value:i}:d}}function b(t,e){if(t&&t.length){var n=t[0]+","+t[1]+","+t[2]
return"rgba"!==e&&"hsva"!==e&&"hsla"!==e||(n+=","+t[3]),e+"("+n+")"}}function w(t,e){var n=v(t)
return n?(.299*n[0]+.587*n[1]+.114*n[2])*n[3]/255+(1-n[3])*e:0}var A=new i.Ay(100)
function S(t){if((0,r.Kg)(t)){var e=A.get(t)
return e||(e=_(t,-.1),A.put(t,e)),e}if((0,r.C7)(t)){var n=(0,r.X$)({},t)
return n.colorStops=(0,r.Tj)(t.colorStops,(function(t){return{offset:t.offset,color:_(t.color,-.1)}})),n}return t}},7662:(t,e,n)=>{n.d(e,{Ts:()=>ot,fI:()=>at,jW:()=>st})
var i=n(9714),r=n(8301),o=n(4784),a=n(1150),s=function(t,e){this.target=t,this.topTarget=e&&e.topTarget}
const l=function(){function t(t){this.handler=t,t.on("mousedown",this._dragStart,this),t.on("mousemove",this._drag,this),t.on("mouseup",this._dragEnd,this)}return t.prototype._dragStart=function(t){for(var e=t.target;e&&!e.draggable;)e=e.parent||e.__hostTarget
e&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.handler.dispatchToElement(new s(e,t),"dragstart",t.event))},t.prototype._drag=function(t){var e=this._draggingTarget
if(e){var n=t.offsetX,i=t.offsetY,r=n-this._x,o=i-this._y
this._x=n,this._y=i,e.drift(r,o,t),this.handler.dispatchToElement(new s(e,t),"drag",t.event)
var a=this.handler.findHover(n,i,e).target,l=this._dropTarget
this._dropTarget=a,e!==a&&(l&&a!==l&&this.handler.dispatchToElement(new s(l,t),"dragleave",t.event),a&&a!==l&&this.handler.dispatchToElement(new s(a,t),"dragenter",t.event))}},t.prototype._dragEnd=function(t){var e=this._draggingTarget
e&&(e.dragging=!1),this.handler.dispatchToElement(new s(e,t),"dragend",t.event),this._dropTarget&&this.handler.dispatchToElement(new s(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null},t}()
var u=n(9430),h=n(6885),c=function(){function t(){this._track=[]}return t.prototype.recognize=function(t,e,n){return this._doTrack(t,e,n),this._recognize(t)},t.prototype.clear=function(){return this._track.length=0,this},t.prototype._doTrack=function(t,e,n){var i=t.touches
if(i){for(var r={points:[],touches:[],target:e,event:t},o=0,a=i.length;o<a;o++){var s=i[o],l=h.Yo(n,s,{})
r.points.push([l.zrX,l.zrY]),r.touches.push(s)}this._track.push(r)}},t.prototype._recognize=function(t){for(var e in p)if(p.hasOwnProperty(e)){var n=p[e](this._track,t)
if(n)return n}},t}()
function d(t){var e=t[1][0]-t[0][0],n=t[1][1]-t[0][1]
return Math.sqrt(e*e+n*n)}var p={pinch:function(t,e){var n=t.length
if(n){var i,r=(t[n-1]||{}).points,o=(t[n-2]||{}).points||r
if(o&&o.length>1&&r&&r.length>1){var a=d(r)/d(o)
!isFinite(a)&&(a=1),e.pinchScale=a
var s=[((i=r)[0][0]+i[1][0])/2,(i[0][1]+i[1][1])/2]
return e.pinchX=s[0],e.pinchY=s[1],{type:"pinch",target:t[0].target,event:e}}}}},f=n(4703),g="silent"
function y(){h.ds(this.event)}var v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this
return e.handler=null,e}return(0,o.C6)(e,t),e.prototype.dispose=function(){},e.prototype.setCursor=function(){},e}(u.A),m=function(t,e){this.x=t,this.y=e},_=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],x=new f.A(0,0,0,0),b=function(t){function e(e,n,i,r,o){var a=t.call(this)||this
return a._hovered=new m(0,0),a.storage=e,a.painter=n,a.painterRoot=r,a._pointerSize=o,i=i||new v,a.proxy=null,a.setHandlerProxy(i),a._draggingMgr=new l(a),a}return(0,o.C6)(e,t),e.prototype.setHandlerProxy=function(t){this.proxy&&this.proxy.dispose(),t&&(r.__(_,(function(e){t.on&&t.on(e,this[e],this)}),this),t.handler=this),this.proxy=t},e.prototype.mousemove=function(t){var e=t.zrX,n=t.zrY,i=S(this,e,n),r=this._hovered,o=r.target
o&&!o.__zr&&(o=(r=this.findHover(r.x,r.y)).target)
var a=this._hovered=i?new m(e,n):this.findHover(e,n),s=a.target,l=this.proxy
l.setCursor&&l.setCursor(s?s.cursor:"default"),o&&s!==o&&this.dispatchToElement(r,"mouseout",t),this.dispatchToElement(a,"mousemove",t),s&&s!==o&&this.dispatchToElement(a,"mouseover",t)},e.prototype.mouseout=function(t){var e=t.zrEventControl
"only_globalout"!==e&&this.dispatchToElement(this._hovered,"mouseout",t),"no_globalout"!==e&&this.trigger("globalout",{type:"globalout",event:t})},e.prototype.resize=function(){this._hovered=new m(0,0)},e.prototype.dispatch=function(t,e){var n=this[t]
n&&n.call(this,e)},e.prototype.dispose=function(){this.proxy.dispose(),this.storage=null,this.proxy=null,this.painter=null},e.prototype.setCursorStyle=function(t){var e=this.proxy
e.setCursor&&e.setCursor(t)},e.prototype.dispatchToElement=function(t,e,n){var i=(t=t||{}).target
if(!i||!i.silent){for(var r="on"+e,o=function(t,e,n){return{type:t,event:n,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:n.zrX,offsetY:n.zrY,gestureEvent:n.gestureEvent,pinchX:n.pinchX,pinchY:n.pinchY,pinchScale:n.pinchScale,wheelDelta:n.zrDelta,zrByTouch:n.zrByTouch,which:n.which,stop:y}}(e,t,n);i&&(i[r]&&(o.cancelBubble=!!i[r].call(i,o)),i.trigger(e,o),i=i.__hostTarget?i.__hostTarget:i.parent,!o.cancelBubble););o.cancelBubble||(this.trigger(e,o),this.painter&&this.painter.eachOtherLayer&&this.painter.eachOtherLayer((function(t){"function"==typeof t[r]&&t[r].call(t,o),t.trigger&&t.trigger(e,o)})))}},e.prototype.findHover=function(t,e,n){var i=this.storage.getDisplayList(),r=new m(t,e)
if(A(i,r,t,e,n),this._pointerSize&&!r.target){for(var o=[],a=this._pointerSize,s=a/2,l=new f.A(t-s,e-s,a,a),u=i.length-1;u>=0;u--){var h=i[u]
h===n||h.ignore||h.ignoreCoarsePointer||h.parent&&h.parent.ignoreCoarsePointer||(x.copy(h.getBoundingRect()),h.transform&&x.applyTransform(h.transform),x.intersect(l)&&o.push(h))}if(o.length)for(var c=Math.PI/12,d=2*Math.PI,p=0;p<s;p+=4)for(var g=0;g<d;g+=c)if(A(o,r,t+p*Math.cos(g),e+p*Math.sin(g),n),r.target)return r}return r},e.prototype.processGesture=function(t,e){this._gestureMgr||(this._gestureMgr=new c)
var n=this._gestureMgr
"start"===e&&n.clear()
var i=n.recognize(t,this.findHover(t.zrX,t.zrY,null).target,this.proxy.dom)
if("end"===e&&n.clear(),i){var r=i.type
t.gestureEvent=r
var o=new m
o.target=i.target,this.dispatchToElement(o,r,i.event)}},e}(u.A)
function w(t,e,n){if(t[t.rectHover?"rectContain":"contain"](e,n)){for(var i=t,r=void 0,o=!1;i;){if(i.ignoreClip&&(o=!0),!o){var a=i.getClipPath()
if(a&&!a.contain(e,n))return!1}i.silent&&(r=!0),i=i.__hostTarget||i.parent}return!r||g}return!1}function A(t,e,n,i,r){for(var o=t.length-1;o>=0;o--){var a=t[o],s=void 0
if(a!==r&&!a.ignore&&(s=w(a,n,i))&&(!e.topTarget&&(e.topTarget=a),s!==g)){e.target=a
break}}}function S(t,e,n){var i=t.painter
return e<0||e>i.getWidth()||n<0||n>i.getHeight()}r.__(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],(function(t){b.prototype[t]=function(e){var n,i,r=e.zrX,o=e.zrY,s=S(this,r,o)
if("mouseup"===t&&s||(i=(n=this.findHover(r,o)).target),"mousedown"===t)this._downEl=i,this._downPoint=[e.zrX,e.zrY],this._upEl=i
else if("mouseup"===t)this._upEl=i
else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||a.xg(this._downPoint,[e.zrX,e.zrY])>4)return
this._downPoint=null}this.dispatchToElement(n,t,e)}}))
const M=b
var T=n(4891),I=n(5451),C=!1
function D(){C||(C=!0,console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"))}function k(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}const L=function(){function t(){this._roots=[],this._displayList=[],this._displayListLen=0,this.displayableSortFunc=k}return t.prototype.traverse=function(t,e){for(var n=0;n<this._roots.length;n++)this._roots[n].traverse(t,e)},t.prototype.getDisplayList=function(t,e){e=e||!1
var n=this._displayList
return!t&&n.length||this.updateDisplayList(e),n},t.prototype.updateDisplayList=function(t){this._displayListLen=0
for(var e=this._roots,n=this._displayList,i=0,r=e.length;i<r;i++)this._updateAndAddDisplayable(e[i],null,t)
n.length=this._displayListLen,(0,T.A)(n,k)},t.prototype._updateAndAddDisplayable=function(t,e,n){if(!t.ignore||n){t.beforeUpdate(),t.update(),t.afterUpdate()
var i=t.getClipPath()
if(t.ignoreClip)e=null
else if(i){e=e?e.slice():[]
for(var r=i,o=t;r;)r.parent=o,r.updateTransform(),e.push(r),o=r,r=r.getClipPath()}if(t.childrenRef){for(var a=t.childrenRef(),s=0;s<a.length;s++){var l=a[s]
t.__dirty&&(l.__dirty|=I.M),this._updateAndAddDisplayable(l,e,n)}t.__dirty=0}else{var u=t
e&&e.length?u.__clipPaths=e:u.__clipPaths&&u.__clipPaths.length>0&&(u.__clipPaths=[]),isNaN(u.z)&&(D(),u.z=0),isNaN(u.z2)&&(D(),u.z2=0),isNaN(u.zlevel)&&(D(),u.zlevel=0),this._displayList[this._displayListLen++]=u}var h=t.getDecalElement&&t.getDecalElement()
h&&this._updateAndAddDisplayable(h,e,n)
var c=t.getTextGuideLine()
c&&this._updateAndAddDisplayable(c,e,n)
var d=t.getTextContent()
d&&this._updateAndAddDisplayable(d,e,n)}},t.prototype.addRoot=function(t){t.__zr&&t.__zr.storage===this||this._roots.push(t)},t.prototype.delRoot=function(t){if(t instanceof Array)for(var e=0,n=t.length;e<n;e++)this.delRoot(t[e])
else{var i=r.qh(this._roots,t)
i>=0&&this._roots.splice(i,1)}},t.prototype.delAllRoots=function(){this._roots=[],this._displayList=[],this._displayListLen=0},t.prototype.getRoots=function(){return this._roots},t.prototype.dispose=function(){this._displayList=null,this._roots=null},t}()
var P=n(8694),O=n(160)
function N(){return(new Date).getTime()}const R=function(t){function e(e){var n=t.call(this)||this
return n._running=!1,n._time=0,n._pausedTime=0,n._pauseStart=0,n._paused=!1,e=e||{},n.stage=e.stage||{},n}return(0,o.C6)(e,t),e.prototype.addClip=function(t){t.animation&&this.removeClip(t),this._head?(this._tail.next=t,t.prev=this._tail,t.next=null,this._tail=t):this._head=this._tail=t,t.animation=this},e.prototype.addAnimator=function(t){t.animation=this
var e=t.getClip()
e&&this.addClip(e)},e.prototype.removeClip=function(t){if(t.animation){var e=t.prev,n=t.next
e?e.next=n:this._head=n,n?n.prev=e:this._tail=e,t.next=t.prev=t.animation=null}},e.prototype.removeAnimator=function(t){var e=t.getClip()
e&&this.removeClip(e),t.animation=null},e.prototype.update=function(t){for(var e=N()-this._pausedTime,n=e-this._time,i=this._head;i;){var r=i.next
i.step(e,n)?(i.ondestroy(),this.removeClip(i),i=r):i=r}this._time=e,t||(this.trigger("frame",n),this.stage.update&&this.stage.update())},e.prototype._startLoop=function(){var t=this
this._running=!0,(0,P.A)((function e(){t._running&&((0,P.A)(e),!t._paused&&t.update())}))},e.prototype.start=function(){this._running||(this._time=N(),this._pausedTime=0,this._startLoop())},e.prototype.stop=function(){this._running=!1},e.prototype.pause=function(){this._paused||(this._pauseStart=N(),this._paused=!0)},e.prototype.resume=function(){this._paused&&(this._pausedTime+=N()-this._pauseStart,this._paused=!1)},e.prototype.clear=function(){for(var t=this._head;t;){var e=t.next
t.prev=t.next=t.animation=null,t=e}this._head=this._tail=null},e.prototype.isFinished=function(){return null==this._head},e.prototype.animate=function(t,e){e=e||{},this.start()
var n=new O.A(t,e.loop)
return this.addAnimator(n),n},e}(u.A)
var E,z,B=i.A.domSupported,V=(z={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},{mouse:E=["click","dblclick","mousewheel","wheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],touch:["touchstart","touchend","touchmove"],pointer:r.Tj(E,(function(t){var e=t.replace("mouse","pointer")
return z.hasOwnProperty(e)?e:t}))}),F=["mousemove","mouseup"],W=["pointermove","pointerup"],H=!1
function G(t){var e=t.pointerType
return"pen"===e||"touch"===e}function j(t){t&&(t.zrByTouch=!0)}function X(t,e){for(var n=e,i=!1;n&&9!==n.nodeType&&!(i=n.domBelongToZr||n!==e&&n===t.painterRoot);)n=n.parentNode
return i}var Y=function(t,e){this.stopPropagation=r.lQ,this.stopImmediatePropagation=r.lQ,this.preventDefault=r.lQ,this.type=e.type,this.target=this.currentTarget=t.dom,this.pointerType=e.pointerType,this.clientX=e.clientX,this.clientY=e.clientY},U={mousedown:function(t){t=(0,h.e0)(this.dom,t),this.__mayPointerCapture=[t.zrX,t.zrY],this.trigger("mousedown",t)},mousemove:function(t){t=(0,h.e0)(this.dom,t)
var e=this.__mayPointerCapture
!e||t.zrX===e[0]&&t.zrY===e[1]||this.__togglePointerCapture(!0),this.trigger("mousemove",t)},mouseup:function(t){t=(0,h.e0)(this.dom,t),this.__togglePointerCapture(!1),this.trigger("mouseup",t)},mouseout:function(t){X(this,(t=(0,h.e0)(this.dom,t)).toElement||t.relatedTarget)||(this.__pointerCapturing&&(t.zrEventControl="no_globalout"),this.trigger("mouseout",t))},wheel:function(t){H=!0,t=(0,h.e0)(this.dom,t),this.trigger("mousewheel",t)},mousewheel:function(t){H||(t=(0,h.e0)(this.dom,t),this.trigger("mousewheel",t))},touchstart:function(t){j(t=(0,h.e0)(this.dom,t)),this.__lastTouchMoment=new Date,this.handler.processGesture(t,"start"),U.mousemove.call(this,t),U.mousedown.call(this,t)},touchmove:function(t){j(t=(0,h.e0)(this.dom,t)),this.handler.processGesture(t,"change"),U.mousemove.call(this,t)},touchend:function(t){j(t=(0,h.e0)(this.dom,t)),this.handler.processGesture(t,"end"),U.mouseup.call(this,t),+new Date-+this.__lastTouchMoment<300&&U.click.call(this,t)},pointerdown:function(t){U.mousedown.call(this,t)},pointermove:function(t){G(t)||U.mousemove.call(this,t)},pointerup:function(t){U.mouseup.call(this,t)},pointerout:function(t){G(t)||U.mouseout.call(this,t)}}
r.__(["click","dblclick","contextmenu"],(function(t){U[t]=function(e){e=(0,h.e0)(this.dom,e),this.trigger(t,e)}}))
var Z={pointermove:function(t){G(t)||Z.mousemove.call(this,t)},pointerup:function(t){Z.mouseup.call(this,t)},mousemove:function(t){this.trigger("mousemove",t)},mouseup:function(t){var e=this.__pointerCapturing
this.__togglePointerCapture(!1),this.trigger("mouseup",t),e&&(t.zrEventControl="only_globalout",this.trigger("mouseout",t))}}
function $(t,e,n,i){t.mounted[e]=n,t.listenerOpts[e]=i,(0,h.q2)(t.domTarget,e,n,i)}function q(t){var e=t.mounted
for(var n in e)e.hasOwnProperty(n)&&(0,h.f)(t.domTarget,n,e[n],t.listenerOpts[n])
t.mounted={}}var K=function(t,e){this.mounted={},this.listenerOpts={},this.touching=!1,this.domTarget=t,this.domHandlers=e}
const Q=function(t){function e(e,n){var o,a,s,l=t.call(this)||this
return l.__pointerCapturing=!1,l.dom=e,l.painterRoot=n,l._localHandlerScope=new K(e,U),B&&(l._globalHandlerScope=new K(document,Z)),o=l,a=l._localHandlerScope,s=a.domHandlers,i.A.pointerEventsSupported?r.__(V.pointer,(function(t){$(a,t,(function(e){s[t].call(o,e)}))})):(i.A.touchEventsSupported&&r.__(V.touch,(function(t){$(a,t,(function(e){s[t].call(o,e),function(t){t.touching=!0,null!=t.touchTimer&&(clearTimeout(t.touchTimer),t.touchTimer=null),t.touchTimer=setTimeout((function(){t.touching=!1,t.touchTimer=null}),700)}(a)}))})),r.__(V.mouse,(function(t){$(a,t,(function(e){e=(0,h.mK)(e),a.touching||s[t].call(o,e)}))}))),l}return(0,o.C6)(e,t),e.prototype.dispose=function(){q(this._localHandlerScope),B&&q(this._globalHandlerScope)},e.prototype.setCursor=function(t){this.dom.style&&(this.dom.style.cursor=t||"default")},e.prototype.__togglePointerCapture=function(t){if(this.__mayPointerCapture=null,B&&+this.__pointerCapturing^+t){this.__pointerCapturing=t
var e=this._globalHandlerScope
t?function(t,e){function n(n){$(e,n,(function(i){i=(0,h.mK)(i),X(t,i.target)||(i=function(t,e){return(0,h.e0)(t.dom,new Y(t,e),!0)}(t,i),e.domHandlers[n].call(t,i))}),{capture:!0})}i.A.pointerEventsSupported?r.__(W,n):i.A.touchEventsSupported||r.__(F,n)}(this,e):q(e)}},e}(u.A)
var J=n(7435),tt=n(5499),et=n(7941),nt={},it={},rt=function(){function t(t,e,n){var o=this
this._sleepAfterStill=10,this._stillFrameAccum=0,this._needsRefresh=!0,this._needsRefreshHover=!0,this._darkMode=!1,n=n||{},this.dom=e,this.id=t
var a=new L,s=n.renderer||"canvas"
nt[s]||(s=r.HP(nt)[0]),n.useDirtyRect=null!=n.useDirtyRect&&n.useDirtyRect
var l=new nt[s](e,a,n,t),u=n.ssr||l.ssrOnly
this.storage=a,this.painter=l
var h,c=i.A.node||i.A.worker||u?null:new Q(l.getViewportRoot(),l.root),d=n.useCoarsePointer;(null==d||"auto"===d?i.A.touchEventsSupported:!!d)&&(h=r.bZ(n.pointerSize,44)),this.handler=new M(a,l,c,l.root,h),this.animation=new R({stage:{update:u?null:function(){return o._flush(!0)}}}),u||this.animation.start()}return t.prototype.add=function(t){!this._disposed&&t&&(this.storage.addRoot(t),t.addSelfToZr(this),this.refresh())},t.prototype.remove=function(t){!this._disposed&&t&&(this.storage.delRoot(t),t.removeSelfFromZr(this),this.refresh())},t.prototype.configLayer=function(t,e){this._disposed||(this.painter.configLayer&&this.painter.configLayer(t,e),this.refresh())},t.prototype.setBackgroundColor=function(t){this._disposed||(this.painter.setBackgroundColor&&this.painter.setBackgroundColor(t),this.refresh(),this._backgroundColor=t,this._darkMode=function(t){if(!t)return!1
if("string"==typeof t)return(0,J.fN)(t,1)<tt.ps
if(t.colorStops){for(var e=t.colorStops,n=0,i=e.length,r=0;r<i;r++)n+=(0,J.fN)(e[r].color,1)
return(n/=i)<tt.ps}return!1}(t))},t.prototype.getBackgroundColor=function(){return this._backgroundColor},t.prototype.setDarkMode=function(t){this._darkMode=t},t.prototype.isDarkMode=function(){return this._darkMode},t.prototype.refreshImmediately=function(t){this._disposed||(t||this.animation.update(!0),this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1)},t.prototype.refresh=function(){this._disposed||(this._needsRefresh=!0,this.animation.start())},t.prototype.flush=function(){this._disposed||this._flush(!1)},t.prototype._flush=function(t){var e,n=N()
this._needsRefresh&&(e=!0,this.refreshImmediately(t)),this._needsRefreshHover&&(e=!0,this.refreshHoverImmediately())
var i=N()
e?(this._stillFrameAccum=0,this.trigger("rendered",{elapsedTime:i-n})):this._sleepAfterStill>0&&(this._stillFrameAccum++,this._stillFrameAccum>this._sleepAfterStill&&this.animation.stop())},t.prototype.setSleepAfterStill=function(t){this._sleepAfterStill=t},t.prototype.wakeUp=function(){this._disposed||(this.animation.start(),this._stillFrameAccum=0)},t.prototype.refreshHover=function(){this._needsRefreshHover=!0},t.prototype.refreshHoverImmediately=function(){this._disposed||(this._needsRefreshHover=!1,this.painter.refreshHover&&"canvas"===this.painter.getType()&&this.painter.refreshHover())},t.prototype.resize=function(t){this._disposed||(t=t||{},this.painter.resize(t.width,t.height),this.handler.resize())},t.prototype.clearAnimation=function(){this._disposed||this.animation.clear()},t.prototype.getWidth=function(){if(!this._disposed)return this.painter.getWidth()},t.prototype.getHeight=function(){if(!this._disposed)return this.painter.getHeight()},t.prototype.setCursorStyle=function(t){this._disposed||this.handler.setCursorStyle(t)},t.prototype.findHover=function(t,e){if(!this._disposed)return this.handler.findHover(t,e)},t.prototype.on=function(t,e,n){return this._disposed||this.handler.on(t,e,n),this},t.prototype.off=function(t,e){this._disposed||this.handler.off(t,e)},t.prototype.trigger=function(t,e){this._disposed||this.handler.trigger(t,e)},t.prototype.clear=function(){if(!this._disposed){for(var t=this.storage.getRoots(),e=0;e<t.length;e++)t[e]instanceof et.A&&t[e].removeSelfFromZr(this)
this.storage.delAllRoots(),this.painter.clear()}},t.prototype.dispose=function(){var t
this._disposed||(this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null,this._disposed=!0,t=this.id,delete it[t])},t}()
function ot(t,e){var n=new rt(r.Os(),t,e)
return it[n.id]=n,n}function at(t,e){nt[t]=e}function st(t){}}}])

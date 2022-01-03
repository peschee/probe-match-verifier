var In=Object.defineProperty,Hn=Object.defineProperties;var Un=Object.getOwnPropertyDescriptors;var jt=Object.getOwnPropertySymbols;var Fn=Object.prototype.hasOwnProperty,Zn=Object.prototype.propertyIsEnumerable;var Xt=(t,e,r)=>e in t?In(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ge=(t,e)=>{for(var r in e||(e={}))Fn.call(e,r)&&Xt(t,r,e[r]);if(jt)for(var r of jt(e))Zn.call(e,r)&&Xt(t,r,e[r]);return t},Ye=(t,e)=>Hn(t,Un(e));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vt=Symbol(),qt=new Map;class Gn{constructor(e,r){if(this._$cssResult$=!0,r!==Vt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=qt.get(this.cssText);return ct&&e===void 0&&(qt.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const Yn=t=>new Gn(typeof t=="string"?t:t+"",Vt),jn=(t,e)=>{ct?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{const n=document.createElement("style"),i=window.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)})},Wt=ct?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return Yn(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ht;const Kt=window.trustedTypes,Xn=Kt?Kt.emptyScript:"",Qt=window.reactiveElementPolyfillSupport,dt={toAttribute(t,e){switch(e){case Boolean:t=t?Xn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Jt=(t,e)=>e!==t&&(e==e||t==t),pt={attribute:!0,type:String,converter:dt,reflect:!1,hasChanged:Jt};class se extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var r;(r=this.l)!==null&&r!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((r,n)=>{const i=this._$Eh(n,r);i!==void 0&&(this._$Eu.set(i,n),e.push(i))}),e}static createProperty(e,r=pt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,r);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){return{get(){return this[r]},set(i){const s=this[e];this[r]=i,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||pt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const i of n)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(Wt(i))}else e!==void 0&&r.push(Wt(e));return r}static _$Eh(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(r=>r(this))}addController(e){var r,n;((r=this._$Eg)!==null&&r!==void 0?r:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var r;(r=this._$Eg)===null||r===void 0||r.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Et.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;const r=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return jn(r,this.constructor.elementStyles),r}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$ES(e,r,n=pt){var i,s;const o=this.constructor._$Eh(e,n);if(o!==void 0&&n.reflect===!0){const l=((s=(i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&s!==void 0?s:dt.toAttribute)(r,n.type);this._$Ei=e,l==null?this.removeAttribute(o):this.setAttribute(o,l),this._$Ei=null}}_$AK(e,r){var n,i,s;const o=this.constructor,l=o._$Eu.get(e);if(l!==void 0&&this._$Ei!==l){const a=o.getPropertyOptions(l),u=a.converter,d=(s=(i=(n=u)===null||n===void 0?void 0:n.fromAttribute)!==null&&i!==void 0?i:typeof u=="function"?u:null)!==null&&s!==void 0?s:dt.fromAttribute;this._$Ei=l,this[l]=d(r,a.type),this._$Ei=null}}requestUpdate(e,r,n){let i=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Jt)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$Ei!==e&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,s)=>this[s]=i),this._$Et=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(e=this._$Eg)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(n)):this._$EU()}catch(i){throw r=!1,this._$EU(),i}r&&this._$AE(n)}willUpdate(e){}_$AE(e){var r;(r=this._$Eg)===null||r===void 0||r.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$E_!==void 0&&(this._$E_.forEach((r,n)=>this._$ES(n,this[n],r)),this._$E_=void 0),this._$EU()}updated(e){}firstUpdated(e){}}se.finalized=!0,se.elementProperties=new Map,se.elementStyles=[],se.shadowRootOptions={mode:"open"},Qt==null||Qt({ReactiveElement:se}),((ht=globalThis.reactiveElementVersions)!==null&&ht!==void 0?ht:globalThis.reactiveElementVersions=[]).push("1.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ft;const oe=globalThis.trustedTypes,Dt=oe?oe.createPolicy("lit-html",{createHTML:t=>t}):void 0,q=`lit$${(Math.random()+"").slice(9)}$`,er="?"+q,Vn=`<${er}>`,le=document,Ae=(t="")=>le.createComment(t),Ee=t=>t===null||typeof t!="object"&&typeof t!="function",tr=Array.isArray,qn=t=>{var e;return tr(t)||typeof((e=t)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},Se=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rr=/-->/g,nr=/>/g,ee=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ir=/'/g,sr=/"/g,or=/^(?:script|style|textarea)$/i,Wn=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),qo=Wn(1),te=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),lr=new WeakMap,Kn=(t,e,r)=>{var n,i;const s=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:e;let o=s._$litPart$;if(o===void 0){const l=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new Te(e.insertBefore(Ae(),l),l,void 0,r!=null?r:{})}return o._$AI(t),o},ae=le.createTreeWalker(le,129,null,!1),Qn=(t,e)=>{const r=t.length-1,n=[];let i,s=e===2?"<svg>":"",o=Se;for(let a=0;a<r;a++){const u=t[a];let d,c,h=-1,p=0;for(;p<u.length&&(o.lastIndex=p,c=o.exec(u),c!==null);)p=o.lastIndex,o===Se?c[1]==="!--"?o=rr:c[1]!==void 0?o=nr:c[2]!==void 0?(or.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=ee):c[3]!==void 0&&(o=ee):o===ee?c[0]===">"?(o=i!=null?i:Se,h=-1):c[1]===void 0?h=-2:(h=o.lastIndex-c[2].length,d=c[1],o=c[3]===void 0?ee:c[3]==='"'?sr:ir):o===sr||o===ir?o=ee:o===rr||o===nr?o=Se:(o=ee,i=void 0);const g=o===ee&&t[a+1].startsWith("/>")?" ":"";s+=o===Se?u+Vn:h>=0?(n.push(d),u.slice(0,h)+"$lit$"+u.slice(h)+q+g):u+q+(h===-2?(n.push(void 0),a):g)}const l=s+(t[r]||"<?>")+(e===2?"</svg>":"");return[Dt!==void 0?Dt.createHTML(l):l,n]};class Ce{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let s=0,o=0;const l=e.length-1,a=this.parts,[u,d]=Qn(e,r);if(this.el=Ce.createElement(u,n),ae.currentNode=this.el.content,r===2){const c=this.el.content,h=c.firstChild;h.remove(),c.append(...h.childNodes)}for(;(i=ae.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes()){const c=[];for(const h of i.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(q)){const p=d[o++];if(c.push(h),p!==void 0){const g=i.getAttribute(p.toLowerCase()+"$lit$").split(q),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:g,ctor:m[1]==="."?Dn:m[1]==="?"?ti:m[1]==="@"?ri:je})}else a.push({type:6,index:s})}for(const h of c)i.removeAttribute(h)}if(or.test(i.tagName)){const c=i.textContent.split(q),h=c.length-1;if(h>0){i.textContent=oe?oe.emptyScript:"";for(let p=0;p<h;p++)i.append(c[p],Ae()),ae.nextNode(),a.push({type:2,index:++s});i.append(c[h],Ae())}}}else if(i.nodeType===8)if(i.data===er)a.push({type:2,index:s});else{let c=-1;for(;(c=i.data.indexOf(q,c+1))!==-1;)a.push({type:7,index:s}),c+=q.length-1}s++}}static createElement(e,r){const n=le.createElement("template");return n.innerHTML=e,n}}function ue(t,e,r=t,n){var i,s,o,l;if(e===te)return e;let a=n!==void 0?(i=r._$Cl)===null||i===void 0?void 0:i[n]:r._$Cu;const u=Ee(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),u===void 0?a=void 0:(a=new u(t),a._$AT(t,r,n)),n!==void 0?((o=(l=r)._$Cl)!==null&&o!==void 0?o:l._$Cl=[])[n]=a:r._$Cu=a),a!==void 0&&(e=ue(t,a._$AS(t,e.values),a,n)),e}class Jn{constructor(e,r){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var r;const{el:{content:n},parts:i}=this._$AD,s=((r=e==null?void 0:e.creationScope)!==null&&r!==void 0?r:le).importNode(n,!0);ae.currentNode=s;let o=ae.nextNode(),l=0,a=0,u=i[0];for(;u!==void 0;){if(l===u.index){let d;u.type===2?d=new Te(o,o.nextSibling,this,e):u.type===1?d=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(d=new ni(o,this,e)),this.v.push(d),u=i[++a]}l!==(u==null?void 0:u.index)&&(o=ae.nextNode(),l++)}return s}m(e){let r=0;for(const n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class Te{constructor(e,r,n,i){var s;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cg=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var e,r;return(r=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&r!==void 0?r:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=ue(this,e,r),Ee(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==te&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.S(e):qn(e)?this.M(e):this.$(e)}A(e,r=this._$AB){return this._$AA.parentNode.insertBefore(e,r)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==N&&Ee(this._$AH)?this._$AA.nextSibling.data=e:this.S(le.createTextNode(e)),this._$AH=e}T(e){var r;const{values:n,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ce.createElement(i.h,this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.m(n);else{const o=new Jn(s,this),l=o.p(this.options);o.m(n),this.S(l),this._$AH=o}}_$AC(e){let r=lr.get(e.strings);return r===void 0&&lr.set(e.strings,r=new Ce(e)),r}M(e){tr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const s of e)i===r.length?r.push(n=new Te(this.A(Ae()),this.A(Ae()),this,this.options)):n=r[i],n._$AI(s),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cg=e,(r=this._$AP)===null||r===void 0||r.call(this,e))}}class je{constructor(e,r,n,i,s){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,n,i){const s=this.strings;let o=!1;if(s===void 0)e=ue(this,e,r,0),o=!Ee(e)||e!==this._$AH&&e!==te,o&&(this._$AH=e);else{const l=e;let a,u;for(e=s[0],a=0;a<s.length-1;a++)u=ue(this,l[n+a],r,a),u===te&&(u=this._$AH[a]),o||(o=!Ee(u)||u!==this._$AH[a]),u===N?e=N:e!==N&&(e+=(u!=null?u:"")+s[a+1]),this._$AH[a]=u}o&&!i&&this.k(e)}k(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Dn extends je{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===N?void 0:e}}const ei=oe?oe.emptyScript:"";class ti extends je{constructor(){super(...arguments),this.type=4}k(e){e&&e!==N?this.element.setAttribute(this.name,ei):this.element.removeAttribute(this.name)}}class ri extends je{constructor(e,r,n,i,s){super(e,r,n,i,s),this.type=5}_$AI(e,r=this){var n;if((e=(n=ue(this,e,r,0))!==null&&n!==void 0?n:N)===te)return;const i=this._$AH,s=e===N&&i!==N||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==N&&(i===N||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class ni{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ue(this,e)}}const ar=window.litHtmlPolyfillSupport;ar==null||ar(Ce,Te),((ft=globalThis.litHtmlVersions)!==null&&ft!==void 0?ft:globalThis.litHtmlVersions=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gt,bt;class Xe extends se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,r;const n=super.createRenderRoot();return(e=(r=this.renderOptions).renderBefore)!==null&&e!==void 0||(r.renderBefore=n.firstChild),n}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Kn(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return te}}Xe.finalized=!0,Xe._$litElement$=!0,(gt=globalThis.litElementHydrateSupport)===null||gt===void 0||gt.call(globalThis,{LitElement:Xe});const ur=globalThis.litElementPolyfillSupport;ur==null||ur({LitElement:Xe});((bt=globalThis.litElementVersions)!==null&&bt!==void 0?bt:globalThis.litElementVersions=[]).push("3.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wo=t=>e=>typeof e=="function"?((r,n)=>(window.customElements.define(r,n),n))(t,e):((r,n)=>{const{kind:i,elements:s}=n;return{kind:i,elements:s,finisher(o){window.customElements.define(r,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ii=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Ye(Ge({},e),{finisher(r){r.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function si(t){return(e,r)=>r!==void 0?((n,i,s)=>{i.constructor.createProperty(s,n)})(t,e,r):ii(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ko(t){return si(Ye(Ge({},t),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oi=({finisher:t,descriptor:e})=>(r,n)=>{var i;if(n===void 0){const s=(i=r.originalKey)!==null&&i!==void 0?i:r.key,o=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(r.key)}:Ye(Ge({},r),{key:s});return t!=null&&(o.finisher=function(l){t(l,s)}),o}{const s=r.constructor;e!==void 0&&Object.defineProperty(r,n,e(n)),t==null||t(s,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qo(t,e){return oi({descriptor:r=>{const n={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const i=typeof r=="symbol"?Symbol():"__"+r;n.get=function(){var s,o;return this[i]===void 0&&(this[i]=(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&o!==void 0?o:null),this[i]}}return n}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const li={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ai=t=>(...e)=>({_$litDirective$:t,values:e});class ui{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jo=ai(class extends ui{constructor(t){var e;if(super(t),t.type!==li.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,n;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.et=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((r=this.et)===null||r===void 0?void 0:r.has(s))&&this.st.add(s);return this.render(e)}const i=t.element.classList;this.st.forEach(s=>{s in e||(i.remove(s),this.st.delete(s))});for(const s in e){const o=!!e[s];o===this.st.has(s)||((n=this.et)===null||n===void 0?void 0:n.has(s))||(o?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return te}});var cr=Object.defineProperty,ci=t=>cr(t,"__esModule",{value:!0}),ce=(t,e)=>()=>(t&&(e=t(t=0)),e),he=(t,e)=>{ci(t);for(var r in e)cr(t,r,{get:e[r],enumerable:!0})},hr={};he(hr,{default:()=>dr});var dr,hi=ce(()=>{dr=async(t=[{}])=>(Array.isArray(t)||(t=[t]),new Promise((e,r)=>{let n=document.createElement("input");n.type="file";let i=[...t.map(a=>a.mimeTypes||[]).join(),t.map(a=>a.extensions||[]).join()].join();n.multiple=t[0].multiple||!1,n.accept=i||"";let s=()=>l(r),o=a=>{typeof l=="function"&&l(),e(a)},l=t[0].legacySetup&&t[0].legacySetup(o,s,n);n.addEventListener("change",()=>{o(n.multiple?Array.from(n.files):n.files[0])}),n.click()}))}),pr={};he(pr,{default:()=>gr});var fr,gr,di=ce(()=>{fr=async t=>{let e=await t.getFile();return e.handle=t,e},gr=async(t=[{}])=>{Array.isArray(t)||(t=[t]);let e=[];t.forEach((i,s)=>{e[s]={description:i.description||"",accept:{}},i.mimeTypes?i.mimeTypes.map(o=>{e[s].accept[o]=i.extensions||[]}):e[s].accept["*/*"]=i.extensions||[]});let r=await window.showOpenFilePicker({id:t[0].id,startIn:t[0].startIn,types:e,multiple:t[0].multiple||!1,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1}),n=await Promise.all(r.map(fr));return t[0].multiple?n:n[0]}}),br={};he(br,{default:()=>vr});var vr,pi=ce(()=>{vr=async(t=[{}])=>(Array.isArray(t)||(t=[t]),t[0].recursive=t[0].recursive||!1,new Promise((e,r)=>{let n=document.createElement("input");n.type="file",n.webkitdirectory=!0;let i=()=>o(r),s=l=>{typeof o=="function"&&o(),e(l)},o=t[0].legacySetup&&t[0].legacySetup(s,i,n);n.addEventListener("change",()=>{let l=Array.from(n.files);t[0].recursive?t[0].recursive&&t[0].skipDirectory&&(l=l.filter(a=>a.webkitRelativePath.split("/").every(u=>!t[0].skipDirectory({name:u,kind:"directory"})))):l=l.filter(a=>a.webkitRelativePath.split("/").length===2),s(l)}),n.click()}))}),mr={};he(mr,{default:()=>_r});var vt,_r,fi=ce(()=>{vt=async(t,e,r=t.name,n)=>{let i=[],s=[];for await(let o of t.values()){let l=`${r}/${o.name}`;o.kind==="file"?s.push(o.getFile().then(a=>(a.directoryHandle=t,Object.defineProperty(a,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>l})))):o.kind==="directory"&&e&&(!n||!n(o))&&i.push(vt(o,e,l,n))}return[...(await Promise.all(i)).flat(),...await Promise.all(s)]},_r=async(t={})=>{t.recursive=t.recursive||!1;let e=await window.showDirectoryPicker({id:t.id,startIn:t.startIn});return vt(e,t.recursive,void 0,t.skipDirectory)}}),yr={};he(yr,{default:()=>wr});async function gi(t,e){let r=t.getReader(),n=new ReadableStream({start(s){return o();async function o(){return r.read().then(({done:l,value:a})=>{if(l){s.close();return}return s.enqueue(a),o()})}}}),i=new Response(n);return r.releaseLock(),new Blob([await i.blob()],{type:e})}var wr,bi=ce(()=>{wr=async(t,e={})=>{Array.isArray(e)&&(e=e[0]);let r=document.createElement("a"),n=t;"body"in t&&(n=await gi(t.body,t.headers.get("content-type"))),r.download=e.fileName||"Untitled",r.href=URL.createObjectURL(n);let i=()=>o(reject),s=()=>{typeof o=="function"&&o()},o=e.legacySetup&&e.legacySetup(s,i,r);return r.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(r.href),30*1e3),s()}),r.click(),null}}),xr={};he(xr,{default:()=>$r});var $r,vi=ce(()=>{$r=async(t,e=[{}],r=null,n=!1)=>{Array.isArray(e)||(e=[e]),e[0].fileName=e[0].fileName||"Untitled";let i=[];if(e.forEach((l,a)=>{i[a]={description:l.description||"",accept:{}},l.mimeTypes?(a===0&&(t.type?l.mimeTypes.push(t.type):t.headers&&t.headers.get("content-type")&&l.mimeTypes.push(t.headers.get("content-type"))),l.mimeTypes.map(u=>{i[a].accept[u]=l.extensions||[]})):t.type&&(i[a].accept[t.type]=l.extensions||[])}),r)try{await r.getFile()}catch(l){if(r=null,n)throw l}let s=r||await window.showSaveFilePicker({suggestedName:e[0].fileName,id:e[0].id,startIn:e[0].startIn,types:i,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),o=await s.createWritable();return"stream"in t?(await t.stream().pipeTo(o),s):"body"in t?(await t.body.pipeTo(o),s):(await o.write(blob),await o.close(),s)}}),mi=(()=>{if(typeof self=="undefined")return!1;if("top"in self&&self!==top)try{top.location+""}catch{return!1}else if("showOpenFilePicker"in self)return"showOpenFilePicker";return!1})(),mt=mi,_i=mt?Promise.resolve().then(()=>(di(),pr)):Promise.resolve().then(()=>(hi(),hr));async function Do(...t){return(await _i).default(...t)}mt?Promise.resolve().then(()=>(fi(),mr)):Promise.resolve().then(()=>(pi(),br));mt?Promise.resolve().then(()=>(vi(),xr)):Promise.resolve().then(()=>(bi(),yr));// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var kr="";function Ar(t){kr=t}function yi(){return kr.replace(/\/$/,"")}var Er=[...document.getElementsByTagName("script")],Sr=Er.find(t=>t.hasAttribute("data-shoelace"));if(Sr)Ar(Sr.getAttribute("data-shoelace"));else{const t=Er.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src));let e="";t&&(e=t.getAttribute("src")),Ar(e.split("/").slice(0,-1).join("/"))}var Cr=Object.defineProperty,wi=Object.defineProperties,xi=Object.getOwnPropertyDescriptor,$i=Object.getOwnPropertyDescriptors,Tr=Object.getOwnPropertySymbols,ki=Object.prototype.hasOwnProperty,Ai=Object.prototype.propertyIsEnumerable,Nr=(t,e,r)=>e in t?Cr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ve=(t,e)=>{for(var r in e||(e={}))ki.call(e,r)&&Nr(t,r,e[r]);if(Tr)for(var r of Tr(e))Ai.call(e,r)&&Nr(t,r,e[r]);return t},qe=(t,e)=>wi(t,$i(e)),b=(t,e,r,n)=>{for(var i=n>1?void 0:n?xi(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(n?o(e,r,i):o(i))||i);return n&&i&&Cr(e,r,i),i},_t=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yt=Symbol(),Pr=new Map,Rr=class{constructor(t,e){if(this._$cssResult$=!0,e!==yt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Pr.get(this.cssText);return _t&&t===void 0&&(Pr.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},Lr=t=>new Rr(typeof t=="string"?t:t+"",yt),W=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new Rr(r,yt)},Ei=(t,e)=>{_t?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{const n=document.createElement("style"),i=window.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)})},Mr=_t?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return Lr(r)})(t):t,wt,Br=window.trustedTypes,Si=Br?Br.emptyScript:"",zr=window.reactiveElementPolyfillSupport,xt={toAttribute(t,e){switch(e){case Boolean:t=t?Si:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Or=(t,e)=>e!==t&&(e==e||t==t),$t={attribute:!0,type:String,converter:xt,reflect:!1,hasChanged:Or},de=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const n=this._$Eh(r,e);n!==void 0&&(this._$Eu.set(n,r),t.push(n))}),t}static createProperty(t,e=$t){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||$t}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of r)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)e.unshift(Mr(n))}else t!==void 0&&e.push(Mr(t));return e}static _$Eh(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ei(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=$t){var n,i;const s=this.constructor._$Eh(t,r);if(s!==void 0&&r.reflect===!0){const o=((i=(n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&i!==void 0?i:xt.toAttribute)(e,r.type);this._$Ei=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Ei=null}}_$AK(t,e){var r,n,i;const s=this.constructor,o=s._$Eu.get(t);if(o!==void 0&&this._$Ei!==o){const l=s.getPropertyOptions(o),a=l.converter,u=(i=(n=(r=a)===null||r===void 0?void 0:r.fromAttribute)!==null&&n!==void 0?n:typeof a=="function"?a:null)!==null&&i!==void 0?i:xt.fromAttribute;this._$Ei=o,this[o]=u(e,l.type),this._$Ei=null}}requestUpdate(t,e,r){let n=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Or)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,i)=>this[i]=n),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var i;return(i=n.hostUpdate)===null||i===void 0?void 0:i.call(n)}),this.update(r)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,r)=>this._$ES(r,this[r],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}};de.finalized=!0,de.elementProperties=new Map,de.elementStyles=[],de.shadowRootOptions={mode:"open"},zr==null||zr({ReactiveElement:de}),((wt=globalThis.reactiveElementVersions)!==null&&wt!==void 0?wt:globalThis.reactiveElementVersions=[]).push("1.0.2");var kt,pe=globalThis.trustedTypes,Ir=pe?pe.createPolicy("lit-html",{createHTML:t=>t}):void 0,K=`lit$${(Math.random()+"").slice(9)}$`,Hr="?"+K,Ci=`<${Hr}>`,fe=document,Ne=(t="")=>fe.createComment(t),Pe=t=>t===null||typeof t!="object"&&typeof t!="function",Ur=Array.isArray,Ti=t=>{var e;return Ur(t)||typeof((e=t)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},Re=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fr=/-->/g,Zr=/>/g,re=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Gr=/'/g,Yr=/"/g,jr=/^(?:script|style|textarea)$/i,Ni=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),X=Ni(1),Q=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Xr=new WeakMap,Pi=(t,e,r)=>{var n,i;const s=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:e;let o=s._$litPart$;if(o===void 0){const l=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new Ke(e.insertBefore(Ne(),l),l,void 0,r!=null?r:{})}return o._$AI(t),o},ge=fe.createTreeWalker(fe,129,null,!1),Ri=(t,e)=>{const r=t.length-1,n=[];let i,s=e===2?"<svg>":"",o=Re;for(let a=0;a<r;a++){const u=t[a];let d,c,h=-1,p=0;for(;p<u.length&&(o.lastIndex=p,c=o.exec(u),c!==null);)p=o.lastIndex,o===Re?c[1]==="!--"?o=Fr:c[1]!==void 0?o=Zr:c[2]!==void 0?(jr.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=re):c[3]!==void 0&&(o=re):o===re?c[0]===">"?(o=i!=null?i:Re,h=-1):c[1]===void 0?h=-2:(h=o.lastIndex-c[2].length,d=c[1],o=c[3]===void 0?re:c[3]==='"'?Yr:Gr):o===Yr||o===Gr?o=re:o===Fr||o===Zr?o=Re:(o=re,i=void 0);const g=o===re&&t[a+1].startsWith("/>")?" ":"";s+=o===Re?u+Ci:h>=0?(n.push(d),u.slice(0,h)+"$lit$"+u.slice(h)+K+g):u+K+(h===-2?(n.push(void 0),a):g)}const l=s+(t[r]||"<?>")+(e===2?"</svg>":"");return[Ir!==void 0?Ir.createHTML(l):l,n]},We=class{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let i=0,s=0;const o=t.length-1,l=this.parts,[a,u]=Ri(t,e);if(this.el=We.createElement(a,r),ge.currentNode=this.el.content,e===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(n=ge.nextNode())!==null&&l.length<o;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const c of n.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(K)){const h=u[s++];if(d.push(c),h!==void 0){const p=n.getAttribute(h.toLowerCase()+"$lit$").split(K),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:g[2],strings:p,ctor:g[1]==="."?Mi:g[1]==="?"?zi:g[1]==="@"?Oi:Qe})}else l.push({type:6,index:i})}for(const c of d)n.removeAttribute(c)}if(jr.test(n.tagName)){const d=n.textContent.split(K),c=d.length-1;if(c>0){n.textContent=pe?pe.emptyScript:"";for(let h=0;h<c;h++)n.append(d[h],Ne()),ge.nextNode(),l.push({type:2,index:++i});n.append(d[c],Ne())}}}else if(n.nodeType===8)if(n.data===Hr)l.push({type:2,index:i});else{let d=-1;for(;(d=n.data.indexOf(K,d+1))!==-1;)l.push({type:7,index:i}),d+=K.length-1}i++}}static createElement(t,e){const r=fe.createElement("template");return r.innerHTML=t,r}};function be(t,e,r=t,n){var i,s,o,l;if(e===Q)return e;let a=n!==void 0?(i=r._$Cl)===null||i===void 0?void 0:i[n]:r._$Cu;const u=Pe(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),u===void 0?a=void 0:(a=new u(t),a._$AT(t,r,n)),n!==void 0?((o=(l=r)._$Cl)!==null&&o!==void 0?o:l._$Cl=[])[n]=a:r._$Cu=a),a!==void 0&&(e=be(t,a._$AS(t,e.values),a,n)),e}var Li=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:n}=this._$AD,i=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:fe).importNode(r,!0);ge.currentNode=i;let s=ge.nextNode(),o=0,l=0,a=n[0];for(;a!==void 0;){if(o===a.index){let u;a.type===2?u=new Ke(s,s.nextSibling,this,t):a.type===1?u=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(u=new Ii(s,this,t)),this.v.push(u),a=n[++l]}o!==(a==null?void 0:a.index)&&(s=ge.nextNode(),o++)}return i}m(t){let e=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},Ke=class{constructor(t,e,r,n){var i;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cg=(i=n==null?void 0:n.isConnected)===null||i===void 0||i}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=be(this,t,e),Pe(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==Q&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):Ti(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==A&&Pe(this._$AH)?this._$AA.nextSibling.data=t:this.S(fe.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=We.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===i)this._$AH.m(r);else{const s=new Li(i,this),o=s.p(this.options);s.m(r),this.S(o),this._$AH=s}}_$AC(t){let e=Xr.get(t.strings);return e===void 0&&Xr.set(t.strings,e=new We(t)),e}M(t){Ur(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const i of t)n===e.length?e.push(r=new Ke(this.A(Ne()),this.A(Ne()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Qe=class{constructor(t,e,r,n,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,n){const i=this.strings;let s=!1;if(i===void 0)t=be(this,t,e,0),s=!Pe(t)||t!==this._$AH&&t!==Q,s&&(this._$AH=t);else{const o=t;let l,a;for(t=i[0],l=0;l<i.length-1;l++)a=be(this,o[r+l],e,l),a===Q&&(a=this._$AH[l]),s||(s=!Pe(a)||a!==this._$AH[l]),a===A?t=A:t!==A&&(t+=(a!=null?a:"")+i[l+1]),this._$AH[l]=a}s&&!n&&this.k(t)}k(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},Mi=class extends Qe{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===A?void 0:t}},Bi=pe?pe.emptyScript:"",zi=class extends Qe{constructor(){super(...arguments),this.type=4}k(t){t&&t!==A?this.element.setAttribute(this.name,Bi):this.element.removeAttribute(this.name)}},Oi=class extends Qe{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){var r;if((t=(r=be(this,t,e,0))!==null&&r!==void 0?r:A)===Q)return;const n=this._$AH,i=t===A&&n!==A||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==A&&(n===A||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}},Ii=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){be(this,t)}},Vr=window.litHtmlPolyfillSupport;Vr==null||Vr(We,Ke),((kt=globalThis.litHtmlVersions)!==null&&kt!==void 0?kt:globalThis.litHtmlVersions=[]).push("2.0.2");var At,Et,Y=class extends de{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Pi(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return Q}};Y.finalized=!0,Y._$litElement$=!0,(At=globalThis.litElementHydrateSupport)===null||At===void 0||At.call(globalThis,{LitElement:Y});var qr=globalThis.litElementPolyfillSupport;qr==null||qr({LitElement:Y});((Et=globalThis.litElementVersions)!==null&&Et!==void 0?Et:globalThis.litElementVersions=[]).push("3.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Hi=(()=>{const t=document.createElement("style");let e;try{document.head.appendChild(t),t.sheet.insertRule(":focus-visible { color: inherit }"),e=!0}catch{e=!1}finally{t.remove()}return e})(),B=Lr(Hi?":focus-visible":":focus"),Ui=W`
  .sl-scroll-lock {
    overflow: hidden !important;
  }

  .sl-toast-stack {
    position: fixed;
    top: 0;
    right: 0;
    z-index: var(--sl-z-index-toast);
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }

  .sl-toast-stack sl-alert {
    --box-shadow: var(--sl-shadow-large);
    margin: var(--sl-spacing-medium);
  }
`,ve=W`
  :host {
    position: relative;
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Wr=document.createElement("style");Wr.textContent=Ui.toString();document.head.append(Wr);var Fi=W`
  ${ve}

  :host {
    display: inline-block;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-fast) background-color, var(--sl-transition-fast) color,
      var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default${B}:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary${B}:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success${B}:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral${B}:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning${B}:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger${B}:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default${B}:not(.button--disabled) {
    border-color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary${B}:not(.button--disabled) {
    border-color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success${B}:not(.button--disabled) {
    border-color: var(--sl-color-success-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral${B}:not(.button--disabled) {
    border-color: var(--sl-color-neutral-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning${B}:not(.button--disabled) {
    border-color: var(--sl-color-warning-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger${B}:not(.button--disabled) {
    border-color: var(--sl-color-danger-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text${B}:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-right: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-left: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump focused buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus) {
    z-index: 2;
  }
`;function Je(t,e){return e?t.querySelector(`:scope > [slot="${e}"]`)!==null:[...t.childNodes].some(r=>r.nodeType===r.TEXT_NODE&&r.textContent.trim()!==""||r.nodeType===r.ELEMENT_NODE&&!r.hasAttribute("slot"))}var Kr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Qr=t=>(...e)=>({_$litDirective$:t,values:e}),Jr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var De=Qr(class extends Jr{constructor(t){var e;if(super(t),t.type!==Kr.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,n;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.et=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((r=this.et)===null||r===void 0?void 0:r.has(s))&&this.st.add(s);return this.render(e)}const i=t.element.classList;this.st.forEach(s=>{s in e||(i.remove(s),this.st.delete(s))});for(const s in e){const o=!!e[s];o===this.st.has(s)||((n=this.et)===null||n===void 0?void 0:n.has(s))||(o?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return Q}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var S=t=>t!=null?t:A;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function O(t,e,r){const n=new CustomEvent(e,Object.assign({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return t.dispatchEvent(n),n}function Dr(t,e){return new Promise(r=>{function n(i){i.target===t&&(t.removeEventListener(e,n),r())}t.addEventListener(e,n)})}var me=t=>e=>typeof e=="function"?((r,n)=>(window.customElements.define(r,n),n))(t,e):((r,n)=>{const{kind:i,elements:s}=n;return{kind:i,elements:s,finisher(o){window.customElements.define(r,o)}}})(t,e),Zi=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?qe(Ve({},e),{finisher(r){r.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function w(t){return(e,r)=>r!==void 0?((n,i,s)=>{i.constructor.createProperty(s,n)})(t,e,r):Zi(t,e)}function _e(t){return w(qe(Ve({},t),{state:!0}))}var Gi=({finisher:t,descriptor:e})=>(r,n)=>{var i;if(n===void 0){const s=(i=r.originalKey)!==null&&i!==void 0?i:r.key,o=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(r.key)}:qe(Ve({},r),{key:s});return t!=null&&(o.finisher=function(l){t(l,s)}),o}{const s=r.constructor;e!==void 0&&Object.defineProperty(r,n,e(n)),t==null||t(s,n)}};function Le(t,e){return Gi({descriptor:r=>{const n={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const i=typeof r=="symbol"?Symbol():"__"+r;n.get=function(){var s,o;return this[i]===void 0&&(this[i]=(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&o!==void 0?o:null),this[i]}}return n}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var en=(t,...e)=>({_$litStatic$:e.reduce((r,n,i)=>r+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+t[i+1],t[0])}),tn=new Map,Yi=t=>(e,...r)=>{var n;const i=r.length;let s,o;const l=[],a=[];let u,d=0,c=!1;for(;d<i;){for(u=e[d];d<i&&(o=r[d],(s=(n=o)===null||n===void 0?void 0:n._$litStatic$)!==void 0);)u+=s+e[++d],c=!0;a.push(o),l.push(u),d++}if(d===i&&l.push(e[i]),c){const h=l.join("$$lit$$");(e=tn.get(h))===void 0&&tn.set(h,e=l),r=a}return t(e,...r)},St=Yi(X),k=class extends Y{constructor(){super(...arguments);this.hasFocus=!1,this.hasLabel=!1,this.hasPrefix=!1,this.hasSuffix=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.submit=!1}connectedCallback(){super.connectedCallback(),this.handleSlotChange()}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleSlotChange(){this.hasLabel=Je(this),this.hasPrefix=Je(this,"prefix"),this.hasSuffix=Je(this,"suffix")}handleBlur(){this.hasFocus=!1,O(this,"sl-blur")}handleFocus(){this.hasFocus=!0,O(this,"sl-focus")}handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}render(){const t=!!this.href,e=t?en`a`:en`button`;return St`
      <${e}
        part="base"
        class=${De({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--has-label":this.hasLabel,"button--has-prefix":this.hasPrefix,"button--has-suffix":this.hasSuffix})}
        ?disabled=${S(t?void 0:this.disabled)}
        type=${S(t?void 0:this.submit?"submit":"button")}
        name=${S(t?void 0:this.name)}
        value=${S(t?void 0:this.value)}
        href=${S(this.href)}
        target=${S(this.target)}
        download=${S(this.download)}
        rel=${S(this.target?"noreferrer noopener":void 0)}
        role="button"
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot @slotchange=${this.handleSlotChange} name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot @slotchange=${this.handleSlotChange} name="suffix"></slot>
        </span>
        ${this.caret?St`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `:""}
        ${this.loading?St`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};k.styles=Fi;b([Le(".button")],k.prototype,"button",2);b([_e()],k.prototype,"hasFocus",2);b([_e()],k.prototype,"hasLabel",2);b([_e()],k.prototype,"hasPrefix",2);b([_e()],k.prototype,"hasSuffix",2);b([w({reflect:!0})],k.prototype,"variant",2);b([w({reflect:!0})],k.prototype,"size",2);b([w({type:Boolean,reflect:!0})],k.prototype,"caret",2);b([w({type:Boolean,reflect:!0})],k.prototype,"disabled",2);b([w({type:Boolean,reflect:!0})],k.prototype,"loading",2);b([w({type:Boolean,reflect:!0})],k.prototype,"outline",2);b([w({type:Boolean,reflect:!0})],k.prototype,"pill",2);b([w({type:Boolean,reflect:!0})],k.prototype,"circle",2);b([w({type:Boolean,reflect:!0})],k.prototype,"submit",2);b([w()],k.prototype,"name",2);b([w()],k.prototype,"value",2);b([w()],k.prototype,"href",2);b([w()],k.prototype,"target",2);b([w()],k.prototype,"download",2);k=b([me("sl-button")],k);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ji=W`
  ${ve}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 800ms;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    /* stroke-dasharray: (2πr x p), (2πr) where p is the percentage to display */
    stroke-dasharray: calc(2 * 3.141592 * calc(0.5em - var(--track-width) / 2) * 0.75),
      calc(2 * 3.141592 * calc(0.5em - var(--track-width) / 2));
    transform-origin: 50% 50%;
    transform: rotate(90deg);
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`,Ct=class extends Y{render(){return X`
      <svg part="base" class="spinner" aria-busy="true" aria-live="polite">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Ct.styles=ji;Ct=b([me("sl-spinner")],Ct);var Xi=W`
  ${ve}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--sl-font-size-x-small);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 3px 6px;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,ye=class extends Y{constructor(){super(...arguments);this.variant="primary",this.pill=!1,this.pulse=!1}render(){return X`
      <span
        part="base"
        class=${De({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};ye.styles=Xi;b([w({reflect:!0})],ye.prototype,"variant",2);b([w({type:Boolean,reflect:!0})],ye.prototype,"pill",2);b([w({type:Boolean,reflect:!0})],ye.prototype,"pulse",2);ye=b([me("sl-badge")],ye);function rn(t){const e=t.tagName.toLowerCase();return t.getAttribute("tabindex")==="-1"||t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&t.getAttribute("aria-disabled")!=="false"||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!t.offsetParent||window.getComputedStyle(t).visibility==="hidden"?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(e)}function Vi(t){const e=[];function r(s){s instanceof HTMLElement&&(e.push(s),s.shadowRoot&&s.shadowRoot.mode==="open"&&r(s.shadowRoot)),[...s.querySelectorAll("*")].map(o=>r(o))}r(t);const n=e.find(s=>rn(s))||null,i=e.reverse().find(s=>rn(s))||null;return{start:n,end:i}}function qi(){let t=!1;return document.createElement("div").focus({get preventScroll(){return t=!0,!1}}),t}var Me=[],Wi=class{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}activate(){Me.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown)}deactivate(){Me=Me.filter(t=>t!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown)}isActive(){return Me[Me.length-1]===this.element}handleFocusIn(t){const e=t.composedPath();if(this.isActive()&&!e.includes(this.element)){const{start:r,end:n}=Vi(this.element),i=this.tabDirection==="forward"?r:n;typeof(i==null?void 0:i.focus)=="function"&&i.focus({preventScroll:!0})}}handleKeyDown(t){t.key==="Tab"&&t.shiftKey&&(this.tabDirection="backward",setTimeout(()=>this.tabDirection="forward"))}},Tt=new Set;function nn(t){Tt.add(t),document.body.classList.add("sl-scroll-lock")}function sn(t){Tt.delete(t),Tt.size===0&&document.body.classList.remove("sl-scroll-lock")}var Ki=W`
  ${ve}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
    transform: none;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
  }

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .dialog__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-left: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }
`;function Be(t,e,r){return new Promise(async n=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=t.animate(e,qe(Ve({},r),{duration:Qi()?0:r.duration}));i.addEventListener("cancel",n,{once:!0}),i.addEventListener("finish",n,{once:!0})})}function Qi(){const t=window.matchMedia("(prefers-reduced-motion: reduce)");return t==null?void 0:t.matches}function et(t){return Promise.all(t.getAnimations().map(e=>new Promise(r=>{const n=requestAnimationFrame(r);e.addEventListener("cancel",()=>n,{once:!0}),e.addEventListener("finish",()=>n,{once:!0}),e.cancel()})))}var on=new Map,Ji=new WeakMap;function Di(t){return t!=null?t:{keyframes:[],options:{duration:0}}}function ze(t,e){on.set(t,Di(e))}function Oe(t,e){const r=Ji.get(t);if(r&&r[e])return r[e];const n=on.get(e);return n||{keyframes:[],options:{duration:0}}}function tt(t,e){return(r,n)=>{const{update:i}=r;e=Object.assign({waitUntilFirstUpdate:!1},e),r.update=function(s){if(s.has(t)){const o=s.get(t),l=this[t];o!==l&&(!(e==null?void 0:e.waitUntilFirstUpdate)||this.hasUpdated)&&this[n].call(this,o,l)}i.call(this,s)}}}var ln=qi(),es=0,Z=class extends Y{constructor(){super(...arguments);this.componentId=`dialog-${++es}`,this.hasFooter=!1,this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.modal=new Wi(this),this.handleSlotChange()}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.modal.activate(),nn(this))}disconnectedCallback(){super.disconnectedCallback(),sn(this)}async show(){if(!this.open)return this.open=!0,Dr(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,Dr(this,"sl-after-hide")}requestClose(){if(O(this,"sl-request-close",{cancelable:!0}).defaultPrevented){const e=Oe(this,"dialog.denyClose");Be(this.panel,e.keyframes,e.options);return}this.hide()}handleKeyDown(t){t.key==="Escape"&&(t.stopPropagation(),this.requestClose())}async handleOpenChange(){if(this.open){O(this,"sl-show"),this.originalTrigger=document.activeElement,this.modal.activate(),nn(this),await Promise.all([et(this.dialog),et(this.overlay)]),this.dialog.hidden=!1,ln&&(O(this,"sl-initial-focus",{cancelable:!0}).defaultPrevented||this.panel.focus({preventScroll:!0}));const t=Oe(this,"dialog.show"),e=Oe(this,"dialog.overlay.show");await Promise.all([Be(this.panel,t.keyframes,t.options),Be(this.overlay,e.keyframes,e.options)]),ln||O(this,"sl-initial-focus",{cancelable:!0}).defaultPrevented||this.panel.focus({preventScroll:!0}),O(this,"sl-after-show")}else{O(this,"sl-hide"),this.modal.deactivate(),await Promise.all([et(this.dialog),et(this.overlay)]);const t=Oe(this,"dialog.hide"),e=Oe(this,"dialog.overlay.hide");await Promise.all([Be(this.panel,t.keyframes,t.options),Be(this.overlay,e.keyframes,e.options)]),this.dialog.hidden=!0,sn(this);const r=this.originalTrigger;r&&typeof r.focus=="function"&&setTimeout(()=>r.focus()),O(this,"sl-after-hide")}}handleSlotChange(){this.hasFooter=Je(this,"footer")}render(){return X`
      <div
        part="base"
        class=${De({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasFooter})}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="dialog__overlay" @click=${this.requestClose} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${S(this.noHeader?this.label:void 0)}
          aria-labelledby=${S(this.noHeader?void 0:`${this.componentId}-title`)}
          tabindex="0"
        >
          ${this.noHeader?"":X`
                <header part="header" class="dialog__header">
                  <span part="title" class="dialog__title" id=${`${this.componentId}-title`}>
                    <slot name="label"> ${this.label||String.fromCharCode(65279)} </slot>
                  </span>
                  <sl-icon-button
                    exportparts="base:close-button"
                    class="dialog__close"
                    name="x"
                    library="system"
                    @click="${this.requestClose}"
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer" @slotchange=${this.handleSlotChange}></slot>
          </footer>
        </div>
      </div>
    `}};Z.styles=Ki;b([Le(".dialog")],Z.prototype,"dialog",2);b([Le(".dialog__panel")],Z.prototype,"panel",2);b([Le(".dialog__overlay")],Z.prototype,"overlay",2);b([_e()],Z.prototype,"hasFooter",2);b([w({type:Boolean,reflect:!0})],Z.prototype,"open",2);b([w({reflect:!0})],Z.prototype,"label",2);b([w({attribute:"no-header",type:Boolean,reflect:!0})],Z.prototype,"noHeader",2);b([tt("open",{waitUntilFirstUpdate:!0})],Z.prototype,"handleOpenChange",1);Z=b([me("sl-dialog")],Z);ze("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});ze("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});ze("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:250}});ze("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});ze("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var ts=W`
  ${ve}

  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button${B} {
    box-shadow: var(--sl-focus-ring);
  }
`,H=class extends Y{constructor(){super(...arguments);this.label="",this.disabled=!1}render(){const t=!!this.href,e=X`
      <sl-icon
        name=${S(this.name)}
        library=${S(this.library)}
        src=${S(this.src)}
        aria-hidden="true"
      ></sl-icon>
    `;return t?X`
          <a
            part="base"
            class="icon-button"
            href=${S(this.href)}
            target=${S(this.target)}
            download=${S(this.download)}
            rel=${S(this.target?"noreferrer noopener":void 0)}
            role="button"
            aria-disabled=${this.disabled?"true":"false"}
            aria-label="${this.label}"
            tabindex=${this.disabled?"-1":"0"}
          >
            ${e}
          </a>
        `:X`
          <button
            part="base"
            class=${De({"icon-button":!0,"icon-button--disabled":this.disabled})}
            ?disabled=${this.disabled}
            type="button"
            aria-label=${this.label}
          >
            ${e}
          </button>
        `}};H.styles=ts;b([Le("button")],H.prototype,"button",2);b([w()],H.prototype,"name",2);b([w()],H.prototype,"library",2);b([w()],H.prototype,"src",2);b([w()],H.prototype,"href",2);b([w()],H.prototype,"target",2);b([w()],H.prototype,"download",2);b([w()],H.prototype,"label",2);b([w({type:Boolean,reflect:!0})],H.prototype,"disabled",2);H=b([me("sl-icon-button")],H);var rs=W`
  ${ve}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,ns={name:"default",resolver:t=>`${yi()}/assets/icons/${t}.svg`},is=ns,an={check:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},ss={name:"system",resolver:t=>an[t]?`data:image/svg+xml,${encodeURIComponent(an[t])}`:""},os=ss,ls=[is,os],Nt=[];function as(t){Nt.push(t)}function us(t){Nt=Nt.filter(e=>e!==t)}function un(t){return ls.filter(e=>e.name===t)[0]}var Pt=new Map,cs=t=>{if(Pt.has(t))return Pt.get(t);{const e=fetch(t).then(async r=>{if(r.ok){const n=document.createElement("div");n.innerHTML=await r.text();const i=n.firstElementChild;return{ok:r.ok,status:r.status,svg:i&&i.tagName.toLowerCase()==="svg"?i.outerHTML:""}}else return{ok:r.ok,status:r.status,svg:null}});return Pt.set(t,e),e}},Rt=class extends Jr{constructor(t){if(super(t),this.it=A,t.type!==Kr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===A||t==null)return this.vt=void 0,this.it=t;if(t===Q)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.vt;this.it=t;const e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Rt.directiveName="unsafeHTML",Rt.resultType=1;var Lt=class extends Rt{};Lt.directiveName="unsafeSVG",Lt.resultType=2;var hs=Qr(Lt),ds=new DOMParser,V=class extends Y{constructor(){super(...arguments);this.svg="",this.library="default"}connectedCallback(){super.connectedCallback(),as(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),us(this)}getUrl(){const t=un(this.library);return this.name&&t?t.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){const t=un(this.library),e=this.getUrl();if(e)try{const r=await cs(e);if(e!==this.getUrl())return;if(r.ok){const i=ds.parseFromString(r.svg,"text/html").body.querySelector("svg");i?(t&&t.mutator&&t.mutator(i),this.svg=i.outerHTML,O(this,"sl-load")):(this.svg="",O(this,"sl-error",{detail:{status:r.status}}))}else this.svg="",O(this,"sl-error",{detail:{status:r.status}})}catch{O(this,"sl-error",{detail:{status:-1}})}else this.svg&&(this.svg="")}handleChange(){this.setIcon()}render(){const t=typeof this.label=="string"&&this.label.length>0;return X` <div
      part="base"
      class="icon"
      role=${S(t?"img":void 0)}
      aria-label=${S(t?this.label:void 0)}
      aria-hidden=${S(t?void 0:"true")}
    >
      ${hs(this.svg)}
    </div>`}};V.styles=rs;b([_e()],V.prototype,"svg",2);b([w()],V.prototype,"name",2);b([w()],V.prototype,"src",2);b([w()],V.prototype,"label",2);b([w()],V.prototype,"library",2);b([tt("name"),tt("src"),tt("library")],V.prototype,"setIcon",1);V=b([me("sl-icon")],V);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ne={},y=function(){let t=/\blang(?:uage)?-([\w-]+)\b/i,e=0;var r=ne.Prism={manual:ne.Prism&&ne.Prism.manual,disableWorkerMessageHandler:ne.Prism&&ne.Prism.disableWorkerMessageHandler,util:{encode(i){return i instanceof n?new n(i.type,r.util.encode(i.content),i.alias):r.util.type(i)==="Array"?i.map(r.util.encode):i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type(i){return Object.prototype.toString.call(i).match(/\[object (\w+)\]/)[1]},objId(i){return i.__id||Object.defineProperty(i,"__id",{value:++e}),i.__id},clone(i,s){var o=r.util.type(i);switch(s=s||{},o){case"Object":if(s[r.util.objId(i)])return s[r.util.objId(i)];var l={};s[r.util.objId(i)]=l;for(var a in i)i.hasOwnProperty(a)&&(l[a]=r.util.clone(i[a],s));return l;case"Array":if(s[r.util.objId(i)])return s[r.util.objId(i)];var l=[];return s[r.util.objId(i)]=l,i.forEach(function(u,d){l[d]=r.util.clone(u,s)}),l}return i}},languages:{extend(i,s){var o=r.util.clone(r.languages[i]);for(var l in s)o[l]=s[l];return o},insertBefore(i,s,o,l){l=l||r.languages;var a=l[i];if(arguments.length==2){o=arguments[1];for(var u in o)o.hasOwnProperty(u)&&(a[u]=o[u]);return a}var d={};for(var c in a)if(a.hasOwnProperty(c)){if(c==s)for(var u in o)o.hasOwnProperty(u)&&(d[u]=o[u]);d[c]=a[c]}return r.languages.DFS(r.languages,function(h,p){p===l[i]&&h!=i&&(this[h]=d)}),l[i]=d},DFS(i,s,o,l){l=l||{};for(var a in i)i.hasOwnProperty(a)&&(s.call(i,a,i[a],o||a),r.util.type(i[a])==="Object"&&!l[r.util.objId(i[a])]?(l[r.util.objId(i[a])]=!0,r.languages.DFS(i[a],s,null,l)):r.util.type(i[a])==="Array"&&!l[r.util.objId(i[a])]&&(l[r.util.objId(i[a])]=!0,r.languages.DFS(i[a],s,a,l)))}},plugins:{},highlightAll(i,s){r.highlightAllUnder(document,i,s)},highlightAllUnder(i,s,o){var l={callback:o,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",l);for(var a=l.elements||i.querySelectorAll(l.selector),u=0,d;d=a[u++];)r.highlightElement(d,s===!0,l.callback)},highlightElement(i,s,o){for(var l,a,u=i;u&&!t.test(u.className);)u=u.parentNode;u&&(l=(u.className.match(t)||[,""])[1].toLowerCase(),a=r.languages[l]),i.className=i.className.replace(t,"").replace(/\s+/g," ")+" language-"+l,i.parentNode&&(u=i.parentNode,/pre/i.test(u.nodeName)&&(u.className=u.className.replace(t,"").replace(/\s+/g," ")+" language-"+l));var d=i.textContent,c={element:i,language:l,grammar:a,code:d};if(r.hooks.run("before-sanity-check",c),!c.code||!c.grammar){c.code&&(r.hooks.run("before-highlight",c),c.element.textContent=c.code,r.hooks.run("after-highlight",c)),r.hooks.run("complete",c);return}if(r.hooks.run("before-highlight",c),s&&ne.Worker){var h=new Worker(r.filename);h.onmessage=function(p){c.highlightedCode=p.data,r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o&&o.call(c.element),r.hooks.run("after-highlight",c),r.hooks.run("complete",c)},h.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=r.highlight(c.code,c.grammar,c.language),r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o&&o.call(i),r.hooks.run("after-highlight",c),r.hooks.run("complete",c)},highlight(i,s,o){var l={code:i,grammar:s,language:o};return r.hooks.run("before-tokenize",l),l.tokens=r.tokenize(l.code,l.grammar),r.hooks.run("after-tokenize",l),n.stringify(r.util.encode(l.tokens),l.language)},matchGrammar(i,s,o,l,a,u,d){var c=r.Token;for(var h in o)if(!(!o.hasOwnProperty(h)||!o[h])){if(h==d)return;var p=o[h];p=r.util.type(p)==="Array"?p:[p];for(var g=0;g<p.length;++g){var m=p[g],E=m.inside,x=!!m.lookbehind,M=!!m.greedy,I=0,U=m.alias;if(M&&!m.pattern.global){var j=m.pattern.toString().match(/[imuy]*$/)[0];m.pattern=RegExp(m.pattern.source,j+"g")}m=m.pattern||m;for(var T=l,F=a;T<s.length;F+=s[T].length,++T){var $e=s[T];if(s.length>i.length)return;if(!($e instanceof c)){if(M&&T!=s.length-1){m.lastIndex=F;var L=m.exec(i);if(!L)break;for(var Fe=L.index+(x?L[1].length:0),at=L.index+L[0].length,ie=T,ke=F,zn=s.length;ie<zn&&(ke<at||!s[ie].type&&!s[ie-1].greedy);++ie)ke+=s[ie].length,Fe>=ke&&(++T,F=ke);if(s[T]instanceof c)continue;lt=ie-T,$e=i.slice(F,ke),L.index-=F}else{m.lastIndex=0;var L=m.exec($e),lt=1}if(!L){if(u)break;continue}x&&(I=L[1]?L[1].length:0);var Fe=L.index+I,L=L[0].slice(I),at=Fe+L.length,ut=$e.slice(0,Fe),Yt=$e.slice(at),Ze=[T,lt];ut&&(++T,F+=ut.length,Ze.push(ut));var On=new c(h,E?r.tokenize(L,E):L,U,L,M);if(Ze.push(On),Yt&&Ze.push(Yt),Array.prototype.splice.apply(s,Ze),lt!=1&&r.matchGrammar(i,s,o,T,F,!0,h),u)break}}}}},tokenize(i,s,o){var l=[i],a=s.rest;if(a){for(var u in a)s[u]=a[u];delete s.rest}return r.matchGrammar(i,l,s,0,0,!1),l},hooks:{all:{},add(i,s){var o=r.hooks.all;o[i]=o[i]||[],o[i].push(s)},run(i,s){var o=r.hooks.all[i];if(!(!o||!o.length))for(var l=0,a;a=o[l++];)a(s)}}},n=r.Token=function(i,s,o,l,a){this.type=i,this.content=s,this.alias=o,this.length=(l||"").length|0,this.greedy=!!a};return n.stringify=function(i,s,o){if(typeof i=="string")return i;if(r.util.type(i)==="Array")return i.map(u=>n.stringify(u,s,i)).join("");let l={type:i.type,content:n.stringify(i.content,s,o),tag:"span",classes:["token",i.type],attributes:{},language:s,parent:o};if(i.alias){let u=r.util.type(i.alias)==="Array"?i.alias:[i.alias];Array.prototype.push.apply(l.classes,u)}r.hooks.run("wrap",l);let a=Object.keys(l.attributes).map(u=>u+'="'+(l.attributes[u]||"").replace(/"/g,"&quot;")+'"').join(" ");return`<${l.tag} class="${l.classes.join(" ")}"${a?" "+a:""}>${l.content}</${l.tag}>`},ne.Prism}();typeof module!="undefined"&&module.exports&&(module.exports=y);typeof global!="undefined"&&(global.Prism=y);y.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i};y.languages.markup.tag.inside["attr-value"].inside.entity=y.languages.markup.entity;y.hooks.add("wrap",t=>{t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))});y.languages.xml=y.languages.markup;y.languages.html=y.languages.markup;y.languages.mathml=y.languages.markup;y.languages.svg=y.languages.markup;y.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/};y.languages.css.atrule.inside.rest=y.languages.css;y.languages.markup&&(y.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:y.languages.css,alias:"language-css",greedy:!0}}),y.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:y.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:y.languages.css}},alias:"language-css"}},y.languages.markup.tag));y.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};y.languages.javascript=y.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/});y.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/});y.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}});y.languages.javascript["template-string"].inside.interpolation.inside.rest=y.languages.javascript;y.languages.markup&&y.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:y.languages.javascript,alias:"language-javascript",greedy:!0}});y.languages.js=y.languages.javascript;var cn=y;function hn(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}var we=hn();function ps(t){we=t}var fs=/[&<>"']/,gs=/[&<>"']/g,bs=/[<>"']|&(?!#?\w+;)/,vs=/[<>"']|&(?!#?\w+;)/g,ms={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},dn=t=>ms[t];function P(t,e){if(e){if(fs.test(t))return t.replace(gs,dn)}else if(bs.test(t))return t.replace(vs,dn);return t}var _s=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function pn(t){return t.replace(_s,(e,r)=>(r=r.toLowerCase(),r==="colon"?":":r.charAt(0)==="#"?r.charAt(1)==="x"?String.fromCharCode(parseInt(r.substring(2),16)):String.fromCharCode(+r.substring(1)):""))}var ys=/(^|[^\[])\^/g;function $(t,e){t=t.source||t,e=e||"";const r={replace:(n,i)=>(i=i.source||i,i=i.replace(ys,"$1"),t=t.replace(n,i),r),getRegex:()=>new RegExp(t,e)};return r}var ws=/[^\w:]/g,xs=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function fn(t,e,r){if(t){let n;try{n=decodeURIComponent(pn(r)).replace(ws,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}e&&!xs.test(r)&&(r=Es(e,r));try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}var rt={},$s=/^[^:]+:\/*[^/]*$/,ks=/^([^:]+:)[\s\S]*$/,As=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Es(t,e){rt[" "+t]||($s.test(t)?rt[" "+t]=t+"/":rt[" "+t]=it(t,"/",!0)),t=rt[" "+t];const r=t.indexOf(":")===-1;return e.substring(0,2)==="//"?r?e:t.replace(ks,"$1")+e:e.charAt(0)==="/"?r?e:t.replace(As,"$1")+e:t+e}var nt={exec:function(){}};function G(t){let e=1,r,n;for(;e<arguments.length;e++){r=arguments[e];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}function gn(t,e){const r=t.replace(/\|/g,(s,o,l)=>{let a=!1,u=o;for(;--u>=0&&l[u]==="\\";)a=!a;return a?"|":" |"}),n=r.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n[n.length-1].trim()||n.pop(),n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function it(t,e,r){const n=t.length;if(n===0)return"";let i=0;for(;i<n;){const s=t.charAt(n-i-1);if(s===e&&!r)i++;else if(s!==e&&r)i++;else break}return t.substr(0,n-i)}function Ss(t,e){if(t.indexOf(e[1])===-1)return-1;const r=t.length;let n=0,i=0;for(;i<r;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])n++;else if(t[i]===e[1]&&(n--,n<0))return i;return-1}function bn(t){t&&t.sanitize&&!t.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function vn(t,e){if(e<1)return"";let r="";for(;e>1;)e&1&&(r+=t),e>>=1,t+=t;return r+t}function mn(t,e,r,n){const i=e.href,s=e.title?P(e.title):null,o=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:r,href:i,title:s,text:o,tokens:n.inlineTokens(o,[])};return n.state.inLink=!1,l}else return{type:"image",raw:r,href:i,title:s,text:P(o)}}function Cs(t,e){const r=t.match(/^(\s+)(?:```)/);if(r===null)return e;const n=r[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[o]=s;return o.length>=n.length?i.slice(n.length):i}).join(`
`)}var Mt=class{constructor(t){this.options=t||we}space(t){const e=this.rules.block.newline.exec(t);if(e)return e[0].length>1?{type:"space",raw:e[0]}:{raw:`
`}}code(t){const e=this.rules.block.code.exec(t);if(e){const r=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?r:it(r,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const r=e[0],n=Cs(r,e[3]||"");return{type:"code",raw:r,lang:e[2]?e[2].trim():e[2],text:n}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let r=e[2].trim();if(/#$/.test(r)){const i=it(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}const n={type:"heading",raw:e[0],depth:e[1].length,text:r,tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){const r=e[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:e[0],tokens:this.lexer.blockTokens(r,[]),text:r}}}list(t){let e=this.rules.block.list.exec(t);if(e){let r,n,i,s,o,l,a,u,d,c,h=e[1].trim();const p=h.length>1,g={type:"list",raw:"",ordered:p,start:p?+h.slice(0,-1):"",loose:!1,items:[]};h=p?`\\d{1,9}\\${h.slice(-1)}`:`\\${h}`,this.options.pedantic&&(h=p?h:"[*+-]");const m=new RegExp(`^( {0,3}${h})((?: [^\\n]*| *)(?:\\n[^\\n]*)*(?:\\n|$))`);for(;t&&!(this.rules.block.hr.test(t)||!(e=m.exec(t)));){d=e[2].split(`
`),this.options.pedantic?(s=2,c=d[0].trimLeft()):(s=e[2].search(/[^ ]/),s=e[1].length+(s>4?1:s),c=d[0].slice(s-e[1].length)),l=!1,r=e[0],!d[0]&&/^ *$/.test(d[1])&&(r=e[1]+d.slice(0,2).join(`
`)+`
`,g.loose=!0,d=[]);const x=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(o=1;o<d.length;o++){if(u=d[o],this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),x.test(u)){r=e[1]+d.slice(0,o).join(`
`)+`
`;break}if(!l){u.trim()||(l=!0),u.search(/[^ ]/)>=s?c+=`
`+u.slice(s):c+=`
`+u;continue}if(u.search(/[^ ]/)>=s||!u.trim()){c+=`
`+u.slice(s);continue}else{r=e[1]+d.slice(0,o).join(`
`)+`
`;break}}g.loose||(a?g.loose=!0:/\n *\n *$/.test(r)&&(a=!0)),this.options.gfm&&(n=/^\[[ xX]\] /.exec(c),n&&(i=n[0]!=="[ ] ",c=c.replace(/^\[[ xX]\] +/,""))),g.items.push({type:"list_item",raw:r,task:!!n,checked:i,loose:!1,text:c}),g.raw+=r,t=t.slice(r.length)}g.items[g.items.length-1].raw=r.trimRight(),g.items[g.items.length-1].text=c.trimRight(),g.raw=g.raw.trimRight();const E=g.items.length;for(o=0;o<E;o++)this.lexer.state.top=!1,g.items[o].tokens=this.lexer.blockTokens(g.items[o].text,[]),g.items[o].tokens.some(x=>x.type==="space")&&(g.loose=!0,g.items[o].loose=!0);return g}}html(t){const e=this.rules.block.html.exec(t);if(e){const r={type:"html",raw:e[0],pre:!this.options.sanitizer&&(e[1]==="pre"||e[1]==="script"||e[1]==="style"),text:e[0]};return this.options.sanitize&&(r.type="paragraph",r.text=this.options.sanitizer?this.options.sanitizer(e[0]):P(e[0]),r.tokens=[],this.lexer.inline(r.text,r.tokens)),r}}def(t){const e=this.rules.block.def.exec(t);if(e){e[3]&&(e[3]=e[3].substring(1,e[3].length-1));const r=e[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:r,raw:e[0],href:e[2],title:e[3]}}}table(t){const e=this.rules.block.table.exec(t);if(e){const r={type:"table",header:gn(e[1]).map(n=>({text:n})),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:e[3]?e[3].replace(/\n$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=e[0];let n=r.align.length,i,s,o,l;for(i=0;i<n;i++)/^ *-+: *$/.test(r.align[i])?r.align[i]="right":/^ *:-+: *$/.test(r.align[i])?r.align[i]="center":/^ *:-+ *$/.test(r.align[i])?r.align[i]="left":r.align[i]=null;for(n=r.rows.length,i=0;i<n;i++)r.rows[i]=gn(r.rows[i],r.header.length).map(a=>({text:a}));for(n=r.header.length,s=0;s<n;s++)r.header[s].tokens=[],this.lexer.inlineTokens(r.header[s].text,r.header[s].tokens);for(n=r.rows.length,s=0;s<n;s++)for(l=r.rows[s],o=0;o<l.length;o++)l[o].tokens=[],this.lexer.inlineTokens(l[o].text,l[o].tokens);return r}}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e){const r={type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const r={type:"paragraph",raw:e[0],text:e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}text(t){const e=this.rules.block.text.exec(t);if(e){const r={type:"text",raw:e[0],text:e[0],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:P(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):P(e[0]):e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const r=e[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const s=it(r.slice(0,-1),"\\");if((r.length-s.length)%2==0)return}else{const s=Ss(e[2],"()");if(s>-1){const l=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let n=e[2],i="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);s&&(n=s[1],i=s[3])}else i=e[3]?e[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(this.options.pedantic&&!/>$/.test(r)?n=n.slice(1):n=n.slice(1,-1)),mn(e,{href:n&&n.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},e[0],this.lexer)}}reflink(t,e){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){let n=(r[2]||r[1]).replace(/\s+/g," ");if(n=e[n.toLowerCase()],!n||!n.href){const i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return mn(r,n,r[0],this.lexer)}}emStrong(t,e,r=""){let n=this.rules.inline.emStrong.lDelim.exec(t);if(!n||n[3]&&r.match(/[\p{L}\p{N}]/u))return;const i=n[1]||n[2]||"";if(!i||i&&(r===""||this.rules.inline.punctuation.exec(r))){const s=n[0].length-1;let o,l,a=s,u=0;const d=n[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(d.lastIndex=0,e=e.slice(-1*t.length+s);(n=d.exec(e))!=null;){if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!o)continue;if(l=o.length,n[3]||n[4]){a+=l;continue}else if((n[5]||n[6])&&s%3&&!((s+l)%3)){u+=l;continue}if(a-=l,a>0)continue;if(l=Math.min(l,l+a+u),Math.min(s,l)%2){const h=t.slice(1,s+n.index+l);return{type:"em",raw:t.slice(0,s+n.index+l+1),text:h,tokens:this.lexer.inlineTokens(h,[])}}const c=t.slice(2,s+n.index+l-1);return{type:"strong",raw:t.slice(0,s+n.index+l+1),text:c,tokens:this.lexer.inlineTokens(c,[])}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let r=e[2].replace(/\n/g," ");const n=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return n&&i&&(r=r.substring(1,r.length-1)),r=P(r,!0),{type:"codespan",raw:e[0],text:r}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2],[])}}autolink(t,e){const r=this.rules.inline.autolink.exec(t);if(r){let n,i;return r[2]==="@"?(n=P(this.options.mangle?e(r[1]):r[1]),i="mailto:"+n):(n=P(r[1]),i=n),{type:"link",raw:r[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(t,e){let r;if(r=this.rules.inline.url.exec(t)){let n,i;if(r[2]==="@")n=P(this.options.mangle?e(r[0]):r[0]),i="mailto:"+n;else{let s;do s=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(s!==r[0]);n=P(r[0]),r[1]==="www."?i="http://"+n:i=n}return{type:"link",raw:r[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t,e){const r=this.rules.inline.text.exec(t);if(r){let n;return this.lexer.state.inRawBlock?n=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):P(r[0]):r[0]:n=P(this.options.smartypants?e(r[0]):r[0]),{type:"text",raw:r[0],text:n}}}},v={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:nt,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/};v._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;v._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;v.def=$(v.def).replace("label",v._label).replace("title",v._title).getRegex();v.bullet=/(?:[*+-]|\d{1,9}[.)])/;v.listItemStart=$(/^( *)(bull) */).replace("bull",v.bullet).getRegex();v.list=$(v.list).replace(/bull/g,v.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+v.def.source+")").getRegex();v._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";v._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;v.html=$(v.html,"i").replace("comment",v._comment).replace("tag",v._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();v.paragraph=$(v._paragraph).replace("hr",v.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v._tag).getRegex();v.blockquote=$(v.blockquote).replace("paragraph",v.paragraph).getRegex();v.normal=G({},v);v.gfm=G({},v.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});v.gfm.table=$(v.gfm.table).replace("hr",v.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v._tag).getRegex();v.pedantic=G({},v.normal,{html:$(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",v._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:nt,paragraph:$(v.normal._paragraph).replace("hr",v.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",v.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var f={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:nt,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:nt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};f._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";f.punctuation=$(f.punctuation).replace(/punctuation/g,f._punctuation).getRegex();f.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;f.escapedEmSt=/\\\*|\\_/g;f._comment=$(v._comment).replace("(?:-->|$)","-->").getRegex();f.emStrong.lDelim=$(f.emStrong.lDelim).replace(/punct/g,f._punctuation).getRegex();f.emStrong.rDelimAst=$(f.emStrong.rDelimAst,"g").replace(/punct/g,f._punctuation).getRegex();f.emStrong.rDelimUnd=$(f.emStrong.rDelimUnd,"g").replace(/punct/g,f._punctuation).getRegex();f._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;f._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;f._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;f.autolink=$(f.autolink).replace("scheme",f._scheme).replace("email",f._email).getRegex();f._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;f.tag=$(f.tag).replace("comment",f._comment).replace("attribute",f._attribute).getRegex();f._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;f._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;f._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;f.link=$(f.link).replace("label",f._label).replace("href",f._href).replace("title",f._title).getRegex();f.reflink=$(f.reflink).replace("label",f._label).getRegex();f.reflinkSearch=$(f.reflinkSearch,"g").replace("reflink",f.reflink).replace("nolink",f.nolink).getRegex();f.normal=G({},f);f.pedantic=G({},f.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:$(/^!?\[(label)\]\((.*?)\)/).replace("label",f._label).getRegex(),reflink:$(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",f._label).getRegex()});f.gfm=G({},f.normal,{escape:$(f.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});f.gfm.url=$(f.gfm.url,"i").replace("email",f.gfm._extended_email).getRegex();f.breaks=G({},f.gfm,{br:$(f.br).replace("{2,}","*").getRegex(),text:$(f.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Ts(t){return t.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function _n(t){let e="",r,n;const i=t.length;for(r=0;r<i;r++)n=t.charCodeAt(r),Math.random()>.5&&(n="x"+n.toString(16)),e+="&#"+n+";";return e}var J=class{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||we,this.options.tokenizer=this.options.tokenizer||new Mt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:v.normal,inline:f.normal};this.options.pedantic?(e.block=v.pedantic,e.inline=f.pedantic):this.options.gfm&&(e.block=v.gfm,this.options.breaks?e.inline=f.breaks:e.inline=f.gfm),this.tokenizer.rules=e}static get rules(){return{block:v,inline:f}}static lex(t,e){return new J(e).lex(t)}static lexInline(t,e){return new J(e).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(t,this.tokens);let e;for(;e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(t,e=[]){this.options.pedantic&&(t=t.replace(/^ +$/gm,""));let r,n,i,s;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(r=o.call({lexer:this},t,e))?(t=t.substring(r.raw.length),e.push(r),!0):!1))){if(r=this.tokenizer.space(t)){t=t.substring(r.raw.length),r.type&&e.push(r);continue}if(r=this.tokenizer.code(t)){t=t.substring(r.raw.length),n=e[e.length-1],n&&(n.type==="paragraph"||n.type==="text")?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=n.text):e.push(r);continue}if(r=this.tokenizer.fences(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.heading(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.hr(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.blockquote(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.list(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.html(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.def(t)){t=t.substring(r.raw.length),n=e[e.length-1],n&&(n.type==="paragraph"||n.type==="text")?(n.raw+=`
`+r.raw,n.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=n.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.lheading(t)){t=t.substring(r.raw.length),e.push(r);continue}if(i=t,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=t.slice(1);let a;this.options.extensions.startBlock.forEach(function(u){a=u.call({lexer:this},l),typeof a=="number"&&a>=0&&(o=Math.min(o,a))}),o<1/0&&o>=0&&(i=t.substring(0,o+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){n=e[e.length-1],s&&n.type==="paragraph"?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):e.push(r),s=i.length!==t.length,t=t.substring(r.raw.length);continue}if(r=this.tokenizer.text(t)){t=t.substring(r.raw.length),n=e[e.length-1],n&&n.type==="text"?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):e.push(r);continue}if(t){const o="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,e}inline(t,e){this.inlineQueue.push({src:t,tokens:e})}inlineTokens(t,e=[]){let r,n,i,s=t,o,l,a;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)u.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,o.index)+"["+vn("a",o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,o.index)+"["+vn("a",o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.escapedEmSt.exec(s))!=null;)s=s.slice(0,o.index)+"++"+s.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;t;)if(l||(a=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(r=u.call({lexer:this},t,e))?(t=t.substring(r.raw.length),e.push(r),!0):!1))){if(r=this.tokenizer.escape(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.tag(t)){t=t.substring(r.raw.length),n=e[e.length-1],n&&r.type==="text"&&n.type==="text"?(n.raw+=r.raw,n.text+=r.text):e.push(r);continue}if(r=this.tokenizer.link(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(r.raw.length),n=e[e.length-1],n&&r.type==="text"&&n.type==="text"?(n.raw+=r.raw,n.text+=r.text):e.push(r);continue}if(r=this.tokenizer.emStrong(t,s,a)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.codespan(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.br(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.del(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.autolink(t,_n)){t=t.substring(r.raw.length),e.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(t,_n))){t=t.substring(r.raw.length),e.push(r);continue}if(i=t,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const d=t.slice(1);let c;this.options.extensions.startInline.forEach(function(h){c=h.call({lexer:this},d),typeof c=="number"&&c>=0&&(u=Math.min(u,c))}),u<1/0&&u>=0&&(i=t.substring(0,u+1))}if(r=this.tokenizer.inlineText(i,Ts)){t=t.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(a=r.raw.slice(-1)),l=!0,n=e[e.length-1],n&&n.type==="text"?(n.raw+=r.raw,n.text+=r.text):e.push(r);continue}if(t){const u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return e}},Bt=class{constructor(t){this.options=t||we}code(t,e,r){const n=(e||"").match(/\S*/)[0];if(this.options.highlight){const i=this.options.highlight(t,n);i!=null&&i!==t&&(r=!0,t=i)}return t=t.replace(/\n$/,"")+`
`,n?'<pre><code class="'+this.options.langPrefix+P(n,!0)+'">'+(r?t:P(t,!0))+`</code></pre>
`:"<pre><code>"+(r?t:P(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
`+t+`</blockquote>
`}html(t){return t}heading(t,e,r,n){return this.options.headerIds?"<h"+e+' id="'+this.options.headerPrefix+n.slug(r)+'">'+t+"</h"+e+`>
`:"<h"+e+">"+t+"</h"+e+`>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,e,r){const n=e?"ol":"ul",i=e&&r!==1?' start="'+r+'"':"";return"<"+n+i+`>
`+t+"</"+n+`>
`}listitem(t){return"<li>"+t+`</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return"<p>"+t+`</p>
`}table(t,e){return e&&(e="<tbody>"+e+"</tbody>"),`<table>
<thead>
`+t+`</thead>
`+e+`</table>
`}tablerow(t){return`<tr>
`+t+`</tr>
`}tablecell(t,e){const r=e.header?"th":"td";return(e.align?"<"+r+' align="'+e.align+'">':"<"+r+">")+t+"</"+r+`>
`}strong(t){return"<strong>"+t+"</strong>"}em(t){return"<em>"+t+"</em>"}codespan(t){return"<code>"+t+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return"<del>"+t+"</del>"}link(t,e,r){if(t=fn(this.options.sanitize,this.options.baseUrl,t),t===null)return r;let n='<a href="'+P(t)+'"';return e&&(n+=' title="'+e+'"'),n+=">"+r+"</a>",n}image(t,e,r){if(t=fn(this.options.sanitize,this.options.baseUrl,t),t===null)return r;let n='<img src="'+t+'" alt="'+r+'"';return e&&(n+=' title="'+e+'"'),n+=this.options.xhtml?"/>":">",n}text(t){return t}},yn=class{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,r){return""+r}image(t,e,r){return""+r}br(){return""}},wn=class{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,e){let r=t,n=0;if(this.seen.hasOwnProperty(r)){n=this.seen[t];do n++,r=t+"-"+n;while(this.seen.hasOwnProperty(r))}return e||(this.seen[t]=n,this.seen[r]=0),r}slug(t,e={}){const r=this.serialize(t);return this.getNextSafeSlug(r,e.dryrun)}},D=class{constructor(t){this.options=t||we,this.options.renderer=this.options.renderer||new Bt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new yn,this.slugger=new wn}static parse(t,e){return new D(e).parse(t)}static parseInline(t,e){return new D(e).parseInline(t)}parse(t,e=!0){let r="",n,i,s,o,l,a,u,d,c,h,p,g,m,E,x,M,I,U,j;const T=t.length;for(n=0;n<T;n++){if(h=t[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[h.type]&&(j=this.options.extensions.renderers[h.type].call({parser:this},h),j!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type))){r+=j||"";continue}switch(h.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{r+=this.renderer.heading(this.parseInline(h.tokens),h.depth,pn(this.parseInline(h.tokens,this.textRenderer)),this.slugger);continue}case"code":{r+=this.renderer.code(h.text,h.lang,h.escaped);continue}case"table":{for(d="",u="",o=h.header.length,i=0;i<o;i++)u+=this.renderer.tablecell(this.parseInline(h.header[i].tokens),{header:!0,align:h.align[i]});for(d+=this.renderer.tablerow(u),c="",o=h.rows.length,i=0;i<o;i++){for(a=h.rows[i],u="",l=a.length,s=0;s<l;s++)u+=this.renderer.tablecell(this.parseInline(a[s].tokens),{header:!1,align:h.align[s]});c+=this.renderer.tablerow(u)}r+=this.renderer.table(d,c);continue}case"blockquote":{c=this.parse(h.tokens),r+=this.renderer.blockquote(c);continue}case"list":{for(p=h.ordered,g=h.start,m=h.loose,o=h.items.length,c="",i=0;i<o;i++)x=h.items[i],M=x.checked,I=x.task,E="",x.task&&(U=this.renderer.checkbox(M),m?x.tokens.length>0&&x.tokens[0].type==="paragraph"?(x.tokens[0].text=U+" "+x.tokens[0].text,x.tokens[0].tokens&&x.tokens[0].tokens.length>0&&x.tokens[0].tokens[0].type==="text"&&(x.tokens[0].tokens[0].text=U+" "+x.tokens[0].tokens[0].text)):x.tokens.unshift({type:"text",text:U}):E+=U),E+=this.parse(x.tokens,m),c+=this.renderer.listitem(E,I,M);r+=this.renderer.list(c,p,g);continue}case"html":{r+=this.renderer.html(h.text);continue}case"paragraph":{r+=this.renderer.paragraph(this.parseInline(h.tokens));continue}case"text":{for(c=h.tokens?this.parseInline(h.tokens):h.text;n+1<T&&t[n+1].type==="text";)h=t[++n],c+=`
`+(h.tokens?this.parseInline(h.tokens):h.text);r+=e?this.renderer.paragraph(c):c;continue}default:{const F='Token with "'+h.type+'" type was not found.';if(this.options.silent){console.error(F);return}else throw new Error(F)}}}return r}parseInline(t,e){e=e||this.renderer;let r="",n,i,s;const o=t.length;for(n=0;n<o;n++){if(i=t[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(s=this.options.extensions.renderers[i.type].call({parser:this},i),s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){r+=s||"";continue}switch(i.type){case"escape":{r+=e.text(i.text);break}case"html":{r+=e.html(i.text);break}case"link":{r+=e.link(i.href,i.title,this.parseInline(i.tokens,e));break}case"image":{r+=e.image(i.href,i.title,i.text);break}case"strong":{r+=e.strong(this.parseInline(i.tokens,e));break}case"em":{r+=e.em(this.parseInline(i.tokens,e));break}case"codespan":{r+=e.codespan(i.text);break}case"br":{r+=e.br();break}case"del":{r+=e.del(this.parseInline(i.tokens,e));break}case"text":{r+=e.text(i.text);break}default:{const l='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(l);return}else throw new Error(l)}}}return r}};function _(t,e,r){if(typeof t=="undefined"||t===null)throw new Error("marked(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");if(typeof e=="function"&&(r=e,e=null),e=G({},_.defaults,e||{}),bn(e),r){const n=e.highlight;let i;try{i=J.lex(t,e)}catch(l){return r(l)}const s=function(l){let a;if(!l)try{e.walkTokens&&_.walkTokens(i,e.walkTokens),a=D.parse(i,e)}catch(u){l=u}return e.highlight=n,l?r(l):r(null,a)};if(!n||n.length<3||(delete e.highlight,!i.length))return s();let o=0;_.walkTokens(i,function(l){l.type==="code"&&(o++,setTimeout(()=>{n(l.text,l.lang,function(a,u){if(a)return s(a);u!=null&&u!==l.text&&(l.text=u,l.escaped=!0),o--,o===0&&s()})},0))}),o===0&&s();return}try{const n=J.lex(t,e);return e.walkTokens&&_.walkTokens(n,e.walkTokens),D.parse(n,e)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+P(n.message+"",!0)+"</pre>";throw n}}_.options=_.setOptions=function(t){return G(_.defaults,t),ps(_.defaults),_};_.getDefaults=hn;_.defaults=we;_.use=function(...t){const e=G({},...t),r=_.defaults.extensions||{renderers:{},childTokens:{}};let n;t.forEach(i=>{if(i.extensions&&(n=!0,i.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if(s.renderer){const o=r.renderers?r.renderers[s.name]:null;o?r.renderers[s.name]=function(...l){let a=s.renderer.apply(this,l);return a===!1&&(a=o.apply(this,l)),a}:r.renderers[s.name]=s.renderer}if(s.tokenizer){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");r[s.level]?r[s.level].unshift(s.tokenizer):r[s.level]=[s.tokenizer],s.start&&(s.level==="block"?r.startBlock?r.startBlock.push(s.start):r.startBlock=[s.start]:s.level==="inline"&&(r.startInline?r.startInline.push(s.start):r.startInline=[s.start]))}s.childTokens&&(r.childTokens[s.name]=s.childTokens)})),i.renderer){const s=_.defaults.renderer||new Bt;for(const o in i.renderer){const l=s[o];s[o]=(...a)=>{let u=i.renderer[o].apply(s,a);return u===!1&&(u=l.apply(s,a)),u}}e.renderer=s}if(i.tokenizer){const s=_.defaults.tokenizer||new Mt;for(const o in i.tokenizer){const l=s[o];s[o]=(...a)=>{let u=i.tokenizer[o].apply(s,a);return u===!1&&(u=l.apply(s,a)),u}}e.tokenizer=s}if(i.walkTokens){const s=_.defaults.walkTokens;e.walkTokens=function(o){i.walkTokens.call(this,o),s&&s.call(this,o)}}n&&(e.extensions=r),_.setOptions(e)})};_.walkTokens=function(t,e){for(const r of t)switch(e.call(_,r),r.type){case"table":{for(const n of r.header)_.walkTokens(n.tokens,e);for(const n of r.rows)for(const i of n)_.walkTokens(i.tokens,e);break}case"list":{_.walkTokens(r.items,e);break}default:_.defaults.extensions&&_.defaults.extensions.childTokens&&_.defaults.extensions.childTokens[r.type]?_.defaults.extensions.childTokens[r.type].forEach(function(n){_.walkTokens(r[n],e)}):r.tokens&&_.walkTokens(r.tokens,e)}};_.parseInline=function(t,e){if(typeof t=="undefined"||t===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");e=G({},_.defaults,e||{}),bn(e);try{const r=J.lexInline(t,e);return e.walkTokens&&_.walkTokens(r,e.walkTokens),D.parseInline(r,e)}catch(r){if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+P(r.message+"",!0)+"</pre>";throw r}};_.Parser=D;_.parser=D.parse;_.Renderer=Bt;_.TextRenderer=yn;_.Lexer=J;_.lexer=J.lex;_.Tokenizer=Mt;_.Slugger=wn;_.parse=_;D.parse;J.lex;self.Prism=cn;var Ie=class extends HTMLElement{static get observedAttributes(){return["src"]}attributeChangedCallback(t,e,r){e!==r&&(this[t]=r)}get src(){return this.getAttribute("src")}set src(t){this.setAttribute("src",t),this.setSrc(t)}get value(){return this.__value}set value(t){this.__value=t,this.setValue()}constructor(){super();this.__value=""}async connectedCallback(){this.style.display="block";const t=this.getElementsByTagName("script")[0];if(t){if(t.getAttribute("type")==="wc-content"){let e=Ie.dedentText(t.innerHTML);e=e.replace(/&lt;(\/?script)(.*?)&gt;/g,"<$1$2>"),this.value=e}}else this.textContent&&(this.__value=this.textContent,this.setValue())}async setSrc(t){this.__value=await this.fetchSrc(t),this.setValue()}async fetchSrc(t){return(await fetch(t)).text()}setValue(){let t=this.__value;t=Ie.prepare(t),t=Ie.toHtml(t),this.innerHTML=t,this.hasAttribute("highlight")&&Ie.highlight(this)}static prepare(t){return t.split(`
`).map(e=>(e=e.replace("&lt;","<"),e.replace("&gt;",">"))).join(`
`)}static toHtml(t){return _(t)}static highlight(t){cn.highlightAllUnder(t)}static dedentText(t){const e=t.split(`
`);e[0]===""&&e.splice(0,1);const r=e[0];let n=0;const s=r[0]==="	"?"	":" ";for(;r[n]===s;)n+=1;const o=[];for(const l of e){let a=l;for(let u=0;u<n&&a[0]===s;u++)a=a.substring(1);o.push(a)}return o[o.length-1]===""&&o.splice(o.length-1,1),o.join(`
`)}};customElements.define("wc-markdown",Ie);function Ns(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})}),e}var zt={},Ot={};(function(t){const e=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",r=e+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",n="["+e+"]["+r+"]*",i=new RegExp("^"+n+"$"),s=function(l,a){const u=[];let d=a.exec(l);for(;d;){const c=[];c.startIndex=a.lastIndex-d[0].length;const h=d.length;for(let p=0;p<h;p++)c.push(d[p]);u.push(c),d=a.exec(l)}return u},o=function(l){const a=i.exec(l);return!(a===null||typeof a=="undefined")};t.isExist=function(l){return typeof l!="undefined"},t.isEmptyObject=function(l){return Object.keys(l).length===0},t.merge=function(l,a,u){if(a){const d=Object.keys(a),c=d.length;for(let h=0;h<c;h++)u==="strict"?l[d[h]]=[a[d[h]]]:l[d[h]]=a[d[h]]}},t.getValue=function(l){return t.isExist(l)?l:""},t.isName=o,t.getAllMatches=s,t.nameRegexp=n})(Ot);const It=Ot,Ps={allowBooleanAttributes:!1,unpairedTags:[]};zt.validate=function(t,e){e=Object.assign({},Ps,e);const r=[];let n=!1,i=!1;t[0]==="\uFEFF"&&(t=t.substr(1));for(let s=0;s<t.length;s++)if(t[s]==="<"&&t[s+1]==="?"){if(s+=2,s=$n(t,s),s.err)return s}else if(t[s]==="<"){let o=s;if(s++,t[s]==="!"){s=kn(t,s);continue}else{let l=!1;t[s]==="/"&&(l=!0,s++);let a="";for(;s<t.length&&t[s]!==">"&&t[s]!==" "&&t[s]!=="	"&&t[s]!==`
`&&t[s]!=="\r";s++)a+=t[s];if(a=a.trim(),a[a.length-1]==="/"&&(a=a.substring(0,a.length-1),s--),!Hs(a)){let c;return a.trim().length===0?c="Invalid space after '<'.":c="Tag '"+a+"' is an invalid name.",C("InvalidTag",c,z(t,s))}const u=Ms(t,s);if(u===!1)return C("InvalidAttr","Attributes for '"+a+"' have open quote.",z(t,s));let d=u.value;if(s=u.index,d[d.length-1]==="/"){const c=s-d.length;d=d.substring(0,d.length-1);const h=An(d,e);if(h===!0)n=!0;else return C(h.err.code,h.err.msg,z(t,c+h.err.line))}else if(l)if(u.tagClosed){if(d.trim().length>0)return C("InvalidTag","Closing tag '"+a+"' can't have attributes or invalid starting.",z(t,o));{const c=r.pop();if(a!==c.tagName){let h=z(t,c.tagStartPos);return C("InvalidTag","Expected closing tag '"+c.tagName+"' (opened in line "+h.line+", col "+h.col+") instead of closing tag '"+a+"'.",z(t,o))}r.length==0&&(i=!0)}}else return C("InvalidTag","Closing tag '"+a+"' doesn't have proper closing.",z(t,s));else{const c=An(d,e);if(c!==!0)return C(c.err.code,c.err.msg,z(t,s-d.length+c.err.line));if(i===!0)return C("InvalidXml","Multiple possible root nodes found.",z(t,s));e.unpairedTags.indexOf(a)!==-1||r.push({tagName:a,tagStartPos:o}),n=!0}for(s++;s<t.length;s++)if(t[s]==="<")if(t[s+1]==="!"){s++,s=kn(t,s);continue}else if(t[s+1]==="?"){if(s=$n(t,++s),s.err)return s}else break;else if(t[s]==="&"){const c=Os(t,s);if(c==-1)return C("InvalidChar","char '&' is not expected.",z(t,s));s=c}else if(i===!0&&!xn(t[s]))return C("InvalidXml","Extra text at the end",z(t,s));t[s]==="<"&&s--}}else{if(xn(t[s]))continue;return C("InvalidChar","char '"+t[s]+"' is not expected.",z(t,s))}if(n){if(r.length==1)return C("InvalidTag","Unclosed tag '"+r[0].tagName+"'.",z(t,r[0].tagStartPos));if(r.length>0)return C("InvalidXml","Invalid '"+JSON.stringify(r.map(s=>s.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1})}else return C("InvalidXml","Start tag expected.",1);return!0};function xn(t){return t===" "||t==="	"||t===`
`||t==="\r"}function $n(t,e){const r=e;for(;e<t.length;e++)if(t[e]=="?"||t[e]==" "){const n=t.substr(r,e-r);if(e>5&&n==="xml")return C("InvalidXml","XML declaration allowed only at the start of the document.",z(t,e));if(t[e]=="?"&&t[e+1]==">"){e++;break}else continue}return e}function kn(t,e){if(t.length>e+5&&t[e+1]==="-"&&t[e+2]==="-"){for(e+=3;e<t.length;e++)if(t[e]==="-"&&t[e+1]==="-"&&t[e+2]===">"){e+=2;break}}else if(t.length>e+8&&t[e+1]==="D"&&t[e+2]==="O"&&t[e+3]==="C"&&t[e+4]==="T"&&t[e+5]==="Y"&&t[e+6]==="P"&&t[e+7]==="E"){let r=1;for(e+=8;e<t.length;e++)if(t[e]==="<")r++;else if(t[e]===">"&&(r--,r===0))break}else if(t.length>e+9&&t[e+1]==="["&&t[e+2]==="C"&&t[e+3]==="D"&&t[e+4]==="A"&&t[e+5]==="T"&&t[e+6]==="A"&&t[e+7]==="["){for(e+=8;e<t.length;e++)if(t[e]==="]"&&t[e+1]==="]"&&t[e+2]===">"){e+=2;break}}return e}const Rs='"',Ls="'";function Ms(t,e){let r="",n="",i=!1;for(;e<t.length;e++){if(t[e]===Rs||t[e]===Ls)n===""?n=t[e]:n!==t[e]||(n="");else if(t[e]===">"&&n===""){i=!0;break}r+=t[e]}return n!==""?!1:{value:r,index:e,tagClosed:i}}const Bs=new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");function An(t,e){const r=It.getAllMatches(t,Bs),n={};for(let i=0;i<r.length;i++){if(r[i][1].length===0)return C("InvalidAttr","Attribute '"+r[i][2]+"' has no space in starting.",He(r[i]));if(r[i][3]!==void 0&&r[i][4]===void 0)return C("InvalidAttr","Attribute '"+r[i][2]+"' is without value.",He(r[i]));if(r[i][3]===void 0&&!e.allowBooleanAttributes)return C("InvalidAttr","boolean attribute '"+r[i][2]+"' is not allowed.",He(r[i]));const s=r[i][2];if(!Is(s))return C("InvalidAttr","Attribute '"+s+"' is an invalid name.",He(r[i]));if(!n.hasOwnProperty(s))n[s]=1;else return C("InvalidAttr","Attribute '"+s+"' is repeated.",He(r[i]))}return!0}function zs(t,e){let r=/\d/;for(t[e]==="x"&&(e++,r=/[\da-fA-F]/);e<t.length;e++){if(t[e]===";")return e;if(!t[e].match(r))break}return-1}function Os(t,e){if(e++,t[e]===";")return-1;if(t[e]==="#")return e++,zs(t,e);let r=0;for(;e<t.length;e++,r++)if(!(t[e].match(/\w/)&&r<20)){if(t[e]===";")break;return-1}return e}function C(t,e,r){return{err:{code:t,msg:e,line:r.line||r,col:r.col}}}function Is(t){return It.isName(t)}function Hs(t){return It.isName(t)}function z(t,e){const r=t.substring(0,e).split(/\r?\n/);return{line:r.length,col:r[r.length-1].length+1}}function He(t){return t.startIndex+t[1].length}var Ht={};const En={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0},tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1},Us=function(t){return Object.assign({},En,t)};Ht.buildOptions=Us;Ht.defaultOptions=En;class Fs{constructor(e){this.tagname=e,this.child=[],this[":@"]={}}add(e,r){this.child.push({[e]:r})}addChild(e){e[":@"]&&Object.keys(e[":@"]).length>0?this.child.push({[e.tagname]:e.child,[":@"]:e[":@"]}):this.child.push({[e.tagname]:e.child})}}var Zs=Fs;function Gs(t,e){const r={};if(t[e+3]==="O"&&t[e+4]==="C"&&t[e+5]==="T"&&t[e+6]==="Y"&&t[e+7]==="P"&&t[e+8]==="E"){e=e+9;let n=1,i=!1,s=!1,o=!1,l="";for(;e<t.length;e++)if(t[e]==="<"){if(i&&t[e+1]==="!"&&t[e+2]==="E"&&t[e+3]==="N"&&t[e+4]==="T"&&t[e+5]==="I"&&t[e+6]==="T"&&t[e+7]==="Y")e+=7,s=!0;else if(i&&t[e+1]==="!"&&t[e+2]==="E"&&t[e+3]==="L"&&t[e+4]==="E"&&t[e+5]==="M"&&t[e+6]==="E"&&t[e+7]==="N"&&t[e+8]==="T")e+=8;else if(t[e+1]==="!"&&t[e+2]==="-"&&t[e+3]==="-")o=!0;else throw new Error("Invalid DOCTYPE");n++,l=""}else if(t[e]===">"){if(o)if(t[e-1]==="-"&&t[e-2]==="-")o=!1;else throw new Error("Invalid XML comment in DOCTYPE");else s&&(js(l,r),s=!1);if(n--,n===0)break}else t[e]==="["?i=!0:l+=t[e];if(n!==0)throw new Error("Unclosed DOCTYPE")}else throw new Error("Invalid Tag instead of DOCTYPE");return{entities:r,i:e}}const Ys=RegExp(`^\\s([a-zA-z0-0]+)[ 	](['"])([^&]+)\\2`);function js(t,e){const r=Ys.exec(t);r&&(e[r[1]]={regx:RegExp(`&${r[1]};`,"g"),val:r[3]})}var Xs=Gs;const Vs=/^[-+]?0x[a-fA-F0-9]+$/,qs=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt);!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);const Ws={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};function Ks(t,e={}){if(e=Object.assign({},Ws,e),!t||typeof t!="string")return t;let r=t.trim();if(e.skipLike!==void 0&&e.skipLike.test(r))return t;if(e.hex&&Vs.test(r))return Number.parseInt(r,16);{const n=qs.exec(r);if(n){const i=n[1],s=n[2];let o=Qs(n[3]);const l=n[4]||n[6];if(!e.leadingZeros&&s.length>0&&i&&r[2]!==".")return t;if(!e.leadingZeros&&s.length>0&&!i&&r[1]!==".")return t;{const a=Number(r),u=""+a;return u.search(/[eE]/)!==-1||l?e.eNotation?a:t:r.indexOf(".")!==-1?u==="0"&&o===""||u===o||i&&u==="-"+o?a:t:s?o===u||i+o===u?a:t:r===u||r===i+u?a:t}}else return t}}function Qs(t){return t&&t.indexOf(".")!==-1&&(t=t.replace(/0+$/,""),t==="."?t="0":t[0]==="."?t="0"+t:t[t.length-1]==="."&&(t=t.substr(0,t.length-1))),t}var Js=Ks;const Ut=Ot,Ue=Zs,Ds=Xs,eo=Js;"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,Ut.nameRegexp);class to{constructor(e){this.options=e,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={amp:{regex:/&(amp|#38|#x26);/g,val:"&"},apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"\xA2"},pound:{regex:/&(pound|#163);/g,val:"\xA3"},yen:{regex:/&(yen|#165);/g,val:"\xA5"},euro:{regex:/&(euro|#8364);/g,val:"\u20AC"},copyright:{regex:/&(copy|#169);/g,val:"\xA9"},reg:{regex:/&(reg|#174);/g,val:"\xAE"},inr:{regex:/&(inr|#8377);/g,val:"\u20B9"}},this.addExternalEntities=ro,this.parseXml=lo,this.parseTextData=no,this.resolveNameSpace=io,this.buildAttributesMap=oo,this.isItStopNode=co,this.replaceEntitiesValue=ao,this.readStopNodeData=po,this.saveTextToParentTag=uo}}function ro(t){const e=Object.keys(t);for(let r=0;r<e.length;r++){const n=e[r];this.lastEntities[n]={regex:new RegExp("&"+n+";","g"),val:t[n]}}}function no(t,e,r,n,i,s,o){if(t!==void 0&&(this.options.trimValues&&!n&&(t=t.trim()),t.length>0)){o||(t=this.replaceEntitiesValue(t));const l=this.options.tagValueProcessor(e,t,r,i,s);return l==null?t:typeof l!=typeof t||l!==t?l:this.options.trimValues?Ft(t,this.options.parseTagValue,this.options.numberParseOptions):t.trim()===t?Ft(t,this.options.parseTagValue,this.options.numberParseOptions):t}}function io(t){if(this.options.removeNSPrefix){const e=t.split(":"),r=t.charAt(0)==="/"?"/":"";if(e[0]==="xmlns")return"";e.length===2&&(t=r+e[1])}return t}const so=new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,"gm");function oo(t,e){if(!this.options.ignoreAttributes&&typeof t=="string"){const r=Ut.getAllMatches(t,so),n=r.length,i={};for(let s=0;s<n;s++){const o=this.resolveNameSpace(r[s][1]);let l=r[s][4];const a=this.options.attributeNamePrefix+o;if(o.length)if(l!==void 0){this.options.trimValues&&(l=l.trim()),l=this.replaceEntitiesValue(l);const u=this.options.attributeValueProcessor(o,l,e);u==null?i[a]=l:typeof u!=typeof l||u!==l?i[a]=u:i[a]=Ft(l,this.options.parseAttributeValue,this.options.numberParseOptions)}else this.options.allowBooleanAttributes&&(i[a]=!0)}if(!Object.keys(i).length)return;if(this.options.attributesGroupName){const s={};return s[this.options.attributesGroupName]=i,s}return i}}const lo=function(t){t=t.replace(/\r\n?/g,`
`);const e=new Ue("!xml");let r=e,n="",i="";for(let s=0;s<t.length;s++)if(t[s]==="<")if(t[s+1]==="/"){const l=st(t,">",s,"Closing Tag is not closed.");let a=t.substring(s+2,l).trim();if(this.options.removeNSPrefix){const u=a.indexOf(":");u!==-1&&(a=a.substr(u+1))}r&&(n=this.saveTextToParentTag(n,r,i)),i=i.substr(0,i.lastIndexOf(".")),r=this.tagsNodeStack.pop(),n="",s=l}else if(t[s+1]==="?"){let l=Sn(t,s,!1,"?>");if(!l)throw new Error("Pi Tag is not closed.");n=this.saveTextToParentTag(n,r,i);const a=new Ue(l.tagName);a.add(this.options.textNodeName,""),l.tagName!==l.tagExp&&l.attrExpPresent&&(a[":@"]=this.buildAttributesMap(l.tagExp,i)),r.addChild(a),s=l.closeIndex+1}else if(t.substr(s+1,3)==="!--"){const l=st(t,"-->",s,"Comment is not closed.");if(this.options.commentPropName){const a=t.substring(s+4,l-2);n=this.saveTextToParentTag(n,r,i),r.add(this.options.commentPropName,[{[this.options.textNodeName]:a}])}s=l}else if(t.substr(s+1,2)==="!D"){const l=Ds(t,s);this.docTypeEntities=l.entities,s=l.i}else if(t.substr(s+1,2)==="!["){const l=st(t,"]]>",s,"CDATA is not closed.")-2,a=t.substring(s+9,l);if(n=this.saveTextToParentTag(n,r,i),this.options.cdataPropName)r.add(this.options.cdataPropName,[{[this.options.textNodeName]:a}]);else{let u=this.parseTextData(a,r.tagname,i,!0,!1,!0);u||(u=""),r.add(this.options.textNodeName,u)}s=l+2}else{let l=Sn(t,s,this.options.removeNSPrefix),a=l.tagName,u=l.tagExp,d=l.attrExpPresent,c=l.closeIndex;r&&n&&r.tagname!=="!xml"&&(n=this.saveTextToParentTag(n,r,i,!1)),a!==e.tagname&&(i+=i?"."+a:a);const h=r;if(h&&this.options.unpairedTags.indexOf(h.tagname)!==-1&&(r=this.tagsNodeStack.pop()),this.isItStopNode(this.options.stopNodes,i,a)){let p="";if(!(u.length>0&&u.lastIndexOf("/")===u.length-1)){if(this.options.unpairedTags.indexOf(a)===-1){const m=this.readStopNodeData(t,a,c+1);if(!m)throw new Error(`Unexpected end of ${a}`);s=m.i,p=m.tagContent}}const g=new Ue(a);a!==u&&d&&(g[":@"]=this.buildAttributesMap(u,i)),p&&(p=this.parseTextData(p,a,i,!0,d,!0,!0)),i=i.substr(0,i.lastIndexOf(".")),g.add(this.options.textNodeName,p),r.addChild(g)}else{if(u.length>0&&u.lastIndexOf("/")===u.length-1){a[a.length-1]==="/"?(a=a.substr(0,a.length-1),u=a):u=u.substr(0,u.length-1);const p=new Ue(a);a!==u&&d&&(p[":@"]=this.buildAttributesMap(u,i)),i=i.substr(0,i.lastIndexOf(".")),r.addChild(p)}else{const p=new Ue(a);this.tagsNodeStack.push(r),a!==u&&d&&(p[":@"]=this.buildAttributesMap(u,i)),r.addChild(p),r=p}n="",s=c}}else n+=t[s];return e.child},ao=function(t){if(this.options.processEntities){for(let e in this.docTypeEntities){const r=this.docTypeEntities[e];t=t.replace(r.regx,r.val)}for(let e in this.lastEntities){const r=this.lastEntities[e];t=t.replace(r.regex,r.val)}if(this.options.htmlEntities)for(let e in this.htmlEntities){const r=this.htmlEntities[e];t=t.replace(r.regex,r.val)}}return t};function uo(t,e,r,n){return t&&(n===void 0&&(n=Object.keys(e.child).length===0),t=this.parseTextData(t,e.tagname,r,!1,e[":@"]?Object.keys(e[":@"]).length!==0:!1,n),t!==void 0&&t!==""&&e.add(this.options.textNodeName,t),t=""),t}function co(t,e,r){const n="*."+r;for(const i in t){const s=t[i];if(n===s||e===s)return!0}return!1}function ho(t,e,r=">"){let n,i="";for(let s=e;s<t.length;s++){let o=t[s];if(n)o===n&&(n="");else if(o==='"'||o==="'")n=o;else if(o===r[0])if(r[1]){if(t[s+1]===r[1])return{data:i,index:s}}else return{data:i,index:s};else o==="	"&&(o=" ");i+=o}}function st(t,e,r,n){const i=t.indexOf(e,r);if(i===-1)throw new Error(n);return i+e.length-1}function Sn(t,e,r,n=">"){const i=ho(t,e+1,n);if(!i)return;let s=i.data;const o=i.index,l=s.search(/\s/);let a=s,u=!0;if(l!==-1&&(a=s.substr(0,l).replace(/\s\s*$/,""),s=s.substr(l+1)),r){const d=a.indexOf(":");d!==-1&&(a=a.substr(d+1),u=a!==i.data.substr(d+1))}return{tagName:a,tagExp:s,closeIndex:o,attrExpPresent:u}}function po(t,e,r){const n=r;for(;r<t.length;r++)if(t[r]==="<"&&t[r+1]==="/"){const i=st(t,">",r,`${e} is not closed`);if(t.substring(r+2,i).trim()===e)return{tagContent:t.substring(n,r),i};r=i}}function Ft(t,e,r){if(e&&typeof t=="string"){const n=t.trim();return n==="true"?!0:n==="false"?!1:eo(t,r)}else return Ut.isExist(t)?t:""}var fo=to,Cn={};function go(t,e){return Tn(t,e)}function Tn(t,e,r){let n;const i={};for(let s=0;s<t.length;s++){const o=t[s],l=bo(o);let a="";if(r===void 0?a=l:a=r+"."+l,l===e.textNodeName)n===void 0?n=o[l]:n+=""+o[l];else{if(l===void 0)continue;if(o[l]){let u=Tn(o[l],e,a);const d=mo(u,e);o[":@"]?vo(u,o[":@"],a,e):Object.keys(u).length===1&&u[e.textNodeName]!==void 0&&!e.alwaysCreateTextNode?u=u[e.textNodeName]:Object.keys(u).length===0&&(e.alwaysCreateTextNode?u[e.textNodeName]="":u=""),i[l]!==void 0?(Array.isArray(i[l])||(i[l]=[i[l]]),i[l].push(u)):e.isArray(l,a,d)?i[l]=[u]:i[l]=u}}}return typeof n=="string"?n.length>0&&(i[e.textNodeName]=n):n!==void 0&&(i[e.textNodeName]=n),i}function bo(t){const e=Object.keys(t);for(let r=0;r<e.length;r++){const n=e[r];if(n!==":@")return n}}function vo(t,e,r,n){if(e){const i=Object.keys(e),s=i.length;for(let o=0;o<s;o++){const l=i[o];n.isArray(l,r+"."+l,!0,!0)?t[l]=[e[l]]:t[l]=e[l]}}}function mo(t,e){const r=Object.keys(t).length;return!!(r===0||r===1&&t[e.textNodeName])}Cn.prettify=go;const{buildOptions:_o}=Ht,yo=fo,{prettify:wo}=Cn,xo=zt;class $o{constructor(e){this.externalEntities={},this.options=_o(e)}parse(e,r){if(typeof e!="string")if(e.toString)e=e.toString();else throw new Error("XML data is accepted in String or Bytes[] form.");if(r){r===!0&&(r={});const s=xo.validate(e,r);if(s!==!0)throw Error(`${s.err.msg}:${s.err.line}:${s.err.col}`)}const n=new yo(this.options);n.addExternalEntities(this.externalEntities);const i=n.parseXml(e);return this.options.preserveOrder||i===void 0?i:wo(i,this.options)}addEntity(e,r){if(r.indexOf("&")!==-1)throw new Error("Entity value can't have '&'");if(e.indexOf("&")!==-1||e.indexOf(";")!==-1)throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");this.externalEntities[e]=r}}var ko=$o,Ao={},Eo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ao}),So=Ns(Eo);const{EOL:Co}=So;function To(t,e){return Nn(t,e,"",0)}function Nn(t,e,r,n){let i="",s="";e.format&&e.indentBy.length>0&&(s=Co+""+e.indentBy.repeat(n));for(let o=0;o<t.length;o++){const l=t[o],a=No(l);let u="";if(r.length===0?u=a:u=`${r}.${a}`,a===e.textNodeName){let p=l[a];Po(u,e)||(p=e.tagValueProcessor(a,p),p=Rn(p,e)),i+=s+p;continue}else if(a===e.cdataPropName){i+=s+`<![CDATA[${l[a][0][e.textNodeName]}]]>`;continue}else if(a===e.commentPropName){i+=s+`<!--${l[a][0][e.textNodeName]}-->`;continue}else if(a[0]==="?"){const p=Pn(l[":@"],e);i+=s+`<${a} ${l[a][0][e.textNodeName]} ${p}?>`;continue}const d=Pn(l[":@"],e);let c=s+`<${a}${d}`,h=Nn(l[a],e,u,n+1);e.unpairedTags.indexOf(a)!==-1?i+=c+">":(!h||h.length===0)&&e.suppressEmptyNode?i+=c+"/>":i+=c+`>${h}${s}</${a}>`}return i}function No(t){const e=Object.keys(t);for(let r=0;r<e.length;r++){const n=e[r];if(n!==":@")return n}}function Pn(t,e){let r="";if(t&&!e.ignoreAttributes)for(attr in t){let n=e.attributeValueProcessor(attr,t[attr]);n=Rn(n,e),n===!0&&e.suppressBooleanAttributes?r+=` ${attr.substr(e.attributeNamePrefix.length)}`:r+=` ${attr.substr(e.attributeNamePrefix.length)}="${n}"`}return r}function Po(t,e){t=t.substr(0,t.length-e.textNodeName.length-1);let r=t.substr(t.lastIndexOf(".")+1);for(let n in e.stopNodes)if(e.stopNodes[n]===t||e.stopNodes[n]==="*."+r)return!0;return!1}function Rn(t,e){if(t&&t.length>0&&e.processEntities)for(const r in e.entities){const n=e.entities[r];t=t.replace(n.regex,n.val)}return t}var Ro=To;const Lo=Ro,Mo={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressBooleanAttributes:!0,tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:{">":{regex:new RegExp(">","g"),val:"&gt;"},"<":{regex:new RegExp("<","g"),val:"&lt;"},sQuot:{regex:new RegExp("'","g"),val:"&apos;"},dQuot:{regex:new RegExp('"',"g"),val:"&quot;"}},processEntities:!0,stopNodes:[]};function Zt(t){this.options=Object.assign({},Mo,t),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=Uo),this.processTextOrObjNode=Bo,this.options.format?(this.indentate=Ho,this.tagEndChar=`>
`,this.newLine=`
`):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine=""),this.options.suppressEmptyNode?(this.buildTextNode=Io,this.buildObjNode=zo):(this.buildTextNode=Mn,this.buildObjNode=Ln),this.buildTextValNode=Mn,this.buildObjectNode=Ln,this.replaceEntitiesValue=Oo}Zt.prototype.build=function(t){return this.options.preserveOrder?Lo(t,this.options):(Array.isArray(t)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(t={[this.options.arrayNodeName]:t}),this.j2x(t,0).val)};Zt.prototype.j2x=function(t,e){let r="",n="";for(let i in t)if(typeof t[i]!="undefined")if(t[i]===null)n+=this.indentate(e)+"<"+i+"/"+this.tagEndChar;else if(t[i]instanceof Date)n+=this.buildTextNode(t[i],i,"",e);else if(typeof t[i]!="object"){const s=this.isAttribute(i);if(s){let o=this.options.attributeValueProcessor(s,""+t[i]);o=this.replaceEntitiesValue(o),r+=" "+s+'="'+o+'"'}else if(i===this.options.textNodeName){let o=this.options.tagValueProcessor(i,""+t[i]);n+=this.replaceEntitiesValue(o)}else n+=this.buildTextNode(t[i],i,"",e)}else if(Array.isArray(t[i])){const s=t[i].length;for(let o=0;o<s;o++){const l=t[i][o];typeof l=="undefined"||(l===null?n+=this.indentate(e)+"<"+i+"/"+this.tagEndChar:typeof l=="object"?n+=this.processTextOrObjNode(l,i,e):n+=this.buildTextNode(l,i,"",e))}}else if(this.options.attributesGroupName&&i===this.options.attributesGroupName){const s=Object.keys(t[i]),o=s.length;for(let l=0;l<o;l++){let a=this.options.attributeValueProcessor(s[l],""+t[i][s[l]]);a=this.replaceEntitiesValue(a),r+=" "+s[l]+'="'+a+'"'}}else n+=this.processTextOrObjNode(t[i],i,e);return{attrStr:r,val:n}};function Bo(t,e,r){const n=this.j2x(t,r+1);return t[this.options.textNodeName]!==void 0&&Object.keys(t).length===1?this.buildTextNode(n.val,e,n.attrStr,r):this.buildObjNode(n.val,e,n.attrStr,r)}function Ln(t,e,r,n){return r&&t.indexOf("<")===-1?this.indentate(n)+"<"+e+r+">"+t+"</"+e+this.tagEndChar:this.indentate(n)+"<"+e+r+this.tagEndChar+t+this.indentate(n)+"</"+e+this.tagEndChar}function zo(t,e,r,n){return t!==""?this.buildObjectNode(t,e,r,n):this.indentate(n)+"<"+e+r+"/"+this.tagEndChar}function Mn(t,e,r,n){let i=this.options.tagValueProcessor(e,t);return i=this.replaceEntitiesValue(i),this.indentate(n)+"<"+e+r+">"+i+"</"+e+this.tagEndChar}function Oo(t){if(t&&t.length>0&&this.options.processEntities)for(const e in this.options.entities){const r=this.options.entities[e];t=t.replace(r.regex,r.val)}return t}function Io(t,e,r,n){return t===""&&this.options.unpairedTags.indexOf(e)!==-1?this.indentate(n)+"<"+e+r+this.tagEndChar:t!==""?this.buildTextValNode(t,e,r,n):this.indentate(n)+"<"+e+r+"/"+this.tagEndChar}function Ho(t){return this.options.indentBy.repeat(t)}function Uo(t){return t.startsWith(this.options.attributeNamePrefix)?t.substr(this.attrPrefixLen):!1}var Fo=Zt;const Zo=zt,Go=ko,Yo=Fo;var el={XMLParser:Go,XMLValidator:Zo,XMLBuilder:Yo},Gt={},ot={};Object.defineProperty(ot,"__esModule",{value:!0});ot.Matrix=void 0;class xe{}ot.Matrix=xe;xe.transpose=t=>{var e;const r=t.length||0,n=(e=t[0])===null||e===void 0?void 0:e.length,i=Bn();for(let s=0;s<r;s++)for(let o=0;o<n;o++)i[o][s]=t[s][o];return i};xe.inv=t=>{const e=Bn(),[[r,n,i],[s,o,l],[a,u,d]]=t,c=r*o*d-r*l*u-n*s*d+n*l*a+i*s*u-i*o*a;if(c===0)throw new Error("Matrix not invertible");const h=1/c;return e[0][0]=h*(o*d-l*u),e[0][1]=h*(i*u-n*d),e[0][2]=h*(n*l-i*o),e[1][0]=h*(l*a-s*d),e[1][1]=h*(r*d-i*a),e[1][2]=h*(i*s-r*l),e[2][0]=h*(s*u-o*a),e[2][1]=h*(n*a-r*u),e[2][2]=h*(r*o-n*s),e};xe.multiply_3x3_times_triple=(t,e)=>{const[[r,n,i],[s,o,l],[a,u,d]]=t,[c,h,p]=e;return[r*c+n*h+i*p,s*c+o*h+l*p,a*c+u*h+d*p]};xe.multiply_triple_times_3x3=(t,e)=>{const[r,n,i]=t,[[s,o,l],[a,u,d],[c,h,p]]=e;return[s*r+a*n+c*i,o*r+u*n+h*i,l*r+d*n+p*i]};xe.multiply_3x3_times_3x3=(t,e)=>{const[[r,n,i],[s,o,l],[a,u,d]]=t,[[c,h,p],[g,m,E],[x,M,I]]=e;return[[r*c+n*g+i*x,r*h+n*m+i*M,r*p+n*E+i*I],[s*c+o*g+l*x,s*h+o*m+l*M,s*p+o*E+l*I],[a*c+u*g+d*x,a*h+u*m+d*M,a*p+u*E+d*I]]};const Bn=()=>[[1,0,0],[0,1,0],[0,0,1]];Object.defineProperty(Gt,"__esModule",{value:!0});var jo=Gt.ColorConverter=void 0;const R=ot;class Xo{constructor({RefWhite:e="D50",RgbModel:r="sRGB",GammaModel:n="sRGB",Adaptation:i="Bradford"}={}){this.RefWhite="D50",this.RgbModel="sRGB",this.GammaModel="sRGB",this.Adaptation="Bradford",this.kE=216/24389,this.kK=24389/27,this.RefWhite=e,this.RgbModel=r,this.GammaModel=n,this.Adaptation=i}get Mtx_RefWhite(){switch(this.RefWhite){case"A":return[1.0985,1,.35585];case"B":return[.99072,1,.85223];case"C":return[.98074,1,1.18232];case"D50":return[.96422,1,.82521];case"D55":return[.95682,1,.92149];case"D65":return[.95047,1,1.0888];case"D75":return[.94972,1,1.22638];case"E":return[1,1,1];case"F2":return[.99186,1,.67393];case"F7":return[.95041,1,1.08747];case"F11":return[1.00962,1,.6435];default:return[1,1,1]}}get Mtx_RefWhiteRGB(){switch(this.RgbModel){case"Adobe RGB (1998)":return[.95047,1,1.08883];case"AppleRGB":return[.95047,1,1.08883];case"Best RGB":return[.96422,1,.82521];case"Beta RGB":return[.96422,1,.82521];case"Bruce RGB":return[.95047,1,1.08883];case"CIE RGB":return[1,1,1];case"ColorMatch RGB":return[.96422,1,.82521];case"Don RGB 4":return[.96422,1,.82521];case"ECI RGB v2":return[.96422,1,.82521];case"Ekta Space PS5":return[.96422,1,.82521];case"NTSC RGB":return[.98074,1,1.18232];case"PAL/SECAM RGB":return[.95047,1,1.08883];case"ProPhoto RGB":return[.96422,1,.82521];case"SMPTE-C RGB":return[.95047,1,1.08883];case"sRGB":return[.95047,1,1.08883];case"Wide Gamut RGB":return[.96422,1,.82521]}}get GammaRGB(){switch(this.RgbModel){case"Adobe RGB (1998)":return{value:2.2,index:2};case"AppleRGB":return{value:1.8,index:1};case"Best RGB":return{value:2.2,index:2};case"Beta RGB":return{value:2.2,index:2};case"Bruce RGB":return{value:2.2,index:2};case"CIE RGB":return{value:2.2,index:2};case"ColorMatch RGB":return{value:1.8,index:2};case"Don RGB 4":return{value:2.2,index:2};case"ECI RGB v2":return{value:0,index:4};case"Ekta Space PS5":return{value:2.2,index:2};case"NTSC RGB":return{value:2.2,index:2};case"PAL/SECAM RGB":return{value:2.2,index:2};case"ProPhoto RGB":return{value:1.8,index:1};case"SMPTE-C RGB":return{value:2.2,index:2};case"sRGB":return{value:-2.2,index:3};case"Wide Gamut RGB":return{value:2.2,index:2}}}get Gamma(){switch(this.GammaModel.toString()){case"1.0":return 1;case"1.8":return 1.8;case"2.2":return 2.2;case"sRGB":return-2.2;case"L*":return 0;default:return 1}}get Mtx_RGB2XYZ(){let e,r,n,i,s,o;switch(this.RgbModel){case"Adobe RGB (1998)":{[e,r,n,i,s,o]=[.64,.33,.21,.71,.15,.06];break}case"AppleRGB":{[e,r,n,i,s,o]=[.625,.34,.28,.595,.155,.07];break}case"Best RGB":{[e,r,n,i,s,o]=[.7347,.2653,.215,.775,.13,.035];break}case"Beta RGB":{[e,r,n,i,s,o]=[.6888,.3112,.1986,.7551,.1265,.0352];break}case"Bruce RGB":{[e,r,n,i,s,o]=[.64,.33,.28,.65,.15,.06];break}case"CIE RGB":{[e,r,n,i,s,o]=[.735,.265,.274,.717,.167,.009];break}case"ColorMatch RGB":{[e,r,n,i,s,o]=[.63,.34,.295,.605,.15,.075];break}case"Don RGB 4":{[e,r,n,i,s,o]=[.696,.3,.215,.765,.13,.035];break}case"ECI RGB v2":{[e,r,n,i,s,o]=[.67,.33,.21,.71,.14,.08];break}case"Ekta Space PS5":{[e,r,n,i,s,o]=[.695,.305,.26,.7,.11,.005];break}case"NTSC RGB":{[e,r,n,i,s,o]=[.67,.33,.21,.71,.14,.08];break}case"PAL/SECAM RGB":{[e,r,n,i,s,o]=[.64,.33,.29,.6,.15,.06];break}case"ProPhoto RGB":{[e,r,n,i,s,o]=[.7347,.2653,.1596,.8404,.0366,1e-4];break}case"SMPTE-C RGB":{[e,r,n,i,s,o]=[.63,.34,.31,.595,.155,.07];break}case"sRGB":{[e,r,n,i,s,o]=[.64,.33,.3,.6,.15,.06];break}case"Wide Gamut RGB":{[e,r,n,i,s,o]=[.735,.265,.115,.826,.157,.018];break}}let l=e/r,a=1,u=(1-e-r)/r,d=n/i,c=1,h=(1-n-i)/i,p=s/o,g=1,m=(1-s-o)/o,E=this.Mtx_RefWhiteRGB,x=E[0],M=E[1],I=E[2],[U,j,T]=R.Matrix.multiply_3x3_times_triple(R.Matrix.inv([[l,d,p],[a,c,g],[u,h,m]]),[x,M,I]);return R.Matrix.transpose([[U*l,j*d,T*p],[U*a,j*c,T*g],[U*u,j*h,T*m]])}get MtxAdp(){switch(this.Adaptation){case"Bradford":return[[.8951,-.7502,.0389],[.2664,1.7135,-.0685],[-.1614,.0367,1.0296]];case"von Kries":return[[.40024,-.2263,0],[.7076,1.16532,0],[-.08081,.0457,.91822]];case"XYZ Scaling":case"None":return[[1,0,0],[0,1,0],[0,0,1]]}}compand(e){let r=this.Gamma;if(r>0)return e>=0?Math.pow(e,1/r):-Math.pow(-e,1/r);if(r<0){let n=1;return e<0&&(n=-1,e=-e),n*(e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055)}else{let n=1;return e<0&&(n=-1,e=-e),n*(e<=216/24389?e*24389/2700:1.16*Math.pow(e,1/3)-.16)}}inverse_compand(e){let r=this.Gamma;if(r>0)return e>=0?Math.pow(e,r):-Math.pow(-e,r);if(r<0){let n=1;return e<0&&(n=-1,e=-e),n*(e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4))}else{let n=1;return e<0&&(n=-1,e=-e),n*(e<=.08?2700*e/24389:(((1e6*e+48e4)*e+76800)*e+4096)/1560896)}}XYZ_to_RGB(e){let r=e;if(this.Adaptation!="None"){let[i,s,o]=R.Matrix.multiply_triple_times_3x3(this.Mtx_RefWhite,this.MtxAdp),[l,a,u]=R.Matrix.multiply_triple_times_3x3(this.Mtx_RefWhiteRGB,this.MtxAdp);r=R.Matrix.multiply_triple_times_3x3(e,R.Matrix.multiply_3x3_times_3x3(this.MtxAdp,R.Matrix.multiply_3x3_times_3x3([[l/i,0,0],[0,a/s,0],[0,0,u/o]],R.Matrix.inv(this.MtxAdp))))}return R.Matrix.multiply_triple_times_3x3(r,R.Matrix.inv(this.Mtx_RGB2XYZ)).map(i=>255*this.compand(i))}RGB_to_XYZ(e){e=e.map(n=>this.inverse_compand(n/255));let r=R.Matrix.multiply_triple_times_3x3(e,this.Mtx_RGB2XYZ);if(this.Adaptation!="None"){let[n,i,s]=R.Matrix.multiply_triple_times_3x3(this.Mtx_RefWhiteRGB,this.MtxAdp),[o,l,a]=R.Matrix.multiply_triple_times_3x3(this.Mtx_RefWhite,this.MtxAdp);return R.Matrix.multiply_triple_times_3x3(r,R.Matrix.multiply_3x3_times_3x3(this.MtxAdp,R.Matrix.multiply_3x3_times_3x3([[o/n,0,0],[0,l/i,0],[0,0,a/s]],R.Matrix.inv(this.MtxAdp))))}else return r}Lab_to_XYZ(e){let r=e[0],n=e[1],i=e[2],s=(r+16)/116,o=n/500+s,l=s-i/200,a=Math.pow(o,3)>this.kE?Math.pow(o,3):(116*o-16)/this.kK,u=r>this.kK*this.kE?Math.pow((r+16)/116,3):r/this.kK,d=Math.pow(l,3)>this.kE?Math.pow(l,3):(116*l-16)/this.kK,c=this.Mtx_RefWhite;return[a*c[0],u*c[1],d*c[2]]}XYZ_to_Lab(e){let r=e[0],n=e[1],i=e[2],s=this.Mtx_RefWhite,o=s[0],l=s[1],a=s[2],u=r/o,d=n/l,c=i/a,h=u>this.kE?Math.pow(u,1/3):(this.kK*u+16)/116,p=d>this.kE?Math.pow(d,1/3):(this.kK*d+16)/116,g=c>this.kE?Math.pow(c,1/3):(this.kK*c+16)/116;return[116*p-16,500*(h-p),200*(p-g)]}Lab_to_RGB(e){return this.XYZ_to_RGB(this.Lab_to_XYZ(e))}RGB_to_Lab(e){return this.XYZ_to_Lab(this.RGB_to_XYZ(e))}xyY_to_XYZ(e){let[r,n,i]=e;return n<1e-6?[0,0,0]:[r*i/n,i,(1-r-n)*i/n]}XYZ_to_xyY(e){let[r,n,i]=e,s=r+n+i;if(s>0)return[r/s,n/s,n];{let[o,l,a]=this.Mtx_RefWhite,u=o+l+a;return[o/u,l/u,n]}}Lab_to_LCHab(e){let[r,n,i]=e,s=180/Math.PI*Math.atan2(i,n);return[r,Math.sqrt(Math.pow(n,2)+Math.pow(i,2)),s+(s>=0?0:360)]}LCHab_to_Lab(e){let[r,n,i]=e;return[r,n*Math.cos(i*Math.PI/180),n*Math.sin(i*Math.PI/180)]}XYZ_to_LCHab(e){return this.Lab_to_LCHab(this.XYZ_to_Lab(e))}XYZ_to_Luv(e){let[r,n,i]=e,s=this.Mtx_RefWhite,o=s[0],l=s[1],a=s[2],u=r+15*n+3*i,d=u>0?4*r/u:0,c=u>0?9*n/u:0,h=4*o/(o+15*l+3*a),p=9*l/(o+15*l+3*a),g=n/l,m=g>this.kE?116*Math.pow(g,1/3)-16:this.kK*g;return[m,13*m*(d-h),13*m*(c-p)]}XYZ_to_LCHuv(e){return this.Luv_to_LCHuv(this.XYZ_to_Luv(e))}Luv_to_LCHuv(e){let[r,n,i]=e,s=180/Math.PI*Math.atan2(i,n);return[r,Math.sqrt(Math.pow(n,2)+Math.pow(i,2)),s+(s>=0?0:360)]}xyY_to_Lab(e){return this.XYZ_to_Lab(this.xyY_to_XYZ(e))}xyY_to_LCHab(e){return this.Lab_to_LCHab(this.XYZ_to_Lab(this.xyY_to_XYZ(e)))}xyY_to_Luv(e){return this.XYZ_to_Luv(this.xyY_to_XYZ(e))}xyY_to_LCHuv(e){return this.Luv_to_LCHuv(this.XYZ_to_Luv(this.xyY_to_XYZ(e)))}xyY_to_RGB(e){return this.XYZ_to_RGB(this.xyY_to_XYZ(e))}Lab_to_xyY(e){return this.XYZ_to_xyY(this.Lab_to_XYZ(e))}Lab_to_Luv(e){return this.XYZ_to_Luv(this.Lab_to_XYZ(e))}Lab_to_LCHuv(e){return this.Luv_to_LCHuv(this.Lab_to_Luv(e))}LCHab_to_XYZ(e){return this.Lab_to_XYZ(this.LCHab_to_Lab(e))}LCHab_to_xyY(e){return this.XYZ_to_xyY(this.Lab_to_XYZ(this.LCHab_to_Lab(e)))}LCHab_to_Luv(e){return this.XYZ_to_Luv(this.Lab_to_XYZ(this.LCHab_to_Lab(e)))}LCHab_to_LCHuv(e){return this.Luv_to_LCHuv(this.LCHab_to_Luv(e))}LCHab_to_RGB(e){return this.XYZ_to_RGB(this.LCHab_to_XYZ(e))}Luv_to_XYZ(e){let[r,n,i]=e,s=r>this.kK*this.kE?Math.pow((r+16)/116,3):r/this.kK,o=this.Mtx_RefWhite,l=o[0],a=o[1],u=o[2],d=l+15*a+3*u,c=9*a/d,h=4*l/d,p=s*(39*r/(i+13*r*c)-5),g=-1/3,m=-5*s,E=1/3*(52*r/(n+13*r*h)-1),x=(p-m)/(E-g),M=x*E+m;return[x,s,M]}Luv_to_xyY(e){return this.XYZ_to_xyY(this.Luv_to_XYZ(e))}Luv_to_Lab(e){return this.XYZ_to_Lab(this.Luv_to_XYZ(e))}Luv_to_LCHab(e){return this.Lab_to_LCHab(this.Luv_to_Lab(e))}Luv_to_RGB(e){return this.XYZ_to_RGB(this.Luv_to_XYZ(e))}LCHuv_to_Luv(e){let[r,n,i]=e;return[r,n*Math.cos(i*Math.PI/180),n*Math.sin(i*Math.PI/180)]}LCHuv_to_XYZ(e){return this.Luv_to_XYZ(this.LCHuv_to_Luv(e))}LCHuv_to_xyY(e){return this.XYZ_to_xyY(this.LCHuv_to_XYZ(e))}LCHuv_to_Lab(e){return this.XYZ_to_Lab(this.LCHuv_to_XYZ(e))}LCHuv_to_LCHab(e){return this.Lab_to_LCHab(this.LCHuv_to_Lab(e))}LCHuv_to_RGB(e){return this.XYZ_to_RGB(this.LCHuv_to_XYZ(e))}RGB_to_xyY(e){return this.XYZ_to_xyY(this.RGB_to_XYZ(e))}RGB_to_LCHab(e){return this.Lab_to_LCHab(this.RGB_to_Lab(e))}RGB_to_Luv(e){return this.XYZ_to_Luv(this.RGB_to_XYZ(e))}RGB_to_LCHuv(e){return this.Luv_to_LCHuv(this.RGB_to_Luv(e))}}jo=Gt.ColorConverter=Xo;export{jo as C,Do as M,N as T,Jo as a,Ar as b,si as e,el as f,Qo as i,Wo as n,Yn as o,qo as p,Xe as s,Ko as t};

var Dr=Object.defineProperty,ts=Object.defineProperties;var es=Object.getOwnPropertyDescriptors;var _e=Object.getOwnPropertySymbols;var rs=Object.prototype.hasOwnProperty,ss=Object.prototype.propertyIsEnumerable;var me=(e,t,r)=>t in e?Dr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,$t=(e,t)=>{for(var r in t||(t={}))rs.call(t,r)&&me(e,r,t[r]);if(_e)for(var r of _e(t))ss.call(t,r)&&me(e,r,t[r]);return e},wt=(e,t)=>ts(e,es(t));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ye=Symbol(),$e=new Map;class is{constructor(t,r){if(this._$cssResult$=!0,r!==ye)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=$e.get(this.cssText);return Ut&&t===void 0&&($e.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const os=e=>new is(typeof e=="string"?e:e+"",ye),ns=(e,t)=>{Ut?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const s=document.createElement("style"),i=window.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,e.appendChild(s)})},we=Ut?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return os(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zt;const Ae=window.trustedTypes,as=Ae?Ae.emptyScript:"",xe=window.reactiveElementPolyfillSupport,Yt={toAttribute(e,t){switch(t){case Boolean:e=e?as:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ee=(e,t)=>t!==e&&(t==t||e==e),Gt={attribute:!0,type:String,converter:Yt,reflect:!1,hasChanged:Ee};class G extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var r;(r=this.l)!==null&&r!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,s)=>{const i=this._$Eh(s,r);i!==void 0&&(this._$Eu.set(i,s),t.push(i))}),t}static createProperty(t,r=Gt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,r);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,r,s){return{get(){return this[r]},set(i){const o=this[t];this[r]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Gt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const r=this.properties,s=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const i of s)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)r.unshift(we(i))}else t!==void 0&&r.push(we(t));return r}static _$Eh(t,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,s;((r=this._$Eg)!==null&&r!==void 0?r:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var r;(r=this._$Eg)===null||r===void 0||r.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Et.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ns(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostConnected)===null||s===void 0?void 0:s.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostDisconnected)===null||s===void 0?void 0:s.call(r)})}attributeChangedCallback(t,r,s){this._$AK(t,s)}_$ES(t,r,s=Gt){var i,o;const n=this.constructor._$Eh(t,s);if(n!==void 0&&s.reflect===!0){const l=((o=(i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&o!==void 0?o:Yt.toAttribute)(r,s.type);this._$Ei=t,l==null?this.removeAttribute(n):this.setAttribute(n,l),this._$Ei=null}}_$AK(t,r){var s,i,o;const n=this.constructor,l=n._$Eu.get(t);if(l!==void 0&&this._$Ei!==l){const a=n.getPropertyOptions(l),u=a.converter,d=(o=(i=(s=u)===null||s===void 0?void 0:s.fromAttribute)!==null&&i!==void 0?i:typeof u=="function"?u:null)!==null&&o!==void 0?o:Yt.fromAttribute;this._$Ei=l,this[l]=d(r,a.type),this._$Ei=null}}requestUpdate(t,r,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||Ee)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),s.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,o)=>this[o]=i),this._$Et=void 0);let r=!1;const s=this._$AL;try{r=this.shouldUpdate(s),r?(this.willUpdate(s),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(s)):this._$EU()}catch(i){throw r=!1,this._$EU(),i}r&&this._$AE(s)}willUpdate(t){}_$AE(t){var r;(r=this._$Eg)===null||r===void 0||r.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((r,s)=>this._$ES(s,this[s],r)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}G.finalized=!0,G.elementProperties=new Map,G.elementStyles=[],G.shadowRootOptions={mode:"open"},xe==null||xe({ReactiveElement:G}),((zt=globalThis.reactiveElementVersions)!==null&&zt!==void 0?zt:globalThis.reactiveElementVersions=[]).push("1.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xt;const X=globalThis.trustedTypes,Ce=X?X.createPolicy("lit-html",{createHTML:e=>e}):void 0,R=`lit$${(Math.random()+"").slice(9)}$`,ke="?"+R,ls=`<${ke}>`,Z=document,nt=(e="")=>Z.createComment(e),at=e=>e===null||typeof e!="object"&&typeof e!="function",Se=Array.isArray,us=e=>{var t;return Se(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,Pe=/>/g,z=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Le=/'/g,Te=/"/g,Me=/^(?:script|style|textarea)$/i,cs=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Xo=cs(1),B=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Re=new WeakMap,ds=(e,t,r)=>{var s,i;const o=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:t;let n=o._$litPart$;if(n===void 0){const l=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=n=new ct(t.insertBefore(nt(),l),l,void 0,r!=null?r:{})}return n._$AI(e),n},F=Z.createTreeWalker(Z,129,null,!1),hs=(e,t)=>{const r=e.length-1,s=[];let i,o=t===2?"<svg>":"",n=lt;for(let a=0;a<r;a++){const u=e[a];let d,c,h=-1,p=0;for(;p<u.length&&(n.lastIndex=p,c=n.exec(u),c!==null);)p=n.lastIndex,n===lt?c[1]==="!--"?n=Ne:c[1]!==void 0?n=Pe:c[2]!==void 0?(Me.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=z):c[3]!==void 0&&(n=z):n===z?c[0]===">"?(n=i!=null?i:lt,h=-1):c[1]===void 0?h=-2:(h=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?z:c[3]==='"'?Te:Le):n===Te||n===Le?n=z:n===Ne||n===Pe?n=lt:(n=z,i=void 0);const b=n===z&&e[a+1].startsWith("/>")?" ":"";o+=n===lt?u+ls:h>=0?(s.push(d),u.slice(0,h)+"$lit$"+u.slice(h)+R+b):u+R+(h===-2?(s.push(void 0),a):b)}const l=o+(e[r]||"<?>")+(t===2?"</svg>":"");return[Ce!==void 0?Ce.createHTML(l):l,s]};class ut{constructor({strings:t,_$litType$:r},s){let i;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[u,d]=hs(t,r);if(this.el=ut.createElement(u,s),F.currentNode=this.el.content,r===2){const c=this.el.content,h=c.firstChild;h.remove(),c.append(...h.childNodes)}for(;(i=F.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes()){const c=[];for(const h of i.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(R)){const p=d[n++];if(c.push(h),p!==void 0){const b=i.getAttribute(p.toLowerCase()+"$lit$").split(R),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:g[2],strings:b,ctor:g[1]==="."?fs:g[1]==="?"?bs:g[1]==="@"?gs:At})}else a.push({type:6,index:o})}for(const h of c)i.removeAttribute(h)}if(Me.test(i.tagName)){const c=i.textContent.split(R),h=c.length-1;if(h>0){i.textContent=X?X.emptyScript:"";for(let p=0;p<h;p++)i.append(c[p],nt()),F.nextNode(),a.push({type:2,index:++o});i.append(c[h],nt())}}}else if(i.nodeType===8)if(i.data===ke)a.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(R,c+1))!==-1;)a.push({type:7,index:o}),c+=R.length-1}o++}}static createElement(t,r){const s=Z.createElement("template");return s.innerHTML=t,s}}function V(e,t,r=e,s){var i,o,n,l;if(t===B)return t;let a=s!==void 0?(i=r._$Cl)===null||i===void 0?void 0:i[s]:r._$Cu;const u=at(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),u===void 0?a=void 0:(a=new u(e),a._$AT(e,r,s)),s!==void 0?((n=(l=r)._$Cl)!==null&&n!==void 0?n:l._$Cl=[])[s]=a:r._$Cu=a),a!==void 0&&(t=V(e,a._$AS(e,t.values),a,s)),t}class ps{constructor(t,r){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var r;const{el:{content:s},parts:i}=this._$AD,o=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Z).importNode(s,!0);F.currentNode=o;let n=F.nextNode(),l=0,a=0,u=i[0];for(;u!==void 0;){if(l===u.index){let d;u.type===2?d=new ct(n,n.nextSibling,this,t):u.type===1?d=new u.ctor(n,u.name,u.strings,this,t):u.type===6&&(d=new _s(n,this,t)),this.v.push(d),u=i[++a]}l!==(u==null?void 0:u.index)&&(n=F.nextNode(),l++)}return o}m(t){let r=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,r),r+=s.strings.length-2):s._$AI(t[r])),r++}}class ct{constructor(t,r,s,i){var o;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=i,this._$Cg=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=V(this,t,r),at(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==B&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):us(t)?this.M(t):this.$(t)}A(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==y&&at(this._$AH)?this._$AA.nextSibling.data=t:this.S(Z.createTextNode(t)),this._$AH=t}T(t){var r;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ut.createElement(i.h,this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===o)this._$AH.m(s);else{const n=new ps(o,this),l=n.p(this.options);n.m(s),this.S(l),this._$AH=n}}_$AC(t){let r=Re.get(t.strings);return r===void 0&&Re.set(t.strings,r=new ut(t)),r}M(t){Se(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,i=0;for(const o of t)i===r.length?r.push(s=new ct(this.A(nt()),this.A(nt()),this,this.options)):s=r[i],s._$AI(o),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cg=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class At{constructor(t,r,s,i,o){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=V(this,t,r,0),n=!at(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const l=t;let a,u;for(t=o[0],a=0;a<o.length-1;a++)u=V(this,l[s+a],r,a),u===B&&(u=this._$AH[a]),n||(n=!at(u)||u!==this._$AH[a]),u===y?t=y:t!==y&&(t+=(u!=null?u:"")+o[a+1]),this._$AH[a]=u}n&&!i&&this.k(t)}k(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class fs extends At{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===y?void 0:t}}const vs=X?X.emptyScript:"";class bs extends At{constructor(){super(...arguments),this.type=4}k(t){t&&t!==y?this.element.setAttribute(this.name,vs):this.element.removeAttribute(this.name)}}class gs extends At{constructor(t,r,s,i,o){super(t,r,s,i,o),this.type=5}_$AI(t,r=this){var s;if((t=(s=V(this,t,r,0))!==null&&s!==void 0?s:y)===B)return;const i=this._$AH,o=t===y&&i!==y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==y&&(i===y||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,s;typeof this._$AH=="function"?this._$AH.call((s=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class _s{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const Be=window.litHtmlPolyfillSupport;Be==null||Be(ut,ct),((Xt=globalThis.litHtmlVersions)!==null&&Xt!==void 0?Xt:globalThis.litHtmlVersions=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Zt,Ft;class xt extends G{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,r;const s=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=s.firstChild),s}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=ds(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return B}}xt.finalized=!0,xt._$litElement$=!0,(Zt=globalThis.litElementHydrateSupport)===null||Zt===void 0||Zt.call(globalThis,{LitElement:xt});const Oe=globalThis.litElementPolyfillSupport;Oe==null||Oe({LitElement:xt});((Ft=globalThis.litElementVersions)!==null&&Ft!==void 0?Ft:globalThis.litElementVersions=[]).push("3.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zo=e=>t=>typeof t=="function"?((r,s)=>(window.customElements.define(r,s),s))(e,t):((r,s)=>{const{kind:i,elements:o}=s;return{kind:i,elements:o,finisher(n){window.customElements.define(r,n)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ms=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?wt($t({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function ys(e){return(t,r)=>r!==void 0?((s,i,o)=>{i.constructor.createProperty(o,s)})(e,t,r):ms(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fo(e){return ys(wt($t({},e),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $s=({finisher:e,descriptor:t})=>(r,s)=>{var i;if(s===void 0){const o=(i=r.originalKey)!==null&&i!==void 0?i:r.key,n=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(r.key)}:wt($t({},r),{key:o});return e!=null&&(n.finisher=function(l){e(l,o)}),n}{const o=r.constructor;t!==void 0&&Object.defineProperty(r,s,t(s)),e==null||e(o,s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Vo(e,t){return $s({descriptor:r=>{const s={get(){var i,o;return(o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const i=typeof r=="symbol"?Symbol():"__"+r;s.get=function(){var o,n;return this[i]===void 0&&(this[i]=(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&n!==void 0?n:null),this[i]}}return s}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},He=e=>(...t)=>({_$litDirective$:e,values:t});class Ue{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,s){this._$Ct=t,this._$AM=r,this._$Ci=s}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vt extends Ue{constructor(t){if(super(t),this.it=y,t.type!==Ie.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===y||t==null)return this.vt=void 0,this.it=t;if(t===B)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.vt;this.it=t;const r=[t];return r.raw=r,this.vt={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Vt.directiveName="unsafeHTML",Vt.resultType=1;const jo=He(Vt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wo=He(class extends Ue{constructor(e){var t;if(super(e),e.type!==Ie.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,s;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.et=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((r=this.et)===null||r===void 0?void 0:r.has(o))&&this.st.add(o);return this.render(t)}const i=e.element.classList;this.st.forEach(o=>{o in t||(i.remove(o),this.st.delete(o))});for(const o in t){const n=!!t[o];n===this.st.has(o)||((s=this.et)===null||s===void 0?void 0:s.has(o))||(n?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return B}});var ze=Object.defineProperty,ws=e=>ze(e,"__esModule",{value:!0}),j=(e,t)=>()=>(e&&(t=e(e=0)),t),W=(e,t)=>{ws(e);for(var r in t)ze(e,r,{get:t[r],enumerable:!0})},Ye={};W(Ye,{default:()=>Ge});var Ge,As=j(()=>{Ge=async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,r)=>{let s=document.createElement("input");s.type="file";let i=[...e.map(a=>a.mimeTypes||[]).join(),e.map(a=>a.extensions||[]).join()].join();s.multiple=e[0].multiple||!1,s.accept=i||"";let o=()=>l(r),n=a=>{typeof l=="function"&&l(),t(a)},l=e[0].legacySetup&&e[0].legacySetup(n,o,s);s.addEventListener("change",()=>{n(s.multiple?Array.from(s.files):s.files[0])}),s.click()}))}),Xe={};W(Xe,{default:()=>Fe});var Ze,Fe,xs=j(()=>{Ze=async e=>{let t=await e.getFile();return t.handle=e,t},Fe=async(e=[{}])=>{Array.isArray(e)||(e=[e]);let t=[];e.forEach((i,o)=>{t[o]={description:i.description||"",accept:{}},i.mimeTypes?i.mimeTypes.map(n=>{t[o].accept[n]=i.extensions||[]}):t[o].accept["*/*"]=i.extensions||[]});let r=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),s=await Promise.all(r.map(Ze));return e[0].multiple?s:s[0]}}),Ve={};W(Ve,{default:()=>je});var je,Es=j(()=>{je=async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,r)=>{let s=document.createElement("input");s.type="file",s.webkitdirectory=!0;let i=()=>n(r),o=l=>{typeof n=="function"&&n(),t(l)},n=e[0].legacySetup&&e[0].legacySetup(o,i,s);s.addEventListener("change",()=>{let l=Array.from(s.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(l=l.filter(a=>a.webkitRelativePath.split("/").every(u=>!e[0].skipDirectory({name:u,kind:"directory"})))):l=l.filter(a=>a.webkitRelativePath.split("/").length===2),o(l)}),s.click()}))}),We={};W(We,{default:()=>qe});var jt,qe,Cs=j(()=>{jt=async(e,t,r=e.name,s)=>{let i=[],o=[];for await(let n of e.values()){let l=`${r}/${n.name}`;n.kind==="file"?o.push(n.getFile().then(a=>(a.directoryHandle=e,Object.defineProperty(a,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>l})))):n.kind==="directory"&&t&&(!s||!s(n))&&i.push(jt(n,t,l,s))}return[...(await Promise.all(i)).flat(),...await Promise.all(o)]},qe=async(e={})=>{e.recursive=e.recursive||!1;let t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn});return jt(t,e.recursive,void 0,e.skipDirectory)}}),Ke={};W(Ke,{default:()=>Je});async function ks(e,t){let r=e.getReader(),s=new ReadableStream({start(o){return n();async function n(){return r.read().then(({done:l,value:a})=>{if(l){o.close();return}return o.enqueue(a),n()})}}}),i=new Response(s);return r.releaseLock(),new Blob([await i.blob()],{type:t})}var Je,Ss=j(()=>{Je=async(e,t={})=>{Array.isArray(t)&&(t=t[0]);let r=document.createElement("a"),s=e;"body"in e&&(s=await ks(e.body,e.headers.get("content-type"))),r.download=t.fileName||"Untitled",r.href=URL.createObjectURL(s);let i=()=>n(reject),o=()=>{typeof n=="function"&&n()},n=t.legacySetup&&t.legacySetup(o,i,r);return r.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(r.href),30*1e3),o()}),r.click(),null}}),Qe={};W(Qe,{default:()=>De});var De,Ns=j(()=>{De=async(e,t=[{}],r=null,s=!1)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";let i=[];if(t.forEach((l,a)=>{i[a]={description:l.description||"",accept:{}},l.mimeTypes?(a===0&&(e.type?l.mimeTypes.push(e.type):e.headers&&e.headers.get("content-type")&&l.mimeTypes.push(e.headers.get("content-type"))),l.mimeTypes.map(u=>{i[a].accept[u]=l.extensions||[]})):e.type&&(i[a].accept[e.type]=l.extensions||[])}),r)try{await r.getFile()}catch(l){if(r=null,s)throw l}let o=r||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:i,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1}),n=await o.createWritable();return"stream"in e?(await e.stream().pipeTo(n),o):"body"in e?(await e.body.pipeTo(n),o):(await n.write(blob),await n.close(),o)}}),Ps=(()=>{if(typeof self=="undefined")return!1;if("top"in self&&self!==top)try{top.location+""}catch{return!1}else if("showOpenFilePicker"in self)return"showOpenFilePicker";return!1})(),Wt=Ps,Ls=Wt?Promise.resolve().then(()=>(xs(),Xe)):Promise.resolve().then(()=>(As(),Ye));async function qo(...e){return(await Ls).default(...e)}Wt?Promise.resolve().then(()=>(Cs(),We)):Promise.resolve().then(()=>(Es(),Ve));Wt?Promise.resolve().then(()=>(Ns(),Qe)):Promise.resolve().then(()=>(Ss(),Ke));// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var tr="";function er(e){tr=e}function Ts(){return tr.replace(/\/$/,"")}var rr=[...document.getElementsByTagName("script")],sr=rr.find(e=>e.hasAttribute("data-shoelace"));if(sr)er(sr.getAttribute("data-shoelace"));else{const e=rr.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src));let t="";e&&(t=e.getAttribute("src")),er(t.split("/").slice(0,-1).join("/"))}var ir=Object.defineProperty,Ms=Object.defineProperties,Rs=Object.getOwnPropertyDescriptor,Bs=Object.getOwnPropertyDescriptors,or=Object.getOwnPropertySymbols,Os=Object.prototype.hasOwnProperty,Is=Object.prototype.propertyIsEnumerable,nr=(e,t,r)=>t in e?ir(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Et=(e,t)=>{for(var r in t||(t={}))Os.call(t,r)&&nr(e,r,t[r]);if(or)for(var r of or(t))Is.call(t,r)&&nr(e,r,t[r]);return e},Ct=(e,t)=>Ms(e,Bs(t)),f=(e,t,r,s)=>{for(var i=s>1?void 0:s?Rs(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&ir(t,r,i),i},qt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kt=Symbol(),ar=new Map,lr=class{constructor(e,t){if(this._$cssResult$=!0,t!==Kt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=ar.get(this.cssText);return qt&&e===void 0&&(ar.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},ur=e=>new lr(typeof e=="string"?e:e+"",Kt),O=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new lr(r,Kt)},Hs=(e,t)=>{qt?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const s=document.createElement("style"),i=window.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,e.appendChild(s)})},cr=qt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return ur(r)})(e):e,Jt,dr=window.trustedTypes,Us=dr?dr.emptyScript:"",hr=window.reactiveElementPolyfillSupport,Qt={toAttribute(e,t){switch(t){case Boolean:e=e?Us:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},pr=(e,t)=>t!==e&&(t==t||e==e),Dt={attribute:!0,type:String,converter:Qt,reflect:!1,hasChanged:pr},q=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const s=this._$Eh(r,t);s!==void 0&&(this._$Eu.set(s,r),e.push(s))}),e}static createProperty(e,t=Dt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(s){const i=this[e];this[t]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Dt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of r)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(cr(s))}else e!==void 0&&t.push(cr(e));return t}static _$Eh(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Hs(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=Dt){var s,i;const o=this.constructor._$Eh(e,r);if(o!==void 0&&r.reflect===!0){const n=((i=(s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&i!==void 0?i:Qt.toAttribute)(t,r.type);this._$Ei=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Ei=null}}_$AK(e,t){var r,s,i;const o=this.constructor,n=o._$Eu.get(e);if(n!==void 0&&this._$Ei!==n){const l=o.getPropertyOptions(n),a=l.converter,u=(i=(s=(r=a)===null||r===void 0?void 0:r.fromAttribute)!==null&&s!==void 0?s:typeof a=="function"?a:null)!==null&&i!==void 0?i:Qt.fromAttribute;this._$Ei=n,this[n]=u(t,l.type),this._$Ei=null}}requestUpdate(e,t,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||pr)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Ei!==e&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,i)=>this[i]=s),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$E_!==void 0&&(this._$E_.forEach((t,r)=>this._$ES(r,this[r],t)),this._$E_=void 0),this._$EU()}updated(e){}firstUpdated(e){}};q.finalized=!0,q.elementProperties=new Map,q.elementStyles=[],q.shadowRootOptions={mode:"open"},hr==null||hr({ReactiveElement:q}),((Jt=globalThis.reactiveElementVersions)!==null&&Jt!==void 0?Jt:globalThis.reactiveElementVersions=[]).push("1.0.2");var te,K=globalThis.trustedTypes,fr=K?K.createPolicy("lit-html",{createHTML:e=>e}):void 0,I=`lit$${(Math.random()+"").slice(9)}$`,vr="?"+I,zs=`<${vr}>`,J=document,dt=(e="")=>J.createComment(e),ht=e=>e===null||typeof e!="object"&&typeof e!="function",br=Array.isArray,Ys=e=>{var t;return br(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gr=/-->/g,_r=/>/g,Y=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,mr=/'/g,yr=/"/g,$r=/^(?:script|style|textarea)$/i,Gs=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),L=Gs(1),H=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),wr=new WeakMap,Xs=(e,t,r)=>{var s,i;const o=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:t;let n=o._$litPart$;if(n===void 0){const l=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=n=new St(t.insertBefore(dt(),l),l,void 0,r!=null?r:{})}return n._$AI(e),n},Q=J.createTreeWalker(J,129,null,!1),Zs=(e,t)=>{const r=e.length-1,s=[];let i,o=t===2?"<svg>":"",n=pt;for(let a=0;a<r;a++){const u=e[a];let d,c,h=-1,p=0;for(;p<u.length&&(n.lastIndex=p,c=n.exec(u),c!==null);)p=n.lastIndex,n===pt?c[1]==="!--"?n=gr:c[1]!==void 0?n=_r:c[2]!==void 0?($r.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=Y):c[3]!==void 0&&(n=Y):n===Y?c[0]===">"?(n=i!=null?i:pt,h=-1):c[1]===void 0?h=-2:(h=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?Y:c[3]==='"'?yr:mr):n===yr||n===mr?n=Y:n===gr||n===_r?n=pt:(n=Y,i=void 0);const b=n===Y&&e[a+1].startsWith("/>")?" ":"";o+=n===pt?u+zs:h>=0?(s.push(d),u.slice(0,h)+"$lit$"+u.slice(h)+I+b):u+I+(h===-2?(s.push(void 0),a):b)}const l=o+(e[r]||"<?>")+(t===2?"</svg>":"");return[fr!==void 0?fr.createHTML(l):l,s]},kt=class{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let i=0,o=0;const n=e.length-1,l=this.parts,[a,u]=Zs(e,t);if(this.el=kt.createElement(a,r),Q.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=Q.nextNode())!==null&&l.length<n;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(I)){const h=u[o++];if(d.push(c),h!==void 0){const p=s.getAttribute(h.toLowerCase()+"$lit$").split(I),b=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:b[2],strings:p,ctor:b[1]==="."?Vs:b[1]==="?"?Ws:b[1]==="@"?qs:Nt})}else l.push({type:6,index:i})}for(const c of d)s.removeAttribute(c)}if($r.test(s.tagName)){const d=s.textContent.split(I),c=d.length-1;if(c>0){s.textContent=K?K.emptyScript:"";for(let h=0;h<c;h++)s.append(d[h],dt()),Q.nextNode(),l.push({type:2,index:++i});s.append(d[c],dt())}}}else if(s.nodeType===8)if(s.data===vr)l.push({type:2,index:i});else{let d=-1;for(;(d=s.data.indexOf(I,d+1))!==-1;)l.push({type:7,index:i}),d+=I.length-1}i++}}static createElement(e,t){const r=J.createElement("template");return r.innerHTML=e,r}};function D(e,t,r=e,s){var i,o,n,l;if(t===H)return t;let a=s!==void 0?(i=r._$Cl)===null||i===void 0?void 0:i[s]:r._$Cu;const u=ht(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),u===void 0?a=void 0:(a=new u(e),a._$AT(e,r,s)),s!==void 0?((n=(l=r)._$Cl)!==null&&n!==void 0?n:l._$Cl=[])[s]=a:r._$Cu=a),a!==void 0&&(t=D(e,a._$AS(e,t.values),a,s)),t}var Fs=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:s}=this._$AD,i=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:J).importNode(r,!0);Q.currentNode=i;let o=Q.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let u;a.type===2?u=new St(o,o.nextSibling,this,e):a.type===1?u=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(u=new Ks(o,this,e)),this.v.push(u),a=s[++l]}n!==(a==null?void 0:a.index)&&(o=Q.nextNode(),n++)}return i}m(e){let t=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},St=class{constructor(e,t,r,s){var i;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cg=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),ht(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==H&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.S(e):Ys(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==m&&ht(this._$AH)?this._$AA.nextSibling.data=e:this.S(J.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=kt.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.m(r);else{const o=new Fs(i,this),n=o.p(this.options);o.m(r),this.S(n),this._$AH=o}}_$AC(e){let t=wr.get(e.strings);return t===void 0&&wr.set(e.strings,t=new kt(e)),t}M(e){br(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const i of e)s===t.length?t.push(r=new St(this.A(dt()),this.A(dt()),this,this.options)):r=t[s],r._$AI(i),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Nt=class{constructor(e,t,r,s,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=D(this,e,t,0),o=!ht(e)||e!==this._$AH&&e!==H,o&&(this._$AH=e);else{const n=e;let l,a;for(e=i[0],l=0;l<i.length-1;l++)a=D(this,n[r+l],t,l),a===H&&(a=this._$AH[l]),o||(o=!ht(a)||a!==this._$AH[l]),a===m?e=m:e!==m&&(e+=(a!=null?a:"")+i[l+1]),this._$AH[l]=a}o&&!s&&this.k(e)}k(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},Vs=class extends Nt{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===m?void 0:e}},js=K?K.emptyScript:"",Ws=class extends Nt{constructor(){super(...arguments),this.type=4}k(e){e&&e!==m?this.element.setAttribute(this.name,js):this.element.removeAttribute(this.name)}},qs=class extends Nt{constructor(e,t,r,s,i){super(e,t,r,s,i),this.type=5}_$AI(e,t=this){var r;if((e=(r=D(this,e,t,0))!==null&&r!==void 0?r:m)===H)return;const s=this._$AH,i=e===m&&s!==m||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==m&&(s===m||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Ks=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}},Ar=window.litHtmlPolyfillSupport;Ar==null||Ar(kt,St),((te=globalThis.litHtmlVersions)!==null&&te!==void 0?te:globalThis.litHtmlVersions=[]).push("2.0.2");var ee,re,P=class extends q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Xs(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return H}};P.finalized=!0,P._$litElement$=!0,(ee=globalThis.litElementHydrateSupport)===null||ee===void 0||ee.call(globalThis,{LitElement:P});var xr=globalThis.litElementPolyfillSupport;xr==null||xr({LitElement:P});((re=globalThis.litElementVersions)!==null&&re!==void 0?re:globalThis.litElementVersions=[]).push("3.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Js=(()=>{const e=document.createElement("style");let t;try{document.head.appendChild(e),e.sheet.insertRule(":focus-visible { color: inherit }"),t=!0}catch{t=!1}finally{e.remove()}return t})(),x=ur(Js?":focus-visible":":focus"),Qs=O`
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
`,tt=O`
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
`,Er=document.createElement("style");Er.textContent=Qs.toString();document.head.append(Er);var Ds=O`
  ${tt}

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

  .button--standard.button--default${x}:not(.button--disabled) {
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

  .button--standard.button--primary${x}:not(.button--disabled) {
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

  .button--standard.button--success${x}:not(.button--disabled) {
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

  .button--standard.button--neutral${x}:not(.button--disabled) {
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

  .button--standard.button--warning${x}:not(.button--disabled) {
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

  .button--standard.button--danger${x}:not(.button--disabled) {
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

  .button--outline.button--default${x}:not(.button--disabled) {
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

  .button--outline.button--primary${x}:not(.button--disabled) {
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

  .button--outline.button--success${x}:not(.button--disabled) {
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

  .button--outline.button--neutral${x}:not(.button--disabled) {
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

  .button--outline.button--warning${x}:not(.button--disabled) {
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

  .button--outline.button--danger${x}:not(.button--disabled) {
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

  .button--text${x}:not(.button--disabled) {
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
`;function Pt(e,t){return t?e.querySelector(`:scope > [slot="${t}"]`)!==null:[...e.childNodes].some(r=>r.nodeType===r.TEXT_NODE&&r.textContent.trim()!==""||r.nodeType===r.ELEMENT_NODE&&!r.hasAttribute("slot"))}var Cr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},kr=e=>(...t)=>({_$litDirective$:e,values:t}),Sr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Lt=kr(class extends Sr{constructor(e){var t;if(super(e),e.type!==Cr.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,s;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.et=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((r=this.et)===null||r===void 0?void 0:r.has(o))&&this.st.add(o);return this.render(t)}const i=e.element.classList;this.st.forEach(o=>{o in t||(i.remove(o),this.st.delete(o))});for(const o in t){const n=!!t[o];n===this.st.has(o)||((s=this.et)===null||s===void 0?void 0:s.has(o))||(n?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return H}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $=e=>e!=null?e:m;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(e,t,r){const s=new CustomEvent(t,Object.assign({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return e.dispatchEvent(s),s}function Nr(e,t){return new Promise(r=>{function s(i){i.target===e&&(e.removeEventListener(t,s),r())}e.addEventListener(t,s)})}var et=e=>t=>typeof t=="function"?((r,s)=>(window.customElements.define(r,s),s))(e,t):((r,s)=>{const{kind:i,elements:o}=s;return{kind:i,elements:o,finisher(n){window.customElements.define(r,n)}}})(e,t),ti=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Ct(Et({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function v(e){return(t,r)=>r!==void 0?((s,i,o)=>{i.constructor.createProperty(o,s)})(e,t,r):ti(e,t)}function rt(e){return v(Ct(Et({},e),{state:!0}))}var ei=({finisher:e,descriptor:t})=>(r,s)=>{var i;if(s===void 0){const o=(i=r.originalKey)!==null&&i!==void 0?i:r.key,n=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(r.key)}:Ct(Et({},r),{key:o});return e!=null&&(n.finisher=function(l){e(l,o)}),n}{const o=r.constructor;t!==void 0&&Object.defineProperty(r,s,t(s)),e==null||e(o,s)}};function ft(e,t){return ei({descriptor:r=>{const s={get(){var i,o;return(o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const i=typeof r=="symbol"?Symbol():"__"+r;s.get=function(){var o,n;return this[i]===void 0&&(this[i]=(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&n!==void 0?n:null),this[i]}}return s}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pr=(e,...t)=>({_$litStatic$:t.reduce((r,s,i)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+e[i+1],e[0])}),Lr=new Map,ri=e=>(t,...r)=>{var s;const i=r.length;let o,n;const l=[],a=[];let u,d=0,c=!1;for(;d<i;){for(u=t[d];d<i&&(n=r[d],(o=(s=n)===null||s===void 0?void 0:s._$litStatic$)!==void 0);)u+=o+t[++d],c=!0;a.push(n),l.push(u),d++}if(d===i&&l.push(t[i]),c){const h=l.join("$$lit$$");(t=Lr.get(h))===void 0&&Lr.set(h,t=l),r=a}return e(t,...r)},se=ri(L),_=class extends P{constructor(){super(...arguments);this.hasFocus=!1,this.hasLabel=!1,this.hasPrefix=!1,this.hasSuffix=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.submit=!1}connectedCallback(){super.connectedCallback(),this.handleSlotChange()}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleSlotChange(){this.hasLabel=Pt(this),this.hasPrefix=Pt(this,"prefix"),this.hasSuffix=Pt(this,"suffix")}handleBlur(){this.hasFocus=!1,C(this,"sl-blur")}handleFocus(){this.hasFocus=!0,C(this,"sl-focus")}handleClick(e){(this.disabled||this.loading)&&(e.preventDefault(),e.stopPropagation())}render(){const e=!!this.href,t=e?Pr`a`:Pr`button`;return se`
      <${t}
        part="base"
        class=${Lt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--has-label":this.hasLabel,"button--has-prefix":this.hasPrefix,"button--has-suffix":this.hasSuffix})}
        ?disabled=${$(e?void 0:this.disabled)}
        type=${$(e?void 0:this.submit?"submit":"button")}
        name=${$(e?void 0:this.name)}
        value=${$(e?void 0:this.value)}
        href=${$(this.href)}
        target=${$(this.target)}
        download=${$(this.download)}
        rel=${$(this.target?"noreferrer noopener":void 0)}
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
        ${this.caret?se`
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
        ${this.loading?se`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};_.styles=Ds;f([ft(".button")],_.prototype,"button",2);f([rt()],_.prototype,"hasFocus",2);f([rt()],_.prototype,"hasLabel",2);f([rt()],_.prototype,"hasPrefix",2);f([rt()],_.prototype,"hasSuffix",2);f([v({reflect:!0})],_.prototype,"variant",2);f([v({reflect:!0})],_.prototype,"size",2);f([v({type:Boolean,reflect:!0})],_.prototype,"caret",2);f([v({type:Boolean,reflect:!0})],_.prototype,"disabled",2);f([v({type:Boolean,reflect:!0})],_.prototype,"loading",2);f([v({type:Boolean,reflect:!0})],_.prototype,"outline",2);f([v({type:Boolean,reflect:!0})],_.prototype,"pill",2);f([v({type:Boolean,reflect:!0})],_.prototype,"circle",2);f([v({type:Boolean,reflect:!0})],_.prototype,"submit",2);f([v()],_.prototype,"name",2);f([v()],_.prototype,"value",2);f([v()],_.prototype,"href",2);f([v()],_.prototype,"target",2);f([v()],_.prototype,"download",2);_=f([et("sl-button")],_);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var si=O`
  ${tt}

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
`,ie=class extends P{render(){return L`
      <svg part="base" class="spinner" aria-busy="true" aria-live="polite">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ie.styles=si;ie=f([et("sl-spinner")],ie);var ii=O`
  ${tt}

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
`,st=class extends P{constructor(){super(...arguments);this.variant="primary",this.pill=!1,this.pulse=!1}render(){return L`
      <span
        part="base"
        class=${Lt({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};st.styles=ii;f([v({reflect:!0})],st.prototype,"variant",2);f([v({type:Boolean,reflect:!0})],st.prototype,"pill",2);f([v({type:Boolean,reflect:!0})],st.prototype,"pulse",2);st=f([et("sl-badge")],st);function Tr(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!e.offsetParent||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function oi(e){const t=[];function r(o){o instanceof HTMLElement&&(t.push(o),o.shadowRoot&&o.shadowRoot.mode==="open"&&r(o.shadowRoot)),[...o.querySelectorAll("*")].map(n=>r(n))}r(e);const s=t.find(o=>Tr(o))||null,i=t.reverse().find(o=>Tr(o))||null;return{start:s,end:i}}function ni(){let e=!1;return document.createElement("div").focus({get preventScroll(){return e=!0,!1}}),e}var vt=[],ai=class{constructor(e){this.tabDirection="forward",this.element=e,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}activate(){vt.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown)}deactivate(){vt=vt.filter(e=>e!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown)}isActive(){return vt[vt.length-1]===this.element}handleFocusIn(e){const t=e.composedPath();if(this.isActive()&&!t.includes(this.element)){const{start:r,end:s}=oi(this.element),i=this.tabDirection==="forward"?r:s;typeof(i==null?void 0:i.focus)=="function"&&i.focus({preventScroll:!0})}}handleKeyDown(e){e.key==="Tab"&&e.shiftKey&&(this.tabDirection="backward",setTimeout(()=>this.tabDirection="forward"))}},oe=new Set;function Mr(e){oe.add(e),document.body.classList.add("sl-scroll-lock")}function Rr(e){oe.delete(e),oe.size===0&&document.body.classList.remove("sl-scroll-lock")}var li=O`
  ${tt}

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
`;function bt(e,t,r){return new Promise(async s=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,Ct(Et({},r),{duration:ui()?0:r.duration}));i.addEventListener("cancel",s,{once:!0}),i.addEventListener("finish",s,{once:!0})})}function ui(){const e=window.matchMedia("(prefers-reduced-motion: reduce)");return e==null?void 0:e.matches}function Tt(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const s=requestAnimationFrame(r);t.addEventListener("cancel",()=>s,{once:!0}),t.addEventListener("finish",()=>s,{once:!0}),t.cancel()})))}var Br=new Map,ci=new WeakMap;function di(e){return e!=null?e:{keyframes:[],options:{duration:0}}}function gt(e,t){Br.set(e,di(t))}function _t(e,t){const r=ci.get(e);if(r&&r[t])return r[t];const s=Br.get(t);return s||{keyframes:[],options:{duration:0}}}function Mt(e,t){return(r,s)=>{const{update:i}=r;t=Object.assign({waitUntilFirstUpdate:!1},t),r.update=function(o){if(o.has(e)){const n=o.get(e),l=this[e];n!==l&&(!(t==null?void 0:t.waitUntilFirstUpdate)||this.hasUpdated)&&this[s].call(this,n,l)}i.call(this,o)}}}var Or=ni(),hi=0,S=class extends P{constructor(){super(...arguments);this.componentId=`dialog-${++hi}`,this.hasFooter=!1,this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.modal=new ai(this),this.handleSlotChange()}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.modal.activate(),Mr(this))}disconnectedCallback(){super.disconnectedCallback(),Rr(this)}async show(){if(!this.open)return this.open=!0,Nr(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,Nr(this,"sl-after-hide")}requestClose(){if(C(this,"sl-request-close",{cancelable:!0}).defaultPrevented){const t=_t(this,"dialog.denyClose");bt(this.panel,t.keyframes,t.options);return}this.hide()}handleKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this.requestClose())}async handleOpenChange(){if(this.open){C(this,"sl-show"),this.originalTrigger=document.activeElement,this.modal.activate(),Mr(this),await Promise.all([Tt(this.dialog),Tt(this.overlay)]),this.dialog.hidden=!1,Or&&(C(this,"sl-initial-focus",{cancelable:!0}).defaultPrevented||this.panel.focus({preventScroll:!0}));const e=_t(this,"dialog.show"),t=_t(this,"dialog.overlay.show");await Promise.all([bt(this.panel,e.keyframes,e.options),bt(this.overlay,t.keyframes,t.options)]),Or||C(this,"sl-initial-focus",{cancelable:!0}).defaultPrevented||this.panel.focus({preventScroll:!0}),C(this,"sl-after-show")}else{C(this,"sl-hide"),this.modal.deactivate(),await Promise.all([Tt(this.dialog),Tt(this.overlay)]);const e=_t(this,"dialog.hide"),t=_t(this,"dialog.overlay.hide");await Promise.all([bt(this.panel,e.keyframes,e.options),bt(this.overlay,t.keyframes,t.options)]),this.dialog.hidden=!0,Rr(this);const r=this.originalTrigger;r&&typeof r.focus=="function"&&setTimeout(()=>r.focus()),C(this,"sl-after-hide")}}handleSlotChange(){this.hasFooter=Pt(this,"footer")}render(){return L`
      <div
        part="base"
        class=${Lt({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasFooter})}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="dialog__overlay" @click=${this.requestClose} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${$(this.noHeader?this.label:void 0)}
          aria-labelledby=${$(this.noHeader?void 0:`${this.componentId}-title`)}
          tabindex="0"
        >
          ${this.noHeader?"":L`
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
    `}};S.styles=li;f([ft(".dialog")],S.prototype,"dialog",2);f([ft(".dialog__panel")],S.prototype,"panel",2);f([ft(".dialog__overlay")],S.prototype,"overlay",2);f([rt()],S.prototype,"hasFooter",2);f([v({type:Boolean,reflect:!0})],S.prototype,"open",2);f([v({reflect:!0})],S.prototype,"label",2);f([v({attribute:"no-header",type:Boolean,reflect:!0})],S.prototype,"noHeader",2);f([Mt("open",{waitUntilFirstUpdate:!0})],S.prototype,"handleOpenChange",1);S=f([et("sl-dialog")],S);gt("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});gt("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});gt("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:250}});gt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});gt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var pi=O`
  ${tt}

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

  .icon-button${x} {
    box-shadow: var(--sl-focus-ring);
  }
`,k=class extends P{constructor(){super(...arguments);this.label="",this.disabled=!1}render(){const e=!!this.href,t=L`
      <sl-icon
        name=${$(this.name)}
        library=${$(this.library)}
        src=${$(this.src)}
        aria-hidden="true"
      ></sl-icon>
    `;return e?L`
          <a
            part="base"
            class="icon-button"
            href=${$(this.href)}
            target=${$(this.target)}
            download=${$(this.download)}
            rel=${$(this.target?"noreferrer noopener":void 0)}
            role="button"
            aria-disabled=${this.disabled?"true":"false"}
            aria-label="${this.label}"
            tabindex=${this.disabled?"-1":"0"}
          >
            ${t}
          </a>
        `:L`
          <button
            part="base"
            class=${Lt({"icon-button":!0,"icon-button--disabled":this.disabled})}
            ?disabled=${this.disabled}
            type="button"
            aria-label=${this.label}
          >
            ${t}
          </button>
        `}};k.styles=pi;f([ft("button")],k.prototype,"button",2);f([v()],k.prototype,"name",2);f([v()],k.prototype,"library",2);f([v()],k.prototype,"src",2);f([v()],k.prototype,"href",2);f([v()],k.prototype,"target",2);f([v()],k.prototype,"download",2);f([v()],k.prototype,"label",2);f([v({type:Boolean,reflect:!0})],k.prototype,"disabled",2);k=f([et("sl-icon-button")],k);var fi=O`
  ${tt}

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
`,vi={name:"default",resolver:e=>`${Ts()}/assets/icons/${e}.svg`},bi=vi,Ir={check:`
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
  `},gi={name:"system",resolver:e=>Ir[e]?`data:image/svg+xml,${encodeURIComponent(Ir[e])}`:""},_i=gi,mi=[bi,_i],ne=[];function yi(e){ne.push(e)}function $i(e){ne=ne.filter(t=>t!==e)}function Hr(e){return mi.filter(t=>t.name===e)[0]}var ae=new Map,wi=e=>{if(ae.has(e))return ae.get(e);{const t=fetch(e).then(async r=>{if(r.ok){const s=document.createElement("div");s.innerHTML=await r.text();const i=s.firstElementChild;return{ok:r.ok,status:r.status,svg:i&&i.tagName.toLowerCase()==="svg"?i.outerHTML:""}}else return{ok:r.ok,status:r.status,svg:null}});return ae.set(e,t),t}},le=class extends Sr{constructor(e){if(super(e),this.it=m,e.type!==Cr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===m||e==null)return this.vt=void 0,this.it=e;if(e===H)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.vt;this.it=e;const t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}};le.directiveName="unsafeHTML",le.resultType=1;var ue=class extends le{};ue.directiveName="unsafeSVG",ue.resultType=2;var Ai=kr(ue),xi=new DOMParser,T=class extends P{constructor(){super(...arguments);this.svg="",this.library="default"}connectedCallback(){super.connectedCallback(),yi(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),$i(this)}getUrl(){const e=Hr(this.library);return this.name&&e?e.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){const e=Hr(this.library),t=this.getUrl();if(t)try{const r=await wi(t);if(t!==this.getUrl())return;if(r.ok){const i=xi.parseFromString(r.svg,"text/html").body.querySelector("svg");i?(e&&e.mutator&&e.mutator(i),this.svg=i.outerHTML,C(this,"sl-load")):(this.svg="",C(this,"sl-error",{detail:{status:r.status}}))}else this.svg="",C(this,"sl-error",{detail:{status:r.status}})}catch{C(this,"sl-error",{detail:{status:-1}})}else this.svg&&(this.svg="")}handleChange(){this.setIcon()}render(){const e=typeof this.label=="string"&&this.label.length>0;return L` <div
      part="base"
      class="icon"
      role=${$(e?"img":void 0)}
      aria-label=${$(e?this.label:void 0)}
      aria-hidden=${$(e?void 0:"true")}
    >
      ${Ai(this.svg)}
    </div>`}};T.styles=fi;f([rt()],T.prototype,"svg",2);f([v()],T.prototype,"name",2);f([v()],T.prototype,"src",2);f([v()],T.prototype,"label",2);f([v()],T.prototype,"library",2);f([Mt("name"),Mt("src"),Mt("library")],T.prototype,"setIcon",1);T=f([et("sl-icon")],T);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ei(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(r){var s=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:function(){return e[r]}})}),t}var ce={},de={};(function(e){const t=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",r=t+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",s="["+t+"]["+r+"]*",i=new RegExp("^"+s+"$"),o=function(l,a){const u=[];let d=a.exec(l);for(;d;){const c=[];c.startIndex=a.lastIndex-d[0].length;const h=d.length;for(let p=0;p<h;p++)c.push(d[p]);u.push(c),d=a.exec(l)}return u},n=function(l){const a=i.exec(l);return!(a===null||typeof a=="undefined")};e.isExist=function(l){return typeof l!="undefined"},e.isEmptyObject=function(l){return Object.keys(l).length===0},e.merge=function(l,a,u){if(a){const d=Object.keys(a),c=d.length;for(let h=0;h<c;h++)u==="strict"?l[d[h]]=[a[d[h]]]:l[d[h]]=a[d[h]]}},e.getValue=function(l){return e.isExist(l)?l:""},e.isName=n,e.getAllMatches=o,e.nameRegexp=s})(de);const he=de,Ci={allowBooleanAttributes:!1,unpairedTags:[]};ce.validate=function(e,t){t=Object.assign({},Ci,t);const r=[];let s=!1,i=!1;e[0]==="\uFEFF"&&(e=e.substr(1));for(let o=0;o<e.length;o++)if(e[o]==="<"&&e[o+1]==="?"){if(o+=2,o=zr(e,o),o.err)return o}else if(e[o]==="<"){let n=o;if(o++,e[o]==="!"){o=Yr(e,o);continue}else{let l=!1;e[o]==="/"&&(l=!0,o++);let a="";for(;o<e.length&&e[o]!==">"&&e[o]!==" "&&e[o]!=="	"&&e[o]!==`
`&&e[o]!=="\r";o++)a+=e[o];if(a=a.trim(),a[a.length-1]==="/"&&(a=a.substring(0,a.length-1),o--),!Ri(a)){let c;return a.trim().length===0?c="Invalid space after '<'.":c="Tag '"+a+"' is an invalid name.",w("InvalidTag",c,E(e,o))}const u=Ni(e,o);if(u===!1)return w("InvalidAttr","Attributes for '"+a+"' have open quote.",E(e,o));let d=u.value;if(o=u.index,d[d.length-1]==="/"){const c=o-d.length;d=d.substring(0,d.length-1);const h=Gr(d,t);if(h===!0)s=!0;else return w(h.err.code,h.err.msg,E(e,c+h.err.line))}else if(l)if(u.tagClosed){if(d.trim().length>0)return w("InvalidTag","Closing tag '"+a+"' can't have attributes or invalid starting.",E(e,n));{const c=r.pop();if(a!==c.tagName){let h=E(e,c.tagStartPos);return w("InvalidTag","Expected closing tag '"+c.tagName+"' (opened in line "+h.line+", col "+h.col+") instead of closing tag '"+a+"'.",E(e,n))}r.length==0&&(i=!0)}}else return w("InvalidTag","Closing tag '"+a+"' doesn't have proper closing.",E(e,o));else{const c=Gr(d,t);if(c!==!0)return w(c.err.code,c.err.msg,E(e,o-d.length+c.err.line));if(i===!0)return w("InvalidXml","Multiple possible root nodes found.",E(e,o));t.unpairedTags.indexOf(a)!==-1||r.push({tagName:a,tagStartPos:n}),s=!0}for(o++;o<e.length;o++)if(e[o]==="<")if(e[o+1]==="!"){o++,o=Yr(e,o);continue}else if(e[o+1]==="?"){if(o=zr(e,++o),o.err)return o}else break;else if(e[o]==="&"){const c=Ti(e,o);if(c==-1)return w("InvalidChar","char '&' is not expected.",E(e,o));o=c}else if(i===!0&&!Ur(e[o]))return w("InvalidXml","Extra text at the end",E(e,o));e[o]==="<"&&o--}}else{if(Ur(e[o]))continue;return w("InvalidChar","char '"+e[o]+"' is not expected.",E(e,o))}if(s){if(r.length==1)return w("InvalidTag","Unclosed tag '"+r[0].tagName+"'.",E(e,r[0].tagStartPos));if(r.length>0)return w("InvalidXml","Invalid '"+JSON.stringify(r.map(o=>o.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1})}else return w("InvalidXml","Start tag expected.",1);return!0};function Ur(e){return e===" "||e==="	"||e===`
`||e==="\r"}function zr(e,t){const r=t;for(;t<e.length;t++)if(e[t]=="?"||e[t]==" "){const s=e.substr(r,t-r);if(t>5&&s==="xml")return w("InvalidXml","XML declaration allowed only at the start of the document.",E(e,t));if(e[t]=="?"&&e[t+1]==">"){t++;break}else continue}return t}function Yr(e,t){if(e.length>t+5&&e[t+1]==="-"&&e[t+2]==="-"){for(t+=3;t<e.length;t++)if(e[t]==="-"&&e[t+1]==="-"&&e[t+2]===">"){t+=2;break}}else if(e.length>t+8&&e[t+1]==="D"&&e[t+2]==="O"&&e[t+3]==="C"&&e[t+4]==="T"&&e[t+5]==="Y"&&e[t+6]==="P"&&e[t+7]==="E"){let r=1;for(t+=8;t<e.length;t++)if(e[t]==="<")r++;else if(e[t]===">"&&(r--,r===0))break}else if(e.length>t+9&&e[t+1]==="["&&e[t+2]==="C"&&e[t+3]==="D"&&e[t+4]==="A"&&e[t+5]==="T"&&e[t+6]==="A"&&e[t+7]==="["){for(t+=8;t<e.length;t++)if(e[t]==="]"&&e[t+1]==="]"&&e[t+2]===">"){t+=2;break}}return t}const ki='"',Si="'";function Ni(e,t){let r="",s="",i=!1;for(;t<e.length;t++){if(e[t]===ki||e[t]===Si)s===""?s=e[t]:s!==e[t]||(s="");else if(e[t]===">"&&s===""){i=!0;break}r+=e[t]}return s!==""?!1:{value:r,index:t,tagClosed:i}}const Pi=new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");function Gr(e,t){const r=he.getAllMatches(e,Pi),s={};for(let i=0;i<r.length;i++){if(r[i][1].length===0)return w("InvalidAttr","Attribute '"+r[i][2]+"' has no space in starting.",mt(r[i]));if(r[i][3]!==void 0&&r[i][4]===void 0)return w("InvalidAttr","Attribute '"+r[i][2]+"' is without value.",mt(r[i]));if(r[i][3]===void 0&&!t.allowBooleanAttributes)return w("InvalidAttr","boolean attribute '"+r[i][2]+"' is not allowed.",mt(r[i]));const o=r[i][2];if(!Mi(o))return w("InvalidAttr","Attribute '"+o+"' is an invalid name.",mt(r[i]));if(!s.hasOwnProperty(o))s[o]=1;else return w("InvalidAttr","Attribute '"+o+"' is repeated.",mt(r[i]))}return!0}function Li(e,t){let r=/\d/;for(e[t]==="x"&&(t++,r=/[\da-fA-F]/);t<e.length;t++){if(e[t]===";")return t;if(!e[t].match(r))break}return-1}function Ti(e,t){if(t++,e[t]===";")return-1;if(e[t]==="#")return t++,Li(e,t);let r=0;for(;t<e.length;t++,r++)if(!(e[t].match(/\w/)&&r<20)){if(e[t]===";")break;return-1}return t}function w(e,t,r){return{err:{code:e,msg:t,line:r.line||r,col:r.col}}}function Mi(e){return he.isName(e)}function Ri(e){return he.isName(e)}function E(e,t){const r=e.substring(0,t).split(/\r?\n/);return{line:r.length,col:r[r.length-1].length+1}}function mt(e){return e.startIndex+e[1].length}var pe={};const Xr={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0},tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1},Bi=function(e){return Object.assign({},Xr,e)};pe.buildOptions=Bi;pe.defaultOptions=Xr;class Oi{constructor(t){this.tagname=t,this.child=[],this[":@"]={}}add(t,r){this.child.push({[t]:r})}addChild(t){t[":@"]&&Object.keys(t[":@"]).length>0?this.child.push({[t.tagname]:t.child,[":@"]:t[":@"]}):this.child.push({[t.tagname]:t.child})}}var Ii=Oi;function Hi(e,t){const r={};if(e[t+3]==="O"&&e[t+4]==="C"&&e[t+5]==="T"&&e[t+6]==="Y"&&e[t+7]==="P"&&e[t+8]==="E"){t=t+9;let s=1,i=!1,o=!1,n=!1,l="";for(;t<e.length;t++)if(e[t]==="<"){if(i&&e[t+1]==="!"&&e[t+2]==="E"&&e[t+3]==="N"&&e[t+4]==="T"&&e[t+5]==="I"&&e[t+6]==="T"&&e[t+7]==="Y")t+=7,o=!0;else if(i&&e[t+1]==="!"&&e[t+2]==="E"&&e[t+3]==="L"&&e[t+4]==="E"&&e[t+5]==="M"&&e[t+6]==="E"&&e[t+7]==="N"&&e[t+8]==="T")t+=8;else if(e[t+1]==="!"&&e[t+2]==="-"&&e[t+3]==="-")n=!0;else throw new Error("Invalid DOCTYPE");s++,l=""}else if(e[t]===">"){if(n)if(e[t-1]==="-"&&e[t-2]==="-")n=!1;else throw new Error("Invalid XML comment in DOCTYPE");else o&&(zi(l,r),o=!1);if(s--,s===0)break}else e[t]==="["?i=!0:l+=e[t];if(s!==0)throw new Error("Unclosed DOCTYPE")}else throw new Error("Invalid Tag instead of DOCTYPE");return{entities:r,i:t}}const Ui=RegExp(`^\\s([a-zA-z0-0]+)[ 	](['"])([^&]+)\\2`);function zi(e,t){const r=Ui.exec(e);r&&(t[r[1]]={regx:RegExp(`&${r[1]};`,"g"),val:r[3]})}var Yi=Hi;const Gi=/^[-+]?0x[a-fA-F0-9]+$/,Xi=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt);!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);const Zi={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};function Fi(e,t={}){if(t=Object.assign({},Zi,t),!e||typeof e!="string")return e;let r=e.trim();if(t.skipLike!==void 0&&t.skipLike.test(r))return e;if(t.hex&&Gi.test(r))return Number.parseInt(r,16);{const s=Xi.exec(r);if(s){const i=s[1],o=s[2];let n=Vi(s[3]);const l=s[4]||s[6];if(!t.leadingZeros&&o.length>0&&i&&r[2]!==".")return e;if(!t.leadingZeros&&o.length>0&&!i&&r[1]!==".")return e;{const a=Number(r),u=""+a;return u.search(/[eE]/)!==-1||l?t.eNotation?a:e:r.indexOf(".")!==-1?u==="0"&&n===""||u===n||i&&u==="-"+n?a:e:o?n===u||i+n===u?a:e:r===u||r===i+u?a:e}}else return e}}function Vi(e){return e&&e.indexOf(".")!==-1&&(e=e.replace(/0+$/,""),e==="."?e="0":e[0]==="."?e="0"+e:e[e.length-1]==="."&&(e=e.substr(0,e.length-1))),e}var ji=Fi;const fe=de,yt=Ii,Wi=Yi,qi=ji;"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,fe.nameRegexp);class Ki{constructor(t){this.options=t,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={amp:{regex:/&(amp|#38|#x26);/g,val:"&"},apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"\xA2"},pound:{regex:/&(pound|#163);/g,val:"\xA3"},yen:{regex:/&(yen|#165);/g,val:"\xA5"},euro:{regex:/&(euro|#8364);/g,val:"\u20AC"},copyright:{regex:/&(copy|#169);/g,val:"\xA9"},reg:{regex:/&(reg|#174);/g,val:"\xAE"},inr:{regex:/&(inr|#8377);/g,val:"\u20B9"}},this.addExternalEntities=Ji,this.parseXml=ro,this.parseTextData=Qi,this.resolveNameSpace=Di,this.buildAttributesMap=eo,this.isItStopNode=oo,this.replaceEntitiesValue=so,this.readStopNodeData=ao,this.saveTextToParentTag=io}}function Ji(e){const t=Object.keys(e);for(let r=0;r<t.length;r++){const s=t[r];this.lastEntities[s]={regex:new RegExp("&"+s+";","g"),val:e[s]}}}function Qi(e,t,r,s,i,o,n){if(e!==void 0&&(this.options.trimValues&&!s&&(e=e.trim()),e.length>0)){n||(e=this.replaceEntitiesValue(e));const l=this.options.tagValueProcessor(t,e,r,i,o);return l==null?e:typeof l!=typeof e||l!==e?l:this.options.trimValues?ve(e,this.options.parseTagValue,this.options.numberParseOptions):e.trim()===e?ve(e,this.options.parseTagValue,this.options.numberParseOptions):e}}function Di(e){if(this.options.removeNSPrefix){const t=e.split(":"),r=e.charAt(0)==="/"?"/":"";if(t[0]==="xmlns")return"";t.length===2&&(e=r+t[1])}return e}const to=new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,"gm");function eo(e,t){if(!this.options.ignoreAttributes&&typeof e=="string"){const r=fe.getAllMatches(e,to),s=r.length,i={};for(let o=0;o<s;o++){const n=this.resolveNameSpace(r[o][1]);let l=r[o][4];const a=this.options.attributeNamePrefix+n;if(n.length)if(l!==void 0){this.options.trimValues&&(l=l.trim()),l=this.replaceEntitiesValue(l);const u=this.options.attributeValueProcessor(n,l,t);u==null?i[a]=l:typeof u!=typeof l||u!==l?i[a]=u:i[a]=ve(l,this.options.parseAttributeValue,this.options.numberParseOptions)}else this.options.allowBooleanAttributes&&(i[a]=!0)}if(!Object.keys(i).length)return;if(this.options.attributesGroupName){const o={};return o[this.options.attributesGroupName]=i,o}return i}}const ro=function(e){e=e.replace(/\r\n?/g,`
`);const t=new yt("!xml");let r=t,s="",i="";for(let o=0;o<e.length;o++)if(e[o]==="<")if(e[o+1]==="/"){const l=Rt(e,">",o,"Closing Tag is not closed.");let a=e.substring(o+2,l).trim();if(this.options.removeNSPrefix){const u=a.indexOf(":");u!==-1&&(a=a.substr(u+1))}r&&(s=this.saveTextToParentTag(s,r,i)),i=i.substr(0,i.lastIndexOf(".")),r=this.tagsNodeStack.pop(),s="",o=l}else if(e[o+1]==="?"){let l=Zr(e,o,!1,"?>");if(!l)throw new Error("Pi Tag is not closed.");s=this.saveTextToParentTag(s,r,i);const a=new yt(l.tagName);a.add(this.options.textNodeName,""),l.tagName!==l.tagExp&&l.attrExpPresent&&(a[":@"]=this.buildAttributesMap(l.tagExp,i)),r.addChild(a),o=l.closeIndex+1}else if(e.substr(o+1,3)==="!--"){const l=Rt(e,"-->",o,"Comment is not closed.");if(this.options.commentPropName){const a=e.substring(o+4,l-2);s=this.saveTextToParentTag(s,r,i),r.add(this.options.commentPropName,[{[this.options.textNodeName]:a}])}o=l}else if(e.substr(o+1,2)==="!D"){const l=Wi(e,o);this.docTypeEntities=l.entities,o=l.i}else if(e.substr(o+1,2)==="!["){const l=Rt(e,"]]>",o,"CDATA is not closed.")-2,a=e.substring(o+9,l);if(s=this.saveTextToParentTag(s,r,i),this.options.cdataPropName)r.add(this.options.cdataPropName,[{[this.options.textNodeName]:a}]);else{let u=this.parseTextData(a,r.tagname,i,!0,!1,!0);u||(u=""),r.add(this.options.textNodeName,u)}o=l+2}else{let l=Zr(e,o,this.options.removeNSPrefix),a=l.tagName,u=l.tagExp,d=l.attrExpPresent,c=l.closeIndex;r&&s&&r.tagname!=="!xml"&&(s=this.saveTextToParentTag(s,r,i,!1)),a!==t.tagname&&(i+=i?"."+a:a);const h=r;if(h&&this.options.unpairedTags.indexOf(h.tagname)!==-1&&(r=this.tagsNodeStack.pop()),this.isItStopNode(this.options.stopNodes,i,a)){let p="";if(!(u.length>0&&u.lastIndexOf("/")===u.length-1)){if(this.options.unpairedTags.indexOf(a)===-1){const g=this.readStopNodeData(e,a,c+1);if(!g)throw new Error(`Unexpected end of ${a}`);o=g.i,p=g.tagContent}}const b=new yt(a);a!==u&&d&&(b[":@"]=this.buildAttributesMap(u,i)),p&&(p=this.parseTextData(p,a,i,!0,d,!0,!0)),i=i.substr(0,i.lastIndexOf(".")),b.add(this.options.textNodeName,p),r.addChild(b)}else{if(u.length>0&&u.lastIndexOf("/")===u.length-1){a[a.length-1]==="/"?(a=a.substr(0,a.length-1),u=a):u=u.substr(0,u.length-1);const p=new yt(a);a!==u&&d&&(p[":@"]=this.buildAttributesMap(u,i)),i=i.substr(0,i.lastIndexOf(".")),r.addChild(p)}else{const p=new yt(a);this.tagsNodeStack.push(r),a!==u&&d&&(p[":@"]=this.buildAttributesMap(u,i)),r.addChild(p),r=p}s="",o=c}}else s+=e[o];return t.child},so=function(e){if(this.options.processEntities){for(let t in this.docTypeEntities){const r=this.docTypeEntities[t];e=e.replace(r.regx,r.val)}for(let t in this.lastEntities){const r=this.lastEntities[t];e=e.replace(r.regex,r.val)}if(this.options.htmlEntities)for(let t in this.htmlEntities){const r=this.htmlEntities[t];e=e.replace(r.regex,r.val)}}return e};function io(e,t,r,s){return e&&(s===void 0&&(s=Object.keys(t.child).length===0),e=this.parseTextData(e,t.tagname,r,!1,t[":@"]?Object.keys(t[":@"]).length!==0:!1,s),e!==void 0&&e!==""&&t.add(this.options.textNodeName,e),e=""),e}function oo(e,t,r){const s="*."+r;for(const i in e){const o=e[i];if(s===o||t===o)return!0}return!1}function no(e,t,r=">"){let s,i="";for(let o=t;o<e.length;o++){let n=e[o];if(s)n===s&&(s="");else if(n==='"'||n==="'")s=n;else if(n===r[0])if(r[1]){if(e[o+1]===r[1])return{data:i,index:o}}else return{data:i,index:o};else n==="	"&&(n=" ");i+=n}}function Rt(e,t,r,s){const i=e.indexOf(t,r);if(i===-1)throw new Error(s);return i+t.length-1}function Zr(e,t,r,s=">"){const i=no(e,t+1,s);if(!i)return;let o=i.data;const n=i.index,l=o.search(/\s/);let a=o,u=!0;if(l!==-1&&(a=o.substr(0,l).replace(/\s\s*$/,""),o=o.substr(l+1)),r){const d=a.indexOf(":");d!==-1&&(a=a.substr(d+1),u=a!==i.data.substr(d+1))}return{tagName:a,tagExp:o,closeIndex:n,attrExpPresent:u}}function ao(e,t,r){const s=r;for(;r<e.length;r++)if(e[r]==="<"&&e[r+1]==="/"){const i=Rt(e,">",r,`${t} is not closed`);if(e.substring(r+2,i).trim()===t)return{tagContent:e.substring(s,r),i};r=i}}function ve(e,t,r){if(t&&typeof e=="string"){const s=e.trim();return s==="true"?!0:s==="false"?!1:qi(e,r)}else return fe.isExist(e)?e:""}var lo=Ki,Fr={};function uo(e,t){return Vr(e,t)}function Vr(e,t,r){let s;const i={};for(let o=0;o<e.length;o++){const n=e[o],l=co(n);let a="";if(r===void 0?a=l:a=r+"."+l,l===t.textNodeName)s===void 0?s=n[l]:s+=""+n[l];else{if(l===void 0)continue;if(n[l]){let u=Vr(n[l],t,a);const d=po(u,t);n[":@"]?ho(u,n[":@"],a,t):Object.keys(u).length===1&&u[t.textNodeName]!==void 0&&!t.alwaysCreateTextNode?u=u[t.textNodeName]:Object.keys(u).length===0&&(t.alwaysCreateTextNode?u[t.textNodeName]="":u=""),i[l]!==void 0?(Array.isArray(i[l])||(i[l]=[i[l]]),i[l].push(u)):t.isArray(l,a,d)?i[l]=[u]:i[l]=u}}}return typeof s=="string"?s.length>0&&(i[t.textNodeName]=s):s!==void 0&&(i[t.textNodeName]=s),i}function co(e){const t=Object.keys(e);for(let r=0;r<t.length;r++){const s=t[r];if(s!==":@")return s}}function ho(e,t,r,s){if(t){const i=Object.keys(t),o=i.length;for(let n=0;n<o;n++){const l=i[n];s.isArray(l,r+"."+l,!0,!0)?e[l]=[t[l]]:e[l]=t[l]}}}function po(e,t){const r=Object.keys(e).length;return!!(r===0||r===1&&e[t.textNodeName])}Fr.prettify=uo;const{buildOptions:fo}=pe,vo=lo,{prettify:bo}=Fr,go=ce;class _o{constructor(t){this.externalEntities={},this.options=fo(t)}parse(t,r){if(typeof t!="string")if(t.toString)t=t.toString();else throw new Error("XML data is accepted in String or Bytes[] form.");if(r){r===!0&&(r={});const o=go.validate(t,r);if(o!==!0)throw Error(`${o.err.msg}:${o.err.line}:${o.err.col}`)}const s=new vo(this.options);s.addExternalEntities(this.externalEntities);const i=s.parseXml(t);return this.options.preserveOrder||i===void 0?i:bo(i,this.options)}addEntity(t,r){if(r.indexOf("&")!==-1)throw new Error("Entity value can't have '&'");if(t.indexOf("&")!==-1||t.indexOf(";")!==-1)throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");this.externalEntities[t]=r}}var mo=_o,yo={},$o=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yo}),wo=Ei($o);const{EOL:Ao}=wo;function xo(e,t){return jr(e,t,"",0)}function jr(e,t,r,s){let i="",o="";t.format&&t.indentBy.length>0&&(o=Ao+""+t.indentBy.repeat(s));for(let n=0;n<e.length;n++){const l=e[n],a=Eo(l);let u="";if(r.length===0?u=a:u=`${r}.${a}`,a===t.textNodeName){let p=l[a];Co(u,t)||(p=t.tagValueProcessor(a,p),p=qr(p,t)),i+=o+p;continue}else if(a===t.cdataPropName){i+=o+`<![CDATA[${l[a][0][t.textNodeName]}]]>`;continue}else if(a===t.commentPropName){i+=o+`<!--${l[a][0][t.textNodeName]}-->`;continue}else if(a[0]==="?"){const p=Wr(l[":@"],t);i+=o+`<${a} ${l[a][0][t.textNodeName]} ${p}?>`;continue}const d=Wr(l[":@"],t);let c=o+`<${a}${d}`,h=jr(l[a],t,u,s+1);t.unpairedTags.indexOf(a)!==-1?i+=c+">":(!h||h.length===0)&&t.suppressEmptyNode?i+=c+"/>":i+=c+`>${h}${o}</${a}>`}return i}function Eo(e){const t=Object.keys(e);for(let r=0;r<t.length;r++){const s=t[r];if(s!==":@")return s}}function Wr(e,t){let r="";if(e&&!t.ignoreAttributes)for(attr in e){let s=t.attributeValueProcessor(attr,e[attr]);s=qr(s,t),s===!0&&t.suppressBooleanAttributes?r+=` ${attr.substr(t.attributeNamePrefix.length)}`:r+=` ${attr.substr(t.attributeNamePrefix.length)}="${s}"`}return r}function Co(e,t){e=e.substr(0,e.length-t.textNodeName.length-1);let r=e.substr(e.lastIndexOf(".")+1);for(let s in t.stopNodes)if(t.stopNodes[s]===e||t.stopNodes[s]==="*."+r)return!0;return!1}function qr(e,t){if(e&&e.length>0&&t.processEntities)for(const r in t.entities){const s=t.entities[r];e=e.replace(s.regex,s.val)}return e}var ko=xo;const So=ko,No={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressBooleanAttributes:!0,tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:{">":{regex:new RegExp(">","g"),val:"&gt;"},"<":{regex:new RegExp("<","g"),val:"&lt;"},sQuot:{regex:new RegExp("'","g"),val:"&apos;"},dQuot:{regex:new RegExp('"',"g"),val:"&quot;"}},processEntities:!0,stopNodes:[]};function be(e){this.options=Object.assign({},No,e),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=Bo),this.processTextOrObjNode=Po,this.options.format?(this.indentate=Ro,this.tagEndChar=`>
`,this.newLine=`
`):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine=""),this.options.suppressEmptyNode?(this.buildTextNode=Mo,this.buildObjNode=Lo):(this.buildTextNode=Jr,this.buildObjNode=Kr),this.buildTextValNode=Jr,this.buildObjectNode=Kr,this.replaceEntitiesValue=To}be.prototype.build=function(e){return this.options.preserveOrder?So(e,this.options):(Array.isArray(e)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(e={[this.options.arrayNodeName]:e}),this.j2x(e,0).val)};be.prototype.j2x=function(e,t){let r="",s="";for(let i in e)if(typeof e[i]!="undefined")if(e[i]===null)s+=this.indentate(t)+"<"+i+"/"+this.tagEndChar;else if(e[i]instanceof Date)s+=this.buildTextNode(e[i],i,"",t);else if(typeof e[i]!="object"){const o=this.isAttribute(i);if(o){let n=this.options.attributeValueProcessor(o,""+e[i]);n=this.replaceEntitiesValue(n),r+=" "+o+'="'+n+'"'}else if(i===this.options.textNodeName){let n=this.options.tagValueProcessor(i,""+e[i]);s+=this.replaceEntitiesValue(n)}else s+=this.buildTextNode(e[i],i,"",t)}else if(Array.isArray(e[i])){const o=e[i].length;for(let n=0;n<o;n++){const l=e[i][n];typeof l=="undefined"||(l===null?s+=this.indentate(t)+"<"+i+"/"+this.tagEndChar:typeof l=="object"?s+=this.processTextOrObjNode(l,i,t):s+=this.buildTextNode(l,i,"",t))}}else if(this.options.attributesGroupName&&i===this.options.attributesGroupName){const o=Object.keys(e[i]),n=o.length;for(let l=0;l<n;l++){let a=this.options.attributeValueProcessor(o[l],""+e[i][o[l]]);a=this.replaceEntitiesValue(a),r+=" "+o[l]+'="'+a+'"'}}else s+=this.processTextOrObjNode(e[i],i,t);return{attrStr:r,val:s}};function Po(e,t,r){const s=this.j2x(e,r+1);return e[this.options.textNodeName]!==void 0&&Object.keys(e).length===1?this.buildTextNode(s.val,t,s.attrStr,r):this.buildObjNode(s.val,t,s.attrStr,r)}function Kr(e,t,r,s){return r&&e.indexOf("<")===-1?this.indentate(s)+"<"+t+r+">"+e+"</"+t+this.tagEndChar:this.indentate(s)+"<"+t+r+this.tagEndChar+e+this.indentate(s)+"</"+t+this.tagEndChar}function Lo(e,t,r,s){return e!==""?this.buildObjectNode(e,t,r,s):this.indentate(s)+"<"+t+r+"/"+this.tagEndChar}function Jr(e,t,r,s){let i=this.options.tagValueProcessor(t,e);return i=this.replaceEntitiesValue(i),this.indentate(s)+"<"+t+r+">"+i+"</"+t+this.tagEndChar}function To(e){if(e&&e.length>0&&this.options.processEntities)for(const t in this.options.entities){const r=this.options.entities[t];e=e.replace(r.regex,r.val)}return e}function Mo(e,t,r,s){return e===""&&this.options.unpairedTags.indexOf(t)!==-1?this.indentate(s)+"<"+t+r+this.tagEndChar:e!==""?this.buildTextValNode(e,t,r,s):this.indentate(s)+"<"+t+r+"/"+this.tagEndChar}function Ro(e){return this.options.indentBy.repeat(e)}function Bo(e){return e.startsWith(this.options.attributeNamePrefix)?e.substr(this.attrPrefixLen):!1}var Oo=be;const Io=ce,Ho=mo,Uo=Oo;var Ko={XMLParser:Ho,XMLValidator:Io,XMLBuilder:Uo},ge={},Bt={};Object.defineProperty(Bt,"__esModule",{value:!0});Bt.Matrix=void 0;class it{}Bt.Matrix=it;it.transpose=e=>{var t;const r=e.length||0,s=(t=e[0])===null||t===void 0?void 0:t.length,i=Qr();for(let o=0;o<r;o++)for(let n=0;n<s;n++)i[n][o]=e[o][n];return i};it.inv=e=>{const t=Qr(),[[r,s,i],[o,n,l],[a,u,d]]=e,c=r*n*d-r*l*u-s*o*d+s*l*a+i*o*u-i*n*a;if(c===0)throw new Error("Matrix not invertible");const h=1/c;return t[0][0]=h*(n*d-l*u),t[0][1]=h*(i*u-s*d),t[0][2]=h*(s*l-i*n),t[1][0]=h*(l*a-o*d),t[1][1]=h*(r*d-i*a),t[1][2]=h*(i*o-r*l),t[2][0]=h*(o*u-n*a),t[2][1]=h*(s*a-r*u),t[2][2]=h*(r*n-s*o),t};it.multiply_3x3_times_triple=(e,t)=>{const[[r,s,i],[o,n,l],[a,u,d]]=e,[c,h,p]=t;return[r*c+s*h+i*p,o*c+n*h+l*p,a*c+u*h+d*p]};it.multiply_triple_times_3x3=(e,t)=>{const[r,s,i]=e,[[o,n,l],[a,u,d],[c,h,p]]=t;return[o*r+a*s+c*i,n*r+u*s+h*i,l*r+d*s+p*i]};it.multiply_3x3_times_3x3=(e,t)=>{const[[r,s,i],[o,n,l],[a,u,d]]=e,[[c,h,p],[b,g,N],[M,U,ot]]=t;return[[r*c+s*b+i*M,r*h+s*g+i*U,r*p+s*N+i*ot],[o*c+n*b+l*M,o*h+n*g+l*U,o*p+n*N+l*ot],[a*c+u*b+d*M,a*h+u*g+d*U,a*p+u*N+d*ot]]};const Qr=()=>[[1,0,0],[0,1,0],[0,0,1]];Object.defineProperty(ge,"__esModule",{value:!0});var zo=ge.ColorConverter=void 0;const A=Bt;class Yo{constructor({RefWhite:t="D50",RgbModel:r="sRGB",GammaModel:s="sRGB",Adaptation:i="Bradford"}={}){this.RefWhite="D50",this.RgbModel="sRGB",this.GammaModel="sRGB",this.Adaptation="Bradford",this.kE=216/24389,this.kK=24389/27,this.RefWhite=t,this.RgbModel=r,this.GammaModel=s,this.Adaptation=i}get Mtx_RefWhite(){switch(this.RefWhite){case"A":return[1.0985,1,.35585];case"B":return[.99072,1,.85223];case"C":return[.98074,1,1.18232];case"D50":return[.96422,1,.82521];case"D55":return[.95682,1,.92149];case"D65":return[.95047,1,1.0888];case"D75":return[.94972,1,1.22638];case"E":return[1,1,1];case"F2":return[.99186,1,.67393];case"F7":return[.95041,1,1.08747];case"F11":return[1.00962,1,.6435];default:return[1,1,1]}}get Mtx_RefWhiteRGB(){switch(this.RgbModel){case"Adobe RGB (1998)":return[.95047,1,1.08883];case"AppleRGB":return[.95047,1,1.08883];case"Best RGB":return[.96422,1,.82521];case"Beta RGB":return[.96422,1,.82521];case"Bruce RGB":return[.95047,1,1.08883];case"CIE RGB":return[1,1,1];case"ColorMatch RGB":return[.96422,1,.82521];case"Don RGB 4":return[.96422,1,.82521];case"ECI RGB v2":return[.96422,1,.82521];case"Ekta Space PS5":return[.96422,1,.82521];case"NTSC RGB":return[.98074,1,1.18232];case"PAL/SECAM RGB":return[.95047,1,1.08883];case"ProPhoto RGB":return[.96422,1,.82521];case"SMPTE-C RGB":return[.95047,1,1.08883];case"sRGB":return[.95047,1,1.08883];case"Wide Gamut RGB":return[.96422,1,.82521]}}get GammaRGB(){switch(this.RgbModel){case"Adobe RGB (1998)":return{value:2.2,index:2};case"AppleRGB":return{value:1.8,index:1};case"Best RGB":return{value:2.2,index:2};case"Beta RGB":return{value:2.2,index:2};case"Bruce RGB":return{value:2.2,index:2};case"CIE RGB":return{value:2.2,index:2};case"ColorMatch RGB":return{value:1.8,index:2};case"Don RGB 4":return{value:2.2,index:2};case"ECI RGB v2":return{value:0,index:4};case"Ekta Space PS5":return{value:2.2,index:2};case"NTSC RGB":return{value:2.2,index:2};case"PAL/SECAM RGB":return{value:2.2,index:2};case"ProPhoto RGB":return{value:1.8,index:1};case"SMPTE-C RGB":return{value:2.2,index:2};case"sRGB":return{value:-2.2,index:3};case"Wide Gamut RGB":return{value:2.2,index:2}}}get Gamma(){switch(this.GammaModel.toString()){case"1.0":return 1;case"1.8":return 1.8;case"2.2":return 2.2;case"sRGB":return-2.2;case"L*":return 0;default:return 1}}get Mtx_RGB2XYZ(){let t,r,s,i,o,n;switch(this.RgbModel){case"Adobe RGB (1998)":{[t,r,s,i,o,n]=[.64,.33,.21,.71,.15,.06];break}case"AppleRGB":{[t,r,s,i,o,n]=[.625,.34,.28,.595,.155,.07];break}case"Best RGB":{[t,r,s,i,o,n]=[.7347,.2653,.215,.775,.13,.035];break}case"Beta RGB":{[t,r,s,i,o,n]=[.6888,.3112,.1986,.7551,.1265,.0352];break}case"Bruce RGB":{[t,r,s,i,o,n]=[.64,.33,.28,.65,.15,.06];break}case"CIE RGB":{[t,r,s,i,o,n]=[.735,.265,.274,.717,.167,.009];break}case"ColorMatch RGB":{[t,r,s,i,o,n]=[.63,.34,.295,.605,.15,.075];break}case"Don RGB 4":{[t,r,s,i,o,n]=[.696,.3,.215,.765,.13,.035];break}case"ECI RGB v2":{[t,r,s,i,o,n]=[.67,.33,.21,.71,.14,.08];break}case"Ekta Space PS5":{[t,r,s,i,o,n]=[.695,.305,.26,.7,.11,.005];break}case"NTSC RGB":{[t,r,s,i,o,n]=[.67,.33,.21,.71,.14,.08];break}case"PAL/SECAM RGB":{[t,r,s,i,o,n]=[.64,.33,.29,.6,.15,.06];break}case"ProPhoto RGB":{[t,r,s,i,o,n]=[.7347,.2653,.1596,.8404,.0366,1e-4];break}case"SMPTE-C RGB":{[t,r,s,i,o,n]=[.63,.34,.31,.595,.155,.07];break}case"sRGB":{[t,r,s,i,o,n]=[.64,.33,.3,.6,.15,.06];break}case"Wide Gamut RGB":{[t,r,s,i,o,n]=[.735,.265,.115,.826,.157,.018];break}}let l=t/r,a=1,u=(1-t-r)/r,d=s/i,c=1,h=(1-s-i)/i,p=o/n,b=1,g=(1-o-n)/n,N=this.Mtx_RefWhiteRGB,M=N[0],U=N[1],ot=N[2],[Ot,It,Ht]=A.Matrix.multiply_3x3_times_triple(A.Matrix.inv([[l,d,p],[a,c,b],[u,h,g]]),[M,U,ot]);return A.Matrix.transpose([[Ot*l,It*d,Ht*p],[Ot*a,It*c,Ht*b],[Ot*u,It*h,Ht*g]])}get MtxAdp(){switch(this.Adaptation){case"Bradford":return[[.8951,-.7502,.0389],[.2664,1.7135,-.0685],[-.1614,.0367,1.0296]];case"von Kries":return[[.40024,-.2263,0],[.7076,1.16532,0],[-.08081,.0457,.91822]];case"XYZ Scaling":case"None":return[[1,0,0],[0,1,0],[0,0,1]]}}compand(t){let r=this.Gamma;if(r>0)return t>=0?Math.pow(t,1/r):-Math.pow(-t,1/r);if(r<0){let s=1;return t<0&&(s=-1,t=-t),s*(t<=.0031308?t*12.92:1.055*Math.pow(t,1/2.4)-.055)}else{let s=1;return t<0&&(s=-1,t=-t),s*(t<=216/24389?t*24389/2700:1.16*Math.pow(t,1/3)-.16)}}inverse_compand(t){let r=this.Gamma;if(r>0)return t>=0?Math.pow(t,r):-Math.pow(-t,r);if(r<0){let s=1;return t<0&&(s=-1,t=-t),s*(t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4))}else{let s=1;return t<0&&(s=-1,t=-t),s*(t<=.08?2700*t/24389:(((1e6*t+48e4)*t+76800)*t+4096)/1560896)}}XYZ_to_RGB(t){let r=t;if(this.Adaptation!="None"){let[i,o,n]=A.Matrix.multiply_triple_times_3x3(this.Mtx_RefWhite,this.MtxAdp),[l,a,u]=A.Matrix.multiply_triple_times_3x3(this.Mtx_RefWhiteRGB,this.MtxAdp);r=A.Matrix.multiply_triple_times_3x3(t,A.Matrix.multiply_3x3_times_3x3(this.MtxAdp,A.Matrix.multiply_3x3_times_3x3([[l/i,0,0],[0,a/o,0],[0,0,u/n]],A.Matrix.inv(this.MtxAdp))))}return A.Matrix.multiply_triple_times_3x3(r,A.Matrix.inv(this.Mtx_RGB2XYZ)).map(i=>255*this.compand(i))}RGB_to_XYZ(t){t=t.map(s=>this.inverse_compand(s/255));let r=A.Matrix.multiply_triple_times_3x3(t,this.Mtx_RGB2XYZ);if(this.Adaptation!="None"){let[s,i,o]=A.Matrix.multiply_triple_times_3x3(this.Mtx_RefWhiteRGB,this.MtxAdp),[n,l,a]=A.Matrix.multiply_triple_times_3x3(this.Mtx_RefWhite,this.MtxAdp);return A.Matrix.multiply_triple_times_3x3(r,A.Matrix.multiply_3x3_times_3x3(this.MtxAdp,A.Matrix.multiply_3x3_times_3x3([[n/s,0,0],[0,l/i,0],[0,0,a/o]],A.Matrix.inv(this.MtxAdp))))}else return r}Lab_to_XYZ(t){let r=t[0],s=t[1],i=t[2],o=(r+16)/116,n=s/500+o,l=o-i/200,a=Math.pow(n,3)>this.kE?Math.pow(n,3):(116*n-16)/this.kK,u=r>this.kK*this.kE?Math.pow((r+16)/116,3):r/this.kK,d=Math.pow(l,3)>this.kE?Math.pow(l,3):(116*l-16)/this.kK,c=this.Mtx_RefWhite;return[a*c[0],u*c[1],d*c[2]]}XYZ_to_Lab(t){let r=t[0],s=t[1],i=t[2],o=this.Mtx_RefWhite,n=o[0],l=o[1],a=o[2],u=r/n,d=s/l,c=i/a,h=u>this.kE?Math.pow(u,1/3):(this.kK*u+16)/116,p=d>this.kE?Math.pow(d,1/3):(this.kK*d+16)/116,b=c>this.kE?Math.pow(c,1/3):(this.kK*c+16)/116;return[116*p-16,500*(h-p),200*(p-b)]}Lab_to_RGB(t){return this.XYZ_to_RGB(this.Lab_to_XYZ(t))}RGB_to_Lab(t){return this.XYZ_to_Lab(this.RGB_to_XYZ(t))}xyY_to_XYZ(t){let[r,s,i]=t;return s<1e-6?[0,0,0]:[r*i/s,i,(1-r-s)*i/s]}XYZ_to_xyY(t){let[r,s,i]=t,o=r+s+i;if(o>0)return[r/o,s/o,s];{let[n,l,a]=this.Mtx_RefWhite,u=n+l+a;return[n/u,l/u,s]}}Lab_to_LCHab(t){let[r,s,i]=t,o=180/Math.PI*Math.atan2(i,s);return[r,Math.sqrt(Math.pow(s,2)+Math.pow(i,2)),o+(o>=0?0:360)]}LCHab_to_Lab(t){let[r,s,i]=t;return[r,s*Math.cos(i*Math.PI/180),s*Math.sin(i*Math.PI/180)]}XYZ_to_LCHab(t){return this.Lab_to_LCHab(this.XYZ_to_Lab(t))}XYZ_to_Luv(t){let[r,s,i]=t,o=this.Mtx_RefWhite,n=o[0],l=o[1],a=o[2],u=r+15*s+3*i,d=u>0?4*r/u:0,c=u>0?9*s/u:0,h=4*n/(n+15*l+3*a),p=9*l/(n+15*l+3*a),b=s/l,g=b>this.kE?116*Math.pow(b,1/3)-16:this.kK*b;return[g,13*g*(d-h),13*g*(c-p)]}XYZ_to_LCHuv(t){return this.Luv_to_LCHuv(this.XYZ_to_Luv(t))}Luv_to_LCHuv(t){let[r,s,i]=t,o=180/Math.PI*Math.atan2(i,s);return[r,Math.sqrt(Math.pow(s,2)+Math.pow(i,2)),o+(o>=0?0:360)]}xyY_to_Lab(t){return this.XYZ_to_Lab(this.xyY_to_XYZ(t))}xyY_to_LCHab(t){return this.Lab_to_LCHab(this.XYZ_to_Lab(this.xyY_to_XYZ(t)))}xyY_to_Luv(t){return this.XYZ_to_Luv(this.xyY_to_XYZ(t))}xyY_to_LCHuv(t){return this.Luv_to_LCHuv(this.XYZ_to_Luv(this.xyY_to_XYZ(t)))}xyY_to_RGB(t){return this.XYZ_to_RGB(this.xyY_to_XYZ(t))}Lab_to_xyY(t){return this.XYZ_to_xyY(this.Lab_to_XYZ(t))}Lab_to_Luv(t){return this.XYZ_to_Luv(this.Lab_to_XYZ(t))}Lab_to_LCHuv(t){return this.Luv_to_LCHuv(this.Lab_to_Luv(t))}LCHab_to_XYZ(t){return this.Lab_to_XYZ(this.LCHab_to_Lab(t))}LCHab_to_xyY(t){return this.XYZ_to_xyY(this.Lab_to_XYZ(this.LCHab_to_Lab(t)))}LCHab_to_Luv(t){return this.XYZ_to_Luv(this.Lab_to_XYZ(this.LCHab_to_Lab(t)))}LCHab_to_LCHuv(t){return this.Luv_to_LCHuv(this.LCHab_to_Luv(t))}LCHab_to_RGB(t){return this.XYZ_to_RGB(this.LCHab_to_XYZ(t))}Luv_to_XYZ(t){let[r,s,i]=t,o=r>this.kK*this.kE?Math.pow((r+16)/116,3):r/this.kK,n=this.Mtx_RefWhite,l=n[0],a=n[1],u=n[2],d=l+15*a+3*u,c=9*a/d,h=4*l/d,p=o*(39*r/(i+13*r*c)-5),b=-1/3,g=-5*o,N=1/3*(52*r/(s+13*r*h)-1),M=(p-g)/(N-b),U=M*N+g;return[M,o,U]}Luv_to_xyY(t){return this.XYZ_to_xyY(this.Luv_to_XYZ(t))}Luv_to_Lab(t){return this.XYZ_to_Lab(this.Luv_to_XYZ(t))}Luv_to_LCHab(t){return this.Lab_to_LCHab(this.Luv_to_Lab(t))}Luv_to_RGB(t){return this.XYZ_to_RGB(this.Luv_to_XYZ(t))}LCHuv_to_Luv(t){let[r,s,i]=t;return[r,s*Math.cos(i*Math.PI/180),s*Math.sin(i*Math.PI/180)]}LCHuv_to_XYZ(t){return this.Luv_to_XYZ(this.LCHuv_to_Luv(t))}LCHuv_to_xyY(t){return this.XYZ_to_xyY(this.LCHuv_to_XYZ(t))}LCHuv_to_Lab(t){return this.XYZ_to_Lab(this.LCHuv_to_XYZ(t))}LCHuv_to_LCHab(t){return this.Lab_to_LCHab(this.LCHuv_to_Lab(t))}LCHuv_to_RGB(t){return this.XYZ_to_RGB(this.LCHuv_to_XYZ(t))}RGB_to_xyY(t){return this.XYZ_to_xyY(this.RGB_to_XYZ(t))}RGB_to_LCHab(t){return this.Lab_to_LCHab(this.RGB_to_Lab(t))}RGB_to_Luv(t){return this.XYZ_to_Luv(this.RGB_to_XYZ(t))}RGB_to_LCHuv(t){return this.Luv_to_LCHuv(this.RGB_to_Luv(t))}}zo=ge.ColorConverter=Yo;export{zo as C,qo as M,y as T,jo as a,Wo as b,er as c,Ko as f,Vo as i,Zo as n,os as o,Xo as p,xt as s,Fo as t};

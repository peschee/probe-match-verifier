var Un=Object.defineProperty,Hn=Object.defineProperties;var jn=Object.getOwnPropertyDescriptors;var rr=Object.getOwnPropertySymbols;var Vn=Object.prototype.hasOwnProperty,qn=Object.prototype.propertyIsEnumerable;var nr=(e,t,r)=>t in e?Un(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ye=(e,t)=>{for(var r in t||(t={}))Vn.call(t,r)&&nr(e,r,t[r]);if(rr)for(var r of rr(t))qn.call(t,r)&&nr(e,r,t[r]);return e},Ge=(e,t)=>Hn(e,jn(t));var Wn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Sa=Wn((Na,nt)=>{const Xn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}};Xn();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rn=Symbol(),sr=new Map;class Yn{constructor(t,r){if(this._$cssResult$=!0,r!==rn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=sr.get(this.cssText);return jt&&t===void 0&&(sr.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const nn=e=>new Yn(typeof e=="string"?e:e+"",rn),Gn=(e,t)=>{jt?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),s=window.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,e.appendChild(n)})},ir=jt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return nn(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ft;const or=window.trustedTypes,Zn=or?or.emptyScript:"",ar=window.reactiveElementPolyfillSupport,Pt={toAttribute(e,t){switch(t){case Boolean:e=e?Zn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},sn=(e,t)=>t!==e&&(t==t||e==e),gt={attribute:!0,type:String,converter:Pt,reflect:!1,hasChanged:sn};class le extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var r;(r=this.l)!==null&&r!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const s=this._$Eh(n,r);s!==void 0&&(this._$Eu.set(s,n),t.push(s))}),t}static createProperty(t,r=gt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,n,r);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(s){const i=this[t];this[r]=s,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||gt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const s of n)this.createProperty(s,r[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const s of n)r.unshift(ir(s))}else t!==void 0&&r.push(ir(t));return r}static _$Eh(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$Eg)!==null&&r!==void 0?r:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$Eg)===null||r===void 0||r.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Et.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Gn(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ES(t,r,n=gt){var s,i;const o=this.constructor._$Eh(t,n);if(o!==void 0&&n.reflect===!0){const a=((i=(s=n.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&i!==void 0?i:Pt.toAttribute)(r,n.type);this._$Ei=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Ei=null}}_$AK(t,r){var n,s,i;const o=this.constructor,a=o._$Eu.get(t);if(a!==void 0&&this._$Ei!==a){const l=o.getPropertyOptions(a),c=l.converter,h=(i=(s=(n=c)===null||n===void 0?void 0:n.fromAttribute)!==null&&s!==void 0?s:typeof c=="function"?c:null)!==null&&i!==void 0?i:Pt.fromAttribute;this._$Ei=a,this[a]=h(r,l.type),this._$Ei=null}}requestUpdate(t,r,n){let s=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||sn)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,i)=>this[i]=s),this._$Et=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$Eg)===null||t===void 0||t.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(n)):this._$EU()}catch(s){throw r=!1,this._$EU(),s}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$Eg)===null||r===void 0||r.forEach(n=>{var s;return(s=n.hostUpdated)===null||s===void 0?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$ES(n,this[n],r)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}le.finalized=!0,le.elementProperties=new Map,le.elementStyles=[],le.shadowRootOptions={mode:"open"},ar==null||ar({ReactiveElement:le}),((ft=globalThis.reactiveElementVersions)!==null&&ft!==void 0?ft:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bt;const he=globalThis.trustedTypes,lr=he?he.createPolicy("lit-html",{createHTML:e=>e}):void 0,Y=`lit$${(Math.random()+"").slice(9)}$`,on="?"+Y,Kn=`<${on}>`,pe=document,Le=(e="")=>pe.createComment(e),Be=e=>e===null||typeof e!="object"&&typeof e!="function",an=Array.isArray,Dn=e=>{var t;return an(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cr=/-->/g,ur=/>/g,ee=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,dr=/'/g,hr=/"/g,ln=/^(?:script|style|textarea|title)$/i,Qn=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),I=Qn(1),ne=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),pr=new WeakMap,Jn=(e,t,r)=>{var n,s;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let o=i._$litPart$;if(o===void 0){const a=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new He(t.insertBefore(Le(),a),a,void 0,r!=null?r:{})}return o._$AI(e),o},ue=pe.createTreeWalker(pe,129,null,!1),es=(e,t)=>{const r=e.length-1,n=[];let s,i=t===2?"<svg>":"",o=Ae;for(let l=0;l<r;l++){const c=e[l];let h,u,d=-1,p=0;for(;p<c.length&&(o.lastIndex=p,u=o.exec(c),u!==null);)p=o.lastIndex,o===Ae?u[1]==="!--"?o=cr:u[1]!==void 0?o=ur:u[2]!==void 0?(ln.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=ee):u[3]!==void 0&&(o=ee):o===ee?u[0]===">"?(o=s!=null?s:Ae,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?ee:u[3]==='"'?hr:dr):o===hr||o===dr?o=ee:o===cr||o===ur?o=Ae:(o=ee,s=void 0);const b=o===ee&&e[l+1].startsWith("/>")?" ":"";i+=o===Ae?c+Kn:d>=0?(n.push(h),c.slice(0,d)+"$lit$"+c.slice(d)+Y+b):c+Y+(d===-2?(n.push(void 0),l):b)}const a=i+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[lr!==void 0?lr.createHTML(a):a,n]};class Fe{constructor({strings:t,_$litType$:r},n){let s;this.parts=[];let i=0,o=0;const a=t.length-1,l=this.parts,[c,h]=es(t,r);if(this.el=Fe.createElement(c,n),ue.currentNode=this.el.content,r===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(s=ue.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const u=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(Y)){const p=h[o++];if(u.push(d),p!==void 0){const b=s.getAttribute(p.toLowerCase()+"$lit$").split(Y),y=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:y[2],strings:b,ctor:y[1]==="."?rs:y[1]==="?"?ss:y[1]==="@"?is:ot})}else l.push({type:6,index:i})}for(const d of u)s.removeAttribute(d)}if(ln.test(s.tagName)){const u=s.textContent.split(Y),d=u.length-1;if(d>0){s.textContent=he?he.emptyScript:"";for(let p=0;p<d;p++)s.append(u[p],Le()),ue.nextNode(),l.push({type:2,index:++i});s.append(u[d],Le())}}}else if(s.nodeType===8)if(s.data===on)l.push({type:2,index:i});else{let u=-1;for(;(u=s.data.indexOf(Y,u+1))!==-1;)l.push({type:7,index:i}),u+=Y.length-1}i++}}static createElement(t,r){const n=pe.createElement("template");return n.innerHTML=t,n}}function fe(e,t,r=e,n){var s,i,o,a;if(t===ne)return t;let l=n!==void 0?(s=r._$Cl)===null||s===void 0?void 0:s[n]:r._$Cu;const c=Be(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((o=(a=r)._$Cl)!==null&&o!==void 0?o:a._$Cl=[])[n]=l:r._$Cu=l),l!==void 0&&(t=fe(e,l._$AS(e,t.values),l,n)),t}class ts{constructor(t,r){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var r;const{el:{content:n},parts:s}=this._$AD,i=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:pe).importNode(n,!0);ue.currentNode=i;let o=ue.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let h;c.type===2?h=new He(o,o.nextSibling,this,t):c.type===1?h=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(h=new os(o,this,t)),this.v.push(h),c=s[++l]}a!==(c==null?void 0:c.index)&&(o=ue.nextNode(),a++)}return i}m(t){let r=0;for(const n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class He{constructor(t,r,n,s){var i;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=s,this._$Cg=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=fe(this,t,r),Be(t)?t===k||t==null||t===""?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==ne&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Dn(t)?this.S(t):this.$(t)}M(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==k&&Be(this._$AH)?this._$AA.nextSibling.data=t:this.k(pe.createTextNode(t)),this._$AH=t}T(t){var r;const{values:n,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Fe.createElement(s.h,this.options)),s);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.m(n);else{const o=new ts(i,this),a=o.p(this.options);o.m(n),this.k(a),this._$AH=o}}_$AC(t){let r=pr.get(t.strings);return r===void 0&&pr.set(t.strings,r=new Fe(t)),r}S(t){an(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,s=0;for(const i of t)s===r.length?r.push(n=new He(this.M(Le()),this.M(Le()),this,this.options)):n=r[s],n._$AI(i),s++;s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var r;this._$AM===void 0&&(this._$Cg=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class ot{constructor(t,r,n,s,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=r,this._$AM=s,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,s){const i=this.strings;let o=!1;if(i===void 0)t=fe(this,t,r,0),o=!Be(t)||t!==this._$AH&&t!==ne,o&&(this._$AH=t);else{const a=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=fe(this,a[n+l],r,l),c===ne&&(c=this._$AH[l]),o||(o=!Be(c)||c!==this._$AH[l]),c===k?t=k:t!==k&&(t+=(c!=null?c:"")+i[l+1]),this._$AH[l]=c}o&&!s&&this.C(t)}C(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class rs extends ot{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===k?void 0:t}}const ns=he?he.emptyScript:"";class ss extends ot{constructor(){super(...arguments),this.type=4}C(t){t&&t!==k?this.element.setAttribute(this.name,ns):this.element.removeAttribute(this.name)}}class is extends ot{constructor(t,r,n,s,i){super(t,r,n,s,i),this.type=5}_$AI(t,r=this){var n;if((t=(n=fe(this,t,r,0))!==null&&n!==void 0?n:k)===ne)return;const s=this._$AH,i=t===k&&s!==k||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==k&&(s===k||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class os{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){fe(this,t)}}const fr=window.litHtmlPolyfillSupport;fr==null||fr(Fe,He),((bt=globalThis.litHtmlVersions)!==null&&bt!==void 0?bt:globalThis.litHtmlVersions=[]).push("2.2.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mt,vt;class Re extends le{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Jn(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return ne}}Re.finalized=!0,Re._$litElement$=!0,(mt=globalThis.litElementHydrateSupport)===null||mt===void 0||mt.call(globalThis,{LitElement:Re});const gr=globalThis.litElementPolyfillSupport;gr==null||gr({LitElement:Re});((vt=globalThis.litElementVersions)!==null&&vt!==void 0?vt:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const as=e=>t=>typeof t=="function"?((r,n)=>(window.customElements.define(r,n),n))(e,t):((r,n)=>{const{kind:s,elements:i}=n;return{kind:s,elements:i,finisher(o){window.customElements.define(r,o)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ls=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Ge(Ye({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function cn(e){return(t,r)=>r!==void 0?((n,s,i)=>{s.constructor.createProperty(i,n)})(e,t,r):ls(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function je(e){return cn(Ge(Ye({},e),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cs=({finisher:e,descriptor:t})=>(r,n)=>{var s;if(n===void 0){const i=(s=r.originalKey)!==null&&s!==void 0?s:r.key,o=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(r.key)}:Ge(Ye({},r),{key:i});return e!=null&&(o.finisher=function(a){e(a,i)}),o}{const i=r.constructor;t!==void 0&&Object.defineProperty(r,n,t(n)),e==null||e(i,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Vt(e,t){return cs({descriptor:r=>{const n={get(){var s,i;return(i=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(t){const s=typeof r=="symbol"?Symbol():"__"+r;n.get=function(){var i,o;return this[s]===void 0&&(this[s]=(o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&o!==void 0?o:null),this[s]}}return n}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yt;((yt=window.HTMLSlotElement)===null||yt===void 0?void 0:yt.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const us={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ds=e=>(...t)=>({_$litDirective$:e,values:t});class hs{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ps=ds(class extends hs{constructor(e){var t;if(super(e),e.type!==us.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.et===void 0){this.et=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.st)===null||r===void 0)&&r.has(i))&&this.et.add(i);return this.render(t)}const s=e.element.classList;this.et.forEach(i=>{i in t||(s.remove(i),this.et.delete(i))});for(const i in t){const o=!!t[i];o===this.et.has(i)||((n=this.st)===null||n===void 0?void 0:n.has(i))||(o?(s.add(i),this.et.add(i)):(s.remove(i),this.et.delete(i)))}return ne}}),qt=(()=>{if(typeof self=="undefined")return!1;if("top"in self&&self!==top)try{}catch{return!1}else if("showOpenFilePicker"in self)return"showOpenFilePicker";return!1})(),fs=qt?Promise.resolve().then(function(){return ms}):Promise.resolve().then(function(){return _s});async function br(...e){return(await fs).default(...e)}qt?Promise.resolve().then(function(){return ys}):Promise.resolve().then(function(){return As});qt?Promise.resolve().then(function(){return $s}):Promise.resolve().then(function(){return Ss});const gs=async e=>{const t=await e.getFile();return t.handle=e,t};var bs=async(e=[{}])=>{Array.isArray(e)||(e=[e]);const t=[];e.forEach((s,i)=>{t[i]={description:s.description||"",accept:{}},s.mimeTypes?s.mimeTypes.map(o=>{t[i].accept[o]=s.extensions||[]}):t[i].accept["*/*"]=s.extensions||[]});const r=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),n=await Promise.all(r.map(gs));return e[0].multiple?n:n[0]},ms={__proto__:null,default:bs};function Je(e){function t(r){if(Object(r)!==r)return Promise.reject(new TypeError(r+" is not an object."));var n=r.done;return Promise.resolve(r.value).then(function(s){return{value:s,done:n}})}return Je=function(r){this.s=r,this.n=r.next},Je.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(r){var n=this.s.return;return n===void 0?Promise.resolve({value:r,done:!0}):t(n.apply(this.s,arguments))},throw:function(r){var n=this.s.return;return n===void 0?Promise.reject(r):t(n.apply(this.s,arguments))}},new Je(e)}const un=async(e,t,r=e.name,n)=>{const s=[],i=[];var o,a=!1,l=!1;try{for(var c,h=function(u){var d,p,b,y=2;for(typeof Symbol!="undefined"&&(p=Symbol.asyncIterator,b=Symbol.iterator);y--;){if(p&&(d=u[p])!=null)return d.call(u);if(b&&(d=u[b])!=null)return new Je(d.call(u));p="@@asyncIterator",b="@@iterator"}throw new TypeError("Object is not async iterable")}(e.values());a=!(c=await h.next()).done;a=!1){const u=c.value,d=`${r}/${u.name}`;u.kind==="file"?i.push(u.getFile().then(p=>(p.directoryHandle=e,p.handle=u,Object.defineProperty(p,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>d})))):u.kind!=="directory"||!t||n&&n(u)||s.push(un(u,t,d,n))}}catch(u){l=!0,o=u}finally{try{a&&h.return!=null&&await h.return()}finally{if(l)throw o}}return[...(await Promise.all(s)).flat(),...await Promise.all(i)]};var vs=async(e={})=>{e.recursive=e.recursive||!1;const t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn});return un(t,e.recursive,void 0,e.skipDirectory)},ys={__proto__:null,default:vs},ws=async(e,t=[{}],r=null,n=!1,s=null)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";const i=[];let o=null;if(e instanceof Blob&&e.type?o=e.type:e.headers&&e.headers.get("content-type")&&(o=e.headers.get("content-type")),t.forEach((c,h)=>{i[h]={description:c.description||"",accept:{}},c.mimeTypes?(h===0&&o&&c.mimeTypes.push(o),c.mimeTypes.map(u=>{i[h].accept[u]=c.extensions||[]})):o&&(i[h].accept[o]=c.extensions||[])}),r)try{await r.getFile()}catch(c){if(r=null,n)throw c}const a=r||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:i,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1});!r&&s&&s();const l=await a.createWritable();return"stream"in e?(await e.stream().pipeTo(l),a):"body"in e?(await e.body.pipeTo(l),a):(await l.write(await e),await l.close(),a)},$s={__proto__:null,default:ws},xs=async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,r)=>{const n=document.createElement("input");n.type="file";const s=[...e.map(a=>a.mimeTypes||[]),...e.map(a=>a.extensions||[])].join();n.multiple=e[0].multiple||!1,n.accept=s||"";const i=a=>{typeof o=="function"&&o(),t(a)},o=e[0].legacySetup&&e[0].legacySetup(i,()=>o(r),n);n.addEventListener("change",()=>{i(n.multiple?Array.from(n.files):n.files[0])}),n.click()})),_s={__proto__:null,default:xs},ks=async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,r)=>{const n=document.createElement("input");n.type="file",n.webkitdirectory=!0;const s=o=>{typeof i=="function"&&i(),t(o)},i=e[0].legacySetup&&e[0].legacySetup(s,()=>i(r),n);n.addEventListener("change",()=>{let o=Array.from(n.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(o=o.filter(a=>a.webkitRelativePath.split("/").every(l=>!e[0].skipDirectory({name:l,kind:"directory"})))):o=o.filter(a=>a.webkitRelativePath.split("/").length===2),s(o)}),n.click()})),As={__proto__:null,default:ks},Es=async(e,t={})=>{Array.isArray(t)&&(t=t[0]);const r=document.createElement("a");let n=e;"body"in e&&(n=await async function(o,a){const l=o.getReader(),c=new ReadableStream({start:d=>async function p(){return l.read().then(({done:b,value:y})=>{if(!b)return d.enqueue(y),p();d.close()})}()}),h=new Response(c),u=await h.blob();return l.releaseLock(),new Blob([u],{type:a})}(e.body,e.headers.get("content-type"))),r.download=t.fileName||"Untitled",r.href=URL.createObjectURL(await n);const s=()=>{typeof i=="function"&&i()},i=t.legacySetup&&t.legacySetup(s,()=>i(),r);return r.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(r.href),3e4),s()}),r.click(),null},Ss={__proto__:null,default:Es},dn="";function zt(e){dn=e}function Cs(){return dn.replace(/\/$/,"")}var hn=[...document.getElementsByTagName("script")],mr=hn.find(e=>e.hasAttribute("data-shoelace"));if(mr)zt(mr.getAttribute("data-shoelace"));else{const e=hn.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src));let t="";e&&(t=e.getAttribute("src")),zt(t.split("/").slice(0,-1).join("/"))}var pn=Object.defineProperty,Ns=Object.defineProperties,Ts=Object.getOwnPropertyDescriptor,Ps=Object.getOwnPropertyDescriptors,vr=Object.getOwnPropertySymbols,zs=Object.prototype.hasOwnProperty,Os=Object.prototype.propertyIsEnumerable,yr=(e,t,r)=>t in e?pn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,se=(e,t)=>{for(var r in t||(t={}))zs.call(t,r)&&yr(e,r,t[r]);if(vr)for(var r of vr(t))Os.call(t,r)&&yr(e,r,t[r]);return e},at=(e,t)=>Ns(e,Ps(t)),g=(e,t,r,n)=>{for(var s=n>1?void 0:n?Ts(t,r):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(n?o(t,r,s):o(s))||s);return n&&s&&pn(t,r,s),s},Wt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xt=Symbol(),wr=new Map,fn=class{constructor(e,t){if(this._$cssResult$=!0,t!==Xt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=wr.get(this.cssText);return Wt&&e===void 0&&(wr.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},gn=e=>new fn(typeof e=="string"?e:e+"",Xt),ie=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,s,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new fn(r,Xt)},Rs=(e,t)=>{Wt?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),s=window.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,e.appendChild(n)})},$r=Wt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return gn(r)})(e):e,wt,xr=window.trustedTypes,Is=xr?xr.emptyScript:"",_r=window.reactiveElementPolyfillSupport,Ot={toAttribute(e,t){switch(t){case Boolean:e=e?Is:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},bn=(e,t)=>t!==e&&(t==t||e==e),$t={attribute:!0,type:String,converter:Ot,reflect:!1,hasChanged:bn},ce=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const n=this._$Eh(r,t);n!==void 0&&(this._$Eu.set(n,r),e.push(n))}),e}static createProperty(e,t=$t){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){const s=this[e];this[t]=n,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||$t}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of r)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift($r(n))}else e!==void 0&&t.push($r(e));return t}static _$Eh(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Rs(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=$t){var n,s;const i=this.constructor._$Eh(e,r);if(i!==void 0&&r.reflect===!0){const o=((s=(n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&s!==void 0?s:Ot.toAttribute)(t,r.type);this._$Ei=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Ei=null}}_$AK(e,t){var r,n,s;const i=this.constructor,o=i._$Eu.get(e);if(o!==void 0&&this._$Ei!==o){const a=i.getPropertyOptions(o),l=a.converter,c=(s=(n=(r=l)===null||r===void 0?void 0:r.fromAttribute)!==null&&n!==void 0?n:typeof l=="function"?l:null)!==null&&s!==void 0?s:Ot.fromAttribute;this._$Ei=o,this[o]=c(t,a.type),this._$Ei=null}}requestUpdate(e,t,r){let n=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||bn)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Ei!==e&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,s)=>this[s]=n),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$Eg)===null||e===void 0||e.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(r)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$E_!==void 0&&(this._$E_.forEach((t,r)=>this._$ES(r,this[r],t)),this._$E_=void 0),this._$EU()}updated(e){}firstUpdated(e){}};ce.finalized=!0,ce.elementProperties=new Map,ce.elementStyles=[],ce.shadowRootOptions={mode:"open"},_r==null||_r({ReactiveElement:ce}),((wt=globalThis.reactiveElementVersions)!==null&&wt!==void 0?wt:globalThis.reactiveElementVersions=[]).push("1.2.3");var xt,ge=globalThis.trustedTypes,kr=ge?ge.createPolicy("lit-html",{createHTML:e=>e}):void 0,G=`lit$${(Math.random()+"").slice(9)}$`,mn="?"+G,Ls=`<${mn}>`,be=document,Me=(e="")=>be.createComment(e),Ue=e=>e===null||typeof e!="object"&&typeof e!="function",vn=Array.isArray,Bs=e=>{var t;return vn(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ar=/-->/g,Er=/>/g,te=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Sr=/'/g,Cr=/"/g,yn=/^(?:script|style|textarea|title)$/i,Fs=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),q=Fs(1),Z=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),Nr=new WeakMap,Ms=(e,t,r)=>{var n,s;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let o=i._$litPart$;if(o===void 0){const a=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new lt(t.insertBefore(Me(),a),a,void 0,r!=null?r:{})}return o._$AI(e),o},de=be.createTreeWalker(be,129,null,!1),Us=(e,t)=>{const r=e.length-1,n=[];let s,i=t===2?"<svg>":"",o=Ee;for(let l=0;l<r;l++){const c=e[l];let h,u,d=-1,p=0;for(;p<c.length&&(o.lastIndex=p,u=o.exec(c),u!==null);)p=o.lastIndex,o===Ee?u[1]==="!--"?o=Ar:u[1]!==void 0?o=Er:u[2]!==void 0?(yn.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=te):u[3]!==void 0&&(o=te):o===te?u[0]===">"?(o=s!=null?s:Ee,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?te:u[3]==='"'?Cr:Sr):o===Cr||o===Sr?o=te:o===Ar||o===Er?o=Ee:(o=te,s=void 0);const b=o===te&&e[l+1].startsWith("/>")?" ":"";i+=o===Ee?c+Ls:d>=0?(n.push(h),c.slice(0,d)+"$lit$"+c.slice(d)+G+b):c+G+(d===-2?(n.push(void 0),l):b)}const a=i+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[kr!==void 0?kr.createHTML(a):a,n]},st=class{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let s=0,i=0;const o=e.length-1,a=this.parts,[l,c]=Us(e,t);if(this.el=st.createElement(l,r),de.currentNode=this.el.content,t===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=de.nextNode())!==null&&a.length<o;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(G)){const d=c[i++];if(h.push(u),d!==void 0){const p=n.getAttribute(d.toLowerCase()+"$lit$").split(G),b=/([.?@])?(.*)/.exec(d);a.push({type:1,index:s,name:b[2],strings:p,ctor:b[1]==="."?js:b[1]==="?"?qs:b[1]==="@"?Ws:ct})}else a.push({type:6,index:s})}for(const u of h)n.removeAttribute(u)}if(yn.test(n.tagName)){const h=n.textContent.split(G),u=h.length-1;if(u>0){n.textContent=ge?ge.emptyScript:"";for(let d=0;d<u;d++)n.append(h[d],Me()),de.nextNode(),a.push({type:2,index:++s});n.append(h[u],Me())}}}else if(n.nodeType===8)if(n.data===mn)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(G,h+1))!==-1;)a.push({type:7,index:s}),h+=G.length-1}s++}}static createElement(e,t){const r=be.createElement("template");return r.innerHTML=e,r}};function me(e,t,r=e,n){var s,i,o,a;if(t===Z)return t;let l=n!==void 0?(s=r._$Cl)===null||s===void 0?void 0:s[n]:r._$Cu;const c=Ue(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((o=(a=r)._$Cl)!==null&&o!==void 0?o:a._$Cl=[])[n]=l:r._$Cu=l),l!==void 0&&(t=me(e,l._$AS(e,t.values),l,n)),t}var Hs=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:n}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:be).importNode(r,!0);de.currentNode=s;let i=de.nextNode(),o=0,a=0,l=n[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new lt(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new Xs(i,this,e)),this.v.push(c),l=n[++a]}o!==(l==null?void 0:l.index)&&(i=de.nextNode(),o++)}return s}m(e){let t=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},lt=class{constructor(e,t,r,n){var s;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cg=(s=n==null?void 0:n.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=me(this,e,t),Ue(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==Z&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.S(e):Bs(e)?this.A(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==S&&Ue(this._$AH)?this._$AA.nextSibling.data=e:this.S(be.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=st.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.m(r);else{const i=new Hs(s,this),o=i.p(this.options);i.m(r),this.S(o),this._$AH=i}}_$AC(e){let t=Nr.get(e.strings);return t===void 0&&Nr.set(e.strings,t=new st(e)),t}A(e){vn(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const s of e)n===t.length?t.push(r=new lt(this.M(Me()),this.M(Me()),this,this.options)):r=t[n],r._$AI(s),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},ct=class{constructor(e,t,r,n,s){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const s=this.strings;let i=!1;if(s===void 0)e=me(this,e,t,0),i=!Ue(e)||e!==this._$AH&&e!==Z,i&&(this._$AH=e);else{const o=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=me(this,o[r+a],t,a),l===Z&&(l=this._$AH[a]),i||(i=!Ue(l)||l!==this._$AH[a]),l===S?e=S:e!==S&&(e+=(l!=null?l:"")+s[a+1]),this._$AH[a]=l}i&&!n&&this.k(e)}k(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},js=class extends ct{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===S?void 0:e}},Vs=ge?ge.emptyScript:"",qs=class extends ct{constructor(){super(...arguments),this.type=4}k(e){e&&e!==S?this.element.setAttribute(this.name,Vs):this.element.removeAttribute(this.name)}},Ws=class extends ct{constructor(e,t,r,n,s){super(e,t,r,n,s),this.type=5}_$AI(e,t=this){var r;if((e=(r=me(this,e,t,0))!==null&&r!==void 0?r:S)===Z)return;const n=this._$AH,s=e===S&&n!==S||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==S&&(n===S||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Xs=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){me(this,e)}},Tr=window.litHtmlPolyfillSupport;Tr==null||Tr(st,lt),((xt=globalThis.litHtmlVersions)!==null&&xt!==void 0?xt:globalThis.litHtmlVersions=[]).push("2.1.3");var _t,kt,U=class extends ce{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Ms(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Z}};U.finalized=!0,U._$litElement$=!0,(_t=globalThis.litElementHydrateSupport)===null||_t===void 0||_t.call(globalThis,{LitElement:U});var Pr=globalThis.litElementPolyfillSupport;Pr==null||Pr({LitElement:U});((kt=globalThis.litElementVersions)!==null&&kt!==void 0?kt:globalThis.litElementVersions=[]).push("3.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zr=(e,...t)=>({_$litStatic$:t.reduce((r,n,s)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[s+1],e[0])}),Or=new Map,Ys=e=>(t,...r)=>{var n;const s=r.length;let i,o;const a=[],l=[];let c,h=0,u=!1;for(;h<s;){for(c=t[h];h<s&&(o=r[h],(i=(n=o)===null||n===void 0?void 0:n._$litStatic$)!==void 0);)c+=i+t[++h],u=!0;l.push(o),a.push(c),h++}if(h===s&&a.push(t[s]),u){const d=a.join("$$lit$$");(t=Or.get(d))===void 0&&(a.raw=a,Or.set(d,t=a)),r=l}return e(t,...r)},At=Ys(q);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gs=(()=>{const e=document.createElement("style");let t;try{document.head.appendChild(e),e.sheet.insertRule(":focus-visible { color: inherit }"),t=!0}catch{t=!1}finally{e.remove()}return t})(),O=gn(Gs?":focus-visible":":focus"),ye=ie`
  :host {
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
`,Zs=ie`
  ${ye}

  :host {
    display: inline-block;
    position: relative;
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
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
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

  .button--standard.button--default${O}:not(.button--disabled) {
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

  .button--standard.button--primary${O}:not(.button--disabled) {
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

  .button--standard.button--success${O}:not(.button--disabled) {
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

  .button--standard.button--neutral${O}:not(.button--disabled) {
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

  .button--standard.button--warning${O}:not(.button--disabled) {
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

  .button--standard.button--danger${O}:not(.button--disabled) {
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

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default${O}:not(.button--disabled) {
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

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary${O}:not(.button--disabled) {
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

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success${O}:not(.button--disabled) {
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

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral${O}:not(.button--disabled) {
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

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning${O}:not(.button--disabled) {
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

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger${O}:not(.button--disabled) {
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

  .button--text${O}:not(.button--disabled) {
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

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Ks=class extends Event{constructor(e){super("formdata"),this.formData=e}},Ds=class extends FormData{constructor(e){super(e),this.form=e,e.dispatchEvent(new Ks(this))}append(e,t){let r=this.form.elements[e];if(r||(r=document.createElement("input"),r.type="hidden",r.name=e,this.form.appendChild(r)),this.has(e)){const n=this.getAll(e),s=n.indexOf(r.value);s!==-1&&n.splice(s,1),n.push(t),this.set(e,n)}else super.append(e,t);r.value=t}};function Qs(){const e=document.createElement("form");let t=!1;return document.body.append(e),e.addEventListener("submit",r=>{new FormData(r.target),r.preventDefault()}),e.addEventListener("formdata",()=>t=!0),e.dispatchEvent(new Event("submit",{cancelable:!0})),e.remove(),t}function Rr(){!window.FormData||Qs()||(window.FormData=Ds,window.addEventListener("submit",e=>{e.defaultPrevented||new FormData(e.target)}))}document.readyState==="complete"?Rr():window.addEventListener("DOMContentLoaded",()=>Rr());var Js=class{constructor(e,t){(this.host=e).addController(this),this.options=se({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,disabled:r=>r.disabled,reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this)}hostConnected(){document.addEventListener("formdata",this.handleFormData,{capture:!0}),document.addEventListener("submit",this.handleFormSubmit,{capture:!0})}hostDisconnected(){document.removeEventListener("formdata",this.handleFormData,{capture:!0}),document.removeEventListener("submit",this.handleFormSubmit,{capture:!0})}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),n=this.options.value(this.host);!t&&typeof r=="string"&&typeof n!="undefined"&&(Array.isArray(n)?n.forEach(s=>{e.formData.append(r,s.toString())}):e.formData.append(r,n.toString()))}handleFormSubmit(e){const t=this.options.form(this.host),r=this.options.disabled(this.host),n=this.options.reportValidity;e.target===t&&!r&&!(t!=null&&t.noValidate)&&!n(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}submit(e){const t=this.options.form(this.host);if(t){const r=document.createElement("button");r.type="submit",r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",e&&["formaction","formmethod","formnovalidate","formtarget"].forEach(n=>{e.hasAttribute(n)&&r.setAttribute(n,e.getAttribute(n))}),t.append(r),r.click(),r.remove()}}},wn=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},$n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},xn=e=>(...t)=>({_$litDirective$:e,values:t}),_n=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ut=xn(class extends _n{constructor(e){var t;if(super(e),e.type!==$n.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.et=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.et)===null||r===void 0)&&r.has(i))&&this.st.add(i);return this.render(t)}const s=e.element.classList;this.st.forEach(i=>{i in t||(s.remove(i),this.st.delete(i))});for(const i in t){const o=!!t[i];o===this.st.has(i)||((n=this.et)===null||n===void 0?void 0:n.has(i))||(o?(s.add(i),this.st.add(i)):(s.remove(i),this.st.delete(i)))}return Z}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var N=e=>e!=null?e:S;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L(e,t,r){const n=new CustomEvent(t,se({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return e.dispatchEvent(n),n}function Ir(e,t){return new Promise(r=>{function n(s){s.target===e&&(e.removeEventListener(t,n),r())}e.addEventListener(t,n)})}var we=e=>t=>typeof t=="function"?((r,n)=>(window.customElements.define(r,n),n))(e,t):((r,n)=>{const{kind:s,elements:i}=n;return{kind:s,elements:i,finisher(o){window.customElements.define(r,o)}}})(e,t),ei=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?at(se({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function w(e){return(t,r)=>r!==void 0?((n,s,i)=>{s.constructor.createProperty(i,n)})(e,t,r):ei(e,t)}function kn(e){return w(at(se({},e),{state:!0}))}var ti=({finisher:e,descriptor:t})=>(r,n)=>{var s;if(n===void 0){const i=(s=r.originalKey)!==null&&s!==void 0?s:r.key,o=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(r.key)}:at(se({},r),{key:i});return e!=null&&(o.finisher=function(a){e(a,i)}),o}{const i=r.constructor;t!==void 0&&Object.defineProperty(r,n,t(n)),e==null||e(i,n)}};function Ve(e,t){return ti({descriptor:r=>{const n={get(){var s,i;return(i=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(t){const s=typeof r=="symbol"?Symbol():"__"+r;n.get=function(){var i,o;return this[s]===void 0&&(this[s]=(o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&o!==void 0?o:null),this[s]}}return n}})}var Et;((Et=window.HTMLSlotElement)===null||Et===void 0?void 0:Et.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var A=class extends U{constructor(){super(...arguments),this.formSubmitController=new Js(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")}}),this.hasSlotController=new wn(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,L(this,"sl-blur")}handleFocus(){this.hasFocus=!0,L(this,"sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this)}render(){const e=!!this.href,t=e?zr`a`:zr`button`;return At`
      <${t}
        part="base"
        class=${ut({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${N(e?void 0:this.disabled)}
        type=${this.type}
        name=${N(e?void 0:this.name)}
        value=${N(e?void 0:this.value)}
        href=${N(this.href)}
        target=${N(this.target)}
        download=${N(this.download)}
        rel=${N(this.target?"noreferrer noopener":void 0)}
        role="button"
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?At`
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
        ${this.loading?At`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};A.styles=Zs;g([Ve(".button")],A.prototype,"button",2);g([kn()],A.prototype,"hasFocus",2);g([w({reflect:!0})],A.prototype,"variant",2);g([w({reflect:!0})],A.prototype,"size",2);g([w({type:Boolean,reflect:!0})],A.prototype,"caret",2);g([w({type:Boolean,reflect:!0})],A.prototype,"disabled",2);g([w({type:Boolean,reflect:!0})],A.prototype,"loading",2);g([w({type:Boolean,reflect:!0})],A.prototype,"outline",2);g([w({type:Boolean,reflect:!0})],A.prototype,"pill",2);g([w({type:Boolean,reflect:!0})],A.prototype,"circle",2);g([w()],A.prototype,"type",2);g([w()],A.prototype,"name",2);g([w()],A.prototype,"value",2);g([w()],A.prototype,"href",2);g([w()],A.prototype,"target",2);g([w()],A.prototype,"download",2);g([w()],A.prototype,"form",2);g([w({attribute:"formaction"})],A.prototype,"formAction",2);g([w({attribute:"formmethod"})],A.prototype,"formMethod",2);g([w({attribute:"formnovalidate",type:Boolean})],A.prototype,"formNoValidate",2);g([w({attribute:"formtarget"})],A.prototype,"formTarget",2);A=g([we("sl-button")],A);var ri=ie`
  ${ye}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

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
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Rt=class extends U{render(){return q`
      <svg part="base" class="spinner" role="status">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Rt.styles=ri;Rt=g([we("sl-spinner")],Rt);var ni=ie`
  ${ye}

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
`,ve=class extends U{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return q`
      <span
        part="base"
        class=${ut({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};ve.styles=ni;g([w({reflect:!0})],ve.prototype,"variant",2);g([w({type:Boolean,reflect:!0})],ve.prototype,"pill",2);g([w({type:Boolean,reflect:!0})],ve.prototype,"pulse",2);ve=g([we("sl-badge")],ve);function Lr(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function si(e){var t,r;const n=[];function s(a){a instanceof HTMLElement&&(n.push(a),a.shadowRoot!==null&&a.shadowRoot.mode==="open"&&s(a.shadowRoot)),[...a.querySelectorAll("*")].forEach(l=>s(l))}s(e);const i=(t=n.find(a=>Lr(a)))!=null?t:null,o=(r=n.reverse().find(a=>Lr(a)))!=null?r:null;return{start:i,end:o}}var Se=[],ii=class{constructor(e){this.tabDirection="forward",this.element=e,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Se.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Se=Se.filter(e=>e!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Se[Se.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:e,end:t}=si(this.element),r=this.tabDirection==="forward"?e:t;typeof(r==null?void 0:r.focus)=="function"&&r.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(e){e.key==="Tab"&&e.shiftKey&&(this.tabDirection="backward"),requestAnimationFrame(()=>this.checkFocus())}handleKeyUp(){this.tabDirection="forward"}},It=new Set;function Br(e){It.add(e),document.body.classList.add("sl-scroll-lock")}function Fr(e){It.delete(e),It.size===0&&document.body.classList.remove("sl-scroll-lock")}var Lt=new Set,oi=new MutationObserver(An),Bt=new Map,ze=document.documentElement.lang||navigator.language,Ie;oi.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});function ai(...e){e.map(t=>{const r=t.$code.toLowerCase();Bt.set(r,t),Ie||(Ie=t)}),An()}function li(e,t,...r){const n=e.toLowerCase().slice(0,2),s=e.length>2?e.toLowerCase():"",i=Bt.get(s),o=Bt.get(n);let a;if(i&&i[t])a=i[t];else if(o&&o[t])a=o[t];else if(Ie&&Ie[t])a=Ie[t];else return console.error(`No translation found for: ${t}`),t;return typeof a=="function"?a(...r):a}function ci(e,t,r){return t=new Date(t),new Intl.DateTimeFormat(e,r).format(t)}function ui(e,t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(e,r).format(t)}function di(e,t,r,n){return new Intl.RelativeTimeFormat(e,n).format(t,r)}function An(){ze=document.documentElement.lang||navigator.language,[...Lt.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var hi=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Lt.add(this.host)}hostDisconnected(){Lt.delete(this.host)}term(e,...t){return li(this.host.lang||ze,e,...t)}date(e,t){return ci(this.host.lang||ze,e,t)}number(e,t){return ui(this.host.lang||ze,e,t)}relativeTime(e,t,r){return di(this.host.lang||ze,e,t,r)}},pi={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};ai(pi);var fi=ie`
  ${ye}

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
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
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
`;function Ce(e,t,r){return new Promise(n=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,at(se({},r),{duration:gi()?0:r.duration}));s.addEventListener("cancel",n,{once:!0}),s.addEventListener("finish",n,{once:!0})})}function gi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ze(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const n=requestAnimationFrame(r);t.addEventListener("cancel",()=>n,{once:!0}),t.addEventListener("finish",()=>n,{once:!0}),t.cancel()})))}var En=new Map,bi=new WeakMap;function mi(e){return e!=null?e:{keyframes:[],options:{duration:0}}}function qe(e,t){En.set(e,mi(t))}function Ne(e,t){const r=bi.get(e);if(r!=null&&r[t])return r[t];const n=En.get(t);return n||{keyframes:[],options:{duration:0}}}function et(e,t){const r=se({waitUntilFirstUpdate:!1},t);return(n,s)=>{const{update:i}=n;if(e in n){const o=e;n.update=function(a){if(a.has(o)){const l=a.get(o),c=this[o];l!==c&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[s](l,c)}i.call(this,a)}}}}var H=class extends U{constructor(){super(...arguments),this.hasSlotController=new wn(this,"footer"),this.localize=new hi(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.modal=new ii(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.modal.activate(),Br(this))}disconnectedCallback(){super.disconnectedCallback(),Fr(this)}async show(){if(!this.open)return this.open=!0,Ir(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,Ir(this,"sl-after-hide")}requestClose(e){if(L(this,"sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=Ne(this,"dialog.denyClose");Ce(this.panel,r.keyframes,r.options);return}this.hide()}handleKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){L(this,"sl-show"),this.originalTrigger=document.activeElement,this.modal.activate(),Br(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Ze(this.dialog),Ze(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{L(this,"sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Ne(this,"dialog.show"),r=Ne(this,"dialog.overlay.show");await Promise.all([Ce(this.panel,t.keyframes,t.options),Ce(this.overlay,r.keyframes,r.options)]),L(this,"sl-after-show")}else{L(this,"sl-hide"),this.modal.deactivate(),await Promise.all([Ze(this.dialog),Ze(this.overlay)]);const e=Ne(this,"dialog.hide"),t=Ne(this,"dialog.overlay.hide");await Promise.all([Ce(this.panel,e.keyframes,e.options),Ce(this.overlay,t.keyframes,t.options)]),this.dialog.hidden=!0,Fr(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),L(this,"sl-after-hide")}}render(){return q`
      <div
        part="base"
        class=${ut({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${N(this.noHeader?this.label:void 0)}
          aria-labelledby=${N(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":q`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <sl-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="dialog__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click="${()=>this.requestClose("close-button")}"
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};H.styles=fi;g([Ve(".dialog")],H.prototype,"dialog",2);g([Ve(".dialog__panel")],H.prototype,"panel",2);g([Ve(".dialog__overlay")],H.prototype,"overlay",2);g([w({type:Boolean,reflect:!0})],H.prototype,"open",2);g([w({reflect:!0})],H.prototype,"label",2);g([w({attribute:"no-header",type:Boolean,reflect:!0})],H.prototype,"noHeader",2);g([et("open",{waitUntilFirstUpdate:!0})],H.prototype,"handleOpenChange",1);H=g([we("sl-dialog")],H);qe("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});qe("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});qe("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:250}});qe("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});qe("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var vi=ie`
  ${ye}

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

  .icon-button${O} {
    box-shadow: var(--sl-focus-ring);
  }
`,B=class extends U{constructor(){super(...arguments),this.label="",this.disabled=!1}render(){const e=!!this.href,t=q`
      <sl-icon
        name=${N(this.name)}
        library=${N(this.library)}
        src=${N(this.src)}
        aria-hidden="true"
      ></sl-icon>
    `;return e?q`
          <a
            part="base"
            class="icon-button"
            href=${N(this.href)}
            target=${N(this.target)}
            download=${N(this.download)}
            rel=${N(this.target?"noreferrer noopener":void 0)}
            role="button"
            aria-disabled=${this.disabled?"true":"false"}
            aria-label="${this.label}"
            tabindex=${this.disabled?"-1":"0"}
          >
            ${t}
          </a>
        `:q`
          <button
            part="base"
            class=${ut({"icon-button":!0,"icon-button--disabled":this.disabled})}
            ?disabled=${this.disabled}
            type="button"
            aria-label=${this.label}
          >
            ${t}
          </button>
        `}};B.styles=vi;g([Ve(".icon-button")],B.prototype,"button",2);g([w()],B.prototype,"name",2);g([w()],B.prototype,"library",2);g([w()],B.prototype,"src",2);g([w()],B.prototype,"href",2);g([w()],B.prototype,"target",2);g([w()],B.prototype,"download",2);g([w()],B.prototype,"label",2);g([w({type:Boolean,reflect:!0})],B.prototype,"disabled",2);B=g([we("sl-icon-button")],B);var yi={name:"default",resolver:e=>`${Cs()}/assets/icons/${e}.svg`},wi=yi,Mr={"check-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
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
  `},$i={name:"system",resolver:e=>e in Mr?`data:image/svg+xml,${encodeURIComponent(Mr[e])}`:""},xi=$i,_i=[wi,xi],Ft=[];function ki(e){Ft.push(e)}function Ai(e){Ft=Ft.filter(t=>t!==e)}function Ur(e){return _i.find(t=>t.name===e)}var St=new Map;function Ei(e,t="cors"){if(St.has(e))return St.get(e);const r=fetch(e,{mode:t}).then(async n=>({ok:n.ok,status:n.status,html:await n.text()}));return St.set(e,r),r}var Ct=new Map;async function Si(e){if(Ct.has(e))return Ct.get(e);const t=await Ei(e),r={ok:t.ok,status:t.status,svg:null};if(t.ok){const n=document.createElement("div");n.innerHTML=t.html;const s=n.firstElementChild;r.svg=(s==null?void 0:s.tagName.toLowerCase())==="svg"?s.outerHTML:""}return Ct.set(e,r),r}var Ci=ie`
  ${ye}

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
`,Mt=class extends _n{constructor(e){if(super(e),this.it=S,e.type!==$n.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===S||e==null)return this.vt=void 0,this.it=e;if(e===Z)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.vt;this.it=e;const t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Mt.directiveName="unsafeHTML",Mt.resultType=1;var Ut=class extends Mt{};Ut.directiveName="unsafeSVG",Ut.resultType=2;var Ni=xn(Ut),Ti=new DOMParser,W=class extends U{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),ki(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ai(this)}getUrl(){const e=Ur(this.library);return this.name&&e?e.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var e;const t=Ur(this.library),r=this.getUrl();if(r)try{const n=await Si(r);if(r!==this.getUrl())return;if(n.ok){const i=Ti.parseFromString(n.svg,"text/html").body.querySelector("svg");i!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,i),this.svg=i.outerHTML,L(this,"sl-load")):(this.svg="",L(this,"sl-error"))}else this.svg="",L(this,"sl-error")}catch{L(this,"sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const e=typeof this.label=="string"&&this.label.length>0;return q` <div
      part="base"
      class="icon"
      role=${N(e?"img":void 0)}
      aria-label=${N(e?this.label:void 0)}
      aria-hidden=${N(e?void 0:"true")}
    >
      ${Ni(this.svg)}
    </div>`}};W.styles=Ci;g([kn()],W.prototype,"svg",2);g([w()],W.prototype,"name",2);g([w()],W.prototype,"src",2);g([w()],W.prototype,"label",2);g([w()],W.prototype,"library",2);g([et("name"),et("src"),et("library")],W.prototype,"setIcon",1);W=g([we("sl-icon")],W);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var re={},$=function(){let e=/\blang(?:uage)?-([\w-]+)\b/i,t=0;var r=re.Prism={manual:re.Prism&&re.Prism.manual,disableWorkerMessageHandler:re.Prism&&re.Prism.disableWorkerMessageHandler,util:{encode(s){return s instanceof n?new n(s.type,r.util.encode(s.content),s.alias):r.util.type(s)==="Array"?s.map(r.util.encode):s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type(s){return Object.prototype.toString.call(s).match(/\[object (\w+)\]/)[1]},objId(s){return s.__id||Object.defineProperty(s,"__id",{value:++t}),s.__id},clone(s,i){var o=r.util.type(s);switch(i=i||{},o){case"Object":if(i[r.util.objId(s)])return i[r.util.objId(s)];var l={};i[r.util.objId(s)]=l;for(var a in s)s.hasOwnProperty(a)&&(l[a]=r.util.clone(s[a],i));return l;case"Array":if(i[r.util.objId(s)])return i[r.util.objId(s)];var l=[];return i[r.util.objId(s)]=l,s.forEach(function(c,h){l[h]=r.util.clone(c,i)}),l}return s}},languages:{extend(s,i){var o=r.util.clone(r.languages[s]);for(var a in i)o[a]=i[a];return o},insertBefore(s,i,o,a){a=a||r.languages;var l=a[s];if(arguments.length==2){o=arguments[1];for(var c in o)o.hasOwnProperty(c)&&(l[c]=o[c]);return l}var h={};for(var u in l)if(l.hasOwnProperty(u)){if(u==i)for(var c in o)o.hasOwnProperty(c)&&(h[c]=o[c]);h[u]=l[u]}return r.languages.DFS(r.languages,function(d,p){p===a[s]&&d!=s&&(this[d]=h)}),a[s]=h},DFS(s,i,o,a){a=a||{};for(var l in s)s.hasOwnProperty(l)&&(i.call(s,l,s[l],o||l),r.util.type(s[l])==="Object"&&!a[r.util.objId(s[l])]?(a[r.util.objId(s[l])]=!0,r.languages.DFS(s[l],i,null,a)):r.util.type(s[l])==="Array"&&!a[r.util.objId(s[l])]&&(a[r.util.objId(s[l])]=!0,r.languages.DFS(s[l],i,l,a)))}},plugins:{},highlightAll(s,i){r.highlightAllUnder(document,s,i)},highlightAllUnder(s,i,o){var a={callback:o,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a);for(var l=a.elements||s.querySelectorAll(a.selector),c=0,h;h=l[c++];)r.highlightElement(h,i===!0,a.callback)},highlightElement(s,i,o){for(var a,l,c=s;c&&!e.test(c.className);)c=c.parentNode;c&&(a=(c.className.match(e)||[,""])[1].toLowerCase(),l=r.languages[a]),s.className=s.className.replace(e,"").replace(/\s+/g," ")+" language-"+a,s.parentNode&&(c=s.parentNode,/pre/i.test(c.nodeName)&&(c.className=c.className.replace(e,"").replace(/\s+/g," ")+" language-"+a));var h=s.textContent,u={element:s,language:a,grammar:l,code:h};if(r.hooks.run("before-sanity-check",u),!u.code||!u.grammar){u.code&&(r.hooks.run("before-highlight",u),u.element.textContent=u.code,r.hooks.run("after-highlight",u)),r.hooks.run("complete",u);return}if(r.hooks.run("before-highlight",u),i&&re.Worker){var d=new Worker(r.filename);d.onmessage=function(p){u.highlightedCode=p.data,r.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,o&&o.call(u.element),r.hooks.run("after-highlight",u),r.hooks.run("complete",u)},d.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=r.highlight(u.code,u.grammar,u.language),r.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,o&&o.call(s),r.hooks.run("after-highlight",u),r.hooks.run("complete",u)},highlight(s,i,o){var a={code:s,grammar:i,language:o};return r.hooks.run("before-tokenize",a),a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run("after-tokenize",a),n.stringify(r.util.encode(a.tokens),a.language)},matchGrammar(s,i,o,a,l,c,h){var u=r.Token;for(var d in o)if(!(!o.hasOwnProperty(d)||!o[d])){if(d==h)return;var p=o[d];p=r.util.type(p)==="Array"?p:[p];for(var b=0;b<p.length;++b){var y=p[b],V=y.inside,E=!!y.lookbehind,Q=!!y.greedy,oe=0,J=y.alias;if(Q&&!y.pattern.global){var xe=y.pattern.toString().match(/[imuy]*$/)[0];y.pattern=RegExp(y.pattern.source,xe+"g")}y=y.pattern||y;for(var z=a,F=l;z<i.length;F+=i[z].length,++z){var _e=i[z];if(i.length>s.length)return;if(!(_e instanceof u)){if(Q&&z!=i.length-1){y.lastIndex=F;var P=y.exec(s);if(!P)break;for(var We=P.index+(E?P[1].length:0),ht=P.index+P[0].length,ae=z,ke=F,Fn=i.length;ae<Fn&&(ke<ht||!i[ae].type&&!i[ae-1].greedy);++ae)ke+=i[ae].length,We>=ke&&(++z,F=ke);if(i[z]instanceof u)continue;dt=ae-z,_e=s.slice(F,ke),P.index-=F}else{y.lastIndex=0;var P=y.exec(_e),dt=1}if(!P){if(c)break;continue}E&&(oe=P[1]?P[1].length:0);var We=P.index+oe,P=P[0].slice(oe),ht=We+P.length,pt=_e.slice(0,We),tr=_e.slice(ht),Xe=[z,dt];pt&&(++z,F+=pt.length,Xe.push(pt));var Mn=new u(d,V?r.tokenize(P,V):P,J,P,Q);if(Xe.push(Mn),tr&&Xe.push(tr),Array.prototype.splice.apply(i,Xe),dt!=1&&r.matchGrammar(s,i,o,z,F,!0,d),c)break}}}}},tokenize(s,i,o){var a=[s],l=i.rest;if(l){for(var c in l)i[c]=l[c];delete i.rest}return r.matchGrammar(s,a,i,0,0,!1),a},hooks:{all:{},add(s,i){var o=r.hooks.all;o[s]=o[s]||[],o[s].push(i)},run(s,i){var o=r.hooks.all[s];if(!(!o||!o.length))for(var a=0,l;l=o[a++];)l(i)}}},n=r.Token=function(s,i,o,a,l){this.type=s,this.content=i,this.alias=o,this.length=(a||"").length|0,this.greedy=!!l};return n.stringify=function(s,i,o){if(typeof s=="string")return s;if(r.util.type(s)==="Array")return s.map(c=>n.stringify(c,i,s)).join("");let a={type:s.type,content:n.stringify(s.content,i,o),tag:"span",classes:["token",s.type],attributes:{},language:i,parent:o};if(s.alias){let c=r.util.type(s.alias)==="Array"?s.alias:[s.alias];Array.prototype.push.apply(a.classes,c)}r.hooks.run("wrap",a);let l=Object.keys(a.attributes).map(c=>c+'="'+(a.attributes[c]||"").replace(/"/g,"&quot;")+'"').join(" ");return`<${a.tag} class="${a.classes.join(" ")}"${l?" "+l:""}>${a.content}</${a.tag}>`},re.Prism}();typeof nt!="undefined"&&nt.exports&&(nt.exports=$);typeof global!="undefined"&&(global.Prism=$);$.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i};$.languages.markup.tag.inside["attr-value"].inside.entity=$.languages.markup.entity;$.hooks.add("wrap",e=>{e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});$.languages.xml=$.languages.markup;$.languages.html=$.languages.markup;$.languages.mathml=$.languages.markup;$.languages.svg=$.languages.markup;$.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/};$.languages.css.atrule.inside.rest=$.languages.css;$.languages.markup&&($.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:$.languages.css,alias:"language-css",greedy:!0}}),$.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:$.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:$.languages.css}},alias:"language-css"}},$.languages.markup.tag));$.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};$.languages.javascript=$.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/});$.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/});$.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}});$.languages.javascript["template-string"].inside.interpolation.inside.rest=$.languages.javascript;$.languages.markup&&$.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:$.languages.javascript,alias:"language-javascript",greedy:!0}});$.languages.js=$.languages.javascript;var Sn=$;function Cn(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}var $e=Cn();function Pi(e){$e=e}var zi=/[&<>"']/,Oi=/[&<>"']/g,Ri=/[<>"']|&(?!#?\w+;)/,Ii=/[<>"']|&(?!#?\w+;)/g,Li={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Hr=e=>Li[e];function T(e,t){if(t){if(zi.test(e))return e.replace(Oi,Hr)}else if(Ri.test(e))return e.replace(Ii,Hr);return e}var Bi=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Nn(e){return e.replace(Bi,(t,r)=>(r=r.toLowerCase(),r==="colon"?":":r.charAt(0)==="#"?r.charAt(1)==="x"?String.fromCharCode(parseInt(r.substring(2),16)):String.fromCharCode(+r.substring(1)):""))}var Fi=/(^|[^\[])\^/g;function _(e,t){e=e.source||e,t=t||"";const r={replace:(n,s)=>(s=s.source||s,s=s.replace(Fi,"$1"),e=e.replace(n,s),r),getRegex:()=>new RegExp(e,t)};return r}var Mi=/[^\w:]/g,Ui=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function jr(e,t,r){if(e){let n;try{n=decodeURIComponent(Nn(r)).replace(Mi,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}t&&!Ui.test(r)&&(r=qi(t,r));try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}var Ke={},Hi=/^[^:]+:\/*[^/]*$/,ji=/^([^:]+:)[\s\S]*$/,Vi=/^([^:]+:\/*[^/]*)[\s\S]*$/;function qi(e,t){Ke[" "+e]||(Hi.test(e)?Ke[" "+e]=e+"/":Ke[" "+e]=tt(e,"/",!0)),e=Ke[" "+e];const r=e.indexOf(":")===-1;return t.substring(0,2)==="//"?r?t:e.replace(ji,"$1")+t:t.charAt(0)==="/"?r?t:e.replace(Vi,"$1")+t:e+t}var it={exec:function(){}};function M(e){let t=1,r,n;for(;t<arguments.length;t++){r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}function Vr(e,t){const r=e.replace(/\|/g,(i,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),n=r.split(/ \|/);let s=0;if(n[0].trim()||n.shift(),n[n.length-1].trim()||n.pop(),n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function tt(e,t,r){const n=e.length;if(n===0)return"";let s=0;for(;s<n;){const i=e.charAt(n-s-1);if(i===t&&!r)s++;else if(i!==t&&r)s++;else break}return e.substr(0,n-s)}function Wi(e,t){if(e.indexOf(t[1])===-1)return-1;const r=e.length;let n=0,s=0;for(;s<r;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return-1}function Tn(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function qr(e,t){if(t<1)return"";let r="";for(;t>1;)t&1&&(r+=e),t>>=1,e+=e;return r+e}function Wr(e,t,r,n){const s=t.href,i=t.title?T(t.title):null,o=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){n.state.inLink=!0;const a={type:"link",raw:r,href:s,title:i,text:o,tokens:n.inlineTokens(o,[])};return n.state.inLink=!1,a}else return{type:"image",raw:r,href:s,title:i,text:T(o)}}function Xi(e,t){const r=e.match(/^(\s+)(?:```)/);if(r===null)return t;const n=r[1];return t.split(`
`).map(s=>{const i=s.match(/^\s+/);if(i===null)return s;const[o]=i;return o.length>=n.length?s.slice(n.length):s}).join(`
`)}var Yt=class{constructor(e){this.options=e||$e}space(e){const t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:`
`}}code(e){const t=this.rules.block.code.exec(e);if(t){const r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:tt(r,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const r=t[0],n=Xi(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim():t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let r=t[2].trim();if(/#$/.test(r)){const s=tt(r,"#");(this.options.pedantic||!s||/ $/.test(s))&&(r=s.trim())}const n={type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const r=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(r,[]),text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r,n,s,i,o,a,l,c,h,u,d=t[1].trim();const p=d.length>1,b={type:"list",raw:"",ordered:p,start:p?+d.slice(0,-1):"",loose:!1,items:[]};d=p?`\\d{1,9}\\${d.slice(-1)}`:`\\${d}`,this.options.pedantic&&(d=p?d:"[*+-]");const y=new RegExp(`^( {0,3}${d})((?: [^\\n]*| *)(?:\\n[^\\n]*)*(?:\\n|$))`);for(;e&&!(this.rules.block.hr.test(e)||!(t=y.exec(e)));){h=t[2].split(`
`),this.options.pedantic?(i=2,u=h[0].trimLeft()):(i=t[2].search(/[^ ]/),i=t[1].length+(i>4?1:i),u=h[0].slice(i-t[1].length)),a=!1,r=t[0],!h[0]&&/^ *$/.test(h[1])&&(r=t[1]+h.slice(0,2).join(`
`)+`
`,b.loose=!0,h=[]);const E=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(o=1;o<h.length;o++){if(c=h[o],this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),E.test(c)){r=t[1]+h.slice(0,o).join(`
`)+`
`;break}if(!a){c.trim()||(a=!0),c.search(/[^ ]/)>=i?u+=`
`+c.slice(i):u+=`
`+c;continue}if(c.search(/[^ ]/)>=i||!c.trim()){u+=`
`+c.slice(i);continue}else{r=t[1]+h.slice(0,o).join(`
`)+`
`;break}}b.loose||(l?b.loose=!0:/\n *\n *$/.test(r)&&(l=!0)),this.options.gfm&&(n=/^\[[ xX]\] /.exec(u),n&&(s=n[0]!=="[ ] ",u=u.replace(/^\[[ xX]\] +/,""))),b.items.push({type:"list_item",raw:r,task:!!n,checked:s,loose:!1,text:u}),b.raw+=r,e=e.slice(r.length)}b.items[b.items.length-1].raw=r.trimRight(),b.items[b.items.length-1].text=u.trimRight(),b.raw=b.raw.trimRight();const V=b.items.length;for(o=0;o<V;o++)this.lexer.state.top=!1,b.items[o].tokens=this.lexer.blockTokens(b.items[o].text,[]),b.items[o].tokens.some(E=>E.type==="space")&&(b.loose=!0,b.items[o].loose=!0);return b}}html(e){const t=this.rules.block.html.exec(e);if(t){const r={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};return this.options.sanitize&&(r.type="paragraph",r.text=this.options.sanitizer?this.options.sanitizer(t[0]):T(t[0]),r.tokens=[],this.lexer.inline(r.text,r.tokens)),r}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const r=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:r,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const r={type:"table",header:Vr(t[1]).map(n=>({text:n})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]?t[3].replace(/\n$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=t[0];let n=r.align.length,s,i,o,a;for(s=0;s<n;s++)/^ *-+: *$/.test(r.align[s])?r.align[s]="right":/^ *:-+: *$/.test(r.align[s])?r.align[s]="center":/^ *:-+ *$/.test(r.align[s])?r.align[s]="left":r.align[s]=null;for(n=r.rows.length,s=0;s<n;s++)r.rows[s]=Vr(r.rows[s],r.header.length).map(l=>({text:l}));for(n=r.header.length,i=0;i<n;i++)r.header[i].tokens=[],this.lexer.inlineTokens(r.header[i].text,r.header[i].tokens);for(n=r.rows.length,i=0;i<n;i++)for(a=r.rows[i],o=0;o<a.length;o++)a[o].tokens=[],this.lexer.inlineTokens(a[o].text,a[o].tokens);return r}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const r={type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const r={type:"paragraph",raw:t[0],text:t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}text(e){const t=this.rules.block.text.exec(e);if(t){const r={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:T(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):T(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const i=tt(r.slice(0,-1),"\\");if((r.length-i.length)%2===0)return}else{const i=Wi(t[2],"()");if(i>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let n=t[2],s="";if(this.options.pedantic){const i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);i&&(n=i[1],s=i[3])}else s=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(this.options.pedantic&&!/>$/.test(r)?n=n.slice(1):n=n.slice(1,-1)),Wr(t,{href:n&&n.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let n=(r[2]||r[1]).replace(/\s+/g," ");if(n=t[n.toLowerCase()],!n||!n.href){const s=r[0].charAt(0);return{type:"text",raw:s,text:s}}return Wr(r,n,r[0],this.lexer)}}emStrong(e,t,r=""){let n=this.rules.inline.emStrong.lDelim.exec(e);if(!n||n[3]&&r.match(/[\p{L}\p{N}]/u))return;const s=n[1]||n[2]||"";if(!s||s&&(r===""||this.rules.inline.punctuation.exec(r))){const i=n[0].length-1;let o,a,l=i,c=0;const h=n[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+i);(n=h.exec(t))!=null;){if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!o)continue;if(a=o.length,n[3]||n[4]){l+=a;continue}else if((n[5]||n[6])&&i%3&&!((i+a)%3)){c+=a;continue}if(l-=a,l>0)continue;if(a=Math.min(a,a+l+c),Math.min(i,a)%2){const d=e.slice(1,i+n.index+a);return{type:"em",raw:e.slice(0,i+n.index+a+1),text:d,tokens:this.lexer.inlineTokens(d,[])}}const u=e.slice(2,i+n.index+a-1);return{type:"strong",raw:e.slice(0,i+n.index+a+1),text:u,tokens:this.lexer.inlineTokens(u,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let r=t[2].replace(/\n/g," ");const n=/[^ ]/.test(r),s=/^ /.test(r)&&/ $/.test(r);return n&&s&&(r=r.substring(1,r.length-1)),r=T(r,!0),{type:"codespan",raw:t[0],text:r}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const r=this.rules.inline.autolink.exec(e);if(r){let n,s;return r[2]==="@"?(n=T(this.options.mangle?t(r[1]):r[1]),s="mailto:"+n):(n=T(r[1]),s=n),{type:"link",raw:r[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e,t){let r;if(r=this.rules.inline.url.exec(e)){let n,s;if(r[2]==="@")n=T(this.options.mangle?t(r[0]):r[0]),s="mailto:"+n;else{let i;do i=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(i!==r[0]);n=T(r[0]),r[1]==="www."?s="http://"+n:s=n}return{type:"link",raw:r[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e,t){const r=this.rules.inline.text.exec(e);if(r){let n;return this.lexer.state.inRawBlock?n=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):T(r[0]):r[0]:n=T(this.options.smartypants?t(r[0]):r[0]),{type:"text",raw:r[0],text:n}}}},m={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:it,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/};m._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;m._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;m.def=_(m.def).replace("label",m._label).replace("title",m._title).getRegex();m.bullet=/(?:[*+-]|\d{1,9}[.)])/;m.listItemStart=_(/^( *)(bull) */).replace("bull",m.bullet).getRegex();m.list=_(m.list).replace(/bull/g,m.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+m.def.source+")").getRegex();m._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";m._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;m.html=_(m.html,"i").replace("comment",m._comment).replace("tag",m._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();m.paragraph=_(m._paragraph).replace("hr",m.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",m._tag).getRegex();m.blockquote=_(m.blockquote).replace("paragraph",m.paragraph).getRegex();m.normal=M({},m);m.gfm=M({},m.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});m.gfm.table=_(m.gfm.table).replace("hr",m.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",m._tag).getRegex();m.pedantic=M({},m.normal,{html:_(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",m._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:it,paragraph:_(m.normal._paragraph).replace("hr",m.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",m.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var f={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:it,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:it,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};f._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";f.punctuation=_(f.punctuation).replace(/punctuation/g,f._punctuation).getRegex();f.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;f.escapedEmSt=/\\\*|\\_/g;f._comment=_(m._comment).replace("(?:-->|$)","-->").getRegex();f.emStrong.lDelim=_(f.emStrong.lDelim).replace(/punct/g,f._punctuation).getRegex();f.emStrong.rDelimAst=_(f.emStrong.rDelimAst,"g").replace(/punct/g,f._punctuation).getRegex();f.emStrong.rDelimUnd=_(f.emStrong.rDelimUnd,"g").replace(/punct/g,f._punctuation).getRegex();f._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;f._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;f._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;f.autolink=_(f.autolink).replace("scheme",f._scheme).replace("email",f._email).getRegex();f._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;f.tag=_(f.tag).replace("comment",f._comment).replace("attribute",f._attribute).getRegex();f._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;f._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;f._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;f.link=_(f.link).replace("label",f._label).replace("href",f._href).replace("title",f._title).getRegex();f.reflink=_(f.reflink).replace("label",f._label).getRegex();f.reflinkSearch=_(f.reflinkSearch,"g").replace("reflink",f.reflink).replace("nolink",f.nolink).getRegex();f.normal=M({},f);f.pedantic=M({},f.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:_(/^!?\[(label)\]\((.*?)\)/).replace("label",f._label).getRegex(),reflink:_(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",f._label).getRegex()});f.gfm=M({},f.normal,{escape:_(f.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});f.gfm.url=_(f.gfm.url,"i").replace("email",f.gfm._extended_email).getRegex();f.breaks=M({},f.gfm,{br:_(f.br).replace("{2,}","*").getRegex(),text:_(f.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Yi(e){return e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function Xr(e){let t="",r,n;const s=e.length;for(r=0;r<s;r++)n=e.charCodeAt(r),Math.random()>.5&&(n="x"+n.toString(16)),t+="&#"+n+";";return t}var K=class{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||$e,this.options.tokenizer=this.options.tokenizer||new Yt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:m.normal,inline:f.normal};this.options.pedantic?(t.block=m.pedantic,t.inline=f.pedantic):this.options.gfm&&(t.block=m.gfm,this.options.breaks?t.inline=f.breaks:t.inline=f.gfm),this.tokenizer.rules=t}static get rules(){return{block:m,inline:f}}static lex(e,t){return new K(t).lex(e)}static lexInline(e,t){return new K(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic&&(e=e.replace(/^ +$/gm,""));let r,n,s,i;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(r=o.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.type&&t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),n=t[t.length-1],n&&(n.type==="paragraph"||n.type==="text")?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length),n=t[t.length-1],n&&(n.type==="paragraph"||n.type==="text")?(n.raw+=`
`+r.raw,n.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=n.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const a=e.slice(1);let l;this.options.extensions.startBlock.forEach(function(c){l=c.call({lexer:this},a),typeof l=="number"&&l>=0&&(o=Math.min(o,l))}),o<1/0&&o>=0&&(s=e.substring(0,o+1))}if(this.state.top&&(r=this.tokenizer.paragraph(s))){n=t[t.length-1],i&&n.type==="paragraph"?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r),i=s.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),n=t[t.length-1],n&&n.type==="text"?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r);continue}if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let r,n,s,i=e,o,a,l;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)c.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,o.index)+"["+qr("a",o[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,o.index)+"["+qr("a",o[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.escapedEmSt.exec(i))!=null;)i=i.slice(0,o.index)+"++"+i.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(a||(l=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(r=c.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),n=t[t.length-1],n&&r.type==="text"&&n.type==="text"?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),n=t[t.length-1],n&&r.type==="text"&&n.type==="text"?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,i,l)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e,Xr)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e,Xr))){e=e.substring(r.raw.length),t.push(r);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const h=e.slice(1);let u;this.options.extensions.startInline.forEach(function(d){u=d.call({lexer:this},h),typeof u=="number"&&u>=0&&(c=Math.min(c,u))}),c<1/0&&c>=0&&(s=e.substring(0,c+1))}if(r=this.tokenizer.inlineText(s,Yi)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(l=r.raw.slice(-1)),a=!0,n=t[t.length-1],n&&n.type==="text"?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return t}},Gt=class{constructor(e){this.options=e||$e}code(e,t,r){const n=(t||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(e,n);s!=null&&s!==e&&(r=!0,e=s)}return e=e.replace(/\n$/,"")+`
`,n?'<pre><code class="'+this.options.langPrefix+T(n,!0)+'">'+(r?e:T(e,!0))+`</code></pre>
`:"<pre><code>"+(r?e:T(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
`+e+`</blockquote>
`}html(e){return e}heading(e,t,r,n){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+n.slug(r)+'">'+e+"</h"+t+`>
`:"<h"+t+">"+e+"</h"+t+`>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,r){const n=t?"ol":"ul",s=t&&r!==1?' start="'+r+'"':"";return"<"+n+s+`>
`+e+"</"+n+`>
`}listitem(e){return"<li>"+e+`</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+`</p>
`}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
`+e+`</tr>
`}tablecell(e,t){const r=t.header?"th":"td";return(t.align?"<"+r+' align="'+t.align+'">':"<"+r+">")+e+"</"+r+`>
`}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,r){if(e=jr(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let n='<a href="'+T(e)+'"';return t&&(n+=' title="'+t+'"'),n+=">"+r+"</a>",n}image(e,t,r){if(e=jr(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let n='<img src="'+e+'" alt="'+r+'"';return t&&(n+=' title="'+t+'"'),n+=this.options.xhtml?"/>":">",n}text(e){return e}},Pn=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,r){return""+r}image(e,t,r){return""+r}br(){return""}},zn=class{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let r=e,n=0;if(this.seen.hasOwnProperty(r)){n=this.seen[e];do n++,r=e+"-"+n;while(this.seen.hasOwnProperty(r))}return t||(this.seen[e]=n,this.seen[r]=0),r}slug(e,t={}){const r=this.serialize(e);return this.getNextSafeSlug(r,t.dryrun)}},D=class{constructor(e){this.options=e||$e,this.options.renderer=this.options.renderer||new Gt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Pn,this.slugger=new zn}static parse(e,t){return new D(t).parse(e)}static parseInline(e,t){return new D(t).parseInline(e)}parse(e,t=!0){let r="",n,s,i,o,a,l,c,h,u,d,p,b,y,V,E,Q,oe,J,xe;const z=e.length;for(n=0;n<z;n++){if(d=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]&&(xe=this.options.extensions.renderers[d.type].call({parser:this},d),xe!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type))){r+=xe||"";continue}switch(d.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{r+=this.renderer.heading(this.parseInline(d.tokens),d.depth,Nn(this.parseInline(d.tokens,this.textRenderer)),this.slugger);continue}case"code":{r+=this.renderer.code(d.text,d.lang,d.escaped);continue}case"table":{for(h="",c="",o=d.header.length,s=0;s<o;s++)c+=this.renderer.tablecell(this.parseInline(d.header[s].tokens),{header:!0,align:d.align[s]});for(h+=this.renderer.tablerow(c),u="",o=d.rows.length,s=0;s<o;s++){for(l=d.rows[s],c="",a=l.length,i=0;i<a;i++)c+=this.renderer.tablecell(this.parseInline(l[i].tokens),{header:!1,align:d.align[i]});u+=this.renderer.tablerow(c)}r+=this.renderer.table(h,u);continue}case"blockquote":{u=this.parse(d.tokens),r+=this.renderer.blockquote(u);continue}case"list":{for(p=d.ordered,b=d.start,y=d.loose,o=d.items.length,u="",s=0;s<o;s++)E=d.items[s],Q=E.checked,oe=E.task,V="",E.task&&(J=this.renderer.checkbox(Q),y?E.tokens.length>0&&E.tokens[0].type==="paragraph"?(E.tokens[0].text=J+" "+E.tokens[0].text,E.tokens[0].tokens&&E.tokens[0].tokens.length>0&&E.tokens[0].tokens[0].type==="text"&&(E.tokens[0].tokens[0].text=J+" "+E.tokens[0].tokens[0].text)):E.tokens.unshift({type:"text",text:J}):V+=J),V+=this.parse(E.tokens,y),u+=this.renderer.listitem(V,oe,Q);r+=this.renderer.list(u,p,b);continue}case"html":{r+=this.renderer.html(d.text);continue}case"paragraph":{r+=this.renderer.paragraph(this.parseInline(d.tokens));continue}case"text":{for(u=d.tokens?this.parseInline(d.tokens):d.text;n+1<z&&e[n+1].type==="text";)d=e[++n],u+=`
`+(d.tokens?this.parseInline(d.tokens):d.text);r+=t?this.renderer.paragraph(u):u;continue}default:{const F='Token with "'+d.type+'" type was not found.';if(this.options.silent){console.error(F);return}else throw new Error(F)}}}return r}parseInline(e,t){t=t||this.renderer;let r="",n,s,i;const o=e.length;for(n=0;n<o;n++){if(s=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(i=this.options.extensions.renderers[s.type].call({parser:this},s),i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type))){r+=i||"";continue}switch(s.type){case"escape":{r+=t.text(s.text);break}case"html":{r+=t.html(s.text);break}case"link":{r+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break}case"image":{r+=t.image(s.href,s.title,s.text);break}case"strong":{r+=t.strong(this.parseInline(s.tokens,t));break}case"em":{r+=t.em(this.parseInline(s.tokens,t));break}case"codespan":{r+=t.codespan(s.text);break}case"br":{r+=t.br();break}case"del":{r+=t.del(this.parseInline(s.tokens,t));break}case"text":{r+=t.text(s.text);break}default:{const a='Token with "'+s.type+'" type was not found.';if(this.options.silent){console.error(a);return}else throw new Error(a)}}}return r}};function v(e,t,r){if(typeof e=="undefined"||e===null)throw new Error("marked(): input parameter is undefined or null");if(typeof e!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(typeof t=="function"&&(r=t,t=null),t=M({},v.defaults,t||{}),Tn(t),r){const n=t.highlight;let s;try{s=K.lex(e,t)}catch(a){return r(a)}const i=function(a){let l;if(!a)try{t.walkTokens&&v.walkTokens(s,t.walkTokens),l=D.parse(s,t)}catch(c){a=c}return t.highlight=n,a?r(a):r(null,l)};if(!n||n.length<3||(delete t.highlight,!s.length))return i();let o=0;v.walkTokens(s,function(a){a.type==="code"&&(o++,setTimeout(()=>{n(a.text,a.lang,function(l,c){if(l)return i(l);c!=null&&c!==a.text&&(a.text=c,a.escaped=!0),o--,o===0&&i()})},0))}),o===0&&i();return}try{const n=K.lex(e,t);return t.walkTokens&&v.walkTokens(n,t.walkTokens),D.parse(n,t)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+T(n.message+"",!0)+"</pre>";throw n}}v.options=v.setOptions=function(e){return M(v.defaults,e),Pi(v.defaults),v};v.getDefaults=Cn;v.defaults=$e;v.use=function(...e){const t=M({},...e),r=v.defaults.extensions||{renderers:{},childTokens:{}};let n;e.forEach(s=>{if(s.extensions&&(n=!0,s.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const o=r.renderers?r.renderers[i.name]:null;o?r.renderers[i.name]=function(...a){let l=i.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:r.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");r[i.level]?r[i.level].unshift(i.tokenizer):r[i.level]=[i.tokenizer],i.start&&(i.level==="block"?r.startBlock?r.startBlock.push(i.start):r.startBlock=[i.start]:i.level==="inline"&&(r.startInline?r.startInline.push(i.start):r.startInline=[i.start]))}i.childTokens&&(r.childTokens[i.name]=i.childTokens)})),s.renderer){const i=v.defaults.renderer||new Gt;for(const o in s.renderer){const a=i[o];i[o]=(...l)=>{let c=s.renderer[o].apply(i,l);return c===!1&&(c=a.apply(i,l)),c}}t.renderer=i}if(s.tokenizer){const i=v.defaults.tokenizer||new Yt;for(const o in s.tokenizer){const a=i[o];i[o]=(...l)=>{let c=s.tokenizer[o].apply(i,l);return c===!1&&(c=a.apply(i,l)),c}}t.tokenizer=i}if(s.walkTokens){const i=v.defaults.walkTokens;t.walkTokens=function(o){s.walkTokens.call(this,o),i&&i.call(this,o)}}n&&(t.extensions=r),v.setOptions(t)})};v.walkTokens=function(e,t){for(const r of e)switch(t.call(v,r),r.type){case"table":{for(const n of r.header)v.walkTokens(n.tokens,t);for(const n of r.rows)for(const s of n)v.walkTokens(s.tokens,t);break}case"list":{v.walkTokens(r.items,t);break}default:v.defaults.extensions&&v.defaults.extensions.childTokens&&v.defaults.extensions.childTokens[r.type]?v.defaults.extensions.childTokens[r.type].forEach(function(n){v.walkTokens(r[n],t)}):r.tokens&&v.walkTokens(r.tokens,t)}};v.parseInline=function(e,t){if(typeof e=="undefined"||e===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof e!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=M({},v.defaults,t||{}),Tn(t);try{const r=K.lexInline(e,t);return t.walkTokens&&v.walkTokens(r,t.walkTokens),D.parseInline(r,t)}catch(r){if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+T(r.message+"",!0)+"</pre>";throw r}};v.Parser=D;v.parser=D.parse;v.Renderer=Gt;v.TextRenderer=Pn;v.Lexer=K;v.lexer=K.lex;v.Tokenizer=Yt;v.Slugger=zn;v.parse=v;D.parse;K.lex;self.Prism=Sn;var Oe=class extends HTMLElement{static get observedAttributes(){return["src"]}attributeChangedCallback(e,t,r){t!==r&&(this[e]=r)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",e),this.setSrc(e)}get value(){return this.__value}set value(e){this.__value=e,this.setValue()}constructor(){super(),this.__value=""}async connectedCallback(){this.style.display="block";const e=this.getElementsByTagName("script")[0];if(e){if(e.getAttribute("type")==="wc-content"){let t=Oe.dedentText(e.innerHTML);t=t.replace(/&lt;(\/?script)(.*?)&gt;/g,"<$1$2>"),this.value=t}}else this.textContent&&(this.__value=this.textContent,this.setValue())}async setSrc(e){this.__value=await this.fetchSrc(e),this.setValue()}async fetchSrc(e){return(await fetch(e)).text()}setValue(){let e=this.__value;e=Oe.prepare(e),e=Oe.toHtml(e),this.innerHTML=e,this.hasAttribute("highlight")&&Oe.highlight(this)}static prepare(e){return e.split(`
`).map(t=>(t=t.replace("&lt;","<"),t.replace("&gt;",">"))).join(`
`)}static toHtml(e){return v(e)}static highlight(e){Sn.highlightAllUnder(e)}static dedentText(e){const t=e.split(`
`);t[0]===""&&t.splice(0,1);const r=t[0];let n=0;const i=r[0]==="	"?"	":" ";for(;r[n]===i;)n+=1;const o=[];for(const a of t){let l=a;for(let c=0;c<n&&l[0]===i;c++)l=l.substring(1);o.push(l)}return o[o.length-1]===""&&o.splice(o.length-1,1),o.join(`
`)}};customElements.define("wc-markdown",Oe);const Gi=5,De=(e,t)=>{const r=Math.abs((e-t)/e*100);return e>t?-r:r},X=(e,t=Gi)=>parseFloat(`${e}`).toFixed(t),Zi=e=>e.charAt(0).toUpperCase()+e.slice(1);var Zt={},Kt={};(function(e){const t=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",r=t+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",n="["+t+"]["+r+"]*",s=new RegExp("^"+n+"$"),i=function(a,l){const c=[];let h=l.exec(a);for(;h;){const u=[];u.startIndex=l.lastIndex-h[0].length;const d=h.length;for(let p=0;p<d;p++)u.push(h[p]);c.push(u),h=l.exec(a)}return c},o=function(a){const l=s.exec(a);return!(l===null||typeof l=="undefined")};e.isExist=function(a){return typeof a!="undefined"},e.isEmptyObject=function(a){return Object.keys(a).length===0},e.merge=function(a,l,c){if(l){const h=Object.keys(l),u=h.length;for(let d=0;d<u;d++)c==="strict"?a[h[d]]=[l[h[d]]]:a[h[d]]=l[h[d]]}},e.getValue=function(a){return e.isExist(a)?a:""},e.isName=o,e.getAllMatches=i,e.nameRegexp=n})(Kt);const Dt=Kt,Ki={allowBooleanAttributes:!1,unpairedTags:[]};Zt.validate=function(e,t){t=Object.assign({},Ki,t);const r=[];let n=!1,s=!1;e[0]==="\uFEFF"&&(e=e.substr(1));for(let i=0;i<e.length;i++)if(e[i]==="<"&&e[i+1]==="?"){if(i+=2,i=Gr(e,i),i.err)return i}else if(e[i]==="<"){let o=i;if(i++,e[i]==="!"){i=Zr(e,i);continue}else{let a=!1;e[i]==="/"&&(a=!0,i++);let l="";for(;i<e.length&&e[i]!==">"&&e[i]!==" "&&e[i]!=="	"&&e[i]!==`
`&&e[i]!=="\r";i++)l+=e[i];if(l=l.trim(),l[l.length-1]==="/"&&(l=l.substring(0,l.length-1),i--),!so(l)){let u;return l.trim().length===0?u="Invalid space after '<'.":u="Tag '"+l+"' is an invalid name.",C("InvalidTag",u,R(e,i))}const c=Ji(e,i);if(c===!1)return C("InvalidAttr","Attributes for '"+l+"' have open quote.",R(e,i));let h=c.value;if(i=c.index,h[h.length-1]==="/"){const u=i-h.length;h=h.substring(0,h.length-1);const d=Kr(h,t);if(d===!0)n=!0;else return C(d.err.code,d.err.msg,R(e,u+d.err.line))}else if(a)if(c.tagClosed){if(h.trim().length>0)return C("InvalidTag","Closing tag '"+l+"' can't have attributes or invalid starting.",R(e,o));{const u=r.pop();if(l!==u.tagName){let d=R(e,u.tagStartPos);return C("InvalidTag","Expected closing tag '"+u.tagName+"' (opened in line "+d.line+", col "+d.col+") instead of closing tag '"+l+"'.",R(e,o))}r.length==0&&(s=!0)}}else return C("InvalidTag","Closing tag '"+l+"' doesn't have proper closing.",R(e,i));else{const u=Kr(h,t);if(u!==!0)return C(u.err.code,u.err.msg,R(e,i-h.length+u.err.line));if(s===!0)return C("InvalidXml","Multiple possible root nodes found.",R(e,i));t.unpairedTags.indexOf(l)!==-1||r.push({tagName:l,tagStartPos:o}),n=!0}for(i++;i<e.length;i++)if(e[i]==="<")if(e[i+1]==="!"){i++,i=Zr(e,i);continue}else if(e[i+1]==="?"){if(i=Gr(e,++i),i.err)return i}else break;else if(e[i]==="&"){const u=ro(e,i);if(u==-1)return C("InvalidChar","char '&' is not expected.",R(e,i));i=u}else if(s===!0&&!Yr(e[i]))return C("InvalidXml","Extra text at the end",R(e,i));e[i]==="<"&&i--}}else{if(Yr(e[i]))continue;return C("InvalidChar","char '"+e[i]+"' is not expected.",R(e,i))}if(n){if(r.length==1)return C("InvalidTag","Unclosed tag '"+r[0].tagName+"'.",R(e,r[0].tagStartPos));if(r.length>0)return C("InvalidXml","Invalid '"+JSON.stringify(r.map(i=>i.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1})}else return C("InvalidXml","Start tag expected.",1);return!0};function Yr(e){return e===" "||e==="	"||e===`
`||e==="\r"}function Gr(e,t){const r=t;for(;t<e.length;t++)if(e[t]=="?"||e[t]==" "){const n=e.substr(r,t-r);if(t>5&&n==="xml")return C("InvalidXml","XML declaration allowed only at the start of the document.",R(e,t));if(e[t]=="?"&&e[t+1]==">"){t++;break}else continue}return t}function Zr(e,t){if(e.length>t+5&&e[t+1]==="-"&&e[t+2]==="-"){for(t+=3;t<e.length;t++)if(e[t]==="-"&&e[t+1]==="-"&&e[t+2]===">"){t+=2;break}}else if(e.length>t+8&&e[t+1]==="D"&&e[t+2]==="O"&&e[t+3]==="C"&&e[t+4]==="T"&&e[t+5]==="Y"&&e[t+6]==="P"&&e[t+7]==="E"){let r=1;for(t+=8;t<e.length;t++)if(e[t]==="<")r++;else if(e[t]===">"&&(r--,r===0))break}else if(e.length>t+9&&e[t+1]==="["&&e[t+2]==="C"&&e[t+3]==="D"&&e[t+4]==="A"&&e[t+5]==="T"&&e[t+6]==="A"&&e[t+7]==="["){for(t+=8;t<e.length;t++)if(e[t]==="]"&&e[t+1]==="]"&&e[t+2]===">"){t+=2;break}}return t}const Di='"',Qi="'";function Ji(e,t){let r="",n="",s=!1;for(;t<e.length;t++){if(e[t]===Di||e[t]===Qi)n===""?n=e[t]:n!==e[t]||(n="");else if(e[t]===">"&&n===""){s=!0;break}r+=e[t]}return n!==""?!1:{value:r,index:t,tagClosed:s}}const eo=new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");function Kr(e,t){const r=Dt.getAllMatches(e,eo),n={};for(let s=0;s<r.length;s++){if(r[s][1].length===0)return C("InvalidAttr","Attribute '"+r[s][2]+"' has no space in starting.",Te(r[s]));if(r[s][3]!==void 0&&r[s][4]===void 0)return C("InvalidAttr","Attribute '"+r[s][2]+"' is without value.",Te(r[s]));if(r[s][3]===void 0&&!t.allowBooleanAttributes)return C("InvalidAttr","boolean attribute '"+r[s][2]+"' is not allowed.",Te(r[s]));const i=r[s][2];if(!no(i))return C("InvalidAttr","Attribute '"+i+"' is an invalid name.",Te(r[s]));if(!n.hasOwnProperty(i))n[i]=1;else return C("InvalidAttr","Attribute '"+i+"' is repeated.",Te(r[s]))}return!0}function to(e,t){let r=/\d/;for(e[t]==="x"&&(t++,r=/[\da-fA-F]/);t<e.length;t++){if(e[t]===";")return t;if(!e[t].match(r))break}return-1}function ro(e,t){if(t++,e[t]===";")return-1;if(e[t]==="#")return t++,to(e,t);let r=0;for(;t<e.length;t++,r++)if(!(e[t].match(/\w/)&&r<20)){if(e[t]===";")break;return-1}return t}function C(e,t,r){return{err:{code:e,msg:t,line:r.line||r,col:r.col}}}function no(e){return Dt.isName(e)}function so(e){return Dt.isName(e)}function R(e,t){const r=e.substring(0,t).split(/\r?\n/);return{line:r.length,col:r[r.length-1].length+1}}function Te(e){return e.startIndex+e[1].length}var Qt={};const On={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0},tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1},io=function(e){return Object.assign({},On,e)};Qt.buildOptions=io;Qt.defaultOptions=On;class oo{constructor(t){this.tagname=t,this.child=[],this[":@"]={}}add(t,r){this.child.push({[t]:r})}addChild(t){t[":@"]&&Object.keys(t[":@"]).length>0?this.child.push({[t.tagname]:t.child,[":@"]:t[":@"]}):this.child.push({[t.tagname]:t.child})}}var ao=oo;function lo(e,t){const r={};if(e[t+3]==="O"&&e[t+4]==="C"&&e[t+5]==="T"&&e[t+6]==="Y"&&e[t+7]==="P"&&e[t+8]==="E"){t=t+9;let n=1,s=!1,i=!1,o=!1,a="";for(;t<e.length;t++)if(e[t]==="<"){if(s&&e[t+1]==="!"&&e[t+2]==="E"&&e[t+3]==="N"&&e[t+4]==="T"&&e[t+5]==="I"&&e[t+6]==="T"&&e[t+7]==="Y")t+=7,i=!0;else if(s&&e[t+1]==="!"&&e[t+2]==="E"&&e[t+3]==="L"&&e[t+4]==="E"&&e[t+5]==="M"&&e[t+6]==="E"&&e[t+7]==="N"&&e[t+8]==="T")t+=8;else if(e[t+1]==="!"&&e[t+2]==="-"&&e[t+3]==="-")o=!0;else throw new Error("Invalid DOCTYPE");n++,a=""}else if(e[t]===">"){if(o)if(e[t-1]==="-"&&e[t-2]==="-")o=!1;else throw new Error("Invalid XML comment in DOCTYPE");else i&&(uo(a,r),i=!1);if(n--,n===0)break}else e[t]==="["?s=!0:a+=e[t];if(n!==0)throw new Error("Unclosed DOCTYPE")}else throw new Error("Invalid Tag instead of DOCTYPE");return{entities:r,i:t}}const co=RegExp(`^\\s([a-zA-z0-0]+)[ 	](['"])([^&]+)\\2`);function uo(e,t){const r=co.exec(e);r&&(t[r[1]]={regx:RegExp(`&${r[1]};`,"g"),val:r[3]})}var ho=lo;const po=/^[-+]?0x[a-fA-F0-9]+$/,fo=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt);!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);const go={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};function bo(e,t={}){if(t=Object.assign({},go,t),!e||typeof e!="string")return e;let r=e.trim();if(t.skipLike!==void 0&&t.skipLike.test(r))return e;if(t.hex&&po.test(r))return Number.parseInt(r,16);{const n=fo.exec(r);if(n){const s=n[1],i=n[2];let o=mo(n[3]);const a=n[4]||n[6];if(!t.leadingZeros&&i.length>0&&s&&r[2]!==".")return e;if(!t.leadingZeros&&i.length>0&&!s&&r[1]!==".")return e;{const l=Number(r),c=""+l;return c.search(/[eE]/)!==-1||a?t.eNotation?l:e:r.indexOf(".")!==-1?c==="0"&&o===""||c===o||s&&c==="-"+o?l:e:i?o===c||s+o===c?l:e:r===c||r===s+c?l:e}}else return e}}function mo(e){return e&&e.indexOf(".")!==-1&&(e=e.replace(/0+$/,""),e==="."?e="0":e[0]==="."?e="0"+e:e[e.length-1]==="."&&(e=e.substr(0,e.length-1))),e}var vo=bo;const Jt=Kt,Pe=ao,yo=ho,wo=vo;"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,Jt.nameRegexp);class $o{constructor(t){this.options=t,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={amp:{regex:/&(amp|#38|#x26);/g,val:"&"},apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"\xA2"},pound:{regex:/&(pound|#163);/g,val:"\xA3"},yen:{regex:/&(yen|#165);/g,val:"\xA5"},euro:{regex:/&(euro|#8364);/g,val:"\u20AC"},copyright:{regex:/&(copy|#169);/g,val:"\xA9"},reg:{regex:/&(reg|#174);/g,val:"\xAE"},inr:{regex:/&(inr|#8377);/g,val:"\u20B9"}},this.addExternalEntities=xo,this.parseXml=So,this.parseTextData=_o,this.resolveNameSpace=ko,this.buildAttributesMap=Eo,this.isItStopNode=To,this.replaceEntitiesValue=Co,this.readStopNodeData=zo,this.saveTextToParentTag=No}}function xo(e){const t=Object.keys(e);for(let r=0;r<t.length;r++){const n=t[r];this.lastEntities[n]={regex:new RegExp("&"+n+";","g"),val:e[n]}}}function _o(e,t,r,n,s,i,o){if(e!==void 0&&(this.options.trimValues&&!n&&(e=e.trim()),e.length>0)){o||(e=this.replaceEntitiesValue(e));const a=this.options.tagValueProcessor(t,e,r,s,i);return a==null?e:typeof a!=typeof e||a!==e?a:this.options.trimValues?Ht(e,this.options.parseTagValue,this.options.numberParseOptions):e.trim()===e?Ht(e,this.options.parseTagValue,this.options.numberParseOptions):e}}function ko(e){if(this.options.removeNSPrefix){const t=e.split(":"),r=e.charAt(0)==="/"?"/":"";if(t[0]==="xmlns")return"";t.length===2&&(e=r+t[1])}return e}const Ao=new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,"gm");function Eo(e,t){if(!this.options.ignoreAttributes&&typeof e=="string"){const r=Jt.getAllMatches(e,Ao),n=r.length,s={};for(let i=0;i<n;i++){const o=this.resolveNameSpace(r[i][1]);let a=r[i][4];const l=this.options.attributeNamePrefix+o;if(o.length)if(a!==void 0){this.options.trimValues&&(a=a.trim()),a=this.replaceEntitiesValue(a);const c=this.options.attributeValueProcessor(o,a,t);c==null?s[l]=a:typeof c!=typeof a||c!==a?s[l]=c:s[l]=Ht(a,this.options.parseAttributeValue,this.options.numberParseOptions)}else this.options.allowBooleanAttributes&&(s[l]=!0)}if(!Object.keys(s).length)return;if(this.options.attributesGroupName){const i={};return i[this.options.attributesGroupName]=s,i}return s}}const So=function(e){e=e.replace(/\r\n?/g,`
`);const t=new Pe("!xml");let r=t,n="",s="";for(let i=0;i<e.length;i++)if(e[i]==="<")if(e[i+1]==="/"){const a=rt(e,">",i,"Closing Tag is not closed.");let l=e.substring(i+2,a).trim();if(this.options.removeNSPrefix){const c=l.indexOf(":");c!==-1&&(l=l.substr(c+1))}r&&(n=this.saveTextToParentTag(n,r,s)),s=s.substr(0,s.lastIndexOf(".")),r=this.tagsNodeStack.pop(),n="",i=a}else if(e[i+1]==="?"){let a=Dr(e,i,!1,"?>");if(!a)throw new Error("Pi Tag is not closed.");if(n=this.saveTextToParentTag(n,r,s),!(this.options.ignoreDeclaration&&a.tagName==="?xml"||this.options.ignorePiTags)){const l=new Pe(a.tagName);l.add(this.options.textNodeName,""),a.tagName!==a.tagExp&&a.attrExpPresent&&(l[":@"]=this.buildAttributesMap(a.tagExp,s)),r.addChild(l)}i=a.closeIndex+1}else if(e.substr(i+1,3)==="!--"){const a=rt(e,"-->",i+4,"Comment is not closed.");if(this.options.commentPropName){const l=e.substring(i+4,a-2);n=this.saveTextToParentTag(n,r,s),r.add(this.options.commentPropName,[{[this.options.textNodeName]:l}])}i=a}else if(e.substr(i+1,2)==="!D"){const a=yo(e,i);this.docTypeEntities=a.entities,i=a.i}else if(e.substr(i+1,2)==="!["){const a=rt(e,"]]>",i,"CDATA is not closed.")-2,l=e.substring(i+9,a);if(n=this.saveTextToParentTag(n,r,s),this.options.cdataPropName)r.add(this.options.cdataPropName,[{[this.options.textNodeName]:l}]);else{let c=this.parseTextData(l,r.tagname,s,!0,!1,!0);c||(c=""),r.add(this.options.textNodeName,c)}i=a+2}else{let a=Dr(e,i,this.options.removeNSPrefix),l=a.tagName,c=a.tagExp,h=a.attrExpPresent,u=a.closeIndex;r&&n&&r.tagname!=="!xml"&&(n=this.saveTextToParentTag(n,r,s,!1)),l!==t.tagname&&(s+=s?"."+l:l);const d=r;if(d&&this.options.unpairedTags.indexOf(d.tagname)!==-1&&(r=this.tagsNodeStack.pop()),this.isItStopNode(this.options.stopNodes,s,l)){let p="";if(c.length>0&&c.lastIndexOf("/")===c.length-1)i=a.closeIndex;else if(this.options.unpairedTags.indexOf(l)!==-1)i=a.closeIndex;else{const y=this.readStopNodeData(e,l,u+1);if(!y)throw new Error(`Unexpected end of ${l}`);i=y.i,p=y.tagContent}const b=new Pe(l);l!==c&&h&&(b[":@"]=this.buildAttributesMap(c,s)),p&&(p=this.parseTextData(p,l,s,!0,h,!0,!0)),s=s.substr(0,s.lastIndexOf(".")),b.add(this.options.textNodeName,p),r.addChild(b)}else{if(c.length>0&&c.lastIndexOf("/")===c.length-1){l[l.length-1]==="/"?(l=l.substr(0,l.length-1),c=l):c=c.substr(0,c.length-1);const p=new Pe(l);l!==c&&h&&(p[":@"]=this.buildAttributesMap(c,s)),s=s.substr(0,s.lastIndexOf(".")),r.addChild(p)}else{const p=new Pe(l);this.tagsNodeStack.push(r),l!==c&&h&&(p[":@"]=this.buildAttributesMap(c,s)),r.addChild(p),r=p}n="",i=u}}else n+=e[i];return t.child},Co=function(e){if(this.options.processEntities){for(let t in this.docTypeEntities){const r=this.docTypeEntities[t];e=e.replace(r.regx,r.val)}for(let t in this.lastEntities){const r=this.lastEntities[t];e=e.replace(r.regex,r.val)}if(this.options.htmlEntities)for(let t in this.htmlEntities){const r=this.htmlEntities[t];e=e.replace(r.regex,r.val)}}return e};function No(e,t,r,n){return e&&(n===void 0&&(n=Object.keys(t.child).length===0),e=this.parseTextData(e,t.tagname,r,!1,t[":@"]?Object.keys(t[":@"]).length!==0:!1,n),e!==void 0&&e!==""&&t.add(this.options.textNodeName,e),e=""),e}function To(e,t,r){const n="*."+r;for(const s in e){const i=e[s];if(n===i||t===i)return!0}return!1}function Po(e,t,r=">"){let n,s="";for(let i=t;i<e.length;i++){let o=e[i];if(n)o===n&&(n="");else if(o==='"'||o==="'")n=o;else if(o===r[0])if(r[1]){if(e[i+1]===r[1])return{data:s,index:i}}else return{data:s,index:i};else o==="	"&&(o=" ");s+=o}}function rt(e,t,r,n){const s=e.indexOf(t,r);if(s===-1)throw new Error(n);return s+t.length-1}function Dr(e,t,r,n=">"){const s=Po(e,t+1,n);if(!s)return;let i=s.data;const o=s.index,a=i.search(/\s/);let l=i,c=!0;if(a!==-1&&(l=i.substr(0,a).replace(/\s\s*$/,""),i=i.substr(a+1)),r){const h=l.indexOf(":");h!==-1&&(l=l.substr(h+1),c=l!==s.data.substr(h+1))}return{tagName:l,tagExp:i,closeIndex:o,attrExpPresent:c}}function zo(e,t,r){const n=r;for(;r<e.length;r++)if(e[r]==="<"&&e[r+1]==="/"){const s=rt(e,">",r,`${t} is not closed`);if(e.substring(r+2,s).trim()===t)return{tagContent:e.substring(n,r),i:s};r=s}}function Ht(e,t,r){if(t&&typeof e=="string"){const n=e.trim();return n==="true"?!0:n==="false"?!1:wo(e,r)}else return Jt.isExist(e)?e:""}var Oo=$o,Rn={};function Ro(e,t){return In(e,t)}function In(e,t,r){let n;const s={};for(let i=0;i<e.length;i++){const o=e[i],a=Io(o);let l="";if(r===void 0?l=a:l=r+"."+a,a===t.textNodeName)n===void 0?n=o[a]:n+=""+o[a];else{if(a===void 0)continue;if(o[a]){let c=In(o[a],t,l);const h=Bo(c,t);o[":@"]?Lo(c,o[":@"],l,t):Object.keys(c).length===1&&c[t.textNodeName]!==void 0&&!t.alwaysCreateTextNode?c=c[t.textNodeName]:Object.keys(c).length===0&&(t.alwaysCreateTextNode?c[t.textNodeName]="":c=""),s[a]!==void 0?(Array.isArray(s[a])||(s[a]=[s[a]]),s[a].push(c)):t.isArray(a,l,h)?s[a]=[c]:s[a]=c}}}return typeof n=="string"?n.length>0&&(s[t.textNodeName]=n):n!==void 0&&(s[t.textNodeName]=n),s}function Io(e){const t=Object.keys(e);for(let r=0;r<t.length;r++){const n=t[r];if(n!==":@")return n}}function Lo(e,t,r,n){if(t){const s=Object.keys(t),i=s.length;for(let o=0;o<i;o++){const a=s[o];n.isArray(a,r+"."+a,!0,!0)?e[a]=[t[a]]:e[a]=t[a]}}}function Bo(e,t){const r=Object.keys(e).length;return!!(r===0||r===1&&e[t.textNodeName])}Rn.prettify=Ro;const{buildOptions:Fo}=Qt,Mo=Oo,{prettify:Uo}=Rn,Ho=Zt;class jo{constructor(t){this.externalEntities={},this.options=Fo(t)}parse(t,r){if(typeof t!="string")if(t.toString)t=t.toString();else throw new Error("XML data is accepted in String or Bytes[] form.");if(r){r===!0&&(r={});const i=Ho.validate(t,r);if(i!==!0)throw Error(`${i.err.msg}:${i.err.line}:${i.err.col}`)}const n=new Mo(this.options);n.addExternalEntities(this.externalEntities);const s=n.parseXml(t);return this.options.preserveOrder||s===void 0?s:Uo(s,this.options)}addEntity(t,r){if(r.indexOf("&")!==-1)throw new Error("Entity value can't have '&'");if(t.indexOf("&")!==-1||t.indexOf(";")!==-1)throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");this.externalEntities[t]=r}}var Vo=jo;const qo=`
`;function Wo(e,t){return Ln(e,t,"",0)}function Ln(e,t,r,n){let s="",i="";t.format&&t.indentBy.length>0&&(i=qo+""+t.indentBy.repeat(n));for(let o=0;o<e.length;o++){const a=e[o],l=Xo(a);let c="";if(r.length===0?c=l:c=`${r}.${l}`,l===t.textNodeName){let p=a[l];Yo(c,t)||(p=t.tagValueProcessor(l,p),p=Bn(p,t)),s+=i+p;continue}else if(l===t.cdataPropName){s+=i+`<![CDATA[${a[l][0][t.textNodeName]}]]>`;continue}else if(l===t.commentPropName){s+=i+`<!--${a[l][0][t.textNodeName]}-->`;continue}else if(l[0]==="?"){const p=Qr(a[":@"],t),b=l==="?xml"?"":i;let y=a[l][0][t.textNodeName];y=y.length!==0?" "+y:"",s+=b+`<${l}${y}${p}?>`;continue}const h=Qr(a[":@"],t);let u=i+`<${l}${h}`,d=Ln(a[l],t,c,n+1);t.unpairedTags.indexOf(l)!==-1?t.suppressUnpairedNode?s+=u+">":s+=u+"/>":(!d||d.length===0)&&t.suppressEmptyNode?s+=u+"/>":s+=u+`>${d}${i}</${l}>`}return s}function Xo(e){const t=Object.keys(e);for(let r=0;r<t.length;r++){const n=t[r];if(n!==":@")return n}}function Qr(e,t){let r="";if(e&&!t.ignoreAttributes)for(let n in e){let s=t.attributeValueProcessor(n,e[n]);s=Bn(s,t),s===!0&&t.suppressBooleanAttributes?r+=` ${n.substr(t.attributeNamePrefix.length)}`:r+=` ${n.substr(t.attributeNamePrefix.length)}="${s}"`}return r}function Yo(e,t){e=e.substr(0,e.length-t.textNodeName.length-1);let r=e.substr(e.lastIndexOf(".")+1);for(let n in t.stopNodes)if(t.stopNodes[n]===e||t.stopNodes[n]==="*."+r)return!0;return!1}function Bn(e,t){if(e&&e.length>0&&t.processEntities)for(let r=0;r<t.entities.length;r++){const n=t.entities[r];e=e.replace(n.regex,n.val)}return e}var Go=Wo;const Zo=Go,Ko={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[]};function er(e){this.options=Object.assign({},Ko,e),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=na),this.processTextOrObjNode=Qo,this.options.format?(this.indentate=ra,this.tagEndChar=`>
`,this.newLine=`
`):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine=""),this.options.suppressEmptyNode?(this.buildTextNode=ta,this.buildObjNode=Jo):(this.buildTextNode=en,this.buildObjNode=Jr),this.buildTextValNode=en,this.buildObjectNode=Jr,this.replaceEntitiesValue=ea,this.buildAttrPairStr=Do}er.prototype.build=function(e){return this.options.preserveOrder?Zo(e,this.options):(Array.isArray(e)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(e={[this.options.arrayNodeName]:e}),this.j2x(e,0).val)};er.prototype.j2x=function(e,t){let r="",n="";for(let s in e)if(typeof e[s]!="undefined")if(e[s]===null)s[0]==="?"?n+=this.indentate(t)+"<"+s+"?"+this.tagEndChar:n+=this.indentate(t)+"<"+s+"/"+this.tagEndChar;else if(e[s]instanceof Date)n+=this.buildTextNode(e[s],s,"",t);else if(typeof e[s]!="object"){const i=this.isAttribute(s);if(i)r+=this.buildAttrPairStr(i,""+e[s]);else if(s===this.options.textNodeName){let o=this.options.tagValueProcessor(s,""+e[s]);n+=this.replaceEntitiesValue(o)}else n+=this.buildTextNode(e[s],s,"",t)}else if(Array.isArray(e[s])){const i=e[s].length;for(let o=0;o<i;o++){const a=e[s][o];typeof a=="undefined"||(a===null?s[0]==="?"?n+=this.indentate(t)+"<"+s+"?"+this.tagEndChar:n+=this.indentate(t)+"<"+s+"/"+this.tagEndChar:typeof a=="object"?n+=this.processTextOrObjNode(a,s,t):n+=this.buildTextNode(a,s,"",t))}}else if(this.options.attributesGroupName&&s===this.options.attributesGroupName){const i=Object.keys(e[s]),o=i.length;for(let a=0;a<o;a++)r+=this.buildAttrPairStr(i[a],""+e[s][i[a]])}else n+=this.processTextOrObjNode(e[s],s,t);return{attrStr:r,val:n}};function Do(e,t){return t=this.options.attributeValueProcessor(e,""+t),t=this.replaceEntitiesValue(t),this.options.suppressBooleanAttributes&&t==="true"?" "+e:" "+e+'="'+t+'"'}function Qo(e,t,r){const n=this.j2x(e,r+1);return e[this.options.textNodeName]!==void 0&&Object.keys(e).length===1?this.buildTextNode(e[this.options.textNodeName],t,n.attrStr,r):this.buildObjNode(n.val,t,n.attrStr,r)}function Jr(e,t,r,n){let s="</"+t+this.tagEndChar,i="";return t[0]==="?"&&(i="?",s=""),r&&e.indexOf("<")===-1?this.indentate(n)+"<"+t+r+i+">"+e+s:this.options.commentPropName!==!1&&t===this.options.commentPropName&&i.length===0?this.indentate(n)+`<!--${e}-->`+this.newLine:this.indentate(n)+"<"+t+r+i+this.tagEndChar+e+this.indentate(n)+s}function Jo(e,t,r,n){return e!==""?this.buildObjectNode(e,t,r,n):t[0]==="?"?this.indentate(n)+"<"+t+r+"?"+this.tagEndChar:this.indentate(n)+"<"+t+r+"/"+this.tagEndChar}function en(e,t,r,n){if(this.options.cdataPropName!==!1&&t===this.options.cdataPropName)return this.indentate(n)+`<![CDATA[${e}]]>`+this.newLine;if(this.options.commentPropName!==!1&&t===this.options.commentPropName)return this.indentate(n)+`<!--${e}-->`+this.newLine;{let s=this.options.tagValueProcessor(t,e);return s=this.replaceEntitiesValue(s),s===""&&this.options.unpairedTags.indexOf(t)!==-1?this.options.suppressUnpairedNode?this.indentate(n)+"<"+t+this.tagEndChar:this.indentate(n)+"<"+t+"/"+this.tagEndChar:this.indentate(n)+"<"+t+r+">"+s+"</"+t+this.tagEndChar}}function ea(e){if(e&&e.length>0&&this.options.processEntities)for(let t=0;t<this.options.entities.length;t++){const r=this.options.entities[t];e=e.replace(r.regex,r.val)}return e}function ta(e,t,r,n){return e===""&&this.options.unpairedTags.indexOf(t)!==-1?this.options.suppressUnpairedNode?this.indentate(n)+"<"+t+this.tagEndChar:this.indentate(n)+"<"+t+"/"+this.tagEndChar:e!==""?this.buildTextValNode(e,t,r,n):t[0]==="?"?this.indentate(n)+"<"+t+r+"?"+this.tagEndChar:this.indentate(n)+"<"+t+r+"/"+this.tagEndChar}function ra(e){return this.options.indentBy.repeat(e)}function na(e){return e.startsWith(this.options.attributeNamePrefix)?e.substr(this.attrPrefixLen):!1}var sa=er;const ia=Zt,oa=Vo,aa=sa;var Nt={XMLParser:oa,XMLValidator:ia,XMLBuilder:aa},la={REF_WHITE:"D50",RGB_MODEL:"sRGB",GAMMA_MODEL:"sRGB",ADAPTION:"Bradford"},ca=e=>ua[e]||[1,1,1],ua={A:[1.0985,1,.35585],B:[.99072,1,.85223],C:[.98074,1,1.18232],D50:[.96422,1,.82521],D55:[.95682,1,.92149],D65:[.95047,1,1.0888],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]},Qe=(e,{refWhite:t=la.REF_WHITE}={})=>{let[r,n,s]=e,i=r+n+s;if(i>0)return[r/i,n/i,n];{let[o,a,l]=ca(t),c=o+a+l;return[o/c,a/c,n]}};class da{constructor({debug:t=!1}={}){this.isDebug=!1,this.xmlParser=new Nt.XMLParser({ignoreAttributes:!1}),this.isDebug=t}getRGBWFromBpd(t){if(!Nt.XMLValidator.validate(t))throw new Error("Could not validate BDP XML.");const{builder_color_space:{head:{L:r,x:n,y:s}}}=this.xmlParser.parse(t);return[[parseFloat(n["@_red"]),parseFloat(n["@_green"]),parseFloat(n["@_blue"]),parseFloat(n["@_white"])],[parseFloat(s["@_red"]),parseFloat(s["@_green"]),parseFloat(s["@_blue"]),parseFloat(s["@_white"])],[parseFloat(r["@_red"]),parseFloat(r["@_green"]),parseFloat(r["@_blue"]),parseFloat(r["@_white"])]]}getRGBWFromBcs(t){if(!Nt.XMLValidator.validate(t))throw new Error("Could not validate BCS XML.");const{builder_color_space:{data:{patch:r}}}=this.xmlParser.parse(t);return this.getRGBWMatrixFromPatches(r)}getRGBWMatrixFromPatches(t=[]){if(t.length<1)return;const r=t.filter(u=>!(u.stimuli.red===0&&u.stimuli.green===0&&u.stimuli.blue===0)).filter(u=>!(u.stimuli.red===1&&u.stimuli.green===1&&u.stimuli.blue===1)),{results:{XYZ:n=void 0}={}}=r.filter(u=>u.stimuli.green===0&&u.stimuli.blue===0).shift()||{},{results:{XYZ:s=void 0}={}}=r.filter(u=>u.stimuli.red===0&&u.stimuli.blue===0).shift()||{},{results:{XYZ:i=void 0}={}}=r.filter(u=>u.stimuli.red===0&&u.stimuli.green===0).shift()||{},[{results:{XYZ:o=void 0}={}}]=t.filter(u=>u.stimuli.red!==0&&u.stimuli.red!==1&&u.stimuli.green!==0&&u.stimuli.green!==1&&u.stimuli.blue!==0&&u.stimuli.blue!==1);if(this.isDebug&&(console.log("redXYZ",n),console.log("greenXYZ",s),console.log("blueXYZ",i),console.log("whiteXYZ",o)),!n||!s||!i||!o)return;const a=Qe([n.X,n.Y,n.Z]),l=Qe([s.X,s.Y,s.Z]),c=Qe([i.X,i.Y,i.Z]),h=Qe([o.X,o.Y,o.Z]);return[[a[0],l[0],c[0],h[0]],[a[1],l[1],c[1],h[1]],[a[2],l[2],c[2],h[2]]]}getRGBWIndexForColor(t){return{red:0,green:1,blue:2,white:3}[t]}}var ha=`:host{--app-spacing-header: var(--sl-spacing-medium);--app-section-spacing: var(--sl-spacing-3x-large);font-family:var(--sl-font-sans);line-height:var(--sl-line-height-dense);padding:0 var(--sl-spacing-small);display:block}h1,h2,h3,p{margin:0 0 var(--sl-spacing-small)}a{color:var(--sl-color-primary-800)}h1{font-size:var(--sl-font-size-x-large);font-weight:var(--sl-font-weight-bold)}h2{font-size:var(--sl-font-size-large);font-weight:var(--sl-font-weight-semibold)}h3{font-size:var(--sl-font-size-medium);font-weight:var(--sl-font-weight-semibold)}ol li{margin-bottom:var(--sl-spacing-medium)}.text-success{color:var(--sl-color-success-700)}.text-error{color:var(--sl-color-danger-600)}.text-red{color:var(--sl-color-red-600)}.text-green{color:var(--sl-color-green-600)}.text-blue{color:var(--sl-color-blue-600)}.text-white{color:var(--sl-color-gray-600)}table{font-family:var(--sl-font-mono);font-size:var(--sl-font-size-small)}td{padding:var(--sl-spacing-x-small) var(--sl-spacing-x-small);font-weight:600}th{padding:var(--sl-spacing-2x-small) var(--sl-spacing-x-small)}tr.separator th{padding-top:var(--sl-spacing-large)}.profile-comparison th,.app-content td{text-align:right}th{font-weight:var(--sl-font-weight-normal);font-family:var(--sl-font-sans)}td.red{background:var(--app-color-bg-r)}td.green{background:var(--app-color-bg-g)}td.blue{background:var(--app-color-bg-b)}td.white{background:var(--app-color-bg-w)}tr.red td{background:var(--app-color-bg-r)}tr.green td{background:var(--app-color-bg-g)}tr.blue td{background:var(--app-color-bg-b)}tr.white td{background:var(--app-color-bg-w)}tr.red td.clear,tr.green td.clear,tr.blue td.clear,tr.white td.clear{background:transparent}.number-percent:after{content:"%"}.align-percent:after{content:"%";opacity:0}.table-responsive{display:block;width:100%;overflow-x:auto}.about-trigger{font-size:var(--sl-font-size-x-large)}.about-dialog{--width: 70ch}.about-dialog>.logo{max-width:32px;height:auto}.about-dialog::part(body){padding-top:0}.about-dialog code{word-break:break-word}.about-dialog th{text-align:left}.about-dialog td{vertical-align:top}.about-dialog ol{margin-left:0;padding-left:var(--sl-spacing-large)}.app-title{display:flex;align-items:center}.app-title>.logo{max-width:32px;height:auto;margin-right:var(--sl-spacing-small)}.app-header{position:fixed;top:0;left:0;width:100%;background:white;display:flex;justify-content:space-between;align-items:center;z-index:1;border-bottom:1px solid var(--sl-input-border-color)}.app-header>.title{margin:var(--app-spacing-header) 0 var(--app-spacing-header) var(--app-spacing-header)}.app-header>.info{margin:var(--app-spacing-header) var(--app-spacing-header) var(--app-spacing-header) 0}.app-content{padding-top:calc(var(--app-header-size) + var(--sl-spacing-large));display:grid;grid-template-columns:1fr;column-gap:var(--app-section-spacing);row-gap:var(--app-section-spacing)}.badge-text{display:flex;align-items:center}.badge-text>.badge{margin-left:var(--sl-spacing-x-small)}@media screen and (min-width: 1024px){.app-content{grid-template-columns:fit-content(100%) auto}}.table-section{margin-bottom:var(--app-section-spacing)}.table-section:last-child{margin-bottom:0}.table-section>.title{margin-bottom:0}.table-section>.file{margin-bottom:var(--sl-spacing-small)}.app-name{font-size:var(--sl-font-size-medium)}.app-name>.desc{display:block;font-size:var(--sl-font-size-x-small);font-weight:lighter}.section-title{display:flex;align-content:center}.section-title>.text{margin-right:var(--sl-spacing-x-small)}.icon-button>.icon{margin-right:var(--sl-spacing-2x-small)}@media screen,print and (min-width: 512px){.app-name{font-size:var(--sl-font-size-large)}}@media print{.about-trigger,.load-file-button{display:none}.app-header{border:none}}
`,pa="/probe-match-verifier/assets/color-spectrum.97f3c94a.png";const fa="probe-match-verifier",ga="1.2.1",ba="Probe Match Verifier",ma="A probe match verification tool for ColourSpace.",va="github:peschee/probe-match-verifier",ya={start:"vite",clean:"rimraf dist coverage",build:"pnpm run clean && tsc && vite build","build:gh-pages":"pnpm run build -- --base=/probe-match-verifier/",preview:"vite preview",prepreview:"pnpm run build",lint:"run-p lint:*","lint:eslint":"eslint --ext .js,.ts .","lint:prettier":"prettier '**/*.{js,ts,md,css}' --check","lint:types":"tsc --noEmit",format:"run-s format:*","format:eslint":"eslint --ext .js,.ts . --fix","format:prettier":"prettier '**/*.{js,ts,md,css}' --write",test:"vitest run","test:watch":"vitest",coverage:"vitest --coverage",preinstall:"npx -y only-allow pnpm",postinstall:"rimraf 'public/shoelace' && cpy --flat 'node_modules/@shoelace-style/shoelace/dist/assets/icons' 'public/shoelace/assets/icons'",release:"npx np --no-publish --no-cleanup --release-draft-only"},wa=["colourspace","lightillusion","probe","matching","verification","spectro"],$a="Peter Siska <63866+peschee@users.noreply.github.com>",xa="MIT",_a={"@types/node":"^17.0.31","@typescript-eslint/eslint-plugin":"^5.22.0","@typescript-eslint/parser":"^5.22.0",c8:"^7.11.2","cpy-cli":"^4.1.0",eslint:"^8.15.0","eslint-config-prettier":"^8.5.0","eslint-plugin-lit":"^1.6.1","eslint-plugin-wc":"^1.3.2","lint-staged":"^12.4.1","npm-run-all":"^4.1.5",prettier:"^2.6.2","remark-gfm":"^3.0.1",rimraf:"^3.0.2","simple-git-hooks":"^2.7.0","ts-lit-plugin":"^1.2.1",typescript:"^4.6.4",vite:"^2.9.8","vite-plugin-html":"^3.2.0","vite-remark-html":"^1.1.1",vitest:"^0.10.5"},ka={"@shoelace-style/shoelace":"^2.0.0-beta.73","@vanillawc/wc-markdown":"^1.6.11","browser-fs-access":"^0.29.5","cie-colorconverter":"^3.1.0","fast-xml-parser":"^4.0.7",lit:"^2.2.3","normalize.css":"^8.0.1"};var tn={name:fa,version:ga,title:ba,description:ma,private:!0,repository:va,scripts:ya,keywords:wa,author:$a,license:xa,devDependencies:_a,dependencies:ka,"lint-staged":{"**/*.{js,ts,md,css}":["prettier --write"],"**/*.{js,ts}":["eslint --fix"]},"simple-git-hooks":{"pre-commit":"pnpx lint-staged","pre-push":"CI=1 pnpm run lint && pnpm test"}},Aa=Object.defineProperty,Ea=Object.getOwnPropertyDescriptor,j=(e,t,r,n)=>{for(var s=n>1?void 0:n?Ea(t,r):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(n?o(t,r,s):o(s))||s);return n&&s&&Aa(t,r,s),s};zt("/probe-match-verifier/shoelace");const Tt=!1;let x=class extends Re{constructor(){super(),this.csXML=new da({debug:Tt}),this.updateHeaderSize=this.updateHeaderSize.bind(this)}async connectedCallback(){super.connectedCallback(),console.info(`Version: ${this.version}`),window.addEventListener("resize",this.updateHeaderSize)}disconnectedCallback(){window.removeEventListener("resize",this.updateHeaderSize),super.disconnectedCallback()}render(){return I`
      <header class="app-header" data-app-header>
        <h1 class="title app-title">
          <img src="${pa}" alt="" class="logo" />
          <span class="text app-name">
            <span class="title">${tn.title}</span>
            <span class="desc">${tn.description}</span>
          </span>
        </h1>
        <sl-icon-button
          name="info-circle"
          label="About"
          @click="${()=>{var e;(e=this.aboutDialog)==null||e.show(),x.trackUmamiEvent("open","about")}}"
          class="info about-trigger"
        ></sl-icon-button>
      </header>

      <main class="app-content" data-app-content>
        <!-- for the css grid to work… -->
        <div>
          <div class="table-section">
            <h2 class="title section-title">
              <span class="text badge-text">
                <span class="text">Reference File (.bpd)</span>
                <sl-badge class="badge">Spectro</sl-badge>
              </span>
              <sl-button size="small" @click="${this.openReferenceBpdFile}" class="button load-file-button icon-button"
                ><sl-icon name="file-earmark-text" class="icon"></sl-icon> Load</sl-button
              >
            </h2>
            ${this.referenceBpd?I`<p class="file">${this.referenceBpd.name}</p>`:k}
            ${this.referenceRGBW?I`<div class="table-responsive">${this.renderRGBW(this.referenceRGBW)}</div>`:k}
          </div>
          <div class="table-section">
            <h2 class="title section-title">
              <span class="text badge-text">
                <span class="text">Verification File (.bcs)</span>
                <sl-badge variant="neutral" class="badge">Meter</sl-badge>
              </span>
              <sl-button size="small" @click="${this.openVerificationBcsFile}" class="button load-file-button icon-button"
                ><sl-icon name="file-earmark-text" class="icon"></sl-icon> Load</sl-button
              >
            </h2>
            ${this.verificationBcs?I`<p class="file">${this.verificationBcs.name}</p>`:k}
            ${this.verificationRGBW?I`<div class="table-responsive">${this.renderRGBW(this.verificationRGBW)}</div>`:k}
          </div>
        </div>
        ${this.referenceRGBW&&this.verificationRGBW&&this.xyYErrors?I` <div class="table-section">
              <h2 class="title">Profiled Meter Comparison</h2>
              <div class="table-responsive">${this.renderComparisonTable(this.referenceRGBW,this.verificationRGBW,this.xyYErrors)}</div>
            </div>`:k}
      </main>

      <footer>
        <sl-dialog data-dialog-about class="about-dialog" @sl-hide="${()=>x.trackUmamiEvent("close","about")}">
          <wc-markdown src="${"/probe-match-verifier/"}HOWTO.md"></wc-markdown>
          <sl-button slot="footer" variant="primary" @click="${()=>{var e;return(e=this.aboutDialog)==null?void 0:e.hide()}}">Close</sl-button>
        </sl-dialog>
      </footer>
    `}async updated(e){super.updated(e),this.updateHeaderSize(),e.has("referenceBpd")&&this.referenceBpd&&(this.referenceRGBW=this.csXML.getRGBWFromBpd(await this.referenceBpd.text()),this.requestUpdate("referenceRGBW")),e.has("verificationBcs")&&this.verificationBcs&&(this.verificationRGBW=this.csXML.getRGBWFromBcs(await this.verificationBcs.text()),this.requestUpdate("verificationRGBW")),(e.has("referenceRGBW")||e.has("verificationRGBW"))&&(this.xyYErrors=this.computexyYErrors(this.referenceRGBW,this.verificationRGBW),this.requestUpdate("xyYErrors"))}async openVerificationBcsFile(){x.trackUmamiEvent("open","bcs");try{const e=await br({description:"BCS files",extensions:[".bcs"]});this.verificationBcs=e,this.requestUpdate("verificationBcs"),x.trackUmamiEvent("load","bcs")}catch(e){console.error(e),x.trackUmamiEvent(`error: ${e}`,"bcs")}}async openReferenceBpdFile(){x.trackUmamiEvent("open","bpd");try{const e=await br({description:"BPD files",extensions:[".bpd"]});this.referenceBpd=e,this.requestUpdate("referenceBpd"),x.trackUmamiEvent("load","bpd")}catch(e){console.error(e),x.trackUmamiEvent(`error: ${e}`,"bpd")}}renderRGBW(e){return e.length<=0?k:I`
      <table>
        <tr>
          <th></th>
          <th class="text-red">R</th>
          <th class="text-green">G</th>
          <th class="text-blue">B</th>
          <th class="text-white">W</th>
        </tr>
        ${e.map((t,r)=>I` <tr>
              <td>${x.getRowLabelForIndex(r)}</td>
              ${t.map((n,s)=>I` <td
                    class="${ps({red:s===this.csXML.getRGBWIndexForColor("red"),green:s===this.csXML.getRGBWIndexForColor("green"),blue:s===this.csXML.getRGBWIndexForColor("blue"),white:s===this.csXML.getRGBWIndexForColor("white")})}"
                  >
                    ${X(n,7)}
                  </td>`)}
            </tr>`)}
      </table>
    `}renderComparisonTable(e,t,r){return x.trackUmamiEvent("render","comparison"),I`
      <table class="profile-comparison">
        ${this.renderComparisonForColor(e,t,r,"red")} ${this.renderComparisonForColor(e,t,r,"green")}
        ${this.renderComparisonForColor(e,t,r,"blue")} ${this.renderComparisonForColor(e,t,r,"white")}
      </table>
    `}renderComparisonForColor(e,t,r,n){const s=this.csXML.getRGBWIndexForColor(n),i={x:e[0][s],y:e[1][s],Y:e[2][s]},o={x:t[0][s],y:t[1][s],Y:t[2][s]};return I`
      <tr class="${n} separator">
        <th class="text-${n}">${Zi(n)}</th>
        <th>Reference</th>
        <th>Profile</th>
        <th class="align-percent">Error</th>
        <th>Pass/Fail</th>
      </tr>
      <tr class="${n}">
        <th>x</th>
        <td>${X(i.x,7)}</td>
        <td>${X(o.x,7)}</td>
        <td class="align-percent">${x.renderError(r[n].x)}</td>
        <td class="clear">${x.renderNistPassFail(x.passesNistxy(r[n].x))}</td>
      </tr>
      <tr class="${n}">
        <th>y</th>
        <td>${X(i.y,7)}</td>
        <td>${X(o.y,7)}</td>
        <td class="align-percent">${x.renderError(r[n].y)}</td>
        <td class="clear">${x.renderNistPassFail(x.passesNistxy(r[n].y))}</td>
      </tr>
      <tr class="${n}">
        <th>Y</th>
        <td>${X(i.Y,7)}</td>
        <td>${X(o.Y,7)}</td>
        <td class="number-percent">${x.renderError(r[n].Y)}</td>
        <td class="clear">${x.renderNistPassFail(x.passesNistY(r[n].Y))}</td>
      </tr>
    `}static getRowLabelForIndex(e){const t=["x","y","Y"];return typeof t[e]=="undefined"?"n/a":t[e]}computexyYErrors(e=[],t=[]){if(e.length<1||t.length<1)return;const r=this.csXML.getRGBWIndexForColor("red"),n=this.csXML.getRGBWIndexForColor("green"),s=this.csXML.getRGBWIndexForColor("blue"),i=this.csXML.getRGBWIndexForColor("white"),o={x:t[0][r]-e[0][r],y:t[1][r]-e[1][r],Y:De(e[2][r],t[2][r])},a={x:t[0][n]-e[0][n],y:t[1][n]-e[1][n],Y:De(e[2][n],t[2][n])},l={x:t[0][s]-e[0][s],y:t[1][s]-e[1][s],Y:De(e[2][s],t[2][s])},c={x:t[0][i]-e[0][i],y:t[1][i]-e[1][i],Y:De(e[2][i],t[2][i])};return{red:o,green:a,blue:l,white:c}}static passesNistxy(e){return Math.abs(e)<=.001}static passesNistY(e){return Math.abs(e)<=1.5}static renderNistPassFail(e){return e?I`<span class="text-success">Pass</span>`:I`<span class="text-error">Fail</span>`}static renderError(e){return X(e,7)}updateHeaderSize(){!this.appHeader||!this.appContent||this.appContent.style.setProperty("--app-header-size",`${this.appHeader.offsetHeight}px`)}static trackUmamiEvent(e,t="custom"){const r=window.umami;!r||r.trackEvent(e,t)}};x.styles=nn(ha);j([cn()],x.prototype,"version",2);j([je()],x.prototype,"referenceBpd",2);j([je()],x.prototype,"verificationBcs",2);j([je()],x.prototype,"referenceRGBW",2);j([je()],x.prototype,"verificationRGBW",2);j([je()],x.prototype,"xyYErrors",2);j([Vt("[data-dialog-about]")],x.prototype,"aboutDialog",2);j([Vt("[data-app-header]")],x.prototype,"appHeader",2);j([Vt("[data-app-content]")],x.prototype,"appContent",2);x=j([as("app-shell")],x)});export default Sa();

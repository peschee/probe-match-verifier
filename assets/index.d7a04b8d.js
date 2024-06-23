var si=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Za=si((Qa,dt)=>{const ri=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}};ri();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=window,ts=at.ShadowRoot&&(at.ShadyCSS===void 0||at.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,br=Symbol(),ms=new WeakMap;class ii{constructor(e,s,r){if(this._$cssResult$=!0,r!==br)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(ts&&e===void 0){const r=s!==void 0&&s.length===1;r&&(e=ms.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ms.set(s,e))}return e}toString(){return this.cssText}}const mr=t=>new ii(typeof t=="string"?t:t+"",void 0,br),ni=(t,e)=>{ts?t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):e.forEach(s=>{const r=document.createElement("style"),i=at.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,t.appendChild(r)})},vs=ts?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const r of e.cssRules)s+=r.cssText;return mr(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ct;const pt=window,ys=pt.trustedTypes,oi=ys?ys.emptyScript:"",ws=pt.reactiveElementPolyfillSupport,qt={toAttribute(t,e){switch(e){case Boolean:t=t?oi:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},vr=(t,e)=>e!==t&&(e==e||t==t),Nt={attribute:!0,type:String,converter:qt,reflect:!1,hasChanged:vr},Gt="finalized";class de extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var s;this.finalize(),((s=this.h)!==null&&s!==void 0?s:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((s,r)=>{const i=this._$Ep(r,s);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,s=Nt){if(s.state&&(s.attribute=!1),this.finalize(),this.elementProperties.set(e,s),!s.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,s);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,s,r){return{get(){return this[s]},set(i){const n=this[e];this[s]=i,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Nt}static finalize(){if(this.hasOwnProperty(Gt))return!1;this[Gt]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const s=this.properties,r=[...Object.getOwnPropertyNames(s),...Object.getOwnPropertySymbols(s)];for(const i of r)this.createProperty(i,s[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)s.unshift(vs(i))}else e!==void 0&&s.push(vs(e));return s}static _$Ep(e,s){const r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(s=>s(this))}addController(e){var s,r;((s=this._$ES)!==null&&s!==void 0?s:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var s;(s=this._$ES)===null||s===void 0||s.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,s)=>{this.hasOwnProperty(s)&&(this._$Ei.set(s,this[s]),delete this[s])})}createRenderRoot(){var e;const s=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ni(s,this.constructor.elementStyles),s}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostConnected)===null||r===void 0?void 0:r.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostDisconnected)===null||r===void 0?void 0:r.call(s)})}attributeChangedCallback(e,s,r){this._$AK(e,r)}_$EO(e,s,r=Nt){var i;const n=this.constructor._$Ep(e,r);if(n!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:qt).toAttribute(s,r.type);this._$El=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(e,s){var r;const i=this.constructor,n=i._$Ev.get(e);if(n!==void 0&&this._$El!==n){const o=i.getPropertyOptions(n),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:qt;this._$El=n,this[n]=l.fromAttribute(s,o.type),this._$El=null}}requestUpdate(e,s,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||vr)(this[e],s)?(this._$AL.has(e)||this._$AL.set(e,s),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let s=!1;const r=this._$AL;try{s=this.shouldUpdate(r),s?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(r)):this._$Ek()}catch(i){throw s=!1,this._$Ek(),i}s&&this._$AE(r)}willUpdate(e){}_$AE(e){var s;(s=this._$ES)===null||s===void 0||s.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((s,r)=>this._$EO(r,this[r],s)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}de[Gt]=!0,de.elementProperties=new Map,de.elementStyles=[],de.shadowRootOptions={mode:"open"},ws==null||ws({ReactiveElement:de}),((Ct=pt.reactiveElementVersions)!==null&&Ct!==void 0?Ct:pt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Tt;const ft=window,ge=ft.trustedTypes,_s=ge?ge.createPolicy("lit-html",{createHTML:t=>t}):void 0,Xt="$lit$",q=`lit$${(Math.random()+"").slice(9)}$`,yr="?"+q,ai=`<${yr}>`,ne=document,Ve=()=>ne.createComment(""),He=t=>t===null||typeof t!="object"&&typeof t!="function",wr=Array.isArray,li=t=>wr(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Pt=`[ 	
\f\r]`,Ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$s=/-->/g,xs=/>/g,D=RegExp(`>|${Pt}(?:([^\\s"'>=/]+)(${Pt}*=${Pt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ks=/'/g,As=/"/g,_r=/^(?:script|style|textarea|title)$/i,ci=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),B=ci(1),oe=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Es=new WeakMap,se=ne.createTreeWalker(ne,129,null,!1);function $r(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return _s!==void 0?_s.createHTML(e):e}const ui=(t,e)=>{const s=t.length-1,r=[];let i,n=e===2?"<svg>":"",o=Ae;for(let l=0;l<s;l++){const a=t[l];let c,h,u=-1,d=0;for(;d<a.length&&(o.lastIndex=d,h=o.exec(a),h!==null);)d=o.lastIndex,o===Ae?h[1]==="!--"?o=$s:h[1]!==void 0?o=xs:h[2]!==void 0?(_r.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=D):h[3]!==void 0&&(o=D):o===D?h[0]===">"?(o=i!=null?i:Ae,u=-1):h[1]===void 0?u=-2:(u=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?D:h[3]==='"'?As:ks):o===As||o===ks?o=D:o===$s||o===xs?o=Ae:(o=D,i=void 0);const p=o===D&&t[l+1].startsWith("/>")?" ":"";n+=o===Ae?a+ai:u>=0?(r.push(c),a.slice(0,u)+Xt+a.slice(u)+q+p):a+q+(u===-2?(r.push(void 0),l):p)}return[$r(t,n+(t[s]||"<?>")+(e===2?"</svg>":"")),r]};class je{constructor({strings:e,_$litType$:s},r){let i;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[c,h]=ui(e,s);if(this.el=je.createElement(c,r),se.currentNode=this.el.content,s===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(i=se.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes()){const u=[];for(const d of i.getAttributeNames())if(d.endsWith(Xt)||d.startsWith(q)){const p=h[o++];if(u.push(d),p!==void 0){const g=i.getAttribute(p.toLowerCase()+Xt).split(q),_=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:_[2],strings:g,ctor:_[1]==="."?di:_[1]==="?"?fi:_[1]==="@"?gi:yt})}else a.push({type:6,index:n})}for(const d of u)i.removeAttribute(d)}if(_r.test(i.tagName)){const u=i.textContent.split(q),d=u.length-1;if(d>0){i.textContent=ge?ge.emptyScript:"";for(let p=0;p<d;p++)i.append(u[p],Ve()),se.nextNode(),a.push({type:2,index:++n});i.append(u[d],Ve())}}}else if(i.nodeType===8)if(i.data===yr)a.push({type:2,index:n});else{let u=-1;for(;(u=i.data.indexOf(q,u+1))!==-1;)a.push({type:7,index:n}),u+=q.length-1}n++}}static createElement(e,s){const r=ne.createElement("template");return r.innerHTML=e,r}}function be(t,e,s=t,r){var i,n,o,l;if(e===oe)return e;let a=r!==void 0?(i=s._$Co)===null||i===void 0?void 0:i[r]:s._$Cl;const c=He(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),c===void 0?a=void 0:(a=new c(t),a._$AT(t,s,r)),r!==void 0?((o=(l=s)._$Co)!==null&&o!==void 0?o:l._$Co=[])[r]=a:s._$Cl=a),a!==void 0&&(e=be(t,a._$AS(t,e.values),a,r)),e}class hi{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var s;const{el:{content:r},parts:i}=this._$AD,n=((s=e==null?void 0:e.creationScope)!==null&&s!==void 0?s:ne).importNode(r,!0);se.currentNode=n;let o=se.nextNode(),l=0,a=0,c=i[0];for(;c!==void 0;){if(l===c.index){let h;c.type===2?h=new Xe(o,o.nextSibling,this,e):c.type===1?h=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(h=new bi(o,this,e)),this._$AV.push(h),c=i[++a]}l!==(c==null?void 0:c.index)&&(o=se.nextNode(),l++)}return se.currentNode=ne,n}v(e){let s=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,s),s+=r.strings.length-2):r._$AI(e[s])),s++}}class Xe{constructor(e,s,r,i){var n;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=i,this._$Cp=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var e,s;return(s=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&s!==void 0?s:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=be(this,e,s),He(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==oe&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):li(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==A&&He(this._$AH)?this._$AA.nextSibling.data=e:this.$(ne.createTextNode(e)),this._$AH=e}g(e){var s;const{values:r,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=je.createElement($r(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)===null||s===void 0?void 0:s._$AD)===n)this._$AH.v(r);else{const o=new hi(n,this),l=o.u(this.options);o.v(r),this.$(l),this._$AH=o}}_$AC(e){let s=Es.get(e.strings);return s===void 0&&Es.set(e.strings,s=new je(e)),s}T(e){wr(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let r,i=0;for(const n of e)i===s.length?s.push(r=new Xe(this.k(Ve()),this.k(Ve()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(e=this._$AA.nextSibling,s){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,s);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var s;this._$AM===void 0&&(this._$Cp=e,(s=this._$AP)===null||s===void 0||s.call(this,e))}}class yt{constructor(e,s,r,i,n){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=s,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,s=this,r,i){const n=this.strings;let o=!1;if(n===void 0)e=be(this,e,s,0),o=!He(e)||e!==this._$AH&&e!==oe,o&&(this._$AH=e);else{const l=e;let a,c;for(e=n[0],a=0;a<n.length-1;a++)c=be(this,l[r+a],s,a),c===oe&&(c=this._$AH[a]),o||(o=!He(c)||c!==this._$AH[a]),c===A?e=A:e!==A&&(e+=(c!=null?c:"")+n[a+1]),this._$AH[a]=c}o&&!i&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class di extends yt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}const pi=ge?ge.emptyScript:"";class fi extends yt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,pi):this.element.removeAttribute(this.name)}}class gi extends yt{constructor(e,s,r,i,n){super(e,s,r,i,n),this.type=5}_$AI(e,s=this){var r;if((e=(r=be(this,e,s,0))!==null&&r!==void 0?r:A)===oe)return;const i=this._$AH,n=e===A&&i!==A||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==A&&(i===A||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s,r;typeof this._$AH=="function"?this._$AH.call((r=(s=this.options)===null||s===void 0?void 0:s.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class bi{constructor(e,s,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){be(this,e)}}const Ss=ft.litHtmlPolyfillSupport;Ss==null||Ss(je,Xe),((Tt=ft.litHtmlVersions)!==null&&Tt!==void 0?Tt:ft.litHtmlVersions=[]).push("2.8.0");const mi=(t,e,s)=>{var r,i;const n=(r=s==null?void 0:s.renderBefore)!==null&&r!==void 0?r:e;let o=n._$litPart$;if(o===void 0){const l=(i=s==null?void 0:s.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=o=new Xe(e.insertBefore(Ve(),l),l,void 0,s!=null?s:{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ot,It;class Be extends de{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,s;const r=super.createRenderRoot();return(e=(s=this.renderOptions).renderBefore)!==null&&e!==void 0||(s.renderBefore=r.firstChild),r}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=mi(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return oe}}Be.finalized=!0,Be._$litElement$=!0,(Ot=globalThis.litElementHydrateSupport)===null||Ot===void 0||Ot.call(globalThis,{LitElement:Be});const Cs=globalThis.litElementPolyfillSupport;Cs==null||Cs({LitElement:Be});((It=globalThis.litElementVersions)!==null&&It!==void 0?It:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vi=t=>e=>typeof e=="function"?((s,r)=>(customElements.define(s,r),r))(t,e):((s,r)=>{const{kind:i,elements:n}=r;return{kind:i,elements:n,finisher(o){customElements.define(s,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}},wi=(t,e,s)=>{e.constructor.createProperty(s,t)};function xr(t){return(e,s)=>s!==void 0?wi(t,e,s):yi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ye(t){return xr({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _i=({finisher:t,descriptor:e})=>(s,r)=>{var i;if(r===void 0){const n=(i=s.originalKey)!==null&&i!==void 0?i:s.key,o=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(s.key)}:{...s,key:n};return t!=null&&(o.finisher=function(l){t(l,n)}),o}{const n=s.constructor;e!==void 0&&Object.defineProperty(s,r,e(r)),t==null||t(n,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ss(t,e){return _i({descriptor:s=>{const r={get(){var i,n;return(n=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const i=typeof s=="symbol"?Symbol():"__"+s;r.get=function(){var n,o;return this[i]===void 0&&(this[i]=(o=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(t))!==null&&o!==void 0?o:null),this[i]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zt;((zt=window.HTMLSlotElement)===null||zt===void 0?void 0:zt.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},xi=t=>(...e)=>({_$litDirective$:t,values:e});class ki{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,r){this._$Ct=e,this._$AM=s,this._$Ci=r}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ai=xi(class extends ki{constructor(t){var e;if(super(t),t.type!==$i.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var s,r;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!(!((s=this.nt)===null||s===void 0)&&s.has(n))&&this.it.add(n);return this.render(e)}const i=t.element.classList;this.it.forEach(n=>{n in e||(i.remove(n),this.it.delete(n))});for(const n in e){const o=!!e[n];o===this.it.has(n)||((r=this.nt)===null||r===void 0?void 0:r.has(n))||(o?(i.add(n),this.it.add(n)):(i.remove(n),this.it.delete(n)))}return oe}}),rs=(()=>{if(typeof self=="undefined")return!1;if("top"in self&&self!==top)try{}catch{return!1}else if("showOpenFilePicker"in self)return"showOpenFilePicker";return!1})(),Ei=rs?Promise.resolve().then(function(){return Ni}):Promise.resolve().then(function(){return Ri});async function Ns(...t){return(await Ei).default(...t)}rs?Promise.resolve().then(function(){return Pi}):Promise.resolve().then(function(){return Bi});rs?Promise.resolve().then(function(){return Ii}):Promise.resolve().then(function(){return Mi});const Si=async t=>{const e=await t.getFile();return e.handle=t,e};var Ci=async(t=[{}])=>{Array.isArray(t)||(t=[t]);const e=[];t.forEach((i,n)=>{e[n]={description:i.description||"",accept:{}},i.mimeTypes?i.mimeTypes.map(o=>{e[n].accept[o]=i.extensions||[]}):e[n].accept["*/*"]=i.extensions||[]});const s=await window.showOpenFilePicker({id:t[0].id,startIn:t[0].startIn,types:e,multiple:t[0].multiple||!1,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1}),r=await Promise.all(s.map(Si));return t[0].multiple?r:r[0]},Ni={__proto__:null,default:Ci};function lt(t){function e(s){if(Object(s)!==s)return Promise.reject(new TypeError(s+" is not an object."));var r=s.done;return Promise.resolve(s.value).then(function(i){return{value:i,done:r}})}return lt=function(s){this.s=s,this.n=s.next},lt.prototype={s:null,n:null,next:function(){return e(this.n.apply(this.s,arguments))},return:function(s){var r=this.s.return;return r===void 0?Promise.resolve({value:s,done:!0}):e(r.apply(this.s,arguments))},throw:function(s){var r=this.s.return;return r===void 0?Promise.reject(s):e(r.apply(this.s,arguments))}},new lt(t)}const kr=async(t,e,s=t.name,r)=>{const i=[],n=[];var o,l=!1,a=!1;try{for(var c,h=function(u){var d,p,g,_=2;for(typeof Symbol!="undefined"&&(p=Symbol.asyncIterator,g=Symbol.iterator);_--;){if(p&&(d=u[p])!=null)return d.call(u);if(g&&(d=u[g])!=null)return new lt(d.call(u));p="@@asyncIterator",g="@@iterator"}throw new TypeError("Object is not async iterable")}(t.values());l=!(c=await h.next()).done;l=!1){const u=c.value,d=`${s}/${u.name}`;u.kind==="file"?n.push(u.getFile().then(p=>(p.directoryHandle=t,p.handle=u,Object.defineProperty(p,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>d})))):u.kind!=="directory"||!e||r&&r(u)||i.push(kr(u,e,d,r))}}catch(u){a=!0,o=u}finally{try{l&&h.return!=null&&await h.return()}finally{if(a)throw o}}return[...(await Promise.all(i)).flat(),...await Promise.all(n)]};var Ti=async(t={})=>{t.recursive=t.recursive||!1;const e=await window.showDirectoryPicker({id:t.id,startIn:t.startIn});return kr(e,t.recursive,void 0,t.skipDirectory)},Pi={__proto__:null,default:Ti},Oi=async(t,e=[{}],s=null,r=!1,i=null)=>{Array.isArray(e)||(e=[e]),e[0].fileName=e[0].fileName||"Untitled";const n=[];let o=null;if(t instanceof Blob&&t.type?o=t.type:t.headers&&t.headers.get("content-type")&&(o=t.headers.get("content-type")),e.forEach((c,h)=>{n[h]={description:c.description||"",accept:{}},c.mimeTypes?(h===0&&o&&c.mimeTypes.push(o),c.mimeTypes.map(u=>{n[h].accept[u]=c.extensions||[]})):o?n[h].accept[o]=c.extensions||[]:n[h].accept["*/*"]=c.extensions||[]}),s)try{await s.getFile()}catch(c){if(s=null,r)throw c}const l=s||await window.showSaveFilePicker({suggestedName:e[0].fileName,id:e[0].id,startIn:e[0].startIn,types:n,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1});!s&&i&&i();const a=await l.createWritable();return"stream"in t?(await t.stream().pipeTo(a),l):"body"in t?(await t.body.pipeTo(a),l):(await a.write(await t),await a.close(),l)},Ii={__proto__:null,default:Oi},zi=async(t=[{}])=>(Array.isArray(t)||(t=[t]),new Promise((e,s)=>{const r=document.createElement("input");r.type="file";const i=[...t.map(l=>l.mimeTypes||[]),...t.map(l=>l.extensions||[])].join();r.multiple=t[0].multiple||!1,r.accept=i||"";const n=l=>{typeof o=="function"&&o(),e(l)},o=t[0].legacySetup&&t[0].legacySetup(n,()=>o(s),r);r.addEventListener("change",()=>{n(r.multiple?Array.from(r.files):r.files[0])}),r.click()})),Ri={__proto__:null,default:zi},Li=async(t=[{}])=>(Array.isArray(t)||(t=[t]),t[0].recursive=t[0].recursive||!1,new Promise((e,s)=>{const r=document.createElement("input");r.type="file",r.webkitdirectory=!0;const i=o=>{typeof n=="function"&&n(),e(o)},n=t[0].legacySetup&&t[0].legacySetup(i,()=>n(s),r);r.addEventListener("change",()=>{let o=Array.from(r.files);t[0].recursive?t[0].recursive&&t[0].skipDirectory&&(o=o.filter(l=>l.webkitRelativePath.split("/").every(a=>!t[0].skipDirectory({name:a,kind:"directory"})))):o=o.filter(l=>l.webkitRelativePath.split("/").length===2),i(o)}),r.click()})),Bi={__proto__:null,default:Li},Fi=async(t,e={})=>{Array.isArray(e)&&(e=e[0]);const s=document.createElement("a");let r=t;"body"in t&&(r=await async function(o,l){const a=o.getReader(),c=new ReadableStream({start:d=>async function p(){return a.read().then(({done:g,value:_})=>{if(!g)return d.enqueue(_),p();d.close()})}()}),h=new Response(c),u=await h.blob();return a.releaseLock(),new Blob([u],{type:l})}(t.body,t.headers.get("content-type"))),s.download=e.fileName||"Untitled",s.href=URL.createObjectURL(await r);const i=()=>{typeof n=="function"&&n()},n=e.legacySetup&&e.legacySetup(i,()=>n(),s);return s.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(s.href),3e4),i()}),s.click(),null},Mi={__proto__:null,default:Fi},Yt="";function Zt(t){Yt=t}function Ui(t=""){if(!Yt){const e=[...document.getElementsByTagName("script")],s=e.find(r=>r.hasAttribute("data-shoelace"));if(s)Zt(s.getAttribute("data-shoelace"));else{const r=e.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let i="";r&&(i=r.getAttribute("src")),Zt(i.split("/").slice(0,-1).join("/"))}}return Yt.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Ar=Object.defineProperty,Vi=Object.defineProperties,Hi=Object.getOwnPropertyDescriptor,ji=Object.getOwnPropertyDescriptors,Ts=Object.getOwnPropertySymbols,Wi=Object.prototype.hasOwnProperty,qi=Object.prototype.propertyIsEnumerable,Rt=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Ps=(t,e,s)=>e in t?Ar(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,ye=(t,e)=>{for(var s in e||(e={}))Wi.call(e,s)&&Ps(t,s,e[s]);if(Ts)for(var s of Ts(e))qi.call(e,s)&&Ps(t,s,e[s]);return t},is=(t,e)=>Vi(t,ji(e)),b=(t,e,s,r)=>{for(var i=r>1?void 0:r?Hi(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(i=(r?o(e,s,i):o(i))||i);return r&&i&&Ar(e,s,i),i},Gi=function(t,e){this[0]=t,this[1]=e},Xi=t=>{var e=t[Rt("asyncIterator")],s=!1,r,i={};return e==null?(e=t[Rt("iterator")](),r=n=>i[n]=o=>e[n](o)):(e=e.call(t),r=n=>i[n]=o=>{if(s){if(s=!1,n==="throw")throw o;return o}return s=!0,{done:!1,value:new Gi(new Promise(l=>{var a=e[n](o);if(!(a instanceof Object))throw TypeError("Object expected");l(a)}),1)}}),i[Rt("iterator")]=()=>i,r("next"),"throw"in e?r("throw"):i.throw=n=>{throw n},"return"in e&&r("return"),i};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=globalThis,ns=ct.ShadowRoot&&(ct.ShadyCSS===void 0||ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,os=Symbol(),Os=new WeakMap;class Er{constructor(e,s,r){if(this._$cssResult$=!0,r!==os)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(ns&&e===void 0){const r=s!==void 0&&s.length===1;r&&(e=Os.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Os.set(s,e))}return e}toString(){return this.cssText}}const Yi=t=>new Er(typeof t=="string"?t:t+"",void 0,os),ce=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((r,i,n)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new Er(s,t,os)},Zi=(t,e)=>{if(ns)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const r=document.createElement("style"),i=ct.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,t.appendChild(r)}},Is=ns?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const r of e.cssRules)s+=r.cssText;return Yi(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ki,defineProperty:Qi,getOwnPropertyDescriptor:Ji,getOwnPropertyNames:Di,getOwnPropertySymbols:en,getPrototypeOf:tn}=Object,X=globalThis,zs=X.trustedTypes,sn=zs?zs.emptyScript:"",Lt=X.reactiveElementPolyfillSupport,Fe=(t,e)=>t,gt={toAttribute(t,e){switch(e){case Boolean:t=t?sn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},as=(t,e)=>!Ki(t,e),Rs={attribute:!0,type:String,converter:gt,reflect:!1,hasChanged:as};var ur,hr;(ur=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(hr=X.litPropertyMetadata)!=null||(X.litPropertyMetadata=new WeakMap);class pe extends HTMLElement{static addInitializer(e){var s;this._$Ei(),((s=this.l)!=null?s:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=Rs){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(e,s),!s.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,s);i!==void 0&&Qi(this.prototype,e,i)}}static getPropertyDescriptor(e,s,r){var o;const{get:i,set:n}=(o=Ji(this.prototype,e))!=null?o:{get(){return this[s]},set(l){this[s]=l}};return{get(){return i==null?void 0:i.call(this)},set(l){const a=i==null?void 0:i.call(this);n.call(this,l),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var s;return(s=this.elementProperties.get(e))!=null?s:Rs}static _$Ei(){if(this.hasOwnProperty(Fe("elementProperties")))return;const e=tn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Fe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Fe("properties"))){const s=this.properties,r=[...Di(s),...en(s)];for(const i of r)this.createProperty(i,s[i])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[r,i]of s)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[s,r]of this.elementProperties){const i=this._$Eu(s,r);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)s.unshift(Is(i))}else e!==void 0&&s.push(Is(e));return s}static _$Eu(e,s){const r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s,r;((s=this._$EO)!=null?s:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var s;(s=this._$EO)==null||s.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const r of s.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var s;const e=(s=this.shadowRoot)!=null?s:this.attachShadow(this.constructor.shadowRootOptions);return Zi(e,this.constructor.elementStyles),e}connectedCallback(){var e,s;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(s=this._$EO)==null||s.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostDisconnected)==null?void 0:r.call(s)})}attributeChangedCallback(e,s,r){this._$AK(e,r)}_$EC(e,s){var n;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const o=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:gt).toAttribute(s,r.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,s){var n;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:gt;this._$Em=i,this[i]=l.fromAttribute(s,o.type),this._$Em=null}}requestUpdate(e,s,r){var i;if(e!==void 0){if(r!=null||(r=this.constructor.getPropertyOptions(e)),!((i=r.hasChanged)!=null?i:as)(this[e],s))return;this.P(e,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,s,r){var i;this._$AL.has(e)||this._$AL.set(e,s),r.reflect===!0&&this._$Em!==e&&((i=this._$Ej)!=null?i:this._$Ej=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r,i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((r=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,l]of this._$Ep)this[o]=l;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,l]of n)l.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],l)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(s)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$EO)==null||s.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EC(s,this[s]))),this._$EU()}updated(e){}firstUpdated(e){}}var dr;pe.elementStyles=[],pe.shadowRootOptions={mode:"open"},pe[Fe("elementProperties")]=new Map,pe[Fe("finalized")]=new Map,Lt==null||Lt({ReactiveElement:pe}),((dr=X.reactiveElementVersions)!=null?dr:X.reactiveElementVersions=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=globalThis,bt=Me.trustedTypes,Ls=bt?bt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Sr="$lit$",G=`lit$${Math.random().toFixed(9).slice(2)}$`,Cr="?"+G,rn=`<${Cr}>`,ae=document,We=()=>ae.createComment(""),qe=t=>t===null||typeof t!="object"&&typeof t!="function",Nr=Array.isArray,nn=t=>Nr(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Bt=`[ 	
\f\r]`,Ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bs=/-->/g,Fs=/>/g,ee=RegExp(`>|${Bt}(?:([^\\s"'>=/]+)(${Bt}*=${Bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ms=/'/g,Us=/"/g,Tr=/^(?:script|style|textarea|title)$/i,on=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),me=on(1),le=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),Vs=new WeakMap,re=ae.createTreeWalker(ae,129);function Pr(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ls!==void 0?Ls.createHTML(e):e}const an=(t,e)=>{const s=t.length-1,r=[];let i,n=e===2?"<svg>":"",o=Ee;for(let l=0;l<s;l++){const a=t[l];let c,h,u=-1,d=0;for(;d<a.length&&(o.lastIndex=d,h=o.exec(a),h!==null);)d=o.lastIndex,o===Ee?h[1]==="!--"?o=Bs:h[1]!==void 0?o=Fs:h[2]!==void 0?(Tr.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=ee):h[3]!==void 0&&(o=ee):o===ee?h[0]===">"?(o=i!=null?i:Ee,u=-1):h[1]===void 0?u=-2:(u=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?ee:h[3]==='"'?Us:Ms):o===Us||o===Ms?o=ee:o===Bs||o===Fs?o=Ee:(o=ee,i=void 0);const p=o===ee&&t[l+1].startsWith("/>")?" ":"";n+=o===Ee?a+rn:u>=0?(r.push(c),a.slice(0,u)+Sr+a.slice(u)+G+p):a+G+(u===-2?l:p)}return[Pr(t,n+(t[s]||"<?>")+(e===2?"</svg>":"")),r]};class Ge{constructor({strings:e,_$litType$:s},r){let i;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[c,h]=an(e,s);if(this.el=Ge.createElement(c,r),re.currentNode=this.el.content,s===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=re.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(Sr)){const d=h[o++],p=i.getAttribute(u).split(G),g=/([.?@])?(.*)/.exec(d);a.push({type:1,index:n,name:g[2],strings:p,ctor:g[1]==="."?cn:g[1]==="?"?un:g[1]==="@"?hn:wt}),i.removeAttribute(u)}else u.startsWith(G)&&(a.push({type:6,index:n}),i.removeAttribute(u));if(Tr.test(i.tagName)){const u=i.textContent.split(G),d=u.length-1;if(d>0){i.textContent=bt?bt.emptyScript:"";for(let p=0;p<d;p++)i.append(u[p],We()),re.nextNode(),a.push({type:2,index:++n});i.append(u[d],We())}}}else if(i.nodeType===8)if(i.data===Cr)a.push({type:2,index:n});else{let u=-1;for(;(u=i.data.indexOf(G,u+1))!==-1;)a.push({type:7,index:n}),u+=G.length-1}n++}}static createElement(e,s){const r=ae.createElement("template");return r.innerHTML=e,r}}function ve(t,e,s=t,r){var o,l,a;if(e===le)return e;let i=r!==void 0?(o=s._$Co)==null?void 0:o[r]:s._$Cl;const n=qe(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,s,r)),r!==void 0?((a=s._$Co)!=null?a:s._$Co=[])[r]=i:s._$Cl=i),i!==void 0&&(e=ve(t,i._$AS(t,e.values),i,r)),e}class ln{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var c;const{el:{content:s},parts:r}=this._$AD,i=((c=e==null?void 0:e.creationScope)!=null?c:ae).importNode(s,!0);re.currentNode=i;let n=re.nextNode(),o=0,l=0,a=r[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new Ze(n,n.nextSibling,this,e):a.type===1?h=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(h=new dn(n,this,e)),this._$AV.push(h),a=r[++l]}o!==(a==null?void 0:a.index)&&(n=re.nextNode(),o++)}return re.currentNode=ae,i}p(e){let s=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,s),s+=r.strings.length-2):r._$AI(e[s])),s++}}class Ze{get _$AU(){var e,s;return(s=(e=this._$AM)==null?void 0:e._$AU)!=null?s:this._$Cv}constructor(e,s,r,i){var n;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=(n=i==null?void 0:i.isConnected)!=null?n:!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=ve(this,e,s),qe(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==le&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):nn(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==N&&qe(this._$AH)?this._$AA.nextSibling.data=e:this.T(ae.createTextNode(e)),this._$AH=e}$(e){var n;const{values:s,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Ge.createElement(Pr(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(s);else{const o=new ln(i,this),l=o.u(this.options);o.p(s),this.T(l),this._$AH=o}}_$AC(e){let s=Vs.get(e.strings);return s===void 0&&Vs.set(e.strings,s=new Ge(e)),s}k(e){Nr(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let r,i=0;for(const n of e)i===s.length?s.push(r=new Ze(this.S(We()),this.S(We()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(e=this._$AA.nextSibling,s){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,s);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}}class wt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,r,i,n){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=s,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=N}_$AI(e,s=this,r,i){const n=this.strings;let o=!1;if(n===void 0)e=ve(this,e,s,0),o=!qe(e)||e!==this._$AH&&e!==le,o&&(this._$AH=e);else{const l=e;let a,c;for(e=n[0],a=0;a<n.length-1;a++)c=ve(this,l[r+a],s,a),c===le&&(c=this._$AH[a]),o||(o=!qe(c)||c!==this._$AH[a]),c===N?e=N:e!==N&&(e+=(c!=null?c:"")+n[a+1]),this._$AH[a]=c}o&&!i&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class cn extends wt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}}class un extends wt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==N)}}class hn extends wt{constructor(e,s,r,i,n){super(e,s,r,i,n),this.type=5}_$AI(e,s=this){var o;if((e=(o=ve(this,e,s,0))!=null?o:N)===le)return;const r=this._$AH,i=e===N&&r!==N||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==N&&(r===N||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s,r;typeof this._$AH=="function"?this._$AH.call((r=(s=this.options)==null?void 0:s.host)!=null?r:this.element,e):this._$AH.handleEvent(e)}}class dn{constructor(e,s,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ve(this,e)}}const Ft=Me.litHtmlPolyfillSupport;var pr;Ft==null||Ft(Ge,Ze),((pr=Me.litHtmlVersions)!=null?pr:Me.litHtmlVersions=[]).push("3.1.4");const pn=(t,e,s)=>{var n,o;const r=(n=s==null?void 0:s.renderBefore)!=null?n:e;let i=r._$litPart$;if(i===void 0){const l=(o=s==null?void 0:s.renderBefore)!=null?o:null;r._$litPart$=i=new Ze(e.insertBefore(We(),l),l,void 0,s!=null?s:{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ue extends pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s,r;const e=super.createRenderRoot();return(r=(s=this.renderOptions).renderBefore)!=null||(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=pn(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return le}}var fr;Ue._$litElement$=!0,Ue.finalized=!0,(fr=globalThis.litElementHydrateSupport)==null||fr.call(globalThis,{LitElement:Ue});const Mt=globalThis.litElementPolyfillSupport;Mt==null||Mt({LitElement:Ue});var gr;((gr=globalThis.litElementVersions)!=null?gr:globalThis.litElementVersions=[]).push("4.0.6");var fn=ce`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
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
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const Kt=new Set,gn=new MutationObserver(Rr),fe=new Map;let Or=document.documentElement.dir||"ltr",Ir=document.documentElement.lang||navigator.language,te;gn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function zr(...t){t.map(e=>{const s=e.$code.toLowerCase();fe.has(s)?fe.set(s,Object.assign(Object.assign({},fe.get(s)),e)):fe.set(s,e),te||(te=e)}),Rr()}function Rr(){Or=document.documentElement.dir||"ltr",Ir=document.documentElement.lang||navigator.language,[...Kt.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}class bn{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Kt.add(this.host)}hostDisconnected(){Kt.delete(this.host)}dir(){return`${this.host.dir||Or}`.toLowerCase()}lang(){return`${this.host.lang||Ir}`.toLowerCase()}getTranslationData(e){var s,r;const i=new Intl.Locale(e.replace(/_/g,"-")),n=i==null?void 0:i.language.toLowerCase(),o=(r=(s=i==null?void 0:i.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&r!==void 0?r:"",l=fe.get(`${n}-${o}`),a=fe.get(n);return{locale:i,language:n,region:o,primary:l,secondary:a}}exists(e,s){var r;const{primary:i,secondary:n}=this.getTranslationData((r=s.lang)!==null&&r!==void 0?r:this.lang());return s=Object.assign({includeFallback:!1},s),!!(i&&i[e]||n&&n[e]||s.includeFallback&&te&&te[e])}term(e,...s){const{primary:r,secondary:i}=this.getTranslationData(this.lang());let n;if(r&&r[e])n=r[e];else if(i&&i[e])n=i[e];else if(te&&te[e])n=te[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof n=="function"?n(...s):n}date(e,s){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),s).format(e)}number(e,s){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),s).format(e)}relativeTime(e,s,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,s)}}var Lr={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};zr(Lr);var mn=Lr,ls=class extends bn{};zr(mn);var we=ce`
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
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vn={attribute:!0,type:String,converter:gt,reflect:!1,hasChanged:as},yn=(t=vn,e,s)=>{const{kind:r,metadata:i}=s;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(s.name,t),r==="accessor"){const{name:o}=s;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,t)},init(l){return l!==void 0&&this.P(o,void 0,t),l}}}if(r==="setter"){const{name:o}=s;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,t)}}throw Error("Unsupported decorator location: "+r)};function y(t){return(e,s)=>typeof s=="object"?yn(t,e,s):((r,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(i,n):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _t(t){return y({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hs=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ke(t,e){return(s,r,i)=>{const n=o=>{var l,a;return(a=(l=o.renderRoot)==null?void 0:l.querySelector(t))!=null?a:null};if(e){const{get:o,set:l}=typeof r=="object"?s:i!=null?i:(()=>{const a=Symbol();return{get(){return this[a]},set(c){this[a]=c}}})();return Hs(s,r,{get(){let a=o.call(this);return a===void 0&&(a=n(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return Hs(s,r,{get(){return n(this)}})}}var U=class extends Ue{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const s=new CustomEvent(t,ye({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(s),s}static define(t,e=this,s={}){const r=customElements.get(t);if(!r){customElements.define(t,class extends e{},s);return}let i=" (unknown version)",n=i;"version"in e&&e.version&&(i=" v"+e.version),"version"in r&&r.version&&(n=" v"+r.version),!(i&&n&&i===n)&&console.warn(`Attempted to register <${t}>${i}, but <${t}>${n} has already been registered.`)}};U.version="2.15.1";U.dependencies={};b([y()],U.prototype,"dir",2);b([y()],U.prototype,"lang",2);var Br=class extends U{constructor(){super(...arguments),this.localize=new ls(this)}render(){return me`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Br.styles=[we,fn];var Se=new WeakMap,Ce=new WeakMap,Ne=new WeakMap,Ut=new WeakSet,tt=new WeakMap,wn=class{constructor(t,e){this.handleFormData=s=>{const r=this.options.disabled(this.host),i=this.options.name(this.host),n=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!o&&typeof i=="string"&&i.length>0&&typeof n!="undefined"&&(Array.isArray(n)?n.forEach(l=>{s.formData.append(i,l.toString())}):s.formData.append(i,n.toString()))},this.handleFormSubmit=s=>{var r;const i=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=Se.get(this.form))==null||r.forEach(o=>{this.setUserInteracted(o,!0)})),this.form&&!this.form.noValidate&&!i&&!n(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),tt.set(this.host,[])},this.handleInteraction=s=>{const r=tt.get(this.host);r.includes(s.type)||r.push(s.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const r of s)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const r of s)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=ye({form:s=>{const r=s.form;if(r){const n=s.getRootNode().querySelector(`#${r}`);if(n)return n}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var r;return(r=s.disabled)!=null?r:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,r)=>s.value=r,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),tt.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),tt.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Se.has(this.form)?Se.get(this.form).add(this.host):Se.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Ce.has(this.form)||(Ce.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ne.has(this.form)||(Ne.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Se.get(this.form);!t||(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Ce.has(this.form)&&(this.form.reportValidity=Ce.get(this.form),Ce.delete(this.form)),Ne.has(this.form)&&(this.form.checkValidity=Ne.get(this.form),Ne.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Ut.add(t):Ut.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const s=document.createElement("button");s.type=t,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",e&&(s.name=e.name,s.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{e.hasAttribute(r)&&s.setAttribute(r,e.getAttribute(r))})),this.form.append(s),s.click(),s.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,s=Boolean(Ut.has(e)),r=Boolean(e.required);e.toggleAttribute("data-required",r),e.toggleAttribute("data-optional",!r),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&s),e.toggleAttribute("data-user-valid",t&&s)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},cs=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(is(ye({},cs),{valid:!1,valueMissing:!0}));Object.freeze(is(ye({},cs),{valid:!1,customError:!0}));var _n=ce`
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
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
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

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
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

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
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

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
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
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
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
    height: auto;
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
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
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
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,$n=ce`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,xn={name:"default",resolver:t=>Ui(`assets/icons/${t}.svg`)},kn=xn,js={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
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
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
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
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
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
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},An={name:"system",resolver:t=>t in js?`data:image/svg+xml,${encodeURIComponent(js[t])}`:""},En=An,Sn=[kn,En],Qt=[];function Cn(t){Qt.push(t)}function Nn(t){Qt=Qt.filter(e=>e!==t)}function Ws(t){return Sn.find(e=>e.name===t)}function $t(t,e){const s=ye({waitUntilFirstUpdate:!1},e);return(r,i)=>{const{update:n}=r,o=Array.isArray(t)?t:[t];r.update=function(l){o.forEach(a=>{const c=a;if(l.has(c)){const h=l.get(c),u=this[c];h!==u&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[i](h,u)}}),n.call(this,l)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tn=(t,e)=>e===void 0?(t==null?void 0:t._$litType$)!==void 0:(t==null?void 0:t._$litType$)===e;var Te=Symbol(),st=Symbol(),Vt,Ht=new Map,V=class extends U{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var s;let r;if(e!=null&&e.spriteSheet){this.svg=me`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;const i=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(i),this.svg}try{if(r=await fetch(t,{mode:"cors"}),!r.ok)return r.status===410?Te:st}catch{return st}try{const i=document.createElement("div");i.innerHTML=await r.text();const n=i.firstElementChild;if(((s=n==null?void 0:n.tagName)==null?void 0:s.toLowerCase())!=="svg")return Te;Vt||(Vt=new DOMParser);const l=Vt.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):Te}catch{return Te}}connectedCallback(){super.connectedCallback(),Cn(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Nn(this)}getIconSource(){const t=Ws(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:s}=this.getIconSource(),r=s?Ws(this.library):void 0;if(!e){this.svg=null;return}let i=Ht.get(e);if(i||(i=this.resolveIcon(e,r),Ht.set(e,i)),!this.initialRender)return;const n=await i;if(n===st&&Ht.delete(e),e===this.getIconSource().url){if(Tn(n)){this.svg=n;return}switch(n){case st:case Te:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(t=r==null?void 0:r.mutator)==null||t.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};V.styles=[we,$n];b([_t()],V.prototype,"svg",2);b([y({reflect:!0})],V.prototype,"name",2);b([y()],V.prototype,"src",2);b([y()],V.prototype,"label",2);b([y({reflect:!0})],V.prototype,"library",2);b([$t("label")],V.prototype,"handleLabelChange",1);b([$t(["name","src","library"])],V.prototype,"setIcon",1);var Fr=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=s=>{const r=s.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},On=t=>(...e)=>({_$litDirective$:t,values:e});class In{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,r){this._$Ct=e,this._$AM=s,this._$Ci=r}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=On(class extends In{constructor(t){var e;if(super(t),t.type!==Pn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((r=this.nt)!=null&&r.has(n))&&this.st.add(n);return this.render(e)}const s=t.element.classList;for(const n of this.st)n in e||(s.remove(n),this.st.delete(n));for(const n in e){const o=!!e[n];o===this.st.has(n)||((i=this.nt)==null?void 0:i.has(n))||(o?(s.add(n),this.st.add(n)):(s.remove(n),this.st.delete(n)))}return le}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mr=Symbol.for(""),zn=t=>{if((t==null?void 0:t.r)===Mr)return t==null?void 0:t._$litStatic$},mt=(t,...e)=>({_$litStatic$:e.reduce((s,r,i)=>s+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+t[i+1],t[0]),r:Mr}),qs=new Map,Rn=t=>(e,...s)=>{const r=s.length;let i,n;const o=[],l=[];let a,c=0,h=!1;for(;c<r;){for(a=e[c];c<r&&(n=s[c],(i=zn(n))!==void 0);)a+=i+e[++c],h=!0;c!==r&&l.push(n),o.push(a),c++}if(c===r&&o.push(e[r]),h){const u=o.join("$$lit$$");(e=qs.get(u))===void 0&&(o.raw=o,qs.set(u,e=o)),s=l}return t(e,...s)},ut=Rn(me);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=t=>t!=null?t:N;var x=class extends U{constructor(){super(...arguments),this.formControlController=new wn(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Fr(this,"[default]","prefix","suffix"),this.localize=new ls(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:cs}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?mt`a`:mt`button`;return ut`
      <${e}
        part="base"
        class=${xt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${C(t?void 0:this.disabled)}
        type=${C(t?void 0:this.type)}
        title=${this.title}
        name=${C(t?void 0:this.name)}
        value=${C(t?void 0:this.value)}
        href=${C(t?this.href:void 0)}
        target=${C(t?this.target:void 0)}
        download=${C(t?this.download:void 0)}
        rel=${C(t?this.rel:void 0)}
        role=${C(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?ut` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?ut`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};x.styles=[we,_n];x.dependencies={"sl-icon":V,"sl-spinner":Br};b([Ke(".button")],x.prototype,"button",2);b([_t()],x.prototype,"hasFocus",2);b([_t()],x.prototype,"invalid",2);b([y()],x.prototype,"title",2);b([y({reflect:!0})],x.prototype,"variant",2);b([y({reflect:!0})],x.prototype,"size",2);b([y({type:Boolean,reflect:!0})],x.prototype,"caret",2);b([y({type:Boolean,reflect:!0})],x.prototype,"disabled",2);b([y({type:Boolean,reflect:!0})],x.prototype,"loading",2);b([y({type:Boolean,reflect:!0})],x.prototype,"outline",2);b([y({type:Boolean,reflect:!0})],x.prototype,"pill",2);b([y({type:Boolean,reflect:!0})],x.prototype,"circle",2);b([y()],x.prototype,"type",2);b([y()],x.prototype,"name",2);b([y()],x.prototype,"value",2);b([y()],x.prototype,"href",2);b([y()],x.prototype,"target",2);b([y()],x.prototype,"rel",2);b([y()],x.prototype,"download",2);b([y()],x.prototype,"form",2);b([y({attribute:"formaction"})],x.prototype,"formAction",2);b([y({attribute:"formenctype"})],x.prototype,"formEnctype",2);b([y({attribute:"formmethod"})],x.prototype,"formMethod",2);b([y({attribute:"formnovalidate",type:Boolean})],x.prototype,"formNoValidate",2);b([y({attribute:"formtarget"})],x.prototype,"formTarget",2);b([$t("disabled",{waitUntilFirstUpdate:!0})],x.prototype,"handleDisabledChange",1);x.define("sl-button");var Ln=ce`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
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
`,Qe=class extends U{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return me`
      <span
        part="base"
        class=${xt({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Qe.styles=[we,Ln];b([y({reflect:!0})],Qe.prototype,"variant",2);b([y({type:Boolean,reflect:!0})],Qe.prototype,"pill",2);b([y({type:Boolean,reflect:!0})],Qe.prototype,"pulse",2);Qe.define("sl-badge");var Gs=new WeakMap;function Ur(t){let e=Gs.get(t);return e||(e=window.getComputedStyle(t,null),Gs.set(t,e)),e}function Bn(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Ur(t);return e.visibility!=="hidden"&&e.display!=="none"}function Fn(t){const e=Ur(t),{overflowY:s,overflowX:r}=e;return s==="scroll"||r==="scroll"?!0:s!=="auto"||r!=="auto"?!1:t.scrollHeight>t.clientHeight&&s==="auto"||t.scrollWidth>t.clientWidth&&r==="auto"}function Mn(t){const e=t.tagName.toLowerCase(),s=Number(t.getAttribute("tabindex"));return t.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||t.hasAttribute("disabled")||t.closest("[inert]")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!Bn(t)?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Fn(t)}function Un(t,e){var s;return((s=t.getRootNode({composed:!0}))==null?void 0:s.host)!==e}function Xs(t){const e=new WeakMap,s=[];function r(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||e.has(i))return;e.set(i,!0),!s.includes(i)&&Mn(i)&&s.push(i),i instanceof HTMLSlotElement&&Un(i,t)&&i.assignedElements({flatten:!0}).forEach(n=>{r(n)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&r(i.shadowRoot)}for(const n of i.children)r(n)}return r(t),s.sort((i,n)=>{const o=Number(i.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-o})}function*us(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Xi(us(t.shadowRoot.activeElement))))}function Vn(){return[...us()].pop()}var Pe=[],Hn=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{!this.isActive()||this.checkFocus()},this.handleKeyDown=e=>{var s;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const r=Vn();if(this.previousFocus=r,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=Xs(this.element);let n=i.findIndex(l=>l===r);this.previousFocus=this.currentFocus;const o=this.tabDirection==="forward"?1:-1;for(;;){n+o>=i.length?n=0:n+o<0?n=i.length-1:n+=o,this.previousFocus=this.currentFocus;const l=i[n];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;e.preventDefault(),this.currentFocus=l,(s=this.currentFocus)==null||s.focus({preventScroll:!1});const a=[...us()];if(a.includes(this.currentFocus)||!a.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Pe.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Pe=Pe.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Pe[Pe.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=Xs(this.element);if(!this.element.matches(":focus-within")){const e=t[0],s=t[t.length-1],r=this.tabDirection==="forward"?e:s;typeof(r==null?void 0:r.focus)=="function"&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},Jt=new Set;function jn(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Wn(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Ys(t){if(Jt.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=jn()+Wn();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<=0&&(s="revert"),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",s),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Zs(t){Jt.delete(t),Jt.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var qn=ce`
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

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
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
    margin-inline-start: var(--sl-spacing-x-small);
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

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Gn=ce`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
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

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,L=class extends U{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?mt`a`:mt`button`;return ut`
      <${e}
        part="base"
        class=${xt({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${C(t?void 0:this.disabled)}
        type=${C(t?void 0:"button")}
        href=${C(t?this.href:void 0)}
        target=${C(t?this.target:void 0)}
        download=${C(t?this.download:void 0)}
        rel=${C(t&&this.target?"noreferrer noopener":void 0)}
        role=${C(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${C(this.name)}
          library=${C(this.library)}
          src=${C(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};L.styles=[we,Gn];L.dependencies={"sl-icon":V};b([Ke(".icon-button")],L.prototype,"button",2);b([_t()],L.prototype,"hasFocus",2);b([y()],L.prototype,"name",2);b([y()],L.prototype,"library",2);b([y()],L.prototype,"src",2);b([y()],L.prototype,"href",2);b([y()],L.prototype,"target",2);b([y()],L.prototype,"download",2);b([y()],L.prototype,"label",2);b([y({type:Boolean,reflect:!0})],L.prototype,"disabled",2);var Vr=new Map,Xn=new WeakMap;function Yn(t){return t!=null?t:{keyframes:[],options:{duration:0}}}function Ks(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Je(t,e){Vr.set(t,Yn(e))}function Oe(t,e,s){const r=Xn.get(t);if(r!=null&&r[e])return Ks(r[e],s.dir);const i=Vr.get(e);return i?Ks(i,s.dir):{keyframes:[],options:{duration:0}}}function Qs(t,e){return new Promise(s=>{function r(i){i.target===t&&(t.removeEventListener(e,r),s())}t.addEventListener(e,r)})}function Ie(t,e,s){return new Promise(r=>{if((s==null?void 0:s.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=t.animate(e,is(ye({},s),{duration:Zn()?0:s.duration}));i.addEventListener("cancel",r,{once:!0}),i.addEventListener("finish",r,{once:!0})})}function Zn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function rt(t){return Promise.all(t.getAnimations().map(e=>new Promise(s=>{e.cancel(),requestAnimationFrame(s)})))}var H=class extends U{constructor(){super(...arguments),this.hasSlotController=new Fr(this,"footer"),this.localize=new ls(this),this.modal=new Hn(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ys(this))}disconnectedCallback(){var t;super.disconnectedCallback(),this.modal.deactivate(),Zs(this),(t=this.closeWatcher)==null||t.destroy()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=Oe(this,"dialog.denyClose",{dir:this.localize.dir()});Ie(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ys(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([rt(this.dialog),rt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Oe(this,"dialog.show",{dir:this.localize.dir()}),s=Oe(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Ie(this.panel,e.keyframes,e.options),Ie(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([rt(this.dialog),rt(this.overlay)]);const t=Oe(this,"dialog.hide",{dir:this.localize.dir()}),e=Oe(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ie(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Ie(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Zs(this);const s=this.originalTrigger;typeof(s==null?void 0:s.focus)=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Qs(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,Qs(this,"sl-after-hide")}render(){return me`
      <div
        part="base"
        class=${xt({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${C(this.noHeader?this.label:void 0)}
          aria-labelledby=${C(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":me`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};H.styles=[we,qn];H.dependencies={"sl-icon-button":L};b([Ke(".dialog")],H.prototype,"dialog",2);b([Ke(".dialog__panel")],H.prototype,"panel",2);b([Ke(".dialog__overlay")],H.prototype,"overlay",2);b([y({type:Boolean,reflect:!0})],H.prototype,"open",2);b([y({reflect:!0})],H.prototype,"label",2);b([y({attribute:"no-header",type:Boolean,reflect:!0})],H.prototype,"noHeader",2);b([$t("open",{waitUntilFirstUpdate:!0})],H.prototype,"handleOpenChange",1);Je("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Je("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Je("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});Je("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Je("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});H.define("sl-dialog");L.define("sl-icon-button");var R={},w=function(){let t=/\blang(?:uage)?-([\w-]+)\b/i,e=0;var s=R.Prism={manual:R.Prism&&R.Prism.manual,disableWorkerMessageHandler:R.Prism&&R.Prism.disableWorkerMessageHandler,util:{encode(i){return i instanceof r?new r(i.type,s.util.encode(i.content),i.alias):s.util.type(i)==="Array"?i.map(s.util.encode):i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type(i){return Object.prototype.toString.call(i).match(/\[object (\w+)\]/)[1]},objId(i){return i.__id||Object.defineProperty(i,"__id",{value:++e}),i.__id},clone(i,n){var o=s.util.type(i);switch(n=n||{},o){case"Object":if(n[s.util.objId(i)])return n[s.util.objId(i)];var a={};n[s.util.objId(i)]=a;for(var l in i)i.hasOwnProperty(l)&&(a[l]=s.util.clone(i[l],n));return a;case"Array":if(n[s.util.objId(i)])return n[s.util.objId(i)];var a=[];return n[s.util.objId(i)]=a,i.forEach(function(c,h){a[h]=s.util.clone(c,n)}),a}return i}},languages:{extend(i,n){var o=s.util.clone(s.languages[i]);for(var l in n)o[l]=n[l];return o},insertBefore(i,n,o,l){l=l||s.languages;var a=l[i];if(arguments.length==2){o=arguments[1];for(var c in o)o.hasOwnProperty(c)&&(a[c]=o[c]);return a}var h={};for(var u in a)if(a.hasOwnProperty(u)){if(u==n)for(var c in o)o.hasOwnProperty(c)&&(h[c]=o[c]);h[u]=a[u]}return s.languages.DFS(s.languages,function(d,p){p===l[i]&&d!=i&&(this[d]=h)}),l[i]=h},DFS(i,n,o,l){l=l||{};for(var a in i)i.hasOwnProperty(a)&&(n.call(i,a,i[a],o||a),s.util.type(i[a])==="Object"&&!l[s.util.objId(i[a])]?(l[s.util.objId(i[a])]=!0,s.languages.DFS(i[a],n,null,l)):s.util.type(i[a])==="Array"&&!l[s.util.objId(i[a])]&&(l[s.util.objId(i[a])]=!0,s.languages.DFS(i[a],n,a,l)))}},plugins:{},highlightAll(i,n){s.highlightAllUnder(document,i,n)},highlightAllUnder(i,n,o){var l={callback:o,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",l);for(var a=l.elements||i.querySelectorAll(l.selector),c=0,h;h=a[c++];)s.highlightElement(h,n===!0,l.callback)},highlightElement(i,n,o){for(var l,a,c=i;c&&!t.test(c.className);)c=c.parentNode;c&&(l=(c.className.match(t)||[,""])[1].toLowerCase(),a=s.languages[l]),i.className=i.className.replace(t,"").replace(/\s+/g," ")+" language-"+l,i.parentNode&&(c=i.parentNode,/pre/i.test(c.nodeName)&&(c.className=c.className.replace(t,"").replace(/\s+/g," ")+" language-"+l));var h=i.textContent,u={element:i,language:l,grammar:a,code:h};if(s.hooks.run("before-sanity-check",u),!u.code||!u.grammar){u.code&&(s.hooks.run("before-highlight",u),u.element.textContent=u.code,s.hooks.run("after-highlight",u)),s.hooks.run("complete",u);return}if(s.hooks.run("before-highlight",u),n&&R.Worker){var d=new Worker(s.filename);d.onmessage=function(p){u.highlightedCode=p.data,s.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,o&&o.call(u.element),s.hooks.run("after-highlight",u),s.hooks.run("complete",u)},d.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=s.highlight(u.code,u.grammar,u.language),s.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,o&&o.call(i),s.hooks.run("after-highlight",u),s.hooks.run("complete",u)},highlight(i,n,o){var l={code:i,grammar:n,language:o};return s.hooks.run("before-tokenize",l),l.tokens=s.tokenize(l.code,l.grammar),s.hooks.run("after-tokenize",l),r.stringify(s.util.encode(l.tokens),l.language)},matchGrammar(i,n,o,l,a,c,h){var u=s.Token;for(var d in o)if(!(!o.hasOwnProperty(d)||!o[d])){if(d==h)return;var p=o[d];p=s.util.type(p)==="Array"?p:[p];for(var g=0;g<p.length;++g){var _=p[g],T=_.inside,E=!!_.lookbehind,Q=!!_.greedy,ue=0,J=_.alias;if(Q&&!_.pattern.global){var $e=_.pattern.toString().match(/[imuy]*$/)[0];_.pattern=RegExp(_.pattern.source,$e+"g")}_=_.pattern||_;for(var I=l,F=a;I<n.length;F+=n[I].length,++I){var xe=n[I];if(n.length>i.length)return;if(!(xe instanceof u)){if(Q&&I!=n.length-1){_.lastIndex=F;var O=_.exec(i);if(!O)break;for(var De=O.index+(E?O[1].length:0),Et=O.index+O[0].length,he=I,ke=F,ei=n.length;he<ei&&(ke<Et||!n[he].type&&!n[he-1].greedy);++he)ke+=n[he].length,De>=ke&&(++I,F=ke);if(n[I]instanceof u)continue;At=he-I,xe=i.slice(F,ke),O.index-=F}else{_.lastIndex=0;var O=_.exec(xe),At=1}if(!O){if(c)break;continue}E&&(ue=O[1]?O[1].length:0);var De=O.index+ue,O=O[0].slice(ue),Et=De+O.length,St=xe.slice(0,De),bs=xe.slice(Et),et=[I,At];St&&(++I,F+=St.length,et.push(St));var ti=new u(d,T?s.tokenize(O,T):O,J,O,Q);if(et.push(ti),bs&&et.push(bs),Array.prototype.splice.apply(n,et),At!=1&&s.matchGrammar(i,n,o,I,F,!0,d),c)break}}}}},tokenize(i,n,o){var l=[i],a=n.rest;if(a){for(var c in a)n[c]=a[c];delete n.rest}return s.matchGrammar(i,l,n,0,0,!1),l},hooks:{all:{},add(i,n){var o=s.hooks.all;o[i]=o[i]||[],o[i].push(n)},run(i,n){var o=s.hooks.all[i];if(!(!o||!o.length))for(var l=0,a;a=o[l++];)a(n)}}},r=s.Token=function(i,n,o,l,a){this.type=i,this.content=n,this.alias=o,this.length=(l||"").length|0,this.greedy=!!a};return r.stringify=function(i,n,o){if(typeof i=="string")return i;if(s.util.type(i)==="Array")return i.map(c=>r.stringify(c,n,i)).join("");let l={type:i.type,content:r.stringify(i.content,n,o),tag:"span",classes:["token",i.type],attributes:{},language:n,parent:o};if(i.alias){let c=s.util.type(i.alias)==="Array"?i.alias:[i.alias];Array.prototype.push.apply(l.classes,c)}s.hooks.run("wrap",l);let a=Object.keys(l.attributes).map(c=>c+'="'+(l.attributes[c]||"").replace(/"/g,"&quot;")+'"').join(" ");return`<${l.tag} class="${l.classes.join(" ")}"${a?" "+a:""}>${l.content}</${l.tag}>`},R.document||R.addEventListener&&(s.disableWorkerMessageHandler||R.addEventListener("message",i=>{var n=JSON.parse(i.data),o=n.language,l=n.code,a=n.immediateClose;R.postMessage(s.highlight(l,s.languages[o],o)),a&&R.close()},!1)),R.Prism}();typeof dt!="undefined"&&dt.exports&&(dt.exports=w);typeof global!="undefined"&&(global.Prism=w);w.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i};w.languages.markup.tag.inside["attr-value"].inside.entity=w.languages.markup.entity;w.hooks.add("wrap",t=>{t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))});w.languages.xml=w.languages.markup;w.languages.html=w.languages.markup;w.languages.mathml=w.languages.markup;w.languages.svg=w.languages.markup;w.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/};w.languages.css.atrule.inside.rest=w.languages.css;w.languages.markup&&(w.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:w.languages.css,alias:"language-css",greedy:!0}}),w.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:w.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:w.languages.css}},alias:"language-css"}},w.languages.markup.tag));w.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};w.languages.javascript=w.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/});w.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/});w.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}});w.languages.javascript["template-string"].inside.interpolation.inside.rest=w.languages.javascript;w.languages.markup&&w.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:w.languages.javascript,alias:"language-javascript",greedy:!0}});w.languages.js=w.languages.javascript;var Hr=w;function jr(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}var _e=jr();function Kn(t){_e=t}var Qn=/[&<>"']/,Jn=/[&<>"']/g,Dn=/[<>"']|&(?!#?\w+;)/,eo=/[<>"']|&(?!#?\w+;)/g,to={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Js=t=>to[t];function P(t,e){if(e){if(Qn.test(t))return t.replace(Jn,Js)}else if(Dn.test(t))return t.replace(eo,Js);return t}var so=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Wr(t){return t.replace(so,(e,s)=>(s=s.toLowerCase(),s==="colon"?":":s.charAt(0)==="#"?s.charAt(1)==="x"?String.fromCharCode(parseInt(s.substring(2),16)):String.fromCharCode(+s.substring(1)):""))}var ro=/(^|[^\[])\^/g;function k(t,e){t=t.source||t,e=e||"";const s={replace:(r,i)=>(i=i.source||i,i=i.replace(ro,"$1"),t=t.replace(r,i),s),getRegex:()=>new RegExp(t,e)};return s}var io=/[^\w:]/g,no=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Ds(t,e,s){if(t){let r;try{r=decodeURIComponent(Wr(s)).replace(io,"").toLowerCase()}catch{return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0)return null}e&&!no.test(s)&&(s=co(e,s));try{s=encodeURI(s).replace(/%25/g,"%")}catch{return null}return s}var it={},oo=/^[^:]+:\/*[^/]*$/,ao=/^([^:]+:)[\s\S]*$/,lo=/^([^:]+:\/*[^/]*)[\s\S]*$/;function co(t,e){it[" "+t]||(oo.test(t)?it[" "+t]=t+"/":it[" "+t]=ht(t,"/",!0)),t=it[" "+t];const s=t.indexOf(":")===-1;return e.substring(0,2)==="//"?s?e:t.replace(ao,"$1")+e:e.charAt(0)==="/"?s?e:t.replace(lo,"$1")+e:t+e}var vt={exec:function(){}};function M(t){let e=1,s,r;for(;e<arguments.length;e++){s=arguments[e];for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r])}return t}function er(t,e){const s=t.replace(/\|/g,(n,o,l)=>{let a=!1,c=o;for(;--c>=0&&l[c]==="\\";)a=!a;return a?"|":" |"}),r=s.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r[r.length-1].trim()||r.pop(),r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function ht(t,e,s){const r=t.length;if(r===0)return"";let i=0;for(;i<r;){const n=t.charAt(r-i-1);if(n===e&&!s)i++;else if(n!==e&&s)i++;else break}return t.substr(0,r-i)}function uo(t,e){if(t.indexOf(e[1])===-1)return-1;const s=t.length;let r=0,i=0;for(;i<s;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])r++;else if(t[i]===e[1]&&(r--,r<0))return i;return-1}function qr(t){t&&t.sanitize&&!t.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function tr(t,e){if(e<1)return"";let s="";for(;e>1;)e&1&&(s+=t),e>>=1,t+=t;return s+t}function sr(t,e,s,r){const i=e.href,n=e.title?P(e.title):null,o=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const l={type:"link",raw:s,href:i,title:n,text:o,tokens:r.inlineTokens(o,[])};return r.state.inLink=!1,l}else return{type:"image",raw:s,href:i,title:n,text:P(o)}}function ho(t,e){const s=t.match(/^(\s+)(?:```)/);if(s===null)return e;const r=s[1];return e.split(`
`).map(i=>{const n=i.match(/^\s+/);if(n===null)return i;const[o]=n;return o.length>=r.length?i.slice(r.length):i}).join(`
`)}var hs=class{constructor(t){this.options=t||_e}space(t){const e=this.rules.block.newline.exec(t);if(e)return e[0].length>1?{type:"space",raw:e[0]}:{raw:`
`}}code(t){const e=this.rules.block.code.exec(t);if(e){const s=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?s:ht(s,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const s=e[0],r=ho(s,e[3]||"");return{type:"code",raw:s,lang:e[2]?e[2].trim():e[2],text:r}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let s=e[2].trim();if(/#$/.test(s)){const i=ht(s,"#");(this.options.pedantic||!i||/ $/.test(i))&&(s=i.trim())}const r={type:"heading",raw:e[0],depth:e[1].length,text:s,tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){const s=e[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:e[0],tokens:this.lexer.blockTokens(s,[]),text:s}}}list(t){let e=this.rules.block.list.exec(t);if(e){let s,r,i,n,o,l,a,c,h,u,d=e[1].trim();const p=d.length>1,g={type:"list",raw:"",ordered:p,start:p?+d.slice(0,-1):"",loose:!1,items:[]};d=p?`\\d{1,9}\\${d.slice(-1)}`:`\\${d}`,this.options.pedantic&&(d=p?d:"[*+-]");const _=new RegExp(`^( {0,3}${d})((?: [^\\n]*| *)(?:\\n[^\\n]*)*(?:\\n|$))`);for(;t&&!(this.rules.block.hr.test(t)||!(e=_.exec(t)));){h=e[2].split(`
`),this.options.pedantic?(n=2,u=h[0].trimLeft()):(n=e[2].search(/[^ ]/),n=e[1].length+(n>4?1:n),u=h[0].slice(n-e[1].length)),l=!1,s=e[0],!h[0]&&/^ *$/.test(h[1])&&(s=e[1]+h.slice(0,2).join(`
`)+`
`,g.loose=!0,h=[]);const E=new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(o=1;o<h.length;o++){if(c=h[o],this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),E.test(c)){s=e[1]+h.slice(0,o).join(`
`)+`
`;break}if(!l){c.trim()||(l=!0),c.search(/[^ ]/)>=n?u+=`
`+c.slice(n):u+=`
`+c;continue}if(c.search(/[^ ]/)>=n||!c.trim()){u+=`
`+c.slice(n);continue}else{s=e[1]+h.slice(0,o).join(`
`)+`
`;break}}g.loose||(a?g.loose=!0:/\n *\n *$/.test(s)&&(a=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(u),r&&(i=r[0]!=="[ ] ",u=u.replace(/^\[[ xX]\] +/,""))),g.items.push({type:"list_item",raw:s,task:!!r,checked:i,loose:!1,text:u}),g.raw+=s,t=t.slice(s.length)}g.items[g.items.length-1].raw=s.trimRight(),g.items[g.items.length-1].text=u.trimRight(),g.raw=g.raw.trimRight();const T=g.items.length;for(o=0;o<T;o++)this.lexer.state.top=!1,g.items[o].tokens=this.lexer.blockTokens(g.items[o].text,[]),g.items[o].tokens.some(E=>E.type==="space")&&(g.loose=!0,g.items[o].loose=!0);return g}}html(t){const e=this.rules.block.html.exec(t);if(e){const s={type:"html",raw:e[0],pre:!this.options.sanitizer&&(e[1]==="pre"||e[1]==="script"||e[1]==="style"),text:e[0]};return this.options.sanitize&&(s.type="paragraph",s.text=this.options.sanitizer?this.options.sanitizer(e[0]):P(e[0]),s.tokens=[],this.lexer.inline(s.text,s.tokens)),s}}def(t){const e=this.rules.block.def.exec(t);if(e){e[3]&&(e[3]=e[3].substring(1,e[3].length-1));const s=e[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:s,raw:e[0],href:e[2],title:e[3]}}}table(t){const e=this.rules.block.table.exec(t);if(e){const s={type:"table",header:er(e[1]).map(r=>({text:r})),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:e[3]?e[3].replace(/\n$/,"").split(`
`):[]};if(s.header.length===s.align.length){s.raw=e[0];let r=s.align.length,i,n,o,l;for(i=0;i<r;i++)/^ *-+: *$/.test(s.align[i])?s.align[i]="right":/^ *:-+: *$/.test(s.align[i])?s.align[i]="center":/^ *:-+ *$/.test(s.align[i])?s.align[i]="left":s.align[i]=null;for(r=s.rows.length,i=0;i<r;i++)s.rows[i]=er(s.rows[i],s.header.length).map(a=>({text:a}));for(r=s.header.length,n=0;n<r;n++)s.header[n].tokens=[],this.lexer.inlineTokens(s.header[n].text,s.header[n].tokens);for(r=s.rows.length,n=0;n<r;n++)for(l=s.rows[n],o=0;o<l.length;o++)l[o].tokens=[],this.lexer.inlineTokens(l[o].text,l[o].tokens);return s}}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e){const s={type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const s={type:"paragraph",raw:e[0],text:e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1],tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}text(t){const e=this.rules.block.text.exec(t);if(e){const s={type:"text",raw:e[0],text:e[0],tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:P(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):P(e[0]):e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const s=e[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const n=ht(s.slice(0,-1),"\\");if((s.length-n.length)%2===0)return}else{const n=uo(e[2],"()");if(n>-1){const l=(e[0].indexOf("!")===0?5:4)+e[1].length+n;e[2]=e[2].substring(0,n),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let r=e[2],i="";if(this.options.pedantic){const n=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);n&&(r=n[1],i=n[3])}else i=e[3]?e[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(s)?r=r.slice(1):r=r.slice(1,-1)),sr(e,{href:r&&r.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},e[0],this.lexer)}}reflink(t,e){let s;if((s=this.rules.inline.reflink.exec(t))||(s=this.rules.inline.nolink.exec(t))){let r=(s[2]||s[1]).replace(/\s+/g," ");if(r=e[r.toLowerCase()],!r||!r.href){const i=s[0].charAt(0);return{type:"text",raw:i,text:i}}return sr(s,r,s[0],this.lexer)}}emStrong(t,e,s=""){let r=this.rules.inline.emStrong.lDelim.exec(t);if(!r||r[3]&&s.match(/[\p{L}\p{N}]/u))return;const i=r[1]||r[2]||"";if(!i||i&&(s===""||this.rules.inline.punctuation.exec(s))){const n=r[0].length-1;let o,l,a=n,c=0;const h=r[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(h.lastIndex=0,e=e.slice(-1*t.length+n);(r=h.exec(e))!=null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(l=o.length,r[3]||r[4]){a+=l;continue}else if((r[5]||r[6])&&n%3&&!((n+l)%3)){c+=l;continue}if(a-=l,a>0)continue;if(l=Math.min(l,l+a+c),Math.min(n,l)%2){const d=t.slice(1,n+r.index+l);return{type:"em",raw:t.slice(0,n+r.index+l+1),text:d,tokens:this.lexer.inlineTokens(d,[])}}const u=t.slice(2,n+r.index+l-1);return{type:"strong",raw:t.slice(0,n+r.index+l+1),text:u,tokens:this.lexer.inlineTokens(u,[])}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let s=e[2].replace(/\n/g," ");const r=/[^ ]/.test(s),i=/^ /.test(s)&&/ $/.test(s);return r&&i&&(s=s.substring(1,s.length-1)),s=P(s,!0),{type:"codespan",raw:e[0],text:s}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2],[])}}autolink(t,e){const s=this.rules.inline.autolink.exec(t);if(s){let r,i;return s[2]==="@"?(r=P(this.options.mangle?e(s[1]):s[1]),i="mailto:"+r):(r=P(s[1]),i=r),{type:"link",raw:s[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(t,e){let s;if(s=this.rules.inline.url.exec(t)){let r,i;if(s[2]==="@")r=P(this.options.mangle?e(s[0]):s[0]),i="mailto:"+r;else{let n;do n=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])[0];while(n!==s[0]);r=P(s[0]),s[1]==="www."?i="http://"+r:i=r}return{type:"link",raw:s[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t,e){const s=this.rules.inline.text.exec(t);if(s){let r;return this.lexer.state.inRawBlock?r=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):P(s[0]):s[0]:r=P(this.options.smartypants?e(s[0]):s[0]),{type:"text",raw:s[0],text:r}}}},v={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:vt,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/};v._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;v._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;v.def=k(v.def).replace("label",v._label).replace("title",v._title).getRegex();v.bullet=/(?:[*+-]|\d{1,9}[.)])/;v.listItemStart=k(/^( *)(bull) */).replace("bull",v.bullet).getRegex();v.list=k(v.list).replace(/bull/g,v.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+v.def.source+")").getRegex();v._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";v._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;v.html=k(v.html,"i").replace("comment",v._comment).replace("tag",v._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();v.paragraph=k(v._paragraph).replace("hr",v.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v._tag).getRegex();v.blockquote=k(v.blockquote).replace("paragraph",v.paragraph).getRegex();v.normal=M({},v);v.gfm=M({},v.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});v.gfm.table=k(v.gfm.table).replace("hr",v.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v._tag).getRegex();v.pedantic=M({},v.normal,{html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",v._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:vt,paragraph:k(v.normal._paragraph).replace("hr",v.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",v.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var f={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:vt,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:vt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};f._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";f.punctuation=k(f.punctuation).replace(/punctuation/g,f._punctuation).getRegex();f.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;f.escapedEmSt=/\\\*|\\_/g;f._comment=k(v._comment).replace("(?:-->|$)","-->").getRegex();f.emStrong.lDelim=k(f.emStrong.lDelim).replace(/punct/g,f._punctuation).getRegex();f.emStrong.rDelimAst=k(f.emStrong.rDelimAst,"g").replace(/punct/g,f._punctuation).getRegex();f.emStrong.rDelimUnd=k(f.emStrong.rDelimUnd,"g").replace(/punct/g,f._punctuation).getRegex();f._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;f._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;f._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;f.autolink=k(f.autolink).replace("scheme",f._scheme).replace("email",f._email).getRegex();f._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;f.tag=k(f.tag).replace("comment",f._comment).replace("attribute",f._attribute).getRegex();f._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;f._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;f._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;f.link=k(f.link).replace("label",f._label).replace("href",f._href).replace("title",f._title).getRegex();f.reflink=k(f.reflink).replace("label",f._label).getRegex();f.reflinkSearch=k(f.reflinkSearch,"g").replace("reflink",f.reflink).replace("nolink",f.nolink).getRegex();f.normal=M({},f);f.pedantic=M({},f.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",f._label).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",f._label).getRegex()});f.gfm=M({},f.normal,{escape:k(f.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});f.gfm.url=k(f.gfm.url,"i").replace("email",f.gfm._extended_email).getRegex();f.breaks=M({},f.gfm,{br:k(f.br).replace("{2,}","*").getRegex(),text:k(f.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function po(t){return t.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function rr(t){let e="",s,r;const i=t.length;for(s=0;s<i;s++)r=t.charCodeAt(s),Math.random()>.5&&(r="x"+r.toString(16)),e+="&#"+r+";";return e}var Y=class{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||_e,this.options.tokenizer=this.options.tokenizer||new hs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:v.normal,inline:f.normal};this.options.pedantic?(e.block=v.pedantic,e.inline=f.pedantic):this.options.gfm&&(e.block=v.gfm,this.options.breaks?e.inline=f.breaks:e.inline=f.gfm),this.tokenizer.rules=e}static get rules(){return{block:v,inline:f}}static lex(t,e){return new Y(e).lex(t)}static lexInline(t,e){return new Y(e).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(t,this.tokens);let e;for(;e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(t,e=[]){this.options.pedantic&&(t=t.replace(/^ +$/gm,""));let s,r,i,n;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(s=o.call({lexer:this},t,e))?(t=t.substring(s.raw.length),e.push(s),!0):!1))){if(s=this.tokenizer.space(t)){t=t.substring(s.raw.length),s.type&&e.push(s);continue}if(s=this.tokenizer.code(t)){t=t.substring(s.raw.length),r=e[e.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+s.raw,r.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):e.push(s);continue}if(s=this.tokenizer.fences(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.heading(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.hr(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.blockquote(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.list(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.html(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.def(t)){t=t.substring(s.raw.length),r=e[e.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+s.raw,r.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.lheading(t)){t=t.substring(s.raw.length),e.push(s);continue}if(i=t,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=t.slice(1);let a;this.options.extensions.startBlock.forEach(function(c){a=c.call({lexer:this},l),typeof a=="number"&&a>=0&&(o=Math.min(o,a))}),o<1/0&&o>=0&&(i=t.substring(0,o+1))}if(this.state.top&&(s=this.tokenizer.paragraph(i))){r=e[e.length-1],n&&r.type==="paragraph"?(r.raw+=`
`+s.raw,r.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):e.push(s),n=i.length!==t.length,t=t.substring(s.raw.length);continue}if(s=this.tokenizer.text(t)){t=t.substring(s.raw.length),r=e[e.length-1],r&&r.type==="text"?(r.raw+=`
`+s.raw,r.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):e.push(s);continue}if(t){const o="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,e}inline(t,e){this.inlineQueue.push({src:t,tokens:e})}inlineTokens(t,e=[]){let s,r,i,n=t,o,l,a;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)c.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,o.index)+"["+tr("a",o[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)n=n.slice(0,o.index)+"["+tr("a",o[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.escapedEmSt.exec(n))!=null;)n=n.slice(0,o.index)+"++"+n.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;t;)if(l||(a=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(s=c.call({lexer:this},t,e))?(t=t.substring(s.raw.length),e.push(s),!0):!1))){if(s=this.tokenizer.escape(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.tag(t)){t=t.substring(s.raw.length),r=e[e.length-1],r&&s.type==="text"&&r.type==="text"?(r.raw+=s.raw,r.text+=s.text):e.push(s);continue}if(s=this.tokenizer.link(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(s.raw.length),r=e[e.length-1],r&&s.type==="text"&&r.type==="text"?(r.raw+=s.raw,r.text+=s.text):e.push(s);continue}if(s=this.tokenizer.emStrong(t,n,a)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.codespan(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.br(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.del(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.autolink(t,rr)){t=t.substring(s.raw.length),e.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(t,rr))){t=t.substring(s.raw.length),e.push(s);continue}if(i=t,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const h=t.slice(1);let u;this.options.extensions.startInline.forEach(function(d){u=d.call({lexer:this},h),typeof u=="number"&&u>=0&&(c=Math.min(c,u))}),c<1/0&&c>=0&&(i=t.substring(0,c+1))}if(s=this.tokenizer.inlineText(i,po)){t=t.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(a=s.raw.slice(-1)),l=!0,r=e[e.length-1],r&&r.type==="text"?(r.raw+=s.raw,r.text+=s.text):e.push(s);continue}if(t){const c="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return e}},ds=class{constructor(t){this.options=t||_e}code(t,e,s){const r=(e||"").match(/\S*/)[0];if(this.options.highlight){const i=this.options.highlight(t,r);i!=null&&i!==t&&(s=!0,t=i)}return t=t.replace(/\n$/,"")+`
`,r?'<pre><code class="'+this.options.langPrefix+P(r,!0)+'">'+(s?t:P(t,!0))+`</code></pre>
`:"<pre><code>"+(s?t:P(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
`+t+`</blockquote>
`}html(t){return t}heading(t,e,s,r){return this.options.headerIds?"<h"+e+' id="'+this.options.headerPrefix+r.slug(s)+'">'+t+"</h"+e+`>
`:"<h"+e+">"+t+"</h"+e+`>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,e,s){const r=e?"ol":"ul",i=e&&s!==1?' start="'+s+'"':"";return"<"+r+i+`>
`+t+"</"+r+`>
`}listitem(t){return"<li>"+t+`</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return"<p>"+t+`</p>
`}table(t,e){return e&&(e="<tbody>"+e+"</tbody>"),`<table>
<thead>
`+t+`</thead>
`+e+`</table>
`}tablerow(t){return`<tr>
`+t+`</tr>
`}tablecell(t,e){const s=e.header?"th":"td";return(e.align?"<"+s+' align="'+e.align+'">':"<"+s+">")+t+"</"+s+`>
`}strong(t){return"<strong>"+t+"</strong>"}em(t){return"<em>"+t+"</em>"}codespan(t){return"<code>"+t+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return"<del>"+t+"</del>"}link(t,e,s){if(t=Ds(this.options.sanitize,this.options.baseUrl,t),t===null)return s;let r='<a href="'+P(t)+'"';return e&&(r+=' title="'+e+'"'),r+=">"+s+"</a>",r}image(t,e,s){if(t=Ds(this.options.sanitize,this.options.baseUrl,t),t===null)return s;let r='<img src="'+t+'" alt="'+s+'"';return e&&(r+=' title="'+e+'"'),r+=this.options.xhtml?"/>":">",r}text(t){return t}},Gr=class{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,s){return""+s}image(t,e,s){return""+s}br(){return""}},Xr=class{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,e){let s=t,r=0;if(this.seen.hasOwnProperty(s)){r=this.seen[t];do r++,s=t+"-"+r;while(this.seen.hasOwnProperty(s))}return e||(this.seen[t]=r,this.seen[s]=0),s}slug(t,e={}){const s=this.serialize(t);return this.getNextSafeSlug(s,e.dryrun)}},Z=class{constructor(t){this.options=t||_e,this.options.renderer=this.options.renderer||new ds,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Gr,this.slugger=new Xr}static parse(t,e){return new Z(e).parse(t)}static parseInline(t,e){return new Z(e).parseInline(t)}parse(t,e=!0){let s="",r,i,n,o,l,a,c,h,u,d,p,g,_,T,E,Q,ue,J,$e;const I=t.length;for(r=0;r<I;r++){if(d=t[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]&&($e=this.options.extensions.renderers[d.type].call({parser:this},d),$e!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type))){s+=$e||"";continue}switch(d.type){case"space":continue;case"hr":{s+=this.renderer.hr();continue}case"heading":{s+=this.renderer.heading(this.parseInline(d.tokens),d.depth,Wr(this.parseInline(d.tokens,this.textRenderer)),this.slugger);continue}case"code":{s+=this.renderer.code(d.text,d.lang,d.escaped);continue}case"table":{for(h="",c="",o=d.header.length,i=0;i<o;i++)c+=this.renderer.tablecell(this.parseInline(d.header[i].tokens),{header:!0,align:d.align[i]});for(h+=this.renderer.tablerow(c),u="",o=d.rows.length,i=0;i<o;i++){for(a=d.rows[i],c="",l=a.length,n=0;n<l;n++)c+=this.renderer.tablecell(this.parseInline(a[n].tokens),{header:!1,align:d.align[n]});u+=this.renderer.tablerow(c)}s+=this.renderer.table(h,u);continue}case"blockquote":{u=this.parse(d.tokens),s+=this.renderer.blockquote(u);continue}case"list":{for(p=d.ordered,g=d.start,_=d.loose,o=d.items.length,u="",i=0;i<o;i++)E=d.items[i],Q=E.checked,ue=E.task,T="",E.task&&(J=this.renderer.checkbox(Q),_?E.tokens.length>0&&E.tokens[0].type==="paragraph"?(E.tokens[0].text=J+" "+E.tokens[0].text,E.tokens[0].tokens&&E.tokens[0].tokens.length>0&&E.tokens[0].tokens[0].type==="text"&&(E.tokens[0].tokens[0].text=J+" "+E.tokens[0].tokens[0].text)):E.tokens.unshift({type:"text",text:J}):T+=J),T+=this.parse(E.tokens,_),u+=this.renderer.listitem(T,ue,Q);s+=this.renderer.list(u,p,g);continue}case"html":{s+=this.renderer.html(d.text);continue}case"paragraph":{s+=this.renderer.paragraph(this.parseInline(d.tokens));continue}case"text":{for(u=d.tokens?this.parseInline(d.tokens):d.text;r+1<I&&t[r+1].type==="text";)d=t[++r],u+=`
`+(d.tokens?this.parseInline(d.tokens):d.text);s+=e?this.renderer.paragraph(u):u;continue}default:{const F='Token with "'+d.type+'" type was not found.';if(this.options.silent){console.error(F);return}else throw new Error(F)}}}return s}parseInline(t,e){e=e||this.renderer;let s="",r,i,n;const o=t.length;for(r=0;r<o;r++){if(i=t[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(n=this.options.extensions.renderers[i.type].call({parser:this},i),n!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){s+=n||"";continue}switch(i.type){case"escape":{s+=e.text(i.text);break}case"html":{s+=e.html(i.text);break}case"link":{s+=e.link(i.href,i.title,this.parseInline(i.tokens,e));break}case"image":{s+=e.image(i.href,i.title,i.text);break}case"strong":{s+=e.strong(this.parseInline(i.tokens,e));break}case"em":{s+=e.em(this.parseInline(i.tokens,e));break}case"codespan":{s+=e.codespan(i.text);break}case"br":{s+=e.br();break}case"del":{s+=e.del(this.parseInline(i.tokens,e));break}case"text":{s+=e.text(i.text);break}default:{const l='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(l);return}else throw new Error(l)}}}return s}};function m(t,e,s){if(typeof t=="undefined"||t===null)throw new Error("marked(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");if(typeof e=="function"&&(s=e,e=null),e=M({},m.defaults,e||{}),qr(e),s){const r=e.highlight;let i;try{i=Y.lex(t,e)}catch(l){return s(l)}const n=function(l){let a;if(!l)try{e.walkTokens&&m.walkTokens(i,e.walkTokens),a=Z.parse(i,e)}catch(c){l=c}return e.highlight=r,l?s(l):s(null,a)};if(!r||r.length<3||(delete e.highlight,!i.length))return n();let o=0;m.walkTokens(i,function(l){l.type==="code"&&(o++,setTimeout(()=>{r(l.text,l.lang,function(a,c){if(a)return n(a);c!=null&&c!==l.text&&(l.text=c,l.escaped=!0),o--,o===0&&n()})},0))}),o===0&&n();return}try{const r=Y.lex(t,e);return e.walkTokens&&m.walkTokens(r,e.walkTokens),Z.parse(r,e)}catch(r){if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+P(r.message+"",!0)+"</pre>";throw r}}m.options=m.setOptions=function(t){return M(m.defaults,t),Kn(m.defaults),m};m.getDefaults=jr;m.defaults=_e;m.use=function(...t){const e=M({},...t),s=m.defaults.extensions||{renderers:{},childTokens:{}};let r;t.forEach(i=>{if(i.extensions&&(r=!0,i.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if(n.renderer){const o=s.renderers?s.renderers[n.name]:null;o?s.renderers[n.name]=function(...l){let a=n.renderer.apply(this,l);return a===!1&&(a=o.apply(this,l)),a}:s.renderers[n.name]=n.renderer}if(n.tokenizer){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");s[n.level]?s[n.level].unshift(n.tokenizer):s[n.level]=[n.tokenizer],n.start&&(n.level==="block"?s.startBlock?s.startBlock.push(n.start):s.startBlock=[n.start]:n.level==="inline"&&(s.startInline?s.startInline.push(n.start):s.startInline=[n.start]))}n.childTokens&&(s.childTokens[n.name]=n.childTokens)})),i.renderer){const n=m.defaults.renderer||new ds;for(const o in i.renderer){const l=n[o];n[o]=(...a)=>{let c=i.renderer[o].apply(n,a);return c===!1&&(c=l.apply(n,a)),c}}e.renderer=n}if(i.tokenizer){const n=m.defaults.tokenizer||new hs;for(const o in i.tokenizer){const l=n[o];n[o]=(...a)=>{let c=i.tokenizer[o].apply(n,a);return c===!1&&(c=l.apply(n,a)),c}}e.tokenizer=n}if(i.walkTokens){const n=m.defaults.walkTokens;e.walkTokens=function(o){i.walkTokens.call(this,o),n&&n.call(this,o)}}r&&(e.extensions=s),m.setOptions(e)})};m.walkTokens=function(t,e){for(const s of t)switch(e.call(m,s),s.type){case"table":{for(const r of s.header)m.walkTokens(r.tokens,e);for(const r of s.rows)for(const i of r)m.walkTokens(i.tokens,e);break}case"list":{m.walkTokens(s.items,e);break}default:m.defaults.extensions&&m.defaults.extensions.childTokens&&m.defaults.extensions.childTokens[s.type]?m.defaults.extensions.childTokens[s.type].forEach(function(r){m.walkTokens(s[r],e)}):s.tokens&&m.walkTokens(s.tokens,e)}};m.parseInline=function(t,e){if(typeof t=="undefined"||t===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");e=M({},m.defaults,e||{}),qr(e);try{const s=Y.lexInline(t,e);return e.walkTokens&&m.walkTokens(s,e.walkTokens),Z.parseInline(s,e)}catch(s){if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+P(s.message+"",!0)+"</pre>";throw s}};m.Parser=Z;m.parser=Z.parse;m.Renderer=ds;m.TextRenderer=Gr;m.Lexer=Y;m.lexer=Y.lex;m.Tokenizer=hs;m.Slugger=Xr;m.parse=m;m.options;m.setOptions;m.use;m.walkTokens;m.parseInline;Z.parse;Y.lex;self.Prism=Hr;var Le=class extends HTMLElement{static get observedAttributes(){return["src"]}attributeChangedCallback(t,e,s){e!==s&&(this[t]=s)}get src(){return this.getAttribute("src")}set src(t){this.setAttribute("src",t),this.setSrc(t)}get value(){return this.__value}set value(t){this.__value=t,this.setValue()}constructor(){super(),this.__value=""}async connectedCallback(){this.style.display="block";const t=this.getElementsByTagName("script")[0];if(t){if(t.getAttribute("type")==="wc-content"){let e=Le.dedentText(t.innerHTML);e=e.replace(/&lt;(\/?script)(.*?)&gt;/g,"<$1$2>"),this.value=e}}else this.textContent&&(this.__value=this.textContent,this.setValue())}async setSrc(t){this.__value=await this.fetchSrc(t),this.setValue()}async fetchSrc(t){return(await fetch(t)).text()}setValue(){let t=this.__value;t=Le.prepare(t),t=Le.toHtml(t),this.innerHTML=t,this.hasAttribute("highlight")&&Le.highlight(this)}static prepare(t){return t.split(`
`).map(e=>(e=e.replace("&lt;","<"),e.replace("&gt;",">"))).join(`
`)}static toHtml(t){return m(t)}static highlight(t){Hr.highlightAllUnder(t)}static dedentText(t){const e=t.split(`
`);e[0]===""&&e.splice(0,1);const s=e[0];let r=0;const n=s[0]==="	"?"	":" ";for(;s[r]===n;)r+=1;const o=[];for(const l of e){let a=l;for(let c=0;c<r&&a[0]===n;c++)a=a.substring(1);o.push(a)}return o[o.length-1]===""&&o.splice(o.length-1,1),o.join(`
`)}};customElements.define("wc-markdown",Le);const fo=5,nt=(t,e)=>{const s=Math.abs((t-e)/t*100);return t>e?-s:s},W=(t,e=fo)=>parseFloat(`${t}`).toFixed(e),go=t=>t.charAt(0).toUpperCase()+t.slice(1);var ps={},kt={};(function(t){const e=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",s=e+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",r="["+e+"]["+s+"]*",i=new RegExp("^"+r+"$"),n=function(l,a){const c=[];let h=a.exec(l);for(;h;){const u=[];u.startIndex=a.lastIndex-h[0].length;const d=h.length;for(let p=0;p<d;p++)u.push(h[p]);c.push(u),h=a.exec(l)}return c},o=function(l){const a=i.exec(l);return!(a===null||typeof a=="undefined")};t.isExist=function(l){return typeof l!="undefined"},t.isEmptyObject=function(l){return Object.keys(l).length===0},t.merge=function(l,a,c){if(a){const h=Object.keys(a),u=h.length;for(let d=0;d<u;d++)c==="strict"?l[h[d]]=[a[h[d]]]:l[h[d]]=a[h[d]]}},t.getValue=function(l){return t.isExist(l)?l:""},t.isName=o,t.getAllMatches=n,t.nameRegexp=r})(kt);const fs=kt,bo={allowBooleanAttributes:!1,unpairedTags:[]};ps.validate=function(t,e){e=Object.assign({},bo,e);const s=[];let r=!1,i=!1;t[0]==="\uFEFF"&&(t=t.substr(1));for(let n=0;n<t.length;n++)if(t[n]==="<"&&t[n+1]==="?"){if(n+=2,n=nr(t,n),n.err)return n}else if(t[n]==="<"){let o=n;if(n++,t[n]==="!"){n=or(t,n);continue}else{let l=!1;t[n]==="/"&&(l=!0,n++);let a="";for(;n<t.length&&t[n]!==">"&&t[n]!==" "&&t[n]!=="	"&&t[n]!==`
`&&t[n]!=="\r";n++)a+=t[n];if(a=a.trim(),a[a.length-1]==="/"&&(a=a.substring(0,a.length-1),n--),!ko(a)){let u;return a.trim().length===0?u="Invalid space after '<'.":u="Tag '"+a+"' is an invalid name.",S("InvalidTag",u,z(t,n))}const c=yo(t,n);if(c===!1)return S("InvalidAttr","Attributes for '"+a+"' have open quote.",z(t,n));let h=c.value;if(n=c.index,h[h.length-1]==="/"){const u=n-h.length;h=h.substring(0,h.length-1);const d=ar(h,e);if(d===!0)r=!0;else return S(d.err.code,d.err.msg,z(t,u+d.err.line))}else if(l)if(c.tagClosed){if(h.trim().length>0)return S("InvalidTag","Closing tag '"+a+"' can't have attributes or invalid starting.",z(t,o));if(s.length===0)return S("InvalidTag","Closing tag '"+a+"' has not been opened.",z(t,o));{const u=s.pop();if(a!==u.tagName){let d=z(t,u.tagStartPos);return S("InvalidTag","Expected closing tag '"+u.tagName+"' (opened in line "+d.line+", col "+d.col+") instead of closing tag '"+a+"'.",z(t,o))}s.length==0&&(i=!0)}}else return S("InvalidTag","Closing tag '"+a+"' doesn't have proper closing.",z(t,n));else{const u=ar(h,e);if(u!==!0)return S(u.err.code,u.err.msg,z(t,n-h.length+u.err.line));if(i===!0)return S("InvalidXml","Multiple possible root nodes found.",z(t,n));e.unpairedTags.indexOf(a)!==-1||s.push({tagName:a,tagStartPos:o}),r=!0}for(n++;n<t.length;n++)if(t[n]==="<")if(t[n+1]==="!"){n++,n=or(t,n);continue}else if(t[n+1]==="?"){if(n=nr(t,++n),n.err)return n}else break;else if(t[n]==="&"){const u=$o(t,n);if(u==-1)return S("InvalidChar","char '&' is not expected.",z(t,n));n=u}else if(i===!0&&!ir(t[n]))return S("InvalidXml","Extra text at the end",z(t,n));t[n]==="<"&&n--}}else{if(ir(t[n]))continue;return S("InvalidChar","char '"+t[n]+"' is not expected.",z(t,n))}if(r){if(s.length==1)return S("InvalidTag","Unclosed tag '"+s[0].tagName+"'.",z(t,s[0].tagStartPos));if(s.length>0)return S("InvalidXml","Invalid '"+JSON.stringify(s.map(n=>n.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1})}else return S("InvalidXml","Start tag expected.",1);return!0};function ir(t){return t===" "||t==="	"||t===`
`||t==="\r"}function nr(t,e){const s=e;for(;e<t.length;e++)if(t[e]=="?"||t[e]==" "){const r=t.substr(s,e-s);if(e>5&&r==="xml")return S("InvalidXml","XML declaration allowed only at the start of the document.",z(t,e));if(t[e]=="?"&&t[e+1]==">"){e++;break}else continue}return e}function or(t,e){if(t.length>e+5&&t[e+1]==="-"&&t[e+2]==="-"){for(e+=3;e<t.length;e++)if(t[e]==="-"&&t[e+1]==="-"&&t[e+2]===">"){e+=2;break}}else if(t.length>e+8&&t[e+1]==="D"&&t[e+2]==="O"&&t[e+3]==="C"&&t[e+4]==="T"&&t[e+5]==="Y"&&t[e+6]==="P"&&t[e+7]==="E"){let s=1;for(e+=8;e<t.length;e++)if(t[e]==="<")s++;else if(t[e]===">"&&(s--,s===0))break}else if(t.length>e+9&&t[e+1]==="["&&t[e+2]==="C"&&t[e+3]==="D"&&t[e+4]==="A"&&t[e+5]==="T"&&t[e+6]==="A"&&t[e+7]==="["){for(e+=8;e<t.length;e++)if(t[e]==="]"&&t[e+1]==="]"&&t[e+2]===">"){e+=2;break}}return e}const mo='"',vo="'";function yo(t,e){let s="",r="",i=!1;for(;e<t.length;e++){if(t[e]===mo||t[e]===vo)r===""?r=t[e]:r!==t[e]||(r="");else if(t[e]===">"&&r===""){i=!0;break}s+=t[e]}return r!==""?!1:{value:s,index:e,tagClosed:i}}const wo=new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");function ar(t,e){const s=fs.getAllMatches(t,wo),r={};for(let i=0;i<s.length;i++){if(s[i][1].length===0)return S("InvalidAttr","Attribute '"+s[i][2]+"' has no space in starting.",ze(s[i]));if(s[i][3]!==void 0&&s[i][4]===void 0)return S("InvalidAttr","Attribute '"+s[i][2]+"' is without value.",ze(s[i]));if(s[i][3]===void 0&&!e.allowBooleanAttributes)return S("InvalidAttr","boolean attribute '"+s[i][2]+"' is not allowed.",ze(s[i]));const n=s[i][2];if(!xo(n))return S("InvalidAttr","Attribute '"+n+"' is an invalid name.",ze(s[i]));if(!r.hasOwnProperty(n))r[n]=1;else return S("InvalidAttr","Attribute '"+n+"' is repeated.",ze(s[i]))}return!0}function _o(t,e){let s=/\d/;for(t[e]==="x"&&(e++,s=/[\da-fA-F]/);e<t.length;e++){if(t[e]===";")return e;if(!t[e].match(s))break}return-1}function $o(t,e){if(e++,t[e]===";")return-1;if(t[e]==="#")return e++,_o(t,e);let s=0;for(;e<t.length;e++,s++)if(!(t[e].match(/\w/)&&s<20)){if(t[e]===";")break;return-1}return e}function S(t,e,s){return{err:{code:t,msg:e,line:s.line||s,col:s.col}}}function xo(t){return fs.isName(t)}function ko(t){return fs.isName(t)}function z(t,e){const s=t.substring(0,e).split(/\r?\n/);return{line:s.length,col:s[s.length-1].length+1}}function ze(t){return t.startIndex+t[1].length}var gs={};const Yr={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(t,e,s){return t}},Ao=function(t){return Object.assign({},Yr,t)};gs.buildOptions=Ao;gs.defaultOptions=Yr;class Eo{constructor(e){this.tagname=e,this.child=[],this[":@"]={}}add(e,s){e==="__proto__"&&(e="#__proto__"),this.child.push({[e]:s})}addChild(e){e.tagname==="__proto__"&&(e.tagname="#__proto__"),e[":@"]&&Object.keys(e[":@"]).length>0?this.child.push({[e.tagname]:e.child,[":@"]:e[":@"]}):this.child.push({[e.tagname]:e.child})}}var So=Eo;const Co=kt;function No(t,e){const s={};if(t[e+3]==="O"&&t[e+4]==="C"&&t[e+5]==="T"&&t[e+6]==="Y"&&t[e+7]==="P"&&t[e+8]==="E"){e=e+9;let r=1,i=!1,n=!1,o="";for(;e<t.length;e++)if(t[e]==="<"&&!n){if(i&&Oo(t,e))e+=7,[entityName,val,e]=To(t,e+1),val.indexOf("&")===-1&&(s[Lo(entityName)]={regx:RegExp(`&${entityName};`,"g"),val});else if(i&&Io(t,e))e+=8;else if(i&&zo(t,e))e+=8;else if(i&&Ro(t,e))e+=9;else if(Po)n=!0;else throw new Error("Invalid DOCTYPE");r++,o=""}else if(t[e]===">"){if(n?t[e-1]==="-"&&t[e-2]==="-"&&(n=!1,r--):r--,r===0)break}else t[e]==="["?i=!0:o+=t[e];if(r!==0)throw new Error("Unclosed DOCTYPE")}else throw new Error("Invalid Tag instead of DOCTYPE");return{entities:s,i:e}}function To(t,e){let s="";for(;e<t.length&&t[e]!=="'"&&t[e]!=='"';e++)s+=t[e];if(s=s.trim(),s.indexOf(" ")!==-1)throw new Error("External entites are not supported");const r=t[e++];let i="";for(;e<t.length&&t[e]!==r;e++)i+=t[e];return[s,i,e]}function Po(t,e){return t[e+1]==="!"&&t[e+2]==="-"&&t[e+3]==="-"}function Oo(t,e){return t[e+1]==="!"&&t[e+2]==="E"&&t[e+3]==="N"&&t[e+4]==="T"&&t[e+5]==="I"&&t[e+6]==="T"&&t[e+7]==="Y"}function Io(t,e){return t[e+1]==="!"&&t[e+2]==="E"&&t[e+3]==="L"&&t[e+4]==="E"&&t[e+5]==="M"&&t[e+6]==="E"&&t[e+7]==="N"&&t[e+8]==="T"}function zo(t,e){return t[e+1]==="!"&&t[e+2]==="A"&&t[e+3]==="T"&&t[e+4]==="T"&&t[e+5]==="L"&&t[e+6]==="I"&&t[e+7]==="S"&&t[e+8]==="T"}function Ro(t,e){return t[e+1]==="!"&&t[e+2]==="N"&&t[e+3]==="O"&&t[e+4]==="T"&&t[e+5]==="A"&&t[e+6]==="T"&&t[e+7]==="I"&&t[e+8]==="O"&&t[e+9]==="N"}function Lo(t){if(Co.isName(t))return t;throw new Error(`Invalid entity name ${t}`)}var Bo=No;const Fo=/^[-+]?0x[a-fA-F0-9]+$/,Mo=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt);!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);const Uo={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};function Vo(t,e={}){if(e=Object.assign({},Uo,e),!t||typeof t!="string")return t;let s=t.trim();if(e.skipLike!==void 0&&e.skipLike.test(s))return t;if(e.hex&&Fo.test(s))return Number.parseInt(s,16);{const r=Mo.exec(s);if(r){const i=r[1],n=r[2];let o=Ho(r[3]);const l=r[4]||r[6];if(!e.leadingZeros&&n.length>0&&i&&s[2]!==".")return t;if(!e.leadingZeros&&n.length>0&&!i&&s[1]!==".")return t;{const a=Number(s),c=""+a;return c.search(/[eE]/)!==-1||l?e.eNotation?a:t:s.indexOf(".")!==-1?c==="0"&&o===""||c===o||i&&c==="-"+o?a:t:n?o===c||i+o===c?a:t:s===c||s===i+c?a:t}}else return t}}function Ho(t){return t&&t.indexOf(".")!==-1&&(t=t.replace(/0+$/,""),t==="."?t="0":t[0]==="."?t="0"+t:t[t.length-1]==="."&&(t=t.substr(0,t.length-1))),t}var jo=Vo;const Zr=kt,Re=So,Wo=Bo,qo=jo;class Go{constructor(e){this.options=e,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.ampEntity={regex:/&(amp|#38|#x26);/g,val:"&"},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"\xA2"},pound:{regex:/&(pound|#163);/g,val:"\xA3"},yen:{regex:/&(yen|#165);/g,val:"\xA5"},euro:{regex:/&(euro|#8364);/g,val:"\u20AC"},copyright:{regex:/&(copy|#169);/g,val:"\xA9"},reg:{regex:/&(reg|#174);/g,val:"\xAE"},inr:{regex:/&(inr|#8377);/g,val:"\u20B9"},num_dec:{regex:/&#([0-9]{1,7});/g,val:(s,r)=>String.fromCharCode(Number.parseInt(r,10))},num_hex:{regex:/&#x([0-9a-fA-F]{1,6});/g,val:(s,r)=>String.fromCharCode(Number.parseInt(r,16))}},this.addExternalEntities=Xo,this.parseXml=Jo,this.parseTextData=Yo,this.resolveNameSpace=Zo,this.buildAttributesMap=Qo,this.isItStopNode=sa,this.replaceEntitiesValue=ea,this.readStopNodeData=ia,this.saveTextToParentTag=ta,this.addChild=Do}}function Xo(t){const e=Object.keys(t);for(let s=0;s<e.length;s++){const r=e[s];this.lastEntities[r]={regex:new RegExp("&"+r+";","g"),val:t[r]}}}function Yo(t,e,s,r,i,n,o){if(t!==void 0&&(this.options.trimValues&&!r&&(t=t.trim()),t.length>0)){o||(t=this.replaceEntitiesValue(t));const l=this.options.tagValueProcessor(e,t,s,i,n);return l==null?t:typeof l!=typeof t||l!==t?l:this.options.trimValues?es(t,this.options.parseTagValue,this.options.numberParseOptions):t.trim()===t?es(t,this.options.parseTagValue,this.options.numberParseOptions):t}}function Zo(t){if(this.options.removeNSPrefix){const e=t.split(":"),s=t.charAt(0)==="/"?"/":"";if(e[0]==="xmlns")return"";e.length===2&&(t=s+e[1])}return t}const Ko=new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,"gm");function Qo(t,e,s){if(!this.options.ignoreAttributes&&typeof t=="string"){const r=Zr.getAllMatches(t,Ko),i=r.length,n={};for(let o=0;o<i;o++){const l=this.resolveNameSpace(r[o][1]);let a=r[o][4],c=this.options.attributeNamePrefix+l;if(l.length)if(this.options.transformAttributeName&&(c=this.options.transformAttributeName(c)),c==="__proto__"&&(c="#__proto__"),a!==void 0){this.options.trimValues&&(a=a.trim()),a=this.replaceEntitiesValue(a);const h=this.options.attributeValueProcessor(l,a,e);h==null?n[c]=a:typeof h!=typeof a||h!==a?n[c]=h:n[c]=es(a,this.options.parseAttributeValue,this.options.numberParseOptions)}else this.options.allowBooleanAttributes&&(n[c]=!0)}if(!Object.keys(n).length)return;if(this.options.attributesGroupName){const o={};return o[this.options.attributesGroupName]=n,o}return n}}const Jo=function(t){t=t.replace(/\r\n?/g,`
`);const e=new Re("!xml");let s=e,r="",i="";for(let n=0;n<t.length;n++)if(t[n]==="<")if(t[n+1]==="/"){const l=ie(t,">",n,"Closing Tag is not closed.");let a=t.substring(n+2,l).trim();if(this.options.removeNSPrefix){const u=a.indexOf(":");u!==-1&&(a=a.substr(u+1))}this.options.transformTagName&&(a=this.options.transformTagName(a)),s&&(r=this.saveTextToParentTag(r,s,i));const c=i.substring(i.lastIndexOf(".")+1);if(a&&this.options.unpairedTags.indexOf(a)!==-1)throw new Error(`Unpaired tag can not be used as closing tag: </${a}>`);let h=0;c&&this.options.unpairedTags.indexOf(c)!==-1?(h=i.lastIndexOf(".",i.lastIndexOf(".")-1),this.tagsNodeStack.pop()):h=i.lastIndexOf("."),i=i.substring(0,h),s=this.tagsNodeStack.pop(),r="",n=l}else if(t[n+1]==="?"){let l=Dt(t,n,!1,"?>");if(!l)throw new Error("Pi Tag is not closed.");if(r=this.saveTextToParentTag(r,s,i),!(this.options.ignoreDeclaration&&l.tagName==="?xml"||this.options.ignorePiTags)){const a=new Re(l.tagName);a.add(this.options.textNodeName,""),l.tagName!==l.tagExp&&l.attrExpPresent&&(a[":@"]=this.buildAttributesMap(l.tagExp,i,l.tagName)),this.addChild(s,a,i)}n=l.closeIndex+1}else if(t.substr(n+1,3)==="!--"){const l=ie(t,"-->",n+4,"Comment is not closed.");if(this.options.commentPropName){const a=t.substring(n+4,l-2);r=this.saveTextToParentTag(r,s,i),s.add(this.options.commentPropName,[{[this.options.textNodeName]:a}])}n=l}else if(t.substr(n+1,2)==="!D"){const l=Wo(t,n);this.docTypeEntities=l.entities,n=l.i}else if(t.substr(n+1,2)==="!["){const l=ie(t,"]]>",n,"CDATA is not closed.")-2,a=t.substring(n+9,l);r=this.saveTextToParentTag(r,s,i);let c=this.parseTextData(a,s.tagname,i,!0,!1,!0,!0);c==null&&(c=""),this.options.cdataPropName?s.add(this.options.cdataPropName,[{[this.options.textNodeName]:a}]):s.add(this.options.textNodeName,c),n=l+2}else{let l=Dt(t,n,this.options.removeNSPrefix),a=l.tagName;const c=l.rawTagName;let h=l.tagExp,u=l.attrExpPresent,d=l.closeIndex;this.options.transformTagName&&(a=this.options.transformTagName(a)),s&&r&&s.tagname!=="!xml"&&(r=this.saveTextToParentTag(r,s,i,!1));const p=s;if(p&&this.options.unpairedTags.indexOf(p.tagname)!==-1&&(s=this.tagsNodeStack.pop(),i=i.substring(0,i.lastIndexOf("."))),a!==e.tagname&&(i+=i?"."+a:a),this.isItStopNode(this.options.stopNodes,i,a)){let g="";if(h.length>0&&h.lastIndexOf("/")===h.length-1)a[a.length-1]==="/"?(a=a.substr(0,a.length-1),i=i.substr(0,i.length-1),h=a):h=h.substr(0,h.length-1),n=l.closeIndex;else if(this.options.unpairedTags.indexOf(a)!==-1)n=l.closeIndex;else{const T=this.readStopNodeData(t,c,d+1);if(!T)throw new Error(`Unexpected end of ${c}`);n=T.i,g=T.tagContent}const _=new Re(a);a!==h&&u&&(_[":@"]=this.buildAttributesMap(h,i,a)),g&&(g=this.parseTextData(g,a,i,!0,u,!0,!0)),i=i.substr(0,i.lastIndexOf(".")),_.add(this.options.textNodeName,g),this.addChild(s,_,i)}else{if(h.length>0&&h.lastIndexOf("/")===h.length-1){a[a.length-1]==="/"?(a=a.substr(0,a.length-1),i=i.substr(0,i.length-1),h=a):h=h.substr(0,h.length-1),this.options.transformTagName&&(a=this.options.transformTagName(a));const g=new Re(a);a!==h&&u&&(g[":@"]=this.buildAttributesMap(h,i,a)),this.addChild(s,g,i),i=i.substr(0,i.lastIndexOf("."))}else{const g=new Re(a);this.tagsNodeStack.push(s),a!==h&&u&&(g[":@"]=this.buildAttributesMap(h,i,a)),this.addChild(s,g,i),s=g}r="",n=d}}else r+=t[n];return e.child};function Do(t,e,s){const r=this.options.updateTag(e.tagname,s,e[":@"]);r===!1||(typeof r=="string"&&(e.tagname=r),t.addChild(e))}const ea=function(t){if(this.options.processEntities){for(let e in this.docTypeEntities){const s=this.docTypeEntities[e];t=t.replace(s.regx,s.val)}for(let e in this.lastEntities){const s=this.lastEntities[e];t=t.replace(s.regex,s.val)}if(this.options.htmlEntities)for(let e in this.htmlEntities){const s=this.htmlEntities[e];t=t.replace(s.regex,s.val)}t=t.replace(this.ampEntity.regex,this.ampEntity.val)}return t};function ta(t,e,s,r){return t&&(r===void 0&&(r=Object.keys(e.child).length===0),t=this.parseTextData(t,e.tagname,s,!1,e[":@"]?Object.keys(e[":@"]).length!==0:!1,r),t!==void 0&&t!==""&&e.add(this.options.textNodeName,t),t=""),t}function sa(t,e,s){const r="*."+s;for(const i in t){const n=t[i];if(r===n||e===n)return!0}return!1}function ra(t,e,s=">"){let r,i="";for(let n=e;n<t.length;n++){let o=t[n];if(r)o===r&&(r="");else if(o==='"'||o==="'")r=o;else if(o===s[0])if(s[1]){if(t[n+1]===s[1])return{data:i,index:n}}else return{data:i,index:n};else o==="	"&&(o=" ");i+=o}}function ie(t,e,s,r){const i=t.indexOf(e,s);if(i===-1)throw new Error(r);return i+e.length-1}function Dt(t,e,s,r=">"){const i=ra(t,e+1,r);if(!i)return;let n=i.data;const o=i.index,l=n.search(/\s/);let a=n,c=!0;l!==-1&&(a=n.substring(0,l),n=n.substring(l+1).trimStart());const h=a;if(s){const u=a.indexOf(":");u!==-1&&(a=a.substr(u+1),c=a!==i.data.substr(u+1))}return{tagName:a,tagExp:n,closeIndex:o,attrExpPresent:c,rawTagName:h}}function ia(t,e,s){const r=s;let i=1;for(;s<t.length;s++)if(t[s]==="<")if(t[s+1]==="/"){const n=ie(t,">",s,`${e} is not closed`);if(t.substring(s+2,n).trim()===e&&(i--,i===0))return{tagContent:t.substring(r,s),i:n};s=n}else if(t[s+1]==="?")s=ie(t,"?>",s+1,"StopNode is not closed.");else if(t.substr(s+1,3)==="!--")s=ie(t,"-->",s+3,"StopNode is not closed.");else if(t.substr(s+1,2)==="![")s=ie(t,"]]>",s,"StopNode is not closed.")-2;else{const n=Dt(t,s,">");n&&((n&&n.tagName)===e&&n.tagExp[n.tagExp.length-1]!=="/"&&i++,s=n.closeIndex)}}function es(t,e,s){if(e&&typeof t=="string"){const r=t.trim();return r==="true"?!0:r==="false"?!1:qo(t,s)}else return Zr.isExist(t)?t:""}var na=Go,Kr={};function oa(t,e){return Qr(t,e)}function Qr(t,e,s){let r;const i={};for(let n=0;n<t.length;n++){const o=t[n],l=aa(o);let a="";if(s===void 0?a=l:a=s+"."+l,l===e.textNodeName)r===void 0?r=o[l]:r+=""+o[l];else{if(l===void 0)continue;if(o[l]){let c=Qr(o[l],e,a);const h=ca(c,e);o[":@"]?la(c,o[":@"],a,e):Object.keys(c).length===1&&c[e.textNodeName]!==void 0&&!e.alwaysCreateTextNode?c=c[e.textNodeName]:Object.keys(c).length===0&&(e.alwaysCreateTextNode?c[e.textNodeName]="":c=""),i[l]!==void 0&&i.hasOwnProperty(l)?(Array.isArray(i[l])||(i[l]=[i[l]]),i[l].push(c)):e.isArray(l,a,h)?i[l]=[c]:i[l]=c}}}return typeof r=="string"?r.length>0&&(i[e.textNodeName]=r):r!==void 0&&(i[e.textNodeName]=r),i}function aa(t){const e=Object.keys(t);for(let s=0;s<e.length;s++){const r=e[s];if(r!==":@")return r}}function la(t,e,s,r){if(e){const i=Object.keys(e),n=i.length;for(let o=0;o<n;o++){const l=i[o];r.isArray(l,s+"."+l,!0,!0)?t[l]=[e[l]]:t[l]=e[l]}}}function ca(t,e){const{textNodeName:s}=e,r=Object.keys(t).length;return!!(r===0||r===1&&(t[s]||typeof t[s]=="boolean"||t[s]===0))}Kr.prettify=oa;const{buildOptions:ua}=gs,ha=na,{prettify:da}=Kr,pa=ps;class fa{constructor(e){this.externalEntities={},this.options=ua(e)}parse(e,s){if(typeof e!="string")if(e.toString)e=e.toString();else throw new Error("XML data is accepted in String or Bytes[] form.");if(s){s===!0&&(s={});const n=pa.validate(e,s);if(n!==!0)throw Error(`${n.err.msg}:${n.err.line}:${n.err.col}`)}const r=new ha(this.options);r.addExternalEntities(this.externalEntities);const i=r.parseXml(e);return this.options.preserveOrder||i===void 0?i:da(i,this.options)}addEntity(e,s){if(s.indexOf("&")!==-1)throw new Error("Entity value can't have '&'");if(e.indexOf("&")!==-1||e.indexOf(";")!==-1)throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if(s==="&")throw new Error("An entity with value '&' is not permitted");this.externalEntities[e]=s}}var ga=fa;const ba=`
`;function ma(t,e){let s="";return e.format&&e.indentBy.length>0&&(s=ba),Jr(t,e,"",s)}function Jr(t,e,s,r){let i="",n=!1;for(let o=0;o<t.length;o++){const l=t[o],a=va(l);if(a===void 0)continue;let c="";if(s.length===0?c=a:c=`${s}.${a}`,a===e.textNodeName){let g=l[a];ya(c,e)||(g=e.tagValueProcessor(a,g),g=Dr(g,e)),n&&(i+=r),i+=g,n=!1;continue}else if(a===e.cdataPropName){n&&(i+=r),i+=`<![CDATA[${l[a][0][e.textNodeName]}]]>`,n=!1;continue}else if(a===e.commentPropName){i+=r+`<!--${l[a][0][e.textNodeName]}-->`,n=!0;continue}else if(a[0]==="?"){const g=lr(l[":@"],e),_=a==="?xml"?"":r;let T=l[a][0][e.textNodeName];T=T.length!==0?" "+T:"",i+=_+`<${a}${T}${g}?>`,n=!0;continue}let h=r;h!==""&&(h+=e.indentBy);const u=lr(l[":@"],e),d=r+`<${a}${u}`,p=Jr(l[a],e,c,h);e.unpairedTags.indexOf(a)!==-1?e.suppressUnpairedNode?i+=d+">":i+=d+"/>":(!p||p.length===0)&&e.suppressEmptyNode?i+=d+"/>":p&&p.endsWith(">")?i+=d+`>${p}${r}</${a}>`:(i+=d+">",p&&r!==""&&(p.includes("/>")||p.includes("</"))?i+=r+e.indentBy+p+r:i+=p,i+=`</${a}>`),n=!0}return i}function va(t){const e=Object.keys(t);for(let s=0;s<e.length;s++){const r=e[s];if(!!t.hasOwnProperty(r)&&r!==":@")return r}}function lr(t,e){let s="";if(t&&!e.ignoreAttributes)for(let r in t){if(!t.hasOwnProperty(r))continue;let i=e.attributeValueProcessor(r,t[r]);i=Dr(i,e),i===!0&&e.suppressBooleanAttributes?s+=` ${r.substr(e.attributeNamePrefix.length)}`:s+=` ${r.substr(e.attributeNamePrefix.length)}="${i}"`}return s}function ya(t,e){t=t.substr(0,t.length-e.textNodeName.length-1);let s=t.substr(t.lastIndexOf(".")+1);for(let r in e.stopNodes)if(e.stopNodes[r]===t||e.stopNodes[r]==="*."+s)return!0;return!1}function Dr(t,e){if(t&&t.length>0&&e.processEntities)for(let s=0;s<e.entities.length;s++){const r=e.entities[s];t=t.replace(r.regex,r.val)}return t}var wa=ma;const _a=wa,$a={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function K(t){this.options=Object.assign({},$a,t),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=Aa),this.processTextOrObjNode=xa,this.options.format?(this.indentate=ka,this.tagEndChar=`>
`,this.newLine=`
`):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}K.prototype.build=function(t){return this.options.preserveOrder?_a(t,this.options):(Array.isArray(t)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(t={[this.options.arrayNodeName]:t}),this.j2x(t,0).val)};K.prototype.j2x=function(t,e){let s="",r="";for(let i in t)if(!!Object.prototype.hasOwnProperty.call(t,i))if(typeof t[i]=="undefined")this.isAttribute(i)&&(r+="");else if(t[i]===null)this.isAttribute(i)?r+="":i[0]==="?"?r+=this.indentate(e)+"<"+i+"?"+this.tagEndChar:r+=this.indentate(e)+"<"+i+"/"+this.tagEndChar;else if(t[i]instanceof Date)r+=this.buildTextValNode(t[i],i,"",e);else if(typeof t[i]!="object"){const n=this.isAttribute(i);if(n)s+=this.buildAttrPairStr(n,""+t[i]);else if(i===this.options.textNodeName){let o=this.options.tagValueProcessor(i,""+t[i]);r+=this.replaceEntitiesValue(o)}else r+=this.buildTextValNode(t[i],i,"",e)}else if(Array.isArray(t[i])){const n=t[i].length;let o="";for(let l=0;l<n;l++){const a=t[i][l];typeof a=="undefined"||(a===null?i[0]==="?"?r+=this.indentate(e)+"<"+i+"?"+this.tagEndChar:r+=this.indentate(e)+"<"+i+"/"+this.tagEndChar:typeof a=="object"?this.options.oneListGroup?o+=this.j2x(a,e+1).val:o+=this.processTextOrObjNode(a,i,e):o+=this.buildTextValNode(a,i,"",e))}this.options.oneListGroup&&(o=this.buildObjectNode(o,i,"",e)),r+=o}else if(this.options.attributesGroupName&&i===this.options.attributesGroupName){const n=Object.keys(t[i]),o=n.length;for(let l=0;l<o;l++)s+=this.buildAttrPairStr(n[l],""+t[i][n[l]])}else r+=this.processTextOrObjNode(t[i],i,e);return{attrStr:s,val:r}};K.prototype.buildAttrPairStr=function(t,e){return e=this.options.attributeValueProcessor(t,""+e),e=this.replaceEntitiesValue(e),this.options.suppressBooleanAttributes&&e==="true"?" "+t:" "+t+'="'+e+'"'};function xa(t,e,s){const r=this.j2x(t,s+1);return t[this.options.textNodeName]!==void 0&&Object.keys(t).length===1?this.buildTextValNode(t[this.options.textNodeName],e,r.attrStr,s):this.buildObjectNode(r.val,e,r.attrStr,s)}K.prototype.buildObjectNode=function(t,e,s,r){if(t==="")return e[0]==="?"?this.indentate(r)+"<"+e+s+"?"+this.tagEndChar:this.indentate(r)+"<"+e+s+this.closeTag(e)+this.tagEndChar;{let i="</"+e+this.tagEndChar,n="";return e[0]==="?"&&(n="?",i=""),(s||s==="")&&t.indexOf("<")===-1?this.indentate(r)+"<"+e+s+n+">"+t+i:this.options.commentPropName!==!1&&e===this.options.commentPropName&&n.length===0?this.indentate(r)+`<!--${t}-->`+this.newLine:this.indentate(r)+"<"+e+s+n+this.tagEndChar+t+this.indentate(r)+i}};K.prototype.closeTag=function(t){let e="";return this.options.unpairedTags.indexOf(t)!==-1?this.options.suppressUnpairedNode||(e="/"):this.options.suppressEmptyNode?e="/":e=`></${t}`,e};K.prototype.buildTextValNode=function(t,e,s,r){if(this.options.cdataPropName!==!1&&e===this.options.cdataPropName)return this.indentate(r)+`<![CDATA[${t}]]>`+this.newLine;if(this.options.commentPropName!==!1&&e===this.options.commentPropName)return this.indentate(r)+`<!--${t}-->`+this.newLine;if(e[0]==="?")return this.indentate(r)+"<"+e+s+"?"+this.tagEndChar;{let i=this.options.tagValueProcessor(e,t);return i=this.replaceEntitiesValue(i),i===""?this.indentate(r)+"<"+e+s+this.closeTag(e)+this.tagEndChar:this.indentate(r)+"<"+e+s+">"+i+"</"+e+this.tagEndChar}};K.prototype.replaceEntitiesValue=function(t){if(t&&t.length>0&&this.options.processEntities)for(let e=0;e<this.options.entities.length;e++){const s=this.options.entities[e];t=t.replace(s.regex,s.val)}return t};function ka(t){return this.options.indentBy.repeat(t)}function Aa(t){return t.startsWith(this.options.attributeNamePrefix)&&t!==this.options.textNodeName?t.substr(this.attrPrefixLen):!1}var Ea=K;const Sa=ps,Ca=ga,Na=Ea;var jt={XMLParser:Ca,XMLValidator:Sa,XMLBuilder:Na},Ta={REF_WHITE:"D50",RGB_MODEL:"sRGB",GAMMA_MODEL:"sRGB",ADAPTION:"Bradford"},Pa=t=>Oa[t]||[1,1,1],Oa={A:[1.0985,1,.35585],B:[.99072,1,.85223],C:[.98074,1,1.18232],D50:[.96422,1,.82521],D55:[.95682,1,.92149],D65:[.95047,1,1.0888],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]},ot=(t,{refWhite:e=Ta.REF_WHITE}={})=>{let[s,r,i]=t,n=s+r+i;if(n>0)return[s/n,r/n,r];{let[o,l,a]=Pa(e),c=o+l+a;return[o/c,l/c,r]}};class Ia{constructor({debug:e=!1}={}){this.isDebug=!1,this.xmlParser=new jt.XMLParser({ignoreAttributes:!1}),this.isDebug=e}getRGBWFromBpd(e){if(!jt.XMLValidator.validate(e))throw new Error("Could not validate BDP XML.");const{builder_color_space:{head:{L:s,x:r,y:i}}}=this.xmlParser.parse(e);return[[parseFloat(r["@_red"]),parseFloat(r["@_green"]),parseFloat(r["@_blue"]),parseFloat(r["@_white"])],[parseFloat(i["@_red"]),parseFloat(i["@_green"]),parseFloat(i["@_blue"]),parseFloat(i["@_white"])],[parseFloat(s["@_red"]),parseFloat(s["@_green"]),parseFloat(s["@_blue"]),parseFloat(s["@_white"])]]}getRGBWFromBcs(e){if(!jt.XMLValidator.validate(e))throw new Error("Could not validate BCS XML.");const{builder_color_space:{data:{patch:s}}}=this.xmlParser.parse(e);return this.getRGBWMatrixFromPatches(s)}getRGBWMatrixFromPatches(e=[]){if(e.length<1)return;const s=e.filter(u=>!(u.stimuli.red===0&&u.stimuli.green===0&&u.stimuli.blue===0)).filter(u=>!(u.stimuli.red===1&&u.stimuli.green===1&&u.stimuli.blue===1)),{results:{XYZ:r=void 0}={}}=s.filter(u=>u.stimuli.green===0&&u.stimuli.blue===0).shift()||{},{results:{XYZ:i=void 0}={}}=s.filter(u=>u.stimuli.red===0&&u.stimuli.blue===0).shift()||{},{results:{XYZ:n=void 0}={}}=s.filter(u=>u.stimuli.red===0&&u.stimuli.green===0).shift()||{},[{results:{XYZ:o=void 0}={}}]=e.filter(u=>u.stimuli.red!==0&&u.stimuli.red!==1&&u.stimuli.green!==0&&u.stimuli.green!==1&&u.stimuli.blue!==0&&u.stimuli.blue!==1);if(this.isDebug&&(console.log("redXYZ",r),console.log("greenXYZ",i),console.log("blueXYZ",n),console.log("whiteXYZ",o)),!r||!i||!n||!o)return;const l=ot([r.X,r.Y,r.Z]),a=ot([i.X,i.Y,i.Z]),c=ot([n.X,n.Y,n.Z]),h=ot([o.X,o.Y,o.Z]);return[[l[0],a[0],c[0],h[0]],[l[1],a[1],c[1],h[1]],[l[2],a[2],c[2],h[2]]]}getRGBWIndexForColor(e){return{red:0,green:1,blue:2,white:3}[e]}}var za=`:host{--app-spacing-header: var(--sl-spacing-medium);--app-section-spacing: var(--sl-spacing-3x-large);font-family:var(--sl-font-sans);line-height:var(--sl-line-height-dense);padding:0 var(--sl-spacing-small);display:block}h1,h2,h3,p{margin:0 0 var(--sl-spacing-small)}a{color:var(--sl-color-primary-800)}h1{font-size:var(--sl-font-size-x-large);font-weight:var(--sl-font-weight-bold)}h2{font-size:var(--sl-font-size-large);font-weight:var(--sl-font-weight-semibold)}h3{font-size:var(--sl-font-size-medium);font-weight:var(--sl-font-weight-semibold)}ol li{margin-bottom:var(--sl-spacing-medium)}.text-success{color:var(--sl-color-success-700)}.text-error{color:var(--sl-color-danger-600)}.text-red{color:var(--sl-color-red-600)}.text-green{color:var(--sl-color-green-600)}.text-blue{color:var(--sl-color-blue-600)}.text-white{color:var(--sl-color-gray-600)}table{font-family:var(--sl-font-mono);font-size:var(--sl-font-size-small)}td{padding:var(--sl-spacing-x-small) var(--sl-spacing-x-small);font-weight:600}th{padding:var(--sl-spacing-2x-small) var(--sl-spacing-x-small)}tr.separator th{padding-top:var(--sl-spacing-large)}.profile-comparison th,.app-content td{text-align:right}th{font-weight:var(--sl-font-weight-normal);font-family:var(--sl-font-sans)}td.red{background:var(--app-color-bg-r)}td.green{background:var(--app-color-bg-g)}td.blue{background:var(--app-color-bg-b)}td.white{background:var(--app-color-bg-w)}tr.red td{background:var(--app-color-bg-r)}tr.green td{background:var(--app-color-bg-g)}tr.blue td{background:var(--app-color-bg-b)}tr.white td{background:var(--app-color-bg-w)}tr.red td.clear,tr.green td.clear,tr.blue td.clear,tr.white td.clear{background:transparent}.number-percent:after{content:"%"}.align-percent:after{content:"%";opacity:0}.table-responsive{display:block;width:100%;overflow-x:auto}.about-trigger{font-size:var(--sl-font-size-x-large)}.about-dialog{--width: 70ch}.about-dialog>.logo{max-width:32px;height:auto}.about-dialog::part(body){padding-top:0}.about-dialog code{word-break:break-word}.about-dialog th{text-align:left}.about-dialog td{vertical-align:top}.about-dialog ol{margin-left:0;padding-left:var(--sl-spacing-large)}.app-title{display:flex;align-items:center}.app-title>.logo{max-width:32px;height:auto;margin-right:var(--sl-spacing-small)}.app-header{position:fixed;top:0;left:0;width:100%;background:white;display:flex;justify-content:space-between;align-items:center;z-index:1;border-bottom:1px solid var(--sl-input-border-color)}.app-header>.title{margin:var(--app-spacing-header) 0 var(--app-spacing-header) var(--app-spacing-header)}.app-header>.info{margin:var(--app-spacing-header) var(--app-spacing-header) var(--app-spacing-header) 0}.app-content{padding-top:calc(var(--app-header-size) + var(--sl-spacing-large));display:grid;grid-template-columns:1fr;column-gap:var(--app-section-spacing);row-gap:var(--app-section-spacing)}.badge-text{display:flex;align-items:center}.badge-text>.badge{margin-left:var(--sl-spacing-x-small)}@media screen and (min-width: 1024px){.app-content{grid-template-columns:fit-content(100%) auto}}.table-section{margin-bottom:var(--app-section-spacing)}.table-section:last-child{margin-bottom:0}.table-section>.title{margin-bottom:0}.table-section>.file{margin-bottom:var(--sl-spacing-small)}.app-name{font-size:var(--sl-font-size-medium)}.app-name>.desc{display:block;font-size:var(--sl-font-size-x-small);font-weight:lighter}.section-title{display:flex;align-content:center}.section-title>.text{margin-right:var(--sl-spacing-x-small)}.icon-button>.icon{margin-right:var(--sl-spacing-2x-small)}@media screen,print and (min-width: 512px){.app-name{font-size:var(--sl-font-size-large)}}@media print{.about-trigger,.load-file-button{display:none}.app-header{border:none}}
`,Ra="/assets/color-spectrum.97f3c94a.png";const La="probe-match-verifier",Ba="1.2.1",Fa="Probe Match Verifier",Ma="A probe match verification tool for ColourSpace.",Ua="github:peschee/probe-match-verifier",Va={start:"vite",clean:"rimraf dist coverage",build:"pnpm run clean && tsc && vite build","build:gh-pages":"pnpm run build -- --base=/probe-match-verifier/",preview:"vite preview",prepreview:"pnpm run build",lint:"run-p lint:*","lint:eslint":"eslint --ext .js,.ts .","lint:prettier":"prettier '**/*.{js,ts,md,css}' --check","lint:types":"tsc --noEmit",format:"run-s format:*","format:eslint":"eslint --ext .js,.ts . --fix","format:prettier":"prettier '**/*.{js,ts,md,css}' --write",test:"vitest run","test:watch":"vitest",coverage:"vitest --coverage",preinstall:"npx -y only-allow pnpm",postinstall:"rimraf 'public/shoelace' && cpy --flat 'node_modules/@shoelace-style/shoelace/dist/assets/icons' 'public/shoelace/assets/icons'",release:"npx np --no-publish --no-cleanup --release-draft-only"},Ha=["colourspace","lightillusion","probe","matching","verification","spectro"],ja="Peter Siska <63866+peschee@users.noreply.github.com>",Wa="MIT",qa={"@types/node":"^17.0.31","@typescript-eslint/eslint-plugin":"^5.22.0","@typescript-eslint/parser":"^5.22.0",c8:"^7.11.2","cpy-cli":"^4.1.0",eslint:"^8.15.0","eslint-config-prettier":"^8.5.0","eslint-plugin-lit":"^1.6.1","eslint-plugin-wc":"^1.3.2","lint-staged":"^12.4.1","npm-run-all":"^4.1.5",prettier:"^2.6.2","remark-gfm":"^3.0.1",rimraf:"^3.0.2","simple-git-hooks":"^2.7.0","ts-lit-plugin":"^1.2.1",typescript:"^4.6.4",vite:"^2.9.18","vite-plugin-html":"^3.2.0","vite-remark-html":"^1.1.1",vitest:"^0.10.5"},Ga={"@shoelace-style/shoelace":"^2.0.0-beta.73","@vanillawc/wc-markdown":"^1.6.11","browser-fs-access":"^0.29.5","cie-colorconverter":"^3.1.0","fast-xml-parser":"^4.2.5",lit:"^2.2.3","normalize.css":"^8.0.1"};var cr={name:La,version:Ba,title:Fa,description:Ma,private:!0,repository:Ua,scripts:Va,keywords:Ha,author:ja,license:Wa,devDependencies:qa,dependencies:Ga,"lint-staged":{"**/*.{js,ts,md,css}":["prettier --write"],"**/*.{js,ts}":["eslint --fix"]},"simple-git-hooks":{"pre-commit":"pnpx lint-staged","pre-push":"CI=1 pnpm run lint && pnpm test"}},Xa=Object.defineProperty,Ya=Object.getOwnPropertyDescriptor,j=(t,e,s,r)=>{for(var i=r>1?void 0:r?Ya(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(i=(r?o(e,s,i):o(i))||i);return r&&i&&Xa(e,s,i),i};Zt("/shoelace");const Wt=!1;let $=class extends Be{constructor(){super(),this.csXML=new Ia({debug:Wt}),this.updateHeaderSize=this.updateHeaderSize.bind(this)}async connectedCallback(){super.connectedCallback(),console.info(`Version: ${this.version}`),window.addEventListener("resize",this.updateHeaderSize)}disconnectedCallback(){window.removeEventListener("resize",this.updateHeaderSize),super.disconnectedCallback()}render(){return B`
      <header class="app-header" data-app-header>
        <h1 class="title app-title">
          <img src="${Ra}" alt="" class="logo" />
          <span class="text app-name">
            <span class="title">${cr.title}</span>
            <span class="desc">${cr.description}</span>
          </span>
        </h1>
        <sl-icon-button
          name="info-circle"
          label="About"
          @click="${()=>{var t;(t=this.aboutDialog)==null||t.show(),$.trackUmamiEvent("open","about")}}"
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
            ${this.referenceBpd?B`<p class="file">${this.referenceBpd.name}</p>`:A}
            ${this.referenceRGBW?B`<div class="table-responsive">${this.renderRGBW(this.referenceRGBW)}</div>`:A}
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
            ${this.verificationBcs?B`<p class="file">${this.verificationBcs.name}</p>`:A}
            ${this.verificationRGBW?B`<div class="table-responsive">${this.renderRGBW(this.verificationRGBW)}</div>`:A}
          </div>
        </div>
        ${this.referenceRGBW&&this.verificationRGBW&&this.xyYErrors?B` <div class="table-section">
              <h2 class="title">Profiled Meter Comparison</h2>
              <div class="table-responsive">${this.renderComparisonTable(this.referenceRGBW,this.verificationRGBW,this.xyYErrors)}</div>
            </div>`:A}
      </main>

      <footer>
        <sl-dialog data-dialog-about class="about-dialog" @sl-hide="${()=>$.trackUmamiEvent("close","about")}">
          <wc-markdown src="${"/"}HOWTO.md"></wc-markdown>
          <sl-button slot="footer" variant="primary" @click="${()=>{var t;return(t=this.aboutDialog)==null?void 0:t.hide()}}">Close</sl-button>
        </sl-dialog>
      </footer>
    `}async updated(t){super.updated(t),this.updateHeaderSize(),t.has("referenceBpd")&&this.referenceBpd&&(this.referenceRGBW=this.csXML.getRGBWFromBpd(await this.referenceBpd.text()),this.requestUpdate("referenceRGBW")),t.has("verificationBcs")&&this.verificationBcs&&(this.verificationRGBW=this.csXML.getRGBWFromBcs(await this.verificationBcs.text()),this.requestUpdate("verificationRGBW")),(t.has("referenceRGBW")||t.has("verificationRGBW"))&&(this.xyYErrors=this.computexyYErrors(this.referenceRGBW,this.verificationRGBW),this.requestUpdate("xyYErrors"))}async openVerificationBcsFile(){$.trackUmamiEvent("open","bcs");try{const t=await Ns({description:"BCS files",extensions:[".bcs"]});this.verificationBcs=t,this.requestUpdate("verificationBcs"),$.trackUmamiEvent("load","bcs")}catch(t){console.error(t),$.trackUmamiEvent(`error: ${t}`,"bcs")}}async openReferenceBpdFile(){$.trackUmamiEvent("open","bpd");try{const t=await Ns({description:"BPD files",extensions:[".bpd"]});this.referenceBpd=t,this.requestUpdate("referenceBpd"),$.trackUmamiEvent("load","bpd")}catch(t){console.error(t),$.trackUmamiEvent(`error: ${t}`,"bpd")}}renderRGBW(t){return t.length<=0?A:B`
      <table>
        <tr>
          <th></th>
          <th class="text-red">R</th>
          <th class="text-green">G</th>
          <th class="text-blue">B</th>
          <th class="text-white">W</th>
        </tr>
        ${t.map((e,s)=>B` <tr>
              <td>${$.getRowLabelForIndex(s)}</td>
              ${e.map((r,i)=>B` <td
                    class="${Ai({red:i===this.csXML.getRGBWIndexForColor("red"),green:i===this.csXML.getRGBWIndexForColor("green"),blue:i===this.csXML.getRGBWIndexForColor("blue"),white:i===this.csXML.getRGBWIndexForColor("white")})}"
                  >
                    ${W(r,7)}
                  </td>`)}
            </tr>`)}
      </table>
    `}renderComparisonTable(t,e,s){return $.trackUmamiEvent("render","comparison"),B`
      <table class="profile-comparison">
        ${this.renderComparisonForColor(t,e,s,"red")} ${this.renderComparisonForColor(t,e,s,"green")}
        ${this.renderComparisonForColor(t,e,s,"blue")} ${this.renderComparisonForColor(t,e,s,"white")}
      </table>
    `}renderComparisonForColor(t,e,s,r){const i=this.csXML.getRGBWIndexForColor(r),n={x:t[0][i],y:t[1][i],Y:t[2][i]},o={x:e[0][i],y:e[1][i],Y:e[2][i]};return B`
      <tr class="${r} separator">
        <th class="text-${r}">${go(r)}</th>
        <th>Reference</th>
        <th>Profile</th>
        <th class="align-percent">Error</th>
        <th>Pass/Fail</th>
      </tr>
      <tr class="${r}">
        <th>x</th>
        <td>${W(n.x,7)}</td>
        <td>${W(o.x,7)}</td>
        <td class="align-percent">${$.renderError(s[r].x)}</td>
        <td class="clear">${$.renderNistPassFail($.passesNistxy(s[r].x))}</td>
      </tr>
      <tr class="${r}">
        <th>y</th>
        <td>${W(n.y,7)}</td>
        <td>${W(o.y,7)}</td>
        <td class="align-percent">${$.renderError(s[r].y)}</td>
        <td class="clear">${$.renderNistPassFail($.passesNistxy(s[r].y))}</td>
      </tr>
      <tr class="${r}">
        <th>Y</th>
        <td>${W(n.Y,7)}</td>
        <td>${W(o.Y,7)}</td>
        <td class="number-percent">${$.renderError(s[r].Y)}</td>
        <td class="clear">${$.renderNistPassFail($.passesNistY(s[r].Y))}</td>
      </tr>
    `}static getRowLabelForIndex(t){const e=["x","y","Y"];return typeof e[t]=="undefined"?"n/a":e[t]}computexyYErrors(t=[],e=[]){if(t.length<1||e.length<1)return;const s=this.csXML.getRGBWIndexForColor("red"),r=this.csXML.getRGBWIndexForColor("green"),i=this.csXML.getRGBWIndexForColor("blue"),n=this.csXML.getRGBWIndexForColor("white"),o={x:e[0][s]-t[0][s],y:e[1][s]-t[1][s],Y:nt(t[2][s],e[2][s])},l={x:e[0][r]-t[0][r],y:e[1][r]-t[1][r],Y:nt(t[2][r],e[2][r])},a={x:e[0][i]-t[0][i],y:e[1][i]-t[1][i],Y:nt(t[2][i],e[2][i])},c={x:e[0][n]-t[0][n],y:e[1][n]-t[1][n],Y:nt(t[2][n],e[2][n])};return{red:o,green:l,blue:a,white:c}}static passesNistxy(t){return Math.abs(t)<=.001}static passesNistY(t){return Math.abs(t)<=1.5}static renderNistPassFail(t){return t?B`<span class="text-success">Pass</span>`:B`<span class="text-error">Fail</span>`}static renderError(t){return W(t,7)}updateHeaderSize(){!this.appHeader||!this.appContent||this.appContent.style.setProperty("--app-header-size",`${this.appHeader.offsetHeight}px`)}static trackUmamiEvent(t,e="custom"){const s=window.umami;!s||s.trackEvent(t,e)}};$.styles=mr(za);j([xr()],$.prototype,"version",2);j([Ye()],$.prototype,"referenceBpd",2);j([Ye()],$.prototype,"verificationBcs",2);j([Ye()],$.prototype,"referenceRGBW",2);j([Ye()],$.prototype,"verificationRGBW",2);j([Ye()],$.prototype,"xyYErrors",2);j([ss("[data-dialog-about]")],$.prototype,"aboutDialog",2);j([ss("[data-app-header]")],$.prototype,"appHeader",2);j([ss("[data-app-content]")],$.prototype,"appContent",2);$=j([vi("app-shell")],$)});export default Za();

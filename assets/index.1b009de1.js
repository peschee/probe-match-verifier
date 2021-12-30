import{C as Y,f as x,o as F,t as m,i as y,s as $,p as c,T as h,a as R,M as w,b as L,n as G,c as M}from"./vendor.5b214add.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}};X();const W=5,f=(e,t)=>{const r=Math.abs((e-t)/e*100);return e>t?-r:r},d=(e,t=W)=>parseFloat(`${e}`).toFixed(t),_=e=>e.charAt(0).toUpperCase()+e.slice(1);class E{constructor({debug:t=!1}={}){this.colorConverter=new Y,this.isDebug=!1,this.xmlParser=new x.XMLParser({ignoreAttributes:!1}),this.isDebug=t}getRGBWFromBpd(t){if(!x.XMLValidator.validate(t))throw new Error("Could not validate BDP XML.");const{builder_color_space:{head:{L:r,x:a,y:s}}}=this.xmlParser.parse(t);return[[parseFloat(a["@_red"]),parseFloat(a["@_green"]),parseFloat(a["@_blue"]),parseFloat(a["@_white"])],[parseFloat(s["@_red"]),parseFloat(s["@_green"]),parseFloat(s["@_blue"]),parseFloat(s["@_white"])],[parseFloat(r["@_red"]),parseFloat(r["@_green"]),parseFloat(r["@_blue"]),parseFloat(r["@_white"])]]}getRGBWFromBcs(t){if(!x.XMLValidator.validate(t))throw new Error("Could not validate BCS XML.");const{builder_color_space:{data:{patch:r}}}=this.xmlParser.parse(t);return this.getRGBWMatrixFromPatches(r)}getRGBWMatrixFromPatches(t=[]){if(t.length<1)return;const r=t.filter(o=>!(o.stimuli.red===0&&o.stimuli.green===0&&o.stimuli.blue===0)).filter(o=>!(o.stimuli.red===1&&o.stimuli.green===1&&o.stimuli.blue===1)),{results:{XYZ:a=void 0}={}}=r.filter(o=>o.stimuli.green===0&&o.stimuli.blue===0).shift()||{},{results:{XYZ:s=void 0}={}}=r.filter(o=>o.stimuli.red===0&&o.stimuli.blue===0).shift()||{},{results:{XYZ:i=void 0}={}}=r.filter(o=>o.stimuli.red===0&&o.stimuli.green===0).shift()||{},[{results:{XYZ:n=void 0}={}}]=t.filter(o=>o.stimuli.red!==0&&o.stimuli.red!==1&&o.stimuli.green!==0&&o.stimuli.green!==1&&o.stimuli.blue!==0&&o.stimuli.blue!==1);if(this.isDebug&&(console.log("redXYZ",a),console.log("greenXYZ",s),console.log("blueXYZ",i),console.log("whiteXYZ",n)),!a||!s||!i||!n)return;const u=this.colorConverter.XYZ_to_xyY([a.X,a.Y,a.Z]),g=this.colorConverter.XYZ_to_xyY([s.X,s.Y,s.Z]),b=this.colorConverter.XYZ_to_xyY([i.X,i.Y,i.Z]),v=this.colorConverter.XYZ_to_xyY([n.X,n.Y,n.Z]);return[[u[0],g[0],b[0],v[0]],[u[1],g[1],b[1],v[1]],[u[2],g[2],b[2],v[2]]]}getRGBWIndexForColor(t){return{red:0,green:1,blue:2,white:3}[t]}}var z=`:host{--app-spacing-header: var(--sl-spacing-medium);--app-section-spacing: var(--sl-spacing-3x-large);font-family:var(--sl-font-sans);line-height:var(--sl-line-height-dense);padding:0 var(--sl-spacing-small);display:block}h1,h2,h3,p{margin:0 0 var(--sl-spacing-small)}a{color:var(--sl-color-primary-800)}h1{font-size:var(--sl-font-size-x-large);font-weight:var(--sl-font-weight-bold)}h2{font-size:var(--sl-font-size-large);font-weight:var(--sl-font-weight-semibold)}h3{font-size:var(--sl-font-size-medium);font-weight:var(--sl-font-weight-semibold)}ol li{margin-bottom:var(--sl-spacing-medium)}.text-success{color:var(--sl-color-success-700)}.text-error{color:var(--sl-color-danger-600)}.text-red{color:var(--sl-color-red-600)}.text-green{color:var(--sl-color-green-600)}.text-blue{color:var(--sl-color-blue-600)}.text-white{color:var(--sl-color-gray-600)}table{font-family:var(--sl-font-mono);font-size:var(--sl-font-size-small)}td{padding:var(--sl-spacing-x-small) var(--sl-spacing-x-small)}th{padding:var(--sl-spacing-2x-small) var(--sl-spacing-x-small)}tr.separator th{padding-top:var(--sl-spacing-large)}.profile-comparison th{text-align:right}td{text-align:right;font-weight:600}th{font-weight:var(--sl-font-weight-normal);font-family:var(--sl-font-sans)}td.red{background:var(--app-color-bg-r)}td.green{background:var(--app-color-bg-g)}td.blue{background:var(--app-color-bg-b)}td.white{background:var(--app-color-bg-w)}tr.red td{background:var(--app-color-bg-r)}tr.green td{background:var(--app-color-bg-g)}tr.blue td{background:var(--app-color-bg-b)}tr.white td{background:var(--app-color-bg-w)}tr.red td.clear,tr.green td.clear,tr.blue td.clear,tr.white td.clear{background:transparent}.number-percent:after{content:"%"}.align-percent:after{content:"%";opacity:0}.table-responsive{display:block;width:100%;overflow-x:auto}.about-trigger{font-size:var(--sl-font-size-x-large)}.about-dialog{--width: 70ch}.about-dialog>.logo{max-width:32px;height:auto}.app-title{display:flex;align-items:center}.app-title>.logo{max-width:32px;height:auto;margin-right:var(--sl-spacing-small)}.app-header{position:fixed;top:0;left:0;width:100%;background:white;display:flex;justify-content:space-between;align-items:center;z-index:1;border-bottom:1px solid var(--sl-input-border-color)}.app-header>.title{margin:var(--app-spacing-header) 0 var(--app-spacing-header) var(--app-spacing-header)}.app-header>.info{margin:var(--app-spacing-header) var(--app-spacing-header) var(--app-spacing-header) 0}.app-content{padding-top:calc(var(--app-header-size) + var(--sl-spacing-large));display:grid;grid-template-columns:1fr;column-gap:var(--app-section-spacing);row-gap:var(--app-section-spacing)}.badge-text{display:flex;align-items:center}.badge-text>.badge{margin-left:var(--sl-spacing-x-small)}@media screen and (min-width: 1024px){.app-content{grid-template-columns:fit-content(20%) auto}}.table-section{margin-bottom:var(--app-section-spacing)}.table-section:last-child{margin-bottom:0}.table-section>.title{margin-bottom:0}.table-section>.file{margin-bottom:var(--sl-spacing-small)}.app-name{font-size:var(--sl-font-size-medium)}.app-name>.full{display:none}.section-title{display:flex;align-content:center}.section-title>.text{margin-right:var(--sl-spacing-x-small)}.icon-button>.icon{margin-right:var(--sl-spacing-2x-small)}@media screen,print and (min-width: 512px){.app-name{font-size:var(--sl-font-size-large)}.app-name>.full{display:block}.app-name>.short{display:none}}@media print{.about-trigger,.load-file-button{display:none}.app-header{border:none}}
`,P="/probe-match-verifier/assets/color-spectrum.97f3c94a.png";const k="probe-match-verifier",S="0.0.0",D="ColourSpace Probe Match Verifier",I={start:"vite",clean:"rimraf dist coverage",build:"pnpm run clean && tsc && vite build","build:gh-pages":"pnpm run build -- --base=/probe-match-verifier/",preview:"pnpm run build && vite preview",lint:"run-p lint:*","lint:eslint":"eslint --ext .js,.ts .","lint:prettier":"prettier '**/*.{js,ts,md,css}' --check","lint:types":"tsc --noEmit",format:"run-s format:*","format:eslint":"eslint --ext .js,.ts . --fix","format:prettier":"prettier '**/*.{js,ts,md,css}' --write",test:"vitest",coverage:"vitest --coverage",postinstall:"rimraf 'public/shoelace' && cpy 'node_modules/@shoelace-style/shoelace/dist/assets/icons' 'public/shoelace/assets/icons'"},Z=["colourspace","lightillusion","probe","matching","verification","spectro"],N="Peter Siska <63866+peschee@users.noreply.github.com>",U="MIT",A={"@types/node":"^17.0.5","@typescript-eslint/eslint-plugin":"^5.8.1","@typescript-eslint/parser":"^5.8.1",c8:"^7.10.0","cpy-cli":"^3.1.1",eslint:"^8.5.0","eslint-config-prettier":"^8.3.0","npm-run-all":"^4.1.5",prettier:"^2.5.1",rimraf:"^3.0.2","ts-lit-plugin":"^1.2.1",typescript:"^4.5.4",vite:"^2.7.10","vite-plugin-html":"^2.1.2","vite-remark-html":"^1.1.1",vitest:"^0.0.124"},H={"@shoelace-style/shoelace":"^2.0.0-beta.63","browser-fs-access":"^0.23.0","cie-colorconverter":"^2.0.1","fast-xml-parser":"^4.0.0-beta.8",lit:"^2.0.2","normalize.css":"^8.0.1"};var B={name:k,version:S,description:D,scripts:I,keywords:Z,author:N,license:U,devDependencies:A,dependencies:H},T=`<h1>ColourSpace Probe Match Verifier</h1>
<p>This is probe match verification tool for <a href="https://www.lightillusion.com/colourspace.html">ColourSpace</a>.</p>
<h2>How-to</h2>
<ol>
<li>Perform a probe match as described in the <a href="https://www.lightillusion.com/probe_matching.html">Probe Matching documentation</a> on the LightIllusion website.</li>
<li>Use the Manual Measure Tab to measure the same colours as during the probe match. Use can use these patch sets for <a href="./Probe-Matching-Verification_FULL.csv">FULL</a> or <a href="./Probe-Matching-Verification_LEGAL_or_EXTENDED.csv">LEGAL / EXTENDED</a>.</li>
<li>Save this profile</li>
<li>Locate the reference meter profile (<code>.bpd</code>) as well as the profile saved from the manual measurements (<code>.bcs</code>). The <code>.bcs</code> files are usually found in <code>C:\\Users\\USERNAME\\AppData\\Roaming\\ColourSpace\\ColourSpaces</code>, the <code>.bpd</code> files should be in <code>C:\\Users\\USERNAME\\AppData\\Roaming\\ColourSpace\\MCGD</code>.</li>
<li>Copy these files somewhere outside of Windows system folders (e.g. <code>Desktop</code>), otherwise you won't be able to select them in the web application.</li>
<li>Load both files in the UI. The probe match verifier will compute whether the measurements are within Maximum Accepted Tolerance Levels (<code>+/- 0.001</code> for <code>x,y</code> as well as <code>+/- 1.5%</code> for <code>Y</code>).</li>
</ol>
`,V=Object.defineProperty,O=Object.getOwnPropertyDescriptor,p=(e,t,r,a)=>{for(var s=a>1?void 0:a?O(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(a?n(t,r,s):n(s))||s);return a&&s&&V(t,r,s),s};M("/probe-match-verifier/shoelace");const C=!1;let l=class extends ${constructor(){super();this.csXML=new E({debug:C}),this.updateHeaderSize=this.updateHeaderSize.bind(this)}async connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateHeaderSize)}disconnectedCallback(){window.removeEventListener("resize",this.updateHeaderSize),super.disconnectedCallback()}render(){return c`
      <header class="app-header" data-app-header>
        <h1 class="title app-title">
          <img src="${P}" alt="" class="logo" />
          <span class="text app-name">
            <span class="full">${B.description}</span>
            <span class="short">${B.description.replace("ColourSpace","CS")}</span>
          </span>
        </h1>
        <sl-icon-button name="info-circle" label="About" @click="${()=>{var e;return(e=this.aboutDialog)==null?void 0:e.show()}}" class="info about-trigger"></sl-icon-button>
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
            ${this.referenceBpd?c`<p class="file">${this.referenceBpd.name}</p>`:h}
            ${this.referenceRGBW?c`<div class="table-responsive">${this.renderRGBW(this.referenceRGBW)}</div>`:h}
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
            ${this.verificationBcs?c`<p class="file">${this.verificationBcs.name}</p>`:h}
            ${this.verificationRGBW?c`<div class="table-responsive">${this.renderRGBW(this.verificationRGBW)}</div>`:h}
          </div>
        </div>
        ${this.referenceRGBW&&this.verificationRGBW&&this.xyYErrors?c` <div class="table-section">
              <h2 class="title">Profiled Meter Comparison</h2>
              <div class="table-responsive">${this.renderComparisonTable(this.referenceRGBW,this.verificationRGBW,this.xyYErrors)}</div>
            </div>`:h}
      </main>

      <footer>
        <sl-dialog label="About" data-dialog-about class="about-dialog">
          ${R(T)}
          <sl-button slot="footer" variant="primary" @click="${()=>{var e;return(e=this.aboutDialog)==null?void 0:e.hide()}}">Close</sl-button>
        </sl-dialog>
      </footer>
    `}async updated(e){super.updated(e),this.updateHeaderSize(),e.has("referenceBpd")&&this.referenceBpd&&(this.referenceRGBW=this.csXML.getRGBWFromBpd(await this.referenceBpd.text()),this.requestUpdate("referenceRGBW")),e.has("verificationBcs")&&this.verificationBcs&&(this.verificationRGBW=this.csXML.getRGBWFromBcs(await this.verificationBcs.text()),this.requestUpdate("verificationRGBW")),(e.has("referenceRGBW")||e.has("verificationRGBW"))&&(this.xyYErrors=this.computexyYErrors(this.referenceRGBW,this.verificationRGBW),this.requestUpdate("xyYErrors"))}async openVerificationBcsFile(){const e=await w({description:"BCS files",extensions:[".bcs"]});this.verificationBcs=e,this.requestUpdate("verificationBcs")}async openReferenceBpdFile(){try{const e=await w({description:"BPD files",extensions:[".bpd"]});this.referenceBpd=e,this.requestUpdate("referenceBpd")}catch(e){console.error(e)}}renderRGBW(e){return e.length<=0?h:c`
      <table>
        <tr>
          <th></th>
          <th class="text-red">R</th>
          <th class="text-green">G</th>
          <th class="text-blue">B</th>
          <th class="text-white">W</th>
        </tr>
        ${e.map((t,r)=>c` <tr>
              <td>${l.getRowLabelForIndex(r)}</td>
              ${t.map((a,s)=>c` <td
                    class="${L({red:s===this.csXML.getRGBWIndexForColor("red"),green:s===this.csXML.getRGBWIndexForColor("green"),blue:s===this.csXML.getRGBWIndexForColor("blue"),white:s===this.csXML.getRGBWIndexForColor("white")})}"
                  >
                    ${d(a,7)}
                  </td>`)}
            </tr>`)}
      </table>
    `}renderComparisonTable(e,t,r){return c`
      <table class="profile-comparison">
        ${this.renderComparisonForColor(e,t,r,"red")} ${this.renderComparisonForColor(e,t,r,"green")}
        ${this.renderComparisonForColor(e,t,r,"blue")} ${this.renderComparisonForColor(e,t,r,"white")}
      </table>
    `}renderComparisonForColor(e,t,r,a){const s=this.csXML.getRGBWIndexForColor(a),i={x:e[0][s],y:e[1][s],Y:e[2][s]},n={x:t[0][s],y:t[1][s],Y:t[2][s]};return c`
      <tr class="${a} separator">
        <th class="text-${a}">${_(a)}</th>
        <th>Reference</th>
        <th>Profile</th>
        <th class="align-percent">Error</th>
        <th>Pass/Fail</th>
      </tr>
      <tr class="${a}">
        <th>x</th>
        <td>${d(i.x,7)}</td>
        <td>${d(n.x,7)}</td>
        <td class="align-percent">${l.renderError(r[a].x)}</td>
        <td class="clear">${l.renderNistPassFail(l.passesNistxy(r[a].x))}</td>
      </tr>
      <tr class="${a}">
        <th>y</th>
        <td>${d(i.y,7)}</td>
        <td>${d(n.y,7)}</td>
        <td class="align-percent">${l.renderError(r[a].y)}</td>
        <td class="clear">${l.renderNistPassFail(l.passesNistxy(r[a].y))}</td>
      </tr>
      <tr class="${a}">
        <th>Y</th>
        <td>${d(i.Y,7)}</td>
        <td>${d(n.Y,7)}</td>
        <td class="number-percent">${l.renderError(r[a].Y)}</td>
        <td class="clear">${l.renderNistPassFail(l.passesNistY(r[a].Y))}</td>
      </tr>
    `}static getRowLabelForIndex(e){const t=["x","y","Y"];return typeof t[e]=="undefined"?"n/a":t[e]}computexyYErrors(e=[],t=[]){if(e.length<1||t.length<1)return;const r=this.csXML.getRGBWIndexForColor("red"),a=this.csXML.getRGBWIndexForColor("green"),s=this.csXML.getRGBWIndexForColor("blue"),i=this.csXML.getRGBWIndexForColor("white"),n={x:t[0][r]-e[0][r],y:t[1][r]-e[1][r],Y:f(e[2][r],t[2][r])},u={x:t[0][a]-e[0][a],y:t[1][a]-e[1][a],Y:f(e[2][a],t[2][a])},g={x:t[0][s]-e[0][s],y:t[1][s]-e[1][s],Y:f(e[2][s],t[2][s])},b={x:t[0][i]-e[0][i],y:t[1][i]-e[1][i],Y:f(e[2][i],t[2][i])};return{red:n,green:u,blue:g,white:b}}static passesNistxy(e){return Math.abs(e)<=.001}static passesNistY(e){return Math.abs(e)<=1.5}static renderNistPassFail(e){return e?c`<span class="text-success">Pass</span>`:c`<span class="text-error">Fail</span>`}static renderError(e){return d(e,7)}updateHeaderSize(){!this.appHeader||!this.appContent||this.appContent.style.setProperty("--app-header-size",`${this.appHeader.offsetHeight}px`)}};l.styles=F(z);p([m()],l.prototype,"referenceBpd",2);p([m()],l.prototype,"verificationBcs",2);p([m()],l.prototype,"referenceRGBW",2);p([m()],l.prototype,"verificationRGBW",2);p([m()],l.prototype,"xyYErrors",2);p([y("[data-dialog-about]")],l.prototype,"aboutDialog",2);p([y("[data-app-header]")],l.prototype,"appHeader",2);p([y("[data-app-content]")],l.prototype,"appContent",2);l=p([G("app-shell")],l);

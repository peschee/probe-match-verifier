import{C as Y,f as x,o as F,t as m,i as C,s as $,p as c,T as p,a as R,M as y,b as G,n as L,c as X}from"./vendor.0ccd2dbd.js";const W=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}};W();const M=5,f=(e,t)=>(t-e)/t*100,d=(e,t=M)=>parseFloat(`${e}`).toFixed(t),_=e=>e.charAt(0).toUpperCase()+e.slice(1);class E{constructor({debug:t=!1}={}){this.colorConverter=new Y,this.isDebug=!1,this.xmlParser=new x.XMLParser({ignoreAttributes:!1}),this.isDebug=t}getRGBWFromBpd(t){if(!x.XMLValidator.validate(t))throw new Error("Could not validate BDP XML.");const{builder_color_space:{head:{L:o,x:r,y:s}}}=this.xmlParser.parse(t);return[[parseFloat(r["@_red"]),parseFloat(r["@_green"]),parseFloat(r["@_blue"]),parseFloat(r["@_white"])],[parseFloat(s["@_red"]),parseFloat(s["@_green"]),parseFloat(s["@_blue"]),parseFloat(s["@_white"])],[parseFloat(o["@_red"]),parseFloat(o["@_green"]),parseFloat(o["@_blue"]),parseFloat(o["@_white"])]]}getRGBWFromBcs(t){if(!x.XMLValidator.validate(t))throw new Error("Could not validate BCS XML.");const{builder_color_space:{data:{patch:o}}}=this.xmlParser.parse(t);return this.getRGBWMatrixFromPatches(o)}getRGBWMatrixFromPatches(t=[]){if(t.length<1)return;const o=t.filter(a=>!(a.stimuli.red===0&&a.stimuli.green===0&&a.stimuli.blue===0)).filter(a=>!(a.stimuli.red===1&&a.stimuli.green===1&&a.stimuli.blue===1)),{results:{XYZ:r}}=o.filter(a=>a.stimuli.green===0&&a.stimuli.blue===0).shift(),{results:{XYZ:s}}=o.filter(a=>a.stimuli.red===0&&a.stimuli.blue===0).shift(),{results:{XYZ:i}}=o.filter(a=>a.stimuli.red===0&&a.stimuli.green===0).shift(),[{results:{XYZ:n}}]=t.filter(a=>a.stimuli.red!==0&&a.stimuli.red!==1&&a.stimuli.green!==0&&a.stimuli.green!==1&&a.stimuli.blue!==0&&a.stimuli.blue!==1);this.isDebug&&(console.log("redXYZ",r),console.log("greenXYZ",s),console.log("blueXYZ",i),console.log("whiteXYZ",n));const u=this.colorConverter.XYZ_to_xyY([r.X,r.Y,r.Z]),g=this.colorConverter.XYZ_to_xyY([s.X,s.Y,s.Z]),b=this.colorConverter.XYZ_to_xyY([i.X,i.Y,i.Z]),v=this.colorConverter.XYZ_to_xyY([n.X,n.Y,n.Z]);return[[u[0],g[0],b[0],v[0]],[u[1],g[1],b[1],v[1]],[u[2],g[2],b[2],v[2]]]}getRGBWIndexForColor(t){return{red:0,green:1,blue:2,white:3}[t]}}var P=`:host{font-family:var(--sl-font-sans);line-height:var(--sl-line-height-dense);padding:var(--sl-spacing-small);display:block}h1,h2,h3,p{margin:0 0 var(--sl-spacing-small)}a{color:var(--sl-color-primary-800)}h1{font-size:var(--sl-font-size-x-large);font-weight:var(--sl-font-weight-bold)}h2{font-size:var(--sl-font-size-large);font-weight:var(--sl-font-weight-semibold)}h3{font-size:var(--sl-font-size-medium);font-weight:var(--sl-font-weight-semibold)}ol li{margin-bottom:var(--sl-spacing-medium)}.text-success{color:var(--sl-color-success-700)}.text-error{color:var(--sl-color-danger-600)}.text-red{color:var(--sl-color-red-600)}.text-green{color:var(--sl-color-green-600)}.text-blue{color:var(--sl-color-blue-600)}.text-white{color:var(--sl-color-gray-600)}table{font-family:var(--sl-font-mono);font-size:var(--sl-font-size-small)}td{padding:var(--sl-spacing-x-small) var(--sl-spacing-x-small)}th{padding:var(--sl-spacing-2x-small) var(--sl-spacing-x-small)}tr.separator th{padding-top:var(--sl-spacing-large)}.profile-comparison th{text-align:right}td{text-align:right;font-weight:600}th{font-weight:var(--sl-font-weight-normal);font-family:var(--sl-font-sans)}td.red{background:var(--app-color-bg-r)}td.green{background:var(--app-color-bg-g)}td.blue{background:var(--app-color-bg-b)}td.white{background:var(--app-color-bg-w)}tr.red td{background:var(--app-color-bg-r)}tr.green td{background:var(--app-color-bg-g)}tr.blue td{background:var(--app-color-bg-b)}tr.white td{background:var(--app-color-bg-w)}tr.red td.clear,tr.green td.clear,tr.blue td.clear,tr.white td.clear{background:transparent}.number-percent:after{content:"%"}.align-percent:after{content:"%";opacity:0}.table-responsive{display:block;width:100%;overflow-x:auto}.about-trigger{position:fixed;top:var(--sl-spacing-medium);right:var(--sl-spacing-medium);z-index:2}.about-dialog{--width: 70ch}.about-dialog>.logo{max-width:32px;height:auto}.app-title{display:flex;align-items:center}.app-title>.logo{max-width:32px;height:auto;margin-right:var(--sl-spacing-small)}.table-section{margin-bottom:var(--sl-spacing-x-large)}.table-section>.title{margin-bottom:0}.table-section>.file{margin-bottom:var(--sl-spacing-small)}@media print{.about-trigger{display:none}}
`,w="/probe-match-verifier/assets/color-spectrum.97f3c94a.png";const D="probe-match-verifier",I="0.0.0",Z="ColourSpace Probe Match Verifier",N={start:"vite",clean:"rimraf dist coverage",build:"pnpm run clean && tsc && vite build","build:gh-pages":"pnpm run build -- --base=/probe-match-verifier/",preview:"pnpm run build && vite preview",lint:"run-p lint:*","lint:types":"tsc --noEmit",test:"vitest",coverage:"vitest --coverage",postinstall:"rimraf 'public/shoelace' && cpy 'node_modules/@shoelace-style/shoelace/dist/assets/icons' 'public/shoelace/assets/icons'"},k=["colourspace","lightillusion","probe","matching","verification","spectro"],U="Peter Siska <peschehimself@gmail.com>",S="MIT",z={"@types/node":"^17.0.5",c8:"^7.10.0","cpy-cli":"^3.1.1","npm-run-all":"^4.1.5",prettier:"^2.5.1",rimraf:"^3.0.2","ts-lit-plugin":"^1.2.1",typescript:"^4.5.4",vite:"^2.7.10","vite-plugin-html":"^2.1.2","vite-remark-html":"^1.1.1",vitest:"^0.0.124"},A={"@shoelace-style/shoelace":"^2.0.0-beta.63","browser-fs-access":"^0.23.0","cie-colorconverter":"^2.0.1","fast-xml-parser":"^4.0.0-beta.8",lit:"^2.0.2","normalize.css":"^8.0.1"};var T={name:D,version:I,description:Z,scripts:N,keywords:k,author:U,license:S,devDependencies:z,dependencies:A},V=`<h1>ColourSpace Probe Match Verifier</h1>
<p>This is probe match verification tool for <a href="https://www.lightillusion.com/colourspace.html">ColourSpace</a>.</p>
<h2>How-to</h2>
<ol>
<li>Perform a probe match as described in the <a href="https://www.lightillusion.com/probe_matching.html">Probe Matching documentation</a> on the LightIllusion website.</li>
<li>Use the Manual Measure Tab to measure the same colours as during the probe match. Use can use these patch sets for <a href="./Probe-Matching-Verification_FULL.csv">FULL</a> or <a href="./Probe-Matching-Verification_LEGAL_or_EXTENDED.csv">LEGAL / EXTENDED</a>.</li>
<li>Save this profile</li>
<li>Locate the reference meter profile (<code>.bpd</code>) as well as the profile saved from the manual measurements (<code>.bcs</code>). The <code>.bcs</code> files are usually found in <code>C:\\Users\\USERNAME\\AppData\\Roaming\\ColourSpace\\ColourSpaces</code>, the <code>.bpd</code> files should be in <code>C:\\Users\\USERNAME\\AppData\\Roaming\\ColourSpace\\MCGD</code>.</li>
<li>Copy these files somewhere outside of Windows system folders (e.g. <code>Desktop</code>), otherwise you won't be able to select them in the web application.</li>
<li>Load both files in the UI. The probe match verifier will compute whether the measurements are within NIST tolerance levels (<code>+/- 0.001</code> for <code>x,y</code> as well as <code>+/- 1.5%</code> for <code>Y</code>).</li>
</ol>
`,O=Object.defineProperty,q=Object.getOwnPropertyDescriptor,h=(e,t,o,r)=>{for(var s=r>1?void 0:r?q(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&O(t,o,s),s};X("/probe-match-verifier/shoelace");const B=!1;let l=class extends ${constructor(){super();this.csXML=new E({debug:B})}async connectedCallback(){super.connectedCallback()}render(){return c`
      <h1 class="app-title">
        <img src="${w}" alt="" class="logo" />
        <span class="text">${T.description}</span>
      </h1>
      <div class="xml-files">
        <div class="table-section">
          <h2 class="title">
            Reference File (.bpd)
            <sl-button size="small" @click="${this.openReferenceBpdFile}">Load</sl-button>
          </h2>
          ${this.referenceBpd?c`<p class="file">${this.referenceBpd.name}</p>`:p}
          ${this.referenceRGBW?c`<div class="table-responsive">${this.renderRGBW(this.referenceRGBW)}</div>`:p}
        </div>
        <div class="table-section">
          <h2 class="title">
            Verification File (.bcs)
            <sl-button size="small" @click="${this.openVerificationBcsFile}">Load</sl-button>
          </h2>
          ${this.verificationBcs?c`<p class="file">${this.verificationBcs.name}</p>`:p}
          ${this.verificationRGBW?c`<div class="table-responsive">${this.renderRGBW(this.verificationRGBW)}</div>`:p}
        </div>
      </div>

      ${this.referenceRGBW&&this.verificationRGBW&&this.xyYErrors?c` <div class="table-section">
            <h2 class="title">Profiled Meter Comparison</h2>
            <div class="table-responsive">${this.renderComparisonTable(this.referenceRGBW,this.verificationRGBW,this.xyYErrors)}</div>
          </div>`:p}

      <sl-dialog label="About" data-dialog-about class="about-dialog">
        <!--        <img src="${w}" alt="" class="logo" />-->
        ${R(V)}
        <sl-button slot="footer" variant="primary" @click="${()=>{var e;return(e=this.aboutDialog)==null?void 0:e.hide()}}">Close</sl-button>
      </sl-dialog>
      <sl-icon-button name="info-circle" label="About" @click="${()=>{var e;return(e=this.aboutDialog)==null?void 0:e.show()}}" class="about-trigger"></sl-icon-button>
    `}async updated(e){super.updated(e),e.has("referenceBpd")&&this.referenceBpd&&(this.referenceRGBW=this.csXML.getRGBWFromBpd(await this.referenceBpd.text()),this.requestUpdate("referenceRGBW")),e.has("verificationBcs")&&this.verificationBcs&&(this.verificationRGBW=this.csXML.getRGBWFromBcs(await this.verificationBcs.text()),this.requestUpdate("verificationRGBW")),(e.has("referenceRGBW")||e.has("verificationRGBW"))&&(this.xyYErrors=this.computexyYErrors(this.referenceRGBW,this.verificationRGBW),this.requestUpdate("xyYErrors"))}async openVerificationBcsFile(){const e=await y({description:"BCS files",extensions:[".bcs"]});this.verificationBcs=e,this.requestUpdate("verificationBcs")}async openReferenceBpdFile(){try{const e=await y({description:"BPD files",extensions:[".bpd"]});this.referenceBpd=e,this.requestUpdate("referenceBpd")}catch(e){console.error(e)}}renderRGBW(e){return e.length<=0?p:c`
      <table>
        <tr>
          <th></th>
          <th class="text-red">R</th>
          <th class="text-green">G</th>
          <th class="text-blue">B</th>
          <th class="text-white">W</th>
        </tr>
        ${e.map((t,o)=>c` <tr>
              <td>${l.getRowLabelForIndex(o)}</td>
              ${t.map((r,s)=>c` <td
                    class="${G({red:s===this.csXML.getRGBWIndexForColor("red"),green:s===this.csXML.getRGBWIndexForColor("green"),blue:s===this.csXML.getRGBWIndexForColor("blue"),white:s===this.csXML.getRGBWIndexForColor("white")})}"
                  >
                    ${d(r,7)}
                  </td>`)}
            </tr>`)}
      </table>
    `}renderComparisonTable(e,t,o){return c`
      <table class="profile-comparison">
        ${this.renderComparisonForColor(e,t,o,"red")} ${this.renderComparisonForColor(e,t,o,"green")}
        ${this.renderComparisonForColor(e,t,o,"blue")} ${this.renderComparisonForColor(e,t,o,"white")}
      </table>
    `}renderComparisonForColor(e,t,o,r){const s=this.csXML.getRGBWIndexForColor(r),i={x:e[0][s],y:e[1][s],Y:e[2][s]},n={x:t[0][s],y:t[1][s],Y:t[2][s]};return c`
      <tr class="${r} separator">
        <th class="text-${r}">${_(r)}</th>
        <th>Reference</th>
        <th>Profile</th>
        <th class="align-percent">Error</th>
        <th>Pass/Fail</th>
      </tr>
      <tr class="${r}">
        <th>x</th>
        <td>${d(i.x)}</td>
        <td>${d(n.x)}</td>
        <td class="align-percent">${l.renderError(o[r].x)}</td>
        <td class="clear">${l.renderNistPassFail(l.passesNistxy(o[r].x))}</td>
      </tr>
      <tr class="${r}">
        <th>y</th>
        <td>${d(i.y)}</td>
        <td>${d(n.y)}</td>
        <td class="align-percent">${l.renderError(o[r].y)}</td>
        <td class="clear">${l.renderNistPassFail(l.passesNistxy(o[r].y))}</td>
      </tr>
      <tr class="${r}">
        <th>Y</th>
        <td>${d(i.Y)}</td>
        <td>${d(n.Y)}</td>
        <td class="number-percent">${l.renderError(o[r].Y)}</td>
        <td class="clear">${l.renderNistPassFail(l.passesNistY(o[r].Y))}</td>
      </tr>
    `}static getRowLabelForIndex(e){const t=["x","y","Y"];return typeof t[e]=="undefined"?"n/a":t[e]}computexyYErrors(e=[],t=[]){if(e.length<1||t.length<1)return;const o=this.csXML.getRGBWIndexForColor("red"),r=this.csXML.getRGBWIndexForColor("green"),s=this.csXML.getRGBWIndexForColor("blue"),i=this.csXML.getRGBWIndexForColor("white"),n={x:e[0][o]-t[0][o],y:e[1][o]-t[1][o],Y:f(e[2][o],t[2][o])},u={x:e[0][r]-t[0][r],y:e[1][r]-t[1][r],Y:f(e[2][r],t[2][r])},g={x:e[0][s]-t[0][s],y:e[1][s]-t[1][s],Y:f(e[2][s],t[2][s])},b={x:e[0][i]-t[0][i],y:e[1][i]-t[1][i],Y:f(e[2][i],t[2][i])};return{red:n,green:u,blue:g,white:b}}static passesNistxy(e){return Math.abs(e)<=.001}static passesNistY(e){return Math.abs(e)<=1.5}static renderNistPassFail(e){return e?c`<span class="text-success">Pass</span>`:c`<span class="text-error">Fail</span>`}static renderError(e){return d(e)}};l.styles=F(P);h([m()],l.prototype,"referenceBpd",2);h([m()],l.prototype,"verificationBcs",2);h([m()],l.prototype,"referenceRGBW",2);h([m()],l.prototype,"verificationRGBW",2);h([m()],l.prototype,"xyYErrors",2);h([C("[data-dialog-about]")],l.prototype,"aboutDialog",2);l=h([L("app-shell")],l);

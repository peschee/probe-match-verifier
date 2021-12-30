import{C as Y,f as x,o as F,t as f,i as C,s as $,p as c,T as h,a as R,M as y,b as G,n as L,c as X}from"./vendor.0ccd2dbd.js";const M=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}};M();const W=5,b=(e,t)=>(t-e)/t*100,d=(e,t=W)=>parseFloat(`${e}`).toFixed(t),_=e=>e.charAt(0).toUpperCase()+e.slice(1);class E{constructor({debug:t=!1}={}){this.colorConverter=new Y,this.isDebug=!1,this.xmlParser=new x.XMLParser({ignoreAttributes:!1}),this.isDebug=t}getRGBWFromBpd(t){if(!x.XMLValidator.validate(t))throw new Error("Could not validate BDP XML.");const{builder_color_space:{head:{L:i,x:r,y:s}}}=this.xmlParser.parse(t);return[[parseFloat(r["@_red"]),parseFloat(r["@_green"]),parseFloat(r["@_blue"]),parseFloat(r["@_white"])],[parseFloat(s["@_red"]),parseFloat(s["@_green"]),parseFloat(s["@_blue"]),parseFloat(s["@_white"])],[parseFloat(i["@_red"]),parseFloat(i["@_green"]),parseFloat(i["@_blue"]),parseFloat(i["@_white"])]]}getRGBWFromBcs(t){if(!x.XMLValidator.validate(t))throw new Error("Could not validate BCS XML.");const{builder_color_space:{data:{patch:i}}}=this.xmlParser.parse(t);return this.getRGBWMatrixFromPatches(i)}getRGBWMatrixFromPatches(t=[]){if(t.length<1)return;const i=t.filter(a=>!(a.stimuli.red===0&&a.stimuli.green===0&&a.stimuli.blue===0)).filter(a=>!(a.stimuli.red===1&&a.stimuli.green===1&&a.stimuli.blue===1)),{results:{XYZ:r=void 0}={}}=i.filter(a=>a.stimuli.green===0&&a.stimuli.blue===0).shift()||{},{results:{XYZ:s=void 0}={}}=i.filter(a=>a.stimuli.red===0&&a.stimuli.blue===0).shift()||{},{results:{XYZ:o=void 0}={}}=i.filter(a=>a.stimuli.red===0&&a.stimuli.green===0).shift()||{},[{results:{XYZ:l=void 0}={}}]=t.filter(a=>a.stimuli.red!==0&&a.stimuli.red!==1&&a.stimuli.green!==0&&a.stimuli.green!==1&&a.stimuli.blue!==0&&a.stimuli.blue!==1);if(this.isDebug&&(console.log("redXYZ",r),console.log("greenXYZ",s),console.log("blueXYZ",o),console.log("whiteXYZ",l)),!r||!s||!o||!l)return;const u=this.colorConverter.XYZ_to_xyY([r.X,r.Y,r.Z]),g=this.colorConverter.XYZ_to_xyY([s.X,s.Y,s.Z]),m=this.colorConverter.XYZ_to_xyY([o.X,o.Y,o.Z]),v=this.colorConverter.XYZ_to_xyY([l.X,l.Y,l.Z]);return[[u[0],g[0],m[0],v[0]],[u[1],g[1],m[1],v[1]],[u[2],g[2],m[2],v[2]]]}getRGBWIndexForColor(t){return{red:0,green:1,blue:2,white:3}[t]}}var P=`:host{--app-spacing-header: var(--sl-spacing-medium);font-family:var(--sl-font-sans);line-height:var(--sl-line-height-dense);padding:var(--sl-spacing-small);display:block}h1,h2,h3,p{margin:0 0 var(--sl-spacing-small)}a{color:var(--sl-color-primary-800)}h1{font-size:var(--sl-font-size-x-large);font-weight:var(--sl-font-weight-bold)}h2{font-size:var(--sl-font-size-large);font-weight:var(--sl-font-weight-semibold)}h3{font-size:var(--sl-font-size-medium);font-weight:var(--sl-font-weight-semibold)}ol li{margin-bottom:var(--sl-spacing-medium)}.text-success{color:var(--sl-color-success-700)}.text-error{color:var(--sl-color-danger-600)}.text-red{color:var(--sl-color-red-600)}.text-green{color:var(--sl-color-green-600)}.text-blue{color:var(--sl-color-blue-600)}.text-white{color:var(--sl-color-gray-600)}table{font-family:var(--sl-font-mono);font-size:var(--sl-font-size-small)}td{padding:var(--sl-spacing-x-small) var(--sl-spacing-x-small)}th{padding:var(--sl-spacing-2x-small) var(--sl-spacing-x-small)}tr.separator th{padding-top:var(--sl-spacing-large)}.profile-comparison th{text-align:right}td{text-align:right;font-weight:600}th{font-weight:var(--sl-font-weight-normal);font-family:var(--sl-font-sans)}td.red{background:var(--app-color-bg-r)}td.green{background:var(--app-color-bg-g)}td.blue{background:var(--app-color-bg-b)}td.white{background:var(--app-color-bg-w)}tr.red td{background:var(--app-color-bg-r)}tr.green td{background:var(--app-color-bg-g)}tr.blue td{background:var(--app-color-bg-b)}tr.white td{background:var(--app-color-bg-w)}tr.red td.clear,tr.green td.clear,tr.blue td.clear,tr.white td.clear{background:transparent}.number-percent:after{content:"%"}.align-percent:after{content:"%";opacity:0}.table-responsive{display:block;width:100%;overflow-x:auto}.about-dialog{--width: 70ch}.about-dialog>.logo{max-width:32px;height:auto}.app-title{display:flex;align-items:center}.app-title>.logo{max-width:32px;height:auto;margin-right:var(--sl-spacing-small)}.app-header{position:fixed;top:0;left:0;width:100%;background:white;display:flex;justify-content:space-between;align-items:flex-start;z-index:1;border-bottom:1px solid var(--sl-input-border-color)}.app-header>.title{margin:var(--app-spacing-header) 0 var(--app-spacing-header) var(--app-spacing-header)}.app-header>.info{margin:var(--app-spacing-header) var(--app-spacing-header) var(--app-spacing-header) 0}.app-content{padding-top:80px}.table-section{margin-bottom:var(--sl-spacing-x-large)}.table-section>.title{margin-bottom:0}.table-section>.file{margin-bottom:var(--sl-spacing-small)}@media print{.about-trigger{display:none}}
`,w="/probe-match-verifier/assets/color-spectrum.97f3c94a.png";const k="probe-match-verifier",D="0.0.0",I="ColourSpace Probe Match Verifier",Z={start:"vite",clean:"rimraf dist coverage",build:"pnpm run clean && tsc && vite build","build:gh-pages":"pnpm run build -- --base=/probe-match-verifier/",preview:"pnpm run build && vite preview",lint:"run-p lint:*","lint:eslint":"eslint --ext .js,.ts .","lint:prettier":"prettier '**/*.{js,ts,md,css}' --check","lint:types":"tsc --noEmit",format:"run-s format:*","format:eslint":"eslint --ext .js,.ts . --fix","format:prettier":"prettier '**/*.{js,ts,md,css}' --write",test:"vitest",coverage:"vitest --coverage",postinstall:"rimraf 'public/shoelace' && cpy 'node_modules/@shoelace-style/shoelace/dist/assets/icons' 'public/shoelace/assets/icons'"},N=["colourspace","lightillusion","probe","matching","verification","spectro"],U="Peter Siska <63866+peschee@users.noreply.github.com>",S="MIT",A={"@types/node":"^17.0.5","@typescript-eslint/eslint-plugin":"^5.8.1","@typescript-eslint/parser":"^5.8.1",c8:"^7.10.0","cpy-cli":"^3.1.1",eslint:"^8.5.0","eslint-config-prettier":"^8.3.0","npm-run-all":"^4.1.5",prettier:"^2.5.1",rimraf:"^3.0.2","ts-lit-plugin":"^1.2.1",typescript:"^4.5.4",vite:"^2.7.10","vite-plugin-html":"^2.1.2","vite-remark-html":"^1.1.1",vitest:"^0.0.124"},z={"@shoelace-style/shoelace":"^2.0.0-beta.63","browser-fs-access":"^0.23.0","cie-colorconverter":"^2.0.1","fast-xml-parser":"^4.0.0-beta.8",lit:"^2.0.2","normalize.css":"^8.0.1"};var T={name:k,version:D,description:I,scripts:Z,keywords:N,author:U,license:S,devDependencies:A,dependencies:z},V=`<h1>ColourSpace Probe Match Verifier</h1>
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
`,O=Object.defineProperty,j=Object.getOwnPropertyDescriptor,p=(e,t,i,r)=>{for(var s=r>1?void 0:r?j(t,i):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(s=(r?l(t,i,s):l(s))||s);return r&&s&&O(t,i,s),s};X("/probe-match-verifier/shoelace");const B=!1;let n=class extends ${constructor(){super();this.csXML=new E({debug:B})}async connectedCallback(){super.connectedCallback()}render(){return c`
      <header class="app-header">
        <h1 class="title app-title">
          <img src="${w}" alt="" class="logo" />
          <span class="text">${T.description}</span>
        </h1>
        <sl-icon-button name="info-circle" label="About" @click="${()=>{var e;return(e=this.aboutDialog)==null?void 0:e.show()}}" class="info about-trigger"></sl-icon-button>
      </header>

      <main class="app-content">
        <div class="table-section">
          <h2 class="title">
            Reference File (.bpd)
            <sl-button size="small" @click="${this.openReferenceBpdFile}"><sl-icon name="file-earmark-text"></sl-icon> Load</sl-button>
          </h2>
          ${this.referenceBpd?c`<p class="file">${this.referenceBpd.name}</p>`:h}
          ${this.referenceRGBW?c`<div class="table-responsive">${this.renderRGBW(this.referenceRGBW)}</div>`:h}
        </div>
        <div class="table-section">
          <h2 class="title">
            Verification File (.bcs) file-earmark-text
            <sl-button size="small" @click="${this.openVerificationBcsFile}"><sl-icon name="file-earmark-text"></sl-icon> Load</sl-button>
          </h2>
          ${this.verificationBcs?c`<p class="file">${this.verificationBcs.name}</p>`:h}
          ${this.verificationRGBW?c`<div class="table-responsive">${this.renderRGBW(this.verificationRGBW)}</div>`:h}
        </div>

        ${this.referenceRGBW&&this.verificationRGBW&&this.xyYErrors?c` <div class="table-section">
              <h2 class="title">Profiled Meter Comparison</h2>
              <div class="table-responsive">${this.renderComparisonTable(this.referenceRGBW,this.verificationRGBW,this.xyYErrors)}</div>
            </div>`:h}
      </main>

      <footer>
        <sl-dialog label="About" data-dialog-about class="about-dialog">
          <!--        <img src="${w}" alt="" class="logo" />-->
          ${R(V)}
          <sl-button slot="footer" variant="primary" @click="${()=>{var e;return(e=this.aboutDialog)==null?void 0:e.hide()}}">Close</sl-button>
        </sl-dialog>
      </footer>
    `}async updated(e){super.updated(e),e.has("referenceBpd")&&this.referenceBpd&&(this.referenceRGBW=this.csXML.getRGBWFromBpd(await this.referenceBpd.text()),this.requestUpdate("referenceRGBW")),e.has("verificationBcs")&&this.verificationBcs&&(this.verificationRGBW=this.csXML.getRGBWFromBcs(await this.verificationBcs.text()),this.requestUpdate("verificationRGBW")),(e.has("referenceRGBW")||e.has("verificationRGBW"))&&(this.xyYErrors=this.computexyYErrors(this.referenceRGBW,this.verificationRGBW),this.requestUpdate("xyYErrors"))}async openVerificationBcsFile(){const e=await y({description:"BCS files",extensions:[".bcs"]});this.verificationBcs=e,this.requestUpdate("verificationBcs")}async openReferenceBpdFile(){try{const e=await y({description:"BPD files",extensions:[".bpd"]});this.referenceBpd=e,this.requestUpdate("referenceBpd")}catch(e){console.error(e)}}renderRGBW(e){return e.length<=0?h:c`
      <table>
        <tr>
          <th></th>
          <th class="text-red">R</th>
          <th class="text-green">G</th>
          <th class="text-blue">B</th>
          <th class="text-white">W</th>
        </tr>
        ${e.map((t,i)=>c` <tr>
              <td>${n.getRowLabelForIndex(i)}</td>
              ${t.map((r,s)=>c` <td
                    class="${G({red:s===this.csXML.getRGBWIndexForColor("red"),green:s===this.csXML.getRGBWIndexForColor("green"),blue:s===this.csXML.getRGBWIndexForColor("blue"),white:s===this.csXML.getRGBWIndexForColor("white")})}"
                  >
                    ${d(r,7)}
                  </td>`)}
            </tr>`)}
      </table>
    `}renderComparisonTable(e,t,i){return c`
      <table class="profile-comparison">
        ${this.renderComparisonForColor(e,t,i,"red")} ${this.renderComparisonForColor(e,t,i,"green")}
        ${this.renderComparisonForColor(e,t,i,"blue")} ${this.renderComparisonForColor(e,t,i,"white")}
      </table>
    `}renderComparisonForColor(e,t,i,r){const s=this.csXML.getRGBWIndexForColor(r),o={x:e[0][s],y:e[1][s],Y:e[2][s]},l={x:t[0][s],y:t[1][s],Y:t[2][s]};return c`
      <tr class="${r} separator">
        <th class="text-${r}">${_(r)}</th>
        <th>Reference</th>
        <th>Profile</th>
        <th class="align-percent">Error</th>
        <th>Pass/Fail</th>
      </tr>
      <tr class="${r}">
        <th>x</th>
        <td>${d(o.x)}</td>
        <td>${d(l.x)}</td>
        <td class="align-percent">${n.renderError(i[r].x)}</td>
        <td class="clear">${n.renderNistPassFail(n.passesNistxy(i[r].x))}</td>
      </tr>
      <tr class="${r}">
        <th>y</th>
        <td>${d(o.y)}</td>
        <td>${d(l.y)}</td>
        <td class="align-percent">${n.renderError(i[r].y)}</td>
        <td class="clear">${n.renderNistPassFail(n.passesNistxy(i[r].y))}</td>
      </tr>
      <tr class="${r}">
        <th>Y</th>
        <td>${d(o.Y)}</td>
        <td>${d(l.Y)}</td>
        <td class="number-percent">${n.renderError(i[r].Y)}</td>
        <td class="clear">${n.renderNistPassFail(n.passesNistY(i[r].Y))}</td>
      </tr>
    `}static getRowLabelForIndex(e){const t=["x","y","Y"];return typeof t[e]=="undefined"?"n/a":t[e]}computexyYErrors(e=[],t=[]){if(e.length<1||t.length<1)return;const i=this.csXML.getRGBWIndexForColor("red"),r=this.csXML.getRGBWIndexForColor("green"),s=this.csXML.getRGBWIndexForColor("blue"),o=this.csXML.getRGBWIndexForColor("white"),l={x:e[0][i]-t[0][i],y:e[1][i]-t[1][i],Y:b(e[2][i],t[2][i])},u={x:e[0][r]-t[0][r],y:e[1][r]-t[1][r],Y:b(e[2][r],t[2][r])},g={x:e[0][s]-t[0][s],y:e[1][s]-t[1][s],Y:b(e[2][s],t[2][s])},m={x:e[0][o]-t[0][o],y:e[1][o]-t[1][o],Y:b(e[2][o],t[2][o])};return{red:l,green:u,blue:g,white:m}}static passesNistxy(e){return Math.abs(e)<=.001}static passesNistY(e){return Math.abs(e)<=1.5}static renderNistPassFail(e){return e?c`<span class="text-success">Pass</span>`:c`<span class="text-error">Fail</span>`}static renderError(e){return d(e)}};n.styles=F(P);p([f()],n.prototype,"referenceBpd",2);p([f()],n.prototype,"verificationBcs",2);p([f()],n.prototype,"referenceRGBW",2);p([f()],n.prototype,"verificationRGBW",2);p([f()],n.prototype,"xyYErrors",2);p([C("[data-dialog-about]")],n.prototype,"aboutDialog",2);n=p([L("app-shell")],n);

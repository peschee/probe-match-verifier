import{C as Y,f as x,o as w,t as b,i as C,s as $,p as u,T as p,a as R,M as y,b as G,n as W,c as X}from"./vendor.0ccd2dbd.js";const L=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}};L();const M=5,f=(e,t)=>(t-e)/t*100,c=(e,t=M)=>parseFloat(`${e}`).toFixed(t),_=e=>e.charAt(0).toUpperCase()+e.slice(1);class q{constructor({debug:t=!1}={}){this.colorConverter=new Y,this.isDebug=!1,this.xmlParser=new x.XMLParser({ignoreAttributes:!1}),this.isDebug=t}getRGBWFromBpd(t){if(!x.XMLValidator.validate(t))throw new Error("Could not validate BDP XML.");const{builder_color_space:{head:{L:i,x:r,y:s}}}=this.xmlParser.parse(t);return[[parseFloat(r["@_red"]),parseFloat(r["@_green"]),parseFloat(r["@_blue"]),parseFloat(r["@_white"])],[parseFloat(s["@_red"]),parseFloat(s["@_green"]),parseFloat(s["@_blue"]),parseFloat(s["@_white"])],[parseFloat(i["@_red"]),parseFloat(i["@_green"]),parseFloat(i["@_blue"]),parseFloat(i["@_white"])]]}getRGBWFromBcs(t){if(!x.XMLValidator.validate(t))throw new Error("Could not validate BCS XML.");const{builder_color_space:{data:{patch:i}}}=this.xmlParser.parse(t);return this.getRGBWMatrixFromPatches(i)}getRGBWMatrixFromPatches(t=[]){if(t.length<1)return;const i=t.filter(l=>!(l.stimuli.red===0&&l.stimuli.green===0&&l.stimuli.blue===0)).filter(l=>!(l.stimuli.red===1&&l.stimuli.green===1&&l.stimuli.blue===1)),{results:{XYZ:r}}=i.filter(l=>l.stimuli.green===0&&l.stimuli.blue===0).shift(),{results:{XYZ:s}}=i.filter(l=>l.stimuli.red===0&&l.stimuli.blue===0).shift(),{results:{XYZ:a}}=i.filter(l=>l.stimuli.red===0&&l.stimuli.green===0).shift(),[{results:{XYZ:n}}]=t.filter(l=>l.stimuli.red!==0&&l.stimuli.red!==1&&l.stimuli.green!==0&&l.stimuli.green!==1&&l.stimuli.blue!==0&&l.stimuli.blue!==1);this.isDebug&&(console.log("redXYZ",r),console.log("greenXYZ",s),console.log("blueXYZ",a),console.log("whiteXYZ",n));const m=this.colorConverter.XYZ_to_xyY([r.X,r.Y,r.Z]),h=this.colorConverter.XYZ_to_xyY([s.X,s.Y,s.Z]),g=this.colorConverter.XYZ_to_xyY([a.X,a.Y,a.Z]),v=this.colorConverter.XYZ_to_xyY([n.X,n.Y,n.Z]);return[[m[0],h[0],g[0],v[0]],[m[1],h[1],g[1],v[1]],[m[2],h[2],g[2],v[2]]]}getRGBWIndexForColor(t){return{red:0,green:1,blue:2,white:3}[t]}}var P=`:host{font-family:var(--sl-font-sans);line-height:var(--sl-line-height-dense);padding:var(--sl-spacing-small);display:block}h1,h2,h3,p{margin:0 0 var(--sl-spacing-small)}h1{font-size:var(--sl-font-size-x-large);font-weight:var(--sl-font-weight-bold)}h2{font-size:var(--sl-font-size-large);font-weight:var(--sl-font-weight-semibold)}h3{font-size:var(--sl-font-size-medium);font-weight:var(--sl-font-weight-semibold)}.text-success{color:var(--sl-color-success-700)}.text-error{color:var(--sl-color-danger-600)}.text-red{color:var(--sl-color-red-600)}.text-green{color:var(--sl-color-green-600)}.text-blue{color:var(--sl-color-blue-600)}.text-white{color:var(--sl-color-gray-600)}table{font-family:var(--sl-font-mono);font-size:var(--sl-font-size-small)}td{padding:var(--sl-spacing-x-small) var(--sl-spacing-x-small)}th{padding:var(--sl-spacing-2x-small) var(--sl-spacing-x-small)}tr.separator th{padding-top:var(--sl-spacing-large)}.profile-comparison th{text-align:right}td{text-align:right;font-weight:600}th{font-weight:var(--sl-font-weight-normal);font-family:var(--sl-font-sans)}td.red{background:var(--app-color-bg-r)}td.green{background:var(--app-color-bg-g)}td.blue{background:var(--app-color-bg-b)}td.white{background:var(--app-color-bg-w)}tr.red td{background:var(--app-color-bg-r)}tr.green td{background:var(--app-color-bg-g)}tr.blue td{background:var(--app-color-bg-b)}tr.white td{background:var(--app-color-bg-w)}tr.red td.clear,tr.green td.clear,tr.blue td.clear,tr.white td.clear{background:transparent}.number-percent:after{content:"%"}.align-percent:after{content:"%";opacity:0}.table-responsive{display:block;width:100%;overflow-x:auto}.about-trigger{position:fixed;top:var(--sl-spacing-medium);right:var(--sl-spacing-medium);z-index:2}.about-dialog{--width: 70ch}.about-dialog>.logo{max-width:32px;height:auto}.app-title{display:flex;align-items:center}.app-title>.logo{max-width:32px;height:auto;margin-right:var(--sl-spacing-small)}.table-section{margin-bottom:var(--sl-spacing-x-large)}.table-section>.title{margin-bottom:0}.table-section>.file{margin-bottom:var(--sl-spacing-small)}
`,B="/probe-match-verifier/assets/color-spectrum.97f3c94a.png",N=`<h1>Probe Matcher</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum ac est accumsan malesuada. Vivamus id scelerisque dolor. Duis feugiat ligula mi. Nullam nulla ligula, lobortis eu vulputate ac, tristique a elit. Aliquam quis dignissim tortor. Phasellus imperdiet, erat at dapibus porttitor, mi ante varius ante, sed congue libero magna ut urna. Aenean rutrum ante in vehicula tincidunt. Quisque urna odio, commodo eget leo sit amet, rhoncus tempus orci. Curabitur enim mi, sagittis nec tellus auctor, pellentesque consequat enim. Nulla finibus velit vel bibendum semper. Duis pulvinar id tellus a sagittis. Fusce a eros at turpis fermentum congue vestibulum vel justo. Ut nec elit congue, auctor dolor tincidunt, mattis sapien. Cras mi turpis, dictum in tempor id, blandit eget tortor. Curabitur nec libero vel lacus mollis accumsan. Maecenas metus tellus, finibus non volutpat vel, egestas quis velit.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum ac est accumsan malesuada. Vivamus id scelerisque dolor. Duis feugiat ligula mi. Nullam nulla ligula, lobortis eu vulputate ac, tristique a elit. Aliquam quis dignissim tortor. Phasellus imperdiet, erat at dapibus porttitor, mi ante varius ante, sed congue libero magna ut urna. Aenean rutrum ante in vehicula tincidunt. Quisque urna odio, commodo eget leo sit amet, rhoncus tempus orci. Curabitur enim mi, sagittis nec tellus auctor, pellentesque consequat enim. Nulla finibus velit vel bibendum semper. Duis pulvinar id tellus a sagittis. Fusce a eros at turpis fermentum congue vestibulum vel justo. Ut nec elit congue, auctor dolor tincidunt, mattis sapien. Cras mi turpis, dictum in tempor id, blandit eget tortor. Curabitur nec libero vel lacus mollis accumsan. Maecenas metus tellus, finibus non volutpat vel, egestas quis velit.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum ac est accumsan malesuada. Vivamus id scelerisque dolor. Duis feugiat ligula mi. Nullam nulla ligula, lobortis eu vulputate ac, tristique a elit. Aliquam quis dignissim tortor. Phasellus imperdiet, erat at dapibus porttitor, mi ante varius ante, sed congue libero magna ut urna. Aenean rutrum ante in vehicula tincidunt. Quisque urna odio, commodo eget leo sit amet, rhoncus tempus orci. Curabitur enim mi, sagittis nec tellus auctor, pellentesque consequat enim. Nulla finibus velit vel bibendum semper. Duis pulvinar id tellus a sagittis. Fusce a eros at turpis fermentum congue vestibulum vel justo. Ut nec elit congue, auctor dolor tincidunt, mattis sapien. Cras mi turpis, dictum in tempor id, blandit eget tortor. Curabitur nec libero vel lacus mollis accumsan. Maecenas metus tellus, finibus non volutpat vel, egestas quis velit.</p>
`,Z=Object.defineProperty,D=Object.getOwnPropertyDescriptor,d=(e,t,i,r)=>{for(var s=r>1?void 0:r?D(t,i):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(s=(r?n(t,i,s):n(s))||s);return r&&s&&Z(t,i,s),s};X("/shoelace");const F=!1;let o=class extends ${constructor(){super();this.csXML=new q({debug:F})}async connectedCallback(){super.connectedCallback()}render(){return u`
      <h1 class="app-title">
        <img src="${B}" alt="" class="logo" />
        <span class="text">ColourSpace Probe Match Verification</span>
      </h1>
      <div class="table-section">
        <h2 class="title">
          Reference File (.bpd)
          <sl-button size="small" @click="${this.openReferenceBpdFile}">Load</sl-button>
        </h2>
        ${this.referenceBpd?u`<p class="file">${this.referenceBpd.name}</p>`:p}
        ${this.referenceRGBW?u`<div class="table-responsive">${this.renderRGBW(this.referenceRGBW)}</div>`:p}
      </div>
      <div class="table-section">
        <h2 class="title">
          Verification File (.bcs)
          <sl-button size="small" @click="${this.openVerificationBcsFile}">Load</sl-button>
        </h2>
        ${this.verificationBcs?u`<p class="file">${this.verificationBcs.name}</p>`:p}
        ${this.verificationRGBW?u`<div class="table-responsive">${this.renderRGBW(this.verificationRGBW)}</div>`:p}
      </div>

      ${this.referenceRGBW&&this.verificationRGBW&&this.xyYErrors?u` <div class="table-section">
            <h2 class="title">Profiled Meter Comparison</h2>
            <div class="table-responsive">${this.renderComparisonTable(this.referenceRGBW,this.verificationRGBW,this.xyYErrors)}</div>
          </div>`:p}

      <sl-dialog label="About" data-dialog-about class="about-dialog">
        <!--        <img src="${B}" alt="" class="logo" />-->
        ${R(N)}
        <sl-button slot="footer" variant="primary" @click="${()=>{var e;return(e=this.aboutDialog)==null?void 0:e.hide()}}">Close</sl-button>
      </sl-dialog>
      <sl-icon-button name="info-circle" label="About" @click="${()=>{var e;return(e=this.aboutDialog)==null?void 0:e.show()}}" class="about-trigger"></sl-icon-button>
    `}async updated(e){super.updated(e),e.has("referenceBpd")&&this.referenceBpd&&(this.referenceRGBW=this.csXML.getRGBWFromBpd(await this.referenceBpd.text()),this.requestUpdate("referenceRGBW")),e.has("verificationBcs")&&this.verificationBcs&&(this.verificationRGBW=this.csXML.getRGBWFromBcs(await this.verificationBcs.text()),this.requestUpdate("verificationRGBW")),(e.has("referenceRGBW")||e.has("verificationRGBW"))&&(this.xyYErrors=this.computexyYErrors(this.referenceRGBW,this.verificationRGBW),this.requestUpdate("xyYErrors"))}async openVerificationBcsFile(){const e=await y({description:"BCS files",extensions:[".bcs"]});this.verificationBcs=e,this.requestUpdate("verificationBcs")}async openReferenceBpdFile(){try{const e=await y({description:"BPD files",extensions:[".bpd"]});this.referenceBpd=e,this.requestUpdate("referenceBpd")}catch(e){console.error(e)}}renderRGBW(e){return e.length<=0?p:u`
      <table>
        <tr>
          <th></th>
          <th class="text-red">R</th>
          <th class="text-green">G</th>
          <th class="text-blue">B</th>
          <th class="text-white">W</th>
        </tr>
        ${e.map((t,i)=>u` <tr>
              <td>${o.getRowLabelForIndex(i)}</td>
              ${t.map((r,s)=>u` <td
                    class="${G({red:s===this.csXML.getRGBWIndexForColor("red"),green:s===this.csXML.getRGBWIndexForColor("green"),blue:s===this.csXML.getRGBWIndexForColor("blue"),white:s===this.csXML.getRGBWIndexForColor("white")})}"
                  >
                    ${c(r,7)}
                  </td>`)}
            </tr>`)}
      </table>
    `}renderComparisonTable(e,t,i){return u`
      <table class="profile-comparison">
        ${this.renderComparisonForColor(e,t,i,"red")} ${this.renderComparisonForColor(e,t,i,"green")}
        ${this.renderComparisonForColor(e,t,i,"blue")} ${this.renderComparisonForColor(e,t,i,"white")}
      </table>
    `}renderComparisonForColor(e,t,i,r){const s=this.csXML.getRGBWIndexForColor(r),a={x:e[0][s],y:e[1][s],Y:e[2][s]},n={x:t[0][s],y:t[1][s],Y:t[2][s]};return u`
      <tr class="${r} separator">
        <th class="text-${r}">${_(r)}</th>
        <th>Reference</th>
        <th>Profile</th>
        <th class="align-percent">Error</th>
        <th>Pass/Fail</th>
      </tr>
      <tr class="${r}">
        <th>x</th>
        <td>${c(a.x)}</td>
        <td>${c(n.x)}</td>
        <td class="align-percent">${o.renderError(i[r].x)}</td>
        <td class="clear">${o.renderNistPassFail(o.passesNistxy(i[r].x))}</td>
      </tr>
      <tr class="${r}">
        <th>y</th>
        <td>${c(a.y)}</td>
        <td>${c(n.y)}</td>
        <td class="align-percent">${o.renderError(i[r].y)}</td>
        <td class="clear">${o.renderNistPassFail(o.passesNistxy(i[r].y))}</td>
      </tr>
      <tr class="${r}">
        <th>Y</th>
        <td>${c(a.Y)}</td>
        <td>${c(n.Y)}</td>
        <td class="number-percent">${o.renderError(i[r].Y)}</td>
        <td class="clear">${o.renderNistPassFail(o.passesNistY(i[r].Y))}</td>
      </tr>
    `}static getRowLabelForIndex(e){const t=["x","y","Y"];return typeof t[e]=="undefined"?"n/a":t[e]}computexyYErrors(e=[],t=[]){if(e.length<1||t.length<1)return;const i=this.csXML.getRGBWIndexForColor("red"),r=this.csXML.getRGBWIndexForColor("green"),s=this.csXML.getRGBWIndexForColor("blue"),a=this.csXML.getRGBWIndexForColor("white"),n={x:e[0][i]-t[0][i],y:e[1][i]-t[1][i],Y:f(e[2][i],t[2][i])},m={x:e[0][r]-t[0][r],y:e[1][r]-t[1][r],Y:f(e[2][r],t[2][r])},h={x:e[0][s]-t[0][s],y:e[1][s]-t[1][s],Y:f(e[2][s],t[2][s])},g={x:e[0][a]-t[0][a],y:e[1][a]-t[1][a],Y:f(e[2][a],t[2][a])};return{red:n,green:m,blue:h,white:g}}static passesNistxy(e){return Math.abs(e)<=.001}static passesNistY(e){return Math.abs(e)<=1.5}static renderNistPassFail(e){return e?u`<span class="text-success">Pass</span>`:u`<span class="text-error">Fail</span>`}static renderError(e){return c(e)}};o.styles=w(P);d([b()],o.prototype,"referenceBpd",2);d([b()],o.prototype,"verificationBcs",2);d([b()],o.prototype,"referenceRGBW",2);d([b()],o.prototype,"verificationRGBW",2);d([b()],o.prototype,"xyYErrors",2);d([C("[data-dialog-about]")],o.prototype,"aboutDialog",2);o=d([W("app-shell")],o);

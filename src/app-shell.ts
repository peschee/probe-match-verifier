import { html, LitElement, nothing, PropertyValues, unsafeCSS } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { classMap } from 'lit/directives/class-map.js';
import { fileOpen, supported } from 'browser-fs-access';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import { SlDialog } from '@shoelace-style/shoelace';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

import { capitalizeFirstLetter, formatNumber, relativeDifference } from './util/functions';
import { ColorName, ColourSpaceXML, RGBW, xyY } from './util/ColourSpaceXML';
import styles from './app-shell.css?inline';
import logoUrl from '../color-spectrum.png';
import pkg from '../package.json';
import readmeHtml from './../README.md';

setBasePath(`${import.meta.env.BASE_URL}shoelace`);

const DEBUG = import.meta.env.DEV;

type xyYErrors = {
  [K in ColorName]: xyY;
};

@customElement('app-shell')
export class AppShell extends LitElement {
  @state()
  referenceBpd?: File;

  @state()
  verificationBcs?: File;

  @state()
  referenceRGBW?: RGBW;

  @state()
  verificationRGBW?: RGBW;

  @state()
  xyYErrors?: xyYErrors;

  @query('[data-dialog-about]')
  aboutDialog?: SlDialog;

  @query('[data-app-header]')
  appHeader?: HTMLDivElement;

  @query('[data-app-content]')
  appContent?: HTMLDivElement;

  static styles = unsafeCSS(styles);

  private csXML = new ColourSpaceXML({
    debug: DEBUG,
  });

  constructor() {
    super();

    if (DEBUG) {
      console.log(supported ? 'Using the File System Access API.' : 'Using the fallback implementation.');
    }

    this.updateHeaderSize = this.updateHeaderSize.bind(this);
  }

  async connectedCallback() {
    super.connectedCallback();

    if (DEBUG) {
      const { default: referenceBpd } = await import('../test/fixtures/i1pro2.bpd?raw');
      const { default: verificationBcs } = await import('../test/fixtures/verification.bcs?raw');
      this.referenceBpd = new File([new Blob([referenceBpd])], 'i1pro2.bpd');
      this.verificationBcs = new File([new Blob([verificationBcs])], 'verification.bcs');
    }

    window.addEventListener('resize', this.updateHeaderSize);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.updateHeaderSize);

    super.disconnectedCallback();
  }

  render() {
    return html`
      <header class="app-header" data-app-header>
        <h1 class="title app-title">
          <img src="${logoUrl}" alt="" class="logo" />
          <span class="text app-name">
            <span class="full">${pkg.description}</span>
            <span class="short">${pkg.description.replace('ColourSpace', 'CS')}</span>
          </span>
        </h1>
        <sl-icon-button name="info-circle" label="About" @click="${() => this.aboutDialog?.show()}" class="info about-trigger"></sl-icon-button>
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
            ${this.referenceBpd ? html`<p class="file">${this.referenceBpd.name}</p>` : nothing}
            ${this.referenceRGBW ? html`<div class="table-responsive">${this.renderRGBW(this.referenceRGBW)}</div>` : nothing}
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
            ${this.verificationBcs ? html`<p class="file">${this.verificationBcs.name}</p>` : nothing}
            ${this.verificationRGBW ? html`<div class="table-responsive">${this.renderRGBW(this.verificationRGBW)}</div>` : nothing}
          </div>
        </div>
        ${this.referenceRGBW && this.verificationRGBW && this.xyYErrors
          ? html` <div class="table-section">
              <h2 class="title">Profiled Meter Comparison</h2>
              <div class="table-responsive">${this.renderComparisonTable(this.referenceRGBW, this.verificationRGBW, this.xyYErrors)}</div>
            </div>`
          : nothing}
      </main>

      <footer>
        <sl-dialog label="About" data-dialog-about class="about-dialog">
          ${unsafeHTML(readmeHtml)}
          <sl-button slot="footer" variant="primary" @click="${() => this.aboutDialog?.hide()}">Close</sl-button>
        </sl-dialog>
      </footer>
    `;
  }

  protected async updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    this.updateHeaderSize();

    if (changedProperties.has('referenceBpd') && this.referenceBpd) {
      this.referenceRGBW = this.csXML.getRGBWFromBpd(await this.referenceBpd.text());
      this.requestUpdate('referenceRGBW');

      if (DEBUG) {
        console.log('referenceRGBW');
        console.table(this.referenceRGBW);
      }
    }

    if (changedProperties.has('verificationBcs') && this.verificationBcs) {
      this.verificationRGBW = this.csXML.getRGBWFromBcs(await this.verificationBcs.text());
      this.requestUpdate('verificationRGBW');

      if (DEBUG) {
        console.log('verificationRGBW');
        console.table(this.verificationRGBW);
      }
    }

    if (changedProperties.has('referenceRGBW') || changedProperties.has('verificationRGBW')) {
      this.xyYErrors = this.computexyYErrors(this.referenceRGBW, this.verificationRGBW);
      this.requestUpdate('xyYErrors');

      if (DEBUG) {
        console.log('xyYErrors');
        console.table(this.xyYErrors);
      }
    }
  }

  private async openVerificationBcsFile() {
    const blob = await fileOpen({
      description: 'BCS files',
      extensions: ['.bcs'],
    });

    this.verificationBcs = blob;
    this.requestUpdate('verificationBcs');

    if (DEBUG) {
      console.log('openVerificationBcsFile', blob);
    }
  }

  private async openReferenceBpdFile() {
    try {
      const blob = await fileOpen({
        description: 'BPD files',
        extensions: ['.bpd'],
      });

      this.referenceBpd = blob;
      this.requestUpdate('referenceBpd');

      if (DEBUG) {
        console.log('openReferenceBpdFile', blob);
      }
    } catch (e) {
      console.error(e);
    }
  }

  private renderRGBW(matrix: RGBW) {
    if (matrix.length <= 0) {
      return nothing;
    }

    return html`
      <table>
        <tr>
          <th></th>
          <th class="text-red">R</th>
          <th class="text-green">G</th>
          <th class="text-blue">B</th>
          <th class="text-white">W</th>
        </tr>
        ${matrix.map(
          (row, rowIndex) =>
            html` <tr>
              <td>${AppShell.getRowLabelForIndex(rowIndex)}</td>
              ${row.map(
                (col, colIndex) =>
                  html` <td
                    class="${classMap({
                      red: colIndex === this.csXML.getRGBWIndexForColor('red'),
                      green: colIndex === this.csXML.getRGBWIndexForColor('green'),
                      blue: colIndex === this.csXML.getRGBWIndexForColor('blue'),
                      white: colIndex === this.csXML.getRGBWIndexForColor('white'),
                    })}"
                  >
                    ${formatNumber(col, 7)}
                  </td>`
              )}
            </tr>`
        )}
      </table>
    `;
  }

  private renderComparisonTable(reference: RGBW, verification: RGBW, errors: xyYErrors) {
    return html`
      <table class="profile-comparison">
        ${this.renderComparisonForColor(reference, verification, errors, 'red')} ${this.renderComparisonForColor(reference, verification, errors, 'green')}
        ${this.renderComparisonForColor(reference, verification, errors, 'blue')} ${this.renderComparisonForColor(reference, verification, errors, 'white')}
      </table>
    `;
  }

  private renderComparisonForColor(reference: RGBW, verification: RGBW, errors: xyYErrors, color: ColorName) {
    const colorIndex = this.csXML.getRGBWIndexForColor(color);

    const xyYReference = {
      x: reference[0][colorIndex],
      y: reference[1][colorIndex],
      Y: reference[2][colorIndex],
    };

    const xyYVerification = {
      x: verification[0][colorIndex],
      y: verification[1][colorIndex],
      Y: verification[2][colorIndex],
    };

    return html`
      <tr class="${color} separator">
        <th class="text-${color}">${capitalizeFirstLetter(color)}</th>
        <th>Reference</th>
        <th>Profile</th>
        <th class="align-percent">Error</th>
        <th>Pass/Fail</th>
      </tr>
      <tr class="${color}">
        <th>x</th>
        <td>${formatNumber(xyYReference.x, 7)}</td>
        <td>${formatNumber(xyYVerification.x, 7)}</td>
        <td class="align-percent">${AppShell.renderError(errors[color].x)}</td>
        <td class="clear">${AppShell.renderNistPassFail(AppShell.passesNistxy(errors[color].x))}</td>
      </tr>
      <tr class="${color}">
        <th>y</th>
        <td>${formatNumber(xyYReference.y, 7)}</td>
        <td>${formatNumber(xyYVerification.y, 7)}</td>
        <td class="align-percent">${AppShell.renderError(errors[color].y)}</td>
        <td class="clear">${AppShell.renderNistPassFail(AppShell.passesNistxy(errors[color].y))}</td>
      </tr>
      <tr class="${color}">
        <th>Y</th>
        <td>${formatNumber(xyYReference.Y, 7)}</td>
        <td>${formatNumber(xyYVerification.Y, 7)}</td>
        <td class="number-percent">${AppShell.renderError(errors[color].Y)}</td>
        <td class="clear">${AppShell.renderNistPassFail(AppShell.passesNistY(errors[color].Y))}</td>
      </tr>
    `;
  }

  private static getRowLabelForIndex(index: number) {
    const labels = ['x', 'y', 'Y'];

    if (typeof labels[index] === 'undefined') {
      return 'n/a';
    }

    return labels[index];
  }

  private computexyYErrors(reference: RGBW = [], verification: RGBW = []): xyYErrors | undefined {
    if (reference.length < 1 || verification.length < 1) {
      return;
    }

    const redIndex = this.csXML.getRGBWIndexForColor('red');
    const greenIndex = this.csXML.getRGBWIndexForColor('green');
    const blueIndex = this.csXML.getRGBWIndexForColor('blue');
    const whiteIndex = this.csXML.getRGBWIndexForColor('white');

    if (DEBUG) {
      console.log('Red x: ', reference[0][redIndex], verification[0][redIndex]);
      console.log('Red y: ', reference[1][redIndex], verification[1][redIndex]);
      console.log('Red Y: ', reference[2][redIndex], verification[2][redIndex]);

      console.log('Green x: ', reference[0][greenIndex], verification[0][greenIndex]);
      console.log('Green y: ', reference[1][greenIndex], verification[1][greenIndex]);
      console.log('Green Y: ', reference[2][greenIndex], verification[2][greenIndex]);

      console.log('Blue x: ', reference[0][blueIndex], verification[0][blueIndex]);
      console.log('Blue y: ', reference[1][blueIndex], verification[1][blueIndex]);
      console.log('Blue Y: ', reference[2][blueIndex], verification[2][blueIndex]);

      console.log('White x: ', reference[0][whiteIndex], verification[0][whiteIndex]);
      console.log('White y: ', reference[1][whiteIndex], verification[1][whiteIndex]);
      console.log('White Y: ', reference[2][whiteIndex], verification[2][whiteIndex]);
    }

    const redxyY: xyY = {
      x: verification[0][redIndex] - reference[0][redIndex],
      y: verification[1][redIndex] - reference[1][redIndex],
      Y: relativeDifference(reference[2][redIndex], verification[2][redIndex]),
    };

    const greenxyY: xyY = {
      x: verification[0][greenIndex] - reference[0][greenIndex],
      y: verification[1][greenIndex] - reference[1][greenIndex],
      Y: relativeDifference(reference[2][greenIndex], verification[2][greenIndex]),
    };

    const bluexyY: xyY = {
      x: verification[0][blueIndex] - reference[0][blueIndex],
      y: verification[1][blueIndex] - reference[1][blueIndex],
      Y: relativeDifference(reference[2][blueIndex], verification[2][blueIndex]),
    };

    const whitexyY: xyY = {
      x: verification[0][whiteIndex] - reference[0][whiteIndex],
      y: verification[1][whiteIndex] - reference[1][whiteIndex],
      Y: relativeDifference(reference[2][whiteIndex], verification[2][whiteIndex]),
    };

    return {
      red: redxyY,
      green: greenxyY,
      blue: bluexyY,
      white: whitexyY,
    };
  }

  private static passesNistxy(value: number) {
    return Math.abs(value) <= 0.001;
  }

  private static passesNistY(value: number) {
    return Math.abs(value) <= 1.5;
  }

  private static renderNistPassFail(passes: boolean) {
    if (passes) {
      return html`<span class="text-success">Pass</span>`;
    }

    return html`<span class="text-error">Fail</span>`;
  }

  private static renderError(value: number) {
    return formatNumber(value, 7);
  }

  private updateHeaderSize() {
    if (!this.appHeader || !this.appContent) {
      return;
    }

    this.appContent.style.setProperty('--app-header-size', `${this.appHeader.offsetHeight}px`);
  }
}

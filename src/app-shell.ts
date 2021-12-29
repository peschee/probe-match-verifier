import { html, LitElement, nothing, PropertyValues, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ColorConverter } from 'cie-colorconverter';
import { fileOpen, supported } from 'browser-fs-access';
import { XMLParser, XMLValidator } from 'fast-xml-parser';

import styles from 'bundle-text:./app-shell.scss';
import { relativeDifference } from './helpers';

// const DEBUG = false;
const DEBUG = process.env.NODE_ENV !== 'production';

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

  private xmlParser = new XMLParser({
    ignoreAttributes: false,
  });

  private colorConverter = new ColorConverter();

  static styles = unsafeCSS(styles);

  constructor() {
    super();

    if (DEBUG) {
      console.log(supported ? 'Using the File System Access API.' : 'Using the fallback implementation.');
    }
  }

  render() {
    return html`
      <h1>Probe Match Verification</h1>
      <p>Reference BPD File: <a href="#" @click="${this.openReferenceBpdFile}">Open BPD</a> ${this.referenceBpd?.name}</p>
      ${this.referenceRGBW ? this.renderRGBW(this.referenceRGBW) : nothing}
      <p>Verification BCS File: <a href="#" @click="${this.openVerificationBcsFile}">Open BCS</a> ${this.verificationBcs?.name}</p>
      ${this.verificationRGBW ? this.renderRGBW(this.verificationRGBW) : nothing}
      ${this.referenceRGBW && this.verificationRGBW && this.xyYErrors
        ? AppShell.renderComparison(this.referenceRGBW, this.verificationRGBW, this.xyYErrors)
        : nothing}
    `;
  }

  protected async updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    if (changedProperties.has('referenceBpd') && this.referenceBpd) {
      this.referenceRGBW = this.getRGBWFromBpd(await this.referenceBpd.text());
      this.requestUpdate('referenceRGBW');

      if (DEBUG) {
        console.log('referenceRGBW');
        console.table(this.referenceRGBW);
      }
    }

    if (changedProperties.has('verificationBcs') && this.verificationBcs) {
      this.verificationRGBW = this.getRGBWFromBcs(await this.verificationBcs.text());
      this.requestUpdate('verificationRGBW');

      if (DEBUG) {
        console.log('verificationRGBW');
        console.table(this.verificationRGBW);
      }
    }

    if (changedProperties.has('referenceRGBW') || changedProperties.has('verificationRGBW')) {
      this.xyYErrors = AppShell.computexyYErrors(this.referenceRGBW, this.verificationRGBW);
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
    const blob = await fileOpen({
      description: 'BPD files',
      extensions: ['.bpd'],
    });

    this.referenceBpd = blob;
    this.requestUpdate('referenceBpd');

    if (DEBUG) {
      console.log('openReferenceBpdFile', blob);
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
          <th>R</th>
          <th>G</th>
          <th>B</th>
          <th>W</th>
        </tr>
        ${matrix.map(
          (row, rowIndex) =>
            html`<tr>
              <td>${AppShell.getRowLabelForIndex(rowIndex)}</td>
              ${row.map(
                (col, colIndex) =>
                  html`<td
                    class="${classMap({
                      r: colIndex === 0,
                      g: colIndex === 1,
                      b: colIndex === 2,
                      w: colIndex === 3,
                    })}"
                  >
                    ${col}
                  </td>`
              )}
            </tr>`
        )}
      </table>
    `;
  }

  private static renderComparison(reference: RGBW, verification: RGBW, errors: xyYErrors) {
    const redxyYReference = {
      x: reference[0][0],
      y: reference[1][0],
      Y: reference[1][0],
    };

    const redxyYVerification = {
      x: verification[0][0],
      y: verification[1][0],
      Y: verification[1][0],
    };

    const greenxyYReference = {
      x: reference[0][1],
      y: reference[1][1],
      Y: reference[1][1],
    };

    const greenxyYVerification = {
      x: verification[0][1],
      y: verification[1][1],
      Y: verification[1][1],
    };

    const bluexyYReference = {
      x: reference[0][2],
      y: reference[1][2],
      Y: reference[1][2],
    };

    const bluexyYVerification = {
      x: verification[0][2],
      y: verification[1][2],
      Y: verification[1][2],
    };

    const whitexyYReference = {
      x: reference[0][3],
      y: reference[1][3],
      Y: reference[1][3],
    };

    const whitexyYVerification = {
      x: verification[0][3],
      y: verification[1][3],
      Y: verification[1][3],
    };

    return html`
      <p>Profiled Meter Comparison</p>
      <table>
        <tr class="r">
          <th>Red</th>
          <th>Reference</th>
          <th>Profile</th>
          <th>Error</th>
          <th>Pass/Fail</th>
        </tr>
        <tr class="r">
          <th>x</th>
          <td>${redxyYReference.x}</td>
          <td>${redxyYVerification.x}</td>
          <td>${AppShell.renderError(errors.red.x)}</td>
          <td>${AppShell.renderNistPassFail(AppShell.passesNistxy(errors.red.x))}</td>
        </tr>
        <tr class="r">
          <th>y</th>
          <td>${redxyYReference.y}</td>
          <td>${redxyYVerification.y}</td>
          <td>${AppShell.renderError(errors.red.y)}</td>
          <td>${AppShell.renderNistPassFail(AppShell.passesNistxy(errors.red.y))}</td>
        </tr>
        <tr class="r">
          <th>Y</th>
          <td>${redxyYReference.Y}</td>
          <td>${redxyYVerification.Y}</td>
          <td>${AppShell.renderError(errors.red.Y)}</td>
          <td>${AppShell.renderNistPassFail(AppShell.passesNistY(errors.red.Y))}</td>
        </tr>
      </table>

      <table>
        <tr class="g">
          <th>Green</th>
          <th>Reference</th>
          <th>Profile</th>
          <th>Error</th>
          <th>Pass/Fail</th>
        </tr>
        <tr class="g">
          <th>x</th>
          <td>${greenxyYReference.x}</td>
          <td>${greenxyYVerification.x}</td>
          <td>${AppShell.renderError(errors.green.x)}</td>
          <td>${AppShell.renderNistPassFail(AppShell.passesNistxy(errors.green.x))}</td>
        </tr>
        <tr class="g">
          <th>y</th>
          <td>${greenxyYReference.y}</td>
          <td>${greenxyYVerification.y}</td>
          <td>${AppShell.renderError(errors.green.y)}</td>
          <td>${AppShell.renderNistPassFail(AppShell.passesNistxy(errors.green.y))}</td>
        </tr>
        <tr class="g">
          <th>Y</th>
          <td>${greenxyYReference.Y}</td>
          <td>${greenxyYVerification.Y}</td>
          <td>${AppShell.renderError(errors.green.Y)}</td>
          <td>${AppShell.renderNistPassFail(AppShell.passesNistY(errors.green.Y))}</td>
        </tr>
      </table>

      <table>
        <tr class="b">
          <th>Blue</th>
          <th>Reference</th>
          <th>Profile</th>
          <th>Error</th>
          <th>Pass/Fail</th>
        </tr>
        <tr class="b">
          <th>x</th>
          <td>${bluexyYReference.x}</td>
          <td>${bluexyYVerification.x}</td>
          <td>${AppShell.renderError(errors.blue.x)}</td>
          <td>${AppShell.renderNistPassFail(AppShell.passesNistxy(errors.blue.x))}</td>
        </tr>
        <tr class="b">
          <th>y</th>
          <td>${bluexyYReference.y}</td>
          <td>${bluexyYVerification.y}</td>
          <td>${AppShell.renderError(errors.blue.y)}</td>
          <td>${AppShell.renderNistPassFail(AppShell.passesNistxy(errors.blue.y))}</td>
        </tr>
        <tr class="b">
          <th>Y</th>
          <td>${bluexyYReference.Y}</td>
          <td>${bluexyYVerification.Y}</td>
          <td>${AppShell.renderError(errors.blue.Y)}</td>
          <td>${AppShell.renderNistPassFail(AppShell.passesNistY(errors.blue.Y))}</td>
        </tr>
      </table>

      <table>
        <tr class="w">
          <th>White</th>
          <th>Reference</th>
          <th>Profile</th>
          <th>Error</th>
          <th>Pass/Fail</th>
        </tr>
        <tr class="w">
          <th>x</th>
          <td>${whitexyYReference.x}</td>
          <td>${whitexyYVerification.x}</td>
          <td>${AppShell.renderError(errors.white.x)}</td>
          <td>${AppShell.renderNistPassFail(AppShell.passesNistxy(errors.white.x))}</td>
        </tr>
        <tr class="w">
          <th>y</th>
          <td>${whitexyYReference.y}</td>
          <td>${whitexyYVerification.y}</td>
          <td>${AppShell.renderError(errors.white.y)}</td>
          <td>${AppShell.renderNistPassFail(AppShell.passesNistxy(errors.white.y))}</td>
        </tr>
        <tr class="w">
          <th>Y</th>
          <td>${whitexyYReference.Y}</td>
          <td>${whitexyYVerification.Y}</td>
          <td>${AppShell.renderError(errors.white.Y)}</td>
          <td>${AppShell.renderNistPassFail(AppShell.passesNistY(errors.white.Y))}</td>
        </tr>
      </table>
    `;
  }

  private getRGBWFromBpd(bpdXml: string) {
    if (!XMLValidator.validate(bpdXml)) {
      console.error('Could not validate BDP XML.');
      return;
    }

    const {
      builder_color_space: {
        head: { L, x, y },
      },
    } = this.xmlParser.parse(bpdXml);

    const matrix = [
      [x['@_red'], x['@_green'], x['@_blue'], x['@_white']],
      [y['@_red'], y['@_green'], y['@_blue'], y['@_white']],
      [L['@_red'], L['@_green'], L['@_blue'], L['@_white']],
    ];

    if (DEBUG) {
      console.log('getRGBWFromBpd');
      console.log('head', this.xmlParser.parse(bpdXml));
      console.log('getRGBWFromBpd');
      console.table(matrix);
    }

    return matrix;
  }

  private getRGBWFromBcs(bcsXml: string) {
    if (!XMLValidator.validate(bcsXml)) {
      console.error('Could not validate BCS XML.');
      return;
    }

    const {
      builder_color_space: {
        data: { patch: patches },
      },
    } = this.xmlParser.parse(bcsXml);

    if (DEBUG) {
      console.log('getRGBWFromBcs');
      console.log('patches', patches);
    }

    return this.getRGBWMatrixFromPatches(patches);
  }

  private static getRowLabelForIndex(index: number) {
    switch (index) {
      case 0:
        return 'x';
      case 1:
        return 'y';
      case 2:
        return 'Y';
      default:
        return 'n/a';
    }
  }

  private getRGBWMatrixFromPatches(patches: Array<BscPatch> = []): RGBW | undefined {
    if (patches.length < 1) {
      return;
    }

    // Filter out black & white patches
    const colorPatches = patches
      .filter((p) => !(p.stimuli.red === 0 && p.stimuli.green === 0 && p.stimuli.blue === 0))
      .filter((p) => !(p.stimuli.red === 1 && p.stimuli.green === 1 && p.stimuli.blue === 1));

    // Get XYZ for each color
    const {
      results: { XYZ: redXYZ },
    } = colorPatches.filter((p) => p.stimuli.green === 0 && p.stimuli.blue === 0).shift()!;
    const {
      results: { XYZ: greenXYZ },
    } = colorPatches.filter((p) => p.stimuli.red === 0 && p.stimuli.blue === 0).shift()!;
    const {
      results: { XYZ: blueXYZ },
    } = colorPatches.filter((p) => p.stimuli.red === 0 && p.stimuli.green === 0).shift()!;

    // Get XYZ for white
    const [
      {
        results: { XYZ: whiteXYZ },
      },
    ] = patches.filter(
      (p) => p.stimuli.red !== 0 && p.stimuli.red !== 1 && p.stimuli.green !== 0 && p.stimuli.green !== 1 && p.stimuli.blue !== 0 && p.stimuli.blue !== 1
    );

    if (DEBUG) {
      console.log('redXYZ', redXYZ);
      console.log('greenXYZ', greenXYZ);
      console.log('blueXYZ', blueXYZ);
      console.log('whiteXYZ', whiteXYZ);
    }

    // Convert to XYZ --> xyY
    const redxyY = this.colorConverter.XYZ_to_xyY([redXYZ.X, redXYZ.Y, redXYZ.Z]);
    const greenxyY = this.colorConverter.XYZ_to_xyY([greenXYZ.X, greenXYZ.Y, greenXYZ.Z]);
    const bluexyY = this.colorConverter.XYZ_to_xyY([blueXYZ.X, blueXYZ.Y, blueXYZ.Z]);
    const whitexyY = this.colorConverter.XYZ_to_xyY([whiteXYZ.X, whiteXYZ.Y, whiteXYZ.Z]);

    return [
      [redxyY[0], greenxyY[0], bluexyY[0], whitexyY[0]],
      [redxyY[1], greenxyY[1], bluexyY[1], whitexyY[1]],
      [redxyY[2], greenxyY[2], bluexyY[2], whitexyY[2]],
    ];
  }

  private static computexyYErrors(reference: RGBW = [], verification: RGBW = []): xyYErrors | undefined {
    if (reference.length < 1 || verification.length < 1) {
      return;
    }

    if (DEBUG) {
      console.log('Red x: ', reference[0][0], verification[0][0]);
      console.log('Red y: ', reference[1][0], verification[1][0]);
      console.log('Red Y: ', reference[2][0], verification[2][0]);

      console.log('Green x: ', reference[0][1], verification[0][1]);
      console.log('Green y: ', reference[1][1], verification[1][1]);
      console.log('Green Y: ', reference[2][1], verification[2][1]);

      console.log('Blue x: ', reference[0][2], verification[0][2]);
      console.log('Blue y: ', reference[1][2], verification[1][2]);
      console.log('Blue Y: ', reference[2][2], verification[2][2]);

      console.log('White x: ', reference[0][3], verification[0][3]);
      console.log('White y: ', reference[1][3], verification[1][3]);
      console.log('White Y: ', reference[2][3], verification[2][3]);
    }

    const redxyY: xyY = {
      x: reference[0][0] - verification[0][0],
      y: reference[1][0] - verification[1][0],
      Y: relativeDifference(reference[2][0], verification[2][0]),
    };

    const greenxyY: xyY = {
      x: reference[0][1] - verification[0][1],
      y: reference[1][1] - verification[1][1],
      Y: relativeDifference(reference[2][1], verification[2][1]),
    };

    const bluexyY: xyY = {
      x: reference[0][2] - verification[0][2],
      y: reference[1][2] - verification[1][2],
      Y: relativeDifference(reference[2][2], verification[2][2]),
    };

    const whitexyY: xyY = {
      x: reference[0][3] - verification[0][3],
      y: reference[1][3] - verification[1][3],
      Y: relativeDifference(reference[2][3], verification[2][3]),
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
      return html`<span class="success">Pass</span>`;
    }

    return html`<span class="error">Fail</span>`;
  }

  private static renderError(value: number) {
    if (value < 0) {
      return html`<span class="error">${value}</span>`;
    }

    return value;
  }
}

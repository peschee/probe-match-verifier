import { html, LitElement, nothing, PropertyValues, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ColorConverter } from 'cie-colorconverter';
import { fileOpen, supported } from 'browser-fs-access';
import { XMLParser, XMLValidator } from 'fast-xml-parser';

import styles from 'bundle-text:./app-shell.scss';
import { relativeDifference } from './helpers';

const DEBUG = false;
// const DEBUG = process.env.NODE_ENV !== 'production';

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
  xyYErrors?: Record<string, any>;

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
      <p>Reference BPD File: <a href="#" @click="${this.openReferenceBpdFile}">Open BPD</a> ${this.referenceBpd?.name}</p>
      ${this.referenceRGBW ? this.renderRGBW(this.referenceRGBW) : nothing}
      <p>Verification BCS File: <a href="#" @click="${this.openVerificationBcsFile}">Open BCS</a> ${this.verificationBcs?.name}</p>
      ${this.verificationRGBW ? this.renderRGBW(this.verificationRGBW) : nothing}
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
          <td></td>
          <td>R</td>
          <td>G</td>
          <td>B</td>
          <td>W</td>
        </tr>
        ${matrix.map(
          (row, index) =>
            html`<tr>
              <td>${AppShell.getRowLabelForIndex(index)}</td>
              ${row.map((col) => html`<td>${col}</td>`)}
            </tr>`
        )}
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
}

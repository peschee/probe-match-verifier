import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ColorConverter } from 'cie-colorconverter';
import { fileOpen, supported } from 'browser-fs-access';

@customElement('app-shell')
export class AppShell extends LitElement {
  @property()
  name?: string = 'World';

  @state()
  file?: File;

  static styles = css`
    :host {
      color: blue;
    }
  `;

  constructor() {
    super();

    if (supported) {
      console.log('Using the File System Access API.');
    } else {
      console.log('Using the fallback implementation.');
    }

    const converter = new ColorConverter();

    const xyY = converter.XYZ_to_xyY([50.080456544802, 23.999465510573, -0.030842717841]);

    console.log('xyY', xyY);
  }

  // Render the UI as a function of component state
  render() {
    return html`<p>Hello, ${this.name}!</p>
      <p><a href="#" @click="${this.openBcsFile}">Open BCS</a> ${this.file?.name}</p>`;
  }

  private async openBcsFile() {
    // Open a file.
    const blob = await fileOpen({
      description: 'BCS files',
      extensions: ['.bcs'],
    });

    const oldFile = this.file;
    this.file = blob;
    this.requestUpdate('file', oldFile);

    console.log('blob', blob);
  }
}

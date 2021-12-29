import { LitElement, css, html } from 'lit';
import { fileOpen, supported } from 'browser-fs-access';

export class AppComponent extends LitElement {
  static properties = {
    name: {},
  };

  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    this.name = 'World';

    if (supported) {
      console.log('Using the File System Access API.');
    } else {
      console.log('Using the fallback implementation.');
    }
  }

  // Render the UI as a function of component state
  render() {
    return html`<p>Hello, ${this.name}!</p>
      <p><a href="#" @click="${this.openBcsFile}">Open BCS</a></p>`;
  }

  async openBcsFile() {
    // Open a file.
    const blob = await fileOpen({
      description: 'BCS files',
      extensions: ['.bcs'],
    });

    console.log('blob', blob);
  }
}

customElements.define('app-component', AppComponent);

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class LazyElement extends PolymerElement {
  static get template () {
    return html`
      <p>You like pie.</p>
    `;
  }
}

customElements.define('lazy-element', LazyElement);

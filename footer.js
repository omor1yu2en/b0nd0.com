class B0nd0Footer extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          text-align: center;
          padding: 1.5rem 0 1rem;
          font-family: 'Inter', -apple-system, sans-serif;
          font-size: 11px;
          font-weight: 200;
          letter-spacing: 0.05em;
          opacity: 0.35;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        a:hover {
          opacity: 0.6;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
      </style>
      <span>Powered by <a href="https://b0nd0.com" target="_blank" rel="noopener noreferrer">b0nd0.com</a></span>
    `;
  }
}
customElements.define('b0nd0-footer', B0nd0Footer);

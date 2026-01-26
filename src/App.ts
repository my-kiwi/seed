import './Counter';
import './GithubLink';

class App extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <header>
        <h2>This is a simple vanilla TS seed</h2>
      </header>
      <main>
        <counter-button/>
      </main>
      <footer>
        <github-link/>
      </footer>
      `;
  }
}

customElements.define('my-app', App);
class CounterButton extends HTMLElement {
  private count = 0;
  private button: HTMLButtonElement;

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    // Create button
    this.button = document.createElement('button');
    this.button.textContent = `Count: ${this.count}`;

    // Optional styling
    const style = document.createElement('style');
    style.textContent = `
      button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
      }
    `;

    // Add to shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(this.button);

    // Handle click
    this.button.addEventListener('click', () => {
      this.count++;
      this.button.textContent = `Count: ${this.count}`;
    });
  }
}

customElements.define('counter-button', CounterButton);

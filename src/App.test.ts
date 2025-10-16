import { describe, it, expect } from 'vitest';
import './App';

describe('App', () => {
  it('renders hello world', () => {
    const app = document.createElement('my-app');
    document.body.appendChild(app);

    // Wait for shadowRoot to be available
    expect(app.shadowRoot?.innerHTML).toContain('This is a simple vanilla TS seed');

    // Cleanup
    document.body.removeChild(app);
  });
});

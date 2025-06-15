import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

test('renderiza el texto Vite + React', () => {
  render(<App />);
  expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
});

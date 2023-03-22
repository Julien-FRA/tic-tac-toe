import { render, screen } from '@testing-library/react';
import App from './App';

test('renders square', () => {
  render(<App />);
  const squareElement = screen.getByText(/x/i);
  expect(squareElement).toBeInTheDocument();
});
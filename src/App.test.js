import { render, screen } from '@testing-library/react';
import App from './App';

test('renders square', () => {
  render(<App />);
  const squareElement = screen.getByText(/1/i);
  expect(squareElement).toBeInTheDocument();
});
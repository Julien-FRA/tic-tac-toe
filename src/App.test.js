import { render, screen } from '@testing-library/react';
import Board from './App';

describe('Board component', () => {
  it('should render without crashing', () => {
    render(<Board />);
  });
});
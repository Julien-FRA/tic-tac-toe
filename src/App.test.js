import { render } from '@testing-library/react';
import Board from './App';

describe('Board component', () => {
  it('should render three "board-row" divs', () => {
    const { getAllByClassName } = render(<Board />);
    const boardRows = getAllByClassName('board-row');
    expect(boardRows).toHaveLength(3);
  });
});
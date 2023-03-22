import { render } from '@testing-library/react';
import Board from './App';

describe('Board component', () => {
  it('should render three "board-row" divs', () => {
    const { queryAllByClassName } = render(<Board />);
    const boardRows = queryAllByClassName('board-row');
    expect(boardRows).toHaveLength(3);
  });
});
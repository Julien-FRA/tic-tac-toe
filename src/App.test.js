import { render } from '@testing-library/react';
import Board from './App';

describe('Board component', () => {
  it('should render three "board-row" divs', () => {
    const { getAllByTestId } = render(<Board />);
    const boardRows = getAllByTestId('board-row');
    expect(boardRows).toHaveLength(3);
  });
});
import Example from '@components/Example';
import '@testing-library/jest-dom/extend-expect';
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';

describe('Example', () => {
  afterEach(cleanup);
  it('should equal to 0', async () => {
    await act(async () => render(<Example color="red" />));
    expect(screen.getByTestId('number')).toHaveTextContent('0');
  });
  it('increments counter', async () => {
    await act(async () => render(<Example color="red" />));
    fireEvent.click(screen.getByTestId('addButton'));
    expect(screen.getByTestId('number')).toHaveTextContent('1');
  });
  it('decrements counter', async () => {
    await act(async () => render(<Example color="red" />));
    fireEvent.click(screen.getByTestId('removeButton'));
    expect(screen.getByTestId('number')).toHaveTextContent('-1');
  });
});

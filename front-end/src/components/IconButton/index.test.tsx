import { IconButton } from '@components/IconButton';
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
  it('should equal to $', async () => {
    await act(async () =>
      render(
        <IconButton
          data-testid="button"
          aria-label="menu button"
          onClick={() => alert('function performed')}
        >
          $
        </IconButton>,
      ),
    );
    expect(screen.getByTestId('button')).toHaveTextContent('$');
  });
  it('perform function', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    const { getByTestId } = render(
      <IconButton
        data-testid="button"
        aria-label="menu button"
        onClick={() => alert('function performed')}
      >
        $
      </IconButton>,
    );
    fireEvent.click(getByTestId('button'));
    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});

import Home from '@pages/index';
import { act, render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', async () => {
    await act(async () => render(<Home />));

    const heading = screen.getByRole('heading', {
      name: /Next Default Project/i,
    });

    expect(heading).toBeInTheDocument();
  });
  it('teste debug', async () => {
    const { debug } = render(<Home />);
    debug();
  });
});

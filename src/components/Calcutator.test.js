import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from './Calculator';

describe('This test is for the component Calculator', () => {
  test('Renders', () => {
    const calculator = render(<Calculator />);

    expect(calculator).toMatchSnapshot();
  });

  test('Test if Calculator Page Shows by checking an Html element', () => {
    render(<Calculator />);

    expect(
      screen.getByRole('heading', { name: /Lets do some math!/i }),
    ).toBeInTheDocument();
  });
});

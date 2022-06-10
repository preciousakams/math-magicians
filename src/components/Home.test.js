import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('render Home page', () => {
  test('render p element content', () => {
    render(<Home />);
    const p = screen.findAllByText('Lorem ipsum', { exact: false });
    expect(p).toMatchSnapshot();
  });
  test('render h2 elemnt content', () => {
    const h2 = screen.findByText('Welcome');
    expect(h2).toMatchSnapshot();
  });
});

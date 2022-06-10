import React from 'react';
import { render, screen } from '@testing-library/react';
import Quotes from './Quotes';

describe('render Quotes page', () => {
  test('render p element content', () => {
    render(<Quotes />);
    const p = screen.findAllByText('Mathematics');
    expect(p).toMatchSnapshot();
  });
});

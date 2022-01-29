import React from 'react';
import { render, screen } from '@testing-library/react';
import { LocalBrews } from './LocalBrews';

test('renders learn react link', () => {
  render(<LocalBrews />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

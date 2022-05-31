// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Spinner from './Spinner';

test('Sanity check', () => {
  expect(99 * 99).toEqual(9801);
});

test('Renders without errors when passed true as a prop', () => {
  render(<Spinner on={true} />);
});

test('Renders on screen when passed true as a prop', () => {
  render(<Spinner on={true} />);

  const spinnerMessage = screen.queryByText(/Please wait/i);

  expect(spinnerMessage).toBeInTheDocument();
});

test('Does not render on screen when passed false as a prop', () => {
  render(<Spinner on={false} />);

  const spinnerMessage = screen.queryByText(/Please wait/i);

  expect(spinnerMessage).not.toBeInTheDocument();
});

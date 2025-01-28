import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders File Manager heading', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/File Manager/i);
  expect(headingElement).toBeInTheDocument();
});
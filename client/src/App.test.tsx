import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page with navBar', () => {
  render(<App />);
  const titleElement = screen.getByText(/Lost in Time/i);
  expect(titleElement).toBeInTheDocument();
});

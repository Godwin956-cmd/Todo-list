import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavBar from './App.jsx';

test('renders learn react link', () => {
  render(<NavBar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeDefined();
});

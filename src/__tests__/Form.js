import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import App from '../components/App/App';

afterEach(cleanup);
jest.mock('react-ga');

test('renders questions', () => {
  const { container } = render(<App />);

  expect(container.querySelectorAll('.form p').length).toBeGreaterThan(3);
});

test('renders answers but none is checked', () => {
  const { container } = render(<App />);

  expect(container.querySelectorAll('.form button').length).toBeGreaterThan(10);
  expect(container.querySelectorAll('.form button.checked')).toHaveLength(0);
});

test('selects the answer by clicking on it', () => {
  const { getByText } = render(<App />);
  const hot = getByText('Hot');
  const salty = getByText('Salty');
  const sweet = getByText('Sweet');

  fireEvent.click(hot);
  fireEvent.click(salty);

  expect(hot.className).toBe('checked');
  expect(salty.className).toBe('checked');
  expect(sweet.className).toBe('');
});

test('deselects the selected answer by clicking on it', () => {
  const { getByText } = render(<App />);
  const hot = getByText('Hot');
  const salty = getByText('Salty');

  fireEvent.click(hot);
  fireEvent.click(salty);
  fireEvent.click(hot);
  fireEvent.click(salty);

  expect(hot.className).toBe('');
  expect(salty.className).toBe('');
});

import React from 'react';
import { render, fireEvent, wait, cleanup } from 'react-testing-library';
import App from '../components/App/App';

afterEach(cleanup);
jest.mock('react-ga');

test('renders Meals but none is showed', async () => {
  const { container } = render(<App />);

  await wait(() => {
    expect(container.querySelectorAll('.meals .collapse').length).toBeGreaterThan(10);
    expect(container.querySelectorAll('.meals .collapse.show')).toHaveLength(0);
  });
});

test('shows meals by clicking one answer', async () => {
  const { getByText, container } = render(<App />);
  const hot = getByText('Hot');

  fireEvent.click(hot);

  await wait(() => {
    expect(container.querySelectorAll('.meals .collapse.show').length).toBeGreaterThan(5);
  });
});

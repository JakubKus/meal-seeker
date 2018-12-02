import React from 'react';
import { render, fireEvent, wait, cleanup } from 'react-testing-library';
import App from '../components/App/App';

afterEach(cleanup);
jest.mock('react-ga');

test('renders without errors', () => {
  const { container } = render(<App />);

  expect(container).toBeTruthy();
});

test('resets Form and thus Meals by clicking on page title', async () => {
  const { getByText, container } = render(<App />);
  const answerButton = getByText('Less than 10');
  const pageTitle = getByText('Meal Seeker');

  fireEvent.click(answerButton);
  fireEvent.click(pageTitle);

  await wait(() => {
    expect(container.querySelectorAll('.form button.checked')).toHaveLength(0);
    expect(container.querySelectorAll('.meals .collapse.show')).toHaveLength(0);
  });
});

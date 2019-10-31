import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';

afterEach(rtl.cleanup);

test('App renders without crashing', () => {
  rtl.render(<App />);
});

test('Ball count increases on click', () => {
  const wrapper = rtl.render(<App />);

  expect(wrapper.getByText(/Balls: 0/));

  rtl.fireEvent.click(wrapper.getByText(/^Ball$/));

  expect(wrapper.getByText(/Balls: 1/));
});



test('Strike count increases on click', () => {
  const wrapper = rtl.render(<App />);

  expect(wrapper.getByText(/Strikes: 0/));

  rtl.fireEvent.click(wrapper.getByText(/^Strike$/));

  expect(wrapper.getByText(/Strikes: 1/));
});


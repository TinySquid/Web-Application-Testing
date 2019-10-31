import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';

// afterEach(rtl.cleanup);

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

test('Fouls increase strikes on click', () => {
  const wrapper = rtl.render(<App />);

  expect(wrapper.getByText(/Strikes: 0/));

  rtl.fireEvent.click(wrapper.getByText(/^Foul$/));
  expect(wrapper.getByText(/Strikes: 1/));
});

test('Strikes reset to 0 when a player reaches 3 strikes', () => {
  const wrapper = rtl.render(<App />);

  expect(wrapper.getByText(/Strikes: 0/));

  rtl.fireEvent.click(wrapper.getByText(/^Strike$/));
  expect(wrapper.getByText(/Strikes: 1/));

  rtl.fireEvent.click(wrapper.getByText(/^Strike$/));
  expect(wrapper.getByText(/Strikes: 2/));

  rtl.fireEvent.click(wrapper.getByText(/^Strike$/));
  expect(wrapper.getByText(/Strikes: 0/));
});

test('Balls reset to 0 when a player reaches 4 balls', () => {
  const wrapper = rtl.render(<App />);

  expect(wrapper.getByText(/Balls: 0/));

  rtl.fireEvent.click(wrapper.getByText(/^Ball$/));
  rtl.fireEvent.click(wrapper.getByText(/^Ball$/));
  rtl.fireEvent.click(wrapper.getByText(/^Ball$/));
  rtl.fireEvent.click(wrapper.getByText(/^Ball$/));

  expect(wrapper.getByText(/Balls: 0/));
});

test('Hit resets the display', () => {
  const wrapper = rtl.render(<App />);

  expect(wrapper.getByText(/Strikes: 0/));
  expect(wrapper.getByText(/Balls: 0/));

  rtl.fireEvent.click(wrapper.getByText(/^Strike$/));
  rtl.fireEvent.click(wrapper.getByText(/^Ball$/));

  expect(wrapper.getByText(/Strikes: 1/));
  expect(wrapper.getByText(/Balls: 1/));

  rtl.fireEvent.click(wrapper.getByText(/Hit/));

  expect(wrapper.getByText(/Strikes: 0/));
  expect(wrapper.getByText(/Balls: 0/));
});


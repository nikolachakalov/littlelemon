import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import BookingForm from './BookingForm.js'

test('Checks if Submit button is disabled on first render', () => {
  render(<BookingForm />);
  const btn = screen.getByTestId("submit-button");
  fireEvent.click(btn);
  expect(btn).toBeDisabled();
});

test('Booking form is loading the Reserve a table Heading', () => {
  render(<BookingForm />);
  const linkElement = screen.getByText("Reserve a table");
  expect(linkElement).toBeInTheDocument();
})



describe('Date Component Test', () => {

  test('No time is loaded while date value is empty', () => {
    render(<BookingForm />);
    const select = screen.getByTestId("time-select");
    fireEvent.click(select);
    expect(select).toBeDisabled()
  })});

test('Select date and check if value is updated', () => {
  render(<BookingForm />);
  const date = screen.getByTestId('date-select');
  act(() => {date.focus();
  fireEvent.mouseDown(date);
  fireEvent.change(date, {target: {value:'12/10/2025'}});
  expect(date.getAttribute('value')).toEqual('12/10/2025');
})});

test('Check if availableTimes are shown in the times component after date selection', async () => {
  render(<BookingForm />);
  const date = screen.getByTestId('date-select');
  await act(async () => {
    date.focus();
    fireEvent.change(date, { target: { value: '12/10/2025' } });
  });

  expect(date.getAttribute('value')).toEqual('12/10/2025');
  const time = screen.getByTestId('time-select');
  act(() => {
    fireEvent.click(time);
  });
  const timeOptions = screen.getAllByRole('option');
  expect(timeOptions.length).toBeGreaterThan(1);
  expect(timeOptions[1].textContent).toMatch(/^\d{1,2}:\d{2}$/);

});

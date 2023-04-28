import { screen } from "@testing-library/react";

// Card Selectors
export const cardNumberSelector = (value: string) => screen.getByText(value);
export const cardHolderNameSelector = (value: string) =>
  screen.getByText(value);
export const cardMonthYearSelector = (value: string) => screen.getByText(value);
export const cardCvcSelector = (value: string) => screen.getByText(value);

// Form Selectors
export const holderNameInputSelector = (value: string) =>
  screen.getByLabelText(value);
export const numberInputSelector = (value: string) =>
  screen.getByLabelText(value);
export const expiryMonthInputSelector = (value: string) =>
  screen.getByLabelText(value);
export const expiryYearInputSelector = (value: string) =>
  screen.getByLabelText(value);
export const cvcInputSelector = (value: string) => screen.getByLabelText(value);

// Button Selector
export const buttonSelector = (value: string) =>
  screen.getByRole("button", { name: value });

// Form Errors
export const holderNameErrorSelector = (value: string) =>
  screen.getByText(value);
export const numberErrorSelector = (value: string) => screen.getByText(value);
export const expiryYearMonthSelector = (value: string) =>
  screen.getAllByText(value);
export const cvcErrorSelector = (value: string) => screen.getByText(value);

// Thank You
export const thankYouTitleSelector = (value: string) => screen.getByText(value);
export const thankYouMessageSelector = (value: string) =>
  screen.getByText(value);

// Overlay
export const overlaySelector = (value: string) => screen.getByTestId(value);

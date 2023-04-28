import HomePage from "../HomePage";
import { renderWithProviders } from "../../../utils/test-utils";
import { BrowserRouter } from "react-router-dom";
import {
  buttonSelector,
  cardCvcSelector,
  cardHolderNameSelector,
  cardMonthYearSelector,
  cardNumberSelector,
  cvcErrorSelector,
  cvcInputSelector,
  expiryMonthInputSelector,
  expiryYearInputSelector,
  expiryYearMonthSelector,
  holderNameErrorSelector,
  holderNameInputSelector,
  numberErrorSelector,
  numberInputSelector,
  overlaySelector,
} from "../../../utils/testsSelectors";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("HomePage", () => {
  test("should render all elements", () => {
    renderWithProviders(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    // Card
    expect(cardNumberSelector("0000 0000 0000 0000")).toBeInTheDocument();
    expect(cardHolderNameSelector("George Brown")).toBeInTheDocument();
    expect(cardMonthYearSelector("00/00")).toBeInTheDocument();
    expect(cardCvcSelector("000")).toBeInTheDocument();

    // Form
    expect(
      holderNameInputSelector("cardholder name input")
    ).toBeInTheDocument();
    expect(numberInputSelector("card number input")).toBeInTheDocument();
    expect(expiryMonthInputSelector("expiry month input")).toBeInTheDocument();
    expect(expiryYearInputSelector("expiry year input")).toBeInTheDocument();
    expect(cvcInputSelector("cvc number input")).toBeInTheDocument();
    expect(buttonSelector("Confirm")).toBeInTheDocument();

    // Overlay
    expect(overlaySelector("overlay")).toBeInTheDocument();
  });

  test("should allow user to input data into the form and display the data on the card", async () => {
    renderWithProviders(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    // User enters cardholder name
    const formNameInput = holderNameInputSelector("cardholder name input");
    await userEvent.type(formNameInput, "Ben");
    expect(cardHolderNameSelector("Ben")).toBeInTheDocument();

    // User enters card number
    const formNumberInput = numberInputSelector("card number input");
    await userEvent.type(formNumberInput, "1234123412341234");
    expect(cardNumberSelector("1234 1234 1234 1234")).toBeInTheDocument();

    // User enters expiry date
    const formExpiryMonthInput = expiryMonthInputSelector("expiry month input");
    const formExpiryYearInput = expiryYearInputSelector("expiry year input");
    await userEvent.type(formExpiryMonthInput, "01");
    await userEvent.type(formExpiryYearInput, "23");
    expect(cardMonthYearSelector("01/23")).toBeInTheDocument();

    // User enters CVC number
    const formCvcInput = cvcInputSelector("cvc number input");
    await userEvent.type(formCvcInput, "555");
    expect(cardCvcSelector("555")).toBeInTheDocument();

    // User submits the form
    await act(async () => await userEvent.click(buttonSelector("Confirm")));
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/thankyou");
  });

  test("should throw form errors when form submitted without filling in the form", async () => {
    renderWithProviders(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    // User submits the form without data
    const confirmButton = buttonSelector("Confirm");
    await act(async () => await userEvent.click(confirmButton));

    expect(
      holderNameErrorSelector("* Enter cardholder name")
    ).toBeInTheDocument();
    expect(
      numberErrorSelector("* Card number is to short (16 digits)")
    ).toBeInTheDocument();
    expect(expiryYearMonthSelector("* 2 digits").length).toBe(2);
    expect(cvcErrorSelector("* 3 digits")).toBeInTheDocument();
  });
});

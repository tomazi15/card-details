import ThankYouPage from "../ThankYouPage";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../../utils/test-utils";
import {
  buttonSelector,
  cardCvcSelector,
  cardHolderNameSelector,
  cardMonthYearSelector,
  cardNumberSelector,
  thankYouMessageSelector,
  thankYouTitleSelector,
} from "../../../utils/testsSelectors";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("ThankYouPage", () => {
  test("should render page elements", () => {
    // Arrange
    renderWithProviders(
      <BrowserRouter>
        <ThankYouPage />
      </BrowserRouter>
    );

    // Assert
    expect(cardNumberSelector("0000 0000 0000 0000")).toBeInTheDocument();
    expect(cardHolderNameSelector("George Brown")).toBeInTheDocument();
    expect(cardMonthYearSelector("00/00")).toBeInTheDocument();
    expect(cardCvcSelector("000")).toBeInTheDocument();

    expect(thankYouTitleSelector("Thank You!")).toBeInTheDocument();
    expect(
      thankYouMessageSelector("We've added your details")
    ).toBeInTheDocument();
    expect(buttonSelector("Continue")).toBeInTheDocument();
  });

  test("should call useNavigate Hook with the correct path", () => {
    // Arrange
    renderWithProviders(
      <BrowserRouter>
        <ThankYouPage />
      </BrowserRouter>
    );

    // Act
    userEvent.click(buttonSelector("Continue"));

    // Assert
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });
});

import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../utils/test-utils";
import App from "./App";
import {
  holderNameInputSelector,
  thankYouTitleSelector,
} from "../utils/testsSelectors";

describe("App", () => {
  test("should display HomePage on `/` route", () => {
    const thankYouPage = "/";

    renderWithProviders(
      <MemoryRouter initialEntries={[thankYouPage]}>
        <App />
      </MemoryRouter>
    );

    expect(
      holderNameInputSelector("cardholder name input")
    ).toBeInTheDocument();
  });

  test("should display ThankYouPage on `/thankyou` route", () => {
    const thankYouPage = "/thankyou";

    renderWithProviders(
      <MemoryRouter initialEntries={[thankYouPage]}>
        <App />
      </MemoryRouter>
    );

    expect(thankYouTitleSelector("Thank You!")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import PageNotFound from "./PageNotFound";

describe("PageNotFound Component", () => {
  test("should render heading and paragraph", () => {
    render(<PageNotFound />);

    const title = screen.getByText("404");
    const paragraph = screen.getByText("Page Not Found");

    expect(title).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
});

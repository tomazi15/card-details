import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Button Component", () => {
  const mockOnClick = jest.fn();

  const mockButtonProps = {
    name: "foo",
    onClick: mockOnClick,
  };

  test("should render button component and its display name", () => {
    //Arrange
    render(<Button {...mockButtonProps} />);

    // Act
    const button = screen.getByRole("button", { name: /foo/i });

    // Assert
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe("foo");
  });

  test("should trigger onClick when clicked", () => {
    //Arrange
    render(<Button {...mockButtonProps} />);

    // Act
    const button = screen.getByRole("button", { name: /foo/i });
    userEvent.click(button);

    // Assert
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

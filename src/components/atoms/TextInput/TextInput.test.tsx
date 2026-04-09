import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { TextInput } from "./TextInput";

describe("TextInput", () => {
  it("should render the label", () => {
    render(<TextInput label="First Name" />);

    const label = screen.getByText("First Name");

    expect(label).toBeInTheDocument();
  });

  it("should render the placeholder", () => {
    render(<TextInput placeholder="Anthony" />);

    const input = screen.getByPlaceholderText("Anthony");

    expect(input).toBeInTheDocument();
  });

  it("should render the value", () => {
    render(<TextInput value="Pasto" onChange={() => {}} />);

    const input = screen.getByDisplayValue("Pasto");

    expect(input).toBeInTheDocument();
  });

  it("should be disabled", () => {
    render(<TextInput disabled />);

    const input = screen.getByRole("textbox");

    expect(input).toBeDisabled();
  });

  it("should call onChange when typing", () => {
    const handleChange = jest.fn();
    render(<TextInput onChange={handleChange} />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "test" } });

    expect(handleChange).toHaveBeenCalled();
  });
});

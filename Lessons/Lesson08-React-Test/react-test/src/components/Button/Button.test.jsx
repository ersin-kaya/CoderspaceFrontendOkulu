import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

test("Is there a button?", () => {
  render(<Button id="btn" text="test" />);
  expect(screen.getByTestId("btn")).toBeInTheDocument();
});

test("Is the button text correct?", () => {
  render(<Button text="Hi" />);
  expect(screen.getByText("Hi")).toBeInTheDocument();
});

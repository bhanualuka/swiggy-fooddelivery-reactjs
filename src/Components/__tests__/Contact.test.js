import { getByRole, getByText, render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// button
test("Should component has renderd", () => {
  render(<Contact />);

  const button = screen.getByRole("button");
  console.log(button);

  // Assertion

  expect(button).toBeInTheDocument();
});

// heading
test("Should component has loaded heading", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  // Assertion

  expect(heading).toBeInTheDocument();
});

// input(textbox)
test("Should component has input renderd", () => {
  render(<Contact />);

  const inputText = screen.getAllByRole("textbox");

  console.log(inputText);

  // Assertion

  expect(inputText.length).toBe(2);
});

//  name of input
test("Should  comonent has input name renderd", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("name");

  expect(inputName).toBeInTheDocument();
});

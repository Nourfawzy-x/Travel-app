import React from "react";
import { render } from "@testing-library/react-native";
import Button from ".";

describe("Button Component", () => {
  it("should render the button with the correct label", () => {
    const { getByText } = render(<Button label="Click Me" />);
    expect(getByText("Click Me")).toBeTruthy();
  });
});

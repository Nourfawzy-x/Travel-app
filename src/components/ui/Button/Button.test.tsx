import React from "react";
import Button from ".";
import { render } from "@testing-library/react";
import { describe } from "vitest";

describe("<Button />", () => {
  // ----------------------------------------------------------------------------------------------------
  // MARK: Basic Render
  // ----------------------------------------------------------------------------------------------------
  it("it should render button without crashing", () => {
    render(
      <Button
        label="open image"
        onClick={() => {
          alert("Image clicked");
        }}
      />
    );
  });
});

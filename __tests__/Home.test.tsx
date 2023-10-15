import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "@/app/(root)/page";

describe("Home Page", () => {
  it("renders an h1 element with specific text content", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Scale design & dev operations with Avocode Enterprise/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

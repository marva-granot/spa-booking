import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Home from "./page";

afterEach(cleanup);

describe("Home page", () => {
  it("renders the studio heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "סטודיו לעיסוי" }),
    ).toBeDefined();
  });
});

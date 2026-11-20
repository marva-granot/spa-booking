import { describe, expect, it } from "vitest";
import { contrastRatio, relativeLuminance } from "./contrast";

describe("contrastRatio", () => {
  it("is 21 for black on white", () => {
    expect(contrastRatio("#000000", "#ffffff")).toBeCloseTo(21, 5);
  });

  it("is 1 for the same color", () => {
    expect(contrastRatio("#4a6741", "#4a6741")).toBe(1);
  });

  it("is symmetric", () => {
    expect(contrastRatio("#3b2a20", "#fbf7f2")).toBe(
      contrastRatio("#fbf7f2", "#3b2a20"),
    );
  });

  it("accepts uppercase hex", () => {
    expect(contrastRatio("#FFFFFF", "#ffffff")).toBe(1);
  });

  it("rejects malformed colors", () => {
    expect(() => relativeLuminance("#fff")).toThrow();
    expect(() => relativeLuminance("red")).toThrow();
  });
});

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { contrastRatio } from "@/lib/contrast";

// Reads the real tokens from globals.css so palette edits are checked automatically.
const css = readFileSync(join(__dirname, "globals.css"), "utf8");
const tokens = Object.fromEntries(
  [...css.matchAll(/--color-([a-z-]+):\s*(#[0-9a-f]{6})\s*;/gi)].map(
    ([, name, hex]) => [name, hex],
  ),
);

// Approved text/background pairs (docs/architecture.md, "Design tokens").
const pairs: Array<[text: string, background: string]> = [
  ["ink", "cream"],
  ["ink", "surface"],
  ["ink", "blush"],
  ["ink", "sage-light"],
  ["ink-muted", "cream"],
  ["ink-muted", "surface"],
  ["ink-muted", "blush"],
  ["ink-muted", "sage-light"],
  ["sage", "cream"],
  ["sage", "surface"],
  ["bark", "cream"],
  ["bark", "surface"],
  ["rose", "cream"],
  ["rose", "surface"],
  ["surface", "sage"],
  ["surface", "sage-dark"],
  ["surface", "bark"],
];

describe("theme tokens", () => {
  it("defines every token used in the contrast pairs", () => {
    for (const name of new Set(pairs.flat())) {
      expect(tokens[name], `--color-${name}`).toMatch(/^#[0-9a-f]{6}$/i);
    }
  });

  it.each(pairs)("%s on %s meets WCAG AA (4.5:1)", (text, background) => {
    expect(
      contrastRatio(tokens[text], tokens[background]),
    ).toBeGreaterThanOrEqual(4.5);
  });
});

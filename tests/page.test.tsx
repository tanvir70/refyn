import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "../src/app/page";

describe("Task 3: Refyn Venture Bold Kinetic Studio Page & Anti-Slop Compliance", () => {
  it("renders all four studio chapters, tagline, founder attribution, and interactive specimens", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        name: /Software that moves business forward\./i,
      })
    ).toBeTruthy();

    expect(screen.getAllByText(/Tanvir Anjum Refat/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Omnichannel Serial & Chamber Gateway/i)).toBeTruthy();
    expect(screen.getByText(/Bilingual Literary & Publishing Workspace/i)).toBeTruthy();
    expect(
      screen.getByText(/Agrochemical POS, FEFO Inventory & Self-Healing Credit Ledger/i)
    ).toBeTruthy();
  });

  it("enforces DOM hygiene: no emoji characters and no hacker-template double-slashes", () => {
    const { container } = render(<HomePage />);

    const text = container.textContent ?? "";
    const emojiRegex = /[\p{Extended_Pictographic}]/u;
    expect(emojiRegex.test(text)).toBe(false);
    expect(text.includes("//")).toBe(false);
  });

  it("renders downloadable SVG brand asset links and color token swatches in the Colophon", () => {
    render(<HomePage />);

    expect(screen.getByText("#0F172A")).toBeTruthy();
    expect(screen.getByText("#64748B")).toBeTruthy();
    expect(screen.getByText("#E5E7EB")).toBeTruthy();
    expect(screen.getByText("#F7F7F4")).toBeTruthy();

    const monogramLink = screen.getByRole("link", {
      name: /Download R Monogram SVG/i,
    });
    expect(monogramLink.getAttribute("href")).toBe("/brand/refyn-monogram.svg");
  });
});

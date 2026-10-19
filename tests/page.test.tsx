import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "../src/app/page";

describe("Task 3: Refyn Venture Bold Kinetic Studio Page & Anti-Slop Compliance", () => {
  it("renders all studio chapters, tagline, founder attribution, and interactive specimens", () => {
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

  it("renders the four Architectural Principles and clean studio footer without internal brand swatch clutter", () => {
    render(<HomePage />);

    expect(screen.getByText(/Domain Invariants Over CRUD/i)).toBeTruthy();
    expect(screen.getByText(/Zero-Friction Edge Surfaces/i)).toBeTruthy();
    expect(screen.getByText(/Bilingual Cultural Precision/i)).toBeTruthy();
    expect(screen.getByText(/Auditability by Default/i)).toBeTruthy();
    expect(screen.queryByText(/CANONICAL SPECIMEN BOARD/i)).toBeNull();
  });
});

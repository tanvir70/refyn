import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrandLogo } from "../src/components/BrandLogo";
import { DrPageSpecimen } from "../src/components/specimens/DrPageSpecimen";
import { PristhaSpecimen } from "../src/components/specimens/PristhaSpecimen";
import { AgroPosSpecimen } from "../src/components/specimens/AgroPosSpecimen";

describe("Task 2: BrandLogo & Interactive Venture Specimens", () => {
  it("renders BrandLogo with REFYN and VENTURE lockup and custom SVG monogram", () => {
    const { container } = render(<BrandLogo showTagline />);
    expect(screen.getByText("REFYN")).toBeTruthy();
    expect(screen.getByText("VENTURE")).toBeTruthy();
    expect(screen.getByText("Software that moves business forward.")).toBeTruthy();
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("interactively advances Dr.Page serial and toggles +15m OT delay while clamping at #18", () => {
    render(<DrPageSpecimen />);
    expect(screen.getByText("#11")).toBeTruthy();
    expect(screen.getByText("#18")).toBeTruthy();

    const advanceBtn = screen.getByRole("button", { name: /Advance Serial/i });
    fireEvent.click(advanceBtn);
    expect(screen.getByText("#12")).toBeTruthy();

    const delayBtn = screen.getByRole("button", { name: /\+15m OT Delay/i });
    fireEvent.click(delayBtn);
    expect(screen.getByText(/OT OVERRUN BROADCAST/i)).toBeTruthy();
  });

  it("switches Pristha across Reader, Writer Studio, and Publisher Desk workspaces", () => {
    render(<PristhaSpecimen />);
    expect(screen.getByText(/নিস্তব্ধতার শহরে/i)).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: /Writer Studio/i }));
    expect(screen.getByText(/Manuscript Architecture/i)).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: /Publisher Desk/i }));
    expect(screen.getByText(/Imprint Submission Queue/i)).toBeTruthy();
  });

  it("masks Rajib Enterprise POS wholesale cost until Owner PIN (1234) is unlocked and toggles Dokan/Godown split", () => {
    render(<AgroPosSpecimen />);
    expect(screen.queryByText(/BDT 13,600.00/)).toBeNull();

    const pinBtn = screen.getByRole("button", { name: /Owner PIN/i });
    fireEvent.click(pinBtn);
    expect(screen.getByText(/BDT 13,600.00/)).toBeTruthy();

    const splitBtn = screen.getByRole("button", { name: /Split Dispatch/i });
    fireEvent.click(splitBtn);
    expect(screen.getByText(/DIRECT_WHOLESALE_DISPATCH/)).toBeTruthy();
  });
});

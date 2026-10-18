import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import {
  BRAND_TOKENS,
  MONOGRAPH_WORKS,
  calculateDrPageQueueState,
  calculatePosInvoiceState,
} from "../src/data/monograph";

describe("Task 1: Refyn Venture Brand Assets & Monograph Domain Layer", () => {
  it("provides valid standalone SVG brand assets for monogram, light lockup, dark lockup, and app icon", () => {
    const svgPaths = [
      "public/brand/refyn-monogram.svg",
      "public/brand/refyn-lockup-light.svg",
      "public/brand/refyn-lockup-dark.svg",
      "src/app/icon.svg",
    ];

    for (const relPath of svgPaths) {
      const fullPath = path.resolve(process.cwd(), relPath);
      expect(fs.existsSync(fullPath), `${relPath} must exist`).toBe(true);
      const content = fs.readFileSync(fullPath, "utf-8");
      expect(content).toContain("<svg");
      expect(content).toContain("viewBox=");
      expect(content).toContain("</svg>");
    }

    const lightLockup = fs.readFileSync(
      path.resolve(process.cwd(), "public/brand/refyn-lockup-light.svg"),
      "utf-8"
    );
    expect(lightLockup).toContain("REFYN");
    expect(lightLockup).toContain("VENTURE");
  });

  it("defines the three real portfolio works (Dr.Page, Pristha, Rajib Enterprise POS) with zero emojis", () => {
    expect(MONOGRAPH_WORKS).toHaveLength(3);
    expect(MONOGRAPH_WORKS.map((w) => w.id)).toEqual([
      "dr-page",
      "pristha",
      "agro-pos",
    ]);

    const emojiRegex = /[\p{Extended_Pictographic}]/u;
    for (const work of MONOGRAPH_WORKS) {
      expect(emojiRegex.test(work.title)).toBe(false);
      expect(emojiRegex.test(work.summary)).toBe(false);
    }
  });

  it("clamps Dr.Page queue progression when servingSerial reaches patientSerial (#18)", () => {
    const waitingState = calculateDrPageQueueState(11, 18, 0);
    expect(waitingState.patientsAhead).toBe(7);
    expect(waitingState.estimatedMinutes).toBe(49);
    expect(waitingState.isServingPatient).toBe(false);

    const delayedState = calculateDrPageQueueState(11, 18, 15);
    expect(delayedState.estimatedMinutes).toBe(64);

    const activeState = calculateDrPageQueueState(20, 18, 15);
    expect(activeState.servingSerial).toBe(18);
    expect(activeState.patientsAhead).toBe(0);
    expect(activeState.estimatedMinutes).toBe(0);
    expect(activeState.isServingPatient).toBe(true);
  });

  it("calculates Agrochemical POS split-stock allocation and masks cost when Owner PIN is locked", () => {
    const lockedSingle = calculatePosInvoiceState(false, false);
    expect(lockedSingle.totalBottles).toBe(20);
    expect(lockedSingle.dokanUnits).toBe(20);
    expect(lockedSingle.godownUnits).toBe(0);
    expect(lockedSingle.dispatchAuditLog).toBe("COUNTER_DOKAN_ISSUE");
    expect(lockedSingle.wholesaleCostDisplay).toBe("••••••");
    expect(lockedSingle.grossMarginDisplay).toBe("••••••");

    const unlockedSplit = calculatePosInvoiceState(true, true);
    expect(unlockedSplit.totalBottles).toBe(20);
    expect(unlockedSplit.dokanUnits).toBe(12);
    expect(unlockedSplit.godownUnits).toBe(8);
    expect(unlockedSplit.dispatchAuditLog).toBe("DIRECT_WHOLESALE_DISPATCH");
    expect(unlockedSplit.wholesaleCostDisplay).toContain("BDT");
    expect(unlockedSplit.grossMarginDisplay).toContain("%");
  });

  it("exports the canonical Refyn Venture color token swatches from the brand handoff", () => {
    const hexes = BRAND_TOKENS.map((t) => t.hex);
    expect(hexes).toContain("#0F172A");
    expect(hexes).toContain("#64748B");
    expect(hexes).toContain("#E5E7EB");
    expect(hexes).toContain("#F7F7F4");
  });
});

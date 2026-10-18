# Refyn Venture Flagship Monograph Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the award-winning Swiss Modernism 2.0 flagship landing page and interactive venture showcase for Refyn Venture (`REFYN VENTURE`), complete with custom SVG brand assets and live playable specimens for *Dr.Page*, *Pristha*, and *Rajib Enterprise Agrochemical POS*.

**Architecture:** A Next.js (App Router, TypeScript, Tailwind CSS) single-page architectural monograph structured on an exposed `1px` 12-column Swiss grid (3-column sticky spine + 9-column editorial canvas). Each project is paired with a self-contained, interactive client specimen component demonstrating real domain invariants.

**Tech Stack:** Next.js 15+, React 19, TypeScript, Tailwind CSS v4, Vitest (unit/domain verification).

**Spec:** `docs/superpowers/specs/2026-10-18-refyn-venture-landing-design.md`

## Global Constraints

- Brand name: `Refyn Venture` (`REFYN` in General Sans SemiBold tracking `+0.05em`, `VENTURE` in General Sans Medium tracking `+0.30em`)
- Tagline: `Software that moves business forward.`
- Color tokens: `--color-charcoal: #0F172A`, `--color-near-black: #111318`, `--color-slate: #64748B`, `--color-mist: #E5E7EB`, `--color-warm-white: #F7F7F4`
- Zero AI-Slop Mandate: No rounded pill badges (`rounded-full`), no 3-card icon grids, no `00 //` slashes, no gradients or drop-shadow cards, no emojis anywhere in the UI.
- Responsive integrity across `375px`, `768px`, `1024px`, and `1440px` viewports.

## Review Focus

1. **Dr.Page serial queue exhaustion:** Advancing the serving serial when it already equals the patient's serial (`#18`) must clamp at `#18` (`Now Serving You — Enter Chamber`) rather than producing a negative wait count or negative ETA.
2. **Agrochemical POS split-stock calculation:** Toggling between `Dokan Only` and `Dokan + Godown Split` must preserve exact base-unit totals (`20 bottles`) and log `DIRECT_WHOLESALE_DISPATCH` only when Godown quantity `> 0`.
3. **Owner PIN margin masking:** When Owner PIN (`1234`) is locked, wholesale unit cost (`কেনা দাম`) and dealer gross margin (`মুনাফা`) must never appear in visible text nodes.
4. **SVG brand deliverables:** All three standalone SVG files (`/brand/refyn-monogram.svg`, `/brand/refyn-lockup-light.svg`, `/brand/refyn-lockup-dark.svg`) must be valid, self-contained XML SVG documents with `viewBox` attributes.
5. **Anti-slop DOM hygiene:** No emoji characters or `rounded-full` tech-stack pills anywhere in rendered output.

---

### Task 1: Project Scaffolding, Brand SVG Assets & Monograph Data Layer

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`
- Create: `public/brand/refyn-monogram.svg`, `public/brand/refyn-lockup-light.svg`, `public/brand/refyn-lockup-dark.svg`
- Create: `src/app/icon.svg`
- Create: `src/data/monograph.ts`
- Test: `tests/monograph.test.ts`

**Interfaces:**
- Produces:
  - `MONOGRAPH_WORKS: readonly MonographWork[]` in `src/data/monograph.ts`
  - `BRAND_TOKENS: readonly BrandTokenSwatch[]` in `src/data/monograph.ts`
  - `calculateDrPageQueueState(servingSerial: number, patientSerial: number, delayMinutes: number): DrPageQueueState`
  - `calculatePosInvoiceState(splitEnabled: boolean, pinUnlocked: boolean): PosInvoiceState`

- [ ] **Step 1: Scaffold Next.js + TypeScript + Tailwind + Vitest config and write `tests/monograph.test.ts`**
- [ ] **Step 2: Run Vitest to verify `tests/monograph.test.ts` fails before `src/data/monograph.ts` and SVG files exist**
- [ ] **Step 3: Create `public/brand/*.svg`, `src/app/icon.svg`, and `src/data/monograph.ts` with pure domain helpers**
- [ ] **Step 4: Run `npx vitest run tests/monograph.test.ts` to verify all domain & asset tests pass**
- [ ] **Step 5: Commit Task 1**

---

### Task 2: Interactive Venture & Partner Specimens (`DrPageSpecimen`, `PristhaSpecimen`, `AgroPosSpecimen`)

**Files:**
- Create: `src/components/BrandLogo.tsx`
- Create: `src/components/DhakaClock.tsx`
- Create: `src/components/specimens/DrPageSpecimen.tsx`
- Create: `src/components/specimens/PristhaSpecimen.tsx`
- Create: `src/components/specimens/AgroPosSpecimen.tsx`
- Test: `tests/specimens.test.tsx`

**Interfaces:**
- Consumes: `calculateDrPageQueueState`, `calculatePosInvoiceState`, `MONOGRAPH_WORKS` from `src/data/monograph.ts`
- Produces: `<BrandLogo />`, `<DhakaClock />`, `<DrPageSpecimen />`, `<PristhaSpecimen />`, `<AgroPosSpecimen />`

- [ ] **Step 1: Write `tests/specimens.test.tsx` testing all 3 specimens and brand logo rendering**
- [ ] **Step 2: Run `npx vitest run tests/specimens.test.tsx` to verify it fails**
- [ ] **Step 3: Implement `BrandLogo.tsx`, `DhakaClock.tsx`, and the 3 interactive specimen components**
- [ ] **Step 4: Run `npx vitest run tests/specimens.test.tsx` to verify all tests pass**
- [ ] **Step 5: Commit Task 2**

---

### Task 3: Asymmetric 12-Column Swiss Monograph Page, Root Layout & Live Browser Verification

**Files:**
- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Test: `tests/page.test.tsx`

**Interfaces:**
- Consumes: `<BrandLogo />`, `<DhakaClock />`, `<DrPageSpecimen />`, `<PristhaSpecimen />`, `<AgroPosSpecimen />`, `MONOGRAPH_WORKS`, `BRAND_TOKENS`
- Produces: Complete Next.js App Router application at `/`

- [ ] **Step 1: Write `tests/page.test.tsx` verifying monograph structure, anti-slop rules (zero emojis, zero `rounded-full` pills), and all 4 chapters**
- [ ] **Step 2: Run `npx vitest run tests/page.test.tsx` to verify it fails**
- [ ] **Step 3: Implement `src/app/globals.css`, `src/app/layout.tsx`, and `src/app/page.tsx`**
- [ ] **Step 4: Run `npx vitest run` and `npm run build` to verify 100% test pass and clean production build**
- [ ] **Step 5: Commit Task 3**

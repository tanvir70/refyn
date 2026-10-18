# Refyn Venture --- Brand Handoff Brief

## Purpose

This document captures the branding decisions and current direction
discussed in ChatGPT. Give it to a design or coding agent as the source
of truth for the next steps.

## Brand

-   **Brand name:** Refyn Venture
-   **Tagline:** Software that moves business forward.
-   **Founder/name context:** Tanvir Anjum Refat
-   **Business:** A software development venture / systems-focused
    technology brand.

## Brand direction

The brand should feel: - Premium, minimal, confident, and professional -
Modern without looking like generic "AI startup" branding - Clear and
useful for a software company serving real businesses - Distinctive
through a simple custom symbol and strong typography

### Avoid

-   Electric-blue gradients and generic AI-style visual effects
-   Overly futuristic or gimmicky letterforms
-   Excessive letter spacing on the main wordmark
-   Decorative effects that compete with the logo symbol
-   Unnecessary complexity

## Logo direction

Preferred explorations from the visual concepts: 1. An abstract two-tile
geometric symbol paired with the **REFYN VENTURE** wordmark. 2. A
compact geometric **R monogram** suitable for an app icon. 3. Dark and
light versions of the R-monogram app icon.

The symbol should be simple enough to work at favicon and app-icon
sizes. Keep the wordmark typography-led and uncluttered. Treat the
abstract symbol and R monogram as related brand assets, not unrelated
logos.

## Color direction

Use a restrained neutral palette as the primary identity: -
**Charcoal:** `#0F172A` - **Slate:** `#64748B` - **Mist:** `#E5E7EB` -
**Warm white background option:** `#F7F7F4` - **Near-black wordmark
option:** `#111318`

Prefer solid colors and high contrast. Do not make a blue gradient the
central visual feature. A restrained accent may be explored later, but
it should not overpower the neutral identity.

## Free font shortlist

These are the preferred free-font candidates to test for the wordmark
and supporting typography. Confirm each font's current license terms
before shipping.

1.  **General Sans** --- first choice to test\
    https://www.fontshare.com/fonts/general-sans
2.  **Switzer** --- second choice\
    https://www.fontshare.com/fonts/switzer
3.  **Manrope**\
    https://fonts.google.com/specimen/Manrope
4.  **DM Sans**\
    https://fonts.google.com/specimen/DM+Sans
5.  **Space Grotesk**\
    https://fonts.google.com/specimen/Space+Grotesk

### Typography recommendation

Start with: - `REFYN`: General Sans SemiBold - `VENTURE`: General Sans
Medium, smaller and with modestly increased tracking - Tagline and body
copy: General Sans Regular

Test Switzer as the alternative. If General Sans does not fit the custom
symbol, test Manrope or DM Sans. Keep the wordmark readable and avoid
excessive tracking.

## Suggested design tokens

``` css
:root {
  --color-charcoal: #0F172A;
  --color-slate: #64748B;
  --color-mist: #E5E7EB;
  --color-warm-white: #F7F7F4;
  --color-near-black: #111318;

  --font-brand: "General Sans", sans-serif;
  --font-body: "General Sans", sans-serif;
}
```

## Agent instructions

Please continue from the decisions in this brief rather than restarting
the branding process.

1.  Create a polished primary wordmark for **Refyn Venture** with the
    tagline **"Software that moves business forward."**
2.  Develop a consistent geometric R monogram / app icon related to the
    main logo.
3.  Produce light-background and dark-background versions.
4.  Use a restrained charcoal, slate, mist, and warm-white palette.
5.  Compare General Sans and Switzer in the actual wordmark before
    finalizing typography.
6.  Keep the identity minimal and premium; avoid electric-blue gradients
    and generic AI aesthetics.
7.  Supply practical deliverables: SVG logo files, transparent PNG
    exports, app icon, favicon, color and typography tokens, and a short
    usage guide.
8.  Ensure the logo remains legible at small sizes and works in
    monochrome.
9.  Do not claim fonts are licensed for commercial use without checking
    the current license terms.

## Current recommendation

**Start with General Sans + a custom geometric R monogram + a
charcoal/off-white palette.** Keep the design typography-led, quiet, and
distinctive.

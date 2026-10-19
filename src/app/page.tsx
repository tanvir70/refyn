import React from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { DhakaClock } from "@/components/DhakaClock";
import { HeroBlueprint } from "@/components/HeroBlueprint";
import { DrPageSpecimen } from "@/components/specimens/DrPageSpecimen";
import { PristhaSpecimen } from "@/components/specimens/PristhaSpecimen";
import { AgroPosSpecimen } from "@/components/specimens/AgroPosSpecimen";
import { BRAND_TOKENS, MONOGRAPH_WORKS } from "@/data/monograph";

const ARCHITECTURAL_PRINCIPLES = [
  {
    index: "01",
    accent: "from-emerald-400 to-cyan-400",
    badgeText: "text-emerald-300 border-emerald-500/30 bg-emerald-500/10",
    title: "Domain Invariants Over CRUD",
    body: "Every system is anchored in strict database and state-machine invariants—pessimistic row locking for clinical serials, non-negative CHECK constraints for credit ledgers, and FEFO quarantine gates for regulated inventory.",
  },
  {
    index: "02",
    accent: "from-amber-400 to-orange-500",
    badgeText: "text-amber-300 border-amber-500/30 bg-amber-500/10",
    title: "Zero-Friction Edge Surfaces",
    body: "Users in emerging markets should never be forced through heavy app-store installs for urgent tasks. Patient serial passes, reader folios, and counter terminals launch instantaneously with minimal payload overhead.",
  },
  {
    index: "03",
    accent: "from-sky-400 to-blue-500",
    badgeText: "text-sky-300 border-sky-500/30 bg-sky-500/10",
    title: "Bilingual Cultural Precision",
    body: "Software built for Bangladesh must treat Bengali (বাংলা) and English as equal first-class citizens—pairing geometric grotesque display typography with optically calibrated Bengali editorial and operational script.",
  },
  {
    index: "04",
    accent: "from-indigo-400 to-purple-500",
    badgeText: "text-indigo-300 border-indigo-500/30 bg-indigo-500/10",
    title: "Auditability by Default",
    body: "From double-entry supplier rebates to real-time chamber delay broadcasts, every state transition produces an immutable, human-verifiable audit trail.",
  },
] as const;

const MARQUEE_ITEMS = [
  "VENTURE INCUBATION",
  "DISTRIBUTED SYSTEMS ARCHITECTURE",
  "ZERO-DUPLICATE CLINICAL QUEUES",
  "BILINGUAL LITERARY WORKSPACES",
  "FEFO CHEMICAL EXPIRY ENGINES",
  "SELF-HEALING FINANCIAL LEDGERS",
] as const;

export default function HomePage() {
  const drPageWork = MONOGRAPH_WORKS.find((w) => w.id === "dr-page")!;
  const pristhaWork = MONOGRAPH_WORKS.find((w) => w.id === "pristha")!;
  const agroPosWork = MONOGRAPH_WORKS.find((w) => w.id === "agro-pos")!;

  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 selection:bg-sky-400 selection:text-slate-950">
      {/* Floating Glassmorphic Studio Header */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#060911]/80 border-b border-white/[0.08]">
        <div className="max-w-[1380px] mx-auto px-6 sm:px-10 h-20 flex items-center justify-between gap-4">
          <a
            href="#thesis"
            className="inline-block focus:outline-none"
            aria-label="Refyn Venture Home"
          >
            <BrandLogo variant="lockup" theme="dark" />
          </a>

          <nav
            aria-label="Studio Navigation"
            className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-xs"
          >
            <a
              href="#thesis"
              className="px-4 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/[0.08] transition-all"
            >
              01 Thesis
            </a>
            <a
              href="#work-dr-page"
              className="px-4 py-1.5 rounded-full text-slate-300 hover:text-emerald-300 hover:bg-emerald-500/10 transition-all"
            >
              02 Ventures
            </a>
            <a
              href="#work-agro-pos"
              className="px-4 py-1.5 rounded-full text-slate-300 hover:text-blue-300 hover:bg-blue-500/10 transition-all"
            >
              03 Partner Systems
            </a>
            <a
              href="#colophon"
              className="px-4 py-1.5 rounded-full text-slate-300 hover:text-amber-300 hover:bg-amber-500/10 transition-all"
            >
              04 Identity
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <DhakaClock />
            </div>
            <a
              href="#initiate"
              className="px-5 py-2.5 rounded-full bg-white text-slate-950 font-mono text-xs uppercase tracking-[0.14em] font-bold hover:bg-sky-200 transition-colors shadow-[0_0_25px_rgba(255,255,255,0.25)]"
            >
              Initiate Dialogue →
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* CHAPTER I: FULL-VIEWPORT KINETIC STUDIO HERO */}
        <section
          id="thesis"
          className="relative overflow-hidden bg-studio-grid pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-white/[0.08]"
        >
          {/* Multi-Layered Atmospheric Stage Spotlights */}
          <div
            className="pointer-events-none absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-sky-500/15 blur-[130px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-1/3 right-10 h-[460px] w-[460px] rounded-full bg-emerald-500/12 blur-[130px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-32 left-10 h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-[130px]"
            aria-hidden="true"
          />

          <div className="relative max-w-[1380px] mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left 7 Cols: Oversized Kinetic Display Typography */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/15 font-mono text-[11px] uppercase tracking-[0.18em] text-sky-300">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  <span>VENTURE STUDIO &amp; SYSTEMS ARCHITECTURE</span>
                </div>

                <h1 className="mt-7 text-5xl sm:text-7xl xl:text-[5.25rem] font-bold tracking-[-0.045em] leading-[0.95] text-white">
                  Software that{" "}
                  <span className="bg-gradient-to-r from-white via-sky-200 to-emerald-300 bg-clip-text text-transparent">
                    moves business forward.
                  </span>
                </h1>

                <p className="mt-7 text-base sm:text-xl text-slate-300/90 max-w-[56ch] leading-relaxed font-normal">
                  Refyn Venture is an independent software venture builder and
                  systems engineering lab founded by{" "}
                  <span className="text-white font-semibold">
                    Tanvir Anjum Refat
                  </span>
                  . We originate category-defining digital platforms and partner
                  with ambitious enterprises to replace fragile paper workflows
                  with high-integrity software architecture.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href="#work-dr-page"
                    className="px-7 py-4 rounded-2xl bg-gradient-to-r from-white via-slate-100 to-sky-100 text-slate-950 font-mono text-xs uppercase tracking-[0.16em] font-bold hover:brightness-105 transition-all shadow-[0_16px_40px_-10px_rgba(56,189,248,0.45)]"
                  >
                    Explore Selected Works (03)
                  </a>
                  <a
                    href="#initiate"
                    className="px-7 py-4 rounded-2xl bg-white/[0.05] border border-white/20 text-white font-mono text-xs uppercase tracking-[0.16em] font-semibold hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-md"
                  >
                    Commission a System →
                  </a>
                </div>

                {/* 3 Glassmorphic Studio Telemetry Cards */}
                <div className="mt-12 grid grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <span className="block text-3xl sm:text-4xl font-bold tracking-tight tabular-nums text-emerald-300">
                      02
                    </span>
                    <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                      IN-HOUSE VENTURES
                    </span>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <span className="block text-3xl sm:text-4xl font-bold tracking-tight tabular-nums text-sky-300">
                      0.0%
                    </span>
                    <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                      DUPLICATE SERIAL RATE
                    </span>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <span className="block text-3xl sm:text-4xl font-bold tracking-tight tabular-nums text-amber-300">
                      85/85
                    </span>
                    <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                      LEDGER INVARIANT TESTS
                    </span>
                  </div>
                </div>
              </div>

              {/* Right 5 Cols: 3D Layered R Monogram & Venture Portal */}
              <div className="lg:col-span-5">
                <HeroBlueprint />
              </div>
            </div>

            {/* Dual Studio Mandates — Elevated Glassmorphic Cards */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-emerald-500/[0.09] via-white/[0.02] to-transparent border border-emerald-500/25 overflow-hidden">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-300">
                  <span>MANDATE A</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-[10px]">
                    01 / PROPRIETARY VENTURES
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-white">
                  Proprietary Product Incubation
                </h2>
                <p className="mt-2.5 text-sm text-slate-300/85 leading-relaxed">
                  We identify high-friction structural gaps in emerging
                  markets—from evening specialist healthcare queues to bilingual
                  literary publishing—and engineer enduring software ventures
                  from first principles.
                </p>
              </div>

              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-500/[0.09] via-white/[0.02] to-transparent border border-blue-500/25 overflow-hidden">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-blue-300">
                  <span>MANDATE B</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-[10px]">
                    02 / PARTNER SYSTEMS
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-white">
                  Bespoke Operational Engineering
                </h2>
                <p className="mt-2.5 text-sm text-slate-300/85 leading-relaxed">
                  We partner selectively with real-world enterprises to
                  architect audit-compliant POS counters, FEFO chemical expiry
                  engines, and self-healing financial ledgers that survive power
                  cuts and peak load.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KINETIC MARQUEE STRIP */}
        <div
          className="py-4 bg-[#04070D] border-b border-white/[0.08] overflow-hidden select-none"
          aria-hidden="true"
        >
          <div className="animate-marquee flex items-center gap-10 font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-10">
                <span className="text-slate-200 font-semibold">{item}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              </span>
            ))}
          </div>
        </div>

        {/* WORLD 01: DR.PAGE — BIOLUMINESCENT CLINICAL EMERALD STAGE */}
        <section
          id="work-dr-page"
          className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#041218] via-[#05151D] to-[#060911] border-b border-emerald-500/20"
        >
          <div
            className="pointer-events-none absolute top-1/4 -left-32 h-[540px] w-[540px] rounded-full bg-emerald-500/15 blur-[140px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-10 right-0 h-[460px] w-[460px] rounded-full bg-cyan-500/12 blur-[140px]"
            aria-hidden="true"
          />

          <div className="relative max-w-[1380px] mx-auto px-6 sm:px-10 space-y-10">
            {/* Oversized Kinetic Stage Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="inline-flex flex-wrap items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 font-mono text-xs uppercase tracking-[0.16em]">
                  <span className="text-emerald-300 font-bold">
                    WORK {drPageWork.index}
                  </span>
                  <span className="text-emerald-500">·</span>
                  <span className="text-emerald-200">{drPageWork.track}</span>
                  <span className="text-emerald-500">·</span>
                  <span className="font-bengali text-sm text-emerald-300 font-semibold">
                    {drPageWork.nativeTitle}
                  </span>
                </div>

                <h2 className="mt-5 text-5xl sm:text-7xl font-bold tracking-[-0.04em] text-white leading-[0.96]">
                  {drPageWork.title}
                </h2>
                <p className="mt-3 text-xl sm:text-2xl font-medium bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent tracking-tight">
                  {drPageWork.subtitle}
                </p>
              </div>

              <div className="lg:col-span-5 space-y-4 pt-2">
                <p className="text-base font-medium text-slate-100 leading-relaxed">
                  {drPageWork.summary}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {drPageWork.problemContext}
                </p>
                <div className="pt-1">
                  <a
                    href={drPageWork.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-500/15 border border-emerald-400/40 font-mono text-xs uppercase tracking-[0.14em] font-semibold text-emerald-200 hover:bg-emerald-400 hover:text-slate-950 transition-all"
                  >
                    <span>Inspect Repository ({drPageWork.repositoryLabel})</span>
                    <svg
                      viewBox="0 0 12 12"
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      aria-hidden="true"
                    >
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 4-Column Emerald Glass Spec Cards */}
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {drPageWork.ledger.map((spec) => (
                <div
                  key={spec.label}
                  className="p-5 rounded-2xl bg-emerald-950/25 border border-emerald-500/20 backdrop-blur-md"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-400">
                    {spec.label}
                  </dt>
                  <dd className="mt-2 text-xs font-medium text-slate-100 leading-relaxed">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Interactive Clinical Specimen */}
            <DrPageSpecimen />
          </div>
        </section>

        {/* WORLD 02: PRISTHA — GOLDEN-HOUR WARM AMBER & PARCHMENT STAGE */}
        <section
          id="work-pristha"
          className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#160F09] via-[#120C07] to-[#060911] border-b border-amber-500/20"
        >
          <div
            className="pointer-events-none absolute top-1/4 right-0 h-[540px] w-[540px] rounded-full bg-amber-500/15 blur-[140px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-10 -left-24 h-[460px] w-[460px] rounded-full bg-orange-500/12 blur-[140px]"
            aria-hidden="true"
          />

          <div className="relative max-w-[1380px] mx-auto px-6 sm:px-10 space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="inline-flex flex-wrap items-center gap-3 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 font-mono text-xs uppercase tracking-[0.16em]">
                  <span className="text-amber-300 font-bold">
                    WORK {pristhaWork.index}
                  </span>
                  <span className="text-amber-500">·</span>
                  <span className="text-amber-200">{pristhaWork.track}</span>
                  <span className="text-amber-500">·</span>
                  <span className="font-bengali text-sm text-amber-300 font-semibold">
                    {pristhaWork.nativeTitle}
                  </span>
                </div>

                <h2 className="mt-5 text-5xl sm:text-7xl font-bold tracking-[-0.04em] text-[#FAF5EC] leading-[0.96]">
                  {pristhaWork.title}
                </h2>
                <p className="mt-3 text-xl sm:text-2xl font-medium bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent tracking-tight">
                  {pristhaWork.subtitle}
                </p>
              </div>

              <div className="lg:col-span-5 space-y-4 pt-2">
                <p className="text-base font-medium text-stone-100 leading-relaxed">
                  {pristhaWork.summary}
                </p>
                <p className="text-sm text-stone-400 leading-relaxed">
                  {pristhaWork.problemContext}
                </p>
                <div className="pt-1">
                  <a
                    href={pristhaWork.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-amber-500/15 border border-amber-400/40 font-mono text-xs uppercase tracking-[0.14em] font-semibold text-amber-200 hover:bg-amber-400 hover:text-stone-950 transition-all"
                  >
                    <span>
                      Inspect Repository ({pristhaWork.repositoryLabel})
                    </span>
                    <svg
                      viewBox="0 0 12 12"
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      aria-hidden="true"
                    >
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 4-Column Warm Amber Spec Cards */}
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pristhaWork.ledger.map((spec) => (
                <div
                  key={spec.label}
                  className="p-5 rounded-2xl bg-amber-950/25 border border-amber-500/20 backdrop-blur-md"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber-400">
                    {spec.label}
                  </dt>
                  <dd className="mt-2 text-xs font-medium text-stone-100 leading-relaxed">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Interactive Literary Workspace Specimen */}
            <PristhaSpecimen />
          </div>
        </section>

        {/* WORLD 03: RAJIB ENTERPRISE POS — ELECTRIC COBALT & INDIGO STAGE */}
        <section
          id="work-agro-pos"
          className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#071024] via-[#060C1B] to-[#060911] border-b border-blue-500/20"
        >
          <div
            className="pointer-events-none absolute top-1/3 -left-24 h-[540px] w-[540px] rounded-full bg-blue-500/15 blur-[140px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-10 right-0 h-[480px] w-[480px] rounded-full bg-indigo-500/15 blur-[140px]"
            aria-hidden="true"
          />

          <div className="relative max-w-[1380px] mx-auto px-6 sm:px-10 space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="inline-flex flex-wrap items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 font-mono text-xs uppercase tracking-[0.16em]">
                  <span className="text-blue-300 font-bold">
                    WORK {agroPosWork.index}
                  </span>
                  <span className="text-blue-500">·</span>
                  <span className="text-blue-200">{agroPosWork.track}</span>
                  <span className="text-blue-500">·</span>
                  <span className="font-bengali text-sm text-blue-300 font-semibold">
                    {agroPosWork.nativeTitle}
                  </span>
                </div>

                <h2 className="mt-5 text-5xl sm:text-7xl font-bold tracking-[-0.04em] text-white leading-[0.96]">
                  {agroPosWork.title}
                </h2>
                <p className="mt-3 text-xl sm:text-2xl font-medium bg-gradient-to-r from-blue-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent tracking-tight">
                  {agroPosWork.subtitle}
                </p>
              </div>

              <div className="lg:col-span-5 space-y-4 pt-2">
                <p className="text-base font-medium text-slate-100 leading-relaxed">
                  {agroPosWork.summary}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {agroPosWork.problemContext}
                </p>
                <div className="pt-1">
                  <a
                    href={agroPosWork.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-blue-500/15 border border-blue-400/40 font-mono text-xs uppercase tracking-[0.14em] font-semibold text-blue-200 hover:bg-blue-400 hover:text-slate-950 transition-all"
                  >
                    <span>
                      Inspect Repository ({agroPosWork.repositoryLabel})
                    </span>
                    <svg
                      viewBox="0 0 12 12"
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      aria-hidden="true"
                    >
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 4-Column Cobalt Spec Cards */}
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {agroPosWork.ledger.map((spec) => (
                <div
                  key={spec.label}
                  className="p-5 rounded-2xl bg-blue-950/25 border border-blue-500/20 backdrop-blur-md"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-blue-400">
                    {spec.label}
                  </dt>
                  <dd className="mt-2 text-xs font-medium text-slate-100 leading-relaxed">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Interactive Agrochemical POS Specimen */}
            <AgroPosSpecimen />
          </div>
        </section>

        {/* CHAPTER IV: ARCHITECTURAL DOCTRINE & BRAND IDENTITY SYSTEM */}
        <section id="colophon" className="py-20 lg:py-28 bg-studio-grid">
          <div className="max-w-[1380px] mx-auto px-6 sm:px-10 space-y-24">
            {/* 4 Architectural Principles */}
            <div>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-sky-400">
                    IV. ARCHITECTURAL PRINCIPLES
                  </span>
                  <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-white">
                    The Refyn Venture Standard
                  </h2>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-xs text-slate-300 uppercase tracking-[0.14em]">
                  SYSTEMS DOCTRINE 01 — 04
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ARCHITECTURAL_PRINCIPLES.map((principle) => (
                  <div
                    key={principle.index}
                    className="relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden backdrop-blur-xl"
                  >
                    <div
                      className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${principle.accent}`}
                    />
                    <span
                      className={`inline-block px-3 py-1 rounded-full border font-mono text-[10px] uppercase tracking-[0.16em] ${principle.badgeText}`}
                    >
                      PRINCIPLE {principle.index}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-300/85 leading-relaxed">
                      {principle.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Canonical Brand Identity Showcase Board */}
            <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/12 space-y-10 backdrop-blur-xl">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-amber-300">
                    BRAND IDENTITY SYSTEM · CANONICAL SPECIMEN BOARD
                  </span>
                  <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    Refyn Venture Mark, Lockups &amp; Color Tokens
                  </h2>
                </div>

                {/* Downloadable Vector SVG Assets */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/brand/refyn-monogram.svg"
                    download
                    className="px-4 py-2.5 rounded-xl bg-white text-slate-950 font-mono text-xs uppercase tracking-[0.14em] font-bold hover:bg-sky-200 transition-colors"
                  >
                    Download R Monogram SVG
                  </a>
                  <a
                    href="/brand/refyn-lockup-light.svg"
                    download
                    className="px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 font-mono text-xs uppercase tracking-[0.14em] text-white hover:bg-white/15 transition-colors"
                  >
                    Download Light Lockup SVG
                  </a>
                  <a
                    href="/brand/refyn-lockup-dark.svg"
                    download
                    className="px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 font-mono text-xs uppercase tracking-[0.14em] text-white hover:bg-white/15 transition-colors"
                  >
                    Download Dark Lockup SVG
                  </a>
                </div>
              </div>

              {/* 3-Panel Identity Board (Obsidian Lockup | Launcher Tiles | Alabaster Lockup) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0F172A] border border-white/15 flex flex-col justify-between min-h-[210px] shadow-xl">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
                    PLATE A · OBSIDIAN LOCKUP (#0F172A)
                  </span>
                  <div className="my-4">
                    <BrandLogo variant="lockup" theme="dark" showTagline />
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">
                    TRACKING: +260 / +420 · REVERSE CONTRAST
                  </span>
                </div>

                <div className="lg:col-span-3 p-8 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between items-center min-h-[210px]">
                  <span className="w-full font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
                    PLATE B · LAUNCHER TILES
                  </span>
                  <div className="my-4 flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-[#0F172A] border border-white/20 flex items-center justify-center shadow-lg">
                      <BrandLogo
                        variant="monogram"
                        theme="dark"
                        className="w-9 h-9"
                      />
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-[#F7F7F4] border border-slate-200 flex items-center justify-center shadow-lg">
                      <BrandLogo
                        variant="monogram"
                        theme="light"
                        className="w-9 h-9"
                      />
                    </div>
                  </div>
                  <span className="w-full font-mono text-[10px] text-slate-400">
                    ICON GEOMETRY · 1:1 RATIO
                  </span>
                </div>

                <div className="lg:col-span-4 p-8 rounded-2xl bg-[#F7F7F4] text-[#0F172A] border border-white/20 flex flex-col justify-between min-h-[210px] shadow-xl">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#64748B]">
                    PLATE C · ALABASTER LOCKUP (#F7F7F4)
                  </span>
                  <div className="my-4">
                    <BrandLogo variant="lockup" theme="light" showTagline />
                  </div>
                  <span className="font-mono text-[10px] text-[#64748B]">
                    PRIMARY DAYLIGHT SIGNATURE
                  </span>
                </div>
              </div>

              {/* 4 Canonical Color Swatches */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {BRAND_TOKENS.map((token) => (
                  <div
                    key={token.hex}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/10"
                  >
                    <div
                      className="w-full h-14 rounded-xl border border-white/20 shadow-inner"
                      style={{ backgroundColor: token.hex }}
                    />
                    <div className="mt-3.5 flex items-baseline justify-between gap-2">
                      <p className="font-bold text-sm text-white">
                        {token.name}
                      </p>
                      <p className="font-mono text-xs text-sky-300 font-semibold">
                        {token.hex}
                      </p>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">{token.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* MONUMENTAL KINETIC STUDIO FOOTER */}
      <footer
        id="initiate"
        className="relative overflow-hidden border-t border-white/10 bg-[#04060C] py-20"
      >
        <div
          className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-80 w-[720px] rounded-full bg-sky-500/15 blur-[130px]"
          aria-hidden="true"
        />
        <div className="relative max-w-[1380px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-14 border-b border-white/10">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-300">
                INITIATE DIALOGUE · VENTURE &amp; SYSTEMS COMMISSIONING
              </span>
              <h2 className="mt-4 text-4xl sm:text-6xl font-bold tracking-[-0.035em] text-white leading-[1.02]">
                Ready to engineer a category-defining platform?
              </h2>
            </div>

            <div className="lg:col-span-4 flex flex-wrap lg:justify-end">
              <a
                href="https://github.com/tanvir70"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-white via-sky-100 to-emerald-200 text-slate-950 font-mono text-xs uppercase tracking-[0.16em] font-bold hover:brightness-105 transition-all shadow-[0_16px_40px_-10px_rgba(56,189,248,0.4)]"
              >
                GitHub (Tanvir Anjum Refat) →
              </a>
            </div>
          </div>

          <div className="pt-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-400">
            <BrandLogo variant="lockup" theme="dark" />
            <div>
              COPYRIGHT 2026 REFYN VENTURE. FOUNDED BY TANVIR ANJUM REFAT. ALL
              RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

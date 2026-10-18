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
    title: "Domain Invariants Over CRUD",
    body: "Every system is anchored in strict database and state-machine invariants—pessimistic row locking for clinical serials, non-negative CHECK constraints for credit ledgers, and FEFO quarantine gates for regulated inventory.",
  },
  {
    index: "02",
    title: "Zero-Friction Edge Surfaces",
    body: "Users in emerging markets should never be forced through heavy app-store installs for urgent tasks. Patient serial passes, reader folios, and counter terminals launch instantaneously with minimal payload overhead.",
  },
  {
    index: "03",
    title: "Bilingual Cultural Precision",
    body: "Software built for Bangladesh must treat Bengali (বাংলা) and English as equal first-class citizens—pairing geometric grotesque display typography with optically calibrated Bengali editorial and operational script.",
  },
  {
    index: "04",
    title: "Auditability by Default",
    body: "From double-entry supplier rebates to real-time chamber delay broadcasts, every state transition produces an immutable, human-verifiable audit trail.",
  },
] as const;

export default function HomePage() {
  const inHouseWorks = MONOGRAPH_WORKS.filter(
    (w) => w.track === "IN-HOUSE VENTURE"
  );
  const partnerWorks = MONOGRAPH_WORKS.filter(
    (w) => w.track === "PARTNER ENGINEERED SYSTEM"
  );

  return (
    <div className="min-h-screen bg-[#F7F7F4] text-[#0F172A]">
      {/* Outer 12-Column Swiss Monograph Frame */}
      <div className="max-w-[1440px] mx-auto border-x border-[#E5E7EB] grid grid-cols-1 lg:grid-cols-12">
        {/* Left 3-Column Sticky Architectural Spine */}
        <aside className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-[#E5E7EB] bg-[#F7F7F4]">
          <div className="lg:sticky lg:top-0 lg:h-screen p-6 sm:p-8 flex flex-col justify-between">
            {/* Top Brand Lockup & Studio Descriptor */}
            <div>
              <a
                href="#thesis"
                className="inline-block focus:outline-none"
                aria-label="Refyn Venture Home"
              >
                <BrandLogo variant="lockup" theme="light" />
              </a>
              <p className="mt-5 text-xs text-[#64748B] leading-relaxed">
                Venture builder &amp; systems engineering lab originating
                proprietary software platforms and mission-critical partner
                infrastructure.
              </p>

              <div className="mt-5 pt-4 border-t border-[#E5E7EB] flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-[#64748B]">
                <span>FOUNDER</span>
                <span className="text-[#0F172A] font-medium">
                  Tanvir Anjum Refat
                </span>
              </div>
            </div>

            {/* Chapter Index Navigation */}
            <nav aria-label="Monograph Index" className="my-8 lg:my-0">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[#64748B] mb-3">
                <span>MONOGRAPH INDEX</span>
                <span>ED. 2026</span>
              </div>
              <ul className="border-t border-[#E5E7EB] divide-y divide-[#E5E7EB] font-mono text-xs">
                <li>
                  <a
                    href="#thesis"
                    className="py-3 flex items-center justify-between text-[#0F172A] hover:pl-1.5 transition-all"
                  >
                    <span>I. Studio Thesis</span>
                    <span className="text-[#64748B]">01</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#ventures"
                    className="py-3 flex items-center justify-between text-[#0F172A] hover:pl-1.5 transition-all"
                  >
                    <span>II. In-House Ventures</span>
                    <span className="text-[#64748B]">02</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#systems"
                    className="py-3 flex items-center justify-between text-[#0F172A] hover:pl-1.5 transition-all"
                  >
                    <span>III. Partner Systems</span>
                    <span className="text-[#64748B]">03</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#colophon"
                    className="py-3 flex items-center justify-between text-[#0F172A] hover:pl-1.5 transition-all"
                  >
                    <span>IV. Identity &amp; Colophon</span>
                    <span className="text-[#64748B]">04</span>
                  </a>
                </li>
              </ul>
            </nav>

            {/* Bottom Live Dhaka Coordinates & Primary Action */}
            <div className="pt-5 border-t border-[#E5E7EB] space-y-4">
              <DhakaClock />
              <a
                href="#initiate"
                className="w-full px-4 py-3.5 bg-[#0F172A] text-[#F7F7F4] font-mono text-xs uppercase tracking-[0.16em] font-medium flex items-center justify-between hover:bg-[#1E293B] transition-colors"
              >
                <span>Initiate Dialogue</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Right 9-Column Editorial & Specimen Canvas */}
        <main className="lg:col-span-9 divide-y divide-[#E5E7EB]">
          {/* Top Metadata Masthead Strip */}
          <header className="px-6 sm:px-10 py-4 flex flex-wrap items-center justify-between gap-4 bg-[#F7F7F4] font-mono text-[11px] uppercase tracking-[0.16em] text-[#64748B]">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 bg-[#0F172A]" />
              <span className="text-[#0F172A] font-semibold">
                REFYN VENTURE — MONOGRAPH NO. 01
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span>DHAKA · BANGLADESH</span>
              <span className="hidden sm:inline text-[#0F172A]">
                ARCHITECT: TANVIR ANJUM REFAT
              </span>
            </div>
          </header>

          {/* CHAPTER I: STUDIO THESIS & ARCHITECTURAL BLUEPRINT */}
          <section id="thesis" className="bg-[#F7F7F4]">
            <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
              {/* Left 7 Cols: Display Headline & Thesis */}
              <div className="xl:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2.5 px-3 py-1 border border-[#E5E7EB] bg-white font-mono text-[10px] uppercase tracking-[0.18em] text-[#64748B]">
                    <span>I. VENTURE STUDIO &amp; SYSTEMS ARCHITECTURE</span>
                  </div>

                  <h1 className="mt-6 text-[2.75rem] sm:text-6xl lg:text-[4.25rem] font-semibold tracking-[-0.04em] leading-[0.98] text-[#0F172A]">
                    Software that moves business forward.
                  </h1>

                  <p className="mt-6 text-base sm:text-lg text-[#64748B] max-w-[54ch] leading-relaxed">
                    Refyn Venture is a software venture builder and systems
                    engineering lab founded by{" "}
                    <span className="text-[#0F172A] font-medium">
                      Tanvir Anjum Refat
                    </span>
                    . We incubate proprietary vertical platforms and partner
                    with ambitious operators to replace fragile paper ledgers
                    with high-integrity software architecture.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href="#ventures"
                      className="px-5 py-3.5 bg-[#0F172A] text-[#F7F7F4] font-mono text-[11px] uppercase tracking-[0.15em] font-semibold hover:bg-[#1E293B] transition-colors"
                    >
                      Examine Selected Works (03)
                    </a>
                    <a
                      href="#initiate"
                      className="px-5 py-3.5 bg-white border border-[#0F172A] text-[#0F172A] font-mono text-[11px] uppercase tracking-[0.15em] font-semibold hover:bg-[#0F172A] hover:text-[#F7F7F4] transition-colors"
                    >
                      Commission a System →
                    </a>
                  </div>
                </div>

                {/* Key Telemetry Metrics Row */}
                <div className="mt-10 pt-8 border-t border-[#E5E7EB] grid grid-cols-3 gap-4">
                  <div>
                    <span className="block text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums text-[#0F172A]">
                      02
                    </span>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                      IN-HOUSE VENTURES
                    </span>
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums text-[#0F172A]">
                      0.0%
                    </span>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                      DUPLICATE SERIAL RATE
                    </span>
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums text-[#0F172A]">
                      85/85
                    </span>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                      LEDGER INVARIANT TESTS
                    </span>
                  </div>
                </div>
              </div>

              {/* Right 5 Cols: Kinetic Monogram Geometry & System Index */}
              <div className="xl:col-span-5">
                <HeroBlueprint />
              </div>
            </div>

            {/* Obsidian Dual-Mandate Architecture Bar */}
            <div className="bg-[#0F172A] text-[#F7F7F4] grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#64748B]/30">
              <div className="p-6 sm:p-10">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[#94A3B8]">
                  <span>MANDATE A</span>
                  <span>01 / PROPRIETARY VENTURES</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-[#F7F7F4]">
                  Proprietary Product Incubation
                </h2>
                <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                  We identify structural bottlenecks in emerging markets—from
                  evening specialist healthcare queues to bilingual literary
                  publishing—and engineer enduring software ventures from first
                  principles.
                </p>
              </div>

              <div className="p-6 sm:p-10">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[#94A3B8]">
                  <span>MANDATE B</span>
                  <span>02 / PARTNER SYSTEMS</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-[#F7F7F4]">
                  Bespoke Operational Engineering
                </h2>
                <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                  We partner selectively with real-world enterprises to
                  architect audit-compliant POS counters, FEFO chemical expiry
                  engines, and self-healing financial ledgers that survive power
                  cuts and peak load.
                </p>
              </div>
            </div>
          </section>

          {/* CHAPTER II: IN-HOUSE VENTURES (WORKS 01 & 02) */}
          <section id="ventures" className="divide-y divide-[#E5E7EB]">
            {/* Section Masthead */}
            <div className="px-6 sm:px-10 py-8 bg-white flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#64748B]">
                  II. PORTFOLIO — IN-HOUSE VENTURES
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#0F172A]">
                  Originated &amp; Engineered by Refyn Venture
                </h2>
              </div>
              <span className="px-3 py-1.5 border border-[#E5E7EB] bg-[#F7F7F4] font-mono text-xs text-[#0F172A] uppercase tracking-[0.14em]">
                EXHIBITS 01 — 02
              </span>
            </div>

            {inHouseWorks.map((work) => (
              <article
                key={work.id}
                id={`work-${work.id}`}
                className="p-6 sm:p-10 lg:p-12 bg-[#F7F7F4] space-y-8"
              >
                {/* Full-Width Editorial Header Band */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.16em]">
                      <span className="px-2.5 py-1 bg-[#0F172A] text-[#F7F7F4] font-semibold">
                        WORK {work.index}
                      </span>
                      <span className="text-[#64748B]">{work.track}</span>
                      <span className="text-[#64748B]">·</span>
                      <span className="font-bengali text-sm text-[#0F172A] font-medium">
                        {work.nativeTitle}
                      </span>
                    </div>

                    <h3 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#0F172A] leading-[1.05]">
                      {work.title}
                    </h3>
                    <p className="mt-2 text-lg sm:text-xl font-medium text-[#64748B] tracking-tight">
                      {work.subtitle}
                    </p>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                    <p className="text-sm font-medium text-[#0F172A] leading-relaxed">
                      {work.summary}
                    </p>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {work.problemContext}
                    </p>
                    <div>
                      <a
                        href={work.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white border border-[#0F172A] font-mono text-[11px] uppercase tracking-[0.14em] font-semibold text-[#0F172A] hover:bg-[#0F172A] hover:text-[#F7F7F4] transition-colors"
                      >
                        <span>Inspect Repository ({work.repositoryLabel})</span>
                        <svg
                          viewBox="0 0 12 12"
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          aria-hidden="true"
                        >
                          <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Horizontal 4-Column Architectural Specification Strip */}
                <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E5E7EB] divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB] bg-white">
                  {work.ledger.map((spec) => (
                    <div key={spec.label} className="p-4">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#64748B]">
                        {spec.label}
                      </dt>
                      <dd className="mt-1.5 text-xs font-medium text-[#0F172A] leading-snug">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Live Interactive Specimen Stage */}
                <div>
                  {work.id === "dr-page" && <DrPageSpecimen />}
                  {work.id === "pristha" && <PristhaSpecimen />}
                </div>
              </article>
            ))}
          </section>

          {/* CHAPTER III: PARTNER ENGINEERED SYSTEMS (FULL-BLEED OBSIDIAN STAGE) */}
          <section
            id="systems"
            className="bg-[#0F172A] text-[#F7F7F4] divide-y divide-[#64748B]/30"
          >
            {/* Dark Chapter Masthead */}
            <div className="px-6 sm:px-10 py-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#94A3B8]">
                  III. SELECTED CLIENT ARCHITECTURE — PARTNER SYSTEMS
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#F7F7F4]">
                  Production Systems for Real-World Operators
                </h2>
              </div>
              <span className="px-3 py-1.5 border border-[#64748B]/40 bg-[#0B1120] font-mono text-xs text-[#F7F7F4] uppercase tracking-[0.14em]">
                EXHIBIT 03 · ENTERPRISE DEPLOYMENT
              </span>
            </div>

            {partnerWorks.map((work) => (
              <article
                key={work.id}
                id={`work-${work.id}`}
                className="p-6 sm:p-10 lg:p-12 space-y-8"
              >
                {/* Full-Width Dark Editorial Header Band */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.16em]">
                      <span className="px-2.5 py-1 bg-[#F7F7F4] text-[#0F172A] font-semibold">
                        WORK {work.index}
                      </span>
                      <span className="text-[#94A3B8]">{work.track}</span>
                      <span className="text-[#64748B]">·</span>
                      <span className="font-bengali text-sm text-[#F7F7F4] font-medium">
                        {work.nativeTitle}
                      </span>
                    </div>

                    <h3 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#F7F7F4] leading-[1.05]">
                      {work.title}
                    </h3>
                    <p className="mt-2 text-lg sm:text-xl font-medium text-[#94A3B8] tracking-tight">
                      {work.subtitle}
                    </p>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                    <p className="text-sm font-medium text-[#F7F7F4] leading-relaxed">
                      {work.summary}
                    </p>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {work.problemContext}
                    </p>
                    <div>
                      <a
                        href={work.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#F7F7F4] text-[#0F172A] font-mono text-[11px] uppercase tracking-[0.14em] font-semibold hover:bg-white transition-colors"
                      >
                        <span>Inspect Repository ({work.repositoryLabel})</span>
                        <svg
                          viewBox="0 0 12 12"
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          aria-hidden="true"
                        >
                          <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Horizontal 4-Column Dark Specification Strip */}
                <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#64748B]/35 divide-y sm:divide-y-0 sm:divide-x divide-[#64748B]/35 bg-[#0B1120]">
                  {work.ledger.map((spec) => (
                    <div key={spec.label} className="p-4">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#94A3B8]">
                        {spec.label}
                      </dt>
                      <dd className="mt-1.5 text-xs font-medium text-[#F7F7F4] leading-snug">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Live Interactive Agrochemical POS Specimen */}
                <div>
                  <AgroPosSpecimen />
                </div>
              </article>
            ))}
          </section>

          {/* CHAPTER IV: ARCHITECTURAL PRINCIPLES, BRAND IDENTITY PLATE & COLOPHON */}
          <section id="colophon" className="divide-y divide-[#E5E7EB]">
            {/* 4 Architectural Principles on Warm Alabaster */}
            <div className="p-6 sm:p-10 lg:p-12 bg-[#F7F7F4]">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#64748B]">
                    IV. ARCHITECTURAL PRINCIPLES
                  </p>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#0F172A]">
                    The Refyn Venture Standard
                  </h2>
                </div>
                <span className="font-mono text-xs text-[#64748B] uppercase tracking-[0.14em]">
                  SYSTEMS DOCTRINE 01 — 04
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 border border-[#E5E7EB] divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB] bg-white">
                {ARCHITECTURAL_PRINCIPLES.slice(0, 2).map((principle) => (
                  <div key={principle.index} className="p-6 sm:p-8">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#64748B]">
                      PRINCIPLE {principle.index}
                    </span>
                    <h3 className="mt-2.5 text-lg font-semibold text-[#0F172A]">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                      {principle.body}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 border-x border-b border-[#E5E7EB] divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB] bg-white">
                {ARCHITECTURAL_PRINCIPLES.slice(2, 4).map((principle) => (
                  <div key={principle.index} className="p-6 sm:p-8">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#64748B]">
                      PRINCIPLE {principle.index}
                    </span>
                    <h3 className="mt-2.5 text-lg font-semibold text-[#0F172A]">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                      {principle.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Identity Specimen Sheet (Echoing the Uploaded Brand Board) */}
            <div className="p-6 sm:p-10 lg:p-12 bg-white space-y-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#64748B]">
                    BRAND IDENTITY SYSTEM · CANONICAL SPECIMEN BOARD
                  </p>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#0F172A]">
                    Refyn Venture Mark, Lockups &amp; Color Tokens
                  </h2>
                </div>

                {/* Downloadable Vector SVG Assets */}
                <div className="flex flex-wrap gap-2">
                  <a
                    href="/brand/refyn-monogram.svg"
                    download
                    className="px-3.5 py-2 border border-[#0F172A] font-mono text-[11px] uppercase tracking-[0.14em] text-[#0F172A] hover:bg-[#0F172A] hover:text-[#F7F7F4] transition-colors"
                  >
                    Download R Monogram SVG
                  </a>
                  <a
                    href="/brand/refyn-lockup-light.svg"
                    download
                    className="px-3.5 py-2 border border-[#E5E7EB] bg-[#F7F7F4] font-mono text-[11px] uppercase tracking-[0.14em] text-[#0F172A] hover:border-[#0F172A] transition-colors"
                  >
                    Download Light Lockup SVG
                  </a>
                  <a
                    href="/brand/refyn-lockup-dark.svg"
                    download
                    className="px-3.5 py-2 border border-[#E5E7EB] bg-[#F7F7F4] font-mono text-[11px] uppercase tracking-[0.14em] text-[#0F172A] hover:border-[#0F172A] transition-colors"
                  >
                    Download Dark Lockup SVG
                  </a>
                </div>
              </div>

              {/* 3-Panel Identity Board (Dark Lockup | App Icon Tiles | Light Lockup) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#E5E7EB] divide-y lg:divide-y-0 lg:divide-x divide-[#E5E7EB]">
                {/* Panel 1: Dark Lockup Specimen */}
                <div className="lg:col-span-5 p-8 bg-[#0F172A] flex flex-col justify-between min-h-[210px]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#94A3B8]">
                    PLATE A · OBSIDIAN LOCKUP (#0F172A)
                  </span>
                  <div className="my-4">
                    <BrandLogo variant="lockup" theme="dark" showTagline />
                  </div>
                  <span className="font-mono text-[10px] text-[#64748B]">
                    TRACKING: +260 / +420 · REVERSE CONTRAST
                  </span>
                </div>

                {/* Panel 2: App Icon Launcher Tiles */}
                <div className="lg:col-span-3 p-8 bg-[#F7F7F4] flex flex-col justify-between items-center min-h-[210px]">
                  <span className="w-full font-mono text-[10px] uppercase tracking-[0.16em] text-[#64748B]">
                    PLATE B · LAUNCHER TILES
                  </span>
                  <div className="my-4 flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-[#0F172A] flex items-center justify-center shadow-md">
                      <BrandLogo
                        variant="monogram"
                        theme="dark"
                        className="w-9 h-9"
                      />
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-white border border-[#E5E7EB] flex items-center justify-center shadow-sm">
                      <BrandLogo
                        variant="monogram"
                        theme="light"
                        className="w-9 h-9"
                      />
                    </div>
                  </div>
                  <span className="w-full font-mono text-[10px] text-[#64748B]">
                    ICON GEOMETRY · 1:1 RATIO
                  </span>
                </div>

                {/* Panel 3: Light Lockup Specimen */}
                <div className="lg:col-span-4 p-8 bg-white flex flex-col justify-between min-h-[210px]">
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
              <div className="grid grid-cols-2 lg:grid-cols-4 border border-[#E5E7EB] divide-y sm:divide-y-0 divide-x divide-[#E5E7EB]">
                {BRAND_TOKENS.map((token) => (
                  <div key={token.hex} className="p-5 bg-[#F7F7F4]/50">
                    <div
                      className="w-full h-12 border border-[#E5E7EB]"
                      style={{ backgroundColor: token.hex }}
                    />
                    <div className="mt-3 flex items-baseline justify-between gap-2">
                      <p className="font-semibold text-sm text-[#0F172A]">
                        {token.name}
                      </p>
                      <p className="font-mono text-xs text-[#0F172A] font-medium">
                        {token.hex}
                      </p>
                    </div>
                    <p className="mt-1 text-[11px] text-[#64748B]">
                      {token.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Initiation / Footer Colophon */}
            <footer
              id="initiate"
              className="p-6 sm:p-10 lg:p-12 bg-[#0F172A] text-[#F7F7F4]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10 border-b border-[#64748B]/30">
                <div className="lg:col-span-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#94A3B8]">
                    INITIATE DIALOGUE · VENTURE &amp; SYSTEMS COMMISSIONING
                  </p>
                  <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-[#F7F7F4]">
                    Ready to engineer a category-defining platform or replace a
                    fragile operational ledger?
                  </h2>
                </div>

                <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-3">
                  <a
                    href="https://github.com/tanvir70"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 bg-[#F7F7F4] text-[#0F172A] font-mono text-xs uppercase tracking-[0.16em] font-semibold hover:bg-white transition-colors"
                  >
                    GitHub (Tanvir Anjum Refat) →
                  </a>
                </div>
              </div>

              <div className="pt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#94A3B8]">
                <BrandLogo variant="lockup" theme="dark" />
                <div>
                  COPYRIGHT 2026 REFYN VENTURE. FOUNDED BY TANVIR ANJUM REFAT.
                  ALL RIGHTS RESERVED.
                </div>
              </div>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}

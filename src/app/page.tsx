import React from "react";
import { BrandLogo, RefynMonogramSvg } from "@/components/BrandLogo";
import { DhakaClock } from "@/components/DhakaClock";
import { DrPageSpecimen } from "@/components/specimens/DrPageSpecimen";
import { PristhaSpecimen } from "@/components/specimens/PristhaSpecimen";
import { AgroPosSpecimen } from "@/components/specimens/AgroPosSpecimen";
import { BRAND_TOKENS, MONOGRAPH_WORKS, type MonographWork } from "@/data/monograph";

function renderSpecimen(id: MonographWork["id"]) {
  switch (id) {
    case "dr-page":
      return <DrPageSpecimen />;
    case "pristha":
      return <PristhaSpecimen />;
    case "agro-pos":
      return <AgroPosSpecimen />;
  }
}

export default function HomePage() {
  const inHouseVentures = MONOGRAPH_WORKS.filter(
    (w) => w.track === "IN-HOUSE VENTURE"
  );
  const partnerSystems = MONOGRAPH_WORKS.filter(
    (w) => w.track === "PARTNER ENGINEERED SYSTEM"
  );

  return (
    <div className="min-h-screen bg-[#F7F7F4] text-[#111318] border-t border-[#E5E7EB]">
      {/* Asymmetric 12-Column Swiss Monograph Blueprint */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-x border-[#E5E7EB]">
        {/* Left Spine (Cols 1-3): Sticky Monograph Index Rail */}
        <aside
          aria-label="Monograph Spine and Navigation"
          className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-[#E5E7EB] bg-[#F7F7F4] lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between p-6 sm:p-8"
        >
          {/* Top Brand Lockup */}
          <div>
            <a
              href="#thesis"
              className="inline-block focus-visible:outline-2 focus-visible:outline-[#0F172A]"
              aria-label="Refyn Venture Home"
            >
              <BrandLogo />
            </a>
            <p className="mt-5 text-xs text-[#64748B] leading-relaxed max-w-[28ch]">
              Independent software venture studio &amp; systems engineering
              practice.
            </p>
          </div>

          {/* Middle Chapter Index */}
          <nav aria-label="Monograph Chapters" className="my-8 lg:my-0">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B] mb-3">
              Monograph Index
            </div>
            <ol className="border-t border-[#E5E7EB] divide-y divide-[#E5E7EB] font-mono text-xs">
              <li>
                <a
                  href="#thesis"
                  className="py-3 flex items-center justify-between text-[#111318] hover:pl-1.5 transition-all"
                >
                  <span>I. Studio Thesis</span>
                  <span className="text-[#64748B] tabular-nums">01</span>
                </a>
              </li>
              <li>
                <a
                  href="#ventures"
                  className="py-3 flex items-center justify-between text-[#111318] hover:pl-1.5 transition-all"
                >
                  <span>II. In-House Ventures</span>
                  <span className="text-[#64748B] tabular-nums">02</span>
                </a>
              </li>
              <li>
                <a
                  href="#partner-systems"
                  className="py-3 flex items-center justify-between text-[#111318] hover:pl-1.5 transition-all"
                >
                  <span>III. Partner Systems</span>
                  <span className="text-[#64748B] tabular-nums">03</span>
                </a>
              </li>
              <li>
                <a
                  href="#colophon"
                  className="py-3 flex items-center justify-between text-[#111318] hover:pl-1.5 transition-all"
                >
                  <span>IV. Identity &amp; Colophon</span>
                  <span className="text-[#64748B] tabular-nums">04</span>
                </a>
              </li>
            </ol>
          </nav>

          {/* Bottom Operational Telemetry & Direct Action */}
          <div className="pt-6 border-t border-[#E5E7EB] space-y-4">
            <DhakaClock />
            <a
              href="#colophon"
              className="w-full min-h-[44px] px-4 py-3 bg-[#0F172A] text-[#F7F7F4] font-mono text-xs uppercase tracking-wider flex items-center justify-between hover:bg-[#1E293B] transition-colors"
            >
              <span>Initiate Dialogue</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </aside>

        {/* Right Primary Canvas (Cols 4-12) */}
        <main className="lg:col-span-9 divide-y divide-[#E5E7EB]">
          {/* CHAPTER I: STUDIO THESIS & HERO */}
          <section id="thesis" className="bg-[#F7F7F4]">
            {/* Top Architectural Metadata Bar */}
            <div className="px-6 sm:px-12 py-4 border-b border-[#E5E7EB] flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-wider text-[#64748B]">
              <span>INDEX 2026 — MONOGRAPH NO. 01</span>
              <span>FOUNDER: TANVIR ANJUM REFAT</span>
            </div>

            {/* Primary Editorial Statement */}
            <div className="px-6 sm:px-12 py-14 sm:py-24">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#64748B]">
                I. Venture Studio &amp; Systems Architecture
              </p>
              <h1 className="display-headline font-semibold text-[#111318] mt-5">
                Software that moves business forward.
              </h1>
              <p className="mt-8 text-base sm:text-lg text-[#0F172A] leading-relaxed max-w-[62ch]">
                Refyn Venture is a software venture builder and engineering lab.
                We originate proprietary vertical platforms and partner with
                ambitious operators to replace fragile paper ledgers and legacy
                bottlenecks with high-integrity software systems.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#ventures"
                  className="min-h-[46px] px-6 py-3 bg-[#0F172A] text-[#F7F7F4] font-mono text-xs uppercase tracking-wider inline-flex items-center gap-3 hover:bg-[#1E293B] transition-colors"
                >
                  <span>Examine Selected Works</span>
                  <span className="tabular-nums">(03)</span>
                </a>
                <a
                  href="#colophon"
                  className="min-h-[46px] px-6 py-3 bg-transparent border border-[#0F172A] text-[#0F172A] font-mono text-xs uppercase tracking-wider inline-flex items-center gap-3 hover:bg-[#E5E7EB] transition-colors"
                >
                  <span>Commission a System</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Dual Mandate Architectural Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#E5E7EB] divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB]">
              <div className="p-6 sm:p-10">
                <div className="flex items-baseline justify-between font-mono text-xs text-[#64748B] uppercase tracking-wider">
                  <span>Mandate A</span>
                  <span className="tabular-nums">01 / VENTURES</span>
                </div>
                <h2 className="text-xl font-semibold text-[#111318] mt-3">
                  Proprietary Product Incubation
                </h2>
                <p className="mt-2.5 text-sm text-[#64748B] leading-relaxed max-w-[54ch]">
                  We identify high-friction structural gaps in emerging
                  markets—from evening specialist healthcare queues to bilingual
                  literary publishing—and engineer enduring software ventures
                  from first principles.
                </p>
              </div>

              <div className="p-6 sm:p-10">
                <div className="flex items-baseline justify-between font-mono text-xs text-[#64748B] uppercase tracking-wider">
                  <span>Mandate B</span>
                  <span className="tabular-nums">02 / PARTNER SYSTEMS</span>
                </div>
                <h2 className="text-xl font-semibold text-[#111318] mt-3">
                  Bespoke Operational Engineering
                </h2>
                <p className="mt-2.5 text-sm text-[#64748B] leading-relaxed max-w-[54ch]">
                  We partner selectively with real-world enterprises to architect
                  audit-compliant POS counters, FEFO inventory engines, and
                  self-healing financial ledgers that survive power cuts and peak
                  load.
                </p>
              </div>
            </div>
          </section>

          {/* CHAPTER II: IN-HOUSE VENTURES */}
          <section id="ventures" className="bg-[#F7F7F4]">
            <div className="px-6 sm:px-12 py-6 border-b border-[#E5E7EB] flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#64748B]">
                  II. Portfolio — In-House Ventures
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#111318] mt-1">
                  Originated &amp; Engineered by Refyn Venture
                </h2>
              </div>
              <span className="font-mono text-xs text-[#64748B] tabular-nums">
                WORKS 01 — 02
              </span>
            </div>

            <div className="divide-y divide-[#E5E7EB]">
              {inHouseVentures.map((work) => (
                <article
                  key={work.id}
                  className="p-6 sm:p-12 space-y-8"
                  aria-labelledby={`work-title-${work.id}`}
                >
                  {/* Work Header & Narrative */}
                  <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                    <div className="xl:col-span-6 space-y-4">
                      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-[#64748B] tabular-nums">
                        <span className="text-[#0F172A] font-semibold">
                          WORK {work.index}
                        </span>
                        <span>·</span>
                        <span>{work.track}</span>
                        <span>·</span>
                        <span>{work.nativeTitle}</span>
                      </div>

                      <h3
                        id={`work-title-${work.id}`}
                        className="work-headline font-semibold text-[#111318]"
                      >
                        {work.title} — {work.subtitle}
                      </h3>

                      <p className="text-sm sm:text-base text-[#0F172A] leading-relaxed max-w-[60ch]">
                        {work.summary}
                      </p>
                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-[60ch]">
                        {work.problemContext}
                      </p>

                      <div className="pt-2">
                        <a
                          href={work.repositoryUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#0F172A] border-b border-[#0F172A] pb-0.5 hover:text-[#64748B] hover:border-[#64748B] transition-colors"
                        >
                          <span>Inspect Repository ({work.repositoryLabel})</span>
                          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Flush Swiss Specification Ledger */}
                    <div className="xl:col-span-6 border border-[#E5E7EB] bg-white">
                      <div className="px-4 py-2.5 border-b border-[#E5E7EB] bg-[#F7F7F4] font-mono text-[10px] uppercase tracking-wider text-[#64748B]">
                        Architectural Specification Ledger
                      </div>
                      <dl className="divide-y divide-[#E5E7EB] text-xs">
                        {work.ledger.map((row) => (
                          <div
                            key={row.label}
                            className="grid grid-cols-1 sm:grid-cols-12 px-4 py-3 gap-1 sm:gap-3"
                          >
                            <dt className="sm:col-span-4 font-mono text-[11px] uppercase tracking-wider text-[#64748B]">
                              {row.label}
                            </dt>
                            <dd className="sm:col-span-8 text-[#0F172A] font-medium">
                              {row.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>

                  {/* Interactive Live Specimen */}
                  <div>{renderSpecimen(work.id)}</div>
                </article>
              ))}
            </div>
          </section>

          {/* CHAPTER III: PARTNER ENGINEERED SYSTEMS */}
          <section id="partner-systems" className="bg-[#F7F7F4]">
            <div className="px-6 sm:px-12 py-6 border-b border-[#E5E7EB] flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#64748B]">
                  III. Selected Client Architecture — Partner Systems
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#111318] mt-1">
                  Production Systems for Real-World Operators
                </h2>
              </div>
              <span className="font-mono text-xs text-[#64748B] tabular-nums">
                WORK 03
              </span>
            </div>

            {partnerSystems.map((work) => (
              <article
                key={work.id}
                className="p-6 sm:p-12 space-y-8"
                aria-labelledby={`work-title-${work.id}`}
              >
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                  <div className="xl:col-span-6 space-y-4">
                    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-[#64748B] tabular-nums">
                      <span className="text-[#0F172A] font-semibold">
                        WORK {work.index}
                      </span>
                      <span>·</span>
                      <span>{work.track}</span>
                      <span>·</span>
                      <span>{work.nativeTitle}</span>
                    </div>

                    <h3
                      id={`work-title-${work.id}`}
                      className="work-headline font-semibold text-[#111318]"
                    >
                      {work.title} — {work.subtitle}
                    </h3>

                    <p className="text-sm sm:text-base text-[#0F172A] leading-relaxed max-w-[60ch]">
                      {work.summary}
                    </p>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-[60ch]">
                      {work.problemContext}
                    </p>

                    <div className="pt-2">
                      <a
                        href={work.repositoryUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#0F172A] border-b border-[#0F172A] pb-0.5 hover:text-[#64748B] hover:border-[#64748B] transition-colors"
                      >
                        <span>Inspect Repository ({work.repositoryLabel})</span>
                        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                          <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Flush Swiss Specification Ledger */}
                  <div className="xl:col-span-6 border border-[#E5E7EB] bg-white">
                    <div className="px-4 py-2.5 border-b border-[#E5E7EB] bg-[#F7F7F4] font-mono text-[10px] uppercase tracking-wider text-[#64748B]">
                      Enterprise Deployment Ledger
                    </div>
                    <dl className="divide-y divide-[#E5E7EB] text-xs">
                      {work.ledger.map((row) => (
                        <div
                          key={row.label}
                          className="grid grid-cols-1 sm:grid-cols-12 px-4 py-3 gap-1 sm:gap-3"
                        >
                          <dt className="sm:col-span-4 font-mono text-[11px] uppercase tracking-wider text-[#64748B]">
                            {row.label}
                          </dt>
                          <dd className="sm:col-span-8 text-[#0F172A] font-medium">
                            {row.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                {/* Interactive Live Specimen */}
                <div>{renderSpecimen(work.id)}</div>
              </article>
            ))}
          </section>

          {/* CHAPTER IV: DARK MONOGRAPH BAND — ENGINEERING STANDARD, IDENTITY & COLOPHON */}
          <section
            id="colophon"
            className="bg-[#0F172A] text-[#F7F7F4] divide-y divide-[#1E293B]"
          >
            {/* Section 4A: The Refyn Engineering Standard */}
            <div className="p-6 sm:p-12">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#94A3B8]">
                IV. Architectural Principles
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold text-[#F7F7F4] mt-2">
                The Refyn Venture Standard
              </h2>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 border border-[#1E293B] divide-y md:divide-y-0 md:divide-x divide-[#1E293B]">
                <div className="p-6">
                  <div className="font-mono text-xs text-[#94A3B8] tabular-nums">
                    PRINCIPLE 01
                  </div>
                  <h3 className="text-base font-semibold text-[#F7F7F4] mt-2">
                    Invariants at the Database Boundary
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                    Financial ledgers and serial queues are enforced via row-level
                    locks, SQL CHECK constraints, and self-healing reconciliation
                    engines—never fragile client assumptions.
                  </p>
                </div>

                <div className="p-6">
                  <div className="font-mono text-xs text-[#94A3B8] tabular-nums">
                    PRINCIPLE 02
                  </div>
                  <h3 className="text-base font-semibold text-[#F7F7F4] mt-2">
                    Field-Tested Operator Ergonomics
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                    Designed for 5-second execution at busy hospital desks and
                    rural retail counters, with offline-tolerant state recovery
                    and proprietor margin privacy.
                  </p>
                </div>

                <div className="p-6">
                  <div className="font-mono text-xs text-[#94A3B8] tabular-nums">
                    PRINCIPLE 03
                  </div>
                  <h3 className="text-base font-semibold text-[#F7F7F4] mt-2">
                    Quiet, Enduring Modularity
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                    We favor Spring Modulith and strongly typed domain contracts
                    over premature microservice sprawl—delivering systems that
                    remain maintainable for a decade.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4B: Brand Identity System & Deliverables Specimen */}
            <div className="p-6 sm:p-12 space-y-8">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#94A3B8]">
                    Brand Identity System
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#F7F7F4] mt-1">
                    Refyn Venture Mark, Palette &amp; Deliverables
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3 font-mono text-[11px]">
                  <a
                    href="/brand/refyn-monogram.svg"
                    download
                    className="px-3 py-2 border border-[#334155] text-[#F7F7F4] hover:bg-[#1E293B] transition-colors"
                  >
                    Download R Monogram SVG
                  </a>
                  <a
                    href="/brand/refyn-lockup-light.svg"
                    download
                    className="px-3 py-2 border border-[#334155] text-[#F7F7F4] hover:bg-[#1E293B] transition-colors"
                  >
                    Download Light Lockup SVG
                  </a>
                  <a
                    href="/brand/refyn-lockup-dark.svg"
                    download
                    className="px-3 py-2 border border-[#334155] text-[#F7F7F4] hover:bg-[#1E293B] transition-colors"
                  >
                    Download Dark Lockup SVG
                  </a>
                </div>
              </div>

              {/* Monogram App Icon Specimen + Palette Swatches */}
              <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#1E293B] divide-y lg:divide-y-0 lg:divide-x divide-[#1E293B]">
                {/* Left: Dark & Light R Monogram App Icon Tiles */}
                <div className="lg:col-span-5 p-6 flex items-center justify-around bg-[#111318]">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 bg-[#0F172A] border border-[#334155] flex items-center justify-center text-[#F7F7F4]">
                      <RefynMonogramSvg className="w-12 h-12" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#94A3B8]">
                      Dark Icon (#0F172A)
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 bg-[#F7F7F4] border border-[#E5E7EB] flex items-center justify-center text-[#0F172A]">
                      <RefynMonogramSvg className="w-12 h-12" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#94A3B8]">
                      Light Icon (#F7F7F4)
                    </span>
                  </div>
                </div>

                {/* Right: 4 Restrained Neutral Color Swatches */}
                <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#1E293B]">
                  {BRAND_TOKENS.map((swatch) => (
                    <div
                      key={swatch.hex}
                      className="p-4 flex flex-col justify-between"
                    >
                      <div
                        className="w-full h-10 border border-[#334155]"
                        style={{ backgroundColor: swatch.hex }}
                        aria-hidden="true"
                      />
                      <div className="mt-3">
                        <div className="text-xs font-semibold text-[#F7F7F4]">
                          {swatch.name}
                        </div>
                        <div className="font-mono text-[11px] text-[#94A3B8] tabular-nums mt-0.5">
                          {swatch.hex}
                        </div>
                        <p className="text-[11px] text-[#64748B] mt-1 leading-snug">
                          {swatch.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 4C: Founder & Direct Inquiry Colophon */}
            <footer className="p-6 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-7 space-y-4">
                <BrandLogo theme="dark" showTagline />
                <p className="text-xs text-[#94A3B8] leading-relaxed max-w-[54ch] pt-2">
                  Founded and led by{" "}
                  <strong className="text-[#F7F7F4] font-medium">
                    Tanvir Anjum Refat
                  </strong>
                  . Available for selective venture co-creation, enterprise
                  systems architecture, and technical advisory.
                </p>
              </div>

              <div className="md:col-span-5 flex flex-col sm:items-end justify-between space-y-4 font-mono text-xs">
                <div className="flex flex-wrap gap-6">
                  <a
                    href="https://github.com/tanvir70"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#F7F7F4] hover:text-[#94A3B8] border-b border-[#F7F7F4] pb-0.5 transition-colors"
                  >
                    <span>GitHub (tanvir70)</span>
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
                    </svg>
                  </a>
                  <a
                    href="mailto:tanvir@refyn.ventures?subject=Refyn%20Venture%20Inquiry"
                    className="text-[#F7F7F4] hover:text-[#94A3B8] border-b border-[#F7F7F4] pb-0.5 transition-colors"
                  >
                    tanvir@refyn.ventures →
                  </a>
                </div>
                <div className="text-[11px] text-[#64748B] tabular-nums">
                  COPYRIGHT 2026 REFYN VENTURE. ALL RIGHTS RESERVED.
                </div>
              </div>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}

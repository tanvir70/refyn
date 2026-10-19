import React from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { HeaderBrand } from "@/components/HeaderBrand";
import { DhakaClock } from "@/components/DhakaClock";
import { AntigravityParticles } from "@/components/AntigravityParticles";
import { TypewriterTagline } from "@/components/TypewriterTagline";
import { HeroStageSwitcher } from "@/components/HeroStageSwitcher";
import { DrPageSpecimen } from "@/components/specimens/DrPageSpecimen";
import { PristhaSpecimen } from "@/components/specimens/PristhaSpecimen";
import { AgroPosSpecimen } from "@/components/specimens/AgroPosSpecimen";
import { MONOGRAPH_WORKS } from "@/data/monograph";

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

const USE_CASES = [
  {
    role: "Healthcare & Chamber Operators",
    domain: "Dr.Page · Clinical Queue Engine",
    headline: "Eliminate waiting-room congestion with atomic serial locking.",
    body: "Coordinate specialist doctors, front-desk compounders, and remote patients across web and SMS with zero duplicate tokens.",
    href: "#work-dr-page",
    cta: "Explore Dr.Page",
    badge: "0.0% Duplicate Rate",
  },
  {
    role: "Authors & Literary Publishers",
    domain: "Pristha · Bilingual Workspace",
    headline: "Write, typeset, and publish Bengali & English books in one studio.",
    body: "Transition seamlessly from distraction-free manuscript drafting to calibrated reader folios and ISBN print production.",
    href: "#work-pristha",
    cta: "Explore Pristha",
    badge: "3 Unified Surfaces",
  },
  {
    role: "Enterprise & Trade Dealerships",
    domain: "POS · Trade Core",
    headline: "Enforce FEFO batch safety and self-healing credit ledgers.",
    body: "Dispatch split stock across Dokan counters and Godown warehouses while protecting wholesale margins behind a 4-digit Owner PIN.",
    href: "#work-agro-pos",
    cta: "Explore POS Core",
    badge: "85/85 Invariant Tests",
  },
] as const;

const BOUNCER_ICONS = [
  // 1. Terminal / Code
  <path
    key="1"
    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
  />,
  // 2. Database Lock
  <path
    key="2"
    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  />,
  // 3. Layers / Modulith
  <path
    key="3"
    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
  />,
  // 4. Activity / Telemetry
  <path key="4" d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  // 5. Book / Folio
  <path
    key="5"
    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  />,
  // 6. Shield Check / Audit
  <path
    key="6"
    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  />,
  // 7. Cube / Warehouse
  <path
    key="7"
    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
  />,
  // 8. CPU / Concurrency
  <path
    key="8"
    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
  />,
  // 9. Globe / Bilingual
  <path
    key="9"
    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
  />,
];

export default function HomePage() {
  const drPageWork = MONOGRAPH_WORKS.find((w) => w.id === "dr-page")!;
  const pristhaWork = MONOGRAPH_WORKS.find((w) => w.id === "pristha")!;
  const agroPosWork = MONOGRAPH_WORKS.find((w) => w.id === "agro-pos")!;

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#121317] selection:bg-[#121317] selection:text-[#FFFFFF]">
      {/* SCROLL-REACTIVE ANTIGRAVITY HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FFFFFF]/88 border-b border-[#212226]/[0.06] transition-colors">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-12 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <HeaderBrand />

            <nav
              aria-label="Studio Navigation"
              className="hidden md:flex items-center gap-1"
            >
              <a
                href="#products"
                className="px-4 py-1.5 rounded-full text-[14.5px] font-medium text-[#45474D] hover:text-[#121317] hover:bg-[#EFF2F7] transition-colors"
              >
                Products
              </a>
              <a
                href="#work-dr-page"
                className="px-4 py-1.5 rounded-full text-[14.5px] font-medium text-[#45474D] hover:text-[#121317] hover:bg-[#EFF2F7] transition-colors"
              >
                Ventures
              </a>
              <a
                href="#work-agro-pos"
                className="px-4 py-1.5 rounded-full text-[14.5px] font-medium text-[#45474D] hover:text-[#121317] hover:bg-[#EFF2F7] transition-colors"
              >
                Partner Systems
              </a>
              <a
                href="#use-cases"
                className="px-4 py-1.5 rounded-full text-[14.5px] font-medium text-[#45474D] hover:text-[#121317] hover:bg-[#EFF2F7] transition-colors"
              >
                Use Cases
              </a>
              <a
                href="#principles"
                className="px-4 py-1.5 rounded-full text-[14.5px] font-medium text-[#45474D] hover:text-[#121317] hover:bg-[#EFF2F7] transition-colors"
              >
                Architecture
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <DhakaClock />
            </div>
            <a
              href="#initiate"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#121317] text-[#FFFFFF] text-[14.5px] font-medium hover:bg-[#2F3034] transition-colors"
            >
              <span>Initiate Project</span>
              <svg
                viewBox="0 0 16 16"
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M3.5 8h9m0 0L8.5 4m4 4l-4 4" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* SECTION 1: ANTIGRAVITY WELCOME HERO WITH INTERACTIVE PARTICLE FIELD */}
        <section
          id="welcome"
          className="relative min-h-[84svh] flex flex-col items-center justify-center overflow-hidden px-5 sm:px-12 pt-16 pb-20"
        >
          <AntigravityParticles theme="light" density={235} />

          <div className="relative z-10 max-w-[1120px] mx-auto text-center flex flex-col items-center">
            {/* Brand Pill above Headline */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8F9FC] border border-[#212226]/[0.08] shadow-[0_2px_10px_rgba(18,19,23,0.03)] mb-8">
              <BrandLogo
                variant="monogram"
                theme="light"
                className="h-4 w-4"
              />
              <span className="text-[13.5px] font-medium text-[#121317]">
                Refyn Venture
              </span>
              <span className="text-[#B2BBC5]">·</span>
              <span className="text-[13px] text-[#45474D]">
                Product Studio &amp; Systems Lab
              </span>
            </div>

            {/* Main Antigravity Display Headline */}
            <h1 className="text-[2.6rem] sm:text-[4rem] lg:text-[5rem] font-medium tracking-[-0.025em] leading-[1.08] text-balance text-[#121317]">
              <span className="block">
                <TypewriterTagline />
              </span>
              <span className="block mt-2 text-[1.75rem] sm:text-[2.65rem] lg:text-[3.4rem] text-[#45474D] font-normal">
                Engineered for high-trust operations
              </span>
            </h1>

            <p className="mt-7 max-w-[62ch] text-[16.5px] sm:text-[18.5px] leading-[1.58] text-[#45474D] font-normal">
              Founded by{" "}
              <strong className="font-medium text-[#121317]">
                Tanvir Anjum Refat
              </strong>
              , Refyn Venture builds category-defining digital ventures and
              partners with ambitious organizations to engineer zero-duplicate
              queues, bilingual publishing workspaces, and self-healing
              financial ledgers.
            </p>

            {/* Centered Pill CTA Row */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#121317] text-[#FFFFFF] text-[16px] font-medium hover:bg-[#2F3034] transition-colors"
              >
                <span>Explore Products</span>
              </a>
              <a
                href="#initiate"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#B7BFD9]/20 text-[#121317] text-[16px] font-medium hover:bg-[#EFF2F7] backdrop-blur-xs transition-colors"
              >
                <span>Commission a System</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: MONUMENTAL ROUNDED-[36PX] INTERACTIVE RUNTIME STAGE */}
        <section className="max-w-[1600px] mx-auto px-5 sm:px-12 pb-20">
          <HeroStageSwitcher />
        </section>

        {/* SECTION 3: FLOATING BOUNCER ICON ORBS & KINETIC STATEMENT */}
        <section className="py-20 sm:py-28 overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-5 sm:px-12">
            {/* Floating Circular Orbs (Antigravity .icon-list / .bouncer) */}
            <ul
              className="flex items-center justify-center gap-2 sm:gap-3.5 overflow-x-auto no-scrollbar py-4"
              aria-hidden="true"
            >
              {BOUNCER_ICONS.map((iconPath, idx) => (
                <li key={idx} className="shrink-0">
                  <div
                    className="agy-bouncer w-16 h-16 sm:w-[92px] sm:h-[92px] rounded-full bg-[#B7BFD9]/[0.12] border border-[#212226]/[0.06] flex items-center justify-center text-[#121317]"
                    style={{ animationDelay: `${idx * 0.22}s` }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {iconPath}
                    </svg>
                  </div>
                </li>
              ))}
            </ul>

            {/* Oversized Editorial Statement */}
            <div className="mt-16 sm:mt-24 max-w-[1080px]">
              <p className="text-[1.85rem] sm:text-[2.75rem] lg:text-[3.35rem] font-medium tracking-[-0.02em] leading-[1.15] text-[#121317]">
                Refyn Venture is our software development and venture studio,
                allowing doctors, authors, and enterprise operators to run on
                deterministic, audit-grade systems.
                <span className="agy-cursor" aria-hidden="true" />
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: FEATURE EXPLORER — THE 3 FLAGSHIP SYSTEMS & LIVE SPECIMENS */}
        <section
          id="products"
          className="border-t border-[#212226]/[0.06] py-20 sm:py-28"
        >
          <div className="max-w-[1600px] mx-auto px-5 sm:px-12 space-y-28 sm:space-y-36">
            {/* FEATURE ITEM 01: DR.PAGE */}
            <div
              id="work-dr-page"
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start scroll-mt-24"
            >
              <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
                <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-[#F8F9FC] border border-[#212226]/[0.08] text-xs font-medium text-[#45474D]">
                  <span className="font-mono text-[#121317]">
                    {drPageWork.index}
                  </span>
                  <span>·</span>
                  <span>{drPageWork.track}</span>
                  <span>·</span>
                  <span className="font-bengali text-[#121317]">
                    {drPageWork.nativeTitle}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-[42px] font-medium tracking-[-0.02em] leading-[1.08] text-[#121317]">
                  {drPageWork.title}
                </h2>

                <p className="text-lg font-medium text-[#3279F9] tracking-tight">
                  {drPageWork.subtitle}
                </p>

                <p className="text-[16.5px] leading-[1.6] text-[#45474D]">
                  {drPageWork.summary}
                </p>

                <p className="text-sm leading-[1.6] text-[#45474D]">
                  {drPageWork.problemContext}
                </p>

                <dl className="grid grid-cols-2 gap-2.5 pt-2">
                  {drPageWork.ledger.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-3.5 rounded-2xl bg-[#F8F9FC] border border-[#212226]/[0.06]"
                    >
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-[#45474D]">
                        {spec.label}
                      </dt>
                      <dd className="mt-1 text-xs font-medium text-[#121317] leading-snug">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="pt-2">
                  <a
                    href={drPageWork.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EFF2F7] hover:bg-[#E6EAF0] text-[#121317] text-sm font-medium transition-colors"
                  >
                    <span>Inspect Repository ({drPageWork.repositoryLabel})</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="rounded-[36px] bg-[#F8F9FC] border border-[#212226]/[0.06] p-3 sm:p-6 shadow-[0_20px_60px_-24px_rgba(18,19,23,0.07)]">
                  <DrPageSpecimen />
                </div>
              </div>
            </div>

            {/* FEATURE ITEM 02: PRISTHA */}
            <div
              id="work-pristha"
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-16 border-t border-[#212226]/[0.06] scroll-mt-24"
            >
              <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
                <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-[#F8F9FC] border border-[#212226]/[0.08] text-xs font-medium text-[#45474D]">
                  <span className="font-mono text-[#121317]">
                    {pristhaWork.index}
                  </span>
                  <span>·</span>
                  <span>{pristhaWork.track}</span>
                  <span>·</span>
                  <span className="font-bengali text-[#121317]">
                    {pristhaWork.nativeTitle}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-[42px] font-medium tracking-[-0.02em] leading-[1.08] text-[#121317]">
                  {pristhaWork.title}
                </h2>

                <p className="text-lg font-medium text-[#3279F9] tracking-tight">
                  {pristhaWork.subtitle}
                </p>

                <p className="text-[16.5px] leading-[1.6] text-[#45474D]">
                  {pristhaWork.summary}
                </p>

                <p className="text-sm leading-[1.6] text-[#45474D]">
                  {pristhaWork.problemContext}
                </p>

                <dl className="grid grid-cols-2 gap-2.5 pt-2">
                  {pristhaWork.ledger.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-3.5 rounded-2xl bg-[#F8F9FC] border border-[#212226]/[0.06]"
                    >
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-[#45474D]">
                        {spec.label}
                      </dt>
                      <dd className="mt-1 text-xs font-medium text-[#121317] leading-snug">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="pt-2">
                  <a
                    href={pristhaWork.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EFF2F7] hover:bg-[#E6EAF0] text-[#121317] text-sm font-medium transition-colors"
                  >
                    <span>
                      Inspect Repository ({pristhaWork.repositoryLabel})
                    </span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="rounded-[36px] bg-[#F8F9FC] border border-[#212226]/[0.06] p-3 sm:p-6 shadow-[0_20px_60px_-24px_rgba(18,19,23,0.07)]">
                  <PristhaSpecimen />
                </div>
              </div>
            </div>

            {/* FEATURE ITEM 03: RAJIB ENTERPRISE POS */}
            <div
              id="work-agro-pos"
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-16 border-t border-[#212226]/[0.06] scroll-mt-24"
            >
              <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
                <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-[#F8F9FC] border border-[#212226]/[0.08] text-xs font-medium text-[#45474D]">
                  <span className="font-mono text-[#121317]">
                    {agroPosWork.index}
                  </span>
                  <span>·</span>
                  <span>{agroPosWork.track}</span>
                  <span>·</span>
                  <span className="font-bengali text-[#121317]">
                    {agroPosWork.nativeTitle}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-[42px] font-medium tracking-[-0.02em] leading-[1.08] text-[#121317]">
                  {agroPosWork.title}
                </h2>

                <p className="text-lg font-medium text-[#3279F9] tracking-tight">
                  {agroPosWork.subtitle}
                </p>

                <p className="text-[16.5px] leading-[1.6] text-[#45474D]">
                  {agroPosWork.summary}
                </p>

                <p className="text-sm leading-[1.6] text-[#45474D]">
                  {agroPosWork.problemContext}
                </p>

                <dl className="grid grid-cols-2 gap-2.5 pt-2">
                  {agroPosWork.ledger.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-3.5 rounded-2xl bg-[#F8F9FC] border border-[#212226]/[0.06]"
                    >
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-[#45474D]">
                        {spec.label}
                      </dt>
                      <dd className="mt-1 text-xs font-medium text-[#121317] leading-snug">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="pt-2">
                  <a
                    href={agroPosWork.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EFF2F7] hover:bg-[#E6EAF0] text-[#121317] text-sm font-medium transition-colors"
                  >
                    <span>
                      Inspect Repository ({agroPosWork.repositoryLabel})
                    </span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="rounded-[36px] bg-[#F8F9FC] border border-[#212226]/[0.06] p-3 sm:p-6 shadow-[0_20px_60px_-24px_rgba(18,19,23,0.07)]">
                  <AgroPosSpecimen />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: ANTIGRAVITY USE-CASE CARDS ("Built for operators / for the high-trust era") */}
        <section
          id="use-cases"
          className="border-t border-[#212226]/[0.06] py-20 sm:py-28"
        >
          <div className="max-w-[1600px] mx-auto px-5 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
              <div className="lg:col-span-7">
                <h2 className="text-[2.25rem] sm:text-[3.35rem] font-medium tracking-[-0.02em] leading-[1.08]">
                  <span className="block text-[#121317]">
                    Built for operators
                  </span>
                  <span className="block text-[#45474D]">
                    for the high-trust era
                  </span>
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[17px] leading-[1.58] text-[#45474D]">
                  Refyn Venture systems are engineered for operational trust—whether
                  you are managing a high-volume evening specialist clinic,
                  publishing bilingual literature, or running a multi-warehouse
                  agrochemical dealership.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {USE_CASES.map((uc) => (
                <div
                  key={uc.role}
                  className="group rounded-[36px] bg-[#F8F9FC] border border-[#212226]/[0.06] p-7 sm:p-9 flex flex-col justify-between hover:bg-[#EFF2F7]/70 transition-colors"
                >
                  <div>
                    {/* Dark Rounded Media Header inside card matching Antigravity slide-image-wrapper */}
                    <div className="rounded-[24px] bg-[#121317] text-white p-6 mb-7 relative overflow-hidden">
                      <div className="flex items-center justify-between gap-2 mb-6">
                        <span className="text-xs font-mono text-[#B2BBC5]">
                          {uc.domain}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[11px] font-mono text-[#93C5FD]">
                          {uc.badge}
                        </span>
                      </div>
                      <div className="text-xl sm:text-2xl font-medium tracking-tight text-white">
                        {uc.role}
                        <span className="agy-cursor" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="text-xl font-medium tracking-[-0.015em] text-[#121317] leading-snug">
                      {uc.headline}
                    </h3>
                    <p className="mt-3 text-[15.5px] leading-[1.6] text-[#45474D]">
                      {uc.body}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#212226]/[0.06]">
                    <a
                      href={uc.href}
                      className="inline-flex items-center gap-2 text-[15px] font-medium text-[#121317] group-hover:text-[#3279F9] transition-colors"
                    >
                      <span>{uc.cta}</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: ARCHITECTURAL PRINCIPLES (4-COLUMN ANTIGRAVITY GRID) */}
        <section
          id="principles"
          className="border-t border-[#212226]/[0.06] py-20 sm:py-28"
        >
          <div className="max-w-[1600px] mx-auto px-5 sm:px-12">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-sm font-medium text-[#3279F9] mb-2">
                  Systems Doctrine
                </p>
                <h2 className="text-[2rem] sm:text-[2.75rem] font-medium tracking-[-0.02em] leading-[1.1] text-[#121317]">
                  The Refyn Venture Standard
                </h2>
              </div>
              <p className="text-sm text-[#45474D] max-w-[46ch]">
                Every in-house venture and partner-commissioned platform ships
                against four non-negotiable engineering invariants.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ARCHITECTURAL_PRINCIPLES.map((principle) => (
                <div
                  key={principle.index}
                  className="rounded-[28px] bg-[#F8F9FC] border border-[#212226]/[0.06] p-7 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#EFF2F7] font-mono text-xs font-medium text-[#121317]">
                      {principle.index}
                    </span>
                    <h3 className="mt-6 text-xl font-medium tracking-[-0.015em] text-[#121317]">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.6] text-[#45474D]">
                      {principle.body}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#212226]/[0.06] flex items-center justify-between text-xs font-mono text-[#45474D]">
                    <span>INVARIANT {principle.index}</span>
                    <span className="text-[#121317]">VERIFIED</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: 50/50 DUAL SOLUTIONS SPLIT (Matching Antigravity .try-solutions-section) */}
        <section className="border-t border-[#212226]/[0.06] py-14">
          <div className="max-w-[1600px] mx-auto px-5 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#212226]/[0.06]">
              {/* Left 50%: In-House Ventures */}
              <div className="py-16 sm:py-24 px-4 sm:px-12 text-center flex flex-col items-center justify-center">
                <span className="px-3 py-1 rounded-md bg-[#F8F9FC] border border-[#212226]/[0.08] text-xs font-medium text-[#45474D] mb-4">
                  In-House Venture Lab
                </span>
                <h3 className="text-3xl sm:text-[40px] font-medium tracking-[-0.02em] text-[#121317]">
                  For everyday operators
                </h3>
                <p className="mt-1 text-2xl sm:text-[32px] font-normal tracking-[-0.015em] text-[#45474D] mb-8">
                  Category-defining platforms
                </p>
                <a
                  href="#work-dr-page"
                  className="px-6 py-3 rounded-full bg-[#121317] text-white text-[15px] font-medium hover:bg-[#2F3034] transition-colors"
                >
                  Explore Ventures
                </a>
              </div>

              {/* Right 50%: Partner Engineering */}
              <div className="py-16 sm:py-24 px-4 sm:px-12 text-center flex flex-col items-center justify-center">
                <span className="px-3 py-1 rounded-md bg-[#F8F9FC] border border-[#212226]/[0.08] text-xs font-medium text-[#45474D] mb-4">
                  Selective Commissioning
                </span>
                <h3 className="text-3xl sm:text-[40px] font-medium tracking-[-0.02em] text-[#121317]">
                  For organizations
                </h3>
                <p className="mt-1 text-2xl sm:text-[32px] font-normal tracking-[-0.015em] text-[#45474D] mb-8">
                  Level up your operational core
                </p>
                <a
                  href="#initiate"
                  className="px-6 py-3 rounded-full bg-[#EFF2F7] text-[#121317] text-[15px] font-medium hover:bg-[#E6EAF0] transition-colors"
                >
                  Commission a System
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: MONUMENTAL DARK ROUNDED-[36PX] PARTICLE CTA CONTAINER */}
        <section
          id="initiate"
          className="max-w-[1600px] mx-auto px-5 sm:px-12 py-10"
        >
          <div className="relative rounded-[36px] bg-[#121317] text-[#FFFFFF] overflow-hidden py-24 sm:py-32 px-6 sm:px-16 text-center">
            <AntigravityParticles theme="dark" density={220} />

            <div className="relative z-10 max-w-[820px] mx-auto flex flex-col items-center">
              <span className="px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-xs font-medium text-[#E6EAF0] mb-6">
                Refyn Venture · Systems &amp; Venture Commissioning
              </span>

              <h2 className="text-[2.25rem] sm:text-[3.5rem] lg:text-[4.25rem] font-medium tracking-[-0.025em] leading-[1.08] text-white">
                Build the next generation with Refyn Venture
                <span className="agy-cursor" aria-hidden="true" />
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#B2BBC5] max-w-[54ch] leading-relaxed">
                Partner directly with founder and principal architect Tanvir
                Anjum Refat to engineer high-consequence software platforms.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://github.com/tanvir70"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full bg-[#FFFFFF] text-[#121317] text-[16px] font-medium hover:bg-[#E6EAF0] transition-colors"
                >
                  GitHub (Tanvir Anjum Refat) →
                </a>
                <a
                  href="https://github.com/tanvir70/refyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full bg-white/[0.1] border border-white/15 text-[#FFFFFF] text-[16px] font-medium hover:bg-white/[0.16] transition-colors"
                >
                  View Studio Repository
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CLEAN DAYLIGHT ANTIGRAVITY FOOTER */}
      <footer className="bg-[#FFFFFF] pt-16 pb-14 border-t border-[#212226]/[0.06] mt-12">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#212226]/[0.06]">
            <div className="md:col-span-5 space-y-4">
              <BrandLogo variant="lockup" theme="light" />
              <p className="text-sm text-[#45474D] max-w-[38ch] leading-relaxed">
                Software that moves business forward. Independent software
                venture studio and systems engineering lab based in Dhaka,
                Bangladesh.
              </p>
            </div>

            <div className="md:col-span-3 space-y-2.5 text-sm">
              <div className="font-medium text-[#121317] mb-3">Products</div>
              <div>
                <a
                  href="#work-dr-page"
                  className="text-[#45474D] hover:text-[#121317] transition-colors"
                >
                  Dr.Page (ডাক্তার পেইজ)
                </a>
              </div>
              <div>
                <a
                  href="#work-pristha"
                  className="text-[#45474D] hover:text-[#121317] transition-colors"
                >
                  Pristha (পৃষ্ঠা)
                </a>
              </div>
              <div>
                <a
                  href="#work-agro-pos"
                  className="text-[#45474D] hover:text-[#121317] transition-colors"
                >
                  POS
                </a>
              </div>
            </div>

            <div className="md:col-span-4 space-y-2.5 text-sm">
              <div className="font-medium text-[#121317] mb-3">
                Repositories &amp; Architecture
              </div>
              <div>
                <a
                  href="https://github.com/tanvir70/dr-page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#45474D] hover:text-[#121317] transition-colors"
                >
                  github.com/tanvir70/dr-page →
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/tanvir70/pristha-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#45474D] hover:text-[#121317] transition-colors"
                >
                  github.com/tanvir70/pristha-frontend →
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/tanvir70/pos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#45474D] hover:text-[#121317] transition-colors"
                >
                  github.com/tanvir70/pos →
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-[#45474D]">
            <div>
              COPYRIGHT 2026 Refyn Venture. Founded by Tanvir Anjum Refat. All
              rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#welcome"
                className="hover:text-[#121317] transition-colors"
              >
                Back to top
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

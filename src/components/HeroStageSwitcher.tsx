"use client";

import React, { useState } from "react";

interface StageSlide {
  id: string;
  index: string;
  title: string;
  nativeTitle: string;
  track: string;
  headline: string;
  description: string;
  runtimeTag: string;
  anchorHref: string;
  repoUrl: string;
  metrics: { label: string; value: string }[];
  terminalLines: { label: string; detail: string; status: string }[];
}

const STAGE_SLIDES: StageSlide[] = [
  {
    id: "dr-page",
    index: "01",
    title: "Dr.Page",
    nativeTitle: "ডাক্তার পেইজ",
    track: "In-House Venture",
    headline: "Real-time clinical serial & chamber concurrency engine",
    description:
      "Replaces chaotic hospital waiting rooms and paper token books with pessimistic PostgreSQL row locking and live Server-Sent Events (SSE) queue telemetry.",
    runtimeTag: "Java 25 Virtual Threads · Spring Modulith 1.3 · PostgreSQL 17",
    anchorHref: "#work-dr-page",
    repoUrl: "https://github.com/tanvir70/dr-page",
    metrics: [
      { label: "Duplicate Serials", value: "0.0%" },
      { label: "Lock Isolation", value: "FOR UPDATE" },
      { label: "Live Telemetry", value: "SSE Push" },
    ],
    terminalLines: [
      {
        label: "SERIAL_LOCK_ACQUIRED",
        detail: "Chamber #402 · Evening Slot · Token #18 assigned atomically",
        status: "COMMITTED",
      },
      {
        label: "SSE_BROADCAST_DISPATCH",
        detail: "Now Serving #16 → 2 patients ahead · Est. wait 16 mins",
        status: "LIVE_STREAM",
      },
      {
        label: "WALK_IN_RECONCILIATION",
        detail: "Receptionist desk & remote SMS booking unified on single ledger",
        status: "VERIFIED",
      },
    ],
  },
  {
    id: "pristha",
    index: "02",
    title: "Pristha",
    nativeTitle: "পৃষ্ঠা",
    track: "In-House Venture",
    headline: "Bilingual literary reading, writing, and publishing workspace",
    description:
      "Unifies distraction-free Bengali & English digital book folios, an autosaving author manuscript studio, and an ISBN editorial production desk.",
    runtimeTag: "Next.js 16 · React 19 · Calibrated Noto Serif Bengali Typography",
    anchorHref: "#work-pristha",
    repoUrl: "https://github.com/tanvir70/pristha-frontend",
    metrics: [
      { label: "Core Surfaces", value: "3 Workspaces" },
      { label: "Script Engine", value: "BN + EN" },
      { label: "Draft Sync", value: "Zero-Jitter" },
    ],
    terminalLines: [
      {
        label: "READER_FOLIO_RENDER",
        detail: "Optically balanced line-height (1.78) for long-form Bengali prose",
        status: "CALIBRATED",
      },
      {
        label: "WRITER_STUDIO_AUTOSAVE",
        detail: "Chapter III · 4,820 words · Local-first snapshot committed",
        status: "SYNCED",
      },
      {
        label: "PUBLISHER_DESK_GATE",
        detail: "Galley proof verified · Print & digital EPUB manifest ready",
        status: "APPROVED",
      },
    ],
  },
  {
    id: "agro-pos",
    index: "03",
    title: "POS",
    nativeTitle: "পিওএস (POS)",
    track: "Partner Engineered System",
    headline: "Multi-warehouse agrochemical POS, FEFO expiry & self-healing ledger",
    description:
      "Engineered for high-volume dealership counters managing split Dokan/Godown fulfillment, chemical batch quarantine, and PIN-masked wholesale margins.",
    runtimeTag: "FastAPI · React 19 · SQLite WAL · 85/85 Invariant Suite",
    anchorHref: "#work-agro-pos",
    repoUrl: "https://github.com/tanvir70/pos",
    metrics: [
      { label: "Invariant Suite", value: "85 / 85 Pass" },
      { label: "Batch Dispatch", value: "Strict FEFO" },
      { label: "Margin Privacy", value: "4-Digit PIN" },
    ],
    terminalLines: [
      {
        label: "FEFO_QUARANTINE_GATE",
        detail: "Expired Batch #AG-2024-09 blocked automatically at counter scan",
        status: "PROTECTED",
      },
      {
        label: "SPLIT_STOCK_FULFILLMENT",
        detail: "12 units Dokan shelf + 8 units Godown warehouse → 20 units",
        status: "BALANCED",
      },
      {
        label: "SELF_HEALING_LEDGER",
        detail: "Customer credit invariant (current_due >= 0.00) verified",
        status: "AUDITED",
      },
    ],
  },
];

export function HeroStageSwitcher() {
  const [activeId, setActiveId] = useState<string>("dr-page");
  const active =
    STAGE_SLIDES.find((s) => s.id === activeId) ?? STAGE_SLIDES[0];

  return (
    <div className="rounded-[36px] bg-[#121317] text-[#F8F9FC] p-5 sm:p-8 lg:p-10 shadow-[0_32px_90px_-24px_rgba(18,19,23,0.22)] border border-[#212226]">
      {/* Top Bar: Window Chrome + Pill Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <span className="text-xs font-mono text-[#B2BBC5] tracking-wide">
            refyn · runtime · {active.id}
          </span>
        </div>

        {/* Antigravity-style Pill Tabs */}
        <div
          role="tablist"
          aria-label="Flagship Systems Preview"
          className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-white/[0.06] border border-white/10"
        >
          {STAGE_SLIDES.map((slide) => {
            const isSelected = slide.id === active.id;
            return (
              <button
                key={slide.id}
                role="tab"
                type="button"
                aria-selected={isSelected}
                onClick={() => setActiveId(slide.id)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white text-[#121317] shadow-sm"
                    : "text-[#B2BBC5] hover:text-white"
                }`}
              >
                {slide.index} {slide.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Stage Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
        {/* Left 6 Cols: Narrative & Action Pills */}
        <div className="lg:col-span-6 space-y-5">
          <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/[0.07] border border-white/10 text-xs text-[#E6EAF0]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3279F9]" />
            <span>{active.track}</span>
            <span className="text-white/30">·</span>
            <span className="font-bengali text-[#B2BBC5]">
              {active.nativeTitle}
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-medium tracking-[-0.02em] leading-[1.12] text-white">
            {active.headline}
          </h3>

          <p className="text-sm sm:text-base text-[#B2BBC5] leading-relaxed">
            {active.description}
          </p>

          <div className="pt-1 font-mono text-xs text-[#8B95A5]">
            {active.runtimeTag}
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={active.anchorHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#121317] text-sm font-medium hover:bg-[#E6EAF0] transition-colors"
            >
              <span>Launch Interactive Specimen →</span>
            </a>
            <a
              href={active.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] text-white text-sm font-medium hover:bg-white/[0.14] border border-white/10 transition-colors"
            >
              <span>View GitHub Source →</span>
            </a>
          </div>
        </div>

        {/* Right 6 Cols: Live Architectural Telemetry Frame */}
        <div className="lg:col-span-6">
          <div className="rounded-[24px] bg-[#18191D] border border-white/10 p-5 sm:p-6 space-y-5">
            <div className="grid grid-cols-3 gap-3">
              {active.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl bg-white/[0.04] border border-white/[0.07] p-3.5"
                >
                  <div className="text-lg sm:text-xl font-medium text-white tracking-tight">
                    {m.value}
                  </div>
                  <div className="mt-1 text-[11px] text-[#B2BBC5]">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2.5">
              {active.terminalLines.map((line) => (
                <div
                  key={line.label}
                  className="rounded-2xl bg-[#121317] border border-white/[0.07] px-4 py-3 flex items-start justify-between gap-4"
                >
                  <div>
                    <div className="font-mono text-[11px] text-[#60A5FA] tracking-wide">
                      {line.label}
                    </div>
                    <div className="mt-0.5 text-xs text-[#E6EAF0]">
                      {line.detail}
                    </div>
                  </div>
                  <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-[#3279F9]/15 border border-[#3279F9]/30 font-mono text-[10px] text-[#93C5FD]">
                    {line.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

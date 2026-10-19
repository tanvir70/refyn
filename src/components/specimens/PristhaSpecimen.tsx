"use client";

import React, { useState } from "react";

type PristhaSurface = "reader" | "writer" | "publisher";

export function PristhaSpecimen() {
  const [surface, setSurface] = useState<PristhaSurface>("reader");
  const [submissionShortlisted, setSubmissionShortlisted] =
    useState<boolean>(false);

  return (
    <div
      className="relative rounded-3xl border border-amber-500/30 bg-gradient-to-b from-[#1D150E]/95 via-[#140E0A]/95 to-[#0C0906] text-stone-100 shadow-[0_36px_100px_-20px_rgba(245,158,11,0.26)] overflow-hidden backdrop-blur-2xl"
      aria-label="Pristha Bilingual Publishing Workspace Specimen"
    >
      {/* Ambient Warm Golden-Hour Glow */}
      <div
        className="pointer-events-none absolute -top-28 right-1/4 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl"
        aria-hidden="true"
      />

      {/* Top Specimen Header */}
      <div className="relative flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-amber-500/20 bg-amber-950/30 font-mono text-[11px] uppercase tracking-[0.14em]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
          <span className="text-amber-300 font-semibold">
            SPECIMEN 02 — PRISTHA TRI-SURFACE WORKSPACE
          </span>
        </div>
        <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/25 text-amber-200 font-medium text-[10px]">
          BILINGUAL LITERARY ENGINE · বাংলা / EN
        </span>
      </div>

      {/* Role Surface Switcher */}
      <div
        className="relative grid grid-cols-3 p-2 gap-2 border-b border-amber-500/15 bg-black/30"
        role="group"
        aria-label="Pristha Workspace Surfaces"
      >
        <button
          type="button"
          aria-pressed={surface === "reader"}
          onClick={() => setSurface("reader")}
          className={`px-5 py-3.5 rounded-2xl text-left transition-all cursor-pointer ${
            surface === "reader"
              ? "bg-gradient-to-r from-amber-400 to-orange-400 text-stone-950 shadow-[0_10px_25px_-8px_rgba(245,158,11,0.55)]"
              : "bg-white/[0.03] text-stone-400 hover:text-stone-100 hover:bg-white/[0.06]"
          }`}
        >
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em]">
            <span className="font-semibold">SURFACE 01</span>
            <span className="font-bengali text-xs font-semibold">পাঠক</span>
          </div>
          <div className="mt-1 font-bold text-sm tracking-tight">
            Reader View
          </div>
        </button>

        <button
          type="button"
          aria-pressed={surface === "writer"}
          onClick={() => setSurface("writer")}
          className={`px-5 py-3.5 rounded-2xl text-left transition-all cursor-pointer ${
            surface === "writer"
              ? "bg-gradient-to-r from-amber-400 to-orange-400 text-stone-950 shadow-[0_10px_25px_-8px_rgba(245,158,11,0.55)]"
              : "bg-white/[0.03] text-stone-400 hover:text-stone-100 hover:bg-white/[0.06]"
          }`}
        >
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em]">
            <span className="font-semibold">SURFACE 02</span>
            <span className="font-bengali text-xs font-semibold">লেখক</span>
          </div>
          <div className="mt-1 font-bold text-sm tracking-tight">
            Writer Studio
          </div>
        </button>

        <button
          type="button"
          aria-pressed={surface === "publisher"}
          onClick={() => setSurface("publisher")}
          className={`px-5 py-3.5 rounded-2xl text-left transition-all cursor-pointer ${
            surface === "publisher"
              ? "bg-gradient-to-r from-amber-400 to-orange-400 text-stone-950 shadow-[0_10px_25px_-8px_rgba(245,158,11,0.55)]"
              : "bg-white/[0.03] text-stone-400 hover:text-stone-100 hover:bg-white/[0.06]"
          }`}
        >
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em]">
            <span className="font-semibold">SURFACE 03</span>
            <span className="font-bengali text-xs font-semibold">প্রকাশক</span>
          </div>
          <div className="mt-1 font-bold text-sm tracking-tight">
            Publisher Desk
          </div>
        </button>
      </div>

      {/* Surface Viewport */}
      <div className="relative">
        {surface === "reader" && (
          <div
            data-testid="pristha-surface-reader"
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-stretch"
          >
            {/* Left Book Folio Metadata (5 Cols on Warm Espresso) */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-amber-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-amber-400">
                  <span>FOLIO EDITION · ISBN 978-984</span>
                  <span>CH. IV / VIII</span>
                </div>
                <h4 className="mt-4 font-bengali text-3xl font-semibold text-amber-50 leading-snug">
                  নিস্তব্ধতার শহর
                </h4>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-amber-300/80">
                  CITY OF QUIETUDE — CONTEMPORARY NOVEL
                </p>

                <div className="mt-6 space-y-2.5 border-t border-white/10 pt-5 font-mono text-xs">
                  <div className="flex justify-between px-3 py-2 rounded-xl text-stone-400">
                    <span>01 · প্রারম্ভিক খসড়া</span>
                    <span>P. 01</span>
                  </div>
                  <div className="flex justify-between px-3 py-2 rounded-xl text-stone-400">
                    <span>02 · মধ্যরাতের ট্রেন</span>
                    <span>P. 18</span>
                  </div>
                  <div className="flex justify-between px-3 py-2.5 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-200 font-semibold">
                    <span>04 · নিস্তব্ধতার শহর [READING]</span>
                    <span>P. 42</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-stone-400 mb-2">
                  <span>SYNCHRONIZED READING PROGRESS</span>
                  <span className="text-amber-300 font-bold">68%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 w-[68%]" />
                </div>
              </div>
            </div>

            {/* Right Tactile Parchment Literary Spread (7 Cols) */}
            <div className="lg:col-span-7 p-7 sm:p-10 rounded-2xl bg-[#FAF5EC] text-[#1C1917] border border-amber-200/60 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.65)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-amber-900/70 pb-4 border-b border-amber-900/15">
                  <span className="font-semibold text-amber-800">
                    CHAPTER IV · নিস্তব্ধতার শহরে (IN THE CITY OF QUIETUDE)
                  </span>
                  <span className="font-bengali font-semibold text-amber-900">
                    পৃষ্ঠা ৪২
                  </span>
                </div>

                <blockquote className="mt-6 pl-5 border-l-4 border-amber-600 font-bengali text-xl sm:text-2xl leading-[1.85] text-[#1C1917]">
                  “বিকেলের আলো যখন পুরনো লাইব্রেরির উঁচু জানালা দিয়ে টেবিলের ওপর
                  এসে পড়ল, তখন মনে হলো প্রতিটি অপ্রকাশিত পাণ্ডুলিপি নিজের সময়ের
                  জন্য অপেক্ষা করছে। শহরের কোলাহল থেমে গেলে শব্দের নিজস্ব স্থাপত্য
                  জেগে ওঠে।”
                </blockquote>

                <p className="mt-5 text-sm leading-relaxed text-stone-600">
                  Distraction-free bilingual reading spread with optical Bengali
                  line-height calibration (1.85), synchronized chapter bookmarks,
                  and persistent reading state across web and mobile viewports.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-amber-900/15 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-amber-900/70">
                <span>TYPOGRAPHY: NOTO SERIF BENGALI · 22PX</span>
                <span className="px-2.5 py-1 rounded-full bg-amber-900/10 text-amber-950 font-semibold">
                  PAPER: WARM PARCHMENT
                </span>
              </div>
            </div>
          </div>
        )}

        {surface === "writer" && (
          <div
            data-testid="pristha-surface-writer"
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8"
          >
            {/* Left Chapter Tree (4 Cols) */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-white/[0.03] border border-amber-500/20 font-mono text-xs space-y-2.5">
              <div className="text-[10px] uppercase tracking-[0.16em] text-amber-400 pb-3 border-b border-white/10">
                Manuscript Architecture · Chapter Tree
              </div>
              <div className="px-3.5 py-2.5 rounded-xl text-stone-400">
                01 · প্রারম্ভিক খসড়া (LOCKED)
              </div>
              <div className="px-3.5 py-2.5 rounded-xl text-stone-400">
                02 · মধ্যরাতের ট্রেন (LOCKED)
              </div>
              <div className="px-3.5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 text-stone-950 font-bold">
                04 · নিস্তব্ধতার শহর [ACTIVE DRAFT]
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 text-[11px] text-stone-400 space-y-1">
                <div>BRANCH: main/chapter-04</div>
                <div className="text-amber-300">SNAPSHOT: #REV-84A2C</div>
              </div>
            </div>

            {/* Right Authoring Canvas (8 Cols) */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#FAF5EC] text-[#1C1917] flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-amber-900/15 font-mono text-[11px] text-amber-900/70">
                  <span className="text-amber-900 font-bold">
                    DRAFTING MANUSCRIPT · AUTOSAVE ACTIVE
                  </span>
                  <span className="tabular-nums font-semibold">
                    WORDS: 1,420 · CHARS: 8,910
                  </span>
                </div>
                <p className="mt-5 font-bengali text-xl leading-[1.85] text-[#1C1917]">
                  অধ্যায় ৪ — বৃষ্টির পর রাজপথের বাতিগুলো যখন একে একে জ্বলে উঠল,
                  পাণ্ডুলিপির শেষ অনুচ্ছেদটি নতুন করে লেখা শুরু হলো। প্রতিটি
                  সংস্করণ স্বয়ংক্রিয়ভাবে সংরক্ষিত হচ্ছে।
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-amber-900/15 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-amber-900/70">
                <span>BILINGUAL IME KEYBOARD: BENGALI PHONETIC</span>
                <span className="text-amber-800 font-bold">
                  PUBLISHER SUBMISSION READY
                </span>
              </div>
            </div>
          </div>
        )}

        {surface === "publisher" && (
          <div
            data-testid="pristha-surface-publisher"
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8"
          >
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-amber-500/20">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10 font-mono text-[11px] uppercase tracking-[0.14em] text-stone-400">
                <span className="text-amber-300 font-semibold">
                  Imprint Submission Queue · Dhaka Editorial Desk
                </span>
                <span>SUBMISSION ID: #MS-2026-09</span>
              </div>

              <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h4 className="font-bengali text-2xl font-semibold text-white">
                    নিস্তব্ধতার শহর (City of Quietude)
                  </h4>
                  <p className="mt-1 font-mono text-xs text-stone-400">
                    8 Chapters · 42,500 Words · Literary Fiction · Bengali / English Rights
                  </p>
                </div>

                <span
                  data-testid="pristha-submission-status"
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-[0.14em] border ${
                    submissionShortlisted
                      ? "bg-amber-400 text-stone-950 border-amber-300 font-bold shadow-[0_0_20px_rgba(245,158,11,0.5)]"
                      : "bg-amber-500/10 text-amber-300 border-amber-400/30"
                  }`}
                >
                  {submissionShortlisted ? "SHORTLISTED" : "UNDER_REVIEW"}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="block text-[10px] text-stone-400">
                    EDITORIAL RATING
                  </span>
                  <span className="mt-1 block font-bold text-amber-300 text-base">
                    9.4 / 10.0
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="block text-[10px] text-stone-400">
                    PRINT EDITION TARGET
                  </span>
                  <span className="mt-1 block font-bold text-white">
                    EKUSHEY BOOK FAIR
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="block text-[10px] text-stone-400">
                    ROYALTY CONTRACT
                  </span>
                  <span className="mt-1 block font-bold text-emerald-300">
                    VERIFIED LEDGER
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-black/40 border border-amber-500/20 flex flex-col justify-between">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-amber-400 pb-3 border-b border-white/10">
                  ACQUISITION DECISION GATE
                </span>
                <p className="mt-4 text-xs text-stone-400 leading-relaxed">
                  Approve manuscript #MS-2026-09 to transition the author workspace
                  into production typesetting and ISBN assignment.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSubmissionShortlisted((prev) => !prev)}
                className="mt-6 w-full px-5 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 text-stone-950 font-mono text-xs uppercase tracking-[0.14em] font-bold hover:brightness-110 transition-all shadow-[0_12px_30px_-10px_rgba(245,158,11,0.5)] cursor-pointer"
              >
                {submissionShortlisted
                  ? "Revert to Review"
                  : "Shortlist for Publication"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";

type PristhaSurface = "reader" | "writer" | "publisher";

export function PristhaSpecimen() {
  const [surface, setSurface] = useState<PristhaSurface>("reader");
  const [submissionShortlisted, setSubmissionShortlisted] =
    useState<boolean>(false);

  return (
    <div
      className="border border-[#0F172A]/15 bg-white text-[#0F172A] shadow-[0_24px_60px_-24px_rgba(15,23,42,0.12)]"
      aria-label="Pristha Bilingual Publishing Workspace Specimen"
    >
      {/* Top Specimen Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 border-b border-[#E5E7EB] bg-[#F7F7F4] font-mono text-[11px] uppercase tracking-[0.14em] text-[#64748B]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-[#0F172A]" />
          <span className="text-[#0F172A] font-semibold">
            SPECIMEN 02 — PRISTHA TRI-SURFACE WORKSPACE
          </span>
        </div>
        <span className="text-[#0F172A] font-medium">
          BILINGUAL LITERARY ENGINE · বাংলা / EN
        </span>
      </div>

      {/* Role Surface Switcher */}
      <div
        className="grid grid-cols-3 border-b border-[#E5E7EB] divide-x divide-[#E5E7EB]"
        role="group"
        aria-label="Pristha Workspace Surfaces"
      >
        <button
          type="button"
          aria-pressed={surface === "reader"}
          onClick={() => setSurface("reader")}
          className={`px-5 py-4 text-left transition-colors cursor-pointer ${
            surface === "reader"
              ? "bg-[#0F172A] text-[#F7F7F4]"
              : "bg-[#F7F7F4]/60 text-[#64748B] hover:text-[#0F172A] hover:bg-white"
          }`}
        >
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em]">
            <span>SURFACE 01</span>
            <span className="font-bengali text-xs">পাঠক</span>
          </div>
          <div className="mt-1 font-semibold text-sm tracking-tight">
            Reader View
          </div>
        </button>

        <button
          type="button"
          aria-pressed={surface === "writer"}
          onClick={() => setSurface("writer")}
          className={`px-5 py-4 text-left transition-colors cursor-pointer ${
            surface === "writer"
              ? "bg-[#0F172A] text-[#F7F7F4]"
              : "bg-[#F7F7F4]/60 text-[#64748B] hover:text-[#0F172A] hover:bg-white"
          }`}
        >
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em]">
            <span>SURFACE 02</span>
            <span className="font-bengali text-xs">লেখক</span>
          </div>
          <div className="mt-1 font-semibold text-sm tracking-tight">
            Writer Studio
          </div>
        </button>

        <button
          type="button"
          aria-pressed={surface === "publisher"}
          onClick={() => setSurface("publisher")}
          className={`px-5 py-4 text-left transition-colors cursor-pointer ${
            surface === "publisher"
              ? "bg-[#0F172A] text-[#F7F7F4]"
              : "bg-[#F7F7F4]/60 text-[#64748B] hover:text-[#0F172A] hover:bg-white"
          }`}
        >
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em]">
            <span>SURFACE 03</span>
            <span className="font-bengali text-xs">প্রকাশক</span>
          </div>
          <div className="mt-1 font-semibold text-sm tracking-tight">
            Publisher Desk
          </div>
        </button>
      </div>

      {/* Surface Viewport */}
      <div>
        {surface === "reader" && (
          <div
            data-testid="pristha-surface-reader"
            className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E7EB]"
          >
            {/* Left Book Folio Metadata (4 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#F7F7F4]/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-[#64748B]">
                  <span>FOLIO EDITION · ISBN 978-984</span>
                  <span>CH. IV / VIII</span>
                </div>
                <h4 className="mt-4 font-bengali text-2xl sm:text-3xl font-semibold text-[#0F172A] leading-snug">
                  নিস্তব্ধতার শহর
                </h4>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-[#64748B]">
                  CITY OF QUIETUDE — CONTEMPORARY NOVEL
                </p>

                <div className="mt-6 space-y-2 border-t border-[#E5E7EB] pt-4 font-mono text-[11px]">
                  <div className="flex justify-between text-[#64748B]">
                    <span>01 · প্রারম্ভিক খসড়া</span>
                    <span>P. 01</span>
                  </div>
                  <div className="flex justify-between text-[#64748B]">
                    <span>02 · মধ্যরাতের ট্রেন</span>
                    <span>P. 18</span>
                  </div>
                  <div className="flex justify-between text-[#0F172A] font-semibold">
                    <span>04 · নিস্তব্ধতার শহর [READING]</span>
                    <span>P. 42</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E5E7EB]">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B] mb-2">
                  <span>SYNCHRONIZED READING PROGRESS</span>
                  <span className="text-[#0F172A] font-semibold">68%</span>
                </div>
                <div className="w-full h-1.5 bg-[#E5E7EB]">
                  <div className="h-full bg-[#0F172A] w-[68%]" />
                </div>
              </div>
            </div>

            {/* Right Literary Spread (8 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-[#64748B] pb-4 border-b border-[#E5E7EB]">
                  <span>CHAPTER IV · নিস্তব্ধতার শহরে (IN THE CITY OF QUIETUDE)</span>
                  <span className="font-bengali">পৃষ্ঠা ৪২</span>
                </div>

                <blockquote className="mt-6 font-bengali text-xl sm:text-2xl leading-[1.85] text-[#0F172A]">
                  “বিকেলের আলো যখন পুরনো লাইব্রেরির উঁচু জানালা দিয়ে টেবিলের ওপর
                  এসে পড়ল, তখন মনে হলো প্রতিটি অপ্রকাশিত পাণ্ডুলিপি নিজের সময়ের
                  জন্য অপেক্ষা করছে। শহরের কোলাহল থেমে গেলে শব্দের নিজস্ব স্থাপত্য
                  জেগে ওঠে।”
                </blockquote>

                <p className="mt-5 text-sm leading-relaxed text-[#64748B]">
                  Distraction-free bilingual reading spread with optical Bengali
                  line-height calibration (1.85), synchronized chapter bookmarks,
                  and persistent reading state across web and mobile viewports.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                <span>TYPOGRAPHY: NOTO SERIF BENGALI · 22PX</span>
                <span className="text-[#0F172A]">THEME: WARM ALABASTER</span>
              </div>
            </div>
          </div>
        )}

        {surface === "writer" && (
          <div
            data-testid="pristha-surface-writer"
            className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E7EB]"
          >
            {/* Left Chapter Tree (4 Cols) */}
            <div className="lg:col-span-4 p-6 bg-[#F7F7F4] font-mono text-xs space-y-2.5">
              <div className="text-[10px] uppercase tracking-[0.16em] text-[#64748B] pb-2 border-b border-[#E5E7EB]">
                Manuscript Architecture · Chapter Tree
              </div>
              <div className="px-3 py-2 text-[#64748B] border border-transparent">
                01 · প্রারম্ভিক খসড়া (LOCKED)
              </div>
              <div className="px-3 py-2 text-[#64748B] border border-transparent">
                02 · মধ্যরাতের ট্রেন (LOCKED)
              </div>
              <div className="px-3 py-2.5 bg-[#0F172A] text-[#F7F7F4] font-medium">
                04 · নিস্তব্ধতার শহর [ACTIVE DRAFT]
              </div>
              <div className="pt-4 mt-4 border-t border-[#E5E7EB] text-[11px] text-[#64748B] space-y-1">
                <div>BRANCH: main/chapter-04</div>
                <div>SNAPSHOT: #REV-84A2C</div>
              </div>
            </div>

            {/* Right Authoring Canvas (8 Cols) */}
            <div className="lg:col-span-8 p-6 sm:p-8 bg-white flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#E5E7EB] font-mono text-[11px] text-[#64748B]">
                  <span className="text-[#0F172A] font-semibold">
                    DRAFTING MANUSCRIPT · AUTOSAVE ACTIVE
                  </span>
                  <span className="tabular-nums">
                    WORDS: 1,420 · CHARS: 8,910
                  </span>
                </div>
                <p className="mt-5 font-bengali text-lg leading-[1.85] text-[#0F172A]">
                  অধ্যায় ৪ — বৃষ্টির পর রাজপথের বাতিগুলো যখন একে একে জ্বলে উঠল,
                  পাণ্ডুলিপির শেষ অনুচ্ছেদটি নতুন করে লেখা শুরু হলো। প্রতিটি
                  সংস্করণ স্বয়ংক্রিয়ভাবে সংরক্ষিত হচ্ছে।
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#E5E7EB] flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                <span>BILINGUAL IME KEYBOARD: BENGALI PHONETIC</span>
                <span className="text-[#0F172A] font-medium">
                  PUBLISHER SUBMISSION READY
                </span>
              </div>
            </div>
          </div>
        )}

        {surface === "publisher" && (
          <div
            data-testid="pristha-surface-publisher"
            className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E7EB]"
          >
            <div className="lg:col-span-8 p-6 sm:p-8 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#E5E7EB] font-mono text-[11px] uppercase tracking-[0.14em] text-[#64748B]">
                <span className="text-[#0F172A] font-semibold">
                  Imprint Submission Queue · Dhaka Editorial Desk
                </span>
                <span>SUBMISSION ID: #MS-2026-09</span>
              </div>

              <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h4 className="font-bengali text-2xl font-semibold text-[#0F172A]">
                    নিস্তব্ধতার শহর (City of Quietude)
                  </h4>
                  <p className="mt-1 font-mono text-xs text-[#64748B]">
                    8 Chapters · 42,500 Words · Literary Fiction · Bengali / English Rights
                  </p>
                </div>

                <span
                  data-testid="pristha-submission-status"
                  className={`px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] border ${
                    submissionShortlisted
                      ? "bg-[#0F172A] text-[#F7F7F4] border-[#0F172A] font-semibold"
                      : "bg-[#F7F7F4] text-[#0F172A] border-[#E5E7EB]"
                  }`}
                >
                  {submissionShortlisted ? "SHORTLISTED" : "UNDER_REVIEW"}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 border border-[#E5E7EB] divide-x divide-[#E5E7EB] bg-[#F7F7F4]/60 font-mono text-xs">
                <div className="p-3.5">
                  <span className="block text-[10px] text-[#64748B]">
                    EDITORIAL RATING
                  </span>
                  <span className="mt-1 block font-semibold text-[#0F172A]">
                    9.4 / 10.0
                  </span>
                </div>
                <div className="p-3.5">
                  <span className="block text-[10px] text-[#64748B]">
                    PRINT EDITION TARGET
                  </span>
                  <span className="mt-1 block font-semibold text-[#0F172A]">
                    EKUSHEY BOOK FAIR
                  </span>
                </div>
                <div className="p-3.5">
                  <span className="block text-[10px] text-[#64748B]">
                    ROYALTY CONTRACT
                  </span>
                  <span className="mt-1 block font-semibold text-[#0F172A]">
                    VERIFIED LEDGER
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 sm:p-8 bg-[#0F172A] text-[#F7F7F4] flex flex-col justify-between">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#94A3B8] pb-3 border-b border-[#64748B]/30">
                  ACQUISITION DECISION GATE
                </span>
                <p className="mt-4 text-xs text-[#94A3B8] leading-relaxed">
                  Approve manuscript #MS-2026-09 to transition the author workspace
                  into production typesetting and ISBN assignment.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSubmissionShortlisted((prev) => !prev)}
                className="mt-6 w-full px-5 py-4 bg-[#F7F7F4] text-[#0F172A] font-mono text-xs uppercase tracking-[0.14em] font-semibold hover:bg-white transition-colors cursor-pointer"
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

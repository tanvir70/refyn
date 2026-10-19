"use client";

import React, { useState } from "react";

type PristhaSurface = "reader" | "writer" | "publisher";

export function PristhaSpecimen() {
  const [surface, setSurface] = useState<PristhaSurface>("reader");
  const [submissionShortlisted, setSubmissionShortlisted] =
    useState<boolean>(false);

  return (
    <div
      className="relative rounded-3xl border border-white/10 bg-[#121317] text-[#F8F9FC] shadow-[0_24px_70px_rgba(18,19,23,0.18)] overflow-hidden"
      aria-label="Pristha Bilingual Publishing Workspace Specimen"
    >
      {/* Top Window Bar */}
      <div className="relative flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-white/10 bg-[#18191D]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <span className="font-mono text-xs text-[#B2BBC5] tracking-wide">
            refyn · runtime · pristha
          </span>
        </div>
        <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[#93C5FD] font-mono text-[10px]">
          BILINGUAL LITERARY ENGINE · বাংলা / EN
        </span>
      </div>

      {/* Role Surface Switcher */}
      <div
        className="relative flex flex-wrap items-center p-2.5 gap-2 border-b border-white/10 bg-[#18191D]"
        role="group"
        aria-label="Pristha Workspace Surfaces"
      >
        <button
          type="button"
          aria-pressed={surface === "reader"}
          onClick={() => setSurface("reader")}
          className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-2 ${
            surface === "reader"
              ? "bg-white text-[#121317] shadow-sm"
              : "text-[#B2BBC5] hover:text-white hover:bg-white/[0.05]"
          }`}
        >
          <span className="font-mono opacity-60">01</span>
          <span>Reader View</span>
          <span className="font-bengali opacity-80">(পাঠক)</span>
        </button>

        <button
          type="button"
          aria-pressed={surface === "writer"}
          onClick={() => setSurface("writer")}
          className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-2 ${
            surface === "writer"
              ? "bg-white text-[#121317] shadow-sm"
              : "text-[#B2BBC5] hover:text-white hover:bg-white/[0.05]"
          }`}
        >
          <span className="font-mono opacity-60">02</span>
          <span>Writer Studio</span>
          <span className="font-bengali opacity-80">(লেখক)</span>
        </button>

        <button
          type="button"
          aria-pressed={surface === "publisher"}
          onClick={() => setSurface("publisher")}
          className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-2 ${
            surface === "publisher"
              ? "bg-white text-[#121317] shadow-sm"
              : "text-[#B2BBC5] hover:text-white hover:bg-white/[0.05]"
          }`}
        >
          <span className="font-mono opacity-60">03</span>
          <span>Publisher Desk</span>
          <span className="font-bengali opacity-80">(প্রকাশক)</span>
        </button>
      </div>

      {/* Surface Viewport */}
      <div className="relative">
        {surface === "reader" && (
          <div
            data-testid="pristha-surface-reader"
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-stretch"
          >
            {/* Left Book Folio Metadata */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#18191D] border border-white/[0.07] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-[#93C5FD]">
                  <span>FOLIO EDITION · ISBN 978-984</span>
                  <span>CH. IV / VIII</span>
                </div>
                <h4 className="mt-4 font-bengali text-3xl font-medium text-white leading-snug">
                  নিস্তব্ধতার শহর
                </h4>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-[#B2BBC5]">
                  CITY OF QUIETUDE — CONTEMPORARY NOVEL
                </p>

                <div className="mt-6 space-y-2 border-t border-white/10 pt-5 font-mono text-xs">
                  <div className="flex justify-between px-3 py-2 rounded-xl text-[#8B95A5]">
                    <span>01 · প্রারম্ভিক খসড়া</span>
                    <span>P. 01</span>
                  </div>
                  <div className="flex justify-between px-3 py-2 rounded-xl text-[#8B95A5]">
                    <span>02 · মধ্যরাতের ট্রেন</span>
                    <span>P. 18</span>
                  </div>
                  <div className="flex justify-between px-3 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-white font-medium">
                    <span>04 · নিস্তব্ধতার শহর [READING]</span>
                    <span>P. 42</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#B2BBC5] mb-2">
                  <span>SYNCHRONIZED READING PROGRESS</span>
                  <span className="text-white font-medium">68%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-[#3279F9] w-[68%]" />
                </div>
              </div>
            </div>

            {/* Right Tactile Parchment Literary Spread */}
            <div className="lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-[#FAF5EC] text-[#1C1917] border border-amber-200/60 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-amber-900/70 pb-4 border-b border-amber-900/15">
                  <span className="font-semibold text-amber-900">
                    CHAPTER IV · নিস্তব্ধতার শহরে (IN THE CITY OF QUIETUDE)
                  </span>
                  <span className="font-bengali font-semibold text-amber-900">
                    পৃষ্ঠা ৪২
                  </span>
                </div>

                <blockquote className="mt-6 pl-5 border-l-4 border-amber-700 font-bengali text-xl sm:text-2xl leading-[1.85] text-[#1C1917]">
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
                  READING VIEWPORT
                </span>
              </div>
            </div>
          </div>
        )}

        {surface === "writer" && (
          <div
            data-testid="pristha-surface-writer"
            className="p-6 sm:p-8 space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#93C5FD]">
                  AUTHOR WORKSPACE · LOCAL-FIRST AUTOSAVE
                </span>
                <h4 className="mt-1 text-2xl font-medium text-white">
                  Manuscript Architecture &amp; Editor
                </h4>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[#93C5FD]">
                  SYNCED: 4,820 WORDS
                </span>
                <span className="text-[#8B95A5]">EST. READING: 18 MIN</span>
              </div>
            </div>

            <div className="rounded-2xl bg-[#18191D] border border-white/[0.07] p-6 space-y-4">
              <div className="flex items-center justify-between font-mono text-xs text-[#8B95A5]">
                <span>CHAPTER TITLE: পর্ব ৪ — ছায়া ও প্রতিধ্বনি</span>
                <span>STATUS: DRAFT SAVED</span>
              </div>
              <p className="font-bengali text-lg leading-relaxed text-[#E6EAF0]">
                লেখক যখন লেখার টেবিলে বসেন, তখন প্রতিটি শব্দ একটি প্রতিশ্রুতির
                মতো কাজ করে। খসড়া তৈরি থেকে প্রকাশনার চূড়ান্ত পর্ব পর্যন্ত
                লেখকের মনোযোগ যেন অক্ষুণ্ণ থাকে, তা নিশ্চিত করাই এই স্টুডিওর
                মূল লক্ষ্য।
              </p>
            </div>
          </div>
        )}

        {surface === "publisher" && (
          <div
            data-testid="pristha-surface-publisher"
            className="p-6 sm:p-8 space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#93C5FD]">
                  EDITORIAL DESK · PRODUCTION GATE
                </span>
                <h4 className="mt-1 text-2xl font-medium text-white">
                  Imprint Submission Queue &amp; Catalog
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSubmissionShortlisted((prev) => !prev)}
                className={`px-4 py-2 rounded-full font-mono text-xs transition-colors cursor-pointer ${
                  submissionShortlisted
                    ? "bg-white text-[#121317] font-medium"
                    : "bg-white/[0.06] border border-white/10 text-white hover:bg-white/10"
                }`}
              >
                {submissionShortlisted ? "STATUS: SHORTLISTED" : "SHORTLIST MANUSCRIPT"}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-[#18191D] border border-white/[0.07]">
                <span className="text-[#8B95A5] block">CATALOG ISBN</span>
                <span className="text-white text-sm font-medium mt-1 block">978-984-512-004-1</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#18191D] border border-white/[0.07]">
                <span className="text-[#8B95A5] block">GALLEY PROOF</span>
                <span className="text-white text-sm font-medium mt-1 block">VERIFIED &amp; APPROVED</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#18191D] border border-white/[0.07]">
                <span className="text-[#8B95A5] block">ROYALTY LEDGER</span>
                <span className="text-white text-sm font-medium mt-1 block">AUTOMATED 15% SPLIT</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

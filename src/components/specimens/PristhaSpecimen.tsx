"use client";

import React, { useState } from "react";

type PristhaSurface = "reader" | "writer" | "publisher";

export function PristhaSpecimen() {
  const [surface, setSurface] = useState<PristhaSurface>("reader");
  const [submissionShortlisted, setSubmissionShortlisted] =
    useState<boolean>(false);

  return (
    <div
      className="bg-white border border-[#E5E7EB] text-[#0F172A]"
      aria-label="Pristha Bilingual Publishing Workspace Specimen"
    >
      {/* Top Specimen Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 border-b border-[#E5E7EB] bg-[#F7F7F4] font-mono text-[11px] uppercase tracking-wider text-[#64748B]">
        <span>SPECIMEN 02 // PRISTHA TRI-SURFACE WORKSPACE</span>
        <span className="text-[#0F172A] font-medium">BILINGUAL · বাংলা / EN</span>
      </div>

      {/* Role Surface Switcher */}
      <div
        className="grid grid-cols-3 border-b border-[#E5E7EB] divide-x divide-[#E5E7EB]"
        aria-label="Pristha Workspace Surfaces"
      >
        {(
          [
            { id: "reader", num: "01", label: "Reader View" },
            { id: "writer", num: "02", label: "Writer Studio" },
            { id: "publisher", num: "03", label: "Publisher Desk" },
          ] as const
        ).map((tab) => {
          const active = surface === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              aria-pressed={active}
              onClick={() => setSurface(tab.id)}
              className={`min-h-[44px] px-4 py-3 text-left font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-between ${
                active
                  ? "bg-[#0F172A] text-[#F7F7F4]"
                  : "bg-white text-[#64748B] hover:bg-[#F7F7F4] hover:text-[#0F172A]"
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-[10px] opacity-70 tabular-nums">
                {tab.num}
              </span>
            </button>
          );
        })}
      </div>

      {/* Surface Body */}
      <div className="p-6 min-h-[250px] flex flex-col justify-between">
        {surface === "reader" ? (
          <div>
            <div className="flex items-center justify-between font-mono text-[11px] text-[#64748B] uppercase tracking-wider">
              <span>CHAPTER IV · নিস্তব্ধতার শহরে (CITY OF QUIETUDE)</span>
              <span className="tabular-nums">PROGRESS · 68%</span>
            </div>
            <blockquote className="mt-4 pl-4 border-l-2 border-[#0F172A] text-base leading-relaxed text-[#111318]">
              “বিকেলের আলো যখন পুরনো লাইব্রেরির উঁচু জানালা দিয়ে টেবিলের ওপর এসে
              পড়ল, তখন মনে হলো প্রতিটি অপ্রকাশিত পাণ্ডুলিপি নিজের সময়ের জন্য
              অপেক্ষা করছে।”
            </blockquote>
            <p className="mt-3 text-xs text-[#64748B] leading-relaxed">
              Bilingual reader surface with synchronized chapter bookmarks,
              distraction-free typographic scaling, and persistent reading
              history across devices.
            </p>
          </div>
        ) : null}

        {surface === "writer" ? (
          <div>
            <div className="flex items-center justify-between font-mono text-[11px] text-[#64748B] uppercase tracking-wider">
              <span>Manuscript Architecture · STUDIO DRAFT #04</span>
              <span className="tabular-nums text-[#0F172A]">42,810 WORDS</span>
            </div>
            <div className="mt-4 border border-[#E5E7EB] divide-y divide-[#E5E7EB] text-xs">
              <div className="p-3 flex items-center justify-between bg-[#F7F7F4]">
                <span className="font-medium">
                  Ch. 01 — কুয়াশার ভোর (Dawn of Fog)
                </span>
                <span className="font-mono text-[11px] text-[#0F172A] uppercase">
                  PUBLISHED · 4,120 W
                </span>
              </div>
              <div className="p-3 flex items-center justify-between">
                <span className="font-medium">
                  Ch. 02 — ফেরার পথ (The Return Path)
                </span>
                <span className="font-mono text-[11px] text-[#64748B] uppercase">
                  IN REVISION · 3,890 W
                </span>
              </div>
              <div className="p-3 flex items-center justify-between">
                <span className="font-medium">
                  Ch. 03 — শেষ চিঠি (Final Correspondence)
                </span>
                <span className="font-mono text-[11px] text-[#0F172A] uppercase">
                  READY FOR IMPRINT REVIEW
                </span>
              </div>
            </div>
          </div>
        ) : null}

        {surface === "publisher" ? (
          <div>
            <div className="flex items-center justify-between font-mono text-[11px] text-[#64748B] uppercase tracking-wider">
              <span>Imprint Submission Queue · EKUSHEY BOOK FAIR SLATE</span>
              <span className="tabular-nums">CATALOGUE #2026-B</span>
            </div>
            <div className="mt-4 p-4 border border-[#E5E7EB] bg-[#F7F7F4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-[#0F172A]">
                  নিস্তব্ধতার শহরে (City of Quietude) — Full Manuscript
                </div>
                <div className="text-xs text-[#64748B] mt-1 font-mono">
                  STATUS:{" "}
                  <strong className="text-[#0F172A]">
                    {submissionShortlisted
                      ? "SHORTLISTED FOR IMPRINT CONTRACT"
                      : "UNDER EDITORIAL SCOUTING"}
                  </strong>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSubmissionShortlisted((prev) => !prev)}
                className="min-h-[40px] px-4 py-2 bg-[#0F172A] text-[#F7F7F4] font-mono text-[11px] uppercase tracking-wider hover:bg-[#1E293B] cursor-pointer shrink-0 transition-colors"
              >
                {submissionShortlisted
                  ? "Revert to Scouting"
                  : "Approve for Imprint →"}
              </button>
            </div>
          </div>
        ) : null}

        {/* Footer Contract Metadata */}
        <div className="mt-6 pt-3 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-[#64748B] uppercase tracking-wider">
          <span>ACTIVE SURFACE: {surface.toUpperCase()}</span>
          <span>TYPED DOMAIN CONTRACT · CLOUDFLARE SITES</span>
        </div>
      </div>
    </div>
  );
}

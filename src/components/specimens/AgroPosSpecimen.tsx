"use client";

import React, { useState } from "react";
import { calculatePosInvoiceState } from "@/data/monograph";

export function AgroPosSpecimen() {
  const [splitEnabled, setSplitEnabled] = useState<boolean>(false);
  const [pinUnlocked, setPinUnlocked] = useState<boolean>(false);

  const state = calculatePosInvoiceState(splitEnabled, pinUnlocked);
  const dokanPct = Math.round((state.dokanUnits / state.totalBottles) * 100);
  const godownPct = 100 - dokanPct;

  return (
    <div
      className="relative rounded-3xl border border-blue-500/30 bg-gradient-to-b from-[#09152B]/95 via-[#070E1E]/95 to-[#050812] text-slate-100 shadow-[0_36px_100px_-20px_rgba(59,130,246,0.28)] overflow-hidden backdrop-blur-2xl"
      aria-label="Rajib Enterprise Agrochemical POS & Ledger Specimen"
    >
      {/* Ambient Electric Cobalt & Indigo Glow */}
      <div
        className="pointer-events-none absolute -top-28 left-1/3 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 right-1/4 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Top Specimen Bar */}
      <div className="relative flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-blue-500/20 bg-blue-950/30 font-mono text-[11px] uppercase tracking-[0.14em]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
          <span className="text-blue-300 font-semibold">
            SPECIMEN 03 — AGROCHEMICAL POS &amp; FEFO LEDGER
          </span>
        </div>
        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-200 font-medium tabular-nums text-[10px]">
          INVARIANT: CURRENT_DUE &gt;= 0.00 (CHECK ENFORCED)
        </span>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-blue-500/15">
        {/* Left 7 Cols: Live Challan, Visual Stock Split & Pricing */}
        <div className="lg:col-span-7 p-6 sm:p-9 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-blue-400">
                  CHALLAN #RJB-2026-0841 · SHERPUR SADAR
                </div>
                <h4 className="mt-1.5 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  Amistar Top 325 SC — Syngenta
                </h4>
                <p className="mt-1 text-xs text-slate-400">
                  Order Quantity: 20 Base Units (1 Bulk Carton) · Fungicide Class
                </p>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-blue-500/10 border border-blue-400/30 text-right">
                <span className="block font-bengali text-xs text-blue-200 font-medium">
                  মেসার্স রাজীব এন্টারপ্রাইজ
                </span>
                <span className="block font-mono text-[10px] text-slate-400">
                  DEALER TERMINAL
                </span>
              </div>
            </div>

            {/* Visual Proportional Stock Split Bar */}
            <div className="mt-7">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400 mb-2.5">
                <span>PHYSICAL DISPATCH ALLOCATION (20 BASE UNITS)</span>
                <span className="text-blue-300 font-semibold tabular-nums">
                  DOKAN {dokanPct}% / GODOWN {godownPct}%
                </span>
              </div>
              <div className="w-full h-3.5 rounded-full bg-slate-900/90 flex overflow-hidden p-0.5 border border-white/10">
                <div
                  className="h-full rounded-l-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300"
                  style={{
                    width: `${dokanPct}%`,
                    borderRadius: godownPct === 0 ? "9999px" : undefined,
                  }}
                />
                {godownPct > 0 && (
                  <div
                    className="h-full rounded-r-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                    style={{ width: `${godownPct}%` }}
                  />
                )}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-4 sm:p-5 rounded-2xl bg-blue-500/[0.08] border border-blue-400/25">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-blue-200">
                      DOKAN COUNTER ALLOCATION
                    </span>
                  </div>
                  <span
                    data-testid="pos-dokan-units"
                    className="mt-2 block text-3xl sm:text-4xl font-bold tracking-tight tabular-nums text-white"
                  >
                    {state.dokanUnits} units
                  </span>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-indigo-500/[0.08] border border-indigo-400/25">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-indigo-400" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-indigo-200">
                      GODOWN WAREHOUSE ALLOCATION
                    </span>
                  </div>
                  <span
                    data-testid="pos-godown-units"
                    className="mt-2 block text-3xl sm:text-4xl font-bold tracking-tight tabular-nums text-white"
                  >
                    {state.godownUnits} units
                  </span>
                </div>
              </div>
            </div>

            {/* Pricing & Owner PIN Privacy Row */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                  RETAIL PAYABLE
                </span>
                <span className="mt-2 block font-mono text-base font-bold tabular-nums text-white">
                  {state.retailTotalBdt}
                </span>
              </div>

              <div
                className={`p-4 rounded-2xl border transition-colors ${
                  pinUnlocked
                    ? "bg-blue-500/10 border-blue-400/35"
                    : "bg-white/[0.02] border-white/10"
                }`}
              >
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                  WHOLESALE (<span className="font-bengali">কেনা দাম</span>)
                </span>
                <span
                  data-testid="pos-wholesale-cost"
                  className={`mt-2 block font-mono text-sm font-bold tabular-nums ${
                    pinUnlocked ? "text-blue-200" : "text-amber-400/80"
                  }`}
                >
                  {state.wholesaleCostDisplay}
                </span>
              </div>

              <div
                className={`p-4 rounded-2xl border transition-colors ${
                  pinUnlocked
                    ? "bg-emerald-500/15 border-emerald-400/40"
                    : "bg-white/[0.02] border-white/10"
                }`}
              >
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                  GROSS MARGIN (<span className="font-bengali">মুনাফা</span>)
                </span>
                <span
                  data-testid="pos-gross-margin"
                  className={`mt-2 block font-mono text-sm font-bold tabular-nums ${
                    pinUnlocked ? "text-emerald-300" : "text-amber-400/80"
                  }`}
                >
                  {state.grossMarginDisplay}
                </span>
              </div>
            </div>
          </div>

          {/* Audit Event Bar */}
          <div className="mt-7 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px]">
            <span className="text-slate-400 uppercase tracking-[0.14em]">
              LEDGER AUDIT EVENT:
            </span>
            <span
              data-testid="pos-audit-event"
              className="px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/35 text-blue-200 font-bold"
            >
              {state.dispatchAuditLog}
            </span>
          </div>
        </div>

        {/* Right 5 Cols: Counter Controls & FEFO Quarantine Inspector */}
        <div className="lg:col-span-5 p-6 sm:p-9 bg-[#040812]/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-blue-400">
                DEALERSHIP COUNTER CONTROLS
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-400/30 font-mono text-[10px] text-blue-300">
                INTERACTIVE
              </span>
            </div>

            <p className="mt-4 text-xs text-slate-400 leading-relaxed">
              Unlock the 4-digit Owner PIN (&apos;1234&apos;) to reveal wholesale
              purchase costs in front of retail customers, or split fulfillment across
              Dokan and Godown stock.
            </p>

            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={() => setPinUnlocked((prev) => !prev)}
                className={`w-full px-5 py-4 rounded-2xl border font-mono text-xs uppercase tracking-[0.14em] flex items-center justify-between transition-all cursor-pointer ${
                  pinUnlocked
                    ? "bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 border-emerald-300 font-bold shadow-[0_12px_30px_-10px_rgba(16,185,129,0.5)]"
                    : "bg-white/[0.04] text-white border-white/15 hover:border-blue-400/60"
                }`}
              >
                <span>Owner PIN (1234)</span>
                <span>{pinUnlocked ? "UNLOCKED" : "LOCKED (MASKED)"}</span>
              </button>

              <button
                type="button"
                onClick={() => setSplitEnabled((prev) => !prev)}
                className={`w-full px-5 py-4 rounded-2xl border font-mono text-xs uppercase tracking-[0.14em] flex items-center justify-between transition-all cursor-pointer ${
                  splitEnabled
                    ? "bg-gradient-to-r from-blue-400 to-indigo-400 text-slate-950 border-blue-300 font-bold shadow-[0_12px_30px_-10px_rgba(59,130,246,0.55)]"
                    : "bg-white/[0.04] text-white border-white/15 hover:border-blue-400/60"
                }`}
              >
                <span>Split Dispatch (Dokan + Godown)</span>
                <span className="tabular-nums">
                  {splitEnabled ? "12 + 8 SPLIT" : "20 DOKAN ONLY"}
                </span>
              </button>
            </div>

            {/* FEFO Batch Quarantine Ledger */}
            <div className="mt-7 pt-5 border-t border-white/10">
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400 mb-3">
                FEFO BATCH EXPIRY GUARD (PESTICIDE ORDINANCE)
              </span>
              <div className="space-y-2.5 font-mono text-[11px]">
                <div className="p-3.5 rounded-2xl bg-emerald-500/[0.08] border border-emerald-400/30 flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">
                      LOT-SYN-2609A · EXP 11/2027
                    </div>
                    <div className="text-[10px] text-emerald-300/80">
                      240 DAYS REMAINING · AUTO-SELECTED
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-400 text-slate-950 text-[10px] font-bold">
                    FEFO ACTIVE
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-rose-500/[0.08] border border-rose-500/25 flex items-center justify-between">
                  <div>
                    <div className="text-rose-200/80 line-through">
                      LOT-SYN-2411B · EXP 10/2026
                    </div>
                    <div className="text-[10px] text-rose-300/80">
                      11 DAYS REMAINING · COUNTER BLOCKED
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-[10px] font-semibold">
                    QUARANTINED
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
            <span>SQLITE WAL: BEGIN IMMEDIATE</span>
            <span className="text-emerald-300 font-semibold">
              INVARIANT SUITE: 85/85 PASS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

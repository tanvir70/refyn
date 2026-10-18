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
      className="border border-[#64748B]/40 bg-[#0B1120] text-[#F7F7F4] shadow-[0_28px_70px_-24px_rgba(0,0,0,0.65)]"
      aria-label="Rajib Enterprise Agrochemical POS & Ledger Specimen"
    >
      {/* Top Specimen Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 border-b border-[#64748B]/30 bg-[#0F172A] font-mono text-[11px] uppercase tracking-[0.14em] text-[#94A3B8]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-[#F7F7F4]" />
          <span className="text-[#F7F7F4] font-semibold">
            SPECIMEN 03 — AGROCHEMICAL POS &amp; FEFO LEDGER
          </span>
        </div>
        <span className="text-[#F7F7F4] font-medium tabular-nums">
          INVARIANT: CURRENT_DUE &gt;= 0.00 (CHECK ENFORCED)
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#64748B]/30">
        {/* Left 7 Cols: Live Challan, Visual Stock Split & FEFO Quarantine */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-[#64748B]/25">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#94A3B8]">
                  CHALLAN #RJB-2026-0841 · SHERPUR SADAR
                </div>
                <h4 className="mt-1.5 text-xl sm:text-2xl font-semibold tracking-tight text-[#F7F7F4]">
                  Amistar Top 325 SC — Syngenta (20 Bottles / 1 Carton)
                </h4>
              </div>
              <div className="px-3 py-1.5 border border-[#64748B]/40 bg-[#0F172A] text-right">
                <span className="block font-bengali text-xs text-[#F7F7F4]">
                  মেসার্স রাজীব এন্টারপ্রাইজ
                </span>
                <span className="block font-mono text-[10px] text-[#94A3B8]">
                  DEALER TERMINAL
                </span>
              </div>
            </div>

            {/* Visual Proportional Stock Split Bar */}
            <div className="mt-6">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#94A3B8] mb-2">
                <span>PHYSICAL DISPATCH ALLOCATION (20 BASE UNITS)</span>
                <span className="text-[#F7F7F4] tabular-nums">
                  DOKAN {dokanPct}% / GODOWN {godownPct}%
                </span>
              </div>
              <div className="w-full h-3 bg-[#1E293B] flex overflow-hidden border border-[#64748B]/40">
                <div
                  className="h-full bg-[#F7F7F4] transition-all duration-300"
                  style={{ width: `${dokanPct}%` }}
                />
                <div
                  className="h-full bg-[#64748B] transition-all duration-300"
                  style={{ width: `${godownPct}%` }}
                />
              </div>

              <div className="mt-3 grid grid-cols-2 border border-[#64748B]/30 divide-x divide-[#64748B]/30 bg-[#0F172A]/80">
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 bg-[#F7F7F4]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#94A3B8]">
                      DOKAN COUNTER ALLOCATION
                    </span>
                  </div>
                  <span
                    data-testid="pos-dokan-units"
                    className="mt-2 block text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums text-[#F7F7F4]"
                  >
                    {state.dokanUnits} units
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 bg-[#64748B]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#94A3B8]">
                      GODOWN WAREHOUSE ALLOCATION
                    </span>
                  </div>
                  <span
                    data-testid="pos-godown-units"
                    className="mt-2 block text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums text-[#F7F7F4]"
                  >
                    {state.godownUnits} units
                  </span>
                </div>
              </div>
            </div>

            {/* Pricing & Owner PIN Privacy Row */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 border border-[#64748B]/30 divide-y sm:divide-y-0 sm:divide-x divide-[#64748B]/30 bg-[#0F172A]">
              <div className="p-4">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#94A3B8]">
                  RETAIL PAYABLE
                </span>
                <span className="mt-1.5 block font-mono text-sm font-semibold tabular-nums text-[#F7F7F4]">
                  {state.retailTotalBdt}
                </span>
              </div>

              <div className="p-4">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#94A3B8]">
                  WHOLESALE (<span className="font-bengali">কেনা দাম</span>)
                </span>
                <span
                  data-testid="pos-wholesale-cost"
                  className="mt-1.5 block font-mono text-sm font-semibold tabular-nums text-[#F7F7F4]"
                >
                  {state.wholesaleCostDisplay}
                </span>
              </div>

              <div className="p-4">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#94A3B8]">
                  GROSS MARGIN (<span className="font-bengali">মুনাফা</span>)
                </span>
                <span
                  data-testid="pos-gross-margin"
                  className="mt-1.5 block font-mono text-sm font-semibold tabular-nums text-[#F7F7F4]"
                >
                  {state.grossMarginDisplay}
                </span>
              </div>
            </div>
          </div>

          {/* FEFO Chemical Batch Quarantine Strip */}
          <div className="mt-6 pt-5 border-t border-[#64748B]/30">
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px]">
              <span className="text-[#94A3B8] uppercase tracking-[0.14em]">
                AUDIT EVENT:
              </span>
              <span
                data-testid="pos-audit-event"
                className="px-2.5 py-1 bg-[#1E293B] border border-[#64748B]/40 text-[#F7F7F4] font-semibold"
              >
                {state.dispatchAuditLog}
              </span>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Counter Controls & FEFO Quarantine Inspector */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-[#0F172A] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#64748B]/30">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#94A3B8]">
                DEALERSHIP COUNTER CONTROLS
              </span>
              <span className="px-2 py-0.5 border border-[#64748B]/40 font-mono text-[10px] text-[#F7F7F4]">
                INTERACTIVE
              </span>
            </div>

            <p className="mt-4 text-xs text-[#94A3B8] leading-relaxed">
              Unlock the 4-digit Owner PIN (&apos;1234&apos;) to reveal wholesale
              purchase costs in front of retail customers, or split fulfillment across
              Dokan and Godown stock.
            </p>

            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={() => setPinUnlocked((prev) => !prev)}
                className={`w-full px-5 py-4 border font-mono text-xs uppercase tracking-[0.14em] flex items-center justify-between transition-colors cursor-pointer ${
                  pinUnlocked
                    ? "bg-[#F7F7F4] text-[#0F172A] border-[#F7F7F4] font-semibold"
                    : "bg-[#0B1120] text-[#F7F7F4] border-[#64748B]/50 hover:border-[#F7F7F4]"
                }`}
              >
                <span>Owner PIN (1234)</span>
                <span>{pinUnlocked ? "UNLOCKED" : "LOCKED (MASKED)"}</span>
              </button>

              <button
                type="button"
                onClick={() => setSplitEnabled((prev) => !prev)}
                className={`w-full px-5 py-4 border font-mono text-xs uppercase tracking-[0.14em] flex items-center justify-between transition-colors cursor-pointer ${
                  splitEnabled
                    ? "bg-[#F7F7F4] text-[#0F172A] border-[#F7F7F4] font-semibold"
                    : "bg-[#0B1120] text-[#F7F7F4] border-[#64748B]/50 hover:border-[#F7F7F4]"
                }`}
              >
                <span>Split Dispatch (Dokan + Godown)</span>
                <span className="tabular-nums">
                  {splitEnabled ? "12 + 8 SPLIT" : "20 DOKAN ONLY"}
                </span>
              </button>
            </div>

            {/* FEFO Batch Quarantine Ledger */}
            <div className="mt-7 pt-5 border-t border-[#64748B]/30">
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#94A3B8] mb-3">
                FEFO BATCH EXPIRY GUARD (PESTICIDE ORDINANCE)
              </span>
              <div className="space-y-2 font-mono text-[11px]">
                <div className="p-3 bg-[#0B1120] border border-[#64748B]/40 flex items-center justify-between">
                  <div>
                    <div className="text-[#F7F7F4] font-medium">
                      LOT-SYN-2609A · EXP 11/2027
                    </div>
                    <div className="text-[10px] text-[#94A3B8]">
                      240 DAYS REMAINING · AUTO-SELECTED
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-[#F7F7F4] text-[#0F172A] text-[10px] font-semibold">
                    FEFO ACTIVE
                  </span>
                </div>

                <div className="p-3 bg-[#0B1120]/60 border border-[#64748B]/20 flex items-center justify-between opacity-75">
                  <div>
                    <div className="text-[#94A3B8] line-through">
                      LOT-SYN-2411B · EXP 10/2026
                    </div>
                    <div className="text-[10px] text-[#94A3B8]">
                      11 DAYS REMAINING · COUNTER BLOCKED
                    </div>
                  </div>
                  <span className="px-2 py-0.5 border border-[#64748B]/50 text-[#94A3B8] text-[10px]">
                    QUARANTINED
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#64748B]/30 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#94A3B8]">
            <span>SQLITE WAL: BEGIN IMMEDIATE</span>
            <span className="text-[#F7F7F4]">INVARIANT SUITE: 85/85 PASS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

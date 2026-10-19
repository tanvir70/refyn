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
      className="relative rounded-3xl border border-white/10 bg-[#121317] text-[#F8F9FC] shadow-[0_24px_70px_rgba(18,19,23,0.18)] overflow-hidden"
      aria-label="Agrochemical POS & Ledger Specimen"
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
            refyn · runtime · pos
          </span>
        </div>
        <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[#93C5FD] font-mono text-[10px] tabular-nums">
          INVARIANT: CURRENT_DUE &gt;= 0.00 (CHECK ENFORCED)
        </span>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
        {/* Left 7 Cols: Live Challan, Visual Stock Split & Pricing */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#93C5FD]">
                  CHALLAN #POS-2026-0841 · SHERPUR SADAR
                </div>
                <h4 className="mt-1.5 text-2xl sm:text-3xl font-medium tracking-tight text-white">
                  Amistar Top 325 SC — Syngenta
                </h4>
                <p className="mt-1 text-xs text-[#B2BBC5]">
                  Order Quantity: 20 Base Units (1 Bulk Carton) · Fungicide Class
                </p>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-right">
                <span className="block font-bengali text-xs font-medium text-white">
                  কাউন্টার পিওএস টার্মিনাল
                </span>
              </div>
            </div>

            {/* Visual Proportional Stock Split Bar */}
            <div className="mt-7">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#B2BBC5] mb-2.5">
                <span>PHYSICAL DISPATCH ALLOCATION (20 BASE UNITS)</span>
                <span className="text-white font-medium tabular-nums">
                  DOKAN {dokanPct}% / GODOWN {godownPct}%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 flex overflow-hidden">
                <div
                  className="h-full bg-[#3279F9] transition-all duration-300"
                  style={{
                    width: `${dokanPct}%`,
                  }}
                />
                {godownPct > 0 && (
                  <div
                    className="h-full bg-[#818CF8] transition-all duration-300"
                    style={{ width: `${godownPct}%` }}
                  />
                )}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-[#18191D] border border-white/[0.07]">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#3279F9]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#93C5FD]">
                      DOKAN COUNTER ALLOCATION
                    </span>
                  </div>
                  <span
                    data-testid="pos-dokan-units"
                    className="mt-2 block text-3xl font-medium tracking-tight tabular-nums text-white"
                  >
                    {state.dokanUnits} units
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-[#18191D] border border-white/[0.07]">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#818CF8]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#C7D2FE]">
                      GODOWN WAREHOUSE ALLOCATION
                    </span>
                  </div>
                  <span
                    data-testid="pos-godown-units"
                    className="mt-2 block text-3xl font-medium tracking-tight tabular-nums text-white"
                  >
                    {state.godownUnits} units
                  </span>
                </div>
              </div>
            </div>

            {/* Pricing & Owner PIN Privacy Row */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#18191D] border border-white/[0.07]">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#B2BBC5]">
                  RETAIL PAYABLE
                </span>
                <span className="mt-2 block font-mono text-base font-bold tabular-nums text-white">
                  {state.retailTotalBdt}
                </span>
              </div>

              <div
                className={`p-4 rounded-2xl border transition-colors ${
                  pinUnlocked
                    ? "bg-[#18191D] border-[#3279F9]/40"
                    : "bg-[#18191D] border-white/[0.07]"
                }`}
              >
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#B2BBC5]">
                  WHOLESALE (<span className="font-bengali">কেনা দাম</span>)
                </span>
                <span
                  data-testid="pos-wholesale-cost"
                  className={`mt-2 block font-mono text-sm font-bold tabular-nums ${
                    pinUnlocked ? "text-[#93C5FD]" : "text-[#F59E0B]"
                  }`}
                >
                  {state.wholesaleCostDisplay}
                </span>
              </div>

              <div
                className={`p-4 rounded-2xl border transition-colors ${
                  pinUnlocked
                    ? "bg-[#18191D] border-white/20"
                    : "bg-[#18191D] border-white/[0.07]"
                }`}
              >
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#B2BBC5]">
                  GROSS MARGIN (<span className="font-bengali">মুনাফা</span>)
                </span>
                <span
                  data-testid="pos-gross-margin"
                  className={`mt-2 block font-mono text-sm font-bold tabular-nums ${
                    pinUnlocked ? "text-white" : "text-[#F59E0B]"
                  }`}
                >
                  {state.grossMarginDisplay}
                </span>
              </div>
            </div>
          </div>

          {/* Audit Event Bar */}
          <div className="mt-7 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px]">
            <span className="text-[#8B95A5] uppercase tracking-[0.14em]">
              LEDGER AUDIT EVENT:
            </span>
            <span
              data-testid="pos-audit-event"
              className="px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[#93C5FD] font-medium"
            >
              {state.dispatchAuditLog}
            </span>
          </div>
        </div>

        {/* Right 5 Cols: Counter Controls & FEFO Quarantine Inspector */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-[#18191D] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#93C5FD]">
                DEALERSHIP COUNTER CONTROLS
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 font-mono text-[10px] text-[#E6EAF0]">
                INTERACTIVE
              </span>
            </div>

            <p className="mt-4 text-xs text-[#B2BBC5] leading-relaxed">
              Unlock the 4-digit Owner PIN (&apos;1234&apos;) to reveal wholesale
              purchase costs in front of retail customers, or split fulfillment across
              Dokan and Godown stock.
            </p>

            <div className="mt-6 space-y-2.5">
              <button
                type="button"
                onClick={() => setPinUnlocked((prev) => !prev)}
                className={`w-full px-5 py-3 rounded-full border font-mono text-xs uppercase tracking-wide flex items-center justify-between transition-all cursor-pointer ${
                  pinUnlocked
                    ? "bg-white text-[#121317] border-white font-medium shadow-sm"
                    : "bg-white/[0.04] text-white border-white/10 hover:bg-white/[0.08]"
                }`}
              >
                <span>Owner PIN (1234)</span>
                <span>{pinUnlocked ? "UNLOCKED" : "LOCKED (MASKED)"}</span>
              </button>

              <button
                type="button"
                onClick={() => setSplitEnabled((prev) => !prev)}
                className={`w-full px-5 py-3 rounded-full border font-mono text-xs uppercase tracking-wide flex items-center justify-between transition-all cursor-pointer ${
                  splitEnabled
                    ? "bg-[#3279F9] text-white border-[#3279F9] font-medium shadow-sm"
                    : "bg-white/[0.04] text-white border-white/10 hover:bg-white/[0.08]"
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
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#8B95A5] mb-3">
                FEFO BATCH EXPIRY GUARD (PESTICIDE ORDINANCE)
              </span>
              <div className="space-y-2 font-mono text-[11px]">
                <div className="p-3.5 rounded-2xl bg-[#090A0D] border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">
                      LOT-SYN-2609A · EXP 11/2027
                    </div>
                    <div className="text-[10px] text-[#8B95A5]">
                      240 DAYS REMAINING · AUTO-SELECTED
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.1] text-white text-[10px]">
                    FEFO ACTIVE
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#090A0D] border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <div className="text-white/40 line-through">
                      LOT-SYN-2411B · EXP 10/2026
                    </div>
                    <div className="text-[10px] text-[#F87171]">
                      11 DAYS REMAINING · COUNTER BLOCKED
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EF4444]/20 text-[#FCA5A5] text-[10px]">
                    QUARANTINED
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#8B95A5]">
            <span>SQLITE WAL: BEGIN IMMEDIATE</span>
            <span className="text-white font-medium">
              INVARIANT SUITE: 85/85 PASS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { calculatePosInvoiceState } from "@/data/monograph";

export function AgroPosSpecimen() {
  const [splitEnabled, setSplitEnabled] = useState<boolean>(false);
  const [pinUnlocked, setPinUnlocked] = useState<boolean>(false);

  const state = calculatePosInvoiceState(splitEnabled, pinUnlocked);

  return (
    <div
      className="bg-white border border-[#E5E7EB] text-[#0F172A]"
      aria-label="Rajib Enterprise Agrochemical POS & Ledger Specimen"
    >
      {/* Top Specimen Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 border-b border-[#E5E7EB] bg-[#F7F7F4] font-mono text-[11px] uppercase tracking-wider text-[#64748B]">
        <span>SPECIMEN 03 — AGROCHEMICAL POS & FEFO LEDGER</span>
        <span className="text-[#0F172A] font-medium tabular-nums">
          INVARIANT: CURRENT_DUE &gt;= 0.00 (CHECK ENFORCED)
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB]">
        {/* Left: Invoice & FEFO Batch Table */}
        <div className="md:col-span-7 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between font-mono text-[11px] text-[#64748B] uppercase tracking-wider">
              <span>CHALLAN #RJB-2026-0841 · মেসার্স রাজীব এন্টারপ্রাইজ</span>
              <span className="text-[#0F172A] font-medium">
                FEFO BATCH: {state.fefoLotCode} ({state.fefoDaysRemaining}D LEFT)
              </span>
            </div>

            <div className="mt-4 border border-[#E5E7EB] divide-y divide-[#E5E7EB] text-xs">
              <div className="p-3 bg-[#F7F7F4] flex items-center justify-between font-mono text-[11px] text-[#64748B]">
                <span>ITEM · AMISTAR TOP 325 SC (SYNGENTA)</span>
                <span className="tabular-nums">
                  QTY: {state.totalBottles} BOTTLES (1 CARTON)
                </span>
              </div>

              <div className="p-3 grid grid-cols-2 gap-3">
                <div>
                  <div className="font-mono text-[10px] uppercase text-[#64748B]">
                    Dokan Counter Allocation
                  </div>
                  <div className="text-base font-semibold tabular-nums mt-0.5">
                    {state.dokanUnits} units
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase text-[#64748B]">
                    Godown Warehouse Allocation
                  </div>
                  <div className="text-base font-semibold tabular-nums mt-0.5">
                    {state.godownUnits} units
                  </div>
                </div>
              </div>

              <div className="p-3 grid grid-cols-3 gap-2 bg-[#F7F7F4] tabular-nums">
                <div>
                  <div className="font-mono text-[10px] uppercase text-[#64748B]">
                    Retail Payable
                  </div>
                  <div className="font-semibold text-xs mt-0.5">
                    {state.retailTotalBdt}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase text-[#64748B]">
                    Wholesale (কেনা দাম)
                  </div>
                  <div className="font-mono text-xs font-semibold mt-0.5">
                    {state.wholesaleCostDisplay}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase text-[#64748B]">
                    Gross Margin (মুনাফা)
                  </div>
                  <div className="font-mono text-xs font-semibold mt-0.5">
                    {state.grossMarginDisplay}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex items-center justify-between font-mono text-[11px] text-[#64748B]">
            <span>AUDIT EVENT:</span>
            <span className="text-[#0F172A] font-medium">
              {state.dispatchAuditLog}
            </span>
          </div>
        </div>

        {/* Right: Counter Ergonomics & Owner-PIN Controls */}
        <div className="md:col-span-5 p-6 bg-[#F7F7F4] flex flex-col justify-between">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#64748B]">
              DEALERSHIP COUNTER CONTROLS
            </div>
            <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
              Toggle the 4-digit Owner PIN (`1234`) to reveal wholesale purchase
              costs, or split fulfillment across Dokan and Godown stock.
            </p>

            <div className="mt-4 space-y-2.5">
              <button
                type="button"
                aria-pressed={pinUnlocked}
                onClick={() => setPinUnlocked((prev) => !prev)}
                className="w-full min-h-[44px] px-4 py-2.5 bg-[#0F172A] text-[#F7F7F4] text-xs font-mono uppercase tracking-wider flex items-center justify-between hover:bg-[#1E293B] cursor-pointer transition-colors"
              >
                <span>Owner PIN (1234)</span>
                <span className="tabular-nums">
                  {pinUnlocked ? "UNLOCKED (VISIBLE)" : "LOCKED (MASKED)"}
                </span>
              </button>

              <button
                type="button"
                aria-pressed={splitEnabled}
                onClick={() => setSplitEnabled((prev) => !prev)}
                className="w-full min-h-[44px] px-4 py-2.5 bg-white border border-[#0F172A] text-[#0F172A] text-xs font-mono uppercase tracking-wider flex items-center justify-between hover:bg-[#E5E7EB] cursor-pointer transition-colors"
              >
                <span>Split Dispatch (Dokan + Godown)</span>
                <span className="tabular-nums">
                  {splitEnabled ? "12 + 8 SPLIT" : "20 DOKAN ONLY"}
                </span>
              </button>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-[#E5E7EB] font-mono text-[10px] text-[#64748B] flex justify-between">
            <span>SQLITE WAL: BEGIN IMMEDIATE</span>
            <span>TESTS: 85/85 PASS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

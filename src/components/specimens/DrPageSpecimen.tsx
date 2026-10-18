"use client";

import React, { useState } from "react";
import { calculateDrPageQueueState } from "@/data/monograph";

export function DrPageSpecimen() {
  const [servingSerial, setServingSerial] = useState<number>(11);
  const [delayMinutes, setDelayMinutes] = useState<number>(0);
  const patientSerial = 18;

  const state = calculateDrPageQueueState(
    servingSerial,
    patientSerial,
    delayMinutes
  );

  return (
    <div
      className="bg-white border border-[#E5E7EB] text-[#0F172A]"
      aria-label="Dr.Page Interactive Chamber Queue Specimen"
    >
      {/* Specimen Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 border-b border-[#E5E7EB] bg-[#F7F7F4] font-mono text-[11px] uppercase tracking-wider text-[#64748B]">
        <span>SPECIMEN 01 // DR.PAGE LIVE CHAMBER GATEWAY</span>
        <span className="text-[#0F172A] font-medium tabular-nums">
          LOCK: SELECT ... FOR UPDATE (0% DUPLICATE)
        </span>
      </div>

      {/* Live SSE Telemetry Banner */}
      <div
        className={`px-5 py-2.5 border-b border-[#E5E7EB] font-mono text-[11px] tracking-wide flex items-center justify-between ${
          delayMinutes > 0
            ? "bg-[#0F172A] text-[#F7F7F4]"
            : "bg-white text-[#0F172A]"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <span
            className={`inline-block w-2 h-2 ${
              delayMinutes > 0 ? "bg-[#F7F7F4]" : "bg-[#0F172A]"
            }`}
            aria-hidden="true"
          />
          <span>{state.statusBanner}</span>
        </div>
        <span className="tabular-nums opacity-75">SSE STREAM: CONNECTED</span>
      </div>

      {/* Split View: Patient Token vs Compounder Console */}
      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB]">
        {/* Left: Zero-Install Patient Live Token */}
        <div className="md:col-span-7 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between font-mono text-[11px] text-[#64748B] uppercase tracking-wider">
              <span>PATIENT VIEW · dr.page/token/DRP-018</span>
              <span>রোগীর লাইভ টোকেন</span>
            </div>
            <div className="mt-3 text-sm font-medium text-[#0F172A]">
              Prof. Dr. M. Rahman · Cardiology Evening Chamber
            </div>
            <div className="text-xs text-[#64748B]">
              Popular Diagnostic Centre, Dhanmondi · Room 402
            </div>

            {/* Primary Serial Telemetry Matrix */}
            <div className="grid grid-cols-3 border border-[#E5E7EB] mt-5 divide-x divide-[#E5E7EB] bg-[#F7F7F4]">
              <div className="p-3.5">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#64748B]">
                  Now Serving
                </div>
                <div className="text-2xl font-semibold tabular-nums text-[#0F172A] mt-1">
                  #{state.servingSerial}
                </div>
              </div>
              <div className="p-3.5 bg-white">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#64748B]">
                  Your Serial
                </div>
                <div className="text-2xl font-semibold tabular-nums text-[#0F172A] mt-1">
                  #{state.patientSerial}
                </div>
              </div>
              <div className="p-3.5">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#64748B]">
                  Queue Ahead
                </div>
                <div className="text-2xl font-semibold tabular-nums text-[#0F172A] mt-1">
                  {state.patientsAhead}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-[#E5E7EB] flex items-baseline justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#64748B]">
                Dynamic Estimated Turn (ETA)
              </div>
              <div className="text-lg font-semibold tabular-nums text-[#0F172A] mt-0.5">
                {state.etaClockDisplay}
              </div>
            </div>
            <div className="font-mono text-xs tabular-nums text-[#64748B]">
              {state.isServingPatient
                ? "Active in room"
                : `~${state.estimatedMinutes} min wait`}
            </div>
          </div>
        </div>

        {/* Right: Compounder Front-Desk Control */}
        <div className="md:col-span-5 p-6 bg-[#F7F7F4] flex flex-col justify-between">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#64748B]">
              COMPOUNDER PWA · dr.page/assistant
            </div>
            <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
              Test the live state machine: advance the chamber queue or broadcast
              an emergency OT delay to waiting patients.
            </p>

            <div className="mt-4 space-y-2.5">
              <button
                type="button"
                onClick={() =>
                  setServingSerial((prev) => Math.min(patientSerial, prev + 1))
                }
                disabled={state.isServingPatient}
                className="w-full min-h-[44px] px-4 py-2.5 bg-[#0F172A] text-[#F7F7F4] text-xs font-mono uppercase tracking-wider flex items-center justify-between hover:bg-[#1E293B] disabled:opacity-40 cursor-pointer transition-colors"
              >
                <span>Advance Serial</span>
                <span className="tabular-nums">
                  #{state.servingSerial} → #
                  {Math.min(patientSerial, state.servingSerial + 1)}
                </span>
              </button>

              <button
                type="button"
                aria-pressed={delayMinutes > 0}
                onClick={() =>
                  setDelayMinutes((prev) => (prev === 0 ? 15 : 0))
                }
                className="w-full min-h-[44px] px-4 py-2.5 bg-white border border-[#0F172A] text-[#0F172A] text-xs font-mono uppercase tracking-wider flex items-center justify-between hover:bg-[#E5E7EB] cursor-pointer transition-colors"
              >
                <span>+15m OT Delay</span>
                <span className="tabular-nums">
                  {delayMinutes > 0 ? "ACTIVE (+15M)" : "OFF"}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setServingSerial(11);
                  setDelayMinutes(0);
                }}
                className="w-full min-h-[40px] px-4 py-2 bg-transparent border border-[#CBD5E1] text-[#64748B] text-[11px] font-mono uppercase tracking-wider hover:text-[#0F172A] hover:border-[#0F172A] cursor-pointer transition-colors"
              >
                Reset Chamber State (#11)
              </button>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-[#E5E7EB] font-mono text-[10px] text-[#64748B] flex justify-between">
            <span>VIRTUAL THREADS: ON</span>
            <span>SMS COST: BDT 0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

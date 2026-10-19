"use client";

import React, { useState } from "react";
import { calculateDrPageQueueState } from "@/data/monograph";

const SERIAL_STEPS = [11, 12, 13, 14, 15, 16, 17, 18];

export function DrPageSpecimen() {
  const [servingSerial, setServingSerial] = useState<number>(11);
  const [delayMinutes, setDelayMinutes] = useState<number>(0);
  const patientSerial = 18;

  const state = calculateDrPageQueueState(
    servingSerial,
    patientSerial,
    delayMinutes
  );

  const progressPercent = Math.round(
    ((state.servingSerial - 11) / (patientSerial - 11)) * 100
  );

  return (
    <div
      className="relative rounded-3xl border border-white/10 bg-[#121317] text-[#F8F9FC] shadow-[0_24px_70px_rgba(18,19,23,0.18)] overflow-hidden"
      aria-label="Dr.Page Interactive Chamber Queue Specimen"
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
            refyn · runtime · dr-page
          </span>
        </div>
        <div className="flex items-center gap-3 tabular-nums font-mono text-[10px]">
          <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[#93C5FD]">
            LOCK: SELECT ... FOR UPDATE (0% DUPLICATE)
          </span>
          <span className="hidden sm:inline text-[#E6EAF0] opacity-80">
            SSE STREAM: CONNECTED
          </span>
        </div>
      </div>

      {/* Live Status Telemetry Bar */}
      <div
        className={`relative px-6 py-3 border-b font-mono text-xs uppercase tracking-[0.14em] flex items-center justify-between transition-colors ${
          state.isServingPatient
            ? "bg-white text-[#121317] font-bold border-white"
            : state.delayMinutes > 0
            ? "bg-[#18191D] text-[#FBBF24] border-white/10"
            : "bg-[#18191D] text-[#E6EAF0] border-white/10"
        }`}
      >
        <span>{state.statusBanner}</span>
        <span className="opacity-80">CHAMBER ROOM 402</span>
      </div>

      {/* Main Split Stage: Patient Live Pass vs Compounder Deck */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
        {/* Left 7 Cols: Patient Live Token Pass */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Pass Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#93C5FD]">
                  <span>PATIENT LIVE PASS</span>
                  <span>·</span>
                  <span>DR.PAGE/TOKEN/DRP-018</span>
                </div>
                <h4 className="mt-2 text-2xl sm:text-3xl font-medium tracking-tight text-white">
                  Prof. Dr. M. Rahman — Cardiology
                </h4>
                <p className="mt-1 text-xs text-[#B2BBC5]">
                  Popular Diagnostic Centre, Dhanmondi · Room 402 · Evening Session
                </p>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-right">
                <span className="block font-bengali text-xs font-medium text-white">
                  রোগীর লাইভ টোকেন
                </span>
              </div>
            </div>

            {/* Visual Chamber Queue Node Track (S11 -> S18) */}
            <div className="mt-7">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#B2BBC5] mb-3">
                <span>LIVE CHAMBER SERIAL PROGRESSION</span>
                <span className="tabular-nums text-white font-medium">
                  {progressPercent}% TO YOUR TURN
                </span>
              </div>

              {/* Smooth Progress Bar */}
              <div className="w-full h-1.5 rounded-full bg-white/10 mb-4 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#3279F9] transition-all duration-300"
                  style={{ width: `${Math.max(8, progressPercent)}%` }}
                />
              </div>

              <div className="grid grid-cols-8 gap-1.5 sm:gap-2">
                {SERIAL_STEPS.map((step) => {
                  const isCompleted = step < state.servingSerial;
                  const isCurrent = step === state.servingSerial;
                  const isPatient = step === state.patientSerial;

                  return (
                    <div
                      key={step}
                      className={`py-2 px-1 rounded-xl border text-center font-mono text-[11px] tabular-nums transition-all ${
                        isCurrent
                          ? "bg-white text-[#121317] border-white font-bold shadow-md scale-[1.03]"
                          : isCompleted
                          ? "bg-white/[0.02] text-white/30 border-white/[0.06] line-through"
                          : isPatient
                          ? "bg-[#3279F9]/20 text-[#93C5FD] border-[#3279F9]/40 font-bold"
                          : "bg-white/[0.04] text-[#B2BBC5] border-white/[0.08]"
                      }`}
                    >
                      <span className="block text-[9px] uppercase tracking-wider opacity-80">
                        {isCurrent
                          ? "NOW"
                          : isPatient
                          ? "YOU"
                          : isCompleted
                          ? "DONE"
                          : "WAIT"}
                      </span>
                      <span className="block mt-0.5">S{step}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Big Tabular Readouts */}
            <div className="mt-7 grid grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#18191D] border border-white/[0.07]">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#B2BBC5]">
                  NOW SERVING
                </span>
                <span
                  data-testid="drpage-serving-serial"
                  className="mt-2 block text-3xl sm:text-4xl font-medium tracking-tighter tabular-nums text-white"
                >
                  #{state.servingSerial}
                </span>
                <span className="mt-1 block font-mono text-[10px] text-[#8B95A5]">
                  IN CHAMBER
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#18191D] border border-white/[0.07]">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#93C5FD]">
                  YOUR SERIAL
                </span>
                <span
                  data-testid="drpage-patient-serial"
                  className="mt-2 block text-3xl sm:text-4xl font-medium tracking-tighter tabular-nums text-[#3279F9]"
                >
                  #{state.patientSerial}
                </span>
                <span className="mt-1 block font-mono text-[10px] text-[#93C5FD]">
                  VERIFIED PASS
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#18191D] border border-white/[0.07]">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#B2BBC5]">
                  QUEUE AHEAD
                </span>
                <span
                  data-testid="drpage-patients-ahead"
                  className="mt-2 block text-3xl sm:text-4xl font-medium tracking-tighter tabular-nums text-white"
                >
                  {state.patientsAhead}
                </span>
                <span className="mt-1 block font-mono text-[10px] text-[#8B95A5]">
                  PATIENTS
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic ETA Footer */}
          <div className="mt-7 pt-5 border-t border-white/10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#B2BBC5]">
                DYNAMIC ESTIMATED TURN (ETA)
              </span>
              <span
                data-testid="drpage-eta-display"
                className="mt-1 block text-3xl sm:text-4xl font-medium tracking-tight tabular-nums text-white"
              >
                {state.etaClockDisplay}
              </span>
            </div>
            <div className="text-right">
              <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#B2BBC5]">
                ESTIMATED WAIT WINDOW
              </span>
              <span
                data-testid="drpage-wait-minutes"
                className="mt-1 inline-block px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 font-mono text-xs font-medium text-white tabular-nums"
              >
                ~{state.estimatedMinutes} min wait
              </span>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Compounder Control Deck */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-[#18191D] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#93C5FD]">
                COMPOUNDER PWA · OPERATOR DECK
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 font-mono text-[10px] text-[#E6EAF0]">
                LIVE SIMULATOR
              </span>
            </div>

            <p className="mt-4 text-xs text-[#B2BBC5] leading-relaxed">
              Trigger real-time chamber transitions below. Watch the patient
              serial pass and SSE telemetry stream respond instantaneously.
            </p>

            <div className="mt-6 space-y-2.5">
              <button
                type="button"
                onClick={() =>
                  setServingSerial((prev) => Math.min(patientSerial, prev + 1))
                }
                disabled={state.isServingPatient}
                className="w-full px-5 py-3.5 rounded-full bg-white text-[#121317] font-medium text-xs tracking-wide flex items-center justify-between hover:bg-[#E6EAF0] disabled:opacity-40 transition-all cursor-pointer shadow-sm"
              >
                <span>Advance Serial</span>
                <span className="font-mono tabular-nums">
                  #{state.servingSerial} → #{Math.min(patientSerial, state.servingSerial + 1)}
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  setDelayMinutes((prev) => (prev === 0 ? 15 : 0))
                }
                className={`w-full px-5 py-3 rounded-full border font-mono text-xs uppercase tracking-wide flex items-center justify-between transition-all cursor-pointer ${
                  delayMinutes > 0
                    ? "bg-[#F59E0B] text-[#121317] border-[#F59E0B] font-medium"
                    : "bg-white/[0.04] text-white border-white/10 hover:bg-white/[0.08]"
                }`}
              >
                <span>+15m OT Delay</span>
                <span className="tabular-nums">
                  {delayMinutes > 0 ? "ACTIVE (+15M)" : "STANDBY"}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setServingSerial(11);
                  setDelayMinutes(0);
                }}
                className="w-full px-5 py-2.5 rounded-full border border-white/10 text-[#8B95A5] font-mono text-[11px] uppercase tracking-wide hover:text-white hover:border-white/20 transition-colors cursor-pointer"
              >
                Reset Chamber State (#11)
              </button>
            </div>
          </div>

          {/* Live SSE Telemetry Frame */}
          <div className="mt-8 pt-5 border-t border-white/10">
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#8B95A5] mb-2.5">
              SPRING MODULITH SSE TELEMETRY STREAM
            </span>
            <div className="p-4 rounded-2xl bg-[#090A0D] border border-white/[0.08] font-mono text-[11px] text-[#B2BBC5] space-y-1.5 tabular-nums">
              <div className="text-[#3279F9]">
                event: chamber.queue.updated
              </div>
              <div>
                data: {`{"serving": ${state.servingSerial}, "ahead": ${state.patientsAhead}, "delayMin": ${state.delayMinutes}}`}
              </div>
              <div className="text-[#93C5FD]">
                eta_target: &quot;{state.etaClockDisplay}&quot; · sms_cost: BDT 0.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

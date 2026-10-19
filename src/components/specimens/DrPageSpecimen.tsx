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
      className="relative rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-[#081C24]/95 via-[#06121A]/95 to-[#040B11] text-slate-100 shadow-[0_36px_100px_-20px_rgba(16,185,129,0.28)] overflow-hidden backdrop-blur-2xl"
      aria-label="Dr.Page Interactive Chamber Queue Specimen"
    >
      {/* Ambient Bioluminescent Emerald Glow */}
      <div
        className="pointer-events-none absolute -top-28 left-1/4 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 right-1/4 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl"
        aria-hidden="true"
      />

      {/* Top Glass Window Chrome */}
      <div className="relative flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-emerald-500/20 bg-emerald-950/30 font-mono text-[11px] uppercase tracking-[0.14em]">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="text-emerald-300 font-semibold">
            SPECIMEN 01 — DR.PAGE LIVE CHAMBER GATEWAY
          </span>
        </div>
        <div className="flex items-center gap-3 tabular-nums">
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/25 text-emerald-300 text-[10px]">
            LOCK: SELECT ... FOR UPDATE (0% DUPLICATE)
          </span>
          <span className="hidden sm:inline text-cyan-300 font-medium text-[10px]">
            SSE STREAM: CONNECTED
          </span>
        </div>
      </div>

      {/* Live Status Telemetry Bar */}
      <div
        className={`relative px-6 py-3 border-b font-mono text-xs uppercase tracking-[0.14em] flex items-center justify-between transition-colors ${
          state.isServingPatient
            ? "bg-emerald-500 text-slate-950 font-bold border-emerald-400"
            : state.delayMinutes > 0
            ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
            : "bg-white/[0.02] text-emerald-200/90 border-white/[0.07]"
        }`}
      >
        <span>{state.statusBanner}</span>
        <span className="opacity-80">CHAMBER ROOM 402</span>
      </div>

      {/* Main Split Stage: Patient Live Pass vs Compounder Deck */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-emerald-500/15">
        {/* Left 7 Cols: Patient Live Token Pass */}
        <div className="lg:col-span-7 p-6 sm:p-9 flex flex-col justify-between">
          <div>
            {/* Pass Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-400">
                  <span>PATIENT LIVE PASS</span>
                  <span>·</span>
                  <span>DR.PAGE/TOKEN/DRP-018</span>
                </div>
                <h4 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  Prof. Dr. M. Rahman — Cardiology
                </h4>
                <p className="mt-1 text-xs text-slate-400">
                  Popular Diagnostic Centre, Dhanmondi · Room 402 · Evening Session
                </p>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-400/25 text-right">
                <span className="block font-bengali text-xs font-medium text-emerald-300">
                  রোগীর লাইভ টোকেন
                </span>
                <span className="block font-mono text-[10px] tracking-wider text-slate-400 uppercase">
                  ZERO-INSTALL WEB
                </span>
              </div>
            </div>

            {/* Visual Chamber Queue Node Track (S11 -> S18) */}
            <div className="mt-7">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400 mb-3">
                <span>LIVE CHAMBER SERIAL PROGRESSION</span>
                <span className="tabular-nums text-emerald-300 font-semibold">
                  {progressPercent}% TO YOUR TURN
                </span>
              </div>

              {/* Smooth Progress Bar */}
              <div className="w-full h-1.5 rounded-full bg-white/10 mb-4 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300"
                  style={{ width: `${Math.max(8, progressPercent)}%` }}
                />
              </div>

              <div className="grid grid-cols-8 gap-2">
                {SERIAL_STEPS.map((step) => {
                  const isCompleted = step < state.servingSerial;
                  const isCurrent = step === state.servingSerial;
                  const isPatient = step === state.patientSerial;

                  return (
                    <div
                      key={step}
                      className={`py-2.5 px-1 rounded-xl border text-center font-mono text-[11px] tabular-nums transition-all ${
                        isCurrent
                          ? "bg-emerald-400 text-slate-950 border-emerald-300 font-bold shadow-[0_0_24px_rgba(16,185,129,0.5)] scale-[1.03]"
                          : isCompleted
                          ? "bg-emerald-950/40 text-emerald-500/60 border-emerald-500/15 line-through"
                          : isPatient
                          ? "bg-cyan-500/15 text-cyan-300 border-cyan-400/60 font-bold"
                          : "bg-white/[0.03] text-slate-400 border-white/10"
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
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                  NOW SERVING
                </span>
                <span
                  data-testid="drpage-serving-serial"
                  className="mt-2 block text-3xl sm:text-4xl font-bold tracking-tighter tabular-nums text-emerald-400"
                >
                  #{state.servingSerial}
                </span>
                <span className="mt-1 block font-mono text-[10px] text-slate-400">
                  IN CHAMBER
                </span>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-cyan-500/10 border border-cyan-400/30">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-300">
                  YOUR SERIAL
                </span>
                <span
                  data-testid="drpage-patient-serial"
                  className="mt-2 block text-3xl sm:text-4xl font-bold tracking-tighter tabular-nums text-white"
                >
                  #{state.patientSerial}
                </span>
                <span className="mt-1 block font-mono text-[10px] text-cyan-300 font-medium">
                  VERIFIED PASS
                </span>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                  QUEUE AHEAD
                </span>
                <span
                  data-testid="drpage-patients-ahead"
                  className="mt-2 block text-3xl sm:text-4xl font-bold tracking-tighter tabular-nums text-white"
                >
                  {state.patientsAhead}
                </span>
                <span className="mt-1 block font-mono text-[10px] text-slate-400">
                  PATIENTS
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic ETA Footer */}
          <div className="mt-7 pt-5 border-t border-white/10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                DYNAMIC ESTIMATED TURN (ETA)
              </span>
              <span
                data-testid="drpage-eta-display"
                className="mt-1 block text-3xl sm:text-4xl font-bold tracking-tight tabular-nums text-emerald-300"
              >
                {state.etaClockDisplay}
              </span>
            </div>
            <div className="text-right">
              <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
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
        <div className="lg:col-span-5 p-6 sm:p-9 bg-[#03090E]/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-400">
                COMPOUNDER PWA · OPERATOR DECK
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 font-mono text-[10px] text-emerald-300">
                LIVE SIMULATOR
              </span>
            </div>

            <p className="mt-4 text-xs text-slate-400 leading-relaxed">
              Trigger real-time chamber transitions below. Watch the patient
              serial pass and SSE telemetry stream respond instantaneously.
            </p>

            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={() =>
                  setServingSerial((prev) => Math.min(patientSerial, prev + 1))
                }
                disabled={state.isServingPatient}
                className="w-full px-5 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-mono text-xs uppercase tracking-[0.14em] font-bold flex items-center justify-between hover:brightness-110 disabled:opacity-40 transition-all shadow-[0_12px_30px_-10px_rgba(16,185,129,0.55)] cursor-pointer"
              >
                <span>Advance Serial</span>
                <span className="tabular-nums">
                  #{state.servingSerial} → #{Math.min(patientSerial, state.servingSerial + 1)}
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  setDelayMinutes((prev) => (prev === 0 ? 15 : 0))
                }
                className={`w-full px-5 py-3.5 rounded-2xl border font-mono text-xs uppercase tracking-[0.14em] flex items-center justify-between transition-all cursor-pointer ${
                  delayMinutes > 0
                    ? "bg-amber-400 text-slate-950 border-amber-300 font-bold shadow-[0_12px_30px_-10px_rgba(245,158,11,0.5)]"
                    : "bg-white/[0.03] text-slate-200 border-white/15 hover:border-amber-400/50 hover:text-amber-300"
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
                className="w-full px-5 py-3 rounded-2xl border border-white/10 text-slate-400 font-mono text-[11px] uppercase tracking-[0.14em] hover:text-white hover:border-white/25 transition-colors cursor-pointer"
              >
                Reset Chamber State (#11)
              </button>
            </div>
          </div>

          {/* Live SSE Telemetry Frame */}
          <div className="mt-8 pt-5 border-t border-white/10">
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400 mb-2.5">
              SPRING MODULITH SSE TELEMETRY STREAM
            </span>
            <div className="p-4 rounded-2xl bg-[#020609] border border-emerald-500/20 font-mono text-[11px] text-slate-300 space-y-1.5 tabular-nums">
              <div className="text-emerald-400">
                event: chamber.queue.updated
              </div>
              <div>
                data: {`{"serving": ${state.servingSerial}, "ahead": ${state.patientsAhead}, "delayMin": ${state.delayMinutes}}`}
              </div>
              <div className="text-cyan-400">
                eta_target: &quot;{state.etaClockDisplay}&quot; · sms_cost: BDT 0.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

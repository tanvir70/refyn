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
      className="border border-[#0F172A]/15 bg-white text-[#0F172A] shadow-[0_24px_60px_-24px_rgba(15,23,42,0.12)]"
      aria-label="Dr.Page Interactive Chamber Queue Specimen"
    >
      {/* Top Architectural Instrument Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 border-b border-[#E5E7EB] bg-[#F7F7F4] font-mono text-[11px] uppercase tracking-[0.14em] text-[#64748B]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-[#0F172A]" />
          <span className="text-[#0F172A] font-semibold">
            SPECIMEN 01 — DR.PAGE LIVE CHAMBER GATEWAY
          </span>
        </div>
        <div className="flex items-center gap-4 tabular-nums">
          <span>LOCK: SELECT ... FOR UPDATE (0% DUPLICATE)</span>
          <span className="hidden sm:inline text-[#0F172A] font-medium">
            SSE STREAM: CONNECTED
          </span>
        </div>
      </div>

      {/* Live Status Banner */}
      <div className="px-6 py-2.5 border-b border-[#E5E7EB] bg-white flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-[#0F172A]">
        <span>{state.statusBanner}</span>
        <span className="text-[#64748B]">CHAMBER ROOM 402</span>
      </div>

      {/* Main Split Stage: Patient Pass (Light) vs Compounder Console (Obsidian Dark) */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left 7 Cols: Patient Live Token Pass */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            {/* Pass Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
              <div>
                <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#64748B]">
                  <span>PATIENT LIVE PASS</span>
                  <span>·</span>
                  <span>DR.PAGE/TOKEN/DRP-018</span>
                </div>
                <h4 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-[#0F172A]">
                  Prof. Dr. M. Rahman — Cardiology Chamber
                </h4>
                <p className="mt-1 text-xs text-[#64748B]">
                  Popular Diagnostic Centre, Dhanmondi · Room 402 · Evening Session
                </p>
              </div>
              <div className="px-3 py-1.5 bg-[#F7F7F4] border border-[#E5E7EB] text-right">
                <span className="block font-bengali text-xs font-medium text-[#0F172A]">
                  রোগীর লাইভ টোকেন
                </span>
                <span className="block font-mono text-[10px] tracking-wider text-[#64748B] uppercase">
                  ZERO-INSTALL WEB
                </span>
              </div>
            </div>

            {/* Visual Chamber Queue Node Track (S11 -> S18) */}
            <div className="mt-6">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B] mb-2.5">
                <span>LIVE CHAMBER SERIAL PROGRESSION</span>
                <span className="tabular-nums text-[#0F172A] font-medium">
                  {progressPercent}% TO YOUR TURN
                </span>
              </div>

              <div className="grid grid-cols-8 gap-1.5">
                {SERIAL_STEPS.map((step) => {
                  const isCompleted = step < state.servingSerial;
                  const isCurrent = step === state.servingSerial;
                  const isPatient = step === state.patientSerial;

                  return (
                    <div
                      key={step}
                      className={`py-2 px-1 border text-center font-mono text-[11px] tabular-nums transition-colors ${
                        isCurrent
                          ? "bg-[#0F172A] text-[#F7F7F4] border-[#0F172A] font-semibold"
                          : isCompleted
                          ? "bg-[#F7F7F4] text-[#64748B] border-[#E5E7EB] line-through"
                          : isPatient
                          ? "bg-white text-[#0F172A] border-[#0F172A] font-semibold"
                          : "bg-white text-[#64748B] border-[#E5E7EB]"
                      }`}
                    >
                      <span className="block text-[9px] uppercase tracking-wider opacity-75">
                        {isCurrent
                          ? "ACTIVE"
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
            <div className="mt-6 grid grid-cols-3 border border-[#E5E7EB] divide-x divide-[#E5E7EB] bg-[#F7F7F4]/60">
              <div className="p-4 sm:p-5">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                  NOW SERVING
                </span>
                <span
                  data-testid="drpage-serving-serial"
                  className="mt-2 block text-3xl sm:text-4xl font-semibold tracking-tighter tabular-nums text-[#0F172A]"
                >
                  #{state.servingSerial}
                </span>
                <span className="mt-1 block font-mono text-[10px] text-[#64748B]">
                  IN CHAMBER
                </span>
              </div>

              <div className="p-4 sm:p-5 bg-white">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                  YOUR SERIAL
                </span>
                <span
                  data-testid="drpage-patient-serial"
                  className="mt-2 block text-3xl sm:text-4xl font-semibold tracking-tighter tabular-nums text-[#0F172A]"
                >
                  #{state.patientSerial}
                </span>
                <span className="mt-1 block font-mono text-[10px] text-[#0F172A] font-medium">
                  VERIFIED PASS
                </span>
              </div>

              <div className="p-4 sm:p-5">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                  QUEUE AHEAD
                </span>
                <span
                  data-testid="drpage-patients-ahead"
                  className="mt-2 block text-3xl sm:text-4xl font-semibold tracking-tighter tabular-nums text-[#0F172A]"
                >
                  {state.patientsAhead}
                </span>
                <span className="mt-1 block font-mono text-[10px] text-[#64748B]">
                  PATIENTS
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic ETA & Status Footer */}
          <div className="mt-6 pt-5 border-t border-[#E5E7EB]">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                  DYNAMIC ESTIMATED TURN (ETA)
                </span>
                <span
                  data-testid="drpage-eta-display"
                  className="mt-1 block text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums text-[#0F172A]"
                >
                  {state.etaClockDisplay}
                </span>
              </div>
              <div className="text-right">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                  ESTIMATED WAIT WINDOW
                </span>
                <span
                  data-testid="drpage-wait-minutes"
                  className="mt-1 block font-mono text-sm font-medium text-[#0F172A] tabular-nums"
                >
                  ~{state.estimatedMinutes} min wait
                </span>
              </div>
            </div>

            {state.isServingPatient && (
              <div className="mt-4 px-4 py-3 bg-[#0F172A] text-[#F7F7F4] font-mono text-xs uppercase tracking-[0.12em] flex items-center justify-between">
                <span>{state.statusBanner}</span>
                <span>ENTER NOW</span>
              </div>
            )}

            {state.delayMinutes > 0 && !state.isServingPatient && (
              <div className="mt-4 px-4 py-3 bg-[#F7F7F4] border-l-2 border-[#0F172A] text-[#0F172A] font-mono text-xs">
                CHAMBER NOTICE: +{state.delayMinutes}m emergency OT delay applied.
                All downstream patient ETAs automatically recalibrated.
              </div>
            )}
          </div>
        </div>

        {/* Right 5 Cols: Obsidian Compounder Control Deck */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-[#0F172A] text-[#F7F7F4] flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#0F172A]">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#64748B]/30">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#94A3B8]">
                COMPOUNDER PWA · OPERATOR DECK
              </span>
              <span className="px-2 py-0.5 border border-[#64748B]/40 font-mono text-[10px] text-[#F7F7F4]">
                INTERACTIVE
              </span>
            </div>

            <p className="mt-4 text-xs text-[#94A3B8] leading-relaxed">
              Operate the live chamber state machine below. Advancing the serial or
              broadcasting an OT delay recalculates the patient pass on the left in
              real time.
            </p>

            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={() =>
                  setServingSerial((prev) => Math.min(patientSerial, prev + 1))
                }
                disabled={state.isServingPatient}
                className="w-full px-5 py-4 bg-[#F7F7F4] text-[#0F172A] font-mono text-xs uppercase tracking-[0.14em] font-semibold flex items-center justify-between hover:bg-white disabled:opacity-40 transition-colors cursor-pointer"
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
                className={`w-full px-5 py-3.5 border font-mono text-xs uppercase tracking-[0.14em] flex items-center justify-between transition-colors cursor-pointer ${
                  delayMinutes > 0
                    ? "bg-[#F7F7F4] text-[#0F172A] border-[#F7F7F4] font-semibold"
                    : "bg-transparent text-[#F7F7F4] border-[#64748B]/50 hover:border-[#F7F7F4]"
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
                className="w-full px-5 py-3 border border-[#64748B]/30 text-[#94A3B8] font-mono text-[11px] uppercase tracking-[0.14em] hover:text-[#F7F7F4] hover:border-[#64748B] transition-colors cursor-pointer"
              >
                Reset Chamber State (#11)
              </button>
            </div>
          </div>

          {/* Live SSE Telemetry Log */}
          <div className="mt-8 pt-5 border-t border-[#64748B]/30">
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#94A3B8] mb-2.5">
              SPRING MODULITH SSE TELEMETRY FRAME
            </span>
            <div className="p-3.5 bg-[#090E1A] border border-[#64748B]/30 font-mono text-[11px] text-[#E5E7EB] space-y-1 tabular-nums">
              <div className="text-[#94A3B8]">
                event: chamber.queue.updated
              </div>
              <div>
                data: {`{"serving": ${state.servingSerial}, "ahead": ${state.patientsAhead}, "delayMin": ${state.delayMinutes}}`}
              </div>
              <div className="text-[#94A3B8]">
                eta_target: &quot;{state.etaClockDisplay}&quot; · sms_cost: BDT 0.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

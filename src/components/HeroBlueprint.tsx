import React from "react";

export function HeroBlueprint() {
  return (
    <div className="border border-[#0F172A]/15 bg-white shadow-[0_24px_60px_-24px_rgba(15,23,42,0.10)] flex flex-col justify-between">
      {/* Top Drafting Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#E5E7EB] bg-[#F7F7F4] font-mono text-[10px] uppercase tracking-[0.16em] text-[#64748B]">
        <span>FIG 01 — KINETIC MONOGRAM GEOMETRY</span>
        <span className="text-[#0F172A] font-medium">SCALE 1:1 · GRID 96U</span>
      </div>

      {/* SVG Architectural Blueprint Canvas */}
      <div className="relative p-6 sm:p-8 bg-[#0F172A] text-[#F7F7F4] overflow-hidden">
        {/* Corner Registration Marks */}
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-[#94A3B8] mb-4">
          <span>AXIS: 23.8103° N, 90.4125° E</span>
          <span>SLICE ANGLE: 45.0°</span>
        </div>

        <svg
          viewBox="0 0 360 220"
          className="w-full h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Refyn Venture Architectural Geometry Blueprint"
        >
          {/* Subtle Architectural Grid Lines */}
          <line x1="0" y1="36" x2="360" y2="36" stroke="#64748B" strokeOpacity="0.22" strokeWidth="1" />
          <line x1="0" y1="110" x2="360" y2="110" stroke="#64748B" strokeOpacity="0.22" strokeWidth="1" />
          <line x1="0" y1="184" x2="360" y2="184" stroke="#64748B" strokeOpacity="0.22" strokeWidth="1" />
          <line x1="72" y1="0" x2="72" y2="220" stroke="#64748B" strokeOpacity="0.22" strokeWidth="1" />
          <line x1="180" y1="0" x2="180" y2="220" stroke="#64748B" strokeOpacity="0.22" strokeWidth="1" />
          <line x1="288" y1="0" x2="288" y2="220" stroke="#64748B" strokeOpacity="0.22" strokeWidth="1" />

          {/* Construction Circles & 45-deg Diagonal Guides */}
          <circle
            cx="216"
            cy="81"
            r="68"
            stroke="#64748B"
            strokeOpacity="0.35"
            strokeDasharray="3 3"
            strokeWidth="1"
          />
          <circle
            cx="216"
            cy="81"
            r="44"
            stroke="#64748B"
            strokeOpacity="0.35"
            strokeDasharray="2 2"
            strokeWidth="1"
          />
          <line
            x1="68"
            y1="18"
            x2="254"
            y2="204"
            stroke="#94A3B8"
            strokeOpacity="0.4"
            strokeDasharray="4 4"
            strokeWidth="1"
          />
          <line
            x1="44"
            y1="96"
            x2="152"
            y2="204"
            stroke="#94A3B8"
            strokeOpacity="0.4"
            strokeDasharray="4 4"
            strokeWidth="1"
          />

          {/* Centered Scaled R Monogram */}
          <g transform="translate(86, 6) scale(2.15)">
            <path
              d="M8 14H64.5C75.8 14 84.8 23 84.8 34.3C84.8 44.3 77.5 52.6 67.8 54.1L63.5 54.8L88 82.6H69.2L31.6 41H64.2C67.9 41 71 38 71 34.3C71 30.6 67.9 27.6 64.2 27.6H21.2L8 14Z"
              fill="#F7F7F4"
            />
            <path
              d="M10 55.2H22.2C24.8 55.2 27.3 56.3 29 58.2L51.2 82.6H34L10 55.2Z"
              fill="#94A3B8"
            />
          </g>

          {/* Dimension Callout Labels */}
          <text x="12" y="30" fill="#94A3B8" fontFamily="monospace" fontSize="9" letterSpacing="1">
            Y0: 14.0U
          </text>
          <text x="12" y="178" fill="#94A3B8" fontFamily="monospace" fontSize="9" letterSpacing="1">
            Y1: 82.6U
          </text>
          <text x="294" y="84" fill="#F7F7F4" fontFamily="monospace" fontSize="9" letterSpacing="1">
            R=20.3U
          </text>
        </svg>

        <div className="mt-4 pt-3 border-t border-[#64748B]/30 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#94A3B8]">
          <span>DUAL-VECTOR FORWARD MOMENTUM</span>
          <span className="text-[#F7F7F4]">REFYN VENTURE MARK</span>
        </div>
      </div>

      {/* Live Production Systems Index inside Blueprint Card */}
      <div className="divide-y divide-[#E5E7EB]">
        <a
          href="#work-dr-page"
          className="px-5 py-3.5 flex items-center justify-between hover:bg-[#F7F7F4] transition-colors group"
        >
          <div>
            <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
              01 · IN-HOUSE VENTURE · HEALTHCARE
            </span>
            <span className="mt-0.5 block text-sm font-semibold text-[#0F172A]">
              Dr.Page — Chamber Serial Gateway
            </span>
          </div>
          <span className="font-mono text-xs text-[#64748B] group-hover:text-[#0F172A] group-hover:translate-x-0.5 transition-all">
            →
          </span>
        </a>

        <a
          href="#work-pristha"
          className="px-5 py-3.5 flex items-center justify-between hover:bg-[#F7F7F4] transition-colors group"
        >
          <div>
            <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
              02 · IN-HOUSE VENTURE · PUBLISHING
            </span>
            <span className="mt-0.5 block text-sm font-semibold text-[#0F172A]">
              Pristha — Bilingual Literary Workspace
            </span>
          </div>
          <span className="font-mono text-xs text-[#64748B] group-hover:text-[#0F172A] group-hover:translate-x-0.5 transition-all">
            →
          </span>
        </a>

        <a
          href="#work-rajib-pos"
          className="px-5 py-3.5 flex items-center justify-between hover:bg-[#F7F7F4] transition-colors group"
        >
          <div>
            <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
              03 · PARTNER SYSTEM · AGROCHEMICAL ERP
            </span>
            <span className="mt-0.5 block text-sm font-semibold text-[#0F172A]">
              Rajib Enterprise — FEFO POS &amp; Credit Ledger
            </span>
          </div>
          <span className="font-mono text-xs text-[#64748B] group-hover:text-[#0F172A] group-hover:translate-x-0.5 transition-all">
            →
          </span>
        </a>
      </div>
    </div>
  );
}

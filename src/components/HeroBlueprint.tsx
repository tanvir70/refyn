import React from "react";

export function HeroBlueprint() {
  return (
    <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-slate-900/90 via-[#090E1A]/95 to-[#060911] p-1 shadow-[0_32px_90px_-20px_rgba(14,165,233,0.22)] backdrop-blur-2xl overflow-hidden">
      {/* Ambient Radial Spotlights inside the Hero Card */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-24 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative rounded-[22px] border border-white/[0.07] bg-[#070B14]/90 overflow-hidden">
        {/* Top Glass Chrome Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-sky-400/80" />
            <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
              REFYN STUDIO CORE · V2026
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-400/25 font-mono text-[10px] tracking-[0.14em] text-sky-300 uppercase">
            3 ENGINES LIVE
          </span>
        </div>

        {/* 3D Layered Kinetic R Sculpture Stage */}
        <div className="relative px-6 py-8 bg-studio-grid overflow-hidden">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-slate-400 mb-3">
            <span>COORDINATES: 23.8103° N, 90.4125° E</span>
            <span className="text-sky-300">VECTOR MOMENTUM: 45.0°</span>
          </div>

          <svg
            viewBox="0 0 360 210"
            className="w-full h-auto drop-shadow-[0_18px_36px_rgba(56,189,248,0.22)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Refyn Venture 3D Kinetic Monogram Sculpture"
          >
            <defs>
              <linearGradient id="rMainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="60%" stopColor="#E2E8F0" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
              <linearGradient id="rSlashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
              <radialGradient id="stageGlow" cx="55%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.28" />
                <stop offset="55%" stopColor="#10B981" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#070B14" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Ambient Stage Halo */}
            <ellipse cx="195" cy="105" rx="145" ry="90" fill="url(#stageGlow)" />

            {/* Orbital Precision Rings */}
            <circle
              cx="212"
              cy="82"
              r="76"
              stroke="#38BDF8"
              strokeOpacity="0.22"
              strokeDasharray="4 4"
              strokeWidth="1"
            />
            <circle
              cx="212"
              cy="82"
              r="50"
              stroke="#34D399"
              strokeOpacity="0.25"
              strokeDasharray="2 3"
              strokeWidth="1"
            />

            {/* Extruded Depth Shadow Copy of R */}
            <g transform="translate(94, 12) scale(2.05)" opacity="0.18">
              <path
                d="M8 14H64.5C75.8 14 84.8 23 84.8 34.3C84.8 44.3 77.5 52.6 67.8 54.1L63.5 54.8L88 82.6H69.2L31.6 41H64.2C67.9 41 71 38 71 34.3C71 30.6 67.9 27.6 64.2 27.6H21.2L8 14Z"
                fill="#38BDF8"
              />
              <path
                d="M10 55.2H22.2C24.8 55.2 27.3 56.3 29 58.2L51.2 82.6H34L10 55.2Z"
                fill="#10B981"
              />
            </g>

            {/* Foreground Luminous R Monogram */}
            <g transform="translate(86, 4) scale(2.05)">
              <path
                d="M8 14H64.5C75.8 14 84.8 23 84.8 34.3C84.8 44.3 77.5 52.6 67.8 54.1L63.5 54.8L88 82.6H69.2L31.6 41H64.2C67.9 41 71 38 71 34.3C71 30.6 67.9 27.6 64.2 27.6H21.2L8 14Z"
                fill="url(#rMainGrad)"
              />
              <path
                d="M10 55.2H22.2C24.8 55.2 27.3 56.3 29 58.2L51.2 82.6H34L10 55.2Z"
                fill="url(#rSlashGrad)"
              />
            </g>
          </svg>
        </div>

        {/* Color-Coded Venture Worlds Portal */}
        <div className="p-4 space-y-2.5 bg-[#050811]/90 border-t border-white/[0.08]">
          <a
            href="#work-dr-page"
            className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/[0.12] via-emerald-500/[0.04] to-transparent border border-emerald-500/25 hover:border-emerald-400/60 flex items-center justify-between transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 border border-emerald-400/30 font-mono text-xs font-bold text-emerald-300">
                01
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">
                    Dr.Page
                  </span>
                  <span className="font-bengali text-xs text-emerald-300">
                    ডাক্তার পেইজ
                  </span>
                </div>
                <span className="block text-xs text-slate-400">
                  Clinical Queue &amp; Live Chamber Telemetry
                </span>
              </div>
            </div>
            <span className="font-mono text-xs text-emerald-300 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>

          <a
            href="#work-pristha"
            className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/[0.12] via-amber-500/[0.04] to-transparent border border-amber-500/25 hover:border-amber-400/60 flex items-center justify-between transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-400/30 font-mono text-xs font-bold text-amber-300">
                02
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">
                    Pristha
                  </span>
                  <span className="font-bengali text-xs text-amber-300">
                    পৃষ্ঠা
                  </span>
                </div>
                <span className="block text-xs text-slate-400">
                  Tri-Surface Literary &amp; Publishing Engine
                </span>
              </div>
            </div>
            <span className="font-mono text-xs text-amber-300 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>

          <a
            href="#work-agro-pos"
            className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/[0.12] via-blue-500/[0.04] to-transparent border border-blue-500/25 hover:border-blue-400/60 flex items-center justify-between transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 border border-blue-400/30 font-mono text-xs font-bold text-blue-300">
                03
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">
                    POS
                  </span>
                  <span className="font-bengali text-xs text-blue-300">
                    পিওএস (POS)
                  </span>
                </div>
                <span className="block text-xs text-slate-400">
                  FEFO Inventory &amp; Self-Healing Credit Ledger
                </span>
              </div>
            </div>
            <span className="font-mono text-xs text-blue-300 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

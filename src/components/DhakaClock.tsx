"use client";

import React, { useEffect, useState } from "react";

export function DhakaClock() {
  const [timeStr, setTimeStr] = useState<string>("18:00:00 BST");

  useEffect(() => {
    const updateClock = () => {
      const formatted = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
      setTimeStr(`${formatted} BST`);
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[11px] text-slate-300 tabular-nums">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
      </span>
      <span className="text-slate-400 hidden xl:inline">DAC 23.81°N</span>
      <span className="text-white font-medium">{timeStr}</span>
    </div>
  );
}

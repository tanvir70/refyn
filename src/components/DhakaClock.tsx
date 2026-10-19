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
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F9FC] border border-[#212226]/[0.08] font-mono text-[11px] text-[#45474D] tabular-nums">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3279F9] opacity-75" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#3279F9]" />
      </span>
      <span className="text-[#45474D] hidden xl:inline">DAC</span>
      <span className="text-[#121317] font-medium">{timeStr}</span>
    </div>
  );
}

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
    <div className="font-mono text-[11px] leading-relaxed text-[#64748B] tabular-nums">
      <div className="text-[#111318] font-medium tracking-wider uppercase">
        DAC · 23.8103° N, 90.4125° E
      </div>
      <div className="mt-0.5">{timeStr} · UTC+06:00</div>
    </div>
  );
}

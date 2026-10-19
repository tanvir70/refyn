"use client";

import React, { useState } from "react";
import { BrandLogo } from "./BrandLogo";

const MONOGRAM_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" role="img" aria-label="Refyn Venture R Monogram">
  <path d="M8 14H64.5C75.8 14 84.8 23 84.8 34.3C84.8 44.3 77.5 52.6 67.8 54.1L63.5 54.8L88 82.6H69.2L31.6 41H64.2C67.9 41 71 38 71 34.3C71 30.6 67.9 27.6 64.2 27.6H21.2L8 14Z" fill="#0F172A"/>
  <path d="M10 55.2H22.2C24.8 55.2 27.3 56.3 29 58.2L51.2 82.6H34L10 55.2Z" fill="#0F172A"/>
</svg>`;

export function HeaderBrand() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopySvg = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(MONOGRAM_SVG);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Ignore clipboard write errors
    }
  };

  return (
    <div
      className="relative inline-flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        href="#welcome"
        className="inline-flex items-center focus:outline-none"
        aria-label="Refyn Venture Home"
      >
        <BrandLogo variant="lockup" theme="light" />
      </a>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-50 rounded-2xl bg-white border border-[#212226]/10 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.12)] min-w-[210px] flex flex-col gap-1 text-xs">
          <button
            type="button"
            onClick={handleCopySvg}
            className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-[#202124] hover:bg-[#F1F3F4] text-left transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 16 16"
                className="w-3.5 h-3.5 text-[#5F6368]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M5 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z" />
                <path d="M8 5v6m-3-3h6" />
              </svg>
              <span>Copy Logo as SVG</span>
            </div>
            {copied && (
              <span className="font-mono text-[10px] text-[#3279F9] font-medium">
                Copied!
              </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

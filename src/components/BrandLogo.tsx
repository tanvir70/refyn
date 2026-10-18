import React from "react";

interface BrandLogoProps {
  variant?: "monogram" | "lockup";
  theme?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

export function BrandLogo({
  variant = "lockup",
  theme = "light",
  showTagline = false,
  className = "",
}: BrandLogoProps) {
  const fillPrimary = theme === "light" ? "#0F172A" : "#F7F7F4";
  const textPrimary = theme === "light" ? "text-[#0F172A]" : "text-[#F7F7F4]";
  const textSecondary = theme === "light" ? "text-[#64748B]" : "text-[#94A3B8]";
  const dividerBg = theme === "light" ? "bg-[#64748B]/40" : "bg-[#64748B]/60";

  const monogramSvg = (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Refyn Venture Monogram"
      className={variant === "monogram" ? className || "w-11 h-11" : "w-11 h-11 shrink-0"}
    >
      <path
        d="M8 14H64.5C75.8 14 84.8 23 84.8 34.3C84.8 44.3 77.5 52.6 67.8 54.1L63.5 54.8L88 82.6H69.2L31.6 41H64.2C67.9 41 71 38 71 34.3C71 30.6 67.9 27.6 64.2 27.6H21.2L8 14Z"
        fill={fillPrimary}
      />
      <path
        d="M10 55.2H22.2C24.8 55.2 27.3 56.3 29 58.2L51.2 82.6H34L10 55.2Z"
        fill={fillPrimary}
      />
    </svg>
  );

  if (variant === "monogram") {
    return monogramSvg;
  }

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <div className="inline-flex items-center gap-4">
        {monogramSvg}
        <span className={`h-10 w-[1px] ${dividerBg}`} aria-hidden="true" />
        <div className="flex flex-col justify-center leading-none">
          <span
            className={`font-semibold text-[21px] tracking-[0.26em] ${textPrimary}`}
          >
            REFYN
          </span>
          <span
            className={`mt-1.5 font-medium text-[9.5px] tracking-[0.42em] ${textSecondary}`}
          >
            VENTURE
          </span>
        </div>
      </div>
      {showTagline && (
        <span
          className={`mt-3 text-[12px] tracking-[0.04em] ${textSecondary}`}
        >
          Software that moves business forward.
        </span>
      )}
    </div>
  );
}

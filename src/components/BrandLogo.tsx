import React from "react";

export interface BrandLogoProps {
  readonly theme?: "light" | "dark";
  readonly showTagline?: boolean;
  readonly compact?: boolean;
}

export function RefynMonogramSvg({
  className = "w-9 h-9",
  fill = "currentColor",
}: {
  readonly className?: string;
  readonly fill?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 16H60C74.3594 16 85 25.8497 85 38.5C85 48.6214 78.1872 56.8857 67.8 59.8L88 80H69.5L35.5 46H57.5C63.8513 46 68.5 42.1944 68.5 37.5C68.5 32.8056 63.8513 29 57.5 29H25L12 16Z"
        fill={fill}
      />
      <path d="M14 55H31.5L56.5 80H39L14 55Z" fill={fill} />
    </svg>
  );
}

export function BrandLogo({
  theme = "light",
  showTagline = false,
  compact = false,
}: BrandLogoProps) {
  const isDark = theme === "dark";
  const primaryColor = isDark ? "text-[#F7F7F4]" : "text-[#111318]";
  const secondaryColor = isDark ? "text-[#94A3B8]" : "text-[#64748B]";
  const dividerColor = isDark ? "bg-[#334155]" : "bg-[#CBD5E1]";

  return (
    <div className="inline-flex items-center gap-4 select-none">
      <div className={`shrink-0 ${primaryColor}`}>
        <RefynMonogramSvg className={compact ? "w-8 h-8" : "w-11 h-11"} />
      </div>
      <span
        className={`w-px self-stretch my-0.5 ${dividerColor}`}
        aria-hidden="true"
      />
      <div className="flex flex-col justify-center">
        <span
          className={`font-semibold uppercase leading-none tracking-[0.14em] ${
            compact ? "text-lg" : "text-2xl"
          } ${primaryColor}`}
        >
          REFYN
        </span>
        <span
          className={`font-medium uppercase leading-none tracking-[0.34em] mt-1.5 ${
            compact ? "text-[10px]" : "text-xs"
          } ${secondaryColor}`}
        >
          VENTURE
        </span>
        {showTagline ? (
          <span
            className={`text-xs tracking-[0.02em] mt-2 font-normal ${secondaryColor}`}
          >
            Software that moves business forward.
          </span>
        ) : null}
      </div>
    </div>
  );
}

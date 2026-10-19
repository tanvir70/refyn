"use client";

import React, { useEffect, useState } from "react";

const TAGLINES = [
  "Software that moves business forward.",
  "Engineered on deterministic invariants.",
  "Zero-duplicate queues, bilingual folios, and self-healing ledgers.",
];

export function TypewriterTagline() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState(TAGLINES[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Only run animated typing in browser environment
    if (typeof navigator !== "undefined" && /jsdom/i.test(navigator.userAgent)) {
      return;
    }

    const currentFullText = TAGLINES[index];
    const typingSpeed = isDeleting ? 28 : 55;
    const pauseBeforeDelete = 3600;

    let timeoutId: NodeJS.Timeout;

    if (!isDeleting && displayText === currentFullText) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % TAGLINES.length);
    } else {
      timeoutId = setTimeout(() => {
        const nextLength = isDeleting
          ? displayText.length - 1
          : displayText.length + 1;
        setDisplayText(currentFullText.slice(0, nextLength));
      }, typingSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, index]);

  return (
    <span className="inline-block relative">
      <span>{displayText}</span>
      <span className="agy-cursor" aria-hidden="true" />
    </span>
  );
}

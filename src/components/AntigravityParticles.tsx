"use client";

import React, { useEffect, useRef } from "react";

interface AntigravityParticlesProps {
  theme?: "light" | "dark";
  density?: number;
  className?: string;
}

interface Particle {
  angle: number;
  radiusOffset: number;
  speed: number;
  size: number;
  color: string;
  alpha: number;
  phase: number;
  tiltOffset: number;
}

const LIGHT_PALETTE = [
  "#3279F9",
  "#1A73E8",
  "#4F46E5",
  "#212226",
  "#64748B",
  "#0EA5E9",
];

const DARK_PALETTE = [
  "#3279F9",
  "#60A5FA",
  "#93C5FD",
  "#E6EAF0",
  "#818CF8",
  "#38BDF8",
];

export function AntigravityParticles({
  theme = "light",
  density = 230,
  className = "",
}: AntigravityParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (
      typeof navigator !== "undefined" &&
      /jsdom/i.test(navigator.userAgent)
    ) {
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let width = (canvas.width = canvas.offsetWidth || 1280);
    let height = (canvas.height = canvas.offsetHeight || 720);

    const palette = theme === "light" ? LIGHT_PALETTE : DARK_PALETTE;

    const particles: Particle[] = Array.from({ length: density }, (_, i) => {
      const t = i / density;
      return {
        angle: t * Math.PI * 2 + (i % 7) * 0.13,
        radiusOffset: ((i * 37) % 100) / 100 - 0.5,
        speed: 0.0014 + ((i * 19) % 10) * 0.00018,
        size: 1.4 + ((i * 13) % 5) * 0.55,
        color: palette[i % palette.length],
        alpha:
          theme === "light"
            ? 0.22 + ((i * 23) % 50) / 100
            : 0.3 + ((i * 23) % 55) / 100,
        phase: i * 0.42,
        tiltOffset: (((i * 29) % 100) / 100 - 0.5) * 76,
      };
    });

    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      pointer.targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 1280;
      height = canvas.height = canvas.offsetHeight || 720;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    let tick = 0;

    const render = () => {
      tick += 0.012;
      pointer.x += (pointer.targetX - pointer.x) * 0.06;
      pointer.y += (pointer.targetY - pointer.y) * 0.06;

      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.5 + pointer.x * 28;
      const centerY = height * 0.5 + pointer.y * 18;
      const baseRx = Math.min(width * 0.43, 620);
      const baseRy = Math.min(height * 0.34, 270);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.angle += p.speed;

        const wave =
          Math.sin(p.angle * 3 + tick + p.phase) * 24 +
          Math.cos(p.angle * 2 - tick * 0.8) * 14;

        const rx = baseRx + p.radiusOffset * 135 + wave;
        const ry = baseRy + p.radiusOffset * 72 + wave * 0.55;

        const x =
          centerX +
          Math.cos(p.angle) * rx -
          Math.sin(p.angle) * p.tiltOffset * 0.45;
        const y =
          centerY +
          Math.sin(p.angle) * ry +
          Math.cos(p.angle * 2 + tick) * 16 +
          p.tiltOffset * 0.3;

        const depthScale = 0.65 + (Math.sin(p.angle) + 1) * 0.32;
        const radius = p.size * depthScale;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * depthScale;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [theme, density]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full block"
        data-theme={theme}
      />
    </div>
  );
}

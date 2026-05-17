import { motion, useMotionValue, useTransform, animate, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function HighlighterLoader() {
  const [gone, setGone] = useState(false);
  const [hide, setHide] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReduced = useReducedMotion();
  const progress = useMotionValue(0);
  const pct = useTransform(progress, (v) => `${Math.round(v * 100)}%`);
  const dashOffset = useTransform(progress, (v) => 460 * (1 - v));
  const dashOffset2 = useTransform(progress, (v) => 260 * (1 - Math.min(1, v * 1.05)));

  // Coordinate transforms to float a chiseled marker tip exactly at the leading edge of the stroke
  const markerX = useTransform(progress, (v) => 24 + v * 432);
  const markerY = useTransform(progress, (v) => 38 - v * 4);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);

    let cancelled = false;
    const controls: ReturnType<typeof animate>[] = [];

    const finish = () => {
      if (cancelled) return;
      controls.push(
        animate(progress, 1, {
          duration: 0.35,
          ease: [0.34, 1.2, 0.64, 1],
          onComplete: () => {
            setTimeout(() => setHide(true), 260);
            setTimeout(() => setGone(true), 780);
          },
        }),
      );
    };

    if (prefersReduced) {
      controls.push(
        animate(progress, 1, {
          duration: 0.4,
          onComplete: () => {
            setTimeout(() => setHide(true), 200);
            setTimeout(() => setGone(true), 600);
          },
        }),
      );
      return () => {
        cancelled = true;
        controls.forEach((c) => c.stop());
      };
    }

    // Natural multi-stage loading: quick burst → pause → crawl → settle, then snap to 100% on real load.
    const stages = [
      { to: 0.18, duration: 0.18, ease: [0.16, 1, 0.3, 1] as const, hold: 80 },
      { to: 0.42, duration: 0.35, ease: [0.4, 0, 0.2, 1] as const, hold: 140 },
      { to: 0.68, duration: 0.55, ease: [0.45, 0, 0.55, 1] as const, hold: 220 },
      { to: 0.86, duration: 0.7, ease: [0.6, 0, 0.8, 0.6] as const, hold: 320 },
      { to: 0.94, duration: 0.9, ease: [0.7, 0, 0.95, 0.4] as const, hold: 0 },
    ];

    const runStages = async () => {
      for (const s of stages) {
        if (cancelled) return;
        const c = animate(progress, s.to, { duration: s.duration, ease: s.ease });
        controls.push(c);
        await c;
        if (s.hold && !cancelled) await new Promise((r) => setTimeout(r, s.hold));
      }
    };

    runStages();

    const onLoad = () => finish();
    if (document.readyState === "complete") {
      // Already loaded — still let the stages animate briefly for visual rhythm
      setTimeout(finish, 1100);
    } else {
      window.addEventListener("load", onLoad);
      // Safety net so the loader can't get stuck if 'load' never fires
      setTimeout(finish, 4500);
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", onLoad);
      controls.forEach((c) => c.stop());
    };
  }, [progress, prefersReduced]);

  if (gone) return null;

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      initial={{ opacity: 1 }}
      animate={{ opacity: hide ? 0 : 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed inset-0 z-[80] bg-paper flex flex-col items-center justify-center select-none px-4"
    >
      <div className="paper-texture absolute inset-0 pointer-events-none" />
      <p className="font-caveat text-pencil/95 text-3xl md:text-4xl mb-6 tracking-wide text-center font-bold">
        welcome to my sketchbook
      </p>

      <div className="w-full max-w-[480px]" style={{ transform: "rotate(-0.4deg)" }}>
        <svg
          viewBox="0 -40 480 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto px-4"
        >
          <defs>
            <filter id="rough-edge" x="-5%" y="-30%" width="110%" height="160%">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
              <feDisplacementMap in="SourceGraphic" scale={prefersReduced || isMobile ? 0 : 3.2} />
            </filter>
            <filter id="rough-edge-2" x="-5%" y="-30%" width="110%" height="160%">
              <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" seed="7" />
              <feDisplacementMap in="SourceGraphic" scale={prefersReduced || isMobile ? 0 : 2.4} />
            </filter>
          </defs>

          {/* Faint pencil baseline */}
          <path
            d="M22 38 L458 36"
            stroke="var(--pencil)"
            strokeOpacity="0.18"
            strokeWidth="0.8"
            strokeDasharray="2 3"
          />

          {/* Base highlighter stroke — thick and rich */}
          <g style={{ mixBlendMode: isMobile ? undefined : "multiply" }} filter={isMobile ? undefined : "url(#rough-edge)"}>
            <motion.path
              d="M24 38 C 80 32, 150 44, 230 36 S 380 42, 456 34"
              stroke="var(--pastel-yellow)"
              strokeWidth="52"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={460}
              style={{ strokeDashoffset: dashOffset }}
            />
          </g>

          {/* Overlap pass (doubled-over, more saturated) */}
          <g style={{ mixBlendMode: isMobile ? undefined : "multiply", opacity: 0.95 }} filter={isMobile ? undefined : "url(#rough-edge-2)"}>
            <motion.path
              d="M32 39 C 95 35, 175 43, 260 37 S 385 41, 450 36"
              stroke="var(--pastel-yellow)"
              strokeWidth="34"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={380}
              style={{ strokeDashoffset: dashOffset2 }}
            />
          </g>

          {/* Third saturation pass (narrower, textured center) */}
          <g style={{ mixBlendMode: isMobile ? undefined : "multiply", opacity: 0.85 }} filter={isMobile ? undefined : "url(#rough-edge)"}>
            <motion.path
              d="M48 38 C 110 36, 200 42, 290 38 S 390 40, 440 37"
              stroke="var(--pastel-yellow)"
              strokeWidth="18"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={260}
              style={{ strokeDashoffset: dashOffset2 }}
            />
          </g>

          {/* Dry streaks */}
          <g style={{ mixBlendMode: isMobile ? undefined : "multiply", opacity: 0.35 }}>
            <motion.path
              d="M30 26 L455 25"
              stroke="var(--pastel-yellow)"
              strokeWidth="1.4"
              strokeDasharray={430}
              style={{ strokeDashoffset: dashOffset }}
            />
            <motion.path
              d="M32 50 L452 51"
              stroke="var(--pastel-yellow)"
              strokeWidth="1.2"
              strokeDasharray={430}
              style={{ strokeDashoffset: dashOffset }}
            />
          </g>

          {/* Highlighter pen tip riding the active coloring edge */}
          <motion.g
            style={{ x: markerX, y: markerY, rotate: -15 }}
            className="pointer-events-none select-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: hide ? 0 : 1, scale: hide ? 0.8 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {/* Marker barrel */}
            <path
              d="M -6 -48 L 6 -48 L 8 -16 L -8 -16 Z"
              fill="var(--paper)"
              stroke="var(--pencil)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Cap ridges/doodles */}
            <path d="M -7 -36 L 7 -36" stroke="var(--pencil)" strokeWidth="1" />
            <path d="M -8 -24 L 8 -24" stroke="var(--pencil)" strokeWidth="1" />
            
            {/* Chiseled felt tip */}
            <path
              d="M -5 -16 L 5 -16 L 2 0 L -4 0 Z"
              fill="var(--pastel-yellow)"
              stroke="var(--pencil)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Inner ink accent */}
            <path
              d="M -3 -12 L 3 -12 L 1.5 -4 L -2.5 -4 Z"
              fill="var(--pastel-yellow)"
              opacity="0.9"
            />
            {/* Pen shadow */}
            <path
              d="M -8 10 L 8 10"
              stroke="var(--pencil)"
              strokeWidth="1"
              strokeOpacity="0.15"
              strokeLinecap="round"
            />
          </motion.g>
        </svg>
      </div>

      <motion.p className="font-sketch text-pencil/70 text-xs mt-3 tabular-nums">
        {pct}
      </motion.p>
    </motion.div>
  );
}

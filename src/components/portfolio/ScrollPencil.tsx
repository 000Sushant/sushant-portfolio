import { motion, useScroll } from "framer-motion";

export function ScrollPencil() {
  const { scrollYProgress } = useScroll();
  return (
    <div
      aria-hidden
      className="fixed top-0 inset-x-0 h-2 z-50 pointer-events-none"
      style={{ transform: "rotate(-0.15deg)" }}
    >
      {/* Faint pencil baseline */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-pencil/15" />

      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="scroll-rough" x="-2%" y="-50%" width="104%" height="200%">
            <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="2" seed="5" />
            <feDisplacementMap in="SourceGraphic" scale="1.6" />
          </filter>
        </defs>
      </svg>

      <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "left center",
          mixBlendMode: "multiply",
          filter: "url(#scroll-rough)",
        }}
        className="h-full w-full bg-pastel-yellow"
      />
    </div>
  );
}

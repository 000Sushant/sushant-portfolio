import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function SketchDraw({
  children,
  duration = 1.6,
  delay = 0,
  className,
}: {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`${className ?? ""} ${inView ? "sketch-draw-active" : ""}`}
      style={{
        ["--draw-duration" as never]: `${duration}s`,
        ["--draw-delay" as never]: `${delay}s`,
      }}
    >
      {children}
    </motion.div>
  );
}

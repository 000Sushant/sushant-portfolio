import { useEffect, useState } from "react";

export function PencilCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.documentElement.setAttribute("data-reduced-motion", "true");
      return;
    }
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed pointer-events-none z-[90] transition-opacity duration-200 hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 0.9 : 0,
        transform: `translate(-2px, -2px) rotate(-35deg) scale(${pressed ? 0.85 : 1})`,
        transitionProperty: "opacity, transform",
        transitionDuration: "120ms",
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 21l3-1 12-12-2-2L4 18l-1 3z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
          className="text-pencil"
          fill="var(--paper)"
        />
        <path d="M14 6l4 4" stroke="currentColor" strokeWidth="1.4" className="text-pencil" />
        <path d="M3 21l3-1" stroke="currentColor" strokeWidth="1.4" className="text-pencil" />
      </svg>
    </div>
  );
}

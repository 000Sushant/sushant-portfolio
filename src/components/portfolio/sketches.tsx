import type { SVGProps } from "react";

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

// Animated draw-on path helper class — paired with SketchDraw which injects @keyframes draw.
const drawPath = "[stroke-dasharray:600] [stroke-dashoffset:600]";

export function ArchitectureSketch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 320" {...stroke} {...props}>
      {/* cloud */}
      <path
        className={drawPath}
        d="M70 90 q-20 0 -20 22 q-18 4 -18 22 q0 22 26 22 h120 q26 0 26 -22 q0 -20 -20 -24 q-2 -22 -26 -22 q-14 0 -22 12 q-10 -10 -22 -10 q-22 0 -24 0z"
      />
      <text x="98" y="128" className="font-sketch" fontSize="14" fill="currentColor" stroke="none">AWS Cloud</text>

      {/* server box */}
      <rect className={drawPath} x="230" y="80" width="130" height="70" rx="6" />
      <line x1="245" y1="100" x2="345" y2="100" />
      <line x1="245" y1="118" x2="345" y2="118" />
      <line x1="245" y1="136" x2="345" y2="136" />
      <circle cx="252" cy="100" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="252" cy="118" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="252" cy="136" r="2.5" fill="currentColor" stroke="none" />

      {/* db cylinder */}
      <ellipse className={drawPath} cx="100" cy="220" rx="46" ry="12" />
      <path className={drawPath} d="M54 220 v40 q0 12 46 12 q46 0 46 -12 v-40" />
      <path d="M54 240 q0 12 46 12 q46 0 46 -12" />
      <text x="76" y="280" className="font-sketch" fontSize="11" fill="currentColor" stroke="none">PostgreSQL</text>

      {/* worker */}
      <rect className={drawPath} x="240" y="210" width="120" height="55" rx="4" />
      <text x="262" y="244" className="font-sketch" fontSize="12" fill="currentColor" stroke="none">Node Worker</text>

      {/* connecting arrows */}
      <path className={drawPath} d="M160 122 q40 0 70 0" />
      <polyline points="222,116 232,122 222,128" />
      <path className={drawPath} d="M180 160 q20 30 60 50" />
      <polyline points="232,206 244,212 240,222" />
      <path className={drawPath} d="M150 230 q40 4 90 6" />
      <polyline points="232,232 240,236 232,242" />
    </svg>
  );
}

export function PencilIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path className={drawPath} d="M3 21l3-1 12-12-2-2L4 18l-1 3z" />
      <path d="M14 6l4 4" />
    </svg>
  );
}

export function CompassIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <circle className={drawPath} cx="16" cy="16" r="12" />
      <polygon points="16,9 19,17 16,15 13,17" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GearIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <circle className={drawPath} cx="16" cy="16" r="6" />
      <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7 7l3 3M22 22l3 3M25 7l-3 3M10 22l-3 3" />
    </svg>
  );
}

export function BoltIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <path className={drawPath} d="M18 4 L8 18 h6 l-2 10 l10 -14 h-6 z" />
    </svg>
  );
}

export function BrainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <path className={drawPath} d="M12 6c-4 0-6 3-6 6c0 2 1 3 1 4c-2 1-2 5 1 6c0 3 3 4 5 4c1 2 5 2 6 0c2 0 5-1 5-4c3-1 3-5 1-6c0-1 1-2 1-4c0-3-2-6-6-6c-2-2-6-2-8 0z" />
      <path d="M12 12c2 0 2 3 4 3M20 12c-2 0-2 3-4 3M16 15v6" />
    </svg>
  );
}

export function FlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <path className={drawPath} d="M8 4v24" />
      <path className={drawPath} d="M8 6 q8 -4 14 0 q-4 4 0 8 q-8 -4 -14 0z" />
    </svg>
  );
}

export function StackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <ellipse className={drawPath} cx="16" cy="8" rx="10" ry="3" />
      <path d="M6 8v6c0 2 4 3 10 3s10-1 10-3V8" />
      <path d="M6 16v6c0 2 4 3 10 3s10-1 10-3v-6" />
    </svg>
  );
}

export function PuzzleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <path className={drawPath} d="M6 8h6v-2a2 2 0 014 0v2h6v6h2a2 2 0 010 4h-2v6h-6v-2a2 2 0 00-4 0v2H6v-6H4a2 2 0 010-4h2V8z" />
    </svg>
  );
}

export function FactoryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <path className={drawPath} d="M4 28V14l6 4v-4l6 4v-4l6 4V8h4v20z" />
      <rect x="8" y="22" width="3" height="4" />
      <rect x="14" y="22" width="3" height="4" />
      <rect x="20" y="22" width="3" height="4" />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <path className={drawPath} d="M16 4 L26 8 v8 c0 7-6 11-10 12 c-4-1-10-5-10-12 V8z" />
      <path d="M12 16l3 3 6-7" />
    </svg>
  );
}

export function CertIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <rect className={drawPath} x="4" y="6" width="24" height="16" rx="2" />
      <circle cx="16" cy="14" r="3" />
      <path d="M13 17l-1 6 4-2 4 2-1-6" />
    </svg>
  );
}

import { cn } from "@/lib/utils";

type BoardPinProps = {
  className?: string;
  rotate?: string;
  color?: string;
};

export function BoardPin({ className, rotate = "rotate-0", color = "var(--pastel-coral)" }: BoardPinProps) {
  // Pin plastic head color mapping: darken the pastel colors to rich, glossy, high-contrast pin colors
  let headColor = color || "var(--pastel-coral)";
  if (headColor.includes("pastel-yellow")) headColor = "hsl(43, 90%, 52%)";
  else if (headColor.includes("pastel-blue")) headColor = "hsl(210, 80%, 52%)";
  else if (headColor.includes("pastel-green")) headColor = "hsl(140, 70%, 42%)";
  else if (headColor.includes("pastel-coral")) headColor = "hsl(355, 80%, 50%)";
  else if (headColor.includes("pastel-purple")) headColor = "hsl(270, 75%, 48%)";
  else if (headColor.includes("pastel-peach")) headColor = "hsl(28, 85%, 52%)";

  return (
    <div
      className={cn(
        "absolute w-7 h-7 select-none pointer-events-none z-30 transition-transform duration-300 group-hover:scale-110",
        rotate,
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Soft, off-center drop shadow for 3D paper elevation */}
        <circle cx="13" cy="13" r="8" fill="rgba(0, 0, 0, 0.15)" />

        {/* Outer Circular Flange / Base */}
        <circle
          cx="12"
          cy="12"
          r="8"
          fill={headColor}
          stroke="var(--color-pencil)"
          strokeWidth="1.8"
        />

        {/* Subtle base gradient simulation using transparent white overlay */}
        <circle
          cx="11.2"
          cy="11.2"
          r="7.2"
          stroke="rgba(255, 255, 255, 0.25)"
          strokeWidth="0.8"
          fill="none"
        />

        {/* Inner Raised Dome / Cap */}
        <circle
          cx="12"
          cy="12"
          r="5"
          fill={headColor}
          stroke="var(--color-pencil)"
          strokeWidth="1.5"
        />

        {/* Glossy Dome Crescent Highlight */}
        <path
          d="M 9 11 A 3 3 0 0 1 12 8"
          stroke="rgba(255, 255, 255, 0.7)"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
        />

        {/* Off-Center Gloss Spot Light Highlight */}
        <circle
          cx="10.2"
          cy="10.2"
          r="1.2"
          fill="white"
          opacity="0.9"
        />

        {/* Tiny sub-surface reflection (opposite side glow) */}
        <circle
          cx="14"
          cy="14"
          r="1"
          fill="white"
          opacity="0.15"
        />
      </svg>
    </div>
  );
}

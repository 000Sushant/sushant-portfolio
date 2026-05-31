import { cn } from "@/lib/utils";

type PaperClipProps = {
  className?: string;
  rotate?: string;
  color?: string;
};

export function PaperClip({ className, rotate = "rotate-12", color }: PaperClipProps) {
  // Default to a realistic graphite/metallic color
  const clipColor = color || "hsl(285, 4%, 25%)";

  return (
    <div
      className={cn(
        "absolute w-5 h-12 select-none pointer-events-none z-20 filter drop-shadow-[0.5px_1.5px_1.5px_rgba(0,0,0,0.18)]",
        rotate,
        className
      )}
    >
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 30 90"
        preserveAspectRatio="none"
      >
        {/* Outer loop of the paperclip (back part) */}
        <path
          d="M 8,80 L 8,20 C 8,5 22,5 22,20 L 22,75 C 22,87 14,87 14,75 L 14,35 C 14,28 19,28 19,35 L 19,65"
          fill="none"
          stroke={clipColor}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Shiny metallic highlight layer */}
        <path
          d="M 9.5,75 L 9.5,22 C 9.5,8 20.5,8 20.5,22 L 20.5,70"
          fill="none"
          stroke="white"
          strokeOpacity={0.35}
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

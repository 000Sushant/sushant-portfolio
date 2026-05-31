import { cn } from "@/lib/utils";

type CelloTapeProps = {
  className?: string;
  rotate?: string;
  color?: string;
};

export function CelloTape({ className, rotate = "-rotate-2", color }: CelloTapeProps) {
  // Darker, rich amber-yellow tone for realistic cello tape, fallback if var(--pastel-yellow) is passed
  const tapeBg = color === "var(--pastel-yellow)" || !color 
    ? "hsl(48, 82%, 84%)" 
    : color;

  return (
    <div
      className={cn(
        "absolute select-none pointer-events-none z-20 filter drop-shadow-[0.5px_1.5px_2px_rgba(0,0,0,0.15)]",
        rotate,
        className
      )}
    >
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,15 5,0 10,12 15,3 20,15 25,0 30,12 35,2 40,15 45,0 50,10 55,0 60,14 65,2 70,12 75,0 80,15 85,3 90,12 95,0 100,15 98,30 100,45 97,60 100,75 98,90 100,100 95,85 90,98 85,88 80,100 75,87 70,98 65,85 60,100 55,88 50,97 45,85 40,100 35,88 30,98 25,85 20,100 15,87 10,98 5,85 0,100 2,85 0,70 3,55 0,40 2,25"
          fill={tapeBg}
          fillOpacity={0.65}
          stroke="var(--color-pencil, #2b262d)"
          strokeOpacity={0.7}
          strokeWidth={1.5}
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        {/* Tactile glossy reflection line across the tape */}
        <path
          d="M 5,20 L 95,80"
          stroke="white"
          strokeOpacity={0.35}
          strokeWidth={1.5}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}


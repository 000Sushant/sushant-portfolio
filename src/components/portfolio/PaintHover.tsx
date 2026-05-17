import { useRef, useState, type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

// Organic splatter shape — main blob plus scattered drops.
// Used as a mask-image; scales from `mask-position` (cursor entry) outward.
const splatterSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
  <g fill='black'>
    <circle cx='100' cy='100' r='52'/>
    <circle cx='72' cy='82' r='34'/>
    <circle cx='130' cy='82' r='36'/>
    <circle cx='84' cy='132' r='32'/>
    <circle cx='128' cy='130' r='30'/>
    <circle cx='58' cy='112' r='22'/>
    <circle cx='148' cy='108' r='24'/>
    <circle cx='100' cy='58' r='24'/>
    <circle cx='102' cy='152' r='22'/>
    <circle cx='40' cy='128' r='10'/>
    <circle cx='168' cy='72' r='12'/>
    <circle cx='32' cy='70' r='7'/>
    <circle cx='176' cy='140' r='9'/>
    <circle cx='110' cy='30' r='6'/>
    <circle cx='90' cy='178' r='5'/>
    <circle cx='20' cy='100' r='5'/>
    <circle cx='184' cy='100' r='6'/>
    <circle cx='52' cy='40' r='4'/>
    <circle cx='160' cy='180' r='4'/>
    <circle cx='15' cy='160' r='3'/>
    <circle cx='190' cy='40' r='3'/>
  </g>
</svg>`;

const splatterUrl = `url("data:image/svg+xml;utf8,${encodeURIComponent(splatterSvg)}")`;

type Props = {
  children: ReactNode;
  /** CSS color string for the paint fill. */
  color: string;
  /** Mix-blend-mode for the paint layer. Default 'multiply'. */
  blend?: CSSProperties["mixBlendMode"];
  /** Final mask size on hover, as a % (controls how far paint spreads). */
  spread?: number;
  /** Duration of the spread in ms. */
  duration?: number;
  className?: string;
  /** If true, the paint layer sits ABOVE children (e.g. to tint images). */
  over?: boolean;
};

export function PaintHover({
  children,
  color,
  blend = "multiply",
  spread = 320,
  duration = 900,
  className,
  over = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [hover, setHover] = useState(false);

  const onEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setOrigin({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
    setHover(true);
  };

  const size = hover ? `${spread}% ${spread}%` : "0% 0%";
  const splatterStyle: CSSProperties = {
    backgroundColor: color,
    mixBlendMode: blend,
    WebkitMaskImage: splatterUrl,
    maskImage: splatterUrl,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: `${origin.x}% ${origin.y}%`,
    maskPosition: `${origin.x}% ${origin.y}%`,
    WebkitMaskSize: size,
    maskSize: size,
    transition: `mask-size ${duration}ms cubic-bezier(0.22,1,0.36,1), -webkit-mask-size ${duration}ms cubic-bezier(0.22,1,0.36,1)`,
  };
  // Solid fill that fades in after the splatter spreads, guaranteeing full coverage.
  const fillStyle: CSSProperties = {
    backgroundColor: color,
    mixBlendMode: blend,
    opacity: hover ? 1 : 0,
    transition: `opacity ${Math.round(duration * 0.55)}ms ease-out ${Math.round(duration * 0.55)}ms`,
  };

  const paint = (
    <>
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={fillStyle} />
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={splatterStyle} />
    </>
  );

  return (
    <div
      ref={ref}
      onMouseEnter={onEnter}
      onMouseLeave={() => setHover(false)}
      className={cn("relative overflow-hidden", className)}
    >
      {!over && paint}
      <div className="relative">{children}</div>
      {over && paint}
    </div>
  );
}

/**
 * Variant that reveals a colored image through a paint-splatter mask
 * growing from the cursor entry point.
 */
export function PaintRevealImage({
  baseSrc,
  revealSrc,
  alt,
  className,
  spread = 320,
  duration = 1000,
}: {
  baseSrc: string;
  revealSrc: string;
  alt: string;
  className?: string;
  spread?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [hover, setHover] = useState(false);

  const onEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setOrigin({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
    setHover(true);
  };

  const clip = hover
    ? `circle(150% at ${origin.x}% ${origin.y}%)`
    : `circle(0% at ${origin.x}% ${origin.y}%)`;

  return (
    <div
      ref={ref}
      onMouseEnter={onEnter}
      onMouseLeave={() => setHover(false)}
      className={cn("relative overflow-hidden", className)}
    >
      <img
        src={baseSrc}
        alt={alt}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      />
      <img
        src={revealSrc}
        alt=""
        aria-hidden
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        style={{
          clipPath: clip,
          WebkitClipPath: clip,
          transition: `clip-path ${duration}ms cubic-bezier(0.22,1,0.36,1), -webkit-clip-path ${duration}ms cubic-bezier(0.22,1,0.36,1)`,
        }}
      />
    </div>
  );
}

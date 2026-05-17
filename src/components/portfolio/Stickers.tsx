import React from "react";

interface StickerProps {
  className?: string;
}

export function GamingSticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[-15deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[-6deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3 py-2 rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-10 h-10 text-pencil mb-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="22" width="20" height="8" rx="2" fill="var(--pastel-blue)" />
          <line x1="18" y1="22" x2="18" y2="12" strokeWidth="3" />
          <circle cx="18" cy="8" r="5" fill="var(--pastel-coral)" stroke="none" />
          <circle cx="24" cy="26" r="1.5" fill="white" stroke="none" />
        </svg>
        <span className="font-sketch text-[9px] uppercase font-bold tracking-wider text-graphite">GAME ON</span>
      </div>
    </div>
  );
}

export function ShayariSticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[6deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[12deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3.5 py-2 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-10 h-10 text-pencil mb-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 8 28 C 12 18, 24 10, 28 8 C 24 12, 18 24, 8 28 Z" fill="var(--pastel-yellow)" />
          <rect x="20" y="22" width="10" height="8" rx="1" fill="var(--pastel-blue)" />
          <path d="M 23 22 L 23 20 L 27 20 L 27 22" />
        </svg>
        <span className="font-sketch text-[9px] uppercase font-bold tracking-wider text-graphite">SHAYARI</span>
      </div>
    </div>
  );
}

export function HikingSticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[10deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[2deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3.5 py-2.5 rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-10 h-10 text-pencil mb-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="16" fill="var(--pastel-yellow)" stroke="none" />
          <polygon points="18,10 8,28 28,28" fill="var(--pastel-green)" />
          <polygon points="23,16 16,28 30,28" fill="var(--pastel-green)" opacity="0.8" />
          <path d="M 6 28 Q 18 28 30 28" />
        </svg>
        <span className="font-sketch text-[9px] uppercase font-bold tracking-wider text-graphite">TRAIL RUN</span>
      </div>
    </div>
  );
}

export function SwimmingSticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[8deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[18deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3.5 py-2 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-10 h-10 text-pencil mb-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 4 24 Q 10 20 18 24 Q 26 28 32 24" strokeWidth="2.5" stroke="var(--pastel-blue)" />
          <rect x="8" y="12" width="8" height="6" rx="2" fill="white" />
          <rect x="20" y="12" width="8" height="6" rx="2" fill="white" />
          <path d="M 16 15 L 20 15" strokeWidth="2" />
          <path d="M 4 15 L 8 15 M 28 15 L 32 15" strokeWidth="1.5" />
        </svg>
        <span className="font-sketch text-[9px] uppercase font-bold tracking-wider text-graphite">SWIMMER</span>
      </div>
    </div>
  );
}

export function SketchSticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[-10deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[-2deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3.5 py-3 rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-10 h-10 text-pencil mb-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 6 18 C 6 10, 30 10, 30 18 C 30 26, 6 26, 6 18 Z" fill="var(--pastel-yellow)" />
          <circle cx="12" cy="15" r="2.5" fill="var(--pastel-coral)" stroke="none" />
          <circle cx="18" cy="15" r="2.5" fill="var(--pastel-blue)" stroke="none" />
          <circle cx="24" cy="18" r="2.5" fill="var(--pastel-green)" stroke="none" />
          <line x1="8" y1="28" x2="22" y2="14" strokeWidth="3" />
        </svg>
        <span className="font-sketch text-[9px] uppercase font-bold tracking-wider text-graphite">SKETCHING</span>
      </div>
    </div>
  );
}

export function SkateboardSticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[-6deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[2deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3 py-2 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 45 20" className="w-14 h-6 text-pencil mb-1.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 4 8 C 12 7, 33 7, 41 8 C 43 8, 44 11, 41 12 C 33 13, 12 13, 4 12 C 2 12, 1 9, 4 8 Z" fill="var(--pastel-green)" />
          <circle cx="10" cy="15" r="3.5" fill="var(--pastel-yellow)" />
          <circle cx="35" cy="15" r="3.5" fill="var(--pastel-yellow)" />
          <path d="M 16 10 L 29 10" stroke="white" strokeWidth="1.5" />
        </svg>
        <span className="font-sketch text-[8.5px] uppercase font-bold tracking-wider text-graphite">SKATE LIFE</span>
      </div>
    </div>
  );
}

export function PhotographySticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[-10deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[-2deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3 py-2.5 rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 40 30" className="w-12 h-9 text-pencil mb-1.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 6 10 L 14 10 L 17 6 L 23 6 L 26 10 L 34 10 C 36 10, 38 12, 38 14 L 38 26 C 38 28, 36 30, 34 30 L 6 30 C 4 30, 2 28, 2 26 L 2 14 C 2 12, 4 10, 6 10 Z" fill="var(--pastel-peach)" />
          <circle cx="20" cy="20" r="6" fill="white" />
          <circle cx="20" cy="20" r="3" fill="var(--graphite)" />
          <circle cx="32" cy="14" r="1.5" fill="var(--pastel-yellow)" />
        </svg>
        <span className="font-sketch text-[9px] uppercase font-bold tracking-wider text-graphite">SHUTTER</span>
      </div>
    </div>
  );
}

export function GuitarSticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[15deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[5deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3.5 py-2.5 rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-10 h-10 text-pencil mb-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 10 24 C 8 20, 16 12, 20 8 L 24 4 L 28 8 L 24 12 C 20 16, 12 24, 10 24 Z" fill="var(--pastel-coral)" />
          <circle cx="18" cy="14" r="2.5" fill="white" />
          <line x1="22" y1="6" x2="14" y2="14" strokeWidth="2.5" />
        </svg>
        <span className="font-sketch text-[9px] uppercase font-bold tracking-wider text-graphite">STRUM IT</span>
      </div>
    </div>
  );
}

export function SurfingSticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[-12deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[6deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3 py-2.5 rounded-3xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-10 h-10 text-pencil mb-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 4 28 Q 10 24 16 28 Q 22 32 28 28" fill="var(--pastel-blue)" opacity="0.6" />
          <path d="M 12 6 C 18 10, 18 24, 18 30 C 18 24, 12 10, 12 6 Z" fill="var(--pastel-yellow)" transform="rotate(-15 18 18)" />
        </svg>
        <span className="font-sketch text-[9px] uppercase font-bold tracking-wider text-graphite">WAVE RIDER</span>
      </div>
    </div>
  );
}

export function CompassSticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[-8deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[-2deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3.5 py-3 rounded-full shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-10 h-10 text-pencil mb-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="16" fill="var(--pastel-peach)" />
          <circle cx="18" cy="18" r="12" fill="white" />
          <polygon points="18,8 21,18 18,22" fill="var(--pastel-coral)" />
          <polygon points="18,28 15,18 18,22" fill="var(--pastel-blue)" />
          <circle cx="18" cy="18" r="2" fill="var(--pencil)" />
        </svg>
        <span className="font-sketch text-[9px] uppercase font-bold tracking-wider text-graphite">DISCOVER</span>
      </div>
    </div>
  );
}

export function BallSticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[10deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[16deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3.5 py-2.5 rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-10 h-10 text-pencil mb-1.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="16" fill="var(--pastel-yellow)" />
          <path d="M 4 18 Q 18 10 32 18" stroke="var(--pencil)" strokeWidth="1.5" />
          <path d="M 4 18 Q 18 26 32 18" stroke="var(--pencil)" strokeWidth="1.5" />
          <path d="M 18 4 Q 10 18 18 32" stroke="var(--pencil)" strokeWidth="1.5" />
          <path d="M 18 4 Q 26 18 18 32" stroke="var(--pencil)" strokeWidth="1.5" />
        </svg>
        <span className="font-sketch text-[9px] uppercase font-bold tracking-wider text-graphite">PLAY TIME</span>
      </div>
    </div>
  );
}

export function BikeSticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[12deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[4deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3.5 py-2.5 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-10 h-10 text-pencil mb-1.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10" cy="22" r="6" fill="white" />
          <circle cx="26" cy="22" r="6" fill="white" />
          <polygon points="10,22 18,22 22,14 14,14" strokeWidth="2" />
          <line x1="18" y1="22" x2="14" y2="10" strokeWidth="2" />
        </svg>
        <span className="font-sketch text-[9px] uppercase font-bold tracking-wider text-graphite">CRUISE</span>
      </div>
    </div>
  );
}

export function CoffeeSticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[-6deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[4deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3.5 py-2.5 rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-10 h-10 text-pencil mb-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 8 16 H 24 V 28 C 24 31, 8 31, 8 28 Z" fill="var(--pastel-peach)" />
          <path d="M 24 19 C 28 19, 28 25, 24 25" strokeWidth="2" />
          <path d="M 12 8 Q 12 12 12 10 M 16 8 Q 16 12 16 10 M 20 8 Q 20 12 20 10" strokeWidth="1.5" />
        </svg>
        <span className="font-sketch text-[9px] uppercase font-bold tracking-wider text-graphite">FUEL UP</span>
      </div>
    </div>
  );
}

export function MusicSticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[12deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[-4deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3.5 py-2 rounded-full shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-10 h-10 text-pencil mb-1.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="16" fill="var(--pastel-purple)" stroke="none" />
          <path d="M 10 20 C 10 12, 26 12, 26 20" stroke="white" strokeWidth="2.5" />
          <rect x="8" y="19" width="4" height="6" rx="1.5" fill="white" stroke="none" />
          <rect x="24" y="19" width="4" height="6" rx="1.5" fill="white" stroke="none" />
        </svg>
        <span className="font-sketch text-[9px] uppercase font-bold tracking-wider text-graphite">BEATS</span>
      </div>
    </div>
  );
}

export function RocketSticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[-15deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[5deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3.5 py-3 rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-10 h-10 text-pencil mb-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 18 4 Q 28 14 26 24 H 10 Q 8 14 18 4 Z" fill="var(--pastel-coral)" />
          <path d="M 14 24 L 10 28 M 22 24 L 26 28" strokeWidth="2" />
          <circle cx="18" cy="14" r="3" fill="white" />
          <path d="M 14 28 Q 18 34 22 28" stroke="var(--pastel-yellow)" strokeWidth="2" />
        </svg>
        <span className="font-sketch text-[9px] uppercase font-bold tracking-wider text-graphite">LAUNCH</span>
      </div>
    </div>
  );
}

export function CatSticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[10deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[2deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3.5 py-2.5 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-10 h-10 text-pencil mb-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 8 28 C 8 20, 28 20, 28 28 Z" fill="var(--pastel-yellow)" />
          <polygon points="10,21 13,14 17,20" fill="var(--pastel-yellow)" stroke="currentColor" strokeWidth="2" />
          <polygon points="26,21 23,14 19,20" fill="var(--pastel-yellow)" stroke="currentColor" strokeWidth="2" />
          <circle cx="14" cy="24" r="1.5" fill="var(--pencil)" />
          <circle cx="22" cy="24" r="1.5" fill="var(--pencil)" />
          <path d="M 16 26 Q 18 28 20 26" strokeWidth="1.5" />
        </svg>
        <span className="font-sketch text-[9.5px] uppercase font-bold tracking-wider text-graphite">CODE CAT</span>
      </div>
    </div>
  );
}

export function PizzaSticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[-12deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[6deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3 py-2 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-10 h-10 text-pencil mb-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="18,6 6,28 30,28" fill="var(--pastel-yellow)" />
          <path d="M 6 28 C 6 30, 30 30, 30 28" fill="var(--pastel-coral)" />
          <circle cx="15" cy="20" r="1.5" fill="var(--pastel-coral)" stroke="none" />
          <circle cx="21" cy="22" r="1.5" fill="var(--pastel-coral)" stroke="none" />
          <circle cx="18" cy="14" r="1.5" fill="var(--pastel-coral)" stroke="none" />
        </svg>
        <span className="font-sketch text-[9px] uppercase font-bold tracking-wider text-graphite">SLICE</span>
      </div>
    </div>
  );
}

export function RobotSticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[8deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[-8deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3.5 py-2.5 rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-10 h-10 text-pencil mb-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="12" width="20" height="18" rx="3" fill="var(--pastel-blue)" />
          <rect x="12" y="16" width="4" height="4" rx="1" fill="white" />
          <rect x="20" y="16" width="4" height="4" rx="1" fill="white" />
          <line x1="18" y1="12" x2="18" y2="6" strokeWidth="2" />
          <circle cx="18" cy="5" r="2.5" fill="var(--pastel-coral)" />
        </svg>
        <span className="font-sketch text-[9px] uppercase font-bold tracking-wider text-graphite">AI AGENT</span>
      </div>
    </div>
  );
}

export function TypingSticker({ className = "" }: StickerProps) {
  return (
    <div className={`absolute rotate-[15deg] z-0 scale-[0.6] xs:scale-75 sm:scale-100 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[-5deg] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)] cursor-pointer select-none ${className}`}>
      <div className="bg-white border-2 border-pencil px-3.5 py-2.5 rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-10 h-10 text-pencil mb-1.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="12" width="28" height="16" rx="3" fill="var(--pastel-green)" />
          <rect x="7" y="16" width="3" height="3" rx="0.5" fill="white" stroke="none" />
          <rect x="12" y="16" width="3" height="3" rx="0.5" fill="white" stroke="none" />
          <rect x="17" y="16" width="3" height="3" rx="0.5" fill="white" stroke="none" />
          <rect x="22" y="16" width="3" height="3" rx="0.5" fill="white" stroke="none" />
          <rect x="27" y="16" width="3" height="3" rx="0.5" fill="white" stroke="none" />
          <rect x="9" y="21" width="3" height="3" rx="0.5" fill="white" stroke="none" />
          <rect x="14" y="21" width="8" height="3" rx="1" fill="white" stroke="none" />
          <rect x="24" y="21" width="3" height="3" rx="0.5" fill="white" stroke="none" />
          <path d="M 6 8 Q 8 6 10 8" strokeWidth="1.5" />
          <path d="M 26 8 Q 28 6 30 8" strokeWidth="1.5" />
        </svg>
        <span className="font-sketch text-[9px] uppercase font-bold tracking-wider text-graphite">120 WPM</span>
      </div>
    </div>
  );
}

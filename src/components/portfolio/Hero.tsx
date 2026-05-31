import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FolderOpen, FileDown, Mail } from "lucide-react";
import { SketchDraw } from "./SketchDraw";
import { PaintHover, PaintRevealImage } from "./PaintHover";
import sketchBw from "@/assets/sketch_bw.png";
import sketchColored from "@/assets/sketch_colored.png";
import { GamingSticker, ShayariSticker, MusicSticker, TypingSticker } from "./Stickers";
import { ResumeModal } from "./ResumeModal";
import { BoardPin } from "./BoardPin";
import { CelloTape } from "./CelloTape";

function PaintRevealPortrait() {
  return (
    <div className="relative group">
      <div className="absolute -inset-4 border border-pencil/15 sketch-border rotate-1 group-hover:rotate-0 transition-transform duration-500" />
      <SketchDraw className="relative" duration={2.4}>
        <PaintRevealImage
          baseSrc={sketchBw}
          revealSrc={sketchColored}
          alt="Sushant Kumar — hand-drawn portrait"
          className="w-full aspect-[3/4] bg-card border border-pencil/20 sketch-border"
          spread={360}
          duration={1100}
        />
      </SketchDraw>
      <div className="absolute -bottom-5 -left-5 bg-card border border-pencil/25 p-3 sketch-border -rotate-3 group-hover:rotate-0 transition-transform shadow-sm">
        <p className="font-sketch text-xs text-graphite">Top 1 % in</p>
        <p className="text-xl font-semibold">Google Promptwars</p>
      </div>
      <div className="absolute -top-4 -right-3 bg-pastel-yellow/40 border border-pencil/20 px-3 py-1 sketch-border rotate-6 font-sketch text-xs select-none">
        hover to paint
      </div>
    </div>
  );
}

const metrics = [
  { value: "2+", label: "Years Experience", color: "var(--pastel-blue)" },
  { value: "5+", label: "Tools for Productivity", color: "var(--pastel-green)" },
  { value: "30%", label: "System Cost Optimized", color: "var(--pastel-yellow)" },
  { value: "Q2 '25", label: "Employee of Quarter", color: "var(--pastel-coral)" },
  { value: "IEEE", label: "Research Published", color: "var(--pastel-blue)" },
];

export function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  return (
    <section
      id="hero"
      className="relative py-24 md:py-32 border-b border-pencil/5 z-10 overflow-hidden"
    >
      {/* Diary / Sketchbook Stickers Background Spread */}
      <GamingSticker className="hidden sm:block left-[2%] top-[12%]" />
      <ShayariSticker className="right-[3%] top-[12%]" />
      <MusicSticker className="left-[1.5%] top-[45%]" />
      <TypingSticker className="right-[2.5%] top-[45%]" />
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-2 font-sketch text-graphite/40 text-lg -rotate-6 select-none">
            Solving problems with code.
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-rockybilly tracking-tight text-balance text-pastel-coral leading-none mb-6 font-normal"
          >
            Sushant
          </motion.h1>
          <p className="font-sketch text-xl text-graphite mb-6">
            Full Stack Software Developer · Scrum Master
          </p>
          <p className="text-lg md:text-xl text-pencil/80 leading-relaxed max-w-[52ch] mb-10">
            Building scalable backend systems, intelligent automation, and interactive digital
            experiences through the lens of a craftsman.
          </p>

          <div className="flex mb-12 relative pt-2">
            {/* Sleek paper ribbon bar taped down at the corners */}
            <div className="relative rotate-[-0.6deg]">
              
              {/* Corner Cello Tape - Left */}
              <CelloTape
                className="-top-1.5 -left-3 w-8 h-3.5 z-20"
                rotate="-rotate-12"
                color="var(--pastel-yellow)"
              />
              
              {/* Corner Cello Tape - Right */}
              <CelloTape
                className="-top-1.5 -right-3 w-8 h-3.5 z-20"
                rotate="rotate-12"
                color="var(--pastel-yellow)"
              />

              {/* The torn paper nav bar background container */}
              <div className="flex items-center gap-1 bg-card border border-pencil/20 sketch-border shadow-[2px_3px_0px_rgba(0,0,0,0.06)] py-1 px-1.5 rounded-xs select-none relative z-10 overflow-visible">
                
                {/* Projects Slot */}
                <a
                  href="#projects"
                  className="relative flex items-center gap-1.5 px-3 py-1.5 font-sketch text-xs md:text-sm font-bold text-pencil/80 hover:text-pencil transition-all duration-200 cursor-pointer group/item overflow-visible"
                >
                  {/* Organic hand-drawn highlighter sweep hover background */}
                  <div className="absolute inset-x-1 inset-y-1.5 pointer-events-none z-0 overflow-visible">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 24"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 2,12 C 30,10 70,14 98,12"
                        fill="none"
                        stroke="hsl(210, 65%, 85%)"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeDasharray="120"
                        strokeDashoffset="120"
                        className="transition-all duration-300 ease-out group-hover/item:[stroke-dashoffset:0]"
                      />
                    </svg>
                  </div>
                  <FolderOpen className="w-4 h-4 text-pencil/70 relative z-10 group-hover/item:-translate-y-[1px] group-hover/item:scale-110 transition-all duration-200" strokeWidth={2} />
                  <span className="relative z-10 group-hover/item:-translate-y-[1px] transition-transform duration-200">Projects</span>
                </a>

                {/* Fine Pencil Divider */}
                <div className="h-4 w-[1px] bg-pencil/15 relative z-10" />

                {/* Resume Slot */}
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="relative flex items-center gap-1.5 px-3 py-1.5 font-sketch text-xs md:text-sm font-bold text-pencil/80 hover:text-pencil transition-all duration-200 cursor-pointer group/item overflow-visible"
                >
                  {/* Organic hand-drawn highlighter sweep hover background */}
                  <div className="absolute inset-x-1 inset-y-1.5 pointer-events-none z-0 overflow-visible">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 24"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 2,12 C 30,11 70,13 98,12"
                        fill="none"
                        stroke="hsl(48, 85%, 82%)"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeDasharray="120"
                        strokeDashoffset="120"
                        className="transition-all duration-300 ease-out group-hover/item:[stroke-dashoffset:0]"
                      />
                    </svg>
                  </div>
                  <FileDown className="w-4 h-4 text-pencil/70 relative z-10 group-hover/item:translate-y-0.5 transition-all duration-200" strokeWidth={2} />
                  <span className="relative z-10 group-hover/item:-translate-y-[1px] transition-transform duration-200">Resume</span>
                </button>

                {/* Fine Pencil Divider */}
                <div className="h-4 w-[1px] bg-pencil/15 relative z-10" />

                {/* Contact Slot */}
                <a
                  href="#contact"
                  className="relative flex items-center gap-1.5 px-3 py-1.5 font-sketch text-xs md:text-sm font-bold text-pencil/80 hover:text-pencil transition-all duration-200 cursor-pointer group/item overflow-visible"
                >
                  {/* Organic hand-drawn highlighter sweep hover background */}
                  <div className="absolute inset-x-1 inset-y-1.5 pointer-events-none z-0 overflow-visible">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 24"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 2,12 C 30,10 70,14 98,12"
                        fill="none"
                        stroke="hsl(10, 65%, 85%)"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeDasharray="120"
                        strokeDashoffset="120"
                        className="transition-all duration-300 ease-out group-hover/item:[stroke-dashoffset:0]"
                      />
                    </svg>
                  </div>
                  <Mail className="w-4 h-4 text-pencil/70 relative z-10 group-hover/item:-translate-y-[1px] group-hover/item:rotate-6 transition-all duration-200" strokeWidth={2} />
                  <span className="relative z-10 group-hover/item:-translate-y-[1px] transition-transform duration-200">Contact</span>
                </a>

              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-3xl mt-4">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                className={cn(
                  "relative pt-3 transition-all duration-300 hover:scale-[1.05] hover:-translate-y-1.5 cursor-default group",
                  i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]",
                )}
              >
                {/* Custom Board Pin pinning the note down */}
                <BoardPin
                  className="-top-1.5 left-1/2 -translate-x-1/2 z-20"
                  rotate={i % 2 === 0 ? "rotate-[-10deg]" : "rotate-[15deg]"}
                  color={m.color}
                />

                {/* Sticky Note paper with top-centered physics-based swing animation */}
                <div
                  className={cn(
                    "bg-card border-2 border-pencil/15 p-4 rounded-xs shadow-[4px_4px_0px_rgba(0,0,0,0.12)] group-hover:shadow-[8px_8px_0px_rgba(0,0,0,0.12)] transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[96px] relative z-10 origin-top",
                    i % 2 === 0
                      ? "group-hover:animate-swing-left"
                      : "group-hover:animate-swing-right",
                  )}
                  style={{ borderStyle: "solid" }}
                >
                  <div className="text-xl md:text-2xl font-bold font-sans text-pencil leading-none">
                    {m.value}
                  </div>
                  <div className="font-sketch text-[10px] md:text-xs text-graphite/90 mt-2 leading-snug">
                    {m.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <PaintRevealPortrait />
      </div>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}

import { motion } from "framer-motion";
import { SketchDraw } from "./SketchDraw";
import { PaintHover, PaintRevealImage } from "./PaintHover";
import sketchBw from "@/assets/sketch_bw.png";
import sketchColored from "@/assets/sketch_colored.png";
import { GamingSticker, ShayariSticker, MusicSticker, TypingSticker } from "./Stickers";

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
      <div
        className="absolute -bottom-5 -left-5 bg-card border border-pencil/25 p-3 sketch-border -rotate-3 group-hover:rotate-0 transition-transform shadow-sm"
      >
        <p className="font-sketch text-xs text-graphite">Top 1 % in</p>
        <p className="text-xl font-semibold">Google Promptwars</p>
      </div>
      <div
        className="absolute -top-4 -right-3 bg-pastel-yellow/40 border border-pencil/20 px-3 py-1 sketch-border rotate-6 font-sketch text-xs select-none"
      >
        hover to paint
      </div>
    </div>
  );
}

const metrics = [
  { value: "2+", label: "Years Experience", color: "var(--pastel-blue)" },
  { value: "5+", label: "Tools Built for Productivity", color: "var(--pastel-green)" },
  { value: "30%", label: "System Cost Optimized", color: "var(--pastel-yellow)" },
  { value: "Q2 '25", label: "Employee of Quarter", color: "var(--pastel-coral)" },
  { value: "IEEE", label: "Research Published", color: "var(--pastel-blue)" },
];

export function Hero() {
  return (
    <section id="hero" className="relative py-24 md:py-32 border-b border-pencil/5 z-10 overflow-hidden">
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
            Building scalable backend systems, intelligent automation, and interactive
            digital experiences through the lens of a craftsman.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="#projects"
              className="group relative bg-pencil text-paper px-6 py-3 rounded-sm ring-1 ring-pencil hover:bg-graphite transition-colors"
            >
              <div className="absolute -inset-1 border border-pencil/20 sketch-border -z-10 group-hover:border-pencil/50 transition-colors" />
              <span className="text-sm font-medium">View Projects</span>
            </a>
            <a
              href="#"
              className="px-6 py-3 text-sm font-medium border border-pencil/20 hover:border-pencil/60 hover:bg-pastel-yellow/50 transition-colors rounded-sm"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-sm font-medium font-sketch underline decoration-wavy underline-offset-4 hover:text-forest-green transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-2xl">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                className="transform hover:-translate-y-0.5 transition-transform"
              >
                <PaintHover
                  color={m.color}
                  spread={320}
                  duration={600}
                  className="bg-card sketch-border border border-pencil/20 p-3 text-center"
                >
                  <div className="text-xl font-semibold">{m.value}</div>
                  <div className="font-sketch text-xs text-graphite mt-1">{m.label}</div>
                </PaintHover>
              </motion.div>
            ))}
          </div>
        </div>

        <PaintRevealPortrait />
      </div>
    </section>
  );
}

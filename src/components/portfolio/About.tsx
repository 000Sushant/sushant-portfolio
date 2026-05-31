import { useState } from "react";
import { PuzzleIcon, CompassIcon, GearIcon, BrainIcon, FlagIcon, BoltIcon } from "./sketches";
import { SketchDraw } from "./SketchDraw";
import { SketchSticker, BikeSticker } from "./Stickers";
import { CelloTape } from "./CelloTape";

const roles = [
  { label: "Problem Solver", Icon: PuzzleIcon, color: "bg-pastel-blue", hover: "hover:bg-pastel-blue active:bg-pastel-blue active:transition-none cursor-pointer" },
  { label: "Backend Developer", Icon: CompassIcon, color: "bg-pastel-green", hover: "hover:bg-pastel-green active:bg-pastel-green active:transition-none cursor-pointer" },
  { label: "Automation Builder", Icon: GearIcon, color: "bg-pastel-yellow", hover: "hover:bg-pastel-yellow active:bg-pastel-yellow active:transition-none cursor-pointer" },
  { label: "AI Native Builder", Icon: BrainIcon, color: "bg-pastel-coral", hover: "hover:bg-pastel-coral active:bg-pastel-coral active:transition-none cursor-pointer" },
  { label: "Scrum Master", Icon: FlagIcon, color: "bg-pastel-purple", hover: "hover:bg-pastel-purple active:bg-pastel-purple active:transition-none cursor-pointer" },
  { label: "Vibe Coder", Icon: BoltIcon, color: "bg-pastel-peach", hover: "hover:bg-pastel-peach active:bg-pastel-peach active:transition-none cursor-pointer" },
];

export function About() {
  const [activeRole, setActiveRole] = useState<number | null>(null);

  return (
    <section id="about" className="relative py-24 z-10 overflow-hidden">
      <SketchSticker className="left-[2%] top-[30%]" />
      <BikeSticker className="right-[3%] bottom-[15%]" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold tracking-tight mb-2">About the Developer</h2>
          <p className="font-sketch text-graphite text-lg">
            // backend full stack craftsman
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div className="relative bg-card sketch-border border border-pencil/20 p-8">
            <div className="absolute -top-3 -right-3 bg-pastel-yellow border border-pencil/20 px-3 py-1 font-sketch text-xs rotate-3">
              page 01
            </div>
            <p className="font-sketch text-lg leading-relaxed text-pencil/90">
              Backend-focused Full Stack Engineer and Scrum Master with{" "}
              <span className="bg-pastel-blue px-1">2+ years</span> specializing in
              Node.js, TypeScript, SQL, and AWS.
            </p>
            <p className="mt-4 text-pencil/75 leading-relaxed">
              I orchestrate workflows, design resilient APIs, and turn legacy systems
              into modern, real-time ones — while keeping a notebook full of sketches
              along the way.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {roles.map((r, i) => {
              const isActive = activeRole === i;
              const tapeRotations = ["-rotate-6", "rotate-4", "-rotate-2", "rotate-6", "-rotate-3", "rotate-2"];
              return (
                <SketchDraw key={r.label} delay={i * 0.08}>
                  <div
                    onClick={() => setActiveRole(isActive ? null : i)}
                    className={`group relative border border-pencil/20 sketch-border p-5 pt-8 flex flex-col items-center text-center gap-3 transition-all duration-300 cursor-pointer ${
                      isActive ? `${r.color} scale-[1.03]` : "bg-card"
                    } ${r.hover} hover:scale-[1.03]`}
                  >
                    <CelloTape
                      className="-top-1.5 left-1/2 -translate-x-1/2 w-10 h-3.5 z-20"
                      rotate={tapeRotations[i % tapeRotations.length]}
                    />
                    <r.Icon className="w-10 h-10 text-pencil" />
                    <span className="font-sketch text-sm">{r.label}</span>
                  </div>
                </SketchDraw>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

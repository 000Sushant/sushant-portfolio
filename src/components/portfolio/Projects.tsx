import { useState } from "react";
import { motion } from "framer-motion";
import { ArchitectureSketch, FactoryIcon, ShieldIcon, StackIcon, BrainIcon } from "./sketches";
import { SketchDraw } from "./SketchDraw";
import { SkateboardSticker, SurfingSticker, RocketSticker } from "./Stickers";

const small = [
  {
    title: "Factory Tool",
    impact: "90% efficiency improvement",
    desc: "Real-time production data upload platform for factory floors.",
    stack: ["Node.js", "PostgreSQL", "Redis"],
    Icon: FactoryIcon,
    color: "bg-pastel-blue/60",
    tint: "hover:bg-pastel-blue/60 active:bg-pastel-blue/60 active:transition-none cursor-pointer",
    isInternal: true,
  },
  {
    title: "OSS Approval Tool",
    impact: "1–2 days → 10–15 minutes",
    desc: "Java Swing app analyzing dependency licenses for legal sign-off.",
    stack: ["Java", "Swing", "Heuristics"],
    Icon: ShieldIcon,
    color: "bg-pastel-green/60",
    tint: "hover:bg-pastel-green/60 active:bg-pastel-green/60 active:transition-none cursor-pointer",
    isInternal: true,
  },
  {
    title: "Data Lake Optimization",
    impact: "60% cost · 80% reliability",
    desc: "Infrastructure tuning across ingestion, storage, and query layers.",
    stack: ["AWS", "Terraform", "Python"],
    Icon: StackIcon,
    color: "bg-pastel-yellow/60",
    tint: "hover:bg-pastel-yellow/60 active:bg-pastel-yellow/60 active:transition-none cursor-pointer",
    isInternal: true,
  },
  {
    title: "Votika",
    impact: "Top 1% · Google PromptWar",
    desc: "GenAI-powered election guidance assistant on Vertex AI.",
    stack: ["Angular", "Node.js", "Vertex AI", "GCP", "Docker"],
    Icon: BrainIcon,
    color: "bg-pastel-coral/60",
    tint: "hover:bg-pastel-coral/60 active:bg-pastel-coral/60 active:transition-none cursor-pointer",
    isInternal: false,
  },
];

export function Projects() {
  const [activeFlagship, setActiveFlagship] = useState(false);
  const [activeSmall, setActiveSmall] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 bg-card/40 border-y border-pencil/5 z-10 overflow-hidden">
      <SkateboardSticker className="left-[2%] bottom-[20%]" />
      <SurfingSticker className="right-[3%] top-[25%]" />
      <RocketSticker className="right-[2%] bottom-[20%]" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold tracking-tight mb-2">Featured Blueprints</h2>
          <p className="font-sketch text-graphite text-lg">
            // systems build & shipped
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Flagship */}
          <SketchDraw className="md:col-span-2" duration={2.6}>
            <div
              onClick={() => setActiveFlagship(!activeFlagship)}
              className={`group relative border border-pencil/25 sketch-border p-8 transition-all duration-300 overflow-hidden cursor-pointer ${
                activeFlagship ? "bg-pastel-yellow/60 scale-[1.01]" : "bg-card"
              } hover:bg-pastel-yellow/60 hover:scale-[1.01]`}
            >
              <div className="absolute top-4 right-6 font-sketch text-pencil/25 text-xs rotate-2">
                AWS Cloud Modeling
              </div>
              <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-5 flex-wrap">
                    <span className="px-2.5 py-0.5 border border-pencil/30 text-[10px] font-semibold uppercase tracking-widest rounded bg-paper/60">
                      Flagship
                    </span>
                    <span className="font-sketch text-sm text-graphite">
                      Pre-deployment validation
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold mb-4">Sr. Architect</h3>
                  <p className="text-pencil/75 mb-6 max-w-[48ch]">
                    AWS System Design Simulator to model traffic behavior, identify
                    bottlenecks, estimate infrastructure costs, and validate architectural
                    decisions before deployment.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Photon Quantum", "Angular", "Node.js", "Graph Engine"].map((s) => (
                      <span
                        key={s}
                        className="font-sketch text-xs px-2 py-1 border border-pencil/20 bg-paper/70"
                      >
                        #{s}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="https://system-design-simulator-two.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 text-xs font-semibold bg-pencil text-paper rounded-sm hover:bg-graphite transition-colors z-20"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/000Sushant/system-design-simulator"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 text-xs font-semibold border border-pencil/30 rounded-sm bg-card hover:bg-paper transition-colors z-20"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <div className={`relative h-72 border border-pencil/20 sketch-border bg-paper grid place-items-center overflow-hidden transition-all duration-300 ${
                  activeFlagship ? "rotate-1" : "group-hover:rotate-1"
                }`}>
                  <ArchitectureSketch className="w-full h-full p-4 text-pencil" />
                </div>
              </div>
            </div>
          </SketchDraw>

          {small.map((p, i) => {
            const isActive = activeSmall === i;
            return (
              <SketchDraw key={p.title} delay={i * 0.08}>
                <div
                  onClick={() => setActiveSmall(isActive ? null : i)}
                  className={`group relative border border-pencil/25 sketch-border p-6 h-full flex flex-col transition-all duration-300 cursor-pointer ${
                    isActive ? p.color : "bg-card"
                  } ${p.tint} hover:scale-[1.02]`}
                >
                  <div className="absolute -top-3 -right-3 bg-paper border border-pencil/25 px-2 py-1 font-sketch text-xs rotate-3 z-10">
                    {p.impact}
                  </div>
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-medium">{p.title}</h4>
                    <p.Icon className="w-9 h-9 text-pencil shrink-0" />
                  </div>
                  <p className="text-pencil/75 text-sm mb-5 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.stack.map((s) => (
                      <span key={s} className="font-sketch text-xs text-graphite">
                        · {s}
                      </span>
                    ))}
                  </div>
                  {p.isInternal ? (
                    <div className="font-sketch text-xs text-graphite/50 flex items-center gap-1.5 select-none pt-1">
                      <span>🔒</span>
                      <span>Internal Enterprise Tool (Proprietary)</span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/000Sushant/election-assistant/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-semibold px-3 py-1.5 border border-pencil/30 rounded-sm hover:bg-card bg-paper/60 z-20"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://votika-719327177662.europe-west1.run.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-semibold px-3 py-1.5 border border-pencil/30 rounded-sm hover:bg-card bg-paper/60 z-20"
                      >
                        Demo
                      </a>
                    </div>
                  )}
                </div>
              </SketchDraw>
            );
          })}
        </div>
      </div>
    </section>
  );
}

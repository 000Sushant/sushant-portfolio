import { useState } from "react";
import { CertIcon } from "./sketches";
import { PizzaSticker } from "./Stickers";

// Whiteboard-style hand-drawn brand logo components
function GoogleLogo() {
  return (
    <svg viewBox="0 0 40 40" className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M30 20 c0 6-4 10-10 10 s-10-4-10-10 s4-10 10-10 c4 0 7 2 9 5" strokeDasharray="3 2" />
      <line x1="20" y1="20" x2="30" y2="20" />
    </svg>
  );
}

function DockerLogo() {
  return (
    <svg viewBox="0 0 40 40" className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 24 c4-4 12-4 16-2 c2-2 6-4 12 0 c-2 2-2 6-6 6 h-22z" />
      <rect x="12" y="16" width="6" height="4" strokeDasharray="2 1" />
      <rect x="20" y="16" width="6" height="4" strokeDasharray="2 1" />
      <rect x="16" y="11" width="6" height="4" strokeDasharray="2 1" />
    </svg>
  );
}

function HuggingFaceLogo() {
  return (
    <svg viewBox="0 0 40 40" className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      {/* Face circle */}
      <circle cx="20" cy="22" r="10" strokeDasharray="3 1.5" />
      {/* Eyes */}
      <path d="M16 20 q2-2 4 0" />
      <path d="M20 20 q2-2 4 0" />
      {/* Mouth */}
      <path d="M17 25 q3 3 6 0" />
      {/* Hands hugging */}
      <path d="M8 22 c-2-2-4-2-4 1 s4 4 4 4" />
      <path d="M32 22 c2-2 4-2 4 1 s-4 4-4 4" />
    </svg>
  );
}

const certs = [
  { 
    title: "Docker Foundations", 
    org: "Professional Certificate", 
    color: "bg-pastel-blue",
    tint: "hover:bg-pastel-blue active:bg-pastel-blue active:transition-none cursor-pointer",
    Logo: DockerLogo 
  },
  { 
    title: "Generative AI Mastermind", 
    org: "Certification", 
    color: "bg-pastel-yellow",
    tint: "hover:bg-pastel-yellow active:bg-pastel-yellow active:transition-none cursor-pointer",
    Logo: GoogleLogo 
  },
  { 
    title: "Build AI Agents with Enterprise Databases", 
    org: "Google", 
    color: "bg-pastel-green",
    tint: "hover:bg-pastel-green active:bg-pastel-green active:transition-none cursor-pointer",
    Logo: GoogleLogo 
  },
  { 
    title: "Agent Assist and its Gen AI Capabilities", 
    org: "Google", 
    color: "bg-pastel-coral",
    tint: "hover:bg-pastel-coral active:bg-pastel-coral active:transition-none cursor-pointer",
    Logo: GoogleLogo 
  },
  { 
    title: "AI Agents Fundamentals", 
    org: "Hugging Face", 
    color: "bg-pastel-purple",
    tint: "hover:bg-pastel-purple active:bg-pastel-purple active:transition-none cursor-pointer",
    Logo: HuggingFaceLogo 
  },
];

export function Certifications() {
  const [activeCert, setActiveCert] = useState<number | null>(null);

  return (
    <section id="certifications" className="relative py-24 z-10 overflow-hidden">
      <PizzaSticker className="left-[2%] top-[40%]" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-sketch text-2xl text-graphite">Certifications</h2>
          <div className="h-px flex-1 bg-pencil/10" />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {certs.map((c, i) => {
            const Logo = c.Logo;
            const isActive = activeCert === i;
            return (
              <div
                key={c.title}
                onClick={() => setActiveCert(isActive ? null : i)}
                className={`group relative border border-pencil/20 sketch-border p-6 transition-all duration-300 cursor-pointer ${
                  isActive ? c.color : "bg-card"
                } ${c.tint} ${
                  isActive
                    ? "rotate-0 scale-[1.03]"
                    : i % 2 === 0
                    ? "rotate-[-1deg]"
                    : "rotate-[1deg]"
                } hover:rotate-0 hover:scale-[1.03] active:rotate-0`}
              >
                {/* Background brand logo watermark container to clip overflow locally */}
                <div className="absolute inset-0 pointer-events-none select-none overflow-hidden rounded-[inherit]">
                  <div className={`absolute bottom-4 right-4 text-graphite/12 transition-all duration-700 ease-out z-0 ${
                    isActive
                      ? "text-graphite/24 opacity-100 translate-x-0"
                      : "opacity-0 group-hover:opacity-100 group-hover:text-graphite/24 group-hover:translate-x-0 group-active:translate-x-0 translate-x-6"
                  }`}>
                    <Logo />
                  </div>
                </div>

                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-pastel-coral border border-pencil/30 grid place-items-center font-sketch text-[10px] z-10">
                  ✓
                </div>
                <CertIcon className="relative z-10 w-10 h-10 text-pencil mb-4" />
                <h4 className="relative z-10 font-medium text-lg leading-snug">{c.title}</h4>
                <p className="relative z-10 font-sketch text-sm text-graphite mt-1">{c.org}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

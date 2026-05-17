import { useState } from "react";
import { motion } from "framer-motion";
import { CompassSticker, HikingSticker } from "./Stickers";

// Whiteboard-style hand-drawn tech logo components
function JSLogo() {
  return (
    <svg viewBox="0 0 40 40" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="5" width="30" height="30" rx="3" strokeDasharray="3 3" />
      <text x="12" y="27" className="font-sketch font-bold" fontSize="16" fill="currentColor" stroke="none">JS</text>
    </svg>
  );
}

function TSLogo() {
  return (
    <svg viewBox="0 0 40 40" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="5" width="30" height="30" rx="3" strokeDasharray="3 3" />
      <text x="12" y="27" className="font-sketch font-bold" fontSize="16" fill="currentColor" stroke="none">TS</text>
    </svg>
  );
}

function NodeLogo() {
  return (
    <svg viewBox="0 0 40 40" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" strokeDasharray="4 2" />
      <text x="9" y="24" className="font-sketch text-[9px]" fill="currentColor" stroke="none">node</text>
    </svg>
  );
}

function JavaLogo() {
  return (
    <svg viewBox="0 0 40 40" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 16 h20 v12 c0 4-4 6-10 6s-10-2-10-6z" />
      <path d="M30 19 c4 0 5 4 2 6" />
      <path d="M15 12 q2-4 0-8" strokeDasharray="1 1" />
      <path d="M20 12 q2-4 0-8" strokeDasharray="1 1" />
      <path d="M25 12 q2-4 0-8" strokeDasharray="1 1" />
    </svg>
  );
}

function AWSLogo() {
  return (
    <svg viewBox="0 0 40 40" className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <text x="10" y="20" className="font-sketch font-bold text-xs" fill="currentColor" stroke="none">AWS</text>
      <path d="M8 26 q12 6 24 0" />
      <polyline points="28,24 32,26 28,29" />
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

function GitLogo() {
  return (
    <svg viewBox="0 0 40 40" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="10" r="3" />
      <circle cx="12" cy="30" r="3" />
      <circle cx="26" cy="20" r="3" />
      <line x1="12" y1="13" x2="12" y2="27" />
      <path d="M12 24 q8 0 12-2" />
    </svg>
  );
}

const roles = [
  {
    when: "July 2024 – Present",
    company: "Signify",
    title: "Application Development Engineer",
    sub: "Scrum Master & Backend Developer",
    note: "current focus",
    bullets: [
      "Led Agile delivery as Scrum Master",
      "Designed and scaled RESTful APIs using Node.js and TypeScript for cloud native applications.",
      "Built 5+ internal tools on streach to automate workflows and streamline team operations.",
      "Modernized legacy architecture, reducing operational costs by 30%.",
    ],
    tint: "hover:bg-pastel-blue active:bg-pastel-blue active:transition-none cursor-pointer",
    bgLogos: [
      { Logo: NodeLogo, pos: "top-4 right-8", style: "rotate-12 translate-x-16 -translate-y-16 opacity-0 scale-75 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 group-active:translate-x-0 group-active:translate-y-0 group-active:opacity-100 group-active:scale-100" },
      { Logo: TSLogo, pos: "bottom-4 right-20", style: "-rotate-12 translate-x-16 translate-y-16 opacity-0 scale-75 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 group-active:translate-x-0 group-active:translate-y-0 group-active:opacity-100 group-active:scale-100" },
      { Logo: JSLogo, pos: "top-16 right-36", style: "rotate-6 translate-x-24 -translate-y-4 opacity-0 scale-75 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 group-active:translate-x-0 group-active:translate-y-0 group-active:opacity-100 group-active:scale-100" },
      { Logo: JavaLogo, pos: "bottom-16 right-4", style: "-rotate-6 translate-x-16 translate-y-16 opacity-0 scale-75 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 group-active:translate-x-0 group-active:translate-y-0 group-active:opacity-100 group-active:scale-100" },
    ],
  },
  {
    when: "July 2023 – July 2024",
    company: "Signify",
    title: "R&D Intern",
    sub: "Automation & Cloud Systems",
    note: "foundation",
    bullets: [
      "Automated Android and iOS testing pipelines.",
      "Increased test coverage to 100%.",
      "Managed and optimize AWS services for datalake application",
    ],
    tint: "hover:bg-pastel-green active:bg-pastel-green active:transition-none cursor-pointer",
    bgLogos: [
      { Logo: AWSLogo, pos: "top-4 right-10", style: "rotate-12 translate-x-16 -translate-y-16 opacity-0 scale-75 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 group-active:translate-x-0 group-active:translate-y-0 group-active:opacity-100 group-active:scale-100" },
      { Logo: DockerLogo, pos: "bottom-4 right-24", style: "-rotate-12 translate-x-16 translate-y-16 opacity-0 scale-75 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 group-active:translate-x-0 group-active:translate-y-0 group-active:opacity-100 group-active:scale-100" },
      { Logo: GitLogo, pos: "top-16 right-32", style: "-rotate-6 translate-x-24 -translate-y-4 opacity-0 scale-75 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 group-active:translate-x-0 group-active:translate-y-0 group-active:opacity-100 group-active:scale-100" },
      { Logo: JavaLogo, pos: "bottom-16 right-6", style: "rotate-6 translate-x-16 translate-y-16 opacity-0 scale-75 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 group-active:translate-x-0 group-active:translate-y-0 group-active:opacity-100 group-active:scale-100" },
    ],
  },
];

export function Experience() {
  const [activeRole, setActiveRole] = useState<number | null>(null);

  return (
    <section id="experience" className="relative py-24 z-10 overflow-hidden">
      <CompassSticker className="left-[2%] top-[15%]" />
      <HikingSticker className="right-[2%] top-[40%]" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-14">
          <h2 className="font-sketch text-2xl text-graphite">Experience Journal</h2>
          <div className="h-px flex-1 bg-pencil/10" />
        </div>

        <div className="relative space-y-12">
          <div className="absolute left-[7px] md:left-[179px] top-2 bottom-2 w-px bg-pencil/15" />

          {roles.map((r, i) => {
            const isActive = activeRole === i;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative grid grid-cols-[24px_1fr] md:grid-cols-[180px_24px_1fr] gap-x-4 items-start"
              >
                <div className="hidden md:block">
                  <span className="font-sketch text-sm text-graphite block">{r.when}</span>
                  <div className="mt-2 font-sketch text-xs text-pastel-coral rotate-2 inline-block">
                    {r.note}
                  </div>
                </div>

                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-card border-2 border-pencil mt-2 relative z-10" />
                </div>

                <div
                  onClick={() => setActiveRole(isActive ? null : i)}
                  className={`group relative overflow-hidden border border-pencil/20 sketch-border p-6 transition-all duration-300 cursor-pointer ${
                    isActive ? (i === 0 ? "bg-pastel-blue" : "bg-pastel-green") : "bg-card"
                  } ${r.tint} ${
                    isActive
                      ? "rotate-0 scale-[1.02]"
                      : i % 2 === 0
                      ? "rotate-[-0.5deg]"
                      : "rotate-[0.5deg]"
                  } hover:rotate-0 hover:scale-[1.02] active:rotate-0`}
                >
                  {/* Background sketchy tech logos */}
                  <div className="hidden md:block absolute inset-0 pointer-events-none select-none overflow-hidden">
                    {r.bgLogos.map((logoItem, idx) => {
                      const Logo = logoItem.Logo;
                      return (
                        <div
                          key={idx}
                          className={`transition-all duration-500 absolute ${logoItem.pos} ${
                            isActive
                              ? "text-graphite/35 scale-100 translate-x-0 translate-y-0 opacity-100"
                              : "text-graphite/18 group-hover:text-graphite/35 group-active:text-graphite/35 " +
                                logoItem.style
                          }`}
                        >
                          <Logo />
                        </div>
                      );
                    })}
                  </div>

                  <div className="relative z-10 md:hidden font-sketch text-xs text-graphite mb-1">{r.when}</div>
                  <h3 className="relative z-10 text-2xl font-medium">{r.title}</h3>
                  <p className="relative z-10 text-graphite mb-4">
                    {r.company} — <span className="italic">{r.sub}</span>
                  </p>
                  <ul className="relative z-10 space-y-2 text-pencil/80">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="font-sketch text-pencil/40 mt-0.5">·</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


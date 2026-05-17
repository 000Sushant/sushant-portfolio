import { useState } from "react";
import { SwimmingSticker, RobotSticker } from "./Stickers";

const papers = [
  {
    venue: "IEEE Xplore · 2025",
    title: "MetaMod: SQL Injection and XSS Detection using Genetic Algorithm",
    desc: "Adaptive hybrid detector for modern web vulnerabilities.",
  },
  {
    venue: "Review",
    title: "Penetration Testing Tools — A Comparative Review",
    desc: "Survey of modern offensive-security tooling and methodology.",
  },
  {
    venue: "ML / Security",
    title: "ML-based Cyber Attack Detection",
    desc: "Neural classifiers for real-time intrusion detection.",
  },
  {
    venue: "Healthcare ML",
    title: "Covid / Pneumonia Classification using Machine Learning",
    desc: "CNN-based diagnostic pipeline on chest X-ray imaging.",
  },
];

export function Research() {
  const [activePaper, setActivePaper] = useState<number | null>(null);

  return (
    <section id="research" className="relative py-24 bg-card/40 border-y border-pencil/5 z-10 overflow-hidden">
      <SwimmingSticker className="left-[2%] top-[20%]" />
      <RobotSticker className="right-[2%] bottom-[20%]" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-sketch text-2xl text-graphite">Research Notes</h2>
          <div className="h-px flex-1 bg-pencil/10" />
        </div>

        <div className="relative bg-card sketch-border border border-pencil/20 p-8 md:p-12">
          <div className="absolute top-0 left-12 right-12 h-px bg-pencil/10" />
          <div className="absolute top-4 right-6 font-sketch text-pencil/25 text-3xl rotate-3">
            #notebook
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {papers.map((p, i) => {
              const isActive = activePaper === i;
              return (
                <div
                  key={p.title}
                  onClick={() => setActivePaper(isActive ? null : i)}
                  className={`group relative border border-pencil/15 sketch-border p-5 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-pastel-blue/50 -rotate-1 scale-[1.02]"
                      : "bg-paper/60 hover:bg-pastel-blue/50 active:bg-pastel-blue/50 hover:-rotate-1 active:-rotate-1 hover:scale-[1.02]"
                  }`}
                >
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-pencil/50">
                    {p.venue}
                  </span>
                  <h4 className="font-medium text-lg mt-1.5 leading-snug">{p.title}</h4>
                  <p className="text-sm text-pencil/70 mt-2">{p.desc}</p>
                  <div className={`absolute -bottom-2 -right-2 font-sketch text-xs transition-colors ${
                    isActive ? "text-pencil" : "text-pencil/40 group-hover:text-pencil group-active:text-pencil"
                  }`}>
                    read →
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

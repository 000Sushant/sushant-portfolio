import { PaintHover } from "./PaintHover";
import { PhotographySticker, GuitarSticker } from "./Stickers";

const notes = [
  { tag: "Honor", text: "Employee of the Quarter — Q2 2025", color: "var(--pastel-yellow)", rot: "-rotate-3" },
  { tag: "Role", text: "Scrum Master Leadership across teams", color: "var(--pastel-blue)", rot: "rotate-2" },
  { tag: "Impact", text: "5+ Internal Tools Delivered to Production", color: "var(--pastel-green)", rot: "-rotate-1" },
  { tag: "Research", text: "Multiple Publications in Cybersecurity & ML", color: "var(--pastel-coral)", rot: "rotate-3" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 z-10 overflow-hidden">
      <PhotographySticker className="left-[3%] top-[25%]" />
      <GuitarSticker className="right-[3%] bottom-[15%]" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-sketch text-2xl text-graphite">Sticky Wins</h2>
          <div className="h-px flex-1 bg-pencil/10" />
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {notes.map((n, i) => (
            <div
              key={n.text}
              className={`relative ${n.rot} hover:rotate-0 hover:scale-[1.04] transition-transform cursor-default ${i % 2 === 0 ? "translate-y-0" : "translate-y-6"}`}
            >
              <PaintHover
                color={n.color}
                spread={380}
                duration={800}
                className="w-60 h-60 p-6 sketch-border border border-black/10 shadow-lg bg-card"
              >
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3 bg-pencil/15 -rotate-2 rounded-sm" />
                <p className="font-sketch text-xs text-pencil/50 uppercase tracking-widest mb-3">
                  {n.tag}
                </p>
                <p className="font-sketch text-xl leading-snug text-pencil/85">{n.text}</p>
              </PaintHover>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

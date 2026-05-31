import { BoardPin } from "./BoardPin";
import { PhotographySticker, GuitarSticker } from "./Stickers";

const notes = [
  { 
    tag: "Honor", 
    text: "Employee of the Quarter — Q2 2025", 
    color: "var(--pastel-yellow)", 
    bg: "bg-pastel-yellow/90", 
    fold: "hsl(48, 65%, 76%)",
    rot: "-rotate-3" 
  },
  { 
    tag: "Role", 
    text: "Scrum Master Leadership across teams", 
    color: "var(--pastel-blue)", 
    bg: "bg-pastel-blue/90", 
    fold: "hsl(210, 48%, 78%)",
    rot: "rotate-2" 
  },
  { 
    tag: "Impact", 
    text: "5+ Internal Tools Delivered to Production", 
    color: "var(--pastel-green)", 
    bg: "bg-pastel-green/90", 
    fold: "hsl(140, 38%, 78%)",
    rot: "-rotate-1" 
  },
  { 
    tag: "Research", 
    text: "Multiple Publications in Cybersecurity & ML", 
    color: "var(--pastel-coral)", 
    bg: "bg-pastel-coral/90", 
    fold: "hsl(10, 48%, 78%)",
    rot: "rotate-3" 
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 z-10 overflow-hidden">
      <PhotographySticker className="left-[3%] top-[25%]" />
      <GuitarSticker className="right-[3%] bottom-[15%]" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold tracking-tight mb-2">Sticky Wins</h2>
          <p className="font-sketch text-graphite text-lg">
            // career milestones & accomplishments
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 pt-4">
          {notes.map((n, i) => {
            return (
              <div
                key={n.text}
                className={`relative ${n.rot} transition-all duration-300 hover:scale-[1.05] cursor-default ${
                  i % 2 === 0 ? "translate-y-0" : "translate-y-6"
                }`}
              >
                {/* Board Pin pinning the note down */}
                <BoardPin
                  className="-top-1.5 left-1/2 -translate-x-1/2 z-20"
                  rotate={i % 2 === 0 ? "rotate-[-10deg]" : "rotate-[15deg]"}
                  color={n.color}
                />

                <div 
                  className={`w-60 h-60 p-6 pt-9 border border-pencil/15 sketch-border shadow-[2px_3px_0px_rgba(0,0,0,0.06)] hover:shadow-[4px_8px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover-tear ${n.bg}`}
                >
                  <p className="font-sketch text-xs font-bold text-pencil/55 uppercase tracking-widest mb-3 select-none">
                    # {n.tag}
                  </p>
                  <p className="font-sketch text-lg md:text-xl font-bold leading-snug text-pencil/85">
                    {n.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

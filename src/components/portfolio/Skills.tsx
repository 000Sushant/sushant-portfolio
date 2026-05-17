import { useState } from "react";
import { SketchDraw } from "./SketchDraw";
import { BallSticker, CoffeeSticker } from "./Stickers";

const groups = [
  {
    title: "Languages",
    color: "bg-pastel-blue",
    hover: "hover:bg-pastel-blue active:bg-pastel-blue active:transition-none cursor-pointer",
    items: ["TypeScript", "JavaScript", "Java", "Python", "SQL", "NoSQL"],
    bgNotes: [
      { text: "こんにちは", style: "top-2 right-4 text-xs rotate-12" },
      { text: "代码", style: "bottom-3 right-6 text-sm -rotate-6" },
      { text: "код", style: "bottom-12 right-24 text-xs rotate-3" },
      { text: "fn main()", style: "top-10 right-20 text-xs -rotate-12" },
      { text: "print(\"hi\")", style: "top-20 right-4 text-xs rotate-6" },
    ],
  },
  {
    title: "Backend",
    color: "bg-pastel-yellow",
    hover: "hover:bg-pastel-yellow active:bg-pastel-yellow active:transition-none cursor-pointer",
    items: ["Node.js", "Express.js", "REST APIs"],
    bgNotes: [
      { text: "404 Not Found", style: "top-2 right-4 text-sm rotate-6" },
      { text: "GET /api/v1", style: "bottom-3 right-12 text-xs -rotate-12" },
      { text: "HTTP 200 OK", style: "bottom-12 right-2 text-xs rotate-6" },
      { text: "listen(8080)", style: "top-12 right-20 text-xs -rotate-6" },
      { text: "res.json()", style: "top-20 right-4 text-xs rotate-12" },
    ],
  },
  {
    title: "Frontend",
    color: "bg-pastel-green",
    hover: "hover:bg-pastel-green active:bg-pastel-green active:transition-none cursor-pointer",
    items: ["Angular", "HTML5", "CSS / SCSS", "Bootstrap"],
    bgNotes: [
      { text: "<div>", style: "top-2 right-4 text-sm rotate-12" },
      { text: "justify-center", style: "bottom-3 right-10 text-xs -rotate-6" },
      { text: "onClick={}", style: "bottom-12 right-2 text-xs rotate-6" },
      { text: "@keyframes", style: "top-12 right-24 text-xs -rotate-12" },
      { text: "h-screen", style: "top-20 right-6 text-xs rotate-3" },
    ],
  },
  {
    title: "Databases",
    color: "bg-pastel-coral",
    hover: "hover:bg-pastel-coral active:bg-pastel-coral active:transition-none cursor-pointer",
    items: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
    bgNotes: [
      { text: "SELECT *", style: "top-2 right-4 text-sm rotate-6" },
      { text: "db.find()", style: "bottom-3 right-12 text-xs -rotate-12" },
      { text: "CACHE_HIT", style: "bottom-12 right-2 text-xs rotate-12" },
      { text: "B-Tree Index", style: "top-12 right-20 text-xs -rotate-6" },
      { text: "JOIN users", style: "top-20 right-4 text-xs rotate-3" },
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "bg-pastel-blue",
    hover: "hover:bg-pastel-blue active:bg-pastel-blue active:transition-none cursor-pointer",
    items: ["AWS", "Docker", "Git", "Jenkins", "CI/CD", "Linux", "Terraform"],
    bgNotes: [
      { text: "docker build", style: "top-2 right-4 text-xs rotate-12" },
      { text: "kubectl apply", style: "bottom-3 right-10 text-xs -rotate-6" },
      { text: "us-east-1", style: "bottom-12 right-2 text-xs rotate-6" },
      { text: "git commit", style: "top-12 right-24 text-xs -rotate-12" },
      { text: "tf apply", style: "top-20 right-6 text-xs rotate-3" },
    ],
  },
  {
    title: "Testing",
    color: "bg-pastel-yellow",
    hover: "hover:bg-pastel-yellow active:bg-pastel-yellow active:transition-none cursor-pointer",
    items: ["Selenium", "Appium", "API Automation", "TDD / BDD"],
    bgNotes: [
      { text: "expect().toBe()", style: "top-2 right-4 text-xs rotate-6" },
      { text: "PASS ✓", style: "bottom-3 right-12 text-sm -rotate-12" },
      { text: "test(\"should\")", style: "bottom-12 right-2 text-xs rotate-12" },
      { text: "assert.ok", style: "top-12 right-20 text-xs -rotate-6" },
      { text: "TDD flow", style: "top-20 right-4 text-xs rotate-3" },
    ],
  },
  {
    title: "Core",
    color: "bg-pastel-green",
    hover: "hover:bg-pastel-green active:bg-pastel-green active:transition-none cursor-pointer",
    items: ["Performance Optimization", "Legacy Modernization", "Cybersecurity"],
    bgNotes: [
      { text: "O(log N)", style: "top-2 right-4 text-sm rotate-12" },
      { text: "CAP Theorem", style: "bottom-3 right-10 text-xs -rotate-6" },
      { text: "Scale Up", style: "bottom-12 right-2 text-xs rotate-6" },
      { text: "JWT Token", style: "top-12 right-24 text-xs -rotate-12" },
      { text: "Design Pattern", style: "top-20 right-6 text-xs rotate-3" },
    ],
  },
  {
    title: "AI Agents & Tools",
    color: "bg-pastel-purple",
    hover: "hover:bg-pastel-purple active:bg-pastel-purple active:transition-none cursor-pointer",
    items: ["Lovable", "Gemini", "Copilot", "Codex", "Cursor", "Antigravity", "ChatGPT", "Claude", "Prompt Engineering"],
    bgNotes: [
      { text: "prompt = \"\"", style: "top-2 right-4 text-xs rotate-6" },
      { text: "agent.run()", style: "bottom-3 right-12 text-xs -rotate-12" },
      { text: "tokens/sec", style: "bottom-12 right-2 text-xs rotate-12" },
      { text: "temp: 0.2", style: "top-12 right-20 text-xs -rotate-6" },
      { text: "<ai_context>", style: "top-20 right-4 text-xs rotate-3" },
    ],
  },
];

export function Skills() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  return (
    <section id="skills" className="relative py-24 bg-card/40 border-y border-pencil/5 z-10 overflow-hidden">
      <BallSticker className="left-[2%] top-[30%]" />
      <CoffeeSticker className="right-[2%] top-[60%]" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold tracking-tight mb-2">Engineering Toolbox</h2>
          <p className="font-sketch text-graphite text-lg">
            // tools sketched, tested, and battle-worn
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => {
            const isActive = activeCard === i;
            return (
              <div
                key={g.title}
                onClick={() => setActiveCard(isActive ? null : i)}
                className={`group relative overflow-hidden border border-pencil/20 sketch-border p-6 transition-all duration-300 ${
                  isActive ? g.color : "bg-card"
                } ${g.hover} ${
                  isActive
                    ? "rotate-0 scale-[1.02]"
                    : i % 2 === 0
                    ? "rotate-[-0.5deg]"
                    : "rotate-[0.5deg]"
                } hover:rotate-0 hover:scale-[1.02] active:rotate-0`}
              >
                {/* Background whiteboard doodles */}
                <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                  {g.bgNotes.map((note, idx) => (
                    <div
                      key={idx}
                      className={`font-sketch absolute transition-all duration-500 ${note.style} ${
                        isActive
                          ? "text-graphite/35 scale-100"
                          : "text-graphite/18 group-hover:text-graphite/35 group-active:text-graphite/35"
                      }`}
                    >
                      {note.text}
                    </div>
                  ))}
                </div>

                <div className="relative z-10 flex items-center gap-2 mb-4">
                  <h3 className="font-sketch text-base text-graphite">
                    <span className="text-xl mr-0.5 select-none">#</span>
                    {g.title}
                  </h3>
                </div>
                <div className="relative z-10 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className={`px-2.5 py-1 border border-pencil/25 sketch-border text-sm transition-colors duration-300 ${
                        isActive ? "bg-white" : "bg-paper/60 group-hover:bg-card"
                      }`}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}




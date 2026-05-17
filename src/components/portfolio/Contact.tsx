import { useState } from "react";
import { CatSticker } from "./Stickers";

const links = [
  { label: "Bengaluru, India", href: "#", note: "location" },
  { label: "000sushantkumar@gmail.com", href: "mailto:000sushantkumar@gmail.com", note: "email" },
  { label: "sushant--kumar", href: "https://www.linkedin.com/in/sushant--kumar/", note: "LinkedIn" },
  { label: "@000Sushant", href: "https://github.com/000Sushant", note: "GitHub" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section id="contact" className="relative py-24 bg-card/40 border-t border-pencil/5 z-10 overflow-hidden">
      <CatSticker className="md:left-[3%] md:right-auto md:top-[35%] left-auto right-[5%] top-[2%] md:scale-100 scale-75" />
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
        <div>
          <p className="font-sketch text-graphite text-lg mb-4">// drop a note</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            Let's sketch something together.
          </h2>
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.label} className="flex items-baseline gap-3">
                <span className="font-sketch text-xs text-graphite uppercase tracking-widest w-20 shrink-0">
                  {l.note}
                </span>
                <a
                  href={l.href}
                  className="text-pencil hover:bg-pastel-yellow active:bg-pastel-yellow px-1 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="bg-card sketch-border border border-pencil/25 p-8 space-y-6"
        >
          <Field label="Name" isFocused={focusedField === "name"} focusColor="bg-pastel-blue/20">
            <input
              required
              type="text"
              placeholder="Your name"
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-transparent py-2 outline-none font-medium placeholder:text-pencil/30"
            />
          </Field>
          <Field label="Email" isFocused={focusedField === "email"} focusColor="bg-pastel-green/20">
            <input
              required
              type="email"
              placeholder="you@example.com"
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-transparent py-2 outline-none font-medium placeholder:text-pencil/30"
            />
          </Field>
          <Field label="Message" isFocused={focusedField === "message"} focusColor="bg-pastel-yellow/20" multiline>
            <textarea
              required
              rows={4}
              placeholder="Draft your message…"
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-transparent py-2 outline-none font-medium resize-none placeholder:text-pencil/30"
            />
          </Field>

          <button
            type="submit"
            className="w-full bg-pencil text-paper py-3 font-medium hover:bg-graphite active:bg-graphite active:scale-[0.98] transition-all duration-150 sketch-border ring-1 ring-pencil cursor-pointer"
          >
            {sent ? "✓ Sent — talk soon" : "Send Dispatch"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  isFocused,
  focusColor,
  multiline = false,
}: {
  label: string;
  children: React.ReactNode;
  isFocused: boolean;
  focusColor: string;
  multiline?: boolean;
}) {
  return (
    <div>
      <label className="font-sketch text-sm text-graphite mb-1 block">{label}</label>
      <div
        className={`${multiline ? "border border-pencil/20 sketch-border px-3" : "border-b border-pencil/25"} transition-colors duration-300 ${isFocused ? focusColor : ""
          }`}
      >
        {children}
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";

const tabs = [
  { id: "hero", label: "Home", color: "bg-pastel-blue", hover: "hover:bg-pastel-blue" },
  { id: "about", label: "About", color: "bg-pastel-yellow", hover: "hover:bg-pastel-yellow" },
  { id: "skills", label: "Toolbox", color: "bg-pastel-green", hover: "hover:bg-pastel-green" },
  { id: "experience", label: "Journal", color: "bg-pastel-coral", hover: "hover:bg-pastel-coral" },
  { id: "projects", label: "Work", color: "bg-pastel-blue", hover: "hover:bg-pastel-blue" },
  { id: "research", label: "Notes", color: "bg-pastel-yellow", hover: "hover:bg-pastel-yellow" },
  { id: "contact", label: "Hello", color: "bg-pastel-green", hover: "hover:bg-pastel-green" },
];

export function NotebookTabsNav() {
  const [activeTab, setActiveTab] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      // Boundaries override (top of page)
      if (window.scrollY < 100) {
        setActiveTab("hero");
        return;
      }

      // Boundaries override (bottom of page)
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setActiveTab("contact");
        return;
      }

      // Calculate active section based on mid-viewport position
      for (let i = 0; i < tabs.length; i++) {
        const t = tabs[i];
        const el = document.getElementById(t.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(t.id);
            break;
          }
        }
      }
    };

    // Trigger once on mount to set initial tab active state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-40">
      {tabs.map((t) => {
        const isActive = activeTab === t.id;
        const activeClasses = isActive
          ? `${t.color} pl-10 -translate-x-4`
          : "bg-card pl-4";

        return (
          <a
            key={t.id}
            href={`#${t.id}`}
            className={`border-y border-l border-pencil/20 pr-3 py-2 rounded-l-md -mr-1 hover:pl-10 hover:-translate-x-4 active:pl-10 active:-translate-x-4 shadow-sm transition-all duration-300 ease-out font-sketch text-sm ${t.hover} ${activeClasses}`}
          >
            {t.label}
          </a>
        );
      })}
    </nav>
  );
}

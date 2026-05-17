import { createFileRoute } from "@tanstack/react-router";
import { PaperBackground } from "@/components/portfolio/PaperBackground";
import { NotebookTabsNav } from "@/components/portfolio/NotebookTabsNav";
import { ScrollPencil } from "@/components/portfolio/ScrollPencil";
import { PencilCursor } from "@/components/portfolio/PencilCursor";
import { HighlighterLoader } from "@/components/portfolio/HighlighterLoader";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Research } from "@/components/portfolio/Research";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-paper text-pencil relative overflow-x-hidden selection:bg-pastel-yellow">
      <HighlighterLoader />
      <PaperBackground />
      <ScrollPencil />
      <PencilCursor />
      <NotebookTabsNav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Research />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}

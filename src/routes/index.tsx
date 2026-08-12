import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Journey } from "@/components/portfolio/Journey";
import { Education } from "@/components/portfolio/Education";
import { AISection } from "@/components/portfolio/AISection";
import { Finance } from "@/components/portfolio/Finance";
import { DeveloperActivity } from "@/components/portfolio/DeveloperActivity";
import { Learning } from "@/components/portfolio/Learning";
import { ResumeCTA } from "@/components/portfolio/ResumeCTA";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CommandPalette } from "@/components/portfolio/CommandPalette";
import { profile } from "@/config/portfolio";

const title = "Pranjal Mondal | Full-Stack Web Developer";
const description =
  "Portfolio of Pranjal Mondal, a Computer Science & Engineering student at Jadavpur University focused on full-stack development, backend systems, AI/ML, data analytics, and financial economics.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Full-Stack Web Developer",
          description,
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: profile.university,
          },
          knowsAbout: [
            "Full-Stack Development",
            "Backend Development",
            "Machine Learning",
            "Data Analytics",
            "Macroeconomics",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <div className="relative min-h-dvh">
      <Background />
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Education />
        <AISection />
        <Finance />
        <DeveloperActivity />
        <Learning />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

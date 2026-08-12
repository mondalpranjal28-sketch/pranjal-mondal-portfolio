import { Download, FileText } from "lucide-react";
import { links } from "@/config/portfolio";
import { Section } from "./primitives";

export function ResumeCTA() {
  return (
    <Section id="resume">
      <div className="glass relative overflow-hidden rounded-2xl p-8 text-center sm:p-12">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
        <div className="relative">
          <h2 className="text-3xl font-bold sm:text-4xl">Want to know more?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Download my resume to explore my education, technical skills, projects, and experience.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={links.resume}
              download
              className="inline-flex h-12 items-center gap-2 rounded-xl px-5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
            </a>
            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-secondary/40 px-5 text-sm font-semibold transition-colors hover:border-primary/50"
            >
              <FileText className="h-4 w-4" aria-hidden="true" /> View Resume
            </a>
          </div>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            file: {links.resume}
          </p>
        </div>
      </div>
    </Section>
  );
}
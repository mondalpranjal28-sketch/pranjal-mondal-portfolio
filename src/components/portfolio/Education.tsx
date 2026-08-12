import { GraduationCap } from "lucide-react";
import { profile } from "@/config/portfolio";
import { Section, SectionHeading, Chip } from "./primitives";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="$ cat education.md" title="Education" />

      <article className="glass card-hover relative overflow-hidden rounded-2xl p-6 sm:p-8">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
        <div className="relative grid gap-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-border bg-secondary/60">
            <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-2xl font-bold">{profile.university}</h3>
            <p className="mt-1 text-muted-foreground">{profile.degree}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Chip>Expected graduation · {profile.graduationYear}</Chip>
              <Chip>Undergraduate</Chip>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Coursework spanning data structures and algorithms, operating systems, databases,
              computer networks and software engineering, alongside self-directed work in web
              development, AI/ML and data analytics.
            </p>
          </div>
        </div>
      </article>
    </Section>
  );
}
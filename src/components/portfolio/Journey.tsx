import { timeline } from "@/config/portfolio";
import { Section, SectionHeading } from "./primitives";

export function Journey() {
  return (
    <Section id="journey">
      <SectionHeading
        eyebrow="$ git log --reverse"
        title="My Journey"
        subtitle="An evolving timeline of study, building and exploration."
      />

      <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
        {timeline.map((entry) => (
          <li key={entry.title} className="relative">
            <span
              className="absolute -left-[1.85rem] top-2 grid h-3 w-3 place-items-center rounded-full border border-primary/60 bg-background sm:-left-[2.35rem]"
              aria-hidden="true"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />
            </span>
            <div className="glass card-hover rounded-xl p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[11px] text-primary">
                  {entry.period}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {entry.status === "current" ? "in progress" : "planned"}
                </span>
              </div>
              <h3 className="mt-2 font-display text-lg font-semibold">{entry.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {entry.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
import { currentlyLearning } from "@/config/portfolio";
import { Section, SectionHeading } from "./primitives";

export function Learning() {
  return (
    <Section id="learning">
      <SectionHeading
        eyebrow="$ roadmap"
        title="Currently Learning"
        subtitle="An evolving roadmap rather than a checklist — each node is something I'm actively working through."
      />

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {currentlyLearning.map((item, i) => (
          <li key={item.title} className="glass card-hover relative rounded-xl p-5">
            <div className="flex items-center gap-3">
              <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full border border-primary/50">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse-soft" aria-hidden="true" />
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">node/{i + 1}</span>
            </div>
            <h3 className="mt-3 font-display font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
            <span
              className="mt-4 block h-px w-full bg-gradient-to-r from-primary/60 via-cyan/40 to-transparent"
              aria-hidden="true"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
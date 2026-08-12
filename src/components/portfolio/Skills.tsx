import { skillCategories, type Proficiency } from "@/config/portfolio";
import { Section, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

const levelStyles: Record<Proficiency, string> = {
  "Comfortable With": "border-primary/40 text-primary",
  "Working Knowledge": "border-cyan/40 text-cyan",
  "Currently Exploring": "border-accent/40 text-accent",
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="$ stack --list"
        title="My Tech Stack"
        subtitle="Technologies I use to build, ship and explore — grouped by how confidently I work with them today."
      />

      <ul className="mb-8 flex flex-wrap gap-2" aria-label="Proficiency legend">
        {(Object.keys(levelStyles) as Proficiency[]).map((level) => (
          <li
            key={level}
            className={cn(
              "rounded-full border bg-secondary/30 px-3 py-1 font-mono text-xs",
              levelStyles[level],
            )}
          >
            {level}
          </li>
        ))}
      </ul>

      <div className="space-y-10">
        {skillCategories.map((group) => (
          <div key={group.category}>
            <h3 className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-6 bg-primary/60" aria-hidden="true" />
              {group.category}
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.skills.map((skill) => (
                <li
                  key={`${group.category}-${skill.name}`}
                  className="glass card-hover group rounded-xl p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-display font-semibold">{skill.name}</p>
                    <span
                      className={cn(
                        "shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px]",
                        levelStyles[skill.level],
                      )}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{skill.note}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
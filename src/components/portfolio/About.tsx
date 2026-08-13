import { GraduationCap, Terminal } from "lucide-react";
import { aboutParagraphs, identityTags, profile } from "@/config/portfolio";
import { Section, SectionHeading, Chip } from "./primitives";

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="$ whoami" title="About Me" />
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>

        <aside className="glass card-hover rounded-2xl p-6">
         <div className="flex flex-col gap-5 border-b border-border pb-5 sm:flex-row sm:items-center">
  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-primary/30 bg-secondary/60 shadow-[0_0_35px_-12px_hsl(var(--primary))]">
    <img
      src={profile.profileImage}
      alt={`${profile.name} profile photo`}
      className="h-full w-full object-cover object-top"
      loading="lazy"
    />
    <span
      className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
      aria-hidden="true"
    />
  </div>

  <div className="min-w-0">
    <p className="font-display text-lg font-semibold">
      {profile.name}
    </p>

    <p className="mt-1 font-mono text-xs text-cyan/80">
      developer-identity.json
    </p>

    <p className="mt-2 text-sm text-muted-foreground">
      {profile.headline}
    </p>
  </div>
</div>
            <div className="min-w-0">
              <p className="truncate font-display font-semibold">{profile.name}</p>
              <p className="truncate font-mono text-xs text-muted-foreground">
                developer-identity.json
              </p>
            </div>
          </div>

          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-muted-foreground">Education</dt>
                <dd>{profile.degree}</dd>
                <dd className="text-muted-foreground">
                  {profile.university} · Graduation {profile.graduationYear}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Terminal className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
              <div>
                <dt className="text-muted-foreground">Focus</dt>
                <dd>Full-Stack &amp; Backend Development</dd>
              </div>
            </div>
          </dl>

          <ul className="mt-5 flex flex-wrap gap-2">
            {identityTags.map((tag) => (
              <li key={tag}>
                <Chip>{tag}</Chip>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}

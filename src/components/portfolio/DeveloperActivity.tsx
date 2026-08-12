import { Github, GitBranch, Star, Users } from "lucide-react";
import { links, isPlaceholder } from "@/config/portfolio";
import { Section, SectionHeading } from "./primitives";

const stats = [
  { label: "Repositories", icon: GitBranch },
  { label: "Contributions", icon: Star },
  { label: "Followers", icon: Users },
];

export function DeveloperActivity() {
  const configured = !isPlaceholder(links.githubUsername);

  return (
    <Section id="activity">
      <SectionHeading
        eyebrow="$ gh status"
        title="Developer Activity"
        subtitle="Where the code lives. Connect a GitHub username in the config to surface live repositories and contribution activity."
      />

      <div className="glass rounded-2xl p-6 sm:p-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border bg-secondary/60">
              <Github className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="truncate font-display font-semibold">
                {configured ? `@${links.githubUsername}` : "GitHub not connected yet"}
              </p>
              <p className="truncate font-mono text-xs text-muted-foreground">
                {configured ? "github profile" : `set links.githubUsername in src/config/portfolio.ts`}
              </p>
            </div>
          </div>

          {isPlaceholder(links.github) ? (
            <span className="inline-flex h-10 shrink-0 items-center rounded-lg border border-dashed border-border px-3 text-sm text-muted-foreground">
              Profile link pending
            </span>
          ) : (
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg px-4 text-sm font-semibold text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              <Github className="h-4 w-4" aria-hidden="true" /> View GitHub Profile
            </a>
          )}
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {stats.map(({ label, icon: Icon }) => (
            <li key={label} className="rounded-xl border border-dashed border-border bg-secondary/20 p-4">
              <Icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <p className="mt-2 font-display text-sm font-semibold">{label}</p>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground">awaiting connection</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 overflow-x-auto">
          <div className="grid w-max grid-flow-col grid-rows-7 gap-1" aria-hidden="true">
            {Array.from({ length: 7 * 26 }).map((_, i) => (
              <span
                key={i}
                className="h-2.5 w-2.5 rounded-[3px] border border-border bg-secondary/30"
              />
            ))}
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Contribution graph placeholder — no statistics are shown until the GitHub account is
          configured.
        </p>
      </div>
    </Section>
  );
}
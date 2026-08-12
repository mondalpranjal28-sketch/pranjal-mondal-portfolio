import { useMemo, useState } from "react";
import { ArrowDownToLine, ArrowUpRight, Code2, Github, Lock } from "lucide-react";
import { projects, projectFilters, isPlaceholder, type Project } from "@/config/portfolio";
import { Section, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

function ProjectLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  const placeholder = isPlaceholder(href);
  if (placeholder) {
    return (
      <span
        className="inline-flex h-10 items-center gap-2 rounded-lg border border-dashed border-border px-3 text-sm text-muted-foreground"
        title={`Link not configured yet (${href})`}
      >
        <Lock className="h-3.5 w-3.5" aria-hidden="true" />
        {label} — link pending
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-secondary/40 px-3 text-sm font-medium transition-colors hover:border-primary/50"
    >
      {icon}
      {label}
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass card-hover group relative overflow-hidden rounded-2xl">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-60"
        style={{ backgroundImage: "var(--gradient-brand)" }}
        aria-hidden="true"
      />
      <div className="relative aspect-[16/8] overflow-hidden border-b border-border bg-background/40">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="grid h-full w-full place-items-center grid-bg">
            <pre className="font-mono text-[11px] leading-relaxed text-muted-foreground">
              <code>{`io.on("connection", (socket) => {
  socket.on("message", (msg) =>
    io.emit("message", msg));
});`}</code>
            </pre>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate font-display text-xl font-bold">{project.title}</h3>
            <p className="mt-0.5 font-mono text-xs text-primary">{project.tagline}</p>
          </div>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
            aria-hidden="true"
          />
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.liveUrl ? (
            <ProjectLink
              href={project.liveUrl}
              label="View Live Project"
              icon={<ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
            />
          ) : null}
          <ProjectLink
            href={project.codeUrl}
            label="GitHub Repository"
            icon={<Github className="h-4 w-4" aria-hidden="true" />}
          />
          {project.downloadUrl ? (
            <a
              href={project.downloadUrl}
              download
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-secondary/40 px-3 text-sm font-medium transition-colors hover:border-primary/50"
            >
              <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
              Download Project
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => (p.categories as string[]).includes(filter)),
    [filter],
  );

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="$ ls projects"
        title="Featured Projects"
        subtitle="A selection of things I've built while exploring software engineering, backend systems, and web development."
      />

      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {projectFilters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "h-10 rounded-lg border px-4 text-sm transition-all duration-300",
              filter === f
                ? "border-primary/60 bg-primary/15 text-foreground"
                : "border-border bg-secondary/30 text-muted-foreground hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {visible.map((p) => (
          <div key={p.id} className="animate-rise-in">
            <ProjectCard project={p} />
          </div>
        ))}

        <div className="glass grid min-h-64 place-items-center rounded-2xl border-dashed p-8 text-center">
          <div>
            <Code2 className="mx-auto h-6 w-6 text-muted-foreground" aria-hidden="true" />
            <p className="mt-3 font-display font-semibold">More projects in progress</p>
            <p className="mt-1 text-sm text-muted-foreground">
              New builds across backend, AI/ML and data will be added here.
            </p>
          </div>
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">No projects in this category yet.</p>
      ) : null}
    </Section>
  );
}
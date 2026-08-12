import { ArrowRight, Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { profile, links } from "@/config/portfolio";

const lines = [
  "> building scalable systems...",
  "> learning continuously...",
  "> exploring AI + data...",
];

function TypingLines() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % lines.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <p className="font-mono text-sm text-cyan/80" aria-live="polite">
      {lines[index]}
      <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-cyan animate-pulse-soft" aria-hidden="true" />
    </p>
  );
}

function SystemVisual() {
  const nodes = [
    { x: 20, y: 22, label: "client" },
    { x: 50, y: 12, label: "api" },
    { x: 80, y: 26, label: "cache" },
    { x: 32, y: 62, label: "service" },
    { x: 68, y: 70, label: "db" },
  ];
  const edges = ([
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 4],
    [1, 4],
  ] as const)
    .map(([a, b]) => ({ from: nodes[a]!, to: nodes[b]! }));
  return (
    <div className="glass relative overflow-hidden rounded-2xl p-4 sm:p-5">
      <div className="flex items-center gap-2 border-b border-border pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">system-overview.tsx</span>
      </div>

      <div className="relative mt-4 h-52 sm:h-60">
        <svg viewBox="0 0 100 90" className="h-full w-full" role="img" aria-label="Diagram of a web system: client, API, cache, service and database nodes connected by data flows">
          {edges.map((edge, i) => (
            <line
              key={i}
              x1={edge.from.x}
              y1={edge.from.y}
              x2={edge.to.x}
              y2={edge.to.y}
              stroke="oklch(0.72 0.16 235 / 0.45)"
              strokeWidth="0.4"
              strokeDasharray="3 2"
              style={{ animation: `dash-flow ${6 + i}s linear infinite` }}
            />
          ))}
          {nodes.map((n, i) => (
            <g key={n.label}>
              <circle cx={n.x} cy={n.y} r="3.4" fill="oklch(0.72 0.16 235 / 0.18)" />
              <circle
                cx={n.x}
                cy={n.y}
                r="1.5"
                fill="oklch(0.83 0.13 195)"
                style={{ animation: `pulse-soft ${2 + i * 0.4}s ease-in-out infinite` }}
              />
              <text x={n.x} y={n.y + 7.5} textAnchor="middle" fontSize="3.2" fill="oklch(0.7 0.021 260)" fontFamily="monospace">
                {n.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <pre className="mt-2 overflow-x-auto rounded-xl border border-border bg-background/50 p-3 font-mono text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
        <code>{`$ build --portfolio
✓ frontend   react · css
✓ backend    node · express · socket.io
✓ ai/ml      python · exploring
✓ data       sql · analytics`}</code>
      </pre>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-8 md:pb-24 md:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-rise-in">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-cyan animate-pulse-soft" aria-hidden="true" />
            {profile.status}
          </p>

          <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl">
            Building the Web.{" "}
            <span className="text-gradient">Exploring Intelligence.</span>{" "}
            Understanding Data.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I'm {profile.name} — a Computer Science &amp; Engineering student and Full-Stack Web
            Developer at {profile.university}, building scalable web applications while exploring
            AI/ML, data analytics, and financial economics.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex h-12 items-center gap-2 rounded-xl px-5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              View My Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={links.resume}
              download
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-secondary/40 px-5 text-sm font-semibold transition-colors hover:border-primary/50"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-xl px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> Let's Connect
            </a>
          </div>

          <div className="mt-8 border-l-2 border-primary/40 pl-4">
            <TypingLines />
          </div>
        </div>

        <div className="animate-float-slow">
          <SystemVisual />
        </div>
      </div>
    </section>
  );
}
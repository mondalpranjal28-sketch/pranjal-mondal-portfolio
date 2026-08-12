import { aiInterests, aiPipeline } from "@/config/portfolio";
import { Section, SectionHeading, Chip } from "./primitives";

export function AISection() {
  return (
    <Section id="ai">
      <SectionHeading
        eyebrow="$ explore --ai"
        title="Exploring AI & Machine Learning"
        subtitle="An intermediate-level, actively growing area of interest — learning how data becomes models, and how models become useful software."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass rounded-2xl p-6">
          <h3 className="font-display text-lg font-semibold">What I'm interested in</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {aiInterests.map((i) => (
              <li key={i}>
                <Chip>{i}</Chip>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            I'm building fundamentals rather than claiming expertise: understanding how models are
            trained and evaluated, and how intelligent behaviour is integrated into real products.
          </p>
        </div>

        <div className="glass rounded-2xl p-6">
          <h3 className="font-display text-lg font-semibold">Data → Models → Intelligence → Applications</h3>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2">
            {aiPipeline.map((step, i) => (
              <li
                key={step.label}
                className="card-hover relative rounded-xl border border-border bg-secondary/30 p-4"
              >
                <span className="font-mono text-[11px] text-primary">0{i + 1}</span>
                <p className="mt-1 font-display font-semibold">{step.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>
              </li>
            ))}
          </ol>
          <svg viewBox="0 0 300 20" className="mt-5 h-5 w-full" aria-hidden="true">
            <line
              x1="0"
              y1="10"
              x2="300"
              y2="10"
              stroke="oklch(0.72 0.16 235 / 0.5)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              style={{ animation: "dash-flow 8s linear infinite" }}
            />
            {[20, 110, 200, 285].map((x, i) => (
              <circle
                key={x}
                cx={x}
                cy="10"
                r="4"
                fill="oklch(0.83 0.13 195)"
                style={{ animation: `pulse-soft ${2 + i * 0.3}s ease-in-out infinite` }}
              />
            ))}
          </svg>

          <div className="mt-5 rounded-xl border border-dashed border-border p-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Currently exploring
            </p>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Machine learning fundamentals, generative AI tooling, and applying models to
              data-driven applications. Specific AI/ML projects will be published here.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
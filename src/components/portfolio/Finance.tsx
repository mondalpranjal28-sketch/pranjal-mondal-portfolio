import { financeChain, financeTopics } from "@/config/portfolio";
import { Section, SectionHeading, Chip } from "./primitives";

const spark = "M0,40 L20,34 L40,38 L60,26 L80,30 L100,18 L120,24 L140,12 L160,20 L180,8";

export function Finance() {
  return (
    <Section id="finance">
      <SectionHeading
        eyebrow="$ analyze --macro"
        title="Technology × Data × Economics"
        subtitle="I am interested in understanding how macroeconomic conditions influence financial markets and how data and technology can be used to analyze these relationships."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass rounded-2xl p-6">
          <h3 className="font-display text-lg font-semibold">Transmission chain</h3>
          <ol className="mt-5 space-y-3">
            {financeChain.map((node, i) => (
              <li key={node.label} className="relative">
                <div className="card-hover rounded-xl border border-border bg-secondary/30 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-display font-semibold">{node.label}</p>
                    <span className="font-mono text-[11px] text-primary">node/{i + 1}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{node.detail}</p>
                </div>
                {i < financeChain.length - 1 ? (
                  <span
                    className="mx-auto my-1 block h-4 w-px bg-gradient-to-b from-primary/70 to-transparent"
                    aria-hidden="true"
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-6">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">Illustrative view</h3>
              <span className="font-mono text-[11px] text-muted-foreground">sample shape · not real data</span>
            </div>
            <svg viewBox="0 0 180 48" className="mt-4 h-28 w-full" role="img" aria-label="Illustrative line chart shape used as a decorative representation of market data, not real market data">
              <defs>
                <linearGradient id="fin-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="oklch(0.83 0.13 195)" />
                  <stop offset="100%" stopColor="oklch(0.7 0.15 300)" />
                </linearGradient>
              </defs>
              {[8, 18, 28, 38].map((y) => (
                <line key={y} x1="0" y1={y} x2="180" y2={y} stroke="oklch(1 0 0 / 0.06)" strokeWidth="0.5" />
              ))}
              <path d={spark} fill="none" stroke="url(#fin-grad)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <p className="mt-2 text-xs text-muted-foreground">
              This section reflects an intellectual and research interest. Nothing here is market
              data, a prediction, or financial advice.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold">Areas I follow</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {financeTopics.map((t) => (
                <li key={t}>
                  <Chip>{t}</Chip>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
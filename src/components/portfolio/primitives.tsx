import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className,
  ariaLabel,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28", className)}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mb-12 max-w-3xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-[2.75rem]">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </header>
  );
}

export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("glass rounded-2xl p-6", className)}>{children}</div>
  );
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
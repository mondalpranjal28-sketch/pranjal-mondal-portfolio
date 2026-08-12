import { useEffect, useState } from "react";
import { Menu, X, Download, Command } from "lucide-react";
import { navItems, profile, links } from "@/config/portfolio";
import { cn } from "@/lib/utils";

export function Navbar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b shadow-[0_10px_40px_-30px_black]" : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-8"
      >
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-secondary/60 font-display text-sm font-bold text-gradient">
            {profile.monogram}
          </span>
          <span className="truncate font-display text-sm font-semibold tracking-[0.18em] uppercase">
            {profile.name}
          </span>
        </a>

        <div className="flex items-center gap-1.5">
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onOpenPalette}
            aria-label="Open command palette"
            className="hidden h-10 items-center gap-2 rounded-lg border border-border bg-secondary/40 px-3 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground md:flex"
          >
            <Command className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Ctrl K</span>
          </button>

          <a
            href={links.resume}
            download
            className="hidden h-10 items-center gap-2 rounded-lg px-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-secondary/40 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="glass border-t px-5 pb-6 pt-2 lg:hidden"
      >
        <ul className="flex flex-col">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3.5 text-base text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={links.resume}
          download
          onClick={() => setOpen(false)}
          className="mt-3 flex h-12 items-center justify-center gap-2 rounded-lg text-sm font-semibold text-primary-foreground"
          style={{ backgroundImage: "var(--gradient-brand)" }}
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download Resume
        </a>
      </div>
    </header>
  );
}
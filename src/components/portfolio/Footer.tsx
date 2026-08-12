import { Github, Linkedin, Mail } from "lucide-react";
import { navItems, profile, links, isPlaceholder } from "@/config/portfolio";

const socials = [
  { label: "GitHub", href: links.github, icon: Github },
  { label: "LinkedIn", href: links.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${links.email}`, icon: Mail, raw: links.email },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.2fr_1fr_auto]">
        <div>
          <p className="font-display text-lg font-bold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.headline}</p>
          <p className="mt-3 font-mono text-xs text-muted-foreground">
            Designed &amp; built with curiosity, code, and continuous learning.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex gap-2 md:justify-end">
          {socials.map(({ label, href, icon: Icon, raw }) => {
            const pending = isPlaceholder(raw ?? href);
            return (
              <li key={label}>
                <a
                  href={pending ? undefined : href}
                  aria-label={pending ? `${label} link not configured yet` : label}
                  aria-disabled={pending}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-secondary/40 transition-colors hover:border-primary/50 aria-disabled:opacity-50"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="border-t border-border px-5 py-5 text-center sm:px-8">
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
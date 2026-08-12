import { useEffect } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { links, isPlaceholder } from "@/config/portfolio";

const targets = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Education", href: "#education" },
  { label: "Interests — AI/ML", href: "#ai" },
  { label: "Interests — Finance & Data", href: "#finance" },
  { label: "Contact", href: "#contact" },
];

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const go = (href: string) => {
    onOpenChange(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Jump to a section..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          {targets.map((t) => (
            <CommandItem key={t.href} onSelect={() => go(t.href)}>
              {t.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={() => {
              onOpenChange(false);
              window.open(links.resume, "_blank");
            }}
          >
            Open Resume
          </CommandItem>
          <CommandItem
            disabled={isPlaceholder(links.github)}
            onSelect={() => {
              onOpenChange(false);
              window.open(links.github, "_blank", "noopener");
            }}
          >
            GitHub Profile
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
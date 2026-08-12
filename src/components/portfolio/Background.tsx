import { useEffect, useRef } from "react";

/** Subtle grid + gradient mesh + cursor-following glow. CSS-only motion. */
export function Background() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;
    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = glowRef.current;
        if (el) {
          el.style.opacity = "1";
          el.style.transform = `translate3d(${e.clientX - 260}px, ${e.clientY - 260}px, 0)`;
        }
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 45% at 15% 0%, oklch(0.72 0.16 235 / 0.20), transparent 70%), radial-gradient(55% 45% at 90% 10%, oklch(0.7 0.15 300 / 0.16), transparent 70%), radial-gradient(70% 50% at 50% 110%, oklch(0.83 0.13 195 / 0.10), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 40%, var(--background) 95%)",
        }}
      />
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full opacity-0 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.16 235 / 0.10), transparent 65%)",
        }}
      />
    </div>
  );
}
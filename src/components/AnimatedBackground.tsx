import { useEffect, useRef, memo } from "react";

// Stable pseudo-random particles (no re-render jitter)
const PARTICLES = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: ((i * 37 + 13) % 98) + 1,          // 1–99%
  size: ((i * 7 + 3) % 8) + 3,              // 3–10 px
  duration: ((i * 11 + 9) % 15) + 10,       // 10–25 s
  delay: -(((i * 17 + 5) % 28)),            // stagger offset
  opacity: ((i * 13 + 6) % 6) * 0.05 + 0.08, // 0.08–0.33
  drift: ((i * 19 + 7) % 80) - 40,          // –40 to +40 px
  blur: (i % 3) * 1.5,                       // 0 / 1.5 / 3 px
}));

const AnimatedBackground = memo(() => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const maxScroll = Math.max(
        document.body.scrollHeight - window.innerHeight,
        1
      );
      const ratio = Math.min(window.scrollY / maxScroll, 1);

      // azzurro (top) → blu scuro (bottom)
      const hue   = 196 + ratio * 24;   // 196 → 220
      const sat   = 65  - ratio * 28;   // 65% → 37%
      const light = 26  - ratio * 19;   // 26% → 7%

      if (bgRef.current) {
        bgRef.current.style.background = `hsl(${hue}deg ${sat}% ${light}%)`;
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -10, transition: "background 0.5s ease-out" }}
    >
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={
            {
              left: `${p.left}%`,
              bottom: "-16px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: `hsl(196 85% 82% / ${p.opacity})`,
              boxShadow: `0 0 ${p.size + 4}px hsl(196 80% 72% / ${p.opacity * 0.6})`,
              filter: `blur(${p.blur}px)`,
              animation: `float-up ${p.duration}s ${p.delay}s infinite linear`,
              "--drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
});

AnimatedBackground.displayName = "AnimatedBackground";
export default AnimatedBackground;

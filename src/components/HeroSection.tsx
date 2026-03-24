import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* === BACKGROUND LAYERS === */}

      {/* 1. Subtle dark overlay so text stays readable over the animated bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 70% 40%, hsl(196 60% 12% / 0.45) 0%, transparent 70%),
              radial-gradient(ellipse 60% 80% at 20% 80%, hsl(220 40% 8% / 0.5) 0%, transparent 60%),
              linear-gradient(180deg, hsl(220 25% 5% / 0.3) 0%, transparent 50%, hsl(220 30% 5% / 0.4) 100%)
            `,
          }}
        />
      </div>

      {/* 2. Blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(hsl(196 90% 58% / 0.07) 1px, transparent 1px), linear-gradient(90deg, hsl(196 90% 58% / 0.07) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* 3. Large primary glow top-right */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: "hsl(196 80% 40% / 0.18)" }}
      />

      {/* 4. Secondary glow bottom-left */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: "hsl(210 70% 35% / 0.2)" }}
      />

      {/* 5. Water pulse bottom-center */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-[100px] animate-water-pulse pointer-events-none"
        style={{ background: "hsl(196 90% 55% / 0.12)" }}
      />

      {/* 6. Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* 7. Thin vertical accent line */}
      <div className="absolute left-14 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />

      {/* 8. Floating accent dots */}
      <motion.div
        animate={{ y: [0, -22, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-20 w-2.5 h-2.5 rounded-full hidden md:block"
        style={{ background: "hsl(196 90% 60%)", boxShadow: "0 0 12px hsl(196 90% 60% / 0.8)" }}
      />
      <motion.div
        animate={{ y: [0, 16, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-2/5 right-40 w-1.5 h-1.5 rounded-full hidden md:block"
        style={{ background: "hsl(196 80% 70%)", boxShadow: "0 0 8px hsl(196 80% 70% / 0.6)" }}
      />
      <motion.div
        animate={{ y: [0, -12, 0], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        className="absolute bottom-1/3 right-28 w-1 h-1 rounded-full hidden md:block"
        style={{ background: "hsl(196 90% 65%)" }}
      />

      {/* === CONTENT === */}
      <div className="container relative z-10 px-6 md:px-12 lg:px-24 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-2">
            Nelle infiltrazioni sappiamo
            <br />
            dove l'acqua{" "}
            <span
              className="italic"
              style={{
                color: "var(--text-highlight)",
                textShadow: "0 0 40px hsl(196 90% 62% / 0.4)",
              }}
            >
              esce
            </span>
            .
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="font-display text-3xl md:text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-muted-foreground mt-4"
          >
            Ma non sappiamo mai
            <br />
            da dove{" "}
            <span
              className="italic"
              style={{
                color: "var(--text-highlight)",
                textShadow: "0 0 40px hsl(196 90% 62% / 0.35)",
              }}
            >
              entra
            </span>
            .
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
          className="mt-16 max-w-xl"
        >
          <div className="w-16 h-px mb-6" style={{ background: "hsl(196 90% 58% / 0.7)" }} />
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Da oltre{" "}
            <span className="text-foreground font-semibold">40 anni</span> affianco
            condomini e amministratori nei casi più complessi e conflittuali.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: "easeOut" }}
            className="mt-10"
          >
            <a
              href="#candidatura"
              className="inline-block font-body text-sm font-semibold px-10 py-4 rounded-lg text-center transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, hsl(196 90% 50%) 0%, hsl(210 80% 55%) 100%)",
                color: "hsl(220 20% 8%)",
                boxShadow: "0 4px 24px hsl(196 90% 55% / 0.4), 0 0 0 1px hsl(196 90% 70% / 0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 32px hsl(196 90% 55% / 0.5), 0 0 0 1px hsl(196 90% 70% / 0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 24px hsl(196 90% 55% / 0.4), 0 0 0 1px hsl(196 90% 70% / 0.2)";
              }}
            >
              Richiedi Supporto
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Subtle water glow effect */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] animate-water-pulse pointer-events-none"
        style={{ background: "hsl(var(--primary) / 0.08)" }}
      />

      {/* Thin accent line */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />

      <div className="container relative z-10 px-6 md:px-12 lg:px-24 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Main statement */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-2">
            Nelle infiltrazioni sappiamo
            <br />
            dove l'acqua{" "}
            <span className="italic" style={{ color: "var(--text-highlight)" }}>
              esce
            </span>
            .
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-display text-3xl md:text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-muted-foreground mt-4"
          >
            Ma non sappiamo mai
            <br />
            da dove{" "}
            <span className="italic text-foreground" style={{ color: "var(--text-highlight)" }}>
              entra
            </span>
            .
          </motion.p>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-16 max-w-xl"
        >
          <div className="w-16 h-px bg-primary/60 mb-6" />
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Da oltre <span className="text-foreground font-medium">40 anni</span> affianco
            condomini e amministratori nei casi più complessi e conflittuali.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

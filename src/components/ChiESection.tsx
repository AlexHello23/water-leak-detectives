import { motion } from "framer-motion";

const timeline = [
  {
    year: "1985",
    text: "Ingresso nel mondo dell'edilizia. Inizia un percorso che nel tempo diventerà specializzazione.",
    color: "hsl(200 85% 55%)",
  },
  {
    year: "1992",
    text: "Fondazione dell'impresa. L'attività imprenditoriale prende forma nel settore delle costruzioni e del risanamento.",
    color: "hsl(210 80% 60%)",
  },
  {
    year: "2000",
    text: "Migliaia di sopralluoghi su tutto il territorio. I casi si fanno sempre più complessi e conflittuali.",
    color: "hsl(220 75% 65%)",
  },
  {
    year: "Oggi",
    text: "Specializzazione esclusiva sulle infiltrazioni non risolte e sulla mediazione tecnica tra condomini e parti in conflitto.",
    color: "hsl(200 85% 55%)",
  },
];

const ChiESection = () => {
  return (
    <section id="chi-e" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=60&fit=crop")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.07,
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, hsl(220 18% 10% / 0.97) 0%, hsl(220 18% 10% / 0.85) 60%, hsl(220 18% 10% / 0.7) 100%)",
        }}
      />
      {/* Ambient glow top-right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: "hsl(196 80% 55% / 0.07)" }}
      />

      <div className="container px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-body text-sm text-primary uppercase tracking-widest font-medium">
            Chi è
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight text-foreground">
            Stefano Faita
          </h2>
          <div className="w-12 h-px bg-primary/50 mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />
            <div className="space-y-10 pl-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative group"
                >
                  <div
                    className="absolute -left-10 top-1 w-3 h-3 rounded-full border-2 bg-background transition-all duration-300 group-hover:scale-125"
                    style={{ borderColor: item.color, boxShadow: `0 0 8px ${item.color}40` }}
                  />
                  <span
                    className="font-body text-xs font-semibold tracking-widest uppercase"
                    style={{ color: item.color }}
                  >
                    {item.year}
                  </span>
                  <p className="font-body text-base text-muted-foreground mt-1 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Description + photo placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Photo placeholder */}
            <div className="w-full aspect-[4/3] rounded-lg border border-border bg-card flex items-center justify-center overflow-hidden relative mb-2">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, hsl(200 85% 55% / 0.3) 0%, transparent 60%)",
                }}
              />
              <div className="text-center relative z-10">
                <div className="w-16 h-16 rounded-full border-2 border-primary/30 mx-auto mb-3 flex items-center justify-center bg-primary/5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="hsl(200 85% 55%)" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <p className="font-body text-xs text-muted-foreground">Foto di Stefano Faita</p>
                <p className="font-body text-xs text-muted-foreground/50 mt-1">Sul campo, in sopralluogo</p>
              </div>
            </div>

            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Non un tecnico da ufficio. Un professionista che ha costruito la propria competenza sul campo, caso dopo caso, condominio dopo condominio.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Centinaia di casi complessi, spesso irrisolti dopo anni di interventi falliti. La specializzazione sulle infiltrazioni non risolte non è una scelta di marketing: è il risultato naturale di chi non si è mai accontentato della risposta facile.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Nel tempo ha sviluppato un approccio che unisce lettura tecnica avanzata, esperienza sul campo e capacità di mediazione tra parti in conflitto. Una combinazione rara.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChiESection;

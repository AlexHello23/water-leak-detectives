import { motion } from "framer-motion";

const phases = [
  {
    number: "01",
    title: "Ascolto e analisi del contesto",
    items: [
      "Chi sono i soggetti coinvolti e qual è il loro rapporto",
      "Quali attriti esistono tra le parti",
      "Cosa è già stato tentato in precedenza e con quali risultati",
    ],
  },
  {
    number: "02",
    title: "Lettura tecnica avanzata",
    items: [
      "Esperienza accumulata su centinaia di casi reali",
      "Intuizione tecnica sviluppata nel tempo sul campo",
      "Strumentazione specializzata: termografie, igrometri, analisi dell'umidità",
    ],
  },
  {
    number: "03",
    title: "Strategia di soluzione",
    items: [
      "Tecnicamente fondata e verificabile da terzi",
      "Sostenibile per tutti i soggetti coinvolti",
      "Spiegata in modo comprensibile anche ai non tecnici",
    ],
  },
  {
    number: "04",
    title: "Mediazione tecnica",
    items: [
      "Riduzione del conflitto tra le parti",
      "Comunicazione chiara, documentata, senza ambiguità",
      "Responsabilità definite con precisione",
    ],
  },
];

const MetodoSection = () => {
  return (
    <section id="il-metodo" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: "hsl(196 80% 40% / 0.06)" }}
      />

      <div className="container px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-body text-sm text-primary uppercase tracking-widest font-medium">
            Il metodo
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight text-foreground">
            Il Metodo Faita
          </h2>
          <div className="w-12 h-px bg-primary/50 mt-6" />
          <p className="font-body text-base text-muted-foreground mt-6 leading-relaxed">
            Non è una formula. È un approccio costruito su decenni di casi reali, dove la tecnica e la comprensione umana della situazione sono inseparabili.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden mb-10">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background p-8 md:p-10 hover:bg-card/60 transition-colors group"
            >
              <span className="font-display text-5xl font-bold block mb-4 leading-none"
                style={{ color: `hsl(${200 - i * 8} 85% ${55 + i * 3}% / 0.7)` }}>
                {phase.number}
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mb-5">
                {phase.title}
              </h3>
              <ul className="space-y-2.5">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0 mt-2" />
                    <span className="font-body text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Differentiator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center p-7 md:p-10 rounded border border-primary/20 bg-primary/5"
        >
          <div className="flex-shrink-0">
            <p className="font-display text-lg md:text-xl text-muted-foreground font-medium">
              Stefano non fa il perito di parte.
            </p>
            <p className="font-display text-lg md:text-xl text-primary font-bold mt-1">
              Stefano fa chiarezza.
            </p>
          </div>
          <div className="w-px h-12 bg-border hidden md:block flex-shrink-0" />
          <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm">
            L'obiettivo non è vincere una causa per conto di qualcuno. È trovare la soluzione più giusta per tutti i soggetti coinvolti, in modo sostenibile e duraturo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MetodoSection;

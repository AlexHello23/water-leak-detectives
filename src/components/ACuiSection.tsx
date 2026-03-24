import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const yesItems = [
  "Problemi complessi che si trascinano da mesi o anni",
  "Infiltrazioni mai risolte dopo più interventi",
  "Contenziosi aperti tra condomini o con i proprietari del piano superiore",
  "Amministratori bloccati da situazioni conflittuali senza via d'uscita",
  "Casi in cui nessuno si prende la responsabilità del problema",
];

const noItems = [
  "Semplici macchie di umidità senza storia né complessità",
  "Richieste di preventivo rapido senza intenzione di analisi",
  "Casi già definiti legalmente con sentenza passata in giudicato",
];

const ACuiSection = () => {
  return (
    <section id="per-chi" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "hsl(215 22% 10% / 0.82)" }}>
      <div className="container px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-body text-sm text-primary uppercase tracking-widest font-medium">
            A chi è utile
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight text-foreground">
            Questa consulenza
            <br />
            fa per te?
          </h2>
          <div className="w-12 h-px bg-primary/50 mt-6" />
          <p className="font-body text-base text-muted-foreground mt-6 leading-relaxed">
            Essere selettivi non è un limite. È una tutela per chi ha davvero bisogno di una risposta competente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
          {/* YES */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-lg font-bold text-foreground mb-7">
              Sì, può essere utile se:
            </h3>
            <div className="space-y-4">
              {yesItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={11} className="text-primary" />
                  </div>
                  <span className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* NO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-lg font-bold text-foreground mb-7">
              Non è la soluzione giusta se:
            </h3>
            <div className="space-y-4">
              {noItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={11} className="text-muted-foreground" />
                  </div>
                  <span className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 rounded border border-border bg-card">
              <p className="font-body text-xs text-muted-foreground leading-relaxed italic">
                Questa chiarezza non riduce il valore della consulenza. Lo aumenta. Stefano lavora solo sui casi dove può davvero fare la differenza.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ACuiSection;

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const guarantees = [
  "Preventivo sempre prima di qualsiasi incarico",
  "Nessun impegno automatico dopo la candidatura",
  "Il costo dipende da distanza, complessità e tempo richiesto",
  "Nessuna sorpresa a fine lavoro",
];

const CostiSection = () => {
  return (
    <section id="costi" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "hsl(215 22% 10% / 0.82)" }}>
      <div className="container px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-sm text-primary uppercase tracking-widest font-medium">
              Costi e trasparenza
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight text-foreground">
              Nessuna sorpresa.
              <br />
              Mai.
            </h2>
            <div className="w-12 h-px bg-primary/50 mt-6 mb-8" />
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
              Ogni consulenza è diversa. Non esistono tariffe standard perché non esistono casi standard.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Il costo dipende dalla distanza dell'immobile, dalla complessità del caso e dal tempo necessario. Viene sempre concordato in anticipo, per iscritto, prima di qualsiasi impegno.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4"
          >
            {guarantees.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded border border-border bg-card hover:border-primary/30 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={13} className="text-primary" />
                </div>
                <span className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 p-6 rounded border border-primary/20 bg-primary/5"
            >
              <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                La trasparenza sui costi non riduce l'autorevolezza della consulenza. La rafforza. Chi sa esattamente cosa sta comprando può scegliere con consapevolezza.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CostiSection;

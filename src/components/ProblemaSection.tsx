import { motion } from "framer-motion";
import { Waves, ArrowRightLeft, AlertTriangle, Wrench } from "lucide-react";

const concepts = [
  {
    icon: Waves,
    title: "L'acqua non segue logiche lineari",
    body: "Un'infiltrazione può risalire, scorrere in orizzontale, attraversare più solai prima di manifestarsi. La fisica dell'acqua nelle strutture edilizie è molto più complessa di quanto sembri.",
  },
  {
    icon: ArrowRightLeft,
    title: "Punto di uscita ≠ punto di ingresso",
    body: "Questa è la regola fondamentale che troppo spesso viene ignorata. Intervenire dove si vede la macchia senza trovare la vera origine equivale a tamponare senza risolvere.",
  },
  {
    icon: AlertTriangle,
    title: "Gli errori tecnici generano liti infinite",
    body: "Diagnosi sbagliate producono interventi sbagliati. E ogni intervento fallito alimenta conflitti tra condomini, incomprensioni tra le parti, e costi che si moltiplicano nel tempo.",
  },
  {
    icon: Wrench,
    title: "Le soluzioni fai-da-te aggravano il problema",
    body: "Sigillanti, cartongessi, impermeabilizzazioni applicate alla cieca coprono il sintomo e nascondono la causa. Spesso rendono la diagnosi successiva molto più difficile e costosa.",
  },
];

const ProblemaSection = () => {
  return (
    <section id="il-problema" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "hsl(215 22% 10% / 0.82)" }}>
      {/* Background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=60&fit=crop")`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.06,
        }}
      />
      {/* Decorative glow */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "hsl(196 85% 55% / 0.08)" }}
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
            Il problema
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight text-foreground">
            Perché le infiltrazioni
            <br />
            sono così difficili
          </h2>
          <div className="w-12 h-px bg-primary/50 mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {concepts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 md:p-8 rounded border border-border bg-card hover:border-primary/40 hover:bg-card/80 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key phrase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="pl-6 border-l-2 border-primary/50">
            <p className="font-display text-xl md:text-2xl text-foreground font-medium italic leading-relaxed">
              "Quando il problema non viene risolto, il danno non è solo tecnico.
              <br className="hidden md:block" /> Diventa umano, economico, legale."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemaSection;

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const errors = [
  {
    title: "Intervenire dove si vede la macchia",
    description:
      "È l'errore più diffuso. La macchia è il sintomo, non la causa. L'acqua percorre spesso decine di metri prima di manifestarsi. Impermeabilizzare o tamponare il punto visibile senza trovare l'origine non risolve nulla — e spesso maschera il problema rendendo la diagnosi successiva più difficile.",
    consequence: "Interventi ripetuti, costi moltiplicati, problema invariato.",
  },
  {
    title: "Affidarsi a chi esegue i lavori per la diagnosi",
    description:
      "Chi deve fare i lavori ha un interesse nel trovare una causa che giustifichi un intervento ampio. Non è necessariamente malafede: è un conflitto di interesse strutturale. La diagnosi deve essere separata dall'esecuzione.",
    consequence: "Lavori inutili, spese non necessarie, false certezze.",
  },
  {
    title: "Cercare il colpevole prima di trovare la causa",
    description:
      "In ambito condominiale, la prima reazione è quasi sempre accusare il vicino del piano superiore. Questa logica blocca la ricerca della vera causa e avvelena i rapporti tra condomini, a volte per anni.",
    consequence: "Contenziosi legali, rapporti compromessi, problema irrisolto.",
  },
  {
    title: "Usare sigillanti e prodotti impermeabilizzanti senza diagnosi",
    description:
      "I sigillanti applicati senza diagnosi coprono l'umidità superficialmente. L'acqua trova un altro percorso, spesso più profondo e dannoso. In alcuni casi crea bolle di pressione che accelerano il degrado strutturale.",
    consequence: "Aggravamento del danno, degrado strutturale nascosto.",
  },
  {
    title: "Aspettare che il problema si risolva da solo",
    description:
      "Le infiltrazioni non spariscono. Si stabilizzano in periodi asciutti e peggiorano nelle stagioni umide. Ogni ciclo gelo-disgelo, ogni stagione di piogge intensa, approfondisce i percorsi dell'acqua e deteriora la struttura.",
    consequence: "Danni strutturali crescenti, costi di intervento che aumentano nel tempo.",
  },
  {
    title: "Non documentare la storia del problema",
    description:
      "Quando finalmente si chiama un esperto, spesso non si ricorda quando è comparso il problema, cosa è stato fatto, da chi, con quali risultati. Questa mancanza di documentazione rallenta enormemente la diagnosi e può rendere impossibile stabilire le responsabilità.",
    consequence: "Diagnosi più lenta, difficoltà legali, costi aggiuntivi.",
  },
];

const ErroriComuni = () => {
  return (
    <PageLayout>
      <div className="py-20 md:py-28">
        <div className="container px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mb-16"
          >
            <span className="font-body text-sm text-primary uppercase tracking-widest font-medium">
              Approfondimenti
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight text-foreground">
              Errori più comuni
            </h1>
            <div className="w-12 h-px bg-primary/50 mt-6 mb-6" />
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Non per colpevolizzare, ma per capire. La maggior parte degli errori che trasformano un problema risolvibile in un contenzioso decennale segue schemi precisi e prevedibili.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {errors.map((error, i) => (
              <motion.div
                key={error.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="p-7 rounded border border-border bg-card hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle size={18} className="text-primary/60 flex-shrink-0 mt-0.5" />
                  <h2 className="font-display text-lg font-bold text-foreground leading-snug">
                    {error.title}
                  </h2>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                  {error.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-widest font-medium mb-1">
                    Conseguenza tipica
                  </p>
                  <p className="font-body text-sm text-foreground/70 italic">
                    {error.consequence}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ErroriComuni;

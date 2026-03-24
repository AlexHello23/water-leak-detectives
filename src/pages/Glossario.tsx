import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const terms = [
  {
    term: "Infiltrazione",
    definition:
      "Penetrazione d'acqua all'interno di una struttura edilizia attraverso difetti o discontinuità nel manto impermeabile, nella muratura o nelle giunzioni tra elementi costruttivi. Non va confusa con la condensazione, che è un fenomeno di origine diversa.",
  },
  {
    term: "Punto di ingresso",
    definition:
      "Il punto o l'area da cui l'acqua penetra effettivamente nella struttura. Può essere molto distante dal punto di uscita, che è invece il luogo dove il danno diventa visibile. Individuare il punto di ingresso è l'obiettivo principale della diagnosi.",
  },
  {
    term: "Punto di uscita",
    definition:
      "Il luogo dove l'infiltrazione si manifesta visivamente: macchia, efflorescenza, distacco dell'intonaco. Non è necessariamente collegato alla posizione del punto di ingresso.",
  },
  {
    term: "Termografia",
    definition:
      "Tecnica diagnostica che utilizza una telecamera a infrarossi per rilevare le variazioni di temperatura superficiale di una struttura. Permette di individuare zone umide o percorsi d'acqua non visibili a occhio nudo, senza interventi distruttivi.",
  },
  {
    term: "Igrometro",
    definition:
      "Strumento di misura dell'umidità. In ambito edilizio viene usato per misurare il contenuto d'acqua di murature, solai e altri elementi costruttivi. Esistono versioni a contatto e sonde invasive per misurazioni in profondità.",
  },
  {
    term: "Condensazione interstiziale",
    definition:
      "Formazione di condensa all'interno del pacchetto di una parete o di una copertura, in corrispondenza dell'isoterma di rugiada. Può produrre danni simili a quelli di un'infiltrazione ma ha cause e soluzioni completamente diverse.",
  },
  {
    term: "Soletta",
    definition:
      "Elemento strutturale orizzontale in calcestruzzo armato che separa due piani di un edificio. Le infiltrazioni che attraversano le solette sono spesso complesse da diagnosticare perché l'acqua può percorrere l'armatura metallica per decine di metri prima di manifestarsi.",
  },
  {
    term: "Ponte termico",
    definition:
      "Zona dell'involucro edilizio caratterizzata da una conduttanza termica più elevata rispetto alle zone circostanti. In presenza di umidità interna elevata, i ponti termici sono aree preferenziali per la formazione di condensa superficiale e muffe.",
  },
  {
    term: "Manto impermeabile",
    definition:
      "Strato o insieme di strati applicati su una superficie per impedire la penetrazione dell'acqua. Può essere realizzato con membrane bituminose, guaine sintetiche, malte impermeabilizzanti o altri materiali. Il degrado del manto è una delle cause più frequenti di infiltrazione nelle coperture piane.",
  },
  {
    term: "Risalita capillare",
    definition:
      "Fenomeno per cui l'acqua presente nel terreno risale attraverso i pori e i capillari dei materiali da costruzione (mattoni, calcestruzzo, pietra) per effetto della tensione superficiale. Si manifesta tipicamente come umidità nelle murature delle fondazioni e dei piani terra.",
  },
  {
    term: "Colonna di scarico",
    definition:
      "Tubazione verticale che raccoglie le acque reflue di più piani di un edificio. Le perdite nelle colonne di scarico sono di competenza condominiale e vengono spesso confuse — con conseguenti contenziosi — per infiltrazioni provenienti dagli appartamenti sovrastanti.",
  },
  {
    term: "Mediazione tecnica",
    definition:
      "Attività professionale che affianca la mediazione legale o la sostituisce nelle fasi iniziali di una disputa condominiale. Non mira a stabilire un vincitore e un perdente, ma a definire con precisione le responsabilità tecniche, riducendo il conflitto e rendendo spesso inutile il ricorso al tribunale.",
  },
];

const letters = [...new Set(terms.map((t) => t.term[0]))].sort();

const Glossario = () => {
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
              Glossario tecnico
            </h1>
            <div className="w-12 h-px bg-primary/50 mt-6 mb-6" />
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              I termini tecnici che compaiono più spesso nelle perizie, nelle relazioni e nelle discussioni condominiali. Spiegati senza gergo, per chi non è del settore.
            </p>
          </motion.div>

          {/* Index */}
          <div className="flex flex-wrap gap-2 mb-12">
            {letters.map((l) => (
              <a
                key={l}
                href={`#letter-${l}`}
                className="font-body text-sm w-8 h-8 flex items-center justify-center rounded border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="max-w-3xl space-y-0 divide-y divide-border">
            {terms.map((item, i) => (
              <motion.div
                key={item.term}
                id={`letter-${item.term[0]}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="py-7"
              >
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {item.term}
                </h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.definition}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Glossario;

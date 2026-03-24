import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqGroups = [
  {
    group: "Sulla consulenza",
    items: [
      {
        q: "Cos'è esattamente una consulenza tecnica sulle infiltrazioni?",
        a: "È un'analisi professionale volta a identificare l'origine reale di un'infiltrazione, distinguendo il punto di uscita (dove appare il danno) dal punto di ingresso (dove l'acqua entra effettivamente). Include sopralluogo, strumentazione diagnostica, relazione scritta e, se necessario, supporto nella comunicazione con le parti coinvolte.",
      },
      {
        q: "Qual è la differenza tra questa consulenza e una perizia di parte?",
        a: "Un perito di parte rappresenta gli interessi di chi lo incarica in una disputa legale. Stefano Faita non opera in questa modalità. Il suo obiettivo è trovare la soluzione tecnica più corretta per tutti i soggetti coinvolti. Questo approccio produce risultati più duraturi e riduce i conflitti invece di alimentarli.",
      },
      {
        q: "La consulenza include anche l'esecuzione dei lavori?",
        a: "No. La diagnosi e l'esecuzione sono deliberatamente separate. Stefano fornisce la diagnosi, la relazione tecnica e indica la soluzione corretta. L'esecuzione viene affidata a ditte di fiducia del committente o su indicazione. Questa separazione garantisce obiettività e assenza di conflitti di interesse.",
      },
      {
        q: "In quanto tempo si ottiene una risposta alla candidatura?",
        a: "Generalmente entro 3–5 giorni lavorativi. Stefano legge ogni candidatura personalmente e risponde con una valutazione diretta: se il caso rientra nel perimetro di intervento, se sono necessari chiarimenti, o se — onestamente — non è la tipologia di caso su cui può essere più utile.",
      },
    ],
  },
  {
    group: "Per gli amministratori",
    items: [
      {
        q: "Come può aiutarmi questa consulenza a sbloccare un'assemblea?",
        a: "Quando un'assemblea è bloccata su un problema di infiltrazione, il nodo è quasi sempre la mancanza di una diagnosi autorevole e condivisa. Una relazione tecnica chiara, spiegata in modo comprensibile, toglie il terreno al conflitto e permette all'assemblea di deliberare su basi oggettive.",
      },
      {
        q: "Posso richiedere una consulenza per un caso già in mano a un legale?",
        a: "Dipende dalla fase. Se il contenzioso legale è ancora aperto e la causa tecnica non è definitivamente accertata, una consulenza tecnica indipendente può essere molto utile — anche per ridefinire le responsabilità. Se c'è già una sentenza passata in giudicato, invece, lo spazio d'intervento è molto limitato.",
      },
      {
        q: "È possibile che Stefano partecipi a un'assemblea condominiale?",
        a: "Sì, in determinati casi. La presenza in assemblea per spiegare la diagnosi e rispondere alle domande dei condomini è uno degli strumenti più efficaci per sbloccare situazioni conflittuali. Viene valutata caso per caso.",
      },
    ],
  },
  {
    group: "Aspetti pratici",
    items: [
      {
        q: "In quali zone opera Stefano Faita?",
        a: "Principalmente nel nord Italia, con possibilità di intervento su tutto il territorio nazionale per casi di particolare complessità. La distanza incide sul costo del sopralluogo, che viene sempre comunicato nel preventivo.",
      },
      {
        q: "Quali documenti è utile avere prima del sopralluogo?",
        a: "Tutto ciò che documenta la storia del problema: foto datate, relazioni di ditte precedenti, preventivi, atti assembleari, comunicazioni tra condomini. Non è obbligatorio averli tutti, ma più documentazione è disponibile, più rapida e precisa sarà la diagnosi.",
      },
      {
        q: "Il sopralluogo è sufficiente o servono più visite?",
        a: "Dipende dalla complessità. Molti casi si risolvono in un unico sopralluogo con strumentazione adeguata. Alcuni casi richiedono più uscite, ad esempio per verificare in condizioni meteorologiche diverse o dopo aver eseguito prove di tenuta. Questo viene sempre comunicato in anticipo.",
      },
    ],
  },
];

const FAQ = () => {
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
              Domande frequenti
            </h1>
            <div className="w-12 h-px bg-primary/50 mt-6 mb-6" />
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Le domande che arrivano più spesso da condomini e amministratori. Risposte dirette, senza giri di parole.
            </p>
          </motion.div>

          <div className="max-w-3xl space-y-12">
            {faqGroups.map((group, gi) => (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: gi * 0.1 }}
              >
                <h2 className="font-display text-xl font-bold text-foreground mb-5">
                  {group.group}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {group.items.map((item, ii) => (
                    <AccordionItem
                      key={ii}
                      value={`${gi}-${ii}`}
                      className="border border-border rounded px-5 bg-card data-[state=open]:border-primary/30"
                    >
                      <AccordionTrigger className="font-body text-sm font-medium text-foreground text-left py-4 hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-4">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQ;

import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const cases = [
  {
    id: "01",
    title: "Infiltrazione dal tetto: tre anni, quattro ditte, zero risultati",
    context:
      "Condominio di 12 unità. Infiltrazione nel corridoio del quinto piano segnalata per la prima volta nell'autunno del 2020. Nel corso di tre anni erano stati effettuati quattro interventi diversi — rifacimento del manto, sigillatura dei lucernari, trattamento delle facciate — senza alcun miglioramento.",
    problem:
      "Ogni ditta aveva identificato la causa nel proprio ambito d'intervento. Nessuno aveva guardato il quadro complessivo. Il punto d'ingresso reale era una discontinuità nella soletta di copertura, non rilevabile senza strumentazione termografica.",
    outcome:
      "Identificata la vera origine, concordato con l'assemblea un intervento circoscritto. Il problema è stato risolto con un quinto della spesa complessiva già sostenuta inutilmente.",
    tags: ["Tetto", "Termografia", "Condominio"],
  },
  {
    id: "02",
    title: "Contenzioso tra vicini: l'acqua veniva dal piano di sopra... o no?",
    context:
      "Due famiglie ai piani 3 e 4. Il proprietario del terzo piano lamentava macchie sul soffitto del bagno da oltre un anno. Il proprietario del quarto piano aveva già rifatto l'impermeabilizzazione del proprio bagno senza risultati. La situazione era degenerata in una disputa legale.",
    problem:
      "L'acqua non proveniva dal bagno superiore. La causa era una perdita nella colonna di scarico condominiale, tecnicamente di competenza del condominio e non del singolo proprietario. Entrambe le famiglie stavano sostenendo costi legali per una responsabilità che non apparteneva a nessuno dei due.",
    outcome:
      "Redatta una relazione tecnica che ha ridefinito la responsabilità. Il contenzioso legale si è chiuso in poche settimane. L'intervento sulla colonna ha risolto il problema definitivamente.",
    tags: ["Contenzioso", "Colonna di scarico", "Responsabilità"],
  },
  {
    id: "03",
    title: "Amministratore bloccato: l'assemblea non riusciva a votare",
    context:
      "Condominio di 24 unità. Un'infiltrazione in garage interessava tre box di proprietari diversi. L'assemblea si era riunita quattro volte senza riuscire a deliberare: ogni proprietario indicava una causa diversa, nessuno voleva pagare, l'amministratore non aveva strumenti per sbloccare la situazione.",
    problem:
      "Il problema tecnico era reale ma non complesso. Il problema principale era umano: senza una diagnosi autorevole e condivisa, nessuno si fidava di nessuno.",
    outcome:
      "Effettuato il sopralluogo in presenza dell'assemblea. Spiegata la causa in modo comprensibile a tutti. La quinta assemblea ha deliberato all'unanimità. I lavori completati nel mese successivo.",
    tags: ["Garage", "Mediazione", "Assemblea"],
  },
  {
    id: "04",
    title: "Infiltrazione ciclica: compariva solo in inverno",
    context:
      "Villa bifamiliare. Le macchie apparivano regolarmente tra novembre e febbraio per poi scomparire in primavera. Due sopralluoghi in estate non avevano rilevato nulla di anomalo. Il proprietario era convinto di dover rifare l'intero tetto.",
    problem:
      "Il problema era legato alla condensazione interstiziale, non a un'infiltrazione d'acqua dall'esterno. La causa era un'insufficiente ventilazione del pacchetto di copertura combinata con uno strato isolante degradato.",
    outcome:
      "Evitato un intervento di rifacimento totale del tetto del valore di circa 40.000 euro. La soluzione corretta ha richiesto un intervento localizzato di risanamento della stratigrafia.",
    tags: ["Stagionale", "Condensazione", "Isolamento"],
  },
];

const CasiTipici = () => {
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
              Casi tipici
            </h1>
            <div className="w-12 h-px bg-primary/50 mt-6 mb-6" />
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Casi reali, rielaborati in forma anonima. Non per impressionare, ma per far capire cosa significa davvero affrontare un'infiltrazione complessa.
            </p>
          </motion.div>

          <div className="space-y-8">
            {cases.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-7 md:p-10 rounded border border-border bg-card hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4 mb-5">
                  <span className="font-display text-3xl font-bold text-primary/20 flex-shrink-0 leading-none">
                    {c.id}
                  </span>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground leading-snug">
                    {c.title}
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="font-body text-xs text-primary uppercase tracking-widest font-medium mb-2">
                      Contesto
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {c.context}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-xs text-primary uppercase tracking-widest font-medium mb-2">
                      Il vero problema
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {c.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-xs text-primary uppercase tracking-widest font-medium mb-2">
                      Esito
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {c.outcome}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CasiTipici;

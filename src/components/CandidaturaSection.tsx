import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  nome: z.string().min(2, "Inserisci il tuo nome"),
  ruolo: z.string().min(2, "Specifica il tuo ruolo (es. condomino, amministratore)"),
  indirizzo: z.string().min(5, "Inserisci l'indirizzo dell'immobile"),
  durata: z.string().min(2, "Indica da quanto tempo esiste il problema"),
  tentativi: z.string().min(10, "Descrivi brevemente i tentativi già effettuati"),
  documentazione: z.string().min(5, "Descrivi la documentazione che hai a disposizione"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  note: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const CandidaturaSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: "",
      ruolo: "",
      indirizzo: "",
      durata: "",
      tentativi: "",
      documentazione: "",
      email: "",
      note: "",
    },
  });

  const onSubmit = (_data: FormData) => {
    setSubmitted(true);
  };

  return (
    <section id="candidatura" className="py-24 md:py-32">
      <div className="container px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-sm text-primary uppercase tracking-widest font-medium">
              Accesso alla consulenza
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight text-foreground">
              La candidatura
            </h2>
            <div className="w-12 h-px bg-primary/50 mt-6 mb-8" />
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
              Non è un ostacolo. È una tutela per entrambi. Permette di capire se il caso è realmente affrontabile e se la consulenza può davvero essere utile nella tua situazione.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
              Dopo la compilazione, Stefano valuterà la richiesta personalmente. Potrà chiedere chiarimenti, accettare il caso, o — se non rientra nel suo perimetro di intervento — declinare fornendo indicazioni utili su dove rivolgersi.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Nessun impegno automatico. Nessuna sorpresa.
            </p>

            <div className="mt-10 space-y-3">
              {[
                "Risposta personale entro 3–5 giorni lavorativi",
                "Valutazione riservata e senza impegno",
                "Se il caso non è adatto, riceverai indicazioni chiare",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <span className="font-body text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {!submitted ? (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-body text-sm text-foreground">
                            Nome e cognome
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Mario Rossi"
                              {...field}
                              className="bg-card border-border"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="ruolo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-body text-sm text-foreground">
                            Ruolo
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Condomino, Amministratore…"
                              {...field}
                              className="bg-card border-border"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="indirizzo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-sm text-foreground">
                          Indirizzo dell'immobile
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Via Roma 1, Milano"
                            {...field}
                            className="bg-card border-border"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="durata"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-sm text-foreground">
                          Da quanto tempo esiste il problema?
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="es. 2 anni, da ottobre 2023…"
                            {...field}
                            className="bg-card border-border"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="tentativi"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-sm text-foreground">
                          Tentativi già effettuati
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Descrivi gli interventi già tentati, le ditte coinvolte, i risultati ottenuti…"
                            rows={3}
                            {...field}
                            className="bg-card border-border resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="documentazione"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-sm text-foreground">
                          Documentazione disponibile
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Foto, relazioni tecniche, atti, preventivi… descrivi cosa hai a disposizione"
                            rows={3}
                            {...field}
                            className="bg-card border-border resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-sm text-foreground">
                          Email di contatto
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="mario@esempio.it"
                            {...field}
                            className="bg-card border-border"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-sm text-foreground">
                          Note aggiuntive{" "}
                          <span className="text-muted-foreground font-normal">(opzionale)</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Qualsiasi altra informazione utile…"
                            rows={2}
                            {...field}
                            className="bg-card border-border resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full sm:w-auto font-body font-medium px-8"
                    >
                      Invia la candidatura
                    </Button>
                    <p className="font-body text-xs text-muted-foreground mt-3 leading-relaxed">
                      I dati sono trattati con riservatezza e usati esclusivamente per valutare la candidatura.
                    </p>
                  </div>
                </form>
              </Form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="p-10 rounded border border-primary/20 bg-primary/5 text-center"
              >
                <CheckCircle2 size={40} className="text-primary mx-auto mb-5" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  Candidatura ricevuta
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  Stefano valuterà la tua richiesta personalmente e ti risponderà via email entro 3–5 giorni lavorativi.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CandidaturaSection;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container px-6 md:px-12 lg:px-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="lg:col-span-2">
            <p className="font-display text-lg font-bold text-foreground mb-3">Stefano Faita</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              Specialista in infiltrazioni non risolte e mediazione tecnica condominiale. Da oltre 40 anni sul campo.
            </p>
          </div>

          <div>
            <p className="font-body text-xs text-muted-foreground uppercase tracking-widest font-medium mb-4">
              Sezioni
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Chi è", href: "#chi-e" },
                { label: "Il Problema", href: "#il-problema" },
                { label: "Il Metodo", href: "#il-metodo" },
                { label: "Per chi", href: "#per-chi" },
                { label: "Costi", href: "#costi" },
                { label: "Candidatura", href: "#candidatura" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs text-muted-foreground uppercase tracking-widest font-medium mb-4">
              Approfondimenti
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Casi Tipici", href: "/casi-tipici" },
                { label: "Errori Comuni", href: "/errori-comuni" },
                { label: "FAQ", href: "/faq" },
                { label: "Glossario", href: "/glossario" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-border mb-6" />
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Stefano Faita. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

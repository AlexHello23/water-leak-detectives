import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navSections = [
  { label: "Chi è", href: "#chi-e" },
  { label: "Il Problema", href: "#il-problema" },
  { label: "Il Metodo", href: "#il-metodo" },
  { label: "Per chi", href: "#per-chi" },
  { label: "Costi", href: "#costi" },
];

const navPages = [
  { label: "Casi Tipici", href: "/casi-tipici" },
  { label: "Errori Comuni", href: "/errori-comuni" },
  { label: "FAQ", href: "/faq" },
  { label: "Glossario", href: "/glossario" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileApprofOpen, setMobileApprofOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Stefano Faita
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navSections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="w-px h-4 bg-border" />

          {/* Approfondimenti dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Approfondimenti
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 w-44 bg-background/98 backdrop-blur-sm border border-border rounded-lg shadow-xl overflow-hidden"
                >
                  {navPages.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block font-body text-sm text-muted-foreground hover:text-foreground hover:bg-card px-4 py-2.5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#candidatura"
            className="font-body text-sm font-medium px-4 py-2 rounded border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
          >
            Richiedi Supporto
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Apri menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background/98 backdrop-blur-sm border-b border-border"
          >
            <div className="container px-6 py-6 flex flex-col gap-4">
              {navSections.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-border my-1" />

              {/* Approfondimenti accordion in mobile */}
              <button
                onClick={() => setMobileApprofOpen(!mobileApprofOpen)}
                className="flex items-center justify-between font-body text-sm text-muted-foreground hover:text-foreground transition-colors py-1 text-left"
              >
                Approfondimenti
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileApprofOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {mobileApprofOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-3 pl-4 overflow-hidden"
                  >
                    {navPages.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href="#candidatura"
                className="font-body text-sm font-medium px-4 py-2.5 rounded border border-primary/40 text-primary hover:bg-primary/10 transition-colors text-center mt-1"
                onClick={() => setMobileOpen(false)}
              >
                Richiedi Supporto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

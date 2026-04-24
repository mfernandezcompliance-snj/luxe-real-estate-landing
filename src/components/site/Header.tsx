import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#propiedades", label: "Propiedades" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-smooth",
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#inicio" className="group flex items-baseline gap-1">
          <span className="font-display text-2xl tracking-wide text-pearl">Sofía</span>
          <span className="font-display text-2xl tracking-wide text-gold">Mendoza</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium uppercase tracking-[0.15em] text-pearl/85 transition-smooth hover:text-gold"
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-gold transition-smooth group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden border border-gold/60 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-gold transition-smooth hover:bg-gold hover:text-navy md:inline-block"
        >
          Agendar cita
        </a>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="text-pearl md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden bg-navy md:hidden",
          open ? "max-h-96 border-t border-gold/20" : "max-h-0"
        )}
        style={{ transition: "max-height 400ms ease" }}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-gold/10 py-3 text-sm uppercase tracking-[0.15em] text-pearl/90 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-4 inline-block border border-gold/60 px-5 py-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-gold"
          >
            Agendar cita
          </a>
        </nav>
      </div>
    </header>
  );
}

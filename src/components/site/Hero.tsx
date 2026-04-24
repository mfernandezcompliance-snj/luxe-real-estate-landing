import heroImg from "@/assets/hero-mansion.jpg";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Residencia de lujo con piscina infinita al atardecer"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-navy/30" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-pearl">
        <p className="reveal mb-6 text-xs font-medium uppercase tracking-[0.4em] text-gold">
          — Bienes Raíces de Lujo · Panamá —
        </p>
        <h1 className="reveal font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
          Donde el lujo
          <br />
          <span className="italic text-gold">encuentra hogar</span>
        </h1>
        <p className="reveal mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-pearl/85 md:text-lg">
          Asesoría exclusiva para descubrir propiedades excepcionales en Costa del Este,
          Punta Pacífica y Santa María.
        </p>

        <div className="reveal mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#propiedades"
            className="group inline-flex items-center justify-center bg-gradient-gold px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-navy shadow-gold transition-smooth hover:scale-[1.02] hover:shadow-elegant"
          >
            Explorar propiedades
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center border border-pearl/40 px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-pearl transition-smooth hover:border-gold hover:text-gold"
          >
            Hablar con Sofía
          </a>
        </div>
      </div>

      <a
        href="#propiedades"
        aria-label="Ver propiedades"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-pearl/70 transition-smooth hover:text-gold"
      >
        <ArrowDown className="animate-bounce" size={24} />
      </a>
    </section>
  );
}

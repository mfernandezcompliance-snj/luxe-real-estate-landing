import { useEffect, useRef, useState } from "react";
import portrait from "@/assets/agent-portrait.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1600;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              setVal(Math.round(to * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="font-display text-5xl text-gold md:text-6xl">
      {val}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="sobre-mi" className="bg-navy py-24 text-pearl md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="reveal relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 border border-gold/40" />
          <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-gradient-gold opacity-90" />
          <img
            src={portrait}
            alt="Sofía Mendoza, agente de bienes raíces"
            loading="lazy"
            width={800}
            height={1024}
            className="relative aspect-[4/5] w-full object-cover shadow-elegant"
          />
        </div>

        <div className="reveal">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold">
            Sobre Mí
          </p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Más que propiedades,
            <br />
            <span className="italic text-gold">creo experiencias</span>
          </h2>

          <div className="my-8 h-px w-16 bg-gold" />

          <p className="text-base leading-relaxed text-pearl/80">
            Soy <strong className="text-pearl">Sofía Mendoza</strong>, especialista en
            bienes raíces de alta gama en Panamá. Durante más de una década he acompañado
            a familias e inversionistas internacionales a encontrar residencias que
            reflejan su estilo de vida y patrimonio.
          </p>
          <p className="mt-4 text-base leading-relaxed text-pearl/80">
            Mi compromiso: discreción absoluta, asesoría estratégica y un servicio
            impecable que va más allá de la transacción.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gold/20 pt-10">
            <div>
              <Counter to={15} suffix="+" />
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-pearl/70">
                Años de experiencia
              </p>
            </div>
            <div>
              <Counter to={240} suffix="+" />
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-pearl/70">
                Propiedades vendidas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

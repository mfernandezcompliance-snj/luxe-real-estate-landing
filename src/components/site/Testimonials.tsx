import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Sofía hizo de un proceso complejo una experiencia placentera. Encontró exactamente la residencia que buscábamos en Costa del Este.",
    name: "Andrés y Marcela Pinzón",
    role: "Inversionistas privados",
  },
  {
    quote:
      "Profesionalismo y discreción a otro nivel. Recomiendo a Sofía sin duda alguna a quien busque propiedades de élite en Panamá.",
    name: "Carlos Vega",
    role: "CEO, Vega Holdings",
  },
  {
    quote:
      "Su conocimiento del mercado de Punta Pacífica es excepcional. Cerramos la operación en tiempo récord y con total tranquilidad.",
    name: "Isabella Romero",
    role: "Cliente internacional",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <span className="gold-divider mb-6" />
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold">
            Testimonios
          </p>
          <h2 className="font-display text-4xl text-navy md:text-5xl">
            La confianza de mis clientes
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="reveal relative bg-card p-10 shadow-card transition-smooth hover:shadow-elegant"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="mb-6 text-gold" size={32} />
              <blockquote className="font-display text-lg italic leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <p className="font-medium text-navy">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

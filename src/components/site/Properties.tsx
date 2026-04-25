import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";

type Property = {
  title: string;
  price: string;
  location: string;
  image: string;
  beds: number;
  baths: number;
  sqm: number;
  tag: string;
};

const items: Property[] = [
  {
    title: "Penthouse Skyline",
    price: "$2,450,000",
    location: "Punta Pacífica, Panamá",
    image: p1,
    beds: 4,
    baths: 5,
    sqm: 420,
    tag: "Exclusivo",
  },
  {
    title: "Villa Costa Azul",
    price: "$3,800,000",
    location: "Santa María, Panamá",
    image: p2,
    beds: 5,
    baths: 6,
    sqm: 680,
    tag: "Frente al mar",
  },
  {
    title: "Residencia Aurora",
    price: "$1,950,000",
    location: "Costa del Este, Panamá",
    image: p3,
    beds: 3,
    baths: 4,
    sqm: 310,
    tag: "Nuevo",
  },
  {
    title: "Torre Marina Bay",
    price: "$2,150,000",
    location: "Cinta Costera, Ciudad de Panamá",
    image: p4,
    beds: 3,
    baths: 4,
    sqm: 350,
    tag: "Frente al mar",
  },
];

export function Properties() {
  return (
    <section id="propiedades" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <span className="gold-divider mb-6" />
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold">
            Portafolio Selecto
          </p>
          <h2 className="font-display text-4xl text-navy md:text-5xl">
            Propiedades destacadas
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Una selección curada de residencias excepcionales en las zonas más prestigiosas
            del país.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <article
              key={p.title}
              className="reveal group cursor-pointer overflow-hidden bg-card shadow-card transition-smooth hover:shadow-elegant"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 transition-smooth group-hover:opacity-100" />
                <span className="absolute left-4 top-4 bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-navy">
                  {p.tag}
                </span>
              </div>

              <div className="p-7">
                <p className="font-display text-2xl text-gold">{p.price}</p>
                <h3 className="mt-1 font-display text-xl text-navy">{p.title}</h3>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin size={14} className="text-gold" />
                  {p.location}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-sm text-foreground/80">
                  <span className="flex items-center gap-2">
                    <Bed size={16} className="text-gold" />
                    <span className="font-medium">{p.beds}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Bath size={16} className="text-gold" />
                    <span className="font-medium">{p.baths}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Maximize size={16} className="text-gold" />
                    <span className="font-medium">{p.sqm} m²</span>
                  </span>
                </div>

                <a
                  href="#contacto"
                  className="mt-6 inline-block text-xs font-medium uppercase tracking-[0.2em] text-navy transition-smooth hover:text-gold"
                >
                  Ver detalles →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

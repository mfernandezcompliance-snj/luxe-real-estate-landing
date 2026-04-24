import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";

const socials = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:sofia@mendozaluxury.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-pearl/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 border-b border-pearl/10 pb-12 md:grid-cols-3">
          <div>
            <a href="#inicio" className="flex items-baseline gap-1">
              <span className="font-display text-2xl tracking-wide text-pearl">Sofía</span>
              <span className="font-display text-2xl tracking-wide text-gold">Mendoza</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Bienes raíces de lujo en Panamá. Asesoría exclusiva, discreta y personalizada.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Navegación
            </p>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-gold transition-smooth">Inicio</a></li>
              <li><a href="#propiedades" className="hover:text-gold transition-smooth">Propiedades</a></li>
              <li><a href="#sobre-mi" className="hover:text-gold transition-smooth">Sobre Mí</a></li>
              <li><a href="#contacto" className="hover:text-gold transition-smooth">Contacto</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Síguenos
            </p>
            <div className="flex gap-4">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-pearl/20 transition-smooth hover:border-gold hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-pearl/60 md:flex-row">
          <p>© {new Date().getFullYear()} Sofía Mendoza Luxury Real Estate. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#privacidad" className="hover:text-gold transition-smooth">
              Aviso de Privacidad
            </a>
            <a href="#terminos" className="hover:text-gold transition-smooth">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

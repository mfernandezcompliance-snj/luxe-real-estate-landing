import { Mail } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
  { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
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

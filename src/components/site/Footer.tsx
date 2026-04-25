import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { LegalModal } from "./LegalModal";

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

type ModalKey = "privacy" | "terms" | "cookies" | null;

export function Footer() {
  const [modal, setModal] = useState<ModalKey>(null);
  const close = () => setModal(null);

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
            <p className="mt-4 text-xs text-pearl/60">
              Aviso de Operaciones: <span className="text-pearl/85">1553422-1-657892 DV 45</span>
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Panama+City%2C+Panama"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs text-pearl/70 transition-smooth hover:text-gold"
            >
              <MapPin size={14} className="text-gold" />
              Ciudad de Panamá, Panamá — Ver en Google Maps
            </a>
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
          <div className="flex flex-wrap gap-6">
            <button onClick={() => setModal("privacy")} className="hover:text-gold transition-smooth">
              Aviso de Privacidad
            </button>
            <button onClick={() => setModal("terms")} className="hover:text-gold transition-smooth">
              Términos y Condiciones
            </button>
            <button onClick={() => setModal("cookies")} className="hover:text-gold transition-smooth">
              Política de Cookies
            </button>
          </div>
        </div>
      </div>

      <LegalModal open={modal === "privacy"} onClose={close} title="Aviso de Privacidad">
        <p>
          En <strong>Sofía Mendoza | Real Estate</strong>, valoramos su privacidad. Los datos
          recopilados se utilizan exclusivamente para gestión inmobiliaria. Conforme a la
          Ley 81 de Panamá, puede solicitar actualización o eliminación en{" "}
          <a className="text-gold underline-offset-2 hover:underline" href="mailto:mfernandezcompliance@gmail.com">
            mfernandezcompliance@gmail.com
          </a>.
        </p>
      </LegalModal>

      <LegalModal open={modal === "terms"} onClose={close} title="Términos y Condiciones">
        <ol className="list-decimal space-y-3 pl-5">
          <li><strong>Naturaleza:</strong> Contenido informativo.</li>
          <li><strong>Responsabilidad:</strong> No nos hacemos responsables por cambios legales futuros.</li>
          <li><strong>Propiedad:</strong> El cliente es dueño del diseño tras el pago.</li>
          <li><strong>Jurisdicción:</strong> República de Panamá.</li>
        </ol>
      </LegalModal>

      <LegalModal open={modal === "cookies"} onClose={close} title="Política de Cookies">
        <ol className="list-decimal space-y-3 pl-5">
          <li><strong>Definición:</strong> Usamos cookies para el funcionamiento técnico y análisis de red bajo arquitectura de alto rendimiento.</li>
          <li><strong>Tipos:</strong> Técnicas (necesarias) y de Análisis.</li>
          <li><strong>Gestión:</strong> Puede bloquearlas en su navegador, aunque afectará la funcionalidad.</li>
          <li>
            <strong>Contacto:</strong>{" "}
            <a className="text-gold underline-offset-2 hover:underline" href="mailto:mfernandezcompliance@gmail.com">
              mfernandezcompliance@gmail.com
            </a>.
          </li>
        </ol>
      </LegalModal>
    </footer>
  );
}

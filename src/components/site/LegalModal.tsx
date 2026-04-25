import { useEffect } from "react";
import { X } from "lucide-react";

interface LegalModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function LegalModal({ open, onClose, title, children }: LegalModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/70 px-4 py-8 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto bg-background p-8 shadow-elegant md:p-12"
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 text-foreground/60 transition-smooth hover:text-foreground"
        >
          <X size={22} />
        </button>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-gold">
          Sofía Mendoza · Real Estate
        </p>
        <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
          {title}
        </h2>
        <div className="my-6 h-px w-16 bg-gold" />
        <div className="space-y-4 text-sm leading-relaxed text-foreground/85">
          {children}
        </div>
      </div>
    </div>
  );
}

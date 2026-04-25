export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-[280px] sm:max-w-xs">
      {/* Glow halo */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-1 rounded-2xl opacity-70 blur-xl cta-glow"
      />
      <a
        href="https://tally.so/r/QKxVJY"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block rounded-2xl px-5 py-3 text-right text-sm leading-snug text-white shadow-elegant ring-1 ring-gold/40 transition-smooth hover:scale-[1.02] hover:shadow-gold"
        style={{ backgroundColor: "#682642", fontFamily: 'Georgia, "Times New Roman", serif' }}
      >
        <span className="block text-xs font-light uppercase tracking-[0.18em] opacity-90">
          Eleva tu presencia digital
        </span>
        <span className="mt-1 block text-[13px] italic">
          Solicita tu Auditoría de Diseño &amp; Compliance
        </span>
      </a>
    </div>
  );
}

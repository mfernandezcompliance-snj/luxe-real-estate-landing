export function SampleBanner({ position = "top" }: { position?: "top" | "bottom" }) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-navy py-2.5 text-center text-[12px] font-medium tracking-wide text-pearl shadow-elegant ${
        position === "top" ? "border-b-2 border-gold" : "border-t-2 border-gold"
      }`}
    >
      <span className="mr-2 inline-block rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-navy">
        Demo
      </span>
      <span className="text-pearl/95">
        Sitio de muestra diseñado por{" "}
        <span className="font-semibold text-gold">MF Web Design &amp; Compliance</span>. Los datos y propiedades son ficticios.
      </span>
    </div>
  );
}

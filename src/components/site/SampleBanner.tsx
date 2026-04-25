export function SampleBanner({ position = "top" }: { position?: "top" | "bottom" }) {
  return (
    <div
      className={`w-full bg-muted/60 py-2 text-center text-[11px] tracking-wide text-muted-foreground ${
        position === "top" ? "border-b border-border" : "border-t border-border"
      }`}
    >
      Sitio de muestra diseñado por MF Web Design &amp; Compliance. Los datos y propiedades son ficticios.
    </div>
  );
}

import { useEffect, useState } from "react";

const STORAGE_KEY = "mf_cookie_consent_v1";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (!v) setVisible(true);
  }, []);

  const decide = (value: "accept" | "reject") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-md shadow-elegant">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed text-foreground/85">
          Para ofrecer las mejores experiencias, utilizamos tecnologías como las cookies.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => decide("reject")}
            className="border border-border px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground transition-smooth hover:bg-muted"
          >
            Rechazar
          </button>
          <button
            onClick={() => decide("accept")}
            className="bg-navy px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-pearl transition-smooth hover:bg-navy-deep"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

const interests = ["Compra", "Venta", "Inversión", "Alquiler de lujo"] as const;

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "El nombre es requerido")
    .max(80, "Máximo 80 caracteres"),
  email: z.string().trim().email("Correo no válido").max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Teléfono no válido")
    .max(20, "Máximo 20 caracteres")
    .regex(/^[0-9+\-\s()]+$/, "Solo dígitos y +-() permitidos"),
  interest: z.enum(interests, { message: "Selecciona un interés" }),
  message: z.string().trim().max(500, "Máximo 500 caracteres").optional(),
  privacy: z.literal(true, {
    message: "Debes aceptar la Política de Privacidad",
  }),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      interest: String(fd.get("interest") ?? "") as (typeof interests)[number],
      message: String(fd.get("message") ?? ""),
      privacy: fd.get("privacy") === "on",
    };

    const result = schema.safeParse(raw);
    if (!result.success) {
      const next: Errors = {};
      result.error.issues.forEach((iss) => {
        const k = iss.path[0] as keyof Errors;
        if (!next[k]) next[k] = iss.message;
      });
      setErrors(next);
      toast.error("Revisa los campos del formulario");
      return;
    }

    setErrors({});
    setSubmitting(true);
    // Simulate submit
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setDone(true);
    toast.success("¡Gracias! Sofía te contactará en breve.");
    (e.currentTarget as HTMLFormElement).reset();
  };

  const fieldClass =
    "w-full border-0 border-b border-pearl/30 bg-transparent px-0 py-3 text-pearl placeholder:text-pearl/40 outline-none transition-smooth focus:border-gold";

  return (
    <section id="contacto" className="bg-navy-deep py-24 text-pearl md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div className="reveal">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold">
            Contacto
          </p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Comencemos a buscar
            <br />
            <span className="italic text-gold">tu próximo hogar</span>
          </h2>
          <div className="my-8 h-px w-16 bg-gold" />
          <p className="text-base leading-relaxed text-pearl/80">
            Cuéntame sobre la propiedad que imaginas. Te responderé personalmente en menos
            de 24 horas con opciones cuidadosamente seleccionadas.
          </p>

          <div className="mt-10 space-y-3 text-sm text-pearl/85">
            <p>
              <span className="text-gold">Tel:</span> +507 6000-0000
            </p>
            <p>
              <span className="text-gold">Email:</span> sofia@mendozaluxury.com
            </p>
            <p>
              <span className="text-gold">Oficina:</span> Costa del Este, Panamá
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="reveal space-y-7 border border-pearl/15 bg-navy/60 p-8 backdrop-blur md:p-10"
        >
          {done && (
            <div className="flex items-center gap-3 border border-gold/40 bg-gold/10 p-4 text-sm text-gold">
              <CheckCircle2 size={18} /> Tu mensaje fue enviado con éxito.
            </div>
          )}

          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-pearl/60">
              Nombre completo
            </label>
            <input name="name" maxLength={80} className={fieldClass} placeholder="Tu nombre" />
            {errors.name && (
              <p className="mt-1 text-xs text-destructive-foreground/90">{errors.name}</p>
            )}
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-pearl/60">
                Correo
              </label>
              <input
                name="email"
                type="email"
                maxLength={120}
                className={fieldClass}
                placeholder="tu@correo.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-destructive-foreground/90">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-pearl/60">
                Teléfono
              </label>
              <input
                name="phone"
                inputMode="tel"
                maxLength={20}
                className={fieldClass}
                placeholder="+507 0000-0000"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-destructive-foreground/90">{errors.phone}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-pearl/60">
              Interés
            </label>
            <select
              name="interest"
              defaultValue=""
              className={`${fieldClass} appearance-none [&>option]:bg-navy [&>option]:text-pearl`}
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              {interests.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            {errors.interest && (
              <p className="mt-1 text-xs text-destructive-foreground/90">{errors.interest}</p>
            )}
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-pearl/60">
              Mensaje (opcional)
            </label>
            <textarea
              name="message"
              rows={3}
              maxLength={500}
              className={`${fieldClass} resize-none`}
              placeholder="Cuéntame qué buscas..."
            />
          </div>

          <label className="flex items-start gap-3 text-xs leading-relaxed text-pearl/75">
            <input
              type="checkbox"
              name="privacy"
              className="mt-0.5 h-4 w-4 accent-[color:var(--gold)]"
            />
            <span>
              Acepto la{" "}
              <a href="#privacidad" className="text-gold underline-offset-2 hover:underline">
                Política de Privacidad
              </a>{" "}
              conforme a la Ley 81 de Panamá.
            </span>
          </label>
          {errors.privacy && (
            <p className="-mt-4 text-xs text-destructive-foreground/90">{errors.privacy}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gradient-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-navy shadow-gold transition-smooth hover:scale-[1.01] hover:shadow-elegant disabled:opacity-60"
          >
            {submitting ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
}

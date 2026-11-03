import { useEffect, useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Clock, Loader2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { catalogData } from "../data/catalog";
import { CONTACTO, FORM_ENDPOINT, linkWhatsApp } from "../data/site";

type Estado = "idle" | "enviando" | "ok" | "error";

const TIPOS_CLIENTE = [
  "Distribuidor / ferretería",
  "Constructora / inmobiliaria",
  "Instalador / decorador",
  "Eventos / comercio",
  "Particular",
  "Otro",
];

const campo =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-ink/35 transition focus:border-brand-light focus:outline-none focus:ring-4 focus:ring-brand-light/15 disabled:opacity-60";

export default function ContactSection({ prefill }: { prefill: string }) {
  const [estado, setEstado] = useState<Estado>("idle");
  const [mensaje, setMensaje] = useState("");
  const [lineas, setLineas] = useState<string[]>([]);

  useEffect(() => {
    if (!prefill) return;
    setMensaje(`Hola, quiero cotizar: ${prefill}.\nCantidad aproximada: `);
    const cat = catalogData.find((c) => c.products.some((p) => prefill.startsWith(p.name)));
    if (cat) setLineas((l) => (l.includes(cat.name) ? l : [...l, cat.name]));
  }, [prefill]);

  const alternarLinea = (nombre: string) =>
    setLineas((l) => (l.includes(nombre) ? l.filter((x) => x !== nombre) : [...l, nombre]));

  async function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const datos = new FormData(form);
    if (datos.get("website")) return; // trampa para bots
    datos.set("lineas", lineas.join(", "));
    datos.set("origen", window.location.href);

    if (!FORM_ENDPOINT) {
      window.open(linkWhatsApp(armarTexto(datos)), "_blank", "noopener");
      return;
    }
    setEstado("enviando");
    try {
      // Apps Script no devuelve CORS: se envía "a ciegas" y se asume recibido si no hay error de red.
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(datos as unknown as Record<string, string>),
      });
      setEstado("ok");
      form.reset();
      setLineas([]);
      setMensaje("");
    } catch {
      setEstado("error");
    }
  }

  return (
    <section id="contacto" className="scroll-mt-20 bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-light">Ventas por mayor</p>
          <h2 className="text-4xl font-extrabold sm:text-5xl">Cotiza con nuestro equipo.</h2>
          <p className="mt-6 max-w-md text-lg text-white/70">
            Respondemos con precios por volumen, stock disponible y fichas técnicas.
          </p>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-light font-display text-xl font-extrabold">
                {CONTACTO.vendedor.split(" ").map((p) => p[0]).join("")}
              </span>
              <div>
                <p className="text-lg font-bold">{CONTACTO.vendedor}</p>
                <p className="text-sm text-white/60">{CONTACTO.cargo}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              <a
                href={linkWhatsApp("Hola Sergio, quiero cotizar productos Thermofoam por mayor.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-ink transition hover:brightness-110"
              >
                <MessageCircle size={20} /> Escribir por WhatsApp
              </a>
              <a href={`tel:${CONTACTO.telefono}`} className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-white/5">
                <Phone size={18} className="text-brand-light" />
                <span className="font-semibold">{CONTACTO.telefonoVisible}</span>
              </a>
              <a href={`mailto:${CONTACTO.email}`} className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-white/5">
                <Mail size={18} className="text-brand-light" />
                <span className="font-semibold">{CONTACTO.email}</span>
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-4 text-sm text-white/70">
            <a href={CONTACTO.mapa} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white">
              <MapPin size={18} className="mt-0.5 flex-none text-brand-light" />
              <span>
                {CONTACTO.direccion}
                <br />
                {CONTACTO.region}
              </span>
            </a>
            <p className="flex items-center gap-3">
              <Clock size={18} className="flex-none text-brand-light" /> {CONTACTO.horario}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl bg-white p-6 text-ink sm:p-10"
        >
          {estado === "ok" ? (
            <div className="flex min-h-[460px] flex-col items-center justify-center text-center">
              <CheckCircle2 size={64} className="text-brand-light" />
              <h3 className="mt-6 text-3xl font-extrabold">¡Recibimos tu solicitud!</h3>
              <p className="mt-3 max-w-sm text-ink/60">
                {CONTACTO.vendedor.split(" ")[0]} te contactará a la brevedad. Si es urgente, escríbenos por WhatsApp.
              </p>
              <button onClick={() => setEstado("idle")} className="mt-8 font-bold text-brand-light hover:underline">
                Enviar otra cotización
              </button>
            </div>
          ) : (
            <form onSubmit={enviar} className="grid gap-5">
              <h3 className="text-2xl font-extrabold">Solicitud de cotización</h3>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm font-semibold">
                  Nombre *
                  <input name="nombre" required className={campo} disabled={estado === "enviando"} autoComplete="name" />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Empresa
                  <input name="empresa" className={campo} disabled={estado === "enviando"} autoComplete="organization" />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Teléfono *
                  <input name="telefono" type="tel" required className={campo} disabled={estado === "enviando"} autoComplete="tel" placeholder="+56 9" />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Correo *
                  <input name="email" type="email" required className={campo} disabled={estado === "enviando"} autoComplete="email" />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Tipo de cliente
                  <select name="tipo" className={campo} disabled={estado === "enviando"} defaultValue="">
                    <option value="" disabled>
                      Selecciona…
                    </option>
                    {TIPOS_CLIENTE.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Comuna de entrega
                  <input name="comuna" className={campo} disabled={estado === "enviando"} autoComplete="address-level2" />
                </label>
              </div>

              <fieldset>
                <legend className="mb-2 text-sm font-semibold">Productos de interés</legend>
                <div className="flex flex-wrap gap-2">
                  {catalogData.map((c) => {
                    const activo = lineas.includes(c.name);
                    return (
                      <button
                        type="button"
                        key={c.id}
                        onClick={() => alternarLinea(c.name)}
                        aria-pressed={activo}
                        className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
                          activo ? "border-brand-light bg-brand-light text-white" : "border-line hover:border-brand-light/50"
                        }`}
                      >
                        {c.name}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <label className="grid gap-1.5 text-sm font-semibold">
                Detalle del pedido *
                <textarea
                  name="mensaje"
                  rows={4}
                  required
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className={campo}
                  disabled={estado === "enviando"}
                  placeholder="Ej.: 20 rollos de espuma 3 mm, 300 m² de piso SPC Arena Oak…"
                />
              </label>

              {estado === "error" && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                  No pudimos enviar el formulario. Intenta de nuevo o escríbenos por WhatsApp.
                </p>
              )}

              <button
                type="submit"
                disabled={estado === "enviando"}
                className="flex items-center justify-center gap-2 rounded-full bg-brand-dark px-6 py-4 font-bold text-white transition-colors hover:bg-brand-light disabled:opacity-70"
              >
                {estado === "enviando" ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Enviando…
                  </>
                ) : (
                  <>
                    <Send size={18} /> Enviar solicitud
                  </>
                )}
              </button>
              <p className="text-center text-xs text-ink/45">Usamos tus datos solo para responder esta cotización.</p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function armarTexto(datos: FormData) {
  const v = (k: string) => String(datos.get(k) ?? "").trim();
  return [
    `Hola, soy ${v("nombre")}${v("empresa") ? ` de ${v("empresa")}` : ""}.`,
    v("lineas") && `Me interesa: ${v("lineas")}.`,
    v("mensaje"),
    v("comuna") && `Comuna: ${v("comuna")}.`,
  ]
    .filter(Boolean)
    .join("\n");
}

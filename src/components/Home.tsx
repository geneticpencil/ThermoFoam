import { motion } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  ClipboardList,
  Hammer,
  MessageCircle,
  PackageCheck,
  PartyPopper,
  Store,
  Truck,
  Warehouse,
} from "lucide-react";
import { catalogData } from "../data/catalog";
import { GALERIA, SEGMENTOS } from "../data/site";
import Hero from "./Hero";
import ContactSection from "./ContactSection";

const aparecer = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

// Tamaño de cada tarjeta en la grilla de líneas (desktop): las primeras van más grandes.
const TAMANOS: Record<string, string> = {
  spc: "lg:col-span-2 lg:row-span-2",
  alfombras: "lg:col-span-2",
};

const ICONOS_SEGMENTO = [Store, Building2, Hammer, PartyPopper];

export default function Home({ prefill }: { prefill: string }) {
  const totalProductos = catalogData.reduce((n, c) => n + c.products.length, 0);
  const totalColores = catalogData.reduce(
    (n, c) => n + c.products.reduce((m, p) => m + (p.colors?.length ?? 0), 0),
    0,
  );

  return (
    <>
      <Hero />

      {/* Cinta de líneas */}
      <div className="overflow-hidden border-b border-line bg-white py-5" aria-hidden="true">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...catalogData, ...catalogData].map((c, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-xl font-bold text-ink/30 sm:text-2xl">
              {c.name}
              <span className="h-2 w-2 rounded-full bg-brand-light/60" />
            </span>
          ))}
        </div>
      </div>

      {/* Cifras */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 py-14 sm:px-6 lg:grid-cols-4">
          {[
            { n: catalogData.length, t: "líneas de producto" },
            { n: totalProductos, t: "productos en catálogo" },
            { n: `${totalColores}+`, t: "colores y diseños" },
            { n: "Lampa", t: "bodega y retiro en RM" },
          ].map((d) => (
            <motion.div key={d.t} {...aparecer} className="border-l border-line py-4 pl-5">
              <p className="font-display text-4xl font-extrabold text-brand-dark sm:text-5xl">{d.n}</p>
              <p className="mt-1 text-sm text-ink/60">{d.t}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Líneas de producto */}
      <section id="lineas" className="scroll-mt-20 bg-sand py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div {...aparecer} className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-light">Nuestras líneas</p>
              <h2 className="text-4xl font-extrabold text-ink sm:text-5xl">Un solo proveedor para pisos, alfombras y aislación.</h2>
            </div>
            <p className="max-w-md text-lg text-ink/60">
              Elige una línea para ver modelos, colores y fichas técnicas. Cotiza todo en un mismo pedido.
            </p>
          </motion.div>

          <div className="grid grid-flow-dense auto-rows-[260px] grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[240px] lg:grid-cols-4">
            {catalogData.map((cat, i) => (
              <motion.a
                key={cat.id}
                href={`#/categoria/${cat.id}`}
                {...aparecer}
                transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
                className={`group relative isolate overflow-hidden rounded-3xl bg-ink ${TAMANOS[cat.id] ?? ""}`}
              >
                <img
                  src={cat.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 -z-10 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="flex h-full flex-col justify-between p-5 text-white sm:p-6">
                  <span className="self-start rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                    {cat.products.length} {cat.products.length === 1 ? "producto" : "productos"}
                  </span>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold leading-tight">{cat.name}</h3>
                      <p className="mt-2 line-clamp-2 max-w-sm text-sm text-white/70">{cat.description}</p>
                    </div>
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white text-ink transition-transform group-hover:-translate-y-1 group-hover:rotate-45">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Espuma */}
      <section id="espuma" className="scroll-mt-20 overflow-hidden bg-brand-dark py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
          <motion.div {...aparecer}>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-light">Nuestro origen</p>
            <h2 className="text-4xl font-extrabold sm:text-5xl">Especialistas en espuma de polietileno expandido.</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              La base silenciosa de cada piso flotante y la protección de miles de embalajes.
              Espuma 100% virgen, en versión estándar, hidrófuga con lámina de polietileno y metalizada.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-4">
              {[
                { v: "2 y 3 mm", t: "espesores, rollos de 10 y 100 m²" },
                { v: "30 kg/m³", t: "densidad media" },
                { v: "−40° a 70°C", t: "rango de temperatura" },
                { v: "19 dB", t: "atenuación acústica (metalizada)" },
              ].map((d) => (
                <div key={d.v} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <dt className="font-display text-2xl font-extrabold sm:text-3xl">{d.v}</dt>
                  <dd className="mt-1 text-sm text-white/60">{d.t}</dd>
                </div>
              ))}
            </dl>
            <a
              href="#/categoria/espumas"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-brand-dark transition-colors hover:bg-brand-light hover:text-white"
            >
              Ver espumas <ArrowUpRight size={18} />
            </a>
          </motion.div>
          <motion.div {...aparecer} className="relative grid grid-cols-5 grid-rows-6 gap-4" style={{ height: 520 }}>
            <img
              src="/images/v2/espuma-instalacion.webp"
              alt="Instalación de espuma niveladora bajo piso flotante"
              loading="lazy"
              className="col-span-3 row-span-6 h-full w-full rounded-3xl object-cover"
            />
            <img
              src="/images/v2/espuma-rollo-sala.webp"
              alt="Rollo de espuma de polietileno"
              loading="lazy"
              className="col-span-2 row-span-3 h-full w-full rounded-3xl object-cover"
            />
            <img
              src="/images/v2/espuma-bodega.webp"
              alt="Rollos de espuma para embalaje en bodega"
              loading="lazy"
              className="col-span-2 row-span-3 h-full w-full rounded-3xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Clientes */}
      <section id="clientes" className="scroll-mt-20 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div {...aparecer} className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-light">Con quién trabajamos</p>
            <h2 className="text-4xl font-extrabold sm:text-5xl">Precios por volumen para quienes compran en serio.</h2>
          </motion.div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SEGMENTOS.map((s, i) => {
              const Icono = ICONOS_SEGMENTO[i];
              return (
                <motion.div
                  key={s.titulo}
                  {...aparecer}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="rounded-3xl border border-line p-7 transition-colors hover:border-brand-light/40 hover:bg-sand"
                >
                  <Icono className="text-brand-light" size={30} strokeWidth={1.75} />
                  <h3 className="mt-6 text-xl font-bold">{s.titulo}</h3>
                  <p className="mt-2 text-ink/60">{s.texto}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-line sm:grid-cols-3">
            {[
              { Icono: Warehouse, t: "Stock en bodega", d: "Bodega propia en Lampa, Región Metropolitana." },
              { Icono: PackageCheck, t: "Por rollo, caja o pallet", d: "Formatos de compra pensados para reventa y obra." },
              { Icono: Truck, t: "Retiro o despacho", d: "Retiras en bodega o coordinamos la entrega según el volumen." },
            ].map(({ Icono, t, d }) => (
              <div key={t} className="flex gap-4 bg-white p-7">
                <Icono className="flex-none text-brand-dark" size={26} strokeWidth={1.75} />
                <div>
                  <h3 className="font-bold">{t}</h3>
                  <p className="mt-1 text-sm text-ink/60">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="bg-sand py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div {...aparecer} className="mb-10 flex items-end justify-between gap-6">
            <h2 className="max-w-xl text-4xl font-extrabold sm:text-5xl">Así se ven instalados.</h2>
            <p className="hidden text-sm text-ink/50 sm:block">Desliza para ver más →</p>
          </motion.div>
        </div>
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          {GALERIA.map((g) => (
            <figure key={g.src} className="relative w-[78vw] flex-none snap-start overflow-hidden rounded-3xl sm:w-[420px]">
              <img src={g.src} alt={`${g.titulo} — ${g.detalle}`} loading="lazy" className="h-[420px] w-full object-cover sm:h-[500px]" />
              <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/90 px-4 py-3 backdrop-blur">
                <span className="block font-bold">{g.titulo}</span>
                <span className="block text-sm text-ink/60">{g.detalle}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Cómo cotizar */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.h2 {...aparecer} className="max-w-2xl text-4xl font-extrabold sm:text-5xl">
            Cotizar toma tres pasos.
          </motion.h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { Icono: ClipboardList, t: "Cuéntanos qué necesitas", d: "Productos, metros o cantidades y comuna de entrega, por formulario o WhatsApp." },
              { Icono: MessageCircle, t: "Te respondemos", d: "Te enviamos precios por volumen, disponibilidad y fichas técnicas." },
              { Icono: Truck, t: "Retiras o despachamos", d: "Confirmas el pedido y coordinamos retiro en Lampa o despacho." },
            ].map(({ Icono, t, d }, i) => (
              <motion.li key={t} {...aparecer} transition={{ duration: 0.6, delay: i * 0.1 }} className="relative">
                <span className="font-display text-7xl font-extrabold text-sand">0{i + 1}</span>
                <Icono className="absolute right-0 top-4 text-brand-light" size={28} strokeWidth={1.75} />
                <h3 className="-mt-4 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-ink/60">{d}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <ContactSection prefill={prefill} />
    </>
  );
}

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { catalogData, type Category, type Product } from "../data/catalog";
import { linkWhatsApp } from "../data/site";

export default function CategoryPage({ categoria, onCotizar }: { categoria: Category; onCotizar: (texto: string) => void }) {
  const idx = catalogData.findIndex((c) => c.id === categoria.id);
  const siguiente = catalogData[(idx + 1) % catalogData.length];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink pb-14 pt-32 text-white sm:pb-20 sm:pt-40">
        <img src={categoria.image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <a href="#/#lineas" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white">
            <ArrowLeft size={16} /> Todas las líneas
          </a>
          <h1 className="mt-6 max-w-3xl text-5xl font-extrabold sm:text-6xl">{categoria.name}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">{categoria.description}</p>
          <p className="mt-8 text-sm font-semibold text-white/60">
            {categoria.products.length} {categoria.products.length === 1 ? "producto" : "productos"} · venta por mayor
          </p>
        </div>
      </section>

      <nav className="sticky top-18 z-30 border-b border-line bg-white/95 backdrop-blur lg:top-20" aria-label="Líneas">
        <div className="no-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {catalogData.map((c) => (
            <a
              key={c.id}
              href={`#/categoria/${c.id}`}
              aria-current={c.id === categoria.id ? "page" : undefined}
              className={`flex-none rounded-full px-4 py-2 text-sm font-semibold transition ${
                c.id === categoria.id ? "bg-brand-dark text-white" : "bg-sand text-ink/70 hover:text-ink"
              }`}
            >
              {c.name}
            </a>
          ))}
        </div>
      </nav>

      <div className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 sm:py-20">
          {categoria.products.map((p, i) => (
            <Ficha key={p.name} producto={p} categoria={categoria} invertida={i % 2 === 1} onCotizar={onCotizar} />
          ))}
        </div>
      </div>

      <a href={`#/categoria/${siguiente.id}`} className="group relative isolate block overflow-hidden bg-ink py-16 text-white">
        <img src={siguiente.image} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 -z-10 bg-ink/50" />
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Siguiente línea</p>
            <p className="mt-2 font-display text-3xl font-extrabold sm:text-5xl">{siguiente.name}</p>
          </div>
          <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-white text-ink transition-transform group-hover:translate-x-1">
            <ArrowRight size={24} />
          </span>
        </div>
      </a>
    </>
  );
}

function Ficha({
  producto,
  categoria,
  invertida,
  onCotizar,
}: {
  producto: Product;
  categoria: Category;
  invertida: boolean;
  onCotizar: (texto: string) => void;
}) {
  const [muestra, setMuestra] = useState<{ name: string; image: string } | null>(null);
  const imagen = muestra?.image ?? producto.image;
  const nombreCotizar = `${producto.name}${muestra ? ` (${muestra.name})` : ""}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="grid overflow-hidden rounded-3xl border border-line bg-white lg:grid-cols-2"
    >
      <div className={`relative bg-sand ${invertida ? "lg:order-2" : ""}`}>
        <img
          key={imagen}
          src={imagen}
          alt={`${producto.name}${muestra ? ` color ${muestra.name}` : ""}`}
          loading="lazy"
          className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto lg:min-h-[480px]"
        />
        {muestra && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold backdrop-blur">
            Color: {muestra.name}
          </span>
        )}
      </div>

      <div className="flex flex-col p-6 sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-light">{producto.type}</p>
        <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{producto.name}</h2>
        <p className="mt-4 leading-relaxed text-ink/65">{producto.description}</p>

        {producto.swatches && producto.swatches.length > 0 && (
          <div className="mt-7">
            <p className="mb-3 text-sm font-semibold">
              Colores {producto.colors && producto.colors.length > producto.swatches.length && (
                <span className="font-normal text-ink/50">· también {producto.colors.filter((c) => !producto.swatches!.some((s) => s.name.startsWith(c))).join(", ")}</span>
              )}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {producto.swatches.map((s) => {
                const activa = muestra?.image === s.image;
                return (
                  <button
                    key={s.name}
                    onClick={() => setMuestra(activa ? null : s)}
                    title={s.name}
                    aria-label={`Ver color ${s.name}`}
                    aria-pressed={activa}
                    className={`h-12 w-12 overflow-hidden rounded-xl ring-offset-2 transition ${
                      activa ? "ring-2 ring-brand-light" : "ring-1 ring-line hover:ring-brand-light/60"
                    }`}
                  >
                    <img src={s.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {!producto.swatches?.length && producto.colors && (
          <p className="mt-7 text-sm">
            <span className="font-semibold">Colores: </span>
            <span className="text-ink/65">{producto.colors.join(", ")}</span>
          </p>
        )}

        <dl className="mt-8 divide-y divide-line border-y border-line text-sm">
          {Object.entries(producto.specs).map(([k, v]) => (
            <div key={k} className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-4 py-2.5">
              <dt className="text-ink/50">{k}</dt>
              <dd className="font-medium">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
          <button
            onClick={() => onCotizar(`${nombreCotizar} — ${categoria.name}`)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-dark px-6 py-3.5 font-bold text-white transition-colors hover:bg-brand-light"
          >
            Cotizar este producto <ArrowUpRight size={18} />
          </button>
          <a
            href={linkWhatsApp(`Hola Sergio, quiero cotizar por mayor: ${nombreCotizar} (${categoria.name}).`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 font-bold transition-colors hover:border-[#25D366] hover:bg-[#25D366]/10"
          >
            <MessageCircle size={18} className="text-[#1DA851]" /> WhatsApp
          </a>
        </div>
      </div>
    </motion.article>
  );
}

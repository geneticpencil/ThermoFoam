import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const SLIDES = [
  { src: "/images/v2/hero-spc.webp", etiqueta: "Pisos SPC", href: "#/categoria/spc" },
  { src: "/images/v2/alfombra-bali.webp", etiqueta: "Alfombras muro a muro", href: "#/categoria/alfombras" },
  { src: "/images/v2/pasillo-escalera.webp", etiqueta: "Pasillos de alfombra", href: "#/categoria/pasillos" },
  { src: "/images/v2/espuma-instalacion.webp", etiqueta: "Espuma de polietileno", href: "#/categoria/espumas" },
  { src: "/images/v2/pasto-terraza.webp", etiqueta: "Pasto sintético", href: "#/categoria/pasto" },
];
const DURACION = 6000;

export default function Hero() {
  const [actual, setActual] = useState(0);
  const reducir = useReducedMotion();

  useEffect(() => {
    if (reducir) return;
    const t = setTimeout(() => setActual((i) => (i + 1) % SLIDES.length), DURACION);
    return () => clearTimeout(t);
  }, [actual, reducir]);

  return (
    <section id="inicio" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-white">
      <AnimatePresence initial={false}>
        <motion.img
          key={SLIDES[actual].src}
          src={SLIDES[actual].src}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: DURACION / 1000 + 1.2, ease: "linear" } }}
          fetchPriority={actual === 0 ? "high" : "auto"}
        />
      </AnimatePresence>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink/80 to-transparent" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-10 pt-32 sm:px-6 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
            Plásticos Thermofoam · Lampa, Chile
          </p>
          <h1 className="text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
            Todo lo que va
            <br />
            <span className="text-brand-light">bajo tus pies.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Pisos flotantes y SPC, alfombras, pasillos, pasto sintético y espuma de polietileno.
            Venta por mayor a distribuidores, constructoras e instaladores.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#/#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-light px-7 py-4 font-bold text-white transition-colors hover:bg-white hover:text-brand-dark"
            >
              Cotizar por mayor
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#/#lineas"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 font-bold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Ver las 8 líneas
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6">
        <div className="grid grid-cols-5 gap-2 sm:gap-4">
          {SLIDES.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setActual(i)}
              className="group text-left"
              aria-label={`Ver ${s.etiqueta}`}
              aria-current={i === actual}
            >
              <span className="block h-0.5 overflow-hidden bg-white/25">
                <span
                  key={i === actual ? `on-${actual}` : "off"}
                  className="block h-full origin-left bg-white"
                  style={
                    i === actual && !reducir
                      ? { animation: `progress ${DURACION}ms linear forwards` }
                      : { transform: `scaleX(${i === actual ? 1 : 0})` }
                  }
                />
              </span>
              <span
                className={`mt-3 hidden text-sm font-semibold transition-colors sm:block ${
                  i === actual ? "text-white" : "text-white/50 group-hover:text-white/80"
                }`}
              >
                {s.etiqueta}
              </span>
            </button>
          ))}
        </div>
        <a
          href={SLIDES[actual].href}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white/80 hover:text-white sm:hidden"
        >
          {SLIDES[actual].etiqueta} <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

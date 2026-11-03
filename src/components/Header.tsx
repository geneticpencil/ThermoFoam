import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { catalogData } from "../data/catalog";
import { CONTACTO } from "../data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  const solid = scrolled || menuOpen;
  const linkColor = solid ? "text-ink/80 hover:text-brand-light" : "text-white/85 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(15,18,54,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-20">
        <a href="#/" className="flex items-center gap-3" aria-label="Thermofoam, inicio">
          <img src="/images/v2/logo-icono.png" alt="" className="h-9 w-auto rounded-md" />
          <span className={`font-display text-lg font-extrabold tracking-tight ${solid ? "text-brand-dark" : "text-white"}`}>
            THERMO<span className="text-brand-light">FOAM</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          <div className="group relative">
            <button className={`flex items-center gap-1 py-3 text-sm font-semibold transition-colors ${linkColor}`}>
              Productos <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-1/2 top-full w-[640px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              <div className="grid grid-cols-2 gap-1 rounded-2xl border border-line bg-white p-3 shadow-2xl shadow-ink/10">
                {catalogData.map((cat) => (
                  <a
                    key={cat.id}
                    href={`#/categoria/${cat.id}`}
                    className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-sand"
                  >
                    <img src={cat.image} alt="" className="h-12 w-12 flex-none rounded-lg object-cover" loading="lazy" />
                    <span>
                      <span className="block text-sm font-semibold text-ink">{cat.name}</span>
                      <span className="block text-xs text-ink/50">
                        {cat.products.length} {cat.products.length === 1 ? "producto" : "productos"}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <a href="#/#lineas" className={`text-sm font-semibold transition-colors ${linkColor}`}>Líneas</a>
          <a href="#/#espuma" className={`text-sm font-semibold transition-colors ${linkColor}`}>Espuma</a>
          <a href="#/#clientes" className={`text-sm font-semibold transition-colors ${linkColor}`}>Clientes</a>
          <a href="#/#contacto" className={`text-sm font-semibold transition-colors ${linkColor}`}>Contacto</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${CONTACTO.telefono}`}
            className={`hidden items-center gap-2 text-sm font-semibold xl:flex ${solid ? "text-brand-dark" : "text-white"}`}
          >
            <Phone size={16} /> {CONTACTO.telefonoVisible}
          </a>
          <a
            href="#/#contacto"
            className="hidden rounded-full bg-brand-light px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark sm:inline-flex xl:ml-4"
          >
            Cotizar por mayor
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`rounded-full p-2 lg:hidden ${solid ? "text-ink" : "text-white"}`}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
            aria-label="Menú móvil"
          >
            <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto px-4 pb-8 pt-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-ink/40">Productos</p>
              <div className="grid grid-cols-2 gap-2">
                {catalogData.map((cat) => (
                  <a key={cat.id} href={`#/categoria/${cat.id}`} className="flex items-center gap-2 rounded-xl bg-sand p-2">
                    <img src={cat.image} alt="" className="h-10 w-10 flex-none rounded-lg object-cover" loading="lazy" />
                    <span className="text-sm font-semibold leading-tight">{cat.name}</span>
                  </a>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-1 text-lg font-semibold">
                <a href="#/#espuma" className="py-2">Espuma de polietileno</a>
                <a href="#/#clientes" className="py-2">Clientes</a>
                <a href="#/#contacto" className="py-2">Contacto</a>
              </div>
              <a
                href="#/#contacto"
                className="mt-6 flex justify-center rounded-full bg-brand-light px-6 py-3.5 font-bold text-white"
              >
                Cotizar por mayor
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

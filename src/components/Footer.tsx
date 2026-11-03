import { catalogData } from "../data/catalog";
import { CONTACTO, linkWhatsApp } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#/" className="flex items-center gap-3">
            <img src="/images/v2/logo-icono.png" alt="" className="h-9 w-auto rounded-md" />
            <span className="font-display text-lg font-extrabold text-white">
              THERMO<span className="text-brand-light">FOAM</span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Plásticos Thermofoam Ltda. Espuma de polietileno, pisos, alfombras y pasto sintético para venta por mayor.
          </p>
          <p className="mt-5 text-sm">
            ¿Compras para tu hogar? Visita nuestra tienda{" "}
            <a href="https://www.cannonconcept.cl" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-brand-light">
              Cannon Concept
            </a>
            .
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-white">Productos</p>
          <ul className="grid gap-2 text-sm">
            {catalogData.map((c) => (
              <li key={c.id}>
                <a href={`#/categoria/${c.id}`} className="hover:text-white">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-white">Contacto</p>
          <ul className="grid gap-2 text-sm">
            <li>{CONTACTO.vendedor} · {CONTACTO.cargo}</li>
            <li><a href={`tel:${CONTACTO.telefono}`} className="hover:text-white">{CONTACTO.telefonoVisible}</a></li>
            <li><a href={`mailto:${CONTACTO.email}`} className="hover:text-white">{CONTACTO.email}</a></li>
            <li><a href={linkWhatsApp("Hola, quiero cotizar productos Thermofoam.")} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a></li>
            <li className="pt-2"><a href={CONTACTO.mapa} target="_blank" rel="noopener noreferrer" className="hover:text-white">{CONTACTO.direccion}</a></li>
            <li>{CONTACTO.horario}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs sm:px-6">
          © {new Date().getFullYear()} Plásticos Thermofoam Ltda. · RUT 76.030.388-7
        </p>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { catalogData } from "./data/catalog";
import { linkWhatsApp } from "./data/site";
import Header from "./components/Header";
import Home from "./components/Home";
import CategoryPage from "./components/CategoryPage";
import Footer from "./components/Footer";

const TITULO_BASE = "Plásticos Thermofoam — Pisos, alfombras y espuma por mayor";

// Rutas por hash: "#/" inicio, "#/#seccion" inicio + scroll, "#/categoria/<id>".
// "#seccion" (formato del sitio anterior) también se acepta.
function leerRuta(): { categoria?: string; seccion?: string } {
  const h = window.location.hash;
  if (h.startsWith("#/categoria/")) {
    const id = h.slice("#/categoria/".length);
    if (catalogData.some((c) => c.id === id)) return { categoria: id };
    return {};
  }
  if (h.startsWith("#/#")) return { seccion: h.slice(3) };
  if (h.startsWith("#") && !h.startsWith("#/") && h.length > 1) return { seccion: h.slice(1) };
  return {};
}

function irASeccion(id: string) {
  // Espera a que la página de inicio esté montada antes de hacer scroll.
  setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 60);
}

export default function App() {
  const [ruta, setRuta] = useState(leerRuta);
  const [prefill, setPrefill] = useState("");

  useEffect(() => {
    const alCambiar = () => {
      const nueva = leerRuta();
      setRuta(nueva);
      if (nueva.seccion) irASeccion(nueva.seccion);
      else window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    // Un link a la misma sección no dispara hashchange: igual hay que hacer scroll.
    const alClic = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      const href = a?.getAttribute("href");
      if (href && href.startsWith("#/#") && href === window.location.hash) irASeccion(href.slice(3));
    };
    window.addEventListener("hashchange", alCambiar);
    document.addEventListener("click", alClic);
    if (ruta.seccion) irASeccion(ruta.seccion);
    return () => {
      window.removeEventListener("hashchange", alCambiar);
      document.removeEventListener("click", alClic);
    };
  }, []);

  const categoria = catalogData.find((c) => c.id === ruta.categoria);

  useEffect(() => {
    document.title = categoria ? `${categoria.name} por mayor — Plásticos Thermofoam` : TITULO_BASE;
  }, [categoria]);

  const cotizar = (texto: string) => {
    setPrefill(texto);
    if (window.location.hash === "#/#contacto") irASeccion("contacto");
    else window.location.hash = "#/#contacto";
  };

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Header />
      <main>
        {categoria ? <CategoryPage key={categoria.id} categoria={categoria} onCotizar={cotizar} /> : <Home prefill={prefill} />}
      </main>
      <Footer />

      <a
        href={linkWhatsApp("Hola Sergio, quiero cotizar productos Thermofoam por mayor.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-4 font-bold text-ink shadow-xl shadow-black/20 transition hover:scale-105 sm:px-5 sm:py-3.5"
        aria-label="Escribir por WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}

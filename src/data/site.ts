// Datos de contacto y textos generales del sitio. Cambiar aquí, no en los componentes.

export const CONTACTO = {
  vendedor: "Sergio Fuentes",
  cargo: "Ventas por mayor",
  telefono: "+56998563785",
  telefonoVisible: "+56 9 9856 3785",
  whatsapp: "56998563785",
  email: "sergio@thermofoam.cl",
  direccion: "Los Nogales Poniente 32-A, Lampa",
  region: "Región Metropolitana",
  horario: "Lunes a viernes, 9:00 a 18:00",
  mapa: "https://maps.google.com/?q=Los+Nogales+Poniente+32-A,+Lampa",
};

// Web app de Apps Script (cuenta jdgarcia@thermofoam.cl, carpeta google-form-backend/)
// que guarda cada cotización en la planilla "Cotizaciones web thermofoam.cl" y avisa
// por correo a Sergio. Vacía = el formulario deriva a WhatsApp.
export const FORM_ENDPOINT =
  import.meta.env.VITE_FORM_ENDPOINT ??
  "https://script.google.com/macros/s/AKfycbx6JjAVsFc2wva-Pzg0yJt-rV2FJboz5TdQjetNuk4ckme-NIR_K6uppcDdwSuUJol7lw/exec";

export function linkWhatsApp(texto: string) {
  return `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(texto)}`;
}

export const SEGMENTOS = [
  {
    titulo: "Distribuidores y ferreterías",
    texto: "Rollos, cajas y pallets con precio por volumen para reventa.",
  },
  {
    titulo: "Constructoras e inmobiliarias",
    texto: "Pisos, espuma niveladora y alfombra muro a muro para obra nueva.",
  },
  {
    titulo: "Instaladores y decoradores",
    texto: "Stock en bodega y fichas técnicas para resolver cada proyecto.",
  },
  {
    titulo: "Eventos y comercio",
    texto: "Pasillos de gala, cubrepisos y pasto sintético para montajes.",
  },
];

export const GALERIA = [
  { src: "/images/v2/spc-natural.webp", titulo: "Piso SPC", detalle: "Natural Oak · impermeable" },
  { src: "/images/v2/alfombra-dalton.webp", titulo: "Alfombra Dalton", detalle: "Gris Perla · bucle" },
  { src: "/images/v2/pasillo-sarah.webp", titulo: "Pasillo Sarah", detalle: "Nylon · 0,67 m" },
  { src: "/images/v2/spc-ceniza.webp", titulo: "Piso SPC", detalle: "Ceniza Oak · 5 mm" },
  { src: "/images/v2/alfombra-oficina.webp", titulo: "Alfombra muro a muro", detalle: "Oficinas" },
  { src: "/images/v2/flotante-oficina.webp", titulo: "Piso flotante", detalle: "Espacios comerciales" },
  { src: "/images/v2/alfombra-bali-persona.webp", titulo: "Alfombra Bali", detalle: "Visón · bucle" },
];

// Recibe el formulario de cotización de thermofoam.cl, lo guarda en una planilla
// de Google y avisa por correo al vendedor. Se publica como "Aplicación web"
// (ejecutar como: yo · acceso: cualquier usuario). La URL /exec va en la
// constante FORM_ENDPOINT de src/data/site.ts.

const AVISAR_A = "sergio@thermofoam.cl";
const NOMBRE_PLANILLA = "Cotizaciones web thermofoam.cl";
const COLUMNAS = ["Fecha", "Nombre", "Empresa", "Teléfono", "Correo", "Tipo de cliente", "Comuna", "Productos", "Detalle", "Página"];

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.website) return respuesta({ ok: true }); // trampa para bots
  if (!p.nombre || !p.telefono || !p.email) return respuesta({ ok: false, error: "faltan datos" });

  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    hoja().appendRow([
      new Date(),
      limpiar(p.nombre),
      limpiar(p.empresa),
      limpiar(p.telefono),
      limpiar(p.email),
      limpiar(p.tipo),
      limpiar(p.comuna),
      limpiar(p.lineas),
      limpiar(p.mensaje, 3000),
      limpiar(p.origen),
    ]);
  } finally {
    lock.releaseLock();
  }

  MailApp.sendEmail({
    to: AVISAR_A,
    replyTo: p.email,
    name: "thermofoam.cl",
    subject: `Nueva cotización web: ${limpiar(p.nombre)}${p.empresa ? " — " + limpiar(p.empresa) : ""}`,
    htmlBody: correo(p),
  });
  return respuesta({ ok: true });
}

// Para probar desde el editor: crea la planilla si no existe y muestra su URL.
function configurar() {
  Logger.log(hoja().getParent().getUrl());
}

function hoja() {
  const props = PropertiesService.getScriptProperties();
  let id = props.getProperty("SHEET_ID");
  let libro;
  if (id) {
    libro = SpreadsheetApp.openById(id);
  } else {
    libro = SpreadsheetApp.create(NOMBRE_PLANILLA);
    props.setProperty("SHEET_ID", libro.getId());
    const h = libro.getSheets()[0];
    h.setName("Cotizaciones");
    h.appendRow(COLUMNAS);
    h.setFrozenRows(1);
    h.getRange(1, 1, 1, COLUMNAS.length).setFontWeight("bold").setBackground("#242868").setFontColor("#ffffff");
  }
  return libro.getSheetByName("Cotizaciones");
}

function limpiar(v, max) {
  // Evita que un texto que empieza con = + - @ se interprete como fórmula en la planilla.
  let s = String(v || "").trim().slice(0, max || 300);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function correo(p) {
  const fila = (k, v) => v ? `<tr><td style="padding:6px 12px 6px 0;color:#666">${k}</td><td style="padding:6px 0"><b>${esc(v)}</b></td></tr>` : "";
  return `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#0F1236">
      <h2 style="color:#242868;margin:0 0 12px">Nueva solicitud de cotización</h2>
      <table style="border-collapse:collapse">
        ${fila("Nombre", p.nombre)}${fila("Empresa", p.empresa)}${fila("Teléfono", p.telefono)}
        ${fila("Correo", p.email)}${fila("Tipo de cliente", p.tipo)}${fila("Comuna", p.comuna)}
        ${fila("Productos", p.lineas)}
      </table>
      <p style="margin-top:16px;white-space:pre-wrap;background:#F5F2EC;padding:12px;border-radius:8px">${esc(p.mensaje)}</p>
      <p style="color:#888;font-size:12px">Responde este correo para contestarle directo al cliente. Todas las solicitudes quedan en la planilla "${NOMBRE_PLANILLA}".</p>
    </div>`;
}

function esc(s) {
  return String(s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function respuesta(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

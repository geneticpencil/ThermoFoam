/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Package, 
  Layers, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

const LOGO_URL = "/images/Imagen1.png"; // User logo

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Productos", href: "#productos" },
    { name: "Usos", href: "#usos" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {!logoError && (
              <img 
                src={LOGO_URL} 
                alt="ThermoFoam Logo" 
                className="h-10 w-auto" 
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
              />
            )}
            <span className={`font-bold text-xl tracking-tight ${scrolled ? "text-brand-dark" : "text-brand-dark"}`}>
              THERMO<span className="text-brand-light">FOAM</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium hover:text-brand-light transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+56975697974"
              className="bg-brand-dark text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-light transition-all flex items-center gap-2"
            >
              <Phone size={16} />
              Llamar ahora
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium border-b border-slate-100 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+56975697974"
              className="bg-brand-dark text-white px-5 py-3 rounded-xl text-center font-semibold flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              +569 7569 7974
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-light/5 -skew-x-12 transform translate-x-1/4 -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-light/10 text-brand-light text-xs font-bold uppercase tracking-wider mb-6">
              Líderes en Aislación y Embalaje
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-brand-dark leading-[1.1] mb-6">
              Espuma de Polietileno <span className="text-brand-light">Expandido</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Soluciones versátiles y de alta calidad para la construcción y logística. 
              Ideal para bajo piso flotante y protección de productos delicados.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contacto" 
                className="bg-brand-dark text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-light transition-all shadow-lg shadow-brand-dark/20 flex items-center gap-2 group"
              >
                Cotizar Ahora
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#productos" 
                className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all"
              >
                Ver Productos
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/hero.png" 
                alt="Detalle de espuma de polietileno expandido" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-light rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-dark rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="text-brand-light" size={32} />,
                title: "Alta Resistencia",
                desc: "Material duradero que soporta presiones y protege contra impactos."
              },
              {
                icon: <CheckCircle2 className="text-brand-light" size={32} />,
                title: "Aislación Térmica",
                desc: "Excelente barrera contra el frío y la humedad, ideal para pisos."
              },
              {
                icon: <Package className="text-brand-light" size={32} />,
                title: "Versatilidad",
                desc: "Disponible en diversos espesores para múltiples aplicaciones industriales."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Section */}
      <section id="productos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Nuestros Productos</h2>
            <p className="text-lg text-slate-600">
              Ofrecemos soluciones integrales para la construcción, decoración y embalaje.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Producto 1: Espuma */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/espuma.png" 
                  alt="Rollos de Espuma de Polietileno Expandido" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-3">Espuma de Polietileno</h3>
                <p className="text-slate-600 mb-4">Rollos de espuma niveladora y aislante, ideal para bajo piso flotante y protección de embalaje. Excelente absorción de impactos.</p>
              </div>
            </div>

            {/* Producto 2: Piso Flotante */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/piso.png" 
                  alt="Piso Flotante" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-3">Piso Flotante</h3>
                <p className="text-slate-600 mb-4">Diseños modernos y duraderos. Fácil instalación y excelente resistencia al desgaste diario para renovar cualquier espacio.</p>
              </div>
            </div>

            {/* Producto 3: Alfombras */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/alfombra.png" 
                  alt="Alfombras Muro a Muro" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-3">Alfombras Muro a Muro</h3>
                <p className="text-slate-600 mb-4">Confort y calidez para tus espacios. Variedad de texturas y colores para proyectos residenciales y comerciales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Uses Section */}
      <section id="usos" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Aplicaciones Principales</h2>
            <p className="text-lg text-slate-600">
              Nuestra espuma de polietileno expandido es la solución preferida por profesionales para diversos usos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="group relative overflow-hidden rounded-[2.5rem] aspect-video md:aspect-auto md:h-[500px]">
              <img 
                src="/images/uso-piso.png" 
                alt="Instalación de piso flotante" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-3xl font-bold text-white mb-4">Pisos Flotantes</h3>
                <p className="text-white/80 mb-6">
                  Actúa como una barrera de humedad y niveladora, proporcionando una base suave y silenciosa para sus pisos.
                </p>
                <ul className="space-y-2">
                  {["Nivelación de superficies", "Aislación acústica", "Barrera de vapor"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/90 text-sm">
                      <CheckCircle2 size={16} className="text-brand-light" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2.5rem] aspect-video md:aspect-auto md:h-[500px]">
              <img 
                src="/images/uso-embalaje.png" 
                alt="Embalaje protector" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-light/90 via-brand-light/20 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-3xl font-bold text-white mb-4">Embalaje y Protección</h3>
                <p className="text-white/80 mb-6">
                  Protección superior para productos frágiles durante el transporte y almacenamiento.
                </p>
                <ul className="space-y-2">
                  {["Protección contra impactos", "No raya superficies", "Ligero y económico"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/90 text-sm">
                      <CheckCircle2 size={16} className="text-white" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-light rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-light rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">¿Listo para cotizar?</h2>
              <p className="text-xl text-white/70 mb-12">
                Estamos en Lampa para servir a toda la Región Metropolitana. Contáctanos para precios por mayor y menor.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-brand-light" size={28} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm uppercase font-bold tracking-widest mb-1">Teléfono</p>
                    <a href="tel:+56975697974" className="text-2xl font-bold hover:text-brand-light transition-colors">
                      +569 7569 7974
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-light" size={28} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm uppercase font-bold tracking-widest mb-1">Dirección</p>
                    <a 
                      href="https://maps.google.com/?q=Los+Nogales+Poniente+32a,+Lampa,+Chile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl font-bold hover:text-brand-light transition-colors block"
                    >
                      Los Nogales Poniente 32a,<br />Lampa, Chile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 text-slate-900 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
              {formState === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-green-800 mb-2">¡Mensaje Enviado!</h4>
                  <p className="text-green-700">
                    Gracias por contactarnos. Hemos recibido tu mensaje en administracion@thermofoam.cl y te responderemos a la brevedad.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-6 text-brand-light font-semibold hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form 
                  className="space-y-4" 
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setFormState('submitting');
                    
                    try {
                      const response = await fetch('https://formspree.io/f/xaqpryaz', {
                        method: 'POST',
                        body: new FormData(e.currentTarget),
                        headers: {
                          'Accept': 'application/json'
                        }
                      });
                      
                      if (response.ok) {
                        setFormState('success');
                        (e.target as HTMLFormElement).reset();
                      } else {
                        alert("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.");
                        setFormState('idle');
                      }
                    } catch (error) {
                      alert("Error de conexión. Intenta nuevamente.");
                      setFormState('idle');
                    }
                  }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-500">Nombre</label>
                      <input name="name" type="text" required disabled={formState === 'submitting'} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-light/50 transition-all disabled:opacity-50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-500">Teléfono</label>
                      <input name="phone" type="tel" required disabled={formState === 'submitting'} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-light/50 transition-all disabled:opacity-50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-500">Correo Electrónico</label>
                    <input name="email" type="email" required disabled={formState === 'submitting'} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-light/50 transition-all disabled:opacity-50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-500">Mensaje / Requerimiento</label>
                    <textarea name="message" rows={4} required disabled={formState === 'submitting'} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-light/50 transition-all resize-none disabled:opacity-50"></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="w-full bg-brand-light text-white font-bold py-4 rounded-xl hover:bg-brand-dark transition-all shadow-lg shadow-brand-light/20 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                  >
                    {formState === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      "Enviar Mensaje"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            {!logoError && (
              <img 
                src={LOGO_URL} 
                alt="ThermoFoam Logo" 
                className="h-8 w-auto" 
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
              />
            )}
            <span className="font-bold text-lg tracking-tight text-brand-dark">
              THERMO<span className="text-brand-light">FOAM</span>
            </span>
          </div>
          
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} ThermoFoam Chile. Todos los derechos reservados.
          </p>

        </div>
      </footer>
    </div>
  );
}

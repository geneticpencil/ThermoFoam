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
  ArrowRight,
  Download,
  MessageCircle,
  ChevronLeft
} from "lucide-react";
import { useState, useEffect } from "react";
import { catalogData } from "./data/catalog";

const LOGO_URL = "/images/Imagen1.png"; // User logo

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [logoError, setLogoError] = useState(false);
  const [currentRoute, setCurrentRoute] = useState<{ type: 'home' | 'category'; param?: string }>({ type: 'home' });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/categoria/')) {
        const categoryId = hash.replace('#/categoria/', '');
        const categoryExists = catalogData.some(cat => cat.id === categoryId);
        if (categoryExists) {
          setCurrentRoute({ type: 'category', param: categoryId });
          window.scrollTo({ top: 0, behavior: 'instant' as any });
          
          const category = catalogData.find(cat => cat.id === categoryId);
          if (category) {
            document.title = `${category.name} - Plásticos Thermofoam`;
          }
          return;
        }
      }
      
      setCurrentRoute({ type: 'home' });
      document.title = "Plásticos Thermofoam - Espuma de Polietileno Expandido";
      if (hash && !hash.startsWith('#/')) {
        const targetId = hash.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
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
          <div className="flex items-center gap-4 md:gap-6">
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
              <span className={`font-bold text-xl tracking-tight hidden sm:block ${scrolled ? "text-brand-dark" : "text-brand-dark"}`}>
                THERMO<span className="text-brand-light">FOAM</span>
              </span>
            </div>
            
            {/* Cannon Concept Logo */}
            <a href="https://www.cannonconcept.cl" target="_blank" rel="noopener noreferrer" className="border-l-2 border-slate-200 pl-4 md:pl-6 hover:opacity-80 transition-opacity flex items-center">
              <img src="/images/cannon.png" alt="Cannon Concept Logo" className="h-8 md:h-10 w-auto object-contain" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-medium hover:text-brand-light transition-colors">Inicio</a>
            
            {/* Dropdown de Categorías */}
            <div className="relative group">
              <button className="text-sm font-medium hover:text-brand-light transition-colors flex items-center gap-1 cursor-pointer py-2">
                Productos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 bg-white border border-slate-100 shadow-xl rounded-2xl py-3 w-64 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                {catalogData.map((cat) => (
                  <a
                    key={cat.id}
                    href={`#/categoria/${cat.id}`}
                    className="block px-5 py-2.5 text-sm hover:bg-slate-50 hover:text-brand-light transition-colors font-medium text-slate-700"
                  >
                    {cat.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="#usos" className="text-sm font-medium hover:text-brand-light transition-colors">Usos</a>
            <a href="#contacto" className="text-sm font-medium hover:text-brand-light transition-colors">Contacto</a>
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
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden overflow-y-auto max-h-[80vh]"
          >
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium border-b border-slate-100 pb-2">Inicio</a>
            
            <div className="flex flex-col gap-2 pl-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Catálogo</span>
              {catalogData.map((cat) => (
                <a
                  key={cat.id}
                  href={`#/categoria/${cat.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-semibold text-brand-dark hover:text-brand-light transition-colors py-1.5 border-b border-slate-50"
                >
                  {cat.name}
                </a>
              ))}
            </div>

            <a href="#usos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium border-b border-slate-100 pb-2">Usos</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium border-b border-slate-100 pb-2">Contacto</a>
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

      {currentRoute.type === 'home' ? (
        <>
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
                    className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
                  >
                    Ver Productos
                  </a>
                  
                  <div className="w-full flex flex-col sm:flex-row gap-4 mt-2">
                    <a 
                      href="https://drive.google.com/uc?export=download&id=18aMP_XKzOk3nS9gaq_9EBJQRgy2SAZO8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-light/10 text-brand-dark px-6 py-4 rounded-2xl font-bold hover:bg-brand-light/20 transition-all flex items-center justify-center gap-2 flex-1 text-center text-sm md:text-base"
                    >
                      Descargar Catálogo Flooring
                      <Download size={18} />
                    </a>
                    <a 
                      href="https://drive.google.com/uc?export=download&id=1luh7WnAhleLkDl8t_N781dfe7VNjceJS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-dark/10 text-brand-dark px-6 py-4 rounded-2xl font-bold hover:bg-brand-dark/20 transition-all flex items-center justify-center gap-2 flex-1 text-center text-sm md:text-base"
                    >
                      Descargar Catálogo Alfombras Dimensionadas
                      <Download size={18} />
                    </a>
                  </div>
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
                    alt="Detalle de espuma de polietileno expandido de ThermoFoam" 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                    fetchPriority="high"
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
                  Ofrecemos soluciones integrales de alta calidad para construcción, decoración y embalaje, extraídas directamente de nuestro catálogo oficial.
                </p>
              </div>

              {/* Grilla Dinámica de Categorías */}
              <div className="grid md:grid-cols-3 gap-8">
                {catalogData.map((cat) => (
                  <div key={cat.id} className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-100 group flex flex-col h-full">
                    <div className="h-64 overflow-hidden relative bg-slate-100">
                      <img 
                        src={cat.image} 
                        alt={cat.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 bg-brand-dark/80 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                        {cat.products.length} {cat.products.length === 1 ? 'Línea' : 'Líneas'}
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-1 justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-3">{cat.name}</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed text-sm">{cat.description}</p>
                      </div>
                      <a 
                        href={`#/categoria/${cat.id}`}
                        className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white px-6 py-3.5 rounded-2xl font-bold hover:bg-brand-light transition-all text-sm w-full text-center"
                      >
                        Ver Línea Completa
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                ))}
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
                    alt="Base niveladora y barrera de humedad para pisos flotantes" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
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
                    alt="Embalaje protector y amortiguación de impactos con espuma de polietileno" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
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

                    {/* Google Map Embedded */}
                    <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-white/10 mt-8">
                      <iframe 
                        src="https://maps.google.com/maps?q=Los+Nogales+Poniente+32a,+Lampa,+Chile&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
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
        </>
      ) : (
        /* Detailed Category View */
        (() => {
          const categoryId = currentRoute.param;
          const category = catalogData.find(cat => cat.id === categoryId);
          if (!category) return null;

          return (
            <div className="bg-white min-h-screen">
              {/* Category Header */}
              <div className="bg-slate-50 pt-32 pb-16 md:pt-40 md:pb-24 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                  <a 
                    href="#productos" 
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-light font-bold text-sm mb-6 transition-colors"
                  >
                    <ChevronLeft size={20} />
                    Volver al Inicio
                  </a>
                  <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mb-4">
                    {category.name}
                  </h1>
                  <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Product Listing */}
              <div className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 space-y-24">
                  {category.products.map((product, idx) => (
                    <div 
                      key={idx} 
                      className={`flex flex-col lg:flex-row gap-12 items-center ${
                        idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                      } pb-16 border-b border-slate-100 last:border-0 last:pb-0`}
                    >
                      {/* Product Image */}
                      <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden shadow-lg aspect-video max-h-[360px] md:max-h-[400px] bg-slate-100">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover" 
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4 bg-brand-light text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                          {product.type}
                        </div>
                      </div>

                      {/* Product Specifications & Details */}
                      <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{product.name}</h2>
                        
                        {product.fiber && (
                          <div className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit">
                            Composición: {product.fiber}
                          </div>
                        )}

                        <p className="text-slate-600 mb-6 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Muestrario de Colores */}
                        {product.colors && product.colors.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Colores / Diseños Disponibles</h4>
                            <div className="flex flex-wrap gap-2">
                              {product.colors.map((color, cIdx) => (
                                <span 
                                  key={cIdx} 
                                  className="bg-slate-50 text-slate-700 border border-slate-200 px-3.5 py-1.5 rounded-xl text-xs font-semibold"
                                >
                                  {color}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Ficha Técnica Table */}
                        <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
                          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Especificaciones Técnicas</h3>
                          <div className="divide-y divide-slate-150">
                            {Object.entries(product.specs).map(([key, val]) => (
                              <div key={key} className="flex justify-between py-2.5 text-sm">
                                <span className="font-medium text-slate-500">{key}</span>
                                <span className="font-bold text-brand-dark text-right">{val}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* WhatsApp quote button */}
                        <a 
                          href={`https://wa.me/56975697974?text=Hola,%20quisiera%20cotizar%20el%20siguiente%20producto:%20${encodeURIComponent(product.name)}%20de%20la%20categoría%20${encodeURIComponent(category.name)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#20ba5a] transition-all w-full md:w-fit"
                        >
                          <MessageCircle size={20} />
                          Cotizar este Producto
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()
      )}

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              {!logoError && (
                <img 
                  src={LOGO_URL} 
                  alt="ThermoFoam Logo Chile" 
                  className="h-8 w-auto" 
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                  loading="lazy"
                />
              )}
              <span className="font-bold text-lg tracking-tight text-brand-dark">
                THERMO<span className="text-brand-light">FOAM</span>
              </span>
            </div>
            
            {/* Cannon Concept Logo Footer */}
            <a href="https://www.cannonconcept.cl" target="_blank" rel="noopener noreferrer" className="border-l-2 border-slate-200 pl-4 md:pl-6 hover:opacity-80 transition-opacity flex items-center">
              <img src="/images/cannon.png" alt="Cannon Concept Logo Chile" className="h-6 md:h-8 w-auto object-contain" loading="lazy" />
            </a>
          </div>
          
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} ThermoFoam Chile. Todos los derechos reservados.
          </p>

        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/56975697974?text=Hola,%20quisiera%20cotizar%20sus%20productos%20ThermoFoam."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-[bounce_3s_infinite]"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.062-.173-.297-.018-.458.13-.606.134-.133-.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}

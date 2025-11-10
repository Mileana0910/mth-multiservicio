// components/sections/AboutSection.jsx (CONTENIDO CENTRADO)
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Heart, Users, Shield, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const aboutPoints = [
  {
    icon: Heart,
    title: "Personas que cuidan personas",
    description: "Somos técnicos boyacenses que ponemos el corazón en cada servicio, uniendo talento y tecnología.",
    color: "from-blue-400/20 to-blue-500/10"
  },
  {
    icon: Users,
    title: "Comprometidos con nuestra gente", 
    description: "Trabajamos por las familias del Sugamuxi y Tundama con servicios confiables y garantizados.",
    color: "from-blue-500/20 to-blue-600/10"
  },
  {
    icon: Shield,
    title: "Construimos confianza",
    description: "Cada visita refleja nuestra pasión por el trabajo bien hecho y la confianza duradera.",
    color: "from-blue-600/20 to-blue-700/10"
  }
];

const carouselImages = [
  {
    src: "/images/avatarPintor.jpeg",
    alt: "Equipo MTH trabajando en plomería",
    title: "Equipo Especializado",
    description: "Técnicos certificados en cada área"
  },
  {
    src: "/images/avatarElectricista.jpeg",
    alt: "Técnico MTH realizando instalación eléctrica",
    title: "Expertos en Electricidad", 
    description: "Soluciones seguras para tu hogar"
  },
  {
    src: "/images/avatarPlomero.jpeg",
    alt: "Servicio de impermeabilización MTH",
    title: "Impermeabilización",
    description: "Protección completa para tu vivienda"
  },
  {
    src: "/images/avatarMantenimiento.jpeg",
    alt: "Mantenimiento general del hogar",
    title: "Mantenimiento Integral",
    description: "Cuidamos cada detalle de tu hogar"
  }
];

export function AboutSection() {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section id="nosotros" className="py-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-orange-500/5 rounded-full blur-3xl -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue-500/5 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-brand-orange-500/10 rounded-full px-4 py-2 mb-4">
            <Users className="w-4 h-4 text-brand-orange-500" />
            <span className="text-brand-orange-500 font-semibold text-sm">QUIÉNES SOMOS</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
            Más que técnicos,{' '}
            <span className="bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 bg-clip-text text-transparent">
              vecinos de confianza
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos un grupo de técnicos Boyacenses que unimos el talento humano, la tecnología 
            y el cuidado del medio ambiente para ofrecer soluciones integrales.
          </p>
        </motion.div>

        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Tarjetas con contenido centrado */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {aboutPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`border border-blue-200 hover:border-brand-orange-400 transition-all duration-300 hover:shadow-lg group bg-gradient-to-br ${point.color} h-full`}>
                  <CardContent className="p-4 md:p-3"> 
                    <div className="flex items-start gap-4 h-full">
                      {/* Icono azul */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shadow-sm border border-blue-200 group-hover:shadow-md transition-all flex-shrink-0 mt-1" /* Añadido mt-1 */
                      >
                        <point.icon className="w-6 h-6 text-brand-blue-500" />
                      </motion.div>
                      
                      {/* Contenido con mejor espaciado vertical */}
                      <div className="flex-1 min-w-0 flex flex-col justify-center"> {/* Añadido flex-col justify-center */}
                        <h3 className="text-base font-bold text-gray-800 mb-3 group-hover:text-brand-blue-600 transition-colors">
                          {point.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* CTA con contenido centrado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6"
            >
              <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 hover:shadow-lg transition-all">
                <CardContent className="p-6"> {/* AUMENTADO de p-5 a p-6 */}
                  <div className="text-center flex flex-col justify-center h-full"> {/* Añadido flex-col justify-center h-full */}
                    <h3 className="text-sm font-semibold text-gray-800 mb-3">
                      ¿Quieres conocer nuestra historia completa?
                    </h3>
                    <p className="text-xs text-gray-600 mb-4">
                      Descubre por qué somos la elección de confianza en Boyacá
                    </p>
                    {/* Botón naranja */}
                    <Link 
                      to="/quienes-somos"
                      className="inline-flex items-center gap-2 bg-brand-orange-500 text-white px-5 py-2.5 rounded-lg hover:bg-brand-orange-600 transition-colors text-sm font-medium group mx-auto" /* Añadido mx-auto */
                    >
                      Conocer más
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column - Carrusel (sin cambios) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              {/* Carrusel Principal */}
              <div className="aspect-[4/3] relative">
                {carouselImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={{
                      opacity: currentSlide === index ? 1 : 0,
                      scale: currentSlide === index ? 1 : 1.02,
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/600x450/006DBA/FFFFFF?text=${encodeURIComponent(image.title)}`;
                      }}
                    />
                    
                    {/* Overlay de información más sutil */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white text-lg font-semibold mb-1">{image.title}</h3>
                      <p className="text-white/90 text-xs">{image.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Controles del carrusel */}
              <div className="absolute inset-0 flex items-center justify-between p-3">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.9)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-700" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.9)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="w-4 h-4 text-gray-700" />
                </motion.button>
              </div>

              {/* Indicadores del carrusel */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? "bg-white w-6 shadow-md" 
                        : "bg-white/60 hover:bg-white/80"
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            {/* Elemento decorativo */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-brand-orange-500/10 rounded-full blur-xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
// components/sections/ServicesSection.jsx
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { ServiceModal } from './ServiceModal';
import { Wrench, Shield, Home, CheckCircle, ArrowRight } from 'lucide-react';
import servicesData from '../../data/services.json';

const services = servicesData.services;
const specialService = servicesData.specialServices[0];

// Animación optimizada
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

function AnimatedCard({ children, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px",
    amount: 0.1 
  });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export function ServicesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { 
    once: true, 
    margin: "-50px" 
  });
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="servicios" className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - SUBIDO MÁS ARRIBA */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-brand-orange-500/10 rounded-full px-4 py-2 mb-3">
            <Wrench className="w-4 h-4 text-brand-orange-500" />
            <span className="text-brand-orange-500 font-semibold text-sm">NUESTROS SERVICIOS</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-4">
            Soluciones <span className="text-brand-orange-500">integrales</span> para tu hogar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl mx-auto mb-6">
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-8 h-8 bg-brand-orange-500/10 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-brand-orange-500" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-800 text-xs">Especialistas de confianza</h3>
                <p className="text-gray-600 text-xs">Técnicos calificados</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-8 h-8 bg-brand-orange-500/10 rounded-lg flex items-center justify-center">
                <Home className="w-4 h-4 text-brand-orange-500" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-800 text-xs">Soluciones integrales</h3>
                <p className="text-gray-600 text-xs">Atención completa</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-8 h-8 bg-brand-orange-500/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-brand-orange-500" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-800 text-xs">Calidad que perdura</h3>
                <p className="text-gray-600 text-xs">Resultados duraderos</p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Más que reparar, cuidamos tu hogar. Nuestro equipo está formado por técnicos boyacenses calificados, 
            honestos y cercanos que trabajan con dedicación para darte seguridad y tranquilidad en cada visita.
          </p>
        </motion.div>

        {/* Grid de servicios - TARJETAS MÁS PEQUEÑAS Y CON MÁS PROFUNDIDAD */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <AnimatedCard key={index} index={index}>
              <Card
                className="border border-gray-300 hover:border-brand-orange-400 transition-all duration-300 hover:shadow-xl group h-full cursor-pointer bg-white overflow-hidden shadow-md hover:-translate-y-1"
                onClick={() => setSelectedService(service)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Imagen - TAMAÑO REDUCIDO */}
                  <div className="relative h-32 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <motion.img
                      src={service.avatar}
                      alt={service.title}
                      className="w-full h-full object-contain p-3"
                      animate={{ 
                        scale: hoveredCard === index ? 1.08 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/300x128/006DBA/FFFFFF?text=${service.title}`;
                      }}
                    />
                    {/* Overlay de gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                  </div>

                  {/* Contenido de la tarjeta - MÁS COMPACTO */}
                  <div className="p-4 flex-grow">
                    <div className="text-center mb-2">
                      <h3 className="text-base font-bold text-gray-800 mb-1 group-hover:text-brand-orange-500 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <ul className="space-y-1 mb-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                          <motion.span 
                            className="text-brand-orange-500 flex-shrink-0"
                            animate={{ scale: hoveredCard === index ? 1.2 : 1 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            ✓
                          </motion.span>
                          <span className="text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Botón de acción - MÁS PEQUEÑO */}
                  <div className="px-4 pb-4 mt-auto">
                    <motion.div
                      animate={{ 
                        opacity: hoveredCard === index ? 1 : 0.8,
                      }}
                    >
                      <div className="bg-gradient-to-r from-brand-orange-500/10 to-brand-orange-500/5 rounded-lg p-2 border border-brand-orange-500/20 group-hover:border-brand-orange-500/40 group-hover:bg-brand-orange-500/15 transition-all duration-300">
                        <div className="flex items-center justify-center gap-1">
                          <span className="text-brand-orange-500 font-semibold text-xs">
                            Más información
                          </span>
                          <ArrowRight className="w-3 h-3 text-brand-orange-500 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>

        {/* Sección de Visitas y Diagnósticos - TAMBIÉN MÁS COMPACTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 md:mt-12"
        >
          <Card className="border-2 border-brand-orange-500 bg-gradient-to-br from-brand-orange-500/5 to-brand-orange-500/10 overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{specialService.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {specialService.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {specialService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                        <div className="w-5 h-5 bg-brand-orange-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 flex flex-col justify-center items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-32 h-32 rounded-2xl overflow-hidden border-4 border-brand-orange-500 shadow-lg mb-4"
                  >
                    <img
                      src={specialService.avatar}
                      alt={specialService.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/128x128/DB4715/FFFFFF?text=Visitas+MTH';
                      }}
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg p-4 border-2 border-brand-orange-500 w-full text-center shadow-lg"
                  >
                    <p className="text-xs text-gray-600 mb-1">Precio especial de lanzamiento</p>
                    <p className="text-2xl md:text-3xl font-bold text-brand-orange-500 mb-1">${specialService.price}</p>
                    <p className="text-xs text-gray-600 mb-2">+ {specialService.discount} descuento en tu servicio</p>
                    <p className="text-xs text-gray-500">Disponible en {specialService.locations.join(' & ')}</p>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedService && (
        <ServiceModal 
          isOpen={!!selectedService} 
          onClose={() => setSelectedService(null)} 
          service={selectedService} 
        />
      )}
    </section>
  );
}
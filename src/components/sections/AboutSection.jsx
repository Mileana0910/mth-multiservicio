import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Heart, Users, Shield, ChevronLeft, ChevronRight, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const aboutPoints = [
  {
    icon: Shield,
    title: "Confianza Garantizada",
    description: "Técnicos verificados con experiencia comprobada en cada servicio",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Users,
    title: "Compromiso Local", 
    description: "Vecinos que servimos a nuestra comunidad con honestidad y dedicación",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    icon: Heart,
    title: "Servicio Humano",
    description: "Trato personalizado y atención que valora a cada cliente",
    color: "text-green-600",
    bgColor: "bg-green-50"
  }
];

const carouselImages = [
  {
    src: "/images/IMG_9399.JPG",
    alt: "Equipo MTH",
    title: "Dedicación",
    description: "Trabajo bien hecho"
  },
  {
    src: "/images/IMG_9406.JPG",
    alt: "Servicios MTH",
    title: "Compromiso",
    description: "Clientes satisfechos"
  },
  {
    src: "/images/IMG_9415.JPG",
    alt: "MTH Multiservicios Total Hogar",
    title: "Profesionalismo",
    description: "Servicios de calidad garantizada"
  },
  {
    src: "/images/IMG_9405.JPG",
    alt: "MTH Multiservicios", 
    title: "Experiencia",
    description: "Años sirviendo a Boyacá"
  }
];

const features = [
  "Técnicos certificados",
  "Precios transparentes",
  "Atención inmediata", 
  "Garantía en servicios",
  "Materiales calidad",
  "Sogamoso y Duitama"
];

export function AboutSection() {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [isInView]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section id="nosotros" className="py-12 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Simple */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-4">
            <Users className="w-4 h-4 text-brand-blue-500" />
            <span className="text-brand-blue-500 font-medium text-sm">QUIÉNES SOMOS</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Más que técnicos,{' '}
            <span className="text-brand-orange-500">vecinos de confianza</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Técnicos boyacenses uniendo talento, tecnología y compromiso para soluciones integrales en tu hogar.
          </p>
        </motion.div>

        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Tarjetas Compactas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {aboutPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="border border-gray-200 hover:border-brand-orange-300 transition-all duration-300 hover:shadow-md group">
                  <CardContent className="p-4"> 
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 ${point.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <point.icon className={`w-5 h-5 ${point.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-800 mb-1">
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

            {/* Lista de características compacta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 rounded-lg p-4 border border-gray-200"
            >
              <h4 className="font-semibold text-gray-800 mb-3 text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Lo que nos diferencia
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-brand-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="text-xs">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA con margen a la izquierda para centrarlo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="ml-8" 
            >
              <Card className="border border-brand-orange-200 bg-orange-50">
                <CardContent className="p-4 text-center">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    ¿Quieres conocernos mejor?
                  </h3>
                  <Link 
                    to="/quienes-somos"
                    className="inline-flex items-center gap-2 bg-brand-orange-500 text-white px-4 py-2 rounded-lg hover:bg-brand-orange-600 transition-colors text-sm font-medium group"
                  >
                    Conocer más
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-8 lg:mt-5"
          >
            <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-200">
              <div className="aspect-[4/3] relative bg-gray-100">
                {carouselImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={{
                      opacity: currentSlide === index ? 1 : 0,
                      scale: currentSlide === index ? 1 : 1.02,
                    }}
                    transition={{ 
                      duration: 0.8, 
                      ease: "easeInOut" 
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/600x450/006DBA/FFFFFF?text=${encodeURIComponent(image.title)}`;
                      }}
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3">
                      <h3 className="text-white text-sm font-semibold mb-0.5">{image.title}</h3>
                      <p className="text-white/80 text-xs">{image.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="absolute inset-0 flex items-center justify-between p-2">
                <button
                  onClick={prevSlide}
                  className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-sm hover:bg-white transition-colors"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-700" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-sm hover:bg-white transition-colors"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="w-4 h-4 text-gray-700" />
                </button>
              </div>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? "bg-white w-6 shadow-lg" 
                        : "bg-white/60 hover:bg-white/80"
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
// components/common/Hero.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-[85vh] pt-24 pb-16 bg-gradient-to-br from-brand-orange-500 to-brand-orange-400 relative overflow-hidden"
    >
      {/* Fondo con ondas sutiles en naranja */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-orange-600/30 via-transparent to-brand-orange-400/20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(255,255,255,0.1)_50%,_transparent_75%)] bg-[length:20px_20px]"></div>
      </div>

      {/* Elementos decorativos modernos en naranja */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-brand-orange-600/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-brand-orange-400/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-white/10 rounded-lg blur-xl rotate-45"></div>
      <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-brand-orange-500/15 rounded-lg blur-xl -rotate-12"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Contenido izquierdo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            {/* Título principal */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight text-balance"
            >
              Soluciones{' '}
              <span className="text-yellow-400">confiables</span>,{' '}
              <span className="text-white">rápidas</span> y{' '}
              <span className="text-yellow-400">garantizadas</span>{' '}
              para tu hogar
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <p className="text-base md:text-lg text-white/95 leading-relaxed font-light bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <span className="text-white font-semibold">"En MTH entendemos que tu hogar es más que un espacio, es tu refugio.</span>{' '}
                Por eso cuidamos de él como si fuera el nuestro, ofreciendo{' '}
                <span className="text-white font-semibold">soluciones seguras, atención humana</span> y{' '}
                <span className="text-white font-semibold">técnicos de confianza</span> que siempre están contigo cuando más los necesitas."
              </p>
            </motion.div>

            {/* Features con checkboxes */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2"
            >
              {[
                { 
                  text: 'Confianza',
                  description: 'Técnicos verificados' 
                },
                { 
                  text: 'Rapidez', 
                  description: 'Respuesta inmediata' 
                },
                { 
                  text: 'Calidad', 
                  description: 'Garantía 30 días' 
                }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 group bg-gradient-to-br from-white/10 to-orange-600/20 backdrop-blur-sm rounded-xl p-3 border border-white/15 hover:border-orange-300/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-5 h-5 bg-orange-500/40 rounded-full border border-orange-400/50 group-hover:bg-orange-400/50 transition-all duration-200 flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-orange-100" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white">{item.text}</span>
                    <span className="text-xs text-orange-100/80">{item.description}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Columna derecha - Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Marco de la imagen */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative bg-gradient-to-br from-orange-200 to-orange-100 rounded-2xl p-3 shadow-2xl"
              >
                <div className="w-full h-auto rounded-xl overflow-hidden border-2 border-white/20">
                  <img 
                    src="/images/avatar_Hero-sinfondo.png"
                    alt="MTH Multiservicios - Técnico profesional especializado en reparaciones del hogar"
                    className="w-full h-auto object-contain max-h-[380px]"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x400/DB4715/FFFFFF?text=MTH+Multiservicios';
                    }}
                  />
                </div>
                
                {/* Efecto de brillo sutil */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none"></div>
              </motion.div>
              
              {/* Elementos decorativos */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-orange-500/30 rounded-full blur-xl"></div>
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-orange-300/20 rounded-full blur-lg"></div>
              
              {/* Sombra de acento */}
              <div className="absolute inset-0 rounded-2xl bg-orange-500/20 blur-md -z-10 translate-y-2 translate-x-2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
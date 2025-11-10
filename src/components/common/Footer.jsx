import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin, Clock, FileText, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const TikTok = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-5 h-5 text-white"
    fill="currentColor"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-3.77-1.105l-.001-.001z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px- lg:px-8">
        <div className="py-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
            
            {/* Logo Original y Redes Sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 flex justify-center md:justify-start"
            >
              <div className="text-center md:text-left">
                {/* Logo Original con Animación Mejorada */}
                <motion.div
                  className="mb-6 flex justify-center md:justify-start"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <motion.div
                    variants={{
                      rest: { 
                        scale: 1,
                        y: 0
                      },
                      hover: { 
                        scale: 1.05,
                        y: -5,
                        transition: {
                          duration: 0.4,
                          ease: "easeInOut"
                        }
                      }
                    }}
                    className="relative"
                  >
                    <motion.img 
                      src="/images/logo_2_MTH-footer.png" 
                      alt="MTH Multiservicios Total Hogar"
                      className="w-48 h-auto object-contain rounded-lg shadow-xl border-2 border-brand-orange-500/20"
                      whileHover={{
                        borderColor: "rgba(219, 71, 21, 0.4)",
                        boxShadow: "0 20px 40px rgba(219, 71, 21, 0.2)",
                        transition: { duration: 0.3 }
                      }}
                    />
                    {/* Efecto de brillo al hover */}
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-brand-orange-400/10 to-transparent"
                      variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 }
                      }}
                    />
                  </motion.div>
                </motion.div>
                
                {/* Lema o Eslogan */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-gray-400 text-sm max-w-xs text-center md:text-left mt-4"
                >
                  Cuidar tu hogar es cuidar de ti. En MTH ponemos el alma en cada reparación, porque sabemos que detrás de cada servicio hay una familia que confía en nosotros
                </motion.p>

                {/* Redes Sociales - Todas del mismo color y redondas */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex justify-center md:justify-start space-x-4 mt-6"
                >
                  {[
                    { 
                      icon: Facebook, 
                      href: 'https://facebook.com/multiserviciostotalhogar',
                      label: 'Facebook'
                    },
                    { 
                      icon: Instagram, 
                      href: 'https://instagram.com/multiserviciostotal_hogar',
                      label: 'Instagram'
                    },
                    { 
                      icon: TikTok, 
                      href: 'https://tiktok.com/@multiserviciostotal_hog',
                      label: 'TikTok'
                    }
                  ].map((social, index) => (
                    <motion.a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    >
                      <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-brand-orange-500 transition-all duration-300 shadow-lg">
                        {React.createElement(social.icon)}
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Información de Contacto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h3 className="font-bold text-white text-2xl mb-8 text-center md:text-left">Contáctanos</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contactos Principales */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h5 className="text-brand-orange-400 font-semibold text-lg">Correo Electrónico</h5>
                    <motion.a
                      href="mailto:multiserviciostotalhogarmth@gmail.com"
                      className="flex items-center space-x-3 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-brand-orange-500 transition-colors shadow-lg">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white text-sm md:text-base">multiserviciostotalhogarmth@gmail.com</span>
                    </motion.a>
                  </div>

                  <div className="space-y-4">
                    <h5 className="text-brand-orange-400 font-semibold text-lg">Celular y WhatsApp</h5>
                    <div className="space-y-3">
                      {[
                        { number: '321 230 9870' },
                        { number: '320 343 2867' }
                      ].map((contact, index) => (
                        <motion.a
                          key={contact.number}
                          href={`https://wa.me/57${contact.number.replace(/\s/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 group"
                          whileHover={{ x: 5 }}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        >
                          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-brand-orange-500 transition-colors shadow-lg">
                            <Phone className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white text-sm md:text-base">{contact.number}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Información de Horarios, Ubicación y Términos */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h5 className="text-brand-orange-400 font-semibold text-lg">Horario de Atención</h5>
                    <motion.div
                      className="flex items-center space-x-3 group"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-brand-orange-500 transition-colors shadow-lg">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white text-sm">Lunes a Sábado</p>
                        <p className="text-gray-300 text-sm">8:00 AM - 6:00 PM</p>
                        <p className="text-gray-400 text-xs">Vía WhatsApp</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Ubicación */}
                  <motion.div
                    className="flex items-center space-x-3 group"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-brand-orange-500 transition-colors shadow-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                      Sogamoso y Duitama, Boyacá
                    </span>
                  </motion.div>

                  {/* Términos y Condiciones */}
                  <motion.a
                    href="/documents/MTH_Terminos_y_Condiciones.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 group cursor-pointer"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-brand-orange-500 transition-colors shadow-lg">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm group-hover:text-brand-orange-300 transition-colors">
                        Términos y Condiciones
                      </p>
                      <p className="text-gray-400 text-xs">Descargar PDF</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-700 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Texto de derechos reservados */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              MTH Multiservicios Total Hogar. Todos los derechos reservados.
            </p>
            
            {/* Créditos de desarrollo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center md:items-end space-y-2"
            >
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Code2 className="w-3 h-3" />
                <span>Desarrollado por</span>
              </div>
              <div className="text-xs text-gray-400">
                TecnoParque SENA - Regional Boyacá
              </div>
            </motion.div>

            {/* Términos y Condiciones */}
            <div className="flex space-x-6 text-xs text-gray-400">
              {['Términos y Condiciones'].map((item, index) => (
                <motion.a
                  key={item}
                  href="/documents/MTH_Terminos_y_Condiciones.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-orange-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
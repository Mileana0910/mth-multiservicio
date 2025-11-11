// components/sections/ContactSection.jsx
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/Button';
import { MessageCircle, Phone, Mail, Clock, MapPin } from 'lucide-react';
import { ContactFormModal } from './ContactFormModal';

const contactCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "321 230 9870",
    subcontent: "320 343 2867",
    description: "Escríbenos y recibe atención inmediata",
    action: "whatsapp",
    link: "https://wa.me/573212309870",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "321 230 9870",
    subcontent: "320 343 2867",
    description: "Llámanos para agendar tu servicio",
    action: "phone",
    link: "tel:+573212309870",
  },
  {
    icon: Mail,
    title: "Correo Electrónico",
    content: "multiserviciostotalhogarmth",
    subcontent: "@gmail.com",
    description: "Envíanos tu consulta por correo",
    action: "email",
  },
  {
    icon: Clock,
    iconSecondary: MapPin,
    title: "Horarios y Cobertura",
    content: "Lunes a Sábado: 8:00 AM - 6:00 PM",
    subcontent: "Sogamoso y Duitama, Boyacá",
    description: "Zonas urbanas y alrededores",
    action: "info",
  },
];

export function ContactSection() {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const areCardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  const handleCardAction = (action, link) => {
    if (action === "email") {
      setIsModalOpen(true);
    } else if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <section id="contacto" className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-orange-500/5 rounded-full blur-3xl -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue-500/5 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-orange-500/10 rounded-full px-4 py-2 mb-4">
            <MessageCircle className="w-4 h-4 text-brand-orange-500" />
            <span className="text-brand-orange-500 font-semibold text-sm">CONTÁCTANOS</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
            ¿Listo para{' '}
            <span className="bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 bg-clip-text text-transparent">
              comenzar?
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contáctanos hoy y agenda tu servicio. Estamos listos para ayudarte con cualquier necesidad de tu hogar en Sogamoso y Duitama.
          </p>
        </motion.div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={areCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-2 border-gray-200 hover:border-brand-orange-400 transition-all duration-300 group h-full hover:shadow-xl bg-white">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-14 h-14 bg-brand-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-orange-500 transition-colors relative"
                  >
                    <card.icon className="w-7 h-7 text-brand-orange-500 group-hover:text-white transition-colors" />
                    {card.iconSecondary && (
                      <card.iconSecondary className="w-5 h-5 text-brand-orange-500 group-hover:text-white transition-colors absolute -bottom-1 -right-1 bg-white rounded-full p-0.5" />
                    )}
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-sm font-semibold text-gray-700 mb-1">{card.content}</p>
                  <p className="text-sm text-gray-600 mb-2">{card.subcontent}</p>
                  <p className="text-xs text-gray-500 mb-4 flex-grow">{card.description}</p>
                  {card.action !== "info" && (
                    <Button
                      onClick={() => handleCardAction(card.action, card.link)}
                      variant={card.action === "whatsapp" ? "default" : "outline"}
                      className={`w-full font-semibold ${
                        card.action === "whatsapp" 
                          ? "bg-brand-orange-500 hover:bg-brand-orange-600 text-gray-400" 
                          : "border-gray-400 text-gray-700 hover:bg-gray-800"
                      }`}
                    >
                      {card.action === "whatsapp" && "Chatear ahora"}
                      {card.action === "phone" && "Llamar ahora"}
                      {card.action === "email" && "Enviar mensaje"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
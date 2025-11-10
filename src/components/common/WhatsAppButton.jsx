import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open('https://wa.me/573212309870', '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 1.5,
      }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <motion.button
          onClick={openWhatsApp}
          className="relative w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-8 h-8 text-white" />
          
          {/* Tooltip */}
          <div className="absolute -top-12 -left-10 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            ¡Chatea con nosotros!
          </div>
        </motion.button>
      </motion.div>

      {/* Pulse Animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366] -z-10"
        animate={{
          scale: [1, 1.8, 1.8],
          opacity: [0.3, 0, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </motion.div>
  );
}
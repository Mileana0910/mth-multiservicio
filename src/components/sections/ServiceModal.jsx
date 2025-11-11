// components/sections/ServiceModal.jsx
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/Button';
import { MessageCircle, X } from 'lucide-react';

export function ServiceModal({ isOpen, onClose, service }) {
  const handleWhatsApp = () => {
    const message = `Hola, estoy interesado en el servicio de ${service.title}`;
    window.open(`https://wa.me/573212309870?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-3 mb-4">
            {/* Avatar MÁS PEQUEÑO */}
            <div className="relative w-14 h-14 rounded-lg overflow-hidden border-2 border-brand-orange-500 flex-shrink-0 bg-gray-100">
              <img 
                src={service.avatar} 
                alt={service.title} 
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/56x56/DB4715/FFFFFF?text=MTH';
                }}
              />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-lg font-bold text-gray-800">{service.title}</DialogTitle>
              <DialogDescription className="text-gray-600 text-sm">{service.description}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-800 mb-2 text-sm">Características principales:</h4>
            <ul className="space-y-1">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="text-brand-orange-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-2 text-sm">Detalles del servicio:</h4>
            <ul className="space-y-1">
              {service.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="text-brand-orange-500 mt-0.5 flex-shrink-0">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Botones más compactos */}
          <div className="flex gap-2 pt-3 border-t">
            <Button 
              onClick={onClose}
              variant="outline" 
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 text-xs py-2"
            >
              <X className="w-3 h-3 mr-1" />
              Cerrar
            </Button>
            <Button 
              onClick={handleWhatsApp} 
              className="flex-1 bg-brand-orange-500 hover:bg-brand-orange-600 text-xs py-2"
            >
              <MessageCircle className="w-3 h-3 mr-1" />
              Contactar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
// components/common/Navbar.jsx (CORREGIDO)
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Solo detectar sección activa si estamos en la página principal
      if (location.pathname === '/') {
        const sections = ['inicio', 'servicios', 'nosotros', 'contacto'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const navLinks = [
    { href: '/#inicio', label: 'Inicio', id: 'inicio' },
    { href: '/#servicios', label: 'Servicios', id: 'servicios' },
    { href: '/#nosotros', label: 'Nosotros', id: 'nosotros' },
    { href: '/quienes-somos', label: 'Quiénes Somos', id: 'quienes-somos' },
    { href: '/#contacto', label: 'Contacto', id: 'contacto' },
  ];

  const handleNavClick = (href, id) => {
    if (href.startsWith('/#')) {
      // Es un ancla en la página principal
      if (location.pathname !== '/') {
        // Si estamos en otra página, navegar a home primero
        window.location.href = href;
      } else {
        const sectionId = href.replace('/#', '');
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-4 right-4 z-50 bg-white shadow-lg border border-gray-200 rounded-2xl mx-auto max-w-4xl"
    >
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="h-14 w-40 block">
              <img 
                src="/images/logo-mth.jpeg" 
                alt="MTH Multiservicios Total Hogar"
                className="w-full h-full object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id || 
                (link.href === '/quienes-somos' && location.pathname === '/quienes-somos');
              
              return (
                <motion.div
                  key={link.href}
                  className="relative"
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  {link.href.startsWith('/quienes-somos') ? (
                    <Link
                      to={link.href}
                      className={`relative px-3 py-1 font-semibold transition-colors text-sm ${
                        isActive ? 'text-blue-900' : 'text-gray-700 hover:text-blue-800'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-900 rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.href, link.id)}
                      className={`relative px-3 py-1 font-semibold transition-colors text-sm ${
                        isActive ? 'text-blue-900' : 'text-gray-700 hover:text-blue-800'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-900 rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-gray-100 mt-2"
            >
              <div className="py-2 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.id || 
                    (link.href === '/quienes-somos' && location.pathname === '/quienes-somos');
                  
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.href.startsWith('/quienes-somos') ? (
                        <Link
                          to={link.href}
                          className={`block w-full text-left px-4 py-2 font-semibold rounded-lg transition-colors text-sm ${
                            isActive 
                              ? 'bg-blue-50 text-blue-900 border-r-4 border-blue-900'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-blue-800'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleNavClick(link.href, link.id)}
                          className={`block w-full text-left px-4 py-2 font-semibold rounded-lg transition-colors text-sm ${
                            isActive 
                              ? 'bg-blue-50 text-blue-900 border-r-4 border-blue-900'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-blue-800'
                          }`}
                        >
                          {link.label}
                        </button>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
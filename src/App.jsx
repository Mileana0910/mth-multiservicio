import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import Hero from './components/common/Hero';
import { LocalBusinessSchema } from './components/SEO/LocalBusinessSchema';
import { ServicesSection } from './components/sections/ServicesSection';
import { AboutSection } from './components/sections/AboutSection';
import { AboutPage } from './pages/AboutPage';
import { ContactSection } from './components/sections/ContactSection';

function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <LocalBusinessSchema />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quienes-somos" element={<AboutPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
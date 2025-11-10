import React from 'react';

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "MTH Multiservicios Total Hogar",
    "description": "Servicios de plomería, electricidad, destape de tuberías y reparaciones para el hogar en Sogamoso y Duitama, Boyacá",
    "url": "https://mthmultiservicios.com",
    "telephone": "+573212309870",
    "email": "multiserviciostotalhogarmth@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sogamoso y Duitama",
      "addressLocality": "Sogamoso",
      "addressRegion": "Boyacá",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "5.714",
      "longitude": "-72.934"
    },
    "openingHours": "Mo-Su 07:00-20:00",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "5.714",
        "longitude": "-72.934"
      },
      "geoRadius": "20000"
    },
    "services": [
      "Plomería",
      "Electricidad",
      "Destape de tuberías",
      "Herrería",
      "Albañilería",
      "Pintura",
      "Carpintería"
    ],
    "areaServed": ["Sogamoso", "Duitama", "Boyacá"],
    "sameAs": [
      "https://facebook.com/multiserviciostotalhogar",
      "https://instagram.com/multiserviciostotal_hogar"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}

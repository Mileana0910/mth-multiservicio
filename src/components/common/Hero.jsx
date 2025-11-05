import React from "react"

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          MTH Multiservicios
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Soluciones integrales para tu hogar y negocio
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
            Nuestros Servicios
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-lg">
            Contactar Ahora
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

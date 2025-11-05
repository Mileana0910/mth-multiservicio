import React from "react"

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              MTH
            </div>
            <span className="text-2xl font-bold text-gray-800">
              MTH Multiservicios
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600 transition font-medium">Inicio</a>
            <a href="#servicios" className="text-gray-600 hover:text-blue-600 transition font-medium">Servicios</a>
            <a href="#nosotros" className="text-gray-600 hover:text-blue-600 transition font-medium">Nosotros</a>
            <a href="#contacto" className="text-gray-600 hover:text-blue-600 transition font-medium">Contacto</a>
          </nav>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
            Solicitar Servicio
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

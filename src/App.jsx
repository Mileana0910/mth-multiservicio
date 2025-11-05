import Header from "./components/common/Header"
import Hero from "./components/common/Hero"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones completas para todas las necesidades de su hogar y negocio
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Servicio 1</h3>
            <p className="text-gray-600">Descripción del servicio...</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border border-green-100">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Servicio 2</h3>
            <p className="text-gray-600">Descripción del servicio...</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
            <h3 className="text-xl font-semibold text-orange-800 mb-3">Servicio 3</h3>
            <p className="text-gray-600">Descripción del servicio...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

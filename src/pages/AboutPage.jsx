// pages/AboutPage.jsx (CORREGIDO)
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Shield, 
  Target, 
  Eye, 
  Award,
  Clock,
  CheckCircle,
  MessageCircle
} from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Técnicos de confianza",
    description: "En MTH trabajamos con profesionales calificados, honestos y comprometidos, para que sientas la tranquilidad de abrir tu puerta a alguien en quien realmente puedes confiar."
  },
  {
    icon: Clock,
    title: "Acompañamiento completo",
    description: "Desde el momento en que nos contactas hasta que el trabajo está finalizado, te mantenemos informado. Sabes quién irá, cuándo llegará y cómo avanza cada reparación."
  },
  {
    icon: CheckCircle,
    title: "Soluciones garantizadas",
    description: "Cada servicio incluye materiales de calidad, respaldo fotográfico, contrato de servicio y garantía real. Nuestro compromiso no termina cuando el técnico se va."
  },
  {
    icon: Heart,
    title: "Construimos confianza",
    description: "Basamos nuestro trabajo en la transparencia, responsabilidad y cumplimiento, para crear relaciones duraderas con cada cliente."
  }
];

const missionVision = [
  {
    icon: Target,
    title: "Misión",
    content: "En MTH Multiservicios Total Hogar trabajamos para cuidar y mejorar la vida en los hogares boyacenses. Ofreciendo servicios de mantenimiento y reparación, con técnicos calificados de nuestra región, que combinan su experiencia con uso de herramientas y tecnología de vanguardia."
  },
  {
    icon: Eye,
    title: "Visión",
    content: "Queremos ser reconocidos en Boyacá como el aliado móvil de confianza para cada hogar. Un referente en servicios para el hogar que destaque por su innovación, calidad humana y compromiso con la comunidad."
  }
];

export function AboutPage() {
  // Scroll al inicio cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsApp = () => {
    const message = "Hola, estoy interesado en conocer más sobre los servicios de MTH Multiservicios";
    window.open(`https://wa.me/573212309870?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Manteniendo naranja */}
      <section className="min-h-[50vh] pt-32 pb-16 bg-gradient-to-br from-brand-orange-500 to-brand-orange-400 relative overflow-hidden">
        {/* Elementos decorativos del hero */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-orange-600/30 via-transparent to-brand-orange-400/20"></div>
        </div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-brand-orange-600/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-brand-orange-400/20 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            >
              Quiénes <span className="text-yellow-400">Somos</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-orange-100 leading-relaxed"
            >
              Más que reparar hogares, construimos confianza en cada familia boyacense
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg mx-auto text-center"
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Somos un grupo de técnicos Boyacenses que unimos el talento humano, la tecnología y el cuidado 
                del medio ambiente como pilares fundamentales para consolidarnos como una empresa líder en 
                servicios y reparaciones del hogar.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Ofrecemos soluciones integrales e innovadoras que mejoran la calidad de vida de las personas. 
                Nuestra pasión y experiencia nos impulsa a generar un impacto positivo en las comunidades 
                fortaleciendo lazos y promoviendo el progreso regional.
              </p>

              <div className="bg-brand-orange-500/10 rounded-2xl p-8 border border-brand-orange-500/20">
                <p className="text-brand-orange-500 text-xl font-semibold italic">
                  "En MTH creemos que más que reparar un hogar es también construir confianza."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
              Por qué elegir <span className="text-brand-orange-500">MTH</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Contamos con un equipo de técnicos experimentados y confiables, comprometidos con ofrecer 
              soluciones rápidas, eficientes y con trabajos 100% garantizados.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-brand-blue-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {missionVision.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-brand-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-brand-orange-500" />
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia de Fabián */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-brand-orange-500/10 rounded-full px-4 py-2 mb-4">
                <Award className="w-4 h-4 text-brand-orange-500" />
                <span className="text-brand-orange-500 font-semibold text-sm">NUESTRA HISTORIA</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
                Mi historia: una receta de vida y aprendizaje
              </h2>
              <p className="text-gray-600 text-lg">
                Por Fabian Soraca - Fundador de MTH
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg mx-auto"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                  <strong>Una historia de éxito es como preparar un pastel:</strong> El resultado depende de la mezcla de muchos ingredientes. 
                  En la vida pasa igual; combinamos aprendizaje, sacrificio, fracasos, resiliencia y muchas ganas de servir, para al final 
                  lograr algo que impacte positivamente a nuestra comunidad pensando en dejar un mejor mañana para nuestros hijos.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                  Mi historia se parece a la de muchos otros emprendedores. Tal vez no me sentí rodeado de lujos o dinero, 
                  pero siempre tuve cerca personas que me guiaron y me ayudaron a encontrar un camino que, en su momento, 
                  no parecía tener ni pies ni cabeza. Hoy, al mirar hacia atrás, comprendo que aquellas situaciones que me parecían 
                  injustas tenían un propósito. Entendí que los caminos de Dios son perfectos y que la vida es un curso donde no puedes 
                  avanzar hasta superar ciertas pruebas.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                  Creo firmemente que todos tenemos un propósito en la vida, aunque a veces sea confuso y no entendamos 
                  el “por qué” ni el “para qué” de lo que vivimos. Con el tiempo comprendí que la vida es corta y que, en el fondo, 
                  nuestro verdadero propósito debe ser dejar un legado.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                  Desde muy niño ha sido un apasionado por la construcción. Me emocionaba entrar a las obras, 
                  observar los métodos constructivos e imaginar cómo podría hacerlos más rápidos y eficientes. 
                  Esa pasión me llevó a estudiar en el SENA Industrial de Sogamoso, donde tomé varios cursos que me dieron una sólida 
                  formación y la oportunidad de conocer grandes maestros de la vida. Sin embargo, aún sentía que me faltaba algo, así que 
                  ingresé a la UPTC seccional Sogamoso para estudiar algunos semestres de Obras Civiles. Con el tiempo, sentí nuevamente que mi 
                  camino era otro, así que decidí retirarme para emprender mi primer proyecto: Multiservicios para el Hogar.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                  Fue una etapa de grandes lecciones, y como era de esperarse, fracasé por falta de propósito y experiencia. 
                  Ese tropiezo me llevó a recorrer diferentes países de Latinoamérica, donde aprendí valiosas lecciones de vida y, 
                  sobre todo, a valorar más mi país. De regreso, fundé otro emprendimiento: “De Tu Casa Ferretería”, una venta de materiales 
                  y servicios. Sin embargo, volvió a fracasar. Aprendí entonces que también hay que aprender a perder, y que entre más rápido
                   acepta una caída, menor será el golpe.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                  Luego llegó la pandemia. Nos encerró a todos, nos cambió la vida, nos arrebató familiares, amigos. 
                  Nos cambió la manera de hacer negocios. Aprendí que debíamos transformar nuestra forma de ver el mundo. 
                  Cuando todo empezaba a estabilizarse, surgió la oportunidad de viajar a Australia, donde viví los últimos dos años. 
                  Esa experiencia fue mi mejor universidad: pude poner a prueba mi talento y trabajar hombro a hombro con personas de 
                  distintas culturas, todos unidos por un mismo propósito: crear espacios eficientes, rápidos y de la mejor calidad para
                   las familias.
                </p>

                  <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                  Pero, como dije antes, la vida a veces parece injusta, y aunque hagamos muchos planes, 
                  Dios siempre tiene los suyos para cada uno de nosotros. Hoy, de regreso en mi país con esa experiencia y 
                  un corazón agradecido, nace MTH Multiservicios Total Hogar, un proyecto que combina el talento local, innovación y 
                  el compromiso social. Nuestro propósito es claro: servir a las familias de nuestra región, mejorar sus hogares y dejar 
                  una huella positiva en nuestra comunidad.
                </p>

                <div className="bg-brand-blue-500/10 rounded-xl p-6 border border-brand-blue-500/20 mt-8">
                  <p className="text-brand-blue-500 text-lg font-semibold text-center">
                    "Para mí, el éxito no es llegar a la meta... es avanzar con propósito, aprendiendo, 
                    compartiendo y construyendo un mejor mañana para todos."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-brand-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              ¿Listo para confiar en nosotros?
            </h2>
            <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
              Tu hogar merece lo mejor. Contáctanos y descubre por qué somos la elección de confianza 
              para las familias boyacenses.
            </p>
            <button 
              onClick={handleWhatsApp}
              className="bg-white text-brand-orange-500 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg flex items-center gap-2 mx-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
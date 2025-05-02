const Hero = () => {
  return (
    <section id="inicio" className="relative bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Soluciones Médicas Integrales</h1>
            <p className="text-xl text-gray-600 mb-8">Equipo de alta calidad para diagnóstico, tratamiento y cuidado de pacientes. Más de 15 años de experiencia en el sector salud.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-lg transition duration-300 text-lg">
              Solicitar Cotización
            </button>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="bg-blue-100 rounded-2xl overflow-hidden w-full h-96 md:h-[32rem]">
              <img 
                src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0Nqu9S6d8ASzOYnuUx9evHl1k3cs0iWKGPRJ7" 
                alt="Equipo médico profesional" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// DONE
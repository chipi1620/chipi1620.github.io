const About = () => {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre Nosotros</h2>
            <p className="text-gray-600 mb-4">
              IMIMED es una empresa líder en distribución y mantenimiento de equipo médico con más de 15 años de experiencia en el mercado.
            </p>
            <p className="text-gray-600 mb-4">
              Nuestro equipo de ingenieros y técnicos especializados garantiza la mejor calidad en equipamiento y soporte técnico para instituciones de salud.
            </p>
            <p className="text-gray-600 mb-6">
              Trabajamos con los más altos estándares de calidad y cumplimiento normativo para ofrecer soluciones confiables y duraderas.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
              Conoce más
            </button>
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden aspect-w-16 aspect-h-9">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Equipo de IMIMED" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// DONE
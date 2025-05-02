const Products = () => {
  const products = [
    {
      name: "Monitores de Signos Vitales",
      category: "Monitoreo",
      description: "Equipos de última generación para el monitoreo continuo de pacientes con tecnología avanzada y pantallas de alta resolución.",
      image: "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0BP4k1emarwVexSvg49LJmunA1yQfBY37iOHM"
    },
    {
      name: "Arco en C",
      category: "Imagenología",
      description: "Sistemas de arco en C de alta calidad para procedimientos quirúrgicos y diagnósticos por imagen.",
      image: "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0NCaTmsd8ASzOYnuUx9evHl1k3cs0iWKGPRJ7"
    },
    {
      name: "Equipos de Ultrasonido",
      category: "Diagnóstico por Imágenes",
      description: "Sistemas de ultrasonido portátiles y de alta resolución para diversas especialidades médicas.",
      image: "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0w31K3MbxP1T5XDmuZkHCc9hBg6RVIbyjU7Fs"
    }
  ];

  return (
    <section id="productos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Nuestros Productos</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Equipos médicos de las mejores marcas internacionales</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-blue-600">{product.category}</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-800 transition duration-300">
                  Más Información →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

// DONE
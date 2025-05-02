const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0E7FhNxpMAYtFLWSDrwdC6mPuQOqy8zGja9l3" 
              alt="IMIMED Logo" 
              className="h-16 w-auto"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition duration-300">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition duration-300">Servicios</a>
              <a href="#productos" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition duration-300">Productos</a>
              <a href="#nosotros" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition duration-300">Sobre Nosotros</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition duration-300">Contacto</a>
            </div>
          </div>
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600">
              <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// DONE
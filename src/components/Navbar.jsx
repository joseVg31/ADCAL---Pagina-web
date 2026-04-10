import { useState } from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="w-full py-6 flex justify-between items-center relative px-4">
        
        {/* Menú Hamburguesa - Izquierda */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 absolute left-12 top-8"
        >
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>

        {/* Logo - Centro */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gray-400/30 p-4 backdrop-blur-sm">
          <Link to="/">
            <img src="/assets/logo.png" alt="ADCAL" className="h-24" />
          </Link>
        </div>

        {/* Selector de Idioma - Derecha */}
        <div className="flex items-center gap-1.5 absolute right-12 top-12">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20H7m6-4h.01M9 3h5.064M7 20H3m4-6h10"
            />
          </svg>
          <span className="text-lg font-semibold text-gray-700">ES</span>
        </div>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="bg-black/80 border-t border-white/20">
          <div className="px-4 py-4 space-y-3">

            <Link 
              to="/productos" 
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-green-400"
            >
              Productos
            </Link>

            <Link 
              to="/nosotros" 
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-green-400"
            >
              Sobre Nosotros
            </Link>

            <Link 
              to="/contacto" 
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-green-400"
            >
              Contacto
            </Link>

          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
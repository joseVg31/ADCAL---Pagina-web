import { Link } from 'react-router-dom'

function Footer() {
  const navLinks = ['Inicio', 'Nosotros', 'Productos', 'Calidad', 'Contacto']
  const navPaths = ['/', '/nosotros', '/productos', '/calidad', '/contacto']

  return (
    <footer className="bg-green-900 text-white pt-14 pb-6 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

        {/* Marca */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/assets/logo.png" alt="ADCAL" className="h-12" />
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Soluciones agropecuarias y lácteas para el Perú y Latinoamérica.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Navegación
          </h4>
          <ul className="space-y-2">
            {navLinks.map((label, i) => (
              <li key={label}>
                <Link
                  to={navPaths[i]}
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Contacto
          </h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <span>📍</span> Lima, Perú
            </li>
            <li className="flex items-start gap-2">
              <span>📞</span> +51 000 000 000
            </li>
            <li className="flex items-start gap-2">
              <span>✉️</span> info@adcal.com.pe
            </li>
          </ul>
        </div>
      </div>

      {/* Línea y copyright */}
      <div className="border-t border-white/10 pt-6 text-center text-white/40 text-xs">
        © {new Date().getFullYear()} ADCAL. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
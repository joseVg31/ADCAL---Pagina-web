import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

/* ── Datos de secciones ─────────────────────────────────── */
const SECTIONS = [
  {
    id: 'que-es',
    tag: 'Quiénes somos',
    title: 'Qué es ADCAL',
    body: 'ADCAL es una empresa dedicada al desarrollo y comercialización de soluciones para el sector agropecuario y lácteo. Ofrecemos productos de alta calidad que impulsan la productividad y el bienestar animal, respaldados por años de experiencia en el campo.',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&q=80',
    alt: 'Invernadero agrícola moderno',
    reverse: false,
  },
  {
    id: 'que-ofrece',
    tag: 'Servicios',
    title: 'Qué Ofrecemos',
    body: 'Contamos con una línea completa de nutrición animal, suplementos minerales y tecnología de punta para ganadería lechera. Nuestros especialistas brindan asesoría personalizada para maximizar el rendimiento de cada producción.',
    img: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=700&q=80',
    alt: 'Ganadería lechera en campo abierto',
    reverse: true,
  },
  {
    id: 'dirigido',
    tag: 'Público objetivo',
    title: 'A quién va dirigido',
    body: 'Nuestros productos y servicios están orientados a ganaderos, productores de leche, queseros artesanales e industriales, y cooperativas agropecuarias que buscan mejorar la calidad de sus productos y optimizar sus procesos productivos.',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=80',
    alt: 'Variedad de productos lácteos artesanales',
    reverse: false,
  },
]

/* ── Hook: animación al hacer scroll ────────────────────── */
function useFadeInOnScroll() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

/* ── Sección alternada ──────────────────────────────────── */
function ContentSection({ section, bgWhite }) {
  const { ref, visible } = useFadeInOnScroll()

  return (
    <section
      id={section.id}
      className={`py-20 px-6 ${bgWhite ? 'bg-white' : 'bg-green-50'}`}
    >
      <div
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
        className={`max-w-5xl mx-auto flex flex-col gap-12 items-center ${
          section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
      >
        {/* Texto */}
        <div className="flex-1">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            {section.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4 leading-tight">
            {section.title}
          </h2>
          <div className="w-12 h-1 bg-green-500 rounded mb-5" />
          <p className="text-gray-600 leading-relaxed text-base mb-6">
            {section.body}
          </p>
          <Link
            to="/nosotros"
            className="inline-flex items-center gap-2 text-green-600 font-bold text-sm tracking-wide hover:text-green-800 transition-colors"
          >
            Leer más
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </Link>
        </div>

        {/* Imagen */}
        <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-xl">
          <img
            src={section.img}
            alt={section.alt}
            className="w-full h-64 md:h-80 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

/* ── Componente principal ───────────────────────────────── */
function Home() {
  return (
    <div className="w-full">

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/fondo_principal.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />

        {/* Contenido hero */}
        <div className="relative z-10 text-center max-w-2xl px-6">
          <p className="text-white/75 text-xs tracking-[0.3em] uppercase mb-4">
            Bienvenido a ADCAL
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
            Calidad que nace del campo
          </h1>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            Soluciones innovadoras para el sector agropecuario y lácteo peruano.
          </p>
          <Link
            to="/nosotros"
            className="inline-block border-2 border-white text-white px-10 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-green-900 transition-all duration-300"
          >
            Conócenos
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </section>

      {/* ── Banda verde ────────────────────────────────────── */}
      <div className="bg-green-500 py-4 px-6 text-center">
        <p className="text-white text-sm font-semibold tracking-widest uppercase">
          Productos naturales · Calidad certificada · Compromiso con el campo
        </p>
      </div>

      {/* ── Secciones alternadas ───────────────────────────── */}
      {SECTIONS.map((s, i) => (
        <ContentSection key={s.id} section={s} bgWhite={i % 2 === 0} />
      ))}

      {/* ── CTA Banner ─────────────────────────────────────── */}
      <section className="bg-green-900 py-20 px-6 text-center">
        <p className="text-white/70 text-xs tracking-[0.3em] uppercase mb-3">
          Únete a nuestra red
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ¿Listo para trabajar con nosotros?
        </h2>
        <p className="text-white/80 text-base max-w-md mx-auto mb-10 leading-relaxed">
          Contáctanos y descubre cómo ADCAL puede transformar tu producción agropecuaria.
        </p>
        <Link
          to="/contacto"
          className="inline-block bg-white text-green-900 px-10 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Trabaje con nosotros
        </Link>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <Footer />
    </div>
  )
}

export default Home
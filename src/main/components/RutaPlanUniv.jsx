import { useState, useEffect, useRef } from "react"
import { useNavigate, Link } from "react-router-dom"
import { ImHome } from "react-icons/im"
import img1 from "../assets/img6.jpg"
import img2 from "../assets/img9.jpg"

const RutaPlanUniv = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const navigate = useNavigate()
  const touchStartY = useRef(null)

  const goBack = () => {
    navigate(-1)
  }

  const items = [
    {
      src: img1,
      alt: "Departamento Planeamiento, Org y Metodos",
      title: "DEPARTAMENTO PLANEAMIENTO, ORG Y METODOS",
      desc: "Encargado de organizar y mejorar procesos institucionales.",
      email: "planeamiento@uatf.edu.bo",
      phone: "+59171234567",
      authority: "Ing. Ana María Pérez",
    },
    {
      src: img2,
      alt: "Departamento de Proyectos",
      title: "DEPARTAMENTO DE PROYECTOS",
      desc: "Responsable de la formulación y seguimiento de proyectos.",
      email: "proyectos@uatf.edu.bo",
      phone: "+59161234567",
      authority: "Lic. Carlos Mendoza",
    },
  ]

  const currentItem = items[currentSlideIndex]

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(prevIndex => (prevIndex + 1) % items.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [items.length])

  // Touch scroll vertical
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY
    const deltaY = touchStartY.current - touchEndY

    if (deltaY > 50) {
      // swipe up
      setCurrentSlideIndex((prev) => (prev + 1) % items.length)
    } else if (deltaY < -50) {
      // swipe down
      setCurrentSlideIndex((prev) =>
        prev === 0 ? items.length - 1 : prev - 1
      )
    }
  }

  return (
    <section
      className="min-h-screen bg-gray-900 flex flex-col items-center justify-center py-12 px-4"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-white">
          DIRECCIÓN DE PLANIFICACIÓN UNIVERSITARIA
        </h1>

        <div className="flex flex-col lg:flex-row h-[600px] rounded-lg overflow-hidden shadow-2xl">
          {/* Panel izquierdo */}
          <div className="relative w-full lg:w-1/2 bg-[#282c34] flex items-center justify-center p-8 lg:p-12">
            {/* Puntos de navegación */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col space-y-3">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlideIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlideIndex
                      ? "bg-white"
                      : "bg-gray-500 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Contenido de texto */}
            <div className="text-white text-left max-w-md ml-10 lg:ml-0">
              <h2 className="text-4xl font-serif mb-4 leading-tight">
                {currentItem.title}
              </h2>
              <p className="text-lg font-light mb-6 leading-relaxed">
                {currentItem.desc}
              </p>
              {currentItem.authority && (
                <p className="text-base font-light mb-2 leading-relaxed italic">
                  {currentItem.authority}
                </p>
              )}
              {currentItem.period && (
                <p className="text-base font-light mb-8 leading-relaxed italic">
                  {currentItem.period}
                </p>
              )}
              {currentItem.email && (
                <a
                  href={`mailto:${currentItem.email}`}
                  className="block text-blue-400 underline mt-2"
                >
                  {currentItem.email}
                </a>
              )}
              {currentItem.phone && (
                <a
                  href={`https://wa.me/${currentItem.phone.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-green-400 underline mt-1"
                >
                  WhatsApp: {currentItem.phone}
                </a>
              )}
              {currentItem.path && (
                <Link
                  to={currentItem.path}
                  className="inline-block px-8 py-3 border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-colors duration-300 mt-6"
                >
                  VER MÁS
                </Link>
              )}
            </div>
          </div>

          {/* Panel derecho: Imagen */}
          <div className="w-full lg:w-1/2 h-full">
            <img
              src={currentItem.src || "/placeholder.svg"}
              alt={currentItem.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Botones de navegación */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <button
            onClick={goBack}
            className="p-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors duration-300 shadow-lg"
            aria-label="Volver atrás"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <Link
            to="/"
            className="p-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors duration-300 shadow-lg"
            aria-label="Ir a inicio"
          >
            <ImHome className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RutaPlanUniv

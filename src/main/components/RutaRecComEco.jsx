import { useState, useEffect, useRef } from "react"
import { useNavigate, Link } from "react-router-dom"
import { ImHome } from "react-icons/im"
import direvaacreImg from "../assets/logo-uatf.png"
import dirplanunivImg from "../assets/img7.jpg"
import diradmfinImg from "../assets/img10.jpg"  
import dirrelnacintImg from "../assets/img11.jpg"
import datacenterImg from "../assets/img1.jpg"

const RutaRecComEco = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const navigate = useNavigate()
  const touchStartYRef = useRef(null)
  const touchEndYRef = useRef(null)

  const items = [
    {
      src: direvaacreImg,
      alt: "Direccion de Evaluacion y Acreditacion",
      title: "DIRECCION DE EVALUACION Y ACREDITACION",
      desc: "...........",
    },
    {
      src: dirplanunivImg,
      alt: "Direccion de planificacion universitaria",
      title: "DIRECCION DE PLANIFICACION UNIVERSITARIA",
      desc: "M.B.A. Sofia Poveda Alarcón",
      message:"Directora de Planificación Universitaria ",
      path: "/dir-plan-univ",
    },
    {
      src: diradmfinImg,
      alt: "Direccion Administrativa y Financiera",
      title: "DIRECCION ADMINISTRATIVA Y FINANCIERA",
      desc: "M. Sc. Lic. Bernardo Choque Pareja",
      path: "/dir-adm-fin",
    },
    {
      src: dirrelnacintImg,
      alt: "Direccion de relaciones Nacionales e Internacionales",
      title: "DIRECCION DE RELACIONES NACIONALES E INTERNACIONALES",
      desc: "M. Sc. Ing. Juan Carlos Erquicia Landeau",
    },
    {
      src: datacenterImg,
      alt: "Data Center",
      title: "DATA CENTER",
      desc: "Ing. David G Humerez Martinez",
    },
  ]

  const currentItem = items[currentSlideIndex]

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [items.length])

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartYRef.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    touchEndYRef.current = e.changedTouches[0].clientY
    handleSwipe()
  }

  const handleSwipe = () => {
    const distance = touchStartYRef.current - touchEndYRef.current
    const threshold = 50 // px

    if (distance > threshold) {
      // Swipe hacia arriba
      setCurrentSlideIndex((prev) => (prev + 1) % items.length)
    } else if (distance < -threshold) {
      // Swipe hacia abajo
      setCurrentSlideIndex((prev) => (prev - 1 + items.length) % items.length)
    }
  }

  const goBack = () => navigate(-1)

  return (
    <section className="min-h-screen bg-gray-900 flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-white">COMISION ECONOMICA</h1>

        <div
          className="flex flex-col lg:flex-row h-[600px] rounded-lg overflow-hidden shadow-2xl"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Panel: Text Content and Navigation Dots */}
          <div className="relative w-full lg:w-1/2 bg-[#282c34] flex items-center justify-center p-8 lg:p-12">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col space-y-3">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlideIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlideIndex ? "bg-white" : "bg-gray-500 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="text-white text-left max-w-md ml-10 lg:ml-0">
              <h2 className="text-4xl font-serif mb-4 leading-tight">{currentItem.title}</h2>
              <p className="text-lg font-light mb-8 leading-relaxed">{currentItem.desc}</p>
              {currentItem.path && (
                <Link
                  to={currentItem.path}
                  className="inline-block px-8 py-3 border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-colors duration-300"
                >
                  VER MÁS
                </Link>
              )}
            </div>
          </div>

          {/* Right Panel: Image */}
          <div className="w-full lg:w-1/2 h-full">
            <img
              src={currentItem.src || "/placeholder.svg"}
              alt={currentItem.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Navigation buttons */}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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

export default RutaRecComEco

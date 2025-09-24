
import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { ImHome } from "react-icons/im"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/logo-uatf.png" 
import img3 from "../assets/img3.jpg"

const RutaAdmFin = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const items = [
    {
      src: img1,
      alt: "Departamento de Personal",
      title: "DEPARTAMENTO DE PERSONAL",
      desc: "M. Sc. Adm. Edwin Claure Ferreira .",
    },
    {
      src: img2,
      alt: "Departamento de Finanzas",
      title: "DEPARTAMENTO DE FINANZAS",
      desc: "...............",
      path: "/dep-fin",
    },
    {
      src: img3,
      alt: "Departamento de Infraestructura",
      title: "DEPARTAMENTO DE INFRAESTRUCTURA",
      desc: "M. Sc. Ing. Roger Barahona Telchi",
    },
  ]

   const currentItem = items[currentSlideIndex]

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlideIndex(prevIndex => (prevIndex + 1) % items.length);
  }, 4000); // cada 3 segundos

  return () => clearInterval(interval); // limpieza al desmontar
}, [items.length]);


  return (
    <section className="min-h-screen bg-gray-900 flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-white">DIRECCION ADMINISTRATIVA Y FINANCIERA</h1>

        {/* Main content area: Left panel (text) and Right panel (image) */}
        <div className="flex flex-col lg:flex-row h-[600px] rounded-lg overflow-hidden shadow-2xl">
          {/* Left Panel: Text Content and Navigation Dots */}
          <div className="relative w-full lg:w-1/2 bg-[#282c34] flex items-center justify-center p-8 lg:p-12">
            {/* Navigation Dots */}
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

            {/* Text Content */}
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
              ) }
            </div>
          </div>

          {/* Right Panel: Large Image */}
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

export default RutaAdmFin
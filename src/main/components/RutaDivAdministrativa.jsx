"use client"

import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import img1 from "../assets/img14.jpg"
import img2 from "../assets/img6.jpg"  
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img12.jpg"

const RutaDivAdministrativa = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  const items = [
    {
      src:img1, 
      alt: "Direccion de investigacion ciencia y tecnologia",
      title: "DIRECCION DE INVESTIGACION CIENCIA Y TECNOLOGIA",
      desc: "Ph. D. Ing. Percy Oscar Gutierrez Goméz",
      desc2: "Director de Investigación, Ciencia y Tecnología",
    },
    {
      src: img2, 
      alt: "Direccion de servicios Academicos",
      title: "DIRECCION DE SERVICIOS ACADEMICOS",
      desc: "M. Sc. Lic. Anny Mercado Algarañaz",
      path: "/dir-serv-acad",
      desc2: "Directora de Servicios Académicos",
    },
    {
      src: img3, 
      alt: "Direccion de Postgrado",
      title: "DIRECCION DE POSTGRADO",
      desc: "M. Sc. Ing. Daniel Reynaldo Virgo Acuña",
      desc2: "Director de Postgrado",
    },
    {
      src: img4, 
      alt: "Direccion de Interaccion Social",
      title: "DIRECCION DE INTERACCION SOCIAL Y EXTENSION UNIVERSITARIA",
      desc: "Ing. Juan Carlos Orellana Pereira",
      desc2: "Director de Interacción Social y Extensión Universitaria",
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
        <h1 className="text-5xl font-bold text-center mb-12 text-white">DIVISION ADMINISTRATIVA</h1>

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
              <p className="text-lg font-light mb-6 leading-relaxed">{currentItem.desc}</p>
              {currentItem.desc2 && (
                <p className="text-base font-light mb-8 leading-relaxed italic">{currentItem.desc2}</p>
              )}

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
                d="M10.707 1.707a1 1 0 00-1.414 0l-7 7A1 1 0 003 10h1v6a1 1 0 001 1h4v-4h2v4h4a1 1 0 001-1v-6h1a1 1 0 00.707-1.707l-7-7z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RutaDivAdministrativa
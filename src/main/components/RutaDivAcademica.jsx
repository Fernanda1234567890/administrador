
import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import sisimg from "../assets/sis.jpg"
import diseñoimg from "../assets/diseño.jpg"
import odontoimg from "../assets/odonto.jpg"
import facimg from "../assets/logo-uatf.png"

const RutaDivAcademica = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (event) => {
      const popover = document.querySelector(".popover-content")
      const button = document.querySelector(".main-popover-button")
      if (isOpen && popover && !popover.contains(event.target) && !button.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  const goBack = () => navigate(-1)

  const allItems = [
    {
      src: sisimg,
      alt: "Carrera Ingenieria de Sistemas",
      title: "INGENIERÍA DE SISTEMAS",
      desc: "M. Sc. Ing. Wilfredo Terrazas Quispe",
      desc2: "Director de Carrera",
    },
    {
      src: sisimg,
      alt: "Carrera Sistemas Tupiza",
      title: "INGENIERÍA DE SISTEMAS TUPIZA",
      desc: ".............",
      desc2: "Director de Carrera",
    },
    {
      src: diseñoimg,
      alt: "Diseño Programación",
      title: "PROG. ING. EN DISEÑO EN PROGRAMACIÓN DIGITAL",
      desc: "Ing. Oscar Apaza Surculento",
      desc2: "Director de Carrera",
    },
    {
      src: odontoimg,
      alt: "Odontología",
      title: "CARRERA ODONTOLOGÍA",
      desc: "Dr. Denis Murillo Velásquez",
      desc2: "Director de Carrera",
    },
    {
      src: facimg,
      alt: "Facultades",
      title: "FACULTADES",
      desc: "Conoce mas..",
      path: "/facultades",
    },
  ]

  // Separar facultades del resto de items
  const facultadesItem = allItems.find((item) => item.title === "FACULTADES")
  const carouselItems = allItems.filter((item) => item.title !== "FACULTADES")

  return (
    <section className="min-h-screen bg-white flex items-center justify-center py-12 px-6 sm:px-20">
      <div className="text-center max-w-6xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-950">DIVISIÓN ACADÉMICA</h1>

        {/* Botón/Enlace de Facultades arriba */}
        {facultadesItem && (
          <div className="flex justify-center mb-8">
            <Link
              to={facultadesItem.path}
              className="group relative bg-gradient-to-r from-red-900 to-blue-900 hover:from-blue-900 hover:to-red-900 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <img
                  src={facultadesItem.src || "/placeholder.svg"}
                  alt={facultadesItem.alt}
                  className="w-12 h-12 object-contain"
                />
                <div className="text-left">
                  <h3 className="text-xl font-bold uppercase">{facultadesItem.title}</h3>
                  <p className="text-blue-100 text-sm">{facultadesItem.desc}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        )}

      {/* Tarjetas de carreras con estilos glassmorphism */}
        <div className="flex justify-center gap-6 flex-wrap">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="card relative rounded-lg shadow-[20px_20px_50px_rgba(8,47,71,0.5)] overflow-hidden text-center w-64 flex-shrink-0 transform transition duration-300 hover:scale-105"
              style={{
                backgroundImage: `url(${item.src || "/placeholder.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "450px",
              }}
            >
              {/* Overlay para legibilidad del texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>

              <div className="content relative z-10 h-full flex flex-col justify-center items-center p-4 transform transition duration-300 translate-y-20 opacity-0 hover:translate-y-0 hover:opacity-100">
                <h1 className="text-lg font-semibold text-white mb-2 leading-tight drop-shadow-lg">{item.title}</h1>
                <div className="mb-4">
                  <p className="text-white text-sm font-medium drop-shadow-md">{item.desc}</p>
                  {item.desc2 && (
                    <h3 className="text-sm font-medium text-gray-200 italic drop-shadow-md">{item.desc2}</h3>
                  )}
                </div>
                {item.path && (
                  <Link
                    to={item.path}
                    className="inline-block px-4 py-2 bg-white bg-opacity-20 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300"
                  >
                    Ver más...
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <button
            onClick={goBack}
            className="p-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors duration-300"
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
            className="p-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors duration-300"
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

      <style jsx>{`
        .card {
          width: 280px;
          height: 450px;
          position: relative;
          margin: 30px;
          background-color: rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(5px);
          text-align: center;
          border-radius: 25px;
        }
        .content {
          padding: 20px;
          transition: 0.8s all ease;
          color: #333;
        }
        .card img {
          width: 140px;
          top: 50px;
          z-index: -1;
        }

      `}</style>
    </section>
  )
}

export default RutaDivAcademica
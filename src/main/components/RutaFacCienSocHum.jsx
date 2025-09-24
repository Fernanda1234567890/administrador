"use client"

import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom" 
import { ImHome } from "react-icons/im"
import { FaWhatsappSquare } from "react-icons/fa"
import decanomedimg from "../assets/logo-uatf.png" 
import img1 from "../assets/img3.jpg" 
import img2 from "../assets/img8.jpg" 
import img3 from "../assets/img11.jpg" 
import img4 from "../assets/img12.jpg" 
import img5 from "../assets/img13.jpg" 
import img6 from "../assets/logo-uatf.png" 
import img7 from "../assets/logo-uatf.png" 
import img8 from "../assets/logo-uatf.png" 

const RutaFacCienSocHum = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate() 

  // Cierra el popover al hacer clic fuera
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

  // Función para ir atrás
  const goBack = () => {
    navigate(-1) 
  }

  return (
    <section className="min-h-screen bg-white flex items-center justify-center py-12 px-6 sm:px-20">
      <div className="text-center max-w-6xl mx-auto w-full">
        <h1 className="text-5xl font-bold text-center mb-8 text-blue-950">
          FACULTAD DE CIENCIAS SOCIALES Y HUMANISTICAS
        </h1>
        {/* Sección con imagen y texto */}
        <div className="mt-10 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          {/* Texto a la izquierda */}
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-2xl font-semibold text-blue-900">M. Sc. Lic. Teodocia Gonzáles Choque </h2>
            <p className="text font-semibold text-blue-900 mt-2">
              Decana de la Facultad de Ciencias Sociales y Humanísticas
            </p>
          </div>
          {/* Imagen a la derecha con overlay */}
          <div className="relative md:w-1/2 flex justify-center">
            <button
              className="w-80 h-96 rounded-lg shadow-md focus:outline-none hover:opacity-90 transition-opacity duration-300 main-popover-button hover:scale-105 transform transition-transform duration-300 ease-in-out"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={decanomedimg || "/placeholder.svg"}
                alt="Vicerrector"
                className="w-full h-full object-cover rounded-lg"
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-70 text-white text-sm font-medium opacity-0 hover:opacity-100 transition-opacity text-center p-4">
                <a href="mailto:correoelectronico@uatf.com" className="text-blue-500 underline">
                  correoelectronico@uatf.com
                </a>
                <br />
                <a
                  href="https://wa.me/1234567"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-500 mt-2 text-xl"
                >
                  <FaWhatsappSquare />
                </a>
              </span>
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          {[
            {
              src: img1,
              alt: "Carrera trabajo social",
              title: "CARRERA TRABAJO SOCIAL",
              desc: "M. Sc. Lic. Nancy Burgoa Porcel",
              desc2: "Directora de Carrera",
            },
            {
              src: img2,
              alt: "Carrera linguistica",
              title: "CARRERA LIGUISTICA",
              desc: "M. Sc. Lic. Marcelino Choquehuanca Ibarra",
              desc2: "Director de Carrera",
            },
            {
              src: img3,
              alt: "Carrera turismo",
              title: "CARRERA TURISMO",
              desc: "M. Sc. Lic. Luis Alberto Cary Condori",
              desc2: "Director de Carrera",
            },
            {
              src: img4,
              alt: "Programa Ciencias de la comunicacion",
              title: "PROGRAMA CIENCIAS DE LA COMUNICACION",
              desc: "M. Sc. Lic. Ernesto Sanabria Villalba ",
              desc2: "Resp. Académico",
            },
            {
              src: img5,
              alt: "Carrera Turismo Uyuni",
              title: "CARRERA TURISMO UYUNI",
              desc: "....................",
              desc2: "Director de Carrera",
            },
            {
              src: img6,
              alt: "Carrera Linguistica Uyuni",
              title: "CARRERA LINGUISTICA UYUNI",
              desc: "...................",
              desc2: "Director de Carrera",
            },
            {
              src: img7,
              alt: "Programa modular Linguistica Uyuni",
              title: "PROGRAMA MODULAR LIGUISTICA UNCIA",
              desc: ".................",
              desc2: "Director de Carrera",
            },
            {
              src: img8,
              alt: "Carrera Trabajo Social Uncia",
              title: "CARRERA TRABAJO SOCIAL UNCIA",
              desc: "..................",
              desc2: "Director de Carrera",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="card relative rounded-lg shadow-[20px_20px_50px_rgba(8,47,71,0.5)] overflow-hidden text-center w-64 flex-shrink-0 transform transition duration-300 hover:scale-105"
              style={{
                backgroundImage: `url(${item.src || "/placeholder.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "450px", // Mantener la altura para que la imagen de fondo se vea bien
              }}
            >
              {/* Overlay para legibilidad del texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>

              <div className="content relative z-10 h-full flex flex-col justify-end items-center p-4">
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
        {/* Botón de volver atrás */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <button
            onClick={goBack}
            className="p-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors duration-300"
            aria-label="Volver atrás"
          >
            {/* Flechita hacia la izquierda */}
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
            {/* Ícono de casita */}
            <ImHome className="w-5 h-5" />
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
        .card a {
          display: inline-block;
          margin-top: 20px;
          text-decoration: none;
          padding: 8px 30px 11px;
          border-radius: 50px;
          box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.8);
          text-transform: uppercase;
        }
      `}</style>
    </section>
  )
}

export default RutaFacCienSocHum
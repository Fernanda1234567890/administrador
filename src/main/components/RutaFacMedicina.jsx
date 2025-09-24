import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import { ImHome } from 'react-icons/im';

import { FaWhatsappSquare } from 'react-icons/fa';
import decanomedimg from '../assets/logo-uatf.png'; 
const RutaFacMedicina = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  // Cierra el popover al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      const popover = document.querySelector('.popover-content');
      const button = document.querySelector('.main-popover-button');
      if (isOpen && popover && !popover.contains(event.target) && !button.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Función para ir atrás
  const goBack = () => {
    navigate(-1); 
  };

  return (
     <section className="min-h-screen bg-white flex items-center justify-center py-12 px-6 sm:px-20">
      <div className="text-center max-w-6xl mx-auto w-full">
        <h1 className="text-5xl font-bold text-center mb-8 text-blu-950 z-10">FACULTAD DE MEDICINA</h1>

          {/* Sección con imagen y texto */}
          <div className="mt-10 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            {/* Texto a la izquierda */}
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-2xl font-semibold text-blue-900">Dr. Jose Manuel Calle Aracena  </h2>
              <p className="text font-semibold text-blue-900 mt-2">
              Decano de la Facultad de Medicina
              </p>
            </div>

            {/* Imagen a la derecha con overlay */}
            <div className="relative md:w-1/2 flex justify-center">
              <button
                className="w-80 h-96 rounded-lg shadow-md focus:outline-none hover:opacity-90 transition-opacity duration-300 main-popover-button hover:scale-105 transform transition-transform duration-300 ease-in-out"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img
                  src={decanomedimg}
                  alt="Vicerrector"
                  className="w-full h-full object-cover rounded-lg"
                />
                <span className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-70 text-white text-sm font-medium opacity-0 hover:opacity-100 transition-opacity text-center p-4">
                  <a href="mailto:correoelectronico@uatf.com" className="text-blue-500 underline">
                    correoelectronico@uatf.com
                  </a>
                  <br />
                  <a href="https://wa.me/1234567" target="_blank" rel="noreferrer" className="text-green-500 mt-2 text-xl">
                    <FaWhatsappSquare />
                  </a>
                </span>
              </button>
            </div>
          </div>
        <div className="flex justify-center gap-6 flex-wrap relative z-10">
        {[
          { src: 'carMed.jpg', 
            alt: 'Carrera Medicina',
            title: 'CARRERA MEDICINA', 
            desc: 'Dr. Adolfo Fernando Humerez Guzmán',
            desc2:'Director de Carrera' 
          },

          ].map((item, index) => (
            <div
              key={index}
              className="card bg-white bg-opacity-10 rounded-lg shadow-[20px_20px_50px_rgba(8,47,71,10.5)] overflow-hidden text-center p-4 border border-gray-200 w-64 flex-shrink-0 relative backdrop-blur-md transform transition duration-300 hover:scale-105"
            > 
              <img
                src={item.src}
                alt={item.alt}
                className="w-16 h-16 object-cover mx-auto mb-2 filter invert-[82%] sepia-[60%] saturate-[2929%] hue-rotate-[353deg] brightness-[105%] contrast-[103%] opacity-20 absolute top-10 left-1/2 -translate-x-1/2 z-0"
              />
              <div className="content relative z-10 transform transition duration-300 translate-y-20 opacity-0 hover:translate-y-0 hover:opacity-100">
                <h1 className="text-xl font-semibold text-black mb-2">{item.title}</h1>
                <div className="mb-4">
                <p className="text-gray-800">{item.desc}</p>
                {item.desc2 && (
                  <h3 className="text-base font-medium text-gray-600 italic">{item.desc2}</h3>
                )}
              </div>
                {item.path && (
                  <Link
                    to={item.path}
                    className="inline-block px-4 py-2 bg-transparent border-2 border-white text-white rounded-full hover:bg-[#9C27B0] transition duration-300"
                  >
                    Ver más ...
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación */}
        <div className="mt-8 flex justify-center items-center gap-4 relative z-10">
          <button
            onClick={goBack}
            className="p-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors duration-300"
            aria-label="Volver atrás"
          >
            {/* Flechita hacia la izquierda */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      {/* Estilos personalizados que no cubre Tailwind */}
      <style>
        {`
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
            color: #ccc;
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
          
        `}
      </style>
    </section>
  );
};

export default RutaFacMedicina;
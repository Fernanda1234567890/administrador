import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ImHome } from 'react-icons/im';
import derechoimg from '../assets/DERECHO.jpg';
import geoimg from '../assets/ING-GEOLOGICA.jpg';
import ingminimg from '../assets/ING-MINERA.jpg';
import agriimg from '../assets/CIENCIAS-AGRICOLAS-Y-PP.jpg';
import ingimg from '../assets/INGENIERIA.jpg';
import purasimg from '../assets/CIENCIAS-PURAS.jpg'; 
import ecofinadmimg from '../assets/ECONOMICAS-FF-Y-AA.jpg';
import sochuming from '../assets/CIENCIAS-SOCIALES.jpg';
import ingtecimg from '../assets/ING-TECNOLOGICA.jpg';  
import artimg from '../assets/ARTES.jpg';
import medimg from '../assets/logo-uatf.png';
import saludimg from '../assets/FACULTAD-CIENCIAS-DE-LA-SALUD.jpg'; 


const RutaFacultades = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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

  const goBack = () => navigate(-1);

  const facultades = [
    { src: derechoimg, alt: 'Facultad de Derecho', title: 'FACULTAD DE DERECHO', path:'/fac-derecho' },
    { src: geoimg, alt: 'Carrera odontologia', title: 'FACULTAD DE INGENIERIA GEOLOGICA', path:'/fac-ing-geo' },
    { src: ingminimg, alt: 'Facultades', title: 'FACULTAD DE INGENIERIA MINERA',  path:'/fac-ing-min' },
    { src: agriimg, alt: 'Carrera Ingenieria de Sistemas', title: 'FACULTAD DE CIENCIAS AGRICOLAS Y PECUARIAS', path:'/fac-cien-agri-pec'},
    { src: ingimg, alt: 'Carrera odontologia', title: 'FACULTAD DE INGENIERIA', path:'/fac-ing' },
    { src: purasimg , alt: 'Facultades', title: 'FACULTAD DE CIENCIAS PURAS',  path:'/fac-cien-pur' },
    { src: ecofinadmimg, alt: 'Carrera Ingenieria de Sistemas', title: 'FACULTAD DE CIENCIAS ECONOMICAS FINANCIERAS Y ADMINISTRATIVAS',path:'/fac-cien-eco-fin-adm'},
    { src: sochuming, alt: 'Carrera odontologia', title: 'FACULTAD DE CIENCIAS SOCIALES Y HUMANISTICAS',path:'/fac-cien-soc-hum' },
    { src: ingtecimg, alt: 'Facultades', title: 'FACULTAD DE INGENIERIA TECNOLOGICA',path:'/fac-ing-tec' },
    { src: artimg, alt: 'Carrera Ingenieria de Sistemas', title: 'FACULTAD DE ARTES', path:'/fac-art' },
    { src: medimg, alt: 'Carrera odontologia', title: 'FACULTAD DE MEDICINA', path:'/fac-med' },
    { src: saludimg, alt: 'Facultades', title: 'FACULTAD DE CIENCIA DE LA SALUD',path:'/fac-cien-sal' },
  ];

  return (
    <section className="min-h-screen bg-gray-200 flex items-center justify-center py-12 px-4">
      <div className="text-center max-w-7xl mx-auto w-full">
        <h1 className="text-5xl font-bold text-center mb-8 text-blue950">FACULTADES</h1>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {facultades.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-96 sm:h-[500px] rounded-lg overflow-hidden shadow-lg">
                {/* Imagen de fondo */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-[500px] object-cover"
                />

                {/* Capa oscura encima */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Contenido centrado */}
                <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white mb-3">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm sm:text-base mb-3 px-2">{item.desc}</p>
                  {item.path && (
                    <Link
                      to={item.path}
                      className="mt-auto inline-block px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
                    >
                      Ver más ...
                    </Link>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botones de navegación */}
        <div className="mt-10 flex justify-center items-center gap-4">
          <button
            onClick={goBack}
            className="p-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors duration-300"
            aria-label="Volver atrás"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <Link
            to="/"
            className="p-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors duration-300"
            aria-label="Ir a inicio"
          >
            <ImHome className="w-5 h-5"/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RutaFacultades;
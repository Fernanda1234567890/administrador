import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ImHome } from 'react-icons/im';
import { FaWhatsappSquare } from 'react-icons/fa';
import decanomedimg from '../assets/img1.jpg';
import img1 from '../assets/img3.jpg'; 
import img2 from '../assets/img8.jpg';    
import img3 from '../assets/img11.jpg'; 
import img4 from '../assets/img12.jpg'; 
import img5 from '../assets/img13.jpg'; 
import img6 from '../assets/logo-uatf.png'; 
import img7 from '../assets/logo-uatf.png'; 
import img8 from '../assets/logo-uatf.png'; 

const RutaFacCienEcoFinAdm = () => {
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

  const goBack = () => {
    navigate(-1);
  };

  const carreras = [
    {
      src: img1,
      alt: 'Carrera Admi. Empresas',
      title: 'CARRERA ADMINISTRACION DE EMPRESAS',
      desc: 'M. Sc. Lic. Carlos Poveda Choque',
      desc2: 'Director de Carrera',
    },
    {
      src: img2,
      alt: 'Carrera Contabilidad y Finanzas',
      title: 'CARRERA CONTABILIDAD Y FINANZAS',
      desc: 'M. Sc. Lic. Teófilo Llanos Chipana',
      desc2: 'Director de Carrera',
    },
    {
      src: img3,
      alt: 'Carrera Auditoria - Contaduria Pública',
      title: 'CARRERA AUDITORIA - CONTADURIA PÚBLICA',
      desc: 'M. Sc. Aud. Gabriel Julio Avendaño Ondarza',
      desc2: 'Director de Carrera',
    },
    {
      src: img4,
      alt: 'Carrera Economía',
      title: 'CARRERA ECONOMIA',
      desc: 'M. Sc. Lic. Octavio Martínez Chura',
      desc2: 'Director de Carrera',
    },
    {
      src: img5,
      alt: 'Carrera Ing. Comercial',
      title: 'CARRERA ING. COMERCIAL',
      desc: 'M. Sc. Ing. Omar Freddy Apaza Coro',
      desc2: 'Responsable',
    },
    {
      src: img6,
      alt: 'Carrera Contaduria Pública y Auditoria Tupiza',
      title: 'CARRERA CONTADURIA PÚBLICA Y AUDITORIA TUPIZA',
      desc: '....................',
      desc2: 'Director de Carrera',
    },
    {
      src: img7,
      alt: 'Carrera Economía Uncia',
      title: 'CARRERA ECONOMIA UNCIA',
      desc: '...............',
      desc2: 'Director de Carrera',
    },
    {
      src: img8,
      alt: 'Carrera Economía Uyuni',
      title: 'CARRERA ECONOMIA UYUNI',
      desc: '...............',
      desc2: 'Director de Carrera',
    },
  ];

  return (
    <section className="min-h-screen bg-white flex items-center justify-center py-12 px-6 sm:px-20">
      <div className="text-center max-w-6xl mx-auto w-full">
        <h1 className="text-5xl font-bold text-center mb-8 text-blue-950">
          FACULTAD DE CIENCIAS ECONOMICAS, FINANCIERAS Y ADMINISTRATIVAS
        </h1>

        <div className="mt-10 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-2xl font-semibold text-blue-900">M. Sc. Lic. Alberto Morales Colque</h2>
            <p className="text font-semibold text-blue-900 mt-2">
              Decano de la Facultad de CC EE. FF. y AA.
            </p>
          </div>

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

        <div className="flex justify-center gap-10 flex-wrap">
          {carreras.map((item, index) => (
            <div
              key={index}
              className="card relative rounded-lg shadow-[20px_20px_50px_rgba(8,47,71,0.5)] overflow-hidden text-center w-64 flex-shrink-0 transform transition duration-300 hover:scale-105"
              style={{
                backgroundImage: `url(${item.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '450px',
              }}
            >
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
                    Ver más ...
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center items-center gap-4">
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
  );
};

export default RutaFacCienEcoFinAdm;
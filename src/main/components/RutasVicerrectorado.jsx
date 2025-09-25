// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, EffectCreative, Autoplay, Keyboard } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-creative';

// import acadeimg from '../assets/estud.jpg'; 
// import adminimg from '../assets/divadmin.jpg';
// import vicerrectorimg from '../assets/vicerrector-image.jpg'; 
// import frontisImage from '../assets/tomas05.jpg';

// import { FaWhatsappSquare } from "react-icons/fa";

// const RutasVicerrectorado = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       const popover = document.querySelector('.popover-content');
//       const button = document.querySelector('.main-popover-button');
//       if (isOpen && popover && !popover.contains(event.target) && !button.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isOpen]);

//   const goBack = () => {
//     navigate(-1);
//   };

//   const cards = [
//     {
//       src: acadeimg,
//       alt: 'Academica',
//       title: ' ACADEMICA',
//       //desc: 'Descripción breve...',
//       path: '/academica',
//     },
//     {
//       src: adminimg,
//       alt: 'Administrativa',
//       title: 'ADMINISTRATIVA',
//       //desc: 'Descripción breve...',
//       path: '/administrativa',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white py-1  w-full"> {/*py-1*/}

//       {/* Encabezado con imagen y lado derecho azul translúcido */}
//         <section className="relative w-full h-64 sm:h-60 md:h-30 overflow-hidden">
//           {/* Imagen de fondo */}
//           <img
//             src={frontisImage}
//             alt="Fondo Rectorado"
//             className="absolute inset-0 w-full h-full object-cover"
//           />

//           {/* Capa azul translúcida solo en el lado derecho */}
//           <div className="absolute inset-0 flex">
//             <div className="w-1/2 h-full"></div>
//             <div className="w-1/2 h-full bg-[#AB2A2A]/30"></div>
//           </div>

//           {/* Texto encima del lado derecho */}
//           <div className="absolute inset-0 flex justify-end items-center">
//             <div className="w-1/2 pr-6 sm:pr-12 md:pr-20 text-white z-10 text-right">
//               <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
//                 <span className="italic font-medium">Vicerrectorado</span>{" "}
//                 <span className="block md:inline font-light">U.A.T.F.</span>
//               </h1>
//             </div>
//           </div>
//         </section>
//       <div className="text-center max-w-7xl mx-auto w-full">
        
//       {/* Sección del rector con imagen a la derecha y texto a la izquierda */}
//       <div className="mt-10 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">

//         {/* Texto a la izquierda */}
//         <div className="text-center md:text-left md:w-1/2">
//           <h2 className="text-2xl font-semibold text-blue-900">M. Sc. Ing. David Soraide Lozano</h2>
//           <p className="text font-semibold text-blue-900 mt-2">Vicerrector de la Universidad Autónoma Tomás Frías</p>
//           <br></br>
//           <p>Como Vicerrector, reafirmo nuestro compromiso con la formación académica de calidad, el impulso a la investigación y la vinculación con la sociedad. Trabajamos para garantizar un entorno universitario inclusivo, dinámico y en constante evolución, al servicio de la región y del país.`,</p>
//         </div>

//         {/* Imagen a la derecha */}
//         <div className="relative md:w-1/2 flex justify-center">
//           <button
//             className="w-80 h-96 rounded-lg shadow-md focus:outline-none hover:opacity-90 transition-opacity duration-300 main-popover-button hover:scale-110 transform transition-transform duration-300 ease-in-out"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <img
//               src={vicerrectorimg}
//               alt="Rector Principal"
//               className="w-full h-full object-cover rounded-lg"
//             />
//             <span className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-70 text-white text-sm font-medium opacity-0 hover:opacity-100 transition-opacity text-center p-4">
//               {/* Mi bienvenida a nuestro sitio web que recoge el entusiasmo y la dedicación de todos los miembros... */}
//               <br />
//               <a href="mailto:correoelectronico@uatf.com" className="text-blue-500 underline">
//                 correoelectronico@uatf.com
//               </a>
//               <br />
//               <a href="https://wa.me/1234567" target="_blank" className="text-green-500 underline" rel="noreferrer">
//                 <FaWhatsappSquare />
//               </a>
//             </span>
//           </button>
//         </div>
//       </div>

//     <Swiper
//       grabCursor
//       effect="creative"
//       creativeEffect={{
//         prev: {
//           shadow: true,
//           translate: ['-120%', 0, -500],
//         },
//         next: {
//           translate: ['120%', 0, -500],
//         },
//       }}
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{
//         delay: 3000,
//         disableOnInteraction: false,
//       }}
//       keyboard={{ enabled: true }}
//       modules={[Navigation, Pagination, EffectCreative, Autoplay, Keyboard]}
//       className="w-full h-[24rem] md:h-[32rem] rounded-xl overflow-hidden"
//     >
//       {cards.map((item, index) => (
//         <SwiperSlide key={index}>
//           <div className="relative w-full h-full">
//             {/* Imagen de fondo */}
//             <img
//               src={item.src}
//               alt={item.alt}
//               className="absolute inset-0 w-full h-full object-cover"
//             />

//             {/* Overlay azul oscuro */}
//             <div className="absolute inset-0 bg-blue-900/50" />

//             {/* Contenido centrado */}
//             <div className="relative z-10 h-full flex items-center justify-center">
//               <div className="bg-black/30 px-6 py-8 md:px-10 md:py-10 max-w-2xl rounded-lg text-white text-center md:text-left">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-2">{item.title}</h2>
//                 <p className="text-lg font-semibold mb-4">{item.subtitle}</p>
//                 <p className="text-sm md:text-base mb-6">{item.desc}</p>
//                 {item.path && (
//                   <Link
//                     to={item.path}
//                     className="inline-block bg-orange-800 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded"
//                   >
//                     Ver más
//                   </Link>
//                 )}
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>


//       {/* Botones de navegación */}
//       <div className="mt-8 flex justify-center items-center gap-4">
//         <button
//           onClick={goBack}
//           className="p-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors duration-300"
//           aria-label="Volver atrás"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <Link
//           to="/"
//           className="p-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors duration-300"
//           aria-label="Ir a inicio"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.707 1.707a1 1 0 00-1.414 0l-7 7A1 1 0 003 10h1v6a1 1 0 001 1h4v-4h2v4h4a1 1 0 001-1v-6h1a1 1 0 00.707-1.707l-7-7z" />
//           </svg>
//         </Link>
//       </div>
//     </div>

//   </div>
//   );
// };

// export default RutasVicerrectorado;
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import acadeimg from '../assets/estud.jpg'; 
import adminimg from '../assets/divadmin.jpg';
import vicerrectorimgDefault from '../assets/vicerrector-image.jpg'; 
import frontisImage from '../assets/tomas05.jpg';

import { FaWhatsappSquare } from "react-icons/fa";

const RutasVicerrectorado = () => {
  const [vicerrector, setVicerrector] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

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

  // Traer datos del vicerrector
  useEffect(() => {
    const fetchVicerrector = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/autoridades");
        const data = await res.json();
        const vicerrectorData = data.docentes.find(d => d.cargo_intermedio.nombre === "Vicerrector") || null;
        setVicerrector(vicerrectorData);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar vicerrector:", error);
        setLoading(false);
      }
    };
    fetchVicerrector();
  }, []);

  const cards = [
    { src: acadeimg, alt: 'Académica', title: 'ACADEMICA', path: '/academica' },
    { src: adminimg, alt: 'Administrativa', title: 'ADMINISTRATIVA', path: '/administrativa' },
  ];

  return (
    <div className="min-h-screen bg-white py-1 w-full">

      {/* Encabezado */}
      <section className="relative w-full h-64 sm:h-60 md:h-30 overflow-hidden">
        <img src={frontisImage} alt="Fondo Vicerrectorado" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full"></div>
          <div className="w-1/2 h-full bg-[#AB2A2A]/30"></div>
        </div>
        <div className="absolute inset-0 flex justify-end items-center">
          <div className="w-1/2 pr-6 sm:pr-12 md:pr-20 text-white z-10 text-right">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              <span className="italic font-medium">Vicerrectorado</span>{" "}
              <span className="block md:inline font-light">U.A.T.F.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Sección Vicerrector */}
      <div className="text-center max-w-7xl mx-auto w-full">
        <div className="mt-10 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-2xl font-semibold text-blue-900">
              {loading ? "Cargando autoridad..." : `${vicerrector?.docente.persona.nombres} ${vicerrector?.docente.persona.apellidos}`}
            </h2>
            <p className="text font-semibold text-blue-900 mt-2">
              Vicerrector de la Universidad Autónoma Tomás Frías
            </p>
            <br />
            <p>
              Como Vicerrector, reafirmo nuestro compromiso con la formación académica de calidad, el impulso a la investigación y la vinculación con la sociedad. Trabajamos para garantizar un entorno universitario inclusivo, dinámico y en constante evolución, al servicio de la región y del país.
            </p>
          </div>

          <div className="relative md:w-1/2 flex justify-center">
            <button
              className="w-80 h-96 rounded-lg shadow-md focus:outline-none hover:opacity-90 transition-opacity duration-300 main-popover-button hover:scale-110 transform transition-transform duration-300 ease-in-out"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={loading ? vicerrectorimgDefault : vicerrector?.docente.persona.img || vicerrectorimgDefault}
                alt="Vicerrector"
                className="w-full h-full object-cover rounded-lg"
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-70 text-white text-sm font-medium opacity-0 hover:opacity-100 transition-opacity text-center p-4">
                <br />
                <a href={`mailto:${loading ? "correo@uatf.com" : vicerrector?.docente.persona.email}`} className="text-blue-500 underline">
                  {loading ? "correo@uatf.com" : vicerrector?.docente.persona.email}
                </a>
                <br />
                <a href={`https://wa.me/${loading ? "5911234567" : vicerrector?.docente.persona.telefono}`} target="_blank" className="text-green-500 underline" rel="noreferrer">
                  <FaWhatsappSquare />
                </a>
              </span>
            </button>
          </div>
        </div>

        {/* Carrusel de secciones */}
        <Swiper
          grabCursor
          effect="creative"
          creativeEffect={{ prev: { shadow: true, translate: ['-120%', 0, -500] }, next: { translate: ['120%', 0, -500] } }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          keyboard={{ enabled: true }}
          modules={[Navigation, Pagination, EffectCreative, Autoplay, Keyboard]}
          className="w-full h-[24rem] md:h-[32rem] rounded-xl overflow-hidden"
        >
          {cards.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full rounded-xl overflow-hidden group">
                <img src={item.src} alt={item.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#AB2A2A]/40"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center p-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h2>
                  {item.path && (
                    <Link to={item.path} className="inline-block mt-4 px-5 py-2 bg-[#AB2A2A] text-white rounded hover:bg-red-800 transition">
                      Ver más
                    </Link>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botones navegación */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <button onClick={goBack} className="p-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors duration-300" aria-label="Volver atrás">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <Link to="/" className="p-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors duration-300" aria-label="Ir a inicio">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.707 1.707a1 1 0 00-1.414 0l-7 7A1 1 0 003 10h1v6a1 1 0 001 1h4v-4h2v4h4a1 1 0 001-1v-6h1a1 1 0 00.707-1.707l-7-7z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RutasVicerrectorado;

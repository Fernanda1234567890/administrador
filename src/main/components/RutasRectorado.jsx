// import { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, EffectCreative, Autoplay, Keyboard } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-creative";
// import { ImHome } from "react-icons/im";
// import rectorImg from "../assets/rector-image.jpg";
// import secretariaImg from "../assets/img6.jpg";
// import auditoriaImg from "../assets/img2.jpg";
// import juridicaImg from "../assets/img3.jpg";
// import comisionImg from "../assets/img8.jpg";
// import frontisImage from "../assets/tomas05.jpg"; 

// import { BsWhatsapp } from "react-icons/bs";;

// const RutasRectorado = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();
//   const goBack = () => navigate(-1);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       const popover = document.querySelector(".popover-content");
//       const button = document.querySelector(".main-popover-button");
//       if (isOpen && popover && !popover.contains(event.target) && !button.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isOpen]);

//   const cards = [
//     {
//       src: secretariaImg,
//       alt: "Secretaría General",
//       title: "SECRETARÍA GENERAL",
//       //desc: "Descripción breve de secretaría general.",
//       authority: "M. Sc. Abog. Jaqueline Filipps Díaz",
//       period: "Gestión 2024-2026",
//       //message: "Comprometidos con la transparencia y eficiencia administrativa de nuestra universidad.",
//       email: "secretaria.general@uatf.edu.bo",
//       phone: "+591 2 6225451",
//       path: "/secretaria-general",
//     },
//     {
//       src: auditoriaImg,
//       alt: "Auditoría Interna",
//       title: "AUDITORÍA INTERNA",
//       //desc: "Descripción breve de auditoría interna.",
//       authority: "Lic. Alejandro Gutiérrez",
//       period: "Gestión 2023-2025",
//       message: "Garantizando la correcta gestión de recursos y procesos institucionales.",
//       email: "auditoria.interna@uatf.edu.bo",
//       phone: "+591 2 6225452",
//     },
//     {
//       src: juridicaImg,
//       alt: "Asesoría Jurídica",
//       title: "ASESORÍA JURÍDICA",
//       //desc: "Descripción breve de asesoría jurídica.",
//       authority: "M. Sc. Abog. Rafael Montoya Rivera",
//       period: "Gestión 2024-2026",
//       message: "Brindando asesoramiento legal integral para el desarrollo institucional.",
//       email: "asesoria.juridica@uatf.edu.bo",
//       phone: "+591 2 6225453",
//     },
//     {
//       src: comisionImg,
//       alt: "Comisión Económica",
//       title: "COMISIÓN ECONÓMICA",
//       //desc: "Descripción breve de comisión económica.",
//       authority: "Lic. Roberto Sánchez",
//       period: "Gestión 2024-2026",
//       message: "Administrando eficientemente los recursos económicos de la universidad.",
//       email: "comision.economica@uatf.edu.bo",
//       phone: "+591 2 6225454",
//       path: "/comision-economica",
//     },
//   ];

//   return (
//     <>
//     <section className="min-h-screen bg-white py-1 w-full"> {/*px-4 sm:px-6 md:px-10 lg:px-20*/}
//       {/* Encabezado con imagen y lado derecho azul translúcido */}
//         <section className="relative w-full h-64 sm:h-60 md:h-30 overflow-hidden">
//           {/* Imagen de fondo */}
//             <img
//             src={frontisImage}
//             alt="Fondo Rectorado"
//             loading="lazy"
//             className="w-full h-full object-cover"
//           />

//           {/* Capa azul translúcida en el lado derecho (horizontal) */}
//           <div className="absolute inset-0 flex">
//             <div className="w-1/2 h-full" />
//             <div className="w-1/2 h-full bg-[#082F47]/70" />
//           </div>

//           {/* Texto encima de la capa azul */}
//           <div className="absolute inset-0 flex justify-end items-center">
//             <div className="w-1/2 pr-4 sm:pr-8 md:pr-16 text-white z-10 text-right">
//               <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight">
//                 <span className="italic font-medium">Rectorado</span>{" "}
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
//           <h2 className="text-2xl font-semibold text-blue-900">Ph.D. Pedro Guido Lopez Cortés</h2>
//           <p className="text font-semibold text-blue-900 mt-2">Rector de la Universidad Autónoma Tomás Frías</p>
//           <br></br>
//           <p>Mi bienvenida a nuestro sitio web que recoge el entusiasmo y la dedicación de todos los miembros de esta Universidad para reafirmarnos en la visión de una Universidad de excelencia, donde la convivencia diaria en sus Campus es parte de la formación y el desarrollo personal del estudiante en conocimientos, habilidades, capacidades y valores.
//           Toda una organización a disposición de la sociedad. El estudiante va a encontrar en la Tomás Frías, un equipo de personas que le va a guiar en su proceso de aprendizaje para afrontar los retos de una sociedad en continuo cambio.

//           </p>
//         </div>

//         {/* Imagen a la derecha */}
//         <div className="relative md:w-1/2 flex justify-center">
//           <button
//             className="w-80 h-96 rounded-lg shadow-md focus:outline-none hover:opacity-90 transition-opacity duration-300 main-popover-button hover:scale-110 transform transition-transform duration-300 ease-in-out"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <img
//               src={rectorImg}
//               alt="Rector Principal"
//               className="w-full h-full object-cover rounded-lg"
//             />
//             <span className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-70 text-white text-sm font-medium opacity-0 hover:opacity-100 transition-opacity text-center p-4">
//               {/* Mi bienvenida a nuestro sitio web que recoge el entusiasmo y la dedicación de todos los miembros... */}
//               <br />
//               <a
//                 href="mailto:correoelectronico@uatf.com"
//                 className="text-white-500 no-underline"
//               >
//               <span className="text-white drop-shadow-md transition-all duration-300 hover:text-2xl hover:drop-shadow-lg">
//                 correoelectronico@uatf.com
//               </span>
//               </a>


//               <br />
//               <a href="https://wa.me/5911234567" target="_blank" className="text-green-500 underline" rel="noreferrer">
//                 <BsWhatsapp className="text-5x1" style={{ width: '2rem', height: '2rem' }} />
//               </a>
//             </span>
//           </button>
//         </div>
//       </div>

       
//        {/* Carrusel de tarjetas de unidades */}
//       <Swiper
//           grabCursor
//           effect="creative"
//           creativeEffect={{
//             prev: { shadow: true, translate: ["-120%", 0, -500] },
//             next: { translate: ["120%", 0, -500] },
//           }}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           keyboard={{ enabled: true }}
//           modules={[Navigation, Pagination, EffectCreative, Autoplay, Keyboard]}
//           className="w-full max-w-5xl h-[34rem] rounded-xl overflow-hidden"
//           slidesPerView={1}
//           spaceBetween={30}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 2 },
//           }}
//         >
//           {cards.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative w-full h-full rounded-xl overflow-hidden group">
//                 {/* Imagen de fondo */}
//                 <img
//                   src={item.src}
//                   alt={item.alt}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 {/* Capa oscura */}
//                 <div className="absolute inset-0 bg-[#082F47]/40"></div>

//                 {/* Contenido encima */}
//                 <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
//                   <div>
//                     <h2 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h2>
//                     <p className="text-sm md:text-base">{item.desc}</p>
//                   </div>

//                   {/* Información adicional */}
//                   <div className="mt-6">
//                     <p className="text-sm md:text-base">{item.message}</p>
//                     <div className="mt-2 space-y-1">
//                       <a href={`mailto:${item.email}`} className="block text-blue-300 underline text-sm">{item.email}</a>
//                       <a href={`tel:${item.phone}`} className="block text-green-300 underline text-sm">{item.phone}</a>
//                     </div>
//                   </div>

//                   {/* Autoridad y periodo */}
//                   <div className="mt-4">
//                     <h3 className="text-lg md:text-xl font-semibold">{item.authority}</h3>
//                     <p className="text-sm">{item.period}</p>
//                   </div>

//                   {/* Botón */}
//                   {item.path && (
//                     <Link
//                       to={item.path}
//                       className="inline-block mt-4 px-5 py-2 bg-[#AB2A2A] text-white rounded hover:bg-red-800 transition"
//                     >
//                       Ver más...
//                     </Link>
//                   )}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//           {/* Botones navegación */}
//           <div className="mt-8 flex justify-center items-center gap-4">
//             <button
//               onClick={goBack}
//               className="p-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors duration-300"
//               aria-label="Volver atrás"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//             <Link to="/" className="p-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors duration-300" aria-label="Ir a inicio">
//               <ImHome className="w-5 h-5" />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default RutasRectorado;


import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCreative, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { ImHome } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";

import frontisImage from "../assets/tomas05.jpg"; 
import rectorImgDefault from "../assets/rector-image.jpg"; // Imagen por defecto si no hay
import secretariaImgDefault from "../assets/img6.jpg";
import auditoriaImgDefault from "../assets/img2.jpg";
import juridicaImgDefault from "../assets/img3.jpg";
import comisionImgDefault from "../assets/img8.jpg";

const RutasRectorado = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [autoridades, setAutoridades] = useState({ rector: null, unidades: [] });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const popover = document.querySelector(".popover-content");
      const button = document.querySelector(".main-popover-button");
      if (isOpen && popover && !popover.contains(event.target) && !button.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const fetchAutoridades = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/autoridades");
        const data = await res.json();

        // Filtrar rector y vicerrector
        const rectorData = data.docentes.find(d => d.cargo_intermedio.nombre === "Rector") || null;

        // Crear arreglo de unidades con información de autoridad
        const unidadesData = [
          { nombre: "Secretaría General", img: secretariaImgDefault, unidad: data.administrativos.find(a => a.unidad.nombre === "Secretaria General") },
          { nombre: "Auditoría Interna", img: auditoriaImgDefault, unidad: data.administrativos.find(a => a.unidad.nombre === "Auditoria Interna") },
          { nombre: "Asesoría Jurídica", img: juridicaImgDefault, unidad: data.administrativos.find(a => a.unidad.nombre === "Asesoria Juridica") },
          { nombre: "Comisión Económica", img: comisionImgDefault, unidad: data.administrativos.find(a => a.unidad.nombre === "Comisión Económica") },
        ];

        setAutoridades({ rector: rectorData, unidades: unidadesData });
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar autoridades:", error);
        setLoading(false);
      }
    };

    fetchAutoridades();
  }, []);

  // Helper para mostrar datos de autoridad
  const getAuthorityInfo = (unidad) => {
    if (!unidad || !unidad.unidad) return { name: "Cargando autoridad...", email: "", phone: "" };
    const persona = unidad.unidad.administrativo?.persona || unidad.unidad.docente?.persona;
    return {
      name: persona ? `${persona.nombres}${persona.apellidos}` : "Cargando autoridad...",
      email: persona?.email || "",
      phone: persona?.telefono || "",
    };
  };

  return (
    <>
      <section className="min-h-screen bg-white py-1 w-full">
        {/* Encabezado */}
        <section className="relative w-full h-64 sm:h-60 md:h-30 overflow-hidden">
          <img src={frontisImage} alt="Fondo Rectorado" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full" />
            <div className="w-1/2 h-full bg-[#082F47]/70" />
          </div>
          <div className="absolute inset-0 flex justify-end items-center">
            <div className="w-1/2 pr-4 sm:pr-8 md:pr-16 text-white z-10 text-right">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight">
                <span className="italic font-medium">Rectorado</span>{" "}
                <span className="block md:inline font-light">U.A.T.F.</span>
              </h1>
            </div>
          </div>
        </section>

        <div className="text-center max-w-7xl mx-auto w-full">
          {/* Sección Rector */}
          <div className="mt-10 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-2xl font-semibold text-blue-900">
                {loading ? "Cargando autoridad..." : `${autoridades.rector?.docente.persona.nombres}${autoridades.rector?.docente.persona.apellidos}`}
              </h2>
              <p className="text font-semibold text-blue-900 mt-2">
                Rector de la Universidad Autónoma Tomás Frías
              </p>
              <br />
              <p>
                Mi bienvenida a nuestro sitio web que recoge el entusiasmo y la dedicación de todos los miembros de esta Universidad...
              </p>
            </div>

            <div className="relative md:w-1/2 flex justify-center">
              <button
                className="w-80 h-96 rounded-lg shadow-md focus:outline-none hover:opacity-90 transition-opacity duration-300 main-popover-button hover:scale-110 transform transition-transform duration-300 ease-in-out"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img
                  src={loading ? rectorImgDefault : autoridades.rector?.docente.persona.img || rectorImgDefault}
                  alt="Rector Principal"
                  className="w-full h-full object-cover rounded-lg"
                />
                <span className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-70 text-white text-sm font-medium opacity-0 hover:opacity-100 transition-opacity text-center p-4">
                  <br />
                  <a href={`mailto:${loading ? "correo@uatf.com" : autoridades.rector?.docente.persona.email}`} className="text-white-500 no-underline">
                    <span className="text-white drop-shadow-md transition-all duration-300 hover:text-2xl hover:drop-shadow-lg">
                      {loading ? "correo@uatf.com" : autoridades.rector?.docente.persona.email}
                    </span>
                  </a>
                  <br />
                  <a href={`https://wa.me/${loading ? "5911234567" : autoridades.rector?.docente.persona.telefono}`} target="_blank" className="text-green-500 underline" rel="noreferrer">
                    <BsWhatsapp className="text-5x1" style={{ width: '2rem', height: '2rem' }} />
                  </a>
                </span>
              </button>
            </div>
          </div>

          {/* Carrusel de unidades */}
          <Swiper
            grabCursor
            effect="creative"
            creativeEffect={{ prev: { shadow: true, translate: ["-120%", 0, -500] }, next: { translate: ["120%", 0, -500] } }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            keyboard={{ enabled: true }}
            modules={[Navigation, Pagination, EffectCreative, Autoplay, Keyboard]}
            className="w-full max-w-5xl h-[34rem] rounded-xl overflow-hidden"
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 2 } }}
          >
            {autoridades.unidades.map((item, index) => {
              const info = getAuthorityInfo(item);
              return (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full rounded-xl overflow-hidden group">
                    <img src={item.img} alt={item.nombre} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[#082F47]/40"></div>
                    <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{item.nombre}</h2>
                      </div>
                      <div className="mt-6 space-y-1">
                        <p className="text-sm md:text-base">{info.name}</p>
                        {info.email && <a href={`mailto:${info.email}`} className="block text-blue-300 underline text-sm">{info.email}</a>}
                        {info.phone && <a href={`tel:${info.phone}`} className="block text-green-300 underline text-sm">{info.phone}</a>}
                      </div>
                      {item.path && (
                        <Link to={item.path} className="inline-block mt-4 px-5 py-2 bg-[#AB2A2A] text-white rounded hover:bg-red-800 transition">
                          Ver más...
                        </Link>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

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
            <Link to="/" className="p-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors duration-300" aria-label="Ir a inicio">
              <ImHome className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RutasRectorado;

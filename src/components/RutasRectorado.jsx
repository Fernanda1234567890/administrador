import React, { useState, useEffect } from 'react';

const RutasRectorado = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <section className="min-h-screen bg-gray-800 flex items-center justify-center py-12 px-20">
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">RECTORADO</h1>
        
        {/* Imagen principal en el centro */}
        <div className="mb-10 relative">
          <button
            className="w-80 h-96 rounded-lg shadow-md focus:outline-none hover:opacity-90 transition-opacity relative main-popover-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src="rector-image.jpg" // Reemplaza con la ruta de la imagen del rector
              alt="Rector Principal"
              className="w-full h-full object-cover rounded-lg"
            />
          </button>
          {isOpen && (
            <div
              role="tooltip"
              className="absolute z-10 inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-lg opacity-100 w-80 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 popover-content"
            >
              <div className="p-3">
                <div className="flex">
                  <div className="me-3 shrink-0">
                    <a href="#" className="block p-2 bg-gray-100 rounded-lg dark:bg-gray-700">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="logo-uatf.png" // Ajusta la ruta
                        alt="Logo UATF"
                      />
                    </a>
                  </div>
                  <div>
                    <p className="mb-1 text-base font-semibold leading-none text-gray-900 dark:text-white">
                      <a href="#" className="hover:underline">
                        RECTOR
                      </a>
                    </p>
                    <p className="mb-3 text-sm font-normal dark:text-white">Ph.D. Pedro Guido Lopez Cortés</p>
                    <p className="mb-4 text-sm">
                      Mi bienvenida a nuestro sitio web que recoge el entusiasmo y la dedicación de todos los miembros de esta Universidad para reafirmarnos en la visión de una Universidad de excelencia...
                    </p>
                    <ul className="text-sm">
                      <li className="flex items-center mb-2">
                        <span className="me-2 font-semibold text-gray-400">
                          <svg
                            className="w-3.5 h-3.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 21 20"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z"
                            />
                          </svg>
                        </span>
                        <a href="mailto:correoelectronico@uatf.com" className="text-blue-600 dark:text-blue-500 hover:underline">
                          correoelectronico@uatf.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tarjetas secundarias en una sola fila responsiva */}
        <div className="flex justify-center gap-6 flex-wrap">
          {[
            { src: 'secretaria-general.jpg', alt: 'Secretaría General', title: 'SECRETARÍA GENERAL', desc: 'Descripción breve de secretaría general.' },
            { src: 'auditoria-interna.jpg', alt: 'Auditoría Interna', title: 'AUDITORÍA INTERNA', desc: 'Descripción breve de auditoría interna.' },
            { src: 'asesoria-juridica.jpg', alt: 'Asesoría Jurídica', title: 'ASESORÍA JURÍDICA', desc: 'Descripción breve de asesoría jurídica.' },
            { src: 'comision-economica.jpg', alt: 'Comisión Económica', title: 'COMISIÓN ECONÓMICA', desc: 'Descripción breve de comisión económica.' },
          ].map((item, index) => (
            <div
              key={index}
              className="card bg-white rounded-lg shadow-md overflow-hidden text-center p-4 border border-gray-200 w-64 flex-shrink-0"
            >
              <img
                src={item.src} // Reemplaza con rutas reales
                alt={item.alt}
                className="w-16 h-16 object-cover mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <a href="#" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Ver más
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RutasRectorado;
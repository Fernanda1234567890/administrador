import React, { useState, useEffect } from 'react';
import ImageWithPopover from './ImageWithPopover'; // Ajusta la ruta

const RutasVicerrectorado = () => {
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
    <section className="min-h-screen bg-gray-200 flex items-center justify-center py-12 px-4">
      <div className="text-center max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800 dark:text-blue-950">VICERRECTORADO</h1>
        
        {/* Imagen principal en el centro */}
        <div className="mb-8 relative">
          <button
            className="w-80 h-96 rounded-lg shadow-md focus:outline-none hover:opacity-90 transition-opacity relative main-popover-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src="vicerrector-image.jpg" // Reemplaza con la ruta de la imagen del vicerrector
              alt="Vicerrector Principal"
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
                        VICERRECTOR
                      </a>
                    </p>
                    <p className="mb-3 text-sm font-normal dark:text-white">M. Sc. Ing. David Soraide Lozano</p>
                    <p className="mb-4 text-sm">
                      Bienvenido al Vicerrectorado, donde lideramos el desarrollo académico e investigación de la Universidad Autónoma Tomás Frías.
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
                        <a href="mailto:vice@uajims.edu.bo" className="text-blue-600 dark:text-blue-500 hover:underline">
                          vice@uajims.edu.bo
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Imágenes secundarias abajo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <img
              src="consejo-investigacion.jpg" // Reemplaza con la ruta de la imagen
              alt="Consejo de Investigación"
              className="w-64 h-48 object-cover rounded-lg shadow-md mx-auto"
            />
            <p className="mt-2 text-blue-800">CONSEJO DE INVESTIGACIÓN</p>
          </div>
          <div className="text-center">
            <img
              src="comision-academica.jpg" // Reemplaza con la ruta de la imagen
              alt="Comisión Académica"
              className="w-64 h-48 object-cover rounded-lg shadow-md mx-auto"
            />
            <p className="mt-2 text-blue-800">COMISIÓN ACADÉMICA</p>
          </div>
          <div className="text-center">
            <img
              src="consejo-postgrado.jpg" // Reemplaza con la ruta de la imagen
              alt="Consejo de Postgrado"
              className="w-64 h-48 object-cover rounded-lg shadow-md mx-auto"
            />
            <p className="mt-2 text-blue-800">CONSEJO DE POSTGRADO</p>
          </div>
          <div className="text-center">
            <img
              src="direccion-investigacion.jpg" // Reemplaza con la ruta de la imagen
              alt="Dirección de Investigación"
              className="w-64 h-48 object-cover rounded-lg shadow-md mx-auto"
            />
            <p className="mt-2 text-blue-800">DIRECCIÓN DE INVESTIGACIÓN CIENCIA Y TECNOLOGÍA</p>
          </div>
          <div className="text-center">
            <img
              src="direccion-servicios.jpg" // Reemplaza con la ruta de la imagen
              alt="Dirección de Servicios Académicos"
              className="w-64 h-48 object-cover rounded-lg shadow-md mx-auto"
            />
            <p className="mt-2 text-blue-800">DIRECCIÓN DE SERVICIOS ACADÉMICOS</p>
          </div>
          <div className="text-center">
            <img
              src="direccion-postgrado.jpg" // Reemplaza con la ruta de la imagen
              alt="Dirección de Postgrado"
              className="w-64 h-48 object-cover rounded-lg shadow-md mx-auto"
            />
            <p className="mt-2 text-blue-800">DIRECCIÓN DE POSTGRADO</p>
          </div>
          <div className="text-center">
            <img
              src="facultades.jpg" // Reemplaza con la ruta de la imagen
              alt="Facultades"
              className="w-64 h-48 object-cover rounded-lg shadow-md mx-auto"
            />
            <p className="mt-2 text-blue-800">FACULTADES</p>
          </div>
          <div className="text-center">
            <img
              src="ingenieria-sistemas.jpg" // Reemplaza con la ruta de la imagen
              alt="Carrera Ingeniería de Sistemas"
              className="w-64 h-48 object-cover rounded-lg shadow-md mx-auto"
            />
            <p className="mt-2 text-blue-800">CARRERA INGENIERÍA DE SISTEMAS</p>
          </div>
          <div className="text-center">
            <img
              src="odontologia.jpg" // Reemplaza con la ruta de la imagen
              alt="Carrera Odontología"
              className="w-64 h-48 object-cover rounded-lg shadow-md mx-auto"
            />
            <p className="mt-2 text-blue-800">CARRERA ODONTOLOGÍA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RutasVicerrectorado;
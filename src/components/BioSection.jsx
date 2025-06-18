import React from 'react';
import { useNavigate } from 'react-router-dom';
import rectorFoto from '../assets/rector-image.jpg'; // Replace with actual rector image path
import vicerrectorFoto from '../assets/logo-uatf.png'; // Replace with actual vicerrector image path

export default function BioSection() {
  const navigate = useNavigate();

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-950 dark:text-blue-950">NUESTRAS AUTORIDADES</h1>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Rector Section */}
        <div className="text-center relative">
          <button
            onClick={() => navigate('/rutas-rectorado')}
            className="w-64 h-80 rounded-lg shadow-md mb-4 focus:outline-none hover:opacity-90 transition-opacity relative"
          >
            <img
              src={rectorFoto}
              alt="Rector"
              className="w-full h-full object-cover rounded-lg"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-70 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity">
              Ingresa aquí...
            </span>
          </button>
          <h2 className="text-2xl font-bold mb-2">Ph.D. Pedro Guido Lopez Cortés</h2>
          <p className="text-lg font-semibold">Rector - Universidad Autónoma Tomás Frías</p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">conoce las unidades que dependen de esta autoridad</p>
        </div>
        {/* Vicerrector Section */}
        <div className="text-center relative">
          <button
            onClick={() => navigate('/rutas-vicerrectorado')}
            className="w-64 h-80 rounded-lg shadow-md mb-4 focus:outline-none hover:opacity-90 transition-opacity relative"
          >
            <img
              src={vicerrectorFoto}
              alt="Vicerrector"
              className="w-full h-full object-cover rounded-lg"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-70 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity">
              Ingresa aquí...
            </span>
          </button>
          <h2 className="text-2xl font-bold mb-2">M. Sc. Ing. David Soraide Lozano</h2>
          <p className="text-lg font-semibold">Vicerrector - Universidad Autónoma Tomás Frías</p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">vice@uajims.edu.bo</p>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';

import rectorImg from '../assets/rector-image.avif';
import vicerrectorImg from '../assets/vicerrector-image.avif';

const BioSection = () => {
  const navigate = useNavigate();

  const autoridades = [
    {
      image: rectorImg,
      name: 'Ph.D. Pedro Guido Lopez Cortés',
      title: 'Rector - Universidad Autónoma Tomás Frías',
      onClick: () => navigate('/rutas-rectorado'),
    },
    {
      image: vicerrectorImg,
      name: 'M. Sc. Ing. David Soraide Lozano',
      title: 'Vicerrector - Universidad Autónoma Tomás Frías',
      onClick: () => navigate('/rutas-vicerrectorado'),
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2F2F2] w-full">
      {/* Línea roja superior */}
      <div className="bg-[#AB2A2A] h-1 w-full" />

      {/* Encabezado azul */}
      <header className="bg-[#082F47] text-white py-4 text-center w-full">
        <h2 className="italic text-xl sm:text-2xl">NUESTRAS AUTORIDADES</h2>
      </header>

      {/* Espaciador */}
      <div className="my-6" />

      {/* Contenedor de autoridades */}
      <div className="flex flex-col md:flex-row gap-6 px-4">
        {autoridades.map((persona, index) => (
          <div key={index} className="w-full md:w-1/2">
            {/* Imagen con clip y overlay */}
            <div
              onClick={persona.onClick}
              className="relative group cursor-pointer w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-md"
              style={{
                clipPath:
                  index === 0
                    ? 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
                    : 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
              }}
            >
              <img
                src={persona.image}
                alt={persona.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay oscuro con mensaje */}
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-xs font-semibold">
                Ingresa aquí...
              </div>
            </div>

            {/* Texto inferior */}
            <div className="p-4 md:p-6 bg-white text-black">
              <h2 className="text-lg md:text-xl font-bold mb-1">{persona.name}</h2>
              <p className="italic text-sm mb-2">{persona.title}</p>
              {persona.paragraph && (
                <p className="text-sm text-justify whitespace-pre-line leading-relaxed">
                  {persona.paragraph}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Línea roja inferior */}
      <div className="bg-[#AB2A2A] h-1 w-[95%] mx-auto my-6" />
    </div>
  );
};

export default BioSection;

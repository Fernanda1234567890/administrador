import React from 'react';
import { useUser } from '@admin/contexts/UserContext';

const Dashboard = () => {
  const { user } = useUser(); 

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 lg:px-8">
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/fondo1.svg')" }}
      ></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl md:text-3xl font-black text-blue-950">
          Universidad Autónoma Tomás Frías
        </h1>
        {user ? (
          <p className="text-lg md:text-xl text-gray-600 mt-2">
            Bienvenido {user.name}
          </p>
        ) : (
          <p className="text-lg md:text-xl text-gray-600 mt-2">
            Bienvenido
          </p>
        )}
        <div className="mt-6">
          <img
            src="/logo-uatf.png"
            alt="Logo UATF"
            className="mx-auto rounded-lg w-28 md:w-32 lg:w-40 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

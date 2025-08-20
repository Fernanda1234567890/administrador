import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] bg-white">
      {/* min-h calculado para descontar navbar + footer (ejemplo 64px + 64px) */}
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/fondo1.svg')" }}
      ></div>

      <div className="text-center pt-10 z-10 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-5xl font-black text-blue-950">Universidad Autónoma Tomás Frías</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mt-2">DATA CENTER</h2>
        <p className="text-xl text-gray-600 mt-2">Bienvenido Victor</p>
        <div className="mt-6 pointer-events-auto">
          <img
            src="/logo-uatf.png" // Coloca en public
            alt="Data Center Illustration"
            className="mx-auto rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
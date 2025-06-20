import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4">Bienvenido al Dashboard</h1>
        <p className="text-lg">Esta es tu página de dashboard. Aquí puedes agregar contenido como estadísticas, gráficos o configuraciones.</p>
        <button
          onClick={() => alert('Función de logout simulada')}
          className="mt-6 bg-red-600 text-white p-2 rounded hover:bg-red-700 transition duration-200"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
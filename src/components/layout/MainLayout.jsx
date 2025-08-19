import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../layout/SideBar';  // Verifica que este path sea correcto
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import Dashboard from '../../views/Dashboard';

const MainLayout = () => {
  return (
    <div className="flex h-screen flex-col">
      {/* Navbar fijo en top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>

      {/* Contenedor principal con sidebar y contenido */}
      <div className="flex flex-1 pt-[64px]"> {/* pt igual a la altura del navbar */}
        <div className="w-64 fixed top-[64px] left-0 bottom-0 z-40">
          <SideBar />
        </div>
        <main className="flex-1 ml-64 overflow-auto p-4 bg-gray-100">
          {/* Este es el espacio para el contenido que cambia */}
          <Outlet />
        </main>
      </div>

       {/* CONTENIDO PRINCIPAL */}
        {/* <main className="flex-1 ml-64 mt-[64px] bg-white relative">
          <Dashboard />
        </main>
       */}

      {/* Footer al final */}
      <footer className="bg-gray-100 py-4 text-center">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
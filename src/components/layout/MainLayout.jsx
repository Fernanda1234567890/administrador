import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../layout/SideBar"; // Verifica que este path sea correcto
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import Dashboard from "../../views/Dashboard";

const MainLayout = () => {
  const [open, setOpen] = useState(false); // controla sidebar en móviles

  return (
    <div className="flex h-screen flex-col">
      {/* Navbar fijo arriba */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar onToggleSidebar={() => setOpen(!open)} />
      </div>

      {/* Contenedor principal con sidebar y contenido */}
      <div className="flex flex-1 pt-[64px]">
        {/* Sidebar */}
       <div
          className={`fixed top-[64px] left-0 z-40 w-64 h-[calc(100vh-64px)] bg-[#082F47] text-white transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0`}
        >
          <SideBar />
        </div>

        

        {/* Contenido principal */}
        <main className="flex-1 lg:ml-64 overflow-auto p-4 bg-gray-100">
          {/* Outlet para rutas */}
          <Outlet />

          {/* Dashboard inicial */}
          {/* <Dashboard /> */}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;

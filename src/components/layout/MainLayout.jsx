import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../layout/NavBar";
import SideBar from "../layout/SideBar";
import Footer from "../layout/Footer";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Para móvil

  return (
    <div className="flex h-screen flex-col">
      {/* Navbar fijo arriba */}
      <NavBar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Contenedor principal: Sidebar + contenido */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gradient-to-b from-[#082F47] to-red-700 text-white transform transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        >
          <SideBar />
        </div>

        {/* Contenido principal */}
        <main className="flex-1 lg:ml-64 pt-[64px] overflow-auto bg-gray-100">
          <div className="p-4">
            <Outlet />
          </div>
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
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../layout/NavBar";
import SideBar from "../layout/SideBar";
import Footer from "../layout/Footer";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen flex-col">
      <NavBar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gradient-to-b from-[#082F47] to-red-700 text-white transform transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        >
          <SideBar onClose={() => setSidebarOpen(false)} />
        </div>

        <main className="flex-1 p-4 lg:ml-64 pt-16 overflow-auto">
          <div className="p-5">
            <Outlet />
          </div>
        </main>
      </div>

      <footer className="bg-gray-100 py-4 text-center flex justify-center lg:ml-64 lg:mr-0">
        <Footer />
      </footer>

    </div>
  );
};

export default MainLayout;
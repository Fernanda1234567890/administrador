import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "@admin/components/layout/NavBar";
import SideBar from "@admin/components/layout/SideBar";
import Footer from "@admin/components/layout/Footer";

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

        <main className="flex-1 p-2 lg:ml-64 pt-16 overflow-auto min-w-0"> 
          <div className="p-2 lg:p-4"> 
            <div className="w-full max-w-full overflow-hidden"> 
              <Outlet />
            </div>
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
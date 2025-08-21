import React, { useState, useRef, useEffect } from "react";
import Logout from "../admin/Logout"; // Ajusta la ruta si es necesario
import UserName from "../admin/UserName"; // Ajusta la ruta si es necesario
import { Menu, X } from "lucide-react"; // Íconos hamburguesa y cerrar

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
      <nav
      className="fixed top-0 left-0 z-50 w-full lg:left-64 lg:w-[calc(100%-16rem)] border-b border-red-700"
        style={{ background: "linear-gradient(to right, #082F47 0%, #082F47 60%, #B91C1C 100%)" }}
      >
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Lado izquierdo */}
        <div className="flex items-center space-x-4">
          {/* Botón hamburguesa SOLO en móviles */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          {/* <a
            href="https://uatf.edu.bo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-red-900 group"
          >
            <img
              src="/logo-uatf.png"
              alt="Logo UATF"
              className="w-10 h-10 rounded-full"
            /> */}
            {/* <span className="ml-2 text-2xl font-extrabold tracking-wide text-white">
              pagina principal
            </span> */}
          {/* </a> */}
        </div>

        {/* Lado derecho */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <a
            href="https://uatf.edu.bo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-red-900 group"
          >
            <img
              src="/logo-uatf.png"
              alt="Logo UATF"
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-2 text-l font-bold tracking-wide text-white">
              pagina principal
            </span>
          </a>

          {/* Buscador - visible SOLO en pantallas md o más grandes */}
        <div className="hidden md:block relative w-64">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full py-2 pl-10 pr-4 rounded-full bg-white/20 text-white placeholder-white/70 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-red-700 transition duration-200"
          />
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>


          {/* Menú usuario */}
          <div className="flex items-center ms-3 relative" ref={dropdownRef}>
            <button
              type="button"
              className="flex text-sm bg-blue-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              onClick={toggleDropdown}
            >
              <span className="sr-only">Abrir menú de usuario</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://miro.medium.com/v2/resize:fit:1286/0*hINaDB9904rHMVNL"
                alt="user photo"
              />
            </button>
            {isDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-60 bg-red-900 rounded-xl shadow-lg z-50 text-white text-sm"
                role="menu"
              >
                <div className="px-4 py-2 border-b border-blue-950">
                  <p className="font-semibold">Victor</p>
                  <p className="text-xs truncate">neil.sims@flowbite.com</p>
                </div>
                <ul className="py-2 space-y-1">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-blue-950 rounded transition-colors"
                      role="menuitem"
                    >
                      Mis Actividades
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-blue-950 rounded transition-colors"
                      role="menuitem"
                    >
                      Ajustes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-blue-950 rounded transition-colors"
                      role="menuitem"
                    >
                      Cambiar contraseña
                    </a>
                  </li>
                  <li>
                    <Logout />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Menú móvil (cuando se abre con el botón hamburguesa) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 py-2 bg-[#082F47] border-t border-gray-700 text-white">
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 mb-2 text-white bg-red-800 bg-opacity-60 rounded-full focus:outline-none focus:ring-2 focus:ring-red-900 placeholder-gray-400"
            placeholder="Buscar..."
          />
          <a
            href="#"
            className="block py-2 px-3 rounded hover:bg-red-800"
          >
            Mis Actividades
          </a>
          <a
            href="#"
            className="block py-2 px-3 rounded hover:bg-red-800"
          >
            Ajustes
          </a>
          <a
            href="#"
            className="block py-2 px-3 rounded hover:bg-red-800"
          >
            Cambiar contraseña
          </a>
          <Logout />
        </div>
      )}
    </nav>
  );
};

export default NavBar;

import React, { useState, useRef, useEffect } from "react";
import Logout from "../admin/Logout";
import { useUser } from "../../contexts/UserContext";
import { UserAvatar } from "./UserAvatar";
import { Link } from "react-router-dom";


const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { user } = useUser(); // 👈 Datos globales del usuario

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

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen); // Alterna el campo de búsqueda en pantallas pequeñas
  };

return (
    <nav
      className="fixed top-0 left-0 z-50 w-full lg:left-64 lg:w-[calc(100%-16rem)] border-b border-red-700"
      style={{ background: 'linear-gradient(to right, #082F47 0%, #082F47 60%, #B91C1C 100%)' }}
    >
      <div className="px-4 py-3 flex items-center justify-end"> {/* Cambiado a justify-end */}
        {/* Contenido alineado a la derecha */}
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
            <span className="ml-2 text-lg font-bold tracking-wide text-white">
              Página principal
            </span>
          </a>

          {/* Buscador */}
          <div className="relative flex items-center">
            {/* Ícono de lupa (visible en todas las pantallas, pero clickable en pantallas pequeñas) */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-red-700 transition duration-200"
              onClick={toggleSearch}
            >
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
            </button>

            {/* Campo de búsqueda: visible en pantallas md o más grandes, o si isSearchOpen es true en pantallas pequeñas */}
            <div
              className={`${
                isSearchOpen ? 'block' : 'hidden'
              } md:block absolute md:static top-12 right-4 w-64 md:w-64 transition-all duration-200`}
            >
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
          </div>

           {/* Menú usuario */}
          <div className="flex items-center relative" ref={dropdownRef}>
            <button
              type="button"
              className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              onClick={toggleDropdown}
            >
              <span className="sr-only">Abrir menú de usuario</span>
              {/* Avatar del usuario */}
              <UserAvatar user={user} size={32} />
            </button>

            {/* Aquí es donde va tu bloque */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-red-900 rounded-xl shadow-lg z-50 text-white text-sm">
                <div className="px-4 py-2 border-b border-blue-950">
                  <p className="font-semibold">{user?.name || "Usuario"}</p>
                  <p className="text-xs truncate">{user?.email || "correo@ejemplo.com"}</p>
                </div>
                <ul className="py-2 space-y-1">
                  <li>
                    <Link to="/activities" className="block px-4 py-2 hover:bg-blue-950 rounded transition-colors">
                      Mis Actividades
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings" className="block px-4 py-2 hover:bg-blue-950 rounded transition-colors">
                      Ajustes
                    </Link>
                  </li>
                  <li>
                    <Link to="/change-password" className="block px-4 py-2 hover:bg-blue-950 rounded transition-colors">
                      Cambiar contraseña
                    </Link>
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
    </nav>
  );
};

export default NavBar;
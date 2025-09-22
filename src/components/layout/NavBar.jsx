import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import Logout from "../admin/Logout";
import { UserAvatar } from "./UserAvatar";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { user } = useUser();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full lg:left-64 lg:w-[calc(100%-16rem)] border-b border-red-700"
      style={{ background: 'linear-gradient(to right, #082F47 0%, #082F47 60%, #B91C1C 100%)' }}
    >
      <div className="px-5 py-2 flex items-center justify-between lg:justify-end">
        {/* Logo principal */}
        <a
          href="https://uatf.edu.bo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-1 rounded-lg hover:bg-white/10 transition"
        >
          <img src="/logo-uatf.png" alt="Logo UATF" className="w-10 h-10 rounded-full" />
          <span className="ml-2 text-lg font-bold text-white hidden sm:inline">Página principal</span>
        </a>

        {/* Buscador */}
        <div className="relative flex items-center ml-auto">
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30"
            onClick={toggleSearch}
          >
            <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <div
            className={`${isSearchOpen ? 'block' : 'hidden'} md:block absolute md:static top-12 right-0 w-64 md:w-64 transition-all duration-200`}
          >
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full py-1 pl-10 pr-4 rounded-full bg-white/20 text-white placeholder-white/70 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-red-700 transition"
            />
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Menú usuario */}
        <div className="flex items-center relative ml-4" ref={dropdownRef}>
          <button
            type="button"
            className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Abrir menú de usuario</span>
            <UserAvatar user={user} size={32} />
          </button>

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
    </nav>
  );
};

export default NavBar;

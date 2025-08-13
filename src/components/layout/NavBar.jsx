import React, { useState, useRef, useEffect } from 'react';
import Logout from '../admin/Logout'; // Asegúrate de que la ruta sea correcta
import UserName from '../admin/UserName'; // Asegúrate de que la ruta sea correcta

const NavBar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleUserMenu = (e) => {
    e.preventDefault();
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className="fixed top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700"
      style={{ backgroundColor: '#082F47' }}
    >
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            {/* Logo o contenido adicional puede ir aquí si lo deseas */}
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full py-2 pl-10 pr-12 text-white bg-red-800 bg-opacity-60 rounded-full focus:outline-none focus:ring-2 focus:ring-red-900 placeholder-gray-400"
                    placeholder="Search..."
                  />
                  <div className="absolute inset-y-0 left-3 flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-100"
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
            </div>
            <div className="flex items-center ms-3 relative" ref={dropdownRef}>
              <button
                type="button"
                className="flex text-sm bg-blue-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
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
                      <Logout /> {/* Logout ahora muestra "Cerrar Sesión" con el mismo estilo */}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
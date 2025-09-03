import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Ícono hamburguesa y cerrar
import { FaChevronRight } from "react-icons/fa"; // Ícono para submenús
import FRONTIS from "../../assets/FRONTIS.png";

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(null); // Estado para manejar submenús
  const [isOpen, setIsOpen] = useState(false); // Estado para el sidebar en pantallas pequeñas
  const [isCompact, setIsCompact] = useState(false); // Estado para el modo comprimido

  // Función para abrir/cerrar submenús
  const toggleMenu = (menuKey) => {
    setOpenMenu(openMenu === menuKey ? null : menuKey);
  };

  // Función para togglear el sidebar en pantallas pequeñas
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Función para togglear entre modo completo y comprimido
  const toggleCompact = () => {
    setIsCompact(!isCompact);
    if (!isCompact) setIsOpen(false); // Cierra el sidebar al activar modo comprimido
  };

  return (
    <>
      {/* Botón de hamburguesa (visible en pantallas <lg) */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-[#082F47] text-white hover:bg-red-700 transition-colors duration-200 lg:hidden"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Completo */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-gradient-to-b from-[#082F47] via-[#082F47]/100 to-red-700 text-white p-4 overflow-y-auto transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} ${isCompact ? "hidden" : ""} lg:translate-x-0 lg:block`}
      >
        {/* Indicadores de estado (puntos rojo, amarillo, verde) */}
        <div className="flex justify-start mb-2">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></span>
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        </div>

        {/* Botón de cerrar en móvil */}
        <button
          className="lg:hidden text-white mb-4 focus:outline-none"
          onClick={toggleSidebar}
        >
          <X size={24} />
        </button>

        {/* Sección del Usuario */}
        <div className="flex items-center mb-6 p-2 bg-gray-800 rounded-lg">
          <img
            className="w-12 h-12 rounded-full mr-3"
            src="https://miro.medium.com/v2/resize:fit:1286/0*hINaDB9904rHMVNL"
            alt="User profile"
          />
          <div>
            <Link to="/my-account" className="text-sm text-gray-300 hover:text-white">
              Mi cuenta
            </Link>
          </div>
        </div>

        {/* Enlaces de navegación con secciones */}
        <ul className="space-y-4 font-medium">
          {/* Sección Unidades */}
          <div>
            <h3 className="text-xs font-semibold text-gray-300 uppercase mb-2">Unidades</h3>
            <li>
              <button
                onClick={() => toggleMenu("unidades")}
                className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors duration-200
                  ${openMenu === "unidades" ? "bg-red-900 text-white" : "text-white hover:bg-gray-700"}`}
              >
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm4.996 2a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM11 8a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm-4.004 3a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM11 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm-4.004 3a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM11 14a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Z" clipRule="evenodd"/>
                </svg>
                <span className="flex-1 text-left ml-3">Unidades</span>
                <FaChevronRight
                  className={`transition-transform duration-200 ${openMenu === "unidades" ? "rotate-90" : ""}`}
                />
              </button>
              {openMenu === "unidades" && (
                <ul className="pl-6 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/unidades/registrar"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Registrar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/unidades/ver"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Ver Lista
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleMenu("tipo-unidades")}
                className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors duration-200
                  ${openMenu === "tipo-unidades" ? "bg-red-900 text-white" : "text-white hover:bg-gray-700"}`}
              >
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15v3c0 .5523.44772 1 1 1h10M3 15v-4m0 4h9m-9-4V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v3M3 11h11m-2-.2079V19m3-4h1.9909M21 15c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2Z"/>
                </svg>
                <span className="flex-1 text-left ml-3">Tipo de Unidades</span>
                <FaChevronRight
                  className={`transition-transform duration-200 ${openMenu === "tipo-unidades" ? "rotate-90" : ""}`}
                />
              </button>
              {openMenu === "tipo-unidades" && (
                <ul className="pl-6 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/tipo-unidades/registrar"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Registrar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tipo-unidades/ver"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Ver Lista
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </div>

          {/* Sección Organización */}
          <div>
            <h3 className="text-xs font-semibold text-gray-300 uppercase mb-2">Organización</h3>
            <li>
              <button
                onClick={() => toggleMenu("organizacion")}
                className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors duration-200
                  ${openMenu === "organizacion" ? "bg-red-900 text-white" : "text-white hover:bg-gray-700"}`}
              >
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clipRule="evenodd"/>
                </svg>
                <span className="flex-1 text-left ml-3">Organización</span>
                <FaChevronRight
                  className={`transition-transform duration-200 ${openMenu === "organizacion" ? "rotate-90" : ""}`}
                />
              </button>
              {openMenu === "organizacion" && (
                <ul className="pl-6 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/organizacion/registrar"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Registrar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/organizacion/ver"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Ver Lista
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleMenu("cargo-regular")}
                className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors duration-200
                  ${openMenu === "cargo-regular" ? "bg-red-900 text-white" : "text-white hover:bg-gray-700"}`}
              >
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z" clipRule="evenodd"/>
                </svg>
                <span className="flex-1 text-left ml-3">Cargos Regulares</span>
                <FaChevronRight
                  className={`transition-transform duration-200 ${openMenu === "cargo-regular" ? "rotate-90" : ""}`}
                />
              </button>
              {openMenu === "cargo-regular" && (
                <ul className="pl-6 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/cargo-regular/registrar"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Registrar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cargo-regular/ver"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Ver Lista
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleMenu("cargos-intermedios")}
                className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors duration-200
                  ${openMenu === "cargos-intermedios" ? "bg-red-900 text-white" : "text-white hover:bg-gray-700"}`}
              >
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                <span className="flex-1 text-left ml-3">Cargos Intermedios</span>
                <FaChevronRight
                  className={`transition-transform duration-200 ${openMenu === "cargos-intermedios" ? "rotate-90" : ""}`}
                />
              </button>
              {openMenu === "cargos-intermedios" && (
                <ul className="pl-6 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/cargos-intermedios/registrar"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Registrar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cargos-intermedios/ver"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Ver Lista
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </div>

          {/* Sección Personas */}
          <div>
            <h3 className="text-xs font-semibold text-gray-300 uppercase mb-2">Personas</h3>
            <li>
              <button
                onClick={() => toggleMenu("persona")}
                className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors duration-200
                  ${openMenu === "persona" ? "bg-red-900 text-white" : "text-white hover:bg-gray-700"}`}
              >
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clipRule="evenodd"/>
                </svg>
                <span className="flex-1 text-left ml-3">Personas</span>
                <FaChevronRight
                  className={`transition-transform duration-200 ${openMenu === "persona" ? "rotate-90" : ""}`}
                />
              </button>
              {openMenu === "persona" && (
                <ul className="pl-6 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/persona/registrar"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Registrar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/persona/ver"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Ver Lista
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleMenu("estudiantes")}
                className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors duration-200
                  ${openMenu === "estudiantes" ? "bg-red-900 text-white" : "text-white hover:bg-gray-700"}`}
              >
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"/>
                </svg>
                <span className="flex-1 text-left ml-3">Estudiantes</span>
                <FaChevronRight
                  className={`transition-transform duration-200 ${openMenu === "estudiantes" ? "rotate-90" : ""}`}
                />
              </button>
              {openMenu === "estudiantes" && (
                <ul className="pl-6 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/estudiantes/registrar"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Registrar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/estudiantes/ver"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Ver Lista
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleMenu("docentes")}
                className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors duration-200
                  ${openMenu === "docentes" ? "bg-red-900 text-white" : "text-white hover:bg-gray-700"}`}
              >
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z" clipRule="evenodd"/>
                </svg>
                <span className="flex-1 text-left ml-3">Docentes</span>
                <FaChevronRight
                  className={`transition-transform duration-200 ${openMenu === "docentes" ? "rotate-90" : ""}`}
                />
              </button>
              {openMenu === "docentes" && (
                <ul className="pl-6 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/docentes/registrar"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Registrar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/docentes/ver"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Ver Lista
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleMenu("administrativos")}
                className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors duration-200
                  ${openMenu === "administrativos" ? "bg-red-900 text-white" : "text-white hover:bg-gray-700"}`}
              >
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd"/>
                </svg>
                <span className="flex-1 text-left ml-3">Administrativos</span>
                <FaChevronRight
                  className={`transition-transform duration-200 ${openMenu === "administrativos" ? "rotate-90" : ""}`}
                />
              </button>
              {openMenu === "administrativos" && (
                <ul className="pl-6 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/administrativos/registrar"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Registrar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/administrativos/ver"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Ver Listas
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </div>

          {/* Sección Sesión */}
          <div>
            <h3 className="text-xs font-semibold text-gray-300 uppercase mb-2">Sesión</h3>
            <li>
              <Link
                to="/cerrar-sesion"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"/>
                </svg>
                <span className="flex-1 text-left ml-3">Cerrar Sesión</span>
              </Link>
            </li>
          </div>
        </ul>

        {/* Imagen */}
        <div className="mt-auto text-center pt-4 border-t border-gray-100">
          <img
            src={FRONTIS}
            alt="Logo"
            className="w-20 h-20 mx-auto mb-2 sm:w-30 sm:h-30"
          />
          <p className="text-white text-sm font-semibold">
            UNIVERSIDAD AUTÓNOMA TOMÁS FRÍAS
          </p>
        </div>
      </aside>

      {/* Overlay para cerrar el sidebar en pantallas pequeñas */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Botón para togglear modo comprimido (visible en pantallas sm o más) */}
      <button
        className="fixed top-4 right-4 z-50 p-2 rounded-md bg-[#082F47] text-white hover:bg-red-700 transition-colors duration-200 hidden sm:block"
        onClick={toggleCompact}
        aria-label="Toggle compact menu"
      >
        {isCompact ? <Menu size={24} /> : <span>Menu</span>}
      </button>
    </>
  );
};

export default SideBar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Ícono hamburguesa y cerrar
import { FaChevronRight } from "react-icons/fa"; // Ícono para submenús
import FRONTIS from "../../assets/FRONTIS.png";

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(null); // Estado para manejar submenús
  const [open, setOpen] = useState(false); // Estado para el sidebar completo (hamburguesa)

  // Función para abrir/cerrar submenús
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <>
      {/* Botón hamburguesa en móvil */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-[#082F47] text-white hover:bg-red-700 transition-colors duration-200 sm:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 h-screen transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        style={{ width: open ? "60%" : "0", minWidth: open ? "250px" : "0" }}
      >
        <div className="h-full w-64 sm:w-64 bg-gradient-to-b from-[#082F47] to-red-700 text-white p-4 overflow-y-auto">
          {/* Botón de cerrar en móvil */}
          <button
            className="sm:hidden text-white mb-4 focus:outline-none"
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </button>

          {/* Usuario */}
          <div className="flex items-center mb-4">
            <img
              className="w-12 h-12 rounded-full mr-3"
              src="https://miro.medium.com/v2/resize:fit:1286/0*hINaDB9904rHMVNL"
              alt="User profile"
            />
            <span className="text-white font-bold">Usuario</span>
          </div>

          {/* Enlaces de navegación */}
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/register"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="ml-3">Nuevo Registro</span>
              </Link>
            </li>
            <li>
              <Link
                to="/usuarios"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="ml-3">Personas Registradas</span>
              </Link>
            </li>
            <li>
              <Link
                to="/facultades"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="ml-3">Registrar Facultad</span>
              </Link>
            </li>
            <li>
              <Link
                to="/unidades"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="ml-3">Unidades</span>
              </Link>
            </li>

            {/* Organización */}
            <li>
              <button
                onClick={() => toggleMenu("organizacion")}
                className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors duration-200
                  ${openMenu === "organizacion" 
                    ? "bg-red-900 text-white"  // marcado en rojo cuando está abierto
                    : "text-white hover:bg-gray-700" // estado normal
                  }`}
              >
                <span className="ml-3">Organización</span>
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
                    >
                      Registrar nuevo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/organizacion/ver"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Ver registrados
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Cargos Regulares */}
            <li>
              <button
                onClick={() => toggleMenu("cargo-regular")}
                className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors duration-200
                  ${openMenu === "cargo-regular"
                    ? "bg-red-900 text-white"  // marcado en rojo cuando está abierto
                    : "text-white hover:bg-gray-700" // estado normal
                  }`}
              >
                <span className="ml-3">Cargos Regulares</span>
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
                    >
                      Registrar nuevo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cargo-regular/ver"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Ver registrados
                    </Link>
                  </li>
                </ul>
              )}
            </li>


            {/* Tipo Unidades */}
            <li>
              <button
                onClick={() => toggleMenu("tipo-unidades")}
                className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors duration-200
                  ${openMenu === "tipo-unidades"
                    ? "bg-red-900 text-white"  // marcado en rojo cuando está abierto
                    : "text-white hover:bg-gray-700" // estado normal
                  }`}
              >
                <span className="ml-3">Tipo de Unidades</span>
                <FaChevronRight
                  className={`transition-transform duration-200 ${
                    openMenu === "tipo-unidades" ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openMenu === "tipo-unidades" && (
                <ul className="pl-6 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/tipo-unidades/registrar"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Registrar nuevo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tipo-unidades/ver"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Ver registrados
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Personas */}
            <li>
              <button
                onClick={() => toggleMenu("persona")}
                className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors duration-200
                  ${openMenu === "persona"
                    ? "bg-red-900 text-white"  // marcado en rojo cuando está abierto
                    : "text-white hover:bg-gray-700" // estado normal
                  }`}
              >
                <span className="ml-3">Personas</span>
                <FaChevronRight
                  className={`transition-transform duration-200 ${
                    openMenu === "persona" ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openMenu === "persona" && (
                <ul className="pl-6 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/persona/registrar"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Registrar nuevo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/persona/ver"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Ver registrados
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Estudiantes */}
            <li>
              <button
                onClick={() => toggleMenu("estudiantes")}
                className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors duration-200
                  ${openMenu === "estudiantes"
                    ? "bg-red-900 text-white"  // marcado en rojo cuando está abierto
                    : "text-white hover:bg-gray-700" // estado normal
                  }`}
              >
                <span className="ml-3">Estudiantes</span>
                <FaChevronRight
                  className={`transition-transform duration-200 ${
                    openMenu === "estudiantes" ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openMenu === "estudiantes" && (
                <ul className="pl-6 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/estudiantes/registrar"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Registrar nuevo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/estudiantes/ver"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Ver registrados
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Docentes */}
            <li>
              <button
                onClick={() => toggleMenu("docentes")}
                className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors duration-200
                  ${openMenu === "docentes"
                    ? "bg-red-900 text-white"  // marcado en rojo cuando está abierto
                    : "text-white hover:bg-gray-700" // estado normal
                  }`}
              >
                <span className="ml-3">Docentes</span>
                <FaChevronRight
                  className={`transition-transform duration-200 ${
                    openMenu === "docentes" ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openMenu === "docentes" && (
                <ul className="pl-6 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/docentes/registrar"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Registrar nuevo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/docentes/ver"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Ver registrados
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Administrativos */}
            <li>
              <button
                onClick={() => toggleMenu("administrativos")}
                   className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors duration-200
                  ${openMenu === "administrativos"
                    ? "bg-red-950 text-white"  // marcado en rojo cuando está abierto
                    : "text-white hover:bg-gray-700" // estado normal
                  }`}
              >
                <span className="ml-3">Administrativos</span>
                <FaChevronRight
                  className={`transition-transform duration-200 ${
                    openMenu === "administrativos" ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openMenu === "administrativos" && (
                <ul className="pl-6 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/administrativos/registrar"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Registrar nuevo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/administrativos/ver"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Ver registrados
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Unidades */}
            <li>
              <button
                onClick={() => toggleMenu("unidades")}
                className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors duration-200
                  ${openMenu === "unidades"
                    ? "bg-red-950 text-white"  // marcado en rojo cuando está abierto
                    : "text-white hover:bg-gray-700" // estado normal
                  }`}
              >
                <span className="ml-3">Unidades</span>
                <FaChevronRight
                  className={`transition-transform duration-200 ${
                    openMenu === "unidades" ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openMenu === "unidades" && (
                <ul className="pl-6 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/unidades/registrar"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Registrar nuevo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/unidades/ver"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Ver registrados
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Cargos Intermedios */}
            <li>
              <button
                onClick={() => toggleMenu("cargos-intermedios")}
                 className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors duration-200
                  ${openMenu === "cargos-intermedios"
                    ? "bg-red-950 text-white"  // marcado en rojo cuando está abierto
                    : "text-white hover:bg-gray-700" // estado normal
                  }`}
              >
                <span className="ml-3">Cargos Intermedios</span>
                <FaChevronRight
                  className={`transition-transform duration-200 ${
                    openMenu === "cargos-intermedios" ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openMenu === "cargos-intermedios" && (
                <ul className="pl-6 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/cargos-intermedios/registrar"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Registrar nuevo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cargos-intermedios/ver"
                      className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Ver registrados
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Logout */}
            <li>
              <Link
                to="/cerrar-sesion"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setOpen(false)} // Cierra el sidebar al hacer logout en móvil
              >
                <span className="ml-3">Cerrar Sesión</span>
              </Link>
            </li>
          </ul>

          {/* Imagen */}
          <div className="text-center mt-4">
            <img
              src={FRONTIS}
              alt="Logo"
              className="w-20 h-20 mx-auto mb-2 sm:w-40 sm:h-40"
            />
            <p className="text-white text-sm font-semibold">
              UNIVERSIDAD AUTONOMA TOMAS FRIAS
            </p>
          </div>
        </div>
      </aside>

      {/* Overlay para cerrar el sidebar en móvil */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SideBar;
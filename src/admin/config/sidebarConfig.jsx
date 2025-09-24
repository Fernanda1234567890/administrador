// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaChevronRight, FaBars, FaTimes } from "react-icons/fa";
// import FRONTIS from "../assets/FRONTIS.png";
// import { useUser } from "../contexts/UserContext";

// // Íconos
// import { ReactComponent as UnidadIcon } from "../assets/icons/unidad.svg";
// import { ReactComponent as TipoUnidadIcon } from "../assets/icons/tipo-unidad.svg";
// import { ReactComponent as OrganizacionIcon } from "../assets/icons/organizacion.svg";
// import { ReactComponent as CargoRegularIcon } from "../assets/icons/cargo-regular.svg";
// import { ReactComponent as CargoIntermedioIcon } from "../assets/icons/cargo-intermedio.svg";
// import { ReactComponent as PersonaIcon } from "../assets/icons/persona.svg";
// import { ReactComponent as EstudianteIcon } from "../assets/icons/estudiante.svg";
// import { ReactComponent as DocenteIcon } from "../assets/icons/docente.svg";
// import { ReactComponent as AdministrativoIcon } from "../assets/icons/administrativo.svg";
// import { ReactComponent as FacultadIcon } from "../assets/icons/facultad.svg";
// import { ReactComponent as CarreraIcon } from "../assets/icons/carrera.svg";
// import { ReactComponent as UsuarioIcon } from "../assets/icons/usuario.svg";
// import { ReactComponent as LogoutIcon } from "../assets/icons/logout.svg";

// // Configuración del sidebar (igual que antes)
// const sidebarConfig = [
//   {
//     section: "Unidades",
//     icon: UnidadIcon,
//     permissions: ["unidades.*"],
//     items: [
//       { label: "Registrar Unidad", path: "/unidades/registrar", permissions: ["unidades.registrar"], icon: UnidadIcon },
//       { label: "Ver Unidades", path: "/unidades/ver", permissions: ["unidades.ver"], icon: UnidadIcon },
//       { label: "Tipos de Unidad", path: "/tipos-unidad/ver", permissions: ["tipos-unidad.*"], icon: TipoUnidadIcon },
//     ],
//   },
//   {
//     section: "Organizaciones",
//     icon: OrganizacionIcon,
//     permissions: ["organizaciones.*"],
//     items: [
//       { label: "Registrar Organización", path: "/organizaciones/registrar", permissions: ["organizaciones.registrar"], icon: OrganizacionIcon },
//       { label: "Ver Organizaciones", path: "/organizaciones/ver", permissions: ["organizaciones.ver"], icon: OrganizacionIcon },
//     ],
//   },
//   {
//     section: "Cargos",
//     icon: CargoRegularIcon,
//     permissions: ["cargos.*"],
//     items: [
//       { label: "Cargos Regulares", path: "/cargos-regulares/ver", permissions: ["cargos.regulares"], icon: CargoRegularIcon },
//       { label: "Cargos Intermedios", path: "/cargos-intermedios/ver", permissions: ["cargos.intermedios"], icon: CargoIntermedioIcon },
//     ],
//   },
//   {
//     section: "Personas",
//     icon: PersonaIcon,
//     permissions: ["personas.*"],
//     items: [
//       { label: "Registrar Persona", path: "/persona/registrar", permissions: ["personas.registrar"], icon: PersonaIcon },
//       { label: "Ver Personas", path: "/persona/ver", permissions: ["personas.ver"], icon: PersonaIcon },
//       {
//         label: "Tipos de Persona",
//         permissions: ["estudiantes.*", "docentes.*", "administrativos.*"],
//         icon: PersonaIcon,
//         subItems: [
//           { label: "Estudiantes", path: "/estudiantes/ver", permissions: ["estudiantes.*"], icon: EstudianteIcon },
//           { label: "Docentes", path: "/docentes/ver", permissions: ["docentes.*"], icon: DocenteIcon },
//           { label: "Administrativos", path: "/administrativos/ver", permissions: ["administrativos.*"], icon: AdministrativoIcon },
//         ],
//       },
//     ],
//   },
//   {
//     section: "Facultades y Carreras",
//     icon: FacultadIcon,
//     permissions: ["facultades.*", "carreras.*"],
//     items: [
//       { label: "Registrar Facultad", path: "/facultad/registrar", permissions: ["facultad.registrar"], icon: FacultadIcon },
//       { label: "Ver Facultades", path: "/facultad/ver", permissions: ["facultad.ver"], icon: FacultadIcon },
//       { label: "Registrar Carrera", path: "/carrera/registrar", permissions: ["carrera.registrar"], icon: CarreraIcon },
//       { label: "Ver Carreras", path: "/carrera/ver", permissions: ["carrera.ver"], icon: CarreraIcon },
//     ],
//   },
//   {
//     section: "Usuarios",
//     icon: UsuarioIcon,
//     permissions: ["usuarios.*"],
//     items: [
//       { label: "Registrar Usuario", path: "/usuarios/registrar", permissions: ["usuarios.registrar"], icon: UsuarioIcon },
//       { label: "Ver Usuarios", path: "/usuarios/ver", permissions: ["usuarios.ver"], icon: UsuarioIcon },
//     ],
//   },
//   {
//     section: "Cerrar Sesión",
//     icon: LogoutIcon,
//     permissions: ["*"],
//     items: [{ label: "Cerrar Sesión", path: "/cerrar-sesion", permissions: ["*"], icon: LogoutIcon }],
//   },
// ];

// const filterByPermissions = (userPermissions, items) =>
//   items.filter((item) => item.permissions?.some((perm) => userPermissions.includes(perm) || userPermissions.includes("*")));

// const SideBar = () => {
//   const [openMenu, setOpenMenu] = useState(null);
//   const [openSubMenu, setOpenSubMenu] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(false); // Para móviles
//   const { user } = useUser();
//   const userPermissions = user?.permissions || [];

//   const toggleMenu = (section) => setOpenMenu(openMenu === section ? null : section);
//   const toggleSubMenu = (label) => setOpenSubMenu(openSubMenu === label ? null : label);
//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   return (
//     <>
//       {/* Botón hamburguesa */}
//       <button
//         className="fixed top-4 left-4 z-50 text-white text-2xl lg:hidden"
//         onClick={toggleSidebar}
//       >
//         {sidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Overlay */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed top-0 left-0 z-50 h-screen w-64 bg-gradient-to-b from-[#082F47] via-[#082F47]/100 to-red-700 text-white p-4 overflow-y-auto transition-transform duration-300 ease-in-out
//         ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
//       >
//         {/* Usuario */}
//         <div className="flex items-center mb-4 p-2 bg-gray-800 rounded-lg">
//           <img
//             className="w-12 h-12 rounded-full mr-5"
//             src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "")}`}
//             alt="User profile"
//           />
//           <div>
//             <Link to="/" className="text-sm text-gray-300 hover:text-white">
//               {user?.name || ""}
//             </Link>
//           </div>
//         </div>

//         {/* Navegación */}
//         <ul className="space-y-4 font-medium">
//           {sidebarConfig.map((section) => {
//             const allowedItems = filterByPermissions(userPermissions, section.items);
//             if (!allowedItems.length) return null;

//             return (
//               <li key={section.section}>
//                 <button
//                   onClick={() => toggleMenu(section.section)}
//                   className="flex items-center justify-between w-full p-2 rounded-lg text-white transition-colors duration-200 hover:bg-gray-700"
//                 >
//                   {section.icon && <section.icon className="w-4 h-4 mr-2" />}
//                   <span className="flex-1 text-left">{section.section}</span>
//                   <FaChevronRight
//                     className={`transition-transform duration-200 ${
//                       openMenu === section.section ? "rotate-90" : ""
//                     }`}
//                   />
//                 </button>

//                 {openMenu === section.section && (
//                   <ul className="pl-6 mt-2 space-y-1">
//                     {allowedItems.map((item) => {
//                       if (item.subItems) {
//                         const allowedSubItems = filterByPermissions(userPermissions, item.subItems);
//                         if (!allowedSubItems.length) return null;

//                         return (
//                           <li key={item.label}>
//                             <button
//                               onClick={() => toggleSubMenu(item.label)}
//                               className="flex items-center justify-between w-full p-2 rounded-lg text-white transition-colors duration-200 hover:bg-gray-700"
//                             >
//                               {item.icon && <item.icon className="w-4 h-4 mr-2" />}
//                               <span className="flex-1 text-left">{item.label}</span>
//                               <FaChevronRight
//                                 className={`transition-transform duration-200 ${
//                                   openSubMenu === item.label ? "rotate-90" : ""
//                                 }`}
//                               />
//                             </button>
//                             {openSubMenu === item.label && (
//                               <ul className="pl-6 mt-1 space-y-1">
//                                 {allowedSubItems.map((sub) => (
//                                   <li key={sub.label}>
//                                     <Link
//                                       to={sub.path}
//                                       className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
//                                       onClick={() => setSidebarOpen(false)} // Cierra sidebar al hacer click
//                                     >
//                                       {sub.icon && <sub.icon className="w-4 h-4 inline mr-2" />}
//                                       {sub.label}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             )}
//                           </li>
//                         );
//                       }

//                       return (
//                         <li key={item.label}>
//                           <Link
//                             to={item.path}
//                             className="block p-2 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
//                             onClick={() => setSidebarOpen(false)}
//                           >
//                             {item.icon && <item.icon className="w-4 h-4 inline mr-2" />}
//                             {item.label}
//                           </Link>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 )}
//               </li>
//             );
//           })}
//         </ul>

//         {/* Logo */}
//         <div className="mt-auto text-center pt-4 border-t border-gray-100">
//           <img src={FRONTIS} alt="Logo" className="w-20 h-20 mx-auto mb-2 sm:w-30 sm:h-30" />
//           <p className="text-white text-sm font-semibold">UNIVERSIDAD AUTÓNOMA TOMÁS FRÍAS</p>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default sidebarConfig ;

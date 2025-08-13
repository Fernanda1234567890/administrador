// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     if (isDropdownOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isDropdownOpen]);

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="fixed top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700" style={{ backgroundColor: '#082F47' }}>
//         <div className="px-3 py-3 lg:px-5 lg:pl-3">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center justify-start rtl:justify-end">
//               {/* Logo or other navbar content can be added here if needed */}
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center space-x-2">
//                 <div className="mb-4">
//                   <div className="relative">
//                     <input
//                       type="text"
//                       className="w-full py-2 pl-10 pr-12 text-white bg-red-800 bg-opacity-60 rounded-full focus:outline-none focus:ring-2 focus:ring-red-900 placeholder-gray-400"
//                       placeholder="Search..."
//                     />
//                     <div className="absolute inset-y-0 left-3 flex items-center">
//                       <svg
//                         className="w-5 h-5 text-gray-100"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center ms-3 relative" ref={dropdownRef}>
//                 <button
//                   type="button"
//                   className="flex text-sm bg-blue-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 >
//                   <span className="sr-only">Open user menu</span>
//                   <img
//                     className="w-8 h-8 rounded-full"
//                     src="https://miro.medium.com/v2/resize:fit:1286/0*hINaDB9904rHMVNL"
//                     alt="user photo"
//                   />
//                 </button>
//                 {isDropdownOpen && (
//                   <div
//                     className="absolute right-0 mt-2 w-60 bg-red-900 rounded-xl shadow-lg z-50 text-white text-sm"
//                     role="menu"
//                   >
//                     <div className="px-4 py-2 border-b border-blue-950">
//                       <p className="font-semibold">Victor</p>
//                       <p className="text-xs truncate">neil.sims@flowbite.com</p>
//                     </div>
//                     <ul className="py-2 space-y-1">
//                       <li>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 hover:bg-blue-950 rounded transition-colors"
//                           role="menuitem"
//                         >
//                           Mis Actividades
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 hover:bg-blue-950 rounded transition-colors"
//                           role="menuitem"
//                         >
//                           Ajustes
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 hover:bg-blue-950 rounded transition-colors"
//                           role="menuitem"
//                         >
//                           Cambiar contraseña
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 hover:bg-blue-950 rounded transition-colors font-semibold"
//                           role="menuitem"
//                         >
//                           Cerrar Sesión
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Sidebar */}
//       <aside id="default-sidebar" className="fixed top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
//         <div className="h-full px-3 py-4 overflow-y-auto bg-gradient-to-b from-[#082F47] to-red-700 dark:from-[#082F47] dark:to-red-900">
//           <div className="flex items-center mb-4">
//             <img
//               className="w-12 h-12 rounded-full mr-3"
//               src="https://miro.medium.com/v2/resize:fit:1286/0*hINaDB9904rHMVNL"
//               alt="User profile"
//             />
//             <div>
//               <p className="text-white text-sm font-semibold">Bienvenido,</p>
//               <p className="text-white text-base font-bold">Victor</p>
//             </div>
//           </div>
//           <ul className="space-y-2 font-medium">
//             <li>
//               <a href="https://uatf.edu.bo" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-red-900 group">
//                 <img src="/logo-uatf.png" alt="Logo UATF" className="w-10 h-10 rounded-full" />
//                 <span className="ml-2 text-2xl font-extrabold tracking-wide">U.A.T.F.</span>
//               </a>
//             </li>
//             <li>
//               <Link to="/register" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-red-900 group">
//                 <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
//                   <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
//                 </svg>
//                 <span className="flex-1 ms-3 whitespace-nowrap">Nuevo Registro</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/usuarios" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-red-900 group">
//                 <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
//                   <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
//                 </svg>
//                 <span className="flex-1 ms-3 whitespace-nowrap">Usuarios</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/unidades" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-red-900 group">
//                 <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
//                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 17V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M5 15V1m8 18v-4"/>
//                 </svg>
//                 <span className="flex-1 ms-3 whitespace-nowrap">Unidades</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/cerrar-sesion" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-red-900 group">
//                 <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
//                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"/>
//                 </svg>
//                 <span className="flex-1 ms-3 whitespace-nowrap">Cerrar Sesión</span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </aside>

//       {/* Main Content Area */}
//       <div className="p-4 sm:ml-64 mt-16 min-h-screen bg-white">
//       <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/fondo1.svg')" }}></div>
//         <div className="text-center pt-10">
//           <h1 className="text-5xl font-black text-blue-950">Universidad Autónoma Tomás Frías</h1>
//           <h2 className="text-3xl font-semibold text-gray-700 mt-2">DATA CENTER</h2>
//           <p className="text-xl text-gray-600 mt-2">Bienvenido Victor</p>
//           <div className="mt-6">
//             <img
//               src="/fondo1.svg" // Use the actual image path from your public folder
//               alt="Data Center Illustration"
//               className="mx-auto rounded-lg shadow-md"
//             />
//           </div>
//         </div>
//         {/* Additional dashboard content can go here if needed */}
//       </div>
//     </>
//   );
// };

// export default Dashboard;

import React from "react";

export default function Home() {
  return (
    <section className="p-8 text-center">
      <h2 className="text-2xl font-bold">Bienvenido al sitio</h2>
      <p className="mt-4">Esta es la página principal del Front.</p>
    </section>
  );
}

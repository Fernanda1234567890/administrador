// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // Layout principal
// import MainLayout from "./components/layout/MainLayout";
// import Dashboard from "./components/layout/Dashboard";

// import PersonaRegistro from "./pages/admin/Persona/Persona.Registro";
// import PersonaVer from "./pages/admin/Persona/Persona.ver";
// import EstudianteRegistro from "./pages/admin/Estudiante/Estudiante.Registro";
// import EstudianteVer from "./pages/admin/Estudiante/Estudiante.ver";
// import DocenteRegistro from "./pages/admin/Docente/Docente.Registro";
// import DocenteVer from "./pages/admin/Docente/Docente.ver";
// import AdministrativoRegistro from "./pages/admin/Administrativo/Administrativo.Registro";
// import AdministrativoVer from "./pages/admin/Administrativo/Administrativo.ver";
// import UnidadRegistro from "./pages/admin/Unidad/Unidad.Registro";
// import UnidadVer from "./pages/admin/Unidad/Unidad.ver";

// import ForgotPassword from "./pages/auth/ForgotPassword";


// // Páginas usuario
// import Activities from "./pages/user/Activities";
// import Settings from "./pages/user/Settings";
// import ChangePassword from "./pages/user/ChangePassword";

// // Auth
// import Login from "./pages/auth/Login";
// import { UserProvider } from "./contexts/UserContext";
// import PrivateRoute from "./components/PrivateRoute";

// function App() {
//   return (
//     <UserProvider>
//       <Router>
//         <Routes>
//           {/* Rutas públicas */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/cerrar-sesion" element={<Navigate to="/login" />} />
//             <Route path="/forgot-password" element={<ForgotPassword />} />


//           {/* Rutas privadas */}
//           <Route
//             path="/"
//             element={
//               <PrivateRoute>
//                 <MainLayout />
//               </PrivateRoute>
//             }
//           >
//             {/* Dashboard principal */}
//             <Route index element={<Dashboard />} />

//             {/* Admin */}
//             <Route path="/usuarios/registrar" element={<Register />} />
//             <Route path="/usuarios/ver" element={<Users />} />
//             <Route path="unidades" element={<Units />} />

//             <Route path="persona/registrar" element={<PersonaRegistro />} />
//             <Route path="persona/ver" element={<PersonaVer />} />
//             <Route path="estudiantes/registrar" element={<EstudianteRegistro />} />
//             <Route path="estudiantes/ver" element={<EstudianteVer />} />
//             <Route path="docentes/registrar" element={<DocenteRegistro />} />
//             <Route path="docentes/ver" element={<DocenteVer />} />
//             <Route path="administrativos/registrar" element={<AdministrativoRegistro />} />
//             <Route path="administrativos/ver" element={<AdministrativoVer />} />
//             <Route path="unidades/registrar" element={<UnidadRegistro />} />
//             <Route path="unidades/ver" element={<UnidadVer />} />
            
//             {/* Usuario */}
//             <Route path="activities" element={<Activities />} />
//             <Route path="settings" element={<Settings />} />
//             <Route path="change-password" element={<ChangePassword />} />
//           </Route>
//         </Routes>
//       </Router>
//     </UserProvider>
//   );
// }

// export default userRoutes;

import Activities from "../pages/user/Activities";
import Settings from "../pages/user/Settings";
import ChangePassword from "../pages/user/ChangePassword";

const userRoutes = [
  { path: "activities", element: <Activities /> },
  { path: "settings", element: <Settings /> },
  { path: "change-password", element: <ChangePassword /> },
];

export default userRoutes;

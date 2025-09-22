// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // Layout principal
// import MainLayout from "./components/layout/MainLayout";
// import Dashboard from "./components/layout/Dashboard";

// // Páginas admin
// import Register from "./pages/admin/Usuario/Register";
// import Users from "./pages/admin/Usuario/Users";
// import Units from "./pages/admin/Units";

// import OrganizacionVer from "./pages/admin/Organizacion/Organizacion.ver";
// import OrganizacionRegistro from "./pages/admin/Organizacion/Organizacion.registro";
// import CargoRegularRegistro from "./pages/admin/CargoRegular/CargoRegular.registro";
// import CargoRegularVer from "./pages/admin/CargoRegular/CargoRegular.ver";
// import PersonaRegistro from "./pages/admin/Persona/Persona.Registro";
// import PersonaVer from "./pages/admin/Persona/Persona.ver";
// import TipoUnidadesRegistro from "./pages/admin/TipoUnidad/TipoUnidades.Registro";
// import TipoUnidadesVer from "./pages/admin/TipoUnidad/TipoUnidades.ver";
// import EstudianteRegistro from "./pages/admin/Estudiante/Estudiante.Registro";
// import EstudianteVer from "./pages/admin/Estudiante/Estudiante.ver";
// import DocenteRegistro from "./pages/admin/Docente/Docente.Registro";
// import DocenteVer from "./pages/admin/Docente/Docente.ver";
// import AdministrativoRegistro from "./pages/admin/Administrativo/Administrativo.Registro";
// import AdministrativoVer from "./pages/admin/Administrativo/Administrativo.ver";
// import UnidadRegistro from "./pages/admin/Unidad/Unidad.Registro";
// import UnidadVer from "./pages/admin/Unidad/Unidad.ver";
// import CargoIntermedioRegistro from "./pages/admin/CargoIntermedio/CargoIntermedio.Registro";
// import CargoIntermedioVer from "./pages/admin/CargoIntermedio/CargoIntermedio.ver";
// import FacultadRegistro from "./pages/admin/Facultad/Facultad.Registro";
// import FacultadVer from "./pages/admin/Facultad/Facultad.ver";
// import CarreraRegistro from "./pages/admin/Carrera/Carrera.Registro";
// import CarreraVer from "./pages/admin/Carrera/Carrera.ver";
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
//             <Route path="organizacion/registrar" element={<OrganizacionRegistro />} />
//             <Route path="organizacion/ver" element={<OrganizacionVer />} />
//             <Route path="persona/registrar" element={<PersonaRegistro />} />
//             <Route path="persona/ver" element={<PersonaVer />} />
//             <Route path="cargo-regular/registrar" element={<CargoRegularRegistro />} />
//             <Route path="cargo-regular/ver" element={<CargoRegularVer />} />
//             <Route path="tipo-unidades/registrar" element={<TipoUnidadesRegistro />} />
//             <Route path="tipo-unidades/ver" element={<TipoUnidadesVer />} />
//             <Route path="estudiantes/registrar" element={<EstudianteRegistro />} />
//             <Route path="estudiantes/ver" element={<EstudianteVer />} />
//             <Route path="docentes/registrar" element={<DocenteRegistro />} />
//             <Route path="docentes/ver" element={<DocenteVer />} />
//             <Route path="administrativos/registrar" element={<AdministrativoRegistro />} />
//             <Route path="administrativos/ver" element={<AdministrativoVer />} />
//             <Route path="unidades/registrar" element={<UnidadRegistro />} />
//             <Route path="unidades/ver" element={<UnidadVer />} />
//             <Route path="cargos-intermedios/registrar" element={<CargoIntermedioRegistro />} />
//             <Route path="cargos-intermedios/ver" element={<CargoIntermedioVer />} />
//             <Route path="facultad/registrar" element={<FacultadRegistro />} />
//             <Route path="facultad/ver" element={<FacultadVer />} />
//             <Route path="carrera/registrar" element={<CarreraRegistro />} />
//             <Route path="carrera/ver" element={<CarreraVer />} />
            
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

// export default adminRoutes;
import Register from "../pages/admin/Usuario/Register";
import Users from "../pages/admin/Usuario/Users";
import Units from "../pages/admin/Units";
import OrganizacionVer from "../pages/admin/Organizacion/Organizacion.ver";
import OrganizacionRegistro from "../pages/admin/Organizacion/Organizacion.registro";
import CargoRegularRegistro from "../pages/admin/CargoRegular/CargoRegular.registro";
import CargoRegularVer from "../pages/admin/CargoRegular/CargoRegular.ver";
import PersonaRegistro from "../pages/admin/Persona/Persona.Registro";
import PersonaVer from "../pages/admin/Persona/Persona.ver";
import TipoUnidadesRegistro from "../pages/admin/TipoUnidad/TipoUnidades.Registro";
import TipoUnidadesVer from "../pages/admin/TipoUnidad/TipoUnidades.ver";
import EstudianteRegistro from "../pages/admin/Estudiante/Estudiante.Registro";
import EstudianteVer from "../pages/admin/Estudiante/Estudiante.ver";
import DocenteRegistro from "../pages/admin/Docente/Docente.Registro";
import DocenteVer from "../pages/admin/Docente/Docente.ver";
import AdministrativoRegistro from "../pages/admin/Administrativo/Administrativo.Registro";
import AdministrativoVer from "../pages/admin/Administrativo/Administrativo.ver";
import UnidadRegistro from "../pages/admin/Unidad/Unidad.Registro";
import UnidadVer from "../pages/admin/Unidad/Unidad.ver";
import CargoIntermedioRegistro from "../pages/admin/CargoIntermedio/CargoIntermedio.Registro";
import CargoIntermedioVer from "../pages/admin/CargoIntermedio/CargoIntermedio.ver";
import FacultadRegistro from "../pages/admin/Facultad/Facultad.Registro";
import FacultadVer from "../pages/admin/Facultad/Facultad.ver";
import CarreraRegistro from "../pages/admin/Carrera/Carrera.Registro";
import CarreraVer from "../pages/admin/Carrera/Carrera.ver";

const adminRoutes = [
  { path: "usuarios/registrar", element: <Register /> },
  { path: "usuarios/ver", element: <Users /> },
  { path: "unidades", element: <Units /> },
  { path: "organizacion/registrar", element: <OrganizacionRegistro /> },
  { path: "organizacion/ver", element: <OrganizacionVer /> },
  { path: "persona/registrar", element: <PersonaRegistro /> },
  { path: "persona/ver", element: <PersonaVer /> },
  { path: "cargo-regular/registrar", element: <CargoRegularRegistro /> },
  { path: "cargo-regular/ver", element: <CargoRegularVer /> },
  { path: "tipo-unidades/registrar", element: <TipoUnidadesRegistro /> },
  { path: "tipo-unidades/ver", element: <TipoUnidadesVer /> },
  { path: "estudiantes/registrar", element: <EstudianteRegistro /> },
  { path: "estudiantes/ver", element: <EstudianteVer /> },
  { path: "docentes/registrar", element: <DocenteRegistro /> },
  { path: "docentes/ver", element: <DocenteVer /> },
  { path: "administrativos/registrar", element: <AdministrativoRegistro /> },
  { path: "administrativos/ver", element: <AdministrativoVer /> },
  { path: "unidades/registrar", element: <UnidadRegistro /> },
  { path: "unidades/ver", element: <UnidadVer /> },
  { path: "cargos-intermedios/registrar", element: <CargoIntermedioRegistro /> },
  { path: "cargos-intermedios/ver", element: <CargoIntermedioVer /> },
  { path: "facultad/registrar", element: <FacultadRegistro /> },
  { path: "facultad/ver", element: <FacultadVer /> },
  { path: "carrera/registrar", element: <CarreraRegistro /> },
  { path: "carrera/ver", element: <CarreraVer /> },
];

export default adminRoutes;

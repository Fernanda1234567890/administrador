import Register from "@admin/pages/admin/Usuario/Register";
import Users from "@admin/pages/admin/Usuario/Users";
import Units from "@admin/pages/admin/Units";
import OrganizacionVer from "@admin/pages/admin/Organizacion/Organizacion.ver";
import OrganizacionRegistro from "@admin/pages/admin/Organizacion/Organizacion.registro";
import CargoRegularRegistro from "@admin/pages/admin/CargoRegular/CargoRegular.registro";
import CargoRegularVer from "@admin/pages/admin/CargoRegular/CargoRegular.ver";
import PersonaRegistro from "@admin/pages/admin/Persona/Persona.Registro";
import PersonaVer from "@admin/pages/admin/Persona/Persona.ver";
import TipoUnidadesRegistro from "@admin/pages/admin/TipoUnidad/TipoUnidades.Registro";
import TipoUnidadesVer from "@admin/pages/admin/TipoUnidad/TipoUnidades.ver";
import EstudianteRegistro from "@admin/pages/admin/Estudiante/Estudiante.Registro";
import EstudianteVer from "@admin/pages/admin/Estudiante/Estudiante.ver";
import DocenteRegistro from "@admin/pages/admin/Docente/Docente.Registro";
import DocenteVer from "@admin/pages/admin/Docente/Docente.ver";
import AdministrativoRegistro from "@admin/pages/admin/Administrativo/Administrativo.Registro";
import AdministrativoVer from "@admin/pages/admin/Administrativo/Administrativo.ver";
import UnidadRegistro from "@admin/pages/admin/Unidad/Unidad.Registro";
import UnidadVer from "@admin/pages/admin/Unidad/Unidad.ver";
import CargoIntermedioRegistro from "@admin/pages/admin/CargoIntermedio/CargoIntermedio.Registro";
import CargoIntermedioVer from "@admin/pages/admin/CargoIntermedio/CargoIntermedio.ver";
import FacultadRegistro from "@admin/pages/admin/Facultad/Facultad.Registro";
import FacultadVer from "@admin/pages/admin/Facultad/Facultad.ver";
import CarreraRegistro from "@admin//pages/admin/Carrera/Carrera.Registro";
import CarreraVer from "@admin/pages/admin/Carrera/Carrera.ver";
import DocenteAsignacion from "@admin/pages/admin/Asignacion/DocenteAsignacion";
import AsignacionesList from "@admin/pages/admin/Asignacion/AsignacionesList";
import AsignacionesAdminList from "@admin/pages/admin/Asignacion/AsignacionesAdminList";
import AdministrativoAsignacion from "@admin/pages/admin/Asignacion/AdministrativoAsignacion";


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
  { path: "docente/asignacion/:id", element: <DocenteAsignacion /> },
 // { path: "/asignaciones/ver", element: <AsignacionesList />},
  { path: "administrativo/asignacion/:id", element: <AdministrativoAsignacion /> },
  { path: "asignaciones-admin/ver", element: <AsignacionesAdminList /> },
  { path: "asignaciones-docentes/ver", element: <AsignacionesList />},
];

export default adminRoutes;

import React from 'react';
import { UserProvider } from './UserContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './views/Dashboard';
import Register from './pages/admin/Register';
import Users from './pages/admin/Users';
import Units from './pages/admin/Units';
import Login from './pages/auth/Login';
import Home from './pages/admin/Home';
import OrganizacionVer from './pages/admin/Organizacion.ver';
import OrganizacionRegistro from './pages/admin/Organizacion.registro';
import CargoRegularRegistro from './pages/admin/CargoRegular.registro';
import CargoRegularVer from './pages/admin/CargoRegular.ver';
import PersonaRegistro from './pages/admin/Persona.Registro';
import PersonaVer from './pages/admin/Persona.ver';
import TipoUnidadesRegistro from './pages/admin/TipoUnidades.Registro';
import TipoUnidadesVer from './pages/admin/TipoUnidades.ver';
import EstudianteRegistro from './pages/admin/Estudiante.Registro';
import EstudianteVer from './pages/admin/Estudiante.ver';
import DocenteRegistro from './pages/admin/Docente.Registro';
import DocenteVer from './pages/admin/Docente.ver';
import AdministrativoRegistro from './pages/admin/Administrativo.Registro';
import AdministrativoVer from './pages/admin/Administrativo.ver';
import UnidadRegistro from './pages/admin/Unidad.Registro';
import UnidadVer from './pages/admin/Unidad.ver';
import CargoIntermedioRegistro from './pages/admin/CargoIntermedio.Registro';
import CargoIntermedioVer from './pages/admin/CargoIntermedio.ver';



function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="register" element={<Register />} />
          <Route path="usuarios" element={<Users />} />
          <Route path="unidades" element={<Units />} />
          <Route path="/organizacion/registrar" element={<OrganizacionRegistro />} />
          <Route path="/organizacion/ver" element={<OrganizacionVer />} />
          <Route path="/persona/registrar" element={<PersonaRegistro />} />
          <Route path="/persona/ver" element={<PersonaVer />} />
          <Route path="/cargo-regular/registrar" element={<CargoRegularRegistro />} />
          <Route path="/cargo-regular/ver" element={<CargoRegularVer />} />
          <Route path="/tipo-unidades/registrar" element={<TipoUnidadesRegistro />} />
          <Route path="/tipo-unidades/ver" element={<TipoUnidadesVer />} />
          <Route path="/estudiantes/registrar" element={<EstudianteRegistro />} />
          <Route path="/estudiantes/ver" element={<EstudianteVer />} />
          <Route path="/docentes/registrar" element={<DocenteRegistro />} />
          <Route path="/docentes/ver" element={<DocenteVer />} />
          <Route path="/administrativos/registrar" element={<AdministrativoRegistro />} />
          <Route path="/administrativos/ver" element={<AdministrativoVer />} />
          <Route path="unidades/registrar" element={<UnidadRegistro />} />
          <Route path="unidades/ver" element={<UnidadVer />} />
          <Route path="cargos-intermedios/registrar" element={<CargoIntermedioRegistro />} />
          <Route path="cargos-intermedios/ver" element={<CargoIntermedioVer />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cerrar-sesion" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
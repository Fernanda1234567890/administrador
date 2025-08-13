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

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="register" element={<Register />} />
          <Route path="usuarios" element={<Users />} />
          <Route path="unidades" element={<Units />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cerrar-sesion" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
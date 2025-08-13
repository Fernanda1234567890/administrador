// src/components/admin/Logout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); // O ajusta la ruta a donde quieras redirigir
  };

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleLogout();
      }}
      className="block px-4 py-2 hover:bg-blue-950 rounded transition-colors font-semibold"
      role="menuitem"
    >
      Cerrar Sesión
    </a>
  );
};

export default Logout;
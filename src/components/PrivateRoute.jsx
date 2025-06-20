import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Verifica si hay un token (simulación de autenticación)

  return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
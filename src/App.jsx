
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "@admin/components/layout/MainLayout";
import Dashboard from "@admin/components/layout/Dashboard";
import Login from "@admin/pages/auth/Login";
import ForgotPassword from "@admin/pages/auth/ForgotPassword";
import { UserProvider } from "@admin/contexts/UserContext";
import PrivateRoute from "@admin/components/PrivateRoute";

// Importar las rutas separadas
import adminRoutes from "@admin/routes/adminRoutes";
import userRoutes from "@admin/routes/userRoutes";

import publicRoutes from "@main/routes/publicRoutes";


function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/cerrar-sesion" element={<Navigate to="/login" />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Rutas públicas web */}
            {publicRoutes.map((r, i) =>
              r.layout ? (
                <Route key={i} path={r.path} element={<r.layout>{r.element}</r.layout>} />
              ) : (
                <Route key={i} path={r.path} element={r.element} />
              )
            )}

          {/* Privadas */}
          <Route path="/admin/*" element={<PrivateRoute><MainLayout /></PrivateRoute>}>
            <Route index element={<Dashboard />} />


            {/* Rutas admin */}
            {adminRoutes.map((r, i) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}

            {/* Rutas usuario */}
            {userRoutes.map((r, i) => (
              <Route key={i} path={r.path} element={r.element} />
            ))}

           <Route path="*" element={<Navigate to="/" />} />

          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

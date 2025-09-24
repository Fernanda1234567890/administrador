import React from 'react';
import ReactDOM from 'react-dom/client';

// Estilos
import './tailwind.css';
import './App.css';
import './index.css';

// App principal
import App from './App';

// Contextos
import { UserProvider } from "@admin/contexts/UserContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);

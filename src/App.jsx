import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BioSection from './components/BioSection';
import RutasRectorado from './components/RutasRectorado';
import RutasVicerrectorado from './components/RutasVicerrectorado';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-300 text-gray-800 dark:text-cyan-900 flex items-center justify-center">
      <Routes>
        <Route path="/" element={<BioSection />} />
        <Route path="/rutas-rectorado" element={<RutasRectorado />} />
        <Route path="/rutas-vicerrectorado" element={<RutasVicerrectorado />} />
      </Routes>
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

const DocenteVer = () => {
  const [docentes, setDocentes] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("docentes")) || [];
    setDocentes(data);
  }, []);

  return (
    <div className="p-6 min-h-screen dark:bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Lista de Docentes</h2>
      {docentes.length === 0 ? (
        <p className="text-gray-600">No hay docentes registrados.</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-blue-950 text-white">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Carrera</th>
              <th className="p-3 text-left">ID Persona</th>
               <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {docentes.map((doc, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-3">{doc.id}</td>
                <td className="p-3">{doc.carrera}</td>
                <td className="p-3">{doc.idPersona}</td>
                    <td className="p-3 flex gap-2">
                      <button
                        onClick={() => handleActualizar(org)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                      >
                        Actualizar
                      </button>
                      <button
                        onClick={() => handleEliminar(org.id)}
                        className="bg-red-700 text-white px-2 py-1 rounded hover:bg-red-800"
                      >
                        Eliminar
                      </button>
                    </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DocenteVer;

import React, { useEffect, useState } from "react";

const AdministrativoVer = () => {
  const [administrativos, setAdministrativos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("administrativos")) || [];
    setAdministrativos(data);
  }, []);

  return (
    <div className="p-6 min-h-screen dark:bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Lista de Administrativos</h2>
      {administrativos.length === 0 ? (
        <p className="text-gray-600">No hay administrativos registrados.</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-blue-950 text-white">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">ID Persona</th>
              <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {administrativos.map((adm, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-3">{adm.id}</td>
                <td className="p-3">{adm.idPersona}</td>
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

export default AdministrativoVer;

import React, { useEffect, useState } from "react";

const UnidadVer = () => {
  const [unidades, setUnidades] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("unidades")) || [];
    setUnidades(data);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Unidades Registradas</h2>
      {unidades.length === 0 ? (
        <p>No hay unidades registradas.</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-blue-950 text-white">
              <th className="p-3">ID</th>
              <th className="p-3">Nombre</th>
              <th className="p-3">Descripción</th>
              <th className="p-3">Responsable</th>
              <th className="p-3">Depende de</th>
              <th className="p-3">ID Tipo Unidad</th>
              <th className="p-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {unidades.map((u, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-100">
                <td className="p-3">{u.id}</td>
                <td className="p-3">{u.nombre}</td>
                <td className="p-3">{u.descripcion}</td>
                <td className="p-3">{u.responsable}</td>
                <td className="p-3">{u.dependeDe}</td>
                <td className="p-3">{u.idTipoUnidad}</td>
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

export default UnidadVer;

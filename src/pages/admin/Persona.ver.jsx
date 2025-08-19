import React, { useEffect, useState } from "react";

const PersonaVer = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("personas")) || [];
    setPersonas(data);
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Personas Registradas</h2>

      {personas.length === 0 ? (
        <p>No hay personas registradas.</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-red-700 text-white">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Nombres</th>
              <th className="p-3 text-left">Apellidos</th>
              <th className="p-3 text-left">CI</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Teléfono</th>
              <th className="p-3 text-left">Dirección</th>
              <th className="p-3 text-left">Fecha Nac.</th>
              <th className="p-3 text-left">Imagen</th>
              <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {personas.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{p.id}</td>
                <td className="p-3">{p.nombres}</td>
                <td className="p-3">{p.apellidos}</td>
                <td className="p-3">{p.ci}</td>
                <td className="p-3">{p.email}</td>
                <td className="p-3">{p.telefono}</td>
                <td className="p-3">{p.direccion}</td>
                <td className="p-3">{p.fechaNacimiento}</td>
                <td className="p-3">
                  {p.img && <img src={p.img} alt={p.nombres} className="w-12 h-12 object-cover rounded" />}
                </td>
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

export default PersonaVer;

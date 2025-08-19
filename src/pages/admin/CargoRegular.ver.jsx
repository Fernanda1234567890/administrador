import React, { useEffect, useState } from "react";

const CargoRegularVer = () => {
  const [cargosRegulares, setCargosRegulares] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cargo-regular")) || [];
    setCargosRegulares(data);
  }, []);

  return (
    <div className="p-6 sm:p-2 lg:p-12 min-h-screen dark:bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-left">
        Cargos Regulares Registrados
      </h2>
      <div className="max-w-3xl mx-auto">
        {cargosRegulares.length === 0 ? (
          <p className="text-gray-600">No hay Cargos Regulares registradas.</p>
        ) : (
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Nombre</th>
                <th className="p-3 text-left">Descripción</th>
                <th className="p-3 text-left">Nivel Jerárquico</th>
                 <th className="p-3 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cargosRegulares.map((cargo) => (
                <tr key={cargo.id} className="border-b hover:bg-gray-100 transition">
                  <td className="p-3">{cargo.id}</td>
                  <td className="p-3">{cargo.nombre}</td>
                  <td className="p-3">{cargo.descripcion}</td>
                  <td className="p-3">{cargo.nivelJerarquico}</td>
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
    </div>
  );
};

export default CargoRegularVer;

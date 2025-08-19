import React, { useEffect, useState } from "react";

const CargoIntermedioVer = () => {
  const [cargos, setCargos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cargosIntermedios")) || [];
    setCargos(data);
  }, []);

  const handleDelete = (id) => {
    const updated = cargos.filter((c) => c.id !== id);
    setCargos(updated);
    localStorage.setItem("cargosIntermedios", JSON.stringify(updated));
  };

  return (
    <div className="p-6 lg:p-12 min-h-screen dark:bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Cargos Intermedios Registrados
      </h2>
      {cargos.length === 0 ? (
        <p className="text-gray-600">No hay cargos intermedios registrados.</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-blue-950 text-white">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Nombre</th>
              <th className="p-3 text-left">Descripción</th>
              <th className="p-3 text-left">Nivel Jerárquico</th>
              <th className="p-3 text-left">ID Unidad</th>
              <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cargos.map((cargo) => (
              <tr key={cargo.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{cargo.id}</td>
                <td className="p-3">{cargo.nombre}</td>
                <td className="p-3">{cargo.descripcion}</td>
                <td className="p-3">{cargo.nivelJerarquico}</td>
                <td className="p-3">{cargo.idUnidad}</td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => handleDelete(cargo.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800"
                  >
                    Eliminar
                  </button>
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-700">
                    Actualizar
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

export default CargoIntermedioVer;

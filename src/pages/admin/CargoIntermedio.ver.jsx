import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cargosIntermediosData from "../../services/cargosIntermedios";

const CargoIntermedioVer = () => {
  const [cargos, setCargos] = useState([]);
  const navigate = useNavigate();
  const { getData, updateData, deleteData } = cargosIntermediosData();

  const init = async () => {
    const res = await getData();
    console.log("Respuesta cargos intermedios:", res);
    setCargos(Array.isArray(res) ? res : []);
  };

  useEffect(() => {
    init();
  }, []);

  // const handleEliminar = async (id) => {
  //   if (!window.confirm("¿Seguro que quieres eliminar este cargo intermedio?")) return;
  //   await deleteData(id);
  //   init();
  // };

  const handleActualizar = async (cargo) => {
    const nuevoNombre = prompt("Nuevo nombre:", cargo.nombre);
    const nuevaDescripcion = prompt("Nueva descripción:", cargo.descripcion);

    if (nuevoNombre && nuevaDescripcion) {
      await updateData(cargo.id, { ...cargo, nombre: nuevoNombre, descripcion: nuevaDescripcion });
      init();
    }
  };
 return (
    <div className="p-6 sm:p-2 lg:p-12 min-h-screen dark:bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Cargos Intermedios</h2>
        <button
          onClick={() => navigate("/cargo-intermedio/registrar")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Registrar
        </button>
      </div>

      <div className="max-w-3xl mx-auto">
      {cargos.length === 0 ? (
        <p>No hay cargos intermedios registrados.</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-blue-950 text-white">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Nombre</th>
              <th className="p-3 text-left">Descripción</th>
              <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cargos.map((cargo) => (
              <tr key={cargo.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{cargo.id}</td>
                <td className="p-3">{cargo.nombre}</td>
                <td className="p-3">{cargo.descripcion}</td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleActualizar(cargo)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  >
                    Actualizar
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

export default CargoIntermedioVer;

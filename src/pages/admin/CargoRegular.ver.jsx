import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cargosRegularesData from "../../services/cargosRegulares";

const CargoRegularVer = () => {
  const [cargosRegulares, setCargosRegulares] = useState([]);
  const { getData } = cargosRegularesData();

 const init = async () => {
  const respuesta = await getData();
  setCargosRegulares(respuesta.data);
 }
  useEffect(() => {
    init () ;
  }, []);


  const handleActualizar = async (cargo) => {
    const nuevoNombre = prompt("Nuevo nombre:", cargo.nombre);
    const nuevaDescripcion = prompt("Nueva descripción:", cargo.descripcion);
    const nuevoNivel = prompt("Nuevo nivel jerárquico:", cargo.nivelJerarquico);

    if (nuevoNombre && nuevaDescripcion && nuevoNivel) {
      await updateData(cargo.id, {
        ...cargo,
        nombre: nuevoNombre,
        descripcion: nuevaDescripcion,
        nivelJerarquico: nuevoNivel,
      });
      init(); // vuelve a cargar la lista
    }
  };

  return (
    <div className="p-6 sm:p-2 lg:p-12 min-h-screen dark:bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 text-left">
          Cargos Regulares Registrados
        </h2>
        <button
          onClick={() => navigate("/cargo-regular/registro")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Registrar
        </button>
      </div>

      <div className="max-w-3xl mx-auto">
        {cargosRegulares.length === 0 ? (
          <p className="text-gray-600">No hay Cargos Regulares registrados.</p>
        ) : (
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Nombre</th>
                <th className="p-3 text-left">Descripción</th>
                <th className="p-3 text-left">Nivel Jerárquico</th>
                <th className="p-3 text-left">Administrativos / Unidad</th>

                <th className="p-3 text-left">Estado</th>
                <th className="p-3 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cargosRegulares.map((cargo) => (
                <tr key={cargo.id} className="border-b hover:bg-gray-100 transition">
                  <td className="p-3" data-label="ID">{cargo.id}</td>
                  <td className="p-3" data-label="Nombre">{cargo.nombre}</td>
                  <td className="p-3" data-label="Descripción">{cargo.descripcion}</td>
                  <td className="p-3" data-label="Nivel Jerárquico">{cargo.nivelJerarquico}</td>
                  {/* <td className="p-3">
                    {cargo.administrativoCargoRegularUnidades?.length > 0 ? (
                      cargo.administrativoCargoRegularUnidades.map((rel) => (
                        <span key={rel.id} className="block">
                          {rel.administrativo.nombres} ({rel.unidad.tipo})
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500">Sin administrativos</span>
                    )}
                  </td> */}
                  {/* <td className="p-3" data-label="Estadon">
                    {organizaciones.find((org) => org.id === cargo.organizacionId)?.tipo || "Activo o inactivo"}
                  </td>
                  <td className="p-3 flex gap-2" data-label="Acciones">
                    <button
                      onClick={() => handleActualizar(cargo)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Actualizar
                    </button> */}
                    {/* <button
                      onClick={() => handleEliminar(cargo.id)}
                      className="bg-red-700 text-white px-2 py-1 rounded hover:bg-red-800"
                    >
                      Eliminar
                    </button> */}
                  {/* </td> */}
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
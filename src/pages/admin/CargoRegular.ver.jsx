import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cargosRegularesData from "../../services/cargosRegulares";

const CargoRegularVer = () => {
  const [cargosRegulares, setCargosRegulares] = useState([]);
  const navigate = useNavigate();
  const { getData, createData, updateData, deleteData } = cargosRegularesData();

  // ✅ Función para traer cargoRanizaciones activas
   const fetchCargosRegulares = async () => {
     try {
       const res = await getData(); // tu service ya hace fetch a backend
       setCargosRegulares(res.data || []); // aseguramos que sea array
     } catch (error) {
       console.error("Error al obtener cargos regulares:", error);
       setCargosRegulares([]);
     }
   };
 
   // ✅ Se ejecuta al montar el componente
   useEffect(() => {
     fetchCargosRegulares();
   }, []);
   


  // ✅ Registrar nuevo cargo regular
    const handleRegistrar = (newCargoR) => {
    setCargosRegulares((prev) => [...prev, newCargoR]);
  };


  // ✅ Actualizar cargoRanización
  const handleActualizar = async (cargoR) => {
    const nuevoNombre = prompt("Nuevo nombre:", cargoR.nombre);
    const nuevaDescripcion = prompt("Nueva descripción:", cargoR.descripcion);

    if (nuevoNombre && nuevaDescripcion) {
      try {
        await updateData(cargoR.id, {
          ...cargoR,
          nombre: nuevoNombre,
          descripcion: nuevaDescripcion,
        });
        fetchCargosRegulares(); // refrescar lista
      } catch (error) {
        console.error("Error al actualizar cargo regular:", error);
      }
    }
  };

  // ✅ Dar de baja (soft delete)
const handleDelete = (id) => {
  if (!window.confirm("¿Seguro que desea dar de baja este cargo regular?")) return;

  setCargosRegulares((prev) => prev.filter((cargoR) => cargoR.id !== id));
};


  return (
    <div className="p-6 sm:p-2 lg:p-12 min-h-screen dark:bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 text-left">
          Cargos Regulares Registrados
        </h2>
        <button
          onClick={() => navigate("/cargo-regular/registrar")}
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
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => handleActualizar(cargo)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Actualizar
                    </button>
                    <button
                      onClick={() => handleDelete(cargo.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Dar de baja
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
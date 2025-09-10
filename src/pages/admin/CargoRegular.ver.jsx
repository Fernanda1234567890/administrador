import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CargoRegularRegistro from "./CargoRegular.registro"; 

const API_URL = "http://localhost:3000/api/cargo-regular";

const CargoRegularVer = () => {
  const [cargos, setCargos] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState("");
  const [showInactive, setShowInactive] = useState(false);
  const [total, setTotal] = useState(0);

  const [editingCargo, setEditingCargo] = useState(null);
  const navigate = useNavigate();


  // Traer cargos desde backend
  const fetchCargos = async () => {
    try {
      const estado = showInactive ? "inactivo" : "activo";
      const res = await axios.get(API_URL, {
        params: { page, limit, search, estado },
      });
      setCargos(res.data.data || []);
      setTotal(res.data.meta?.total || 0);
    } catch (error) {
      console.error("Error al obtener cargos:", error);
      setCargos([]);
    }
  };

   // ✅ Se ejecuta al montar el componente
  useEffect(() => {
    fetchCargos();
  }, [page, search, showInactive]);

  // Abrir formulario para actualizar cargo
  const handleEditar = (cargo) => {
    setEditingCargo(cargo);
  };

  // ✅ Registrar nuevo cargo regular
    const handleRegistrar = (newCargoR) => {
    setCargosRegulares((prev) => [...prev, newCargoR]);
  };

 // Actualizar cargo en la lista después de editar
  const handleActualizar = (updatedCargo) => {
    setCargos((prev) =>
      prev.map((c) => (c.id === updatedCargo.id ? updatedCargo : c))
    );
    setEditingCargo(null); // cerrar formulario
  };

  // Dar de baja (soft delete)
  const handleBaja = async (id) => {
    if (!window.confirm("¿Seguro que desea dar de baja este cargo?")) return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchCargos();
      alert("Cargo dado de baja correctamente");
    } catch (error) {
      console.error("Error al dar de baja:", error);
      alert(
        "No se pudo dar de baja: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

 return (
    <div className="p-6 sm:p-2 lg:p-12 min-h-screen bg-white">
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

      {/* Filtros */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setShowInactive(false)}
          className={`px-4 py-2 rounded ${
            !showInactive ? "bg-blue-950 text-white" : "bg-gray-300"
          }`}
        >
          Activos
        </button>
        <button
          onClick={() => {
            const clave = prompt("Ingrese la clave para ver inactivos:");
            if (clave === "SISTEM4S") {
              setShowInactive(true);
            } else {
              alert("Clave incorrecta");
            }
          }}
          className={`px-4 py-2 rounded ${showInactive ? "bg-red-600 text-white" : "bg-gray-300"}`}
        >
          Inactivas
        </button>
      </div>

      {/* Búsqueda */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded " //w-full
        />
        <button
          onClick={fetchCargos}
          className="bg-blue-700 text-white px-3 py-1 rounded"
        >
          Buscar
        </button>
      </div>

      <div className="max-w-3xl mx-auto">
        {cargos.length === 0 ? (
          <p className="text-gray-600">No hay Cargos Regulares registrados.</p>
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
              {cargos.map((cargo) => (
                <tr key={cargo.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{cargo.id}</td>
                  <td className="p-3">{cargo.nombre}</td>
                  <td className="p-3">{cargo.descripcion}</td>
                  <td className="p-3">
                    {cargo.nivel_jerarquico === 1
                      ? "Alto"
                      : cargo.nivel_jerarquico === 2
                      ? "Medio"
                      : "Bajo"}
                  </td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => handleEditar(cargo)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Actualizar
                    </button>
                    {!showInactive && (
                      <button
                        onClick={() => handleBaja(cargo.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Dar de baja
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-4 gap-2">
        <button
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="px-3 py-1">{page}</span>
        <button
          disabled={page >= Math.ceil(total / limit)}
          onClick={() => setPage(page + 1)}
          className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>

      {/* Modal/Formulario de edición */}
      {editingCargo && (
        <CargoRegularRegistro
          cargo={editingCargo}
          onClose={() => setEditingCargo(null)}
          onRegistrar={handleActualizar}
        />
      )}
    </div>
  );
};

export default CargoRegularVer;
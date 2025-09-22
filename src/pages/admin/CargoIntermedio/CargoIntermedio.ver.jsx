import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cargosIntermediosData from "../../../services/cargosIntermedios";

const API_URL = "http://localhost:3000/api/cargo-intermedio"; // 🔗 Endpoint

const CargoIntermedioVer = () => {
  const [cargos, setCargos] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState("");
  const [showInactive, setShowInactive] = useState(false);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();
  const { getData, updateData, bajaData } = cargosIntermediosData();

  // Traer cargos desde backend usando el servicio
  const fetchCargos = async () => {
    try {
      const estado = showInactive ? "inactivo" : "activo";
      const res = await getData(page, limit, search, estado);
      setCargos(res.data || []);
      setTotal(res.meta?.total || 0);
    } catch (error) {
      console.error("Error al obtener cargos:", error);
      setCargos([]);
    }
  };

  // ✅ Ejecutar al montar o cuando cambian filtros
  useEffect(() => {
    fetchCargos();
  }, [page, search, showInactive]);

  // Actualizar cargo
  const handleActualizar = async (cargo) => {
    const nuevoNombre = prompt("Nuevo nombre:", cargo.nombre);
    const nuevaDescripcion = prompt("Nueva descripción:", cargo.descripcion);

    if (nuevoNombre && nuevaDescripcion) {
      await updateData(cargo.id, {
        nombre: nuevoNombre,
        descripcion: nuevaDescripcion,
      });
      fetchCargos();
    }
  };

  // Dar de baja
  const handleBaja = async (id) => {
    if (!window.confirm("¿Seguro que desea dar de baja este cargo?")) return;
    try {
      await bajaData(id);
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
          Cargos Intermedios
        </h2>
        <button
          onClick={() => navigate("/cargo-intermedio/registrar")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Registrar
        </button>
      </div>

      {/* Búsqueda */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={fetchCargos}
          className="bg-blue-700 text-white px-3 py-1 rounded"
        >
          Buscar
        </button>
      </div>

      {/* Tabla */}
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
                <th className="p-3 text-left">Unidad</th>
                <th className="p-3 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cargos.map((cargo) => (
                <tr key={cargo.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{cargo.id}</td>
                  <td className="p-3">{cargo.nombre}</td>
                  <td className="p-3">{cargo.descripcion}</td>
                  <td className="p-3">{cargo.unidad?.nombre || "Sin unidad"}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => handleActualizar(cargo)}
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
    </div>
  );
};

export default CargoIntermedioVer;

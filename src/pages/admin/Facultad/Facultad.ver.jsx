import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FacultadVer = () => {
  const [facultades, setFacultades] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);
  const [showInactive, setShowInactive] = useState(false);

  // ✅ Cargar lista de facultades
  const fetchFacultades = async () => {
    try {
      const estado = showInactive ? "inactivo" : "activo";
      const res = await axios.get("http://localhost:3000/api/facultad", {
        params: { page, limit, search, estado },
      });

      let data = res.data.data || res.data;
      data.sort((a, b) => b.id - a.id);

      setFacultades(data);
      setTotal(res.data.meta?.total || data.length || 0);
    } catch (err) {
      console.error("Error al cargar facultades:", err);
      alert("No se pudieron cargar las facultades");
    }
  };

  useEffect(() => {
    fetchFacultades();
  }, [page, search, showInactive]);

  const handleRegistrar = async () => {
    const nombre = prompt("Ingrese el nombre de la facultad:");
    const sigla = prompt("Ingrese la descripción:");

    if (!nombre || !sigla) return;

    try {
      const nuevaFacultad = { nombre, sigla, estado: true };
      await axios.post("http://localhost:3000/api/facultad", nuevaFacultad);
      alert("Facultad registrada con éxito");
      fetchFacultades(); 
    } catch (err) {
      console.error("Error al registrar facultad:", err);
      alert("No se pudo registrar la facultad");
    }
  };


  const handleActualizar = async (facultad) => {
    const nombre = prompt("Nuevo nombre:", facultad.nombre);
    const sigla = prompt("Nueva sigla:", facultad.sigla);

    if (!nombre || !sigla) return;

    try {
      await axios.put(`http://localhost:3000/api/facultad/${facultad.id}`, {
        nombre,
        sigla,
      });
      alert("Facultad actualizada con éxito");
      fetchFacultades();
    } catch (err) {
      console.error("Error al actualizar facultad:", err);
      alert("No se pudo actualizar la facultad");
    }
  };

  const handleDarBaja = async (id) => {
    if (!window.confirm("¿Seguro que desea dar de baja esta facultad?")) return;
    try {
      await axios.delete(`http://localhost:3000/api/facultad/${id}`);
      alert("Facultad dada de baja correctamente");
      fetchFacultades(); 
    } catch (err) {
      console.error("Error al dar de baja:", err);
      alert("No se pudo dar de baja la facultad");
    }
  };


  return (
    <div className="p-6 sm:p-2 lg:p-12 min-h-screen dark:bg-white">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-4">Lista de Facultades</h2>
      </div>

      {/* Buscador */}
      <div className="mb-4 flex justify-between items-center">
       <div className="flex gap-2">
        <input
          type="text"
          placeholder="Buscar nombre o sigla..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={() => {
            setPage(1);
            fetchFacultades();
          }}
          className="bg-blue-700 text-white px-3 py-1 rounded"
        >
          Buscar
        </button>
        </div>

         <Link
          to="/facultad/registrar"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >Registrar </Link>
      </div>

      {/* Tabla */}
      <div className="w-full overflow-x-auto">
        {facultades.length === 0 ? (
          <p className="text-gray-600">No hay facultades registradas.</p>
        ) : (
          <table className="w-full border-collapse bg-white shadow rounded-lg min-w-[600px]">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Nombre</th>
                <th className="p-3 text-left">Sigla</th>
                <th className="p-3 text-left">Acciones</th>
              </tr>
            </thead>
              <tbody>
                {facultades.map((f) => (
                  <tr key={f.id} className="border-b hover:bg-gray-100">
                    <td className="p-3">{f.id}</td>
                    <td className="p-3">{f.nombre}</td>
                    <td className="p-3">{f.sigla}</td>
                    <td className="p-3 flex gap-2">
                      <button
                        onClick={() => handleActualizar(f)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                      >
                        Actualizar
                      </button>
                      <button
                        onClick={() => handleDarBaja(f.id)}
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

      {/* Paginación */}
      {total > limit && (
        <div className="flex justify-center gap-2 mt-4">
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
      )}
    </div>
  );
};

export default FacultadVer;

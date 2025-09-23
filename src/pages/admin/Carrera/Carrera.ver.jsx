import React, { useState, useEffect } from "react";
import carrerasData from "../../../services/carreras";
import axios from "axios";
import { Link } from "react-router-dom";


const CarreraVer = () => {
  const [carreras, setCarreras] = useState([]);
  const [facultades, setFacultades] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);
  const [showInactive, setShowInactive] = useState(false);

  const { getData, deleteData, createData, updateData } = carrerasData();

  // Cargar carreras
  // ------------------------------
  const fetchCarreras = async () => {
    try {
      // Para que siempre salgan los seeds, enviamos estado solo si showInactive
      const estado = showInactive ? "inactivo" : undefined;
      const res = await getData(page, limit, { search, estado });

      const data = res.data || res;
      const meta = res.meta || res.data?.meta || { total: data.length };

      // Orden descendente por ID
      data.sort((a, b) => b.id - a.id);

      setCarreras(data);
      setTotal(meta.total || data.length);
    } catch (err) {
      console.error("Error al cargar carreras:", err);
      alert("No se pudieron cargar las carreras");
    }
  };

  // Cargar facultades
  // ------------------------------
  const fetchFacultades = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/facultad");
      setFacultades(res.data.data || res.data);
    } catch (err) {
      console.error("Error al cargar facultades:", err);
      alert("No se pudieron cargar las facultades");
    }
  };

  useEffect(() => {
    fetchCarreras();
    fetchFacultades();
  }, [page, search, showInactive]);

  // ------------------------------
  // Registrar carrera
  // ------------------------------
  const handleRegistrar = async () => {
    const nombre = prompt("Ingrese el nombre de la carrera:");
    const sigla = prompt("Ingrese la sigla de la carrera:");

    if (!nombre || !sigla) {
      alert("Nombre y sigla son obligatorios");
      return;
    }

    let id_facultad = null;
    if (facultades.length > 0) {
      const facultadOptions = facultades.map(f => `${f.id} - ${f.nombre} (${f.sigla})`).join("\n");
      const input = prompt(`Seleccione ID de facultad (opcional):\n${facultadOptions}`);
      if (input) id_facultad = input;
    }

    try {
      await createData({ nombre, sigla, id_facultad });
      alert("Carrera registrada con éxito");
      fetchCarreras();
    } catch (err) {
      console.error("Error al registrar carrera:", err);
      alert("No se pudo registrar la carrera");
    }
  };

  // ------------------------------
  // Actualizar carrera
  // ------------------------------
  const handleActualizar = async (carrera) => {
    const nombre = prompt("Nuevo nombre:", carrera.nombre);
    const sigla = prompt("Nueva sigla:", carrera.sigla);

    if (!nombre || !sigla) {
      alert("Nombre y sigla son obligatorios");
      return;
    }

    let payload = { nombre, sigla };

    if (facultades.length > 0) {
      const facultadOptions = facultades.map(f => `${f.id} - ${f.nombre} (${f.sigla})`).join("\n");
      const input = prompt(
        `Seleccione ID de facultad (opcional, dejar vacío si no aplica):\n${facultadOptions}`,
        carrera.facultad?.id || ""
      );
      if (input) payload.id_facultad = input;
    }

    try {
      await updateData(carrera.id, payload);
      alert("Carrera actualizada con éxito");
      fetchCarreras();
    } catch (err) {
      console.error("Error al actualizar carrera:", err);
      alert("No se pudo actualizar la carrera");
    }
  };

  // ------------------------------
  // Dar de baja
  // ------------------------------
  const handleDarBaja = async (id) => {
    if (!window.confirm("¿Seguro que desea dar de baja esta carrera?")) return;
    try {
      await deleteData(id);
      alert("Carrera dada de baja correctamente");
      fetchCarreras();
    } catch (err) {
      console.error("Error al dar de baja:", err);
      alert("No se pudo dar de baja la carrera");
    }
  };

  return (
    <div className="p-6 sm:p-2 lg:p-12 min-h-screen dark:bg-white">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-4">Lista de Carreras</h2>
      </div>

      {/* Buscador + Registrar */}
      <div className="mb-4 flex gap-2 flex-wrap">
        <input
          type="text"
          placeholder="Buscar por nombre, sigla o facultad..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded flex-1 min-w-[250px]"
        />
        <button
          onClick={() => { setPage(1); fetchCarreras(); }}
          className="bg-blue-700 text-white px-3 py-2 rounded hover:bg-blue-800"
        >
          Buscar
        </button>
        <Link
          to="/carrera/registrar"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Registrar
        </Link>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        {carreras.length === 0 ? (
          <p className="text-gray-600">No hay carreras registradas.</p>
        ) : (
          <table className="w-full border-collapse bg-white shadow rounded-lg min-w-[600px]">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Nombre</th>
                <th className="p-3 text-left">Sigla</th>
                <th className="p-3 text-left">Facultad</th>
                <th className="p-3 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {carreras.map(c => (
                <tr key={c.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{c.id}</td>
                  <td className="p-3">{c.nombre}</td>
                  <td className="p-3">{c.sigla}</td>
                  <td className="p-3">{c.facultad?.nombre || "—"}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => handleActualizar(c)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Actualizar
                    </button>
                    <button
                      onClick={() => handleDarBaja(c.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
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

export default CarreraVer;

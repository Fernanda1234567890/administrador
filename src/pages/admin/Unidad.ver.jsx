import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import unidadesData from "../../services/unidades";
import tipoUnidadesData from "../../services/tipoUnidades";

const UnidadVer = () => {
  const [unidades, setUnidades] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState("");
  const [showInactive, setShowInactive] = useState(false);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { getData, updateData, bajaData, restoreData } = unidadesData();
  const { getData: getTipos } = tipoUnidadesData();

  const fetchData = async () => {
    setLoading(true);
    try {
      const estado = showInactive ? "inactivo" : "activo";
      const resUnidades = await getData(page, limit, search, "", "", estado);
      setUnidades(resUnidades.data || []);
      setTotal(resUnidades.total || 0);

      const resTipos = await getTipos();
      setTipos(resTipos.data || []);
    } catch (error) {
      console.error("Error al cargar unidades:", error);
      setUnidades([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, search, showInactive]);

  const handleActualizar = async (unidad) => {
    const nuevoNombre = prompt("Nuevo nombre:", unidad.nombre);
    if (!nuevoNombre) return;

    try {
      await updateData(unidad.id, { nombre: nuevoNombre });
      fetchData();
    } catch (error) {
      alert("Error al actualizar unidad: " + error.message);
    }
  };

  const handleBaja = async (id) => {
    if (!window.confirm("¿Desea dar de baja esta unidad?")) return;
    try {
      await bajaData(id);
      fetchData();
    } catch (error) {
      alert("Error al dar de baja: " + error.message);
    }
  };

  const handleRestore = async (id) => {
    try {
      await restoreData(id);
      fetchData();
    } catch (error) {
      alert("Error al restaurar: " + error.message);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Unidades</h2>
        <button
          onClick={() => navigate("/unidad/registrar")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Registrar
        </button>
      </div>

      {/* Filtros activos/inactivos */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setShowInactive(false)}
          className={`px-4 py-2 rounded ${!showInactive ? "bg-blue-950 text-white" : "bg-gray-300"}`}
        >
          Activas
        </button>
        <button
          onClick={() => {
            const clave = prompt("Ingrese la clave para ver inactivos:");
            if (clave === "SISTEM4S") setShowInactive(true);
            else alert("Clave incorrecta");
          }}
          className={`px-4 py-2 rounded ${showInactive ? "bg-red-600 text-white" : "bg-gray-300"}`}
        >
          Inactivas
        </button>
      </div>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Buscar por Nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={fetchData} className="bg-blue-700 text-white px-3 py-1 rounded">
          Buscar
        </button>
      </div>

      <div className="max-w-5xl mx-auto">
        {loading ? (
          <p>Cargando unidades...</p>
        ) : unidades.length === 0 ? (
          <p>No hay unidades registradas.</p>
        ) : (
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Nombre</th>
                <th className="p-3 text-left">Tipo</th>
                <th className="p-3 text-left">Depende de</th>
                <th className="p-3 text-left">Cargos Intermedios</th>
                <th className="p-3 text-left">Responsables / Cargo Regular</th>
                <th className="p-3 text-left">Estado</th>
                <th className="p-3 text-left">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {unidades.map((unidad) => (
                <tr key={unidad.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{unidad.id}</td>
                  <td className="p-3">{unidad.nombre}</td>
                  <td className="p-3">{unidad.tipo_unidad?.descripcion || "Sin tipo"}</td>
                  <td className="p-3">{unidad.depende_de?.nombre || "Sin dependencia"}</td>
                  <td className="p-3">
                    {unidad.cargos_intermedios?.length > 0
                      ? unidad.cargos_intermedios.map(c => (
                          <span key={c.id}>{c.docente?.nombres} ({c.nombre}) </span>
                        ))
                      : "Sin cargos intermedios"}
                  </td>
                  <td className="p-3">
                    {unidad.administrativo_cargo_regular_unidades?.length > 0
                      ? unidad.administrativo_cargo_regular_unidades.map(rel => (
                          <span key={rel.id} className="block">
                            {rel.administrativo?.nombres} ({rel.cargoRegular?.nombre})
                          </span>
                        ))
                      : "Sin responsables"}
                  </td>
                  <td className="p-3">
                    {unidad.estado ? (
                      <span className="px-2 py-1 bg-green-200 text-green-800 rounded-lg text-sm">Activo</span>
                    ) : (
                      <span className="px-2 py-1 bg-red-200 text-red-800 rounded-lg text-sm">Inactivo</span>
                    )}
                  </td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => handleActualizar(unidad)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Actualizar
                    </button>
                    {unidad.estado ? (
                      <button onClick={() => handleBaja(unidad.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                        Dar de baja
                      </button>
                    ) : (
                      <button onClick={() => handleRestore(unidad.id)} className="bg-green-500 text-white px-3 py-1 rounded">
                        Restaurar
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        )}

        {/* Paginación */}
        <div className="flex justify-center mt-4 gap-2">
          <button disabled={page <= 1} onClick={() => setPage(page - 1)} className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50">
            Anterior
          </button>
          <span className="px-3 py-1">{page}</span>
          <button disabled={page >= Math.ceil(total / limit)} onClick={() => setPage(page + 1)} className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnidadVer;

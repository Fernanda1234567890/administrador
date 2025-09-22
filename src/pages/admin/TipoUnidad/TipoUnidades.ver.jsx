import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tipoUnidadesData from "../../../services/tipoUnidades";

const TipoUnidadesVer = () => {
  const [tipos, setTipos] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState("");
  const [showInactive, setShowInactive] = useState(false);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();
  const { getData, bajaData, updateData } = tipoUnidadesData();
  

  const fetchTipoUnidades = async () => {
    try {
      const estado = showInactive ? "inactivo" : "activo";
      const res = await getData(page, 10, search, estado);
      setTipos(res.data || []);
    } catch (error) {
      console.error("Error al obtener tipos de unidad:", error);
      setTipos([]);
    }
  };

  useEffect(() => {
    fetchTipoUnidades();
  }, [page, search, showInactive]);

   const handleRegistrar = async (newTipoU) => {
    try {
      await createData(newTipoU);
      fetchTipoUnidades(); 
    } catch (error) {
      console.error("Error al registrar tipo unidad:", error);
    }
  };

  const handleActualizar = async (tipo) => {
    const nuevotipo = prompt("Nuevo tipo:", tipo.tipo);
    const nuevaDescripcion = prompt("Nueva descripción:", tipo.descripcion);
    if (!nuevotipo || !nuevaDescripcion) return;


      await updateData(tipo.id, { tipo: nuevotipo, descripcion: nuevaDescripcion });
      fetchTipoUnidades();
  };

  const handleBaja = async (id) => {
    if (!window.confirm("¿Dar de baja este registro?")) return;
    try {
      await bajaData(id);
      fetchTipoUnidades();
    } catch (error) {
      console.error("Error al dar de baja:", error);
      alert("No se pudo dar de baja: " + error.message);
    }
  };

  return (
    <div className="p-6 sm:p-2 lg:p-12 min-h-screen dark:bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-4">Tipos de Unidades Registradas</h2></div>

        <div className="mb-4 flex justify-between items-center">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Buscar por Tipo..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 rounded"
            />
            <button
              onClick={fetchTipoUnidades}
              className="bg-blue-700 text-white px-3 py-1 rounded"
            >
              Buscar
            </button>
          </div>

          <button
            onClick={() => navigate("/tipo-unidades/registrar")}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            Registrar
          </button>
        </div>
      

      <div className="w-full overflow-x-auto">
        {tipos.length === 0 ? (
          <p>No hay registros</p>
        ) : (
          <table className="w-full border-collapse bg-white shadow rounded-lg">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Tipo</th>
                <th className="p-3 text-left">Descripción</th>
                <th className="p-3 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tipos.map((i) => (
                <tr key={i.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{i.id}</td>
                  <td className="p-3">{i.tipo}</td>
                  <td className="p-3">{i.descripcion}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => handleActualizar(i)}
                      className="bg-yellow-500 text-white px-2 rounded"
                    >
                      Actualizar
                    </button>
                    <button
                      onClick={() => handleBaja(i.id)}
                      className="bg-red-700 text-white px-2 rounded"
                    >
                      Dar de baja
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Paginación simple */}
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
    </div>
  );
};

export default TipoUnidadesVer;

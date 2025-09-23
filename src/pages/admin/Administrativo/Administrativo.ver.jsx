import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import administrativosData from "../../../services/administrativos";
import personasData from "../../../services/personas";

const AdministrativoVer = () => {
  const [administrativos, setAdministrativos] = useState([]);
  //const [personas, setPersonas] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState("");
  const [showInactive, setShowInactive] = useState(false);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();
  const { getData, updateData, deleteData, restoreData } = administrativosData();
  const { getData: getPerson } = personasData();

  // ✅ Inicializar datos
  const fetchAdministrativos = async () => {
    try {
      const estado = showInactive ? "inactivo" : "activo";
      const res = await getData(page, limit, { search, estado });
      setAdministrativos(res.data || []);
      setTotal(res.meta?.total || 0);

      // const people = await getPerson();
      // setPersonas(people.data || []);
    } catch (error) {
      console.error("Error al obtener administrativos:", error);
      setAdministrativos([]);
    }
  };

  useEffect(() => {
    fetchAdministrativos();
  }, [page, search, showInactive]);

  // ✅ Obtener nombre completo de la persona
  const getNombrePersona = (id) => {
    const persona = personas.find((p) => p.id === id);
    return persona ? `${persona.nombres} ${persona.apellidos}` : "";
  };

  // ✅ Actualizar administrativo
  const handleActualizar = async (adm) => {
    const nuevoIdPersona = prompt("Nuevo ID Persona:", adm.id_persona);
    if (!nuevoIdPersona) return;

    try {
      await updateData(adm.id, { id_persona: Number(nuevoIdPersona) });
      fetchAdministrativos();
    } catch (error) {
      console.error("Error al actualizar administrativo:", error);
      alert("No se pudo actualizar: " + error.message);
    }
  };

  // ✅ Dar de baja
  const handleEliminar = async (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar este administrativo?")) return;

    try {
      await deleteData(id);
      fetchAdministrativos();
    } catch (error) {
      console.error("Error al eliminar administrativo:", error);
      alert("No se pudo eliminar: " + error.message);
    }
  };

  // ✅ Restaurar administrativo
  const handleRestaurar = async (id) => {
    try {
      await restoreData(id);
      fetchAdministrativos();
    } catch (error) {
      console.error("Error al restaurar administrativo:", error);
      alert("No se pudo restaurar: " + error.message);
    }
  };

  return (
    <div className="p-6 sm:p-2 lg:p-12 min-h-screen dark:bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Lista de Administrativos</h2>
        <button
          onClick={() => navigate("/administrativos/registrar")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Registrar
        </button>
      </div>

      {/* Búsqueda */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Buscar por ID Persona..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={() => fetchAdministrativos()}
          className="bg-blue-700 text-white px-3 py-1 rounded"
        >
          Buscar
        </button>
      </div>

     
      <div className="w-full overflow-x-auto">
        {administrativos.length === 0 ? (
          <p className="text-gray-600">No hay administrativos registrados.</p>
        ) : (
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Persona</th>
                <th className="p-3 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {administrativos.map((adm) => (
                <tr key={adm.id} className="border-b hover:bg-gray-100 transition">
                  <td className="p-3">{adm.id}</td>
                  <td className="p-3">
                    {adm.persona ? `${adm.persona.nombres} ${adm.persona.apellidos}` : "Sin asignar"}
                  </td>
                  <td className="p-3 flex gap-2">
                      <button
                        onClick={() => navigate(`/administrativo/asignacion/${adm.id}`)}
                        className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
                      >
                         Asignar
                      </button>
                    <button
                      onClick={() => handleActualizar(adm)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Actualizar
                    </button>
                    {!adm.estado ? (
                      <button
                        onClick={() => handleRestaurar(adm.id)}
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                      >
                        Restaurar
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEliminar(adm.id)}
                          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                          Dar de baja
                        </button>
  
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

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
    </div>
  );
};

export default AdministrativoVer;


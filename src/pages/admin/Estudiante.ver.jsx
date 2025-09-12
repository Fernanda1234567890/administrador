import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import estudiantesData from "../../services/estudiantes";
import personasData from "../../services/personas";

const EstudianteVer = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [personas, setPersonas] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [showInactive, setShowInactive] = useState(false);

  const navigate = useNavigate();
  const { getData, remove, restore, update } = estudiantesData();
  const { getData: getPerson } = personasData();

  // ✅ Inicializar datos
  const fetchEstudiantes = async () => {
    try {
      const estado = showInactive ? "inactivo" : "activo";
      const res = await getData(page, limit, { search, estado });
      setEstudiantes(res.data || []);
      setTotal(res.meta?.total || 0);

      const people = await getPerson();
      setPersonas(people.data || []);
    } catch (error) {
      console.error("Error al obtener estudiantes:", error);
      setEstudiantes([]);
    }
  };

  useEffect(() => {
    fetchEstudiantes();
  }, [page, search, showInactive]);

  // ✅ Obtener nombre completo de la persona
  const getNombrePersona = (id) => {
    const persona = personas.find((p) => p.id === id);
    return persona ? `${persona.nombres} ${persona.apellidos}` : "";
  };

  // ✅ Actualizar estudiante
  const handleActualizar = async (est) => {
    const nuevoRu = prompt("Nuevo RU:", est.ru);
    const nuevaCarrera = prompt("Nueva carrera:", est.carrera);
    if (!nuevoRu || !nuevaCarrera) return;

    try {
      await update(est.id, { ru: nuevoRu, carrera: nuevaCarrera });
      fetchEstudiantes();
    } catch (error) {
      console.error("Error al actualizar estudiante:", error);
      alert("No se pudo actualizar: " + error.message);
    }
  };

  // ✅ Dar de baja (soft delete)
  const handleEliminar = async (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar este estudiante?")) return;

    try {
      await remove(id);
      fetchEstudiantes();
    } catch (error) {
      console.error("Error al eliminar estudiante:", error);
      alert("No se pudo eliminar: " + error.message);
    }
  };

  // ✅ Restaurar estudiante
  const handleRestaurar = async (id) => {
    try {
      await restore(id);
      fetchEstudiantes();
    } catch (error) {
      console.error("Error al restaurar estudiante:", error);
      alert("No se pudo restaurar: " + error.message);
    }
  };

  return (
    <div className="p-6 sm:p-2 lg:p-12 min-h-screen dark:bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-left">
          Estudiantes Registrados
        </h2>
        <button
          onClick={() => navigate("/estudiantes/registrar")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Registrar
        </button>
      </div>

      {/* Botones activos/inactivos */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setShowInactive(false)}
          className={`px-4 py-2 rounded ${!showInactive ? "bg-blue-950 text-white" : "bg-gray-300"}`}
        >
          Activos
        </button>
        <button
          onClick={() => {
            const clave = prompt("Ingrese la clave para ver inactivos:");
            if (clave === "SISTEM4S") setShowInactive(true);
            else alert("Clave incorrecta");
          }}
          className={`px-4 py-2 rounded ${showInactive ? "bg-red-600 text-white" : "bg-gray-300"}`}
        >
          Inactivos
        </button>
      </div>

      {/* Búsqueda */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Buscar por RU o Carrera..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={() => fetchEstudiantes()}
          className="bg-blue-700 text-white px-3 py-1 rounded"
        >
          Buscar
        </button>
      </div>

      <div className="max-w-3xl mx-auto">
        {estudiantes.length === 0 ? (
          <p className="text-gray-600">No hay estudiantes registrados.</p>
        ) : (
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">RU</th>
                <th className="p-3 text-left">Carrera</th>
                <th className="p-3 text-left">Persona</th>
                <th className="p-3 text-left">Estado</th>
                <th className="p-3 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {estudiantes.map((est) => (
                <tr key={est.id} className="border-b hover:bg-gray-100 transition">
                  <td className="p-3">{est.id}</td>
                  <td className="p-3">{est.ru}</td>
                  <td className="p-3">{est.carrera}</td>
                  <td className="p-3">{getNombrePersona(est.id_persona)}</td>
                  <td className="p-3">{est.estado}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => handleActualizar(est)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Actualizar
                    </button>

                    {!est.estado ? (
                      <button
                        onClick={() => handleRestaurar(est.id)}
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                      >
                        Restaurar
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEliminar(est.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
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

export default EstudianteVer;
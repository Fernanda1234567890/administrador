import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import organizacionData from "../../services/organizacion";

const OrganizacionVer = () => {
  const [organizaciones, setOrganizaciones] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState("");
  const [showInactive, setShowInactive] = useState(false);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  const { getData, createData, updateData, bajaData } = organizacionData();

  const fetchOrganizaciones = async () => {
    try {
      setLoading(true);
      const estado = showInactive ? "inactivo" : "activo";
      const res = await getData(page, limit, search, estado);
      setOrganizaciones(res.data || []);
      setTotal(res.meta?.total || 0);
    } catch (error) {
      console.error("Error al obtener organizaciones:", error);
      alert(error.message);
      setOrganizaciones([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrganizaciones();
  }, [page, search, showInactive]);

  const handleActualizar = async (org) => {
    const nuevoTipo = prompt("Nuevo tipo:", org.tipo);
    const nuevaDescripcion = prompt("Nueva descripción:", org.descripcion);
    
    if (!nuevoTipo || !nuevaDescripcion) return;

    try {
      await updateData(org.id, { 
        tipo: nuevoTipo, 
        descripcion: nuevaDescripcion 
      });
      fetchOrganizaciones();
      alert("Organización actualizada correctamente");
    } catch (error) {
      alert("Error al actualizar: " + error.message);
    }
  };

  const handleBaja = async (id) => {
    if (!window.confirm("¿Seguro que desea dar de baja esta organización?")) return;

    try {
      await bajaData(id);
      fetchOrganizaciones();
      alert("Organización dada de baja correctamente");
    } catch (error) {
      alert("Error al dar de baja: " + error.message);
    }
  };

  if (loading) {
    return (
      <div className="p-6 min-h-screen bg-white flex items-center justify-center">
        <div className="text-lg">Cargando organizaciones...</div>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Organizaciones registradas</h2>
        <button
          onClick={() => navigate("/organizacion/registrar")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Registrar
        </button>
      </div>

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

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Buscar por Tipo o Descripción..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <button
          onClick={fetchOrganizaciones}
          className="bg-blue-700 text-white px-4 py-2 rounded"
        >
          Buscar
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        {organizaciones.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600 text-lg">
              {showInactive ? "No hay organizaciones inactivas" : "No hay organizaciones registradas"}
            </p>
          </div>
        ) : (
          <>
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-950 text-white">
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Tipo</th>
                  <th className="p-3 text-left">Descripción</th>
                  <th className="p-3 text-left">Estado</th>
                  <th className="p-3 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {organizaciones.map((org) => (
                  <tr key={org.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-3">{org.id}</td>
                    <td className="p-3 font-medium">{org.tipo}</td>
                    <td className="p-3">{org.descripcion}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-xs ${
                        org.estado ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}>
                        {org.estado ? "Activo" : "Inactivo"}
                      </span>
                    </td>
                    <td className="p-3 flex gap-2">
                      <button
                        onClick={() => handleActualizar(org)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
                      >
                        Editar
                      </button>
                      {org.estado && (
                        <button
                          onClick={() => handleBaja(org.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                        >
                          Dar de baja
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-center mt-6 gap-2">
              <button
                disabled={page <= 1}
                onClick={() => setPage(page - 1)}
                className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
              >
                Anterior
              </button>
              <span className="px-4 py-2 bg-gray-100 rounded">
                Página {page} de {Math.ceil(total / limit) || 1}
              </span>
              <button
                disabled={page >= Math.ceil(total / limit)}
                onClick={() => setPage(page + 1)}
                className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
              >
                Siguiente
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrganizacionVer;
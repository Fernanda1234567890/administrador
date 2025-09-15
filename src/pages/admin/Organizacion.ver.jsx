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
  const navigate = useNavigate();
  const { getData, updateData, bajaData } = organizacionData();

  // ✅ Función para traer organizaciones activas
  const fetchOrganizaciones = async () => {
    try {
      const estado = showInactive ? "inactivo" : "activo";
      const res = await getData(page, 10, search, estado);
      setOrganizaciones(res.data || []);
    } catch (error) {
      console.error("Error al obtener organizaciones:", error);
      setOrganizaciones([]);
    }
  };

  // ✅ Se ejecuta al montar el componente
  useEffect(() => {
    fetchOrganizaciones();
  }, [page, search, showInactive]);

  // ✅ Registrar nueva organización
  const handleRegistrar = async (newOrg) => {
    try {
      await createData(newOrg);
      fetchOrganizaciones(); // refrescar lista
    } catch (error) {
      console.error("Error al registrar organización:", error);
    }
  };

  // ✅ Actualizar organización
  const handleActualizar = async (org) => {
    const nuevoTipo = prompt("Nuevo tipo:", org.tipo);
    const nuevaDescripcion = prompt("Nueva descripción:", org.descripcion);
    if (!nuevoTipo || !nuevaDescripcion) return;

    await updateData(org.id, { tipo: nuevoTipo, descripcion: nuevaDescripcion });
    fetchOrganizaciones();
  };


  // ✅ Dar de baja (soft delete)
  const handleBaja = async (id) => {
    if (!window.confirm("¿Seguro que desea dar de baja esta organización?")) return;

      try {
      await bajaData(id); // ✅ ahora sí llama a la función correcta
      fetchOrganizaciones(); // refresca la lista
    } catch (error) {
      console.error("Error al dar de baja:", error);
      alert("No se pudo dar de baja: " + error.message);
    }
  };


  return (
    <div className="p-6 sm:p-2 lg:p-12 min-h-screen dark:bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-4">Organizaciones registradas</h2>
        <button
          onClick={() => navigate("/organizacion/registrar")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Registrar
        </button>
      </div>

           {/* ✅ Aquí van los botones para filtrar activas/inactivas */}
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
          placeholder="Buscar por Tipo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={() => fetchOrganizaciones()}
          className="bg-blue-700 text-white px-3 py-1 rounded"
        >
          Buscar
        </button>
      </div>

      <div className="max-w-3xl mx-auto">
        {organizaciones.length === 0 ? (
          <p className="text-gray-600">No hay organizaciones registradas.</p>
        ) : (
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Tipo</th>
                <th className="p-3 text-left">Descripción</th>
                <th className="p-3 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {organizaciones.map((org) => (
                <tr key={org.id} className="border-b hover:bg-gray-100 transition">
                  <td className="p-3">{org.id}</td>
                  <td className="p-3">{org.tipo}</td>
                  <td className="p-3">{org.descripcion}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => handleActualizar(org)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Actualizar
                    </button>
                    <button
                      onClick={() => handleBaja(org.id)}
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

export default OrganizacionVer;

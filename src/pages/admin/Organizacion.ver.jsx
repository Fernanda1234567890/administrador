import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import organizacionData from "../../services/organizacion"; 
//import OrganizacionRegistro from "./Organizacion.Registro";

const OrganizacionVer = () => {
  const [organizaciones, setOrganizaciones] = useState([]);
  const navigate = useNavigate();
  const { getData,createData, updateData, deleteData} = organizacionData();
  const [showForm, setShowForm] = useState(false);


   // ✅ Inicializar datos desde backend
  const init = async () => {
    try {
      const resOrg = await getData(); // tu service ya hace fetch
      setOrganizaciones(resOrg.data); // aseguramos que sea array
    } catch (error) {
      console.error("Error al obtener organizaciones:", error);
      setOrganizaciones([]); // fallback
    }
  };

  useEffect(() => {
    const fetchOrganizaciones = async () => {
      const res = await fetch("http://localhost:3000/organizacion");
      const json = await res.json();
      setOrganizaciones(json.data); // ✅ aquí guardamos SOLO el array
    };
    fetchOrganizaciones();
  }, []);

// Registrar nueva organización
  const handleRegistrar = async (newOrg) => {
    try {
      await createData(newOrg);
      init(); // recargar lista
    } catch (error) {
      console.error("Error al registrar organización:", error);
    }
  };

// Actualizar organización
  const handleActualizar = async (org) => {
    const nuevoTipo = prompt("Nuevo tipo:", org.tipo);
    const nuevaDescripcion = prompt("Nueva descripción:", org.descripcion);

    if (nuevoTipo && nuevaDescripcion) {
      try {
        await updateData(org.id, {
          ...org,
          tipo: nuevoTipo,
          descripcion: nuevaDescripcion,
        });
        init(); // recargar lista
      } catch (error) {
        console.error("Error al actualizar organización:", error);
      }
    }
  };

   return (
    <div className="p-6 sm:p-2 lg:p-12 min-h-screen dark:bg-white">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold mb-4">Organizaciones registradas</h2>
       <button
          onClick={() => navigate("/organizacion/registro")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Registrar
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
                  <th className="p-3 text-left">Estado</th>
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
       </div>
     </div>
  );
};
export default OrganizacionVer;
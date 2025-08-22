import React, { useEffect, useState } from "react";
import OrganizacionRegistro from "./Organizacion.registro.jsx";

const OrganizacionVer = () => {
  const [organizaciones, setOrganizaciones] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("organizaciones")) || [];
    setOrganizaciones(data);
  }, []);

  // const handleEliminar = (id) => {
  //   if (!window.confirm("¿Seguro que quieres eliminar esta organización?")) return;

  //   const updated = organizaciones.filter((org) => org.id !== id);
  //   setOrganizaciones(updated);
  //   localStorage.setItem("organizaciones", JSON.stringify(updated));
  // };

  const handleActualizar = (org) => {
    const nuevoTipo = prompt("Nuevo tipo:", org.tipo);
    const nuevaDescripcion = prompt("Nueva descripción:", org.descripcion);

    if (nuevoTipo && nuevaDescripcion) {
      const updated = organizaciones.map((o) =>
        o.id === org.id ? { ...o, tipo: nuevoTipo, descripcion: nuevaDescripcion } : o
      );
      setOrganizaciones(updated);
      localStorage.setItem("organizaciones", JSON.stringify(updated));
    }
  };

  const handleRegistrar = (newOrg) => {
    setOrganizaciones((prev) => {
    const updated = [...prev, newOrg];
    localStorage.setItem("organizaciones", JSON.stringify(updated));
    return updated;
  });
};
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-left">
        Organizaciones registradas
      </h2>

      <div className="mb-4">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {showForm ? "Cerrar formulario" : "Registrar organización"}
        </button>
      </div>

      {showForm && (
        <OrganizacionRegistro
          onRegistrar={handleRegistrar}
          onClose={() => setShowForm(false)}
        />
      )}

      <div className="p-6 sm:p-2 lg:p-12 min-h-screen dark:bg-white">
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
                      {/* <button
                        onClick={() => handleEliminar(org.id)}
                        className="bg-red-700 text-white px-2 py-1 rounded hover:bg-red-800"
                      >
                        Eliminar
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default OrganizacionVer;

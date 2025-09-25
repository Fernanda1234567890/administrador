import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import personasData from "@admin/services/personas"; // Servicio de conexión con el back

const PersonaVer = () => {
  const [personas, setPersonas] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [showInactive, setShowInactive] = useState(false);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState(""); // 🔹 Un solo buscador
  const navigate = useNavigate();
  const { getData, updateData, bajaData, createData } = personasData();

  const fetchPersonas = async () => {
    try {
      const estado = showInactive ? "inactivo" : "activo";
      const res = await getData(page, limit, search, estado); 
      // 👉 aquí el back debe recibir "search" y filtrar por nombres, apellidos o ci
      if (Array.isArray(res)) {
        setPersonas(res);
        setTotal(res.length);
      } else {
        setPersonas(res.data || []);
        setTotal(res.total || 0);
      }
    } catch (error) {
      console.error("Error al obtener personas:", error);
      setPersonas([]);
    }
  };

  useEffect(() => {
    fetchPersonas();
  }, [page, showInactive]);

  // ✅ Registrar nueva persona
  const handleRegistrar = async (newPer) => {
    try {
      await createData(newPer);
      fetchPersonas();
    } catch (error) {
      console.error("Error al registrar persona:", error);
    }
  };

  // 🔹 Actualizar persona
  const handleActualizar = async (persona) => {
    const nuevosNombres = prompt("Nombres:", persona.nombres);
    if (nuevosNombres === null) return;

    const nuevosApellidos = prompt("Apellidos:", persona.apellidos);
    if (nuevosApellidos === null) return;

    const nuevoCi = prompt("CI:", persona.ci);
    if (nuevoCi === null) return;

    const nuevoEmail = prompt("Email:", persona.email);
    if (nuevoEmail === null) return;

    const nuevoTelefono = prompt("Teléfono:", persona.telefono);
    if (nuevoTelefono === null) return;

    const nuevaDireccion = prompt("Dirección:", persona.direccion);
    if (nuevaDireccion === null) return;

    const nuevaFecha = prompt("Fecha de Nacimiento:", persona.fecha_nac);
    if (nuevaFecha === null) return;

    const nuevaImg = prompt("URL de Imagen:", persona.img);
    if (nuevaImg === null) return;

    const personaActualizada = {
      nombres: nuevosNombres.trim(),
      apellidos: nuevosApellidos.trim(),
      ci: nuevoCi.trim(),
      email: nuevoEmail.trim(),
      telefono: nuevoTelefono.trim(),
      direccion: nuevaDireccion.trim(),
      fecha_nac: nuevaFecha.trim(),
      img: nuevaImg.trim(),
    };

    await updateData(persona.id, personaActualizada);
    fetchPersonas();
  };

  // 🔹 Dar de baja persona
  const handleBaja = async (id) => {
    if (!window.confirm("¿Desea dar de baja esta persona?")) return;
    try {
      await bajaData(id);
      fetchPersonas();
      alert("Persona dada de baja correctamente");
    } catch (error) {
      console.error("Error al dar de baja persona:", error);
      alert("No se pudo dar de baja la persona: " + error.message);
    }
  };

  return (
    <div className="p-6 sm:p-2 lg:p-12 min-h-screen dark:bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-4">Personas Registradas</h2> </div>

      <div className="mb-4 flex justify-between items-center">
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Buscar por nombre, apellido o CI..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-80"
        />
        <button
          onClick={fetchPersonas}
          className="bg-blue-700 text-white px-3 py-1 rounded"
        >
          Buscar
        </button>
      </div>

      <button
          onClick={() => navigate("/admin/persona/registrar")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Registrar Nuevo
        </button>
        </div>

      {/* 🔹 Tabla de personas */}
      <div className="w-full overflow-x-auto">
        {personas.length === 0 ? (
          <p className="text-gray-600">No hay personas registradas.</p>
        ) : (
          <>
            <table className="w-full min-w-[1000px] border-collapse bg-white shadow rounded-lg text-sm">
              <thead>
                <tr className="bg-blue-950 text-white">
                  <th className="p-2 text-left">ID</th>
                  <th className="p-2 text-left">Nombres</th>
                  <th className="p-2 text-left">Apellidos</th>
                  <th className="p-2 text-left">CI</th>
                  <th className="p-2 text-left">Email</th>
                  <th className="p-2 text-left">Teléfono</th>
                  <th className="p-2 text-left">Dirección</th>
                  <th className="p-2 text-left">Fecha Nac.</th>
                  <th className="p-2 text-left w-20">Imagen</th>
                  <th className="p-2 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {personas.map((p) => (
                  <tr key={p.id} className="border-b hover:bg-gray-100">
                    <td className="p-2">{p.id}</td>
                    <td className="p-2 text-left">{p.nombres}</td>
                    <td className="p-2 text-left">{p.apellidos}</td>
                    <td className="p-2">{p.ci}</td>
                    <td className="p-2 text-left">{p.email}</td>
                    <td className="p-2">{p.telefono}</td>
                    <td className="p-2 text-left">{p.direccion}</td>
                    <td className="p-2">{new Date(p.fecha_nac).toLocaleDateString()}</td>
                    <td className="p-2">
                      {p.img ? (
                        <img
                          src={`http://localhost:3000/${p.img}`} // 👈 agregamos el host y puerto
                          alt={p.nombres}
                          className="w-16 h-16 object-cover rounded cursor-pointer"
                          onClick={() => window.open(`http://localhost:3000/${p.img}`, '_blank')}
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                          Sin imagen
                        </div>
                      )}
                    </td>


                    <td className="p-2 flex gap-2">
                      <button
                        onClick={() => handleActualizar(p)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-xs"
                      >
                        Actualizar
                      </button>
                      <button
                        onClick={() => handleBaja(p.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs"
                      >
                        Dar de baja
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 🔹 Paginación */}
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
          </>
        )}
      </div>
    </div>
  );
};

export default PersonaVer;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import personasData from "../../services/personas";


const PersonaVer = () => {
  const [personas, setPersonas] = useState([]);
  const navigate = useNavigate();
  const { getData } = personasData();

  const fetchPersonas = async () => {
    try {
      const res = await getData();
      setPersonas(res.data || []);
    } catch (error) {
      console.error("Error al obtener personas:", error);
      setPersonas([]);
    }
  };

  useEffect(() => {
    fetchPersonas();
  }, []);

  const handleActualizar = (persona) => {
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

    const updated = personas.map((p) =>
      p.id === persona.id
        ? {
            ...p,
            nombres: nuevosNombres.trim(),
            apellidos: nuevosApellidos.trim(),
            ci: nuevoCi.trim(),
            email: nuevoEmail.trim(),
            telefono: nuevoTelefono.trim(),
            direccion: nuevaDireccion.trim(),
            fecha_nac: nuevaFecha.trim(),
            img: nuevaImg.trim(),
          }
        : p
    );

    setPersonas(updated);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
  };

  const handleBaja = async (id) => {
    if (!window.confirm("¿Desea dar de baja esta persona?")) return;
    try {
      await bajaData(id);
      fetchPersonas();
    } catch (error) {
      console.error("Error al dar de baja persona:", error);
    }
  };

  return (
    <div className="p-6 sm:p-2 lg:p-12 min-h-screen dark:bg-white">
      <div className="flex justify-between items-center mb-4">
       <h2 className="text-2xl font-bold mb-4">Personas Registradas</h2>
        <button
          onClick={() => navigate("/persona/registrar")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Registrar
        </button>
      </div>
      <div className="max-w-3xl mx-auto">
      {personas.length === 0 ? (
        <p>No hay personas registradas.</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-blue-950 text-white">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Nombres</th>
              <th className="p-3 text-left">Apellidos</th>
              <th className="p-3 text-left">CI</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Teléfono</th>
              <th className="p-3 text-left">Dirección</th>
              <th className="p-3 text-left">Fecha Nac.</th>
              <th className="p-3 text-left">Imagen</th>
              <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {personas.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{p.id}</td>
                <td className="p-3">{p.nombres}</td>
                <td className="p-3">{p.apellidos}</td>
                <td className="p-3">{p.ci}</td>
                <td className="p-3">{p.email}</td>
                <td className="p-3">{p.telefono}</td>
                <td className="p-3">{p.direccion}</td>
                <td className="p-3">{p.fecha_nac}</td>
                <td className="p-3">
                  {p.img && (
                    <img
                      src={p.img}
                      alt={p.nombres}
                      className="w-12 h-12 object-cover rounded"
                    />
                  )}
                </td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleActualizar(p)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  >
                    Actualizar
                  </button>
                  <button
                      onClick={() => handleBaja(p.id)}
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
    </div>
    </div>
  );
};

export default PersonaVer;

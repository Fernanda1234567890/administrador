import React, { useEffect, useState } from "react";
import administrativosData from "../../services/administrativos";
import personasData from "../../services/personas";
//import { getAdministrativos, deleteAdministrativo } from "../services/administrativoService";

const AdministrativoVer = () => {
  const [administrativos, setAdministrativos] = useState([]);
  const [personas, setPersonas] = useState([]);
  const { getData } = administrativosData();
  const { getData:getPErson } = personasData();
  

  const init = async () => {
    const respuesta = await getData()
    const people = await getPErson()
    setAdministrativos(respuesta.data)
    setPersonas(people.data)
  }

  useEffect(() => {
    init()
  }, []);
 


  const getNombrePersona = (id) => {
    const persona = personas.find((p) => p.id === id);
    return persona ? `${persona.nombres} ${persona.apellidos}` : "";
  };

  const handleEliminar = (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar este administrativo?")) return;

    const updated = administrativos.filter((adm) => adm.id !== id);
    setAdministrativos(updated);
    localStorage.setItem("administrativos", JSON.stringify(updated));
  };

  const handleActualizar = (adm) => {
    const nuevoIdPersona = prompt("Nuevo ID Persona:", adm.id_persona);

    if (nuevoIdPersona) {
      const updated = administrativos.map((a) =>
        a.id === adm.id ? { ...a, id_persona: nuevoIdPersona } : a
      );
      setAdministrativos(updated);
      localStorage.setItem("administrativos", JSON.stringify(updated));
    }
  };

  return (
    <div className="p-6 min-h-screen dark:bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Lista de Administrativos</h2>
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
              <tr key={adm.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{adm.id}</td>
                <td className="p-3">{getNombrePersona(adm.id_persona)}</td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleActualizar(adm)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  >
                    Actualizar
                  </button>
                  <button
                    onClick={() => handleEliminar(adm.id)}
                    className="bg-red-700 text-white px-2 py-1 rounded hover:bg-red-800"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdministrativoVer;
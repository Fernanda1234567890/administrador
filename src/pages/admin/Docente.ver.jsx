// DocenteVer.jsx
import React, { useEffect, useState } from "react";

const DocenteVer = () => {
  const [docentes, setDocentes] = useState([]);
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    const dataDoc = JSON.parse(localStorage.getItem("docentes")) || [];
    const dataPer = JSON.parse(localStorage.getItem("personas")) || [];
    setDocentes(dataDoc);
    setPersonas(dataPer);
  }, []);

  const getNombrePersona = (id) => {
    const persona = personas.find((p) => p.id === id);
    return persona ? `${persona.nombres} ${persona.apellidos}` : "";
  };

  const handleEliminar = (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar este docente?")) return;

    const updated = docentes.filter((doc) => doc.id !== id);
    setDocentes(updated);
    localStorage.setItem("docentes", JSON.stringify(updated));
  };

  const handleActualizar = (doc) => {
    const nuevaCarrera = prompt("Nueva carrera:", doc.carrera);

    if (nuevaCarrera) {
      const updated = docentes.map((d) =>
        d.id === doc.id ? { ...d, carrera: nuevaCarrera } : d
      );
      setDocentes(updated);
      localStorage.setItem("docentes", JSON.stringify(updated));
    }
  };

  return (
    <div className="p-6 min-h-screen dark:bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Lista de Docentes</h2>

      {docentes.length === 0 ? (
        <p className="text-gray-600">No hay docentes registrados.</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-blue-950 text-white">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Carrera</th>
              <th className="p-3 text-left">Persona</th>
              <th className="p-3 text-left">Estado</th>
              <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {docentes.map((doc) => (
              <tr key={doc.id} className="border-b hover:bg-gray-100 transition">
                <td className="p-3">{doc.id}</td>
                <td className="p-3">{doc.carrera}</td>
                <td className="p-3">{getNombrePersona(doc.id_persona)}</td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleActualizar(doc)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  >
                    Actualizar
                  </button>
                  {/* <button
                    onClick={() => handleEliminar(doc.id)}
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
  );
};

export default DocenteVer;

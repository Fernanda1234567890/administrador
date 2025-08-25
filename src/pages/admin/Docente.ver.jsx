// DocenteVer.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import estudiantesData from "../../services/estudiantes";
import personasData from "../../services/personas";

const DocenteVer = () => {
  const [docentes, setDocentes] = useState([]);
  const [personas, setPersonas] = useState([]);
  const { getData } = estudiantesData();
  const { getPerson } = personasData();

  const init = async () => {
    const respuesta = await getData()
    const people = await getData()
    setDocentes(respuesta.data)
    setPersonas(people.data)
  }

  useEffect(() =>{
    init()
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
    <div className="p-6 sm:p-2 lg:p-12 min-h-screen dark:bg-white">
      <div className="flex justify-between items-center mb-4">
       <h2 className="text-2xl font-bold mb-4 text-gray-800">Lista de Docentes</h2>
        <button
          onClick={() => navigate("/docente/registro")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Registrar
        </button>
      </div>
      <div className="max-w-3xl mx-auto">
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

export default DocenteVer;

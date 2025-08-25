import React, { useEffect, useState } from "react";
import estudiantesData from "../../services/estudiantes";
import personasData from "../../services/personas";
import { useNavigate } from "react-router-dom";

const EstudianteVer = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [personas, setPersonas] = useState([]);
  const { getData } = estudiantesData();
  const { getDara:getPerson } = personasData();

  const init = async () => {
    const respuesta = await getData()
    const people = await getPerson()
    setEstudiantes(respuesta.data)
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
    if (!window.confirm("¿Seguro que quieres eliminar este estudiante?")) return;

    const updated = estudiantes.filter((est) => est.id !== id);
    setEstudiantes(updated);
    localStorage.setItem("estudiantes", JSON.stringify(updated));
  };

  const handleActualizar = (est) => {
    const nuevoRu = prompt("Nuevo RU:", est.ru);
    const nuevaCarrera = prompt("Nueva carrera:", est.carrera);

    if (nuevoRu && nuevaCarrera) {
      const updated = estudiantes.map((e) =>
        e.id === est.id ? { ...e, ru: nuevoRu, carrera: nuevaCarrera } : e
      );
      setEstudiantes(updated);
      localStorage.setItem("estudiantes", JSON.stringify(updated));
    }
  };

  return (
   <div className="p-6 sm:p-2 lg:p-12 min-h-screen dark:bg-white">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-left">
        Estudiantes Registrados
      </h2>
      <button
          onClick={() => navigate("/estudiantes/registro")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Registrar
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
                  <tr
                    key={est.id}
                    className="border-b hover:bg-gray-100 transition"
                  >
                    <td className="p-3">{est.id}</td>
                    <td className="p-3">{est.ru}</td>
                    <td className="p-3">{est.carrera}</td>
                    <td className="p-3">{getNombrePersona(est.id_persona)}</td>
                    <td className="p-3 flex gap-2">
                      <button
                        onClick={() => handleActualizar(est)}
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

export default EstudianteVer;

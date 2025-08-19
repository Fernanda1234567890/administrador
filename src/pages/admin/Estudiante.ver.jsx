// EstudianteVer.jsx
import React, { useEffect, useState } from "react";

const EstudianteVer = () => {
  const [items, setItems] = useState([]);
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("estudiantes")) || []);
    setPersonas(JSON.parse(localStorage.getItem("personas")) || []);
  }, []);

  const getNombrePersona = (id) => personas.find(p => p.id === id)?.nombres + " " + personas.find(p => p.id === id)?.apellidos || "";

  const handleEliminar = (id) => {
    if(!window.confirm("Eliminar este estudiante?")) return;
    const updated = items.filter(i => i.id !== id);
    setItems(updated);
    localStorage.setItem("estudiantes", JSON.stringify(updated));
  };

  const handleActualizar = (i) => {
    const ru = prompt("Nuevo RU:", i.ru);
    const carrera = prompt("Nueva carrera:", i.carrera);
    if(ru && carrera){
      const updated = items.map(it => it.id === i.id ? {...it, ru, carrera} : it);
      setItems(updated);
      localStorage.setItem("estudiantes", JSON.stringify(updated));
    }
  };

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Estudiantes Registrados</h2>
      {items.length === 0 ? <p>No hay registros</p> :
      <table className="w-full border-collapse bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th>ID</th><th>RU</th><th>Carrera</th><th>Persona</th> 
            <th className="p-3 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map(i => (
            <tr key={i.id} className="border-b hover:bg-gray-100">
              <td>{i.id}</td>
              <td>{i.ru}</td>
              <td>{i.carrera}</td>
              <td>{getNombrePersona(i.id_persona)}</td>
                    <td className="p-3 flex gap-2">
                      <button
                        onClick={() => handleActualizar(org)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                      >
                        Actualizar
                      </button>
                      <button
                        onClick={() => handleEliminar(org.id)}
                        className="bg-red-700 text-white px-2 py-1 rounded hover:bg-red-800"
                      >
                        Eliminar
                      </button>
                    </td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  );
};

export default EstudianteVer;

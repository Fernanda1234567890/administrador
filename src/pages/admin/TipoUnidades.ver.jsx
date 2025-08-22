import React, { useEffect, useState } from "react";

const TipoUnidadesVer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("tipo-unidades")) || []);
  }, []);

  const handleEliminar = (id) => {
    if (!window.confirm("Eliminar este registro?")) return;
    const updated = items.filter((i) => i.id !== id);
    setItems(updated);
    localStorage.setItem("tipo-unidades", JSON.stringify(updated));
  };

  const handleActualizar = (item) => {
    const tipo = prompt("Nuevo tipo:", item.tipo);
    const descripcion = prompt("Nueva descripción:", item.descripcion);
    if (tipo && descripcion) {
      const updated = items.map((i) => (i.id === item.id ? { ...i, tipo, descripcion } : i));
      setItems(updated);
      localStorage.setItem("tipo-unidades", JSON.stringify(updated));
    }
  };

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Tipos de Unidades Registradas</h2>
      {items.length === 0 ? (
        <p>No hay registros</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-blue-950 text-white">
              <th>ID</th><th>Tipo</th><th>Descripción</th>
              <th className="p-3 text-left">Estado</th>
               <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.id} className="border-b hover:bg-gray-100">
                <td>{i.id}</td>
                <td>{i.tipo}</td>
                <td>{i.descripcion}</td>
                <td className="flex gap-2">
                  <button className="bg-yellow-500 text-white px-2 rounded" onClick={() => handleActualizar(i)}>Actualizar</button>
                  {/* <button className="bg-red-700 text-white px-2 rounded" onClick={() => handleEliminar(i.id)}>Eliminar</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TipoUnidadesVer;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tipoUnidadesData from "../../services/tipoUnidades";

const TipoUnidadesVer = () => {
  const [tipos, setTipos] = useState([]);
  const { getData, bajaData, updateData } = tipoUnidadesData();
  const navigate = useNavigate();

  const init = async () => {
    try {
      const res = await getData();
      setTipos(res.data);
    } catch (err) {
      console.error("Error cargando tipos de unidad", err);
    }
  };

  
  useEffect(() => {
    init();
  }, []);

  const handleEliminar = async (id) => {
    if (!window.confirm("¿Dar de baja este registro?")) return;
    try {
      await bajaData(id);
      setTipos((prev) => prev.filter((i) => i.id !== id));
    } catch (err) {
      console.error("Error al dar de baja", err);
    }
  };

  const handleActualizar = async (item) => {
    const tipo = prompt("Nuevo tipo:", item.tipo);
    const descripcion = prompt("Nueva descripción:", item.descripcion);
     if (tipo && descripcion) {
      try {
        const res = await updateData(item.id, { tipo, descripcion });
        setTipos((prev) =>
          prev.map((i) => (i.id === item.id ? res.data : i))
        );
      } catch (err) {
        console.error("Error actualizando", err);
      }
    }
  };

  return (
    <div className="p-6 sm:p-2 lg:p-12 min-h-screen dark:bg-white">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold mb-4">Tipos de Unidades Registradas</h2>
       <button
          onClick={() => navigate("/tipo-unidades/registrar")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Registrar
        </button>
      </div>
      <div className="max-w-3xl mx-auto">
      {tipos.length === 0 ? (
        <p>No hay registros</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-blue-950 text-white">
              <th>ID</th><th>Tipo</th><th>Descripción</th>
               <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>
           <tbody>
              {tipos.map((i) => (
                <tr key={i.id} className="border-b hover:bg-gray-100">
                  <td>{i.id}</td>
                  <td>{i.tipo}</td>
                  <td>{i.descripcion}</td>
                  <td className="flex gap-2">
                    <button
                      className="bg-yellow-500 text-white px-2 rounded"
                      onClick={() => handleActualizar(i)}
                    >
                      Actualizar
                    </button>
                    <button
                      className="bg-red-700 text-white px-2 rounded"
                      onClick={() => handleEliminar(i.id)}
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

export default TipoUnidadesVer;

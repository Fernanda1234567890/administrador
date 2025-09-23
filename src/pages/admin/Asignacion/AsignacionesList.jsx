import React, { useEffect, useState } from "react";
import cargoIntermedioDocenteData from "../../../services/cargoIntermedioDocente";

const AsignacionesList = () => {
  const [asignaciones, setAsignaciones] = useState([]);

  useEffect(() => {
    const fetchAsignaciones = async () => {
      try {
        const res = await cargoIntermedioDocenteData().getAll();
        setAsignaciones(res);
      } catch (error) {
        console.error("Error al cargar asignaciones:", error);
      }
    };

    fetchAsignaciones();
  }, []);

  if (asignaciones.length === 0) return <p>No hay asignaciones registradas.</p>;

  return (
    <div className="p-8 mx-full">
      <h2 className="text-2xl font-bold mb-4">Asignaciones de Docentes</h2>
      <table className="w-full border-collapse shadow rounded">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-2">Docente</th>
            <th className="p-2">Cargo</th>
            <th className="p-2">Unidad</th>
            <th className="p-2">Fecha Inicio</th>
            <th className="p-2">Fecha Fin</th>
          </tr>
        </thead>
        <tbody>
          {asignaciones.map((a) => (
            <tr key={a.id} className="border-b hover:bg-gray-100">
              <td className="p-2">{a.docente?.persona?.nombres} {a.docente?.persona?.apellidos}</td>
              <td className="p-2">{a.cargo_intermedio?.nombre}</td>
              <td className="p-2">{a.unidad?.nombre || "N/A"}</td>
              <td className="p-2">{a.fecha_inicio}</td>
              <td className="p-2">{a.fecha_fin || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AsignacionesList;

import React, { useEffect, useState } from "react";
import administrativoCargoRegularUnidadData from "../../../services/administrativoCargoRegularUnidad";
import administrativosData from "../../../services/administrativos";
import cargosRegularesData from "../../../services/cargosRegulares";
import unidadesData from "../../../services/unidades";

const AsignacionesAdminList = () => {
  const [asignaciones, setAsignaciones] = useState([]);
  const [administrativos, setAdministrativos] = useState([]);
  const [cargos, setCargos] = useState([]);
  const [unidades, setUnidades] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resAsign = await administrativoCargoRegularUnidadData().getData();
      setAsignaciones(resAsign.data || []);

      const resAdmins = await administrativosData().getData(1, 1000);
      setAdministrativos(resAdmins.data || []);

      const resCargos = await cargosRegularesData().getData(1, 1000);
      setCargos(resCargos.data || []);

      const resUnidades = await unidadesData().getData(1, 1000);
      setUnidades(resUnidades.data || []);
    };

    fetchData();
  }, []);

  const getNombreAdmin = (asig) => {
    return asig.administrativo?.persona
      ? `${asig.administrativo.persona.nombres} ${asig.administrativo.persona.apellidos}`
      : "";
  };

  const getNombreCargo = (asig) => {
    return asig.cargo_regular?.nombre || "";
  };

  const getNombreUnidad = (asig) => {
    return asig.unidad?.nombre || "";
  };


  return (
    <div className="p-8 mx-full">
      <h2 className="text-2xl font-bold mb-4">Asignaciones Administrativos</h2>
      <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="p-3 text-left">Administrativo</th>
            <th className="p-3 text-left">Cargo</th>
            <th className="p-3 text-left">Unidad</th>
            <th className="p-3 text-left">Fecha ingreso</th>
            <th className="p-3 text-left">Fecha fin</th>
          </tr>
        </thead>
        <tbody>
          {asignaciones.map((a) => (
            <tr key={a.id} className="border-b hover:bg-gray-100 transition">
              <td className="p-3">{getNombreAdmin(a)}</td>
              <td className="p-3">{getNombreCargo(a)}</td>
              <td className="p-3">{getNombreUnidad(a)}</td>
              <td className="p-3">{a.fecha_ingreso}</td>
              <td className="p-3">{a.fecha_fin || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AsignacionesAdminList;

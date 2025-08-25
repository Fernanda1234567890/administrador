import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import unidadesData from "../../services/unidades";
import tipoUnidadesData from "../../services/tipoUnidades";
import cargosIntermediosData from "../../services/cargosIntermedios"; 

const UnidadVer = () => {
  const [unidades, setUnidades] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [cargosIntermedios, setCargosIntermedios] = useState([]);
  const navigate = useNavigate();

  const { getData, updateData, deleteData } = unidadesData();
  const { getData: getTipos } = tipoUnidadesData();
  const { getData: getCargos } = cargosIntermediosData();

    const init = async () => {
    const resUnidades = await getData();
    setUnidades(resUnidades.data);

    const resTipos = await getTipos();
    setTipos(resTipos.data);

    const resCargos = await getCargos();
    setCargosIntermedios(resCargos.data);
  };

   useEffect(() => {
    init();
  }, []);


  // const handleEliminar = async (id) => {
  //   if (!window.confirm("¿Seguro que quieres eliminar esta unidad?")) return;
  //   await deleteData(id);
  //   init();
  // };

  // const handleActualizar = async (unidad) => {
  //   const nuevoNombre = prompt("Nuevo nombre:", unidad.nombre);
  //   const nuevoTipoId = prompt("Nuevo tipo (ID):", unidad.tipoUnidadId);
  //   const nuevaOrgId = prompt("Nueva organización (ID):", unidad.organizacionId);

  //   if (nuevoNombre && nuevoTipoId && nuevaOrgId) {
  //     await updateData(unidad.id, {
  //       ...unidad,
  //       nombre: nuevoNombre,
  //       tipoUnidadId: nuevoTipoId,
  //       organizacionId: nuevaOrgId,
  //     });
  //     init();
  //   }
  // };

  return (
    <div className="p-6 min-h-screen dark:bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Unidades</h2>
        <button
          onClick={() => navigate("/unidad/registro")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Registrar
        </button>
      </div>
     <div className="max-w-3xl mx-auto">
      {unidades.length === 0 ? (
        <p>No hay unidades registradas.</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-blue-950 text-white">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Nombre</th>
              <th className="p-3 text-left">Tipo</th>
              {/* <th className="p-3 text-left">Organización</th> */}
              <th className="p-3 text-left">Cargos Intermedios</th>
              <th className="p-3 text-left">Administrativos / Cargo Regular</th>
              <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {unidades.map((unidad) => (
              <tr key={unidad.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{unidad.id}</td>
                <td className="p-3">{unidad.nombre}</td>
                <td className="p-3">{tipos.find((t) => t.id === unidad.tipoUnidadId)?.nombre || "Sin tipo"}</td>
               
                <td className="p-3">
                  {unidad.cargosIntermedios?.length > 0
                    ? unidad.cargosIntermedios.map((c) => <span key={c.id}>{c.nombre}</span>)
                    : "Sin cargos"}
                </td>
                <td className="p-3">
                  {unidad.administrativoCargoRegularUnidades?.length > 0
                    ? unidad.administrativoCargoRegularUnidades.map((rel) => (
                        <span key={rel.id} className="block">
                          {rel.administrativo.nombres} ({rel.cargoRegular.nombre})
                        </span>
                      ))
                    : "Sin administrativos"}
                </td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleActualizar(unidad)}
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


export default UnidadVer;

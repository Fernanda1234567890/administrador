import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import docentesData from "@admin/services/docentes";
import cargosIntermediosData from "@admin/services/cargosIntermedios";
import unidadesData from "@admin/services/unidades";
import cargoIntermedioDocenteData from "@admin/services/cargoIntermedioDocente";


const DocenteAsignacion = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  const [docente, setDocente] = useState(null);
  const [cargos, setCargos] = useState([]);
  const [unidades, setUnidades] = useState([]);
  const [asignacionCreada, setAsignacionCreada] = useState(null); // <-- nueva
  const [formData, setFormData] = useState({
    id_cargo_intermedio: "",
    id_unidad: "",
    fecha_inicio: "",
    fecha_fin: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await docentesData().getData(1, 1000); 
        const docenteRes = res.data.find((d) => d.id === parseInt(id));
        setDocente(docenteRes);

        const cargosRes = await cargosIntermediosData().getData(1, 1000);
        setCargos(cargosRes.data);

        const unidadesRes = await unidadesData().getData(1, 1000);
        setUnidades(unidadesRes.data);
      } catch (error) {
        console.error("Error cargando datos:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.id_cargo_intermedio || !formData.fecha_inicio) {
      alert("Cargo y fecha inicio son obligatorios");
      return;
    }

    try {
      await cargoIntermedioDocenteData().create({
        id_docente: docente.id,
        id_cargo_intermedio: formData.id_cargo_intermedio,
        id_unidad: formData.id_unidad || null,
        fecha_inicio: formData.fecha_inicio,
        fecha_fin: formData.fecha_fin || null,
      });

      alert("Asignación registrada con éxito");

      setFormData({
        id_cargo_intermedio: "",
        id_unidad: "",
        fecha_inicio: "",
        fecha_fin: "",
      });

      navigate("/admin/asignaciones-docentes/ver");

    } catch (error) {
      console.error("Error al registrar asignación:", error);
      alert("No se pudo registrar la asignación");
    }
  };

  if (!docente) return <p>Cargando docente...</p>;

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Asignar cargo a {docente.persona?.nombres} {docente.persona?.apellidos}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        {/* Cargo intermedio */}
        <div>
          <label className="block mb-1 font-semibold">Cargo</label>
          <select
            name="id_cargo_intermedio"
            value={formData.id_cargo_intermedio}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">-- Seleccione un cargo --</option>
            {cargos.map((c) => (
              <option key={c.id} value={c.id}>{c.nombre}</option>
            ))}
          </select>
        </div>

        {/* Unidad */}
        <div>
          <label className="block mb-1 font-semibold">Unidad</label>
          <select
            name="id_unidad"
            value={formData.id_unidad}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">-- Seleccione (opcional) --</option>
            {unidades.map((u) => (
              <option key={u.id} value={u.id}>{u.nombre}</option>
            ))}
          </select>
        </div>

        {/* Fecha inicio */}
        <div>
          <label className="block mb-1 font-semibold">Fecha inicio</label>
          <input
            type="date"
            name="fecha_inicio"
            value={formData.fecha_inicio}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Fecha fin */}
        <div>
          <label className="block mb-1 font-semibold">Fecha fin</label>
          <input
            type="date"
            name="fecha_fin"
            value={formData.fecha_fin}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Guardar asignación
        </button>
      </form>

      {/* ✅ Mostrar asignación creada */}
      {/* {asignacionCreada && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded">
          <h3 className="font-bold mb-2">Asignación creada:</h3>
          <p>Cargo: {cargos.find(c => c.id === asignacionCreada.id_cargo_intermedio)?.nombre}</p>
          <p>Carrera: {carreras.find(c => c.id === asignacionCreada.id_carrera)?.nombre || "N/A"}</p>
          <p>Fecha inicio: {asignacionCreada.fecha_inicio}</p>
          <p>Fecha fin: {asignacionCreada.fecha_fin || "N/A"}</p>
        </div>
      )} */}
    </div>
  );
};

export default DocenteAsignacion;

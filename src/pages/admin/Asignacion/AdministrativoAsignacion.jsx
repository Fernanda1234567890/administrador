import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import personasData from "../../../services/personas";
import administrativosData from "../../../services/administrativos";
import cargosRegularesData from "../../../services/cargosRegulares";
import unidadesData from "../../../services/unidades";
import administrativoCargoRegularUnidadData from "../../../services/administrativoCargoRegularUnidad";

const AdministrativoAsignacion = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [administrativo, setAdministrativo] = useState(null);
  const [cargos, setCargos] = useState([]);
  const [unidades, setUnidades] = useState([]);
  const [formData, setFormData] = useState({
    id_cargo: "",
    id_unidad: "",
    fecha_ingreso: "",
    fecha_fin: "",
  });
  //const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await administrativosData().getData(1, 1000);
        const adminRes = res.data.find((a) => a.id === parseInt(id));
        setAdministrativo(adminRes);

        const cargosRes = await cargosRegularesData().getData(1, 1000);
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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.id_cargo) return alert("Seleccione un cargo");
    if (!formData.id_unidad) return alert("Seleccione una unidad");
    if (!formData.fecha_inicio) return alert("Seleccione la fecha de inicio");

    //if (!window.confirm("¿Está seguro de registrar esta asignación?")) return;

   try {
    await administrativoCargoRegularUnidadData().create({
        id_administrativo: Number(administrativo.id),
        id_cargo: Number(formData.id_cargo),
        id_unidad: Number(formData.id_unidad),
        fecha_ingreso: formData.fecha_ingreso,
        fecha_fin: formData.fecha_fin || null,
        activo: true,
      });

      alert("Asignación registrada con éxito");

      setFormData({
        id_cargo: "",
        id_unidad: "",
        fecha_ingreso: "",
        fecha_fin: "",
      });

      navigate("/asignaciones-admin/ver");
  } catch (error) {
    console.error("Error al registrar asignación:", error);
    alert("No se pudo registrar la asignación. Revisa la consola del backend.");
  } finally {
    setSubmitting(false);
  }
};

 // if (loading) return <p>Cargando...</p>;
  if (!administrativo) return <p>No se encontró el administrativo seleccionado.</p>;

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Asignar cargo a {administrativo.persona?.nombre }{ administrativo.persona?.apellido}
      </h2>


      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        {/* Cargo Regular */}
        <div>
          <label className="block mb-1 font-semibold">Cargo</label>
          <select
            name="id_cargo"
            value={formData.id_cargo}
            onChange={handleChange}
            disabled={submitting}
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
            disabled={submitting}
            className="w-full border p-2 rounded"
          >
            <option value="">-- Seleccione unidad --</option>
            {unidades.map((u) => (
              <option key={u.id} value={u.id}>{u.nombre}</option>
            ))}
          </select>
        </div>

        {/* Fecha ingerso */}
        <div>
          <label className="block mb-1 font-semibold">Fecha ingreso</label>
          <input
            type="date"
            name="fecha_ingreso"
            value={formData.fecha_ingreso}
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
          disabled={submitting}
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          {submitting ? "Registrando..." : "Guardar asignación"}
        </button>
      </form>
    </div>
  );
};

export default AdministrativoAsignacion;

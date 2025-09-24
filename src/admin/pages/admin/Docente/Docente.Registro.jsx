import React, { useState, useEffect } from "react";
import personasData from "@admin/services/personas";
import carrerasData from "@admin/services/carreras";
import docentesData from "@admin/services/docentes";
import { useNavigate } from "react-router-dom";


const DocenteRegistro = () => {
  const [personas, setPersonas] = useState([]);
  const [carreras, setCarreras] = useState([]);
  const [formData, setFormData] = useState({ personaId: "", carreraId: "" });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

    const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const personasRes = await personasData().getData(1, 1000, "", "activo");
        setPersonas(personasRes.data || personasRes || []);

        const carrerasRes = await carrerasData().getData(1, 1000);
        setCarreras(carrerasRes.data || carrerasRes || []);
      } catch (error) {
        console.error("Error cargando datos:", error);
        alert("Error al cargar personas o carreras");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.personaId || !formData.carreraId) return;

  const personaSeleccionada = personas.find(
    (p) => p.id === Number(formData.personaId)
  );
  if (!personaSeleccionada) {
    alert("Persona no válida o no existe en la base de datos");
    return;
  }

  const payload = {
    ci_persona: personaSeleccionada.ci,
    id_carrera: Number(formData.carreraId),
    estado: true,
  };

  setSubmitting(true);
  try {
    const res = await docentesData().create(payload);
    console.log("Respuesta backend:", res);
    alert("Docente registrado correctamente");
    setFormData({ personaId: "", carreraId: "" });

    navigate("/admin/docentes/ver");
  } catch (error) {
    console.error("Error al crear docente:", error.response?.data || error.message);
    alert(error.response?.data?.message || "Error al registrar docente");
  } finally {
    setSubmitting(false);
  }
};

  const handleCancel = () => {
    if (onClose) {
      onClose();
    } else {
    navigate("/admin/docentes/ver");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Registrar Docente</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1 text-left">Persona</label>
          <select
            name="personaId"
            value={formData.personaId}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Seleccione una persona</option>
            {personas.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nombres} {p.apellidos} ({p.ci})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-left">Carrera</label>
          <select
            name="carreraId"
            value={formData.carreraId}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Seleccione una carrera</option>
            {carreras.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nombre} {c.facultad ? `(${c.facultad.nombre})` : ""}
              </option>
            ))}
          </select>
        </div>

         <div className="flex justify-start space-x-3 mt-6">
          <button
            type="submit"
            disabled={submitting}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {submitting ? "Registrando..." : "Registrar"}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default DocenteRegistro;

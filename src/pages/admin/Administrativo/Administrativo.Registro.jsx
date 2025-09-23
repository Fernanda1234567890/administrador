import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import personasData from "../../../services/personas";
import administrativosData from "../../../services/administrativos";

const AdministrativoRegistro = ({ onRegistrar, onClose }) => {
  const [personas, setPersonas] = useState([]);
  const [formData, setFormData] = useState({ idPersona: "" });
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        const res = await personasData().getData(1, 10000, "", "activo");
        setPersonas(res.data || []);      
      } catch (error) {
        console.error("Error cargando personas:", error);
        alert("No se pudieron cargar las personas");
      }
    };
    fetchPersonas();
  }, []);

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.idPersona) return alert("Seleccione una persona");

    if (!window.confirm("¿Registrar este administrativo?")) return;

    const payload = {
      id_persona: Number(formData.idPersona),
      estado: true,
    };

    setSubmitting(true);
    try {
      const res = await administrativosData().create(payload);
      alert("Administrativo registrado correctamente");
      setFormData({ idPersona: "" });

      // actualizar lista en padre
      if (onRegistrar) onRegistrar(res.data);
      if (onClose) onClose();
      else navigate("/administrativos/ver");
    } catch (error) {
      console.error("Error registrando administrativo:", error);
      alert("No se pudo registrar el administrativo");
    } finally {
      setSubmitting(false);
    }
  };
  const handleCancel = () => {
    if (onClose) onClose();
    else navigate("/administrativos/ver");
  };

  return (
    <div className="max-w-md mx-auto mt-6 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Registrar Administrativo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Persona</label>
          <select
            name="idPersona"
            value={formData.idPersona}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Seleccione una persona</option>
            {personas.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nombres} {p.apellidos} ({p.ci})
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3 mt-4">
          <button
            type="submit"
            disabled={submitting}
            className="px-4 py-1 text-white bg-blue-600 rounded hover:bg-blue-700 text-sm"
          >
            {submitting ? "Registrando..." : "Registrar"}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 text-sm"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdministrativoRegistro;

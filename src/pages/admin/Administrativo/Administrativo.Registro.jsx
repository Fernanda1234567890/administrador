import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import personasData from "../../../services/personas"; // tu servicio de backend

const AdministrativoRegistro = ({ onRegistrar, onClose }) => {
  const [formData, setFormData] = useState({
    idPersona: "",
  });

  const [personas, setPersonas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        // Llamada al servicio que trae todas las personas activas
        const res = await personasData().getData(1, 1000, "", "activo");
        setPersonas(res.data || res || []);
      } catch (error) {
        console.error("Error cargando personas:", error);
        alert("No se pudieron cargar las personas");
      } finally {
        setLoading(false);
      }
    };

    fetchPersonas();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.idPersona) return alert("Seleccione una persona");
    if (!window.confirm("¿Está seguro de registrar al administrativo?")) return;

    const personaSeleccionada = personas.find(
      (p) => p.id === Number(formData.idPersona)
    );

    if (!personaSeleccionada) return alert("Persona no válida");

    const newAdministrativo = {
      id: Date.now(),
      idPersona: personaSeleccionada.id,
      nombrePersona: `${personaSeleccionada.nombres} ${personaSeleccionada.apellidos}`, // opcional
    };

    const existing = JSON.parse(localStorage.getItem("administrativos")) || [];
    localStorage.setItem(
      "administrativos",
      JSON.stringify([...existing, newAdministrativo])
    );

    setFormData({ idPersona: "" });
    alert("Administrativo registrado correctamente");

    if (onRegistrar) onRegistrar(newAdministrativo);
    if (onClose) onClose();
    else navigate("/administrativos/ver");
  };

  const handleCancel = () => {
    if (onClose) onClose();
    else navigate("/administrativos/ver");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Registrar Administrativo</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Persona</label>
          <select
            name="idPersona"
            value={formData.idPersona}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={loading}
            required
          >
            <option value="">{loading ? "Cargando personas..." : "Seleccione una persona"}</option>
            {personas.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nombres} {p.apellidos} ({p.ci})
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-start gap-3 mt-6">
          <button type="submit" className="px-5 py-2 rounded-md font-medium text-white text-sm bg-blue-600 hover:bg-blue-700 transition-colors">
            Registrar
          </button>
          <button type="button" onClick={handleCancel} className="px-5 py-2 rounded-md font-medium text-sm bg-gray-500 text-white hover:bg-gray-600 transition-colors">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdministrativoRegistro;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import administrativosData from "../../services/administrativos";
import personasData from "../../services/personas";

const AdministrativoRegistro = () => {
  const [formData, setFormData] = useState({ id_persona: "", estado: "activo" });
  const [personas, setPersonas] = useState([]);
  const navigate = useNavigate();

  const { createData } = administrativosData();
  const { getData: getPerson } = personasData();

  // ✅ Cargar personas desde backend
  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        const res = await getPerson();
        setPersonas(res.data || []);
      } catch (error) {
        console.error("Error al obtener personas:", error);
        setPersonas([]);
      }
    };
    fetchPersonas();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.id_persona || !formData.estado) {
      return alert("Todos los campos son obligatorios");
    }

    try {
      await createData(formData); // ✅ Guardar en backend
      alert("Administrativo registrado correctamente ✅");
      navigate("/administrativos/ver"); // Redirige a la lista
    } catch (error) {
      console.error(error);
      alert("Error al registrar administrativo: " + error.message);
    }
  };

  return (
    <div className="p-6 min-h-screen dark:bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Registrar Administrativo</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <select
          name="id_persona"
          value={formData.id_persona}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Selecciona una persona</option>
          {personas.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nombres} {p.apellidos}
            </option>
          ))}
        </select>

        <select
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        >
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default AdministrativoRegistro;

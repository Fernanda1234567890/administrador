// Docente.Registro.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DocenteRegistro = () => {
  const [formData, setFormData] = useState({ id: "", carrera: "", id_persona: "" });
  const [personas, setPersonas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setPersonas(JSON.parse(localStorage.getItem("personas")) || []);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (window.confirm("¿Está seguro de registrar al docente?")) {
      const newDocente = {
        id: Date.now(),
        carrera: formData.carrera,
        id_persona: formData.id_persona,
      };

      const existing = JSON.parse(localStorage.getItem("docentes")) || [];
      existing.push(newDocente);
      localStorage.setItem("docentes", JSON.stringify(existing));

      setFormData({ id: "", carrera: "", id_persona: "" });

      alert("✅ Docente registrado correctamente");

      // Redirige a la lista de docentes
      navigate("/docentes/ver");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Registrar Docente</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="carrera"
          placeholder="Carrera"
          value={formData.carrera}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        />
        <select
          name="id_persona"
          value={formData.id_persona}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        >
          <option value="">Selecciona Persona</option>
          {personas.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nombres} {p.apellidos}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default DocenteRegistro;

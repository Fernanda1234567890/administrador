// Docente.Registro.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listaCarrerasyFac } from "../../data/listaCarrerasyFac";

const DocenteRegistro = () => {
  const [formData, setFormData] = useState({ carrera: "", id_persona: "" });
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
        <select
          name="carrera"
          value={formData.carrera}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Selecciona una carrera</option>
          {listaCarrerasyFac.map((carrera, index) => (
            <option key={index} value={carrera}>
              {carrera}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="id_persona"
          value={formData.id_persona}
          onChange={handleChange}
          placeholder="ID de la Persona"
          required
          className="w-full border rounded p-2"
        />
          <div>
            <label htmlFor="estado" className="block text-sm font-medium mb-1">
              Estado
            </label>
            <select
              id="estado"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Seleccione un estado</option>
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </select>
          </div>
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

export default DocenteRegistro;

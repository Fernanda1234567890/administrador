// EstudianteRegistro.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EstudianteRegistro = ({ onRegistrar, onClose }) => {
  const [formData, setFormData] = useState({ 
    id:"", 
    ru:"", 
    carrera:"", 
    id_persona:"" 
  });

  const [personas, setPersonas] = useState([]);
  const navigate = useNavigate(); // 👈 inicializamos navigate
  
  useEffect(() => {
    const storedPersonas = JSON.parse(localStorage.getItem("personas")) || [];
    setPersonas(storedPersonas);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (window.confirm("¿Está seguro de registrar el estudiante?")) {
      const newEstudiante = {
        id: Date.now(),         // ID único
        ru: formData.ru,
        carrera: formData.carrera,
        id_persona: formData.id_persona,
      };

      const existing = JSON.parse(localStorage.getItem("estudiantes")) || [];
      localStorage.setItem("estudiantes", JSON.stringify([...existing, newEstudiante]));

      setFormData({ id: "", ru: "", carrera: "", id_persona: "" });

      alert("✅ Estudiante registrado correctamente");

      // 👇 Redirigir a la vista de estudiantes
      navigate("/estudiantes/ver");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Registrar Estudiante</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* RU */}
        <input 
          type="text" 
          name="ru" 
          placeholder="RU" 
          value={formData.ru} 
          onChange={handleChange} 
          required 
          className="w-full border rounded p-2" 
        />

        {/* Carrera */}
        <input 
          type="text" 
          name="carrera" 
          placeholder="Carrera" 
          value={formData.carrera} 
          onChange={handleChange} 
          required 
          className="w-full border rounded p-2" 
        />

        {/* Seleccionar Persona */}
        <select 
          name="id_persona" 
          value={formData.id_persona} 
          onChange={handleChange} 
          className="w-full border rounded p-2" 
          required
        >
          <option value="">Selecciona Persona</option>
          {personas.map((p, index) => (
            <option key={p.id || index} value={p.id}>
              {p.nombres} {p.apellidos}
            </option>
          ))}
        </select>

        {/* Botón Registrar */}
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

export default EstudianteRegistro;

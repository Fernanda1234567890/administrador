import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listaCarrerasyFac } from "../../data/listaCarrerasyFac"; 

const EstudianteRegistro = ({ onRegistrar, onClose }) => {
  const [formData, setFormData] = useState({  
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

        {/* Seleccionar Persona */}
        <input 
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
        </input>
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

        {/* Botón Registrar */}
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

export default EstudianteRegistro;

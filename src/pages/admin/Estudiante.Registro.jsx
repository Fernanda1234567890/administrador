// EstudianteRegistro.jsx
import React, { useState, useEffect } from "react";

const EstudianteRegistro = () => {
  const [personas, setPersonas] = useState([]);
  const [formData, setFormData] = useState({ id:"", ru:"", carrera:"", id_persona:"" });

  useEffect(() => {
    setPersonas(JSON.parse(localStorage.getItem("personas")) || []);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("estudiantes")) || [];
    localStorage.setItem("estudiantes", JSON.stringify([...existing, formData]));
    setFormData({ id:"", ru:"", carrera:"", id_persona:"" });
    alert("Estudiante registrado correctamente");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Registrar Estudiante</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="id" placeholder="ID" value={formData.id} onChange={handleChange} required className="w-full border rounded p-2" />
        <input type="text" name="ru" placeholder="RU" value={formData.ru} onChange={handleChange} required className="w-full border rounded p-2" />
        <input type="text" name="carrera" placeholder="Carrera" value={formData.carrera} onChange={handleChange} required className="w-full border rounded p-2" />
        <select name="id_persona" value={formData.id_persona} onChange={handleChange} className="w-full border rounded p-2" required>
          <option value="">Selecciona Persona</option>
          {personas.map(p => <option key={p.id} value={p.id}>{p.nombres} {p.apellidos}</option>)}
        </select>
        <button type="submit" className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800">Registrar</button>
      </form>
    </div>
  );
};

export default EstudianteRegistro;

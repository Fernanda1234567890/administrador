import React, { useState } from "react";

const DocenteRegistro = () => {
  const [formData, setFormData] = useState({
    id: "",
    carrera: "",
    idPersona: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("docentes")) || [];
    data.push(formData);
    localStorage.setItem("docentes", JSON.stringify(data));
    alert("Docente registrado correctamente ✅");
    setFormData({ id: "", carrera: "", idPersona: "" });
  };

  return (
    <div className="p-6 min-h-screen dark:bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Registrar Docente</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="ID"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="carrera"
          value={formData.carrera}
          onChange={handleChange}
          placeholder="Carrera"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="idPersona"
          value={formData.idPersona}
          onChange={handleChange}
          placeholder="ID Persona"
          className="w-full border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default DocenteRegistro;

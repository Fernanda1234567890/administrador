import React, { useState } from "react";

const CargoIntermedioRegistro = () => {
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    descripcion: "",
    nivelJerarquico: "",
    idUnidad: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cargos = JSON.parse(localStorage.getItem("cargosIntermedios")) || [];
    cargos.push(formData);
    localStorage.setItem("cargosIntermedios", JSON.stringify(cargos));
    alert("Cargo intermedio registrado con éxito ✅");
    setFormData({
      id: "",
      nombre: "",
      descripcion: "",
      nivelJerarquico: "",
      idUnidad: ""
    });
  };

  return (
    <div className="p-6 lg:p-12 min-h-screen dark:bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Registrar Cargo Intermedio
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        ></textarea>
        <input
          type="text"
          name="nivelJerarquico"
          placeholder="Nivel Jerárquico"
          value={formData.nivelJerarquico}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="idUnidad"
          placeholder="ID Unidad"
          value={formData.idUnidad}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default CargoIntermedioRegistro;

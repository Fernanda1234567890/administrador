import React, { useState } from "react";

const CargoRegularRegistro = () => {
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    descripcion: "",
    nivelJerarquico: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guardar en localStorage
    const existing = JSON.parse(localStorage.getItem("cargo-regular")) || [];
    const updated = [...existing, formData];
    localStorage.setItem("cargo-regular", JSON.stringify(updated));

    // Limpiar formulario
    setFormData({ id: "", nombre: "", descripcion: "", nivelJerarquico: "" });

    alert("Cargo registrado correctamente");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Registrar Cargo Regular</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ID */}
        <div>
          <label className="block text-sm font-medium mb-1">ID</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium mb-1">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Descripción */}
        <div>
          <label className="block text-sm font-medium mb-1">Descripción</label>
          <input
            type="text"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Nivel Jerárquico */}
        <div>
          <label className="block text-sm font-medium mb-1">Nivel Jerárquico</label>
          <select
            name="nivelJerarquico"
            value={formData.nivelJerarquico}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="">Seleccione un nivel</option>
            <option value="Alto">Alto</option>
            <option value="Medio">Medio</option>
            <option value="Bajo">Bajo</option>
          </select>
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800 transition"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default CargoRegularRegistro;

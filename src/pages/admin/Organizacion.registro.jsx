import React, { useState } from "react";

const OrganizacionRegistro = () => {
  const [formData, setFormData] = useState({
    tipo: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
// Aquí después llamas a tu API para guardar
  const handleSubmit = (e) => {
    e.preventDefault();

    // Generar un ID automático para la organización
    const newOrganizacion = {
      id: Date.now(),
      tipo: formData.tipo,
      descripcion: formData.descripcion,
    };

    // Guardar en localStorage (simulación de BD)
    const data = JSON.parse(localStorage.getItem("organizaciones")) || [];
    data.push(newOrganizacion);
    localStorage.setItem("organizaciones", JSON.stringify(data));

    // Limpiar formulario
    setFormData({ tipo: "", descripcion: "" });

    alert("Organización registrada con éxito ✅");
  };

return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Registrar Organización</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Select tipo */}
        <div>
          <label className="block text-sm font-medium mb-1">Tipo</label>
          <select
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="">Seleccione un tipo</option>
            <option value="F.U.L.">F.U.L.</option>
            <option value="F.U.D.">F.U.D.</option>
            <option value="S.T.U.">S.T.U.</option>
          </select>
        </div>

        {/* Input descripción */}
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

export default OrganizacionRegistro;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 importamos navigate

const OrganizacionRegistro = ({ onRegistrar, onClose }) => {
  const [formData, setFormData] = useState({
    tipo: "",
    descripcion: "",
    estado:"",
  });

  const navigate = useNavigate(); // 👈 inicializamos navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (window.confirm("¿Está seguro de registrar la organización?")) {
      const newOrganizacion = {
        id: Date.now(),
        tipo: formData.tipo,
        descripcion: formData.descripcion,
        estado: formData.estado,
      };

      const data = JSON.parse(localStorage.getItem("organizaciones")) || [];
      data.push(newOrganizacion);
      localStorage.setItem("organizaciones", JSON.stringify(data));

      setFormData({ tipo: "", descripcion: "" });

      if (onRegistrar) onRegistrar(newOrganizacion);
      if (onClose) onClose();

      // 👇 Redirige automáticamente a la vista "ver organizaciones"
      navigate("/organizacion/ver");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Registrar Organización</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="tipo" className="block text-sm font-medium mb-1">Tipo</label>
          <select
            id="tipo"
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

        <div>
          <label htmlFor="descripcion" className="block text-sm font-medium mb-1">Descripción</label>
          <input
            id="descripcion"
            type="text"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
         <div>
          <label htmlFor="estado" className="block text-sm font-medium mb-1">Estado</label>
          <input
            id="estado"
            type="text"
            name="destado"
            value={formData.estado}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default OrganizacionRegistro;

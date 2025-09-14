import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import organizacionData from "../../services/organizacion";

const OrganizacionRegistro = ({ onRegistrar, onClose }) => {
  const [formData, setFormData] = useState({
    tipo: "",
    descripcion: "",
  });

  const { createData } = organizacionData();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevaOrganizacion = {
      tipo: formData.tipo.trim(),
      descripcion: formData.descripcion.trim(),
      estado: true,
    };

    try {
      const response = await createData(nuevaOrganizacion);
      alert("Organización registrada con éxito");
      setFormData({ tipo: "", descripcion: "" });

      if (onRegistrar) onRegistrar(response);
      if (onClose) onClose();

      navigate("/organizacion/ver");
    } catch (error) {
      alert("Error al registrar: " + error.message);
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Registrar Organización</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="tipo" className="block text-sm font-medium mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            placeholder="Escriba el nombre (tipo)"
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="descripcion" className="block text-sm font-medium mb-1">
            Descripción
          </label>
          <input
            id="descripcion"
            type="text"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Ingrese la descripción"
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
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

export default OrganizacionRegistro;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // 👈 Usamos axios

const CargoRegularRegistro = ({ onRegistrar, onClose }) => {
  const [formData, setFormData] = useState({
    id: null, // 👈 para editar
    nombre: "",
    descripcion: "",
    nivel_jerarquico: "",
  });

  const navigate = useNavigate();

  // Manejo de cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Si hay datos para edición, los cargamos
  useEffect(() => {
    const editar = JSON.parse(localStorage.getItem("cargo-regular-editar"));
    if (editar) {
      setFormData(editar);
      localStorage.removeItem("cargo-regular-editar");
    }
  }, []);

  // Enviar datos
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Forzamos a número si es posible
    const payload = {
      ...formData,
      nivel_jerarquico: formData.nivel_jerarquico
        ? parseInt(formData.nivel_jerarquico, 10)
        : null,
    };

    try {
      let response;
      if (formData.id) {
        // ✅ EDITAR
        response = await axios.patch(
          `http://localhost:3000/api/cargo-regular/${formData.id}`,
          payload
        );
        alert("Cargo regular actualizado con éxito");
      } else {
        // ✅ CREAR
        response = await axios.post(
          "http://localhost:3000/api/cargo-regular",
          payload
        );
        alert("Cargo regular registrado con éxito");
      }

      // ✅ Limpiar formulario
      setFormData({ id: null, nombre: "", descripcion: "", nivel_jerarquico: "" });

      // ✅ Callback opcional
      if (onRegistrar) onRegistrar(response.data);

      // ✅ Cerrar modal
      if (onClose) onClose();

      // ✅ Redirigir a la lista
      navigate("/cargo-regular/ver");
    } catch (error) {
      alert(
        "Error al guardar: " +
          (error.response?.data?.message || error.message)
      );
      console.error("Detalles del error:", error.response?.data || error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        {formData.id ? "Editar Cargo Regular" : "Registrar Cargo Regular"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
            name="nivel_jerarquico"
            value={formData.nivel_jerarquico}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="">Seleccione un nivel</option>
            <option value="1">Alto</option>
            <option value="2">Medio</option>
            <option value="3">Bajo</option>
          </select>
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800 transition"
        >
          {formData.id ? "Actualizar" : "Registrar"}
        </button>
      </form>
    </div>
  );
};

export default CargoRegularRegistro;
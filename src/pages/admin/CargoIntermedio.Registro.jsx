import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../../services/api"; // ✅ Asegúrate de tener esta función

const CargoIntermedioRegistro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    nivel_jerarquico: "",
    id_unidad: "",
    estado: "activo",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postData("http://localhost:3000/api/cargo-intermedio", formData);
      alert("Cargo intermedio registrado con éxito ✅");

      // Limpiar formulario
      setFormData({
        nombre: "",
        descripcion: "",
        nivel_jerarquico: "",
        id_unidad: "",
        estado: "activo",
      });

      // Redirigir a la lista
      navigate("/cargos-intermedios/ver");
    } catch (error) {
      console.error(error);
      alert("Error al registrar: " + error.message);
    }
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
            <option value="Alto">Alto</option>
            <option value="Medio">Medio</option>
            <option value="Bajo">Bajo</option>
          </select>
        </div>

        <input
          type="text"
          name="id_unidad"
          placeholder="ID Unidad"
          value={formData.id_unidad}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default CargoIntermedioRegistro;

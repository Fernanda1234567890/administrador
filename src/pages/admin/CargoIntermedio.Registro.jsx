import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CargoIntermedioRegistro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    nivelJerarquico: "",
    idUnidad: "",
  });

  const navigate = useNavigate(); // Para redirigir después de registrar

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (window.confirm("¿Está seguro de registrar este cargo intermedio?")) {
      const newCargo = {
        id: Date.now(), // Genera un ID único automáticamente
        ...formData,
      };

      const cargos = JSON.parse(localStorage.getItem("cargosIntermedios")) || [];
      localStorage.setItem("cargosIntermedios", JSON.stringify([...cargos, newCargo]));

      setFormData({
        nombre: "",
        descripcion: "",
        nivelJerarquico: "",
        idUnidad: "",
      });

      alert("Cargo intermedio registrado con éxito ✅");

      // Redirigir automáticamente a la vista de cargos intermedios
      navigate("/cargos-intermedios/ver");
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
          className="w-full bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default CargoIntermedioRegistro;

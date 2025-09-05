import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { postData } from "../../services/api";


const CargoRegularRegistro = ({ onRegistrar, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    nivelJerarquico: "",
  });

  const navigate = useNavigate();

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const editar = JSON.parse(localStorage.getItem("cargo-regular-editar"));
    if (editar) {
      setFormData(editar);
      localStorage.removeItem("cargo-regular-editar");
    }
  }, []);

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoCargoRegular = {
      nombre: formData.nombre,
      descripcion: formData.descripcion,
      nivelJerarquico: formData.nivelJerarquico,
    };

  try {
    const response = await postData("http://localhost:3000/api/cargo-regular", nuevoCargoRegular);
    
    alert("Cargo regular registrado con éxito");
    // ✅ Limpiar formulario
      setFormData({ tipo: "", descripcion: "", nivelJerarquico: "" });

      // ✅ Llamar callback opcional para actualizar lista
      if (onRegistrar) onRegistrar(response);

      // ✅ Cerrar modal si aplica
      if (onClose) onClose();

      // ✅ Redirigir a la lista de organizaciones
      navigate("/cargo-regular/ver");
    
    } catch (error) {
      alert("Error al registrar: " + error.message);
      console.error(error);
    }
  };


  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Registrar Cargo Regular</h2>
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

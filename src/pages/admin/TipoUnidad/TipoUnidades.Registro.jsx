import React, { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import { postData } from "../../../services/api";

const TipoUnidadesRegistro = ({ onRegistrar, onClose }) => {
  const [formData, setFormData] = useState({
    tipo: "",
    descripcion: "",
    estado:"",
  });

    const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
       ...prev, 
       [name]: value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoTipoUnidad = {
      tipo: formData.tipo,
      descripcion: formData.descripcion,
      estado: true, 
    };

    try {
      const response = await postData("http://localhost:3000/api/tipo-unidad", nuevoTipoUnidad);

      alert("Tipo de unidad registrada con éxito");
      setFormData({ tipo: "", descripcion: "" });

      if (onRegistrar) onRegistrar(response);
      if (onClose) onClose();
      navigate("/tipo-unidades/ver");

    } catch (error) {
      alert("Error al registrar: " + error.message);
      console.error(error);
    }
  };

  const handleCancel = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/tipo-unidades/ver");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Registrar Tipo de Unidad</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="tipo" className="block text-sm font-medium mb-1">Tipo de Unidad</label>
          <input
            type="text"
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            placeholder="Ej: U. Mayor, U. Intermedia, U. Sub Dependiente"
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

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Registrar
          </button>

          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancelar
          </button>
        </div>

      </form>

    </div>
  );
};

export default TipoUnidadesRegistro;

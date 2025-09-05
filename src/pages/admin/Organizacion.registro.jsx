import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { postData } from "../../services/api"; 

const OrganizacionRegistro = ({ onRegistrar, onClose }) => {
  const [formData, setFormData] = useState({
    tipo: "",
    descripcion: "",
    estado:"",
  });

  const navigate = useNavigate(); // inicializamos navigate

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
      tipo: formData.tipo,
      descripcion: formData.descripcion,
      estado: formData.estado === "true" ? true : false,
    };

  try {
    const response = await postData("http://localhost:3000/api/organizacion", nuevaOrganizacion);
    // await postData("http://localhost:3000/api/organizacion", nuevaOrganizacion);
    alert("Organización registrada con éxito");
    // ✅ Limpiar formulario
      setFormData({ tipo: "", descripcion: "", estado: "" });

      // ✅ Llamar callback opcional para actualizar lista
      if (onRegistrar) onRegistrar(response);

      // ✅ Cerrar modal si aplica
      if (onClose) onClose();

      // ✅ Redirigir a la lista de organizaciones
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
          <label htmlFor="tipo" className="block text-sm font-medium mb-1">Nombre</label>
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

          <div>
            <label htmlFor="estado" className="block text-sm font-medium mb-1">
              Estado
            </label>
            <select
              id="estado"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Seleccione un estado</option>
              <option value="true">Activo</option>
              <option value="false">Inactivo</option>
            </select>
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
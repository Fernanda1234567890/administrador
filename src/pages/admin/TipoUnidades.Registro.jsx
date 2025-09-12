import React, { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import { tipoUn } from "../../data/tipoUn"; 
import { postData } from "../../services/api"; 

const TipoUnidadesRegistro = ({ onRegistrar, onClose}) => {
  const [formData, setFormData] = useState({ 
    tipo: "", 
    descripcion: "",
    estado:"true",
  });

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

    
    const nuevoTipoUnidad = {
      tipo: formData.tipo,
      descripcion: formData.descripcion,
      estado: true ,
    };

    try {
        const response = await postData("http://localhost:3000/api/tipo-unidad", nuevoTipoUnidad);
          alert("Tipo de unidad registrada con éxito");
        // ✅ Limpiar formulario
          setFormData({ tipo: "", descripcion: "" });
    
          // ✅ Llamar callback opcional para actualizar lista
        if (onRegistrar) onRegistrar(response);
    
          // ✅ Cerrar modal si aplica
         if (onClose) onClose();
    
          // ✅ Redirigir a la lista de organizaciones
          navigate("/tipo-unidad/ver");
        
        } catch (error) {
          alert("Error al registrar: " + error.message);
          console.error(error);
        }
      };


  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Registrar Tipo de Unidad</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        >
          <option value="">Selecciona un tipo</option>
          {tipoUn.map((tipo, index) => (
            <option key={index} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>

        <input 
          type="text" 
          name="descripcion" 
          placeholder="Descripción" 
          value={formData.descripcion} 
          onChange={handleChange} 
          required 
          className="w-full border rounded p-2" 
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

export default TipoUnidadesRegistro;
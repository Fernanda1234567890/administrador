import React, { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { tipoUn } from "../../data/tipoUn"; 

const TipoUnidadesRegistro = () => {
  const [formData, setFormData] = useState({ 
    tipo: "", 
    descripcion: "",
  });

  const navigate = useNavigate();

  // Efecto para cargar datos de edición desde localStorage
  useEffect(() => {
    const editar = localStorage.getItem("tipo-unidades-editar");
    if (editar) {
      try {
        const parsedData = JSON.parse(editar);
        setFormData(parsedData);
        localStorage.removeItem("tipo-unidades-editar");
      } catch (error) {
        console.error("Error al parsear datos de edición:", error);
        localStorage.removeItem("tipo-unidades-editar"); // Limpia datos corruptos
      }
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(localStorage.getItem("tipo-unidades") || "[]"); // Valor por defecto como array vacío
    
      const index = existing.findIndex((c) => c.id === formData.id);
      if (index >= 0) {
        existing[index] = formData;
      } else {
        existing.push(formData);
      }

      localStorage.setItem("tipo-unidades", JSON.stringify(existing));
      setFormData({ id: "", tipo: "", descripcion: "" }); // Limpia el formulario
      alert("Tipo de Unidad registrado correctamente");
      navigate("/tipo-unidades/ver"); // Redirección
    } catch (error) {
      console.error("Error al guardar los datos:", error);
      alert("Ocurrió un error al registrar el tipo de unidad. Por favor, intenta de nuevo.");
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
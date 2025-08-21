import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TipoUnidadesRegistro = () => {
  const [formData, setFormData] = useState({ 
    id: "", 
    tipo: "", 
    descripcion: "",
  });

  const navigate = useNavigate();

    useEffect(() => {
      const editar = JSON.parse(localStorage.getItem("tipo-unidades-editar"));
      if (editar) {
        setFormData(editar);
        localStorage.removeItem("tipo-unidades-editar");
      }
    }, []);

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("tipo-unidades")) || [];
    
    const index = existing.findIndex((c) => c.id === formData.id);
    if(index >= 0){
      existing[index] = formData;
    }else{
      existing.push(formData)
    }

    localStorage.setItem("tipo-unidades", JSON.stringify([...existing, formData]));
    setFormData({ id: "", tipo: "", descripcion: "" });
    alert("Tipo de Unidad registrado correctamente");
    navigate("/tipo-unidades/ver")
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Registrar Tipo de Unidad</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="id" placeholder="ID" value={formData.id} onChange={handleChange} required className="w-full border rounded p-2" />
        <input type="text" name="tipo" placeholder="Tipo" value={formData.tipo} onChange={handleChange} required className="w-full border rounded p-2" />
        <input type="text" name="descripcion" placeholder="Descripción" value={formData.descripcion} onChange={handleChange} required className="w-full border rounded p-2" />
        <button type="submit" className="w-full bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800">Registrar</button>
      </form>
    </div>
  );
};

export default TipoUnidadesRegistro;

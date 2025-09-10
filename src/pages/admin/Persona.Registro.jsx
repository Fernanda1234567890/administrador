import React, { useState, useEffect } from "react";
import { useNavigate, useParams  } from "react-router-dom";
import { postData } from "../../services/api"; 
import personasData from "../../services/personas";


const PersonaRegistro = ({onRegistrar, onClose }) => {
  const { id } = useParams(); // Para edición
  const navigate = useNavigate();
  const { createData, updateData, getData } = personasData();
  
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    ci: "",
    email: "",
    telefono: "",
    direccion: "",
    fecha_nac: "",
    img: ""
  });

  // ✅ Si hay ID, cargamos datos de la persona
  useEffect(() => {
    if (id) {
      getData(1, 1, "", "", "").then(res => {
        const persona = res.data.find(p => p.id === +id);
        if (persona) setFormData(persona);
      }).catch(err => console.error(err));
    }
  }, [id]);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevaPersona = { 
      
      nombres: formData.nombres,
      apellidos: formData.apellidos,
      ci: formData.ci,
      email: formData.email,
      telefono: formData.telefono,
      direccion: formData.direccion,
      fecha_nac: formData.fecha_nac,
      img: formData.img,
     };

      try {
      const response = await postData("http://localhost:3000/api/persona", nuevaPersona);
      alert("Persona registrada con éxito");
      setFormData({ nombres: "", apellidos: "", ci: "", email: "", telefono: "", direccion: "", fecha_nac: "", img: "" });
      if (onRegistrar) onRegistrar(response);
      navigate("/persona/ver");
      if (onClose) onClose();
    } catch (error) {
      alert("Error al registrar: " + error.message);
      console.error(error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Registrar Persona</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Nombres</label>
          <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} className="w-full border rounded p-2" required />
        </div>

        <div>
          <label>Apellidos</label>
          <input type=
          "text" name="apellidos" value={formData.apellidos} onChange={handleChange} className="w-full border rounded p-2" required />
        </div>

        <div>
          <label>CI</label>
          <input type="text" name="ci" value={formData.ci} onChange={handleChange} className="w-full border rounded p-2" required />
        </div>

        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded p-2" required />
        </div>

        <div>
          <label>Teléfono</label>
          <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} className="w-full border rounded p-2" required />
        </div>

        <div>
          <label>Dirección</label>
          <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} className="w-full border rounded p-2" required />
        </div>

        <div>
          <label>Fecha de Nacimiento</label>
          <input type="date" name="fecha_nac" value={formData.fecha_nac} onChange={handleChange} className="w-full border rounded p-2" required />
        </div>

        <div>
          <label>Imagen (URL)</label>
          <input type="text" name="img" value={formData.img} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <button type="submit" className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default PersonaRegistro;

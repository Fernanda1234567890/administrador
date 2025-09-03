import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LOCAL_KEY = "personas";

const PersonaRegistro = ({onRegitrar, onClose }) => {
  
  const [formData, setFormData] = useState({
    // id: "",
    nombres: "",
    apellidos: "",
    ci: "",
    email: "",
    telefono: "",
    direccion: "",
    fechaNacimiento: "",
    img: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(window.confirm("¿Esta seguro de registrar a la persona?")){
    const newPersona = { 
      // id: Date.formData,
      nombres: formData.nombres,
      apellidos: formData.apellidos,
      ci: formData.ci,
      email: formData.email,
      telefono: formData.telefono,
      direccion: formData.direccion,
      fechaNacimiento: formData.fechaNacimiento,
      img: formData.img,
     };

    const data = JSON.parse(localStorage.getItem("personas")) || [];
    data.push(newPersona);
    localStorage.setItem("personas", JSON.stringify(data));

    setFormData({
      // id: "",
      nombres: "",
      apellidos: "",
      ci: "",
      email: "",
      telefono: "",
      direccion: "",
      fechaNacimiento: "",
      img: ""
    });

    if (onRegistrar) onRegistrar(newPersona);
      if (onClose) onClose();

    alert("Persona registrada con éxito ✅");

    navigate("/persona/ver");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Registrar Persona</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* <div>
          <label>ID</label>
          <input type="text" name="id" value={formData.id} onChange={handleChange} className="w-full border rounded p-2" required />
        </div> */}
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
          <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} className="w-full border rounded p-2" required />
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

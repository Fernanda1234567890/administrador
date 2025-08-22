import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LOCAL_KEY = "unidades";

const UnidadRegistro = ({ onRegitrar, onClose }) => {
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    descripcion: "",
    logo: "",
    responsable: "",
    dependeDe: "",
    idTipoUnidad: "",
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

    if(window.confirm("¿Esta seguro de registrar la Unidad?")){
    const newUnidad = { 
    id:Date.formData,
    nombre:formData.nombre ,
    descripcion:formData.descripcion ,
    logo:formData.logo ,
    responsable:formData.responsable ,
    dependeDe:formData.dependeDe, 
    idTipoUnidad:formData.idTipoUnidad ,
    };

    const data = JSON.parse(localStorage.getItem("unidades")) || [];
    data.push(newUnidad);
    localStorage.setItem("unidades", JSON.stringify(data));
    alert("Unidad registrada correctamente ✅");
    setFormData({
      id: "",
      nombre: "",
      descripcion: "",
      logo: "",
      responsable: "",
      dependeDe: "",
      idTipoUnidad: "",
    });
      if (onRegistrar) onRegistrar(newUnidad);
      if (onClose) onClose();

    alert("Persona registrada con éxito ✅");

    navigate("/unidades/ver");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Registrar Unidad</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
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
        ></textarea>
        <input
          type="text"
          name="logo"
          placeholder="Logo (URL)"
          value={formData.logo}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="responsable"
          placeholder="Responsable"
          value={formData.responsable}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="dependeDe"
          placeholder="Depende de"
          value={formData.dependeDe}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="idTipoUnidad"
          placeholder="ID Tipo Unidad"
          value={formData.idTipoUnidad}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

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

export default UnidadRegistro;

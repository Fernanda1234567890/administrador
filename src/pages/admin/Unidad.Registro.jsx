import React, { useState } from "react";

const UnidadRegistro = () => {
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    descripcion: "",
    logo: "",
    responsable: "",
    dependeDe: "",
    idTipoUnidad: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("unidades")) || [];
    data.push(formData);
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import unidadesData from "../../services/unidades";

const UnidadRegistro = ({ onRegistrar, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    logo: "",
    responsable: "",
    dependeDe: "",
    idTipoUnidad: "",
    estado: "",
  });

  const navigate = useNavigate();
  const { createData } = unidadesData(); // 🔹 Usamos createData directamente

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!window.confirm("¿Está seguro de registrar la Unidad?")) return;

    const newUnidad = {
      nombre: formData.nombre,
      descripcion: formData.descripcion,
      logo: formData.logo || null,
      responsable: formData.responsable,
      id_unidad: formData.dependeDe ? Number(formData.dependeDe) : null,
      id_tipo_unidad: Number(formData.idTipoUnidad),
      estado: formData.estado === "",
    };

    try {
      await createData(newUnidad); // 🔹 Llamada al backend sin token
      alert("Unidad registrada correctamente ✅");

      setFormData({
        nombre: "",
        descripcion: "",
        logo: "",
        responsable: "",
        dependeDe: "",
        idTipoUnidad: "",
        estado: "",
      });

      if (onRegistrar) onRegistrar(newUnidad);
      if (onClose) onClose();

      navigate("/unidades/ver");
    } catch (error) {
      alert("Error al registrar unidad: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Registrar Unidad</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} className="w-full border p-2 rounded" required />
        <textarea name="descripcion" placeholder="Descripción" value={formData.descripcion} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="logo" placeholder="Logo (URL)" value={formData.logo} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="responsable" placeholder="Responsable" value={formData.responsable} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="number" name="dependeDe" placeholder="Depende de (ID)" value={formData.dependeDe} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="number" name="idTipoUnidad" placeholder="ID Tipo Unidad" value={formData.idTipoUnidad} onChange={handleChange} className="w-full border p-2 rounded" required />
        <select name="estado" value={formData.estado} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">Registrar</button>
      </form>
    </div>
  );
};

export default UnidadRegistro;
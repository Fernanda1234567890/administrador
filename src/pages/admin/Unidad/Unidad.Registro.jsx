import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import unidadesData from "../../../services/unidades";
import tipoUnidadesData from "../../../services/tipoUnidades";

const UnidadRegistro = ({ onRegistrar, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    responsable: "",
    dependeDe: "",
    id_tipo_unidad: "",
  });

  //const [logo, setLogo] = useState(null);

  const [tiposUnidad, setTiposUnidad] = useState([]);
  const [unidades, setUnidades] = useState([]);
  const navigate = useNavigate();

  const { createData, getData: getUnidades } = unidadesData();
  const { getData: getTiposUnidad } = tipoUnidadesData();

useEffect(() => {
  const fetchData = async () => {
    try {
      const unidadesRes = await getUnidades(1, 1000, {}, "", "", "", "activo");
      console.log(unidadesRes.data); 

      setUnidades(unidadesRes.data?.data || []); 

      const tiposRes = await getTiposUnidad(1, 1000, {}, "", "", "", "activo");
      console.log(tiposRes.data);

      setTiposUnidad(tiposRes.data || []);
    } catch (err) {
      console.error("Error cargando datos:", err);
      setUnidades([]);
      setTiposUnidad([]);
    }
  };

  fetchData();
}, []);


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
      id_tipo_unidad: Number(formData.id_tipo_unidad),
      estado: true,
    };

    try {
      await createData(newUnidad);
      alert("Unidad registrada correctamente ");
      setFormData({
        nombre: "",
        descripcion: "",
        logo: "",
        responsable: "",
        dependeDe: "",
        id_tipo_unidad: "",
      });

      if (onRegistrar) onRegistrar(newUnidad);
      if (onClose) onClose();
      else navigate("/unidades/ver");
    } catch (error) {
      alert("Error al registrar unidad: " + (error.response?.data?.message || error.message));
    }
  };

    const handleCancel = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/unidades/ver");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Registrar Unidad</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} className="w-full border p-2 rounded" required />
        <textarea name="descripcion" placeholder="Descripción" value={formData.descripcion} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="logo" placeholder="Logo (URL)" value={formData.logo} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="responsable" placeholder="Responsable" value={formData.responsable} onChange={handleChange} className="w-full border p-2 rounded" />

        <select name="dependeDe" value={formData.dependeDe} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="">-- No depende de ninguna unidad --</option>
          {unidades.map((u) => (
            <option key={u.id} value={u.id}>{u.nombre}</option>
          ))}
        </select>

        <select
        name="id_tipo_unidad"
          value={formData.id_tipo_unidad}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">-- Seleccione tipo de unidad --</option>
          {tiposUnidad.map((t) => (
            <option key={t.id} value={t.id}>
              {t.tipo}  {/* nombre legible */}
            </option>
          ))}
        </select>

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

export default UnidadRegistro;

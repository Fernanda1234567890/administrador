import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cargosIntermediosData from "@admin/services/cargosIntermedios"; // tu service para backend
import unidadesData from "@admin/services/unidades"; // para seleccionar unidad

const CargoIntermedioRegistro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    nivel_jerarquico: "",
    id_unidad: "",
  });

  const [unidades, setUnidades] = useState([]);
  const navigate = useNavigate();
  const { createData } = cargosIntermediosData();
  const { getData: getUnidades } = unidadesData();

  useEffect(() => {
    const fetchUnidades = async () => {
      const res = await getUnidades(1, 1000, "", "", "", "activo"); // traer todas las activas
      setUnidades(res.data || []);
    };
    fetchUnidades();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!window.confirm("¿Está seguro de registrar este cargo intermedio?")) return;

    try {
      await createData({
        ...formData,
        nivel_jerarquico: Number(formData.nivel_jerarquico),
        id_unidad: Number(formData.id_unidad),
      });
      alert("Cargo intermedio registrado con éxito ✅");
      navigate("/admin/cargos-intermedios/ver");
    } catch (error) {
      alert("Error al registrar cargo intermedio: " + error.message);
    }
  };

    const handleCancel = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/admin/cargos-intermedios/ver");
    }
  };

  return (
    <div className="p-6 lg:p-12 min-h-screen bg-white">
      <h2 className="text-2xl font-bold mb-6">Registrar Cargo Intermedio</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
        
        <label className="block text-sm font-medium mb-1 text-left">Nombre</label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
         <label className="block text-sm font-medium mb-1 text-left">Descripción</label>
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <label className="block text-sm font-medium mb-1 text-left">Nivel Jerarquico</label>
        <select
          name="nivel_jerarquico"
          value={formData.nivel_jerarquico}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Seleccione nivel jerárquico</option>
          <option value="1">Bajo</option>
          <option value="2">Medio</option>
          <option value="3">Alto</option>
        </select>
                 
         <label className="block text-sm font-medium mb-1 text-left">Unidad</label>
        <select
          name="id_unidad"
          value={formData.id_unidad}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Seleccione unidad</option>
          {unidades.map(u => (
            <option key={u.id} value={u.id}>{u.nombre}</option>
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

export default CargoIntermedioRegistro;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import unidadesData from "@admin/services/unidades";
import tipoUnidadesData from "@admin/services/tipoUnidades";

const UnidadRegistro = ({ onRegistrar, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    responsable: "",
    id_unidad: "",
    id_tipo_unidad: "",
  });

  const [tiposUnidad, setTiposUnidad] = useState([]);
  const [unidades, setUnidades] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { createData, getData: getUnidades } = unidadesData();
  const { getTiposParaSelect } = tipoUnidadesData(); // Use getTiposParaSelect

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Obtener tipos de unidad activos para el select
        const tiposRes = await getTiposParaSelect();
        console.log("Tipos de unidad completa respuesta:", tiposRes);
        // getTiposParaSelect returns data directly
        const tiposData = Array.isArray(tiposRes) ? tiposRes : [];
        // Filtrar adicionalmente en frontend por si acaso
        const tiposActivos = tiposData.filter((tipo) => tipo.estado === true);
        setTiposUnidad(tiposActivos);
        console.log("Tipos de unidad procesados (activos):", tiposActivos);

        // Obtener todas las unidades
        const unidadesRes = await getUnidades(1, 1000, "", "", "", "todos");
        console.log("Unidades completa respuesta:", unidadesRes);
        const unidadesData = unidadesRes.data || unidadesRes || [];
        setUnidades(Array.isArray(unidadesData) ? unidadesData : []);
        console.log("Unidades procesadas:", unidadesData);
      } catch (err) {
        console.error("Error cargando datos:", err);
        alert("Error al cargar los datos: " + (err.message || "Error desconocido"));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!window.confirm("¿Está seguro de registrar la Unidad?")) return;

    setLoading(true);
    try {
      const unidadData = new FormData();
      unidadData.append("nombre", formData.nombre);
      unidadData.append("descripcion", formData.descripcion);
      unidadData.append("responsable", formData.responsable);
      unidadData.append("id_tipo_unidad", formData.id_tipo_unidad);

      if (formData.id_unidad) {
        unidadData.append("id_unidad", formData.id_unidad);
      }

      const resultado = await createData(unidadData);

      if (resultado.success) {
        alert("Unidad registrada correctamente");
        setFormData({
          nombre: "",
          descripcion: "",
          responsable: "",
          id_unidad: "",
          id_tipo_unidad: "",
        });
        if (onRegistrar) onRegistrar(resultado.data);
        if (onClose) onClose();
        else navigate("/admin/unidades/ver");
      } else {
        alert("Error: " + (resultado.message || "Error desconocido"));
      }
    } catch (error) {
      console.error("Error completo:", error);
      alert(
        "Error al registrar unidad: " +
          (error.response?.data?.message || error.message || "Error desconocido")
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/admin/unidades/ver");
    }
  };

  if (loading) {
    return <div className="text-center p-4">Cargando...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Registrar Unidad</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium mb-1 text-left">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingrese el nombre de la unidad"
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="descripcion" className="block text-sm font-medium mb-1 text-left">
            Descripción
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Ingrese la descripción"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label htmlFor="responsable" className="block text-sm font-medium mb-1 text-left">
            Responsable
          </label>
          <input
            type="text"
            id="responsable"
            name="responsable"
            value={formData.responsable}
            onChange={handleChange}
            placeholder="Nombre del responsable"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label htmlFor="id_unidad" className="block text-sm font-medium mb-1 text-left">
            Depende de
          </label>
          <select
            id="id_unidad"
            name="id_unidad"
            value={formData.id_unidad}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            disabled={loading}
          >
            <option value="">-- No depende de ninguna unidad --</option>
            {unidades.map((unidad) => (
              <option key={unidad.id} value={unidad.id}>
                {unidad.nombre}
              </option>
            ))}
          </select>
          {unidades.length === 0 && !loading && (
            <p className="text-red-500 text-sm mt-1">No hay unidades disponibles. Verifique la base de datos o el servicio.</p>
          )}
        </div>

        <div>
          <label htmlFor="id_tipo_unidad" className="block text-sm font-medium mb-1 text-left">
            Tipo de Unidad *
          </label>
          <select
            id="id_tipo_unidad"
            name="id_tipo_unidad"
            value={formData.id_tipo_unidad}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
            disabled={loading}
          >
            <option value="">-- Seleccione tipo de unidad --</option>
            {tiposUnidad.map((tipo) => (
              <option key={tipo.id} value={tipo.id}>
                {tipo.tipo} - {tipo.descripcion}
              </option>
            ))}
          </select>
          {tiposUnidad.length === 0 && !loading && (
            <p className="text-red-500 text-sm mt-1">No hay tipos de unidad disponibles. Verifique la base de datos o el servicio.</p>
          )}
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
          >
            {loading ? "Registrando..." : "Registrar"}
          </button>

          <button
            type="button"
            onClick={handleCancel}
            disabled={loading}
            className="flex-1 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 disabled:bg-gray-300"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UnidadRegistro;
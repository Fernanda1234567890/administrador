import axios from "axios";

const API_URL = "http://localhost:3000/api/administrativo";

const administrativosData = () => {
  // ✅ Obtener con paginación y filtros
  const getData = async (page = 1, limit = 10, search = "", estado = "") => {
    try {
      const res = await axios.get(API_URL, { params: { page, limit, search, estado } });
      return res.data;
    } catch (error) {
      console.error("Error al obtener administrativos:", error);
      throw error;
    }
  };

  // ✅ Crear
  const createData = async (data) => {
    try {
      const res = await axios.post(API_URL, data);
      return res.data;
    } catch (error) {
      console.error("Error al crear administrativo:", error);
      throw error;
    }
  };

  // ✅ Actualizar
  const updateData = async (id, data) => {
    try {
      const res = await axios.patch(`${API_URL}/${id}`, data);
      return res.data;
    } catch (error) {
      console.error("Error al actualizar administrativo:", error);
      throw error;
    }
  };

  // ✅ Baja (soft delete)
  const bajaData = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/${id}`);
      return res.data;
    } catch (error) {
      console.error("Error al dar de baja administrativo:", error);
      throw error;
    }
  };

  // ✅ Restaurar
  const restoreData = async (id) => {
    try {
      const res = await axios.patch(`${API_URL}/${id}/restaurar`);
      return res.data;
    } catch (error) {
      console.error("Error al restaurar administrativo:", error);
      throw error;
    }
  };

  return { getData, createData, updateData, bajaData, restoreData };
};

export default administrativosData;

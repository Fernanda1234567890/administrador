import axios from "axios";

const API_URL = "http://localhost:3000/api/administrativo";

const administrativosData = () => {
  const getData = async (page = 1, limit = 10, filters = {}) => {
    try {
      const res = await axios.get(API_URL, { params: { page, limit, ...filters } });
      return res.data;
    } catch (error) {
      console.error("Error al obtener administrativos:", error);
      throw error;
    }
  };

  const createData = async (data) => {
    try {
      const res = await axios.post(API_URL, data);
      return res.data;
    } catch (error) {
      console.error("Error al crear administrativo:", error);
      throw error;
    }
  };

  const updateData = async (id, data) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, data);
      return res.data;
    } catch (error) {
      console.error("Error al actualizar administrativo:", error);
      throw error;
    }
  };

  const deleteData = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/${id}`);
      return res.data;
    } catch (error) {
      console.error("Error al eliminar administrativo:", error);
      throw error;
    }
  };

  const restoreData = async (id) => {
    try {
      const res = await axios.put(`${API_URL}/${id}/restore`);
      return res.data;
    } catch (error) {
      console.error("Error al restaurar administrativo:", error);
      throw error;
    }
  };

  return {
    getData,
    createData,
    updateData,
    deleteData,
    restoreData,
  };
};

export default administrativosData;

import axios from "axios";

const API_URL = "http://localhost:3000/api/docente";

const docentesData = () => {
  const getData = async (page = 1, limit = 10, search = "", estado = "") => {
    try {
      const res = await axios.get(API_URL, { params: { page, limit, search, estado } });
      return res.data;
    } catch (error) {
      console.error("Error al obtener docentes:", error);
      throw error;
    }
  };

  const createData = async (data) => {
    try {
      const res = await axios.post(API_URL, data);
      return res.data;
    } catch (error) {
      console.error("Error al crear docente:", error);
      throw error;
    }
  };

  const updateData = async (id, data) => {
    try {
      const res = await axios.patch(`${API_URL}/${id}`, data);
      return res.data;
    } catch (error) {
      console.error("Error al actualizar docente:", error);
      throw error;
    }
  };

  const bajaData = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/${id}`);
      return res.data;
    } catch (error) {
      console.error("Error al eliminar docente:", error);
      throw error;
    }
  };

  const restoreData = async (id) => {
    try {
      const res = await axios.patch(`${API_URL}/${id}/restaurar`);
      return res.data;
    } catch (error) {
      console.error("Error al restaurar docente:", error);
      throw error;
    }
  };

  return { getData, createData, updateData, bajaData, restoreData };
};

export default docentesData;

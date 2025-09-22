import axios from "axios";
const API_URL = "http://localhost:3000/api/unidad";

const unidadesData = () => {
  const getData = async (page = 1, limit = 10, nombre = "", responsable = "", id_tipo_unidad = "", estado = "activo") => {
    try {
      const res = await axios.get(API_URL, {
        params: { page, limit, nombre, responsable, id_tipo_unidad, estado },
      });
      return res.data; // { success, data, meta }
    } catch (error) {
      console.error("Error al obtener unidades:", error);
      return { success: false, data: [], meta: { total: 0, page, limit } };
    }
  };

  const createData = async (unidad) => {
    try {
      const res = await axios.post(API_URL, unidad);
      return res.data;
    } catch (error) {
      console.error("Error al crear unidad:", error);
      throw error;
    }
  };

  const updateData = async (id, unidad) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, unidad);
      return res.data;
    } catch (error) {
      console.error("Error al actualizar unidad:", error);
      throw error;
    }
  };

  const bajaData = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/${id}`);
      return res.data;
    } catch (error) {
      console.error("Error al dar de baja unidad:", error);
      throw error;
    }
  };

  const restoreData = async (id) => {
    try {
      const res = await axios.put(`${API_URL}/restore/${id}`);
      return res.data;
    } catch (error) {
      console.error("Error al restaurar unidad:", error);
      throw error;
    }
  };

  return { getData, createData, updateData, bajaData, restoreData };
};

export default unidadesData;

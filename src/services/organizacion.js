import axios from "axios";

const API_URL = "http://localhost:3000/api/organizacion";

const organizacionData = () => {
  const getData = async (page = 1, limit = 10, search = "", estado = "activo") => {
    try {
      const respuesta = await axios.get(API_URL, {
        params: { page, limit, search, estado },
      });
      return respuesta.data;
    } catch (error) {
      console.error("Error al obtener organizaciones:", error);
      throw new Error(error.response?.data?.message || "Error al obtener organizaciones");
    }
  };

  const createData = async (organizacion) => {
    try {
      const respuesta = await axios.post(API_URL, organizacion);
      return respuesta.data;
    } catch (error) {
      console.error("Error al crear organización:", error);
      throw new Error(error.response?.data?.message || "Error al crear organización");
    }
  };

  const updateData = async (id, organizacion) => {
    try {
      const respuesta = await axios.put(`${API_URL}/${id}`, organizacion);
      return respuesta.data;
    } catch (error) {
      console.error("Error al actualizar organización:", error);
      throw new Error(error.response?.data?.message || "Error al actualizar organización");
    }
  };

  const bajaData = async (id) => {
    try {
      const respuesta = await axios.delete(`${API_URL}/${id}`);
      return respuesta.data;
    } catch (error) {
      console.error("Error al dar de baja organización:", error);
      throw new Error(error.response?.data?.message || "Error al dar de baja organización");
    }
  };

  const restoreData = async (id) => {
    try {
      const respuesta = await axios.patch(`${API_URL}/${id}/restaurar`);
      return respuesta.data;
    } catch (error) {
      console.error("Error al restaurar organización:", error);
      throw new Error(error.response?.data?.message || "Error al restaurar organización");
    }
  };

  return {
    getData,
    createData,
    updateData,
    bajaData,
    restoreData,
  };
};

export default organizacionData;
import axios from "axios";

const API_URL = "http://localhost:3000/api/cargo-intermedio";

const cargosIntermediosData = () => {
  const getData = async (page = 1, limit = 10) => {
    try {
      const respuesta = await axios.get(API_URL, { params: { page, limit } });
      return respuesta.data; 
    } catch (error) {
      console.error("Error al obtener cargos intermedios:", error);
      return { data: [] }; 
    }
  };

  const createData = async (nuevoCargo) => {
    try {
      const respuesta = await axios.post(API_URL, nuevoCargo);
      return respuesta.data;
    } catch (error) {
      console.error("Error al crear cargo intermedio:", error);
      throw error;
    }
  };

  const updateData = async (id, updatedCargo) => {
    try {
      const respuesta = await axios.put(`${API_URL}/${id}`, updatedCargo);
      return respuesta.data;
    } catch (error) {
      console.error("Error al actualizar cargo intermedio:", error);
      throw error;
    }
  };

  const deleteData = async (id) => {
    try {
      const respuesta = await axios.delete(`${API_URL}/${id}`);
      return respuesta.data;
    } catch (error) {
      console.error("Error al eliminar cargo intermedio:", error);
      throw error;
    }
  };

  return { getData, createData, updateData, deleteData };
};

export default cargosIntermediosData;

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

  const getAll = async () => {
    try {
      const respuesta = await axios.get(API_URL); 
      return respuesta.data;
    } catch (error) {
      console.error("Error al obtener todos los cargos intermedios:", error);
      return [];
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

  const assignCargo = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/cargo-intermedio-docente", data);
      return res.data;
    } catch (error) {
      console.error("Error al asignar cargo intermedio a docente:", error);
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

  return { getData, getAll, createData, assignCargo, updateData, deleteData };
};

export default cargosIntermediosData;

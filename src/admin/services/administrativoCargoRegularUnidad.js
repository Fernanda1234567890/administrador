import axios from "axios";

const API_URL = "http://localhost:3000/api/administrativo-cargo-regular-unidad";

const administrativoCargoRegularUnidadData = () => {
  // Obtener todas las asignaciones (paginadas opcionalmente)
  const getData = async (page = 1, limit = 1000, filters = {}) => {
    try {
      const respuesta = await axios.get(API_URL, { params: { page, limit, ...filters } });
      return respuesta.data; // { data: [...], meta: {...} }
    } catch (error) {
      console.error("Error al obtener asignaciones:", error);
      return { data: [], meta: { total: 0 } };
    }
  };

  // Crear una nueva asignación
  const create = async (payload) => {
    try {
      const respuesta = await axios.post(API_URL, payload);
      return respuesta.data;
    } catch (error) {
      console.error("Error al crear asignación:", error);
      throw error;
    }
  };

  const getAll = async () => {
    try {
      const res = await axios.get(API_URL);
      return res.data;
    } catch (error) {
      console.error("Error al obtener asignaciones:", error);
      return [];
    }
  };

  // Actualizar asignación (opcional)
  const update = async (id, payload) => {
    try {
      const respuesta = await axios.put(`${API_URL}/${id}`, payload);
      return respuesta.data;
    } catch (error) {
      console.error("Error al actualizar asignación:", error);
      throw error;
    }
  };

  // Eliminar asignación (opcional)
  const remove = async (id) => {
    try {
      const respuesta = await axios.delete(`${API_URL}/${id}`);
      return respuesta.data;
    } catch (error) {
      console.error("Error al eliminar asignación:", error);
      throw error;
    }
  };

  return { getData, getAll, create, update, remove };
};

export default administrativoCargoRegularUnidadData;

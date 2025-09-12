import axios from "axios";

const API_URL = "http://localhost:3000/api/administrativo";

export const getAdministrativos = async (page = 1, limit = 10, filters = {}) => {
  try {
    const res = await axios.get(API_URL, { params: { page, limit, ...filters } });
    return res.data;
  } catch (error) {
    console.error("Error al obtener administrativos:", error);
    throw error;
  }
};

export const createAdministrativo = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

export const updateAdministrativo = async (id, data) => {
  const res = await axios.patch(`${API_URL}/${id}`, data);
  return res.data;
};

export const deleteAdministrativo = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};

export const restoreAdministrativo = async (id) => {
  const res = await axios.patch(`${API_URL}/${id}/restore`);
  return res.data;
};

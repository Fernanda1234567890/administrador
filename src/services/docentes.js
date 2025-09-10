import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function docentesData() {
  return {
    // Paginado
    async getData(page = 1, limit = 10) {
      const res = await axios.get(`${API_URL}/docente?page=${page}&limit=${limit}`);
      return res.data;
    },

    // Crear
    async create(data) {
      const res = await axios.post(`${API_URL}/docente`, data);
      return res.data;
    },

    // Actualizar
    async update(id, data) {
      const res = await axios.patch(`${API_URL}/docente/${id}`, data);
      return res.data;
    },

    // Dar de baja
    async remove(id) {
      const res = await axios.delete(`${API_URL}/docente/${id}`);
      return res.data;
    },

    // Restaurar
    async restore(id) {
      const res = await axios.patch(`${API_URL}/docente/restore/${id}`);
      return res.data;
    },
  };
}
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/docente";

export default function docentesData() {
  return {
    async getData(page = 1, limit = 10) {
      const res = await axios.get(`${API_URL}/docente`, {
        params: { page, limit },
      });
      return res.data;
    },

    async create(data) {
      const res = await axios.post(`${API_URL}/docente`, data);
      return res.data;
    },

    async update(id, data) {
      const res = await axios.patch(`${API_URL}/docente/${id}`, data);
      return res.data;
    },

    async remove(id) {
      const res = await axios.delete(`${API_URL}/docente/${id}`);
      return res.data;
    },

    async restore(id) {
      const res = await axios.patch(`${API_URL}/docente/restore/${id}`);
      return res.data;
    },
  };
}

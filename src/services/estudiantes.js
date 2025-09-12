import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/estudiante";

export default function estudiantesData() {
  return {
    async getData(page = 1, limit = 10, search = "") {
      try {
        const res = await axios.get(`${API_URL}/estudiante`, {
          params: { page, limit, search },
        });
        return res.data;
      } catch (error) {
        console.error("Error al obtener estudiantes:", error);
        throw error;
      }
    },

    async create(data) {
      try {
        const res = await axios.post(`${API_URL}/estudiante`, data);
        return res.data;
      } catch (error) {
        console.error("Error al crear estudiante:", error);
        throw error;
      }
    },

    async update(id, data) {
      try {
        const res = await axios.patch(`${API_URL}/estudiante/${id}`, data);
        return res.data;
      } catch (error) {
        console.error("Error al actualizar estudiante:", error);
        throw error;
      }
    },

    async remove(id) {
      try {
        const res = await axios.delete(`${API_URL}/estudiante/${id}`);
        return res.data;
      } catch (error) {
        console.error("Error al eliminar estudiante:", error);
        throw error;
      }
    },

    async restore(id) {
      try {
        const res = await axios.patch(`${API_URL}/estudiante/restore/${id}`);
        return res.data;
      } catch (error) {
        console.error("Error al restaurar estudiante:", error);
        throw error;
      }
    },
  };
}

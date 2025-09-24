import axios from "axios";

const API_URL = "http://localhost:3000/api/estudiante";
const API_PERSONA_URL = "http://localhost:3000/api/persona"; 
const API_CARRERA_URL = "http://localhost:3000/api/carrera";

export default function estudiantesData() {
  return {
    // Obtener estudiantes
    async getData(page = 1, limit = 10, search = "", estado = "") {
      try {
        const res = await axios.get(API_URL, {
          params: { page, limit, search, estado },
        });
        return res.data;
      } catch (error) {
        console.error("Error al obtener estudiantes:", error);
        throw error;
      }
    },

    // Crear estudiante
    async create(data) {
      try {
        const res = await axios.post(API_URL, data);
        return res.data;
      } catch (error) {
        console.error("Error al crear estudiante:", error);
        throw error;
      }
    },

    // Actualizar estudiante
    async update(id, data) {
      try {
        const res = await axios.put(`${API_URL}/${id}`, data);
        return res.data;
      } catch (error) {
        console.error("Error al actualizar estudiante:", error);
        throw error;
      }
    },

    // Dar de baja (soft delete)
    async remove(id) {
      const res = await axios.delete(`${API_URL}/${id}`);
      return res.data;
    },

    // Restaurar estudiante
    async restore(id) {
      try {
        const res = await axios.put(`${API_URL}/restore/${id}`);
        return res.data;
      } catch (error) {
        console.error("Error al restaurar estudiante:", error);
        throw error;
      }
    },

    // Obtener persona por CI
    async getPersonaByCI(ci) {
      try {
        const res = await axios.get(`${API_PERSONA_URL}/ci/${ci}`);
        return res.data;
      } catch (error) {
        console.error("Error al obtener persona por CI:", error);
        throw error;
      }
    },

    // Obtener todas las personas activas para el select
    async getPersonasActivas() {
      try {
        const res = await axios.get(API_PERSONA_URL, { params: { estado: "activo", limit: 1000 } });
        return res.data.data || [];
      } catch (error) {
        console.error("Error al obtener personas activas:", error);
        throw error;
      }
    },

    // ✅ Obtener carreras
    async getCarreras() {
      const res = await axios.get(API_CARRERA_URL, { params: { page: 1, limit: 1000 } });
      return res.data.data || res.data; // depende de la estructura del backend
    },
  };
}

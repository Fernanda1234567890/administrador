import axios from "axios";

const API_URL = "http://localhost:3000/api/docente";
const API_PERSONA_URL = "http://localhost:3000/api/persona"; 


export default function docentesData() {
  return {
    async getData(page = 1, limit = 10, search = "", estado = "") {
      try {
        const res = await axios.get(API_URL, {
          params: { page, limit, search },
        });
        return res.data;
      } catch (error) {
        console.error("Error al obtener docente:", error);
        throw error;
      }
    },

    async create(data) {
     try {
        const res = await axios.post(API_URL, data);
        return res.data;
      } catch (error) {
        console.error("Error al crear docente:", error);
        throw error;
      }
    },

    async update(id, data) {
       try {
        const res = await axios.put(`${API_URL}/${id}`, data);
        return res.data;
      } catch (error) {
        console.error("Error al actualizar docente:", error);
        throw error;
      }
    },

   // Restaurar 
    async restore(id) {
      try {
        const res = await axios.put(`${API_URL}/restore/${id}`);
        return res.data;
      } catch (error) {
        console.error("Error al restaurar docente:", error);
        throw error;
      }
    },

    // ✅ Buscar persona por CI
    async getPersonaByCI(ci) {
      try {
        const res = await axios.get(`${API_PERSONA_URL}/ci/${ci}`);
        return res.data;
      } catch (error) {
        console.error("Error al obtener persona por CI:", error);
        throw error;
      }
    },
  };
}
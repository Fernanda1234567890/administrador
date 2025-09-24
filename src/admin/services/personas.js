import axios from "axios";

const API_URL = "http://localhost:3000/api/persona";

const personasData = () => {
  // Obtener
  const getData = async (page = 1, limit = 10, search = "", estado = "") => {
    try {
      const res = await axios.get(API_URL, {
        params: { page, limit, search, estado }, // 👈 backend debe aceptar "search"
      });
      return res.data; // 👈 puede ser { data, total } o array
    } catch (error) {
      console.error("Error al obtener personas:", error);
      throw error;
    }
  };

  // Crear
  const createData = async (persona) => {
    try {
      const res = await axios.post(API_URL, persona);
      return res.data;
    } catch (error) {
      console.error("Error al crear persona:", error);
      throw error;
    }
  };

  // Actualizar
  const updateData = async (id, persona) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, persona);
      return res.data;
    } catch (error) {
      console.error("Error al actualizar persona:", error);
      throw error;
    }
  };

  // Dar de baja
  const bajaData = async (id) => {
    if (!window.confirm("¿Seguro que desea dar de baja esta persona?")) return;
    try {
      const res = await axios.delete(`${API_URL}/${id}`);
      return res.data;
    } catch (error) {
      console.error("Error al dar de baja persona:", error);
      throw error;
    }
  };

  return { getData, createData, updateData, bajaData };
};

export default personasData;

import axios from "axios";

const API_URL = "http://localhost:3000/api/cargo-intermedio-docente";

const cargoIntermedioDocenteData = () => {

  // Crear nueva asignación
  const create = async (data) => {
    try {
      const res = await axios.post(API_URL, data);
      return res.data;
    } catch (error) {
      console.error("Error al crear asignación:", error);
      throw error;
    }
  };

  // Traer todas las asignaciones (opcional)
  const getAll = async () => {
    try {
      const res = await axios.get(API_URL);
      return res.data;
    } catch (error) {
      console.error("Error al obtener asignaciones:", error);
      return [];
    }
  };

  return { create, getAll };
};

export default cargoIntermedioDocenteData;

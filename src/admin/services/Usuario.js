import axios from "axios";

const API_URL = "http://localhost:3000/api/usuario";

const getAuthConfig = () => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  if (!token) return {}; // evita errores si no hay token
  return { headers: { Authorization: `Bearer ${token}` } };
};



const UsuarioService = {
  // LOGIN (abierto para todos)
  login: async (email, password) => {
    try {
      const res = await axios.post(`${API_URL}/login`, { email, password });
      return res.data; // ❌ no guardes token aquí, deja que el frontend lo maneje
    } catch (error) {
      const msg = error.response?.data?.message || "Email o contraseña incorrectos";
      throw new Error(msg);
    }
  },


  // CREAR USUARIO (solo admin)
  create: async (usuario) => {
    try {
      const res = await axios.post(API_URL, usuario, getAuthConfig());
      return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error al crear usuario");
    }
  },

  // OBTENER TODOS LOS USUARIOS (solo admin)
  findAll: async () => {
    try {
      const res = await axios.get(API_URL, getAuthConfig());
      return res.data;
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      return [];
    }
  },

  // OBTENER UN USUARIO POR ID (solo admin)
  findOne: async (id) => {
    try {
      const res = await axios.get(`${API_URL}/${id}`, getAuthConfig());
      return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error al obtener usuario");
    }
  },

  // ACTUALIZAR USUARIO (solo admin)
  update: async (id, data) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, data, getAuthConfig());
      return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error al actualizar usuario");
    }
  },

  // CAMBIAR CONTRASEÑA (solo admin si quieres, o dejar para el propio usuario)
  changePassword: async (id, currentPassword, newPassword) => {
    try {
      const res = await axios.put(
        `${API_URL}/${id}/password`,
        { currentPassword, newPassword },
        getAuthConfig()
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error al cambiar contraseña");
    }
  },

  // DAR DE BAJA USUARIO (solo admin)
  deactivate: async (id) => {
    try {
      const res = await axios.put(`${API_URL}/${id}/deactivate`, {}, getAuthConfig());
      return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error al dar de baja usuario");
    }
  },

  // ELIMINAR USUARIO (solo admin)
  remove: async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/${id}`, getAuthConfig());
      return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error al eliminar usuario");
    }
  },
};

export default UsuarioService;
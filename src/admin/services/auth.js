import axios from "axios";

const API_URL = "http://localhost:3000/auth";

export const login = async (email, password) => {
  const res = await axios.post(`${API_URL}/login`, { email, password });
  // Guardamos el token en localStorage
  localStorage.setItem("token", res.data.access_token);
  return res.data;
};

export const register = async (name, email, password, role = "usuario") => {
  const res = await axios.post(`${API_URL}/register`, {
    name,
    email,
    password,
    role,
  });
  return res.data;
};

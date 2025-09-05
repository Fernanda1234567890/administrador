import axios from 'axios'
import React from 'react'

const API_URL = "http://localhost:3000/api/persona"
const personasData = () => {

  // ✅ Listar con paginación y filtros
  const getData = async (page = 1, limit = 10, nombres = "", apellidos = "", ci = "") => {
    try {
      const res = await axios.get(API_URL, {
        params: { page, limit, nombres, apellidos, ci },
      });
      return res.data; 
    } catch (error) {
      console.error("Error al obtener personas:", error);
      throw error;
    }
  };

  // ✅ Crear
  const createData = async (persona) => {
    try {
      const res = await axios.post(API_URL, persona);
      return res.data;
    } catch (error) {
      console.error("Error al crear persona:", error);
      throw error;
    }
  };

  // ✅ Actualizar
  const updateData = async (id, persona) => {
    try {
      const res = await axios.patch(`${API_URL}/${id}`, persona);
      return res.data;
    } catch (error) {
      console.error("Error al actualizar persona:", error);
      throw error;
    }
  };

  // ✅ Dar de baja (soft-delete)
  const bajaData = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/${id}`);
      return res.data;
    } catch (error) {
      console.error("Error al dar de baja persona:", error);
      throw error;
    }
  };

  return {
    getData,
    createData,
    updateData,
    bajaData,
  };
};

export default personasData;
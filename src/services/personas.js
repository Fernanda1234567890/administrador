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
      if (!window.confirm("¿Seguro que desea dar de baja esta organización?")) return;

      try {
      const respuesta = await axios.delete(`${API_URL}/${id}`);
      return respuesta.data;
    } catch (error) {
      console.error("Error al dar de baja organización:", error);
      throw error;
    }
  };

  // ✅ Eliminar definitivamente (hard delete)
  const deleteData = async (id) => {
    if (!window.confirm("⚠️ Esta acción es irreversible. ¿Seguro que desea eliminar esta persona?")) return;

    try {
      const respuesta = await axios.delete(`${API_URL}/${id}`);
      return respuesta.data;
    } catch (error) {
      console.error("Error al eliminar persona:", error);
      throw error;
    }
  };
  

  return {
    getData,
    createData,
    updateData,
    bajaData,
    deleteData,
  };
};

export default personasData;
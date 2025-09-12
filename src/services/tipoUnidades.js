import axios from "axios"
import React from "react"

const API_URL = "http://localhost:3000/api/tipo-unidad"

 const tipoUnidadesData = () => {
    const getData = async (page = 1, limit = 10, search = "", estado = "") => {
    try {
      const respuesta = await axios.get(API_URL, {
        params: { page, limit, search, estado },
      });
      return respuesta.data; // devolvemos solo data procesada
    } catch (error) {
      console.error("Error al obtener tipo de unidad:", error);
      throw error;
    }
  };

  // ✅ Crear
  const createData = async (tipoUnidad) => {
    try {
      const respuesta = await axios.post(API_URL, tipoUnidad);
      return respuesta.data;
    } catch (error) {
      console.error("Error al crear tipo de unidad:", error);
      throw error;
    }
  };

  // ✅ Actualizar
  const updateData = async (id, tipoUnidad) => {
    try {
      const respuesta = await axios.patch(`${API_URL}/${id}`, tipoUnidad);
      return respuesta.data;
    } catch (error) {
      console.error("Error al actualizar tipo de unidad:", error);
      throw error;
    }
  };

  // ✅ Dar de baja (soft-delete)
  const bajaData = async (id) => {
    try {
      const respuesta = await axios.delete(`${API_URL}/${id}`);
      return respuesta.data;
    } catch (error) {
      console.error("Error al dar de baja al tipo de unidad:", error);
      throw error;
    }
  };

  // ✅ Restaurar
  const restoreData = async (id) => {
    try {
      const respuesta = await axios.patch(`${API_URL}/${id}`, { estado: true });
      return respuesta.data;
    } catch (error) {
      console.error("Error al restaurar tipo de unidad:", error);
      throw error;
    }
  };

  return {
    getData,
    createData,
    updateData,
    bajaData,
    restoreData,
  };
};

 export default tipoUnidadesData
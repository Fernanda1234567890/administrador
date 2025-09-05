import axios from "axios";
import React from "react";

const API_URL = "http://localhost:3000/api/cargo-regular";

const cargosRegularesData = () => {
  // Obtener todos los cargos
  const getData = async (page = 1, limit = 10, search = "") => {
    try {
      const respuesta = await axios.get(API_URL, {
        params: { page, limit, search },
      });
      return respuesta.data; // devolvemos solo data procesada
    } catch (error) {
      console.error("Error al obtener cargos regulares:", error);
      throw error;
    }
  };

  // Crear uno nuevo
  const createData = async (cargoR) => {
    try {
      const respuesta = await axios.post(API_URL, cargoR);
      return respuesta.data;
    } catch (error) {
      console.error("Error al crear cargo regular:", error);
      throw error;
    }
  };

  // Actualizar
  const updateData = async (id, cargoR) => {
    try {
      const respuesta = await axios.patch(`${API_URL}/${id}`, cargoR);
      return respuesta.data;
    } catch (error) {
      console.error("Error al actualizar cargo regular:", error);
      throw error;
    }
  };

  // Eliminar
  const deleteData = async (id) => {
    try {
      const respuesta = await axios.delete(`${API_URL}/${id}`);
      return respuesta;
    } catch (error) {
      console.error("Error al eliminar cargo regular:", error);
    }
  };

  return {
    getData,
    createData,
    updateData,
    deleteData,
  };
};

export default cargosRegularesData;
import axios from "axios";
import React from "react";

const API_URL = "http://localhost:3000/api/cargo-regular";

const cargosRegularesData = () => {
  const getData = async (page = 1, limit = 10, search = "", estado = "activo") => {
    try {
      const respuesta = await axios.get(API_URL, {
        params: { page, limit, search, estado },
      });
      return respuesta.data; 
    } catch (error) {
      console.error("Error al obtener cargos regulares:", error);
      throw error;
    }
  };

  
  const createData = async (cargoR) => {
    try {
      const respuesta = await axios.post(API_URL, cargoR);
      return respuesta.data;
    } catch (error) {
      console.error("Error al crear cargo regular:", error);
      throw error;
    }
  };


  const updateData = async (id, cargoR) => {
    try {
      const respuesta = await axios.put(`${API_URL}/${id}`, cargoR);
      return respuesta.data;
    } catch (error) {
      console.error("Error al actualizar cargo regular:", error);
      throw error;
    }
  };

  
  const bajaData = async (id) => {
    try {
      const respuesta = await axios.delete(`${API_URL}/${id}`);
      return respuesta.data;
    } catch (error) {
      console.error("Error al eliminar cargo regular:", error);
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

export default cargosRegularesData;
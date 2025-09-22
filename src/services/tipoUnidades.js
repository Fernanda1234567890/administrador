import axios from "axios";
import React from "react";


const API_URL = "http://localhost:3000/api/tipo-unidad";

const tipoUnidadesData = () => {
  const getData = async (page = 1, limit = 10, search = "", estado = true) => {
    try {
      const response = await axios.get(API_URL, {
        params: { page, limit, search, estado },
      });
      return response.data;
    } catch (error) {
      console.error("Error al obtener tipo-unidad:", error);
      throw error;
    }
  };

  const createData = async ( tipoUnidad) => {
    try {
      const response = await axios.post(API_URL, tipoUnidad);
      return response.data;
    } catch (error) {
      console.error("Error al crear tipo-unidad:", error);
      throw error;
    }
  };

  const updateData = async (id, tipoUnidad) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, tipoUnidad);
      return response.data;
    } catch (error) {
      console.error("Error al actualizar tipo-unidad:", error);
      throw error;
    }
  };

  const bajaData = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error al dar de baja al tipo-unidad:", error);
      throw error;
    }
  };

  return { getData, createData, updateData, bajaData };
};

export default tipoUnidadesData;

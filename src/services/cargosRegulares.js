import axios from "axios";
import React from "react";

const cargosRegularesData = () => {
    const getData = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/api/cargo-regular')
            return respuesta
        }
        catch(error) {
            console.log(error)
        }

    }
    return{
        getData

    }
}
export default cargosRegularesData

// ../../services/cargosRegulares.js


// const API_URL = "http://localhost:3000/api/cargo-regular";

// const cargosRegularesData = () => {
//   // Obtener todos los cargos
//   const getData = async () => {
//     try {
//       const respuesta = await axios.get(API_URL);
//       return respuesta;
//     } catch (error) {
//       console.error("Error al obtener cargos regulares:", error);
//       return { data: [] };
//     }
//   };

//   // Crear uno nuevo
//   const createData = async (nuevo) => {
//     try {
//       const respuesta = await axios.post(API_URL, nuevo);
//       return respuesta;
//     } catch (error) {
//       console.error("Error al crear cargo regular:", error);
//     }
//   };

//   // Actualizar
//   const updateData = async (id, updated) => {
//     try {
//       const respuesta = await axios.put(`${API_URL}/${id}`, updated);
//       return respuesta;
//     } catch (error) {
//       console.error("Error al actualizar cargo regular:", error);
//     }
//   };

//   // Eliminar
//   const deleteData = async (id) => {
//     try {
//       const respuesta = await axios.delete(`${API_URL}/${id}`);
//       return respuesta;
//     } catch (error) {
//       console.error("Error al eliminar cargo regular:", error);
//     }
//   };

//   return {
//     getData,
//     createData,
//     updateData,
//     deleteData,
//   };
// };

import axios from 'axios'
import React from 'react'

const administrativosData = () => {
    const getData = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/api/administrativo')
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
export default administrativosData

// ../../services/administrativos.js
// import axios from "axios";

// const API_URL = "http://localhost:3000/api/administrativo";

// const administrativosData = () => {
//   // Obtener todos
//   const getData = async () => {
//     try {
//       const respuesta = await axios.get(API_URL);
//       return respuesta;
//     } catch (error) {
//       console.error("Error al obtener administrativos:", error);
//       return { data: [] }; 
//     }
//   };

//   // Crear uno nuevo
//   const createData = async (nuevo) => {
//     try {
//       const respuesta = await axios.post(API_URL, nuevo);
//       return respuesta;
//     } catch (error) {
//       console.error("Error al crear administrativo:", error);
//     }
//   };

//   // Actualizar
//   const updateData = async (id, updated) => {
//     try {
//       const respuesta = await axios.put(`${API_URL}/${id}`, updated);
//       return respuesta;
//     } catch (error) {
//       console.error("Error al actualizar administrativo:", error);
//     }
//   };

//   // Eliminar
//   const deleteData = async (id) => {
//     try {
//       const respuesta = await axios.delete(`${API_URL}/${id}`);
//       return respuesta;
//     } catch (error) {
//       console.error("Error al eliminar administrativo:", error);
//     }
//   };

//   return {
//     getData,
//     createData,
//     updateData,
//     deleteData,
//   };
// };

// export default administrativosData;

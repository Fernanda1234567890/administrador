import axios from 'axios'
import React from 'react'

const organizacionData = () => {
    const getData = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/api/organizacion')
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
export default organizacionData

// ../../services/organizaciones.js
// import axios from "axios";

// const API_URL = "http://localhost:3000/api/organizaciones";

// const organizacionesData = () => {
//   const getData = async () => {
//     try {
//       const respuesta = await axios.get(API_URL);
//       return respuesta;
//     } catch (error) {
//       console.error("Error al obtener organizaciones:", error);
//       return { data: [] };
//     }
//   };

//   const createData = async (nuevo) => {
//     try {
//       const respuesta = await axios.post(API_URL, nuevo);
//       return respuesta;
//     } catch (error) {
//       console.error("Error al crear organización:", error);
//     }
//   };

//   const updateData = async (id, updated) => {
//     try {
//       const respuesta = await axios.put(`${API_URL}/${id}`, updated);
//       return respuesta;
//     } catch (error) {
//       console.error("Error al actualizar organización:", error);
//     }
//   };

//   const deleteData = async (id) => {
//     try {
//       const respuesta = await axios.delete(`${API_URL}/${id}`);
//       return respuesta;
//     } catch (error) {
//       console.error("Error al eliminar organización:", error);
//     }
//   };

//   return { getData, createData, updateData, deleteData };
// };

// export default organizacionesData;

import axios from 'axios'
import React from 'react'

const cargosIntermediosData = () => {
    const getData = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/api/cargo-intermedio')
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
export default cargosIntermediosData

// import axios from "axios";

// const API_URL = "http://localhost:3000/api/cargos-intermedios";

// const cargosIntermediosData = () => {
//   const getData = async () => {
//     try {
//       const respuesta = await axios.get(API_URL);
//       return respuesta;
//     } catch (error) {
//       console.error("Error al obtener cargos intermedios:", error);
//       return { data: [] };
//     }
//   };

//   const createData = async (nuevo) => {
//     try {
//       const respuesta = await axios.post(API_URL, nuevo);
//       return respuesta;
//     } catch (error) {
//       console.error("Error al crear cargo intermedio:", error);
//     }
//   };

//   const updateData = async (id, updated) => {
//     try {
//       const respuesta = await axios.put(`${API_URL}/${id}`, updated);
//       return respuesta;
//     } catch (error) {
//       console.error("Error al actualizar cargo intermedio:", error);
//     }
//   };

//   const deleteData = async (id) => {
//     try {
//       const respuesta = await axios.delete(`${API_URL}/${id}`);
//       return respuesta;
//     } catch (error) {
//       console.error("Error al eliminar cargo intermedio:", error);
//     }
//   };

//   return { getData, createData, updateData, deleteData };
// };

// export default cargosIntermediosData;
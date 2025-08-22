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

// import axios from "axios";

// const API_URL = "http://localhost:3000/administrativo";

// export const getAdministrativos = async () => {
//   const res = await axios.get(API_URL);
//   return res.data;
// };

// export const createAdministrativo = async (data) => {
//   const res = await axios.post(API_URL, data);
//   return res.data;
// };

// export const updateAdministrativo = async (id, data) => {
//   const res = await axios.put(`${API_URL}/${id}`, data);
//   return res.data;
// };

// export const deleteAdministrativo = async (id) => {
//   const res = await axios.delete(`${API_URL}/${id}`);
//   return res.data;
// };
import axios from "axios"

 const tipoUnidadesData = () => {
    const getData = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/api/tipo-unidad')
            console.log(respuesta)
            return respuesta
        }
        catch(error){
            console.log(error)
        }
    }
    return{
        getData
    }
 }
 export default tipoUnidadesData

 // ../../services/tipoUnidades.js
// import axios from "axios";

// const API_URL = "http://localhost:3000/api/tipo-unidades";

// const tipoUnidadesData = () => {
//   const getData = async () => {
//     try {
//       const respuesta = await axios.get(API_URL);
//       return respuesta;
//     } catch (error) {
//       console.error("Error al obtener tipos de unidades:", error);
//       return { data: [] };
//     }
//   };

//   return { getData };
// };

// export default tipoUnidadesData;

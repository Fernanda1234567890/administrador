import axios from "axios"

 const tipoUnidades = () => {
    const getData = async () => {
        try {
            const respuesta = await axios.get('https://localhost:3000/api/tipo-unidad')
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
 export default tipoUnidades
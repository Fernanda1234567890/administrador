import axios from "axios";
import React from "react";

const cargosRegulares = () => {
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
export default cargosRegulares
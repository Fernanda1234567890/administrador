import axios from 'axios'
import React from 'react'

const cargosIntermedios = () => {
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
export default cargosIntermedios
import axios from 'axios'
import React from 'react'

const personasData = () => {
    const getData = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/api/persona')
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
export default personasData
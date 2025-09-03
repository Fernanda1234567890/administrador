import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const OrganizacionRegistro = ({ onRegistrar, onClose }) => {
  const [formData, setFormData] = useState({
    tipo: "",
    descripcion: "",
    estado:"",
  });

  const navigate = useNavigate(); // inicializamos navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (window.confirm("¿Está seguro de registrar la organización?")) {
      const newOrganizacion = {
        tipo: formData.tipo,
        descripcion: formData.descripcion,
        estado: formData.estado,
      };

      try {
        const response = await fetch("http://localhost:3000/organizacion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newOrganizacion),
        });

        const result = await response.json();

        if (result.success) {
          setFormData({ tipo: "", descripcion: "", estado: "" });

          if (onRegistrar) onRegistrar(result.data);
          if (onClose) onClose();

          navigate("/organizacion/ver");
        } else {
          alert("Error al registrar: " + result.message);
        }
      } catch (error) {
        console.error("Error en la petición:", error);
        alert("No se pudo registrar la organización");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Registrar Organización</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="tipo" className="block text-sm font-medium mb-1">Nombre</label>
          <input
            type="text"
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            placeholder="Escriba el nombre (tipo)"
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
            <label htmlFor="descripcion" className="block text-sm font-medium mb-1">
              Descripción
            </label>
            <input
              id="descripcion"
              type="text"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder="Ingrese la descripción"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="estado" className="block text-sm font-medium mb-1">
              Estado
            </label>
            <select
              id="estado"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Seleccione un estado</option>
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </select>
          </div>



        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default OrganizacionRegistro;


// Como te mostré con fetch, no hace falta crear nada extra. Tu OrganizacionRegistro.jsx puede hacer directamente:
// const response = await fetch("http://localhost:3000/organizacion", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(newOrganizacion),
// });
// o usando axios:

// import axios from "axios";

// const response = await axios.post("http://localhost:3000/organizacion", newO
//   Crear un servicio central (recomendado)

// Si quieres que todas las llamadas a tu backend estén organizadas, sí puedes crear una carpeta services o api y un archivo organizacionService.js o .ts:

// import axios from "axios";

// const URL = "http://localhost:3000/organizacion";

// export const getOrganizaciones = () => axios.get(URL);
// export const createOrganizacion = (data) => axios.post(URL, data);
// export const updateOrganizacion = (id, data) => axios.patch(`${URL}/${id}`, data);
// export const deleteOrganizacion = (id) => axios.delete(`${URL}/${id}`);


// Luego en tu componente solo importas:

// import { getOrganizaciones, createOrganizacion } from "../../services/organizacionService";


// Esto centraliza todo y es más limpio que tener llamadas a fetch/axios repartidas por todos los componentes
// Regla práctica:

// Proyecto pequeño → fetch directo en el componente funciona.

// Proyecto mediano/grande → crear services con axios es mejor.
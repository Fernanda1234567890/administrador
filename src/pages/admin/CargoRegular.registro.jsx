import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; // 👈 Usamos axios

const CargoRegularRegistro = ({ onRegistrar, onClose }) => {
  const { id } = useParams(); // obtenemos el id de la URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    nivel_jerarquico: "",
  });
  

    // Si hay datos para edición, los cargamos
  useEffect(() => {
    if (id) {
      // ⚡ Petición al backend para cargar datos del cargo
      axios.get(`http://localhost:3000/api/cargo-regular/${id}`)
        .then(res => {
          const cargo = res.data.data || res.data; // según tu respuesta del backend
          setFormData({
            nombre: cargo.nombre,
            descripcion: cargo.descripcion,
            nivel_jerarquico: cargo.nivel_jerarquico?.toString() || "",
          });
        })
        .catch(err => {
          console.error("Error al cargar cargo:", err);
          alert("No se pudo cargar el cargo");
        });
    }
  }, [id]);

  // Manejo de cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Enviar datos
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Forzamos a número si es posible
    const payload = {
      ...formData,
      nivel_jerarquico: formData.nivel_jerarquico
        ? parseInt(formData.nivel_jerarquico, 10)
        : null,
    };

    try {
      let response;
        if (id) {
          // Editar
          response = await axios.patch(
            `http://localhost:3000/api/cargo-regular/${id}`,
            payload
          );
          alert("Cargo regular actualizado con éxito");
        } else {
          // Crear
          response = await axios.post(
            "http://localhost:3000/api/cargo-regular",
            payload
          );
          alert("Cargo regular registrado con éxito");
          setFormData({ nombre: "", descripcion: "", nivel_jerarquico: "" });
        }

      // Callback opcional
      if (onRegistrar) onRegistrar(response.data);

      // Cerrar modal si aplica
      if (onClose) onClose();

      // Redirigir a lista
      navigate("/cargo-regular/ver");
    } catch (error) {
      alert(
        "Error al guardar: " +
          (error.response?.data?.message || error.message)
      );
      console.error("Detalles del error:", error.response?.data || error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
       {id ? "Editar Cargo Regular" : "Registrar Cargo Regular"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium mb-1">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Descripción */}
        <div>
          <label className="block text-sm font-medium mb-1">Descripción</label>
          <input
            type="text"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Nivel Jerárquico */}
        <div>
          <label className="block text-sm font-medium mb-1">Nivel Jerárquico</label>
          <select
            name="nivel_jerarquico"
            value={formData.nivel_jerarquico}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="">Seleccione un nivel</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800 transition"
        >
          {formData.id ? "Actualizar" : "Registrar"}
        </button>
      </form>
    </div>
  );
};

export default CargoRegularRegistro;
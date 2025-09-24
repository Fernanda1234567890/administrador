import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CargoRegularRegistro = ({ cargo, onClose, onRegistrar }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    nivel_jerarquico: "",
  });

  useEffect(() => {
    if (cargo) {
      setFormData({
        nombre: cargo.nombre || "",
        descripcion: cargo.descripcion || "",
        nivel_jerarquico: cargo.nivel_jerarquico?.toString() || "",
      });
    } else if (id) {
      axios
        .get(`http://localhost:3000/api/cargo-regular/${id}`)
        .then((res) => {
          const data = res.data.data || res.data;
          setFormData({
            nombre: data.nombre,
            descripcion: data.descripcion,
            nivel_jerarquico: data.nivel_jerarquico?.toString() || "",
          });
        })
        .catch((err) => {
          console.error("Error al cargar cargo:", err);
          alert("No se pudo cargar el cargo");
        });
    }
  }, [cargo, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Guardar (crear o actualizar)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      nivel_jerarquico: formData.nivel_jerarquico
        ? parseInt(formData.nivel_jerarquico, 10)
        : null,
    };

    try {
      let response;
      if (id || cargo?.id) {
        // Editar
        const cargoId = id || cargo.id;
        response = await axios.patch(
          `http://localhost:3000/api/cargo-regular/${cargoId}`,
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

      if (onRegistrar) onRegistrar(response.data);
      if (onClose) onClose();

      navigate("/admin/cargo-regular/ver");
    } catch (error) {
      alert(
        "Error al guardar: " +
          (error.response?.data?.message || error.message)
      );
      console.error("Detalles del error:", error.response?.data || error);
    }
  };
  const handleCancel = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/admin/cargo-regular/ver");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        {id || cargo ? "Editar Cargo Regular" : "Registrar Cargo Regular"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium mb-1 text-left">Nombre</label>
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
          <label className="block text-sm font-medium mb-1 text-left">Descripción</label>
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
          <label className="block text-sm font-medium mb-1 text-left">Nivel Jerárquico</label>
          <select
            name="nivel_jerarquico"
            value={formData.nivel_jerarquico}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="">Seleccione un nivel</option>
            <option value="1">Alto</option>
            <option value="2">Medio</option>
            <option value="3">Bajo</option>
          </select>
        </div>

         <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            {id || cargo ? "Actualizar" : "Registrar"}
          </button>

          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CargoRegularRegistro;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const FacultadRegistro = ({ facultad, onClose, onRegistrar }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    sigla: "",
  });

  // Cargar datos si recibimos "facultad" como prop o si hay "id" en la URL
  useEffect(() => {
    if (facultad) {
      setFormData({
        nombre: facultad.nombre || "",
        sigla: facultad.sigla || "",
      });
    } else if (id) {
      axios
        .get(`http://localhost:3000/api/facultad/${id}`)
        .then((res) => {
          const data = res.data.data || res.data;
          setFormData({
            nombre: data.nombre,
            sigla: data.sigla,
          });
        })
        .catch((err) => {
          console.error("Error al cargar facultad:", err);
          alert("No se pudo cargar la facultad");
        });
    }
  }, [facultad, id]);

  // Manejo de inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Guardar (crear o actualizar)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;
      if (id || facultad?.id) {
        // Editar
        const facultadId = id || facultad.id;
        response = await axios.patch(
          `http://localhost:3000/api/facultad/${facultadId}`,
          formData
        );
        alert("Facultad actualizada con éxito");
      } else {
        // Crear
        response = await axios.post(
          "http://localhost:3000/api/facultad",
          formData
        );
        alert("Facultad registrada con éxito");
        setFormData({ nombre: "", sigla: "" });
      }

      if (onRegistrar) onRegistrar(response.data);
      if (onClose) onClose();

      navigate("/admin/facultad/ver");
    } catch (error) {
      alert(
        "Error al guardar: " +
          (error.response?.data?.message || error.message)
      );
      console.error("Detalles del error:", error.response?.data || error);
    }
  };

  // Botón Cancelar
  const handleCancel = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/admin/facultad/ver");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        {id || facultad ? "Editar Facultad" : "Registrar Facultad"}
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

        {/* Sigla */}
        <div>
          <label className="block text-sm font-medium mb-1 text-left">Sigla</label>
          <input
            type="text"
            name="sigla"
            value={formData.sigla}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Opcional"
          />
        </div>

        {/* Botones */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            {id || facultad ? "Actualizar" : "Registrar"}
          </button>

          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FacultadRegistro;

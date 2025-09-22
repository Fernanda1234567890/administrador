import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import carrerasData from "../../../services/carreras";
import axios from "axios";

const CarreraRegistro = ({ carrera, onClose, onRegistrar }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { createData, updateData } = carrerasData();

  const [facultades, setFacultades] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    sigla: "",
    id_facultad: "",
  });

  // ✅ Cargar facultades y datos de la carrera si existe
  useEffect(() => {
    const fetchFacultades = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/facultad");
        setFacultades(res.data.data || res.data);
      } catch (err) {
        console.error("Error al cargar facultades:", err);
      }
    };

    const fetchCarrera = async () => {
      if ((id && !carrera) || carrera) {
        try {
          const data = carrera
            ? carrera
            : (await axios.get(`http://localhost:3000/api/carrera/${id}`)).data.data;
          setFormData({
            nombre: data.nombre || "",
            sigla: data.sigla || "",
            id_facultad: data.facultad?.id || data.id_facultad || "",
          });
        } catch (err) {
          console.error("Error al cargar carrera:", err);
          alert("No se pudo cargar la carrera");
        }
      }
    };

    fetchFacultades();
    fetchCarrera();
  }, [id, carrera]);

  // Manejo de inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Guardar carrera
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre) {
      alert("Debe completar el nombre");
      return;
    }

    try {
      if (id || carrera?.id) {
        await updateData(id || carrera.id, formData);
        alert("Carrera actualizada con éxito");
      } else {
        await createData(formData);
        alert("Carrera registrada con éxito");
        setFormData({ nombre: "", sigla: "", id_facultad: "" });
      }

      if (onRegistrar) onRegistrar(formData);
      if (onClose) onClose();

      navigate("/carrera/ver");
    } catch (err) {
      console.error("Error al guardar carrera:", err.response?.data || err);
      alert(
        "Error al guardar carrera: " +
          (err.response?.data?.message || err.message)
      );
    }
  };

  // Botón Cancelar
  const handleCancel = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/carrera/ver");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        {id || carrera ? "Editar Carrera" : "Registrar Carrera"}
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

        {/* Sigla */}
        <div>
          <label className="block text-sm font-medium mb-1">Sigla</label>
          <input
            type="text"
            name="sigla"
            value={formData.sigla}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Facultad */}
      <div>
        <label className="block text-sm font-medium mb-1">Facultad</label>
        <select
          name="id_facultad"
          value={formData.id_facultad}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">-- Sin facultad --</option>
          {facultades.map((f) => (
            <option key={f.id} value={f.id}>
              {f.nombre} ({f.sigla})
            </option>
          ))}
        </select>
      </div>


        {/* Botones */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Registrar
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

export default CarreraRegistro;

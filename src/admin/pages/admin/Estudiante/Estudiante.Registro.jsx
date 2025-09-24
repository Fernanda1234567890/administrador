import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import estudiantesData from "@admin/services/estudiantes";

const EstudianteRegistro = () => {
  const [formData, setFormData] = useState({
    ru: "",
    carrera: "",
    id_persona: "",
  });

  const [personas, setPersonas] = useState([]);
  const [carreras, setCarreras] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    async function fetchData() {
      try {
        const personasActivas = await estudiantesData().getPersonasActivas();
        setPersonas(personasActivas);

        const listaCarreras = await estudiantesData().getCarreras();
        setCarreras(listaCarreras);
      } catch (error) {
        console.error("Error cargando personas o carreras:", error);
      }
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.ru || !formData.carrera || !formData.id_persona) {
      return alert("Todos los campos son obligatorios");
    }

    const payload = {
      ru: parseInt(formData.ru),
      carrera: formData.carrera,
      id_persona: parseInt(formData.id_persona),
      estado: true,
    };

    setSubmitting(true);
    try {
      await estudiantesData().create(payload);
      alert("Estudiante registrado correctamente");
      setFormData({ ru: "", carrera: "", id_persona: "" });
      navigate("/admin/estudiantes/ver");
    } catch (error) {
      console.error("Error al crear estudiante:", error.response?.data || error);
      alert(error.response?.data?.message || "Error al registrar estudiante");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate("/admin/estudiantes/ver");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Registrar Estudiante</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <label htmlFor="id_tipo_unidad" className="block text-sm font-medium mb-1 text-left">
          R.U.
        </label>
        <input
          type="number"
          name="ru"
          placeholder="RU"
          value={formData.ru}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        />
        <label htmlFor="id_tipo_unidad" className="block text-sm font-medium mb-1 text-left">
          Carrera
        </label>
        <select
          name="carrera"
          value={formData.carrera}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        >
          <option value="">Selecciona una carrera</option>
          {carreras.map((c) => (
            <option key={c.id} value={c.nombre}>
              {c.nombre}
            </option>
          ))}
        </select>
          <label htmlFor="id_tipo_unidad" className="block text-sm font-medium mb-1 text-left">
          Persona
        </label>
        <select
          name="id_persona"
          value={formData.id_persona}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        >
          <option value="">Selecciona una persona</option>
          {personas.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nombres} {p.apellidos} - CI: {p.ci}
            </option>
          ))}
        </select>

        {/* 🔹 Botones alineados a la izquierda */}
        <div className="flex justify-start space-x-3 mt-6">
          <button
            type="submit"
            disabled={submitting}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {submitting ? "Registrando..." : "Registrar"}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EstudianteRegistro;

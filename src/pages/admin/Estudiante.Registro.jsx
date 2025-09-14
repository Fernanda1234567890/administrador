import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import estudiantesData from "../../services/estudiantes";
import personasData from "../../services/personas";
import { listaCarrerasyFac } from "../../data/listaCarrerasyFac";

const EstudianteRegistro = () => {
  const [formData, setFormData] = useState({
    ru: "",
    carrera: "",
    idPersona: "",
    estado: "activo",
  });

  const [personas, setPersonas] = useState([]);
  const navigate = useNavigate();

  const { createData } = estudiantesData();
  const { getData: getPerson } = personasData();

  // ✅ Cargar personas desde backend
  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        const res = await getPerson();
        setPersonas(res.data || []);
      } catch (error) {
        console.error("Error al obtener personas:", error);
        setPersonas([]);
      }
    };
    fetchPersonas();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ Convertir idPersona a número
    setFormData((prev) => ({
      ...prev,
      [name]: name === "idPersona" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.ru || !formData.carrera || !formData.idPersona || !formData.estado) {
      return alert("Todos los campos son obligatorios");
    }

    try {
      // ✅ Enviar datos al backend
      await createData(formData);
      alert("Estudiante registrado correctamente ✅");

      // ✅ Limpiar formulario
      setFormData({ ru: "", carrera: "", idPersona: "", estado: "activo" });

      // ✅ Redirigir a la lista de estudiantes
      navigate("/estudiantes/ver");
    } catch (error) {
      console.error(error);
      alert("Error al registrar estudiante: " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Registrar Estudiante</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* RU */}
        <input
          type="text"
          name="ru"
          placeholder="RU"
          value={formData.ru}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        />

        {/* Carrera */}
        <select
          name="carrera"
          value={formData.carrera}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        >
          <option value="">Selecciona una carrera</option>
          {listaCarrerasyFac.map((carrera, index) => (
            <option key={index} value={carrera}>
              {carrera}
            </option>
          ))}
        </select>

        {/* Persona */}
        <select
          name="idPersona"
          value={formData.idPersona}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Selecciona Persona</option>
          {personas.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nombres} {p.apellidos}
            </option>
          ))}
        </select>

        {/* Estado */}
        <select
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        >
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </select>

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

export default EstudianteRegistro;

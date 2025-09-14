import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import docentesData from "../../services/docentes";
import personasData from "../../services/personas";
import { listaCarrerasyFac } from "../../data/listaCarrerasyFac";

const DocenteRegistro = () => {
  const [formData, setFormData] = useState({ carrera: "", id_persona: "", estado: "activo" });
  const [personas, setPersonas] = useState([]);
  const navigate = useNavigate();
  const { createData } = docentesData();
  const { getData: getPerson } = personasData();

  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        const res = await getPerson(); // Trae personas desde el backend
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.carrera || !formData.id_persona || !formData.estado) {
      return alert("Todos los campos son obligatorios");
    }

    try {
      await createData(formData); // ✅ Llama al backend
      alert("Docente registrado correctamente");
      navigate("/docentes/ver"); // Redirige a la lista
    } catch (error) {
      console.error(error);
      alert("Error al registrar docente: " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Registrar Docente</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="carrera"
          value={formData.carrera}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Selecciona una carrera</option>
          {listaCarrerasyFac.map((carrera, index) => (
            <option key={index} value={carrera}>
              {carrera}
            </option>
          ))}
        </select>

        <select
          name="id_persona"
          value={formData.id_persona}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Selecciona una persona</option>
          {personas.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nombres} {p.apellidos}
            </option>
          ))}
        </select>

        <select
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          className="border p-2 rounded w-full"
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

export default DocenteRegistro;

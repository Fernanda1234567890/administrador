import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdministrativoRegistro = () => {
  const [formData, setFormData] = useState({
    idPersona: "",
  });

  const [personas, setPersonas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPersonas = JSON.parse(localStorage.getItem("personas")) || [];
    setPersonas(storedPersonas);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (window.confirm("¿Está seguro de registrar al administrativo?")) {
      const newAdministrativo = {
        id: Date.now(),
        idPersona: formData.idPersona,
      };

      const existing = JSON.parse(localStorage.getItem("administrativos")) || [];
      localStorage.setItem(
        "administrativos",
        JSON.stringify([...existing, newAdministrativo])
      );

      setFormData({ idPersona: "" });
      alert("Administrativo registrado correctamente ✅");

      navigate("/administrativos/ver");
    }
  };

  return (
    <div className="p-6 min-h-screen dark:bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Registrar Administrativo
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow-md"
      >
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

        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default AdministrativoRegistro;

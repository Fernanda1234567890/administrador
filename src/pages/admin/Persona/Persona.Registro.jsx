import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import personasData from "../../../services/personas";

const PersonaRegistro = ({ onRegistrar, onClose }) => {
  const { id } = useParams(); // Para edición
  const navigate = useNavigate();
  const { createData, updateData, getData } = personasData();

  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    ci: "",
    email: "",
    telefono: "",
    direccion: "",
    fecha_nac: "",
  });
  const [img, setImg] = useState(null);

  // ✅ Si hay ID, cargamos datos de la persona
  useEffect(() => {
    if (id) {
      getData(1, 1, "", "", "")
        .then((res) => {
          const persona = res.data.find((p) => p.id === +id);
          if (persona) setFormData(persona);
        })
        .catch((err) => console.error(err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setImg(e.target.files[0]); // guardamos archivo
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 🔹 Crear FormData para enviar texto + archivo
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      if (img) {
        data.append("img", img); // debe coincidir con FileInterceptor('img')
      }

      await fetch("http://localhost:3000/api/persona", {
        method: "POST",
        body: data,
      });

      alert("Persona registrada con éxito");

      setFormData({
        nombres: "",
        apellidos: "",
        ci: "",
        email: "",
        telefono: "",
        direccion: "",
        fecha_nac: "",
      });
      setImg(null);

      if (onRegistrar) onRegistrar();
      navigate("/persona/ver");
      if (onClose) onClose();
    } catch (error) {
      alert("Ya existe una persona con ese CI o email. " + error.message);
      console.error(error);
    }
  };

  const handleCancel = () => {
    setFormData({
      nombres: "",
      apellidos: "",
      ci: "",
      email: "",
      telefono: "",
      direccion: "",
      fecha_nac: "",
    });
    setImg(null);
    if (onClose) onClose();
    navigate("/persona/ver");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Registrar Persona</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Nombres</label>
          <input
            type="text"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label>Apellidos</label>
          <input
            type="text"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label>CI</label>
          <input
            type="text"
            name="ci"
            value={formData.ci}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label>Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label>Dirección</label>
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label>Fecha de Nacimiento</label>
          <input
            type="date"
            name="fecha_nac"
            value={formData.fecha_nac}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label>Imagen</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border rounded p-2"
          />
          {img && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(img)}
                alt="preview"
                className="h-32 w-32 object-cover rounded"
              />
            </div>
          )}
        </div>


        <div className="flex justify-start space-x-3 mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Registrar
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

export default PersonaRegistro;

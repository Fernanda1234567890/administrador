import { useState } from "react";
import { useUser } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { user, setUser } = useUser();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const navigate = useNavigate();

  const handleSave = () => {
    setUser({ ...user, name, email });
    alert("Información actualizada correctamente");
  };

  return (
    <div className="p-6 bg-[#082F47] min-h-screen text-white">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-[#AB2A2A] text-white rounded-lg hover:opacity-90 transition"
      >
        Volver
      </button>

      <h1 className="text-3xl font-bold mb-6">Ajustes del Usuario</h1>
      <div className="space-y-5 max-w-md bg-[#082F47]/90 p-6 rounded-xl shadow-lg">
        <div>
          <label className="block text-sm font-medium mb-1">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#AB2A2A]/20 border border-[#AB2A2A] placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-[#AB2A2A]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#AB2A2A]/20 border border-[#AB2A2A] placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-[#AB2A2A]"
          />
        </div>
        <button
          onClick={handleSave}
          className="w-full py-3 mt-2 bg-gradient-to-r from-[#AB2A2A] to-[#082F47] rounded-lg font-bold text-white text-lg hover:opacity-90 transition"
        >
          Guardar cambios
        </button>
      </div>
    </div>
  );
};

export default Settings;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [current, setCurrent] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChangePassword = () => {
    if (newPassword !== confirm) {
      setError("Las contraseñas no coinciden");
      return;
    }
    setError("");
    alert("Contraseña cambiada correctamente");
    setCurrent("");
    setNewPassword("");
    setConfirm("");
  };

  return (
    <div className="p-6 bg-[#082F47] min-h-screen text-white flex justify-center">
      <div className="w-full max-w-md bg-[#082F47]/90 p-6 rounded-xl shadow-lg space-y-4">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-[#AB2A2A] text-white rounded-lg hover:opacity-90 transition"
        >
          Volver
        </button>

        <h1 className="text-3xl font-bold mb-4">Cambiar Contraseña</h1>
        {error && <p className="text-[#AB2A2A] font-semibold">{error}</p>}
        <div>
          <label className="block text-sm mb-1">Contraseña actual</label>
          <input
            type="password"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#AB2A2A]/20 border border-[#AB2A2A] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#AB2A2A]"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Nueva contraseña</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#AB2A2A]/20 border border-[#AB2A2A] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#AB2A2A]"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Confirmar nueva contraseña</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#AB2A2A]/20 border border-[#AB2A2A] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#AB2A2A]"
          />
        </div>
        <button
          onClick={handleChangePassword}
          className="w-full py-3 bg-gradient-to-r from-[#AB2A2A] to-[#082F47] rounded-lg font-bold text-white text-lg hover:opacity-90 transition"
        >
          Cambiar contraseña
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;

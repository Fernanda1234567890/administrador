import { useEffect, useState } from "react";
import { useUser } from "@admin/contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Activities = () => {
  const { user } = useUser();
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockData = [
      { action: "Ingresó al sistema", date: "2025-09-09 10:00" },
      { action: "Registró un estudiante", date: "2025-09-09 10:15" },
      { action: "Actualizó contraseña", date: "2025-09-09 10:30" },
    ];
    setActivities(mockData);
  }, []);

  return (
    <div className="p-6 bg-[#082F47] min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-[#AB2A2A] text-white rounded-lg hover:opacity-90 transition"
      >
        Volver
      </button>

      <h1 className="text-3xl font-bold mb-6 text-white">Historial de Actividades</h1>
      <p className="mb-6 text-white/80">Usuario: {user?.name}</p>
      <ul className="space-y-3">
        {activities.map((act, index) => (
          <li
            key={index}
            className="p-4 rounded-lg shadow-md bg-[#AB2A2A]/20 border border-[#AB2A2A] text-white flex justify-between items-center"
          >
            <span className="font-semibold">{act.action}</span>
            <span className="text-sm text-white/70">{act.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;

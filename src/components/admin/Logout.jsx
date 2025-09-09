import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

const Logout = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogout = () => {
    localStorage.removeItem("token"); // borra token
    setUser(null); // limpia contexto
    navigate("/login"); // redirige al login
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full text-left px-4 py-2 hover:bg-blue-950 rounded transition-colors"
    >
      Cerrar sesión
    </button>
  );
};

export default Logout;

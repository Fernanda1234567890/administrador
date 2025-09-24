import { useNavigate } from "react-router-dom";
import { useUser } from "@admin/contexts/UserContext";

const Logout = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");

    setUser(null); 
    navigate("/login");
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

import { Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

const PrivateRoute = ({ children }) => {
  const { user } = useUser();
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

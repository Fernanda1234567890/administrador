import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "@admin/contexts/UserContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;

};

export default PrivateRoute;

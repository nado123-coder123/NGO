import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminRoute = ({ children }) => {
  const { isAuthenticated, isAdmin } = useAuth();
  if (!isAuthenticated) return <Navigate to="/auth/login" replace />;
  if (!isAdmin) return <Navigate to="/dashboard/user" replace />;
  return children;
};

export default AdminRoute;

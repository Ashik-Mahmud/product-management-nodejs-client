import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../Firebase/Firebase.config";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  if (!auth?.currentUser) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;

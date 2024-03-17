import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hook";

import { Navigate } from "react-router-dom";
import { useCurrentToken } from "../../redux/feature/auth/authSlice";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;

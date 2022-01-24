import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
  console.log(isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/signIn" />;
};

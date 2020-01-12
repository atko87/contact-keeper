import React, { useContext } from "react";
import AuthContext from "../../context/auth/authContext";

export const PrivateRoute = ({ component: Component, ...res }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return <div></div>;
};

export default PrivateRoute;

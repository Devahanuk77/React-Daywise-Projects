import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = useSelector((store) => store.authReducer.isAuth);
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

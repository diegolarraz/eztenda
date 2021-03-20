import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Redirect } from "react-router-dom";

export default function Logout() {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout();
  }, []);

  return <Redirect to="/" />;
}

import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userData } = useContext(AuthContext);
  const { isLoggedIn } = userData;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to={"/"} />
      }
    />
  );
};

export default PrivateRoute;

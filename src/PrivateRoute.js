import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from  "./auth";
// we have access to the current user - are they login in or home
// we need to know what component to render 
// a private route that only authenticated user can access to.
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};


export default PrivateRoute;
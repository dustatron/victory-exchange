import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currrentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) => (!!currrentUser ? <RouteComponent {...routeProps} /> : <Redirect to={'/login'} />)}
    />
  );
};

export default PrivateRoute;

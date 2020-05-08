import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  console.log('private route', currentUser);
  return (
    <Route
      {...rest}
      render={(routeProps) => (!!currentUser ? <RouteComponent {...routeProps} /> : <Redirect to={'/home'} />)}
    />
  );
};

export default PrivateRoute;

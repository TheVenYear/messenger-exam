import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, ...props }) => {
  const user = useSelector((state) => state.app.user);
  return (
    <Route {...props}>{user ? children : <Redirect to="sign-in" />}</Route>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;

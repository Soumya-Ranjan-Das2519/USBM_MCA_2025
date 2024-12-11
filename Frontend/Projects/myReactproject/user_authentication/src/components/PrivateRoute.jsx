import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken'); // Example authentication check
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;

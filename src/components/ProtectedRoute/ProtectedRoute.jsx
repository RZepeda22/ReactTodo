import {
    Navigate,
    Outlet,
  } from 'react-router-dom';

import React from 'react'

const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/',
    children,
  }) => {
    //console.log(isAllowed);
    //console.log(isAllowed != {});
    if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Outlet />;
};

export default ProtectedRoute

/*const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/',
    children,
  }) => {
    if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Outlet />;
  };*/
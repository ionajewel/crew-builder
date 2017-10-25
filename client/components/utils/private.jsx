import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Dashboard from '../dashboard/dashboard.jsx';

// Redirects to '/' (i.e., Landing) if checkAuth returns false...
// if 'landing' and checkAuth is true, redirect to '/dashboard' - NECESSARY TO TEST WITH DATA?
// TODO: add GetCurrentUser function to check server for login status of 'id_token' on localStorage if present
const PrivateRoute = ({ component: Component, checkAuth, name }) => {
  if(name === 'landing') {
    if(checkAuth()) {
      return(
          (
          <Route render={(props) => (
            (
              <Redirect to={{
                pathname: '/dashboard'
              }}/>
            )
          )}/>
        )
      )
    } else {
      return null;
    }
  }

  return(
      (
      <Route render={(props) => (
        checkAuth() ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/'
          }}/>
        )
      )}/>
    )
  )
}
export default PrivateRoute;
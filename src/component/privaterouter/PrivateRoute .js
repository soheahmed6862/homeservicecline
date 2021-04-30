import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { Userconstruct } from '../../App';

const PrivateRoute  = ({ children, ...rest }) => {
 const [loginuser,setLoginuser]=useContext(Userconstruct)
 console.log(loginuser)

    return (
        <Route
        {...rest}
        render={({ location }) =>
        loginuser ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/Login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute ;
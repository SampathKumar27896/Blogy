import React, { Component } from 'react';
import { Route,Redirect } from 'react-router-dom';
import { verifyToken } from '../utils';

const ProtectedRoute = ({ component: Component,...rest}) => {
    //<Redirect to={{pathname: '/login', state: {from: props.location}}} />
    // console.log("Calling protected route " + auth)
    console.log(verifyToken())
    return (
        <Route
        {...rest}
        render={(props) => verifyToken()
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} /> }
    />
    )
}

export default ProtectedRoute;
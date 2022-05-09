import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    // return <Route {...rest} component={(props) => {
    //     const token = window.localStorage.getItem('token');
    //     if (token) {
    //         return <Component {...props} />
    //     } else {
    //         return <Navigate to={'/signin'} />
    //     }
    // }} />


    const token = window.localStorage.getItem('token');
    return token ? children : <Navigate to={'/signin'} />
}

export default PrivateRoute;
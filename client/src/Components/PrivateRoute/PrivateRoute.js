import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const PrivateRoute = ({component: Component, ...rest}) => {
    const user = useSelector(state => state.auth)
    return (

        // Show the component only when the admin is logged in
        // Otherwise, redirect the user to admin/signin page
        <Route {...rest} render={props => (
            user.isAuthenticated ?
                <Component {...props} />
            : <Redirect to="/admin/signin" />
        )} />
    );
};

export default PrivateRoute;
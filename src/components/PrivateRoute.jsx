import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRouteExample1 = props => {
	return (
		<Route exact={props.exact} path={props.path} component={props.component} />
	);
};

const PrivateRouteSecondExample = props => {
	return <Route {...props} />;
};

let auth = false;

const PrivateRoute = ({ component: Component, ...props }) => {
	return (
		<Route {...props}>{auth ? <Component /> : <Redirect to="/login" />}</Route>
	);
};

//Simular Autenticación

export default PrivateRoute;

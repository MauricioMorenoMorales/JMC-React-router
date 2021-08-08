import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const ConceptosBasicos = () => {
	return (
		<>
			<h2>Conceptos basicos</h2>
			<Router>
				<Switch>
					<Route exact path="/acerca">
						<h3>Acerca</h3>
					</Route>
					<Route exact path="/contacto">
						<h3>Contacto</h3>
					</Route>
					<Route exact path="/informacion">
						<h3>Informacion</h3>
					</Route>
					<Route exact path="/">
						<h3>Home</h3>
						<p>Bienvenidos a el tema de las Rutas en React</p>
						<p>Actualmente te encuentras viendo la sección de contacto</p>
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default ConceptosBasicos;

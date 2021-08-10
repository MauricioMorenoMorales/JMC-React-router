import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import Acerca from '../pages/Acerca';
import Contacto from '../pages/Contacto';
import Productos from '../pages/Productos';
import Usuario from '../pages/Usuario';
import Error404 from './Error404';
import Home from './Home';
import MenuConceptos from './MenuConceptos';

export const PrimeraExplicacion = () => {
	return (
		<>
			<h2>Conceptos basicos</h2>
			{/* El router renderiza elementos dependiendo que cumplan un valor en la url */}
			<Router>
				{/* El switch lo que hace es que solo se renderize un elemento por url */}
				<Switch>
					<Route exact path="/acerca">
						<Acerca />
					</Route>
					{/* Dos formas de declarar renderizado de un componente en una linea */}
					<Route exact path="/contacto" component={Contacto} />
					<Route
						exact
						path="/contacto"
						children={
							<>
								<Contacto />
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Reiciendis est repudiandae doloribus, totam quis laborum ipsam
									excepturi quam ut fugit debitis omnis, ducimus doloremque
									animi itaque officiis quo alias voluptates!
								</p>
							</>
						}
					/>
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

const ConceptosBasicos = () => {
	return (
		<>
			<h2>Conceptos basicos</h2>
			<Router>
				<MenuConceptos />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/acerca" component={Acerca} />
					<Route exact path="/contacto" component={Contacto} />
					<Route exact path="/usuario/:username/:age" component={Usuario} />
					<Route exact path="/productos" component={Productos} />
					<Route exact path="/about">
						<Redirect to="/" />
					</Route>
					<Route exact path="/contact">
						<Redirect to="/" />
					</Route>
					{/* Tiene que estar siempre al final */}
					<Route path="*" component={Error404} />
				</Switch>
			</Router>
		</>
	);
};

export default ConceptosBasicos;

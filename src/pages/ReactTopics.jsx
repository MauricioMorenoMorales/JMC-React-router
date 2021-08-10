import React from 'react';
import {
	Link,
	Route,
	Switch,
	useParams,
	useRouteMatch,
} from 'react-router-dom';

const Topic = () => {
	const { topic } = useParams();
	return (
		<div>
			<h4>Estas viendo el tema {topic}</h4>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
				fugiat numquam deleniti, suscipit pariatur quod earum provident ipsa
				veniam exercitationem!
			</p>
		</div>
	);
};

const ReactTopics = () => {
	const { path, url } = useRouteMatch();
	/*"path" nos permite construir rutas relativas <Route>,
	mientras que "url" nos permite construir enlaces relativos <Link> o <NavLink>*/
	return (
		<div>
			<h3>Temas de React</h3>
			<ul>
				<li>
					<Link to={`${url}/jsx`}>JSX</Link>
				</li>
				<li>
					<Link to={`${url}/props`}>Props</Link>
				</li>
				<li>
					<Link to={`${url}/estado`}>Estado</Link>
				</li>
				<li>
					<Link to={`${url}/componentes`}>Componentes</Link>
				</li>
			</ul>
			<Switch>
				<Route exact path={path}>
					<h4>Elige un tema de React</h4>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
						distinctio, reprehenderit perspiciatis animi sunt earum
						exercitationem quibusdam excepturi quos molestiae.
					</p>
				</Route>
				{/* en un path variable no puedes usar exact */}
				<Route path={`${path}/:topic`} component={Topic} />
			</Switch>
		</div>
	);
};

export default ReactTopics;

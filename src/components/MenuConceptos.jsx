import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MenuConceptos = () => {
	return (
		<nav>
			<ol>
				<li>
					<span>Menú con enlaces html (no recomendado)</span>
					<a href="/">Home</a>
					<a href="/acerca">Acerca</a>
					<a href="/contacto">Contacto</a>
				</li>
				<li>
					<span>Menú con enlaces react router :)</span>
					<Link to="/">Home</Link>
					<Link to="/acerca">Acerca</Link>
					<Link to="/contacto">Contacto</Link>
					<Link to="/no-existe">Error 404</Link>
				</li>
				<li>
					<span>Componente Link</span>
					<NavLink exact to="/" activeClassName="active">
						Home
					</NavLink>
					<NavLink exact to="/acerca" activeClassName="active">
						Acerca
					</NavLink>
					<NavLink exact to="/contacto" activeClassName="active">
						Contacto
					</NavLink>
				</li>
			</ol>
		</nav>
	);
};

export default MenuConceptos;

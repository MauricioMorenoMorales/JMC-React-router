import React from 'react';
import { useParams } from 'react-router-dom';

const Usuario = () => {
	const params = useParams();
	console.log(params);
	const { username, age } = useParams();
	return (
		<div>
			<h3>Perfil de el Usuario</h3>
			<p>
				Observa el texto abajo y la url y veras que se pueden pasar parametros
				por url
			</p>
			<p>
				Nombre de el usuario <b>{username}</b>
			</p>
			<p>
				Que tiene la edad <b>{age}</b>
			</p>
		</div>
	);
};

export default Usuario;

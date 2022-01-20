import React from 'react';
import { useHistory } from 'react-router-dom';

const SongTableRow = ({ id, element, handleDeleteSong }) => {
	const { bio, search } = element;
	console.log(element);

	const history = useHistory();

	return (
		<tr>
			<td>
				<img src="https://placeimg.com/40/40/animals" alt="" />
			</td>
			<td>Nombre del Artista</td>
			<td>Nombre Canción</td>
			<td>
				<button onClick={() => history.push(`/canciones/${id}`)}>Ver</button>
				<button onClick={() => handleDeleteSong(id)}>Eliminar</button>
			</td>
		</tr>
	);
};

export default SongTableRow;

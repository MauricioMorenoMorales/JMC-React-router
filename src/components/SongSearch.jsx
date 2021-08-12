import React, { useState, useEffect } from 'react';

//Helpers
import { helpHttp } from '../helpers/helpHttp';

// Components
import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';

const SongSearch = () => {
	//States
	const [search, setSearch] = useState(null);
	const [lyric, setLyric] = useState(null);
	const [bio, setBio] = useState(null);
	const [loading, setLoading] = useState(false);

	//! El async await va dentro no fuera
	useEffect(() => {
		if (search === null) return;
		console.log(search);
		//Obtiene la información
		const fetchData = async function () {
			const { artist, song } = search;
			const artistUrl =
				`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`.replace(
					' ',
					'%20',
				);
			const songUrl =
				`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${song}`.replace(
					' ',
					'%20',
				);
			console.log(artistUrl, songUrl);

			setLoading(true);
			const [artistResponse, songResponse] = await Promise.all([
				helpHttp().get(artistUrl),
				helpHttp().get(songUrl),
			]);
			console.log(artistResponse, '>>>>', songResponse);
			setBio(artistResponse);
			setLyric(songResponse);
			setLoading(false);
		};

		fetchData();
	}, [search]);

	const handleSearch = data => {
		setSearch(data);
	};

	return (
		<div>
			<h2>Probando esta wea</h2>
			<p>
				Solamente funcionara buscando 2 bandas, no funciona la api de lyric la
				cual es lo mismo, una banda
			</p>
			{loading && <Loader />}
			<SongForm handleSearch={handleSearch} />
			{search && !loading && (
				<SongDetails search={search} bio={bio} lyric={lyric} />
			)}
		</div>
	);
};

export default SongSearch;

/**Este componente es un ejercicio para usar una api externa que buscara
  canciones y artistas UwU
 */

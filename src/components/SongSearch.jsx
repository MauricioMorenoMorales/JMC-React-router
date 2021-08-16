import React, { useState, useEffect } from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';

//Helpers
import { helpHttp } from '../helpers/helpHttp';
import Error404 from './Error404';

// Components
import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import SongTable from './SongTable';

const mySongsInit = JSON.parse(localStorage.getItem('mySongs')) || [];

const SongSearch = () => {
	//States
	const [search, setSearch] = useState(null),
		[lyric, setLyric] = useState(null),
		[bio, setBio] = useState(null),
		[loading, setLoading] = useState(false);

	const [mySongs, setMySongs] = useState(mySongsInit);

	//! El async await va dentro no fuera
	useEffect(() => {
		/*Este useEffect está atento a que cuándo cambie el estado de search,
		Usando la información dentro de search hace la petición y la guarda en sus
		respectivos estados */
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
		localStorage.setItem('mySongs', JSON.stringify(mySongs));
	}, [search, mySongs]);

	const handleSearch = data => {
		/*Esta función se pasa dentro de el formulario como input, de el cual
		data no es más que el valor de los inputs de el formulario  */
		setSearch(data);
	};

	const handleSaveSong = () => {
		alert('salvando canción en Favoritos');
	};
	const handleDeleteSong = id => {
		alert(`Eliminando cancion con el id:${id}`);
	};

	return (
		<div>
			<HashRouter basename="canciones">
				<header>
					<h2>Buscador de canciones</h2>
					<Link to="/">Home</Link>
				</header>
				{loading && <Loader />}
				<article className="grid-1-2">
					<Switch>
						<Route exact path="/">
							{/* Aqui se realizan las busquedas y por tanto se hacen cambios a estados */}
							<SongForm
								handleSearch={handleSearch}
								handleSaveSong={handleSaveSong}
							/>
							<SongTable
								mySongs={mySongs}
								handleDeleteSong={handleDeleteSong}
							/>
							<p>
								Solamente funcionara buscando 2 bandas, no funciona la api de
								lyric la cual es lo mismo, una banda
							</p>
							{/* Aqui se recibe la información de los estados */}
							{search && !loading && (
								<SongDetails search={search} bio={bio} lyric={lyric} />
							)}
						</Route>
						<Route exact path="/canciones/:id">
							<h2>Página de canción</h2>
						</Route>
						<Route path="*" children={Error404} />
					</Switch>
				</article>
			</HashRouter>
		</div>
	);
};

export default SongSearch;

/**Este componente es un ejercicio para usar una api externa que buscara
  canciones y artistas UwU
 */

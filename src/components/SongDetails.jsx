import React from 'react';
import Message from './Message';

const SongDetails = ({ search, lyric, bio }) => {
	if (!lyric || !bio) return null;
	const artist = bio.artists[0];
	const secondArtist = lyric.artists[0];

	return (
		<>
			<h2>Detalles</h2>
			{bio.artists ? (
				<div className="song-artist">
					<h3>{artist.strArtist}</h3>
					<img src={artist.strArtistThumb} alt={artist.strArtist} />
					<p>
						{artist.intBornYear || 'Unknown'} -{' '}
						{artist.intDiedYear || 'Presente'}
					</p>
					<p>{artist.strCountry}</p>
					<p>
						{artist.strGenre} - {artist.strStyle}
					</p>
					<a
						href={`http://${artist.strWebsite}`}
						target="_blank"
						rel="noreferrer"
					>
						Sitio Web Oficial
					</a>
					<p>{artist.strBiographyEN}</p>
				</div>
			) : (
				<Message
					message={`Error: no existe el interprete "<em>${search.song}</em>"`}
					backgroundColor="#dc3545"
				/>
			)}
			{/* Antes bio */}
			{lyric.artists ? (
				<div className="song-artist">
					<h3>{secondArtist.strArtist}</h3>
					<img src={secondArtist.strArtistThumb} alt={secondArtist.strArtist} />
					<p>
						{secondArtist.intBornYear || 'Unknown'} -{' '}
						{secondArtist.intDiedYear || 'Presente'}
					</p>
					<p>{secondArtist.strCountry}</p>
					<p>
						{secondArtist.strGenre} - {secondArtist.strStyle}
					</p>
					<a
						href={`http://${secondArtist.strWebsite}`}
						target="_blank"
						rel="noreferrer"
					>
						Sitio Web Oficial
					</a>
					<p>{secondArtist.strBiographyEN}</p>
				</div>
			) : (
				<Message
					message={`Error: no existe el interprete "<em>${search.artist}</em>"`}
					backgroundColor="#dc3545"
				/>
			)}
		</>
	);
};

export default SongDetails;

// Minuto 5:30

// artist = bio.artists[0]

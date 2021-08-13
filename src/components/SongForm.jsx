import React, { useState } from 'react';

const initialForm = { artist: '', song: '' };

const SongForm = ({ handleSearch, handleSaveSong }) => {
	const [form, setForm] = useState(initialForm);
	const [isDisabled, setIsDisabled] = useState(true);

	const handleChange = event => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = event => {
		event.preventDefault();

		if (!form.artist || !form.song) {
			alert('Datos incompletos');
			setIsDisabled(false);
			return;
		}

		handleSearch(form);
		setForm(initialForm);
		setIsDisabled(false);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="artist"
					placeholder="Nombre de el Interprete"
					onChange={handleChange}
					value={form.artist}
					id=""
				/>
				<input
					type="text"
					name="song"
					placeholder="Nombre de La segunda canción"
					onChange={handleChange}
					value={form.song}
					id=""
				/>
				<input type="submit" value="Enviar" />
				<input
					type="button"
					value="Agregar Canción"
					onClick={handleSaveSong}
					disabled={isDisabled && 'disabled'}
				/>
			</form>
		</div>
	);
};

export default SongForm;

import React, { useState } from 'react';

const initialForm = { artist: '', song: '' };

const SongForm = ({ handleSearch }) => {
	const [form, setForm] = useState(initialForm);

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
			return;
		}

		handleSearch(form);
		setForm(initialForm);
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
			</form>
		</div>
	);
};

export default SongForm;

import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Productos = () => {
	const { search } = useLocation(),
		query = new URLSearchParams(search);

	const LIMIT = 20;

	const start = parseInt(query.getAll('inicio')) || 1,
		end = parseInt(query.getAll('fin')) || LIMIT;

	const history = useHistory();

	const handlePrev = event => {
		history.push({ search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}` });
	};
	const handleNext = event => {
		history.push({ search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}` });
	};
	return (
		<div>
			<div>
				<h3>Productos</h3>
				<p>
					Mostrando Productos del <b>{start}</b> al <b>{end}</b>
				</p>
				{start > LIMIT && <button onClick={handlePrev}>Atrás</button>}
				<button onClick={handleNext}>Adelante</button>
			</div>
		</div>
	);
};

export default Productos;

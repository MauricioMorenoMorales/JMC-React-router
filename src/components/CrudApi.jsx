import React, { useState, useEffect } from 'react';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';
import { helpHttp } from '../helpers/helpHttp';

// Components
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Error404 from './Error404';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {
	const [db, setDb] = useState(null),
		[dataToEdit, setDataToEdit] = useState(null), // Is used in the <form /> and is activated on the component <crudTable />
		[error, setError] = useState(null),
		[loading, setLoading] = useState(true);

	const api = helpHttp();
	let url = 'http://localhost:3333/santos';

	useEffect(() => {
		setLoading(true);
		helpHttp()
			.get(url)
			.then(res => {
				if (!res.err) {
					setDb(res);
					setError(null);
				} else {
					setDb(null);
					setError(res);
				}
			});
		setLoading(false);
	}, [url]);

	//Here you have the crud functions create update delete, but not get that is default
	//Create data inside the component <CrudForm />
	const createData = data => {
		data.id = Date.now();
		const options = {
			body: data,
			headers: { 'content-type': 'application/json' },
		};

		api.post(url, options).then(fetchResponse => {
			console.log(fetchResponse);
			if (!fetchResponse.err) {
				setDb([...db, fetchResponse]);
			} else {
				setError(fetchResponse);
			}
		});

		setDb([...db, data]);
	}; //!||
	const updateData = data => {
		const endPoint = `${url}/${data.id}`;
		const options = {
			body: data,
			headers: { 'content-type': 'application/json' },
		};
		api.put(endPoint, options).then(postResponse => {
			if (!postResponse.err) {
				let newData = db.map(element =>
					element.id === data.id ? data : element,
				);
				setDb(newData);
			} else {
				setError(postResponse);
			}
		});
	}; //!||
	const deleteData = id => {
		let isDelete = window.confirm(
			`¿Estás seguro de eliminar el registro con el id? ${id}`,
		);
		if (isDelete) {
			const endPoint = `${url}/${id}`;
			const options = {
				headers: { 'content-type': 'application/json' },
			};
			api.del(endPoint, options).then(deleteResponse => {
				if (!deleteResponse.err) {
					const newData = db.filter(element => element.id !== id);
					setDb(newData);
				} else {
					setError(deleteResponse);
				}
			});
			const newData = db.filter(element => element.id !== id);
			setDb(newData);
		} else {
			return;
		}
	};

	return (
		<div>
			<HashRouter basename="santos">
				<header>
					<h2>CRUD API con Rutas</h2>
					<nav>
						<NavLink to="/" activeClassName="active">
							Santos
						</NavLink>
						<NavLink to="/agregar" activeClassName="active">
							Agregar
						</NavLink>
					</nav>
				</header>
				<Switch>
					<Route exact path="/">
						<h2>Home de santos</h2>

						{loading && <Loader />}
						{error && (
							<Message
								message={`Error ${error.status}: ${error.statusText}`}
								backgroundColor="#dc3545"
							/>
						)}
						{/* CrudApi default function is get the data and store it in the component Crudtable */}
						{/* When they click on a button inside this component they call the two functions bellow  with the element and elemet.id*/}
						{db && (
							<CrudTable
								data={db}
								setDataToEdit={setDataToEdit}
								deleteData={deleteData}
							/>
						)}
					</Route>
					<Route exact path="/agregar">
						<h2>Agregar Santos</h2>
						<CrudForm
							createData={createData}
							updateData={updateData}
							dataToEdit={dataToEdit}
							setDataToEdit={setDataToEdit}
						/>
					</Route>
					<Route exact path="/editar/:id">
						<h2>Editar santos</h2>
						<CrudForm
							createData={createData}
							updateData={updateData}
							dataToEdit={dataToEdit}
							setDataToEdit={setDataToEdit}
						/>
					</Route>
					<Route path="*" children={Error404} />
				</Switch>
			</HashRouter>
			<br />
			<h2>CRUD API</h2>
			<article className="grid-1-2">
				{/* The crud form create and update the data */}
			</article>
		</div>
	);
};

export default CrudApi;

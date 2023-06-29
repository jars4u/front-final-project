import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	//FORMULARIO DE REGISTRO
	<div className="container mt-5">
		<div className="row justify-content-center">
			<div className="col-12 col-sm-9 col-md-7 col-lg-6 col-lx-5 login_container">
				<h2 className="text-center">
					<strong>Registrate</strong>
				</h2>

				<form>
					<div className="form-group mt-3">
						<label htmlFor="fullname">Nombre y Apellido:</label>
						<input
							type="text"
							className="form-control"
							id="fullname"
							name="fullname"
							placeholder="Ingresa tu nombre completo"
						// onChange={handleChange}
						// value={user.name}
						></input>
					</div>

					<div className="form-group mt-3">
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							placeholder="Ingresa tu dirección de correo"
						// onChange={handleChange}
						// value={user.email}
						></input>
					</div>

					<div className="form-group mt-3">
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							placeholder="Ingresa un password"
						// onChange={handleChange}
						// value={user.password}
						></input>
					</div>


					<div className="form-group mt-3">
						<label htmlFor="avatar">Avatar:</label>
						<input
							type="file"
							className="form-control"
							id="avatar"
							name="avatar"
							placeholder="Escoge una imagen para tu avatar"
						// onChange={handleChange}
						// value={user.avatar}
						></input>
					</div>

					<select className="form-select mt-3" aria-label="Default select example">
						<option selected>Escoge tu tipo de cuenta:</option>
						<option value="1">Usuario</option>
						<option value="2">Restaurant</option>
					</select>

				</form>
			</div>
		</div >

		{/* <h4><strong>REGISTRATE</strong></h4>
		<input
			ClassName="form"
			type="text"
			name="name"
			id="names"
			placeholder="Ingresa tu Nombre"
		></input>
		<input
			ClassName="form"
			type="text"
			name="apellidos"
			id="apellidos"
			placeholder="Ingrese su Apellido"
		></input>
		<input
			ClassName="form"
			type="email"
			name="correo"
			id="correo"
			placeholder="Ingrese su Correo"
		></input>
		<input
			ClassName="form"
			type="password"
			name="correo"
			id="correo"
			placeholder="Ingrese su Contraseña"
		></input>
		<p>
		Estoy de acuerdo con <a href="#">Terminos y Condiciones</a>
		</p>
		<input ClassName="button" type="submit" value="Registrar"></input>
		<p>
		<a href="#">¿Ya tienes Cuenta?</a>
	</p> */}
	</div >
);

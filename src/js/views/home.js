import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h4>REGISTRATE</h4>
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
		</p>
	</div>
);

import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const initialState = {
    name: "",
    password: "",
    email: "",
    restaurantName: "",
    restaurantRif: "",
};


//↓↓↓ REVISAR PORQUE NO EXPORTA SIN ESTE EXPORT
export const Register = () => { //↓ NO ACEPTA SIN ESTE SEMICOLON
    const { actions } = useContext; { Context };
    const [user, setUser] = useState(initialState);


    //EVENTOS
    const handleRegister = () => {
        //AQUI VA LA FUNCION
        //actions.register({});
        console.log("Registrando al usuario...")
    };
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };



    return (
        <>
            {/* FORMULARIO DE REGISTRO */}
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-9 col-md-7 col-lg-6 col-lx-5 login_container">
                        <h2 className="text-center">
                            <strong>Registrate</strong>
                        </h2>

                        <form>
                            <div className="form-group mt-4">
                                <label htmlFor="name">Nombre de usuario:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Ingresa un nombre de usuario"
                                    onChange={handleChange}
                                    value={user.name}
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
                                    onChange={handleChange}
                                    value={user.password}
                                ></input>
                            </div>

                            <div className="form-group mt-3">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Ingresa una dirección de correo"
                                    onChange={handleChange}
                                    value={user.email}
                                ></input>
                            </div>

                            <div className="form-group mt-3">
                                <label htmlFor="restaurantName">Nombre de tu Restaurant:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="restaurantName"
                                    name="restaurantName"
                                    placeholder="Ingresa un nombre"
                                    onChange={handleChange}
                                    value={user.restaurantName}
                                ></input>
                            </div>
                            
                            <div className="form-group mt-3">
                                <label htmlFor="restaurantRif">Rif de tu Restaurant:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="restaurantRif"
                                    name="restaurantRif"
                                    placeholder="Ingresa el Rif de tu comercio"
                                    onChange={handleChange}
                                    value={user.restaurantRif}
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
                                    onChange={handleChange}
                                    value={user.avatar}
                                ></input>
                            </div>

                            <div>
                                <button
                                    type="button"
                                    className="btn btn-warning text-white  w-100 mt-3"
                                    onClick={handleRegister()}
                                >
                                    Registrarse
                                </button>
                            </div>

                            {/* SELECTOR DE ROLES
					<select className="form-select mt-3" aria-label="Default select example">
						<option selected>Escoge tu tipo de cuenta:</option>
						<option value="1">Usuario</option>
						<option value="2">Restaurant</option>
					</select> */}

                        </form>
                    </div>
                </div >
            </div >
        </>);
}

export default Register;
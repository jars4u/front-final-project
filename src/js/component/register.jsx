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
    // avatar: "",
};

export const Register = () => {
    const { actions } = useContext(Context);
    const [user, setUser] = useState(initialState);

    //EVENTOS
    const handleRegister = (e) => {
        // e.preventDefault();

        const formData = new FormData();

        formData.append("name", user.name);
        formData.append("password", user.password);
        formData.append("email", user.email);
        formData.append("restaurantName", user.restaurantName);
        formData.append("restaurantRif", user.restaurantRif);
        // formData.append("avatar", user.avatar);

        //AQUI VA LA FUNCION FLUX registerUser
        const response = actions.registerUser(formData);

        console.log("Registrando al usuario...");
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
                                    required
                                ></input>
                                <div
                                    className="alert alert-danger text-center p-0"
                                    role="alert"
                                >
                                    El nombre de usuario no es válido!
                                </div>
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
                                    required
                                ></input>
                                <div
                                    className="alert alert-danger text-center p-0"
                                    role="alert"
                                >
                                    El password no es válido!
                                </div>
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
                                    required
                                ></input>
                                <div
                                    className="alert alert-danger text-center p-0"
                                    role="alert"
                                >
                                    e-mail inválido!
                                </div>
                            </div>



                            <div className="form-group mt-3">
                                <label htmlFor="restaurantName">Nombre del comercio:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="restaurantName"
                                    name="restaurantName"
                                    placeholder="Ingresa un nombre"
                                    onChange={handleChange}
                                    value={user.restaurantName}
                                    required
                                ></input>
                                <div
                                    className="alert alert-danger text-center p-0"
                                    role="alert"
                                >
                                    Nombre inválido!
                                </div>
                            </div>



                            <div className="form-group mt-3">
                                <label htmlFor="restaurantRif">Rif del comercio:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="restaurantRif"
                                    name="restaurantRif"
                                    placeholder="Ingresa el Rif de tu comercio"
                                    onChange={handleChange}
                                    value={user.restaurantRif}
                                    required
                                ></input>
                                <div
                                    className="alert alert-danger text-center p-0"
                                    role="alert"
                                >
                                    Rif inválido!
                                </div>
                            </div>



                            <div>
                                <button
                                    type="button"
                                    className="btn btn-warning text-white  w-100 mt-3"
                                    onClick={() => handleRegister()}
                                >
                                    Registrarse
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-danger p-0">
			<div className="container-fluid">
				<a className="navbar-brand text-white fs-3" href="#"><strong>COMECON</strong></a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active text-light" aria-current="page" href="#">Quiero comer</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">Contacts</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">About us</a>
						</li>
					</ul>
					<span className="navbar-text text-white fs-5">
						<em><strong>El precio lo pones tu...!</strong></em>
					</span>
				</div>
			</div>
		</nav>
	);
};

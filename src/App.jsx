import React from "react";
import logo from "./assets/ayww-logo.png";
import Dictionary from "./Dictionary.jsx";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">
					<img src={logo} className="App-logo img-fluid" alt="logo" />
				</header>
				<main>
					<Dictionary defaultKeyword="punctual" />
				</main>
				<footer className="App-footer text-center">
					<small>Coded by Wesley Hoplaros</small>
				</footer>
			</div>
		</div>
	);
}

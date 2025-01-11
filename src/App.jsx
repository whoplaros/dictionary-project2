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
					<small>
						This app was coded by{" "}
						<a
							href="https://wesleyhoplarosportfolio.netlify.app"
							target="_blank"
						>
							Wesley Hoplaros
						</a>
						. It is open-sourced on{" "}
						<a
							href="https://github.com/whoplaros/dictionary-project2"
							target="_blank"
						>
							Github
						</a>{" "}
						and hosted by{" "}
						<a href="https://asyouwish-dictionary.netlify.app" target="_blank">
							Netlify
						</a>
						.
					</small>
				</footer>
			</div>
		</div>
	);
}

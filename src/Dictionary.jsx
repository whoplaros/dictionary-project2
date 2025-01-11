import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.jsx";
import "./Dictionary.css";

export default function Dictionary(props) {
	const [keyword, setKeyword] = useState(props.defaultKeyword);
	const [results, setResults] = useState(null);
	const [loaded, setLoaded] = useState(false);

	function handleResponse(response) {
		console.log(response.data);
		setResults(response.data);
	}
	function search() {
		//documentation: https://www.shecodes.io/learn/apis/dictionary
		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=e546fd9teb385774339o4d3b5b79c3a0`;
		axios.get(apiUrl).then(handleResponse);
	}
	function handleSubmit(event) {
		event.preventDefault();
		search();
	}
	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}
	function load() {
		setLoaded(true);
		search();
	}

	if (loaded) {
		return (
			<div className="Dictionary">
				<section className="formSection">
					<form onSubmit={handleSubmit}>
						<input
							type="search"
							autoFocus={true}
							onChange={handleKeywordChange}
						/>
					</form>
				</section>
				<Results results={results} />
			</div>
		);
	} else {
		load();
		return "Loading";
	}
}

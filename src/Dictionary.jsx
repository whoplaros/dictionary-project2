import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.jsx";
import "./Dictionary.css";


export default function Dictionary() {
	const [keyword, setKeyword] = useState("");
	const [results, setResults] = useState(null);

	function handleResponse(response) {
		console.log(response.data);
		setResults(response.data);
	}

	function search(event) {
		event.preventDefault();
		alert(`Searching for definition of ${keyword}`);
		//documentation: https://www.shecodes.io/learn/apis/dictionary
		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=e546fd9teb385774339o4d3b5b79c3a0`;
		axios.get(apiUrl).then(handleResponse);
	}
	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<input type="search" autoFocus={true} onChange={handleKeywordChange} />
			</form>
			<Results results={results} />
		</div>
	);
}

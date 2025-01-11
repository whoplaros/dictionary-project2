import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.jsx";
import Photos from "./Photos.jsx";
import "./Dictionary.css";

export default function Dictionary(props) {
	const [keyword, setKeyword] = useState(props.defaultKeyword);
	const [results, setResults] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const [photos, setPhotos] = useState(null);

	function handleDictionaryResponse(response) {
		setResults(response.data);
	}
	function handlePexelsResponse(response) {
		console.log(response.data);
		setPhotos(response.data.photos);
	}

	function search() {
		//documentation: https://www.shecodes.io/learn/apis/dictionary
		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=e546fd9teb385774339o4d3b5b79c3a0`;
		axios.get(apiUrl).then(handleDictionaryResponse);

		//documentation: https://www.pexels.com/api/documentation/?
		let pexelsApiKey =
			"VlWJuPflejtgJLJYV0VdQjCQCMXYCyNHapSkACUDMEl0iqm5FHfKX9YC";
		let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
		let headers = { Authorization: pexelsApiKey };
		axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
							placeholder="What word would you like to search?"
							autoFocus={true}
							onChange={handleKeywordChange}
						/>
					</form>
				</section>
				<section className="resultsSection">
					<Results results={results} />
					<Photos photos={photos} />
				</section>
			</div>
		);
	} else {
		load();
		return "Loading";
	}
}

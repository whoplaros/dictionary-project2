import React from "react";
import Synonyms from "./Synonyms.jsx";
import Antonyms from "./Antonyms.jsx";

export default function Meaning(props) {
	console.log(props.meaning);
	return (
		<div className="Meaning">
			<h3>{props.meaning.partOfSpeech}</h3>
			<div>
				{props.meaning.definition}
				<br />
				<strong>Example: </strong>
				<em>{props.meaning.example}</em>
				<br />
				<strong>Synonyms: </strong>
				<Synonyms synonyms={props.meaning.synonyms} />
				<br />
				<strong>Antonyms:</strong>
				<Antonyms antonyms={props.meaning.antonyms} />
			</div>
		</div>
	);
}

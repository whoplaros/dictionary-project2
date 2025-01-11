import React from "react";
import Synonyms from "./Synonyms.jsx";
import Antonyms from "./Antonyms.jsx";
import "./Meaning.css";

export default function Meaning(props) {
	console.log(props.meaning);
	return (
		<div className="Meaning">
			<div className="left-side-wrapper">
				<h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
				<p className="definition">{props.meaning.definition}</p>
				<p className="example-wrapper">
					<strong>Example: </strong>
					<em>{props.meaning.example}</em>
				</p>
			</div>
			<div className="right-side-wrapper">
				<strong>Synonyms: </strong>
				<Synonyms synonyms={props.meaning.synonyms} />
				<strong>Antonyms:</strong>
				<Antonyms antonyms={props.meaning.antonyms} />
			</div>
		</div>
	);
}

import React from "react";
import Synonyms from "./Synonyms.jsx";
import Antonyms from "./Antonyms.jsx";
import "./Meaning.css";

export default function Meaning(props) {
	console.log(props.meaning);
	return (
		<div className="Meaning">
			<div className="left-side-wrapper">
				<h3>{props.meaning.partOfSpeech}</h3>
				<p className="definition">{props.meaning.definition}</p>
				<p className="example-wrapper">
					<h3 className="example-header">Example</h3>
					<em>{props.meaning.example}</em>
				</p>
			</div>
			<div className="right-side-wrapper">
				<Synonyms synonyms={props.meaning.synonyms} />
				<Antonyms antonyms={props.meaning.antonyms} />
			</div>
		</div>
	);
}

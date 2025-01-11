import React from "react";
import Synonyms from "./Synonyms.jsx";
import Antonyms from "./Antonyms.jsx";
import "./Meaning.css";

export default function Meaning(props) {
	console.log(props.meaning);
	return (
		<div className="Meaning row">
			<div className="left-side-wrapper col-md-6 col-sm-12">
				<h3>{props.meaning.partOfSpeech}</h3>
				<p className="definition">{props.meaning.definition}</p>
				<p className="example-wrapper">
					<em>~ {props.meaning.example}</em>
				</p>
			</div>
			<div className="right-side-wrapper col-md-6 col-sm-12">
				<Synonyms synonyms={props.meaning.synonyms} />
				<br />
				<Antonyms antonyms={props.meaning.antonyms} />
			</div>
		</div>
	);
}

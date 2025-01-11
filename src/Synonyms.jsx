import React from "react";

export default function Synonyms(props) {
	console.log(props.synonyms);
	if (props.synonyms) {
		return (
			<div>
				<h3>Synonyms </h3>
				<ul className="Synonyms">
					{props.synonyms.map(function (synonym, index) {
						return <li key={index}>{synonym}</li>;
					})}
				</ul>
			</div>
		);
	} else {
		return null;
	}
}

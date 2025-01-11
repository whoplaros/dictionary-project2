import React from "react";

export default function Antonyms(props) {
	if (props.antonyms) {
		return (
			<div>
				<h3>Antonyms</h3>
				<ul className="Antonyms">
					{props.antonyms.map(function (antonym, index) {
						return <li key={index}>{antonym}</li>;
					})}
				</ul>
			</div>
		);
	} else {
		return null;
	}
}

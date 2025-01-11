import React from "react";

export default function Synonyms(props) {
	console.log(props.synonyms);
	if (props.synonyms) {
		return (
			<div>
				<h3>Synonyms</h3>
				<div className="Synonyms-wrapper">
					{props.synonyms.map(function (synonym, index) {
						return (
							<div className="Synonyms" key={index}>
								{synonym}
							</div>
						);
					})}
				</div>
			</div>
		);
	} else {
		return null;
	}
}

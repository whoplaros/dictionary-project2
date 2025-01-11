import React from "react";

export default function Synonyms(props) {
	if (props.synonyms) {
		return (
			<div className="container">
				<h3>Synonyms</h3>
				<div className="Synonyms-wrapper row">
					{props.synonyms.map(function (synonym, index) {
						return (
							<div className="Synonyms col-6" key={index}>
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

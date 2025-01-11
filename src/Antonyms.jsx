import React from "react";

export default function Antonyms(props) {
	if (props.antonyms) {
		return (
			<div>
				<h3>Antonyms</h3>
				<div className="Antonyms-wrapper row">
					{props.antonyms.map(function (antonym, index) {
						return (
							<div className="Antonyms col-6" key={index}>
								{antonym}
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

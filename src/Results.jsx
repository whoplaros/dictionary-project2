import React from "react";
import Meaning from "./Meaning.jsx";
import "./Results.css";

export default function Result(props) {
	if (props.results) {
		return (
			<div className="Results">
				<section>
					<span className="definition-header">Definition</span>
					<h2 className="word-header">{props.results.word}</h2>
					<h4 className="phonetic-header">/ {props.results.phonetic} /</h4>
				</section>
				{props.results.meanings.map(function (meaning, index) {
					return (
						<section key={index}>
							<Meaning meaning={meaning} />
						</section>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}

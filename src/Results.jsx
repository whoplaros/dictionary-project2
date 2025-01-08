import React from "react";

export default function Result(props) {
   if(props.results) {
    return (
        <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
            return meaning.definitions[0].definition;
        }0}
        </div>
    );
} else {
    return (null);
}
}
import React from "react";
import "./Photos.css";

export default function Photos(props) {
	console.log(props.photos);
	if (props.photos) {
		return (
			<section className="Photos">
				<div className="row">
					{props.photos.map(function (photo, index) {
						return (
							<div className="col-lg-4 col-md-6" key={index}>
								<a href={photo.src.original} target="_blank">
									<img src={photo.src.landscape} className="img-fluid" />
								</a>
							</div>
						);
					})}
				</div>
			</section>
		);
	} else {
		return null;
	}
}

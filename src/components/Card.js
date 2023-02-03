import React from "react";
import { useState } from "react";
function Card(props) {
	const [clicked, setClicked] = useState(props.clicked);
	return (
		<>
			<div className="card">
				<h3>{props.name}</h3>
				<p>{props.username}</p>
				<p>{props.email}</p>
				<button onClick={() => setClicked(!clicked)}>
					More Details
				</button>
			</div>
			{clicked && (
				<div className="placeholder">
					<div className="address">
						<h3>Address</h3>
						<div className="flex-col">
							<p>{props.address.street}</p>
							<p>{props.address.city}</p>
							<p>{props.address.suite}</p>
						</div>
					</div>
					<div className="company">
						<h3>Company</h3>

						<div className="flex-col">
							<p>{props.company.name}</p>
							<p>{props.company.catchPhrase}</p>
							<p>{props.company.bs}</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Card;

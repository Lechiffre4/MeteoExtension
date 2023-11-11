import React from "react";
import { render } from "react-dom";
import { useState, useEffect } from "react";

function Popup() {
	const [Temperature, setTemperature] = useState(null);


	useEffect(() => {
		console.log("test");
		fetch("https://bewildered-pleat-foal.cyclic.app/weather/147", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				setTemperature(JSON.stringify(data));
				console.log(data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div>
			<h2>Data:</h2>
			<p>{Temperature}</p>
		</div>
	);
}

render(<Popup />, document.getElementById("react-target"));

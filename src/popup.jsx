import React from "react";
import { render } from "react-dom";
import { useState, useEffect } from "react";

function Popup() {
	const [Temperature, setTemperature] = useState(null);


	useEffect(() => {
		console.log("test");
		fetch("https://meteo.gc.ca/api/app/fr/Location/QC-147?type=147", {
			method: "GET",
			mode: 'no-cors'
		})
			.then((response) => response.json())
			.then((data) => {
				setTemperature(data);
				console.log(data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div>
			<h2>Data:</h2>
			{Temperature}
		</div>
	);
}

render(<Popup />, document.getElementById("react-target"));

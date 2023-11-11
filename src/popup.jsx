import React, { useState, useEffect } from "react";
import { render } from "react-dom";

function Popup() {
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    fetch(
      "https://bewildered-pleat-foal.cyclic.app/api/currentweather/qc/147",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrentData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Data:</h2>
      {currentData && (
        <div>
          <p>City: {currentData.City}</p>
          <p>Temperature (Metric): {currentData.TempMetric}</p>
          <p>Temperature (Imperial): {currentData.TempImperial}</p>
          <p>Humidity: {currentData.humidity}</p>
          <img src={currentData.iconURL} alt="Weather Icon" />
          <p>Timestamp: {currentData.timeStamp}</p>
          <p>Wind Speed (Metric): {currentData.WindSpeedMetric}</p>
          <p>Wind Speed (Imperial): {currentData.WindSpeedImperial}</p>
          <p>Wind Direction: {currentData.WindDirection}</p>
        </div>
      )}
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));







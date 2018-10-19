import React from "react";

const Weather = props => (
  <div style={props.style}>
    {props.city &&
      props && (
        <p>
          location: {props.city}, {props.country}
        </p>
      )}

    {props.temperature && <p>Temperature: Yah boi {props.temperature} </p>}

    {props.humidity && <p>Humidity: {props.humidity} </p>}
    {props.description && <p>Conditions: {props.description}</p>}
    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather;

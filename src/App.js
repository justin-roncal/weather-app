import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const API_KEY = "f218609dddd8931b1f383bb02729eff4";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}d=524901&APPID=${API_KEY}
      `
    );
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: undefined
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: data.message
      });
    }
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs />
          <Grid item xs={6}>
            <Paper style={{ padding: 20, marginBottom: 30 }}>
              <Titles />
              <Form getWeather={this.getWeather} />
            </Paper>
            <Paper>
              <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
              />
            </Paper>
          </Grid>
          <Grid item xs />
        </Grid>
      </div>
    );
  }
}

export default App;

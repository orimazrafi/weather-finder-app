import React, { Component } from 'react';
import Title from './components/title';
import Form from './components/form';
import Weather from './components/weather';
import './App.css';

const apiKey = '8ddceeacaf8b95fe943c88fc8389dee0';

class App extends Component {
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
    const city = e.currentTarget.elements.city.value;
    const country = e.currentTarget.elements.country.value;
    try {
      const apiCall = await fetch(
        `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`
      );
      const { main, sys, name, weather } = await apiCall.json();
      this.setState({
        temperature: main.temp,
        city: name,
        country: sys.country,
        humidity: main.humidity,
        description: weather[0].description,
        error: ''
      });
    } catch (ex) {
      console.log(ex.message);
    }
  };
  render() {
    return (
      <div>
        <Title />
        <Form onWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;

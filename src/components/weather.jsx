import React, { Component } from 'react';
class Weather extends Component {
  state = {};
  render() {
    return (
      <div>
        Location: {this.props.city}, {this.props.country}
        Temperature: {this.props.temperature}
        Humidity: {this.props.humidity}
        Condition: {this.props.description}
      </div>
    );
  }
}

export default Weather;

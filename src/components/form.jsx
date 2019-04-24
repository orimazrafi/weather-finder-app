import React, { Component } from 'react';
class Form extends Component {
  state = {};
  render() {
    return (
      <form onSubmit={e => this.props.onWeather(e)}>
        <input type='text' name='city' placeholder='City...' />
        <input type='text' name='country' placeholder='Country...' />
        <button>get Weather</button>
      </form>
    );
  }
}

export default Form;

import React from 'react';

const Form = ({ onWeather }) => {
  return (
    <form onSubmit={e => onWeather(e)}>
      <input type='text' name='city' placeholder='City...' />
      <input type='text' name='country' placeholder='Country...' />
      <button className='form-button'>get Weather</button>
    </form>
  );
};

export default Form;

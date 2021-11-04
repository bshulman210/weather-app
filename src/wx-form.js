import React from 'react';

let api = 'api.openweathermap.org/data/2.5/weather?q=';
let city = 'Tampa';
let units = '&units=imperial';
let apiKey = '&appid=f355b0050d9cd8a9f5a2cade34ea5da2';

let fetchWeather = fetch(`${api}${city}${units}${apiKey}`, {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data));

// async function fetchWeather() {
//   let response = await fetch(`${api}${city}${units}${apiKey}`);
//   let data = await response.json();
//   return data;
// }
console.log(fetchWeather.slice(22));

class WeatherForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Enter City Name:</h3>
        City:{' '}
        <input
          type="text"
          name="city"
          id="city"
          placeholder="New York..."
        ></input>
        <button
          type="submit"
          onClick={() => {
            this.handleSubmit();
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default WeatherForm;

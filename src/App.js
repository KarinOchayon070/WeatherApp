import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_API_KEY;
  console.log("API Key:", apiKey);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  const fetchWeatherData = async () => {
    try {
      setError(null);
      const response = await axios.get(url);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Location not found');
    }
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      fetchWeatherData();
    }
  };

  const handleInputChange = event => {
    setLocation(event.target.value);
  };

  return (
    <div className='app'>
      <div className='search'>
        <input
          value={location}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder='Please Enter Location'
          type='text'
        />
      </div>

      <div className='container'>
        {error ? (
          <h1>{error}</h1>
        ) : (
          <>
            <div className='top'>
              <div className='location'>
                <p>{data.name}</p>
              </div>
              <div className='temp'>
                {data.main ? <h1>{data.main.temp}</h1> : null}
              </div>
              <div className='description'>
                {data.weather ? <p>{data.weather[0].description}</p> : null}
              </div>
            </div>

            <div className='bottom'>
              <div className='feels'>
                {data.main ? <p className='bold'>{data.main.feels_like}</p> : null}
                <p>Feels like</p>
              </div>
              <div className='humidity'>
                {data.main ? <p className='bold'>{data.main.humidity}</p> : null}
                <p>Humidity</p>
              </div>
              <div className='wind'>
                {data.wind ? <p className='bold'>{data.wind.speed}</p> : null}
                <p>Wind Speed</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

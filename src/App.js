import React, {useState} from 'react'
import axios from 'axios'

function App() {

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Jerusalem&appid=98aeda6895903a5368aa4716a632db79';
  

  return (

    <div className='app'>

    <div className='container'>

      <div className='top'>
        <div className='location'>
          <p>Jerusalem</p>
        </div>
        <div className='temp'>
          <h1>40°C</h1>
        </div>
        <div className='description'>
          <p>hot</p>
        </div>
      </div>

      <div className='bottom'>
        <div className='feels'>
          <p>45°C</p>
        </div>
        <div className='humidity'>
          <p>20%</p>
        </div>
        <div className='wind'>
          <p>5 MPH</p>
        </div>

      </div>
    </div>
    </div>
  );
}

export default App;

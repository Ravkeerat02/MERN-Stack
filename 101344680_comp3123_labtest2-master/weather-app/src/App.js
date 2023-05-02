import { useState } from 'react';
import './App.css';

const api = {
  key:'b340f0eaa8d2b6c1acc0ae9b7e20df1c',
  base:'https://api.openweathermap.org/data/2.5/'
}
function App() {
  const [city , setCity] = useState('');
  const[weather , setWeather] = useState({});

  const search = evt => {
    if(evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${city}&unit=metic&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setCity('');
          console.log(result);
        });
    }
  }

  const buildDate = (d) => {
    let months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu' , 'Fri', 'Sat'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date}  ${month} ${year}`;
  }

  return (
    <div className="app">
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 293.15) ? 'app sun' : 'app') : 'app' }>
      <main>
          <div className="search-box">
            <input 
              type="text"
              className="search-bar"
              placeholder="Enter" 
              onChange={e => setCity(e.target.value)}
              value={city}
              onKeyPress={search}
            />
          </div>
          <br></br>
          {(typeof weather.main != "undefined") ? (
          <div>
            <div className="weather-box">
              <div className="location-box">
                <div className="loc">{weather.name}, {weather.sys.country}</div>
                <div className="date">{buildDate(new Date())}</div>
              </div>
              
              <img className="icon" src={"https://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png"} />
                <div className="temp">Temp{Math.round(weather.main.temp - 273.15)}°C</div>
                <div className='minTemperature'>Minimum Temp{Math.round(weather.main.temp_min - 273.15)}°C</div>
                <div className="weather">Weather condition:{weather.weather[0].main}</div>
                <div className="humidity">Humidity:{weather.main.humidity}</div>
                <div className="pressure">Pressure:{weather.main.pressure}</div>
            </div>
          </div>
          ): ('')}
      </main>
    </div>
    </div>
  );
}


export default App;
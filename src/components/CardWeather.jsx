import React, { useState } from 'react'


const CardWeather = ({weather, clouds}) => {

  const [degrees, setDegrees] = useState(true)

  const celFar = () => setDegrees(!degrees)

  const tempt = {
    celcius: `${(weather?.main.temp - 273.15).toFixed(2)}°C`,
    fahrenheit: `${((weather?.main.temp - 273.15)*1.8 + 32).toFixed(2)}°F`
  }
  
  const styleColor = {
    ligth : '#f7eeeebe',
    dark: '#2e2a2aa2'
  }
  
  return (
    <div className='card_weather' style={{backgroundColor: `${clouds < 50 ? styleColor.ligth : styleColor.dark}`}} >
      <h1 className='title_card'>Weather App</h1>
      <h3 className='title_card'>{weather?.name} {weather?.sys.country}</h3>
      <div className='weather_information'>
        <div className='weather_dregrees'>
          <span className='cloud'><i className="fas fa-cloud"></i></span>
          <p>{degrees ? tempt.celcius : tempt.fahrenheit}</p>
        </div>
        <div className='weather_list'>
          <h3 className='title_card'>'{weather?.weather[0].description}'</h3>
          <p><span><i className="fas fa-cloud"></i> Clouds: </span>{weather?.clouds.all}%</p>
          <p><span><i className="fas fa-wind"></i> Winds: </span>{weather?.wind.speed} m/s</p>
          <p><span><i className="fas fa-tint"></i> Humidity: </span>{weather?.main.humidity}%</p>
        </div>
      </div>
      <button className='weather_btn' onClick={celFar}>Change to {degrees ? '°F' : '°C'}</button>
    </div>
  )
}

export default CardWeather
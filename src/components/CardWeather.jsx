import React, { useState, useEffect } from 'react'



const CardWeather = ({weather}) => {

  const [degrees, setDegrees] = useState(true)

  const celFar = () => setDegrees(!degrees)

  const tempt = {
    celcius: `${(weather?.main.temp - 273.15).toFixed(2)}°C`,
    fahrenheit: `${((weather?.main.temp - 273.15)*1.8 + 32).toFixed(2)}°F`
  }
  
  //https://cdn.pixabay.com/photo/2020/06/23/01/14/cloud-5330980_640.png
  let icon = weather?.weather[0].icon
  console.log(icon)

  return (
    <div className='card_weather'>
      <div className='weather_information'>
        <div className='weather_dregrees'>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='Cloud_image'/>
          <h3 className='title_card'>{weather?.name} {weather?.sys.country}</h3>
          <h4 className='temp'>{degrees ? tempt.celcius : tempt.fahrenheit}</h4>
        </div>
        <div className='weather_list'>
          <div>
            <h2 className='title_card'>'{weather?.weather[0].description}'</h2>
          </div>
          <div>
            <p><span><i className="fas fa-cloud"></i> Clouds: </span>{weather?.clouds.all}%</p>
            <p><span><i className="fas fa-wind"></i> Winds: </span>{weather?.wind.speed} m/s</p>
            <p><span><i className="fas fa-tint"></i> Humidity: </span>{weather?.main.humidity}%</p>
          </div>
          <h4 className='temp'>{degrees ? tempt.celcius : tempt.fahrenheit}</h4>
        </div>
      </div>
      <button className='weather_btn' onClick={celFar}>Change to {degrees ? '°F' : '°C'}</button>
    </div>
  )
}

export default CardWeather
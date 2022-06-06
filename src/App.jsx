import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardWeather from './components/CardWeather'

const imagesBack = ['https://img.freepik.com/foto-gratis/cielo-nubes-blancas-fondo-brillante-paisaje-dia_38021-299.jpg?w=2000',
  'https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/06/neenu-vimalkumar-tkd0usnnxfo-unsplash-scaled.jpeg?fit=1200%2C795&quality=50&strip=all&ssl=1',
]


function App() {

  
  const [latLon, setLatLon] = useState({})
  const [weather, setWeather] = useState()


  useEffect(() => {
    const success = pos => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude
      setLatLon({lat, lon})
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if(latLon.lat !== undefined){

      const API_KEY = '19ffae71903ed89d1ec21ba007876556'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${API_KEY}`

      axios.get(URL)
        .then(res => setWeather(res.data))
        .catch(err => console.log(err))
    }
    
  }, [latLon])  
  console.log(weather)

  return (
    <div className="App" style={{backgroundImage: `url(${weather?.clouds.all < 50 ? imagesBack[0] : imagesBack[1]})`}}>
      <CardWeather
        weather={weather}
      />
    </div>
  )
}

export default App

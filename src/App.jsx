import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardWeather from './components/CardWeather'

const imagesBack = ['https://img.freepik.com/foto-gratis/cielo-nubes-blancas-fondo-brillante-paisaje-dia_38021-299.jpg?w=2000',
  'https://images.freeimages.com/images/large-previews/29b/dark-clouds-2-1152417.jpg',
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
  
  const clouds = weather?.clouds;
  


  return (
    <div className="App" style={{backgroundImage: `url(${clouds < 50 ? imagesBack[0]: imagesBack[1]})`}}>
      <CardWeather
        weather={weather}
        clouds={clouds}
      />
    </div>
  )
}

export default App

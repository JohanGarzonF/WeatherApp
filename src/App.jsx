import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardWeather from './components/CardWeather'

const imageBack = 'https://services.meteored.com/img/article/efectos-domino-creados-por-los-oceanos-que-ya-cambian-el-clima-global-319551-1_1024.jpg'


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
    <div className="App" style={{backgroundImage: `url(${imageBack})`}}>
      <CardWeather
        weather={weather}
      />
    </div>
  )
}

export default App

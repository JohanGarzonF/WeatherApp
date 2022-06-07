import axios from "axios"
import { useEffect, useState } from "react"

const useWeather = () => {
  const [latLon, setLatLon] = useState({})
  const [weather, setWeather] = useState()
  const [isLoading, setIsLoading] = useState(true)

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
        .then(res => {
          setWeather(res.data)
          setIsLoading(false)
        })
        .catch(err => console.log(err))
    }
    
  }, [latLon])

  return { weather, isLoading }
}

export default useWeather
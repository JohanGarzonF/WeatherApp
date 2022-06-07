import './App.css'
import CardWeather from './components/CardWeather'
import useWeather from './components/hooks/useWeather'
import Loader from './components/Loader'

const imageBack = 'https://services.meteored.com/img/article/efectos-domino-creados-por-los-oceanos-que-ya-cambian-el-clima-global-319551-1_1024.jpg'


function App() {

  const {weather, isLoading, textLocation} = useWeather()

  return (
    <div className="App" style={{backgroundImage: `url(${imageBack})`}}>
      {
        isLoading ?
          <Loader
            textLocation={textLocation}
          />
          :
          <CardWeather
            weather={weather}
          />
      }
    </div>
  )
}

export default App

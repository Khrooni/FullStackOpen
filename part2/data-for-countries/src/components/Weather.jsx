import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    weatherService
      .getWeather(capital)
      .then(initialWeather => {
        setWeather(initialWeather)
      })
  }, [capital])

  if (!weather) {
    return <p>Weather data missing</p>
  }

  const icon = weather.weather[0].icon

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <div>Temperature {weather.main.temp} Celsius</div>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Weather icon"
      />

      <div>Wind {weather.wind.speed} m/s</div>
    </div>
  )
}

export default Weather
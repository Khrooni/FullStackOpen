import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
const api_key = import.meta.env.VITE_OPENWEATHER_API_KEY

const getWeather = (capital) => {
  const request = axios.get(baseUrl, {
    params: {
      q: capital,
      units: 'metric',
      appid: api_key
    }
  })

  return request.then(response => response.data)
}

export default { getWeather }
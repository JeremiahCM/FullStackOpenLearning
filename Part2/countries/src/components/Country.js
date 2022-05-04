import { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

//Component for rendering basic details of a given country
const Country = ({ country }) => {
  const [weather, setWeather] = useState(null)

  const tempUnitSystem = "metric"
  const tempUnit = "celcius"
  const weather_api_key = process.env.REACT_APP_WEATHER_API_KEY

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=${tempUnitSystem}&appid=${weather_api_key}`)
      .then(response => {
        setWeather(response.data)
        console.log(response.data)
      })
  }, [country.capital, tempUnit, weather_api_key])

  return (
    <div>
      <h1>{country.name.common}</h1>

      <span>capital {country.capital}</span>
      <br/>
      <span>area {country.area}</span>
      <br/>

      <h3>languages</h3>

      <ul>
        {Object.values(country.languages).map(language =>
          <li key={language}>{language}</li>
        )}
      </ul>

      <img className="flag" src={country.flags.png} alt="flag" height={200} width={300}/>
      <br />

      {(weather)
        ? <Weather capital={country.capital} weather={weather} tempUnit={tempUnit}/>
        : <span>"Loading weather"</span>}
    </div>
  )
}

export default Country
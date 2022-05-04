//Component for rendering Weather details for a country's capital city
const Weather = ({ capital, weather, tempUnit }) => {
    const weatherIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`

    console.log(weather)

    return (
        <div>
            <h1>Weather in {capital}</h1>

            <span>temperature {weather.main.temp} {tempUnit}</span>

            <br />

            <img src={weatherIcon} alt="weather icon" height={100} width={100} />

            <br />

            <span>wind {weather.wind.speed} m/s</span>
        </div>
    )
}

export default Weather
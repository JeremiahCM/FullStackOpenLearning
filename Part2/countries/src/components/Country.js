const Country = ({ country }) => {
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

      <img className="flag" src={country.flags.png} height={200} width={300}/>
    </div>
  )
}

export default Country
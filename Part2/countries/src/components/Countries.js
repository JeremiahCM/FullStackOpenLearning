import Country from './Country'

const Countries = ({ countries }) => {
    const tooManyCountries = countries.length > 10 ? true : false
    const enoughCountries = countries.length > 1 && countries.length <= 10 ? true : false
    const exactCountry = countries.length === 1 ? true : false
  
    return (
      <div>
        {tooManyCountries && 'Too many matches, specify another filter'}
        {enoughCountries && 
          <ul>
            {countries.map(country =>
            <div key={country.name.common}>{country.name.common}</div>)}
          </ul>
        }
        {exactCountry && <Country country={countries[0]}/> }
      </div>
    )
}

export default Countries
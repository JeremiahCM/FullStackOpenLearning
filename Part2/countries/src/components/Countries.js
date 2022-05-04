import { useState } from 'react'
import Country from './Country'

//Component for listing out countries
const Countries = ({ countries }) => {
    const [showDetailed, setShowDetailed] = useState('')

    const tooManyCountries = countries.length > 10 ? true : false
    const enoughCountries = countries.length > 1 && countries.length <= 10 ? true : false
    const exactCountry = countries.length === 1 ? true : false
  
    return (
      <div>
        {tooManyCountries && 'Too many matches, specify another filter'}
        {enoughCountries && 
          <ul>
            {countries.map(country =>
            <div key={country.name.common}>
                {country.name.common} <button onClick={() => setShowDetailed(country)}>show</button>
            </div>)}
          </ul>
        }
        {showDetailed !== '' &&
            <Country country={showDetailed}/>
        }
        {exactCountry && <Country country={countries[0]}/> }
      </div>
    )
}

export default Countries
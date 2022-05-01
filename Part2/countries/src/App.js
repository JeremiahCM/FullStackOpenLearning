import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [nameFilter, setNameFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data.sort((a, b) => a.name.common.localeCompare(b.name.common)))
      })
  }, [])
  console.log('retrieved', countries.length, 'countries')

  const countriesFilterMatched = showAll ? countries : countries.filter(country => country.name.common.toLowerCase().match(nameFilter.toLowerCase()))

  const handleFilterChange = (event) => {
    setNameFilter(event.target.value)
    setShowAll(nameFilter === null ? true : false)
  }

  return (
    <>
      <Filter nameFilter={nameFilter} handleFilterChange={handleFilterChange}/>

      <Countries countries={countriesFilterMatched}/>
    </>
  )
}

export default App
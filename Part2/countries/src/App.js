import { useState, useEffect } from 'react'
import axios from 'axios'

//Filter component
const Filter = ({ nameFilter, handleFilterChange }) => {
  return (
    <div>
      filter shown with <input value={nameFilter} onChange={handleFilterChange}/>
    </div>
  )
}

const App = () => {
  return (
    <>
      <Filter filter={countryFilter} onChange={handleFitlerChange}/>
    </>
  )
}

export default App
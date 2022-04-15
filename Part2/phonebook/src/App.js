import { useState } from 'react'

const Person = ({ id, name, number }) => {
  return (
    <div>
      {id}: {name} {number}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  const personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().match(nameFilter.toLowerCase()))

  const checkObjectsEqual = (first, second) => {
    const fp = Object.getOwnPropertyNames(first)
    const sp = Object.getOwnPropertyNames(second)

    //Check if both key lists are not the same length, meaning objects not equal
    if (fp.length !== sp.length) return false

    //Check if all keys from both objects don't match somewhere
    const hasAllKeys = fp.every(value => !!sp.find(v => v === value))

    //If keys do not match, objects are not equal.
    if (!hasAllKeys) return false

    for (const key of fp) {
      if (first[key] !== second[key]) return false
    }

    return true
  }

  const addName = (event) => {
    event.preventDefault()
    const newPersonObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if (persons.filter(person => checkObjectsEqual(person, newPersonObject)).length > 0) {
      window.alert(`${newName} is already added to phonebook`)
      return false
    }

    setPersons(persons.concat(newPersonObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNameFilter(event.target.value)

    setShowAll(nameFilter === null ? true : false)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={nameFilter} onChange={handleFilterChange}/>
      </div>
      <h2>Add New Person</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
          <Person key={person.name} id={person.id} name={person.name} number={person.number}/>
        )}
      </ul>
    </div>
  )
}

export default App
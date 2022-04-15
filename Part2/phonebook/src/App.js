import { useState } from 'react'

const Person = ({ name, number }) => {
  return (
    <div>
      {name} {number}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map(person =>
          <Person key={person.name} name={person.name} number={person.number}/>
        )}
      </ul>
    </div>
  )
}

export default App
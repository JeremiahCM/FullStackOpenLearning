import { useEffect, useState } from 'react'
import axios from 'axios'

//Filter component
const Filter = ({ nameFilter, handleFilterChange }) => {
  return (
    <div>
      filter shown with <input value={nameFilter} onChange={handleFilterChange}/>
    </div>
  )
}

//Person component
const Person = ({ id, name, number }) => {
  return (
    <div>
      {id}: {name} {number}
    </div>
  )
}

//Persons component
const Persons = ({ people }) => {
  return (
    <div>
      <ul>
        {people.map(person =>
          <Person key={person.name} id={person.id} name={person.name} number={person.number}/>
        )}
      </ul>
    </div>
  )
}

//Persons Form component
const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addPerson}>
        <div>
          name: <input value={props.newName} onChange={props.handleNameChange}/>
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

//App component
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().match(nameFilter.toLowerCase()))

  //Add person to phonebook
  const addPerson = (event) => {
    event.preventDefault()
    const newPersonObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    //Stop and alert user if they are adding a duplicate person
    if (persons.filter(person => person.name === newName).length > 0) {
      window.alert(`${newName} is already added to phonebook`)
      return false
    }

    setPersons(persons.concat(newPersonObject))
    setNewName('')
    setNewNumber('')
  }

  //Name event handler
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  //Number event handler
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  //Filter event handler
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNameFilter(event.target.value)

    setShowAll(nameFilter === null ? true : false)
  }

  return (
    <>
      <h2>Phonebook</h2>

      <Filter filter={nameFilter} onChange={handleFilterChange}/>

      <h2>Add New Person</h2>

      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      
      <Persons people={personsToShow}/>
    </>
  )
}

export default App
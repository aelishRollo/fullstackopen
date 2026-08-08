import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(
      res => setPersons(res.data)
    )
  },[])


  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const currentNames = persons.map((person) => person.name)

    if (currentNames.includes(newName)) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App

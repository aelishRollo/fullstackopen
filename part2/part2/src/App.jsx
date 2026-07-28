import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'


const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hella',
      number: "317-444-4444",
      id: 0
    },
    {name: 'Edwin Borough',
      number: "317-555-7869",
      id: 1
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
    console.log(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
    console.log(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const currentNames = persons.map((person) => person.name)
    if (currentNames.includes(newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
        const newPerson = {
          name: newName,
          number: newNumber,
          id: persons.length + 1
        }
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
      }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm persons={persons} addPerson={addPerson} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App
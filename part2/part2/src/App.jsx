import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hella',
      id: 0
    },
    {name: 'Edwin Borough',
      id: 1
    }
  ])
  const [newName, setNewName] = useState('')

  const handleInput = (event) => {
    setNewName(event.target.value)
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
          id: persons.length + 1
        }
        setPersons(persons.concat(newPerson))

      }
  }
  
 


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.id}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App
import Note from './components/Note'
import { useState } from 'react'



const App = (props) => {
  
  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked')
    console.log(event.target)
  }

  const [notes, setNotes] = useState(props.notes)

  const [newNote, setNewNote] = useState('This is a new note...')

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type='Submit'>Save </button>
      </form>
    </div>
  )
}

export default App

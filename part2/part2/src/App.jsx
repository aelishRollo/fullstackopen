import Note from './components/Note'
import { useState } from 'react'



const App = (props) => {
  
  //for when you hit submit. Adds new note to notes and resets the text in the input
  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked')
    console.log(event.target)

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1)
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')

  }

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('This is a new note...')
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  //for handling typing into the input box
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={(() => setShowAll(!showAll))}>
          Show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
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

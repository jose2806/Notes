import { useState } from 'react'

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState('')

  const addNote = (event) => {
    event.preventDefault()
    createNote({
      content: newNote,
      important: true//Math.random() < 0.5,
    })
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  return (
    <div className='formDiv'>
      <h2>Create a new note</h2>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}
          placeholder='write note content here' id='note-input'/>
        {/* <input value={''} onChange={''}/> */}
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
export default NoteForm

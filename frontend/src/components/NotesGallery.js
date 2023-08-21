import Note from "./Note"
import NoteForm from "./forms/NoteForm"
import { useOutletContext } from "react-router-dom"
import Button from "./ui-kit/Button"
import { useState } from "react"

export default function NotesGallery() {
  const { character } = useOutletContext()

  const [notes, setNotes] = useState([...character.notes])

  return <div className="noteGallery">
    <div className="notes-header">
      <h1>Notes</h1>
      <div className="add-note">
        <Button
          className="add-note-btn"
          data-bs-toggle="modal"
          data-bs-target="#newNote"
        >
          +
        </Button>
        <NoteForm setNotes={setNotes} />
      </div>
    </div>
    <hr />
    <div className="noteContainer">
      { !notes.length
        ? <h2>This character has no notes.</h2>
        : notes.map(note => {
          return <Note note={note} setNotes={setNotes} key={`${note._id}`} />
        })
      }
    </div>
  </div>
}
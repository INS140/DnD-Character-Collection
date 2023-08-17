import Note from "./Note"
import NoteForm from "./forms/NoteForm"
import { useOutletContext } from "react-router-dom"

export default function NotesGallery() {
  const { character } = useOutletContext()

  return <div className="noteGallery">
    <div className="notes-header">
      <h1>Notes</h1>
      <NoteForm />
    </div>
    <hr />
    <div className="noteContainer">
      { !character.notes.length
        ? <h2>This character has no notes.</h2>
        : character.notes.map(note => {
          return <Note note={note} key={`${note._id}`} />
        })
      }
    </div>
  </div>
}
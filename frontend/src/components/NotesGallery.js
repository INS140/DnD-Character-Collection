import Note from "./Note"
import NoteForm from "./forms/NoteForm"
import { useOutletContext } from "react-router-dom"

export default function NotesGallery() {
  const { character } = useOutletContext()

  return <div className="noteGallery">
    <h1 className="noteTitle">Notes</h1>
    <NoteForm />
    <hr />
    <div className="noteContainer">
      {!character.notes.length
        ? <h3>This character currently has no notes.</h3> 
        : character.notes.map(note => {
          return <Note note={note} key={`${note._id}`} />
        })
      }
    </div>
  </div>
}
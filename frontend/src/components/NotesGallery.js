import Note from "./Note"
import { useOutletContext } from "react-router-dom"

export default function NotesGallery() {
  const { character } = useOutletContext()

  const notes = []

  return <div class="noteGallery">
    <h1 class="noteTitle">{character.name}'s Notes:</h1>
    <div class="noteContainer">
      {!notes?.length 
      ? <h3>This character currently has no notes.</h3> 
      : notes.map(note => {
        return <Note note={note} key={note._id} />
      })}
    </div>
  </div>
}
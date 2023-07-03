import Note from "./Note"
import { useState, useEffect } from "react"
import useFetch from "./custom-hooks/useFetch"

export default function NotesGallery() {
  const { get } = useFetch('http://localhost:5000')


  const [notes, setNotes] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const data = await get('/notes', localStorage.getItem('token'))
        setNotes(data)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  return (
    <div class="noteGallery">
      <h1 class="noteTitle">Notes:</h1>
      <div class="noteContainer">
        {!notes?.length 
        ? <h3>This character currently has no notes.</h3> 
        : notes.map(note => {
          return <Note note={note} key={note._id} />
        })}
      </div>
    </div>
  )
}
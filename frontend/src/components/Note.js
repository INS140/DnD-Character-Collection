import { useEffect, useState } from "react";
import { Button, Dropdown } from "./ui-kit"
import useFetch from "../custom-hooks/useFetch";
import NoteForm from "../forms/NoteForm";

export default function Note({ note, setNotes }) {
  const { remove, put } = useFetch('https://dnd-character-collection-backend.vercel.app')

  const [fullDisplay, setFullDisplay] = useState(note.fullDisplay)

  useEffect(() => {
    setFullDisplay(note.fullDisplay)
  }, [note])

  const styles = !fullDisplay
    ? { borderTop: '10px solid white'}
    : { borderBottom: '10px solid white' }

    const handleChangeFullDisplay = async () => {
      const display = !fullDisplay

      setFullDisplay(display)

      await put(`/notes/${note._id}`, {
        ...note,
        fullDisplay: display
      })
    }

  const handleDelete = async () => {
    try {
      await remove(`/notes/${note._id}`)
      
      setNotes(prev => prev.filter(n => n._id !== note._id))
    } catch (err) {
      console.log(err)
    }
  }

  return <div className="note secondary">
    <h1 className="title">{note.title}</h1>
    <Dropdown
      toggleId={`deleteNote${note._id}`}
      className="options"
    >
      <div className="noteOptions">
        <Button
          className="secondary button"
          data-bs-toggle="modal"
          data-bs-target={`#updateNote${note._id}`}
        >
          Update
        </Button>
        <Button
          className="tertiary button"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </Dropdown>
    <NoteForm note={note} setNotes={setNotes} />
    <span
      className="display-arrow"
      style={styles}
      onClick={handleChangeFullDisplay}
    />
    {fullDisplay && <div className="desc">
      <pre className="primary">{note.description}</pre>
    </div>}
  </div>
}
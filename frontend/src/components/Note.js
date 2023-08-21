import Button from "./ui-kit/Button";
import useFetch from "./custom-hooks/useFetch";
import NoteForm from "./forms/NoteForm";
import Dropdown from "./ui-kit/Dropdown";

export default function Note({ note, setNotes }) {
  const { remove } = useFetch('https://dnd-character-collection-backend.vercel.app')

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
    <div className="desc">
      <pre className="primary">{note.description}</pre>
    </div>
  </div>
}
import Button from "./ui-kit/Button";
import useFetch from "./custom-hooks/useFetch";
import { useNavigate } from "react-router-dom";
import NoteForm from "./forms/NoteForm";
import Dropdown from "./ui-kit/Dropdown";

export default function Note({ note }) {
  const { remove } = useFetch('https://dnd-character-collection-backend.vercel.app')

  const navigate = useNavigate()

  const handleDelete = async () => {
    try {
      await remove(`/notes/${note._id}`)

      navigate(0)
    } catch (err) {
      console.log(err)
    }
  }

  return <div className="note secondary">
    <h1 className="title">{note.title}</h1>
    <div className="desc">
      <hr />
      <pre className="primary">{note.description}</pre>
    </div>
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
    <NoteForm note={note} />
  </div>
}
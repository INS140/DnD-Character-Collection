import Button from "./ui-kit/Button";
import useFetch from "./custom-hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function Note({ note }) {
  const { remove } = useFetch('https://dnd-character-collection-backend.vercel.app')

  const navigate = useNavigate()

  const handleDelete = async () => {
    console.log(note)
    try {
      await remove(`/notes/${note._id}`)

      navigate(0)
    } catch (err) {
      console.log(err)
    }
  }

  return <div className="note">
    <h1>{note.title}</h1>
    <p>{note.description}</p>
    <Button className="tertiary" onClick={handleDelete}>Delete</Button>
  </div>
}
export default function Note({ note }) {
  return <div className="note">
    <h1>{note.title}</h1>
    <p>{note.description}</p>
  </div>
}
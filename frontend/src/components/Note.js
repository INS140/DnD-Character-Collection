export default function Note( { note } ) {
  return <div className="note">
    <h1 className="noteTitle">{note.title}</h1>
    <p>{!note.description ? <>This item has no description.</> : note.description}</p>
  </div>
}
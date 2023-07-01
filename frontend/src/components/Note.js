export default function Note( { note } ) {
  return (
    <div class="note">
      <h1>Title: {note.title}</h1>
      <p>{note.content}</p>
    </div>
  )
}
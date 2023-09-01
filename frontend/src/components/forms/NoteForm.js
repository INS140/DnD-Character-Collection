import { useOutletContext } from "react-router-dom";
import { Input, Modal, TextArea } from "../ui-kit";
import useFetch from "../custom-hooks/useFetch";
import useFormHandler from "../custom-hooks/useFormHandler";

export default function NoteForm({ note, setNotes }) {
  const { post, put } = useFetch("https://dnd-character-collection-backend.vercel.app");

  const { character } = useOutletContext()

  const formInputs = !note
    ? {
      title: "",
      description: "",
    }
    : {
      title: note.title,
      description: note.description
    }

  const { inputs, handleChange, setInputs } = useFormHandler(formInputs);

  const handleSubmitPOST = async () => {
    try {
      const newNote = {
        ...inputs,
        fullDisplay: true,
        character: character.id,
      }

      const res = await post("/notes", newNote);

      setNotes(prev => [...prev, res.data])
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitPUT = async () => {
    try {
      const updatedNote = {
        ...inputs,
        fullDisplay: true,
        character: character.id,
      }

      await put(`/notes/${note._id}`, updatedNote);

      setNotes(prev => prev.map(n => n._id === note._id ? {...note, ...updatedNote} : n))
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    setInputs(formInputs)
  }

  const handleDisable = () => {
    return !inputs.title || !inputs.description ? true : false
  }

  const params = !note
    ? {
      modalId: 'newNote',
      header: 'New Note',
      closeModalText: 'Add Note',
      onCloseClick: handleSubmitPOST
    }
    : {
      modalId: `updateNote${note._id}`,
      header: 'Update Note',
      closeModalText: 'Update Note',
      onCloseClick: handleSubmitPUT
    }

  return <Modal
    modalId={params.modalId}
    header={params.header}
    closeModalText={params.closeModalText}
    disableSubmit={handleDisable()}
    onCloseClick={params.onCloseClick}
    onCancelClick={handleCancel}
  >
    <div className="form-container">
      <form className="note-form form">
        <Input
          label="Title"
          name="title"
          value={inputs.title}
          onChange={handleChange}
          required
          maxLength={50}
        />
        <TextArea
          label="Description"
          name="description"
          rows="5"
          value={inputs.description}
          onChange={handleChange}
          required
          maxLength={1000}
        />
      </form>
    </div>
  </Modal>
}
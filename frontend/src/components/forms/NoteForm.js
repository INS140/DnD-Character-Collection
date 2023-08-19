import Input from "../ui-kit/Input";
import TextArea from "../ui-kit/TextArea";
import Button from "../ui-kit/Button";
import Modal from "../ui-kit/Modal"
import useFetch from "../custom-hooks/useFetch";
import { useNavigate, useOutletContext } from "react-router-dom";
import useFormHandler from "../custom-hooks/useFormHandler";

export default function NoteForm({ note }) {
  const { post, put } = useFetch("https://dnd-character-collection-backend.vercel.app");

  const { character } = useOutletContext()

  const navigate = useNavigate();

  const formInputs = !note
    ? {
      title: "",
      description: "",
    }
    : {
      title: note.title,
      description: note.description
    }

  const { inputs, handleChange } = useFormHandler(formInputs);

  const handleSubmitPOST = async () => {
    try {
      await post("/notes", {
        ...inputs,
        character: character.id,
      });

      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitPUT = async () => {
    try {
      const data = await put(`/notes/${note._id}`, {
        ...inputs,
        character: character.id,
      });

      console.log(data)

      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };

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
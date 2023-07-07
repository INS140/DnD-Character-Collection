import Input from "../ui-kit/Input";
import TextArea from "../ui-kit/TextArea";
import Modal from "../ui-kit/Modal"
import useFetch from "../custom-hooks/useFetch";
import { useNavigate, useOutletContext } from "react-router-dom";
import useFormHandler from "../custom-hooks/useFormHandler";

export default function NoteForm() {
  const { post } = useFetch("http://localhost:5000");

  const { character } = useOutletContext()

  const navigate = useNavigate();

  const { inputs, handleChange } = useFormHandler({
    title: "",
    description: "",
  });

  const handleSubmit = async () => {
    try {
      const data = await post("/notes  ", {
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

  return <Modal
    modalId="newNote"
    header="Add A New Character Note"
    openModalText="Add New Note"
    closeModalText="Add Note"
    disableSubmit={handleDisable()}
    onCloseClick={handleSubmit}
  >
    <div className="form-container">
      <form className="form">
        <Input
          label="Title"
          name="title"
          value={inputs.title}
          onChange={handleChange}
          required
        />
        <TextArea
          label="Description"
          name="description"
          rows="5"
          value={inputs.description}
          onChange={handleChange}
          required
        />
      </form>
    </div>
  </Modal>
}

import { Link } from "react-router-dom";
import Button from "./ui-kit/Button";
import Dropdown from "./ui-kit/Dropdown"
import Modal from "./ui-kit/Modal"
import Input from "./ui-kit/Input"
import { toTitleCase } from "../helper-functions"
import useFormHandler from "./custom-hooks/useFormHandler"

export default function CharGridItem({ character, handleDelete }) {
  const { id, name, image, level, race, classType } = character

  const {inputs, handleChange, setInputs} = useFormHandler({
    entry: ''
  })

  const handleCancel = () => {
    setInputs({
      entry: ''
    })
  }

  return <div className="charGridItem">
    <Link className="itemLink" to={`/characters/${id}/`}>
      <img className="itemImage" src={image} alt="" />
      <div>
        <h2>{name}</h2>
        <p>
          Lv {level} - {race} {toTitleCase(classType)}
        </p>
      </div>
    </Link>
    <Dropdown>
      <div className="char-options">
        <Button
          className="tertiary"
          data-bs-toggle="modal"
          data-bs-target={`#delete${id}`}
        >
          Delete
        </Button>
      </div>
    </Dropdown>
    <Modal
      modalId={`delete${id}`}
      header={`Delete ${name}?`}
      className="delete-char-modal"
      closeModalText="Delete"
      disableSubmit={inputs.entry !== 'DELETE'}
      onCloseClick={() => handleDelete(id)}
      onCancelClick={handleCancel}
    >
      <h2>Are you sure you want to delete {name}?</h2>
      <Input
        label='Please enter "DELETE" to continue'
        name="entry"
        value={inputs.entry}
        onChange={handleChange}
      />
    </Modal>
  </div>
}

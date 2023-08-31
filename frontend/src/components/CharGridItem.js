import { Link } from "react-router-dom";
import Button from "./ui-kit/Button";
import Dropdown from "./ui-kit/Dropdown"
import Modal from "./ui-kit/Modal"
import { toTitleCase } from "../helper-functions"

export default function CharGridItem({ character, handleDelete }) {
  const { id, name, image, level, race, classType } = character

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
          onClick={() => handleDelete(id)}
        >
          Delete
        </Button>
      </div>
    </Dropdown>
    <Modal
      modalId={`delete${id}`}
      
    ></Modal>
  </div>
}

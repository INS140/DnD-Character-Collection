import { Link } from "react-router-dom";
import Button from "./ui-kit/Button";

export default function CharGridItem({ character, handleDelete }) {

  return <div className="charGridItem">
    <Link className="itemLink" to={`/characters/${character.id}`}>
      <img className="itemImage" src={character.image} alt="" />
      <div className="text-light text-center">
        <h2>{character.name}</h2>
        <p>
          {character.level} - {character.classType}
        </p>
        <Button className="tertiary" onClick={() => handleDelete(character.id)}>Delete</Button>
      </div>
    </Link>
  </div>
}

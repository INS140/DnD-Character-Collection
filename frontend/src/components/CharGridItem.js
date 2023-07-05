import { Link } from "react-router-dom";

export default function CharGridItem({ character }) {
  return (
    <div className="charGridItem">
      <Link className="itemLink" to={`/characters/${character.id}`}>
        <img className="itemImage" src={character.image} alt="" />
        <div className="itemText">
          <h2>{character.name}</h2>
          <p>
            {character.level} - {character.classType}
          </p>
        </div>
      </Link>
    </div>
  );
}

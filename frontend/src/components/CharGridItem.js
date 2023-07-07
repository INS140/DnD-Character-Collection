import { Link } from "react-router-dom";

export default function CharGridItem({ character, handleDelete }) {

  return <>
    { !character && <div className="charGridItem">
        <Link className="itemLink" to={`/characters/${character.id}`}>
          <img className="itemImage" src={character.image} alt="" />
          <div className="itemText">
            <h2>{character.name}</h2>
            <p>
              {character.level} - {character.classType}
            </p>
            <button className="deleteButton" onClick={() => handleDelete(character.id)}>Delete</button>
          </div>
        </Link>
      </div>
    }
  </>
}

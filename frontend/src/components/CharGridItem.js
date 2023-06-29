import { Link } from "react-router-dom"

export default function CharGridItem( { character } ) {
    return (
        <div class="charGridItem">
            <Link to={`/characters/${character.id}`}>
                <img class="itemImage" src={character.image}/>
                <h2>{character.name}</h2>
                <p>{character.level} - {character.class}</p>
            </Link>
        </div>
    )
}
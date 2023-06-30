import { Link } from "react-router-dom"

export default function CharGridItem({ character }) {
    return (
        <div class="charGridItem">
            <Link class="itemLink" to={`/characters/${character.id}`}>
                <img class="itemImage" src={character.image} />
                <div class="itemText">
                    <h2>{character.name}</h2>
                    <p>{character.level} - {character.class}</p>
                </div>
            </Link>
        </div>
    )
}
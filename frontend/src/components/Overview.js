import { useOutletContext } from "react-router-dom"

export default function Overview() {
  const { character } = useOutletContext()

  return <>
    {!character
      ? <>Loading ...</>
      : <div className="overview">
          <h1>{character.image}</h1>
          <h1>Name: {character.name}</h1>
          <h1>Class: {character.classType}</h1>
          <h1>Level: {character.level}</h1>
          <hr></hr>
          <h1>General Stats</h1>
          <div className="genStats">
            <h3 className="secondary">Health Points: <span>{character.hp}</span></h3>
            <h3 className="secondary">Armor Class: <span>{character.ac}</span></h3>
            <h3 className="secondary">Max Health Points: <span>{character.maxHp}</span></h3>
            <h3 className="secondary">Hit Dice: <span>{character.hitDice}</span></h3>
          </div>
          <hr></hr>
          <h1>Base Stats</h1>
          <div className="baseStats">
            <h3 className="secondary">Strength: <span>{character.str}</span></h3>
            <h3 className="secondary">Dexterity: <span>{character.dex}</span></h3>
            <h3 className="secondary">Constitution: <span>{character.con}</span></h3>
            <h3 className="secondary">Intelligence: <span>{character.int}</span></h3>
            <h3 className="secondary">Wisdom: <span>{character.wis}</span></h3>
            <h3 className="secondary">Charisma: <span>{character.cha}</span></h3>
          </div>
          <hr></hr>
      </div>
    }
  </>
}
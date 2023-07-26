import { useOutletContext } from "react-router-dom"

export default function Overview() {
  const { character } = useOutletContext()

  return <div className="overview">
    <h1>Overview</h1>
    { character.image && <img src={`${character.image}`} />}
    <h2>Name: {character.name}</h2>
    <h2>Class: {character.classType}</h2>
    <h2>Level: {character.level}</h2>
    <hr />
    <h2>General Stats</h2>
    <div className="genStats">
      <h3 className="secondary">HP<span>{character.hp}</span></h3>
      <h3 className="secondary">AC<span>{character.ac}</span></h3>
      <h3 className="secondary">Max HP<span>{character.maxHp}</span></h3>
      <h3 className="secondary">Hit Dice<span>{character.hitDice}</span></h3>
    </div>
    <hr />
    <h2>Ability Scores</h2>
    <div className="baseStats">
      <h3 className="secondary">STR<span>{character.str}</span></h3>
      <h3 className="secondary">DEX<span>{character.dex}</span></h3>
      <h3 className="secondary">CON<span>{character.con}</span></h3>
      <h3 className="secondary">INT<span>{character.int}</span></h3>
      <h3 className="secondary">WIS<span>{character.wis}</span></h3>
      <h3 className="secondary">CHA<span>{character.cha}</span></h3>
    </div>
    <hr />
    <div className="description">
      <h2>Description</h2>
      <p>{character.description}</p>
    </div>
  </div>
}
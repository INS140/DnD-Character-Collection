import { useOutletContext } from "react-router-dom"
import { scoreToMod, toTitleCase } from "../helper-functions"
import UpdateCharacter from "./forms/UpdateCharacter"

export default function Overview() {
  const { character, setCharacter } = useOutletContext()

  const stats = ['str', 'dex', 'con', 'int', 'wis', 'cha']

  return <div className="overview">
    <div className="info">
      <h1 className="name">{character.name}</h1>
      <UpdateCharacter character={character} setCharacter={setCharacter} />
      <hr />
      {character.image && <>
        <img src={`${character.image}`} alt={`${character.name}`} />
        <hr />
      </>}
      <h2>Lv {character.level} {character.race} {toTitleCase(character.classType)}</h2>
    </div>
    <div className="ability-scores">
      <div className="header">
        <h3>Ability Scores</h3>
        <hr />
      </div>
      {stats.map(stat => {
        const mod = scoreToMod(character[stat])

        return <div key={stat} className="secondary scores">
          <h4>{stat.toUpperCase()}</h4>
          <p className="score">{character[stat]}</p>
          <p className="mod">{mod > 0 && '+'}{mod}</p>
        </div>
      })}
    </div>
    <div className="description">
      <div className="header">
        <h3>Description</h3>
        <hr />
      </div>
      <p>{character.description}</p>
    </div>
  </div>
}
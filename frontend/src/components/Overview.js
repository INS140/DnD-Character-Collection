import { useOutletContext } from "react-router-dom"
import { scoreToMod, toTitleCase } from "../helper-functions"

export default function Overview() {
  const { character } = useOutletContext()

  const stats = ['str', 'dex', 'con', 'int', 'wis', 'cha']

  return <div className="overview">
    <h1>{toTitleCase(character.name)}</h1>
    { character.image && <img src={`${character.image}`} alt={`${character.name}`} />}
    <h2>Class: {character.classType}</h2>
    <h2>Lv: {character.level}</h2>
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
import { useOutletContext } from "react-router-dom"
import { scoreToMod } from "../helper-functions"

export default function Overview() {
  const { character } = useOutletContext()
  const stats = ['str', 'dex', 'con', 'int', 'wis', 'cha']

  return <div className="overview">
    <h1>Overview</h1>
    { character.image && <img src={`${character.image}`} />}
    <h2>Name: {character.name}</h2>
    <h2>Class: {character.classType}</h2>
    <h2>Level: {character.level}</h2>
    <hr />
    <h2>Ability Scores</h2>
    <div className="ability-scores" >
      {stats.map(stat => {
        return <div key={stat} className="secondary scores">
          <h3>{stat.toUpperCase()}</h3>
          <p className="score">{character[stat]}</p>
          <p className="mod">{scoreToMod(character[stat])}</p>
        </div>
      })}
    </div>
    <hr />
    <div className="description">
      <h2>Description</h2>
      <p>{character.description}</p>
    </div>
  </div>
}
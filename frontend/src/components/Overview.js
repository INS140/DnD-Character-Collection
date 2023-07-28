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
    {/* <h2>General Stats</h2>
    <div className="genStats">
      <h3 className="secondary">HP<span>{character.hp}</span></h3>
      <h3 className="secondary">AC<span>{character.ac}</span></h3>
      <h3 className="secondary">Max HP<span>{character.maxHp}</span></h3>
      <h3 className="secondary">Hit Dice<span>{character.hitDice}</span></h3>
    </div>
    <hr /> */}
    <h2>Ability Scores</h2>
    <div className="baseOverStats" >
      {stats.map(stat => {
        return <div className="secondary abSc">
          <h3>{stat.toUpperCase()}</h3>
          <p>{character[stat]}</p>
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
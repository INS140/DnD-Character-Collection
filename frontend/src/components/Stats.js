import { useOutletContext } from "react-router-dom"
import HPDisplay from "./HPDisplay"
import Skills from "./Skills"
import AbilityScores from "./AbilityScores"

export default function Stats() {
  const { character } = useOutletContext()

  return <div className="stats">
    <h1>Stats</h1>
    <hr />
    <div className="genStats">
      <div className="secondary stat ac">
        <h3>AC</h3>
        <p>{character.ac}</p>
      </div>
      <HPDisplay character={character}/>
      <div className="secondary stat hd">
        <h3>Hit Dice</h3>
        <p>{character.hitDice}</p>
      </div>
    </div>
    <div className="other secondary stat">
      <div>
        <h3>Speed</h3>
        <p>{character.speed}</p>
      </div>
      <div>
        <h3>Initiative</h3>
        <p>{character.init > 0 && '+'}{character.init}</p>
      </div>
      <div>
        <h3>Proficiency</h3>
        <p>+{character.prof}</p>
      </div>
      <div>
        <h3>Passive WIS</h3>
        <p>0</p>
      </div>
    </div>
    <h2>Ability Scores</h2>
    <hr />
    <AbilityScores character={character} />
    <h2>Skills</h2>
    <hr />
    <Skills character={character} />
  </div>
}
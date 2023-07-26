import { useOutletContext } from "react-router-dom"
import Modal from './ui-kit/Modal'
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
      <div
        className="secondary stat hp"
        data-bs-toggle="modal"
        data-bs-target="#updateHP"
      >
        <div className="current">
          <h3>HP</h3>
          <p>{character.hp}</p>
        </div>
        <hr />
        <div className="max">
          <h4>Max HP</h4>
          <p>{character.maxHp}</p>
        </div>
      </div>
      <Modal
        modalId="updateHP"
        header="Update HP"
        closeModalText="Apply"
      >
        <h2>{character.hp}</h2>
        <hr />
        <h4>Max HP</h4>
        <p>{character.maxHp}</p>
      </Modal>
      <div className="secondary stat hd">
        <h3>Hit Dice</h3>
        <p>{character.hitDice}</p>
      </div>
    </div>
    <div className="other">
      <div className="secondary stat">
        <h3>Speed</h3>
        <p>{character.speed}</p>
      </div>
      <div className="secondary stat">
        <h3>Initiative</h3>
        <p>{character.init}</p>
      </div>
      <div className="secondary stat">
        <h3>Proficiency</h3>
        <p>+{character.prof}</p>
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
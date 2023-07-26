import { Fragment } from "react"
import Modal from "./ui-kit/Modal"
import Input from "./ui-kit/Input"
import { scoreToMod } from "../helper-functions"

export default function AbilityScores({ character }) {
  const stats = ['str', 'dex', 'con', 'int', 'wis', 'cha']

  return <div className="abilityScores">
    { stats.map(stat => {
      const mod = scoreToMod(character[stat])
      const saveMod = character.savingThrows[stat]
        ? mod + character.prof
        : mod

      return <Fragment key={stat}>
        <div
          key={stat}
          className="secondary stat"
          data-bs-toggle="modal"
          data-bs-target={`#update${stat}`}
        >
          <h3 className="statName">{stat.toUpperCase()}</h3>
          <hr />
          <div className="values">
            <p className="score">{character[stat]}</p>
            <p className="mod">{mod > 0 && '+'}{mod}</p>
            <p className="save">
              Save &nbsp;
              <span>{saveMod > 0 && '+'}{saveMod}</span>
            </p>
          </div>
        </div>
        <Modal
          modalId={`update${stat}`}
          header={stat.toUpperCase()}
          closeModalText="Save"
        >
          <p>{character[stat]}</p>
          <p>{mod > 0 && '+'}{mod}</p>
          <p>Misc Save Bonus</p>
          <Input
            label={`Proficient in Save (+${character.prof})`}
            type="checkbox"
            defaultChecked={character.savingThrows[stat]}
          />
        </Modal>
      </Fragment>
    })}
  </div>
}
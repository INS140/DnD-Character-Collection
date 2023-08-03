import Modal from "./ui-kit/Modal"
import Select from "./ui-kit/Select"
import Input from "./ui-kit/Input"
import { scoreToMod, toTitleCase, getFullScore } from "../helper-functions"
import useFormHandler from "./custom-hooks/useFormHandler"
import useFetch from "./custom-hooks/useFetch"
import { useState } from "react"

export default function PassiveStat({ character, setCharacter }) {
  const { put } = useFetch('https://dnd-character-collection-backend.vercel.app')

  const { passiveMod } = character

  const getAssociatedSkills = score => {
    return Object.keys(character.skills).filter(skill => character.skills[skill].score === score)
  }

  const { inputs, setInputs, handleChange } = useFormHandler({
    ...passiveMod
  })

  const [ associatedSkills, setAssociatedSkills ] = useState(getAssociatedSkills(inputs.score))

  const handleScoreChange = e => {
    const { value } = e.target

    const skills = getAssociatedSkills(value)

    setAssociatedSkills(skills)

    setInputs({...inputs, score: value, skill: skills[0]})
  }

  const handleMiscChange = e => {
    const { value } = e.target

    const bonus = value === ''
      ? ''
      : Number(value) > 30
        ? 30
        : Number(value) < -30
          ? -30
          : Number(value)

    setInputs({...inputs, misc: bonus})
  }

  const handleReset = mod => {
    const resetMod = mod ? mod : passiveMod

    setInputs({...resetMod})
    setAssociatedSkills(getAssociatedSkills(resetMod.score))
  }

  const handleSave = async () => {
    const { prof, init, ...charData } = character

    try {
      const newPassiveMod = {
        ...inputs,
        misc: inputs.misc === '' ? 0 : inputs.misc
      }

      const updatedCharacter = {
        ...charData,
        passiveMod: newPassiveMod
      }

      await put(`/characters/${character.id}`, updatedCharacter)

      setCharacter({...updatedCharacter, prof, init})

      handleReset(newPassiveMod)
    } catch (err) {
      console.log('save error', err)
    }
  }

  const stats = ['str', 'dex', 'int', 'wis', 'cha']

  const skillBonus = character.skills[passiveMod.skill].expert ? character.prof * 2 : character.skills[passiveMod.skill].prof ? character.prof : 0
  const mod = 10 + scoreToMod(character[passiveMod.score]) + skillBonus + passiveMod.misc

  const tempSkillBonus = character.skills[inputs.skill].expert ? character.prof * 2 : character.skills[inputs.skill].prof ? character.prof : 0
  const scoreMod = scoreToMod(character[inputs.score])
  const tempMod = 10 + scoreMod + tempSkillBonus + inputs.misc

  return <>
    <div
      className="secondary other-stat"
      data-bs-toggle="modal"
      data-bs-target="#updatePassive"
    >
      <h3>Passive {passiveMod.score.toUpperCase()}</h3>
      <p>{mod}</p>
    </div>
    <Modal
      modalId="updatePassive"
      header="Passive Skill Check"
      className="passive-modal"
      closeModalText="Save"
      onCancelClick={() => handleReset()}
      onCloseClick={handleSave}
    >
      <div className="secondary stat mod">
        <h2>{tempMod}</h2>
      </div>
      <div className="secondary stat options">
        <div className="score">
          <h3>Score</h3>
          <Select
            name="score"
            value={inputs.score}
            onChange={handleScoreChange}
          >
            {stats.map(stat => {
              return <option
                key={stat}
                value={stat}
              >
                {toTitleCase(getFullScore(stat))}
              </option>
            })}
          </Select>
        </div>
        <div className="skill">
          <h3>Skill</h3>
          <Select
            name="skill"
            value={inputs.skill}
            onChange={handleChange}
          >
            {associatedSkills.map(skill => {
              return <option
                key={skill}
                value={skill}
              >
                {toTitleCase(skill)}
              </option>
            })}
          </Select>
        </div>
      </div>
      <div className="secondary stat add-up">
        10 +
        <div>
          <h3>{toTitleCase(inputs.skill)}</h3>
          <p>{tempSkillBonus > 0 && '+'}{tempSkillBonus}</p>
        </div>
        <div>
          <h3>{toTitleCase(getFullScore(inputs.score))}</h3>
          <p>{scoreMod > 0 && '+'}{scoreMod}</p>
        </div>
        <div>
          <h3>Misc Bonus</h3>
          <Input
            type="number"
            name="misc"
            value={inputs.misc}
            onChange={handleMiscChange}
            pattern="\d*"
          />
        </div>
      </div>
    </Modal>
  </>
}